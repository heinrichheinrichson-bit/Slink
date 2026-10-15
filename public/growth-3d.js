(()=>{var ql=0,wo=1,Yl=2;var Ao=1,Br=2,on=3,xn=0,wt=1,Ht=2,Sn=0,Jn=1,Co=2,Ro=3,Io=4,Zl=5,Dn=100,Jl=101,$l=102,Kl=103,jl=104,Ql=200,ec=201,tc=202,nc=203,dr=204,fr=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,hc=213,uc=214,zr=0,kr=1,Vr=2,$n=3,Hr=4,Gr=5,Wr=6,Xr=7,Po=0,dc=1,fc=2,bn=0,pc=1,mc=2,gc=3,qr=4,_c=5,xc=6,yc=7;var Lo=300,ri=301,ai=302,Yr=303,Zr=304,Ds=306,wi=1e3,Ln=1001,pr=1002,Vt=1003,vc=1004;var Us=1005;var $t=1006,Jr=1007;var kn=1008;var en=1009,Do=1010,Uo=1011,Bi=1012,$r=1013,Vn=1014,ln=1015,zi=1016,Kr=1017,jr=1018,ki=1020,No=35902,Fo=35899,Oo=1021,Bo=1022,Gt=1023,Ai=1026,Vi=1027,zo=1028,Qr=1029,ko=1030,ea=1031;var ta=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,na=35840,ia=35841,sa=35842,ra=35843,aa=36196,oa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,xa=37817,ya=37818,va=37819,Ma=37820,Sa=37821,ba=36492,Ea=36494,Ta=36495,wa=36283,Aa=36284,Ca=36285,Ra=36286;var is=2300,mr=2301,ur=2302,uo=2400,fo=2401,po=2402;var Mc=3200,Sc=3201;var Vo=0,bc=1,En="",gt="srgb",Kn="srgb-linear",ss="linear",Qe="srgb";var Zn=7680;var mo=519,Ec=512,Tc=513,wc=514,Ho=515,Ac=516,Cc=517,Rc=518,Ic=519,go=35044;var Go="300 es",Zt=2e3,rs=2001;var yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ba=Math.PI/180,gr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Sh(i,e){return(i%e+e)%e}function za(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==m||u!==g){let f=1-o,h=c*p+l*m+u*g+d*_,T=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){let L=Math.sqrt(v),P=Math.atan2(L,h*T);f=Math.sin(f*P)/L,o=Math.sin(o*P)/L}let x=o*T;if(c=c*f+p*x,l=l*f+m*x,u=u*f+g*x,d=d*f+_*x,f===1-o){let L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*m-l*p,e[t+1]=c*g+u*p+l*d-o*m,e[t+2]=l*g+u*m+o*p-c*d,e[t+3]=u*g-o*d-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d+p*m*g;break;case"YZX":this._x=p*u*d+l*m*g,this._y=l*m*d+p*u*g,this._z=l*u*g-p*m*d,this._w=l*u*d-p*m*g;break;case"XZY":this._x=p*u*d-l*m*g,this._y=l*m*d-p*u*g,this._z=l*u*g+p*m*d,this._w=l*u*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new X,vl=new vn,Ve=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],p=n[2],m=n[5],g=n[8],_=s[0],f=s[3],h=s[6],T=s[1],v=s[4],x=s[7],L=s[2],P=s[5],D=s[8];return r[0]=a*_+o*T+c*L,r[3]=a*f+o*v+c*P,r[6]=a*h+o*x+c*D,r[1]=l*_+u*T+d*L,r[4]=l*f+u*v+d*P,r[7]=l*h+u*x+d*D,r[2]=p*_+m*T+g*L,r[5]=p*f+m*v+g*P,r[8]=p*h+m*x+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,p=o*c-u*r,m=l*r-a*c,g=t*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Va=new Ve;function Wo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pc(){let i=as("canvas");return i.style.display="block",i}var Ml={};function Ci(i){i in Ml||(Ml[i]=!0,console.warn(i))}function Lc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bh(){let i={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kn]:{primaries:e,whitePoint:n,transfer:ss,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}var $e=bh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fi,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=as("canvas")),fi.width=e.width,fi.height=e.height;let s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eh=0,Ri=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ha(s[a].image)):r.push(Ha(s[a]))}else r=Ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Th=0,Ga=new X,It=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=$t,a=kn,o=Gt,c=en,l=i.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Hi(),this.name="",this.source=new Ri(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Lo;It.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],m=c[5],g=c[9],_=c[2],f=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(m+1)/2,L=(h+1)/2,P=(u+p)/4,D=(d+_)/4,F=(g+f)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=D/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=P/s,r=F/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=D/r,s=F/r),this.set(n,s,r,t),this}let T=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(d-_)/T,this.z=(p-u)/T,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xr=class extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new It(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ri(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends xr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},os=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yr=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Xs.subVectors(this.max,$i),pi.subVectors(e.a,$i),mi.subVectors(e.b,$i),gi.subVectors(e.c,$i),Tn.subVectors(mi,pi),wn.subVectors(gi,mi),Wn.subVectors(pi,gi);let t=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Wn.z,Wn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Wn.z,0,-Wn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Wn.y,Wn.x,0];return!Wa(t,pi,mi,gi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,pi,mi,gi,Xs))?!1:(qs.crossVectors(Tn,wn),t=[qs.x,qs.y,qs.z],Wa(t,pi,mi,gi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},un=[new X,new X,new X,new X,new X,new X,new X,new X],Xt=new X,Ws=new rn,pi=new X,mi=new X,gi=new X,Tn=new X,wn=new X,Wn=new X,$i=new X,Xs=new X,qs=new X,Xn=new X;function Wa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var wh=new rn,Ki=new X,Xa=new X,Ii=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Xa)),this.expandByPoint(Ki.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dn=new X,qa=new X,Ys=new X,An=new X,Ya=new X,Zs=new X,Za=new X,ls=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),An.copy(this.origin).sub(qa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=An.dot(this.direction),c=-An.dot(Ys),l=An.lengthSq(),u=Math.abs(1-a*a),d,p,m,g;if(u>0)if(d=a*c-o,p=a*o-c,g=r*u,d>=0)if(p>=-g)if(p<=g){let _=1/u;d*=_,p*=_,m=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qa).addScaledVector(Ys,p),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,r){Ya.subVectors(t,e),Zs.subVectors(n,e),Za.crossVectors(Ya,Zs);let a=this.direction.dot(Za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);let c=o*this.direction.dot(Zs.crossVectors(An,Zs));if(c<0)return null;let l=o*this.direction.dot(Ya.cross(An));if(l<0||c+l>a)return null;let u=-o*An.dot(Za);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,a,o,c,l,u,d,p,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,p,m,g,_,f)}set(e,t,n,s,r,a,o,c,l,u,d,p,m,g,_,f){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=_,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=p-_*l,t[9]=-o*c,t[2]=_-p*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,m=c*d,g=l*u,_=l*d;t[0]=p+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,m=c*d,g=l*u,_=l*d;t[0]=p-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-p*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=p-_*d}else if(e.order==="XZY"){let p=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,Ch)}lookAt(e,t,n){let s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Cn.crossVectors(n,Dt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Cn.crossVectors(n,Dt)),Cn.normalize(),Js.crossVectors(Dt,Cn),s[0]=Cn.x,s[4]=Js.x,s[8]=Dt.x,s[1]=Cn.y,s[5]=Js.y,s[9]=Dt.y,s[2]=Cn.z,s[6]=Js.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],h=n[14],T=n[3],v=n[7],x=n[11],L=n[15],P=s[0],D=s[4],F=s[8],E=s[12],b=s[1],B=s[5],k=s[9],te=s[13],N=s[2],G=s[6],z=s[10],J=s[14],I=s[3],ie=s[7],ce=s[11],de=s[15];return r[0]=a*P+o*b+c*N+l*I,r[4]=a*D+o*B+c*G+l*ie,r[8]=a*F+o*k+c*z+l*ce,r[12]=a*E+o*te+c*J+l*de,r[1]=u*P+d*b+p*N+m*I,r[5]=u*D+d*B+p*G+m*ie,r[9]=u*F+d*k+p*z+m*ce,r[13]=u*E+d*te+p*J+m*de,r[2]=g*P+_*b+f*N+h*I,r[6]=g*D+_*B+f*G+h*ie,r[10]=g*F+_*k+f*z+h*ce,r[14]=g*E+_*te+f*J+h*de,r[3]=T*P+v*b+x*N+L*I,r[7]=T*D+v*B+x*G+L*ie,r[11]=T*F+v*k+x*z+L*ce,r[15]=T*E+v*te+x*J+L*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],m=e[14],g=e[3],_=e[7],f=e[11],h=e[15];return g*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*m-n*c*m)+_*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*u-r*c*u)+f*(+t*l*d-t*o*m-r*a*d+n*a*m+r*o*u-n*l*u)+h*(-s*o*u-t*c*d+t*o*p+s*a*d-n*a*p+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],m=e[11],g=e[12],_=e[13],f=e[14],h=e[15],T=d*f*l-_*p*l+_*c*m-o*f*m-d*c*h+o*p*h,v=g*p*l-u*f*l-g*c*m+a*f*m+u*c*h-a*p*h,x=u*_*l-g*d*l+g*o*m-a*_*m-u*o*h+a*d*h,L=g*d*c-u*_*c-g*o*p+a*_*p+u*o*f-a*d*f,P=t*T+n*v+s*x+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=T*D,e[1]=(_*p*r-d*f*r-_*s*m+n*f*m+d*s*h-n*p*h)*D,e[2]=(o*f*r-_*c*r+_*s*l-n*f*l-o*s*h+n*c*h)*D,e[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*m-n*c*m)*D,e[4]=v*D,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*h+t*p*h)*D,e[6]=(g*c*r-a*f*r-g*s*l+t*f*l+a*s*h-t*c*h)*D,e[7]=(a*p*r-u*c*r+u*s*l-t*p*l-a*s*m+t*c*m)*D,e[8]=x*D,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*h-t*d*h)*D,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*h+t*o*h)*D,e[11]=(u*o*r-a*d*r-u*n*l+t*d*l+a*n*m-t*o*m)*D,e[12]=L*D,e[13]=(u*_*s-g*d*s+g*n*p-t*_*p-u*n*f+t*d*f)*D,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*f-t*o*f)*D,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*p+t*o*p)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,p=r*l,m=r*u,g=r*d,_=a*u,f=a*d,h=o*d,T=c*l,v=c*u,x=c*d,L=n.x,P=n.y,D=n.z;return s[0]=(1-(_+h))*L,s[1]=(m+x)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(m-x)*P,s[5]=(1-(p+h))*P,s[6]=(f+T)*P,s[7]=0,s[8]=(g+v)*D,s[9]=(f-T)*D,s[10]=(1-(p+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);let l=1/r,u=1/a,d=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Zt,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Zt)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===rs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zt,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Zt)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===rs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_i=new X,qt=new ct,Ah=new X(0,0,0),Ch=new X(1,1,1),Cn=new X,Js=new X,Dt=new X,El=new ct,Tl=new vn,Kt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Pi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rh=0,wl=new X,xi=new vn,fn=new ct,$s=new X,ji=new X,Ih=new X,Ph=new vn,Al=new X(1,0,0),Cl=new X(0,1,0),Rl=new X(0,0,1),Il={type:"added"},Lh={type:"removed"},yi={type:"childadded",child:null},Ja={type:"childremoved",child:null},St=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new X,t=new Kt,n=new vn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ji,$s,this.up):fn.lookAt($s,ji,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(fn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),yi.child=e,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new X(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=new X,pn=new X,$a=new X,mn=new X,vi=new X,Mi=new X,Pl=new X,Ka=new X,ja=new X,Qa=new X,eo=new ht,to=new ht,no=new ht,Pn=class i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),pn.subVectors(n,t),$a.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(pn),c=Yt.dot($a),l=pn.dot(pn),u=pn.dot($a),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(l*c-o*u)*p,g=(a*u-o*c)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return eo.setScalar(0),to.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,n),no.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(to,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;vi.subVectors(s,n),Mi.subVectors(r,n),Ka.subVectors(e,n);let c=vi.dot(Ka),l=Mi.dot(Ka);if(c<=0&&l<=0)return t.copy(n);ja.subVectors(e,s);let u=vi.dot(ja),d=Mi.dot(ja);if(u>=0&&d<=u)return t.copy(s);let p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(vi,a);Qa.subVectors(e,r);let m=vi.dot(Qa),g=Mi.dot(Qa);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Mi,o);let f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Pl.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Pl,o);let h=1/(f+_+p);return a=_*h,o=p*h,t.copy(n).addScaledVector(vi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Sh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=io(a,r,e+1/3),this.g=io(a,r,e),this.b=io(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return $e.workingToColorSpace(vt.copy(this),e),Math.round(Ye(vt.r*255,0,255))*65536+Math.round(Ye(vt.g*255,0,255))*256+Math.round(Ye(vt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(vt.copy(this),t);let n=vt.r,s=vt.g,r=vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=gt){$e.workingToColorSpace(vt.copy(this),e);let t=vt.r,n=vt.g,s=vt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Ks);let n=za(Rn.h,Ks.h,t),s=za(Rn.s,Ks.s,t),r=za(Rn.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new Je;Je.NAMES=Dc;var Dh=0,Un=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Jn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$n&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jn=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dt=new X,js=new ue,Uh=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}};var cs=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hs=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nh=0,kt=new ct,so=new St,Si=new X,Ut=new rn,Qi=new rn,mt=new X,Tt=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wo(e)?hs:cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ut.min,Qi.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Qi.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Qi.min),Ut.expandByPoint(Qi.max))}Ut.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),c&&(Si.fromBufferAttribute(e,l),mt.add(Si)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new X,c[F]=new X;let l=new X,u=new X,d=new X,p=new ue,m=new ue,g=new ue,_=new X,f=new X;function h(F,E,b){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),p.fromBufferAttribute(r,F),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(l),d.sub(l),m.sub(p),g.sub(p);let B=1/(m.x*g.y-g.x*m.y);isFinite(B)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(B),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(B),o[F].add(_),o[E].add(_),o[b].add(_),c[F].add(f),c[E].add(f),c[b].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,E=T.length;F<E;++F){let b=T[F],B=b.start,k=b.count;for(let te=B,N=B+k;te<N;te+=3)h(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let v=new X,x=new X,L=new X,P=new X;function D(F){L.fromBufferAttribute(s,F),P.copy(L);let E=o[F];v.copy(E),v.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(P,E);let B=x.dot(c[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,B)}for(let F=0,E=T.length;F<E;++F){let b=T[F],B=b.start,k=b.count;for(let te=B,N=B+k;te<N;te+=3)D(e.getX(te+0)),D(e.getX(te+1)),D(e.getX(te+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,p=new l.constructor(c.length*u),m=0,g=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)p[g++]=l[m++]}return new Nt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let p=l[u],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new ct,qn=new ls,Qs=new Ii,Dl=new X,er=new X,tr=new X,nr=new X,ro=new X,ir=new X,Ul=new X,sr=new X,xt=class extends St{constructor(e=new Tt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(ro.fromBufferAttribute(d,e),a?ir.addScaledVector(ro,u):ir.addScaledVector(ro.sub(t),u))}t.add(ir)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(Qs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Qs,Dl)===null||qn.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ll.copy(r).invert(),qn.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let f=p[g],h=a[f.materialIndex],T=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=T,L=v;x<L;x+=3){let P=o.getX(x),D=o.getX(x+1),F=o.getX(x+2);s=rr(this,h,e,n,l,u,d,P,D,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,h=_;f<h;f+=3){let T=o.getX(f),v=o.getX(f+1),x=o.getX(f+2);s=rr(this,a,e,n,l,u,d,T,v,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){let f=p[g],h=a[f.materialIndex],T=Math.max(f.start,m.start),v=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let x=T,L=v;x<L;x+=3){let P=x,D=x+1,F=x+2;s=rr(this,h,e,n,l,u,d,P,D,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,h=_;f<h;f+=3){let T=f,v=f+1,x=f+2;s=rr(this,a,e,n,l,u,d,T,v,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Fh(i,e,t,n,s,r,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===xn,o),c===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sr);return l<t.near||l>t.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,er),i.getVertexPosition(c,tr),i.getVertexPosition(l,nr);let u=Fh(i,e,t,n,er,tr,nr,Ul);if(u){let d=new X;Pn.getBarycoord(Ul,er,tr,nr,d),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,d,new ue)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,d,new ue)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new X,materialIndex:0};Pn.getNormal(er,tr,nr,p.normal),u.face=p,u.barycoord=d}return u}var Nn=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(d,2));function g(_,f,h,T,v,x,L,P,D,F,E){let b=x/D,B=L/F,k=x/2,te=L/2,N=P/2,G=D+1,z=F+1,J=0,I=0,ie=new X;for(let ce=0;ce<z;ce++){let de=ce*B-te;for(let Me=0;Me<G;Me++){let Se=Me*b-k;ie[_]=Se*T,ie[f]=de*v,ie[h]=N,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[f]=0,ie[h]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Me/D),d.push(1-ce/F),J+=1}}for(let ce=0;ce<F;ce++)for(let de=0;de<D;de++){let Me=p+de+G*ce,Se=p+de+G*(ce+1),W=p+(de+1)+G*(ce+1),U=p+(de+1)+G*ce;c.push(Me,Se,U),c.push(Se,W,U),I+=6}o.addGroup(m,I,E),m+=I,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function bt(i){let e={};for(let t=0;t<i.length;t++){let n=oi(i[t]);for(let s in n)e[s]=n[s]}return e}function Oh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Uc={clone:oi,merge:bt},Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},us=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Zt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},In=new X,Nl=new ue,Fl=new ue,Rt=class extends us{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Fl),t.subVectors(Fl,Nl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bi=-90,Ei=1,vr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(bi,Ei,e,t);s.layers=this.layers,this.add(s);let r=new Rt(bi,Ei,e,t);r.layers=this.layers,this.add(r);let a=new Rt(bi,Ei,e,t);a.layers=this.layers,this.add(a);let o=new Rt(bi,Ei,e,t);o.layers=this.layers,this.add(o);let c=new Rt(bi,Ei,e,t);c.layers=this.layers,this.add(c);let l=new Rt(bi,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ds=class extends It{constructor(e=[],t=ri,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ds(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Sn});r.uniforms.tEquirect.value=t;let a=new xt(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=$t),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Jt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},kh={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),h=this._getHandJoint(l,_);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var fs=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ao=new X,Vh=new X,Hh=new Ve,nn=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ao.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hh.getNormalMatrix(e),s=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new Ii,Gh=new ue(.5,.5),ar=new X,Di=class{constructor(e=new nn,t=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],p=r[6],m=r[7],g=r[8],_=r[9],f=r[10],h=r[11],T=r[12],v=r[13],x=r[14],L=r[15];if(s[0].setComponents(l-a,m-u,h-g,L-T).normalize(),s[1].setComponents(l+a,m+u,h+g,L+T).normalize(),s[2].setComponents(l+o,m+d,h+_,L+v).normalize(),s[3].setComponents(l-o,m-d,h-_,L-v).normalize(),n)s[4].setComponents(c,p,f,x).normalize(),s[5].setComponents(l-c,m-p,h-f,L-x).normalize();else if(s[4].setComponents(l-c,m-p,h-f,L-x).normalize(),t===Zt)s[5].setComponents(l+c,m+p,h+f,L+x).normalize();else if(t===rs)s[5].setComponents(c,p,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);let t=Gh.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ar.x=s.normal.x>0?e.max.x:e.min.x,ar.y=s.normal.y>0?e.max.y:e.min.y,ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fn=class extends It{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ps=class extends It{constructor(e,t,n=Vn,s,r,a,o=Vt,c=Vt,l,u=Ai,d=1){if(u!==Ai&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ri(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ms=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var gs=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],m=[],g=0,_=[],f=n/2,h=0;T(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function T(){let x=new X,L=new X,P=0,D=(t-e)/n;for(let F=0;F<=r;F++){let E=[],b=F/r,B=b*(t-e)+e;for(let k=0;k<=s;k++){let te=k/s,N=te*c+o,G=Math.sin(N),z=Math.cos(N);L.x=B*G,L.y=-b*n+f,L.z=B*z,d.push(L.x,L.y,L.z),x.set(G,D,z).normalize(),p.push(x.x,x.y,x.z),m.push(te,1-b),E.push(g++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){let b=_[E][F],B=_[E+1][F],k=_[E+1][F+1],te=_[E][F+1];(e>0||E!==0)&&(u.push(b,B,te),P+=3),(t>0||E!==r-1)&&(u.push(B,k,te),P+=3)}l.addGroup(h,P,0),h+=P}function v(x){let L=g,P=new ue,D=new X,F=0,E=x===!0?e:t,b=x===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,f*b,0),p.push(0,b,0),m.push(.5,.5),g++;let B=g;for(let k=0;k<=s;k++){let N=k/s*c+o,G=Math.cos(N),z=Math.sin(N);D.x=E*z,D.y=f*b,D.z=E*G,d.push(D.x,D.y,D.z),p.push(0,b,0),P.x=G*.5+.5,P.y=z*.5*b+.5,m.push(P.x,P.y),g++}for(let k=0;k<s;k++){let te=L+k,N=B+k;x===!0?u.push(N,N+1,te):u.push(N+1,N,te),F+=3}l.addGroup(h,F,x===!0?1:2),h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ft=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(a-u)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ue:new X);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new X,s=[],r=[],a=[],o=new X,c=new ct;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new X)}r[0]=new X,a[0]=new X;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ye(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ui=class extends Ft{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*u-m*d+this.aX,l=p*d+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sr=class extends Ui{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qo(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let p=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+d)+(c-o)/d;p*=u,m*=u,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var or=new X,oo=new qo,lo=new qo,co=new qo,Ni=class extends Ft{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new X){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),l=or);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=or),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),oo.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,g,_,f),lo.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,g,_,f),co.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),lo.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),co.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return n.set(oo.calc(c),lo.calc(c),co.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ol(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Wh(i,e){let t=1-i;return t*t*e}function Xh(i,e){return 2*(1-i)*i*e}function qh(i,e){return i*i*e}function ts(i,e,t,n){return Wh(i,e)+Xh(i,t)+qh(i,n)}function Yh(i,e){let t=1-i;return t*t*t*e}function Zh(i,e){let t=1-i;return 3*t*t*i*e}function Jh(i,e){return 3*(1-i)*i*i*e}function $h(i,e){return i*i*i*e}function ns(i,e,t,n,s){return Yh(i,e)+Zh(i,t)+Jh(i,n)+$h(i,s)}var _s=class extends Ft{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(e,s.x,r.x,a.x,o.x),ns(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},br=class extends Ft{constructor(e=new X,t=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new X){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(e,s.x,r.x,a.x,o.x),ns(e,s.y,r.y,a.y,o.y),ns(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xs=class extends Ft{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends Ft{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ys=class extends Ft{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(e,s.x,r.x,a.x),ts(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vs=class extends Ft{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(e,s.x,r.x,a.x),ts(e,s.y,r.y,a.y),ts(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends Ft{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ol(o,c.x,l.x,u.x,d.x),Ol(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Tr=Object.freeze({__proto__:null,ArcCurve:Sr,CatmullRomCurve3:Ni,CubicBezierCurve:_s,CubicBezierCurve3:br,EllipseCurve:Ui,LineCurve:xs,LineCurve3:Er,QuadraticBezierCurve:ys,QuadraticBezierCurve3:vs,SplineCurve:Ms}),wr=class extends Ft{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Tr[s.type]().fromJSON(s))}return this}},an=class extends wr{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new xs(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ys(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new _s(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ms(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ui(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends an{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new an().fromJSON(s))}return this}};function Kh(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nc(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=nu(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<s;p+=t){let m=i[p],g=i[p+1];m<o&&(o=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return Ss(r,a,t,o,c,l,0),a}function Nc(i,e,t,n,s){let r;if(s===fu(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Bl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Bl(a/n|0,i[a],i[a+1],r);return r&&Fi(r,r.next)&&(Es(r),r=r.next),r}function Qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fi(t,t.next)||lt(t.prev,t,t.next)===0)){if(Es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ss(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ou(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Qh(i,n,s,r):jh(i)){e.push(c.i,i.i,l.i),Es(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=eu(Qn(i),e),Ss(i,e,t,n,s,r,2)):a===2&&tu(i,e,t,n,s,r):Ss(Qn(i),e,t,n,s,r,1);break}}}function jh(i){let e=i.prev,t=i,n=i.next;if(lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),p=Math.max(s,r,a),m=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&es(s,o,r,c,a,l,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qh(i,e,t,n){let s=i.prev,r=i,a=i.next;if(lt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,p=a.y,m=Math.min(o,c,l),g=Math.min(u,d,p),_=Math.max(o,c,l),f=Math.max(u,d,p),h=_o(m,g,e,t,n),T=_o(_,f,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=h&&x&&x.z<=T;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&es(o,u,c,d,l,p,v.x,v.y)&&lt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&es(o,u,c,d,l,p,x.x,x.y)&&lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=h;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&es(o,u,c,d,l,p,v.x,v.y)&&lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=T;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&es(o,u,c,d,l,p,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function eu(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Fi(n,s)&&Oc(n,t,t.next,s)&&bs(n,s)&&bs(s,n)&&(e.push(n.i,t.i,s.i),Es(t),Es(t.next),t=i=s),t=t.next}while(t!==i);return Qn(t)}function tu(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hu(a,o)){let c=Bc(a,o);a=Qn(a,a.next),c=Qn(c,c.next),Ss(a,e,t,n,s,r,0),Ss(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function nu(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Nc(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(cu(l))}s.sort(iu);for(let r=0;r<s.length;r++)t=su(s[r],t);return t}function iu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function su(i,e){let t=ru(i,e);if(!t)return e;let n=Bc(t,i);return Qn(n,n.next),Qn(t,t.next)}function ru(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Fi(i,t))return t;do{if(Fi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Fc(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);bs(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&au(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function au(i,e){return lt(i.prev,i,e.prev)<0&&lt(e.next,i,i.next)<0}function ou(i,e,t,n){let s=i;do s.z===0&&(s.z=_o(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lu(s)}function lu(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _o(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fc(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function es(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Fc(i,e,t,n,s,r,a,o)}function hu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!uu(i,e)&&(bs(i,e)&&bs(e,i)&&du(i,e)&&(lt(i.prev,i,e.prev)||lt(i,e.prev,e))||Fi(i,e)&&lt(i.prev,i,i.next)>0&&lt(e.prev,e,e.next)>0)}function lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fi(i,e){return i.x===e.x&&i.y===e.y}function Oc(i,e,t,n){let s=cr(lt(i,e,t)),r=cr(lt(i,e,n)),a=cr(lt(t,n,i)),o=cr(lt(t,n,e));return!!(s!==r&&a!==o||s===0&&lr(i,t,e)||r===0&&lr(i,n,e)||a===0&&lr(t,i,n)||o===0&&lr(t,e,n))}function lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cr(i){return i>0?1:i<0?-1:0}function uu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Oc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function bs(i,e){return lt(i.prev,i,i.next)<0?lt(i,e,i.next)>=0&&lt(i,i.prev,e)>=0:lt(i,e,i.prev)<0||lt(i,i.next,e)<0}function du(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bc(i,e){let t=xo(i.i,i.x,i.y),n=xo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bl(i,e,t,n){let s=xo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fu(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yo=class{static triangulate(e,t,n=2){return Kh(e,t,n)}},Mt=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zl(e),kl(n,e);let a=e.length;t.forEach(zl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,kl(n,t[c]);let o=yo.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function zl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Mn=class i extends Tt{constructor(e=new _t([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:pu,v,x=!1,L,P,D,F;h&&(v=h.getSpacedPoints(u),x=!0,p=!1,L=h.computeFrenetFrames(u,!1),P=new X,D=new X,F=new X),p||(f=0,m=0,g=0,_=0);let E=o.extractPoints(l),b=E.shape,B=E.holes;if(!Mt.isClockWise(b)){b=b.reverse();for(let V=0,Y=B.length;V<Y;V++){let j=B[V];Mt.isClockWise(j)&&(B[V]=j.reverse())}}function te(V){let j=10000000000000001e-36,$=V[0];for(let O=1;O<=V.length;O++){let A=O%V.length,ae=V[A],Ee=ae.x-$.x,Fe=ae.y-$.y,R=Ee*Ee+Fe*Fe,M=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs($.x),Math.abs($.y)),Q=j*M*M;if(R<=Q){V.splice(A,1),O--;continue}$=ae}}te(b),B.forEach(te);let N=B.length,G=b;for(let V=0;V<N;V++){let Y=B[V];b=b.concat(Y)}function z(V,Y,j){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(Y,j)}let J=b.length;function I(V,Y,j){let $,O,A,ae=V.x-Y.x,Ee=V.y-Y.y,Fe=j.x-V.x,R=j.y-V.y,M=ae*ae+Ee*Ee,Q=ae*R-Ee*Fe;if(Math.abs(Q)>Number.EPSILON){let oe=Math.sqrt(M),pe=Math.sqrt(Fe*Fe+R*R),le=Y.x-Ee/oe,Ie=Y.y+ae/oe,ye=j.x-R/pe,Pe=j.y+Fe/pe,Le=((ye-le)*R-(Pe-Ie)*Fe)/(ae*R-Ee*Fe);$=le+ae*Le-V.x,O=Ie+Ee*Le-V.y;let me=$*$+O*O;if(me<=2)return new ue($,O);A=Math.sqrt(me/2)}else{let oe=!1;ae>Number.EPSILON?Fe>Number.EPSILON&&(oe=!0):ae<-Number.EPSILON?Fe<-Number.EPSILON&&(oe=!0):Math.sign(Ee)===Math.sign(R)&&(oe=!0),oe?($=-Ee,O=ae,A=Math.sqrt(M)):($=ae,O=Ee,A=Math.sqrt(M/2))}return new ue($/A,O/A)}let ie=[];for(let V=0,Y=G.length,j=Y-1,$=V+1;V<Y;V++,j++,$++)j===Y&&(j=0),$===Y&&($=0),ie[V]=I(G[V],G[j],G[$]);let ce=[],de,Me=ie.concat();for(let V=0,Y=N;V<Y;V++){let j=B[V];de=[];for(let $=0,O=j.length,A=O-1,ae=$+1;$<O;$++,A++,ae++)A===O&&(A=0),ae===O&&(ae=0),de[$]=I(j[$],j[A],j[ae]);ce.push(de),Me=Me.concat(de)}let Se;if(f===0)Se=Mt.triangulateShape(G,B);else{let V=[],Y=[];for(let j=0;j<f;j++){let $=j/f,O=m*Math.cos($*Math.PI/2),A=g*Math.sin($*Math.PI/2)+_;for(let ae=0,Ee=G.length;ae<Ee;ae++){let Fe=z(G[ae],ie[ae],A);ne(Fe.x,Fe.y,-O),$===0&&V.push(Fe)}for(let ae=0,Ee=N;ae<Ee;ae++){let Fe=B[ae];de=ce[ae];let R=[];for(let M=0,Q=Fe.length;M<Q;M++){let oe=z(Fe[M],de[M],A);ne(oe.x,oe.y,-O),$===0&&R.push(oe)}$===0&&Y.push(R)}}Se=Mt.triangulateShape(V,Y)}let W=Se.length,U=g+_;for(let V=0;V<J;V++){let Y=p?z(b[V],Me[V],U):b[V];x?(D.copy(L.normals[0]).multiplyScalar(Y.x),P.copy(L.binormals[0]).multiplyScalar(Y.y),F.copy(v[0]).add(D).add(P),ne(F.x,F.y,F.z)):ne(Y.x,Y.y,0)}for(let V=1;V<=u;V++)for(let Y=0;Y<J;Y++){let j=p?z(b[Y],Me[Y],U):b[Y];x?(D.copy(L.normals[V]).multiplyScalar(j.x),P.copy(L.binormals[V]).multiplyScalar(j.y),F.copy(v[V]).add(D).add(P),ne(F.x,F.y,F.z)):ne(j.x,j.y,d/u*V)}for(let V=f-1;V>=0;V--){let Y=V/f,j=m*Math.cos(Y*Math.PI/2),$=g*Math.sin(Y*Math.PI/2)+_;for(let O=0,A=G.length;O<A;O++){let ae=z(G[O],ie[O],$);ne(ae.x,ae.y,d+j)}for(let O=0,A=B.length;O<A;O++){let ae=B[O];de=ce[O];for(let Ee=0,Fe=ae.length;Ee<Fe;Ee++){let R=z(ae[Ee],de[Ee],$);x?ne(R.x,R.y+v[u-1].y,v[u-1].x+j):ne(R.x,R.y,d+j)}}}S(),y();function S(){let V=s.length/3;if(p){let Y=0,j=J*Y;for(let $=0;$<W;$++){let O=Se[$];q(O[2]+j,O[1]+j,O[0]+j)}Y=u+f*2,j=J*Y;for(let $=0;$<W;$++){let O=Se[$];q(O[0]+j,O[1]+j,O[2]+j)}}else{for(let Y=0;Y<W;Y++){let j=Se[Y];q(j[2],j[1],j[0])}for(let Y=0;Y<W;Y++){let j=Se[Y];q(j[0]+J*u,j[1]+J*u,j[2]+J*u)}}n.addGroup(V,s.length/3-V,0)}function y(){let V=s.length/3,Y=0;H(G,Y),Y+=G.length;for(let j=0,$=B.length;j<$;j++){let O=B[j];H(O,Y),Y+=O.length}n.addGroup(V,s.length/3-V,1)}function H(V,Y){let j=V.length;for(;--j>=0;){let $=j,O=j-1;O<0&&(O=V.length-1);for(let A=0,ae=u+f*2;A<ae;A++){let Ee=J*A,Fe=J*(A+1),R=Y+$+Ee,M=Y+O+Ee,Q=Y+O+Fe,oe=Y+$+Fe;he(R,M,Q,oe)}}}function ne(V,Y,j){c.push(V),c.push(Y),c.push(j)}function q(V,Y,j){ge(V),ge(Y),ge(j);let $=s.length/3,O=T.generateTopUV(n,s,$-3,$-2,$-1);C(O[0]),C(O[1]),C(O[2])}function he(V,Y,j,$){ge(V),ge(Y),ge($),ge(Y),ge(j),ge($);let O=s.length/3,A=T.generateSideWallUV(n,s,O-6,O-3,O-2,O-1);C(A[0]),C(A[1]),C(A[3]),C(A[1]),C(A[2]),C(A[3])}function ge(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function C(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mu(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Tr[s.type]().fromJSON(s)),new i(n,e.options)}},pu={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new ue(r,a),new ue(o,c),new ue(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],f=e[r*3+1],h=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-d),new ue(p,1-g),new ue(_,1-h)]:[new ue(o,1-c),new ue(u,1-d),new ue(m,1-g),new ue(f,1-h)]}};function mu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ei=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,p=t/c,m=[],g=[],_=[],f=[];for(let h=0;h<u;h++){let T=h*p-a;for(let v=0;v<l;v++){let x=v*d-r;g.push(x,-T,0),_.push(0,0,1),f.push(v/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){let v=T+l*h,x=T+l*(h+1),L=T+1+l*(h+1),P=T+1+l*h;m.push(v,x,P),m.push(x,L,P)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ts=class i extends Tt{constructor(e=new _t([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function l(u){let d=s.length/3,p=u.extractPoints(t),m=p.shape,g=p.holes;Mt.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,h=g.length;f<h;f++){let T=g[f];Mt.isClockWise(T)===!0&&(g[f]=T.reverse())}let _=Mt.triangulateShape(m,g);for(let f=0,h=g.length;f<h;f++){let T=g[f];m=m.concat(T)}for(let f=0,h=m.length;f<h;f++){let T=m[f];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let f=0,h=_.length;f<h;f++){let T=_[f],v=T[0]+d,x=T[1]+d,L=T[2]+d;n.push(v,x,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return gu(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function gu(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var On=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new X,p=new X,m=[],g=[],_=[],f=[];for(let h=0;h<=n;h++){let T=[],v=h/n,x=0;h===0&&a===0?x=.5/t:h===n&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){let P=L/t;d.x=-e*Math.cos(s+P*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+P*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),f.push(P+x,1-v),T.push(l++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){let v=u[h][T+1],x=u[h][T],L=u[h+1][T],P=u[h+1][T+1];(h!==0||a>0)&&m.push(v,x,P),(h!==n-1||c<Math.PI)&&m.push(x,L,P)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ws=class i extends Tt{constructor(e=new vs(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new X,c=new X,l=new ue,u=new X,d=[],p=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function _(){for(let v=0;v<t;v++)f(v);f(r===!1?t:0),T(),h()}function f(v){u=e.getPointAt(v/t,u);let x=a.normals[v],L=a.binormals[v];for(let P=0;P<=s;P++){let D=P/s*Math.PI*2,F=Math.sin(D),E=-Math.cos(D);c.x=E*x.x+F*L.x,c.y=E*x.y+F*L.y,c.z=E*x.z+F*L.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function h(){for(let v=1;v<=t;v++)for(let x=1;x<=s;x++){let L=(s+1)*(v-1)+(x-1),P=(s+1)*v+(x-1),D=(s+1)*v+x,F=(s+1)*(v-1)+x;g.push(L,P,F),g.push(P,D,F)}}function T(){for(let v=0;v<=t;v++)for(let x=0;x<=s;x++)l.x=v/t,l.y=x/s,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Tr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ti=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ar=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cr=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rr=class extends ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uo,endingEnd:uo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fo:r=e,o=2*t-n;break;case po:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fo:a=e,c=2*n-t;break;case po:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,f=_*g,h=-p*f+2*p*_-p*g,T=(1+p)*f+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-m)*f+(1.5+m)*_+.5*g,x=m*f-m*_;for(let L=0;L!==o;++L)r[L]=h*a[u+L]+T*a[l+L]+v*a[c+L]+x*a[d+L];return r}},Ir=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*u;return r}},Pr=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ot=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ir(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&_u(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ur,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[p+g]||_!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ot.prototype.ValueTypeName="";Ot.prototype.TimeBufferType=Float32Array;Ot.prototype.ValueBufferType=Float32Array;Ot.prototype.DefaultInterpolation=mr;var Bn=class extends Ot{constructor(e,t,n){super(e,t,n)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=is;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Ot{constructor(e,t,n,s){super(e,t,n,s)}};Lr.prototype.ValueTypeName="color";var Dr=class extends Ot{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="number";var Ur=class extends ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},As=class extends Ot{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ur(this.times,this.values,this.getValueSize(),e)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Ot{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=is;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Ot{constructor(e,t,n,s){super(e,t,n,s)}};Nr.prototype.ValueTypeName="vector";var vo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zc=new Fr,ii=class{constructor(e){this.manager=e!==void 0?e:zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var gn={},Mo=class extends Error{constructor(e,t){super(e),this.response=t}},Cs=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gn[e]!==void 0){gn[e].push({onLoad:t,onProgress:n,onError:s});return}gn[e]=[],gn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=gn[e],d=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0,_=0,f=new ReadableStream({start(h){T();function T(){d.read().then(({done:v,value:x})=>{if(v)h.close();else{_+=x.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let P=0,D=u.length;P<D;P++){let F=u[P];F.onProgress&&F.onProgress(L)}h.enqueue(x),T()}},v=>{h.error(v)})}}});return new Response(f)}else throw new Mo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{vo.add(`file:${e}`,l);let u=gn[e];delete gn[e];for(let d=0,p=u.length;d<p;d++){let m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=gn[e];if(u===void 0)throw this.manager.itemError(e),l;delete gn[e];for(let d=0,p=u.length;d<p;d++){let m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Is=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ho=new ct,Vl=new X,Hl=new X,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var si=class extends us{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bo=class extends So{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new bo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Or=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yo="\\[\\]\\.:\\/",xu=new RegExp("["+Yo+"]","g"),Zo="[^"+Yo+"]",yu="[^"+Yo.replace("\\.","")+"]",vu=/((?:WC+[\/:])*)/.source.replace("WC",Zo),Mu=/(WCOD+)?/.source.replace("WCOD",yu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zo),bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zo),Eu=new RegExp("^"+vu+Mu+Su+bu+"$"),Tu=["material","materials","bones","map"],Eo=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xu,"")}static parseTrackName(e){let t=Eu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Eo;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rg=new Float32Array(1);var Gl=new ct,Ps=class{constructor(e,t,n=0,s=1/0){this.ray=new ls(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Pi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)To(e[s],this,n,t);return n.sort(Wl),n}};function Wl(i,e){return i.distance-e.distance}function To(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)To(r[a],e,t,!0)}}var Xl=new ue,Ls=class{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Qt=class{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new an,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let T=[];for(let v=0,x=h.length;v<x;v++){let L=h[v],P=new _t;P.curves=L.curves,T.push(P)}return T}function n(h,T){let v=T.length,x=!1;for(let L=v-1,P=0;P<v;L=P++){let D=T[L],F=T[P],E=F.x-D.x,b=F.y-D.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(D=T[P],E=-E,F=T[L],b=-b),h.y<D.y||h.y>F.y)continue;if(h.y===D.y){if(h.x===D.x)return!0}else{let B=b*(h.x-D.x)-E*(h.y-D.y);if(B===0)return!0;if(B<0)continue;x=!x}}else{if(h.y!==D.y)continue;if(F.x<=h.x&&h.x<=D.x||D.x<=h.x&&h.x<=F.x)return!0}}return x}let s=Mt.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new _t,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;let d=[],p=[],m=[],g=0,_;p[g]=void 0,m[g]=[];for(let h=0,T=r.length;h<T;h++)o=r[h],_=o.getPoints(),a=s(_),a=e?!a:a,a?(!u&&p[g]&&g++,p[g]={s:new _t,p:_},p[g].s.curves=o.curves,u&&g++,m[g]=[]):m[g].push({h:o,p:_[0]});if(!p[0])return t(r);if(p.length>1){let h=!1,T=0;for(let v=0,x=p.length;v<x;v++)d[v]=[];for(let v=0,x=p.length;v<x;v++){let L=m[v];for(let P=0;P<L.length;P++){let D=L[P],F=!0;for(let E=0;E<p.length;E++)n(D.p,p[E].p)&&(v!==E&&T++,F?(F=!1,d[E].push(D)):h=!0);F&&d[v].push(D)}}T>0&&h===!1&&(m=d)}let f;for(let h=0,T=p.length;h<T;h++){c=p[h].s,l.push(c),f=m[h];for(let v=0,x=f.length;v<x;v++)c.holes.push(f[v].h)}return l}};function Jo(i,e,t,n){let s=wu(n);switch(t){case Oo:return i*e;case zo:return i*e/s.components*s.byteLength;case Qr:return i*e/s.components*s.byteLength;case ko:return i*e*2/s.components*s.byteLength;case ea:return i*e*2/s.components*s.byteLength;case Bo:return i*e*3/s.components*s.byteLength;case Gt:return i*e*4/s.components*s.byteLength;case ta:return i*e*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(e,8)/4;case na:case sa:return Math.max(i,8)*Math.max(e,8)/2;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ba:case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wu(i){switch(i){case en:case Do:return{byteLength:1,components:1};case Bi:case Uo:case zi:return{byteLength:2,components:1};case Kr:case jr:return{byteLength:2,components:4};case Vn:case $r:case ln:return{byteLength:4,components:1};case No:case Fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ch(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cu(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){let g=d[p],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Ad=`struct PhysicalMaterial {
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
}`,Cd=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Ff=`#if DEPTH_PACKING == 3200
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
}`,Of=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ru,alphahash_pars_fragment:Iu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:$u,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:yd,lights_pars_begin:vd,lights_toon_fragment:Sd,lights_toon_pars_fragment:bd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Vd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:xf,specularmap_fragment:yf,specularmap_pars_fragment:vf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:kf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},cn={basic:{uniforms:bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:bt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:bt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:bt([Te.points,Te.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:bt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:bt([Te.common,Te.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:bt([Te.sprite,Te.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:bt([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:bt([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};cn.physical={uniforms:bt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ia={r:0,b:0,g:0},li=new Kt,cp=new ct;function hp(i,e,t,n,s,r,a){let o=new Je(0),c=r===!0?0:1,l,u,d=null,p=0,m=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,L=g(v);L===null?h(o,c):L&&L.isColor&&(h(L,1),x=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(v,x){let L=g(x);L&&(L.isCubeTexture||L.mapping===Ds)?(u===void 0&&(u=new xt(new Nn(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:oi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(x.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(li)),u.material.toneMapped=$e.getTransfer(L.colorSpace)!==Qe,(d!==L||p!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=L,p=L.version,m=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new xt(new ei(2,2),new jt({name:"BackgroundMaterial",uniforms:oi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$e.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||p!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=L,p=L.version,m=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function h(v,x){v.getRGB(Ia,Xo(i)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,h(o,c)},render:_,addToRenderList:f,dispose:T}}function up(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(b,B,k,te,N){let G=!1,z=d(te,k,B);r!==z&&(r=z,l(r.object)),G=m(b,te,k,N),G&&g(b,te,k,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(b,B,k,te),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,B,k){let te=k.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let G=N[B.id];G===void 0&&(G={},N[B.id]=G);let z=G[te];return z===void 0&&(z=p(c()),G[te]=z),z}function p(b){let B=[],k=[],te=[];for(let N=0;N<t;N++)B[N]=0,k[N]=0,te[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:te,object:b,attributes:{},index:null}}function m(b,B,k,te){let N=r.attributes,G=B.attributes,z=0,J=k.getAttributes();for(let I in J)if(J[I].location>=0){let ce=N[I],de=G[I];if(de===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==te}function g(b,B,k,te){let N={},G=B.attributes,z=0,J=k.getAttributes();for(let I in J)if(J[I].location>=0){let ce=G[I];ce===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),N[I]=de,z++}r.attributes=N,r.attributesNum=z,r.index=te}function _(){let b=r.newAttributes;for(let B=0,k=b.length;B<k;B++)b[B]=0}function f(b){h(b,0)}function h(b,B){let k=r.newAttributes,te=r.enabledAttributes,N=r.attributeDivisors;k[b]=1,te[b]===0&&(i.enableVertexAttribArray(b),te[b]=1),N[b]!==B&&(i.vertexAttribDivisor(b,B),N[b]=B)}function T(){let b=r.newAttributes,B=r.enabledAttributes;for(let k=0,te=B.length;k<te;k++)B[k]!==b[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function v(b,B,k,te,N,G,z){z===!0?i.vertexAttribIPointer(b,B,k,N,G):i.vertexAttribPointer(b,B,k,te,N,G)}function x(b,B,k,te){_();let N=te.attributes,G=k.getAttributes(),z=B.defaultAttributeValues;for(let J in G){let I=G[J];if(I.location>=0){let ie=N[J];if(ie===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let ce=ie.normalized,de=ie.itemSize,Me=e.get(ie);if(Me===void 0)continue;let Se=Me.buffer,W=Me.type,U=Me.bytesPerElement,S=W===i.INT||W===i.UNSIGNED_INT||ie.gpuType===$r;if(ie.isInterleavedBufferAttribute){let y=ie.data,H=y.stride,ne=ie.offset;if(y.isInstancedInterleavedBuffer){for(let q=0;q<I.locationSize;q++)h(I.location+q,y.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let q=0;q<I.locationSize;q++)f(I.location+q);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let q=0;q<I.locationSize;q++)v(I.location+q,de/I.locationSize,W,ce,H*U,(ne+de/I.locationSize*q)*U,S)}else{if(ie.isInstancedBufferAttribute){for(let y=0;y<I.locationSize;y++)h(I.location+y,ie.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let y=0;y<I.locationSize;y++)f(I.location+y);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let y=0;y<I.locationSize;y++)v(I.location+y,de/I.locationSize,W,ce,de*U,de/I.locationSize*y*U,S)}}else if(z!==void 0){let ce=z[J];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(I.location,ce);break;case 3:i.vertexAttrib3fv(I.location,ce);break;case 4:i.vertexAttrib4fv(I.location,ce);break;default:i.vertexAttrib1fv(I.location,ce)}}}}T()}function L(){F();for(let b in n){let B=n[b];for(let k in B){let te=B[k];for(let N in te)u(te[N].object),delete te[N];delete B[k]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;let B=n[b.id];for(let k in B){let te=B[k];for(let N in te)u(te[N].object),delete te[N];delete B[k]}delete n[b.id]}function D(b){for(let B in n){let k=n[B];if(k[b.id]===void 0)continue;let te=k[b.id];for(let N in te)u(te[N].object),delete te[N];delete k[b.id]}}function F(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:f,disableUnusedAttributes:T}}function dp(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function c(l,u,d,p){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Gt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let F=D===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==en&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ln&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:P}}function pp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new nn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){let g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{let T=r?0:n,v=T*4,x=h.clippingState||null;c.value=x,x=u(g,p,v,m);for(let L=0;L!==v;++L)x[L]=t[L];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,m,g){let _=d!==null?d.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let h=m+_*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<h)&&(f=new Float32Array(h));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(f,x),f[x+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function mp(i){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=ri:o===Zr&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yr||o===Zr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Mr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wi=4,kc=[.125,.215,.35,.446,.526,.582],ui=20,$o=new si,Vc=new Je,Ko=null,jo=0,Qo=0,el=!1,hi=(1+Math.sqrt(5))/2,Gi=1/hi,Hc=[new X(-hi,Gi,0),new X(hi,Gi,0),new X(-Gi,0,hi),new X(Gi,0,hi),new X(0,hi,-Gi),new X(0,hi,Gi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],gp=new X,Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gp}=r;Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Qo),this._renderer.xr.enabled=el,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:zi,format:Gt,colorSpace:Kn,depthBuffer:!1},s=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=xp(r,e,t)}return s}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s,r){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Vc),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new jn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),f=new xt(new Nn,_),h=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,h=!0):(_.color.copy(Vc),h=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):x===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let L=this._cubeSize;Pa(s,x*L,v>2?L:0,L,L),d.setRenderTarget(s),h&&d.render(f,c),d.render(e,c)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ri||e.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hc[(s-r-1)%Hc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new xt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):ui;f>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ui}`);let h=[],T=0;for(let D=0;D<ui;++D){let F=D/_,E=Math.exp(-F*F/2);h.push(E),D===0?T+=E:D<f&&(T+=2*E)}for(let D=0;D<h.length;D++)h[D]=h[D]/T;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;let x=this._sizeLods[s],L=3*x*(s>v-Wi?s-v+Wi:0),P=4*(this._cubeSize-x);Pa(t,L,P,3*x,2*x),c.setRenderTarget(t),c.render(d,$o)}};function _p(i){let e=[],t=[],n=[],s=i,r=i-Wi+1+kc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Wi?c=kc[a-i+Wi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,f=2,h=1,T=new Float32Array(_*g*m),v=new Float32Array(f*g*m),x=new Float32Array(h*g*m);for(let P=0;P<m;P++){let D=P%3*2/3-1,F=P>2?0:-1,E=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];T.set(E,_*g*P),v.set(p,f*g*P);let b=[P,P,P,P,P,P];x.set(b,h*g*P)}let L=new Tt;L.setAttribute("position",new Nt(T,_)),L.setAttribute("uv",new Nt(v,f)),L.setAttribute("faceIndex",new Nt(x,h)),e.push(L),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xp(i,e,t){let n=new Float32Array(ui),s=new X(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Wc(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Xc(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function yp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Yr||c===Zr,u=c===ri||c===ai;if(l||u){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Da(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Da(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(d){let p=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let T=m.array;_=m.version;for(let v=0,x=T.length;v<x;v+=3){let L=T[v+0],P=T[v+1],D=T[v+2];p.push(L,P,P,D,D,L)}}else if(g!==void 0){let T=g.array;_=g.version;for(let v=0,x=T.length/3-1;v<x;v+=3){let L=v+0,P=v+1,D=v+2;p.push(L,P,P,D,D,L)}}else return;let f=new(Wo(p)?hs:cs)(p,1);f.version=_;let h=r.get(d);h&&e.remove(h),r.set(d,f)}function u(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Sp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*a,g),t.update(m,n,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,n,1)}function d(p,m,g,_){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/a,m[h],_[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*_[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let P=new Float32Array(x*L*4*d),D=new os(P,x,L,d);D.type=ln,D.needsUpdate=!0;let F=v*4;for(let b=0;b<d;b++){let B=f[b],k=h[b],te=T[b],N=x*L*4*b;for(let G=0;G<B.count;G++){let z=G*F;m===!0&&(s.fromBufferAttribute(B,G),P[N+z+0]=s.x,P[N+z+1]=s.y,P[N+z+2]=s.z,P[N+z+3]=0),g===!0&&(s.fromBufferAttribute(k,G),P[N+z+4]=s.x,P[N+z+5]=s.y,P[N+z+6]=s.z,P[N+z+7]=0),_===!0&&(s.fromBufferAttribute(te,G),P[N+z+8]=s.x,P[N+z+9]=s.y,P[N+z+10]=s.z,P[N+z+11]=te.itemSize===4?s.w:1)}}p={count:d,texture:D,size:new ue(x,L)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Tp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var hh=new It,qc=new ps(1,1),uh=new os,dh=new yr,fh=new ds,Yc=[],Zc=[],Jc=new Float32Array(16),$c=new Float32Array(9),Kc=new Float32Array(4);function qi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yc[s];if(r===void 0&&(r=new Float32Array(s),Yc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Ip(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),pt(t,n)}}function Pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),pt(t,n)}}function Lp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),pt(t,n)}}function Dp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=Ho,r=qc):r=hh,t.setTexture2D(e||r,s)}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dh,s)}function Gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fh,s)}function Wp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uh,s)}function Xp(i){switch(i){case 5126:return wp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Ip;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(i,e){i.uniform1fv(this.addr,e)}function Yp(i,e){let t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zp(i,e){let t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jp(i,e){let t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function $p(i,e){let t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kp(i,e){let t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jp(i,e){let t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qp(i,e){i.uniform1iv(this.addr,e)}function em(i,e){i.uniform2iv(this.addr,e)}function tm(i,e){i.uniform3iv(this.addr,e)}function nm(i,e){i.uniform4iv(this.addr,e)}function im(i,e){i.uniform1uiv(this.addr,e)}function sm(i,e){i.uniform2uiv(this.addr,e)}function rm(i,e){i.uniform3uiv(this.addr,e)}function am(i,e){i.uniform4uiv(this.addr,e)}function om(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hh,r[a])}function lm(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dh,r[a])}function cm(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fh,r[a])}function hm(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uh,r[a])}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}var nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xp(t.type)}},il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=um(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function dm(i,e,t){let n=i.name,s=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),a=tl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jc(t,l===void 0?new nl(o,i,e):new il(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new sl(o),jc(t,d)),t=d}}}var Xi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);dm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fm=37297,pm=0;function mm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var eh=new Ve;function gm(i){$e._getMatrix(eh,$e.workingColorSpace,i);let e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ss:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function th(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+mm(i.getShaderSource(e),o)}else return r}function _m(i,e){let t=gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xm(i,e){let t;switch(e){case pc:t="Linear";break;case mc:t="Reinhard";break;case gc:t="Cineon";break;case qr:t="ACESFilmic";break;case xc:t="AgX";break;case yc:t="Neutral";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var La=new X;function ym(){$e.getLuminanceCoefficients(La);let i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Mm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zs(i){return i!==""}function nh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(bm,Tm)}var Em=new Map;function Tm(i,e){let t=qe[e];if(t===void 0){let n=Em.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}var wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(wm,Am)}function Am(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Cm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Br?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function Rm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case Ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Im(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:e="ENVMAP_BLENDING_MULTIPLY";break;case dc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Cm(t),l=Rm(t),u=Im(t),d=Pm(t),p=Lm(t),m=vm(t),g=Mm(r),_=s.createProgram(),f,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),h.length>0&&(h+=`
`)):(f=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),h=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?qe.tonemapping_pars_fragment:"",t.toneMapping!==bn?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=rl(a),a=nh(a,t),a=ih(a,t),o=rl(o),o=nh(o,t),o=ih(o,t),a=sh(a),o=sh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let v=T+f+a,x=T+h+o,L=Qc(s,s.VERTEX_SHADER,v),P=Qc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(B){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_)||"",te=s.getShaderInfoLog(L)||"",N=s.getShaderInfoLog(P)||"",G=k.trim(),z=te.trim(),J=N.trim(),I=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,P);else{let ce=th(s,L,"vertex"),de=th(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+ce+`
`+de)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||J==="")&&(ie=!1);ie&&(B.diagnostics={runnable:I,programLog:G,vertexShader:{log:z,prefix:f},fragmentShader:{log:J,prefix:h}})}s.deleteShader(L),s.deleteShader(P),F=new Xi(s,_),E=Sm(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,fm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}var Um=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ol(e),t.set(e,n)),n}},ol=class{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}};function Nm(i,e,t,n,s,r,a){let o=new Pi,c=new al,l=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,b,B,k,te){let N=k.fog,G=te.geometry,z=E.isMeshStandardMaterial?k.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),I=J&&J.mapping===Ds?J.image.height:null,ie=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=ce!==void 0?ce.length:0,Me=0;G.morphAttributes.position!==void 0&&(Me=1),G.morphAttributes.normal!==void 0&&(Me=2),G.morphAttributes.color!==void 0&&(Me=3);let Se,W,U,S;if(ie){let je=cn[ie];Se=je.vertexShader,W=je.fragmentShader}else Se=E.vertexShader,W=E.fragmentShader,c.update(E),U=c.getVertexShaderID(E),S=c.getFragmentShaderID(E);let y=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),ne=te.isInstancedMesh===!0,q=te.isBatchedMesh===!0,he=!!E.map,ge=!!E.matcap,C=!!J,V=!!E.aoMap,Y=!!E.lightMap,j=!!E.bumpMap,$=!!E.normalMap,O=!!E.displacementMap,A=!!E.emissiveMap,ae=!!E.metalnessMap,Ee=!!E.roughnessMap,Fe=E.anisotropy>0,R=E.clearcoat>0,M=E.dispersion>0,Q=E.iridescence>0,oe=E.sheen>0,pe=E.transmission>0,le=Fe&&!!E.anisotropyMap,Ie=R&&!!E.clearcoatMap,ye=R&&!!E.clearcoatNormalMap,Pe=R&&!!E.clearcoatRoughnessMap,Le=Q&&!!E.iridescenceMap,me=Q&&!!E.iridescenceThicknessMap,we=oe&&!!E.sheenColorMap,He=oe&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,Xe=!!E.specularIntensityMap,Z=pe&&!!E.transmissionMap,ve=pe&&!!E.thicknessMap,be=!!E.gradientMap,De=!!E.alphaMap,_e=E.alphaTest>0,fe=!!E.alphaHash,Ne=!!E.extensions,We=bn;E.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(We=i.toneMapping);let it={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:W,defines:E.defines,customVertexShaderID:U,customFragmentShaderID:S,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:q,batchingColor:q&&te._colorsTexture!==null,instancing:ne,instancingColor:ne&&te.instanceColor!==null,instancingMorph:ne&&te.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:y===null?i.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Kn,alphaToCoverage:!!E.alphaToCoverage,map:he,matcap:ge,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:I,aoMap:V,lightMap:Y,bumpMap:j,normalMap:$,displacementMap:p&&O,emissiveMap:A,normalMapObjectSpace:$&&E.normalMapType===bc,normalMapTangentSpace:$&&E.normalMapType===Vo,metalnessMap:ae,roughnessMap:Ee,anisotropy:Fe,anisotropyMap:le,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:ye,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:Q,iridescenceMap:Le,iridescenceThicknessMap:me,sheen:oe,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Xe,transmission:pe,transmissionMap:Z,thicknessMap:ve,gradientMap:be,opaque:E.transparent===!1&&E.blending===Jn&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:fe,combine:E.combine,mapUv:he&&_(E.map.channel),aoMapUv:V&&_(E.aoMap.channel),lightMapUv:Y&&_(E.lightMap.channel),bumpMapUv:j&&_(E.bumpMap.channel),normalMapUv:$&&_(E.normalMap.channel),displacementMapUv:O&&_(E.displacementMap.channel),emissiveMapUv:A&&_(E.emissiveMap.channel),metalnessMapUv:ae&&_(E.metalnessMap.channel),roughnessMapUv:Ee&&_(E.roughnessMap.channel),anisotropyMapUv:le&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:Oe&&_(E.specularMap.channel),specularColorMapUv:Ae&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:Z&&_(E.transmissionMap.channel),thicknessMapUv:ve&&_(E.thicknessMap.channel),alphaMapUv:De&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($||Fe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!G.attributes.uv&&(he||De),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:H,skinning:te.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:he&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:A&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ht,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)b.push(B),b.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(T(b,E),v(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let b=g[E.type],B;if(b){let k=cn[b];B=Uc.clone(k.uniforms)}else B=E.uniforms;return B}function L(E,b){let B;for(let k=0,te=u.length;k<te;k++){let N=u[k];if(N.cacheKey===b){B=N,++B.usedTimes;break}}return B===void 0&&(B=new Dm(i,b,E,r),u.push(B)),B}function P(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function D(E){c.remove(E)}function F(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:F}}function Fm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,m,g,_,f){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},i[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=f),e++,h}function o(d,p,m,g,_,f){let h=a(d,p,m,g,_,f);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,p,m,g,_,f){let h=a(d,p,m,g,_,f);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,p){t.length>1&&t.sort(d||Om),n.length>1&&n.sort(p||ah),s.length>1&&s.sort(p||ah)}function u(){for(let d=e,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Bm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new oh,i.set(n,[a])):s>=r.length?(a=new oh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function km(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vm=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i){let e=new zm,t=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);let s=new X,r=new ct,a=new ct;function o(l){let u=0,d=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,f=0,h=0,T=0,v=0,x=0,L=0,P=0,D=0;l.sort(Hm);for(let E=0,b=l.length;E<b;E++){let B=l[E],k=B.color,te=B.intensity,N=B.distance,G=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=k.r*te,d+=k.g*te,p+=k.b*te;else if(B.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(B.sh.coefficients[z],te);D++}else if(B.isDirectionalLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let J=B.shadow,I=t.get(B);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=B.shadow.matrix,T++}n.directional[m]=z,m++}else if(B.isSpotLight){let z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(k).multiplyScalar(te),z.distance=N,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,n.spot[_]=z;let J=B.shadow;if(B.map&&(n.spotLightMap[L]=B.map,L++,J.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[_]=J.matrix,B.castShadow){let I=t.get(B);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=G,x++}_++}else if(B.isRectAreaLight){let z=e.get(B);z.color.copy(k).multiplyScalar(te),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),n.rectArea[f]=z,f++}else if(B.isPointLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){let J=B.shadow,I=t.get(B);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=B.shadow.matrix,v++}n.point[g]=z,g++}else if(B.isHemisphereLight){let z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(te),z.groundColor.copy(B.groundColor).multiplyScalar(te),n.hemi[h]=z,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==f||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==v||F.numSpotShadows!==x||F.numSpotMaps!==L||F.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=f,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=v,F.numSpotShadows=x,F.numSpotMaps=L,F.numLightProbes=D,n.version=Vm++)}function c(l,u){let d=0,p=0,m=0,g=0,_=0,f=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){let v=l[h];if(v.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),d++}else if(v.isSpotLight){let x=n.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:n}}function lh(i){let e=new Gm(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Wm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new lh(i),e.set(s,[o])):r>=a.length?(o=new lh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,e,t){let n=new Di,s=new ue,r=new ue,a=new ht,o=new Ar({depthPacking:Sc}),c=new Cr,l={},u=t.maxTextureSize,d={[xn]:wt,[wt]:xn,[Ht]:Ht},p=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let h=this.type;this.render=function(P,D,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Sn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let te=h!==on&&this.type===on,N=h===on&&this.type!==on;for(let G=0,z=P.length;G<z;G++){let J=P[G],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let ie=I.getFrameExtents();if(s.multiply(ie),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,I.mapSize.y=r.y)),I.map===null||te===!0||N===!0){let de=this.type!==on?{minFilter:Vt,magFilter:Vt}:{};I.map!==null&&I.map.dispose(),I.map=new sn(s.x,s.y,de),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let ce=I.getViewportCount();for(let de=0;de<ce;de++){let Me=I.getViewport(de);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),k.viewport(a),I.updateMatrices(J,de),n=I.getFrustum(),x(D,F,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===on&&T(I,F),I.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(E,b,B)};function T(P,D){let F=e.update(_);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new sn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,F,p,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,F,m,_,null)}function v(P,D,F,E){let b=null,B=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)b=B;else if(b=F.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let k=b.uuid,te=D.uuid,N=l[k];N===void 0&&(N={},l[k]=N);let G=N[te];G===void 0&&(G=b.clone(),N[te]=G,D.addEventListener("dispose",L)),b=G}if(b.visible=D.visible,b.wireframe=D.wireframe,E===on?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:d[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=i.properties.get(b);k.light=F}return b}function x(P,D,F,E,b){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===on)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let te=e.update(P),N=P.material;if(Array.isArray(N)){let G=te.groups;for(let z=0,J=G.length;z<J;z++){let I=G[z],ie=N[I.materialIndex];if(ie&&ie.visible){let ce=v(P,ie,E,b);P.onBeforeShadow(i,P,D,F,te,ce,I),i.renderBufferDirect(F,null,te,ce,P,I),P.onAfterShadow(i,P,D,F,te,ce,I)}}}else if(N.visible){let G=v(P,N,E,b);P.onBeforeShadow(i,P,D,F,te,G,null),i.renderBufferDirect(F,null,te,G,P,null),P.onAfterShadow(i,P,D,F,te,G,null)}}let k=P.children;for(let te=0,N=k.length;te<N;te++)x(k[te],D,F,E,b)}function L(P){P.target.removeEventListener("dispose",L);for(let F in l){let E=l[F],b=P.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var Zm={[zr]:kr,[Vr]:Wr,[Hr]:Xr,[$n]:Gr,[kr]:zr,[Wr]:Vr,[Xr]:Hr,[Gr]:$n};function Jm(i,e){function t(){let Z=!1,ve=new ht,be=null,De=new ht(0,0,0,0);return{setMask:function(_e){be!==_e&&!Z&&(i.colorMask(_e,_e,_e,_e),be=_e)},setLocked:function(_e){Z=_e},setClear:function(_e,fe,Ne,We,it){it===!0&&(_e*=We,fe*=We,Ne*=We),ve.set(_e,fe,Ne,We),De.equals(ve)===!1&&(i.clearColor(_e,fe,Ne,We),De.copy(ve))},reset:function(){Z=!1,be=null,De.set(-1,0,0,0)}}}function n(){let Z=!1,ve=!1,be=null,De=null,_e=null;return{setReversed:function(fe){if(ve!==fe){let Ne=e.get("EXT_clip_control");fe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ve=fe;let We=_e;_e=null,this.setClear(We)}},getReversed:function(){return ve},setTest:function(fe){fe?y(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(fe){be!==fe&&!Z&&(i.depthMask(fe),be=fe)},setFunc:function(fe){if(ve&&(fe=Zm[fe]),De!==fe){switch(fe){case zr:i.depthFunc(i.NEVER);break;case kr:i.depthFunc(i.ALWAYS);break;case Vr:i.depthFunc(i.LESS);break;case $n:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case Gr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=fe}},setLocked:function(fe){Z=fe},setClear:function(fe){_e!==fe&&(ve&&(fe=1-fe),i.clearDepth(fe),_e=fe)},reset:function(){Z=!1,be=null,De=null,_e=null,ve=!1}}}function s(){let Z=!1,ve=null,be=null,De=null,_e=null,fe=null,Ne=null,We=null,it=null;return{setTest:function(je){Z||(je?y(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(je){ve!==je&&!Z&&(i.stencilMask(je),ve=je)},setFunc:function(je,hn,tn){(be!==je||De!==hn||_e!==tn)&&(i.stencilFunc(je,hn,tn),be=je,De=hn,_e=tn)},setOp:function(je,hn,tn){(fe!==je||Ne!==hn||We!==tn)&&(i.stencilOp(je,hn,tn),fe=je,Ne=hn,We=tn)},setLocked:function(je){Z=je},setClear:function(je){it!==je&&(i.clearStencil(je),it=je)},reset:function(){Z=!1,ve=null,be=null,De=null,_e=null,fe=null,Ne=null,We=null,it=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},p=new WeakMap,m=[],g=null,_=!1,f=null,h=null,T=null,v=null,x=null,L=null,P=null,D=new Je(0,0,0),F=0,E=!1,b=null,B=null,k=null,te=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),z=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),z=J>=2);let ie=null,ce={},de=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Se=new ht().fromArray(de),W=new ht().fromArray(Me);function U(Z,ve,be,De){let _e=new Uint8Array(4),fe=i.createTexture();i.bindTexture(Z,fe),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<be;Ne++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ve+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return fe}let S={};S[i.TEXTURE_2D]=U(i.TEXTURE_2D,i.TEXTURE_2D,1),S[i.TEXTURE_CUBE_MAP]=U(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[i.TEXTURE_2D_ARRAY]=U(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S[i.TEXTURE_3D]=U(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),y(i.DEPTH_TEST),a.setFunc($n),j(!1),$(wo),y(i.CULL_FACE),V(Sn);function y(Z){u[Z]!==!0&&(i.enable(Z),u[Z]=!0)}function H(Z){u[Z]!==!1&&(i.disable(Z),u[Z]=!1)}function ne(Z,ve){return d[Z]!==ve?(i.bindFramebuffer(Z,ve),d[Z]=ve,Z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),Z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function q(Z,ve){let be=m,De=!1;if(Z){be=p.get(ve),be===void 0&&(be=[],p.set(ve,be));let _e=Z.textures;if(be.length!==_e.length||be[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ne=_e.length;fe<Ne;fe++)be[fe]=i.COLOR_ATTACHMENT0+fe;be.length=_e.length,De=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,De=!0);De&&i.drawBuffers(be)}function he(Z){return g!==Z?(i.useProgram(Z),g=Z,!0):!1}let ge={[Dn]:i.FUNC_ADD,[Jl]:i.FUNC_SUBTRACT,[$l]:i.FUNC_REVERSE_SUBTRACT};ge[Kl]=i.MIN,ge[jl]=i.MAX;let C={[Ql]:i.ZERO,[ec]:i.ONE,[tc]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[oc]:i.SRC_ALPHA_SATURATE,[rc]:i.DST_COLOR,[ic]:i.DST_ALPHA,[nc]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[ac]:i.ONE_MINUS_DST_COLOR,[sc]:i.ONE_MINUS_DST_ALPHA,[lc]:i.CONSTANT_COLOR,[cc]:i.ONE_MINUS_CONSTANT_COLOR,[hc]:i.CONSTANT_ALPHA,[uc]:i.ONE_MINUS_CONSTANT_ALPHA};function V(Z,ve,be,De,_e,fe,Ne,We,it,je){if(Z===Sn){_===!0&&(H(i.BLEND),_=!1);return}if(_===!1&&(y(i.BLEND),_=!0),Z!==Zl){if(Z!==f||je!==E){if((h!==Dn||x!==Dn)&&(i.blendEquation(i.FUNC_ADD),h=Dn,x=Dn),je)switch(Z){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ro:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Io:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}T=null,v=null,L=null,P=null,D.set(0,0,0),F=0,f=Z,E=je}return}_e=_e||ve,fe=fe||be,Ne=Ne||De,(ve!==h||_e!==x)&&(i.blendEquationSeparate(ge[ve],ge[_e]),h=ve,x=_e),(be!==T||De!==v||fe!==L||Ne!==P)&&(i.blendFuncSeparate(C[be],C[De],C[fe],C[Ne]),T=be,v=De,L=fe,P=Ne),(We.equals(D)===!1||it!==F)&&(i.blendColor(We.r,We.g,We.b,it),D.copy(We),F=it),f=Z,E=!1}function Y(Z,ve){Z.side===Ht?H(i.CULL_FACE):y(i.CULL_FACE);let be=Z.side===wt;ve&&(be=!be),j(be),Z.blending===Jn&&Z.transparent===!1?V(Sn):V(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let De=Z.stencilWrite;o.setTest(De),De&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),A(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?y(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(Z){b!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),b=Z)}function $(Z){Z!==ql?(y(i.CULL_FACE),Z!==B&&(Z===wo?i.cullFace(i.BACK):Z===Yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),B=Z}function O(Z){Z!==k&&(z&&i.lineWidth(Z),k=Z)}function A(Z,ve,be){Z?(y(i.POLYGON_OFFSET_FILL),(te!==ve||N!==be)&&(i.polygonOffset(ve,be),te=ve,N=be)):H(i.POLYGON_OFFSET_FILL)}function ae(Z){Z?y(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function Ee(Z){Z===void 0&&(Z=i.TEXTURE0+G-1),ie!==Z&&(i.activeTexture(Z),ie=Z)}function Fe(Z,ve,be){be===void 0&&(ie===null?be=i.TEXTURE0+G-1:be=ie);let De=ce[be];De===void 0&&(De={type:void 0,texture:void 0},ce[be]=De),(De.type!==Z||De.texture!==ve)&&(ie!==be&&(i.activeTexture(be),ie=be),i.bindTexture(Z,ve||S[Z]),De.type=Z,De.texture=ve)}function R(){let Z=ce[ie];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function oe(){try{i.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pe(){try{i.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ye(){try{i.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pe(){try{i.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(){try{i.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{i.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(Z){Se.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Se.copy(Z))}function He(Z){W.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),W.copy(Z))}function Oe(Z,ve){let be=l.get(ve);be===void 0&&(be=new WeakMap,l.set(ve,be));let De=be.get(Z);De===void 0&&(De=i.getUniformBlockIndex(ve,Z.name),be.set(Z,De))}function Ae(Z,ve){let De=l.get(ve).get(Z);c.get(ve)!==De&&(i.uniformBlockBinding(ve,De,Z.__bindingPointIndex),c.set(ve,De))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ce={},d={},p=new WeakMap,m=[],g=null,_=!1,f=null,h=null,T=null,v=null,x=null,L=null,P=null,D=new Je(0,0,0),F=0,E=!1,b=null,B=null,k=null,te=null,N=null,Se.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:y,disable:H,bindFramebuffer:ne,drawBuffers:q,useProgram:he,setBlending:V,setMaterial:Y,setFlipSided:j,setCullFace:$,setLineWidth:O,setPolygonOffset:A,setScissorTest:ae,activeTexture:Ee,bindTexture:Fe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:Q,texImage2D:Le,texImage3D:me,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:ye,texStorage3D:Pe,texSubImage2D:oe,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:Ie,scissor:we,viewport:He,reset:Xe}}function $m(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,u=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):as("canvas")}function _(R,M,Q){let oe=1,pe=Fe(R);if((pe.width>Q||pe.height>Q)&&(oe=Q/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let le=Math.floor(oe*pe.width),Ie=Math.floor(oe*pe.height);d===void 0&&(d=g(le,Ie));let ye=M?g(le,Ie):d;return ye.width=le,ye.height=Ie,ye.getContext("2d").drawImage(R,0,0,le,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+Ie+")."),ye}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function f(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,M,Q,oe,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=M;if(M===i.RED&&(Q===i.FLOAT&&(le=i.R32F),Q===i.HALF_FLOAT&&(le=i.R16F),Q===i.UNSIGNED_BYTE&&(le=i.R8)),M===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.R8UI),Q===i.UNSIGNED_SHORT&&(le=i.R16UI),Q===i.UNSIGNED_INT&&(le=i.R32UI),Q===i.BYTE&&(le=i.R8I),Q===i.SHORT&&(le=i.R16I),Q===i.INT&&(le=i.R32I)),M===i.RG&&(Q===i.FLOAT&&(le=i.RG32F),Q===i.HALF_FLOAT&&(le=i.RG16F),Q===i.UNSIGNED_BYTE&&(le=i.RG8)),M===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RG8UI),Q===i.UNSIGNED_SHORT&&(le=i.RG16UI),Q===i.UNSIGNED_INT&&(le=i.RG32UI),Q===i.BYTE&&(le=i.RG8I),Q===i.SHORT&&(le=i.RG16I),Q===i.INT&&(le=i.RG32I)),M===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Q===i.UNSIGNED_INT&&(le=i.RGB32UI),Q===i.BYTE&&(le=i.RGB8I),Q===i.SHORT&&(le=i.RGB16I),Q===i.INT&&(le=i.RGB32I)),M===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Q===i.UNSIGNED_INT&&(le=i.RGBA32UI),Q===i.BYTE&&(le=i.RGBA8I),Q===i.SHORT&&(le=i.RGBA16I),Q===i.INT&&(le=i.RGBA32I)),M===i.RGB&&(Q===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),M===i.RGBA){let Ie=pe?ss:$e.getTransfer(oe);Q===i.FLOAT&&(le=i.RGBA32F),Q===i.HALF_FLOAT&&(le=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(le=Ie===Qe?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(R,M){let Q;return R?M===null||M===Vn||M===ki?Q=i.DEPTH24_STENCIL8:M===ln?Q=i.DEPTH32F_STENCIL8:M===Bi&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vn||M===ki?Q=i.DEPTH_COMPONENT24:M===ln?Q=i.DEPTH_COMPONENT32F:M===Bi&&(Q=i.DEPTH_COMPONENT16),Q}function L(R,M){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){let M=R.target;M.removeEventListener("dispose",P),F(M),M.isVideoTexture&&u.delete(M)}function D(R){let M=R.target;M.removeEventListener("dispose",D),b(M)}function F(R){let M=n.get(R);if(M.__webglInit===void 0)return;let Q=R.source,oe=p.get(Q);if(oe){let pe=oe[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&E(R),Object.keys(oe).length===0&&p.delete(Q)}n.remove(R)}function E(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let Q=R.source,oe=p.get(Q);delete oe[M.__cacheKey],a.memory.textures--}function b(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let pe=0;pe<M.__webglFramebuffer[oe].length;pe++)i.deleteFramebuffer(M.__webglFramebuffer[oe][pe]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Q=R.textures;for(let oe=0,pe=Q.length;oe<pe;oe++){let le=n.get(Q[oe]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(Q[oe])}n.remove(R)}let B=0;function k(){B=0}function te(){let R=B;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function N(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function G(R,M){let Q=n.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Q.__version!==R.version){let oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{S(Q,R,M);return}}else R.isExternalTexture&&(Q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+M)}function z(R,M){let Q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){S(Q,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+M)}function J(R,M){let Q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){S(Q,R,M);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+M)}function I(R,M){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){y(Q,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+M)}let ie={[wi]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},ce={[Vt]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},de={[Ec]:i.NEVER,[Ic]:i.ALWAYS,[Tc]:i.LESS,[Ho]:i.LEQUAL,[wc]:i.EQUAL,[Rc]:i.GEQUAL,[Ac]:i.GREATER,[Cc]:i.NOTEQUAL};function Me(R,M){if(M.type===ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===Jr||M.magFilter===Us||M.magFilter===kn||M.minFilter===$t||M.minFilter===Jr||M.minFilter===Us||M.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ce[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,de[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==Us&&M.minFilter!==kn||M.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));let oe=M.source,pe=p.get(oe);pe===void 0&&(pe={},p.set(oe,pe));let le=N(M);if(le!==R.__cacheKey){pe[le]===void 0&&(pe[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),pe[le].usedTimes++;let Ie=pe[R.__cacheKey];Ie!==void 0&&(pe[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(M)),R.__cacheKey=le,R.__webglTexture=pe[le].texture}return Q}function W(R,M,Q){return Math.floor(Math.floor(R/Q)/M)}function U(R,M,Q,oe){let le=R.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Q,oe,M.data);else{le.sort((me,we)=>me.start-we.start);let Ie=0;for(let me=1;me<le.length;me++){let we=le[Ie],He=le[me],Oe=we.start+we.count,Ae=W(He.start,M.width,4),Xe=W(we.start,M.width,4);He.start<=Oe+1&&Ae===Xe&&W(He.start+He.count-1,M.width,4)===Ae?we.count=Math.max(we.count,He.start+He.count-we.start):(++Ie,le[Ie]=He)}le.length=Ie+1;let ye=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let me=0,we=le.length;me<we;me++){let He=le[me],Oe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),Xe=Oe%M.width,Z=Math.floor(Oe/M.width),ve=Ae,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,Xe,Z,ve,be,Q,oe,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function S(R,M,Q){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);let pe=Se(R,M),le=M.source;t.bindTexture(oe,R.__webglTexture,i.TEXTURE0+Q);let Ie=n.get(le);if(le.version!==Ie.__version||pe===!0){t.activeTexture(i.TEXTURE0+Q);let ye=$e.getPrimaries($e.workingColorSpace),Pe=M.colorSpace===En?null:$e.getPrimaries(M.colorSpace),Le=M.colorSpace===En||ye===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let me=_(M.image,!1,s.maxTextureSize);me=Ee(M,me);let we=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Oe=v(M.internalFormat,we,He,M.colorSpace,M.isVideoTexture);Me(oe,M);let Ae,Xe=M.mipmaps,Z=M.isVideoTexture!==!0,ve=Ie.__version===void 0||pe===!0,be=le.dataReady,De=L(M,me);if(M.isDepthTexture)Oe=x(M.format===Vi,M.type),ve&&(Z?t.texStorage2D(i.TEXTURE_2D,1,Oe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Oe,me.width,me.height,0,we,He,null));else if(M.isDataTexture)if(Xe.length>0){Z&&ve&&t.texStorage2D(i.TEXTURE_2D,De,Oe,Xe[0].width,Xe[0].height);for(let _e=0,fe=Xe.length;_e<fe;_e++)Ae=Xe[_e],Z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,_e,Oe,Ae.width,Ae.height,0,we,He,Ae.data);M.generateMipmaps=!1}else Z?(ve&&t.texStorage2D(i.TEXTURE_2D,De,Oe,me.width,me.height),be&&U(M,me,we,He)):t.texImage2D(i.TEXTURE_2D,0,Oe,me.width,me.height,0,we,He,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Z&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,Xe[0].width,Xe[0].height,me.depth);for(let _e=0,fe=Xe.length;_e<fe;_e++)if(Ae=Xe[_e],M.format!==Gt)if(we!==null)if(Z){if(be)if(M.layerUpdates.size>0){let Ne=Jo(Ae.width,Ae.height,M.format,M.type);for(let We of M.layerUpdates){let it=Ae.data.subarray(We*Ne/Ae.data.BYTES_PER_ELEMENT,(We+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,We,Ae.width,Ae.height,1,we,it)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,me.depth,we,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Oe,Ae.width,Ae.height,me.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,me.depth,we,He,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Oe,Ae.width,Ae.height,me.depth,0,we,He,Ae.data)}else{Z&&ve&&t.texStorage2D(i.TEXTURE_2D,De,Oe,Xe[0].width,Xe[0].height);for(let _e=0,fe=Xe.length;_e<fe;_e++)Ae=Xe[_e],M.format!==Gt?we!==null?Z?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,_e,Oe,Ae.width,Ae.height,0,we,He,Ae.data)}else if(M.isDataArrayTexture)if(Z){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,me.width,me.height,me.depth),be)if(M.layerUpdates.size>0){let _e=Jo(me.width,me.height,M.format,M.type);for(let fe of M.layerUpdates){let Ne=me.data.subarray(fe*_e/me.data.BYTES_PER_ELEMENT,(fe+1)*_e/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,me.width,me.height,1,we,He,Ne)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,we,He,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,we,He,me.data);else if(M.isData3DTexture)Z?(ve&&t.texStorage3D(i.TEXTURE_3D,De,Oe,me.width,me.height,me.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,we,He,me.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,we,He,me.data);else if(M.isFramebufferTexture){if(ve)if(Z)t.texStorage2D(i.TEXTURE_2D,De,Oe,me.width,me.height);else{let _e=me.width,fe=me.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Oe,_e,fe,0,we,He,null),_e>>=1,fe>>=1}}else if(Xe.length>0){if(Z&&ve){let _e=Fe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,De,Oe,_e.width,_e.height)}for(let _e=0,fe=Xe.length;_e<fe;_e++)Ae=Xe[_e],Z?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,we,He,Ae):t.texImage2D(i.TEXTURE_2D,_e,Oe,we,He,Ae);M.generateMipmaps=!1}else if(Z){if(ve){let _e=Fe(me);t.texStorage2D(i.TEXTURE_2D,De,Oe,_e.width,_e.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,He,me)}else t.texImage2D(i.TEXTURE_2D,0,Oe,we,He,me);f(M)&&h(oe),Ie.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function y(R,M,Q){if(M.image.length!==6)return;let oe=Se(R,M),pe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Q);let le=n.get(pe);if(pe.version!==le.__version||oe===!0){t.activeTexture(i.TEXTURE0+Q);let Ie=$e.getPrimaries($e.workingColorSpace),ye=M.colorSpace===En?null:$e.getPrimaries(M.colorSpace),Pe=M.colorSpace===En||Ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Le=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!Le&&!me?we[fe]=_(M.image[fe],!0,s.maxCubemapSize):we[fe]=me?M.image[fe].image:M.image[fe],we[fe]=Ee(M,we[fe]);let He=we[0],Oe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Xe=v(M.internalFormat,Oe,Ae,M.colorSpace),Z=M.isVideoTexture!==!0,ve=le.__version===void 0||oe===!0,be=pe.dataReady,De=L(M,He);Me(i.TEXTURE_CUBE_MAP,M);let _e;if(Le){Z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,He.width,He.height);for(let fe=0;fe<6;fe++){_e=we[fe].mipmaps;for(let Ne=0;Ne<_e.length;Ne++){let We=_e[Ne];M.format!==Gt?Oe!==null?Z?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,We.width,We.height,Oe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,We.width,We.height,Oe,Ae,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,Xe,We.width,We.height,0,Oe,Ae,We.data)}}}else{if(_e=M.mipmaps,Z&&ve){_e.length>0&&De++;let fe=Fe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(me){Z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Oe,Ae,we[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,we[fe].width,we[fe].height,0,Oe,Ae,we[fe].data);for(let Ne=0;Ne<_e.length;Ne++){let it=_e[Ne].image[fe].image;Z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,it.width,it.height,Oe,Ae,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,Xe,it.width,it.height,0,Oe,Ae,it.data)}}else{Z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,Ae,we[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,Oe,Ae,we[fe]);for(let Ne=0;Ne<_e.length;Ne++){let We=_e[Ne];Z?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,Oe,Ae,We.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,Xe,Oe,Ae,We.image[fe])}}}f(M)&&h(i.TEXTURE_CUBE_MAP),le.__version=pe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function H(R,M,Q,oe,pe,le){let Ie=r.convert(Q.format,Q.colorSpace),ye=r.convert(Q.type),Pe=v(Q.internalFormat,Ie,ye,Q.colorSpace),Le=n.get(M),me=n.get(Q);if(me.__renderTarget=M,!Le.__hasExternalTextures){let we=Math.max(1,M.width>>le),He=Math.max(1,M.height>>le);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,Pe,we,He,M.depth,0,Ie,ye,null):t.texImage2D(pe,le,Pe,we,He,0,Ie,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,pe,me.__webglTexture,0,O(M)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,pe,me.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,M,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let oe=M.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,le=x(M.stencilBuffer,pe),Ie=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=O(M);A(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,le,M.width,M.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,R)}else{let oe=M.textures;for(let pe=0;pe<oe.length;pe++){let le=oe[pe],Ie=r.convert(le.format,le.colorSpace),ye=r.convert(le.type),Pe=v(le.internalFormat,Ie,ye,le.colorSpace),Le=O(M);Q&&A(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Pe,M.width,M.height):A(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let oe=n.get(M.depthTexture);oe.__renderTarget=M,(!oe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let pe=oe.__webglTexture,le=O(M);if(M.depthTexture.format===Ai)A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(M.depthTexture.format===Vi)A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function he(R){let M=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let oe=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){let pe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),M.__depthDisposeCallback=pe}M.__boundDepthTexture=oe}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");let oe=R.texture.mipmaps;oe&&oe.length>0?q(M.__webglFramebuffer[0],R):q(M.__webglFramebuffer,R)}else if(Q){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=i.createRenderbuffer(),ne(M.__webglDepthbuffer[oe],R,!1);else{let pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,le)}}else{let oe=R.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ne(M.__webglDepthbuffer,R,!1);else{let pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(R,M,Q){let oe=n.get(R);M!==void 0&&H(oe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&he(R)}function C(R){let M=R.texture,Q=n.get(R),oe=n.get(M);R.addEventListener("dispose",D);let pe=R.textures,le=R.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,a.memory.textures++),le){Q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)Q.__webglFramebuffer[ye][Pe]=i.createFramebuffer()}else Q.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Q.__webglFramebuffer[ye]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ye=0,Pe=pe.length;ye<Pe;ye++){let Le=n.get(pe[ye]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&A(R)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){let Pe=pe[ye];Q.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye]);let Le=r.convert(Pe.format,Pe.colorSpace),me=r.convert(Pe.type),we=v(Pe.internalFormat,Le,me,Pe.colorSpace,R.isXRRenderTarget===!0),He=O(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,we,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)H(Q.__webglFramebuffer[ye][Pe],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else H(Q.__webglFramebuffer[ye],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);f(M)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ye=0,Pe=pe.length;ye<Pe;ye++){let Le=pe[ye],me=n.get(Le),we=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,me.__webglTexture),Me(we,Le),H(Q.__webglFramebuffer,R,Le,i.COLOR_ATTACHMENT0+ye,we,0),f(Le)&&h(we)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,oe.__webglTexture),Me(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)H(Q.__webglFramebuffer[Pe],R,M,i.COLOR_ATTACHMENT0,ye,Pe);else H(Q.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ye,0);f(M)&&h(ye),t.unbindTexture()}R.depthBuffer&&he(R)}function V(R){let M=R.textures;for(let Q=0,oe=M.length;Q<oe;Q++){let pe=M[Q];if(f(pe)){let le=T(R),Ie=n.get(pe).__webglTexture;t.bindTexture(le,Ie),h(le),t.unbindTexture()}}}let Y=[],j=[];function $(R){if(R.samples>0){if(A(R)===!1){let M=R.textures,Q=R.width,oe=R.height,pe=i.COLOR_BUFFER_BIT,le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),ye=M.length>1;if(ye)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let me=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,pe,i.NEAREST),c===!0&&(Y.length=0,j.length=0,Y.push(i.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Y.push(le),j.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let me=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function O(R){return Math.min(s.maxSamples,R.samples)}function A(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(R){let M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ee(R,M){let Q=R.colorSpace,oe=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Q!==Kn&&Q!==En&&($e.getTransfer(Q)===Qe?(oe!==Gt||pe!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}function Fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=I,this.rebindTextures=ge,this.setupRenderTarget=C,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=H,this.useMultisampledRTT=A}function Km(i,e){function t(n,s=En){let r,a=$e.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===No)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Do)return i.BYTE;if(n===Uo)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===$r)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Bo)return i.RGB;if(n===Gt)return i.RGBA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===ko)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===Bs)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===oa||n===la)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===oa)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Ea||n===Ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wa||n===Aa||n===Ca||n===Ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ms(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jt({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cl=class extends yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,p=null,m=null,g=null,_=typeof XRWebGLBinding<"u",f=new ll,h={},T=t.getContextAttributes(),v=null,x=null,L=[],P=[],D=new ue,F=null,E=new Rt;E.viewport=new ht;let b=new Rt;b.viewport=new ht;let B=[E,b],k=new Or,te=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let y=L[S];return y===void 0&&(y=new Li,L[S]=y),y.getTargetRaySpace()},this.getControllerGrip=function(S){let y=L[S];return y===void 0&&(y=new Li,L[S]=y),y.getGripSpace()},this.getHand=function(S){let y=L[S];return y===void 0&&(y=new Li,L[S]=y),y.getHandSpace()};function G(S){let y=P.indexOf(S.inputSource);if(y===-1)return;let H=L[y];H!==void 0&&(H.update(S.inputSource,S.frame,l||a),H.dispatchEvent({type:S.type,data:S.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let S=0;S<L.length;S++){let y=P[S];y!==null&&(P[S]=null,L[S].disconnect(y))}te=null,N=null,f.reset();for(let S in h)delete h[S];e.setRenderTarget(v),m=null,p=null,d=null,s=null,x=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){r=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){o=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(S){l=S},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(S){if(s=S,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,ne=null,q=null;T.depth&&(q=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=T.stencil?Vi:Ai,ne=T.stencil?ki:Vn);let he={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(he),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new sn(p.textureWidth,p.textureHeight,{format:Gt,type:en,depthTexture:new ps(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let H={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new sn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),U.setContext(s),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(S){for(let y=0;y<S.removed.length;y++){let H=S.removed[y],ne=P.indexOf(H);ne>=0&&(P[ne]=null,L[ne].disconnect(H))}for(let y=0;y<S.added.length;y++){let H=S.added[y],ne=P.indexOf(H);if(ne===-1){for(let he=0;he<L.length;he++)if(he>=P.length){P.push(H),ne=he;break}else if(P[he]===null){P[he]=H,ne=he;break}if(ne===-1)break}let q=L[ne];q&&q.connect(H)}}let I=new X,ie=new X;function ce(S,y,H){I.setFromMatrixPosition(y.matrixWorld),ie.setFromMatrixPosition(H.matrixWorld);let ne=I.distanceTo(ie),q=y.projectionMatrix.elements,he=H.projectionMatrix.elements,ge=q[14]/(q[10]-1),C=q[14]/(q[10]+1),V=(q[9]+1)/q[5],Y=(q[9]-1)/q[5],j=(q[8]-1)/q[0],$=(he[8]+1)/he[0],O=ge*j,A=ge*$,ae=ne/(-j+$),Ee=ae*-j;if(y.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Ee),S.translateZ(ae),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),q[10]===-1)S.projectionMatrix.copy(y.projectionMatrix),S.projectionMatrixInverse.copy(y.projectionMatrixInverse);else{let Fe=ge+ae,R=C+ae,M=O-Ee,Q=A+(ne-Ee),oe=V*C/R*Fe,pe=Y*C/R*Fe;S.projectionMatrix.makePerspective(M,Q,oe,pe,Fe,R),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function de(S,y){y===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(y.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(s===null)return;let y=S.near,H=S.far;f.texture!==null&&(f.depthNear>0&&(y=f.depthNear),f.depthFar>0&&(H=f.depthFar)),k.near=b.near=E.near=y,k.far=b.far=E.far=H,(te!==k.near||N!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),te=k.near,N=k.far),k.layers.mask=S.layers.mask|6,E.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;let ne=S.parent,q=k.cameras;de(k,ne);for(let he=0;he<q.length;he++)de(q[he],ne);q.length===2?ce(k,E,b):k.projectionMatrix.copy(E.projectionMatrix),Me(S,k,ne)};function Me(S,y,H){H===null?S.matrix.copy(y.matrixWorld):(S.matrix.copy(H.matrixWorld),S.matrix.invert(),S.matrix.multiply(y.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(y.projectionMatrix),S.projectionMatrixInverse.copy(y.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=gr*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(S){c=S,p!==null&&(p.fixedFoveation=S),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=S)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(k)},this.getCameraTexture=function(S){return h[S]};let Se=null;function W(S,y){if(u=y.getViewerPose(l||a),g=y,u!==null){let H=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ne=!1;H.length!==k.cameras.length&&(k.cameras.length=0,ne=!0);for(let C=0;C<H.length;C++){let V=H[C],Y=null;if(m!==null)Y=m.getViewport(V);else{let $=d.getViewSubImage(p,V);Y=$.viewport,C===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let j=B[C];j===void 0&&(j=new Rt,j.layers.enable(C),j.viewport=new ht,B[C]=j),j.matrix.fromArray(V.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(V.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Y.x,Y.y,Y.width,Y.height),C===0&&(k.matrix.copy(j.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ne===!0&&k.cameras.push(j)}let q=s.enabledFeatures;if(q&&q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let C=d.getDepthInformation(H[0]);C&&C.isValid&&C.texture&&f.init(C,s.renderState)}if(q&&q.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let C=0;C<H.length;C++){let V=H[C].camera;if(V){let Y=h[V];Y||(Y=new ms,h[V]=Y);let j=d.getCameraImage(V);Y.sourceTexture=j}}}}for(let H=0;H<L.length;H++){let ne=P[H],q=L[H];ne!==null&&q!==void 0&&q.update(ne,y,l||a)}Se&&Se(S,y),y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:y}),g=null}let U=new ch;U.setAnimationLoop(W),this.setAnimationLoop=function(S){Se=S},this.dispose=function(){}}},ci=new Kt,eg=new ct;function tg(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Xo(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,T,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,x)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),_(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,T,v):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===wt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===wt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let T=e.get(h),v=T.envMap,x=T.envMapRotation;v&&(f.envMap.value=v,ci.copy(x),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),f.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(ci)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,T,v){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*T,f.scale.value=v*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,T){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function _(f,h){let T=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,v){let x=v.program;n.uniformBlockBinding(T,x)}function l(T,v){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",f));let L=v.program;n.updateUBOMapping(T,L);let P=e.render.frame;r[T.id]!==P&&(p(T),r[T.id]=P)}function u(T){let v=d();T.__bindingPointIndex=v;let x=i.createBuffer(),L=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let v=s[T.id],x=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,D=x.length;P<D;P++){let F=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,b=F.length;E<b;E++){let B=F[E];if(m(B,P,E,L)===!0){let k=B.__offset,te=Array.isArray(B.value)?B.value:[B.value],N=0;for(let G=0;G<te.length;G++){let z=te[G],J=_(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,k+N,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,v,x,L){let P=T.value,D=v+"_"+x;if(L[D]===void 0)return typeof P=="number"||typeof P=="boolean"?L[D]=P:L[D]=P.clone(),!0;{let F=L[D];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[D]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(T){let v=T.uniforms,x=0,L=16;for(let D=0,F=v.length;D<F;D++){let E=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,B=E.length;b<B;b++){let k=E[b],te=Array.isArray(k.value)?k.value:[k.value];for(let N=0,G=te.length;N<G;N++){let z=te[N],J=_(z),I=x%L,ie=I%J.boundary,ce=I+ie;x+=ie,ce!==0&&L-ce<J.storage&&(x+=L-ce),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=J.storage}}}let P=x%L;return P>0&&(x+=L-P),T.__size=x,T.__cache={},this}function _(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function f(T){let v=T.target;v.removeEventListener("dispose",f);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var Ua=class{constructor(e={}){let{canvas:t=Pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),f=null,h=null,T=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,L=!1;this._outputColorSpace=gt;let P=0,D=0,F=null,E=-1,b=null,B=new ht,k=new ht,te=null,N=new Je(0),G=0,z=t.width,J=t.height,I=1,ie=null,ce=null,de=new ht(0,0,z,J),Me=new ht(0,0,z,J),Se=!1,W=new Di,U=!1,S=!1,y=new ct,H=new X,ne=new ht,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return F===null?I:1}let C=n;function V(w,K){return t.getContext(w,K)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",_e,!1),C===null){let K="webgl2";if(C=V(K,w),C===null)throw V(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,j,$,O,A,ae,Ee,Fe,R,M,Q,oe,pe,le,Ie,ye,Pe,Le,me,we,He,Oe,Ae,Xe;function Z(){Y=new vp(C),Y.init(),Oe=new Km(C,Y),j=new fp(C,Y,e,Oe),$=new Jm(C,Y),j.reversedDepthBuffer&&p&&$.buffers.depth.setReversed(!0),O=new bp(C),A=new Fm,ae=new $m(C,Y,$,A,j,Oe,O),Ee=new mp(x),Fe=new yp(x),R=new Cu(C),Ae=new up(C,R),M=new Mp(C,R,O,Ae),Q=new Tp(C,M,R,O),me=new Ep(C,j,ae),ye=new pp(A),oe=new Nm(x,Ee,Fe,Y,j,Ae,ye),pe=new tg(x,A),le=new Bm,Ie=new Wm(Y),Le=new hp(x,Ee,Fe,$,Q,m,c),Pe=new Ym(x,Q,j),Xe=new ng(C,O,j,$),we=new dp(C,Y,O),He=new Sp(C,Y,O),O.programs=oe.programs,x.capabilities=j,x.extensions=Y,x.properties=A,x.renderLists=le,x.shadowMap=Pe,x.state=$,x.info=O}Z();let ve=new cl(x,C);this.xr=ve,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,K,se=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=K,t.width=Math.floor(w*I),t.height=Math.floor(K*I),se===!0&&(t.style.width=w+"px",t.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(z*I,J*I).floor()},this.setDrawingBufferSize=function(w,K,se){z=w,J=K,I=se,t.width=Math.floor(w*se),t.height=Math.floor(K*se),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,K,se,re){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,K,se,re),$.viewport(B.copy(de).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,K,se,re){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,K,se,re),$.scissor(k.copy(Me).multiplyScalar(I).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){$.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,se=!0){let re=0;if(w){let ee=!1;if(F!==null){let xe=F.texture.format;ee=xe===ta||xe===ea||xe===Qr}if(ee){let xe=F.texture.type,Ce=xe===en||xe===Vn||xe===Bi||xe===ki||xe===Kr||xe===jr,Ue=Le.getClearColor(),Re=Le.getClearAlpha(),ke=Ue.r,Ge=Ue.g,Be=Ue.b;Ce?(g[0]=ke,g[1]=Ge,g[2]=Be,g[3]=Re,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ke,_[1]=Ge,_[2]=Be,_[3]=Re,C.clearBufferiv(C.COLOR,0,_))}else re|=C.COLOR_BUFFER_BIT}K&&(re|=C.DEPTH_BUFFER_BIT),se&&(re|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Le.dispose(),le.dispose(),Ie.dispose(),A.dispose(),Ee.dispose(),Fe.dispose(),Q.dispose(),Ae.dispose(),Xe.dispose(),oe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",tn),ve.removeEventListener("sessionend",pl),Hn.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let w=O.autoReset,K=Pe.enabled,se=Pe.autoUpdate,re=Pe.needsUpdate,ee=Pe.type;Z(),O.autoReset=w,Pe.enabled=K,Pe.autoUpdate=se,Pe.needsUpdate=re,Pe.type=ee}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){let K=w.target;K.removeEventListener("dispose",fe),Ne(K)}function Ne(w){We(w),A.remove(w)}function We(w){let K=A.get(w).programs;K!==void 0&&(K.forEach(function(se){oe.releaseProgram(se)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,se,re,ee,xe){K===null&&(K=q);let Ce=ee.isMesh&&ee.matrixWorld.determinant()<0,Ue=gh(w,K,se,re,ee);$.setMaterial(re,Ce);let Re=se.index,ke=1;if(re.wireframe===!0){if(Re=M.getWireframeAttribute(se),Re===void 0)return;ke=2}let Ge=se.drawRange,Be=se.attributes.position,Ze=Ge.start*ke,et=(Ge.start+Ge.count)*ke;xe!==null&&(Ze=Math.max(Ze,xe.start*ke),et=Math.min(et,(xe.start+xe.count)*ke)),Re!==null?(Ze=Math.max(Ze,0),et=Math.min(et,Re.count)):Be!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,Be.count));let ut=et-Ze;if(ut<0||ut===1/0)return;Ae.setup(ee,re,Ue,se,Re);let st,nt=we;if(Re!==null&&(st=R.get(Re),nt=He,nt.setIndex(st)),ee.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*ge()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(ee.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*ge()),ee.isLineSegments?nt.setMode(C.LINES):ee.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else ee.isPoints?nt.setMode(C.POINTS):ee.isSprite&&nt.setMode(C.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))nt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let ze=ee._multiDrawStarts,at=ee._multiDrawCounts,Ke=ee._multiDrawCount,Pt=Re?R.get(Re).bytesPerElement:1,di=A.get(re).currentProgram.getUniforms();for(let Lt=0;Lt<Ke;Lt++)di.setValue(C,"_gl_DrawID",Lt),nt.render(ze[Lt]/Pt,at[Lt])}else if(ee.isInstancedMesh)nt.renderInstances(Ze,ut,ee.count);else if(se.isInstancedBufferGeometry){let ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,at=Math.min(se.instanceCount,ze);nt.renderInstances(Ze,ut,at)}else nt.render(Ze,ut)};function it(w,K,se){w.transparent===!0&&w.side===Ht&&w.forceSinglePass===!1?(w.side=wt,w.needsUpdate=!0,Gs(w,K,se),w.side=xn,w.needsUpdate=!0,Gs(w,K,se),w.side=Ht):Gs(w,K,se)}this.compile=function(w,K,se=null){se===null&&(se=w),h=Ie.get(se),h.init(K),v.push(h),se.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(h.pushLight(ee),ee.castShadow&&h.pushShadow(ee))}),w!==se&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(h.pushLight(ee),ee.castShadow&&h.pushShadow(ee))}),h.setupLights();let re=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let xe=ee.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){let Ue=xe[Ce];it(Ue,se,ee),re.add(Ue)}else it(xe,se,ee),re.add(xe)}),h=v.pop(),re},this.compileAsync=function(w,K,se=null){let re=this.compile(w,K,se);return new Promise(ee=>{function xe(){if(re.forEach(function(Ce){A.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){ee(w);return}setTimeout(xe,10)}Y.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let je=null;function hn(w){je&&je(w)}function tn(){Hn.stop()}function pl(){Hn.start()}let Hn=new ch;Hn.setAnimationLoop(hn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){je=w,ve.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},ve.addEventListener("sessionstart",tn),ve.addEventListener("sessionend",pl),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(K),K=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,K,F),h=Ie.get(w,v.length),h.init(K),v.push(h),y.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(y,Zt,K.reversedDepth),S=this.localClippingEnabled,U=ye.init(this.clippingPlanes,S),f=le.get(w,T.length),f.init(),T.push(f),ve.enabled===!0&&ve.isPresenting===!0){let xe=x.xr.getDepthSensingMesh();xe!==null&&Fa(xe,K,-1/0,x.sortObjects)}Fa(w,K,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(ie,ce),he=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,he&&Le.addToRenderList(f,w),this.info.render.frame++,U===!0&&ye.beginShadows();let se=h.state.shadowsArray;Pe.render(se,w,K),U===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=f.opaque,ee=f.transmissive;if(h.setupLights(),K.isArrayCamera){let xe=K.cameras;if(ee.length>0)for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){let Re=xe[Ce];gl(re,ee,w,Re)}he&&Le.render(w);for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){let Re=xe[Ce];ml(f,w,Re,Re.viewport)}}else ee.length>0&&gl(re,ee,w,K),he&&Le.render(w),ml(f,w,K);F!==null&&D===0&&(ae.updateMultisampleRenderTarget(F),ae.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(x,w,K),Ae.resetDefaultState(),E=-1,b=null,v.pop(),v.length>0?(h=v[v.length-1],U===!0&&ye.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?f=T[T.length-1]:f=null};function Fa(w,K,se,re){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){re&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(y);let Ce=Q.update(w),Ue=w.material;Ue.visible&&f.push(w,Ce,Ue,se,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let Ce=Q.update(w),Ue=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ne.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ne.copy(Ce.boundingSphere.center)),ne.applyMatrix4(w.matrixWorld).applyMatrix4(y)),Array.isArray(Ue)){let Re=Ce.groups;for(let ke=0,Ge=Re.length;ke<Ge;ke++){let Be=Re[ke],Ze=Ue[Be.materialIndex];Ze&&Ze.visible&&f.push(w,Ce,Ze,se,ne.z,Be)}}else Ue.visible&&f.push(w,Ce,Ue,se,ne.z,null)}}let xe=w.children;for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++)Fa(xe[Ce],K,se,re)}function ml(w,K,se,re){let ee=w.opaque,xe=w.transmissive,Ce=w.transparent;h.setupLightsView(se),U===!0&&ye.setGlobalState(x.clippingPlanes,se),re&&$.viewport(B.copy(re)),ee.length>0&&Hs(ee,K,se),xe.length>0&&Hs(xe,K,se),Ce.length>0&&Hs(Ce,K,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function gl(w,K,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[re.id]===void 0&&(h.state.transmissionRenderTarget[re.id]=new sn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?zi:en,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let xe=h.state.transmissionRenderTarget[re.id],Ce=re.viewport||B;xe.setSize(Ce.z*x.transmissionResolutionScale,Ce.w*x.transmissionResolutionScale);let Ue=x.getRenderTarget(),Re=x.getActiveCubeFace(),ke=x.getActiveMipmapLevel();x.setRenderTarget(xe),x.getClearColor(N),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),he&&Le.render(se);let Ge=x.toneMapping;x.toneMapping=bn;let Be=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),h.setupLightsView(re),U===!0&&ye.setGlobalState(x.clippingPlanes,re),Hs(w,se,re),ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let et=0,ut=K.length;et<ut;et++){let st=K[et],nt=st.object,ze=st.geometry,at=st.material,Ke=st.group;if(at.side===Ht&&nt.layers.test(re.layers)){let Pt=at.side;at.side=wt,at.needsUpdate=!0,_l(nt,se,re,ze,at,Ke),at.side=Pt,at.needsUpdate=!0,Ze=!0}}Ze===!0&&(ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe))}x.setRenderTarget(Ue,Re,ke),x.setClearColor(N,G),Be!==void 0&&(re.viewport=Be),x.toneMapping=Ge}function Hs(w,K,se){let re=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,xe=w.length;ee<xe;ee++){let Ce=w[ee],Ue=Ce.object,Re=Ce.geometry,ke=Ce.group,Ge=Ce.material;Ge.allowOverride===!0&&re!==null&&(Ge=re),Ue.layers.test(se.layers)&&_l(Ue,K,se,Re,Ge,ke)}}function _l(w,K,se,re,ee,xe){w.onBeforeRender(x,K,se,re,ee,xe),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(x,K,se,re,w,xe),ee.transparent===!0&&ee.side===Ht&&ee.forceSinglePass===!1?(ee.side=wt,ee.needsUpdate=!0,x.renderBufferDirect(se,K,re,ee,w,xe),ee.side=xn,ee.needsUpdate=!0,x.renderBufferDirect(se,K,re,ee,w,xe),ee.side=Ht):x.renderBufferDirect(se,K,re,ee,w,xe),w.onAfterRender(x,K,se,re,ee,xe)}function Gs(w,K,se){K.isScene!==!0&&(K=q);let re=A.get(w),ee=h.state.lights,xe=h.state.shadowsArray,Ce=ee.state.version,Ue=oe.getParameters(w,ee.state,xe,K,se),Re=oe.getProgramCacheKey(Ue),ke=re.programs;re.environment=w.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(w.isMeshStandardMaterial?Fe:Ee).get(w.envMap||re.environment),re.envMapRotation=re.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",fe),ke=new Map,re.programs=ke);let Ge=ke.get(Re);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Ce)return yl(w,Ue),Ge}else Ue.uniforms=oe.getUniforms(w),w.onBeforeCompile(Ue,x),Ge=oe.acquireProgram(Ue,Re),ke.set(Re,Ge),re.uniforms=Ue.uniforms;let Be=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ye.uniform),yl(w,Ue),re.needsLights=xh(w),re.lightsStateVersion=Ce,re.needsLights&&(Be.ambientLightColor.value=ee.state.ambient,Be.lightProbe.value=ee.state.probe,Be.directionalLights.value=ee.state.directional,Be.directionalLightShadows.value=ee.state.directionalShadow,Be.spotLights.value=ee.state.spot,Be.spotLightShadows.value=ee.state.spotShadow,Be.rectAreaLights.value=ee.state.rectArea,Be.ltc_1.value=ee.state.rectAreaLTC1,Be.ltc_2.value=ee.state.rectAreaLTC2,Be.pointLights.value=ee.state.point,Be.pointLightShadows.value=ee.state.pointShadow,Be.hemisphereLights.value=ee.state.hemi,Be.directionalShadowMap.value=ee.state.directionalShadowMap,Be.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Be.spotShadowMap.value=ee.state.spotShadowMap,Be.spotLightMatrix.value=ee.state.spotLightMatrix,Be.spotLightMap.value=ee.state.spotLightMap,Be.pointShadowMap.value=ee.state.pointShadowMap,Be.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function xl(w){if(w.uniformsList===null){let K=w.currentProgram.getUniforms();w.uniformsList=Xi.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function yl(w,K){let se=A.get(w);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.batchingColor=K.batchingColor,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.instancingMorph=K.instancingMorph,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function gh(w,K,se,re,ee){K.isScene!==!0&&(K=q),ae.resetTextureUnits();let xe=K.fog,Ce=re.isMeshStandardMaterial?K.environment:null,Ue=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kn,Re=(re.isMeshStandardMaterial?Fe:Ee).get(re.envMap||Ce),ke=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ge=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Be=!!se.morphAttributes.position,Ze=!!se.morphAttributes.normal,et=!!se.morphAttributes.color,ut=bn;re.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ut=x.toneMapping);let st=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,nt=st!==void 0?st.length:0,ze=A.get(re),at=h.state.lights;if(U===!0&&(S===!0||w!==b)){let Et=w===b&&re.id===E;ye.setState(re,w,Et)}let Ke=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==at.state.version||ze.outputColorSpace!==Ue||ee.isBatchedMesh&&ze.batching===!1||!ee.isBatchedMesh&&ze.batching===!0||ee.isBatchedMesh&&ze.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ze.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ze.instancing===!1||!ee.isInstancedMesh&&ze.instancing===!0||ee.isSkinnedMesh&&ze.skinning===!1||!ee.isSkinnedMesh&&ze.skinning===!0||ee.isInstancedMesh&&ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ze.instancingMorph===!1&&ee.morphTexture!==null||ze.envMap!==Re||re.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ye.numPlanes||ze.numIntersection!==ye.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==Ze||ze.morphColors!==et||ze.toneMapping!==ut||ze.morphTargetsCount!==nt)&&(Ke=!0):(Ke=!0,ze.__version=re.version);let Pt=ze.currentProgram;Ke===!0&&(Pt=Gs(re,K,ee));let di=!1,Lt=!1,Zi=!1,ot=Pt.getUniforms(),Bt=ze.uniforms;if($.useProgram(Pt.program)&&(di=!0,Lt=!0,Zi=!0),re.id!==E&&(E=re.id,Lt=!0),di||b!==w){$.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(C,"projectionMatrix",w.projectionMatrix),ot.setValue(C,"viewMatrix",w.matrixWorldInverse);let At=ot.map.cameraPosition;At!==void 0&&At.setValue(C,H.setFromMatrixPosition(w.matrixWorld)),j.logarithmicDepthBuffer&&ot.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&ot.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Lt=!0,Zi=!0)}if(ee.isSkinnedMesh){ot.setOptional(C,ee,"bindMatrix"),ot.setOptional(C,ee,"bindMatrixInverse");let Et=ee.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(C,"boneTexture",Et.boneTexture,ae))}ee.isBatchedMesh&&(ot.setOptional(C,ee,"batchingTexture"),ot.setValue(C,"batchingTexture",ee._matricesTexture,ae),ot.setOptional(C,ee,"batchingIdTexture"),ot.setValue(C,"batchingIdTexture",ee._indirectTexture,ae),ot.setOptional(C,ee,"batchingColorTexture"),ee._colorsTexture!==null&&ot.setValue(C,"batchingColorTexture",ee._colorsTexture,ae));let zt=se.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&me.update(ee,se,Pt),(Lt||ze.receiveShadow!==ee.receiveShadow)&&(ze.receiveShadow=ee.receiveShadow,ot.setValue(C,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Bt.envMap.value=Re,Bt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(Bt.envMapIntensity.value=K.environmentIntensity),Lt&&(ot.setValue(C,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&_h(Bt,Zi),xe&&re.fog===!0&&pe.refreshFogUniforms(Bt,xe),pe.refreshMaterialUniforms(Bt,re,I,J,h.state.transmissionRenderTarget[w.id]),Xi.upload(C,xl(ze),Bt,ae)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xi.upload(C,xl(ze),Bt,ae),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&ot.setValue(C,"center",ee.center),ot.setValue(C,"modelViewMatrix",ee.modelViewMatrix),ot.setValue(C,"normalMatrix",ee.normalMatrix),ot.setValue(C,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let Et=re.uniformsGroups;for(let At=0,Oa=Et.length;At<Oa;At++){let Gn=Et[At];Xe.update(Gn,Pt),Xe.bind(Gn,Pt)}}return Pt}function _h(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function xh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,K,se){let re=A.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=K,A.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){let se=A.get(w);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0};let yh=C.createFramebuffer();this.setRenderTarget=function(w,K=0,se=0){F=w,P=K,D=se;let re=!0,ee=null,xe=!1,Ce=!1;if(w){let Re=A.get(w);if(Re.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(C.FRAMEBUFFER,null),re=!1;else if(Re.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(Re.__hasExternalTextures)ae.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Be=w.depthTexture;if(Re.__boundDepthTexture!==Be){if(Be!==null&&A.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);let Ge=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?ee=Ge[K][se]:ee=Ge[K],xe=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?ee=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?ee=Ge[se]:ee=Ge,B.copy(w.viewport),k.copy(w.scissor),te=w.scissorTest}else B.copy(de).multiplyScalar(I).floor(),k.copy(Me).multiplyScalar(I).floor(),te=Se;if(se!==0&&(ee=yh),$.bindFramebuffer(C.FRAMEBUFFER,ee)&&re&&$.drawBuffers(w,ee),$.viewport(B),$.scissor(k),$.setScissorTest(te),xe){let Re=A.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+K,Re.__webglTexture,se)}else if(Ce){let Re=K;for(let ke=0;ke<w.textures.length;ke++){let Ge=A.get(w.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,se,Re)}}else if(w!==null&&se!==0){let Re=A.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,se)}E=-1},this.readRenderTargetPixels=function(w,K,se,re,ee,xe,Ce,Ue=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re){$.bindFramebuffer(C.FRAMEBUFFER,Re);try{let ke=w.textures[Ue],Ge=ke.format,Be=ke.type;if(!j.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-re&&se>=0&&se<=w.height-ee&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(K,se,re,ee,Oe.convert(Ge),Oe.convert(Be),xe))}finally{let ke=F!==null?A.get(F).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,K,se,re,ee,xe,Ce,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re)if(K>=0&&K<=w.width-re&&se>=0&&se<=w.height-ee){$.bindFramebuffer(C.FRAMEBUFFER,Re);let ke=w.textures[Ue],Ge=ke.format,Be=ke.type;if(!j.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(K,se,re,ee,Oe.convert(Ge),Oe.convert(Be),0);let et=F!==null?A.get(F).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,et);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Lc(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.deleteBuffer(Ze),C.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,se=0){let re=Math.pow(2,-se),ee=Math.floor(w.image.width*re),xe=Math.floor(w.image.height*re),Ce=K!==null?K.x:0,Ue=K!==null?K.y:0;ae.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,se,0,0,Ce,Ue,ee,xe),$.unbindTexture()};let vh=C.createFramebuffer(),Mh=C.createFramebuffer();this.copyTextureToTexture=function(w,K,se=null,re=null,ee=0,xe=null){xe===null&&(ee!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=ee,ee=0):xe=0);let Ce,Ue,Re,ke,Ge,Be,Ze,et,ut,st=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(se!==null)Ce=se.max.x-se.min.x,Ue=se.max.y-se.min.y,Re=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Ge=se.min.y,Be=se.isBox3?se.min.z:0;else{let zt=Math.pow(2,-ee);Ce=Math.floor(st.width*zt),Ue=Math.floor(st.height*zt),w.isDataArrayTexture?Re=st.depth:w.isData3DTexture?Re=Math.floor(st.depth*zt):Re=1,ke=0,Ge=0,Be=0}re!==null?(Ze=re.x,et=re.y,ut=re.z):(Ze=0,et=0,ut=0);let nt=Oe.convert(K.format),ze=Oe.convert(K.type),at;K.isData3DTexture?(ae.setTexture3D(K,0),at=C.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ae.setTexture2DArray(K,0),at=C.TEXTURE_2D_ARRAY):(ae.setTexture2D(K,0),at=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,K.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,K.unpackAlignment);let Ke=C.getParameter(C.UNPACK_ROW_LENGTH),Pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),di=C.getParameter(C.UNPACK_SKIP_PIXELS),Lt=C.getParameter(C.UNPACK_SKIP_ROWS),Zi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);let ot=w.isDataArrayTexture||w.isData3DTexture,Bt=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){let zt=A.get(w),Et=A.get(K),At=A.get(zt.__renderTarget),Oa=A.get(Et.__renderTarget);$.bindFramebuffer(C.READ_FRAMEBUFFER,At.__webglFramebuffer),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,Oa.__webglFramebuffer);for(let Gn=0;Gn<Re;Gn++)ot&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(w).__webglTexture,ee,Be+Gn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(K).__webglTexture,xe,ut+Gn)),C.blitFramebuffer(ke,Ge,Ce,Ue,Ze,et,Ce,Ue,C.DEPTH_BUFFER_BIT,C.NEAREST);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||A.has(w)){let zt=A.get(w),Et=A.get(K);$.bindFramebuffer(C.READ_FRAMEBUFFER,vh),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mh);for(let At=0;At<Re;At++)ot?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,zt.__webglTexture,ee,Be+At):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,zt.__webglTexture,ee),Bt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,xe,ut+At):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,xe),ee!==0?C.blitFramebuffer(ke,Ge,Ce,Ue,Ze,et,Ce,Ue,C.COLOR_BUFFER_BIT,C.NEAREST):Bt?C.copyTexSubImage3D(at,xe,Ze,et,ut+At,ke,Ge,Ce,Ue):C.copyTexSubImage2D(at,xe,Ze,et,ke,Ge,Ce,Ue);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Bt?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(at,xe,Ze,et,ut,Ce,Ue,Re,nt,ze,st.data):K.isCompressedArrayTexture?C.compressedTexSubImage3D(at,xe,Ze,et,ut,Ce,Ue,Re,nt,st.data):C.texSubImage3D(at,xe,Ze,et,ut,Ce,Ue,Re,nt,ze,st):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,Ze,et,Ce,Ue,nt,ze,st.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,Ze,et,st.width,st.height,nt,st.data):C.texSubImage2D(C.TEXTURE_2D,xe,Ze,et,Ce,Ue,nt,ze,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,di),C.pixelStorei(C.UNPACK_SKIP_ROWS,Lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zi),xe===0&&K.generateMipmaps&&C.generateMipmap(at),$.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){P=0,D=0,F=null,$.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var ks=new X;function Wt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ks.copy(e),ks[n]=0,ks.normalize();let l=.5*a/(a+o),u=1-ks.angleTo(i)/c;return Math.sign(ks[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Yi=class i extends Nn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new X,l=new X,u=new X(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,g=d.length/6,_=new X,f=.5/a;for(let h=0,T=0;h<d.length;h+=3,T+=2)switch(c.fromArray(d,h),l.copy(c),l.x-=Math.sign(l.x)*f,l.y-=Math.sign(l.y)*f,l.z-=Math.sign(l.z)*f,l.normalize(),d[h+0]=u.x*Math.sign(c.x)+l.x*r,d[h+1]=u.y*Math.sign(c.y)+l.y*r,d[h+2]=u.z*Math.sign(c.z)+l.z*r,p[h+0]=l.x,p[h+1]=l.y,p[h+2]=l.z,Math.floor(h/g)){case 0:_.set(1,0,0),m[T+0]=Wt(_,l,"z","y",r,n),m[T+1]=1-Wt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),m[T+0]=1-Wt(_,l,"z","y",r,n),m[T+1]=1-Wt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),m[T+0]=1-Wt(_,l,"x","z",r,e),m[T+1]=Wt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),m[T+0]=1-Wt(_,l,"x","z",r,e),m[T+1]=1-Wt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),m[T+0]=1-Wt(_,l,"x","y",r,e),m[T+1]=1-Wt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),m[T+0]=Wt(_,l,"x","y",r,e),m[T+1]=1-Wt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ul=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),dl={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function ig(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let a=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=a,s.data[r+3]=255}return n.putImageData(s,0,0),new Fn(t)}function fl(i,{seed:e=73,surfaceOnly:t=!1}={}){let n=dl[i];if(!n)throw Error("Unknown tile "+i);let s=new Jt,r=()=>(e=e*1664525+1013904223>>>0)/4294967296,a=(m,g={})=>new ti({color:m,roughness:.75,...g}),o=(m,g,_=0,f=0,h=0)=>{let T=new xt(m,g);return T.position.set(_,f,h),T.castShadow=T.receiveShadow=!0,s.add(T),T},c=a(n.color,{bumpMap:ig(73,n.kind==="earth"?.65:.12),bumpScale:n.grain||.18,roughness:n.kind==="earth"?.95:.65}),l=n.height+3.5,u,d;if(n.kind==="earth"){let m=73.5,g=5,_=-m/2,f=m/2,h=new _t;h.moveTo(_+g,_),h.lineTo(f-g,_),h.quadraticCurveTo(f,_,f,_+g),h.lineTo(f,f-g),h.quadraticCurveTo(f,f,f-g,f),h.lineTo(_+g,f),h.quadraticCurveTo(_,f,_,f-g),h.lineTo(_,_+g),h.quadraticCurveTo(_,_,_+g,_),h.closePath(),u=new Mn(h,{depth:n.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),d=-1}else u=new Yi(78.5,78.5,l,4,7.5),d=(n.height-3.5)/2;let p=o(u,c,0,0,d);if(p.userData.surface=!0,!t)if(n.kind==="earth"){let m=[a("#c59b6b"),a("#98714c"),a("#dbb78a")];for(let g=0;g<n.pebbles;g++){let _=(r()-.5)*59,f=(r()-.5)*59,h=.8+r()*1.2,T=o(new On(1,9,6),m[g%3],_,f,n.height-.25);T.scale.set(h*1.6,h,h*.55),T.rotation.z=r()*6}for(let g=0;g<22;g++){let _=o(new On(1,8,6),c,(r()-.5)*62,(r()-.5)*62,n.height-.35),f=1+r()*1.5;_.scale.set(f*1.6,f,.5)}}else if(n.kind!=="reference"){let m=[a("#d3f471"),a("#b1e443"),a("#87bf24")],g=(_,f,h)=>{let T=new _t;return T.moveTo(-h,0),T.quadraticCurveTo(-h*.8,_*.6,f,_),T.quadraticCurveTo(h*1.1,_*.45,h,0),T.closePath(),new Mn(T,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let _=0;_<n.tufts;_++){let f=(r()-.5)*59,h=(r()-.5)*59;for(let T=0;T<3;T++){let v=n.bladeHeight*(.6+r()*.4),x=o(g(v,(T-1)*v*.4,n.kind==="grass"&&i==="grass-velvet"?1.6:1.1),m[T],f+(T-1)*1.8,h,n.height-.15);x.rotation.x=Math.PI/2,x.rotateOnWorldAxis(new X(0,0,1),r()*Math.PI*2)}}if(n.kind==="clover")for(let _=0;_<6;_++){let f=(r()-.5)*50,h=(r()-.5)*50;for(let T=0;T<3;T++){let v=T*Math.PI*2/3,x=o(new On(1,12,8),m[_%2],f+Math.cos(v)*2.3,h+Math.sin(v)*2.3,n.height+1.7);x.scale.set(3.3,2.6,.9),x.rotation.z=v}}c.emissive.set("#4c790c"),c.emissiveIntensity=.055}else{let m=a("#9fc53b");for(let g=0;g<4;g++){let _=g*Math.PI/2+.3,f=o(new On(1,12,8),m,21+Math.cos(_)*4,-20+Math.sin(_)*4,13.7);f.scale.set(4.4,2.6,.65),f.rotation.z=_}}return n.kind!=="earth"&&n.kind!=="reference"&&(c.emissive.set("#4c790c"),c.emissiveIntensity=.055),s.userData={variant:i,top:n.height,walkable:!0,footprint:ul},s}function mh(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var sg=gt,Vs=class i extends ii{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,a=new Cs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(W,U){if(W.nodeType!==1)return;let S=x(W),y=!1,H=null;switch(W.nodeName){case"svg":U=g(W,U);break;case"style":r(W);break;case"g":U=g(W,U);break;case"path":U=g(W,U),W.hasAttribute("d")&&(H=s(W));break;case"rect":U=g(W,U),H=c(W);break;case"polygon":U=g(W,U),H=l(W);break;case"polyline":U=g(W,U),H=u(W);break;case"circle":U=g(W,U),H=d(W);break;case"ellipse":U=g(W,U),H=p(W);break;case"line":U=g(W,U),H=m(W);break;case"defs":y=!0;break;case"use":U=g(W,U);let he=(W.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ge=W.viewportElement.getElementById(he);ge?n(ge,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break;default:}H&&(U.fill!==void 0&&U.fill!=="none"&&H.color.setStyle(U.fill,sg),P(H,de),k.push(H),H.userData={node:W,style:U});let ne=W.childNodes;for(let q=0;q<ne.length;q++){let he=ne[q];y&&he.nodeName!=="style"&&he.nodeName!=="defs"||n(he,U)}S&&(N.pop(),N.length>0?de.copy(N[N.length-1]):de.identity())}function s(W){let U=new Qt,S=new ue,y=new ue,H=new ue,ne=!0,q=!1,he=W.getAttribute("d");if(he===""||he==="none")return null;let ge=he.match(/[a-df-z][^a-df-z]*/ig);for(let C=0,V=ge.length;C<V;C++){let Y=ge[C],j=Y.charAt(0),$=Y.slice(1).trim();ne===!0&&(q=!0,ne=!1);let O;switch(j){case"M":O=f($);for(let A=0,ae=O.length;A<ae;A+=2)S.x=O[A+0],S.y=O[A+1],y.x=S.x,y.y=S.y,A===0?U.moveTo(S.x,S.y):U.lineTo(S.x,S.y),A===0&&H.copy(S);break;case"H":O=f($);for(let A=0,ae=O.length;A<ae;A++)S.x=O[A],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"V":O=f($);for(let A=0,ae=O.length;A<ae;A++)S.y=O[A],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"L":O=f($);for(let A=0,ae=O.length;A<ae;A+=2)S.x=O[A+0],S.y=O[A+1],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"C":O=f($);for(let A=0,ae=O.length;A<ae;A+=6)U.bezierCurveTo(O[A+0],O[A+1],O[A+2],O[A+3],O[A+4],O[A+5]),y.x=O[A+2],y.y=O[A+3],S.x=O[A+4],S.y=O[A+5],A===0&&q===!0&&H.copy(S);break;case"S":O=f($);for(let A=0,ae=O.length;A<ae;A+=4)U.bezierCurveTo(_(S.x,y.x),_(S.y,y.y),O[A+0],O[A+1],O[A+2],O[A+3]),y.x=O[A+0],y.y=O[A+1],S.x=O[A+2],S.y=O[A+3],A===0&&q===!0&&H.copy(S);break;case"Q":O=f($);for(let A=0,ae=O.length;A<ae;A+=4)U.quadraticCurveTo(O[A+0],O[A+1],O[A+2],O[A+3]),y.x=O[A+0],y.y=O[A+1],S.x=O[A+2],S.y=O[A+3],A===0&&q===!0&&H.copy(S);break;case"T":O=f($);for(let A=0,ae=O.length;A<ae;A+=2){let Ee=_(S.x,y.x),Fe=_(S.y,y.y);U.quadraticCurveTo(Ee,Fe,O[A+0],O[A+1]),y.x=Ee,y.y=Fe,S.x=O[A+0],S.y=O[A+1],A===0&&q===!0&&H.copy(S)}break;case"A":O=f($,[3,4],7);for(let A=0,ae=O.length;A<ae;A+=7){if(O[A+5]==S.x&&O[A+6]==S.y)continue;let Ee=S.clone();S.x=O[A+5],S.y=O[A+6],y.x=S.x,y.y=S.y,a(U,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Ee,S),A===0&&q===!0&&H.copy(S)}break;case"m":O=f($);for(let A=0,ae=O.length;A<ae;A+=2)S.x+=O[A+0],S.y+=O[A+1],y.x=S.x,y.y=S.y,A===0?U.moveTo(S.x,S.y):U.lineTo(S.x,S.y),A===0&&H.copy(S);break;case"h":O=f($);for(let A=0,ae=O.length;A<ae;A++)S.x+=O[A],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"v":O=f($);for(let A=0,ae=O.length;A<ae;A++)S.y+=O[A],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"l":O=f($);for(let A=0,ae=O.length;A<ae;A+=2)S.x+=O[A+0],S.y+=O[A+1],y.x=S.x,y.y=S.y,U.lineTo(S.x,S.y),A===0&&q===!0&&H.copy(S);break;case"c":O=f($);for(let A=0,ae=O.length;A<ae;A+=6)U.bezierCurveTo(S.x+O[A+0],S.y+O[A+1],S.x+O[A+2],S.y+O[A+3],S.x+O[A+4],S.y+O[A+5]),y.x=S.x+O[A+2],y.y=S.y+O[A+3],S.x+=O[A+4],S.y+=O[A+5],A===0&&q===!0&&H.copy(S);break;case"s":O=f($);for(let A=0,ae=O.length;A<ae;A+=4)U.bezierCurveTo(_(S.x,y.x),_(S.y,y.y),S.x+O[A+0],S.y+O[A+1],S.x+O[A+2],S.y+O[A+3]),y.x=S.x+O[A+0],y.y=S.y+O[A+1],S.x+=O[A+2],S.y+=O[A+3],A===0&&q===!0&&H.copy(S);break;case"q":O=f($);for(let A=0,ae=O.length;A<ae;A+=4)U.quadraticCurveTo(S.x+O[A+0],S.y+O[A+1],S.x+O[A+2],S.y+O[A+3]),y.x=S.x+O[A+0],y.y=S.y+O[A+1],S.x+=O[A+2],S.y+=O[A+3],A===0&&q===!0&&H.copy(S);break;case"t":O=f($);for(let A=0,ae=O.length;A<ae;A+=2){let Ee=_(S.x,y.x),Fe=_(S.y,y.y);U.quadraticCurveTo(Ee,Fe,S.x+O[A+0],S.y+O[A+1]),y.x=Ee,y.y=Fe,S.x=S.x+O[A+0],S.y=S.y+O[A+1],A===0&&q===!0&&H.copy(S)}break;case"a":O=f($,[3,4],7);for(let A=0,ae=O.length;A<ae;A+=7){if(O[A+5]==0&&O[A+6]==0)continue;let Ee=S.clone();S.x+=O[A+5],S.y+=O[A+6],y.x=S.x,y.y=S.y,a(U,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Ee,S),A===0&&q===!0&&H.copy(S)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(S.copy(H),U.currentPath.currentPoint.copy(S),ne=!0);break;default:console.warn(Y)}q=!1}return U}function r(W){if(!(!W.sheet||!W.sheet.cssRules||!W.sheet.cssRules.length))for(let U=0;U<W.sheet.cssRules.length;U++){let S=W.sheet.cssRules[U];if(S.type!==1)continue;let y=S.selectorText.split(/,/gm).filter(Boolean).map(H=>H.trim());for(let H=0;H<y.length;H++){let ne=Object.fromEntries(Object.entries(S.style).filter(([,q])=>q!==""));te[y[H]]=Object.assign(te[y[H]]||{},ne)}}}function a(W,U,S,y,H,ne,q,he){if(U==0||S==0){W.lineTo(he.x,he.y);return}y=y*Math.PI/180,U=Math.abs(U),S=Math.abs(S);let ge=(q.x-he.x)/2,C=(q.y-he.y)/2,V=Math.cos(y)*ge+Math.sin(y)*C,Y=-Math.sin(y)*ge+Math.cos(y)*C,j=U*U,$=S*S,O=V*V,A=Y*Y,ae=O/j+A/$;if(ae>1){let ye=Math.sqrt(ae);U=ye*U,S=ye*S,j=U*U,$=S*S}let Ee=j*A+$*O,Fe=(j*$-Ee)/Ee,R=Math.sqrt(Math.max(0,Fe));H===ne&&(R=-R);let M=R*U*Y/S,Q=-R*S*V/U,oe=Math.cos(y)*M-Math.sin(y)*Q+(q.x+he.x)/2,pe=Math.sin(y)*M+Math.cos(y)*Q+(q.y+he.y)/2,le=o(1,0,(V-M)/U,(Y-Q)/S),Ie=o((V-M)/U,(Y-Q)/S,(-V-M)/U,(-Y-Q)/S)%(Math.PI*2);W.currentPath.absellipse(oe,pe,U,S,le,le+Ie,ne===0,y)}function o(W,U,S,y){let H=W*S+U*y,ne=Math.sqrt(W*W+U*U)*Math.sqrt(S*S+y*y),q=Math.acos(Math.max(-1,Math.min(1,H/ne)));return W*y-U*S<0&&(q=-q),q}function c(W){let U=v(W.getAttribute("x")||0),S=v(W.getAttribute("y")||0),y=v(W.getAttribute("rx")||W.getAttribute("ry")||0),H=v(W.getAttribute("ry")||W.getAttribute("rx")||0),ne=v(W.getAttribute("width")),q=v(W.getAttribute("height")),he=1-.551915024494,ge=new Qt;return ge.moveTo(U+y,S),ge.lineTo(U+ne-y,S),(y!==0||H!==0)&&ge.bezierCurveTo(U+ne-y*he,S,U+ne,S+H*he,U+ne,S+H),ge.lineTo(U+ne,S+q-H),(y!==0||H!==0)&&ge.bezierCurveTo(U+ne,S+q-H*he,U+ne-y*he,S+q,U+ne-y,S+q),ge.lineTo(U+y,S+q),(y!==0||H!==0)&&ge.bezierCurveTo(U+y*he,S+q,U,S+q-H*he,U,S+q-H),ge.lineTo(U,S+H),(y!==0||H!==0)&&ge.bezierCurveTo(U,S+H*he,U+y*he,S,U+y,S),ge}function l(W){function U(ne,q,he){let ge=v(q),C=v(he);H===0?y.moveTo(ge,C):y.lineTo(ge,C),H++}let S=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new Qt,H=0;return W.getAttribute("points").replace(S,U),y.currentPath.autoClose=!0,y}function u(W){function U(ne,q,he){let ge=v(q),C=v(he);H===0?y.moveTo(ge,C):y.lineTo(ge,C),H++}let S=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,y=new Qt,H=0;return W.getAttribute("points").replace(S,U),y.currentPath.autoClose=!1,y}function d(W){let U=v(W.getAttribute("cx")||0),S=v(W.getAttribute("cy")||0),y=v(W.getAttribute("r")||0),H=new an;H.absarc(U,S,y,0,Math.PI*2);let ne=new Qt;return ne.subPaths.push(H),ne}function p(W){let U=v(W.getAttribute("cx")||0),S=v(W.getAttribute("cy")||0),y=v(W.getAttribute("rx")||0),H=v(W.getAttribute("ry")||0),ne=new an;ne.absellipse(U,S,y,H,0,Math.PI*2);let q=new Qt;return q.subPaths.push(ne),q}function m(W){let U=v(W.getAttribute("x1")||0),S=v(W.getAttribute("y1")||0),y=v(W.getAttribute("x2")||0),H=v(W.getAttribute("y2")||0),ne=new Qt;return ne.moveTo(U,S),ne.lineTo(y,H),ne.currentPath.autoClose=!1,ne}function g(W,U){U=Object.assign({},U);let S={};if(W.hasAttribute("class")){let q=W.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<q.length;he++)S=Object.assign(S,te["."+q[he]])}W.hasAttribute("id")&&(S=Object.assign(S,te["#"+W.getAttribute("id")]));function y(q,he,ge){ge===void 0&&(ge=function(V){return V.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),V}),W.hasAttribute(q)&&(U[he]=ge(W.getAttribute(q))),S[q]&&(U[he]=ge(S[q])),W.style&&W.style[q]!==""&&(U[he]=ge(W.style[q]))}function H(q){return Math.max(0,Math.min(1,v(q)))}function ne(q){return Math.max(0,v(q))}return y("fill","fill"),y("fill-opacity","fillOpacity",H),y("fill-rule","fillRule"),y("opacity","opacity",H),y("stroke","stroke"),y("stroke-opacity","strokeOpacity",H),y("stroke-width","strokeWidth",ne),y("stroke-linejoin","strokeLineJoin"),y("stroke-linecap","strokeLineCap"),y("stroke-miterlimit","strokeMiterLimit",ne),y("visibility","visibility"),U}function _(W,U){return W-(U-W)}function f(W,U,S){if(typeof W!="string")throw new TypeError("Invalid input: "+typeof W);let y={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},H=0,ne=1,q=2,he=3,ge=H,C=!0,V="",Y="",j=[];function $(Ee,Fe,R){let M=new SyntaxError('Unexpected character "'+Ee+'" at index '+Fe+".");throw M.partial=R,M}function O(){V!==""&&(Y===""?j.push(Number(V)):j.push(Number(V)*Math.pow(10,Number(Y)))),V="",Y=""}let A,ae=W.length;for(let Ee=0;Ee<ae;Ee++){if(A=W[Ee],Array.isArray(U)&&U.includes(j.length%S)&&y.FLAGS.test(A)){ge=ne,V=A,O();continue}if(ge===H){if(y.WHITESPACE.test(A))continue;if(y.DIGIT.test(A)||y.SIGN.test(A)){ge=ne,V=A;continue}if(y.POINT.test(A)){ge=q,V=A;continue}y.COMMA.test(A)&&(C&&$(A,Ee,j),C=!0)}if(ge===ne){if(y.DIGIT.test(A)){V+=A;continue}if(y.POINT.test(A)){V+=A,ge=q;continue}if(y.EXP.test(A)){ge=he;continue}y.SIGN.test(A)&&V.length===1&&y.SIGN.test(V[0])&&$(A,Ee,j)}if(ge===q){if(y.DIGIT.test(A)){V+=A;continue}if(y.EXP.test(A)){ge=he;continue}y.POINT.test(A)&&V[V.length-1]==="."&&$(A,Ee,j)}if(ge===he){if(y.DIGIT.test(A)){Y+=A;continue}if(y.SIGN.test(A)){if(Y===""){Y+=A;continue}Y.length===1&&y.SIGN.test(Y)&&$(A,Ee,j)}}y.WHITESPACE.test(A)?(O(),ge=H,C=!1):y.COMMA.test(A)?(O(),ge=H,C=!0):y.SIGN.test(A)?(O(),ge=ne,V=A):y.POINT.test(A)?(O(),ge=q,V=A):$(A,Ee,j)}return O(),j}let h=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(W){let U="px";if(typeof W=="string"||W instanceof String)for(let y=0,H=h.length;y<H;y++){let ne=h[y];if(W.endsWith(ne)){U=ne,W=W.substring(0,W.length-ne.length);break}}let S;return U==="px"&&t.defaultUnit!=="px"?S=T.in[t.defaultUnit]/t.defaultDPI:(S=T[U][t.defaultUnit],S<0&&(S=T[U].in*t.defaultDPI)),S*parseFloat(W)}function x(W){if(!(W.hasAttribute("transform")||W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))))return null;let U=L(W);return N.length>0&&U.premultiply(N[N.length-1]),de.copy(U),N.push(U),U}function L(W){let U=new Ve,S=G;if(W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))){let y=v(W.getAttribute("x")),H=v(W.getAttribute("y"));U.translate(y,H)}if(W.hasAttribute("transform")){let y=W.getAttribute("transform").split(")");for(let H=y.length-1;H>=0;H--){let ne=y[H].trim();if(ne==="")continue;let q=ne.indexOf("("),he=ne.length;if(q>0&&q<he){let ge=ne.slice(0,q),C=f(ne.slice(q+1));switch(S.identity(),ge){case"translate":if(C.length>=1){let V=C[0],Y=0;C.length>=2&&(Y=C[1]),S.translate(V,Y)}break;case"rotate":if(C.length>=1){let V=0,Y=0,j=0;V=C[0]*Math.PI/180,C.length>=3&&(Y=C[1],j=C[2]),z.makeTranslation(-Y,-j),J.makeRotation(V),I.multiplyMatrices(J,z),z.makeTranslation(Y,j),S.multiplyMatrices(z,I)}break;case"scale":if(C.length>=1){let V=C[0],Y=V;C.length>=2&&(Y=C[1]),S.scale(V,Y)}break;case"skewX":C.length===1&&S.set(1,Math.tan(C[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":C.length===1&&S.set(1,0,0,Math.tan(C[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":C.length===6&&S.set(C[0],C[2],C[4],C[1],C[3],C[5],0,0,1);break}}U.premultiply(S)}}return U}function P(W,U){function S(q){ce.set(q.x,q.y,1).applyMatrix3(U),q.set(ce.x,ce.y)}function y(q){let he=q.xRadius,ge=q.yRadius,C=Math.cos(q.aRotation),V=Math.sin(q.aRotation),Y=new X(he*C,he*V,0),j=new X(-ge*V,ge*C,0),$=Y.applyMatrix3(U),O=j.applyMatrix3(U),A=G.set($.x,O.x,0,$.y,O.y,0,0,0,1),ae=z.copy(A).invert(),R=J.copy(ae).transpose().multiply(ae).elements,M=B(R[0],R[1],R[4]),Q=Math.sqrt(M.rt1),oe=Math.sqrt(M.rt2);if(q.xRadius=1/Q,q.yRadius=1/oe,q.aRotation=Math.atan2(M.sn,M.cs),!((q.aEndAngle-q.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let le=z.set(Q,0,0,0,oe,0,0,0,1),Ie=J.set(M.cs,M.sn,0,-M.sn,M.cs,0,0,0,1),ye=le.multiply(Ie).multiply(A),Pe=Le=>{let{x:me,y:we}=new X(Math.cos(Le),Math.sin(Le),0).applyMatrix3(ye);return Math.atan2(we,me)};q.aStartAngle=Pe(q.aStartAngle),q.aEndAngle=Pe(q.aEndAngle),D(U)&&(q.aClockwise=!q.aClockwise)}}function H(q){let he=E(U),ge=b(U);q.xRadius*=he,q.yRadius*=ge;let C=he>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);q.aRotation+=C,D(U)&&(q.aStartAngle*=-1,q.aEndAngle*=-1,q.aClockwise=!q.aClockwise)}let ne=W.subPaths;for(let q=0,he=ne.length;q<he;q++){let C=ne[q].curves;for(let V=0;V<C.length;V++){let Y=C[V];Y.isLineCurve?(S(Y.v1),S(Y.v2)):Y.isCubicBezierCurve?(S(Y.v0),S(Y.v1),S(Y.v2),S(Y.v3)):Y.isQuadraticBezierCurve?(S(Y.v0),S(Y.v1),S(Y.v2)):Y.isEllipseCurve&&(ie.set(Y.aX,Y.aY),S(ie),Y.aX=ie.x,Y.aY=ie.y,F(U)?y(Y):H(Y))}}}function D(W){let U=W.elements;return U[0]*U[4]-U[1]*U[3]<0}function F(W){let U=W.elements,S=U[0]*U[3]+U[1]*U[4];if(S===0)return!1;let y=E(W),H=b(W);return Math.abs(S/(y*H))>Number.EPSILON}function E(W){let U=W.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function b(W){let U=W.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function B(W,U,S){let y,H,ne,q,he,ge=W+S,C=W-S,V=Math.sqrt(C*C+4*U*U);return ge>0?(y=.5*(ge+V),he=1/y,H=W*he*S-U*he*U):ge<0?H=.5*(ge-V):(y=.5*V,H=-.5*V),C>0?ne=C+V:ne=C-V,Math.abs(ne)>2*Math.abs(U)?(he=-2*U/ne,q=1/Math.sqrt(1+he*he),ne=he*q):Math.abs(U)===0?(ne=1,q=0):(he=-.5*ne/U,ne=1/Math.sqrt(1+he*he),q=he*ne),C>0&&(he=ne,ne=-q,q=he),{rt1:y,rt2:H,cs:ne,sn:q}}let k=[],te={},N=[],G=new Ve,z=new Ve,J=new Ve,I=new Ve,ie=new ue,ce=new X,de=new Ve,Me=new DOMParser().parseFromString(e,"image/svg+xml");return n(Me.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:Me.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,f,h,T){let v=_.x,x=f.x,L=h.x,P=T.x,D=_.y,F=f.y,E=h.y,b=T.y,B=(P-L)*(D-E)-(b-E)*(v-L),k=(x-v)*(D-E)-(F-D)*(v-L),te=(b-E)*(x-v)-(P-L)*(F-D),N=B/te,G=k/te;if(te===0&&B!==0||N<=0||N>=1||G<0||G>1)return null;if(B===0&&te===0){for(let z=0;z<2;z++)if(a(z===0?h:T,_,f),s.loc==n.ORIGIN){let J=z===0?h:T;return{x:J.x,y:J.y,t:s.t}}else if(s.loc==n.BETWEEN){let J=+(v+s.t*(x-v)).toPrecision(10),I=+(D+s.t*(F-D)).toPrecision(10);return{x:J,y:I,t:s.t}}return null}else{for(let I=0;I<2;I++)if(a(I===0?h:T,_,f),s.loc==n.ORIGIN){let ie=I===0?h:T;return{x:ie.x,y:ie.y,t:s.t}}let z=+(v+N*(x-v)).toPrecision(10),J=+(D+N*(F-D)).toPrecision(10);return{x:z,y:J,t:N}}}function a(_,f,h){let T=h.x-f.x,v=h.y-f.y,x=_.x-f.x,L=_.y-f.y,P=T*L-x*v;if(_.x===f.x&&_.y===f.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===h.x&&_.y===h.y){s.loc=n.DESTINATION,s.t=1;return}if(P<-Number.EPSILON){s.loc=n.LEFT;return}if(P>Number.EPSILON){s.loc=n.RIGHT;return}if(T*x<0||v*L<0){s.loc=n.BEHIND;return}if(Math.sqrt(T*T+v*v)<Math.sqrt(x*x+L*L)){s.loc=n.BEYOND;return}let D;T!==0?D=x/T:D=L/v,s.loc=n.BETWEEN,s.t=D}function o(_,f){let h=[],T=[];for(let v=1;v<_.length;v++){let x=_[v-1],L=_[v];for(let P=1;P<f.length;P++){let D=f[P-1],F=f[P],E=r(x,L,D,F);E!==null&&h.find(b=>b.t<=E.t+Number.EPSILON&&b.t>=E.t-Number.EPSILON)===void 0&&(h.push(E),T.push(new ue(E.x,E.y)))}}return T}function c(_,f,h){let T=new ue;f.getCenter(T);let v=[];return h.forEach(x=>{x.boundingBox.containsPoint(T)&&o(_,x.points).forEach(P=>{v.push({identifier:x.identifier,isCW:x.isCW,point:P})})}),v.sort((x,L)=>x.point.x-L.point.x),v}function l(_,f,h,T,v){(v==null||v==="")&&(v="nonzero");let x=new ue;_.boundingBox.getCenter(x);let L=[new ue(h,x.y),new ue(T,x.y)],P=c(L,_.boundingBox,f);P.sort((k,te)=>k.point.x-te.point.x);let D=[],F=[];P.forEach(k=>{k.identifier===_.identifier?D.push(k):F.push(k)});let E=D[0].point.x,b=[],B=0;for(;B<F.length&&F[B].point.x<E;)b.length>0&&b[b.length-1]===F[B].identifier?b.pop():b.push(F[B].identifier),B++;if(b.push(_.identifier),v==="evenodd"){let k=b.length%2===0,te=b[b.length-2];return{identifier:_.identifier,isHole:k,for:te}}else if(v==="nonzero"){let k=!0,te=null,N=null;for(let G=0;G<b.length;G++){let z=b[G];k?(N=f[z].isCW,k=!1,te=z):N!==f[z].isCW&&(N=f[z].isCW,k=!0)}return{identifier:_.identifier,isHole:k,for:te}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,d=-999999999,p=e.subPaths.map(_=>{let f=_.getPoints(),h=-999999999,T=999999999,v=-999999999,x=999999999;for(let L=0;L<f.length;L++){let P=f[L];P.y>h&&(h=P.y),P.y<T&&(T=P.y),P.x>v&&(v=P.x),P.x<x&&(x=P.x)}return d<=v&&(d=v+1),u>=x&&(u=x-1),{curves:_.curves,points:f,isCW:Mt.isClockWise(f),identifier:-1,boundingBox:new Ls(new ue(x,T),new ue(v,h))}});p=p.filter(_=>_.points.length>1);for(let _=0;_<p.length;_++)p[_].identifier=_;let m=p.map(_=>l(_,p,u,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return p.forEach(_=>{if(!m[_.identifier].isHole){let h=new _t;h.curves=_.curves,m.filter(v=>v.isHole&&v.for===_.identifier).forEach(v=>{let x=p[v.identifier],L=new an;L.curves=x.curves,h.holes.push(L)}),g.push(h)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,a,o)===0)return null;let c=new Tt;return c.setAttribute("position",new tt(r,3)),c.setAttribute("normal",new tt(a,3)),c.setAttribute("uv",new tt(o,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,a,o,c){let l=new ue,u=new ue,d=new ue,p=new ue,m=new ue,g=new ue,_=new ue,f=new ue,h=new ue,T=new ue,v=new ue,x=new ue,L=new ue,P=new ue,D=new ue,F=new ue,E=new ue;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=C(e);let b=e.length;if(b<2)return 0;let B=e[0].equals(e[b-1]),k,te=e[0],N,G=t.strokeWidth/2,z=1/(b-1),J=0,I,ie,ce,de,Me=!1,Se=0,W=c*3,U=c*2;S(e[0],e[1],l).multiplyScalar(G),f.copy(e[0]).sub(l),h.copy(e[0]).add(l),T.copy(f),v.copy(h);for(let V=1;V<b;V++){k=e[V],V===b-1?B?N=e[1]:N=void 0:N=e[V+1];let Y=l;if(S(te,k,Y),d.copy(Y).multiplyScalar(G),x.copy(k).sub(d),L.copy(k).add(d),I=J+z,ie=!1,N!==void 0){S(k,N,u),d.copy(u).multiplyScalar(G),P.copy(k).sub(d),D.copy(k).add(d),ce=!0,d.subVectors(N,te),Y.dot(d)<0&&(ce=!1),V===1&&(Me=ce),d.subVectors(N,k),d.normalize();let j=Math.abs(Y.dot(d));if(j>Number.EPSILON){let $=G/j;d.multiplyScalar(-$),p.subVectors(k,te),m.copy(p).setLength($).add(d),F.copy(m).negate();let O=m.length(),A=p.length();p.divideScalar(A),g.subVectors(N,k);let ae=g.length();switch(g.divideScalar(ae),p.dot(F)<A&&g.dot(F)<ae&&(ie=!0),E.copy(m).add(k),F.add(k),de=!1,ie?ce?(D.copy(F),L.copy(F)):(P.copy(F),x.copy(F)):ne(),t.strokeLineJoin){case"bevel":q(ce,ie,I);break;case"round":he(ce,ie),ce?H(k,x,P,I,0):H(k,D,L,I,1);break;case"miter":case"miter-clip":default:let Ee=G*t.strokeMiterLimit/O;if(Ee<1)if(t.strokeLineJoin!=="miter-clip"){q(ce,ie,I);break}else he(ce,ie),ce?(g.subVectors(E,x).multiplyScalar(Ee).add(x),_.subVectors(E,P).multiplyScalar(Ee).add(P),y(x,I,0),y(g,I,0),y(k,I,.5),y(k,I,.5),y(g,I,0),y(_,I,0),y(k,I,.5),y(_,I,0),y(P,I,0)):(g.subVectors(E,L).multiplyScalar(Ee).add(L),_.subVectors(E,D).multiplyScalar(Ee).add(D),y(L,I,1),y(g,I,1),y(k,I,.5),y(k,I,.5),y(g,I,1),y(_,I,1),y(k,I,.5),y(_,I,1),y(D,I,1));else ie?(ce?(y(h,J,1),y(f,J,0),y(E,I,0),y(h,J,1),y(E,I,0),y(F,I,1)):(y(h,J,1),y(f,J,0),y(E,I,1),y(f,J,0),y(F,I,0),y(E,I,1)),ce?P.copy(E):D.copy(E)):ce?(y(x,I,0),y(E,I,0),y(k,I,.5),y(k,I,.5),y(E,I,0),y(P,I,0)):(y(L,I,1),y(E,I,1),y(k,I,.5),y(k,I,.5),y(E,I,1),y(D,I,1)),de=!0;break}}else ne()}else ne();!B&&V===b-1&&ge(e[0],T,v,ce,!0,J),J=I,te=k,f.copy(P),h.copy(D)}if(!B)ge(k,x,L,ce,!1,I);else if(ie&&r){let V=E,Y=F;Me!==ce&&(V=F,Y=E),ce?(de||Me)&&(Y.toArray(r,0),Y.toArray(r,9),de&&V.toArray(r,3)):(de||!Me)&&(Y.toArray(r,3),Y.toArray(r,9),de&&V.toArray(r,0))}return Se;function S(V,Y,j){return j.subVectors(Y,V),j.set(-j.y,j.x).normalize()}function y(V,Y,j){r&&(r[W]=V.x,r[W+1]=V.y,r[W+2]=0,a&&(a[W]=0,a[W+1]=0,a[W+2]=1),W+=3,o&&(o[U]=Y,o[U+1]=j,U+=2)),Se+=3}function H(V,Y,j,$,O){l.copy(Y).sub(V).normalize(),u.copy(j).sub(V).normalize();let A=Math.PI,ae=l.dot(u);Math.abs(ae)<1&&(A=Math.abs(Math.acos(ae))),A/=n,d.copy(Y);for(let Ee=0,Fe=n-1;Ee<Fe;Ee++)p.copy(d).rotateAround(V,A),y(d,$,O),y(p,$,O),y(V,$,.5),d.copy(p);y(p,$,O),y(j,$,O),y(V,$,.5)}function ne(){y(h,J,1),y(f,J,0),y(x,I,0),y(h,J,1),y(x,I,0),y(L,I,1)}function q(V,Y,j){Y?V?(y(h,J,1),y(f,J,0),y(x,I,0),y(h,J,1),y(x,I,0),y(F,I,1),y(x,j,0),y(P,j,0),y(F,j,.5)):(y(h,J,1),y(f,J,0),y(L,I,1),y(f,J,0),y(F,I,0),y(L,I,1),y(L,j,1),y(F,j,0),y(D,j,1)):V?(y(x,j,0),y(P,j,0),y(k,j,.5)):(y(L,j,1),y(D,j,0),y(k,j,.5))}function he(V,Y){Y&&(V?(y(h,J,1),y(f,J,0),y(x,I,0),y(h,J,1),y(x,I,0),y(F,I,1),y(x,J,0),y(k,I,.5),y(F,I,1),y(k,I,.5),y(P,J,0),y(F,I,1)):(y(h,J,1),y(f,J,0),y(L,I,1),y(f,J,0),y(F,I,0),y(L,I,1),y(L,J,1),y(F,I,0),y(k,I,.5),y(k,I,.5),y(F,I,0),y(D,J,1)))}function ge(V,Y,j,$,O,A){switch(t.strokeLineCap){case"round":O?H(V,j,Y,A,.5):H(V,Y,j,A,.5);break;case"square":if(O)l.subVectors(Y,V),u.set(l.y,-l.x),d.addVectors(l,u).add(V),p.subVectors(u,l).add(V),$?(d.toArray(r,3),p.toArray(r,0),p.toArray(r,9)):(d.toArray(r,3),o[7]===1?p.toArray(r,9):d.toArray(r,9),p.toArray(r,0));else{l.subVectors(j,V),u.set(l.y,-l.x),d.addVectors(l,u).add(V),p.subVectors(u,l).add(V);let ae=r.length;$?(d.toArray(r,ae-3),p.toArray(r,ae-6),p.toArray(r,ae-12)):(p.toArray(r,ae-6),d.toArray(r,ae-3),p.toArray(r,ae-12))}break;case"butt":default:break}}function C(V){let Y=!1;for(let $=1,O=V.length-1;$<O;$++)if(V[$].distanceTo(V[$+1])<s){Y=!0;break}if(!Y)return V;let j=[];j.push(V[0]);for(let $=1,O=V.length-1;$<O;$++)V[$].distanceTo(V[$+1])>=s&&j.push(V[$]);return j.push(V[V.length-1]),j}}};window.SlinkGrowthModules={createTile:fl,VARIANTS:dl,TILE_SPEC:ul,disposeTile:mh};window.Slink3D=(()=>{let i,e,t,n,s,r=new Ps,a=[],o=[],c=[],l,u,d,p=!1,m,g=(N,G=.55,z={})=>new ti({color:N,roughness:G,metalness:0,...z});function _(N,G,z,J,I){let ie=new _t;return ie.moveTo(N+I,G),ie.lineTo(N+z-I,G),ie.quadraticCurveTo(N+z,G,N+z,G+I),ie.lineTo(N+z,G+J-I),ie.quadraticCurveTo(N+z,G+J,N+z-I,G+J),ie.lineTo(N+I,G+J),ie.quadraticCurveTo(N,G+J,N,G+J-I),ie.lineTo(N,G+I),ie.quadraticCurveTo(N,G,N+I,G),ie}function f(N,G,z=0,J=0,I=0,ie=n){let ce=new xt(N,G);return ce.position.set(z,J,I),ce.castShadow=!0,ce.receiveShadow=!0,ie.add(ce),ce}function h(N,G,z,J,I,ie,ce,de,Me=n){return f(new Yi(N,G,z,4,J),I,ie,ce,de,Me)}function T(){let N=document.createElement("canvas");N.width=N.height=128;let G=N.getContext("2d"),z=G.createImageData(128,128),J=73;for(let ie=0;ie<z.data.length;ie+=4){J=J*1664525+1013904223>>>0;let ce=128+(J>>>27)%9;z.data[ie]=z.data[ie+1]=z.data[ie+2]=ce,z.data[ie+3]=255}G.putImageData(z,0,0);let I=new Fn(N);return I.wrapS=I.wrapT=wi,I}let v=()=>T();function x(){let N=T(),G=N.image,z=G.getContext("2d");z.fillStyle="#656565";for(let J=0;J<4;J++){let I=J*Math.PI/2+.5;z.save(),z.translate(64+Math.cos(I)*18,64+Math.sin(I)*18),z.rotate(I),z.beginPath(),z.ellipse(0,0,18,9,0,0,Math.PI*2),z.fill(),z.restore()}return z.beginPath(),z.arc(64,64,5,0,Math.PI*2),z.fill(),N.needsUpdate=!0,N}function L(N){let G=document.createElement("canvas");G.width=G.height=128;let z=G.getContext("2d");z.fillStyle="#77421a",z.font="bold 82px Trebuchet MS",z.textAlign="center",z.textBaseline="middle",z.fillText(String(N),64,69);let J=new Fn(G);return J.colorSpace=gt,J}function P(N,G){let z=0;for(let I=0;I<N.length;I++){let ie=N[I],ce=N[(I+1)%N.length];z+=ie.x*ce.y-ce.x*ie.y}let J=z>0?1:-1;return N.map((I,ie)=>{let ce=N[(ie+N.length-1)%N.length],de=N[(ie+1)%N.length],Me=I.clone().sub(ce).normalize(),Se=de.clone().sub(I).normalize(),W=new ue(Me.y,-Me.x).multiplyScalar(J),U=new ue(Se.y,-Se.x).multiplyScalar(J),S=W.clone().add(U).normalize();return I.clone().add(S.multiplyScalar(G/Math.max(.25,S.dot(W))))})}function D(N){let G=new _t;return N.forEach((z,J)=>J?G.lineTo(z.x,-z.y):G.moveTo(z.x,-z.y)),G.closePath(),G}function F(N,G){let z=new Set(N),J=[];for(;z.size;){let I=z.values().next().value,ie=[I];z.delete(I);for(let ce=0;ce<ie.length;ce++){let de=ie[ce];for(let Me of[de-G,de+G,de%G?de-1:-1,de%G<G-1?de+1:-1])z.has(Me)&&(z.delete(Me),ie.push(Me))}J.push(ie)}return J}function E(N,G,z){let J=new Set(N),I=[],ie=(de,Me)=>de>=0&&Me>=0&&de<G&&J.has(Me*G+de);for(let de of N){let Me=de%G,Se=Math.floor(de/G),W=20+Me*80,U=20+Se*80;ie(Me,Se-1)||I.push([[W,U],[W+80,U]]),ie(Me+1,Se)||I.push([[W+80,U],[W+80,U+80]]),ie(Me,Se+1)||I.push([[W+80,U+80],[W,U+80]]),ie(Me-1,Se)||I.push([[W,U+80],[W,U]])}let ce=[];for(;I.length;){let de=I.shift(),Me=de[0],Se=[Me],W=de[1];for(;W.join()!=Me.join();){Se.push(W);let U=I.findIndex(S=>S[0].join()==W.join());if(U<0)break;W=I.splice(U,1)[0][1]}Se=Se.filter((U,S)=>{let y=Se[(S+Se.length-1)%Se.length],H=Se[(S+1)%Se.length];return!(y[0]===U[0]&&H[0]===U[0]||y[1]===U[1]&&H[1]===U[1])}),ce.push(Se.map(U=>new ue(...U)))}return ce.sort((de,Me)=>Math.abs(Mt.area(Me))-Math.abs(Mt.area(de))),ce.map((de,Me)=>{let Se=P(de,Me?z:-z),W=new _t;return Se.forEach((U,S)=>{let y=Se[(S+Se.length-1)%Se.length],H=Se[(S+1)%Se.length],ne=Math.min(10,U.distanceTo(y)/3,U.distanceTo(H)/3),q=U.clone().add(y.clone().sub(U).normalize().multiplyScalar(ne)),he=U.clone().add(H.clone().sub(U).normalize().multiplyScalar(ne));S?W.lineTo(q.x,-q.y):W.moveTo(q.x,-q.y),W.quadraticCurveTo(U.x,-U.y,he.x,-he.y)}),W.closePath(),W})}function b(){s=document.createElement("canvas"),s.id="terrain3d",s.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(s),i=new Ua({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Br,i.outputColorSpace=gt,i.toneMapping=qr,i.toneMappingExposure=.88,e=new fs,e.add(new Is("#fff6dc","#a28d6c",1.65));let N=new Oi("#fff4dc",3.3);N.position.set(-300,450,750),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),Object.assign(N.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),N.shadow.bias=-3e-4,N.shadow.normalBias=.9,N.shadow.radius=4,e.add(N);let G=new Oi("#d4e8ff",.4);G.position.set(500,-100,400),e.add(G),n=new Jt,e.add(n),t=new si,t.up.set(0,1,0),t.near=1,t.far=3e3,u=new ResizeObserver(()=>B()),u.observe(document.getElementById("board"));let z=(I,ie)=>{let ce=s.getBoundingClientRect();return r.setFromCamera(new ue((I-ce.left)/ce.width*2-1,-(ie-ce.top)/ce.height*2+1),t),r.intersectObjects(a,!1)[0]?.object.userData.cell??-1},J=I=>{if(!p)return;let ie=m||I,ce=I.clientX-ie.clientX,de=I.clientY-ie.clientY,Me=Math.max(1,Math.ceil(Math.hypot(ce,de)/3));for(let Se=1;Se<=Me;Se++){let W=z(ie.clientX+ce*Se/Me,ie.clientY+de*Se/Me);W>=0&&l.onMove(W)}m={clientX:I.clientX,clientY:I.clientY}};s.addEventListener("pointerdown",I=>{I.preventDefault(),s.setPointerCapture(I.pointerId),p=!0,m=null,J(I),document.getElementById("board").focus({preventScroll:!0})}),s.addEventListener("pointermove",J);for(let I of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(I,()=>{p=!1,m=null});s.addEventListener("webglcontextlost",I=>{I.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),s.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function B(){if(!l)return;let N=document.getElementById("board"),G=N.clientWidth,z=N.clientHeight;if(!G||!z)return;i.setSize(G,z,!1);let J=new rn().setFromObject(n),I=J.getCenter(new X);t.position.set(I.x,I.y-430,I.z+1250),t.lookAt(I.x,I.y,0),t.updateMatrixWorld();let ie=e.children.find(y=>y.isDirectionalLight&&y.castShadow);if(ie){let y=Math.max(J.max.x-J.min.x,J.max.y-J.min.y)*.75+60;ie.target.position.set(I.x,I.y,0),e.add(ie.target),Object.assign(ie.shadow.camera,{left:-y,right:y,top:y,bottom:-y}),ie.shadow.camera.updateProjectionMatrix()}let ce=t.matrixWorldInverse,de=new ue(1/0,1/0),Me=new ue(-1/0,-1/0);for(let y of[J.min.x,J.max.x])for(let H of[J.min.y,J.max.y])for(let ne of[J.min.z,J.max.z]){let q=new X(y,H,ne).applyMatrix4(ce);de.min(q),Me.max(q)}let Se=(de.x+Me.x)/2,W=(de.y+Me.y)/2,U=Math.max((Me.y-de.y)/2,(Me.x-de.x)/2/(G/z))+13,S=U*G/z;Object.assign(t,{left:Se-S,right:Se+S,top:W+U,bottom:W-U}),t.updateProjectionMatrix(),k()}function k(){i.render(e,t)}function te(N,G,z){l={l:N,onMove:z};for(let S of[...n.children])n.remove(S),S.traverse(y=>{if(y.geometry&&y.geometry.dispose(),y.material)for(let H of[].concat(y.material))H.map&&H.map.userData.transient&&H.map.dispose(),H.dispose()});a=[],o=[],c=[];let J=new Vs,I=J.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+G+'"/></svg>'),ie=Vs.createShapes(I.paths[0])[0].getPoints(24);ie.pop();let ce=D(P(ie,11)),de=g("#f6dfb5",.62,{bumpMap:v(),bumpScale:.18,side:Ht}),Me=[...N.water||[],...N.lava||[]],Se=S=>({x:S%N.n*80+60,y:-(Math.floor(S/N.n)*80+60)}),W=[];for(let[S,y]of[["water",N.water||[]],["lava",N.lava||[]]])for(let H of F(y,N.n)){let ne=E(H,N.n,7);ce.holes.push(ne[0]),W.push({type:S,group:H,shapes:ne})}let U=new Mn(ce,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});f(U,de,0,0,-24);for(let S of F(N.solution,N.n)){let y=E(S,N.n,0),H=y[0];H.holes.push(...y.slice(1)),f(new Ts(H),g("#709c2c",.8),0,0,3.2)}for(let S of N.solution){let y=Se(S),H=N.tileVariants?.[S]||"reference",ne=fl(H,{seed:73+S*19});ne.position.set(y.x,y.y,0),n.add(ne),ne.traverse(q=>{q.isMesh&&(q.userData.cell=S,a.push(q))})}for(let{type:S,group:y,shapes:H}of W){let ne=S==="lava",q=g(ne?"#ff6416":"#0875bd",ne?.4:.2,{emissive:ne?"#ed3f08":"#001b35",emissiveIntensity:ne?.28:.05}),he=H[0];he.holes.push(...H.slice(1)),f(new Mn(he,{depth:3,bevelEnabled:!1,curveSegments:20}),q,0,0,-15);for(let ge of y){let C=Se(ge);for(let V=0;V<2;V++){let Y=[];for(let $=0;$<=20;$++)Y.push(new X(C.x-22+$*2.2,C.y-9+V*16+Math.sin($*.25+V)*2.2,-11.8));let j=f(new ws(new Ni(Y),24,ne?.7:.35,5,!1),g(ne?"#ffd84b":"#75cde5",.25,{emissive:ne?"#ff8c1c":"#164d6d",emissiveIntensity:.25}));j.castShadow=!1}}}for(let S of N.stones||[]){let y=Se(S),H=h(66,66,33,8,g("#928675",.85,{bumpMap:x(),bumpScale:1.1}),y.x,y.y,10);H.userData.cell=-1,a.push(H)}for(let[S,y]of N.walls){let H=Se(S),ne=Se(y);h(H.x===ne.x?53:9,H.y===ne.y?53:9,18,3,g("#a49983",.85),(H.x+ne.x)/2,(H.y+ne.y)/2,17)}for(let[S,y]of N.marks.entries()){let H=Se(y),ne=g("#ffd456",.35),q=f(new gs(17,17,5,48),ne,H.x,H.y,22);q.rotation.x=Math.PI/2,c.push({i:y,mat:ne});let he=new xt(new ei(27,27),new jn({map:L(S+1),transparent:!0,depthWrite:!1}));he.position.set(H.x,H.y,24.6),n.add(he)}B()}return{update(N,G,z,J){try{i||b(),l?.l!==N&&te(N,z,J);for(let I of o){let ie=G.includes(I.i);I.mat.color.set(ie?"#c4e447":"#a9cc3e"),I.mat.emissive.set(ie?"#699d12":"#000000"),I.mat.emissiveIntensity=ie?.12:0}for(let I of c)I.mat.color.set(G.includes(I.i)?"#e3ee98":"#ffd456");k()}catch(I){console.error("3D renderer:",I),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
