(()=>{var _l={water:{sway:"vec2 wobble=vec2(sin(t*.6),cos(t*.47))*.10;float a=sin(p.x*1.1+wobble.x)*cos(p.y*.85+wobble.y);float b=sin(p.x*.65+p.y*1.25+sin(t*.55)*.12);vec3 liquid=mix(vec3(.018,.20,.40),vec3(.035,.40,.61),.53+.15*a);float light=pow(max(0.,.5+.5*b),7.);liquid+=vec3(.07,.16,.18)*light;diffuseColor.rgb=liquid;",shimmer:"vec2 wobble=p+vec2(sin(t*.45)*.035,cos(t*.37)*.035);float a=sin(wobble.x*2.3+sin(wobble.y*1.7))*sin(wobble.y*2.1+cos(wobble.x*1.2));float lines=pow(1.-abs(a),14.);float pulse=.7+.15*sin(t*.65+p.x*.4);vec3 liquid=vec3(.022,.29,.49)+vec3(.08,.19,.21)*lines*pulse;diffuseColor.rgb=liquid;",ripples:"float r=length(vLiquidXY-uLiquidCenter+vec2(8,-6));float wave=sin(r*.28-sin(t*.65)*.33);float ring=pow(.5+.5*wave,10.);vec3 liquid=vec3(.02,.29,.49)+vec3(.045,.11,.13)*ring;float sheen=pow(max(0.,sin(p.x*.7+p.y*.5+sin(t*.45)*.10)),10.);liquid+=vec3(.035,.08,.10)*sheen;diffuseColor.rgb=liquid;"},lava:{sway:"vec2 wobble=vec2(sin(t*.4),cos(t*.33))*.065;float n=lf(p*.9+wobble);float heat=smoothstep(.25,.78,n);vec3 liquid=mix(vec3(.54,.055,.009),vec3(1.,.30,.018),heat);float ember=1.-smoothstep(.012,.055,abs(n-.54));liquid=mix(liquid,vec3(1.,.53,.045),ember*.42);diffuseColor.rgb=liquid;",breathe:"float n=lf(p*.9);float pulse=.5+.5*sin(t*.55);vec3 liquid=mix(vec3(.52,.045,.007),vec3(1.,.26,.012),smoothstep(.25,.8,n));float ember=1.-smoothstep(.01,.055,abs(n-.52));liquid=mix(liquid,vec3(1.,.57,.05),ember*(.32+pulse*.24));liquid+=vec3(.05,.018,.002)*pulse;diffuseColor.rgb=liquid;",bubbles:"float n=lf(p*.9);vec3 liquid=mix(vec3(.58,.06,.007),vec3(1.,.29,.012),smoothstep(.25,.78,n));float phase=fract(t*.105+.15);float r=length(vLiquidXY-uLiquidCenter-vec2(8,-5));float bubbleLife=smoothstep(.12,.3,phase)*(1.-smoothstep(.7,.95,phase));float bubble=(1.-smoothstep(.5,1.4,abs(r-(2.+phase*4.))))*bubbleLife;liquid+=vec3(.25,.12,.015)*bubble;float pulse=.02*sin(t*.5);liquid+=vec3(pulse,pulse*.3,0);diffuseColor.rgb=liquid;"}};var Wl=0,To=1,Xl=2;var wo=1,Nr=2,an=3,xn=0,Ee=1,He=2,Mn=0,qn=1,Ao=2,Co=3,Ro=4,ql=5,Ln=100,Yl=101,Zl=102,Jl=103,$l=104,Kl=200,Ql=201,jl=202,tc=203,lr=204,cr=205,ec=206,nc=207,ic=208,sc=209,rc=210,ac=211,oc=212,lc=213,cc=214,Fr=0,Or=1,Br=2,Yn=3,zr=4,kr=5,Vr=6,Hr=7,Io=0,hc=1,uc=2,Sn=0,dc=1,fc=2,pc=3,Gr=4,mc=5,gc=6,_c=7;var Po=300,ni=301,ii=302,Wr=303,Xr=304,Rs=306,bi=1e3,Pn=1001,hr=1002,Ve=1003,xc=1004;var Is=1005;var Je=1006,qr=1007;var On=1008;var je=1009,Lo=1010,Do=1011,Oi=1012,Yr=1013,Bn=1014,on=1015,Bi=1016,Zr=1017,Jr=1018,zi=1020,Uo=35902,No=35899,Fo=1021,Oo=1022,Ge=1023,Ei=1026,ki=1027,Bo=1028,$r=1029,zo=1030,Kr=1031;var Qr=1033,Ps=33776,Ls=33777,Ds=33778,Us=33779,jr=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,ya=37821,va=36492,Ma=36494,Sa=36495,ba=36283,Ea=36284,Ta=36285,wa=36286;var es=2300,ur=2301,or=2302,co=2400,ho=2401,uo=2402;var yc=3200,vc=3201;var ko=0,Mc=1,bn="",ge="srgb",Zn="srgb-linear",ns="linear",jt="srgb";var Xn=7680;var fo=519,Sc=512,bc=513,Ec=514,Vo=515,Tc=516,wc=517,Ac=518,Cc=519,po=35044;var Ho="300 es",Ze=2e3,is=2001;var yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,dr=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function yh(i,t){return(i%t+t)%t}function Oa(i,t,e){return(1-e)*i+e*t}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-o,u=c*f+l*m+h*g+d*_,C=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let P=Math.sqrt(S),I=Math.atan2(P,u*C);p=Math.sin(p*I)/P,o=Math.sin(o*I)/P}let v=o*C;if(c=c*p+f*v,l=l*p+m*v,h=h*p+g*v,d=d*p+_*v,p===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-o*m,t[e+2]=l*g+h*m+o*f-c*d,t[e+3]=h*g-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new q,xl=new vn,Vt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],C=s[1],S=s[4],v=s[7],P=s[2],I=s[5],L=s[8];return r[0]=a*_+o*C+c*P,r[3]=a*p+o*S+c*I,r[6]=a*u+o*v+c*L,r[1]=l*_+h*C+d*P,r[4]=l*p+h*S+d*I,r[7]=l*u+h*v+d*L,r[2]=f*_+m*C+g*P,r[5]=f*p+m*S+g*I,r[8]=f*u+m*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},za=new Vt;function Go(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){let i=ss("canvas");return i.style.display="block",i}var yl={};function Ti(i){i in yl||(yl[i]=!0,console.warn(i))}function Ic(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vh(){let i={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bn?ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ti("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ti("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zn]:{primaries:t,whitePoint:n,transfer:ns,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}}),i}var $t=vh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hi,fr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=ss("canvas")),hi.width=t.width,hi.height=t.height;let s=hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mh=0,wi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ka(s[a].image)):r.push(ka(s[a]))}else r=ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sh=0,Va=new q,Re=class i extends yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Je,a=On,o=Ge,c=je,l=i.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Vi(),this.name="",this.source=new wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Po;Re.DEFAULT_ANISOTROPY=1;var he=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,v=(m+1)/2,P=(u+1)/2,I=(h+f)/4,L=(d+_)/4,F=(g+p)/4;return S>v&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=I/n,r=L/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=I/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=F/r),this.set(n,s,r,e),this}let C=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(d-_)/C,this.z=(f-h)/C,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pr=class extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new wi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends pr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rs=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mr=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Vs.subVectors(this.max,Zi),ui.subVectors(t.a,Zi),di.subVectors(t.b,Zi),fi.subVectors(t.c,Zi),En.subVectors(di,ui),Tn.subVectors(fi,di),Vn.subVectors(ui,fi);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Vn.y,Vn.x,0];return!Ha(e,ui,di,fi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,ui,di,fi,Vs))?!1:(Hs.crossVectors(En,Tn),e=[Hs.x,Hs.y,Hs.z],Ha(e,ui,di,fi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hn=[new q,new q,new q,new q,new q,new q,new q,new q],Xe=new q,ks=new sn,ui=new q,di=new q,fi=new q,En=new q,Tn=new q,Vn=new q,Zi=new q,Vs=new q,Hs=new q,Hn=new q;function Ha(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);let o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var bh=new sn,Ji=new q,Ga=new q,Ai=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);let e=Ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Ga)),this.expandByPoint(Ji.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},un=new q,Wa=new q,Gs=new q,wn=new q,Xa=new q,Ws=new q,qa=new q,as=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wa.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Wa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=wn.dot(this.direction),c=-wn.dot(Gs),l=wn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wa).addScaledVector(Gs,f),m}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){Xa.subVectors(e,t),Ws.subVectors(n,t),qa.crossVectors(Xa,Ws);let a=this.direction.dot(qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let c=o*this.direction.dot(Ws.crossVectors(wn,Ws));if(c<0)return null;let l=o*this.direction.dot(Xa.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(qa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,_,p)}set(t,e,n,s,r,a,o,c,l,h,d,f,m,g,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eh,t,Th)}lookAt(t,e,n){let s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),An.crossVectors(n,De),An.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),An.crossVectors(n,De)),An.normalize(),Xs.crossVectors(De,An),s[0]=An.x,s[4]=Xs.x,s[8]=De.x,s[1]=An.y,s[5]=Xs.y,s[9]=De.y,s[2]=An.z,s[6]=Xs.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],C=n[3],S=n[7],v=n[11],P=n[15],I=s[0],L=s[4],F=s[8],E=s[12],b=s[1],O=s[5],G=s[9],j=s[13],tt=s[2],st=s[6],nt=s[10],at=s[14],V=s[3],X=s[7],et=s[11],it=s[15];return r[0]=a*I+o*b+c*tt+l*V,r[4]=a*L+o*O+c*st+l*X,r[8]=a*F+o*G+c*nt+l*et,r[12]=a*E+o*j+c*at+l*it,r[1]=h*I+d*b+f*tt+m*V,r[5]=h*L+d*O+f*st+m*X,r[9]=h*F+d*G+f*nt+m*et,r[13]=h*E+d*j+f*at+m*it,r[2]=g*I+_*b+p*tt+u*V,r[6]=g*L+_*O+p*st+u*X,r[10]=g*F+_*G+p*nt+u*et,r[14]=g*E+_*j+p*at+u*it,r[3]=C*I+S*b+v*tt+P*V,r[7]=C*L+S*O+v*st+P*X,r[11]=C*F+S*G+v*nt+P*et,r[15]=C*E+S*j+v*at+P*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+_*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],C=d*p*l-_*f*l+_*c*m-o*p*m-d*c*u+o*f*u,S=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,v=h*_*l-g*d*l+g*o*m-a*_*m-h*o*u+a*d*u,P=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,I=e*C+n*S+s*v+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=C*L,t[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*u-n*f*u)*L,t[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*u+n*c*u)*L,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*L,t[4]=S*L,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*L,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*u-e*c*u)*L,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*L,t[8]=v*L,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*L,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*u+e*o*u)*L,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*L,t[12]=P*L,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*p+e*d*p)*L,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*p-e*o*p)*L,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,C=c*l,S=c*h,v=c*d,P=n.x,I=n.y,L=n.z;return s[0]=(1-(_+u))*P,s[1]=(m+v)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(m-v)*I,s[5]=(1-(f+u))*I,s[6]=(p+C)*I,s[7]=0,s[8]=(g+S)*L,s[9]=(p-C)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=pi.set(s[0],s[1],s[2]).length(),a=pi.set(s[4],s[5],s[6]).length(),o=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let l=1/r,h=1/a,d=1/o;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Ze)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===is)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Ze)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===is)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pi=new q,qe=new ce,Eh=new q(0,0,0),Th=new q(1,1,1),An=new q,Xs=new q,De=new q,Sl=new ce,bl=new vn,$e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var Ci=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wh=0,El=new q,mi=new vn,dn=new ce,qs=new q,$i=new q,Ah=new q,Ch=new vn,Tl=new q(1,0,0),wl=new q(0,1,0),Al=new q(0,0,1),Cl={type:"added"},Rh={type:"removed"},gi={type:"childadded",child:null},Ya={type:"childremoved",child:null},ve=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new $e,n=new vn,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Vt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ci,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return El.copy(t).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt($i,qs,this.up):dn.lookAt(qs,$i,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(dn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rh),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new q(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new q,fn=new q,Za=new q,pn=new q,_i=new q,xi=new q,Rl=new q,Ja=new q,$a=new q,Ka=new q,Qa=new he,ja=new he,to=new he,In=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),fn.subVectors(n,e),Za.subVectors(t,e);let a=Ye.dot(Ye),o=Ye.dot(fn),c=Ye.dot(Za),l=fn.dot(fn),h=fn.dot(Za),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qa.setScalar(0),ja.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),to.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(to,r.z),a}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),fn.subVectors(t,e),Ye.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_i.subVectors(s,n),xi.subVectors(r,n),Ja.subVectors(t,n);let c=_i.dot(Ja),l=xi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);$a.subVectors(t,s);let h=_i.dot($a),d=xi.dot($a);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(_i,a);Ka.subVectors(t,r);let m=_i.dot(Ka),g=xi.dot(Ka);if(g>=0&&m<=g)return e.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(xi,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Rl.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Rl,o);let u=1/(p+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=yh(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=eo(a,r,t+1/3),this.g=eo(a,r,t),this.b=eo(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=Pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return $t.workingToColorSpace(xe.copy(this),t),Math.round(Yt(xe.r*255,0,255))*65536+Math.round(Yt(xe.g*255,0,255))*256+Math.round(Yt(xe.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(xe.copy(this),e);let n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=ge){$t.workingToColorSpace(xe.copy(this),t);let e=xe.r,n=xe.g,s=xe.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Ys);let n=Oa(Cn.h,Ys.h,e),s=Oa(Cn.s,Ys.s,e),r=Oa(Cn.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xe=new Jt;Jt.NAMES=Pc;var Ih=0,Dn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=qn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lr,this.blendDst=cr,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lr&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Jn=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new q,Zs=new ft,Ph=0,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ph++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}};var os=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ls=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lh=0,ke=new ce,no=new ve,yi=new q,Ue=new sn,Ki=new sn,me=new q,Ie=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Go(t)?ls:os)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Ue.min,Ki.min),Ue.expandByPoint(me),me.addVectors(Ue.max,Ki.max),Ue.expandByPoint(me)):(Ue.expandByPoint(Ki.min),Ue.expandByPoint(Ki.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)me.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(t,l),me.add(yi)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new q,c[F]=new q;let l=new q,h=new q,d=new q,f=new ft,m=new ft,g=new ft,_=new q,p=new q;function u(F,E,b){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(l),d.sub(l),m.sub(f),g.sub(f);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(O),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(O),o[F].add(_),o[E].add(_),o[b].add(_),c[F].add(p),c[E].add(p),c[b].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let F=0,E=C.length;F<E;++F){let b=C[F],O=b.start,G=b.count;for(let j=O,tt=O+G;j<tt;j+=3)u(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let S=new q,v=new q,P=new q,I=new q;function L(F){P.fromBufferAttribute(s,F),I.copy(P);let E=o[F];S.copy(E),S.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(I,E);let O=v.dot(c[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,O)}for(let F=0,E=C.length;F<E;++F){let b=C[F],O=b.start,G=b.count;for(let j=O,tt=O+G;j<tt;j+=3)L(t.getX(j+0)),L(t.getX(j+1)),L(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,h=new q,d=new q;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Ne(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Il=new ce,Gn=new as,Js=new Ai,Pl=new q,$s=new q,Ks=new q,Qs=new q,io=new q,js=new q,Ll=new q,tr=new q,be=class extends ve{constructor(t=new Ie,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(io.fromBufferAttribute(d,t),a?js.addScaledVector(io,h):js.addScaledVector(io.sub(e),h))}e.add(js)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(Js.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Js,Pl)===null||Gn.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Il.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],C=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=C,P=S;v<P;v+=3){let I=o.getX(v),L=o.getX(v+1),F=o.getX(v+2);s=er(this,u,t,n,l,h,d,I,L,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let C=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);s=er(this,a,t,n,l,h,d,C,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=a[p.materialIndex],C=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=C,P=S;v<P;v+=3){let I=v,L=v+1,F=v+2;s=er(this,u,t,n,l,h,d,I,L,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let C=p,S=p+1,v=p+2;s=er(this,a,t,n,l,h,d,C,S,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Dh(i,t,e,n,s,r,a,o){let c;if(t.side===Ee?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===xn,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tr);return l<e.near||l>e.far?null:{distance:l,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Ks),i.getVertexPosition(l,Qs);let h=Dh(i,t,e,n,$s,Ks,Qs,Ll);if(h){let d=new q;In.getBarycoord(Ll,$s,Ks,Qs,d),s&&(h.uv=In.getInterpolatedAttribute(s,o,c,l,d,new ft)),r&&(h.uv1=In.getInterpolatedAttribute(r,o,c,l,d,new ft)),a&&(h.normal=In.getInterpolatedAttribute(a,o,c,l,d,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new q,materialIndex:0};In.getNormal($s,Ks,Qs,f.normal),h.face=f,h.barycoord=d}return h}var Un=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(_,p,u,C,S,v,P,I,L,F,E){let b=v/L,O=P/F,G=v/2,j=P/2,tt=I/2,st=L+1,nt=F+1,at=0,V=0,X=new q;for(let et=0;et<nt;et++){let it=et*O-j;for(let _t=0;_t<st;_t++){let pt=_t*b-G;X[_]=pt*C,X[p]=it*S,X[u]=tt,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[u]=I>0?1:-1,h.push(X.x,X.y,X.z),d.push(_t/L),d.push(1-et/F),at+=1}}for(let et=0;et<F;et++)for(let it=0;it<L;it++){let _t=f+it+st*et,pt=f+it+st*(et+1),B=f+(it+1)+st*(et+1),D=f+(it+1)+st*et;c.push(_t,pt,D),c.push(pt,B,D),V+=6}o.addGroup(m,V,E),m+=V,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){let t={};for(let e=0;e<i.length;e++){let n=si(i[e]);for(let s in n)t[s]=n[s]}return t}function Uh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Lc={clone:si,merge:Me},Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=Uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},cs=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new q,Dl=new ft,Ul=new ft,Ae=class extends cs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ul),e.subVectors(Ul,Dl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,Mi=1,gr=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(vi,Mi,t,e);s.layers=this.layers,this.add(s);let r=new Ae(vi,Mi,t,e);r.layers=this.layers,this.add(r);let a=new Ae(vi,Mi,t,e);a.layers=this.layers,this.add(a);let o=new Ae(vi,Mi,t,e);o.layers=this.layers,this.add(o);let c=new Ae(vi,Mi,t,e);c.layers=this.layers,this.add(c);let l=new Ae(vi,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hs=class extends Re{constructor(t=[],e=ni,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Mn});r.uniforms.tEquirect.value=e;let a=new be(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Je),new gr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},gn=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Oh={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var us=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var so=new q,Bh=new q,zh=new Vt,en=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=so.subVectors(n,e).cross(Bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zh.getNormalMatrix(t),s=this.coplanarPoint(so).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Ai,kh=new ft(.5,.5),nr=new q,Ii=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],m=r[7],g=r[8],_=r[9],p=r[10],u=r[11],C=r[12],S=r[13],v=r[14],P=r[15];if(s[0].setComponents(l-a,m-h,u-g,P-C).normalize(),s[1].setComponents(l+a,m+h,u+g,P+C).normalize(),s[2].setComponents(l+o,m+d,u+_,P+S).normalize(),s[3].setComponents(l-o,m-d,u-_,P-S).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,m-f,u-p,P-v).normalize();else if(s[4].setComponents(l-c,m-f,u-p,P-v).normalize(),e===Ze)s[5].setComponents(l+c,m+f,u+p,P+v).normalize();else if(e===is)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){Wn.center.set(0,0,0);let e=kh.distanceTo(t.center);return Wn.radius=.7071067811865476+e,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pi=class extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ds=class extends Re{constructor(t,e,n=Bn,s,r,a,o=Ve,c=Ve,l,h=Ei,d=1){if(h!==Ei&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fs=class extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ps=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],g=0,_=[],p=n/2,u=0;C(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(m,2));function C(){let v=new q,P=new q,I=0,L=(e-t)/n;for(let F=0;F<=r;F++){let E=[],b=F/r,O=b*(e-t)+t;for(let G=0;G<=s;G++){let j=G/s,tt=j*c+o,st=Math.sin(tt),nt=Math.cos(tt);P.x=O*st,P.y=-b*n+p,P.z=O*nt,d.push(P.x,P.y,P.z),v.set(st,L,nt).normalize(),f.push(v.x,v.y,v.z),m.push(j,1-b),E.push(g++)}_.push(E)}for(let F=0;F<s;F++)for(let E=0;E<r;E++){let b=_[E][F],O=_[E+1][F],G=_[E+1][F+1],j=_[E][F+1];(t>0||E!==0)&&(h.push(b,O,j),I+=3),(e>0||E!==r-1)&&(h.push(O,G,j),I+=3)}l.addGroup(u,I,0),u+=I}function S(v){let P=g,I=new ft,L=new q,F=0,E=v===!0?t:e,b=v===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let O=g;for(let G=0;G<=s;G++){let tt=G/s*c+o,st=Math.cos(tt),nt=Math.sin(tt);L.x=E*nt,L.y=p*b,L.z=E*st,d.push(L.x,L.y,L.z),f.push(0,b,0),I.x=st*.5+.5,I.y=nt*.5*b+.5,m.push(I.x,I.y),g++}for(let G=0;G<s;G++){let j=P+G,tt=O+G;v===!0?h.push(tt,tt+1,j):h.push(tt+1,tt,j),F+=3}l.addGroup(u,F,v===!0?1:2),u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ft:new q);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new q,s=[],r=[],a=[],o=new q,c=new ce;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new q)}r[0]=new q,a[0]=new q;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Yt(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Li=class extends Fe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xr=class extends Li{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,m*=h,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ir=new q,ro=new Xo,ao=new Xo,oo=new Xo,yr=class extends Fe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ro.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,_,p),ao.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,_,p),oo.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),ao.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),oo.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(ro.calc(c),ao.calc(c),oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Vh(i,t){let e=1-i;return e*e*t}function Hh(i,t){return 2*(1-i)*i*t}function Gh(i,t){return i*i*t}function ji(i,t,e,n){return Vh(i,t)+Hh(i,e)+Gh(i,n)}function Wh(i,t){let e=1-i;return e*e*e*t}function Xh(i,t){let e=1-i;return 3*e*e*i*t}function qh(i,t){return 3*(1-i)*i*i*t}function Yh(i,t){return i*i*i*t}function ts(i,t,e,n,s){return Wh(i,t)+Xh(i,e)+qh(i,n)+Yh(i,s)}var ms=class extends Fe{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vr=class extends Fe{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y),ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gs=class extends Fe{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends Fe{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_s=class extends Fe{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ji(t,s.x,r.x,a.x),ji(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends Fe{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ji(t,s.x,r.x,a.x),ji(t,s.y,r.y,a.y),ji(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xs=class extends Fe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Nl(o,c.x,l.x,h.x,d.x),Nl(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},mo=Object.freeze({__proto__:null,ArcCurve:xr,CatmullRomCurve3:yr,CubicBezierCurve:ms,CubicBezierCurve3:vr,EllipseCurve:Li,LineCurve:gs,LineCurve3:Mr,QuadraticBezierCurve:_s,QuadraticBezierCurve3:Sr,SplineCurve:xs}),br=class extends Fe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mo[s.type]().fromJSON(s))}return this}},rn=class extends br{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gs(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _s(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ms(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Li(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ce=class extends rn{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new rn().fromJSON(s))}return this}};function Zh(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dc(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=jh(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let h=-1/0,d=-1/0;for(let f=e;f<s;f+=e){let m=i[f],g=i[f+1];m<o&&(o=m),g<c&&(c=g),m>h&&(h=m),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return ys(r,a,e,o,c,l,0),a}function Dc(i,t,e,n,s){let r;if(s===hu(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Fl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Fl(a/n|0,i[a],i[a+1],r);return r&&Di(r,r.next)&&(Ms(r),r=r.next),r}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Di(e,e.next)||le(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,s,r,a){if(!i)return;!a&&r&&su(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?$h(i,n,s,r):Jh(i)){t.push(c.i,i.i,l.i),Ms(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Kh($n(i),t),ys(i,t,e,n,s,r,2)):a===2&&Qh(i,t,e,n,s,r):ys($n(i),t,e,n,s,r,1);break}}}function Jh(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),f=Math.max(s,r,a),m=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=m&&Qi(s,o,r,c,a,l,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $h(i,t,e,n){let s=i.prev,r=i,a=i.next;if(le(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,f=a.y,m=Math.min(o,c,l),g=Math.min(h,d,f),_=Math.max(o,c,l),p=Math.max(h,d,f),u=go(m,g,t,e,n),C=go(_,p,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=u&&v&&v.z<=C;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Qi(o,h,c,d,l,f,S.x,S.y)&&le(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Qi(o,h,c,d,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Qi(o,h,c,d,l,f,S.x,S.y)&&le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=C;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&Qi(o,h,c,d,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kh(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Di(n,s)&&Nc(n,e,e.next,s)&&vs(n,s)&&vs(s,n)&&(t.push(n.i,e.i,s.i),Ms(e),Ms(e.next),e=i=s),e=e.next}while(e!==i);return $n(e)}function Qh(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ou(a,o)){let c=Fc(a,o);a=$n(a,a.next),c=$n(c,c.next),ys(a,t,e,n,s,r,0),ys(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jh(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Dc(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(au(l))}s.sort(tu);for(let r=0;r<s.length;r++)e=eu(s[r],e);return e}function tu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function eu(i,t){let e=nu(i,t);if(!e)return t;let n=Fc(e,i);return $n(n,n.next),$n(e,e.next)}function nu(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Di(i,e))return e;do{if(Di(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Uc(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);vs(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&iu(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function iu(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function su(i,t,e,n){let s=i;do s.z===0&&(s.z=go(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ru(s)}function ru(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function go(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function au(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qi(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Uc(i,t,e,n,s,r,a,o)}function ou(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lu(i,t)&&(vs(i,t)&&vs(t,i)&&cu(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Di(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Di(i,t){return i.x===t.x&&i.y===t.y}function Nc(i,t,e,n){let s=rr(le(i,t,e)),r=rr(le(i,t,n)),a=rr(le(e,n,i)),o=rr(le(e,n,t));return!!(s!==r&&a!==o||s===0&&sr(i,e,t)||r===0&&sr(i,n,t)||a===0&&sr(e,i,n)||o===0&&sr(e,t,n))}function sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rr(i){return i>0?1:i<0?-1:0}function lu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vs(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function cu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fc(i,t){let e=_o(i.i,i.x,i.y),n=_o(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fl(i,t,e,n){let s=_o(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _o(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hu(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var xo=class{static triangulate(t,e,n=2){return Zh(t,e,n)}},ye=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ol(t),Bl(n,t);let a=t.length;e.forEach(Ol);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Bl(n,e[c]);let o=xo.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ol(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ui=class i extends Ie{constructor(t=new Ce([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:uu,S,v=!1,P,I,L,F;u&&(S=u.getSpacedPoints(h),v=!0,f=!1,P=u.computeFrenetFrames(h,!1),I=new q,L=new q,F=new q),f||(p=0,m=0,g=0,_=0);let E=o.extractPoints(l),b=E.shape,O=E.holes;if(!ye.isClockWise(b)){b=b.reverse();for(let N=0,k=O.length;N<k;N++){let Y=O[N];ye.isClockWise(Y)&&(O[N]=Y.reverse())}}function j(N){let Y=10000000000000001e-36,Z=N[0];for(let U=1;U<=N.length;U++){let A=U%N.length,lt=N[A],Et=lt.x-Z.x,Ft=lt.y-Z.y,R=Et*Et+Ft*Ft,y=Math.max(Math.abs(lt.x),Math.abs(lt.y),Math.abs(Z.x),Math.abs(Z.y)),$=Y*y*y;if(R<=$){N.splice(A,1),U--;continue}Z=lt}}j(b),O.forEach(j);let tt=O.length,st=b;for(let N=0;N<tt;N++){let k=O[N];b=b.concat(k)}function nt(N,k,Y){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(k,Y)}let at=b.length;function V(N,k,Y){let Z,U,A,lt=N.x-k.x,Et=N.y-k.y,Ft=Y.x-N.x,R=Y.y-N.y,y=lt*lt+Et*Et,$=lt*R-Et*Ft;if(Math.abs($)>Number.EPSILON){let ct=Math.sqrt(y),gt=Math.sqrt(Ft*Ft+R*R),ht=k.x-Et/ct,It=k.y+lt/ct,Mt=Y.x-R/gt,Pt=Y.y+Ft/gt,Lt=((Mt-ht)*R-(Pt-It)*Ft)/(lt*R-Et*Ft);Z=ht+lt*Lt-N.x,U=It+Et*Lt-N.y;let xt=Z*Z+U*U;if(xt<=2)return new ft(Z,U);A=Math.sqrt(xt/2)}else{let ct=!1;lt>Number.EPSILON?Ft>Number.EPSILON&&(ct=!0):lt<-Number.EPSILON?Ft<-Number.EPSILON&&(ct=!0):Math.sign(Et)===Math.sign(R)&&(ct=!0),ct?(Z=-Et,U=lt,A=Math.sqrt(y)):(Z=lt,U=Et,A=Math.sqrt(y/2))}return new ft(Z/A,U/A)}let X=[];for(let N=0,k=st.length,Y=k-1,Z=N+1;N<k;N++,Y++,Z++)Y===k&&(Y=0),Z===k&&(Z=0),X[N]=V(st[N],st[Y],st[Z]);let et=[],it,_t=X.concat();for(let N=0,k=tt;N<k;N++){let Y=O[N];it=[];for(let Z=0,U=Y.length,A=U-1,lt=Z+1;Z<U;Z++,A++,lt++)A===U&&(A=0),lt===U&&(lt=0),it[Z]=V(Y[Z],Y[A],Y[lt]);et.push(it),_t=_t.concat(it)}let pt;if(p===0)pt=ye.triangulateShape(st,O);else{let N=[],k=[];for(let Y=0;Y<p;Y++){let Z=Y/p,U=m*Math.cos(Z*Math.PI/2),A=g*Math.sin(Z*Math.PI/2)+_;for(let lt=0,Et=st.length;lt<Et;lt++){let Ft=nt(st[lt],X[lt],A);Q(Ft.x,Ft.y,-U),Z===0&&N.push(Ft)}for(let lt=0,Et=tt;lt<Et;lt++){let Ft=O[lt];it=et[lt];let R=[];for(let y=0,$=Ft.length;y<$;y++){let ct=nt(Ft[y],it[y],A);Q(ct.x,ct.y,-U),Z===0&&R.push(ct)}Z===0&&k.push(R)}}pt=ye.triangulateShape(N,k)}let B=pt.length,D=g+_;for(let N=0;N<at;N++){let k=f?nt(b[N],_t[N],D):b[N];v?(L.copy(P.normals[0]).multiplyScalar(k.x),I.copy(P.binormals[0]).multiplyScalar(k.y),F.copy(S[0]).add(L).add(I),Q(F.x,F.y,F.z)):Q(k.x,k.y,0)}for(let N=1;N<=h;N++)for(let k=0;k<at;k++){let Y=f?nt(b[k],_t[k],D):b[k];v?(L.copy(P.normals[N]).multiplyScalar(Y.x),I.copy(P.binormals[N]).multiplyScalar(Y.y),F.copy(S[N]).add(L).add(I),Q(F.x,F.y,F.z)):Q(Y.x,Y.y,d/h*N)}for(let N=p-1;N>=0;N--){let k=N/p,Y=m*Math.cos(k*Math.PI/2),Z=g*Math.sin(k*Math.PI/2)+_;for(let U=0,A=st.length;U<A;U++){let lt=nt(st[U],X[U],Z);Q(lt.x,lt.y,d+Y)}for(let U=0,A=O.length;U<A;U++){let lt=O[U];it=et[U];for(let Et=0,Ft=lt.length;Et<Ft;Et++){let R=nt(lt[Et],it[Et],Z);v?Q(R.x,R.y+S[h-1].y,S[h-1].x+Y):Q(R.x,R.y,d+Y)}}}M(),x();function M(){let N=s.length/3;if(f){let k=0,Y=at*k;for(let Z=0;Z<B;Z++){let U=pt[Z];z(U[2]+Y,U[1]+Y,U[0]+Y)}k=h+p*2,Y=at*k;for(let Z=0;Z<B;Z++){let U=pt[Z];z(U[0]+Y,U[1]+Y,U[2]+Y)}}else{for(let k=0;k<B;k++){let Y=pt[k];z(Y[2],Y[1],Y[0])}for(let k=0;k<B;k++){let Y=pt[k];z(Y[0]+at*h,Y[1]+at*h,Y[2]+at*h)}}n.addGroup(N,s.length/3-N,0)}function x(){let N=s.length/3,k=0;H(st,k),k+=st.length;for(let Y=0,Z=O.length;Y<Z;Y++){let U=O[Y];H(U,k),k+=U.length}n.addGroup(N,s.length/3-N,1)}function H(N,k){let Y=N.length;for(;--Y>=0;){let Z=Y,U=Y-1;U<0&&(U=N.length-1);for(let A=0,lt=h+p*2;A<lt;A++){let Et=at*A,Ft=at*(A+1),R=k+Z+Et,y=k+U+Et,$=k+U+Ft,ct=k+Z+Ft;dt(R,y,$,ct)}}}function Q(N,k,Y){c.push(N),c.push(k),c.push(Y)}function z(N,k,Y){ut(N),ut(k),ut(Y);let Z=s.length/3,U=C.generateTopUV(n,s,Z-3,Z-2,Z-1);T(U[0]),T(U[1]),T(U[2])}function dt(N,k,Y,Z){ut(N),ut(k),ut(Z),ut(k),ut(Y),ut(Z);let U=s.length/3,A=C.generateSideWallUV(n,s,U-6,U-3,U-2,U-1);T(A[0]),T(A[1]),T(A[3]),T(A[1]),T(A[2]),T(A[3])}function ut(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function T(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return du(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new mo[s.type]().fromJSON(s)),new i(n,t.options)}},uu={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ft(r,a),new ft(o,c),new ft(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ft(a,1-c),new ft(l,1-d),new ft(f,1-g),new ft(_,1-u)]:[new ft(o,1-c),new ft(h,1-d),new ft(m,1-g),new ft(p,1-u)]}};function du(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Kn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let C=u*f-a;for(let S=0;S<l;S++){let v=S*d-r;g.push(v,-C,0),_.push(0,0,1),p.push(S/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let C=0;C<o;C++){let S=C+l*u,v=C+l*(u+1),P=C+1+l*(u+1),I=C+1+l*u;m.push(S,v,I),m.push(v,P,I)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ss=class i extends Ie{constructor(t=new Ce([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function l(h){let d=s.length/3,f=h.extractPoints(e),m=f.shape,g=f.holes;ye.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,u=g.length;p<u;p++){let C=g[p];ye.isClockWise(C)===!0&&(g[p]=C.reverse())}let _=ye.triangulateShape(m,g);for(let p=0,u=g.length;p<u;p++){let C=g[p];m=m.concat(C)}for(let p=0,u=m.length;p<u;p++){let C=m[p];s.push(C.x,C.y,0),r.push(0,0,1),a.push(C.x,C.y)}for(let p=0,u=_.length;p<u;p++){let C=_[p],S=C[0]+d,v=C[1]+d,P=C[2]+d;n.push(S,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fu(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function fu(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ni=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new q,f=new q,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){let C=[],S=u/n,v=0;u===0&&a===0?v=.5/e:u===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let I=P/e;d.x=-t*Math.cos(s+I*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+I*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(I+v,1-S),C.push(l++)}h.push(C)}for(let u=0;u<n;u++)for(let C=0;C<e;C++){let S=h[u][C+1],v=h[u][C],P=h[u+1][C],I=h[u+1][C+1];(u!==0||a>0)&&m.push(S,v,I),(u!==n-1||c<Math.PI)&&m.push(v,P,I)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qn=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Er=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tr=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wr=class extends jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:co,endingEnd:co}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ho:r=t,o=2*e-n;break;case uo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ho:a=t,c=2*n-e;break;case uo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,C=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-m)*p+(1.5+m)*_+.5*g,v=m*p-m*_;for(let P=0;P!==o;++P)r[P]=u*a[h+P]+C*a[l+P]+S*a[c+P]+v*a[d+P];return r}},Ar=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},Cr=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Cr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ar(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case es:e=this.InterpolantFactoryMethodDiscrete;break;case ur:e=this.InterpolantFactoryMethodLinear;break;case or:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return or}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&pu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===or,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Oe.prototype.ValueTypeName="";Oe.prototype.TimeBufferType=Float32Array;Oe.prototype.ValueBufferType=Float32Array;Oe.prototype.DefaultInterpolation=ur;var Nn=class extends Oe{constructor(t,e,n){super(t,e,n)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=es;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};Rr.prototype.ValueTypeName="color";var Ir=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};Ir.prototype.ValueTypeName="number";var Pr=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},bs=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pr(this.times,this.values,this.getValueSize(),t)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends Oe{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=es;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};Lr.prototype.ValueTypeName="vector";var yo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Dr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Oc=new Dr,ti=class{constructor(t){this.manager=t!==void 0?t:Oc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var mn={},vo=class extends Error{constructor(t,e){super(t),this.response=e}},Es=class extends ti{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=yo.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(mn[t]!==void 0){mn[t].push({onLoad:e,onProgress:n,onError:s});return}mn[t]=[],mn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=mn[t],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0,_=0,p=new ReadableStream({start(u){C();function C(){d.read().then(({done:S,value:v})=>{if(S)u.close();else{_+=v.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let I=0,L=h.length;I<L;I++){let F=h[I];F.onProgress&&F.onProgress(P)}u.enqueue(v),C()}},S=>{u.error(S)})}}});return new Response(p)}else throw new vo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{yo.add(`file:${t}`,l);let h=mn[t];delete mn[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=mn[t];if(h===void 0)throw this.manager.itemError(t),l;delete mn[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ws=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lo=new ce,zl=new q,kl=new q,Mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ei=class extends cs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},So=class extends Mo{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new So}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ur=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var qo="\\[\\]\\.:\\/",mu=new RegExp("["+qo+"]","g"),Yo="[^"+qo+"]",gu="[^"+qo.replace("\\.","")+"]",_u=/((?:WC+[\/:])*)/.source.replace("WC",Yo),xu=/(WCOD+)?/.source.replace("WCOD",gu),yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo),vu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo),Mu=new RegExp("^"+_u+xu+yu+vu+"$"),Su=["material","materials","bones","map"],bo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mu,"")}static parseTrackName(t){let e=Mu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Su.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=bo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ng=new Float32Array(1);var Vl=new ce,As=class{constructor(t,e,n=0,s=1/0){this.ray=new as(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ci,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(t,e=!0,n=[]){return Eo(t,this,n,e),n.sort(Hl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Eo(t[s],this,n,e);return n.sort(Hl),n}};function Hl(i,t){return i.distance-t.distance}function Eo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Eo(r[a],t,e,!0)}}var Gl=new ft,Cs=class{constructor(t=new ft(1/0,1/0),e=new ft(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Qe=class{constructor(){this.type="ShapePath",this.color=new Jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new rn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){let C=[];for(let S=0,v=u.length;S<v;S++){let P=u[S],I=new Ce;I.curves=P.curves,C.push(I)}return C}function n(u,C){let S=C.length,v=!1;for(let P=S-1,I=0;I<S;P=I++){let L=C[P],F=C[I],E=F.x-L.x,b=F.y-L.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(L=C[I],E=-E,F=C[P],b=-b),u.y<L.y||u.y>F.y)continue;if(u.y===L.y){if(u.x===L.x)return!0}else{let O=b*(u.x-L.x)-E*(u.y-L.y);if(O===0)return!0;if(O<0)continue;v=!v}}else{if(u.y!==L.y)continue;if(F.x<=u.x&&u.x<=L.x||L.x<=u.x&&u.x<=F.x)return!0}}return v}let s=ye.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Ce,c.curves=o.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;let d=[],f=[],m=[],g=0,_;f[g]=void 0,m[g]=[];for(let u=0,C=r.length;u<C;u++)o=r[u],_=o.getPoints(),a=s(_),a=t?!a:a,a?(!h&&f[g]&&g++,f[g]={s:new Ce,p:_},f[g].s.curves=o.curves,h&&g++,m[g]=[]):m[g].push({h:o,p:_[0]});if(!f[0])return e(r);if(f.length>1){let u=!1,C=0;for(let S=0,v=f.length;S<v;S++)d[S]=[];for(let S=0,v=f.length;S<v;S++){let P=m[S];for(let I=0;I<P.length;I++){let L=P[I],F=!0;for(let E=0;E<f.length;E++)n(L.p,f[E].p)&&(S!==E&&C++,F?(F=!1,d[E].push(L)):u=!0);F&&d[S].push(L)}}C>0&&u===!1&&(m=d)}let p;for(let u=0,C=f.length;u<C;u++){c=f[u].s,l.push(c),p=m[u];for(let S=0,v=p.length;S<v;S++)c.holes.push(p[S].h)}return l}};function Zo(i,t,e,n){let s=bu(n);switch(e){case Fo:return i*t;case Bo:return i*t/s.components*s.byteLength;case $r:return i*t/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case Kr:return i*t*2/s.components*s.byteLength;case Oo:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Qr:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(i,16)*Math.max(t,8)/4;case jr:case ea:return Math.max(i,8)*Math.max(t,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case va:case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ba:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bu(i){switch(i){case je:case Lo:return{byteLength:1,components:1};case Oi:case Do:case Bi:return{byteLength:2,components:1};case Zr:case Jr:return{byteLength:2,components:4};case Bn:case Yr:case on:return{byteLength:4,components:1};case Uo:case No:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function oh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ju=`#define PI 3.141592653589793
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
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
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
#endif`,fd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
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
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
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
#endif`,Ed=`struct PhysicalMaterial {
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
}`,Td=`
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
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
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Uf=`#define DISTANCE
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
}`,Nf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Gf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define PHONG
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
}`,$f=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,jf=`#define TOON
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
}`,tp=`uniform float size;
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:wu,alphahash_pars_fragment:Au,alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Iu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:Zu,common:Ju,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Qu,displacementmap_vertex:ju,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:dd,gradientmap_pars_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:yd,lights_toon_pars_fragment:vd,lights_phong_fragment:Md,lights_phong_pars_fragment:Sd,lights_physical_fragment:bd,lights_physical_pars_fragment:Ed,lights_fragment_begin:Td,lights_fragment_maps:wd,lights_fragment_end:Ad,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Dd,map_particle_fragment:Ud,map_particle_pars_fragment:Nd,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Bd,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Hd,normal_fragment_begin:Gd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Qd,opaque_fragment:jd,packing:tf,premultiplied_alpha_fragment:ef,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:yf,transmission_fragment:vf,transmission_pars_fragment:Mf,uv_pars_fragment:Sf,uv_pars_vertex:bf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:wf,background_frag:Af,backgroundCube_vert:Cf,backgroundCube_frag:Rf,cube_vert:If,cube_frag:Pf,depth_vert:Lf,depth_frag:Df,distanceRGBA_vert:Uf,distanceRGBA_frag:Nf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Vf,meshlambert_vert:Hf,meshlambert_frag:Gf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:$f,meshphysical_frag:Kf,meshtoon_vert:Qf,meshtoon_frag:jf,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ln={basic:{uniforms:Me([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Me([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Me([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Me([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Me([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Me([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Me([Tt.points,Tt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Me([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Me([Tt.common,Tt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Me([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Me([Tt.sprite,Tt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Me([Tt.common,Tt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Me([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ln.physical={uniforms:Me([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Aa={r:0,b:0,g:0},ri=new $e,ap=new ce;function op(i,t,e,n,s,r,a){let o=new Jt(0),c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1,P=g(S);P===null?u(o,c):P&&P.isColor&&(u(P,1),v=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,v){let P=g(v);P&&(P.isCubeTexture||P.mapping===Rs)?(h===void 0&&(h=new be(new Un(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:si(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(v.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(ri)),h.material.toneMapped=$t.getTransfer(P.colorSpace)!==jt,(d!==P||f!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new be(new Kn(2,2),new Ke({name:"BackgroundMaterial",uniforms:si(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$t.getTransfer(P.colorSpace)!==jt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,v){S.getRGB(Aa,Wo(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,v,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),c=v,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:_,addToRenderList:p,dispose:C}}function lp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,O,G,j,tt){let st=!1,nt=d(j,G,O);r!==nt&&(r=nt,l(r.object)),st=m(b,j,G,tt),st&&g(b,j,G,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,v(b,O,G,j),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,O,G){let j=G.wireframe===!0,tt=n[b.id];tt===void 0&&(tt={},n[b.id]=tt);let st=tt[O.id];st===void 0&&(st={},tt[O.id]=st);let nt=st[j];return nt===void 0&&(nt=f(c()),st[j]=nt),nt}function f(b){let O=[],G=[],j=[];for(let tt=0;tt<e;tt++)O[tt]=0,G[tt]=0,j[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:j,object:b,attributes:{},index:null}}function m(b,O,G,j){let tt=r.attributes,st=O.attributes,nt=0,at=G.getAttributes();for(let V in at)if(at[V].location>=0){let et=tt[V],it=st[V];if(it===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;nt++}return r.attributesNum!==nt||r.index!==j}function g(b,O,G,j){let tt={},st=O.attributes,nt=0,at=G.getAttributes();for(let V in at)if(at[V].location>=0){let et=st[V];et===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));let it={};it.attribute=et,et&&et.data&&(it.data=et.data),tt[V]=it,nt++}r.attributes=tt,r.attributesNum=nt,r.index=j}function _(){let b=r.newAttributes;for(let O=0,G=b.length;O<G;O++)b[O]=0}function p(b){u(b,0)}function u(b,O){let G=r.newAttributes,j=r.enabledAttributes,tt=r.attributeDivisors;G[b]=1,j[b]===0&&(i.enableVertexAttribArray(b),j[b]=1),tt[b]!==O&&(i.vertexAttribDivisor(b,O),tt[b]=O)}function C(){let b=r.newAttributes,O=r.enabledAttributes;for(let G=0,j=O.length;G<j;G++)O[G]!==b[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function S(b,O,G,j,tt,st,nt){nt===!0?i.vertexAttribIPointer(b,O,G,tt,st):i.vertexAttribPointer(b,O,G,j,tt,st)}function v(b,O,G,j){_();let tt=j.attributes,st=G.getAttributes(),nt=O.defaultAttributeValues;for(let at in st){let V=st[at];if(V.location>=0){let X=tt[at];if(X===void 0&&(at==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),at==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){let et=X.normalized,it=X.itemSize,_t=t.get(X);if(_t===void 0)continue;let pt=_t.buffer,B=_t.type,D=_t.bytesPerElement,M=B===i.INT||B===i.UNSIGNED_INT||X.gpuType===Yr;if(X.isInterleavedBufferAttribute){let x=X.data,H=x.stride,Q=X.offset;if(x.isInstancedInterleavedBuffer){for(let z=0;z<V.locationSize;z++)u(V.location+z,x.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=x.meshPerAttribute*x.count)}else for(let z=0;z<V.locationSize;z++)p(V.location+z);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let z=0;z<V.locationSize;z++)S(V.location+z,it/V.locationSize,B,et,H*D,(Q+it/V.locationSize*z)*D,M)}else{if(X.isInstancedBufferAttribute){for(let x=0;x<V.locationSize;x++)u(V.location+x,X.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let x=0;x<V.locationSize;x++)p(V.location+x);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let x=0;x<V.locationSize;x++)S(V.location+x,it/V.locationSize,B,et,it*D,it/V.locationSize*x*D,M)}}else if(nt!==void 0){let et=nt[at];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}C()}function P(){F();for(let b in n){let O=n[b];for(let G in O){let j=O[G];for(let tt in j)h(j[tt].object),delete j[tt];delete O[G]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;let O=n[b.id];for(let G in O){let j=O[G];for(let tt in j)h(j[tt].object),delete j[tt];delete O[G]}delete n[b.id]}function L(b){for(let O in n){let G=n[O];if(G[b.id]===void 0)continue;let j=G[b.id];for(let tt in j)h(j[tt].object),delete j[tt];delete G[b.id]}}function F(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:p,disableUnusedAttributes:C}}function cp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Ge&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let F=L===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==je&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==on&&!F)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:C,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:I}}function up(i){let t=this,e=null,n=0,s=!1,r=!1,a=new en,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let C=r?0:n,S=C*4,v=u.clippingState||null;c.value=v,v=h(g,f,S,m);for(let P=0;P!==S;++P)v[P]=e[P];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let u=m+_*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,v=m;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(C,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function dp(i){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=ni:o===Xr&&(a.mapping=ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wr||o===Xr)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new _r(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gi=4,Bc=[.125,.215,.35,.446,.526,.582],li=20,Jo=new ei,zc=new Jt,$o=null,Ko=0,Qo=0,jo=!1,oi=(1+Math.sqrt(5))/2,Hi=1/oi,kc=[new q(-oi,Hi,0),new q(oi,Hi,0),new q(-Hi,0,oi),new q(Hi,0,oi),new q(0,oi,-Hi),new q(0,oi,Hi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],fp=new q,Ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=fp}=r;$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Ko,Qo),this._renderer.xr.enabled=jo,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Bi,format:Ge,colorSpace:Zn,depthBuffer:!1},s=Vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return s}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,n,s,r){let c=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(zc),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new Jn({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),p=new be(new Un,_),u=!1,C=t.background;C?C.isColor&&(_.color.copy(C),t.background=null,u=!0):(_.color.copy(zc),u=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let P=this._cubeSize;Ca(s,v*P,S>2?P:0,P,P),d.setRenderTarget(s),u&&d.render(p,c),d.render(t,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ni||t.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ca(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kc[(s-r-1)%kc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new be(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);let u=[],C=0;for(let L=0;L<li;++L){let F=L/_,E=Math.exp(-F*F/2);u.push(E),L===0?C+=E:L<p&&(C+=2*E)}for(let L=0;L<u.length;L++)u[L]=u[L]/C;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let v=this._sizeLods[s],P=3*v*(s>S-Gi?s-S+Gi:0),I=4*(this._cubeSize-v);Ca(e,P,I,3*v,2*v),c.setRenderTarget(e),c.render(d,Jo)}};function pp(i){let t=[],e=[],n=[],s=i,r=i-Gi+1+Bc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Gi?c=Bc[a-i+Gi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,C=new Float32Array(_*g*m),S=new Float32Array(p*g*m),v=new Float32Array(u*g*m);for(let I=0;I<m;I++){let L=I%3*2/3-1,F=I>2?0:-1,E=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];C.set(E,_*g*I),S.set(f,p*g*I);let b=[I,I,I,I,I,I];v.set(b,u*g*I)}let P=new Ie;P.setAttribute("position",new Ne(C,_)),P.setAttribute("uv",new Ne(S,p)),P.setAttribute("faceIndex",new Ne(v,u)),t.push(P),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vc(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mp(i,t,e){let n=new Float32Array(li),s=new q(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function gp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Wr||c===Xr,h=c===ni||c===ii;if(l||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ia(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Ia(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _p(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ti("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xp(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER)}function l(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let C=m.array;_=m.version;for(let S=0,v=C.length;S<v;S+=3){let P=C[S+0],I=C[S+1],L=C[S+2];f.push(P,I,I,L,L,P)}}else if(g!==void 0){let C=g.array;_=g.version;for(let S=0,v=C.length/3-1;S<v;S+=3){let P=S+0,I=S+1,L=S+2;f.push(P,I,I,L,L,P)}}else return;let p=new(Go(f)?ls:os)(f,1);p.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function yp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let u=0;for(let C=0;C<g;C++)u+=m[C]*_[C];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function vp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mp(i,t,e){let n=new WeakMap,s=new he;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let I=new Float32Array(v*P*4*d),L=new rs(I,v,P,d);L.type=on,L.needsUpdate=!0;let F=S*4;for(let b=0;b<d;b++){let O=p[b],G=u[b],j=C[b],tt=v*P*4*b;for(let st=0;st<O.count;st++){let nt=st*F;m===!0&&(s.fromBufferAttribute(O,st),I[tt+nt+0]=s.x,I[tt+nt+1]=s.y,I[tt+nt+2]=s.z,I[tt+nt+3]=0),g===!0&&(s.fromBufferAttribute(G,st),I[tt+nt+4]=s.x,I[tt+nt+5]=s.y,I[tt+nt+6]=s.z,I[tt+nt+7]=0),_===!0&&(s.fromBufferAttribute(j,st),I[tt+nt+8]=s.x,I[tt+nt+9]=s.y,I[tt+nt+10]=s.z,I[tt+nt+11]=j.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new ft(v,P)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var lh=new Re,Wc=new ds(1,1),ch=new rs,hh=new mr,uh=new hs,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function Ap(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),pe(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),pe(e,n)}}function Rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),pe(e,n)}}function Ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wc.compareFunction=Vo,r=Wc):r=lh,e.setTexture2D(t||r,s)}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uh,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ch,s)}function Hp(i){switch(i){case 5126:return bp;case 35664:return Ep;case 35665:return Tp;case 35666:return wp;case 35674:return Ap;case 35675:return Cp;case 35676:return Rp;case 5124:case 35670:return Ip;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Wp(i,t){let e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Xp(i,t){let e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function qp(i,t){let e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Yp(i,t){let e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zp(i,t){let e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jp(i,t){let e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $p(i,t){i.uniform1iv(this.addr,t)}function Kp(i,t){i.uniform2iv(this.addr,t)}function Qp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function tm(i,t){i.uniform1uiv(this.addr,t)}function em(i,t){i.uniform2uiv(this.addr,t)}function nm(i,t){i.uniform3uiv(this.addr,t)}function im(i,t){i.uniform4uiv(this.addr,t)}function sm(i,t,e){let n=this.cache,s=t.length,r=La(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lh,r[a])}function rm(i,t,e){let n=this.cache,s=t.length,r=La(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function am(i,t,e){let n=this.cache,s=t.length,r=La(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uh,r[a])}function om(i,t,e){let n=this.cache,s=t.length,r=La(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ch,r[a])}function lm(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function cm(i,t,e){let n=i.name,s=n.length;for(tl.lastIndex=0;;){let r=tl.exec(n),a=tl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$c(e,l===void 0?new el(o,i,t):new nl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new il(o),$c(e,d)),e=d}}}var Wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hm=37297,um=0;function dm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qc=new Vt;function fm(i){$t._getMatrix(Qc,$t.workingColorSpace,i);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case ns:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(i.getShaderSource(t),o)}else return r}function pm(i,t){let e=fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,t){let e;switch(t){case dc:e="Linear";break;case fc:e="Reinhard";break;case pc:e="Cineon";break;case Gr:e="ACESFilmic";break;case gc:e="AgX";break;case _c:e="Neutral";break;case mc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ra=new q;function gm(){$t.getLuminanceCoefficients(Ra);let i=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function xm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(vm,Sm)}var Mm=new Map;function Sm(i,t){let e=qt[t];if(e===void 0){let n=Mm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(bm,Em)}function Em(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Io:t="ENVMAP_BLENDING_MULTIPLY";break;case hc:t="ENVMAP_BLENDING_MIX";break;case uc:t="ENVMAP_BLENDING_ADD";break}return t}function Rm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Tm(e),l=wm(e),h=Am(e),d=Cm(e),f=Rm(e),m=_m(e),g=xm(r),_=s.createProgram(),p,u,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),u.length>0&&(u+=`
`)):(p=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),u=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=sl(a),a=th(a,e),a=eh(a,e),o=sl(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=C+p+a,v=C+u+o,P=Kc(s,s.VERTEX_SHADER,S),I=Kc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,I),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(O){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_)||"",j=s.getShaderInfoLog(P)||"",tt=s.getShaderInfoLog(I)||"",st=G.trim(),nt=j.trim(),at=tt.trim(),V=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,I);else{let et=jc(s,P,"vertex"),it=jc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+st+`
`+et+`
`+it)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||at==="")&&(X=!1);X&&(O.diagnostics={runnable:V,programLog:st,vertexShader:{log:nt,prefix:p},fragmentShader:{log:at,prefix:u}})}s.deleteShader(P),s.deleteShader(I),F=new Wi(s,_),E=ym(s,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,hm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=um++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=I,this}var Pm=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new al(t),e.set(t,n)),n}},al=class{constructor(t){this.id=Pm++,this.code=t,this.usedTimes=0}};function Lm(i,t,e,n,s,r,a){let o=new Ci,c=new rl,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,b,O,G,j){let tt=G.fog,st=j.geometry,nt=E.isMeshStandardMaterial?G.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||nt),V=at&&at.mapping===Rs?at.image.height:null,X=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let et=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,it=et!==void 0?et.length:0,_t=0;st.morphAttributes.position!==void 0&&(_t=1),st.morphAttributes.normal!==void 0&&(_t=2),st.morphAttributes.color!==void 0&&(_t=3);let pt,B,D,M;if(X){let Qt=ln[X];pt=Qt.vertexShader,B=Qt.fragmentShader}else pt=E.vertexShader,B=E.fragmentShader,c.update(E),D=c.getVertexShaderID(E),M=c.getFragmentShaderID(E);let x=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),Q=j.isInstancedMesh===!0,z=j.isBatchedMesh===!0,dt=!!E.map,ut=!!E.matcap,T=!!at,N=!!E.aoMap,k=!!E.lightMap,Y=!!E.bumpMap,Z=!!E.normalMap,U=!!E.displacementMap,A=!!E.emissiveMap,lt=!!E.metalnessMap,Et=!!E.roughnessMap,Ft=E.anisotropy>0,R=E.clearcoat>0,y=E.dispersion>0,$=E.iridescence>0,ct=E.sheen>0,gt=E.transmission>0,ht=Ft&&!!E.anisotropyMap,It=R&&!!E.clearcoatMap,Mt=R&&!!E.clearcoatNormalMap,Pt=R&&!!E.clearcoatRoughnessMap,Lt=$&&!!E.iridescenceMap,xt=$&&!!E.iridescenceThicknessMap,wt=ct&&!!E.sheenColorMap,Ht=ct&&!!E.sheenRoughnessMap,Ot=!!E.specularMap,At=!!E.specularColorMap,Xt=!!E.specularIntensityMap,W=gt&&!!E.transmissionMap,St=gt&&!!E.thicknessMap,bt=!!E.gradientMap,Dt=!!E.alphaMap,yt=E.alphaTest>0,mt=!!E.alphaHash,Nt=!!E.extensions,Wt=Sn;E.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let ne={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:pt,fragmentShader:B,defines:E.defines,customVertexShaderID:D,customFragmentShaderID:M,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:z,batchingColor:z&&j._colorsTexture!==null,instancing:Q,instancingColor:Q&&j.instanceColor!==null,instancingMorph:Q&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:x===null?i.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Zn,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:ut,envMap:T,envMapMode:T&&at.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:k,bumpMap:Y,normalMap:Z,displacementMap:f&&U,emissiveMap:A,normalMapObjectSpace:Z&&E.normalMapType===Mc,normalMapTangentSpace:Z&&E.normalMapType===ko,metalnessMap:lt,roughnessMap:Et,anisotropy:Ft,anisotropyMap:ht,clearcoat:R,clearcoatMap:It,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Pt,dispersion:y,iridescence:$,iridescenceMap:Lt,iridescenceThicknessMap:xt,sheen:ct,sheenColorMap:wt,sheenRoughnessMap:Ht,specularMap:Ot,specularColorMap:At,specularIntensityMap:Xt,transmission:gt,transmissionMap:W,thicknessMap:St,gradientMap:bt,opaque:E.transparent===!1&&E.blending===qn&&E.alphaToCoverage===!1,alphaMap:Dt,alphaTest:yt,alphaHash:mt,combine:E.combine,mapUv:dt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:k&&_(E.lightMap.channel),bumpMapUv:Y&&_(E.bumpMap.channel),normalMapUv:Z&&_(E.normalMap.channel),displacementMapUv:U&&_(E.displacementMap.channel),emissiveMapUv:A&&_(E.emissiveMap.channel),metalnessMapUv:lt&&_(E.metalnessMap.channel),roughnessMapUv:Et&&_(E.roughnessMap.channel),anisotropyMapUv:ht&&_(E.anisotropyMap.channel),clearcoatMapUv:It&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(E.sheenRoughnessMap.channel),specularMapUv:Ot&&_(E.specularMap.channel),specularColorMapUv:At&&_(E.specularColorMap.channel),specularIntensityMapUv:Xt&&_(E.specularIntensityMap.channel),transmissionMapUv:W&&_(E.transmissionMap.channel),thicknessMapUv:St&&_(E.thicknessMap.channel),alphaMapUv:Dt&&_(E.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Z||Ft),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!st.attributes.uv&&(dt||Dt),fog:!!tt,useFog:E.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:H,skinning:j.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:_t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:A&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===He,flipSided:E.side===Ee,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(C(b,E),S(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function C(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function S(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let b=g[E.type],O;if(b){let G=ln[b];O=Lc.clone(G.uniforms)}else O=E.uniforms;return O}function P(E,b){let O;for(let G=0,j=h.length;G<j;G++){let tt=h[G];if(tt.cacheKey===b){O=tt,++O.usedTimes;break}}return O===void 0&&(O=new Im(i,b,E,r),h.push(O)),O}function I(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function L(E){c.remove(E)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:P,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:F}}function Dm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function o(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,g,_,p){let u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Um),n.length>1&&n.sort(f||sh),s.length>1&&s.sort(f||sh)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Nm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Jt};break;case"SpotLight":e={position:new q,direction:new q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function Om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bm=0;function zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){let t=new Fm,e=Om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new ce,a=new ce;function o(l){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,C=0,S=0,v=0,P=0,I=0,L=0;l.sort(zm);for(let E=0,b=l.length;E<b;E++){let O=l[E],G=O.color,j=O.intensity,tt=O.distance,st=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=G.r*j,d+=G.g*j,f+=G.b*j;else if(O.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(O.sh.coefficients[nt],j);L++}else if(O.isDirectionalLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let at=O.shadow,V=e.get(O);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=O.shadow.matrix,C++}n.directional[m]=nt,m++}else if(O.isSpotLight){let nt=t.get(O);nt.position.setFromMatrixPosition(O.matrixWorld),nt.color.copy(G).multiplyScalar(j),nt.distance=tt,nt.coneCos=Math.cos(O.angle),nt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),nt.decay=O.decay,n.spot[_]=nt;let at=O.shadow;if(O.map&&(n.spotLightMap[P]=O.map,P++,at.updateMatrices(O),O.castShadow&&I++),n.spotLightMatrix[_]=at.matrix,O.castShadow){let V=e.get(O);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=st,v++}_++}else if(O.isRectAreaLight){let nt=t.get(O);nt.color.copy(G).multiplyScalar(j),nt.halfWidth.set(O.width*.5,0,0),nt.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=nt,p++}else if(O.isPointLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),nt.distance=O.distance,nt.decay=O.decay,O.castShadow){let at=O.shadow,V=e.get(O);V.shadowIntensity=at.intensity,V.shadowBias=at.bias,V.shadowNormalBias=at.normalBias,V.shadowRadius=at.radius,V.shadowMapSize=at.mapSize,V.shadowCameraNear=at.camera.near,V.shadowCameraFar=at.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=O.shadow.matrix,S++}n.point[g]=nt,g++}else if(O.isHemisphereLight){let nt=t.get(O);nt.skyColor.copy(O.color).multiplyScalar(j),nt.groundColor.copy(O.groundColor).multiplyScalar(j),n.hemi[u]=nt,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==C||F.numPointShadows!==S||F.numSpotShadows!==v||F.numSpotMaps!==P||F.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=C,F.numPointShadows=S,F.numSpotShadows=v,F.numSpotMaps=P,F.numLightProbes=L,n.version=Bm++)}function c(l,h){let d=0,f=0,m=0,g=0,_=0,p=h.matrixWorldInverse;for(let u=0,C=l.length;u<C;u++){let S=l[u];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function ah(i){let t=new km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Vm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function Wm(i,t,e){let n=new Ii,s=new ft,r=new ft,a=new he,o=new Er({depthPacking:vc}),c=new Tr,l={},h=e.maxTextureSize,d={[xn]:Ee,[Ee]:xn,[He]:He},f=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new be(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let u=this.type;this.render=function(I,L,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Mn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=u!==an&&this.type===an,tt=u===an&&this.type!==an;for(let st=0,nt=I.length;st<nt;st++){let at=I[st],V=at.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let X=V.getFrameExtents();if(s.multiply(X),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,V.mapSize.y=r.y)),V.map===null||j===!0||tt===!0){let it=this.type!==an?{minFilter:Ve,magFilter:Ve}:{};V.map!==null&&V.map.dispose(),V.map=new nn(s.x,s.y,it),V.map.texture.name=at.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let et=V.getViewportCount();for(let it=0;it<et;it++){let _t=V.getViewport(it);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),G.viewport(a),V.updateMatrices(at,it),n=V.getFrustum(),v(L,F,V.camera,at,this.type)}V.isPointLightShadow!==!0&&this.type===an&&C(V,F),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(E,b,O)};function C(I,L){let F=t.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new nn(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,F,f,_,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,F,m,_,null)}function S(I,L,F,E){let b=null,O=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)b=O;else if(b=F.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=b.uuid,j=L.uuid,tt=l[G];tt===void 0&&(tt={},l[G]=tt);let st=tt[j];st===void 0&&(st=b.clone(),tt[j]=st,L.addEventListener("dispose",P)),b=st}if(b.visible=L.visible,b.wireframe=L.wireframe,E===an?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=F}return b}function v(I,L,F,E,b){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===an)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let j=t.update(I),tt=I.material;if(Array.isArray(tt)){let st=j.groups;for(let nt=0,at=st.length;nt<at;nt++){let V=st[nt],X=tt[V.materialIndex];if(X&&X.visible){let et=S(I,X,E,b);I.onBeforeShadow(i,I,L,F,j,et,V),i.renderBufferDirect(F,null,j,et,I,V),I.onAfterShadow(i,I,L,F,j,et,V)}}}else if(tt.visible){let st=S(I,tt,E,b);I.onBeforeShadow(i,I,L,F,j,st,null),i.renderBufferDirect(F,null,j,st,I,null),I.onAfterShadow(i,I,L,F,j,st,null)}}let G=I.children;for(let j=0,tt=G.length;j<tt;j++)v(G[j],L,F,E,b)}function P(I){I.target.removeEventListener("dispose",P);for(let F in l){let E=l[F],b=I.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var Xm={[Fr]:Or,[Br]:Vr,[zr]:Hr,[Yn]:kr,[Or]:Fr,[Vr]:Br,[Hr]:zr,[kr]:Yn};function qm(i,t){function e(){let W=!1,St=new he,bt=null,Dt=new he(0,0,0,0);return{setMask:function(yt){bt!==yt&&!W&&(i.colorMask(yt,yt,yt,yt),bt=yt)},setLocked:function(yt){W=yt},setClear:function(yt,mt,Nt,Wt,ne){ne===!0&&(yt*=Wt,mt*=Wt,Nt*=Wt),St.set(yt,mt,Nt,Wt),Dt.equals(St)===!1&&(i.clearColor(yt,mt,Nt,Wt),Dt.copy(St))},reset:function(){W=!1,bt=null,Dt.set(-1,0,0,0)}}}function n(){let W=!1,St=!1,bt=null,Dt=null,yt=null;return{setReversed:function(mt){if(St!==mt){let Nt=t.get("EXT_clip_control");mt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),St=mt;let Wt=yt;yt=null,this.setClear(Wt)}},getReversed:function(){return St},setTest:function(mt){mt?x(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(mt){bt!==mt&&!W&&(i.depthMask(mt),bt=mt)},setFunc:function(mt){if(St&&(mt=Xm[mt]),Dt!==mt){switch(mt){case Fr:i.depthFunc(i.NEVER);break;case Or:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=mt}},setLocked:function(mt){W=mt},setClear:function(mt){yt!==mt&&(St&&(mt=1-mt),i.clearDepth(mt),yt=mt)},reset:function(){W=!1,bt=null,Dt=null,yt=null,St=!1}}}function s(){let W=!1,St=null,bt=null,Dt=null,yt=null,mt=null,Nt=null,Wt=null,ne=null;return{setTest:function(Qt){W||(Qt?x(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(Qt){St!==Qt&&!W&&(i.stencilMask(Qt),St=Qt)},setFunc:function(Qt,cn,tn){(bt!==Qt||Dt!==cn||yt!==tn)&&(i.stencilFunc(Qt,cn,tn),bt=Qt,Dt=cn,yt=tn)},setOp:function(Qt,cn,tn){(mt!==Qt||Nt!==cn||Wt!==tn)&&(i.stencilOp(Qt,cn,tn),mt=Qt,Nt=cn,Wt=tn)},setLocked:function(Qt){W=Qt},setClear:function(Qt){ne!==Qt&&(i.clearStencil(Qt),ne=Qt)},reset:function(){W=!1,St=null,bt=null,Dt=null,yt=null,mt=null,Nt=null,Wt=null,ne=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,C=null,S=null,v=null,P=null,I=null,L=new Jt(0,0,0),F=0,E=!1,b=null,O=null,G=null,j=null,tt=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,at=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(V)[1]),nt=at>=1):V.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),nt=at>=2);let X=null,et={},it=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),pt=new he().fromArray(it),B=new he().fromArray(_t);function D(W,St,bt,Dt){let yt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(W,mt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<bt;Nt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(St+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return mt}let M={};M[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),M[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),M[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),x(i.DEPTH_TEST),a.setFunc(Yn),Y(!1),Z(To),x(i.CULL_FACE),N(Mn);function x(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function H(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Q(W,St){return d[W]!==St?(i.bindFramebuffer(W,St),d[W]=St,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function z(W,St){let bt=m,Dt=!1;if(W){bt=f.get(St),bt===void 0&&(bt=[],f.set(St,bt));let yt=W.textures;if(bt.length!==yt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Nt=yt.length;mt<Nt;mt++)bt[mt]=i.COLOR_ATTACHMENT0+mt;bt.length=yt.length,Dt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(bt)}function dt(W){return g!==W?(i.useProgram(W),g=W,!0):!1}let ut={[Ln]:i.FUNC_ADD,[Yl]:i.FUNC_SUBTRACT,[Zl]:i.FUNC_REVERSE_SUBTRACT};ut[Jl]=i.MIN,ut[$l]=i.MAX;let T={[Kl]:i.ZERO,[Ql]:i.ONE,[jl]:i.SRC_COLOR,[lr]:i.SRC_ALPHA,[rc]:i.SRC_ALPHA_SATURATE,[ic]:i.DST_COLOR,[ec]:i.DST_ALPHA,[tc]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[sc]:i.ONE_MINUS_DST_COLOR,[nc]:i.ONE_MINUS_DST_ALPHA,[ac]:i.CONSTANT_COLOR,[oc]:i.ONE_MINUS_CONSTANT_COLOR,[lc]:i.CONSTANT_ALPHA,[cc]:i.ONE_MINUS_CONSTANT_ALPHA};function N(W,St,bt,Dt,yt,mt,Nt,Wt,ne,Qt){if(W===Mn){_===!0&&(H(i.BLEND),_=!1);return}if(_===!1&&(x(i.BLEND),_=!0),W!==ql){if(W!==p||Qt!==E){if((u!==Ln||v!==Ln)&&(i.blendEquation(i.FUNC_ADD),u=Ln,v=Ln),Qt)switch(W){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Co:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ro:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}C=null,S=null,P=null,I=null,L.set(0,0,0),F=0,p=W,E=Qt}return}yt=yt||St,mt=mt||bt,Nt=Nt||Dt,(St!==u||yt!==v)&&(i.blendEquationSeparate(ut[St],ut[yt]),u=St,v=yt),(bt!==C||Dt!==S||mt!==P||Nt!==I)&&(i.blendFuncSeparate(T[bt],T[Dt],T[mt],T[Nt]),C=bt,S=Dt,P=mt,I=Nt),(Wt.equals(L)===!1||ne!==F)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ne),L.copy(Wt),F=ne),p=W,E=!1}function k(W,St){W.side===He?H(i.CULL_FACE):x(i.CULL_FACE);let bt=W.side===Ee;St&&(bt=!bt),Y(bt),W.blending===qn&&W.transparent===!1?N(Mn):N(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Dt=W.stencilWrite;o.setTest(Dt),Dt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),A(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?x(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(W){b!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),b=W)}function Z(W){W!==Wl?(x(i.CULL_FACE),W!==O&&(W===To?i.cullFace(i.BACK):W===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),O=W}function U(W){W!==G&&(nt&&i.lineWidth(W),G=W)}function A(W,St,bt){W?(x(i.POLYGON_OFFSET_FILL),(j!==St||tt!==bt)&&(i.polygonOffset(St,bt),j=St,tt=bt)):H(i.POLYGON_OFFSET_FILL)}function lt(W){W?x(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function Et(W){W===void 0&&(W=i.TEXTURE0+st-1),X!==W&&(i.activeTexture(W),X=W)}function Ft(W,St,bt){bt===void 0&&(X===null?bt=i.TEXTURE0+st-1:bt=X);let Dt=et[bt];Dt===void 0&&(Dt={type:void 0,texture:void 0},et[bt]=Dt),(Dt.type!==W||Dt.texture!==St)&&(X!==bt&&(i.activeTexture(bt),X=bt),i.bindTexture(W,St||M[W]),Dt.type=W,Dt.texture=St)}function R(){let W=et[X];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(W){pt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),pt.copy(W))}function Ht(W){B.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),B.copy(W))}function Ot(W,St){let bt=l.get(St);bt===void 0&&(bt=new WeakMap,l.set(St,bt));let Dt=bt.get(W);Dt===void 0&&(Dt=i.getUniformBlockIndex(St,W.name),bt.set(W,Dt))}function At(W,St){let Dt=l.get(St).get(W);c.get(St)!==Dt&&(i.uniformBlockBinding(St,Dt,W.__bindingPointIndex),c.set(St,Dt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,et={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,C=null,S=null,v=null,P=null,I=null,L=new Jt(0,0,0),F=0,E=!1,b=null,O=null,G=null,j=null,tt=null,pt.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:x,disable:H,bindFramebuffer:Q,drawBuffers:z,useProgram:dt,setBlending:N,setMaterial:k,setFlipSided:Y,setCullFace:Z,setLineWidth:U,setPolygonOffset:A,setScissorTest:lt,activeTexture:Et,bindTexture:Ft,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:$,texImage2D:Lt,texImage3D:xt,updateUBOMapping:Ot,uniformBlockBinding:At,texStorage2D:Mt,texStorage3D:Pt,texSubImage2D:ct,texSubImage3D:gt,compressedTexSubImage2D:ht,compressedTexSubImage3D:It,scissor:wt,viewport:Ht,reset:Xt}}function Ym(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return m?new OffscreenCanvas(R,y):ss("canvas")}function _(R,y,$){let ct=1,gt=Ft(R);if((gt.width>$||gt.height>$)&&(ct=$/Math.max(gt.width,gt.height)),ct<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ht=Math.floor(ct*gt.width),It=Math.floor(ct*gt.height);d===void 0&&(d=g(ht,It));let Mt=y?g(ht,It):d;return Mt.width=ht,Mt.height=It,Mt.getContext("2d").drawImage(R,0,0,ht,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ht+"x"+It+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,y,$,ct,gt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht=y;if(y===i.RED&&($===i.FLOAT&&(ht=i.R32F),$===i.HALF_FLOAT&&(ht=i.R16F),$===i.UNSIGNED_BYTE&&(ht=i.R8)),y===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.R8UI),$===i.UNSIGNED_SHORT&&(ht=i.R16UI),$===i.UNSIGNED_INT&&(ht=i.R32UI),$===i.BYTE&&(ht=i.R8I),$===i.SHORT&&(ht=i.R16I),$===i.INT&&(ht=i.R32I)),y===i.RG&&($===i.FLOAT&&(ht=i.RG32F),$===i.HALF_FLOAT&&(ht=i.RG16F),$===i.UNSIGNED_BYTE&&(ht=i.RG8)),y===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RG8UI),$===i.UNSIGNED_SHORT&&(ht=i.RG16UI),$===i.UNSIGNED_INT&&(ht=i.RG32UI),$===i.BYTE&&(ht=i.RG8I),$===i.SHORT&&(ht=i.RG16I),$===i.INT&&(ht=i.RG32I)),y===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),$===i.UNSIGNED_INT&&(ht=i.RGB32UI),$===i.BYTE&&(ht=i.RGB8I),$===i.SHORT&&(ht=i.RGB16I),$===i.INT&&(ht=i.RGB32I)),y===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),$===i.UNSIGNED_INT&&(ht=i.RGBA32UI),$===i.BYTE&&(ht=i.RGBA8I),$===i.SHORT&&(ht=i.RGBA16I),$===i.INT&&(ht=i.RGBA32I)),y===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),y===i.RGBA){let It=gt?ns:$t.getTransfer(ct);$===i.FLOAT&&(ht=i.RGBA32F),$===i.HALF_FLOAT&&(ht=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ht=It===jt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function v(R,y){let $;return R?y===null||y===Bn||y===zi?$=i.DEPTH24_STENCIL8:y===on?$=i.DEPTH32F_STENCIL8:y===Oi&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===zi?$=i.DEPTH_COMPONENT24:y===on?$=i.DEPTH_COMPONENT32F:y===Oi&&($=i.DEPTH_COMPONENT16),$}function P(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ve&&R.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function I(R){let y=R.target;y.removeEventListener("dispose",I),F(y),y.isVideoTexture&&h.delete(y)}function L(R){let y=R.target;y.removeEventListener("dispose",L),b(y)}function F(R){let y=n.get(R);if(y.__webglInit===void 0)return;let $=R.source,ct=f.get($);if(ct){let gt=ct[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&E(R),Object.keys(ct).length===0&&f.delete($)}n.remove(R)}function E(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let $=R.source,ct=f.get($);delete ct[y.__cacheKey],a.memory.textures--}function b(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(y.__webglFramebuffer[ct]))for(let gt=0;gt<y.__webglFramebuffer[ct].length;gt++)i.deleteFramebuffer(y.__webglFramebuffer[ct][gt]);else i.deleteFramebuffer(y.__webglFramebuffer[ct]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ct])}else{if(Array.isArray(y.__webglFramebuffer))for(let ct=0;ct<y.__webglFramebuffer.length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[ct]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ct=0;ct<y.__webglColorRenderbuffer.length;ct++)y.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ct]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let $=R.textures;for(let ct=0,gt=$.length;ct<gt;ct++){let ht=n.get($[ct]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove($[ct])}n.remove(R)}let O=0;function G(){O=0}function j(){let R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function tt(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function st(R,y){let $=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M($,R,y);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+y)}function nt(R,y){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){M($,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+y)}function at(R,y){let $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){M($,R,y);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+y)}function V(R,y){let $=n.get(R);if(R.version>0&&$.__version!==R.version){x($,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+y)}let X={[bi]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[hr]:i.MIRRORED_REPEAT},et={[Ve]:i.NEAREST,[xc]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},it={[Sc]:i.NEVER,[Cc]:i.ALWAYS,[bc]:i.LESS,[Vo]:i.LEQUAL,[Ec]:i.EQUAL,[Ac]:i.GEQUAL,[Tc]:i.GREATER,[wc]:i.NOTEQUAL};function _t(R,y){if(y.type===on&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Je||y.magFilter===qr||y.magFilter===Is||y.magFilter===On||y.minFilter===Je||y.minFilter===qr||y.minFilter===Is||y.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,et[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,et[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ve||y.minFilter!==Is&&y.minFilter!==On||y.type===on&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function pt(R,y){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",I));let ct=y.source,gt=f.get(ct);gt===void 0&&(gt={},f.set(ct,gt));let ht=tt(y);if(ht!==R.__cacheKey){gt[ht]===void 0&&(gt[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),gt[ht].usedTimes++;let It=gt[R.__cacheKey];It!==void 0&&(gt[R.__cacheKey].usedTimes--,It.usedTimes===0&&E(y)),R.__cacheKey=ht,R.__webglTexture=gt[ht].texture}return $}function B(R,y,$){return Math.floor(Math.floor(R/$)/y)}function D(R,y,$,ct){let ht=R.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,$,ct,y.data);else{ht.sort((xt,wt)=>xt.start-wt.start);let It=0;for(let xt=1;xt<ht.length;xt++){let wt=ht[It],Ht=ht[xt],Ot=wt.start+wt.count,At=B(Ht.start,y.width,4),Xt=B(wt.start,y.width,4);Ht.start<=Ot+1&&At===Xt&&B(Ht.start+Ht.count-1,y.width,4)===At?wt.count=Math.max(wt.count,Ht.start+Ht.count-wt.start):(++It,ht[It]=Ht)}ht.length=It+1;let Mt=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let xt=0,wt=ht.length;xt<wt;xt++){let Ht=ht[xt],Ot=Math.floor(Ht.start/4),At=Math.ceil(Ht.count/4),Xt=Ot%y.width,W=Math.floor(Ot/y.width),St=At,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Xt,W,St,bt,$,ct,y.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function M(R,y,$){let ct=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ct=i.TEXTURE_3D);let gt=pt(R,y),ht=y.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+$);let It=n.get(ht);if(ht.version!==It.__version||gt===!0){e.activeTexture(i.TEXTURE0+$);let Mt=$t.getPrimaries($t.workingColorSpace),Pt=y.colorSpace===bn?null:$t.getPrimaries(y.colorSpace),Lt=y.colorSpace===bn||Mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let xt=_(y.image,!1,s.maxTextureSize);xt=Et(y,xt);let wt=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type),Ot=S(y.internalFormat,wt,Ht,y.colorSpace,y.isVideoTexture);_t(ct,y);let At,Xt=y.mipmaps,W=y.isVideoTexture!==!0,St=It.__version===void 0||gt===!0,bt=ht.dataReady,Dt=P(y,xt);if(y.isDepthTexture)Ot=v(y.format===ki,y.type),St&&(W?e.texStorage2D(i.TEXTURE_2D,1,Ot,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,xt.width,xt.height,0,wt,Ht,null));else if(y.isDataTexture)if(Xt.length>0){W&&St&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Xt[0].width,Xt[0].height);for(let yt=0,mt=Xt.length;yt<mt;yt++)At=Xt[yt],W?bt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,At.width,At.height,wt,Ht,At.data):e.texImage2D(i.TEXTURE_2D,yt,Ot,At.width,At.height,0,wt,Ht,At.data);y.generateMipmaps=!1}else W?(St&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,xt.width,xt.height),bt&&D(y,xt,wt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Ot,xt.width,xt.height,0,wt,Ht,xt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,Xt[0].width,Xt[0].height,xt.depth);for(let yt=0,mt=Xt.length;yt<mt;yt++)if(At=Xt[yt],y.format!==Ge)if(wt!==null)if(W){if(bt)if(y.layerUpdates.size>0){let Nt=Zo(At.width,At.height,y.format,y.type);for(let Wt of y.layerUpdates){let ne=At.data.subarray(Wt*Nt/At.data.BYTES_PER_ELEMENT,(Wt+1)*Nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Wt,At.width,At.height,1,wt,ne)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,xt.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Ot,At.width,At.height,xt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,At.width,At.height,xt.depth,wt,Ht,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Ot,At.width,At.height,xt.depth,0,wt,Ht,At.data)}else{W&&St&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Xt[0].width,Xt[0].height);for(let yt=0,mt=Xt.length;yt<mt;yt++)At=Xt[yt],y.format!==Ge?wt!==null?W?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Ot,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,At.width,At.height,wt,Ht,At.data):e.texImage2D(i.TEXTURE_2D,yt,Ot,At.width,At.height,0,wt,Ht,At.data)}else if(y.isDataArrayTexture)if(W){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,xt.width,xt.height,xt.depth),bt)if(y.layerUpdates.size>0){let yt=Zo(xt.width,xt.height,y.format,y.type);for(let mt of y.layerUpdates){let Nt=xt.data.subarray(mt*yt/xt.data.BYTES_PER_ELEMENT,(mt+1)*yt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,xt.width,xt.height,1,wt,Ht,Nt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,wt,Ht,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,xt.width,xt.height,xt.depth,0,wt,Ht,xt.data);else if(y.isData3DTexture)W?(St&&e.texStorage3D(i.TEXTURE_3D,Dt,Ot,xt.width,xt.height,xt.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,wt,Ht,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,xt.width,xt.height,xt.depth,0,wt,Ht,xt.data);else if(y.isFramebufferTexture){if(St)if(W)e.texStorage2D(i.TEXTURE_2D,Dt,Ot,xt.width,xt.height);else{let yt=xt.width,mt=xt.height;for(let Nt=0;Nt<Dt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Ot,yt,mt,0,wt,Ht,null),yt>>=1,mt>>=1}}else if(Xt.length>0){if(W&&St){let yt=Ft(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,yt.width,yt.height)}for(let yt=0,mt=Xt.length;yt<mt;yt++)At=Xt[yt],W?bt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,wt,Ht,At):e.texImage2D(i.TEXTURE_2D,yt,Ot,wt,Ht,At);y.generateMipmaps=!1}else if(W){if(St){let yt=Ft(xt);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,yt.width,yt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,xt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,wt,Ht,xt);p(y)&&u(ct),It.__version=ht.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function x(R,y,$){if(y.image.length!==6)return;let ct=pt(R,y),gt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);let ht=n.get(gt);if(gt.version!==ht.__version||ct===!0){e.activeTexture(i.TEXTURE0+$);let It=$t.getPrimaries($t.workingColorSpace),Mt=y.colorSpace===bn?null:$t.getPrimaries(y.colorSpace),Pt=y.colorSpace===bn||It===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,xt=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let mt=0;mt<6;mt++)!Lt&&!xt?wt[mt]=_(y.image[mt],!0,s.maxCubemapSize):wt[mt]=xt?y.image[mt].image:y.image[mt],wt[mt]=Et(y,wt[mt]);let Ht=wt[0],Ot=r.convert(y.format,y.colorSpace),At=r.convert(y.type),Xt=S(y.internalFormat,Ot,At,y.colorSpace),W=y.isVideoTexture!==!0,St=ht.__version===void 0||ct===!0,bt=gt.dataReady,Dt=P(y,Ht);_t(i.TEXTURE_CUBE_MAP,y);let yt;if(Lt){W&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Xt,Ht.width,Ht.height);for(let mt=0;mt<6;mt++){yt=wt[mt].mipmaps;for(let Nt=0;Nt<yt.length;Nt++){let Wt=yt[Nt];y.format!==Ge?Ot!==null?W?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,Wt.width,Wt.height,Ot,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,Xt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,Wt.width,Wt.height,Ot,At,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,Xt,Wt.width,Wt.height,0,Ot,At,Wt.data)}}}else{if(yt=y.mipmaps,W&&St){yt.length>0&&Dt++;let mt=Ft(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Xt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(xt){W?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,wt[mt].width,wt[mt].height,Ot,At,wt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Xt,wt[mt].width,wt[mt].height,0,Ot,At,wt[mt].data);for(let Nt=0;Nt<yt.length;Nt++){let ne=yt[Nt].image[mt].image;W?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,ne.width,ne.height,Ot,At,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,Xt,ne.width,ne.height,0,Ot,At,ne.data)}}else{W?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ot,At,wt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Xt,Ot,At,wt[mt]);for(let Nt=0;Nt<yt.length;Nt++){let Wt=yt[Nt];W?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,Ot,At,Wt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,Xt,Ot,At,Wt.image[mt])}}}p(y)&&u(i.TEXTURE_CUBE_MAP),ht.__version=gt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function H(R,y,$,ct,gt,ht){let It=r.convert($.format,$.colorSpace),Mt=r.convert($.type),Pt=S($.internalFormat,It,Mt,$.colorSpace),Lt=n.get(y),xt=n.get($);if(xt.__renderTarget=y,!Lt.__hasExternalTextures){let wt=Math.max(1,y.width>>ht),Ht=Math.max(1,y.height>>ht);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,ht,Pt,wt,Ht,y.depth,0,It,Mt,null):e.texImage2D(gt,ht,Pt,wt,Ht,0,It,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),A(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,gt,xt.__webglTexture,0,U(y)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,gt,xt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(R,y,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let ct=y.depthTexture,gt=ct&&ct.isDepthTexture?ct.type:null,ht=v(y.stencilBuffer,gt),It=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=U(y);A(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ht,y.width,y.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ht,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ht,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,R)}else{let ct=y.textures;for(let gt=0;gt<ct.length;gt++){let ht=ct[gt],It=r.convert(ht.format,ht.colorSpace),Mt=r.convert(ht.type),Pt=S(ht.internalFormat,It,Mt,ht.colorSpace),Lt=U(y);$&&A(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,y.width,y.height):A(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function z(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(y.depthTexture);ct.__renderTarget=y,(!ct.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),st(y.depthTexture,0);let gt=ct.__webglTexture,ht=U(y);if(y.depthTexture.format===Ei)A(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(y.depthTexture.format===ki)A(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function dt(R){let y=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let ct=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ct){let gt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ct.removeEventListener("dispose",gt)};ct.addEventListener("dispose",gt),y.__depthDisposeCallback=gt}y.__boundDepthTexture=ct}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let ct=R.texture.mipmaps;ct&&ct.length>0?z(y.__webglFramebuffer[0],R):z(y.__webglFramebuffer,R)}else if($){y.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ct]),y.__webglDepthbuffer[ct]===void 0)y.__webglDepthbuffer[ct]=i.createRenderbuffer(),Q(y.__webglDepthbuffer[ct],R,!1);else{let gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,ht)}}else{let ct=R.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Q(y.__webglDepthbuffer,R,!1);else{let gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,y,$){let ct=n.get(R);y!==void 0&&H(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&dt(R)}function T(R){let y=R.texture,$=n.get(R),ct=n.get(y);R.addEventListener("dispose",L);let gt=R.textures,ht=R.isWebGLCubeRenderTarget===!0,It=gt.length>1;if(It||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=y.version,a.memory.textures++),ht){$.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer[Mt]=[];for(let Pt=0;Pt<y.mipmaps.length;Pt++)$.__webglFramebuffer[Mt][Pt]=i.createFramebuffer()}else $.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)$.__webglFramebuffer[Mt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(It)for(let Mt=0,Pt=gt.length;Mt<Pt;Mt++){let Lt=n.get(gt[Mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&A(R)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Mt=0;Mt<gt.length;Mt++){let Pt=gt[Mt];$.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Mt]);let Lt=r.convert(Pt.format,Pt.colorSpace),xt=r.convert(Pt.type),wt=S(Pt.internalFormat,Lt,xt,Pt.colorSpace,R.isXRRenderTarget===!0),Ht=U(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,$.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Q($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),_t(i.TEXTURE_CUBE_MAP,y);for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)H($.__webglFramebuffer[Mt][Pt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt);else H($.__webglFramebuffer[Mt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);p(y)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Mt=0,Pt=gt.length;Mt<Pt;Mt++){let Lt=gt[Mt],xt=n.get(Lt),wt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(wt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,xt.__webglTexture),_t(wt,Lt),H($.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+Mt,wt,0),p(Lt)&&u(wt)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ct.__webglTexture),_t(Mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)H($.__webglFramebuffer[Pt],R,y,i.COLOR_ATTACHMENT0,Mt,Pt);else H($.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,Mt,0);p(y)&&u(Mt),e.unbindTexture()}R.depthBuffer&&dt(R)}function N(R){let y=R.textures;for(let $=0,ct=y.length;$<ct;$++){let gt=y[$];if(p(gt)){let ht=C(R),It=n.get(gt).__webglTexture;e.bindTexture(ht,It),u(ht),e.unbindTexture()}}}let k=[],Y=[];function Z(R){if(R.samples>0){if(A(R)===!1){let y=R.textures,$=R.width,ct=R.height,gt=i.COLOR_BUFFER_BIT,ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(R),Mt=y.length>1;if(Mt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let Pt=R.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);let xt=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,$,ct,0,0,$,ct,gt,i.NEAREST),c===!0&&(k.length=0,Y.length=0,k.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(k.push(ht),Y.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Lt]);let xt=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function U(R){return Math.min(s.maxSamples,R.samples)}function A(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Et(R,y){let $=R.colorSpace,ct=R.format,gt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Zn&&$!==bn&&($t.getTransfer($)===jt?(ct!==Ge||gt!==je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),y}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=st,this.setTexture2DArray=nt,this.setTexture3D=at,this.setTextureCube=V,this.rebindTextures=ut,this.setupRenderTarget=T,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=H,this.useMultisampledRTT=A}function Zm(i,t){function e(n,s=bn){let r,a=$t.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===No)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lo)return i.BYTE;if(n===Do)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===Fo)return i.ALPHA;if(n===Oo)return i.RGB;if(n===Ge)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===$r)return i.RED_INTEGER;if(n===zo)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Us)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Ea||n===Ta||n===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:Jm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ll=class extends yn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null,_=typeof XRWebGLBinding<"u",p=new ol,u={},C=e.getContextAttributes(),S=null,v=null,P=[],I=[],L=new ft,F=null,E=new Ae;E.viewport=new he;let b=new Ae;b.viewport=new he;let O=[E,b],G=new Ur,j=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let x=P[M];return x===void 0&&(x=new Ri,P[M]=x),x.getTargetRaySpace()},this.getControllerGrip=function(M){let x=P[M];return x===void 0&&(x=new Ri,P[M]=x),x.getGripSpace()},this.getHand=function(M){let x=P[M];return x===void 0&&(x=new Ri,P[M]=x),x.getHandSpace()};function st(M){let x=I.indexOf(M.inputSource);if(x===-1)return;let H=P[x];H!==void 0&&(H.update(M.inputSource,M.frame,l||a),H.dispatchEvent({type:M.type,data:M.inputSource}))}function nt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",at);for(let M=0;M<P.length;M++){let x=I[M];x!==null&&(I[M]=null,P[M].disconnect(x))}j=null,tt=null,p.reset();for(let M in u)delete u[M];t.setRenderTarget(S),m=null,f=null,d=null,s=null,v=null,D.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){o=M,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(M){l=M},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",at),C.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Q=null,z=null;C.depth&&(z=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=C.stencil?ki:Ei,Q=C.stencil?zi:Bn);let dt={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new nn(f.textureWidth,f.textureHeight,{format:Ge,type:je,depthTexture:new ds(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let H={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new nn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:je,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),D.setContext(s),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function at(M){for(let x=0;x<M.removed.length;x++){let H=M.removed[x],Q=I.indexOf(H);Q>=0&&(I[Q]=null,P[Q].disconnect(H))}for(let x=0;x<M.added.length;x++){let H=M.added[x],Q=I.indexOf(H);if(Q===-1){for(let dt=0;dt<P.length;dt++)if(dt>=I.length){I.push(H),Q=dt;break}else if(I[dt]===null){I[dt]=H,Q=dt;break}if(Q===-1)break}let z=P[Q];z&&z.connect(H)}}let V=new q,X=new q;function et(M,x,H){V.setFromMatrixPosition(x.matrixWorld),X.setFromMatrixPosition(H.matrixWorld);let Q=V.distanceTo(X),z=x.projectionMatrix.elements,dt=H.projectionMatrix.elements,ut=z[14]/(z[10]-1),T=z[14]/(z[10]+1),N=(z[9]+1)/z[5],k=(z[9]-1)/z[5],Y=(z[8]-1)/z[0],Z=(dt[8]+1)/dt[0],U=ut*Y,A=ut*Z,lt=Q/(-Y+Z),Et=lt*-Y;if(x.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(Et),M.translateZ(lt),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),z[10]===-1)M.projectionMatrix.copy(x.projectionMatrix),M.projectionMatrixInverse.copy(x.projectionMatrixInverse);else{let Ft=ut+lt,R=T+lt,y=U-Et,$=A+(Q-Et),ct=N*T/R*Ft,gt=k*T/R*Ft;M.projectionMatrix.makePerspective(y,$,ct,gt,Ft,R),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function it(M,x){x===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(x.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let x=M.near,H=M.far;p.texture!==null&&(p.depthNear>0&&(x=p.depthNear),p.depthFar>0&&(H=p.depthFar)),G.near=b.near=E.near=x,G.far=b.far=E.far=H,(j!==G.near||tt!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),j=G.near,tt=G.far),G.layers.mask=M.layers.mask|6,E.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let Q=M.parent,z=G.cameras;it(G,Q);for(let dt=0;dt<z.length;dt++)it(z[dt],Q);z.length===2?et(G,E,b):G.projectionMatrix.copy(E.projectionMatrix),_t(M,G,Q)};function _t(M,x,H){H===null?M.matrix.copy(x.matrixWorld):(M.matrix.copy(H.matrixWorld),M.matrix.invert(),M.matrix.multiply(x.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(x.projectionMatrix),M.projectionMatrixInverse.copy(x.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=dr*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(M){c=M,f!==null&&(f.fixedFoveation=M),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=M)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(M){return u[M]};let pt=null;function B(M,x){if(h=x.getViewerPose(l||a),g=x,h!==null){let H=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let Q=!1;H.length!==G.cameras.length&&(G.cameras.length=0,Q=!0);for(let T=0;T<H.length;T++){let N=H[T],k=null;if(m!==null)k=m.getViewport(N);else{let Z=d.getViewSubImage(f,N);k=Z.viewport,T===0&&(t.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(v))}let Y=O[T];Y===void 0&&(Y=new Ae,Y.layers.enable(T),Y.viewport=new he,O[T]=Y),Y.matrix.fromArray(N.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(N.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(k.x,k.y,k.width,k.height),T===0&&(G.matrix.copy(Y.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Q===!0&&G.cameras.push(Y)}let z=s.enabledFeatures;if(z&&z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let T=d.getDepthInformation(H[0]);T&&T.isValid&&T.texture&&p.init(T,s.renderState)}if(z&&z.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let T=0;T<H.length;T++){let N=H[T].camera;if(N){let k=u[N];k||(k=new fs,u[N]=k);let Y=d.getCameraImage(N);k.sourceTexture=Y}}}}for(let H=0;H<P.length;H++){let Q=I[H],z=P[H];Q!==null&&z!==void 0&&z.update(Q,x,l||a)}pt&&pt(M,x),x.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:x}),g=null}let D=new oh;D.setAnimationLoop(B),this.setAnimationLoop=function(M){pt=M},this.dispose=function(){}}},ai=new $e,Km=new ce;function Qm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,C,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,C,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ee&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ee&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let C=t.get(u),S=C.envMap,v=C.envMapRotation;S&&(p.envMap.value=S,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(ai)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,C,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*C,p.scale.value=S*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,C){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ee&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let C=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,S){let v=S.program;n.uniformBlockBinding(C,v)}function l(C,S){let v=s[C.id];v===void 0&&(g(C),v=h(C),s[C.id]=v,C.addEventListener("dispose",p));let P=S.program;n.updateUBOMapping(C,P);let I=t.render.frame;r[C.id]!==I&&(f(C),r[C.id]=I)}function h(C){let S=d();C.__bindingPointIndex=S;let v=i.createBuffer(),P=C.__size,I=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let S=s[C.id],v=C.uniforms,P=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,L=v.length;I<L;I++){let F=Array.isArray(v[I])?v[I]:[v[I]];for(let E=0,b=F.length;E<b;E++){let O=F[E];if(m(O,I,E,P)===!0){let G=O.__offset,j=Array.isArray(O.value)?O.value:[O.value],tt=0;for(let st=0;st<j.length;st++){let nt=j[st],at=_(nt);typeof nt=="number"||typeof nt=="boolean"?(O.__data[0]=nt,i.bufferSubData(i.UNIFORM_BUFFER,G+tt,O.__data)):nt.isMatrix3?(O.__data[0]=nt.elements[0],O.__data[1]=nt.elements[1],O.__data[2]=nt.elements[2],O.__data[3]=0,O.__data[4]=nt.elements[3],O.__data[5]=nt.elements[4],O.__data[6]=nt.elements[5],O.__data[7]=0,O.__data[8]=nt.elements[6],O.__data[9]=nt.elements[7],O.__data[10]=nt.elements[8],O.__data[11]=0):(nt.toArray(O.__data,tt),tt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,S,v,P){let I=C.value,L=S+"_"+v;if(P[L]===void 0)return typeof I=="number"||typeof I=="boolean"?P[L]=I:P[L]=I.clone(),!0;{let F=P[L];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return P[L]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(C){let S=C.uniforms,v=0,P=16;for(let L=0,F=S.length;L<F;L++){let E=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,O=E.length;b<O;b++){let G=E[b],j=Array.isArray(G.value)?G.value:[G.value];for(let tt=0,st=j.length;tt<st;tt++){let nt=j[tt],at=_(nt),V=v%P,X=V%at.boundary,et=V+X;v+=X,et!==0&&P-et<at.storage&&(v+=P-et),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=at.storage}}}let I=v%P;return I>0&&(v+=P-I),C.__size=v,C.__cache={},this}function _(C){let S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function p(C){let S=C.target;S.removeEventListener("dispose",p);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Pa=class{constructor(t={}){let{canvas:e=Rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),p=null,u=null,C=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,P=!1;this._outputColorSpace=ge;let I=0,L=0,F=null,E=-1,b=null,O=new he,G=new he,j=null,tt=new Jt(0),st=0,nt=e.width,at=e.height,V=1,X=null,et=null,it=new he(0,0,nt,at),_t=new he(0,0,nt,at),pt=!1,B=new Ii,D=!1,M=!1,x=new ce,H=new q,Q=new he,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function ut(){return F===null?V:1}let T=n;function N(w,J){return e.getContext(w,J)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),T===null){let J="webgl2";if(T=N(J,w),T===null)throw N(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let k,Y,Z,U,A,lt,Et,Ft,R,y,$,ct,gt,ht,It,Mt,Pt,Lt,xt,wt,Ht,Ot,At,Xt;function W(){k=new _p(T),k.init(),Ot=new Zm(T,k),Y=new hp(T,k,t,Ot),Z=new qm(T,k),Y.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),U=new vp(T),A=new Dm,lt=new Ym(T,k,Z,A,Y,Ot,U),Et=new dp(v),Ft=new gp(v),R=new Tu(T),At=new lp(T,R),y=new xp(T,R,U,At),$=new Sp(T,y,R,U),xt=new Mp(T,Y,lt),Mt=new up(A),ct=new Lm(v,Et,Ft,k,Y,At,Mt),gt=new Qm(v,A),ht=new Nm,It=new Vm(k),Lt=new op(v,Et,Ft,Z,$,m,c),Pt=new Wm(v,$,Y),Xt=new jm(T,U,Y,Z),wt=new cp(T,k,U),Ht=new yp(T,k,U),U.programs=ct.programs,v.capabilities=Y,v.extensions=k,v.properties=A,v.renderLists=ht,v.shadowMap=Pt,v.state=Z,v.info=U}W();let St=new ll(v,T);this.xr=St,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let w=k.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=k.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(nt,at,!1))},this.getSize=function(w){return w.set(nt,at)},this.setSize=function(w,J,rt=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=w,at=J,e.width=Math.floor(w*V),e.height=Math.floor(J*V),rt===!0&&(e.style.width=w+"px",e.style.height=J+"px"),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(nt*V,at*V).floor()},this.setDrawingBufferSize=function(w,J,rt){nt=w,at=J,V=rt,e.width=Math.floor(w*rt),e.height=Math.floor(J*rt),this.setViewport(0,0,w,J)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,J,rt,ot){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,J,rt,ot),Z.viewport(O.copy(it).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,J,rt,ot){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,J,rt,ot),Z.scissor(G.copy(_t).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){Z.setScissorTest(pt=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,rt=!0){let ot=0;if(w){let K=!1;if(F!==null){let vt=F.texture.format;K=vt===Qr||vt===Kr||vt===$r}if(K){let vt=F.texture.type,Ct=vt===je||vt===Bn||vt===Oi||vt===zi||vt===Zr||vt===Jr,Ut=Lt.getClearColor(),Rt=Lt.getClearAlpha(),kt=Ut.r,Gt=Ut.g,Bt=Ut.b;Ct?(g[0]=kt,g[1]=Gt,g[2]=Bt,g[3]=Rt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Bt,_[3]=Rt,T.clearBufferiv(T.COLOR,0,_))}else ot|=T.COLOR_BUFFER_BIT}J&&(ot|=T.DEPTH_BUFFER_BIT),rt&&(ot|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Lt.dispose(),ht.dispose(),It.dispose(),A.dispose(),Et.dispose(),Ft.dispose(),$.dispose(),At.dispose(),Xt.dispose(),ct.dispose(),St.dispose(),St.removeEventListener("sessionstart",tn),St.removeEventListener("sessionend",ul),zn.stop()};function bt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=U.autoReset,J=Pt.enabled,rt=Pt.autoUpdate,ot=Pt.needsUpdate,K=Pt.type;W(),U.autoReset=w,Pt.enabled=J,Pt.autoUpdate=rt,Pt.needsUpdate=ot,Pt.type=K}function yt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mt(w){let J=w.target;J.removeEventListener("dispose",mt),Nt(J)}function Nt(w){Wt(w),A.remove(w)}function Wt(w){let J=A.get(w).programs;J!==void 0&&(J.forEach(function(rt){ct.releaseProgram(rt)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,rt,ot,K,vt){J===null&&(J=z);let Ct=K.isMesh&&K.matrixWorld.determinant()<0,Ut=fh(w,J,rt,ot,K);Z.setMaterial(ot,Ct);let Rt=rt.index,kt=1;if(ot.wireframe===!0){if(Rt=y.getWireframeAttribute(rt),Rt===void 0)return;kt=2}let Gt=rt.drawRange,Bt=rt.attributes.position,Zt=Gt.start*kt,te=(Gt.start+Gt.count)*kt;vt!==null&&(Zt=Math.max(Zt,vt.start*kt),te=Math.min(te,(vt.start+vt.count)*kt)),Rt!==null?(Zt=Math.max(Zt,0),te=Math.min(te,Rt.count)):Bt!=null&&(Zt=Math.max(Zt,0),te=Math.min(te,Bt.count));let ue=te-Zt;if(ue<0||ue===1/0)return;At.setup(K,ot,Ut,rt,Rt);let ie,ee=wt;if(Rt!==null&&(ie=R.get(Rt),ee=Ht,ee.setIndex(ie)),K.isMesh)ot.wireframe===!0?(Z.setLineWidth(ot.wireframeLinewidth*ut()),ee.setMode(T.LINES)):ee.setMode(T.TRIANGLES);else if(K.isLine){let zt=ot.linewidth;zt===void 0&&(zt=1),Z.setLineWidth(zt*ut()),K.isLineSegments?ee.setMode(T.LINES):K.isLineLoop?ee.setMode(T.LINE_LOOP):ee.setMode(T.LINE_STRIP)}else K.isPoints?ee.setMode(T.POINTS):K.isSprite&&ee.setMode(T.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ti("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))ee.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let zt=K._multiDrawStarts,ae=K._multiDrawCounts,Kt=K._multiDrawCount,Pe=Rt?R.get(Rt).bytesPerElement:1,ci=A.get(ot).currentProgram.getUniforms();for(let Le=0;Le<Kt;Le++)ci.setValue(T,"_gl_DrawID",Le),ee.render(zt[Le]/Pe,ae[Le])}else if(K.isInstancedMesh)ee.renderInstances(Zt,ue,K.count);else if(rt.isInstancedBufferGeometry){let zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,ae=Math.min(rt.instanceCount,zt);ee.renderInstances(Zt,ue,ae)}else ee.render(Zt,ue)};function ne(w,J,rt){w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=Ee,w.needsUpdate=!0,zs(w,J,rt),w.side=xn,w.needsUpdate=!0,zs(w,J,rt),w.side=He):zs(w,J,rt)}this.compile=function(w,J,rt=null){rt===null&&(rt=w),u=It.get(rt),u.init(J),S.push(u),rt.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(u.pushLight(K),K.castShadow&&u.pushShadow(K))}),w!==rt&&w.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(u.pushLight(K),K.castShadow&&u.pushShadow(K))}),u.setupLights();let ot=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let vt=K.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let Ut=vt[Ct];ne(Ut,rt,K),ot.add(Ut)}else ne(vt,rt,K),ot.add(vt)}),u=S.pop(),ot},this.compileAsync=function(w,J,rt=null){let ot=this.compile(w,J,rt);return new Promise(K=>{function vt(){if(ot.forEach(function(Ct){A.get(Ct).currentProgram.isReady()&&ot.delete(Ct)}),ot.size===0){K(w);return}setTimeout(vt,10)}k.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Qt=null;function cn(w){Qt&&Qt(w)}function tn(){zn.stop()}function ul(){zn.start()}let zn=new oh;zn.setAnimationLoop(cn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Qt=w,St.setAnimationLoop(w),w===null?zn.stop():zn.start()},St.addEventListener("sessionstart",tn),St.addEventListener("sessionend",ul),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(J),J=St.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,J,F),u=It.get(w,S.length),u.init(J),S.push(u),x.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B.setFromProjectionMatrix(x,Ze,J.reversedDepth),M=this.localClippingEnabled,D=Mt.init(this.clippingPlanes,M),p=ht.get(w,C.length),p.init(),C.push(p),St.enabled===!0&&St.isPresenting===!0){let vt=v.xr.getDepthSensingMesh();vt!==null&&Ua(vt,J,-1/0,v.sortObjects)}Ua(w,J,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(X,et),dt=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,dt&&Lt.addToRenderList(p,w),this.info.render.frame++,D===!0&&Mt.beginShadows();let rt=u.state.shadowsArray;Pt.render(rt,w,J),D===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ot=p.opaque,K=p.transmissive;if(u.setupLights(),J.isArrayCamera){let vt=J.cameras;if(K.length>0)for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){let Rt=vt[Ct];fl(ot,K,w,Rt)}dt&&Lt.render(w);for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){let Rt=vt[Ct];dl(p,w,Rt,Rt.viewport)}}else K.length>0&&fl(ot,K,w,J),dt&&Lt.render(w),dl(p,w,J);F!==null&&L===0&&(lt.updateMultisampleRenderTarget(F),lt.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(v,w,J),At.resetDefaultState(),E=-1,b=null,S.pop(),S.length>0?(u=S[S.length-1],D===!0&&Mt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function Ua(w,J,rt,ot){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){ot&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(x);let Ct=$.update(w),Ut=w.material;Ut.visible&&p.push(w,Ct,Ut,rt,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){let Ct=$.update(w),Ut=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Q.copy(Ct.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(x)),Array.isArray(Ut)){let Rt=Ct.groups;for(let kt=0,Gt=Rt.length;kt<Gt;kt++){let Bt=Rt[kt],Zt=Ut[Bt.materialIndex];Zt&&Zt.visible&&p.push(w,Ct,Zt,rt,Q.z,Bt)}}else Ut.visible&&p.push(w,Ct,Ut,rt,Q.z,null)}}let vt=w.children;for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++)Ua(vt[Ct],J,rt,ot)}function dl(w,J,rt,ot){let K=w.opaque,vt=w.transmissive,Ct=w.transparent;u.setupLightsView(rt),D===!0&&Mt.setGlobalState(v.clippingPlanes,rt),ot&&Z.viewport(O.copy(ot)),K.length>0&&Bs(K,J,rt),vt.length>0&&Bs(vt,J,rt),Ct.length>0&&Bs(Ct,J,rt),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fl(w,J,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ot.id]===void 0&&(u.state.transmissionRenderTarget[ot.id]=new nn(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Bi:je,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let vt=u.state.transmissionRenderTarget[ot.id],Ct=ot.viewport||O;vt.setSize(Ct.z*v.transmissionResolutionScale,Ct.w*v.transmissionResolutionScale);let Ut=v.getRenderTarget(),Rt=v.getActiveCubeFace(),kt=v.getActiveMipmapLevel();v.setRenderTarget(vt),v.getClearColor(tt),st=v.getClearAlpha(),st<1&&v.setClearColor(16777215,.5),v.clear(),dt&&Lt.render(rt);let Gt=v.toneMapping;v.toneMapping=Sn;let Bt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),u.setupLightsView(ot),D===!0&&Mt.setGlobalState(v.clippingPlanes,ot),Bs(w,rt,ot),lt.updateMultisampleRenderTarget(vt),lt.updateRenderTargetMipmap(vt),k.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let te=0,ue=J.length;te<ue;te++){let ie=J[te],ee=ie.object,zt=ie.geometry,ae=ie.material,Kt=ie.group;if(ae.side===He&&ee.layers.test(ot.layers)){let Pe=ae.side;ae.side=Ee,ae.needsUpdate=!0,pl(ee,rt,ot,zt,ae,Kt),ae.side=Pe,ae.needsUpdate=!0,Zt=!0}}Zt===!0&&(lt.updateMultisampleRenderTarget(vt),lt.updateRenderTargetMipmap(vt))}v.setRenderTarget(Ut,Rt,kt),v.setClearColor(tt,st),Bt!==void 0&&(ot.viewport=Bt),v.toneMapping=Gt}function Bs(w,J,rt){let ot=J.isScene===!0?J.overrideMaterial:null;for(let K=0,vt=w.length;K<vt;K++){let Ct=w[K],Ut=Ct.object,Rt=Ct.geometry,kt=Ct.group,Gt=Ct.material;Gt.allowOverride===!0&&ot!==null&&(Gt=ot),Ut.layers.test(rt.layers)&&pl(Ut,J,rt,Rt,Gt,kt)}}function pl(w,J,rt,ot,K,vt){w.onBeforeRender(v,J,rt,ot,K,vt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,J,rt,ot,w,vt),K.transparent===!0&&K.side===He&&K.forceSinglePass===!1?(K.side=Ee,K.needsUpdate=!0,v.renderBufferDirect(rt,J,ot,K,w,vt),K.side=xn,K.needsUpdate=!0,v.renderBufferDirect(rt,J,ot,K,w,vt),K.side=He):v.renderBufferDirect(rt,J,ot,K,w,vt),w.onAfterRender(v,J,rt,ot,K,vt)}function zs(w,J,rt){J.isScene!==!0&&(J=z);let ot=A.get(w),K=u.state.lights,vt=u.state.shadowsArray,Ct=K.state.version,Ut=ct.getParameters(w,K.state,vt,J,rt),Rt=ct.getProgramCacheKey(Ut),kt=ot.programs;ot.environment=w.isMeshStandardMaterial?J.environment:null,ot.fog=J.fog,ot.envMap=(w.isMeshStandardMaterial?Ft:Et).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",mt),kt=new Map,ot.programs=kt);let Gt=kt.get(Rt);if(Gt!==void 0){if(ot.currentProgram===Gt&&ot.lightsStateVersion===Ct)return gl(w,Ut),Gt}else Ut.uniforms=ct.getUniforms(w),w.onBeforeCompile(Ut,v),Gt=ct.acquireProgram(Ut,Rt),kt.set(Rt,Gt),ot.uniforms=Ut.uniforms;let Bt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=Mt.uniform),gl(w,Ut),ot.needsLights=mh(w),ot.lightsStateVersion=Ct,ot.needsLights&&(Bt.ambientLightColor.value=K.state.ambient,Bt.lightProbe.value=K.state.probe,Bt.directionalLights.value=K.state.directional,Bt.directionalLightShadows.value=K.state.directionalShadow,Bt.spotLights.value=K.state.spot,Bt.spotLightShadows.value=K.state.spotShadow,Bt.rectAreaLights.value=K.state.rectArea,Bt.ltc_1.value=K.state.rectAreaLTC1,Bt.ltc_2.value=K.state.rectAreaLTC2,Bt.pointLights.value=K.state.point,Bt.pointLightShadows.value=K.state.pointShadow,Bt.hemisphereLights.value=K.state.hemi,Bt.directionalShadowMap.value=K.state.directionalShadowMap,Bt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Bt.spotShadowMap.value=K.state.spotShadowMap,Bt.spotLightMatrix.value=K.state.spotLightMatrix,Bt.spotLightMap.value=K.state.spotLightMap,Bt.pointShadowMap.value=K.state.pointShadowMap,Bt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=Gt,ot.uniformsList=null,Gt}function ml(w){if(w.uniformsList===null){let J=w.currentProgram.getUniforms();w.uniformsList=Wi.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function gl(w,J){let rt=A.get(w);rt.outputColorSpace=J.outputColorSpace,rt.batching=J.batching,rt.batchingColor=J.batchingColor,rt.instancing=J.instancing,rt.instancingColor=J.instancingColor,rt.instancingMorph=J.instancingMorph,rt.skinning=J.skinning,rt.morphTargets=J.morphTargets,rt.morphNormals=J.morphNormals,rt.morphColors=J.morphColors,rt.morphTargetsCount=J.morphTargetsCount,rt.numClippingPlanes=J.numClippingPlanes,rt.numIntersection=J.numClipIntersection,rt.vertexAlphas=J.vertexAlphas,rt.vertexTangents=J.vertexTangents,rt.toneMapping=J.toneMapping}function fh(w,J,rt,ot,K){J.isScene!==!0&&(J=z),lt.resetTextureUnits();let vt=J.fog,Ct=ot.isMeshStandardMaterial?J.environment:null,Ut=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Zn,Rt=(ot.isMeshStandardMaterial?Ft:Et).get(ot.envMap||Ct),kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Gt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Bt=!!rt.morphAttributes.position,Zt=!!rt.morphAttributes.normal,te=!!rt.morphAttributes.color,ue=Sn;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ue=v.toneMapping);let ie=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ee=ie!==void 0?ie.length:0,zt=A.get(ot),ae=u.state.lights;if(D===!0&&(M===!0||w!==b)){let Se=w===b&&ot.id===E;Mt.setState(ot,w,Se)}let Kt=!1;ot.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ae.state.version||zt.outputColorSpace!==Ut||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Rt||ot.fog===!0&&zt.fog!==vt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Mt.numPlanes||zt.numIntersection!==Mt.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Gt||zt.morphTargets!==Bt||zt.morphNormals!==Zt||zt.morphColors!==te||zt.toneMapping!==ue||zt.morphTargetsCount!==ee)&&(Kt=!0):(Kt=!0,zt.__version=ot.version);let Pe=zt.currentProgram;Kt===!0&&(Pe=zs(ot,J,K));let ci=!1,Le=!1,qi=!1,oe=Pe.getUniforms(),Be=zt.uniforms;if(Z.useProgram(Pe.program)&&(ci=!0,Le=!0,qi=!0),ot.id!==E&&(E=ot.id,Le=!0),ci||b!==w){Z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),oe.setValue(T,"projectionMatrix",w.projectionMatrix),oe.setValue(T,"viewMatrix",w.matrixWorldInverse);let Te=oe.map.cameraPosition;Te!==void 0&&Te.setValue(T,H.setFromMatrixPosition(w.matrixWorld)),Y.logarithmicDepthBuffer&&oe.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&oe.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Le=!0,qi=!0)}if(K.isSkinnedMesh){oe.setOptional(T,K,"bindMatrix"),oe.setOptional(T,K,"bindMatrixInverse");let Se=K.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),oe.setValue(T,"boneTexture",Se.boneTexture,lt))}K.isBatchedMesh&&(oe.setOptional(T,K,"batchingTexture"),oe.setValue(T,"batchingTexture",K._matricesTexture,lt),oe.setOptional(T,K,"batchingIdTexture"),oe.setValue(T,"batchingIdTexture",K._indirectTexture,lt),oe.setOptional(T,K,"batchingColorTexture"),K._colorsTexture!==null&&oe.setValue(T,"batchingColorTexture",K._colorsTexture,lt));let ze=rt.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&xt.update(K,rt,Pe),(Le||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,oe.setValue(T,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Be.envMap.value=Rt,Be.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&J.environment!==null&&(Be.envMapIntensity.value=J.environmentIntensity),Le&&(oe.setValue(T,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&ph(Be,qi),vt&&ot.fog===!0&&gt.refreshFogUniforms(Be,vt),gt.refreshMaterialUniforms(Be,ot,V,at,u.state.transmissionRenderTarget[w.id]),Wi.upload(T,ml(zt),Be,lt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Wi.upload(T,ml(zt),Be,lt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&oe.setValue(T,"center",K.center),oe.setValue(T,"modelViewMatrix",K.modelViewMatrix),oe.setValue(T,"normalMatrix",K.normalMatrix),oe.setValue(T,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let Se=ot.uniformsGroups;for(let Te=0,Na=Se.length;Te<Na;Te++){let kn=Se[Te];Xt.update(kn,Pe),Xt.bind(kn,Pe)}}return Pe}function ph(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function mh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,J,rt){let ot=A.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=J,A.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){let rt=A.get(w);rt.__webglFramebuffer=J,rt.__useDefaultFramebuffer=J===void 0};let gh=T.createFramebuffer();this.setRenderTarget=function(w,J=0,rt=0){F=w,I=J,L=rt;let ot=!0,K=null,vt=!1,Ct=!1;if(w){let Rt=A.get(w);if(Rt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(T.FRAMEBUFFER,null),ot=!1;else if(Rt.__webglFramebuffer===void 0)lt.setupRenderTarget(w);else if(Rt.__hasExternalTextures)lt.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Bt=w.depthTexture;if(Rt.__boundDepthTexture!==Bt){if(Bt!==null&&A.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(w)}}let kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ct=!0);let Gt=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[J])?K=Gt[J][rt]:K=Gt[J],vt=!0):w.samples>0&&lt.useMultisampledRTT(w)===!1?K=A.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?K=Gt[rt]:K=Gt,O.copy(w.viewport),G.copy(w.scissor),j=w.scissorTest}else O.copy(it).multiplyScalar(V).floor(),G.copy(_t).multiplyScalar(V).floor(),j=pt;if(rt!==0&&(K=gh),Z.bindFramebuffer(T.FRAMEBUFFER,K)&&ot&&Z.drawBuffers(w,K),Z.viewport(O),Z.scissor(G),Z.setScissorTest(j),vt){let Rt=A.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt.__webglTexture,rt)}else if(Ct){let Rt=J;for(let kt=0;kt<w.textures.length;kt++){let Gt=A.get(w.textures[kt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,rt,Rt)}}else if(w!==null&&rt!==0){let Rt=A.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Rt.__webglTexture,rt)}E=-1},this.readRenderTargetPixels=function(w,J,rt,ot,K,vt,Ct,Ut=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt){Z.bindFramebuffer(T.FRAMEBUFFER,Rt);try{let kt=w.textures[Ut],Gt=kt.format,Bt=kt.type;if(!Y.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ot&&rt>=0&&rt<=w.height-K&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ut),T.readPixels(J,rt,ot,K,Ot.convert(Gt),Ot.convert(Bt),vt))}finally{let kt=F!==null?A.get(F).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,J,rt,ot,K,vt,Ct,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Rt=Rt[Ct]),Rt)if(J>=0&&J<=w.width-ot&&rt>=0&&rt<=w.height-K){Z.bindFramebuffer(T.FRAMEBUFFER,Rt);let kt=w.textures[Ut],Gt=kt.format,Bt=kt.type;if(!Y.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Zt),T.bufferData(T.PIXEL_PACK_BUFFER,vt.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ut),T.readPixels(J,rt,ot,K,Ot.convert(Gt),Ot.convert(Bt),0);let te=F!==null?A.get(F).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,te);let ue=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ic(T,ue,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Zt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,vt),T.deleteBuffer(Zt),T.deleteSync(ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,rt=0){let ot=Math.pow(2,-rt),K=Math.floor(w.image.width*ot),vt=Math.floor(w.image.height*ot),Ct=J!==null?J.x:0,Ut=J!==null?J.y:0;lt.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,rt,0,0,Ct,Ut,K,vt),Z.unbindTexture()};let _h=T.createFramebuffer(),xh=T.createFramebuffer();this.copyTextureToTexture=function(w,J,rt=null,ot=null,K=0,vt=null){vt===null&&(K!==0?(Ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=K,K=0):vt=0);let Ct,Ut,Rt,kt,Gt,Bt,Zt,te,ue,ie=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Rt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Gt=rt.min.y,Bt=rt.isBox3?rt.min.z:0;else{let ze=Math.pow(2,-K);Ct=Math.floor(ie.width*ze),Ut=Math.floor(ie.height*ze),w.isDataArrayTexture?Rt=ie.depth:w.isData3DTexture?Rt=Math.floor(ie.depth*ze):Rt=1,kt=0,Gt=0,Bt=0}ot!==null?(Zt=ot.x,te=ot.y,ue=ot.z):(Zt=0,te=0,ue=0);let ee=Ot.convert(J.format),zt=Ot.convert(J.type),ae;J.isData3DTexture?(lt.setTexture3D(J,0),ae=T.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(lt.setTexture2DArray(J,0),ae=T.TEXTURE_2D_ARRAY):(lt.setTexture2D(J,0),ae=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,J.unpackAlignment);let Kt=T.getParameter(T.UNPACK_ROW_LENGTH),Pe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ci=T.getParameter(T.UNPACK_SKIP_PIXELS),Le=T.getParameter(T.UNPACK_SKIP_ROWS),qi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ie.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,kt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Gt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Bt);let oe=w.isDataArrayTexture||w.isData3DTexture,Be=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){let ze=A.get(w),Se=A.get(J),Te=A.get(ze.__renderTarget),Na=A.get(Se.__renderTarget);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Te.__webglFramebuffer),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let kn=0;kn<Rt;kn++)oe&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,A.get(w).__webglTexture,K,Bt+kn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,A.get(J).__webglTexture,vt,ue+kn)),T.blitFramebuffer(kt,Gt,Ct,Ut,Zt,te,Ct,Ut,T.DEPTH_BUFFER_BIT,T.NEAREST);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||A.has(w)){let ze=A.get(w),Se=A.get(J);Z.bindFramebuffer(T.READ_FRAMEBUFFER,_h),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,xh);for(let Te=0;Te<Rt;Te++)oe?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,K,Bt+Te):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ze.__webglTexture,K),Be?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Se.__webglTexture,vt,ue+Te):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,vt),K!==0?T.blitFramebuffer(kt,Gt,Ct,Ut,Zt,te,Ct,Ut,T.COLOR_BUFFER_BIT,T.NEAREST):Be?T.copyTexSubImage3D(ae,vt,Zt,te,ue+Te,kt,Gt,Ct,Ut):T.copyTexSubImage2D(ae,vt,Zt,te,kt,Gt,Ct,Ut);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(ae,vt,Zt,te,ue,Ct,Ut,Rt,ee,zt,ie.data):J.isCompressedArrayTexture?T.compressedTexSubImage3D(ae,vt,Zt,te,ue,Ct,Ut,Rt,ee,ie.data):T.texSubImage3D(ae,vt,Zt,te,ue,Ct,Ut,Rt,ee,zt,ie):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,vt,Zt,te,Ct,Ut,ee,zt,ie.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,vt,Zt,te,ie.width,ie.height,ee,ie.data):T.texSubImage2D(T.TEXTURE_2D,vt,Zt,te,Ct,Ut,ee,zt,ie);T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ci),T.pixelStorei(T.UNPACK_SKIP_ROWS,Le),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qi),vt===0&&J.generateMipmaps&&T.generateMipmap(ae),Z.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?lt.setTextureCube(w,0):w.isData3DTexture?lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?lt.setTexture2DArray(w,0):lt.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){I=0,L=0,F=null,Z.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};function hl(i,{animated:t=!0,center:e=[60,-60],style:n="flow"}={}){let s=i==="lava",r={value:0},a=new Qn({color:s?"#ff6416":"#0875bd",roughness:s?.45:.24,emissive:s?"#ed3f08":"#001b35",emissiveIntensity:s?.28:.05}),o=s?"vec2 flow=p+vec2(t*.055,-t*.035);float n=lf(flow+vec2(sin(p.y*.7+t*.12),cos(p.x*.8-t*.1))*.35);float heat=smoothstep(.28,.73,n);vec3 liquid=mix(vec3(.34,.025,.005),vec3(1.,.24,.014),heat);float vein=1.-smoothstep(.018,.068,abs(n-.53));liquid=mix(liquid,vec3(1.,.67,.075),vein*.77);float phase=fract(t*.085+.17);float dist=length(vLiquidXY-uLiquidCenter-vec2(9,-5));float rim=(1.-smoothstep(.6,1.8,abs(dist-phase*12.)))*sin(phase*3.14159)*.6;liquid+=vec3(.38,.19,.015)*rim;diffuseColor.rgb=liquid;":"float a=sin(p.x*1.8+p.y*.65+t*.55)+sin(p.y*2.2-p.x*.45-t*.38);float b=sin(p.x*.9-p.y*1.6+t*.28);float ripple=pow(max(0.,1.-abs(sin(a*1.8+b))),12.);vec3 liquid=mix(vec3(.015,.17,.37),vec3(.025,.43,.65),.5+.22*a);liquid+=vec3(.13,.3,.32)*ripple*.55;float sheen=pow(max(0.,sin(p.x*.45+p.y*.6-t*.22)),16.)*.16;liquid+=vec3(.18,.38,.42)*sheen;float phase=fract(t*.11);float dist=length(vLiquidXY-uLiquidCenter);float ring=(1.-smoothstep(.35,1.35,abs(dist-phase*23.)))*sin(phase*3.14159)*.16;liquid+=vec3(.4,.7,.8)*ring;diffuseColor.rgb=liquid;",c=_l[i]?.[n]||o;return a.onBeforeCompile=l=>{l.uniforms.uLiquidTime=r,l.uniforms.uLiquidCenter={value:new ft(...e)},l.vertexShader=`varying vec2 vLiquidXY;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidXY=position.xy;`),l.fragmentShader=`uniform float uLiquidTime;uniform vec2 uLiquidCenter;varying vec2 vLiquidXY;
 float lh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float ln(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(lh(i),lh(i+vec2(1,0)),f.x),mix(lh(i+vec2(0,1)),lh(i+vec2(1,1)),f.x),f.y);}
 float lf(vec2 p){return ln(p)*.57+ln(p*2.03)*.28+ln(p*4.01)*.15;}
 `+l.fragmentShader,l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec2 p=vLiquidXY*.065;float t=uLiquidTime;
 ${c}`)},a.customProgramCacheKey=()=>i+"-"+n+"-2",{material:a,update(l){r.value=t?l:0},dispose(){a.dispose()},type:i}}var Fs=new q;function We(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Fs.copy(t),Fs[n]=0,Fs.normalize();let l=.5*a/(a+o),h=1-Fs.angleTo(i)/c;return Math.sign(Fs[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Da=class i extends Un{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new q,l=new q,h=new q(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,g=d.length/6,_=new q,p=.5/a;for(let u=0,C=0;u<d.length;u+=3,C+=2)switch(c.fromArray(d,u),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[u+0]=h.x*Math.sign(c.x)+l.x*r,d[u+1]=h.y*Math.sign(c.y)+l.y*r,d[u+2]=h.z*Math.sign(c.z)+l.z*r,f[u+0]=l.x,f[u+1]=l.y,f[u+2]=l.z,Math.floor(u/g)){case 0:_.set(1,0,0),m[C+0]=We(_,l,"z","y",r,n),m[C+1]=1-We(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),m[C+0]=1-We(_,l,"z","y",r,n),m[C+1]=1-We(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),m[C+0]=1-We(_,l,"x","z",r,t),m[C+1]=We(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),m[C+0]=1-We(_,l,"x","z",r,t),m[C+1]=1-We(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),m[C+0]=1-We(_,l,"x","y",r,t),m[C+1]=1-We(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),m[C+0]=We(_,l,"x","y",r,t),m[C+1]=1-We(_,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var tg=ge,Os=class i extends ti{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Es(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(B,D){if(B.nodeType!==1)return;let M=v(B),x=!1,H=null;switch(B.nodeName){case"svg":D=g(B,D);break;case"style":r(B);break;case"g":D=g(B,D);break;case"path":D=g(B,D),B.hasAttribute("d")&&(H=s(B));break;case"rect":D=g(B,D),H=c(B);break;case"polygon":D=g(B,D),H=l(B);break;case"polyline":D=g(B,D),H=h(B);break;case"circle":D=g(B,D),H=d(B);break;case"ellipse":D=g(B,D),H=f(B);break;case"line":D=g(B,D),H=m(B);break;case"defs":x=!0;break;case"use":D=g(B,D);let dt=(B.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ut=B.viewportElement.getElementById(dt);ut?n(ut,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+dt);break;default:}H&&(D.fill!==void 0&&D.fill!=="none"&&H.color.setStyle(D.fill,tg),I(H,it),G.push(H),H.userData={node:B,style:D});let Q=B.childNodes;for(let z=0;z<Q.length;z++){let dt=Q[z];x&&dt.nodeName!=="style"&&dt.nodeName!=="defs"||n(dt,D)}M&&(tt.pop(),tt.length>0?it.copy(tt[tt.length-1]):it.identity())}function s(B){let D=new Qe,M=new ft,x=new ft,H=new ft,Q=!0,z=!1,dt=B.getAttribute("d");if(dt===""||dt==="none")return null;let ut=dt.match(/[a-df-z][^a-df-z]*/ig);for(let T=0,N=ut.length;T<N;T++){let k=ut[T],Y=k.charAt(0),Z=k.slice(1).trim();Q===!0&&(z=!0,Q=!1);let U;switch(Y){case"M":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2)M.x=U[A+0],M.y=U[A+1],x.x=M.x,x.y=M.y,A===0?D.moveTo(M.x,M.y):D.lineTo(M.x,M.y),A===0&&H.copy(M);break;case"H":U=p(Z);for(let A=0,lt=U.length;A<lt;A++)M.x=U[A],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"V":U=p(Z);for(let A=0,lt=U.length;A<lt;A++)M.y=U[A],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"L":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2)M.x=U[A+0],M.y=U[A+1],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"C":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=6)D.bezierCurveTo(U[A+0],U[A+1],U[A+2],U[A+3],U[A+4],U[A+5]),x.x=U[A+2],x.y=U[A+3],M.x=U[A+4],M.y=U[A+5],A===0&&z===!0&&H.copy(M);break;case"S":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=4)D.bezierCurveTo(_(M.x,x.x),_(M.y,x.y),U[A+0],U[A+1],U[A+2],U[A+3]),x.x=U[A+0],x.y=U[A+1],M.x=U[A+2],M.y=U[A+3],A===0&&z===!0&&H.copy(M);break;case"Q":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=4)D.quadraticCurveTo(U[A+0],U[A+1],U[A+2],U[A+3]),x.x=U[A+0],x.y=U[A+1],M.x=U[A+2],M.y=U[A+3],A===0&&z===!0&&H.copy(M);break;case"T":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2){let Et=_(M.x,x.x),Ft=_(M.y,x.y);D.quadraticCurveTo(Et,Ft,U[A+0],U[A+1]),x.x=Et,x.y=Ft,M.x=U[A+0],M.y=U[A+1],A===0&&z===!0&&H.copy(M)}break;case"A":U=p(Z,[3,4],7);for(let A=0,lt=U.length;A<lt;A+=7){if(U[A+5]==M.x&&U[A+6]==M.y)continue;let Et=M.clone();M.x=U[A+5],M.y=U[A+6],x.x=M.x,x.y=M.y,a(D,U[A],U[A+1],U[A+2],U[A+3],U[A+4],Et,M),A===0&&z===!0&&H.copy(M)}break;case"m":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2)M.x+=U[A+0],M.y+=U[A+1],x.x=M.x,x.y=M.y,A===0?D.moveTo(M.x,M.y):D.lineTo(M.x,M.y),A===0&&H.copy(M);break;case"h":U=p(Z);for(let A=0,lt=U.length;A<lt;A++)M.x+=U[A],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"v":U=p(Z);for(let A=0,lt=U.length;A<lt;A++)M.y+=U[A],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"l":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2)M.x+=U[A+0],M.y+=U[A+1],x.x=M.x,x.y=M.y,D.lineTo(M.x,M.y),A===0&&z===!0&&H.copy(M);break;case"c":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=6)D.bezierCurveTo(M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3],M.x+U[A+4],M.y+U[A+5]),x.x=M.x+U[A+2],x.y=M.y+U[A+3],M.x+=U[A+4],M.y+=U[A+5],A===0&&z===!0&&H.copy(M);break;case"s":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=4)D.bezierCurveTo(_(M.x,x.x),_(M.y,x.y),M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3]),x.x=M.x+U[A+0],x.y=M.y+U[A+1],M.x+=U[A+2],M.y+=U[A+3],A===0&&z===!0&&H.copy(M);break;case"q":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=4)D.quadraticCurveTo(M.x+U[A+0],M.y+U[A+1],M.x+U[A+2],M.y+U[A+3]),x.x=M.x+U[A+0],x.y=M.y+U[A+1],M.x+=U[A+2],M.y+=U[A+3],A===0&&z===!0&&H.copy(M);break;case"t":U=p(Z);for(let A=0,lt=U.length;A<lt;A+=2){let Et=_(M.x,x.x),Ft=_(M.y,x.y);D.quadraticCurveTo(Et,Ft,M.x+U[A+0],M.y+U[A+1]),x.x=Et,x.y=Ft,M.x=M.x+U[A+0],M.y=M.y+U[A+1],A===0&&z===!0&&H.copy(M)}break;case"a":U=p(Z,[3,4],7);for(let A=0,lt=U.length;A<lt;A+=7){if(U[A+5]==0&&U[A+6]==0)continue;let Et=M.clone();M.x+=U[A+5],M.y+=U[A+6],x.x=M.x,x.y=M.y,a(D,U[A],U[A+1],U[A+2],U[A+3],U[A+4],Et,M),A===0&&z===!0&&H.copy(M)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(M.copy(H),D.currentPath.currentPoint.copy(M),Q=!0);break;default:console.warn(k)}z=!1}return D}function r(B){if(!(!B.sheet||!B.sheet.cssRules||!B.sheet.cssRules.length))for(let D=0;D<B.sheet.cssRules.length;D++){let M=B.sheet.cssRules[D];if(M.type!==1)continue;let x=M.selectorText.split(/,/gm).filter(Boolean).map(H=>H.trim());for(let H=0;H<x.length;H++){let Q=Object.fromEntries(Object.entries(M.style).filter(([,z])=>z!==""));j[x[H]]=Object.assign(j[x[H]]||{},Q)}}}function a(B,D,M,x,H,Q,z,dt){if(D==0||M==0){B.lineTo(dt.x,dt.y);return}x=x*Math.PI/180,D=Math.abs(D),M=Math.abs(M);let ut=(z.x-dt.x)/2,T=(z.y-dt.y)/2,N=Math.cos(x)*ut+Math.sin(x)*T,k=-Math.sin(x)*ut+Math.cos(x)*T,Y=D*D,Z=M*M,U=N*N,A=k*k,lt=U/Y+A/Z;if(lt>1){let Mt=Math.sqrt(lt);D=Mt*D,M=Mt*M,Y=D*D,Z=M*M}let Et=Y*A+Z*U,Ft=(Y*Z-Et)/Et,R=Math.sqrt(Math.max(0,Ft));H===Q&&(R=-R);let y=R*D*k/M,$=-R*M*N/D,ct=Math.cos(x)*y-Math.sin(x)*$+(z.x+dt.x)/2,gt=Math.sin(x)*y+Math.cos(x)*$+(z.y+dt.y)/2,ht=o(1,0,(N-y)/D,(k-$)/M),It=o((N-y)/D,(k-$)/M,(-N-y)/D,(-k-$)/M)%(Math.PI*2);B.currentPath.absellipse(ct,gt,D,M,ht,ht+It,Q===0,x)}function o(B,D,M,x){let H=B*M+D*x,Q=Math.sqrt(B*B+D*D)*Math.sqrt(M*M+x*x),z=Math.acos(Math.max(-1,Math.min(1,H/Q)));return B*x-D*M<0&&(z=-z),z}function c(B){let D=S(B.getAttribute("x")||0),M=S(B.getAttribute("y")||0),x=S(B.getAttribute("rx")||B.getAttribute("ry")||0),H=S(B.getAttribute("ry")||B.getAttribute("rx")||0),Q=S(B.getAttribute("width")),z=S(B.getAttribute("height")),dt=1-.551915024494,ut=new Qe;return ut.moveTo(D+x,M),ut.lineTo(D+Q-x,M),(x!==0||H!==0)&&ut.bezierCurveTo(D+Q-x*dt,M,D+Q,M+H*dt,D+Q,M+H),ut.lineTo(D+Q,M+z-H),(x!==0||H!==0)&&ut.bezierCurveTo(D+Q,M+z-H*dt,D+Q-x*dt,M+z,D+Q-x,M+z),ut.lineTo(D+x,M+z),(x!==0||H!==0)&&ut.bezierCurveTo(D+x*dt,M+z,D,M+z-H*dt,D,M+z-H),ut.lineTo(D,M+H),(x!==0||H!==0)&&ut.bezierCurveTo(D,M+H*dt,D+x*dt,M,D+x,M),ut}function l(B){function D(Q,z,dt){let ut=S(z),T=S(dt);H===0?x.moveTo(ut,T):x.lineTo(ut,T),H++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new Qe,H=0;return B.getAttribute("points").replace(M,D),x.currentPath.autoClose=!0,x}function h(B){function D(Q,z,dt){let ut=S(z),T=S(dt);H===0?x.moveTo(ut,T):x.lineTo(ut,T),H++}let M=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,x=new Qe,H=0;return B.getAttribute("points").replace(M,D),x.currentPath.autoClose=!1,x}function d(B){let D=S(B.getAttribute("cx")||0),M=S(B.getAttribute("cy")||0),x=S(B.getAttribute("r")||0),H=new rn;H.absarc(D,M,x,0,Math.PI*2);let Q=new Qe;return Q.subPaths.push(H),Q}function f(B){let D=S(B.getAttribute("cx")||0),M=S(B.getAttribute("cy")||0),x=S(B.getAttribute("rx")||0),H=S(B.getAttribute("ry")||0),Q=new rn;Q.absellipse(D,M,x,H,0,Math.PI*2);let z=new Qe;return z.subPaths.push(Q),z}function m(B){let D=S(B.getAttribute("x1")||0),M=S(B.getAttribute("y1")||0),x=S(B.getAttribute("x2")||0),H=S(B.getAttribute("y2")||0),Q=new Qe;return Q.moveTo(D,M),Q.lineTo(x,H),Q.currentPath.autoClose=!1,Q}function g(B,D){D=Object.assign({},D);let M={};if(B.hasAttribute("class")){let z=B.getAttribute("class").split(/\s/).filter(Boolean).map(dt=>dt.trim());for(let dt=0;dt<z.length;dt++)M=Object.assign(M,j["."+z[dt]])}B.hasAttribute("id")&&(M=Object.assign(M,j["#"+B.getAttribute("id")]));function x(z,dt,ut){ut===void 0&&(ut=function(N){return N.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),N}),B.hasAttribute(z)&&(D[dt]=ut(B.getAttribute(z))),M[z]&&(D[dt]=ut(M[z])),B.style&&B.style[z]!==""&&(D[dt]=ut(B.style[z]))}function H(z){return Math.max(0,Math.min(1,S(z)))}function Q(z){return Math.max(0,S(z))}return x("fill","fill"),x("fill-opacity","fillOpacity",H),x("fill-rule","fillRule"),x("opacity","opacity",H),x("stroke","stroke"),x("stroke-opacity","strokeOpacity",H),x("stroke-width","strokeWidth",Q),x("stroke-linejoin","strokeLineJoin"),x("stroke-linecap","strokeLineCap"),x("stroke-miterlimit","strokeMiterLimit",Q),x("visibility","visibility"),D}function _(B,D){return B-(D-B)}function p(B,D,M){if(typeof B!="string")throw new TypeError("Invalid input: "+typeof B);let x={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},H=0,Q=1,z=2,dt=3,ut=H,T=!0,N="",k="",Y=[];function Z(Et,Ft,R){let y=new SyntaxError('Unexpected character "'+Et+'" at index '+Ft+".");throw y.partial=R,y}function U(){N!==""&&(k===""?Y.push(Number(N)):Y.push(Number(N)*Math.pow(10,Number(k)))),N="",k=""}let A,lt=B.length;for(let Et=0;Et<lt;Et++){if(A=B[Et],Array.isArray(D)&&D.includes(Y.length%M)&&x.FLAGS.test(A)){ut=Q,N=A,U();continue}if(ut===H){if(x.WHITESPACE.test(A))continue;if(x.DIGIT.test(A)||x.SIGN.test(A)){ut=Q,N=A;continue}if(x.POINT.test(A)){ut=z,N=A;continue}x.COMMA.test(A)&&(T&&Z(A,Et,Y),T=!0)}if(ut===Q){if(x.DIGIT.test(A)){N+=A;continue}if(x.POINT.test(A)){N+=A,ut=z;continue}if(x.EXP.test(A)){ut=dt;continue}x.SIGN.test(A)&&N.length===1&&x.SIGN.test(N[0])&&Z(A,Et,Y)}if(ut===z){if(x.DIGIT.test(A)){N+=A;continue}if(x.EXP.test(A)){ut=dt;continue}x.POINT.test(A)&&N[N.length-1]==="."&&Z(A,Et,Y)}if(ut===dt){if(x.DIGIT.test(A)){k+=A;continue}if(x.SIGN.test(A)){if(k===""){k+=A;continue}k.length===1&&x.SIGN.test(k)&&Z(A,Et,Y)}}x.WHITESPACE.test(A)?(U(),ut=H,T=!1):x.COMMA.test(A)?(U(),ut=H,T=!0):x.SIGN.test(A)?(U(),ut=Q,N=A):x.POINT.test(A)?(U(),ut=z,N=A):Z(A,Et,Y)}return U(),Y}let u=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function S(B){let D="px";if(typeof B=="string"||B instanceof String)for(let x=0,H=u.length;x<H;x++){let Q=u[x];if(B.endsWith(Q)){D=Q,B=B.substring(0,B.length-Q.length);break}}let M;return D==="px"&&e.defaultUnit!=="px"?M=C.in[e.defaultUnit]/e.defaultDPI:(M=C[D][e.defaultUnit],M<0&&(M=C[D].in*e.defaultDPI)),M*parseFloat(B)}function v(B){if(!(B.hasAttribute("transform")||B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))))return null;let D=P(B);return tt.length>0&&D.premultiply(tt[tt.length-1]),it.copy(D),tt.push(D),D}function P(B){let D=new Vt,M=st;if(B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))){let x=S(B.getAttribute("x")),H=S(B.getAttribute("y"));D.translate(x,H)}if(B.hasAttribute("transform")){let x=B.getAttribute("transform").split(")");for(let H=x.length-1;H>=0;H--){let Q=x[H].trim();if(Q==="")continue;let z=Q.indexOf("("),dt=Q.length;if(z>0&&z<dt){let ut=Q.slice(0,z),T=p(Q.slice(z+1));switch(M.identity(),ut){case"translate":if(T.length>=1){let N=T[0],k=0;T.length>=2&&(k=T[1]),M.translate(N,k)}break;case"rotate":if(T.length>=1){let N=0,k=0,Y=0;N=T[0]*Math.PI/180,T.length>=3&&(k=T[1],Y=T[2]),nt.makeTranslation(-k,-Y),at.makeRotation(N),V.multiplyMatrices(at,nt),nt.makeTranslation(k,Y),M.multiplyMatrices(nt,V)}break;case"scale":if(T.length>=1){let N=T[0],k=N;T.length>=2&&(k=T[1]),M.scale(N,k)}break;case"skewX":T.length===1&&M.set(1,Math.tan(T[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":T.length===1&&M.set(1,0,0,Math.tan(T[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":T.length===6&&M.set(T[0],T[2],T[4],T[1],T[3],T[5],0,0,1);break}}D.premultiply(M)}}return D}function I(B,D){function M(z){et.set(z.x,z.y,1).applyMatrix3(D),z.set(et.x,et.y)}function x(z){let dt=z.xRadius,ut=z.yRadius,T=Math.cos(z.aRotation),N=Math.sin(z.aRotation),k=new q(dt*T,dt*N,0),Y=new q(-ut*N,ut*T,0),Z=k.applyMatrix3(D),U=Y.applyMatrix3(D),A=st.set(Z.x,U.x,0,Z.y,U.y,0,0,0,1),lt=nt.copy(A).invert(),R=at.copy(lt).transpose().multiply(lt).elements,y=O(R[0],R[1],R[4]),$=Math.sqrt(y.rt1),ct=Math.sqrt(y.rt2);if(z.xRadius=1/$,z.yRadius=1/ct,z.aRotation=Math.atan2(y.sn,y.cs),!((z.aEndAngle-z.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ht=nt.set($,0,0,0,ct,0,0,0,1),It=at.set(y.cs,y.sn,0,-y.sn,y.cs,0,0,0,1),Mt=ht.multiply(It).multiply(A),Pt=Lt=>{let{x:xt,y:wt}=new q(Math.cos(Lt),Math.sin(Lt),0).applyMatrix3(Mt);return Math.atan2(wt,xt)};z.aStartAngle=Pt(z.aStartAngle),z.aEndAngle=Pt(z.aEndAngle),L(D)&&(z.aClockwise=!z.aClockwise)}}function H(z){let dt=E(D),ut=b(D);z.xRadius*=dt,z.yRadius*=ut;let T=dt>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);z.aRotation+=T,L(D)&&(z.aStartAngle*=-1,z.aEndAngle*=-1,z.aClockwise=!z.aClockwise)}let Q=B.subPaths;for(let z=0,dt=Q.length;z<dt;z++){let T=Q[z].curves;for(let N=0;N<T.length;N++){let k=T[N];k.isLineCurve?(M(k.v1),M(k.v2)):k.isCubicBezierCurve?(M(k.v0),M(k.v1),M(k.v2),M(k.v3)):k.isQuadraticBezierCurve?(M(k.v0),M(k.v1),M(k.v2)):k.isEllipseCurve&&(X.set(k.aX,k.aY),M(X),k.aX=X.x,k.aY=X.y,F(D)?x(k):H(k))}}}function L(B){let D=B.elements;return D[0]*D[4]-D[1]*D[3]<0}function F(B){let D=B.elements,M=D[0]*D[3]+D[1]*D[4];if(M===0)return!1;let x=E(B),H=b(B);return Math.abs(M/(x*H))>Number.EPSILON}function E(B){let D=B.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function b(B){let D=B.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function O(B,D,M){let x,H,Q,z,dt,ut=B+M,T=B-M,N=Math.sqrt(T*T+4*D*D);return ut>0?(x=.5*(ut+N),dt=1/x,H=B*dt*M-D*dt*D):ut<0?H=.5*(ut-N):(x=.5*N,H=-.5*N),T>0?Q=T+N:Q=T-N,Math.abs(Q)>2*Math.abs(D)?(dt=-2*D/Q,z=1/Math.sqrt(1+dt*dt),Q=dt*z):Math.abs(D)===0?(Q=1,z=0):(dt=-.5*Q/D,Q=1/Math.sqrt(1+dt*dt),z=dt*Q),T>0&&(dt=Q,Q=-z,z=dt),{rt1:x,rt2:H,cs:Q,sn:z}}let G=[],j={},tt=[],st=new Vt,nt=new Vt,at=new Vt,V=new Vt,X=new ft,et=new q,it=new Vt,_t=new DOMParser().parseFromString(t,"image/svg+xml");return n(_t.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:_t.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,p,u,C){let S=_.x,v=p.x,P=u.x,I=C.x,L=_.y,F=p.y,E=u.y,b=C.y,O=(I-P)*(L-E)-(b-E)*(S-P),G=(v-S)*(L-E)-(F-L)*(S-P),j=(b-E)*(v-S)-(I-P)*(F-L),tt=O/j,st=G/j;if(j===0&&O!==0||tt<=0||tt>=1||st<0||st>1)return null;if(O===0&&j===0){for(let nt=0;nt<2;nt++)if(a(nt===0?u:C,_,p),s.loc==n.ORIGIN){let at=nt===0?u:C;return{x:at.x,y:at.y,t:s.t}}else if(s.loc==n.BETWEEN){let at=+(S+s.t*(v-S)).toPrecision(10),V=+(L+s.t*(F-L)).toPrecision(10);return{x:at,y:V,t:s.t}}return null}else{for(let V=0;V<2;V++)if(a(V===0?u:C,_,p),s.loc==n.ORIGIN){let X=V===0?u:C;return{x:X.x,y:X.y,t:s.t}}let nt=+(S+tt*(v-S)).toPrecision(10),at=+(L+tt*(F-L)).toPrecision(10);return{x:nt,y:at,t:tt}}}function a(_,p,u){let C=u.x-p.x,S=u.y-p.y,v=_.x-p.x,P=_.y-p.y,I=C*P-v*S;if(_.x===p.x&&_.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===u.x&&_.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(I<-Number.EPSILON){s.loc=n.LEFT;return}if(I>Number.EPSILON){s.loc=n.RIGHT;return}if(C*v<0||S*P<0){s.loc=n.BEHIND;return}if(Math.sqrt(C*C+S*S)<Math.sqrt(v*v+P*P)){s.loc=n.BEYOND;return}let L;C!==0?L=v/C:L=P/S,s.loc=n.BETWEEN,s.t=L}function o(_,p){let u=[],C=[];for(let S=1;S<_.length;S++){let v=_[S-1],P=_[S];for(let I=1;I<p.length;I++){let L=p[I-1],F=p[I],E=r(v,P,L,F);E!==null&&u.find(b=>b.t<=E.t+Number.EPSILON&&b.t>=E.t-Number.EPSILON)===void 0&&(u.push(E),C.push(new ft(E.x,E.y)))}}return C}function c(_,p,u){let C=new ft;p.getCenter(C);let S=[];return u.forEach(v=>{v.boundingBox.containsPoint(C)&&o(_,v.points).forEach(I=>{S.push({identifier:v.identifier,isCW:v.isCW,point:I})})}),S.sort((v,P)=>v.point.x-P.point.x),S}function l(_,p,u,C,S){(S==null||S==="")&&(S="nonzero");let v=new ft;_.boundingBox.getCenter(v);let P=[new ft(u,v.y),new ft(C,v.y)],I=c(P,_.boundingBox,p);I.sort((G,j)=>G.point.x-j.point.x);let L=[],F=[];I.forEach(G=>{G.identifier===_.identifier?L.push(G):F.push(G)});let E=L[0].point.x,b=[],O=0;for(;O<F.length&&F[O].point.x<E;)b.length>0&&b[b.length-1]===F[O].identifier?b.pop():b.push(F[O].identifier),O++;if(b.push(_.identifier),S==="evenodd"){let G=b.length%2===0,j=b[b.length-2];return{identifier:_.identifier,isHole:G,for:j}}else if(S==="nonzero"){let G=!0,j=null,tt=null;for(let st=0;st<b.length;st++){let nt=b[st];G?(tt=p[nt].isCW,G=!1,j=nt):tt!==p[nt].isCW&&(tt=p[nt].isCW,G=!0)}return{identifier:_.identifier,isHole:G,for:j}}else console.warn('fill-rule: "'+S+'" is currently not implemented.')}let h=999999999,d=-999999999,f=t.subPaths.map(_=>{let p=_.getPoints(),u=-999999999,C=999999999,S=-999999999,v=999999999;for(let P=0;P<p.length;P++){let I=p[P];I.y>u&&(u=I.y),I.y<C&&(C=I.y),I.x>S&&(S=I.x),I.x<v&&(v=I.x)}return d<=S&&(d=S+1),h>=v&&(h=v-1),{curves:_.curves,points:p,isCW:ye.isClockWise(p),identifier:-1,boundingBox:new Cs(new ft(v,C),new ft(S,u))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;let m=f.map(_=>l(_,f,h,d,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!m[_.identifier].isHole){let u=new Ce;u.curves=_.curves,m.filter(S=>S.isHole&&S.for===_.identifier).forEach(S=>{let v=f[S.identifier],P=new rn;P.curves=v.curves,u.holes.push(P)}),g.push(u)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new Ie;return c.setAttribute("position",new re(r,3)),c.setAttribute("normal",new re(a,3)),c.setAttribute("uv",new re(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new ft,h=new ft,d=new ft,f=new ft,m=new ft,g=new ft,_=new ft,p=new ft,u=new ft,C=new ft,S=new ft,v=new ft,P=new ft,I=new ft,L=new ft,F=new ft,E=new ft;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=T(t);let b=t.length;if(b<2)return 0;let O=t[0].equals(t[b-1]),G,j=t[0],tt,st=e.strokeWidth/2,nt=1/(b-1),at=0,V,X,et,it,_t=!1,pt=0,B=c*3,D=c*2;M(t[0],t[1],l).multiplyScalar(st),p.copy(t[0]).sub(l),u.copy(t[0]).add(l),C.copy(p),S.copy(u);for(let N=1;N<b;N++){G=t[N],N===b-1?O?tt=t[1]:tt=void 0:tt=t[N+1];let k=l;if(M(j,G,k),d.copy(k).multiplyScalar(st),v.copy(G).sub(d),P.copy(G).add(d),V=at+nt,X=!1,tt!==void 0){M(G,tt,h),d.copy(h).multiplyScalar(st),I.copy(G).sub(d),L.copy(G).add(d),et=!0,d.subVectors(tt,j),k.dot(d)<0&&(et=!1),N===1&&(_t=et),d.subVectors(tt,G),d.normalize();let Y=Math.abs(k.dot(d));if(Y>Number.EPSILON){let Z=st/Y;d.multiplyScalar(-Z),f.subVectors(G,j),m.copy(f).setLength(Z).add(d),F.copy(m).negate();let U=m.length(),A=f.length();f.divideScalar(A),g.subVectors(tt,G);let lt=g.length();switch(g.divideScalar(lt),f.dot(F)<A&&g.dot(F)<lt&&(X=!0),E.copy(m).add(G),F.add(G),it=!1,X?et?(L.copy(F),P.copy(F)):(I.copy(F),v.copy(F)):Q(),e.strokeLineJoin){case"bevel":z(et,X,V);break;case"round":dt(et,X),et?H(G,v,I,V,0):H(G,L,P,V,1);break;case"miter":case"miter-clip":default:let Et=st*e.strokeMiterLimit/U;if(Et<1)if(e.strokeLineJoin!=="miter-clip"){z(et,X,V);break}else dt(et,X),et?(g.subVectors(E,v).multiplyScalar(Et).add(v),_.subVectors(E,I).multiplyScalar(Et).add(I),x(v,V,0),x(g,V,0),x(G,V,.5),x(G,V,.5),x(g,V,0),x(_,V,0),x(G,V,.5),x(_,V,0),x(I,V,0)):(g.subVectors(E,P).multiplyScalar(Et).add(P),_.subVectors(E,L).multiplyScalar(Et).add(L),x(P,V,1),x(g,V,1),x(G,V,.5),x(G,V,.5),x(g,V,1),x(_,V,1),x(G,V,.5),x(_,V,1),x(L,V,1));else X?(et?(x(u,at,1),x(p,at,0),x(E,V,0),x(u,at,1),x(E,V,0),x(F,V,1)):(x(u,at,1),x(p,at,0),x(E,V,1),x(p,at,0),x(F,V,0),x(E,V,1)),et?I.copy(E):L.copy(E)):et?(x(v,V,0),x(E,V,0),x(G,V,.5),x(G,V,.5),x(E,V,0),x(I,V,0)):(x(P,V,1),x(E,V,1),x(G,V,.5),x(G,V,.5),x(E,V,1),x(L,V,1)),it=!0;break}}else Q()}else Q();!O&&N===b-1&&ut(t[0],C,S,et,!0,at),at=V,j=G,p.copy(I),u.copy(L)}if(!O)ut(G,v,P,et,!1,V);else if(X&&r){let N=E,k=F;_t!==et&&(N=F,k=E),et?(it||_t)&&(k.toArray(r,0),k.toArray(r,9),it&&N.toArray(r,3)):(it||!_t)&&(k.toArray(r,3),k.toArray(r,9),it&&N.toArray(r,0))}return pt;function M(N,k,Y){return Y.subVectors(k,N),Y.set(-Y.y,Y.x).normalize()}function x(N,k,Y){r&&(r[B]=N.x,r[B+1]=N.y,r[B+2]=0,a&&(a[B]=0,a[B+1]=0,a[B+2]=1),B+=3,o&&(o[D]=k,o[D+1]=Y,D+=2)),pt+=3}function H(N,k,Y,Z,U){l.copy(k).sub(N).normalize(),h.copy(Y).sub(N).normalize();let A=Math.PI,lt=l.dot(h);Math.abs(lt)<1&&(A=Math.abs(Math.acos(lt))),A/=n,d.copy(k);for(let Et=0,Ft=n-1;Et<Ft;Et++)f.copy(d).rotateAround(N,A),x(d,Z,U),x(f,Z,U),x(N,Z,.5),d.copy(f);x(f,Z,U),x(Y,Z,U),x(N,Z,.5)}function Q(){x(u,at,1),x(p,at,0),x(v,V,0),x(u,at,1),x(v,V,0),x(P,V,1)}function z(N,k,Y){k?N?(x(u,at,1),x(p,at,0),x(v,V,0),x(u,at,1),x(v,V,0),x(F,V,1),x(v,Y,0),x(I,Y,0),x(F,Y,.5)):(x(u,at,1),x(p,at,0),x(P,V,1),x(p,at,0),x(F,V,0),x(P,V,1),x(P,Y,1),x(F,Y,0),x(L,Y,1)):N?(x(v,Y,0),x(I,Y,0),x(G,Y,.5)):(x(P,Y,1),x(L,Y,0),x(G,Y,.5))}function dt(N,k){k&&(N?(x(u,at,1),x(p,at,0),x(v,V,0),x(u,at,1),x(v,V,0),x(F,V,1),x(v,at,0),x(G,V,.5),x(F,V,1),x(G,V,.5),x(I,at,0),x(F,V,1)):(x(u,at,1),x(p,at,0),x(P,V,1),x(p,at,0),x(F,V,0),x(P,V,1),x(P,at,1),x(F,V,0),x(G,V,.5),x(G,V,.5),x(F,V,0),x(L,at,1)))}function ut(N,k,Y,Z,U,A){switch(e.strokeLineCap){case"round":U?H(N,Y,k,A,.5):H(N,k,Y,A,.5);break;case"square":if(U)l.subVectors(k,N),h.set(l.y,-l.x),d.addVectors(l,h).add(N),f.subVectors(h,l).add(N),Z?(d.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(d.toArray(r,3),o[7]===1?f.toArray(r,9):d.toArray(r,9),f.toArray(r,0));else{l.subVectors(Y,N),h.set(l.y,-l.x),d.addVectors(l,h).add(N),f.subVectors(h,l).add(N);let lt=r.length;Z?(d.toArray(r,lt-3),f.toArray(r,lt-6),f.toArray(r,lt-12)):(f.toArray(r,lt-6),d.toArray(r,lt-3),f.toArray(r,lt-12))}break;case"butt":default:break}}function T(N){let k=!1;for(let Z=1,U=N.length-1;Z<U;Z++)if(N[Z].distanceTo(N[Z+1])<s){k=!0;break}if(!k)return N;let Y=[];Y.push(N[0]);for(let Z=1,U=N.length-1;Z<U;Z++)N[Z].distanceTo(N[Z+1])>=s&&Y.push(N[Z]);return Y.push(N[N.length-1]),Y}}};window.SlinkLivingLiquid={createLivingLiquid:hl};window.Slink3D=(()=>{let i,t,e,n,s,r=new As,a=[],o=[],c=[],l,h,d,f=!1,m,g=[],_=!0,p=0,u=0,C=(X,et=.55,it={})=>new Qn({color:X,roughness:et,metalness:0,...it});function S(X,et,it,_t,pt){let B=new Ce;return B.moveTo(X+pt,et),B.lineTo(X+it-pt,et),B.quadraticCurveTo(X+it,et,X+it,et+pt),B.lineTo(X+it,et+_t-pt),B.quadraticCurveTo(X+it,et+_t,X+it-pt,et+_t),B.lineTo(X+pt,et+_t),B.quadraticCurveTo(X,et+_t,X,et+_t-pt),B.lineTo(X,et+pt),B.quadraticCurveTo(X,et,X+pt,et),B}function v(X,et,it=0,_t=0,pt=0,B=n){let D=new be(X,et);return D.position.set(it,_t,pt),D.castShadow=!0,D.receiveShadow=!0,B.add(D),D}function P(X,et,it,_t,pt,B,D,M,x=n){return v(new Da(X,et,it,4,_t),pt,B,D,M,x)}function I(){let X=document.createElement("canvas");X.width=X.height=128;let et=X.getContext("2d"),it=et.createImageData(128,128),_t=73;for(let B=0;B<it.data.length;B+=4){_t=_t*1664525+1013904223>>>0;let D=128+(_t>>>27)%9;it.data[B]=it.data[B+1]=it.data[B+2]=D,it.data[B+3]=255}et.putImageData(it,0,0);let pt=new Pi(X);return pt.wrapS=pt.wrapT=bi,pt}let L=()=>I();function F(){let X=I(),et=X.image,it=et.getContext("2d");it.fillStyle="#656565";for(let _t=0;_t<4;_t++){let pt=_t*Math.PI/2+.5;it.save(),it.translate(64+Math.cos(pt)*18,64+Math.sin(pt)*18),it.rotate(pt),it.beginPath(),it.ellipse(0,0,18,9,0,0,Math.PI*2),it.fill(),it.restore()}return it.beginPath(),it.arc(64,64,5,0,Math.PI*2),it.fill(),X.needsUpdate=!0,X}function E(X){let et=document.createElement("canvas");et.width=et.height=128;let it=et.getContext("2d");it.fillStyle="#77421a",it.font="bold 82px Trebuchet MS",it.textAlign="center",it.textBaseline="middle",it.fillText(String(X),64,69);let _t=new Pi(et);return _t.colorSpace=ge,_t}function b(X,et){let it=0;for(let pt=0;pt<X.length;pt++){let B=X[pt],D=X[(pt+1)%X.length];it+=B.x*D.y-D.x*B.y}let _t=it>0?1:-1;return X.map((pt,B)=>{let D=X[(B+X.length-1)%X.length],M=X[(B+1)%X.length],x=pt.clone().sub(D).normalize(),H=M.clone().sub(pt).normalize(),Q=new ft(x.y,-x.x).multiplyScalar(_t),z=new ft(H.y,-H.x).multiplyScalar(_t),dt=Q.clone().add(z).normalize();return pt.clone().add(dt.multiplyScalar(et/Math.max(.25,dt.dot(Q))))})}function O(X){let et=new Ce;return X.forEach((it,_t)=>_t?et.lineTo(it.x,-it.y):et.moveTo(it.x,-it.y)),et.closePath(),et}function G(X,et){let it=new Set(X),_t=[];for(;it.size;){let pt=it.values().next().value,B=[pt];it.delete(pt);for(let D=0;D<B.length;D++){let M=B[D];for(let x of[M-et,M+et,M%et?M-1:-1,M%et<et-1?M+1:-1])it.has(x)&&(it.delete(x),B.push(x))}_t.push(B)}return _t}function j(X,et,it){let _t=new Set(X),pt=[],B=(M,x)=>M>=0&&x>=0&&M<et&&_t.has(x*et+M);for(let M of X){let x=M%et,H=Math.floor(M/et),Q=20+x*80,z=20+H*80;B(x,H-1)||pt.push([[Q,z],[Q+80,z]]),B(x+1,H)||pt.push([[Q+80,z],[Q+80,z+80]]),B(x,H+1)||pt.push([[Q+80,z+80],[Q,z+80]]),B(x-1,H)||pt.push([[Q,z+80],[Q,z]])}let D=[];for(;pt.length;){let M=pt.shift(),x=M[0],H=[x],Q=M[1];for(;Q.join()!=x.join();){H.push(Q);let z=pt.findIndex(dt=>dt[0].join()==Q.join());if(z<0)break;Q=pt.splice(z,1)[0][1]}H=H.filter((z,dt)=>{let ut=H[(dt+H.length-1)%H.length],T=H[(dt+1)%H.length];return!(ut[0]===z[0]&&T[0]===z[0]||ut[1]===z[1]&&T[1]===z[1])}),D.push(H.map(z=>new ft(...z)))}return D.sort((M,x)=>Math.abs(ye.area(x))-Math.abs(ye.area(M))),D.map((M,x)=>{let H=b(M,x?it:-it),Q=new Ce;return H.forEach((z,dt)=>{let ut=H[(dt+H.length-1)%H.length],T=H[(dt+1)%H.length],N=Math.min(10,z.distanceTo(ut)/3,z.distanceTo(T)/3),k=z.clone().add(ut.clone().sub(z).normalize().multiplyScalar(N)),Y=z.clone().add(T.clone().sub(z).normalize().multiplyScalar(N));dt?Q.lineTo(k.x,-k.y):Q.moveTo(k.x,-k.y),Q.quadraticCurveTo(z.x,-z.y,Y.x,-Y.y)}),Q.closePath(),Q})}function tt(){s=document.createElement("canvas"),s.id="terrain3d",s.setAttribute("aria-hidden","true"),document.getElementById("field").prepend(s),i=new Pa({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Nr,i.outputColorSpace=ge,i.toneMapping=Gr,i.toneMappingExposure=.88,t=new us,t.add(new ws("#fff6dc","#a28d6c",1.65));let X=new Fi("#fff4dc",3.3);X.position.set(-300,450,750),X.castShadow=!0,X.shadow.mapSize.set(2048,2048),Object.assign(X.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:1,far:2e3}),X.shadow.bias=-3e-4,X.shadow.normalBias=.9,X.shadow.radius=4,t.add(X);let et=new Fi("#d4e8ff",.4);et.position.set(500,-100,400),t.add(et),n=new gn,t.add(n),e=new ei,e.up.set(0,1,0),e.near=1,e.far=3e3,h=new ResizeObserver(()=>st()),h.observe(document.getElementById("board"));let it=(pt,B)=>{let D=s.getBoundingClientRect();return r.setFromCamera(new ft((pt-D.left)/D.width*2-1,-(B-D.top)/D.height*2+1),e),r.intersectObjects(a,!1)[0]?.object.userData.cell??-1},_t=pt=>{if(!f)return;let B=m||pt,D=pt.clientX-B.clientX,M=pt.clientY-B.clientY,x=Math.max(1,Math.ceil(Math.hypot(D,M)/3));for(let H=1;H<=x;H++){let Q=it(B.clientX+D*H/x,B.clientY+M*H/x);Q>=0&&l.onMove(Q)}m={clientX:pt.clientX,clientY:pt.clientY}};s.addEventListener("pointerdown",pt=>{pt.preventDefault(),s.setPointerCapture(pt.pointerId),f=!0,m=null,_t(pt),document.getElementById("board").focus({preventScroll:!0})}),s.addEventListener("pointermove",_t);for(let pt of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(pt,()=>{f=!1,m=null});s.addEventListener("webglcontextlost",pt=>{pt.preventDefault(),document.getElementById("field").classList.remove("has-3d")}),s.addEventListener("webglcontextrestored",()=>location.reload()),document.getElementById("field").classList.add("has-3d")}function st(){if(!l)return;let X=document.getElementById("board"),et=X.clientWidth,it=X.clientHeight;if(!et||!it)return;i.setSize(et,it,!1);let _t=new sn().setFromObject(n),pt=_t.getCenter(new q);e.position.set(pt.x,pt.y-430,pt.z+1250),e.lookAt(pt.x,pt.y,0),e.updateMatrixWorld();let B=t.children.find(ut=>ut.isDirectionalLight&&ut.castShadow);if(B){let ut=Math.max(_t.max.x-_t.min.x,_t.max.y-_t.min.y)*.75+60;B.target.position.set(pt.x,pt.y,0),t.add(B.target),Object.assign(B.shadow.camera,{left:-ut,right:ut,top:ut,bottom:-ut}),B.shadow.camera.updateProjectionMatrix()}let D=e.matrixWorldInverse,M=new ft(1/0,1/0),x=new ft(-1/0,-1/0);for(let ut of[_t.min.x,_t.max.x])for(let T of[_t.min.y,_t.max.y])for(let N of[_t.min.z,_t.max.z]){let k=new q(ut,T,N).applyMatrix4(D);M.min(k),x.max(k)}let H=(M.x+x.x)/2,Q=(M.y+x.y)/2,z=Math.max((x.y-M.y)/2,(x.x-M.x)/2/(et/it))+13,dt=z*et/it;Object.assign(e,{left:H-dt,right:H+dt,top:Q+z,bottom:Q-z}),e.updateProjectionMatrix(),nt()}function nt(){i.render(t,e)}function at(X){if(requestAnimationFrame(at),!i||!l||document.hidden){u=X;return}if(X-u<33)return;let et=Math.min((X-u)/1e3,.1);u=X,_&&(p+=et);for(let it of g)it.update(p);nt()}requestAnimationFrame(at),window.addEventListener("message",X=>{X.origin===location.origin&&(X.data==="pause"&&(_=!1),X.data==="play"&&(_=!0))});function V(X,et,it){l={l:X,onMove:it};for(let ut of[...n.children])n.remove(ut),ut.traverse(T=>{if(T.geometry&&T.geometry.dispose(),T.material)for(let N of[].concat(T.material))N.map&&N.map.userData.transient&&N.map.dispose(),N.dispose()});a=[],o=[],c=[],g=[];let _t=new Os,pt=_t.parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+et+'"/></svg>'),B=Os.createShapes(pt.paths[0])[0].getPoints(24);B.pop();let D=O(b(B,11)),M=C("#f6dfb5",.62,{bumpMap:L(),bumpScale:.18,side:He}),x=[...X.water||[],...X.lava||[]],H=ut=>({x:ut%X.n*80+60,y:-(Math.floor(ut/X.n)*80+60)}),Q=[];for(let[ut,T]of[["water",X.water||[]],["lava",X.lava||[]]])for(let N of G(T,X.n)){let k=j(N,X.n,7);D.holes.push(k[0]),Q.push({type:ut,group:N,shapes:k})}let z=new Ui(D,{depth:22,bevelEnabled:!0,bevelThickness:5,bevelSize:5,bevelSegments:5,steps:1,curveSegments:24});v(z,M,0,0,-24);for(let ut of G(X.solution,X.n)){let T=j(ut,X.n,0),N=T[0];N.holes.push(...T.slice(1)),v(new Ss(N),C("#709c2c",.8),0,0,3.2)}let dt=L();for(let ut of X.solution){let T=H(ut),N=C("#8cb729",.48,{bumpMap:dt,bumpScale:.18}),k=P(78.5,78.5,17,7.5,N,T.x,T.y,5);if(k.userData.cell=ut,a.push(k),o.push({i:ut,mat:N}),ut%3===0){let Y=C("#9fc53b",.6);for(let Z=0;Z<4;Z++){let U=Z*Math.PI/2+.3,A=v(new Ni(1,12,8),Y,T.x+21+Math.cos(U)*4,T.y-20+Math.sin(U)*4,13.7);A.scale.set(4.4,2.6,.65),A.rotation.z=U}v(new Ni(1.1,10,8),Y,T.x+21,T.y-20,14.1)}}for(let{type:ut,group:T,shapes:N}of Q){let k=new URLSearchParams(location.search).get("animated")!=="0",Y=H(T[0]),Z=hl(ut,{animated:k,style:new URLSearchParams(location.search).get(ut+"Style")||new URLSearchParams(location.search).get("style")||"flow",center:[Y.x,Y.y]});g.push(Z);let U=N[0];U.holes.push(...N.slice(1)),v(new Ui(U,{depth:3,bevelEnabled:!1,curveSegments:20}),Z.material,0,0,-15)}for(let ut of X.stones||[]){let T=H(ut),N=P(66,66,33,8,C("#928675",.85,{bumpMap:F(),bumpScale:1.1}),T.x,T.y,10);N.userData.cell=-1,a.push(N)}for(let[ut,T]of X.walls){let N=H(ut),k=H(T);P(N.x===k.x?53:9,N.y===k.y?53:9,18,3,C("#a49983",.85),(N.x+k.x)/2,(N.y+k.y)/2,17)}for(let[ut,T]of X.marks.entries()){let N=H(T),k=C("#ffd456",.35),Y=v(new ps(17,17,5,48),k,N.x,N.y,22);Y.rotation.x=Math.PI/2,c.push({i:T,mat:k});let Z=new be(new Kn(27,27),new Jn({map:E(ut+1),transparent:!0,depthWrite:!1}));Z.position.set(N.x,N.y,24.6),n.add(Z)}st()}return{update(X,et,it,_t){try{i||tt(),l?.l!==X&&V(X,it,_t);for(let pt of o){let B=et.includes(pt.i);pt.mat.color.set(B?"#c4e447":"#a9cc3e"),pt.mat.emissive.set(B?"#699d12":"#000000"),pt.mat.emissiveIntensity=B?.12:0}for(let pt of c)pt.mat.color.set(et.includes(pt.i)?"#e3ee98":"#ffd456");nt()}catch(pt){console.error("3D renderer:",pt),document.getElementById("field").classList.remove("has-3d")}}}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
