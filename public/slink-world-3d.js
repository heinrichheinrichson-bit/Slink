(()=>{var Yl=0,Ro=1,Zl=2;var Co=1,zr=2,un=3,Sn=0,wt=1,Xt=2,Tn=0,Kn=1,Io=2,Po=3,Lo=4,Jl=5,Fn=100,$l=101,Kl=102,jl=103,Ql=104,ec=200,tc=201,nc=202,ic=203,dr=204,fr=205,sc=206,rc=207,ac=208,oc=209,lc=210,cc=211,hc=212,uc=213,dc=214,kr=0,Vr=1,Hr=2,jn=3,Gr=4,Wr=5,Xr=6,qr=7,Do=0,fc=1,pc=2,wn=0,mc=1,gc=2,_c=3,Yr=4,xc=5,yc=6,vc=7;var Uo=300,ai=301,oi=302,Zr=303,Jr=304,Is=306,Ai=1e3,Nn=1001,pr=1002,Gt=1003,Mc=1004;var Ps=1005;var jt=1006,$r=1007;var Hn=1008;var sn=1009,No=1010,Fo=1011,Bi=1012,Kr=1013,Gn=1014,dn=1015,zi=1016,jr=1017,Qr=1018,ki=1020,Oo=35902,Bo=35899,zo=1021,ko=1022,qt=1023,Ri=1026,Vi=1027,Vo=1028,ea=1029,Ho=1030,ta=1031;var na=1033,Ls=33776,Ds=33777,Us=33778,Ns=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,ya=37817,va=37818,Ma=37819,Sa=37820,ba=37821,Ea=36492,Ta=36494,wa=36495,Aa=36283,Ra=36284,Ca=36285,Ia=36286;var is=2300,mr=2301,ur=2302,fo=2400,po=2401,mo=2402;var Sc=3200,bc=3201;var Go=0,Ec=1,An="",pt="srgb",Qn="srgb-linear",ss="linear",Qe="srgb";var $n=7680;var go=519,Tc=512,wc=513,Ac=514,Wo=515,Rc=516,Cc=517,Ic=518,Pc=519,_o=35044;var Xo="300 es",Kt=2e3,rs=2001;var bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var za=Math.PI/180,gr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function wh(i,e){return(i%e+e)%e}function ka(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==m||u!==g){let p=1-o,h=c*f+l*m+u*g+d*_,w=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){let L=Math.sqrt(S),R=Math.atan2(L,h*w);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}let v=o*w;if(c=c*p+f*v,l=l*p+m*v,u=u*p+g*v,d=d*p+_*v,p===1-o){let L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-o*m,e[t+2]=l*g+u*m+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new Z,Ml=new En,Ve=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],w=s[1],S=s[4],v=s[7],L=s[2],R=s[5],P=s[8];return r[0]=a*_+o*w+c*L,r[3]=a*p+o*S+c*R,r[6]=a*h+o*v+c*P,r[1]=l*_+u*w+d*L,r[4]=l*p+u*S+d*R,r[7]=l*h+u*v+d*P,r[2]=f*_+m*w+g*L,r[5]=f*p+m*S+g*R,r[8]=f*h+m*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,m=l*r-a*c,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Ve;function qo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){let i=as("canvas");return i.style.display="block",i}var Sl={};function Ci(i){i in Sl||(Sl[i]=!0,console.warn(i))}function Dc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){let i={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qn]:{primaries:e,whitePoint:n,transfer:ss,toXYZ:bl,fromXYZ:El,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:bl,fromXYZ:El,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}var $e=Ah();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pi===void 0&&(pi=as("canvas")),pi.width=e.width,pi.height=e.height;let s=pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=as("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rh=0,Ii=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ch=0,Wa=new Z,It=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=jt,a=Hn,o=qt,c=sn,l=i.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Hi(),this.name="",this.source=new Ii(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Uo;It.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(m+1)/2,L=(h+1)/2,R=(u+f)/4,P=(d+_)/4,U=(g+p)/4;return S>v&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=P/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=U/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xr=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new It(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ii(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends xr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},os=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yr=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Xs.subVectors(this.max,$i),mi.subVectors(e.a,$i),gi.subVectors(e.b,$i),_i.subVectors(e.c,$i),Rn.subVectors(gi,mi),Cn.subVectors(_i,gi),qn.subVectors(mi,_i);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-qn.z,qn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,qn.z,0,-qn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-qn.y,qn.x,0];return!Xa(t,mi,gi,_i,Xs)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,mi,gi,_i,Xs))?!1:(qs.crossVectors(Rn,Cn),t=[qs.x,qs.y,qs.z],Xa(t,mi,gi,_i,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Zt=new Z,Ws=new ln,mi=new Z,gi=new Z,_i=new Z,Rn=new Z,Cn=new Z,qn=new Z,$i=new Z,Xs=new Z,qs=new Z,Yn=new Z;function Xa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),c=e.dot(Yn),l=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ih=new ln,Ki=new Z,qa=new Z,Pi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ih.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(qa)),this.expandByPoint(Ki.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gn=new Z,Ya=new Z,Ys=new Z,In=new Z,Za=new Z,Zs=new Z,Ja=new Z,ls=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ya.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Ya);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=In.dot(this.direction),c=-In.dot(Ys),l=In.lengthSq(),u=Math.abs(1-a*a),d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ya).addScaledVector(Ys,f),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){Za.subVectors(t,e),Zs.subVectors(n,e),Ja.crossVectors(Za,Zs);let a=this.direction.dot(Ja),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);let c=o*this.direction.dot(Zs.crossVectors(In,Zs));if(c<0)return null;let l=o*this.direction.dot(Za.cross(In));if(l<0||c+l>a)return null;let u=-o*In.dot(Ja);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,c,l,u,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,f,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,u,d,f,m,g,_,p){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,m=c*d,g=l*u,_=l*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,m=a*d,g=o*u,_=o*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Lh)}lookAt(e,t,n){let s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Pn.crossVectors(n,Nt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Pn.crossVectors(n,Nt)),Pn.normalize(),Js.crossVectors(Nt,Pn),s[0]=Pn.x,s[4]=Js.x,s[8]=Nt.x,s[1]=Pn.y,s[5]=Js.y,s[9]=Nt.y,s[2]=Pn.z,s[6]=Js.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],w=n[3],S=n[7],v=n[11],L=n[15],R=s[0],P=s[4],U=s[8],E=s[12],b=s[1],F=s[5],z=s[9],$=s[13],ee=s[2],se=s[6],ie=s[10],re=s[14],k=s[3],Y=s[7],W=s[11],te=s[15];return r[0]=a*R+o*b+c*ee+l*k,r[4]=a*P+o*F+c*se+l*Y,r[8]=a*U+o*z+c*ie+l*W,r[12]=a*E+o*$+c*re+l*te,r[1]=u*R+d*b+f*ee+m*k,r[5]=u*P+d*F+f*se+m*Y,r[9]=u*U+d*z+f*ie+m*W,r[13]=u*E+d*$+f*re+m*te,r[2]=g*R+_*b+p*ee+h*k,r[6]=g*P+_*F+p*se+h*Y,r[10]=g*U+_*z+p*ie+h*W,r[14]=g*E+_*$+p*re+h*te,r[3]=w*R+S*b+v*ee+L*k,r[7]=w*P+S*F+v*se+L*Y,r[11]=w*U+S*z+v*ie+L*W,r[15]=w*E+S*$+v*re+L*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+_*(+t*c*m-t*l*f+r*a*f-s*a*m+s*l*u-r*c*u)+p*(+t*l*d-t*o*m-r*a*d+n*a*m+r*o*u-n*l*u)+h*(-s*o*u-t*c*d+t*o*f+s*a*d-n*a*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],w=d*p*l-_*f*l+_*c*m-o*p*m-d*c*h+o*f*h,S=g*f*l-u*p*l-g*c*m+a*p*m+u*c*h-a*f*h,v=u*_*l-g*d*l+g*o*m-a*_*m-u*o*h+a*d*h,L=g*d*c-u*_*c-g*o*f+a*_*f+u*o*p-a*d*p,R=t*w+n*S+s*v+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=w*P,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*P,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*h+n*c*h)*P,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*P,e[4]=S*P,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*P,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*h-t*c*h)*P,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*m+t*c*m)*P,e[8]=v*P,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*h-t*d*h)*P,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*h+t*o*h)*P,e[11]=(u*o*r-a*d*r-u*n*l+t*d*l+a*n*m-t*o*m)*P,e[12]=L*P,e[13]=(u*_*s-g*d*s+g*n*f-t*_*f-u*n*p+t*d*p)*P,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*P,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,m=r*u,g=r*d,_=a*u,p=a*d,h=o*d,w=c*l,S=c*u,v=c*d,L=n.x,R=n.y,P=n.z;return s[0]=(1-(_+h))*L,s[1]=(m+v)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(m-v)*R,s[5]=(1-(f+h))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+S)*P,s[9]=(p-w)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),a=xi.set(s[4],s[5],s[6]).length(),o=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);let l=1/r,u=1/a,d=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Kt,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Kt)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===rs)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kt,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Kt)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===rs)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xi=new Z,Jt=new ht,Ph=new Z(0,0,0),Lh=new Z(1,1,1),Pn=new Z,Js=new Z,Nt=new Z,Tl=new ht,wl=new En,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Li=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dh=0,Al=new Z,yi=new En,_n=new ht,$s=new Z,ji=new Z,Uh=new Z,Nh=new En,Rl=new Z(1,0,0),Cl=new Z(0,1,0),Il=new Z(0,0,1),Pl={type:"added"},Fh={type:"removed"},vi={type:"childadded",child:null},$a={type:"childremoved",child:null},bt=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Z,t=new Qt,n=new En,s=new Z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Li,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ji,$s,this.up):_n.lookAt($s,ji,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(_n),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new Z(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=new Z,xn=new Z,Ka=new Z,yn=new Z,Mi=new Z,Si=new Z,Ll=new Z,ja=new Z,Qa=new Z,eo=new Z,to=new ut,no=new ut,io=new ut,Un=class i{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),xn.subVectors(n,t),Ka.subVectors(e,t);let a=$t.dot($t),o=$t.dot(xn),c=$t.dot(Ka),l=xn.dot(xn),u=xn.dot(Ka),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),xn.subVectors(e,t),$t.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),$t.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),ja.subVectors(e,n);let c=Mi.dot(ja),l=Si.dot(ja);if(c<=0&&l<=0)return t.copy(n);Qa.subVectors(e,s);let u=Mi.dot(Qa),d=Si.dot(Qa);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);eo.subVectors(e,r);let m=Mi.dot(eo),g=Si.dot(eo);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Si,o);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ll.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Ll,o);let h=1/(p+_+f);return a=_*h,o=f*h,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function so(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=wh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=so(a,r,e+1/3),this.g=so(a,r,e),this.b=so(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return $e.workingToColorSpace(Mt.copy(this),e),Math.round(Ye(Mt.r*255,0,255))*65536+Math.round(Ye(Mt.g*255,0,255))*256+Math.round(Ye(Mt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Mt.copy(this),t);let n=Mt.r,s=Mt.g,r=Mt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=pt){$e.workingToColorSpace(Mt.copy(this),e);let t=Mt.r,n=Mt.g,s=Mt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ks);let n=ka(Ln.h,Ks.h,t),s=ka(Ln.s,Ks.s,t),r=ka(Ln.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Je;Je.NAMES=Uc;var Oh=0,On=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Kn,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ei=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ft=new Z,js=new pe,Bh=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}};var cs=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hs=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},zh=0,Ht=new ht,ro=new bt,bi=new Z,Ft=new ln,Qi=new ln,xt=new Z,Pt=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?hs:cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Ft.min,Qi.min),Ft.expandByPoint(xt),xt.addVectors(Ft.max,Qi.max),Ft.expandByPoint(xt)):(Ft.expandByPoint(Qi.min),Ft.expandByPoint(Qi.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xt.fromBufferAttribute(o,l),c&&(bi.fromBufferAttribute(e,l),xt.add(bi)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new Z,c[U]=new Z;let l=new Z,u=new Z,d=new Z,f=new pe,m=new pe,g=new pe,_=new Z,p=new Z;function h(U,E,b){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(l),d.sub(l),m.sub(f),g.sub(f);let F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(F),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(F),o[U].add(_),o[E].add(_),o[b].add(_),c[U].add(p),c[E].add(p),c[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,E=w.length;U<E;++U){let b=w[U],F=b.start,z=b.count;for(let $=F,ee=F+z;$<ee;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}let S=new Z,v=new Z,L=new Z,R=new Z;function P(U){L.fromBufferAttribute(s,U),R.copy(L);let E=o[U];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),v.crossVectors(R,E);let F=v.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,F)}for(let U=0,E=w.length;U<E;++U){let b=w[U],F=b.start,z=b.count;for(let $=F,ee=F+z;$<ee;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,c=new Z,l=new Z,u=new Z,d=new Z;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new Ot(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=new ht,Zn=new ls,Qs=new Pi,Ul=new Z,er=new Z,tr=new Z,nr=new Z,ao=new Z,ir=new Z,Nl=new Z,sr=new Z,it=class extends bt{constructor(e=new Pt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(ao.fromBufferAttribute(d,e),a?ir.addScaledVector(ao,u):ir.addScaledVector(ao.sub(t),u))}t.add(ir)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(Qs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Qs,Ul)===null||Zn.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,L=S;v<L;v+=3){let R=o.getX(v),P=o.getX(v+1),U=o.getX(v+2);s=rr(this,h,e,n,l,u,d,R,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let w=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);s=rr(this,a,e,n,l,u,d,w,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,L=S;v<L;v+=3){let R=v,P=v+1,U=v+2;s=rr(this,h,e,n,l,u,d,R,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){let w=p,S=p+1,v=p+2;s=rr(this,a,e,n,l,u,d,w,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function kh(i,e,t,n,s,r,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Sn,o),c===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sr);return l<t.near||l>t.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,er),i.getVertexPosition(c,tr),i.getVertexPosition(l,nr);let u=kh(i,e,t,n,er,tr,nr,Nl);if(u){let d=new Z;Un.getBarycoord(Nl,er,tr,nr,d),s&&(u.uv=Un.getInterpolatedAttribute(s,o,c,l,d,new pe)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,c,l,d,new pe)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,c,l,d,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new Z,materialIndex:0};Un.getNormal(er,tr,nr,f.normal),u.face=f,u.barycoord=d}return u}var Bn=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function g(_,p,h,w,S,v,L,R,P,U,E){let b=v/P,F=L/U,z=v/2,$=L/2,ee=R/2,se=P+1,ie=U+1,re=0,k=0,Y=new Z;for(let W=0;W<ie;W++){let te=W*F-$;for(let de=0;de<se;de++){let fe=de*b-z;Y[_]=fe*w,Y[p]=te*S,Y[h]=ee,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[h]=R>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(de/P),d.push(1-W/U),re+=1}}for(let W=0;W<U;W++)for(let te=0;te<P;te++){let de=f+te+se*W,fe=f+te+se*(W+1),D=f+(te+1)+se*(W+1),N=f+(te+1)+se*W;c.push(de,fe,N),c.push(fe,D,N),k+=6}o.addGroup(m,k,E),m+=k,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){let e={};for(let t=0;t<i.length;t++){let n=li(i[t]);for(let s in n)e[s]=n[s]}return e}function Vh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Nc={clone:li,merge:Et},Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},us=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new Z,Fl=new pe,Ol=new pe,Ct=class extends us{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Ol),t.subVectors(Ol,Fl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ei=-90,Ti=1,vr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Ei,Ti,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Ei,Ti,e,t);r.layers=this.layers,this.add(r);let a=new Ct(Ei,Ti,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Ei,Ti,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Ei,Ti,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Ei,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ds=class extends It{constructor(e=[],t=ai,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ds(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Tn});r.uniforms.tEquirect.value=t;let a=new it(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=jt),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},yt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wh={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var fs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var oo=new Z,Xh=new Z,qh=new Ve,an=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=oo.subVectors(n,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qh.getNormalMatrix(e),s=this.coplanarPoint(oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new Pi,Yh=new pe(.5,.5),ar=new Z,Ui=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],m=r[7],g=r[8],_=r[9],p=r[10],h=r[11],w=r[12],S=r[13],v=r[14],L=r[15];if(s[0].setComponents(l-a,m-u,h-g,L-w).normalize(),s[1].setComponents(l+a,m+u,h+g,L+w).normalize(),s[2].setComponents(l+o,m+d,h+_,L+S).normalize(),s[3].setComponents(l-o,m-d,h-_,L-S).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,m-f,h-p,L-v).normalize();else if(s[4].setComponents(l-c,m-f,h-p,L-v).normalize(),t===Kt)s[5].setComponents(l+c,m+f,h+p,L+v).normalize();else if(t===rs)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);let t=Yh.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ar.x=s.normal.x>0?e.max.x:e.min.x,ar.y=s.normal.y>0?e.max.y:e.min.y,ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cn=class extends It{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ps=class extends It{constructor(e,t,n=Gn,s,r,a,o=Gt,c=Gt,l,u=Ri,d=1){if(u!==Ri&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ii(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ms=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var zn=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],m=[],g=0,_=[],p=n/2,h=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(m,2));function w(){let v=new Z,L=new Z,R=0,P=(t-e)/n;for(let U=0;U<=r;U++){let E=[],b=U/r,F=b*(t-e)+e;for(let z=0;z<=s;z++){let $=z/s,ee=$*c+o,se=Math.sin(ee),ie=Math.cos(ee);L.x=F*se,L.y=-b*n+p,L.z=F*ie,d.push(L.x,L.y,L.z),v.set(se,P,ie).normalize(),f.push(v.x,v.y,v.z),m.push($,1-b),E.push(g++)}_.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){let b=_[E][U],F=_[E+1][U],z=_[E+1][U+1],$=_[E][U+1];(e>0||E!==0)&&(u.push(b,F,$),R+=3),(t>0||E!==r-1)&&(u.push(F,z,$),R+=3)}l.addGroup(h,R,0),h+=R}function S(v){let L=g,R=new pe,P=new Z,U=0,E=v===!0?e:t,b=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let F=g;for(let z=0;z<=s;z++){let ee=z/s*c+o,se=Math.cos(ee),ie=Math.sin(ee);P.x=E*ie,P.y=p*b,P.z=E*se,d.push(P.x,P.y,P.z),f.push(0,b,0),R.x=se*.5+.5,R.y=ie*.5*b+.5,m.push(R.x,R.y),g++}for(let z=0;z<s;z++){let $=L+z,ee=F+z;v===!0?u.push(ee,ee+1,$):u.push(ee+1,ee,$),U+=3}l.addGroup(h,U,v===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new pe:new Z);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,s=[],r=[],a=[],o=new Z,c=new ht;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new Z)}r[0]=new Z,a[0]=new Z;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ye(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ni=class extends Bt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*d+this.aX,l=f*d+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sr=class extends Ni{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zo(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,m*=u,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var or=new Z,lo=new Zo,co=new Zo,ho=new Zo,br=class extends Bt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),l=or);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=or),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),lo.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,_,p),co.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,_,p),ho.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),co.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),ho.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(lo.calc(c),co.calc(c),ho.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Zh(i,e){let t=1-i;return t*t*e}function Jh(i,e){return 2*(1-i)*i*e}function $h(i,e){return i*i*e}function ts(i,e,t,n){return Zh(i,e)+Jh(i,t)+$h(i,n)}function Kh(i,e){let t=1-i;return t*t*t*e}function jh(i,e){let t=1-i;return 3*t*t*i*e}function Qh(i,e){return 3*(1-i)*i*i*e}function eu(i,e){return i*i*i*e}function ns(i,e,t,n,s){return Kh(i,e)+jh(i,t)+Qh(i,n)+eu(i,s)}var gs=class extends Bt{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(e,s.x,r.x,a.x,o.x),ns(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends Bt{constructor(e=new Z,t=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(e,s.x,r.x,a.x,o.x),ns(e,s.y,r.y,a.y,o.y),ns(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_s=class extends Bt{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends Bt{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends Bt{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(e,s.x,r.x,a.x),ts(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends Bt{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ts(e,s.x,r.x,a.x),ts(e,s.y,r.y,a.y),ts(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ys=class extends Bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Bl(o,c.x,l.x,u.x,d.x),Bl(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},xo=Object.freeze({__proto__:null,ArcCurve:Sr,CatmullRomCurve3:br,CubicBezierCurve:gs,CubicBezierCurve3:Er,EllipseCurve:Ni,LineCurve:_s,LineCurve3:Tr,QuadraticBezierCurve:xs,QuadraticBezierCurve3:wr,SplineCurve:ys}),Ar=class extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xo[s.type]().fromJSON(s))}return this}},hn=class extends Ar{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _s(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xs(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new gs(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ys(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ni(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mt=class extends hn{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new hn().fromJSON(s))}return this}};function tu(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fc(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=au(i,e,r,t)),i.length>80*t){o=1/0,c=1/0;let u=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let m=i[f],g=i[f+1];m<o&&(o=m),g<c&&(c=g),m>u&&(u=m),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return vs(r,a,t,o,c,l,0),a}function Fc(i,e,t,n,s){let r;if(s===_u(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=zl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=zl(a/n|0,i[a],i[a+1],r);return r&&Fi(r,r.next)&&(Ss(r),r=r.next),r}function ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fi(t,t.next)||ct(t.prev,t,t.next)===0)){if(Ss(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&uu(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?iu(i,n,s,r):nu(i)){e.push(c.i,i.i,l.i),Ss(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=su(ti(i),e),vs(i,e,t,n,s,r,2)):a===2&&ru(i,e,t,n,s,r):vs(ti(i),e,t,n,s,r,1);break}}}function nu(i){let e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),d=Math.min(o,c,l),f=Math.max(s,r,a),m=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=m&&es(s,o,r,c,a,l,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function iu(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ct(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,f=a.y,m=Math.min(o,c,l),g=Math.min(u,d,f),_=Math.max(o,c,l),p=Math.max(u,d,f),h=yo(m,g,e,t,n),w=yo(_,p,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=h&&v&&v.z<=w;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&es(o,u,c,d,l,f,S.x,S.y)&&ct(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&es(o,u,c,d,l,f,v.x,v.y)&&ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=h;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&es(o,u,c,d,l,f,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&es(o,u,c,d,l,f,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function su(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Fi(n,s)&&Bc(n,t,t.next,s)&&Ms(n,s)&&Ms(s,n)&&(e.push(n.i,t.i,s.i),Ss(t),Ss(t.next),t=i=s),t=t.next}while(t!==i);return ti(t)}function ru(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pu(a,o)){let c=zc(a,o);a=ti(a,a.next),c=ti(c,c.next),vs(a,e,t,n,s,r,0),vs(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function au(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Fc(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(fu(l))}s.sort(ou);for(let r=0;r<s.length;r++)t=lu(s[r],t);return t}function ou(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function lu(i,e){let t=cu(i,e);if(!t)return e;let n=zc(t,i);return ti(n,n.next),ti(t,t.next)}function cu(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Fi(i,t))return t;do{if(Fi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Oc(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ms(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&hu(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function hu(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function uu(i,e,t,n){let s=i;do s.z===0&&(s.z=yo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,du(s)}function du(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function yo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fu(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Oc(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function es(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Oc(i,e,t,n,s,r,a,o)}function pu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mu(i,e)&&(Ms(i,e)&&Ms(e,i)&&gu(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||Fi(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fi(i,e){return i.x===e.x&&i.y===e.y}function Bc(i,e,t,n){let s=cr(ct(i,e,t)),r=cr(ct(i,e,n)),a=cr(ct(t,n,i)),o=cr(ct(t,n,e));return!!(s!==r&&a!==o||s===0&&lr(i,t,e)||r===0&&lr(i,n,e)||a===0&&lr(t,i,n)||o===0&&lr(t,e,n))}function lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cr(i){return i>0?1:i<0?-1:0}function mu(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ms(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function gu(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zc(i,e){let t=vo(i.i,i.x,i.y),n=vo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zl(i,e,t,n){let s=vo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _u(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mo=class{static triangulate(e,t,n=2){return tu(e,t,n)}},St=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];kl(e),Vl(n,e);let a=e.length;t.forEach(kl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Vl(n,t[c]);let o=Mo.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function kl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var tn=class i extends Pt{constructor(e=new mt([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,h=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:xu,S,v=!1,L,R,P,U;h&&(S=h.getSpacedPoints(u),v=!0,f=!1,L=h.computeFrenetFrames(u,!1),R=new Z,P=new Z,U=new Z),f||(p=0,m=0,g=0,_=0);let E=o.extractPoints(l),b=E.shape,F=E.holes;if(!St.isClockWise(b)){b=b.reverse();for(let B=0,V=F.length;B<V;B++){let X=F[B];St.isClockWise(X)&&(F[B]=X.reverse())}}function $(B){let X=10000000000000001e-36,J=B[0];for(let O=1;O<=B.length;O++){let A=O%B.length,ae=B[A],Ee=ae.x-J.x,Fe=ae.y-J.y,I=Ee*Ee+Fe*Fe,M=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(J.x),Math.abs(J.y)),j=X*M*M;if(I<=j){B.splice(A,1),O--;continue}J=ae}}$(b),F.forEach($);let ee=F.length,se=b;for(let B=0;B<ee;B++){let V=F[B];b=b.concat(V)}function ie(B,V,X){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(V,X)}let re=b.length;function k(B,V,X){let J,O,A,ae=B.x-V.x,Ee=B.y-V.y,Fe=X.x-B.x,I=X.y-B.y,M=ae*ae+Ee*Ee,j=ae*I-Ee*Fe;if(Math.abs(j)>Number.EPSILON){let ce=Math.sqrt(M),_e=Math.sqrt(Fe*Fe+I*I),he=V.x-Ee/ce,Ie=V.y+ae/ce,Me=X.x-I/_e,Pe=X.y+Fe/_e,Le=((Me-he)*I-(Pe-Ie)*Fe)/(ae*I-Ee*Fe);J=he+ae*Le-B.x,O=Ie+Ee*Le-B.y;let xe=J*J+O*O;if(xe<=2)return new pe(J,O);A=Math.sqrt(xe/2)}else{let ce=!1;ae>Number.EPSILON?Fe>Number.EPSILON&&(ce=!0):ae<-Number.EPSILON?Fe<-Number.EPSILON&&(ce=!0):Math.sign(Ee)===Math.sign(I)&&(ce=!0),ce?(J=-Ee,O=ae,A=Math.sqrt(M)):(J=ae,O=Ee,A=Math.sqrt(M/2))}return new pe(J/A,O/A)}let Y=[];for(let B=0,V=se.length,X=V-1,J=B+1;B<V;B++,X++,J++)X===V&&(X=0),J===V&&(J=0),Y[B]=k(se[B],se[X],se[J]);let W=[],te,de=Y.concat();for(let B=0,V=ee;B<V;B++){let X=F[B];te=[];for(let J=0,O=X.length,A=O-1,ae=J+1;J<O;J++,A++,ae++)A===O&&(A=0),ae===O&&(ae=0),te[J]=k(X[J],X[A],X[ae]);W.push(te),de=de.concat(te)}let fe;if(p===0)fe=St.triangulateShape(se,F);else{let B=[],V=[];for(let X=0;X<p;X++){let J=X/p,O=m*Math.cos(J*Math.PI/2),A=g*Math.sin(J*Math.PI/2)+_;for(let ae=0,Ee=se.length;ae<Ee;ae++){let Fe=ie(se[ae],Y[ae],A);ne(Fe.x,Fe.y,-O),J===0&&B.push(Fe)}for(let ae=0,Ee=ee;ae<Ee;ae++){let Fe=F[ae];te=W[ae];let I=[];for(let M=0,j=Fe.length;M<j;M++){let ce=ie(Fe[M],te[M],A);ne(ce.x,ce.y,-O),J===0&&I.push(ce)}J===0&&V.push(I)}}fe=St.triangulateShape(B,V)}let D=fe.length,N=g+_;for(let B=0;B<re;B++){let V=f?ie(b[B],de[B],N):b[B];v?(P.copy(L.normals[0]).multiplyScalar(V.x),R.copy(L.binormals[0]).multiplyScalar(V.y),U.copy(S[0]).add(P).add(R),ne(U.x,U.y,U.z)):ne(V.x,V.y,0)}for(let B=1;B<=u;B++)for(let V=0;V<re;V++){let X=f?ie(b[V],de[V],N):b[V];v?(P.copy(L.normals[B]).multiplyScalar(X.x),R.copy(L.binormals[B]).multiplyScalar(X.y),U.copy(S[B]).add(P).add(R),ne(U.x,U.y,U.z)):ne(X.x,X.y,d/u*B)}for(let B=p-1;B>=0;B--){let V=B/p,X=m*Math.cos(V*Math.PI/2),J=g*Math.sin(V*Math.PI/2)+_;for(let O=0,A=se.length;O<A;O++){let ae=ie(se[O],Y[O],J);ne(ae.x,ae.y,d+X)}for(let O=0,A=F.length;O<A;O++){let ae=F[O];te=W[O];for(let Ee=0,Fe=ae.length;Ee<Fe;Ee++){let I=ie(ae[Ee],te[Ee],J);v?ne(I.x,I.y+S[u-1].y,S[u-1].x+X):ne(I.x,I.y,d+X)}}}y(),x();function y(){let B=s.length/3;if(f){let V=0,X=re*V;for(let J=0;J<D;J++){let O=fe[J];H(O[2]+X,O[1]+X,O[0]+X)}V=u+p*2,X=re*V;for(let J=0;J<D;J++){let O=fe[J];H(O[0]+X,O[1]+X,O[2]+X)}}else{for(let V=0;V<D;V++){let X=fe[V];H(X[2],X[1],X[0])}for(let V=0;V<D;V++){let X=fe[V];H(X[0]+re*u,X[1]+re*u,X[2]+re*u)}}n.addGroup(B,s.length/3-B,0)}function x(){let B=s.length/3,V=0;G(se,V),V+=se.length;for(let X=0,J=F.length;X<J;X++){let O=F[X];G(O,V),V+=O.length}n.addGroup(B,s.length/3-B,1)}function G(B,V){let X=B.length;for(;--X>=0;){let J=X,O=X-1;O<0&&(O=B.length-1);for(let A=0,ae=u+p*2;A<ae;A++){let Ee=re*A,Fe=re*(A+1),I=V+J+Ee,M=V+O+Ee,j=V+O+Fe,ce=V+J+Fe;ue(I,M,j,ce)}}}function ne(B,V,X){c.push(B),c.push(V),c.push(X)}function H(B,V,X){me(B),me(V),me(X);let J=s.length/3,O=w.generateTopUV(n,s,J-3,J-2,J-1);C(O[0]),C(O[1]),C(O[2])}function ue(B,V,X,J){me(B),me(V),me(J),me(V),me(X),me(J);let O=s.length/3,A=w.generateSideWallUV(n,s,O-6,O-3,O-2,O-1);C(A[0]),C(A[1]),C(A[3]),C(A[1]),C(A[2]),C(A[3])}function me(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function C(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yu(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xo[s.type]().fromJSON(s)),new i(n,e.options)}},xu={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new pe(r,a),new pe(o,c),new pe(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],h=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-d),new pe(f,1-g),new pe(_,1-h)]:[new pe(o,1-c),new pe(u,1-d),new pe(m,1-g),new pe(p,1-h)]}};function yu(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ni=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){let w=h*f-a;for(let S=0;S<l;S++){let v=S*d-r;g.push(v,-w,0),_.push(0,0,1),p.push(S/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<o;w++){let S=w+l*h,v=w+l*(h+1),L=w+1+l*(h+1),R=w+1+l*h;m.push(S,v,R),m.push(v,L,R)}this.setIndex(m),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bs=class i extends Pt{constructor(e=new mt([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(a,2));function l(u){let d=s.length/3,f=u.extractPoints(t),m=f.shape,g=f.holes;St.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=g.length;p<h;p++){let w=g[p];St.isClockWise(w)===!0&&(g[p]=w.reverse())}let _=St.triangulateShape(m,g);for(let p=0,h=g.length;p<h;p++){let w=g[p];m=m.concat(w)}for(let p=0,h=m.length;p<h;p++){let w=m[p];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let p=0,h=_.length;p<h;p++){let w=_[p],S=w[0]+d,v=w[1]+d,L=w[2]+d;n.push(S,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vu(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function vu(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Wt=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new Z,f=new Z,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){let w=[],S=h/n,v=0;h===0&&a===0?v=.5/t:h===n&&c===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){let R=L/t;d.x=-e*Math.cos(s+R*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(s+R*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(R+v,1-S),w.push(l++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<t;w++){let S=u[h][w+1],v=u[h][w],L=u[h+1][w],R=u[h+1][w+1];(h!==0||a>0)&&m.push(S,v,R),(h!==n-1||c<Math.PI)&&m.push(v,L,R)}this.setIndex(m),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Lt=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Rr=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cr=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ir=class extends ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fo,endingEnd:fo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case po:r=e,o=2*t-n;break;case mo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case po:a=e,c=2*n-t;break;case mo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,h=-f*p+2*f*_-f*g,w=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-m)*p+(1.5+m)*_+.5*g,v=m*p-m*_;for(let L=0;L!==o;++L)r[L]=h*a[u+L]+w*a[l+L]+S*a[c+L]+v*a[d+L];return r}},Pr=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},Lr=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ir(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Mu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ur,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zt.prototype.ValueTypeName="";zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=mr;var kn=class extends zt{constructor(e,t,n){super(e,t,n)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=is;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="color";var Ur=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};Ur.prototype.ValueTypeName="number";var Nr=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)En.slerpFlat(r,0,a,l-o,a,l,c);return r}},Es=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Nr(this.times,this.values,this.getValueSize(),e)}};Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends zt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=is;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends zt{constructor(e,t,n,s){super(e,t,n,s)}};Fr.prototype.ValueTypeName="vector";var So={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Or=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kc=new Or,si=class{constructor(e){this.manager=e!==void 0?e:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var vn={},bo=class extends Error{constructor(e,t){super(e),this.response=t}},Ts=class extends si{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=So.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vn[e]!==void 0){vn[e].push({onLoad:t,onProgress:n,onError:s});return}vn[e]=[],vn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=vn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0,_=0,p=new ReadableStream({start(h){w();function w(){d.read().then(({done:S,value:v})=>{if(S)h.close();else{_+=v.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let R=0,P=u.length;R<P;R++){let U=u[R];U.onProgress&&U.onProgress(L)}h.enqueue(v),w()}},S=>{h.error(S)})}}});return new Response(p)}else throw new bo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{So.add(`file:${e}`,l);let u=vn[e];delete vn[e];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete vn[e];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ws=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},As=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uo=new ht,Hl=new Z,Gl=new Z,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ri=class extends us{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},To=class extends Eo{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new To}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Br=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jo="\\[\\]\\.:\\/",Su=new RegExp("["+Jo+"]","g"),$o="[^"+Jo+"]",bu="[^"+Jo.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",$o),Tu=/(WCOD+)?/.source.replace("WCOD",bu),wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$o),Au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$o),Ru=new RegExp("^"+Eu+Tu+wu+Au+"$"),Cu=["material","materials","bones","map"],wo=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Su,"")}static parseTrackName(e){let t=Ru.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=wo;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hg=new Float32Array(1);var Wl=new ht,Rs=class{constructor(e,t,n=0,s=1/0){this.ray=new ls(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Li,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return Ao(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ao(e[s],this,n,t);return n.sort(Xl),n}};function Xl(i,e){return i.distance-e.distance}function Ao(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ao(r[a],e,t,!0)}}var ql=new pe,Cs=class{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ql.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ql).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var nn=class{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new hn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){let w=[];for(let S=0,v=h.length;S<v;S++){let L=h[S],R=new mt;R.curves=L.curves,w.push(R)}return w}function n(h,w){let S=w.length,v=!1;for(let L=S-1,R=0;R<S;L=R++){let P=w[L],U=w[R],E=U.x-P.x,b=U.y-P.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(P=w[R],E=-E,U=w[L],b=-b),h.y<P.y||h.y>U.y)continue;if(h.y===P.y){if(h.x===P.x)return!0}else{let F=b*(h.x-P.x)-E*(h.y-P.y);if(F===0)return!0;if(F<0)continue;v=!v}}else{if(h.y!==P.y)continue;if(U.x<=h.x&&h.x<=P.x||P.x<=h.x&&h.x<=U.x)return!0}}return v}let s=St.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new mt,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;let d=[],f=[],m=[],g=0,_;f[g]=void 0,m[g]=[];for(let h=0,w=r.length;h<w;h++)o=r[h],_=o.getPoints(),a=s(_),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new mt,p:_},f[g].s.curves=o.curves,u&&g++,m[g]=[]):m[g].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let h=!1,w=0;for(let S=0,v=f.length;S<v;S++)d[S]=[];for(let S=0,v=f.length;S<v;S++){let L=m[S];for(let R=0;R<L.length;R++){let P=L[R],U=!0;for(let E=0;E<f.length;E++)n(P.p,f[E].p)&&(S!==E&&w++,U?(U=!1,d[E].push(P)):h=!0);U&&d[S].push(P)}}w>0&&h===!1&&(m=d)}let p;for(let h=0,w=f.length;h<w;h++){c=f[h].s,l.push(c),p=m[h];for(let S=0,v=p.length;S<v;S++)c.holes.push(p[S].h)}return l}};function Ko(i,e,t,n){let s=Iu(n);switch(t){case zo:return i*e;case Vo:return i*e/s.components*s.byteLength;case ea:return i*e/s.components*s.byteLength;case Ho:return i*e*2/s.components*s.byteLength;case ta:return i*e*2/s.components*s.byteLength;case ko:return i*e*3/s.components*s.byteLength;case qt:return i*e*4/s.components*s.byteLength;case na:return i*e*4/s.components*s.byteLength;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Ta:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iu(i){switch(i){case sn:case No:return{byteLength:1,components:1};case Bi:case Fo:case zi:return{byteLength:2,components:1};case jr:case Qr:return{byteLength:2,components:4};case Gn:case Kr:case dn:return{byteLength:4,components:1};case Oo:case Bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lu(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nd=`#define PI 3.141592653589793
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
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,Vf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Kf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,sp=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,ap=`#define TOON
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
}`,op=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Du,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Vu,batching_vertex:Hu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ku,color_fragment:ju,color_pars_fragment:Qu,color_pars_vertex:ed,color_vertex:td,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:ad,emissivemap_fragment:od,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Td,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:_d,fog_fragment:xd,fog_pars_fragment:yd,gradientmap_pars_fragment:vd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:bd,lights_pars_begin:Ed,lights_toon_fragment:wd,lights_toon_pars_fragment:Ad,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Id,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Bd,map_fragment:zd,map_pars_fragment:kd,map_particle_fragment:Vd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:$d,normal_fragment_maps:Kd,normal_pars_fragment:jd,normal_pars_vertex:Qd,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:xf,skinbase_vertex:yf,skinning_pars_vertex:vf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:bf,specularmap_pars_fragment:Ef,tonemapping_fragment:Tf,tonemapping_pars_fragment:wf,transmission_fragment:Af,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:If,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:Uf,backgroundCube_vert:Nf,backgroundCube_frag:Ff,cube_vert:Of,cube_frag:Bf,depth_vert:zf,depth_frag:kf,distanceRGBA_vert:Vf,distanceRGBA_frag:Hf,equirect_vert:Gf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:$f,meshmatcap_vert:Kf,meshmatcap_frag:jf,meshnormal_vert:Qf,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},fn={basic:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Et([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Et([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Et([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Et([Te.points,Te.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Et([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Et([Te.common,Te.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Et([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Et([Te.sprite,Te.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Et([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Et([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};fn.physical={uniforms:Et([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Pa={r:0,b:0,g:0},ci=new Qt,fp=new ht;function pp(i,e,t,n,s,r,a){let o=new Je(0),c=r===!0?0:1,l,u,d=null,f=0,m=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1,L=g(S);L===null?h(o,c):L&&L.isColor&&(h(L,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,v){let L=g(v);L&&(L.isCubeTexture||L.mapping===Is)?(u===void 0&&(u=new it(new Bn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:li(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(ci)),u.material.toneMapped=$e.getTransfer(L.colorSpace)!==Qe,(d!==L||f!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new it(new ni(2,2),new en({name:"BackgroundMaterial",uniforms:li(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=L,f=L.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,v){S.getRGB(Pa,Yo(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,v,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),c=v,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:p,dispose:w}}function mp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,F,z,$,ee){let se=!1,ie=d($,z,F);r!==ie&&(r=ie,l(r.object)),se=m(b,$,z,ee),se&&g(b,$,z,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,v(b,F,z,$),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,F,z){let $=z.wireframe===!0,ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let se=ee[F.id];se===void 0&&(se={},ee[F.id]=se);let ie=se[$];return ie===void 0&&(ie=f(c()),se[$]=ie),ie}function f(b){let F=[],z=[],$=[];for(let ee=0;ee<t;ee++)F[ee]=0,z[ee]=0,$[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:$,object:b,attributes:{},index:null}}function m(b,F,z,$){let ee=r.attributes,se=F.attributes,ie=0,re=z.getAttributes();for(let k in re)if(re[k].location>=0){let W=ee[k],te=se[k];if(te===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),W===void 0||W.attribute!==te||te&&W.data!==te.data)return!0;ie++}return r.attributesNum!==ie||r.index!==$}function g(b,F,z,$){let ee={},se=F.attributes,ie=0,re=z.getAttributes();for(let k in re)if(re[k].location>=0){let W=se[k];W===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(W=b.instanceColor));let te={};te.attribute=W,W&&W.data&&(te.data=W.data),ee[k]=te,ie++}r.attributes=ee,r.attributesNum=ie,r.index=$}function _(){let b=r.newAttributes;for(let F=0,z=b.length;F<z;F++)b[F]=0}function p(b){h(b,0)}function h(b,F){let z=r.newAttributes,$=r.enabledAttributes,ee=r.attributeDivisors;z[b]=1,$[b]===0&&(i.enableVertexAttribArray(b),$[b]=1),ee[b]!==F&&(i.vertexAttribDivisor(b,F),ee[b]=F)}function w(){let b=r.newAttributes,F=r.enabledAttributes;for(let z=0,$=F.length;z<$;z++)F[z]!==b[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function S(b,F,z,$,ee,se,ie){ie===!0?i.vertexAttribIPointer(b,F,z,ee,se):i.vertexAttribPointer(b,F,z,$,ee,se)}function v(b,F,z,$){_();let ee=$.attributes,se=z.getAttributes(),ie=F.defaultAttributeValues;for(let re in se){let k=se[re];if(k.location>=0){let Y=ee[re];if(Y===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){let W=Y.normalized,te=Y.itemSize,de=e.get(Y);if(de===void 0)continue;let fe=de.buffer,D=de.type,N=de.bytesPerElement,y=D===i.INT||D===i.UNSIGNED_INT||Y.gpuType===Kr;if(Y.isInterleavedBufferAttribute){let x=Y.data,G=x.stride,ne=Y.offset;if(x.isInstancedInterleavedBuffer){for(let H=0;H<k.locationSize;H++)h(k.location+H,x.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=x.meshPerAttribute*x.count)}else for(let H=0;H<k.locationSize;H++)p(k.location+H);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let H=0;H<k.locationSize;H++)S(k.location+H,te/k.locationSize,D,W,G*N,(ne+te/k.locationSize*H)*N,y)}else{if(Y.isInstancedBufferAttribute){for(let x=0;x<k.locationSize;x++)h(k.location+x,Y.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let x=0;x<k.locationSize;x++)p(k.location+x);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let x=0;x<k.locationSize;x++)S(k.location+x,te/k.locationSize,D,W,te*N,te/k.locationSize*x*N,y)}}else if(ie!==void 0){let W=ie[re];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(k.location,W);break;case 3:i.vertexAttrib3fv(k.location,W);break;case 4:i.vertexAttrib4fv(k.location,W);break;default:i.vertexAttrib1fv(k.location,W)}}}}w()}function L(){U();for(let b in n){let F=n[b];for(let z in F){let $=F[z];for(let ee in $)u($[ee].object),delete $[ee];delete F[z]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let z in F){let $=F[z];for(let ee in $)u($[ee].object),delete $[ee];delete F[z]}delete n[b.id]}function P(b){for(let F in n){let z=n[F];if(z[b.id]===void 0)continue;let $=z[b.id];for(let ee in $)u($[ee].object),delete $[ee];delete z[b.id]}}function U(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function gp(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function c(l,u,d,f){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _p(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==qt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function xp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new an,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let w=r?0:n,S=w*4,v=h.clippingState||null;c.value=v,v=u(g,f,S,m);for(let L=0;L!==S;++L)v[L]=t[L];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let h=m+_*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,v=m;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function yp(i){let e=new WeakMap;function t(a,o){return o===Zr?a.mapping=ai:o===Jr&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zr||o===Jr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Mr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wi=4,Vc=[.125,.215,.35,.446,.526,.582],di=20,jo=new ri,Hc=new Je,Qo=null,el=0,tl=0,nl=!1,ui=(1+Math.sqrt(5))/2,Gi=1/ui,Gc=[new Z(-ui,Gi,0),new Z(ui,Gi,0),new Z(-Gi,0,ui),new Z(Gi,0,ui),new Z(0,ui,-Gi),new Z(0,ui,Gi),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],vp=new Z,Ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vp}=r;Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:zi,format:qt,colorSpace:Qn,depthBuffer:!1},s=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=Sp(r,e,t)}return s}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s,r){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Hc),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new ei({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),p=new it(new Bn,_),h=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,h=!0):(_.color.copy(Hc),h=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let L=this._cubeSize;La(s,v*L,S>2?L:0,L,L),d.setRenderTarget(s),h&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ai||e.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;La(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gc[(s-r-1)%Gc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new it(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);let h=[],w=0;for(let P=0;P<di;++P){let U=P/_,E=Math.exp(-U*U/2);h.push(E),P===0?w+=E:P<p&&(w+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let v=this._sizeLods[s],L=3*v*(s>S-Wi?s-S+Wi:0),R=4*(this._cubeSize-v);La(t,L,R,3*v,2*v),c.setRenderTarget(t),c.render(d,jo)}};function Mp(i){let e=[],t=[],n=[],s=i,r=i-Wi+1+Vc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Wi?c=Vc[a-i+Wi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,w=new Float32Array(_*g*m),S=new Float32Array(p*g*m),v=new Float32Array(h*g*m);for(let R=0;R<m;R++){let P=R%3*2/3-1,U=R>2?0:-1,E=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(E,_*g*R),S.set(f,p*g*R);let b=[R,R,R,R,R,R];v.set(b,h*g*R)}let L=new Pt;L.setAttribute("position",new Ot(w,_)),L.setAttribute("uv",new Ot(S,p)),L.setAttribute("faceIndex",new Ot(v,h)),e.push(L),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(i,e,t){let n=new on(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sp(i,e,t){let n=new Float32Array(di),s=new Z(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Xc(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function qc(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function bp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Zr||c===Jr,u=c===ai||c===oi;if(l||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ua(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Ua(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ep(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let S=0,v=w.length;S<v;S+=3){let L=w[S+0],R=w[S+1],P=w[S+2];f.push(L,R,R,P,P,L)}}else if(g!==void 0){let w=g.array;_=g.version;for(let S=0,v=w.length/3-1;S<v;S+=3){let L=S+0,R=S+1,P=S+2;f.push(L,R,R,P,P,L)}}else return;let p=new(qo(f)?hs:cs)(f,1);p.version=_;let h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function wp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*_[w];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ap(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*L*4*d),P=new os(R,v,L,d);P.type=dn,P.needsUpdate=!0;let U=S*4;for(let b=0;b<d;b++){let F=p[b],z=h[b],$=w[b],ee=v*L*4*b;for(let se=0;se<F.count;se++){let ie=se*U;m===!0&&(s.fromBufferAttribute(F,se),R[ee+ie+0]=s.x,R[ee+ie+1]=s.y,R[ee+ie+2]=s.z,R[ee+ie+3]=0),g===!0&&(s.fromBufferAttribute(z,se),R[ee+ie+4]=s.x,R[ee+ie+5]=s.y,R[ee+ie+6]=s.z,R[ee+ie+7]=0),_===!0&&(s.fromBufferAttribute($,se),R[ee+ie+8]=s.x,R[ee+ie+9]=s.y,R[ee+ie+10]=s.z,R[ee+ie+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new pe(v,L)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var uh=new It,Yc=new ps(1,1),dh=new os,fh=new yr,ph=new ds,Zc=[],Jc=[],$c=new Float32Array(16),Kc=new Float32Array(9),jc=new Float32Array(4);function qi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fa(i,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ip(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),_t(t,n)}}function Np(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),_t(t,n)}}function Fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),_t(t,n)}}function Op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Vp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Xp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=Wo,r=Yc):r=uh,t.setTexture2D(e||r,s)}function qp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fh,s)}function Yp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ph,s)}function Zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dh,s)}function Jp(i){switch(i){case 5126:return Ip;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Zp}}function $p(i,e){i.uniform1fv(this.addr,e)}function Kp(i,e){let t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function jp(i,e){let t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qp(i,e){let t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function em(i,e){let t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tm(i,e){let t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nm(i,e){let t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function im(i,e){i.uniform1iv(this.addr,e)}function sm(i,e){i.uniform2iv(this.addr,e)}function rm(i,e){i.uniform3iv(this.addr,e)}function am(i,e){i.uniform4iv(this.addr,e)}function om(i,e){i.uniform1uiv(this.addr,e)}function lm(i,e){i.uniform2uiv(this.addr,e)}function cm(i,e){i.uniform3uiv(this.addr,e)}function hm(i,e){i.uniform4uiv(this.addr,e)}function um(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uh,r[a])}function dm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fh,r[a])}function fm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ph,r[a])}function pm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dh,r[a])}function mm(i){switch(i){case 5126:return $p;case 35664:return Kp;case 35665:return jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function Qc(i,e){i.seq.push(e),i.map[e.id]=e}function gm(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),a=il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Qc(t,l===void 0?new sl(o,i,e):new rl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new al(o),Qc(t,d)),t=d}}}var Xi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);gm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function eh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _m=37297,xm=0;function ym(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var th=new Ve;function vm(i){$e._getMatrix(th,$e.workingColorSpace,i);let e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ss:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ym(i.getShaderSource(e),o)}else return r}function Mm(i,e){let t=vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case _c:t="Cineon";break;case Yr:t="ACESFilmic";break;case yc:t="AgX";break;case vc:t="Neutral";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Da=new Z;function bm(){$e.getLuminanceCoefficients(Da);let i=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Tm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function ih(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Am,Cm)}var Rm=new Map;function Cm(i,e){let t=qe[e];if(t===void 0){let n=Rm.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(Im,Pm)}function Pm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Lm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ai:case oi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Um(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Nm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Do:e="ENVMAP_BLENDING_MULTIPLY";break;case fc:e="ENVMAP_BLENDING_MIX";break;case pc:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lm(t),l=Dm(t),u=Um(t),d=Nm(t),f=Fm(t),m=Em(t),g=Tm(r),_=s.createProgram(),p,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),h.length>0&&(h+=`
`)):(p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),h=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=ol(a),a=ih(a,t),a=sh(a,t),o=ol(o),o=ih(o,t),o=sh(o,t),a=rh(a),o=rh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=w+p+a,v=w+h+o,L=eh(s,s.VERTEX_SHADER,S),R=eh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",$=s.getShaderInfoLog(L)||"",ee=s.getShaderInfoLog(R)||"",se=z.trim(),ie=$.trim(),re=ee.trim(),k=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{let W=nh(s,L,"vertex"),te=nh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+se+`
`+W+`
`+te)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ie===""||re==="")&&(Y=!1);Y&&(F.diagnostics={runnable:k,programLog:se,vertexShader:{log:ie,prefix:p},fragmentShader:{log:re,prefix:h}})}s.deleteShader(L),s.deleteShader(R),U=new Xi(s,_),E=wm(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,_m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}var Bm=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}};function zm(i,e,t,n,s,r,a){let o=new Li,c=new ll,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,b,F,z,$){let ee=z.fog,se=$.geometry,ie=E.isMeshStandardMaterial?z.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||ie),k=re&&re.mapping===Is?re.image.height:null,Y=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let W=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,te=W!==void 0?W.length:0,de=0;se.morphAttributes.position!==void 0&&(de=1),se.morphAttributes.normal!==void 0&&(de=2),se.morphAttributes.color!==void 0&&(de=3);let fe,D,N,y;if(Y){let je=fn[Y];fe=je.vertexShader,D=je.fragmentShader}else fe=E.vertexShader,D=E.fragmentShader,c.update(E),N=c.getVertexShaderID(E),y=c.getFragmentShaderID(E);let x=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),ne=$.isInstancedMesh===!0,H=$.isBatchedMesh===!0,ue=!!E.map,me=!!E.matcap,C=!!re,B=!!E.aoMap,V=!!E.lightMap,X=!!E.bumpMap,J=!!E.normalMap,O=!!E.displacementMap,A=!!E.emissiveMap,ae=!!E.metalnessMap,Ee=!!E.roughnessMap,Fe=E.anisotropy>0,I=E.clearcoat>0,M=E.dispersion>0,j=E.iridescence>0,ce=E.sheen>0,_e=E.transmission>0,he=Fe&&!!E.anisotropyMap,Ie=I&&!!E.clearcoatMap,Me=I&&!!E.clearcoatNormalMap,Pe=I&&!!E.clearcoatRoughnessMap,Le=j&&!!E.iridescenceMap,xe=j&&!!E.iridescenceThicknessMap,we=ce&&!!E.sheenColorMap,He=ce&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,Xe=!!E.specularIntensityMap,q=_e&&!!E.transmissionMap,Se=_e&&!!E.thicknessMap,be=!!E.gradientMap,De=!!E.alphaMap,ye=E.alphaTest>0,ge=!!E.alphaHash,Ne=!!E.extensions,We=wn;E.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(We=i.toneMapping);let nt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:fe,fragmentShader:D,defines:E.defines,customVertexShaderID:N,customFragmentShaderID:y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:H,batchingColor:H&&$._colorsTexture!==null,instancing:ne,instancingColor:ne&&$.instanceColor!==null,instancingMorph:ne&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:x===null?i.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Qn,alphaToCoverage:!!E.alphaToCoverage,map:ue,matcap:me,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:V,bumpMap:X,normalMap:J,displacementMap:f&&O,emissiveMap:A,normalMapObjectSpace:J&&E.normalMapType===Ec,normalMapTangentSpace:J&&E.normalMapType===Go,metalnessMap:ae,roughnessMap:Ee,anisotropy:Fe,anisotropyMap:he,clearcoat:I,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:j,iridescenceMap:Le,iridescenceThicknessMap:xe,sheen:ce,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Xe,transmission:_e,transmissionMap:q,thicknessMap:Se,gradientMap:be,opaque:E.transparent===!1&&E.blending===Kn&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:ge,combine:E.combine,mapUv:ue&&_(E.map.channel),aoMapUv:B&&_(E.aoMap.channel),lightMapUv:V&&_(E.lightMap.channel),bumpMapUv:X&&_(E.bumpMap.channel),normalMapUv:J&&_(E.normalMap.channel),displacementMapUv:O&&_(E.displacementMap.channel),emissiveMapUv:A&&_(E.emissiveMap.channel),metalnessMapUv:ae&&_(E.metalnessMap.channel),roughnessMapUv:Ee&&_(E.roughnessMap.channel),anisotropyMapUv:he&&_(E.anisotropyMap.channel),clearcoatMapUv:Ie&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(E.sheenRoughnessMap.channel),specularMapUv:Oe&&_(E.specularMap.channel),specularColorMapUv:Ae&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:q&&_(E.transmissionMap.channel),thicknessMapUv:Se&&_(E.thicknessMap.channel),alphaMapUv:De&&_(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(J||Fe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!se.attributes.uv&&(ue||De),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:G,skinning:$.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ue&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:A&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xt,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||H)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)b.push(F),b.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(w(b,E),S(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function w(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function S(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let b=g[E.type],F;if(b){let z=fn[b];F=Nc.clone(z.uniforms)}else F=E.uniforms;return F}function L(E,b){let F;for(let z=0,$=u.length;z<$;z++){let ee=u[z];if(ee.cacheKey===b){F=ee,++F.usedTimes;break}}return F===void 0&&(F=new Om(i,b,E,r),u.push(F)),F}function R(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:U}}function km(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){let h=a(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,f,m,g,_,p){let h=a(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||Vm),n.length>1&&n.sort(f||oh),s.length>1&&s.sort(f||oh)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Hm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Je};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function Wm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Xm=0;function qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ym(i){let e=new Gm,t=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Z);let s=new Z,r=new ht,a=new ht;function o(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,w=0,S=0,v=0,L=0,R=0,P=0;l.sort(qm);for(let E=0,b=l.length;E<b;E++){let F=l[E],z=F.color,$=F.intensity,ee=F.distance,se=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=z.r*$,d+=z.g*$,f+=z.b*$;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(F.sh.coefficients[ie],$);P++}else if(F.isDirectionalLight){let ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,k=t.get(F);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=F.shadow.matrix,w++}n.directional[m]=ie,m++}else if(F.isSpotLight){let ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(z).multiplyScalar($),ie.distance=ee,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,n.spot[_]=ie;let re=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,re.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[_]=re.matrix,F.castShadow){let k=t.get(F);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=se,v++}_++}else if(F.isRectAreaLight){let ie=e.get(F);ie.color.copy(z).multiplyScalar($),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),n.rectArea[p]=ie,p++}else if(F.isPointLight){let ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){let re=F.shadow,k=t.get(F);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,k.shadowCameraNear=re.camera.near,k.shadowCameraFar=re.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=ie,g++}else if(F.isHemisphereLight){let ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar($),ie.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[h]=ie,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==L||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=L,U.numLightProbes=P,n.version=Xm++)}function c(l,u){let d=0,f=0,m=0,g=0,_=0,p=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){let S=l[h];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function ch(i){let e=new Ym(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Zm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ch(i),e.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`;function Km(i,e,t){let n=new Ui,s=new pe,r=new pe,a=new ut,o=new Rr({depthPacking:bc}),c=new Cr,l={},u=t.maxTextureSize,d={[Sn]:wt,[wt]:Sn,[Xt]:Xt},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Jm,fragmentShader:$m}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new it(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let h=this.type;this.render=function(R,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Tn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let $=h!==un&&this.type===un,ee=h===un&&this.type!==un;for(let se=0,ie=R.length;se<ie;se++){let re=R[se],k=re.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();if(s.multiply(Y),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y)),k.map===null||$===!0||ee===!0){let te=this.type!==un?{minFilter:Gt,magFilter:Gt}:{};k.map!==null&&k.map.dispose(),k.map=new on(s.x,s.y,te),k.map.texture.name=re.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let W=k.getViewportCount();for(let te=0;te<W;te++){let de=k.getViewport(te);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),z.viewport(a),k.updateMatrices(re,te),n=k.getFrustum(),v(P,U,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===un&&w(k,U),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,b,F)};function w(R,P){let U=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,U,m,_,null)}function S(R,P,U,E){let b=null,F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=b.uuid,$=P.uuid,ee=l[z];ee===void 0&&(ee={},l[z]=ee);let se=ee[$];se===void 0&&(se=b.clone(),ee[$]=se,P.addEventListener("dispose",L)),b=se}if(b.visible=P.visible,b.wireframe=P.wireframe,E===un?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:d[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=U}return b}function v(R,P,U,E,b){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let $=e.update(R),ee=R.material;if(Array.isArray(ee)){let se=$.groups;for(let ie=0,re=se.length;ie<re;ie++){let k=se[ie],Y=ee[k.materialIndex];if(Y&&Y.visible){let W=S(R,Y,E,b);R.onBeforeShadow(i,R,P,U,$,W,k),i.renderBufferDirect(U,null,$,W,R,k),R.onAfterShadow(i,R,P,U,$,W,k)}}}else if(ee.visible){let se=S(R,ee,E,b);R.onBeforeShadow(i,R,P,U,$,se,null),i.renderBufferDirect(U,null,$,se,R,null),R.onAfterShadow(i,R,P,U,$,se,null)}}let z=R.children;for(let $=0,ee=z.length;$<ee;$++)v(z[$],P,U,E,b)}function L(R){R.target.removeEventListener("dispose",L);for(let U in l){let E=l[U],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var jm={[kr]:Vr,[Hr]:Xr,[Gr]:qr,[jn]:Wr,[Vr]:kr,[Xr]:Hr,[qr]:Gr,[Wr]:jn};function Qm(i,e){function t(){let q=!1,Se=new ut,be=null,De=new ut(0,0,0,0);return{setMask:function(ye){be!==ye&&!q&&(i.colorMask(ye,ye,ye,ye),be=ye)},setLocked:function(ye){q=ye},setClear:function(ye,ge,Ne,We,nt){nt===!0&&(ye*=We,ge*=We,Ne*=We),Se.set(ye,ge,Ne,We),De.equals(Se)===!1&&(i.clearColor(ye,ge,Ne,We),De.copy(Se))},reset:function(){q=!1,be=null,De.set(-1,0,0,0)}}}function n(){let q=!1,Se=!1,be=null,De=null,ye=null;return{setReversed:function(ge){if(Se!==ge){let Ne=e.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Se=ge;let We=ye;ye=null,this.setClear(We)}},getReversed:function(){return Se},setTest:function(ge){ge?x(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(ge){be!==ge&&!q&&(i.depthMask(ge),be=ge)},setFunc:function(ge){if(Se&&(ge=jm[ge]),De!==ge){switch(ge){case kr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case Hr:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case Gr:i.depthFunc(i.EQUAL);break;case Wr:i.depthFunc(i.GEQUAL);break;case Xr:i.depthFunc(i.GREATER);break;case qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ge}},setLocked:function(ge){q=ge},setClear:function(ge){ye!==ge&&(Se&&(ge=1-ge),i.clearDepth(ge),ye=ge)},reset:function(){q=!1,be=null,De=null,ye=null,Se=!1}}}function s(){let q=!1,Se=null,be=null,De=null,ye=null,ge=null,Ne=null,We=null,nt=null;return{setTest:function(je){q||(je?x(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(je){Se!==je&&!q&&(i.stencilMask(je),Se=je)},setFunc:function(je,pn,rn){(be!==je||De!==pn||ye!==rn)&&(i.stencilFunc(je,pn,rn),be=je,De=pn,ye=rn)},setOp:function(je,pn,rn){(ge!==je||Ne!==pn||We!==rn)&&(i.stencilOp(je,pn,rn),ge=je,Ne=pn,We=rn)},setLocked:function(je){q=je},setClear:function(je){nt!==je&&(i.clearStencil(je),nt=je)},reset:function(){q=!1,Se=null,be=null,De=null,ye=null,ge=null,Ne=null,We=null,nt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,S=null,v=null,L=null,R=null,P=new Je(0,0,0),U=0,E=!1,b=null,F=null,z=null,$=null,ee=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,re=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(k)[1]),ie=re>=1):k.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ie=re>=2);let Y=null,W={},te=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),fe=new ut().fromArray(te),D=new ut().fromArray(de);function N(q,Se,be,De){let ye=new Uint8Array(4),ge=i.createTexture();i.bindTexture(q,ge),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<be;Ne++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(Se+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ge}let y={};y[i.TEXTURE_2D]=N(i.TEXTURE_2D,i.TEXTURE_2D,1),y[i.TEXTURE_CUBE_MAP]=N(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[i.TEXTURE_2D_ARRAY]=N(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),y[i.TEXTURE_3D]=N(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),x(i.DEPTH_TEST),a.setFunc(jn),X(!1),J(Ro),x(i.CULL_FACE),B(Tn);function x(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function G(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function ne(q,Se){return d[q]!==Se?(i.bindFramebuffer(q,Se),d[q]=Se,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function H(q,Se){let be=m,De=!1;if(q){be=f.get(Se),be===void 0&&(be=[],f.set(Se,be));let ye=q.textures;if(be.length!==ye.length||be[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ne=ye.length;ge<Ne;ge++)be[ge]=i.COLOR_ATTACHMENT0+ge;be.length=ye.length,De=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,De=!0);De&&i.drawBuffers(be)}function ue(q){return g!==q?(i.useProgram(q),g=q,!0):!1}let me={[Fn]:i.FUNC_ADD,[$l]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};me[jl]=i.MIN,me[Ql]=i.MAX;let C={[ec]:i.ZERO,[tc]:i.ONE,[nc]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[ac]:i.DST_COLOR,[sc]:i.DST_ALPHA,[ic]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[oc]:i.ONE_MINUS_DST_COLOR,[rc]:i.ONE_MINUS_DST_ALPHA,[cc]:i.CONSTANT_COLOR,[hc]:i.ONE_MINUS_CONSTANT_COLOR,[uc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(q,Se,be,De,ye,ge,Ne,We,nt,je){if(q===Tn){_===!0&&(G(i.BLEND),_=!1);return}if(_===!1&&(x(i.BLEND),_=!0),q!==Jl){if(q!==p||je!==E){if((h!==Fn||v!==Fn)&&(i.blendEquation(i.FUNC_ADD),h=Fn,v=Fn),je)switch(q){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Po:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}w=null,S=null,L=null,R=null,P.set(0,0,0),U=0,p=q,E=je}return}ye=ye||Se,ge=ge||be,Ne=Ne||De,(Se!==h||ye!==v)&&(i.blendEquationSeparate(me[Se],me[ye]),h=Se,v=ye),(be!==w||De!==S||ge!==L||Ne!==R)&&(i.blendFuncSeparate(C[be],C[De],C[ge],C[Ne]),w=be,S=De,L=ge,R=Ne),(We.equals(P)===!1||nt!==U)&&(i.blendColor(We.r,We.g,We.b,nt),P.copy(We),U=nt),p=q,E=!1}function V(q,Se){q.side===Xt?G(i.CULL_FACE):x(i.CULL_FACE);let be=q.side===wt;Se&&(be=!be),X(be),q.blending===Kn&&q.transparent===!1?B(Tn):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let De=q.stencilWrite;o.setTest(De),De&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),A(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?x(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(q){b!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),b=q)}function J(q){q!==Yl?(x(i.CULL_FACE),q!==F&&(q===Ro?i.cullFace(i.BACK):q===Zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),F=q}function O(q){q!==z&&(ie&&i.lineWidth(q),z=q)}function A(q,Se,be){q?(x(i.POLYGON_OFFSET_FILL),($!==Se||ee!==be)&&(i.polygonOffset(Se,be),$=Se,ee=be)):G(i.POLYGON_OFFSET_FILL)}function ae(q){q?x(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function Ee(q){q===void 0&&(q=i.TEXTURE0+se-1),Y!==q&&(i.activeTexture(q),Y=q)}function Fe(q,Se,be){be===void 0&&(Y===null?be=i.TEXTURE0+se-1:be=Y);let De=W[be];De===void 0&&(De={type:void 0,texture:void 0},W[be]=De),(De.type!==q||De.texture!==Se)&&(Y!==be&&(i.activeTexture(be),Y=be),i.bindTexture(q,Se||y[q]),De.type=q,De.texture=Se)}function I(){let q=W[Y];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pe(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(q){fe.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),fe.copy(q))}function He(q){D.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),D.copy(q))}function Oe(q,Se){let be=l.get(Se);be===void 0&&(be=new WeakMap,l.set(Se,be));let De=be.get(q);De===void 0&&(De=i.getUniformBlockIndex(Se,q.name),be.set(q,De))}function Ae(q,Se){let De=l.get(Se).get(q);c.get(Se)!==De&&(i.uniformBlockBinding(Se,De,q.__bindingPointIndex),c.set(Se,De))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,W={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,S=null,v=null,L=null,R=null,P=new Je(0,0,0),U=0,E=!1,b=null,F=null,z=null,$=null,ee=null,fe.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:x,disable:G,bindFramebuffer:ne,drawBuffers:H,useProgram:ue,setBlending:B,setMaterial:V,setFlipSided:X,setCullFace:J,setLineWidth:O,setPolygonOffset:A,setScissorTest:ae,activeTexture:Ee,bindTexture:Fe,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:j,texImage2D:Le,texImage3D:xe,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:Ie,scissor:we,viewport:He,reset:Xe}}function eg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,M){return m?new OffscreenCanvas(I,M):as("canvas")}function _(I,M,j){let ce=1,_e=Fe(I);if((_e.width>j||_e.height>j)&&(ce=j/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let he=Math.floor(ce*_e.width),Ie=Math.floor(ce*_e.height);d===void 0&&(d=g(he,Ie));let Me=M?g(he,Ie):d;return Me.width=he,Me.height=Ie,Me.getContext("2d").drawImage(I,0,0,he,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ie+")."),Me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function p(I){return I.generateMipmaps}function h(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,M,j,ce,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=M;if(M===i.RED&&(j===i.FLOAT&&(he=i.R32F),j===i.HALF_FLOAT&&(he=i.R16F),j===i.UNSIGNED_BYTE&&(he=i.R8)),M===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.R8UI),j===i.UNSIGNED_SHORT&&(he=i.R16UI),j===i.UNSIGNED_INT&&(he=i.R32UI),j===i.BYTE&&(he=i.R8I),j===i.SHORT&&(he=i.R16I),j===i.INT&&(he=i.R32I)),M===i.RG&&(j===i.FLOAT&&(he=i.RG32F),j===i.HALF_FLOAT&&(he=i.RG16F),j===i.UNSIGNED_BYTE&&(he=i.RG8)),M===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RG8UI),j===i.UNSIGNED_SHORT&&(he=i.RG16UI),j===i.UNSIGNED_INT&&(he=i.RG32UI),j===i.BYTE&&(he=i.RG8I),j===i.SHORT&&(he=i.RG16I),j===i.INT&&(he=i.RG32I)),M===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RGB8UI),j===i.UNSIGNED_SHORT&&(he=i.RGB16UI),j===i.UNSIGNED_INT&&(he=i.RGB32UI),j===i.BYTE&&(he=i.RGB8I),j===i.SHORT&&(he=i.RGB16I),j===i.INT&&(he=i.RGB32I)),M===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),j===i.UNSIGNED_INT&&(he=i.RGBA32UI),j===i.BYTE&&(he=i.RGBA8I),j===i.SHORT&&(he=i.RGBA16I),j===i.INT&&(he=i.RGBA32I)),M===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),M===i.RGBA){let Ie=_e?ss:$e.getTransfer(ce);j===i.FLOAT&&(he=i.RGBA32F),j===i.HALF_FLOAT&&(he=i.RGBA16F),j===i.UNSIGNED_BYTE&&(he=Ie===Qe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(I,M){let j;return I?M===null||M===Gn||M===ki?j=i.DEPTH24_STENCIL8:M===dn?j=i.DEPTH32F_STENCIL8:M===Bi&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===ki?j=i.DEPTH_COMPONENT24:M===dn?j=i.DEPTH_COMPONENT32F:M===Bi&&(j=i.DEPTH_COMPONENT16),j}function L(I,M){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gt&&I.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function R(I){let M=I.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&u.delete(M)}function P(I){let M=I.target;M.removeEventListener("dispose",P),b(M)}function U(I){let M=n.get(I);if(M.__webglInit===void 0)return;let j=I.source,ce=f.get(j);if(ce){let _e=ce[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&E(I),Object.keys(ce).length===0&&f.delete(j)}n.remove(I)}function E(I){let M=n.get(I);i.deleteTexture(M.__webglTexture);let j=I.source,ce=f.get(j);delete ce[M.__cacheKey],a.memory.textures--}function b(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let _e=0;_e<M.__webglFramebuffer[ce].length;_e++)i.deleteFramebuffer(M.__webglFramebuffer[ce][_e]);else i.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)i.deleteFramebuffer(M.__webglFramebuffer[ce]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let j=I.textures;for(let ce=0,_e=j.length;ce<_e;ce++){let he=n.get(j[ce]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(j[ce])}n.remove(I)}let F=0;function z(){F=0}function $(){let I=F;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function ee(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function se(I,M){let j=n.get(I);if(I.isVideoTexture&&ae(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){let ce=I.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{y(j,I,M);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+M)}function ie(I,M){let j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){y(j,I,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+M)}function re(I,M){let j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){y(j,I,M);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+M)}function k(I,M){let j=n.get(I);if(I.version>0&&j.__version!==I.version){x(j,I,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+M)}let Y={[Ai]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},W={[Gt]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},te={[Tc]:i.NEVER,[Pc]:i.ALWAYS,[wc]:i.LESS,[Wo]:i.LEQUAL,[Ac]:i.EQUAL,[Ic]:i.GEQUAL,[Rc]:i.GREATER,[Cc]:i.NOTEQUAL};function de(I,M){if(M.type===dn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===$r||M.magFilter===Ps||M.magFilter===Hn||M.minFilter===jt||M.minFilter===$r||M.minFilter===Ps||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Y[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,W[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Ps&&M.minFilter!==Hn||M.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function fe(I,M){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",R));let ce=M.source,_e=f.get(ce);_e===void 0&&(_e={},f.set(ce,_e));let he=ee(M);if(he!==I.__cacheKey){_e[he]===void 0&&(_e[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),_e[he].usedTimes++;let Ie=_e[I.__cacheKey];Ie!==void 0&&(_e[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(M)),I.__cacheKey=he,I.__webglTexture=_e[he].texture}return j}function D(I,M,j){return Math.floor(Math.floor(I/j)/M)}function N(I,M,j,ce){let he=I.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,j,ce,M.data);else{he.sort((xe,we)=>xe.start-we.start);let Ie=0;for(let xe=1;xe<he.length;xe++){let we=he[Ie],He=he[xe],Oe=we.start+we.count,Ae=D(He.start,M.width,4),Xe=D(we.start,M.width,4);He.start<=Oe+1&&Ae===Xe&&D(He.start+He.count-1,M.width,4)===Ae?we.count=Math.max(we.count,He.start+He.count-we.start):(++Ie,he[Ie]=He)}he.length=Ie+1;let Me=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let xe=0,we=he.length;xe<we;xe++){let He=he[xe],Oe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),Xe=Oe%M.width,q=Math.floor(Oe/M.width),Se=Ae,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Xe,q,Se,be,j,ce,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function y(I,M,j){let ce=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=i.TEXTURE_3D);let _e=fe(I,M),he=M.source;t.bindTexture(ce,I.__webglTexture,i.TEXTURE0+j);let Ie=n.get(he);if(he.version!==Ie.__version||_e===!0){t.activeTexture(i.TEXTURE0+j);let Me=$e.getPrimaries($e.workingColorSpace),Pe=M.colorSpace===An?null:$e.getPrimaries(M.colorSpace),Le=M.colorSpace===An||Me===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let xe=_(M.image,!1,s.maxTextureSize);xe=Ee(M,xe);let we=r.convert(M.format,M.colorSpace),He=r.convert(M.type),Oe=S(M.internalFormat,we,He,M.colorSpace,M.isVideoTexture);de(ce,M);let Ae,Xe=M.mipmaps,q=M.isVideoTexture!==!0,Se=Ie.__version===void 0||_e===!0,be=he.dataReady,De=L(M,xe);if(M.isDepthTexture)Oe=v(M.format===Vi,M.type),Se&&(q?t.texStorage2D(i.TEXTURE_2D,1,Oe,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,we,He,null));else if(M.isDataTexture)if(Xe.length>0){q&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,Xe[0].width,Xe[0].height);for(let ye=0,ge=Xe.length;ye<ge;ye++)Ae=Xe[ye],q?be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,we,He,Ae.data);M.generateMipmaps=!1}else q?(Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,xe.width,xe.height),be&&N(M,xe,we,He)):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,we,He,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){q&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,Xe[0].width,Xe[0].height,xe.depth);for(let ye=0,ge=Xe.length;ye<ge;ye++)if(Ae=Xe[ye],M.format!==qt)if(we!==null)if(q){if(be)if(M.layerUpdates.size>0){let Ne=Ko(Ae.width,Ae.height,M.format,M.type);for(let We of M.layerUpdates){let nt=Ae.data.subarray(We*Ne/Ae.data.BYTES_PER_ELEMENT,(We+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,We,Ae.width,Ae.height,1,we,nt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,xe.depth,we,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,xe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ae.width,Ae.height,xe.depth,we,He,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,Ae.width,Ae.height,xe.depth,0,we,He,Ae.data)}else{q&&Se&&t.texStorage2D(i.TEXTURE_2D,De,Oe,Xe[0].width,Xe[0].height);for(let ye=0,ge=Xe.length;ye<ge;ye++)Ae=Xe[ye],M.format!==qt?we!==null?q?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ae.width,Ae.height,we,He,Ae.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ae.width,Ae.height,0,we,He,Ae.data)}else if(M.isDataArrayTexture)if(q){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Oe,xe.width,xe.height,xe.depth),be)if(M.layerUpdates.size>0){let ye=Ko(xe.width,xe.height,M.format,M.type);for(let ge of M.layerUpdates){let Ne=xe.data.subarray(ge*ye/xe.data.BYTES_PER_ELEMENT,(ge+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,xe.width,xe.height,1,we,He,Ne)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,we,He,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,xe.width,xe.height,xe.depth,0,we,He,xe.data);else if(M.isData3DTexture)q?(Se&&t.texStorage3D(i.TEXTURE_3D,De,Oe,xe.width,xe.height,xe.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,we,He,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,xe.width,xe.height,xe.depth,0,we,He,xe.data);else if(M.isFramebufferTexture){if(Se)if(q)t.texStorage2D(i.TEXTURE_2D,De,Oe,xe.width,xe.height);else{let ye=xe.width,ge=xe.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Oe,ye,ge,0,we,He,null),ye>>=1,ge>>=1}}else if(Xe.length>0){if(q&&Se){let ye=Fe(Xe[0]);t.texStorage2D(i.TEXTURE_2D,De,Oe,ye.width,ye.height)}for(let ye=0,ge=Xe.length;ye<ge;ye++)Ae=Xe[ye],q?be&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we,He,Ae):t.texImage2D(i.TEXTURE_2D,ye,Oe,we,He,Ae);M.generateMipmaps=!1}else if(q){if(Se){let ye=Fe(xe);t.texStorage2D(i.TEXTURE_2D,De,Oe,ye.width,ye.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,He,xe)}else t.texImage2D(i.TEXTURE_2D,0,Oe,we,He,xe);p(M)&&h(ce),Ie.__version=he.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function x(I,M,j){if(M.image.length!==6)return;let ce=fe(I,M),_e=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+j);let he=n.get(_e);if(_e.version!==he.__version||ce===!0){t.activeTexture(i.TEXTURE0+j);let Ie=$e.getPrimaries($e.workingColorSpace),Me=M.colorSpace===An?null:$e.getPrimaries(M.colorSpace),Pe=M.colorSpace===An||Ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Le=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Le&&!xe?we[ge]=_(M.image[ge],!0,s.maxCubemapSize):we[ge]=xe?M.image[ge].image:M.image[ge],we[ge]=Ee(M,we[ge]);let He=we[0],Oe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Xe=S(M.internalFormat,Oe,Ae,M.colorSpace),q=M.isVideoTexture!==!0,Se=he.__version===void 0||ce===!0,be=_e.dataReady,De=L(M,He);de(i.TEXTURE_CUBE_MAP,M);let ye;if(Le){q&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,He.width,He.height);for(let ge=0;ge<6;ge++){ye=we[ge].mipmaps;for(let Ne=0;Ne<ye.length;Ne++){let We=ye[Ne];M.format!==qt?Oe!==null?q?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,We.width,We.height,Oe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,We.width,We.height,Oe,Ae,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,Xe,We.width,We.height,0,Oe,Ae,We.data)}}}else{if(ye=M.mipmaps,q&&Se){ye.length>0&&De++;let ge=Fe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Xe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(xe){q?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,Oe,Ae,we[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Xe,we[ge].width,we[ge].height,0,Oe,Ae,we[ge].data);for(let Ne=0;Ne<ye.length;Ne++){let nt=ye[Ne].image[ge].image;q?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,nt.width,nt.height,Oe,Ae,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Xe,nt.width,nt.height,0,Oe,Ae,nt.data)}}else{q?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe,Ae,we[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Xe,Oe,Ae,we[ge]);for(let Ne=0;Ne<ye.length;Ne++){let We=ye[Ne];q?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,Oe,Ae,We.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,Xe,Oe,Ae,We.image[ge])}}}p(M)&&h(i.TEXTURE_CUBE_MAP),he.__version=_e.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function G(I,M,j,ce,_e,he){let Ie=r.convert(j.format,j.colorSpace),Me=r.convert(j.type),Pe=S(j.internalFormat,Ie,Me,j.colorSpace),Le=n.get(M),xe=n.get(j);if(xe.__renderTarget=M,!Le.__hasExternalTextures){let we=Math.max(1,M.width>>he),He=Math.max(1,M.height>>he);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Pe,we,He,M.depth,0,Ie,Me,null):t.texImage2D(_e,he,Pe,we,He,0,Ie,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,_e,xe.__webglTexture,0,O(M)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,_e,xe.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(I,M,j){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){let ce=M.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,he=v(M.stencilBuffer,_e),Ie=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=O(M);A(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,he,M.width,M.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,he,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,he,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,I)}else{let ce=M.textures;for(let _e=0;_e<ce.length;_e++){let he=ce[_e],Ie=r.convert(he.format,he.colorSpace),Me=r.convert(he.type),Pe=S(he.internalFormat,Ie,Me,he.colorSpace),Le=O(M);j&&A(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Pe,M.width,M.height):A(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function H(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(M.depthTexture);ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se(M.depthTexture,0);let _e=ce.__webglTexture,he=O(M);if(M.depthTexture.format===Ri)A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(M.depthTexture.format===Vi)A(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function ue(I){let M=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let ce=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){let _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=ce}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");let ce=I.texture.mipmaps;ce&&ce.length>0?H(M.__webglFramebuffer[0],I):H(M.__webglFramebuffer,I)}else if(j){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=i.createRenderbuffer(),ne(M.__webglDepthbuffer[ce],I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,he)}}else{let ce=I.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ne(M.__webglDepthbuffer,I,!1);else{let _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(I,M,j){let ce=n.get(I);M!==void 0&&G(ce.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ue(I)}function C(I){let M=I.texture,j=n.get(I),ce=n.get(M);I.addEventListener("dispose",P);let _e=I.textures,he=I.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=M.version,a.memory.textures++),he){j.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)j.__webglFramebuffer[Me][Pe]=i.createFramebuffer()}else j.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let Me=0;Me<M.mipmaps.length;Me++)j.__webglFramebuffer[Me]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Me=0,Pe=_e.length;Me<Pe;Me++){let Le=n.get(_e[Me]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&A(I)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let Pe=_e[Me];j.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Me]);let Le=r.convert(Pe.format,Pe.colorSpace),xe=r.convert(Pe.type),we=S(Pe.internalFormat,Le,xe,Pe.colorSpace,I.isXRRenderTarget===!0),He=O(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,we,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,j.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),de(i.TEXTURE_CUBE_MAP,M);for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)G(j.__webglFramebuffer[Me][Pe],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else G(j.__webglFramebuffer[Me],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(M)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Pe=_e.length;Me<Pe;Me++){let Le=_e[Me],xe=n.get(Le),we=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,xe.__webglTexture),de(we,Le),G(j.__webglFramebuffer,I,Le,i.COLOR_ATTACHMENT0+Me,we,0),p(Le)&&h(we)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ce.__webglTexture),de(Me,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)G(j.__webglFramebuffer[Pe],I,M,i.COLOR_ATTACHMENT0,Me,Pe);else G(j.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,Me,0);p(M)&&h(Me),t.unbindTexture()}I.depthBuffer&&ue(I)}function B(I){let M=I.textures;for(let j=0,ce=M.length;j<ce;j++){let _e=M[j];if(p(_e)){let he=w(I),Ie=n.get(_e).__webglTexture;t.bindTexture(he,Ie),h(he),t.unbindTexture()}}}let V=[],X=[];function J(I){if(I.samples>0){if(A(I)===!1){let M=I.textures,j=I.width,ce=I.height,_e=i.COLOR_BUFFER_BIT,he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(I),Me=M.length>1;if(Me)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Pe=I.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let xe=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,j,ce,0,0,j,ce,_e,i.NEAREST),c===!0&&(V.length=0,X.length=0,V.push(i.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.resolveDepthBuffer===!1&&(V.push(he),X.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let xe=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function O(I){return Math.min(s.maxSamples,I.samples)}function A(I){let M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(I){let M=a.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function Ee(I,M){let j=I.colorSpace,ce=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Qn&&j!==An&&($e.getTransfer(j)===Qe?(ce!==qt||_e!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Fe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.setTexture2D=se,this.setTexture2DArray=ie,this.setTexture3D=re,this.setTextureCube=k,this.rebindTextures=me,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=G,this.useMultisampledRTT=A}function tg(i,e){function t(n,s=An){let r,a=$e.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===No)return i.BYTE;if(n===Fo)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===Kr)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===zo)return i.ALPHA;if(n===ko)return i.RGB;if(n===qt)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===Ho)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===Ls||n===Ds||n===Us||n===Ns)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Ta||n===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ms(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new en({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null,_=typeof XRWebGLBinding<"u",p=new hl,h={},w=t.getContextAttributes(),S=null,v=null,L=[],R=[],P=new pe,U=null,E=new Ct;E.viewport=new ut;let b=new Ct;b.viewport=new ut;let F=[E,b],z=new Br,$=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let x=L[y];return x===void 0&&(x=new Di,L[y]=x),x.getTargetRaySpace()},this.getControllerGrip=function(y){let x=L[y];return x===void 0&&(x=new Di,L[y]=x),x.getGripSpace()},this.getHand=function(y){let x=L[y];return x===void 0&&(x=new Di,L[y]=x),x.getHandSpace()};function se(y){let x=R.indexOf(y.inputSource);if(x===-1)return;let G=L[x];G!==void 0&&(G.update(y.inputSource,y.frame,l||a),G.dispatchEvent({type:y.type,data:y.inputSource}))}function ie(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",re);for(let y=0;y<L.length;y++){let x=R[y];x!==null&&(R[y]=null,L[y].disconnect(x))}$=null,ee=null,p.reset();for(let y in h)delete h[y];e.setRenderTarget(S),m=null,f=null,d=null,s=null,v=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){r=y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){o=y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(y){l=y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(y){if(s=y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",re),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ne=null,H=null;w.depth&&(H=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=w.stencil?Vi:Ri,ne=w.stencil?ki:Gn);let ue={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new on(f.textureWidth,f.textureHeight,{format:qt,type:sn,depthTexture:new ps(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let G={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new on(m.framebufferWidth,m.framebufferHeight,{format:qt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),N.setContext(s),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(y){for(let x=0;x<y.removed.length;x++){let G=y.removed[x],ne=R.indexOf(G);ne>=0&&(R[ne]=null,L[ne].disconnect(G))}for(let x=0;x<y.added.length;x++){let G=y.added[x],ne=R.indexOf(G);if(ne===-1){for(let ue=0;ue<L.length;ue++)if(ue>=R.length){R.push(G),ne=ue;break}else if(R[ue]===null){R[ue]=G,ne=ue;break}if(ne===-1)break}let H=L[ne];H&&H.connect(G)}}let k=new Z,Y=new Z;function W(y,x,G){k.setFromMatrixPosition(x.matrixWorld),Y.setFromMatrixPosition(G.matrixWorld);let ne=k.distanceTo(Y),H=x.projectionMatrix.elements,ue=G.projectionMatrix.elements,me=H[14]/(H[10]-1),C=H[14]/(H[10]+1),B=(H[9]+1)/H[5],V=(H[9]-1)/H[5],X=(H[8]-1)/H[0],J=(ue[8]+1)/ue[0],O=me*X,A=me*J,ae=ne/(-X+J),Ee=ae*-X;if(x.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(Ee),y.translateZ(ae),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),H[10]===-1)y.projectionMatrix.copy(x.projectionMatrix),y.projectionMatrixInverse.copy(x.projectionMatrixInverse);else{let Fe=me+ae,I=C+ae,M=O-Ee,j=A+(ne-Ee),ce=B*C/I*Fe,_e=V*C/I*Fe;y.projectionMatrix.makePerspective(M,j,ce,_e,Fe,I),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function te(y,x){x===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(x.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(s===null)return;let x=y.near,G=y.far;p.texture!==null&&(p.depthNear>0&&(x=p.depthNear),p.depthFar>0&&(G=p.depthFar)),z.near=b.near=E.near=x,z.far=b.far=E.far=G,($!==z.near||ee!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),$=z.near,ee=z.far),z.layers.mask=y.layers.mask|6,E.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let ne=y.parent,H=z.cameras;te(z,ne);for(let ue=0;ue<H.length;ue++)te(H[ue],ne);H.length===2?W(z,E,b):z.projectionMatrix.copy(E.projectionMatrix),de(y,z,ne)};function de(y,x,G){G===null?y.matrix.copy(x.matrixWorld):(y.matrix.copy(G.matrixWorld),y.matrix.invert(),y.matrix.multiply(x.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(x.projectionMatrix),y.projectionMatrixInverse.copy(x.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=gr*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(y){c=y,f!==null&&(f.fixedFoveation=y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(y){return h[y]};let fe=null;function D(y,x){if(u=x.getViewerPose(l||a),g=x,u!==null){let G=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ne=!1;G.length!==z.cameras.length&&(z.cameras.length=0,ne=!0);for(let C=0;C<G.length;C++){let B=G[C],V=null;if(m!==null)V=m.getViewport(B);else{let J=d.getViewSubImage(f,B);V=J.viewport,C===0&&(e.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(v))}let X=F[C];X===void 0&&(X=new Ct,X.layers.enable(C),X.viewport=new ut,F[C]=X),X.matrix.fromArray(B.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(B.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(V.x,V.y,V.width,V.height),C===0&&(z.matrix.copy(X.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ne===!0&&z.cameras.push(X)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let C=d.getDepthInformation(G[0]);C&&C.isValid&&C.texture&&p.init(C,s.renderState)}if(H&&H.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let C=0;C<G.length;C++){let B=G[C].camera;if(B){let V=h[B];V||(V=new ms,h[B]=V);let X=d.getCameraImage(B);V.sourceTexture=X}}}}for(let G=0;G<L.length;G++){let ne=R[G],H=L[G];ne!==null&&H!==void 0&&H.update(ne,x,l||a)}fe&&fe(y,x),x.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:x}),g=null}let N=new hh;N.setAnimationLoop(D),this.setAnimationLoop=function(y){fe=y},this.dispose=function(){}}},hi=new Qt,sg=new ht;function rg(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Yo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,w,S,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,w,S):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===wt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===wt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let w=e.get(h),S=w.envMap,v=w.envMapRotation;S&&(p.envMap.value=S,hi.copy(v),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(hi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,w,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){let w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let v=S.program;n.uniformBlockBinding(w,v)}function l(w,S){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",p));let L=S.program;n.updateUBOMapping(w,L);let R=e.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){let S=d();w.__bindingPointIndex=S;let v=i.createBuffer(),L=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let S=s[w.id],v=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,P=v.length;R<P;R++){let U=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,b=U.length;E<b;E++){let F=U[E];if(m(F,R,E,L)===!0){let z=F.__offset,$=Array.isArray(F.value)?F.value:[F.value],ee=0;for(let se=0;se<$.length;se++){let ie=$[se],re=_(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,z+ee,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):(ie.toArray(F.__data,ee),ee+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,v,L){let R=w.value,P=S+"_"+v;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{let U=L[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[P]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(w){let S=w.uniforms,v=0,L=16;for(let P=0,U=S.length;P<U;P++){let E=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,F=E.length;b<F;b++){let z=E[b],$=Array.isArray(z.value)?z.value:[z.value];for(let ee=0,se=$.length;ee<se;ee++){let ie=$[ee],re=_(ie),k=v%L,Y=k%re.boundary,W=k+Y;v+=Y,W!==0&&L-W<re.storage&&(v+=L-W),z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=re.storage}}}let R=v%L;return R>0&&(v+=L-R),w.__size=v,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var Na=class{constructor(e={}){let{canvas:t=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),p=null,h=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,L=!1;this._outputColorSpace=pt;let R=0,P=0,U=null,E=-1,b=null,F=new ut,z=new ut,$=null,ee=new Je(0),se=0,ie=t.width,re=t.height,k=1,Y=null,W=null,te=new ut(0,0,ie,re),de=new ut(0,0,ie,re),fe=!1,D=new Ui,N=!1,y=!1,x=new ht,G=new Z,ne=new ut,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function me(){return U===null?k:1}let C=n;function B(T,K){return t.getContext(T,K)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ye,!1),C===null){let K="webgl2";if(C=B(K,T),C===null)throw B(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let V,X,J,O,A,ae,Ee,Fe,I,M,j,ce,_e,he,Ie,Me,Pe,Le,xe,we,He,Oe,Ae,Xe;function q(){V=new Ep(C),V.init(),Oe=new tg(C,V),X=new _p(C,V,e,Oe),J=new Qm(C,V),X.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),O=new Ap(C),A=new km,ae=new eg(C,V,J,A,X,Oe,O),Ee=new yp(v),Fe=new bp(v),I=new Lu(C),Ae=new mp(C,I),M=new Tp(C,I,O,Ae),j=new Cp(C,M,I,O),xe=new Rp(C,X,ae),Me=new xp(A),ce=new zm(v,Ee,Fe,V,X,Ae,Me),_e=new rg(v,A),he=new Hm,Ie=new Zm(V),Le=new pp(v,Ee,Fe,J,j,m,c),Pe=new Km(v,j,X),Xe=new ag(C,O,X,J),we=new gp(C,V,O),He=new wp(C,V,O),O.programs=ce.programs,v.capabilities=X,v.extensions=V,v.properties=A,v.renderLists=he,v.shadowMap=Pe,v.state=J,v.info=O}q();let Se=new ul(v,C);this.xr=Se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=V.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=V.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(ie,re,!1))},this.getSize=function(T){return T.set(ie,re)},this.setSize=function(T,K,oe=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=T,re=K,t.width=Math.floor(T*k),t.height=Math.floor(K*k),oe===!0&&(t.style.width=T+"px",t.style.height=K+"px"),this.setViewport(0,0,T,K)},this.getDrawingBufferSize=function(T){return T.set(ie*k,re*k).floor()},this.setDrawingBufferSize=function(T,K,oe){ie=T,re=K,k=oe,t.width=Math.floor(T*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,T,K)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,K,oe,le){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,K,oe,le),J.viewport(F.copy(te).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,K,oe,le){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,K,oe,le),J.scissor(z.copy(de).multiplyScalar(k).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){J.setScissorTest(fe=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(T=!0,K=!0,oe=!0){let le=0;if(T){let Q=!1;if(U!==null){let ve=U.texture.format;Q=ve===na||ve===ta||ve===ea}if(Q){let ve=U.texture.type,Re=ve===sn||ve===Gn||ve===Bi||ve===ki||ve===jr||ve===Qr,Ue=Le.getClearColor(),Ce=Le.getClearAlpha(),ke=Ue.r,Ge=Ue.g,Be=Ue.b;Re?(g[0]=ke,g[1]=Ge,g[2]=Be,g[3]=Ce,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ke,_[1]=Ge,_[2]=Be,_[3]=Ce,C.clearBufferiv(C.COLOR,0,_))}else le|=C.COLOR_BUFFER_BIT}K&&(le|=C.DEPTH_BUFFER_BIT),oe&&(le|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Le.dispose(),he.dispose(),Ie.dispose(),A.dispose(),Ee.dispose(),Fe.dispose(),j.dispose(),Ae.dispose(),Xe.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",rn),Se.removeEventListener("sessionend",ml),Wn.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=O.autoReset,K=Pe.enabled,oe=Pe.autoUpdate,le=Pe.needsUpdate,Q=Pe.type;q(),O.autoReset=T,Pe.enabled=K,Pe.autoUpdate=oe,Pe.needsUpdate=le,Pe.type=Q}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){let K=T.target;K.removeEventListener("dispose",ge),Ne(K)}function Ne(T){We(T),A.remove(T)}function We(T){let K=A.get(T).programs;K!==void 0&&(K.forEach(function(oe){ce.releaseProgram(oe)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,K,oe,le,Q,ve){K===null&&(K=H);let Re=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=vh(T,K,oe,le,Q);J.setMaterial(le,Re);let Ce=oe.index,ke=1;if(le.wireframe===!0){if(Ce=M.getWireframeAttribute(oe),Ce===void 0)return;ke=2}let Ge=oe.drawRange,Be=oe.attributes.position,Ze=Ge.start*ke,et=(Ge.start+Ge.count)*ke;ve!==null&&(Ze=Math.max(Ze,ve.start*ke),et=Math.min(et,(ve.start+ve.count)*ke)),Ce!==null?(Ze=Math.max(Ze,0),et=Math.min(et,Ce.count)):Be!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,Be.count));let dt=et-Ze;if(dt<0||dt===1/0)return;Ae.setup(Q,le,Ue,oe,Ce);let st,tt=we;if(Ce!==null&&(st=I.get(Ce),tt=He,tt.setIndex(st)),Q.isMesh)le.wireframe===!0?(J.setLineWidth(le.wireframeLinewidth*me()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(Q.isLine){let ze=le.linewidth;ze===void 0&&(ze=1),J.setLineWidth(ze*me()),Q.isLineSegments?tt.setMode(C.LINES):Q.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else Q.isPoints?tt.setMode(C.POINTS):Q.isSprite&&tt.setMode(C.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let ze=Q._multiDrawStarts,ot=Q._multiDrawCounts,Ke=Q._multiDrawCount,Dt=Ce?I.get(Ce).bytesPerElement:1,fi=A.get(le).currentProgram.getUniforms();for(let Ut=0;Ut<Ke;Ut++)fi.setValue(C,"_gl_DrawID",Ut),tt.render(ze[Ut]/Dt,ot[Ut])}else if(Q.isInstancedMesh)tt.renderInstances(Ze,dt,Q.count);else if(oe.isInstancedBufferGeometry){let ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ot=Math.min(oe.instanceCount,ze);tt.renderInstances(Ze,dt,ot)}else tt.render(Ze,dt)};function nt(T,K,oe){T.transparent===!0&&T.side===Xt&&T.forceSinglePass===!1?(T.side=wt,T.needsUpdate=!0,Gs(T,K,oe),T.side=Sn,T.needsUpdate=!0,Gs(T,K,oe),T.side=Xt):Gs(T,K,oe)}this.compile=function(T,K,oe=null){oe===null&&(oe=T),h=Ie.get(oe),h.init(K),S.push(h),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(h.pushLight(Q),Q.castShadow&&h.pushShadow(Q))}),T!==oe&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(h.pushLight(Q),Q.castShadow&&h.pushShadow(Q))}),h.setupLights();let le=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let ve=Q.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let Ue=ve[Re];nt(Ue,oe,Q),le.add(Ue)}else nt(ve,oe,Q),le.add(ve)}),h=S.pop(),le},this.compileAsync=function(T,K,oe=null){let le=this.compile(T,K,oe);return new Promise(Q=>{function ve(){if(le.forEach(function(Re){A.get(Re).currentProgram.isReady()&&le.delete(Re)}),le.size===0){Q(T);return}setTimeout(ve,10)}V.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let je=null;function pn(T){je&&je(T)}function rn(){Wn.stop()}function ml(){Wn.start()}let Wn=new hh;Wn.setAnimationLoop(pn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(T){je=T,Se.setAnimationLoop(T),T===null?Wn.stop():Wn.start()},Se.addEventListener("sessionstart",rn),Se.addEventListener("sessionend",ml),this.render=function(T,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(K),K=Se.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,K,U),h=Ie.get(T,S.length),h.init(K),S.push(h),x.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D.setFromProjectionMatrix(x,Kt,K.reversedDepth),y=this.localClippingEnabled,N=Me.init(this.clippingPlanes,y),p=he.get(T,w.length),p.init(),w.push(p),Se.enabled===!0&&Se.isPresenting===!0){let ve=v.xr.getDepthSensingMesh();ve!==null&&Oa(ve,K,-1/0,v.sortObjects)}Oa(T,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Y,W),ue=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ue&&Le.addToRenderList(p,T),this.info.render.frame++,N===!0&&Me.beginShadows();let oe=h.state.shadowsArray;Pe.render(oe,T,K),N===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let le=p.opaque,Q=p.transmissive;if(h.setupLights(),K.isArrayCamera){let ve=K.cameras;if(Q.length>0)for(let Re=0,Ue=ve.length;Re<Ue;Re++){let Ce=ve[Re];_l(le,Q,T,Ce)}ue&&Le.render(T);for(let Re=0,Ue=ve.length;Re<Ue;Re++){let Ce=ve[Re];gl(p,T,Ce,Ce.viewport)}}else Q.length>0&&_l(le,Q,T,K),ue&&Le.render(T),gl(p,T,K);U!==null&&P===0&&(ae.updateMultisampleRenderTarget(U),ae.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(v,T,K),Ae.resetDefaultState(),E=-1,b=null,S.pop(),S.length>0?(h=S[S.length-1],N===!0&&Me.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Oa(T,K,oe,le){if(T.visible===!1)return;if(T.layers.test(K.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(K);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){le&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(x);let Re=j.update(T),Ue=T.material;Ue.visible&&p.push(T,Re,Ue,oe,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){let Re=j.update(T),Ue=T.material;if(le&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ne.copy(Re.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(x)),Array.isArray(Ue)){let Ce=Re.groups;for(let ke=0,Ge=Ce.length;ke<Ge;ke++){let Be=Ce[ke],Ze=Ue[Be.materialIndex];Ze&&Ze.visible&&p.push(T,Re,Ze,oe,ne.z,Be)}}else Ue.visible&&p.push(T,Re,Ue,oe,ne.z,null)}}let ve=T.children;for(let Re=0,Ue=ve.length;Re<Ue;Re++)Oa(ve[Re],K,oe,le)}function gl(T,K,oe,le){let Q=T.opaque,ve=T.transmissive,Re=T.transparent;h.setupLightsView(oe),N===!0&&Me.setGlobalState(v.clippingPlanes,oe),le&&J.viewport(F.copy(le)),Q.length>0&&Hs(Q,K,oe),ve.length>0&&Hs(ve,K,oe),Re.length>0&&Hs(Re,K,oe),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function _l(T,K,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[le.id]===void 0&&(h.state.transmissionRenderTarget[le.id]=new on(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?zi:sn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ve=h.state.transmissionRenderTarget[le.id],Re=le.viewport||F;ve.setSize(Re.z*v.transmissionResolutionScale,Re.w*v.transmissionResolutionScale);let Ue=v.getRenderTarget(),Ce=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(ve),v.getClearColor(ee),se=v.getClearAlpha(),se<1&&v.setClearColor(16777215,.5),v.clear(),ue&&Le.render(oe);let Ge=v.toneMapping;v.toneMapping=wn;let Be=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),h.setupLightsView(le),N===!0&&Me.setGlobalState(v.clippingPlanes,le),Hs(T,oe,le),ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve),V.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let et=0,dt=K.length;et<dt;et++){let st=K[et],tt=st.object,ze=st.geometry,ot=st.material,Ke=st.group;if(ot.side===Xt&&tt.layers.test(le.layers)){let Dt=ot.side;ot.side=wt,ot.needsUpdate=!0,xl(tt,oe,le,ze,ot,Ke),ot.side=Dt,ot.needsUpdate=!0,Ze=!0}}Ze===!0&&(ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve))}v.setRenderTarget(Ue,Ce,ke),v.setClearColor(ee,se),Be!==void 0&&(le.viewport=Be),v.toneMapping=Ge}function Hs(T,K,oe){let le=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,ve=T.length;Q<ve;Q++){let Re=T[Q],Ue=Re.object,Ce=Re.geometry,ke=Re.group,Ge=Re.material;Ge.allowOverride===!0&&le!==null&&(Ge=le),Ue.layers.test(oe.layers)&&xl(Ue,K,oe,Ce,Ge,ke)}}function xl(T,K,oe,le,Q,ve){T.onBeforeRender(v,K,oe,le,Q,ve),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(v,K,oe,le,T,ve),Q.transparent===!0&&Q.side===Xt&&Q.forceSinglePass===!1?(Q.side=wt,Q.needsUpdate=!0,v.renderBufferDirect(oe,K,le,Q,T,ve),Q.side=Sn,Q.needsUpdate=!0,v.renderBufferDirect(oe,K,le,Q,T,ve),Q.side=Xt):v.renderBufferDirect(oe,K,le,Q,T,ve),T.onAfterRender(v,K,oe,le,Q,ve)}function Gs(T,K,oe){K.isScene!==!0&&(K=H);let le=A.get(T),Q=h.state.lights,ve=h.state.shadowsArray,Re=Q.state.version,Ue=ce.getParameters(T,Q.state,ve,K,oe),Ce=ce.getProgramCacheKey(Ue),ke=le.programs;le.environment=T.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(T.isMeshStandardMaterial?Fe:Ee).get(T.envMap||le.environment),le.envMapRotation=le.environment!==null&&T.envMap===null?K.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",ge),ke=new Map,le.programs=ke);let Ge=ke.get(Ce);if(Ge!==void 0){if(le.currentProgram===Ge&&le.lightsStateVersion===Re)return vl(T,Ue),Ge}else Ue.uniforms=ce.getUniforms(T),T.onBeforeCompile(Ue,v),Ge=ce.acquireProgram(Ue,Ce),ke.set(Ce,Ge),le.uniforms=Ue.uniforms;let Be=le.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Me.uniform),vl(T,Ue),le.needsLights=Sh(T),le.lightsStateVersion=Re,le.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMap.value=Q.state.directionalShadowMap,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotShadowMap.value=Q.state.spotShadowMap,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMap.value=Q.state.pointShadowMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix),le.currentProgram=Ge,le.uniformsList=null,Ge}function yl(T){if(T.uniformsList===null){let K=T.currentProgram.getUniforms();T.uniformsList=Xi.seqWithValue(K.seq,T.uniforms)}return T.uniformsList}function vl(T,K){let oe=A.get(T);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function vh(T,K,oe,le,Q){K.isScene!==!0&&(K=H),ae.resetTextureUnits();let ve=K.fog,Re=le.isMeshStandardMaterial?K.environment:null,Ue=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Qn,Ce=(le.isMeshStandardMaterial?Fe:Ee).get(le.envMap||Re),ke=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ge=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Be=!!oe.morphAttributes.position,Ze=!!oe.morphAttributes.normal,et=!!oe.morphAttributes.color,dt=wn;le.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=v.toneMapping);let st=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,tt=st!==void 0?st.length:0,ze=A.get(le),ot=h.state.lights;if(N===!0&&(y===!0||T!==b)){let Tt=T===b&&le.id===E;Me.setState(le,T,Tt)}let Ke=!1;le.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ot.state.version||ze.outputColorSpace!==Ue||Q.isBatchedMesh&&ze.batching===!1||!Q.isBatchedMesh&&ze.batching===!0||Q.isBatchedMesh&&ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||Q.isInstancedMesh&&ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ze.instancingMorph===!1&&Q.morphTexture!==null||ze.envMap!==Ce||le.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Me.numPlanes||ze.numIntersection!==Me.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==Ze||ze.morphColors!==et||ze.toneMapping!==dt||ze.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,ze.__version=le.version);let Dt=ze.currentProgram;Ke===!0&&(Dt=Gs(le,K,Q));let fi=!1,Ut=!1,Zi=!1,lt=Dt.getUniforms(),kt=ze.uniforms;if(J.useProgram(Dt.program)&&(fi=!0,Ut=!0,Zi=!0),le.id!==E&&(E=le.id,Ut=!0),fi||b!==T){J.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(C,"projectionMatrix",T.projectionMatrix),lt.setValue(C,"viewMatrix",T.matrixWorldInverse);let At=lt.map.cameraPosition;At!==void 0&&At.setValue(C,G.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&lt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ut=!0,Zi=!0)}if(Q.isSkinnedMesh){lt.setOptional(C,Q,"bindMatrix"),lt.setOptional(C,Q,"bindMatrixInverse");let Tt=Q.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(C,"boneTexture",Tt.boneTexture,ae))}Q.isBatchedMesh&&(lt.setOptional(C,Q,"batchingTexture"),lt.setValue(C,"batchingTexture",Q._matricesTexture,ae),lt.setOptional(C,Q,"batchingIdTexture"),lt.setValue(C,"batchingIdTexture",Q._indirectTexture,ae),lt.setOptional(C,Q,"batchingColorTexture"),Q._colorsTexture!==null&&lt.setValue(C,"batchingColorTexture",Q._colorsTexture,ae));let Vt=oe.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&xe.update(Q,oe,Dt),(Ut||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,lt.setValue(C,"receiveShadow",Q.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(kt.envMap.value=Ce,kt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(kt.envMapIntensity.value=K.environmentIntensity),Ut&&(lt.setValue(C,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Mh(kt,Zi),ve&&le.fog===!0&&_e.refreshFogUniforms(kt,ve),_e.refreshMaterialUniforms(kt,le,k,re,h.state.transmissionRenderTarget[T.id]),Xi.upload(C,yl(ze),kt,ae)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xi.upload(C,yl(ze),kt,ae),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&lt.setValue(C,"center",Q.center),lt.setValue(C,"modelViewMatrix",Q.modelViewMatrix),lt.setValue(C,"normalMatrix",Q.normalMatrix),lt.setValue(C,"modelMatrix",Q.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){let Tt=le.uniformsGroups;for(let At=0,Ba=Tt.length;At<Ba;At++){let Xn=Tt[At];Xe.update(Xn,Dt),Xe.bind(Xn,Dt)}}return Dt}function Mh(T,K){T.ambientLightColor.needsUpdate=K,T.lightProbe.needsUpdate=K,T.directionalLights.needsUpdate=K,T.directionalLightShadows.needsUpdate=K,T.pointLights.needsUpdate=K,T.pointLightShadows.needsUpdate=K,T.spotLights.needsUpdate=K,T.spotLightShadows.needsUpdate=K,T.rectAreaLights.needsUpdate=K,T.hemisphereLights.needsUpdate=K}function Sh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,K,oe){let le=A.get(T);le.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=K,A.get(T.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,K){let oe=A.get(T);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0};let bh=C.createFramebuffer();this.setRenderTarget=function(T,K=0,oe=0){U=T,R=K,P=oe;let le=!0,Q=null,ve=!1,Re=!1;if(T){let Ce=A.get(T);if(Ce.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(C.FRAMEBUFFER,null),le=!1;else if(Ce.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Ce.__hasExternalTextures)ae.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Be=T.depthTexture;if(Ce.__boundDepthTexture!==Be){if(Be!==null&&A.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}let ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let Ge=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?Q=Ge[K][oe]:Q=Ge[K],ve=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?Q=A.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?Q=Ge[oe]:Q=Ge,F.copy(T.viewport),z.copy(T.scissor),$=T.scissorTest}else F.copy(te).multiplyScalar(k).floor(),z.copy(de).multiplyScalar(k).floor(),$=fe;if(oe!==0&&(Q=bh),J.bindFramebuffer(C.FRAMEBUFFER,Q)&&le&&J.drawBuffers(T,Q),J.viewport(F),J.scissor(z),J.setScissorTest($),ve){let Ce=A.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce.__webglTexture,oe)}else if(Re){let Ce=K;for(let ke=0;ke<T.textures.length;ke++){let Ge=A.get(T.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,oe,Ce)}}else if(T!==null&&oe!==0){let Ce=A.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,oe)}E=-1},this.readRenderTargetPixels=function(T,K,oe,le,Q,ve,Re,Ue=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){J.bindFramebuffer(C.FRAMEBUFFER,Ce);try{let ke=T.textures[Ue],Ge=ke.format,Be=ke.type;if(!X.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=T.width-le&&oe>=0&&oe<=T.height-Q&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(K,oe,le,Q,Oe.convert(Ge),Oe.convert(Be),ve))}finally{let ke=U!==null?A.get(U).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,K,oe,le,Q,ve,Re,Ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(K>=0&&K<=T.width-le&&oe>=0&&oe<=T.height-Q){J.bindFramebuffer(C.FRAMEBUFFER,Ce);let ke=T.textures[Ue],Ge=ke.format,Be=ke.type;if(!X.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,ve.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(K,oe,le,Q,Oe.convert(Ge),Oe.convert(Be),0);let et=U!==null?A.get(U).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,et);let dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Dc(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ve),C.deleteBuffer(Ze),C.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,K=null,oe=0){let le=Math.pow(2,-oe),Q=Math.floor(T.image.width*le),ve=Math.floor(T.image.height*le),Re=K!==null?K.x:0,Ue=K!==null?K.y:0;ae.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,oe,0,0,Re,Ue,Q,ve),J.unbindTexture()};let Eh=C.createFramebuffer(),Th=C.createFramebuffer();this.copyTextureToTexture=function(T,K,oe=null,le=null,Q=0,ve=null){ve===null&&(Q!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=Q,Q=0):ve=0);let Re,Ue,Ce,ke,Ge,Be,Ze,et,dt,st=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(oe!==null)Re=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Ce=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Ge=oe.min.y,Be=oe.isBox3?oe.min.z:0;else{let Vt=Math.pow(2,-Q);Re=Math.floor(st.width*Vt),Ue=Math.floor(st.height*Vt),T.isDataArrayTexture?Ce=st.depth:T.isData3DTexture?Ce=Math.floor(st.depth*Vt):Ce=1,ke=0,Ge=0,Be=0}le!==null?(Ze=le.x,et=le.y,dt=le.z):(Ze=0,et=0,dt=0);let tt=Oe.convert(K.format),ze=Oe.convert(K.type),ot;K.isData3DTexture?(ae.setTexture3D(K,0),ot=C.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ae.setTexture2DArray(K,0),ot=C.TEXTURE_2D_ARRAY):(ae.setTexture2D(K,0),ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,K.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,K.unpackAlignment);let Ke=C.getParameter(C.UNPACK_ROW_LENGTH),Dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),fi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ut=C.getParameter(C.UNPACK_SKIP_ROWS),Zi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);let lt=T.isDataArrayTexture||T.isData3DTexture,kt=K.isDataArrayTexture||K.isData3DTexture;if(T.isDepthTexture){let Vt=A.get(T),Tt=A.get(K),At=A.get(Vt.__renderTarget),Ba=A.get(Tt.__renderTarget);J.bindFramebuffer(C.READ_FRAMEBUFFER,At.__webglFramebuffer),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let Xn=0;Xn<Ce;Xn++)lt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(T).__webglTexture,Q,Be+Xn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(K).__webglTexture,ve,dt+Xn)),C.blitFramebuffer(ke,Ge,Re,Ue,Ze,et,Re,Ue,C.DEPTH_BUFFER_BIT,C.NEAREST);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||A.has(T)){let Vt=A.get(T),Tt=A.get(K);J.bindFramebuffer(C.READ_FRAMEBUFFER,Eh),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,Th);for(let At=0;At<Ce;At++)lt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vt.__webglTexture,Q,Be+At):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vt.__webglTexture,Q),kt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,ve,dt+At):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Tt.__webglTexture,ve),Q!==0?C.blitFramebuffer(ke,Ge,Re,Ue,Ze,et,Re,Ue,C.COLOR_BUFFER_BIT,C.NEAREST):kt?C.copyTexSubImage3D(ot,ve,Ze,et,dt+At,ke,Ge,Re,Ue):C.copyTexSubImage2D(ot,ve,Ze,et,ke,Ge,Re,Ue);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else kt?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(ot,ve,Ze,et,dt,Re,Ue,Ce,tt,ze,st.data):K.isCompressedArrayTexture?C.compressedTexSubImage3D(ot,ve,Ze,et,dt,Re,Ue,Ce,tt,st.data):C.texSubImage3D(ot,ve,Ze,et,dt,Re,Ue,Ce,tt,ze,st):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ve,Ze,et,Re,Ue,tt,ze,st.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ve,Ze,et,st.width,st.height,tt,st.data):C.texSubImage2D(C.TEXTURE_2D,ve,Ze,et,Re,Ue,tt,ze,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,fi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zi),ve===0&&K.generateMipmaps&&C.generateMipmap(ot),J.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),J.unbindTexture()},this.resetState=function(){R=0,P=0,U=null,J.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var mh={front:{name:"Vorne \xB7 mittel",radius:13,x:0,z:22,fx:0,fz:-13},diagonal:{name:"Rechts vorne",radius:13,x:19,z:19,fx:-8,fz:-12},compact:{name:"Rechts vorne \xB7 klein",radius:10.5,x:19,z:19,fx:-8,fz:-12},left:{name:"Links vorne",radius:13,x:-19,z:19,fx:8,fz:-12},side:{name:"Seitlich",radius:13,x:22,z:0,fx:-15,fz:0},large:{name:"Vorne \xB7 gro\xDF",radius:16,x:0,z:21,fx:0,fz:-15}};function gh({number:i=1,state:e="closed",layout:t=new URLSearchParams(location.search).get("marke")||"front"}={}){let n=mh[t]||mh.front,s=n.radius,r=n.x,a=n.z,o=new yt,c=new yt;o.add(c),c.position.set(n.fx,0,n.fz);let l=new Wt(1,20,14),u=[],d=(W,te=.48)=>{let de=new Lt({color:W,roughness:te});return u.push(de),de},f=d("#ffd05a"),m=d("#ffeaa2"),g=d("#538b2c"),_=d("#e5a32a");function p(W,te,de,fe,D,N,y,x){let G=new it(l,te);return G.position.set(de,fe,D),G.scale.set(N,y,x),G.castShadow=!0,G.receiveShadow=!0,W.add(G),G}p(c,g,0,5,0,2.2,7,2.2);for(let W of[-1,1]){let te=p(c,g,W*7,4,1,9,1.7,4);te.rotation.z=W*.27,te.rotation.y=W*.3}let h=[];for(let W=0;W<6;W++){let te=new yt;te.rotation.y=W*Math.PI/3,c.add(te);let de=p(te,W%2?f:m,0,12,0,5,9,4);h.push(de)}let w=p(c,_,0,12,0,5,3.5,5),S=d("#c5a777"),v=new zn(s+1.6,s+1.6,2.6,40),L=new it(v,S);L.position.set(r,3,a),L.castShadow=!0,o.add(L);let R=new zn(s,s,2.2,40),P=new it(R,d("#fff4da"));P.position.set(r,3.6,a),P.castShadow=!0,o.add(P);let U=document.createElement("canvas");U.width=U.height=128;let E=U.getContext("2d");E.fillStyle="#4b2a15",E.font="bold 100px Trebuchet MS",E.textAlign="center",E.textBaseline="middle",E.fillText(String(i),64,69);let b=new cn(U);b.colorSpace=pt,b.userData.transient=!0;let F=new ei({map:b,transparent:!0,depthWrite:!1}),z=new ni(s*1.72,s*1.72),$=new it(z,F);$.rotation.x=-Math.PI/2,$.position.set(r,4.74,a),o.add($);let ee=0,se=0,ie="";function re(W){if(!["closed","next","bloom"].includes(W))throw Error("Unknown goal state");ie=W,se=W==="bloom"?1:W==="next"?.16:0,o.userData.state=W,S.color.set(W==="next"?"#f9bf39":"#c5a777"),S.emissive.set(W==="next"?"#d89514":"#000000"),S.emissiveIntensity=W==="next"?.15:0}function k(W,te=.016){ee+=(se-ee)*Math.min(1,te*7);let de=ee;for(let D of h)D.position.set(0,13-de*3,2+de*10),D.scale.set(5+de*1.5,9-de*6,4+de*4),D.rotation.x=de*-.25;w.visible=de>.4,w.position.y=11.4;let fe=ie==="next"?1+Math.sin(W*2.8)*.035:1;c.scale.setScalar(fe),f.emissive.set("#ffc33e"),f.emissiveIntensity=ie==="next"?.08+Math.sin(W*2.8)*.04:0}re(e),ee=se,k(0,1),o.userData.goalNumber=i;function Y(W){let te=W===33?13:W===40?15.7:10.5;L.scale.set((te+1.6)/(s+1.6),1,(te+1.6)/(s+1.6)),P.scale.set(te/s,1,te/s),$.scale.setScalar(te/s),o.userData.markerSize=W}return{group:o,setState:re,setSize:Y,update:k,dispose(){l.dispose(),R.dispose(),v.dispose(),z.dispose(),b.dispose(),F.dispose(),u.forEach(W=>W.dispose())}}}var Bs=new Z;function Yt(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Bs.copy(e),Bs[n]=0,Bs.normalize();let l=.5*a/(a+o),u=1-Bs.angleTo(i)/c;return Math.sign(Bs[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Yi=class i extends Bn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new Z,l=new Z,u=new Z(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,g=d.length/6,_=new Z,p=.5/a;for(let h=0,w=0;h<d.length;h+=3,w+=2)switch(c.fromArray(d,h),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[h+0]=u.x*Math.sign(c.x)+l.x*r,d[h+1]=u.y*Math.sign(c.y)+l.y*r,d[h+2]=u.z*Math.sign(c.z)+l.z*r,f[h+0]=l.x,f[h+1]=l.y,f[h+2]=l.z,Math.floor(h/g)){case 0:_.set(1,0,0),m[w+0]=Yt(_,l,"z","y",r,n),m[w+1]=1-Yt(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),m[w+0]=1-Yt(_,l,"z","y",r,n),m[w+1]=1-Yt(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),m[w+0]=1-Yt(_,l,"x","z",r,e),m[w+1]=Yt(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),m[w+0]=1-Yt(_,l,"x","z",r,e),m[w+1]=1-Yt(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),m[w+0]=1-Yt(_,l,"x","y",r,e),m[w+1]=1-Yt(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),m[w+0]=Yt(_,l,"x","y",r,e),m[w+1]=1-Yt(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var fl=Object.freeze({pitch:80,width:78.5,cornerRadius:7.5,referenceTop:13.5,earthTop:8.5}),pl={"earth-loam":{name:"Warme Gartenerde",color:"#a66a3e",height:8.5,kind:"earth",grain:1,pebbles:9},"earth-humus":{name:"Dunkler Humus",color:"#745035",height:8.5,kind:"earth",grain:1.5,pebbles:6},"earth-clay":{name:"Goldene Lehmerde",color:"#bd8750",height:8.5,kind:"earth",grain:.65,pebbles:5},"grass-velvet":{name:"Samtwiese",color:"#b6dd35",height:18,kind:"grass",tufts:14,bladeHeight:4.5},"grass-sprouts":{name:"Frisches Wiesengras",color:"#9bd32b",height:18,kind:"grass",tufts:20,bladeHeight:8},"grass-clover":{name:"Kleewiese",color:"#a4d536",height:18,kind:"clover",tufts:10,bladeHeight:5},reference:{name:"Bestehende Wiese",color:"#a9cc3e",height:13.5,kind:"reference"}};function og(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128);for(let r=0;r<s.data.length;r+=4){i=i*1664525+1013904223>>>0;let a=128+((i>>>24)-128)*e;s.data[r]=s.data[r+1]=s.data[r+2]=a,s.data[r+3]=255}return n.putImageData(s,0,0),new cn(t)}function zs(i,{seed:e=73}={}){let t=pl[i];if(!t)throw Error("Unknown tile "+i);let n=new yt,s=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=(f,m={})=>new Lt({color:f,roughness:.75,...m}),a=(f,m,g=0,_=0,p=0)=>{let h=new it(f,m);return h.position.set(g,_,p),h.castShadow=h.receiveShadow=!0,n.add(h),h},o=r(t.color,{bumpMap:og(73,t.kind==="earth"?.65:.12),bumpScale:t.grain||.18,roughness:t.kind==="earth"?.95:.65}),c=t.height+3.5,l,u;if(t.kind==="earth"){let f=73.5,m=5,g=-f/2,_=f/2,p=new mt;p.moveTo(g+m,g),p.lineTo(_-m,g),p.quadraticCurveTo(_,g,_,g+m),p.lineTo(_,_-m),p.quadraticCurveTo(_,_,_-m,_),p.lineTo(g+m,_),p.quadraticCurveTo(g,_,g,_-m),p.lineTo(g,g+m),p.quadraticCurveTo(g,g,g+m,g),p.closePath(),l=new tn(p,{depth:t.height-1.5,bevelEnabled:!0,bevelSize:2.5,bevelThickness:2.5,bevelSegments:5,curveSegments:12,steps:1}),u=-1}else l=new Yi(78.5,78.5,c,4,7.5),u=(t.height-3.5)/2;let d=a(l,o,0,0,u);if(d.userData.surface=!0,t.kind==="earth"){let f=[r("#c59b6b"),r("#98714c"),r("#dbb78a")];for(let m=0;m<t.pebbles;m++){let g=(s()-.5)*59,_=(s()-.5)*59,p=.8+s()*1.2,h=a(new Wt(1,9,6),f[m%3],g,_,t.height-.25);h.scale.set(p*1.6,p,p*.55),h.rotation.z=s()*6}for(let m=0;m<22;m++){let g=a(new Wt(1,8,6),o,(s()-.5)*62,(s()-.5)*62,t.height-.35),_=1+s()*1.5;g.scale.set(_*1.6,_,.5)}}else if(t.kind!=="reference"){let f=[r("#d3f471"),r("#b1e443"),r("#87bf24")],m=(g,_,p)=>{let h=new mt;return h.moveTo(-p,0),h.quadraticCurveTo(-p*.8,g*.6,_,g),h.quadraticCurveTo(p*1.1,g*.45,p,0),h.closePath(),new tn(h,{depth:.6,bevelEnabled:!0,bevelThickness:.25,bevelSize:.25,bevelSegments:2,steps:1,curveSegments:6})};for(let g=0;g<t.tufts;g++){let _=(s()-.5)*59,p=(s()-.5)*59;for(let h=0;h<3;h++){let w=t.bladeHeight*(.6+s()*.4),S=a(m(w,(h-1)*w*.4,t.kind==="grass"&&i==="grass-velvet"?1.6:1.1),f[h],_+(h-1)*1.8,p,t.height-.15);S.rotation.x=Math.PI/2,S.rotateOnWorldAxis(new Z(0,0,1),s()*Math.PI*2)}}if(t.kind==="clover")for(let g=0;g<6;g++){let _=(s()-.5)*50,p=(s()-.5)*50;for(let h=0;h<3;h++){let w=h*Math.PI*2/3,S=a(new Wt(1,12,8),f[g%2],_+Math.cos(w)*2.3,p+Math.sin(w)*2.3,t.height+1.7);S.scale.set(3.3,2.6,.9),S.rotation.z=w}}o.emissive.set("#4c790c"),o.emissiveIntensity=.055}else{let f=r("#9fc53b");for(let m=0;m<4;m++){let g=m*Math.PI/2+.3,_=a(new Wt(1,12,8),f,21+Math.cos(g)*4,-20+Math.sin(g)*4,13.7);_.scale.set(4.4,2.6,.65),_.rotation.z=g}}return n.userData={variant:i,top:t.height,walkable:!0,footprint:fl},n}function ks(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of[].concat(s.material||[]))t.add(r),r.bumpMap&&n.add(r.bumpMap)}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}var lg={calm:{name:"Wenig Klee",clover:3,tufts:3},classic:{name:"Kleine Kleewiese",clover:6,tufts:5},rich:{name:"Mehr Klee",clover:10,tufts:4},tuft:{name:"Ein h\xF6heres B\xFCschel",clover:5,tufts:3,tall:!0},flowers:{name:"Kleine Bl\xFCmchen",clover:5,tufts:4,flowers:2},visitors:{name:"Blumenbesuch",clover:5,tufts:4,flowers:1,insects:2}};function _h(i,{seed:e=73}={}){let t=lg[i];if(!t)throw Error("Unknown meadow "+i);let n=zs("grass-clover",{seed:e}),s=n.children.find(R=>R.userData.surface),r=new yt;for(let R of[...n.children])R!==s&&r.add(R);ks(r);let a=()=>(e=e*1664525+1013904223>>>0)/4294967296,o=new Wt(1,12,8),c=R=>new Lt({color:R,roughness:.75}),l=[c("#d3f471"),c("#b1e443"),c("#87bf24")],u=[],d=(R,P,U,E,b)=>{let F=new it(R,P);return F.position.set(U,E,b),F.castShadow=F.receiveShadow=!0,n.add(F),F};function f(R,P,U,E,b=3.3,F=2.6){let z=d(o,l[1],R,P,U);return z.scale.set(b,F,.85),z.rotation.z=E,z}for(let R=0;R<t.clover;R++){let P=(a()-.5)*52,U=(a()-.5)*52;for(let E=0;E<3;E++){let b=E*Math.PI*2/3+a()*.12;f(P+Math.cos(b)*2.3,U+Math.sin(b)*2.3,19.7,b)}}function m(R,P,U){for(let E=0;E<3;E++){let b=new mt,F=(E-1)*U*.35;b.moveTo(-1,0),b.quadraticCurveTo(-.8,U*.65,F,U),b.quadraticCurveTo(1,U*.45,1,0),b.closePath();let z=new tn(b,{depth:.65,bevelEnabled:!0,bevelSize:.25,bevelThickness:.25,bevelSegments:2,curveSegments:6,steps:1}),$=d(z,l[E],R+(E-1)*1.6,P,17.8);$.rotation.x=Math.PI/2,$.rotateOnWorldAxis(new Z(0,0,1),.6)}}for(let R=0;R<t.tufts;R++)m((a()-.5)*50,(a()-.5)*50,3.5+a()*1.8);t.tall&&m(20,-19,10);let g=c("#fff3c4"),_=c("#f6b7a0"),p=c("#efb52e"),h=c("#709e29"),w=c("#edbd43"),S=c("#63502a"),v=new Lt({color:"#fff7d9",transparent:!0,opacity:.78,roughness:.45,depthWrite:!1});for(let R=0;R<(t.flowers||0);R++){let P=R?-16:16,U=R?-14:12,E=R?24:25.5,b=d(new zn(.6,.85,E-18,8),h,P,U,(18+E)/2);b.rotation.x=Math.PI/2;for(let z=0;z<5;z++){let $=z*Math.PI*2/5,ee=d(o,R?_:g,P+Math.cos($)*3,U+Math.sin($)*3,E);ee.scale.set(3.2,1.8,.8),ee.rotation.z=$}if(d(o,p,P,U,E+.7).scale.set(1.9,1.9,1.2),f(P-2,U,20.5,-.5,3.2,1.4),t.insects)for(let z=0;z<t.insects;z++){let $=new yt;n.add($);let ee=new it(o,w);ee.scale.set(.85,1.3,.8),$.add(ee);let se=new it(o,S);se.position.y=1.2,se.scale.setScalar(.6),$.add(se);let ie=[];for(let re of[-1,1]){let k=new it(o,v);k.position.set(re*1,0,.5),k.scale.set(1.8,.75,.25),k.rotation.z=re*.35,$.add(k),ie.push(k)}u.push({insect:$,wings:ie,x:P,y:U,phase:z*3.14,radius:8+z*2,z:E+5+z})}}n.userData={...n.userData,meadowVariant:i,animated:u.length>0};function L(R){for(let P of u){let U=R*.85+P.phase;P.insect.position.set(P.x+Math.cos(U)*P.radius,P.y+Math.sin(U)*P.radius*.65,P.z+Math.sin(R*1.8+P.phase)*1.2),P.insect.rotation.z=U,P.wings.forEach((E,b)=>E.rotation.y=Math.sin(R*28)*(b?1:-1)*.45)}}return L(0),{group:n,update:L,dispose(){ks(n)}}}var xh={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};function yh(i,{animated:e=!0,center:t=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},a=new Lt({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),o=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=xh[i]?.[n]||o;return a.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new pe(...t)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},a.customProgramCacheKey=()=>i+"-"+n+"-2",{material:a,update(l){r.value=e?l:0},dispose(){a.dispose()},type:i}}var cg=pt,Vs=class i extends si{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){let r=this,a=new Ts(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){let t=this;function n(D,N){if(D.nodeType!==1)return;let y=v(D),x=!1,G=null;switch(D.nodeName){case"svg":N=g(D,N);break;case"style":r(D);break;case"g":N=g(D,N);break;case"path":N=g(D,N),D.hasAttribute("d")&&(G=s(D));break;case"rect":N=g(D,N),G=c(D);break;case"polygon":N=g(D,N),G=l(D);break;case"polyline":N=g(D,N),G=u(D);break;case"circle":N=g(D,N),G=d(D);break;case"ellipse":N=g(D,N),G=f(D);break;case"line":N=g(D,N),G=m(D);break;case"defs":x=!0;break;case"use":N=g(D,N);let ue=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),me=D.viewportElement.getElementById(ue);me?n(me,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+ue);break;default:}G&&(N.fill!==void 0&&N.fill!=="none"&&G.color.setStyle(N.fill,cg),R(G,te),z.push(G),G.userData={node:D,style:N});let ne=D.childNodes;for(let H=0;H<ne.length;H++){let ue=ne[H];x&&ue.nodeName!=="style"&&ue.nodeName!=="defs"||n(ue,N)}y&&(ee.pop(),ee.length>0?te.copy(ee[ee.length-1]):te.identity())}function s(D){let N=new nn,y=new pe,x=new pe,G=new pe,ne=!0,H=!1,ue=D.getAttribute("d");if(ue===""||ue==="none")return null;let me=ue.match(/[a-df-z][^a-df-z]*/ig);for(let C=0,B=me.length;C<B;C++){let V=me[C],X=V.charAt(0),J=V.slice(1).trim();ne===!0&&(H=!0,ne=!1);let O;switch(X){case"M":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2)y.x=O[A+0],y.y=O[A+1],x.x=y.x,x.y=y.y,A===0?N.moveTo(y.x,y.y):N.lineTo(y.x,y.y),A===0&&G.copy(y);break;case"H":O=p(J);for(let A=0,ae=O.length;A<ae;A++)y.x=O[A],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"V":O=p(J);for(let A=0,ae=O.length;A<ae;A++)y.y=O[A],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"L":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2)y.x=O[A+0],y.y=O[A+1],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"C":O=p(J);for(let A=0,ae=O.length;A<ae;A+=6)N.bezierCurveTo(O[A+0],O[A+1],O[A+2],O[A+3],O[A+4],O[A+5]),x.x=O[A+2],x.y=O[A+3],y.x=O[A+4],y.y=O[A+5],A===0&&H===!0&&G.copy(y);break;case"S":O=p(J);for(let A=0,ae=O.length;A<ae;A+=4)N.bezierCurveTo(_(y.x,x.x),_(y.y,x.y),O[A+0],O[A+1],O[A+2],O[A+3]),x.x=O[A+0],x.y=O[A+1],y.x=O[A+2],y.y=O[A+3],A===0&&H===!0&&G.copy(y);break;case"Q":O=p(J);for(let A=0,ae=O.length;A<ae;A+=4)N.quadraticCurveTo(O[A+0],O[A+1],O[A+2],O[A+3]),x.x=O[A+0],x.y=O[A+1],y.x=O[A+2],y.y=O[A+3],A===0&&H===!0&&G.copy(y);break;case"T":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2){let Ee=_(y.x,x.x),Fe=_(y.y,x.y);N.quadraticCurveTo(Ee,Fe,O[A+0],O[A+1]),x.x=Ee,x.y=Fe,y.x=O[A+0],y.y=O[A+1],A===0&&H===!0&&G.copy(y)}break;case"A":O=p(J,[3,4],7);for(let A=0,ae=O.length;A<ae;A+=7){if(O[A+5]==y.x&&O[A+6]==y.y)continue;let Ee=y.clone();y.x=O[A+5],y.y=O[A+6],x.x=y.x,x.y=y.y,a(N,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Ee,y),A===0&&H===!0&&G.copy(y)}break;case"m":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2)y.x+=O[A+0],y.y+=O[A+1],x.x=y.x,x.y=y.y,A===0?N.moveTo(y.x,y.y):N.lineTo(y.x,y.y),A===0&&G.copy(y);break;case"h":O=p(J);for(let A=0,ae=O.length;A<ae;A++)y.x+=O[A],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"v":O=p(J);for(let A=0,ae=O.length;A<ae;A++)y.y+=O[A],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"l":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2)y.x+=O[A+0],y.y+=O[A+1],x.x=y.x,x.y=y.y,N.lineTo(y.x,y.y),A===0&&H===!0&&G.copy(y);break;case"c":O=p(J);for(let A=0,ae=O.length;A<ae;A+=6)N.bezierCurveTo(y.x+O[A+0],y.y+O[A+1],y.x+O[A+2],y.y+O[A+3],y.x+O[A+4],y.y+O[A+5]),x.x=y.x+O[A+2],x.y=y.y+O[A+3],y.x+=O[A+4],y.y+=O[A+5],A===0&&H===!0&&G.copy(y);break;case"s":O=p(J);for(let A=0,ae=O.length;A<ae;A+=4)N.bezierCurveTo(_(y.x,x.x),_(y.y,x.y),y.x+O[A+0],y.y+O[A+1],y.x+O[A+2],y.y+O[A+3]),x.x=y.x+O[A+0],x.y=y.y+O[A+1],y.x+=O[A+2],y.y+=O[A+3],A===0&&H===!0&&G.copy(y);break;case"q":O=p(J);for(let A=0,ae=O.length;A<ae;A+=4)N.quadraticCurveTo(y.x+O[A+0],y.y+O[A+1],y.x+O[A+2],y.y+O[A+3]),x.x=y.x+O[A+0],x.y=y.y+O[A+1],y.x+=O[A+2],y.y+=O[A+3],A===0&&H===!0&&G.copy(y);break;case"t":O=p(J);for(let A=0,ae=O.length;A<ae;A+=2){let Ee=_(y.x,x.x),Fe=_(y.y,x.y);N.quadraticCurveTo(Ee,Fe,y.x+O[A+0],y.y+O[A+1]),x.x=Ee,x.y=Fe,y.x=y.x+O[A+0],y.y=y.y+O[A+1],A===0&&H===!0&&G.copy(y)}break;case"a":O=p(J,[3,4],7);for(let A=0,ae=O.length;A<ae;A+=7){if(O[A+5]==0&&O[A+6]==0)continue;let Ee=y.clone();y.x+=O[A+5],y.y+=O[A+6],x.x=y.x,x.y=y.y,a(N,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Ee,y),A===0&&H===!0&&G.copy(y)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(y.copy(G),N.currentPath.currentPoint.copy(y),ne=!0);break;default:console.warn(V)}H=!1}return N}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let N=0;N<D.sheet.cssRules.length;N++){let y=D.sheet.cssRules[N];if(y.type!==1)continue;let x=y.selectorText.split(/,/gm).filter(Boolean).map(G=>G.trim());for(let G=0;G<x.length;G++){let ne=Object.fromEntries(Object.entries(y.style).filter(([,H])=>H!==""));$[x[G]]=Object.assign($[x[G]]||{},ne)}}}function a(D,N,y,x,G,ne,H,ue){if(N==0||y==0){D.lineTo(ue.x,ue.y);return}x=x*Math.PI/180,N=Math.abs(N),y=Math.abs(y);let me=(H.x-ue.x)/2,C=(H.y-ue.y)/2,B=Math.cos(x)*me+Math.sin(x)*C,V=-Math.sin(x)*me+Math.cos(x)*C,X=N*N,J=y*y,O=B*B,A=V*V,ae=O/X+A/J;if(ae>1){let Me=Math.sqrt(ae);N=Me*N,y=Me*y,X=N*N,J=y*y}let Ee=X*A+J*O,Fe=(X*J-Ee)/Ee,I=Math.sqrt(Math.max(0,Fe));G===ne&&(I=-I);let M=I*N*V/y,j=-I*y*B/N,ce=Math.cos(x)*M-Math.sin(x)*j+(H.x+ue.x)/2,_e=Math.sin(x)*M+Math.cos(x)*j+(H.y+ue.y)/2,he=o(1,0,(B-M)/N,(V-j)/y),Ie=o((B-M)/N,(V-j)/y,(-B-M)/N,(-V-j)/y)%(Math.PI*2);D.currentPath.absellipse(ce,_e,N,y,he,he+Ie,ne===0,x)}function o(D,N,y,x){let G=D*y+N*x,ne=Math.sqrt(D*D+N*N)*Math.sqrt(y*y+x*x),H=Math.acos(Math.max(-1,Math.min(1,G/ne)));return D*x-N*y<0&&(H=-H),H}function c(D){let N=S(D.getAttribute("x")||0),y=S(D.getAttribute("y")||0),x=S(D.getAttribute("rx")||D.getAttribute("ry")||0),G=S(D.getAttribute("ry")||D.getAttribute("rx")||0),ne=S(D.getAttribute("width")),H=S(D.getAttribute("height")),ue=1-.551915024494,me=new nn;return me.moveTo(N+x,y),me.lineTo(N+ne-x,y),(x!==0||G!==0)&&me.bezierCurveTo(N+ne-x*ue,y,N+ne,y+G*ue,N+ne,y+G),me.lineTo(N+ne,y+H-G),(x!==0||G!==0)&&me.bezierCurveTo(N+ne,y+H-G*ue,N+ne-x*ue,y+H,N+ne-x,y+H),me.lineTo(N+x,y+H),(x!==0||G!==0)&&me.bezierCurveTo(N+x*ue,y+H,N,y+H-G*ue,N,y+H-G),me.lineTo(N,y+G),(x!==0||G!==0)&&me.bezierCurveTo(N,y+G*ue,N+x*ue,y,N+x,y),me}function l(D){function N(ne,H,ue){let me=S(H),C=S(ue);G===0?x.moveTo(me,C):x.lineTo(me,C),G++}let y=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new nn,G=0;return D.getAttribute("points").replace(y,N),x.currentPath.autoClose=!0,x}function u(D){function N(ne,H,ue){let me=S(H),C=S(ue);G===0?x.moveTo(me,C):x.lineTo(me,C),G++}let y=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new nn,G=0;return D.getAttribute("points").replace(y,N),x.currentPath.autoClose=!1,x}function d(D){let N=S(D.getAttribute("cx")||0),y=S(D.getAttribute("cy")||0),x=S(D.getAttribute("r")||0),G=new hn;G.absarc(N,y,x,0,Math.PI*2);let ne=new nn;return ne.subPaths.push(G),ne}function f(D){let N=S(D.getAttribute("cx")||0),y=S(D.getAttribute("cy")||0),x=S(D.getAttribute("rx")||0),G=S(D.getAttribute("ry")||0),ne=new hn;ne.absellipse(N,y,x,G,0,Math.PI*2);let H=new nn;return H.subPaths.push(ne),H}function m(D){let N=S(D.getAttribute("x1")||0),y=S(D.getAttribute("y1")||0),x=S(D.getAttribute("x2")||0),G=S(D.getAttribute("y2")||0),ne=new nn;return ne.moveTo(N,y),ne.lineTo(x,G),ne.currentPath.autoClose=!1,ne}function g(D,N){N=Object.assign({},N);let y={};if(D.hasAttribute("class")){let H=D.getAttribute("class").split(/\s/).filter(Boolean).map(ue=>ue.trim());for(let ue=0;ue<H.length;ue++)y=Object.assign(y,$["."+H[ue]])}D.hasAttribute("id")&&(y=Object.assign(y,$["#"+D.getAttribute("id")]));function x(H,ue,me){me===void 0&&(me=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),D.hasAttribute(H)&&(N[ue]=me(D.getAttribute(H))),y[H]&&(N[ue]=me(y[H])),D.style&&D.style[H]!==""&&(N[ue]=me(D.style[H]))}function G(H){return Math.max(0,Math.min(1,S(H)))}function ne(H){return Math.max(0,S(H))}return x("fill","fill"),x("fill-opacity","fillOpacity",G),x("fill-rule","fillRule"),x("opacity","opacity",G),x("stroke","stroke"),x("stroke-opacity","strokeOpacity",G),x("stroke-width","strokeWidth",ne),x("stroke-linejoin","strokeLineJoin"),x("stroke-linecap","strokeLineCap"),x("stroke-miterlimit","strokeMiterLimit",ne),x("visibility","visibility"),N}function _(D,N){return D-(N-D)}function p(D,N,y){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let x={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},G=0,ne=1,H=2,ue=3,me=G,C=!0,B="",V="",X=[];function J(Ee,Fe,I){let M=new SyntaxError('Unexpected character "'+Ee+'" at index '+Fe+".");throw M.partial=I,M}function O(){B!==""&&(V===""?X.push(Number(B)):X.push(Number(B)*Math.pow(10,Number(V)))),B="",V=""}let A,ae=D.length;for(let Ee=0;Ee<ae;Ee++){if(A=D[Ee],Array.isArray(N)&&N.includes(X.length%y)&&x.FLAGS.test(A)){me=ne,B=A,O();continue}if(me===G){if(x.WHITESPACE.test(A))continue;if(x.DIGIT.test(A)||x.SIGN.test(A)){me=ne,B=A;continue}if(x.POINT.test(A)){me=H,B=A;continue}x.COMMA.test(A)&&(C&&J(A,Ee,X),C=!0)}if(me===ne){if(x.DIGIT.test(A)){B+=A;continue}if(x.POINT.test(A)){B+=A,me=H;continue}if(x.EXP.test(A)){me=ue;continue}x.SIGN.test(A)&&B.length===1&&x.SIGN.test(B[0])&&J(A,Ee,X)}if(me===H){if(x.DIGIT.test(A)){B+=A;continue}if(x.EXP.test(A)){me=ue;continue}x.POINT.test(A)&&B[B.length-1]==="."&&J(A,Ee,X)}if(me===ue){if(x.DIGIT.test(A)){V+=A;continue}if(x.SIGN.test(A)){if(V===""){V+=A;continue}V.length===1&&x.SIGN.test(V)&&J(A,Ee,X)}}x.WHITESPACE.test(A)?(O(),me=G,C=!1):x.COMMA.test(A)?(O(),me=G,C=!0):x.SIGN.test(A)?(O(),me=ne,B=A):x.POINT.test(A)?(O(),me=H,B=A):J(A,Ee,X)}return O(),X}let h=["mm","cm","in","pt","pc","px"],w={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function S(D){let N="px";if(typeof D=="string"||D instanceof String)for(let x=0,G=h.length;x<G;x++){let ne=h[x];if(D.endsWith(ne)){N=ne,D=D.substring(0,D.length-ne.length);break}}let y;return N==="px"&&t.defaultUnit!=="px"?y=w.in[t.defaultUnit]/t.defaultDPI:(y=w[N][t.defaultUnit],y<0&&(y=w[N].in*t.defaultDPI)),y*parseFloat(D)}function v(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let N=L(D);return ee.length>0&&N.premultiply(ee[ee.length-1]),te.copy(N),ee.push(N),N}function L(D){let N=new Ve,y=se;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let x=S(D.getAttribute("x")),G=S(D.getAttribute("y"));N.translate(x,G)}if(D.hasAttribute("transform")){let x=D.getAttribute("transform").split(")");for(let G=x.length-1;G>=0;G--){let ne=x[G].trim();if(ne==="")continue;let H=ne.indexOf("("),ue=ne.length;if(H>0&&H<ue){let me=ne.slice(0,H),C=p(ne.slice(H+1));switch(y.identity(),me){case"translate":if(C.length>=1){let B=C[0],V=0;C.length>=2&&(V=C[1]),y.translate(B,V)}break;case"rotate":if(C.length>=1){let B=0,V=0,X=0;B=C[0]*Math.PI/180,C.length>=3&&(V=C[1],X=C[2]),ie.makeTranslation(-V,-X),re.makeRotation(B),k.multiplyMatrices(re,ie),ie.makeTranslation(V,X),y.multiplyMatrices(ie,k)}break;case"scale":if(C.length>=1){let B=C[0],V=B;C.length>=2&&(V=C[1]),y.scale(B,V)}break;case"skewX":C.length===1&&y.set(1,Math.tan(C[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":C.length===1&&y.set(1,0,0,Math.tan(C[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":C.length===6&&y.set(C[0],C[2],C[4],C[1],C[3],C[5],0,0,1);break}}N.premultiply(y)}}return N}function R(D,N){function y(H){W.set(H.x,H.y,1).applyMatrix3(N),H.set(W.x,W.y)}function x(H){let ue=H.xRadius,me=H.yRadius,C=Math.cos(H.aRotation),B=Math.sin(H.aRotation),V=new Z(ue*C,ue*B,0),X=new Z(-me*B,me*C,0),J=V.applyMatrix3(N),O=X.applyMatrix3(N),A=se.set(J.x,O.x,0,J.y,O.y,0,0,0,1),ae=ie.copy(A).invert(),I=re.copy(ae).transpose().multiply(ae).elements,M=F(I[0],I[1],I[4]),j=Math.sqrt(M.rt1),ce=Math.sqrt(M.rt2);if(H.xRadius=1/j,H.yRadius=1/ce,H.aRotation=Math.atan2(M.sn,M.cs),!((H.aEndAngle-H.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let he=ie.set(j,0,0,0,ce,0,0,0,1),Ie=re.set(M.cs,M.sn,0,-M.sn,M.cs,0,0,0,1),Me=he.multiply(Ie).multiply(A),Pe=Le=>{let{x:xe,y:we}=new Z(Math.cos(Le),Math.sin(Le),0).applyMatrix3(Me);return Math.atan2(we,xe)};H.aStartAngle=Pe(H.aStartAngle),H.aEndAngle=Pe(H.aEndAngle),P(N)&&(H.aClockwise=!H.aClockwise)}}function G(H){let ue=E(N),me=b(N);H.xRadius*=ue,H.yRadius*=me;let C=ue>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);H.aRotation+=C,P(N)&&(H.aStartAngle*=-1,H.aEndAngle*=-1,H.aClockwise=!H.aClockwise)}let ne=D.subPaths;for(let H=0,ue=ne.length;H<ue;H++){let C=ne[H].curves;for(let B=0;B<C.length;B++){let V=C[B];V.isLineCurve?(y(V.v1),y(V.v2)):V.isCubicBezierCurve?(y(V.v0),y(V.v1),y(V.v2),y(V.v3)):V.isQuadraticBezierCurve?(y(V.v0),y(V.v1),y(V.v2)):V.isEllipseCurve&&(Y.set(V.aX,V.aY),y(Y),V.aX=Y.x,V.aY=Y.y,U(N)?x(V):G(V))}}}function P(D){let N=D.elements;return N[0]*N[4]-N[1]*N[3]<0}function U(D){let N=D.elements,y=N[0]*N[3]+N[1]*N[4];if(y===0)return!1;let x=E(D),G=b(D);return Math.abs(y/(x*G))>Number.EPSILON}function E(D){let N=D.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function b(D){let N=D.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function F(D,N,y){let x,G,ne,H,ue,me=D+y,C=D-y,B=Math.sqrt(C*C+4*N*N);return me>0?(x=.5*(me+B),ue=1/x,G=D*ue*y-N*ue*N):me<0?G=.5*(me-B):(x=.5*B,G=-.5*B),C>0?ne=C+B:ne=C-B,Math.abs(ne)>2*Math.abs(N)?(ue=-2*N/ne,H=1/Math.sqrt(1+ue*ue),ne=ue*H):Math.abs(N)===0?(ne=1,H=0):(ue=-.5*ne/N,ne=1/Math.sqrt(1+ue*ue),H=ue*ne),C>0&&(ue=ne,ne=-H,H=ue),{rt1:x,rt2:G,cs:ne,sn:H}}let z=[],$={},ee=[],se=new Ve,ie=new Ve,re=new Ve,k=new Ve,Y=new pe,W=new Z,te=new Ve,de=new DOMParser().parseFromString(e,"image/svg+xml");return n(de.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:z,xml:de.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,p,h,w){let S=_.x,v=p.x,L=h.x,R=w.x,P=_.y,U=p.y,E=h.y,b=w.y,F=(R-L)*(P-E)-(b-E)*(S-L),z=(v-S)*(P-E)-(U-P)*(S-L),$=(b-E)*(v-S)-(R-L)*(U-P),ee=F/$,se=z/$;if($===0&&F!==0||ee<=0||ee>=1||se<0||se>1)return null;if(F===0&&$===0){for(let ie=0;ie<2;ie++)if(a(ie===0?h:w,_,p),s.loc==n.ORIGIN){let re=ie===0?h:w;return{x:re.x,y:re.y,t:s.t}}else if(s.loc==n.BETWEEN){let re=+(S+s.t*(v-S)).toPrecision(10),k=+(P+s.t*(U-P)).toPrecision(10);return{x:re,y:k,t:s.t}}return null}else{for(let k=0;k<2;k++)if(a(k===0?h:w,_,p),s.loc==n.ORIGIN){let Y=k===0?h:w;return{x:Y.x,y:Y.y,t:s.t}}let ie=+(S+ee*(v-S)).toPrecision(10),re=+(P+ee*(U-P)).toPrecision(10);return{x:ie,y:re,t:ee}}}function a(_,p,h){let w=h.x-p.x,S=h.y-p.y,v=_.x-p.x,L=_.y-p.y,R=w*L-v*S;if(_.x===p.x&&_.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===h.x&&_.y===h.y){s.loc=n.DESTINATION,s.t=1;return}if(R<-Number.EPSILON){s.loc=n.LEFT;return}if(R>Number.EPSILON){s.loc=n.RIGHT;return}if(w*v<0||S*L<0){s.loc=n.BEHIND;return}if(Math.sqrt(w*w+S*S)<Math.sqrt(v*v+L*L)){s.loc=n.BEYOND;return}let P;w!==0?P=v/w:P=L/S,s.loc=n.BETWEEN,s.t=P}function o(_,p){let h=[],w=[];for(let S=1;S<_.length;S++){let v=_[S-1],L=_[S];for(let R=1;R<p.length;R++){let P=p[R-1],U=p[R],E=r(v,L,P,U);E!==null&&h.find(b=>b.t<=E.t+Number.EPSILON&&b.t>=E.t-Number.EPSILON)===void 0&&(h.push(E),w.push(new pe(E.x,E.y)))}}return w}function c(_,p,h){let w=new pe;p.getCenter(w);let S=[];return h.forEach(v=>{v.boundingBox.containsPoint(w)&&o(_,v.points).forEach(R=>{S.push({identifier:v.identifier,isCW:v.isCW,point:R})})}),S.sort((v,L)=>v.point.x-L.point.x),S}function l(_,p,h,w,S){(S==null||S==="")&&(S="nonzero");let v=new pe;_.boundingBox.getCenter(v);let L=[new pe(h,v.y),new pe(w,v.y)],R=c(L,_.boundingBox,p);R.sort((z,$)=>z.point.x-$.point.x);let P=[],U=[];R.forEach(z=>{z.identifier===_.identifier?P.push(z):U.push(z)});let E=P[0].point.x,b=[],F=0;for(;F<U.length&&U[F].point.x<E;)b.length>0&&b[b.length-1]===U[F].identifier?b.pop():b.push(U[F].identifier),F++;if(b.push(_.identifier),S==="evenodd"){let z=b.length%2===0,$=b[b.length-2];return{identifier:_.identifier,isHole:z,for:$}}else if(S==="nonzero"){let z=!0,$=null,ee=null;for(let se=0;se<b.length;se++){let ie=b[se];z?(ee=p[ie].isCW,z=!1,$=ie):ee!==p[ie].isCW&&(ee=p[ie].isCW,z=!0)}return{identifier:_.identifier,isHole:z,for:$}}else console.warn('fill-rule: "'+S+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(_=>{let p=_.getPoints(),h=-999999999,w=999999999,S=-999999999,v=999999999;for(let L=0;L<p.length;L++){let R=p[L];R.y>h&&(h=R.y),R.y<w&&(w=R.y),R.x>S&&(S=R.x),R.x<v&&(v=R.x)}return d<=S&&(d=S+1),u>=v&&(u=v-1),{curves:_.curves,points:p,isCW:St.isClockWise(p),identifier:-1,boundingBox:new Cs(new pe(v,w),new pe(S,h))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;let m=f.map(_=>l(_,f,u,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!m[_.identifier].isHole){let h=new mt;h.curves=_.curves,m.filter(S=>S.isHole&&S.for===_.identifier).forEach(S=>{let v=f[S.identifier],L=new hn;L.curves=v.curves,h.holes.push(L)}),g.push(h)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(e,t,n,s,r,a,o)===0)return null;let c=new Pt;return c.setAttribute("position",new at(r,3)),c.setAttribute("normal",new at(a,3)),c.setAttribute("uv",new at(o,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,a,o,c){let l=new pe,u=new pe,d=new pe,f=new pe,m=new pe,g=new pe,_=new pe,p=new pe,h=new pe,w=new pe,S=new pe,v=new pe,L=new pe,R=new pe,P=new pe,U=new pe,E=new pe;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=C(e);let b=e.length;if(b<2)return 0;let F=e[0].equals(e[b-1]),z,$=e[0],ee,se=t.strokeWidth/2,ie=1/(b-1),re=0,k,Y,W,te,de=!1,fe=0,D=c*3,N=c*2;y(e[0],e[1],l).multiplyScalar(se),p.copy(e[0]).sub(l),h.copy(e[0]).add(l),w.copy(p),S.copy(h);for(let B=1;B<b;B++){z=e[B],B===b-1?F?ee=e[1]:ee=void 0:ee=e[B+1];let V=l;if(y($,z,V),d.copy(V).multiplyScalar(se),v.copy(z).sub(d),L.copy(z).add(d),k=re+ie,Y=!1,ee!==void 0){y(z,ee,u),d.copy(u).multiplyScalar(se),R.copy(z).sub(d),P.copy(z).add(d),W=!0,d.subVectors(ee,$),V.dot(d)<0&&(W=!1),B===1&&(de=W),d.subVectors(ee,z),d.normalize();let X=Math.abs(V.dot(d));if(X>Number.EPSILON){let J=se/X;d.multiplyScalar(-J),f.subVectors(z,$),m.copy(f).setLength(J).add(d),U.copy(m).negate();let O=m.length(),A=f.length();f.divideScalar(A),g.subVectors(ee,z);let ae=g.length();switch(g.divideScalar(ae),f.dot(U)<A&&g.dot(U)<ae&&(Y=!0),E.copy(m).add(z),U.add(z),te=!1,Y?W?(P.copy(U),L.copy(U)):(R.copy(U),v.copy(U)):ne(),t.strokeLineJoin){case"bevel":H(W,Y,k);break;case"round":ue(W,Y),W?G(z,v,R,k,0):G(z,P,L,k,1);break;case"miter":case"miter-clip":default:let Ee=se*t.strokeMiterLimit/O;if(Ee<1)if(t.strokeLineJoin!=="miter-clip"){H(W,Y,k);break}else ue(W,Y),W?(g.subVectors(E,v).multiplyScalar(Ee).add(v),_.subVectors(E,R).multiplyScalar(Ee).add(R),x(v,k,0),x(g,k,0),x(z,k,.5),x(z,k,.5),x(g,k,0),x(_,k,0),x(z,k,.5),x(_,k,0),x(R,k,0)):(g.subVectors(E,L).multiplyScalar(Ee).add(L),_.subVectors(E,P).multiplyScalar(Ee).add(P),x(L,k,1),x(g,k,1),x(z,k,.5),x(z,k,.5),x(g,k,1),x(_,k,1),x(z,k,.5),x(_,k,1),x(P,k,1));else Y?(W?(x(h,re,1),x(p,re,0),x(E,k,0),x(h,re,1),x(E,k,0),x(U,k,1)):(x(h,re,1),x(p,re,0),x(E,k,1),x(p,re,0),x(U,k,0),x(E,k,1)),W?R.copy(E):P.copy(E)):W?(x(v,k,0),x(E,k,0),x(z,k,.5),x(z,k,.5),x(E,k,0),x(R,k,0)):(x(L,k,1),x(E,k,1),x(z,k,.5),x(z,k,.5),x(E,k,1),x(P,k,1)),te=!0;break}}else ne()}else ne();!F&&B===b-1&&me(e[0],w,S,W,!0,re),re=k,$=z,p.copy(R),h.copy(P)}if(!F)me(z,v,L,W,!1,k);else if(Y&&r){let B=E,V=U;de!==W&&(B=U,V=E),W?(te||de)&&(V.toArray(r,0),V.toArray(r,9),te&&B.toArray(r,3)):(te||!de)&&(V.toArray(r,3),V.toArray(r,9),te&&B.toArray(r,0))}return fe;function y(B,V,X){return X.subVectors(V,B),X.set(-X.y,X.x).normalize()}function x(B,V,X){r&&(r[D]=B.x,r[D+1]=B.y,r[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[N]=V,o[N+1]=X,N+=2)),fe+=3}function G(B,V,X,J,O){l.copy(V).sub(B).normalize(),u.copy(X).sub(B).normalize();let A=Math.PI,ae=l.dot(u);Math.abs(ae)<1&&(A=Math.abs(Math.acos(ae))),A/=n,d.copy(V);for(let Ee=0,Fe=n-1;Ee<Fe;Ee++)f.copy(d).rotateAround(B,A),x(d,J,O),x(f,J,O),x(B,J,.5),d.copy(f);x(f,J,O),x(X,J,O),x(B,J,.5)}function ne(){x(h,re,1),x(p,re,0),x(v,k,0),x(h,re,1),x(v,k,0),x(L,k,1)}function H(B,V,X){V?B?(x(h,re,1),x(p,re,0),x(v,k,0),x(h,re,1),x(v,k,0),x(U,k,1),x(v,X,0),x(R,X,0),x(U,X,.5)):(x(h,re,1),x(p,re,0),x(L,k,1),x(p,re,0),x(U,k,0),x(L,k,1),x(L,X,1),x(U,X,0),x(P,X,1)):B?(x(v,X,0),x(R,X,0),x(z,X,.5)):(x(L,X,1),x(P,X,0),x(z,X,.5))}function ue(B,V){V&&(B?(x(h,re,1),x(p,re,0),x(v,k,0),x(h,re,1),x(v,k,0),x(U,k,1),x(v,re,0),x(z,k,.5),x(U,k,1),x(z,k,.5),x(R,re,0),x(U,k,1)):(x(h,re,1),x(p,re,0),x(L,k,1),x(p,re,0),x(U,k,0),x(L,k,1),x(L,re,1),x(U,k,0),x(z,k,.5),x(z,k,.5),x(U,k,0),x(P,re,1)))}function me(B,V,X,J,O,A){switch(t.strokeLineCap){case"round":O?G(B,X,V,A,.5):G(B,V,X,A,.5);break;case"square":if(O)l.subVectors(V,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B),J?(d.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(d.toArray(r,3),o[7]===1?f.toArray(r,9):d.toArray(r,9),f.toArray(r,0));else{l.subVectors(X,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B);let ae=r.length;J?(d.toArray(r,ae-3),f.toArray(r,ae-6),f.toArray(r,ae-12)):(f.toArray(r,ae-6),d.toArray(r,ae-3),f.toArray(r,ae-12))}break;case"butt":default:break}}function C(B){let V=!1;for(let J=1,O=B.length-1;J<O;J++)if(B[J].distanceTo(B[J+1])<s){V=!0;break}if(!V)return B;let X=[];X.push(B[0]);for(let J=1,O=B.length-1;J<O;J++)B[J].distanceTo(B[J+1])>=s&&X.push(B[J]);return X.push(B[B.length-1]),X}}};window.SlinkGrowthModules={createTile:zs,VARIANTS:pl,TILE_SPEC:fl,disposeTile:ks};window.Slink3D=(()=>{let i,e,t,n,s,r=new Rs,a=[],o=[],c=[],l,u,d,f=!1,m,g=[],_=[],p=0,h=0,w=(Y,W=.55,te={})=>new Lt({color:Y,roughness:W,metalness:0,...te});function S(Y,W,te,de,fe){let D=new mt;return D.moveTo(Y+fe,W),D.lineTo(Y+te-fe,W),D.quadraticCurveTo(Y+te,W,Y+te,W+fe),D.lineTo(Y+te,W+de-fe),D.quadraticCurveTo(Y+te,W+de,Y+te-fe,W+de),D.lineTo(Y+fe,W+de),D.quadraticCurveTo(Y,W+de,Y,W+de-fe),D.lineTo(Y,W+fe),D.quadraticCurveTo(Y,W,Y+fe,W),D}function v(Y,W,te=0,de=0,fe=0,D=n){let N=new it(Y,W);return N.position.set(te,de,fe),N.castShadow=!0,N.receiveShadow=!0,D.add(N),N}function L(Y,W,te,de,fe,D,N,y,x=n){return v(new Yi(Y,W,te,4,de),fe,D,N,y,x)}function R(){let Y=document.createElement("canvas");Y.width=Y.height=128;let W=Y.getContext("2d"),te=W.createImageData(128,128),de=73;for(let D=0;D<te.data.length;D+=4){de=de*1664525+1013904223>>>0;let N=128+(de>>>27)%9;te.data[D]=te.data[D+1]=te.data[D+2]=N,te.data[D+3]=255}W.putImageData(te,0,0);let fe=new cn(Y);return fe.wrapS=fe.wrapT=Ai,fe}let P=()=>R();function U(){let Y=R(),W=Y.image,te=W.getContext("2d");te.fillStyle="#656565";for(let de=0;de<4;de++){let fe=de*Math.PI/2+.5;te.save(),te.translate(64+Math.cos(fe)*18,64+Math.sin(fe)*18),te.rotate(fe),te.beginPath(),te.ellipse(0,0,18,9,0,0,Math.PI*2),te.fill(),te.restore()}return te.beginPath(),te.arc(64,64,5,0,Math.PI*2),te.fill(),Y.needsUpdate=!0,Y}function E(Y){let W=document.createElement("canvas");W.width=W.height=128;let te=W.getContext("2d");te.fillStyle="#77421a",te.font="bold 82px Trebuchet MS",te.textAlign="center",te.textBaseline="middle",te.fillText(String(Y),64,69);let de=new cn(W);return de.colorSpace=pt,de}function b(Y,W){let te=0;for(let fe=0;fe<Y.length;fe++){let D=Y[fe],N=Y[(fe+1)%Y.length];te+=D.x*N.y-N.x*D.y}let de=te>0?1:-1;return Y.map((fe,D)=>{let N=Y[(D+Y.length-1)%Y.length],y=Y[(D+1)%Y.length],x=fe.clone().sub(N).normalize(),G=y.clone().sub(fe).normalize(),ne=new pe(x.y,-x.x).multiplyScalar(de),H=new pe(G.y,-G.x).multiplyScalar(de),ue=ne.clone().add(H).normalize();return fe.clone().add(ue.multiplyScalar(W/Math.max(.25,ue.dot(ne))))})}function F(Y){let W=new mt;return Y.forEach((te,de)=>de?W.lineTo(te.x,-te.y):W.moveTo(te.x,-te.y)),W.closePath(),W}function z(Y,W){let te=new Set(Y),de=[];for(;te.size;){let fe=te.values().next().value,D=[fe];te.delete(fe);for(let N=0;N<D.length;N++){let y=D[N];for(let x of[y-W,y+W,y%W?y-1:-1,y%W<W-1?y+1:-1])te.has(x)&&(te.delete(x),D.push(x))}de.push(D)}return de}function $(Y,W,te){let de=new Set(Y),fe=[],D=(y,x)=>y>=0&&x>=0&&y<W&&de.has(x*W+y);for(let y of Y){let x=y%W,G=Math.floor(y/W),ne=20+x*80,H=20+G*80;D(x,G-1)||fe.push([[ne,H],[ne+80,H]]),D(x+1,G)||fe.push([[ne+80,H],[ne+80,H+80]]),D(x,G+1)||fe.push([[ne+80,H+80],[ne,H+80]]),D(x-1,G)||fe.push([[ne,H+80],[ne,H]])}let N=[];for(;fe.length;){let y=fe.shift(),x=y[0],G=[x],ne=y[1];for(;ne.join()!=x.join();){G.push(ne);let H=fe.findIndex(ue=>ue[0].join()==ne.join());if(H<0)break;ne=fe.splice(H,1)[0][1]}G=G.filter((H,ue)=>{let me=G[(ue+G.length-1)%G.length],C=G[(ue+1)%G.length];return!(me[0]===H[0]&&C[0]===H[0]||me[1]===H[1]&&C[1]===H[1])}),N.push(G.map(H=>new pe(...H)))}return N.sort((y,x)=>Math.abs(St.area(x))-Math.abs(St.area(y))),N.map((y,x)=>{let G=b(y,x?te:-te),ne=new mt;return G.forEach((H,ue)=>{let me=G[(ue+G.length-1)%G.length],C=G[(ue+1)%G.length],B=Math.min(10,H.distanceTo(me)/3,H.distanceTo(C)/3),V=H.clone().add(me.clone().sub(H).normalize().multiplyScalar(B)),X=H.clone().add(C.clone().sub(H).normalize().multiplyScalar(B));ue?ne.lineTo(V.x,-V.y):ne.moveTo(V.x,-V.y),ne.quadraticCurveTo(H.x,-H.y,X.x,-X.y)}),ne.closePath(),ne})}function ee(){s=document.createElement("canvas"),s.id="terrain3d",s.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(s),i=new Na({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0,i.shadowMap.type=zr,i.outputColorSpace=pt,i.toneMapping=Yr,i.toneMappingExposure=.88,e=new fs,e.add(new As("#fff6dc","#a28d6c",1.65));let Y=new Oi("#fff4dc",3.3);Y.position.set(-300,450,750),Y.castShadow=!0,Y.shadow.mapSize.set(2048,2048),Object.assign(Y.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),Y.shadow.bias=-3e-4,Y.shadow.normalBias=.9,Y.shadow.radius=4,e.add(Y);let W=new Oi("#d4e8ff",.4);W.position.set(500,-100,400),e.add(W),n=new yt,e.add(n),t=new ri,t.up.set(0,1,0),t.near=1,t.far=3e3,u=new ResizeObserver(()=>se()),u.observe(document.getElementById("board"));let te=(fe,D)=>{let N=s.getBoundingClientRect();return r.setFromCamera(new pe((fe-N.left)/N.width*2-1,-(D-N.top)/N.height*2+1),t),r.intersectObjects(a,!1)[0]?.object.userData.cell??-1},de=fe=>{if(!f)return;let D=m||fe,N=fe.clientX-D.clientX,y=fe.clientY-D.clientY,x=Math.max(1,Math.ceil(Math.hypot(N,y)/3));for(let G=1;G<=x;G++){let ne=te(D.clientX+N*G/x,D.clientY+y*G/x);ne>=0&&l.onMove(ne)}m={clientX:fe.clientX,clientY:fe.clientY}};s.addEventListener("pointerdown",fe=>{fe.preventDefault(),s.setPointerCapture(fe.pointerId),f=!0,m=null,de(fe),document.getElementById("board").focus({preventScroll:!0})}),s.addEventListener("pointermove",de);for(let fe of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(fe,()=>{f=!1,m=null});s.addEventListener("webglcontextlost",fe=>{fe.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),s.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function se(){if(!l)return;let Y=document.getElementById("board"),W=Y.clientWidth,te=Y.clientHeight;if(!W||!te)return;i.setSize(W,te,!1);let de=new ln().setFromObject(n),fe=de.getCenter(new Z);t.position.set(fe.x,fe.y-430,fe.z+1250),t.lookAt(fe.x,fe.y,0),t.updateMatrixWorld();let D=e.children.find(me=>me.isDirectionalLight&&me.castShadow);if(D){let me=Math.max(de.max.x-de.min.x,de.max.y-de.min.y)*.75+60;D.target.position.set(fe.x,fe.y,0),e.add(D.target),Object.assign(D.shadow.camera,{left:-me,right:me,top:me,bottom:-me}),D.shadow.camera.updateProjectionMatrix()}let N=t.matrixWorldInverse,y=new pe(1/0,1/0),x=new pe(-1/0,-1/0);for(let me of[de.min.x,de.max.x])for(let C of[de.min.y,de.max.y])for(let B of[de.min.z,de.max.z]){let V=new Z(me,C,B).applyMatrix4(N);y.min(V),x.max(V)}let G=(y.x+x.x)/2,ne=(y.y+x.y)/2,H=Math.max((x.y-y.y)/2,(x.x-y.x)/2/(W/te))+13,ue=H*W/te;Object.assign(t,{left:G-ue,right:G+ue,top:ne+H,bottom:ne-H}),t.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0,ie()}function ie(){i.render(e,t)}function re(Y){if(requestAnimationFrame(re),!i||!l||document.hidden){h=Y;return}if(!(Y-h<33)){p+=Math.min((Y-h)/1e3,.1),h=Y;for(let W of _)W.update(p);for(let W of g){W.meadow?.update(p);let te=Math.min((Y-W.changedAt)/W.duration,1);W.progress=W.from+(W.target-W.from)*Math.max(0,te);let de=W.progress;W.grown.scale.z=(8.5+9.5*de)/18,W.grown.position.z=0,W.grown.visible=de>0,W.grown.traverse(fe=>{fe.isMesh&&(fe.material.transparent=de<1,fe.material.opacity=de,fe.castShadow=de>.7)}),W.earth.visible=de<1}for(let W of c){let te=g.find(de=>de.i===W.i);W.goal.group.position.z=8.5+9.5*(te?.progress||0),W.goal.update(p,.033)}i.shadowMap.needsUpdate=!0,ie()}}requestAnimationFrame(re);function k(Y,W,te){l={l:Y,onMove:te};let de=new Set,fe=new Set,D=new Set;n.traverse(B=>{B.geometry&&de.add(B.geometry);for(let V of[].concat(B.material||[])){fe.add(V);for(let X of Object.values(V))X?.isTexture&&D.add(X)}}),n.clear(),de.forEach(B=>B.dispose()),fe.forEach(B=>B.dispose()),D.forEach(B=>B.dispose()),a=[],o=[],c=[],g=[],_=[];let N=new Vs,y=N.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+W+'"/></svg>'),x=Vs.createShapes(y.paths[0])[0].getPoints(24);x.pop();let G=F(b(x,11)),ne=w("#f6dfb5",.62,{bumpMap:P(),bumpScale:.18,side:Xt}),H=[...Y.water||[],...Y.lava||[]],ue=B=>({x:B%Y.n*80+60,y:-(Math.floor(B/Y.n)*80+60)}),me=[];for(let[B,V]of[["water",Y.water||[]],["lava",Y.lava||[]]])for(let X of z(V,Y.n)){let J=$(X,Y.n,7);G.holes.push(J[0]),me.push({type:B,group:X,shapes:J})}let C=new tn(G,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});v(C,ne,0,0,-24);for(let B of z(Y.solution,Y.n)){let V=$(B,Y.n,0),X=V[0];X.holes.push(...V.slice(1)),v(new bs(X),w("#87623d",.8),0,0,3.2)}for(let B of Y.solution){let V=ue(B);g.push({i:B,p:V,id:null,group:null})}for(let{type:B,group:V,shapes:X}of me){let J=ue(V[0]),O=window.SlinkCatalogueDesign,A=yh(B,{style:B==="water"?O?.waterStyle||"sway":O?.lavaStyle||"bubbles",center:[J.x,J.y]});_.push(A);let ae=X[0];ae.holes.push(...X.slice(1)),v(new tn(ae,{depth:3,bevelEnabled:!1,curveSegments:20}),A.material,0,0,-15)}for(let B of Y.stones||[]){let V=ue(B),X=L(66,66,33,8,w("#928675",.85,{bumpMap:U(),bumpScale:1.1}),V.x,V.y,10);X.userData.cell=-1,a.push(X)}for(let[B,V]of Y.walls){let X=ue(B),J=ue(V);L(X.x===J.x?53:9,X.y===J.y?53:9,18,3,w("#a49983",.85),(X.x+J.x)/2,(X.y+J.y)/2,17)}for(let[B,V]of Y.marks.entries()){let X=ue(V),J=gh({number:B+1,state:B===0?"next":"closed",layout:"compact"});J.group.rotation.x=Math.PI/2,J.group.position.set(X.x,X.y,8.5),n.add(J.group),c.push({i:V,goal:J})}i.shadowMap.needsUpdate=!0,se()}return{diagnostics(){return i?{textures:i.info.memory.textures,geometries:i.info.memory.geometries,programs:i.info.programs.length}:null},update(Y,W,te,de){try{i||ee(),l?.l!==Y&&k(Y,te,de);let fe=Y.marks.find(D=>!W.includes(D));for(let D of g){if(!D.group){if(D.earth=zs("earth-loam",{seed:73+D.i*19}),D.meadow=_h(Y.meadowVariants?.[D.i]||"classic",{seed:(Y.meadowSeed||73)+D.i*19}),D.grown=D.meadow.group,Y.marks.includes(D.i))for(let y of[...D.grown.children])!y.userData.surface&&y.position.x>0&&y.position.y<-3&&D.grown.remove(y);D.group=D.earth;for(let y of[D.earth,D.grown])y.position.set(D.p.x,D.p.y,0),n.add(y),y.traverse(x=>{x.isMesh&&x.userData.surface&&(x.userData.cell=D.i,a.push(x))});D.progress=0,D.target=0,D.from=0,D.changedAt=performance.now(),D.duration=300,D.grown.visible=!1}let N=W.includes(D.i)?1:0;N!==D.target&&(D.from=D.progress,D.target=N,D.changedAt=performance.now(),D.duration=N?300:180)}for(let D of c)D.goal.setState(W.includes(D.i)?"bloom":D.i===fe?"next":"closed"),D.goal.setSize(window.SlinkMarkerSize||27);i.shadowMap.needsUpdate=!0,ie()}catch(fe){console.error("3D renderer:",fe),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
