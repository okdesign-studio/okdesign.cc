/* OK Design Print Lab. Built from tools/print-lab. Includes three.js (MIT). */
(()=>{var rp=Object.defineProperty;var pi=(i,e)=>{for(var t in e)rp(i,t,{get:e[t],enumerable:!0})};var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,Pc=1,Gu=2;var qr=1,Co=2,Us=3,Li=0,Ct=1,tn=2,Ki=0,Os=1,Lc=2,Dc=3,Nc=4,Vu=5;var ji=100,Wu=101,qu=102,Xu=103,$u=104,Yu=200,Zu=201,Ju=202,Ku=203,Fc=204,Uc=205,ju=206,Qu=207,ed=208,td=209,nd=210,id=211,sd=212,rd=213,ad=214,Wa=0,qa=1,Xa=2,Ss=3,$a=4,Ya=5,Za=6,Ja=7,Io=0,od=1,ld=2,zn=0,Oc=1,kc=2,Bc=3,zc=4,Hc=5,Gc=6,Xr=7;var Vc=300,Qi=301,ks=302,Po=303,Lo=304,ws=1e3,kn=1001,Ka=1002,Ot=1003,cd=1004;var $r=1005;var Jt=1006,Do=1007;var Cn=1008;var nn=1009,Wc=1010,qc=1011,Bs=1012,No=1013,In=1014,Mn=1015,Pn=1016,Fo=1017,Uo=1018,es=1020,Xc=35902,$c=35899,Yc=1021,Zc=1022,Ln=1023,ei=1026,ri=1027,Oo=1028,ko=1029,Di=1030,Bo=1031;var zo=1033,Yr=33776,Zr=33777,Jr=33778,Kr=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,qo=36196,Xo=37492,$o=37496,Yo=37488,Zo=37489,jr=37490,Jo=37491,Ko=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,Qr=36285,gl=36286;var _r=2300,ja=2301,Ga=2302,vc=2303,yc=2400,bc=2401,Mc=2402;var hd=3200;var ea=0,ud=1,ai="",bt="srgb",xr="srgb-linear",vr="linear",it="srgb";var Va=7680;var dd=519,fd=512,pd=513,md=514,Jc=515,gd=516,_d=517,Kc=518,jc=519,xd=35044;var Qc="300 es",yn=2e3,Es=2001;function ap(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vd(){let i=yr("canvas");return i.style.display="block",i}var iu={},Ts=null;function eh(...i){let e="THREE."+i.shift();Ts?Ts("log",e,...i):console.log(e,...i)}function yd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=yd(i);let e="THREE."+i.shift();if(Ts)Ts("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=yd(i);let e="THREE."+i.shift();if(Ts)Ts("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(" ");e in iu||(iu[e]=!0,Ie(...i))}function bd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Md={[Wa]:Wa,[Xa]:Za,[$a]:$a,[Ss]:Ya,[qa]:qa,[Za]:Xa,[Ja]:Ja,[Ya]:Ss},An=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,fr=Math.PI/180,As=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function lp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cp(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function hp(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function up(i,e=1){return e-Math.abs(th(i,e*2)-e)}function dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mp(i,e){return i+Math.random()*(e-i)}function gp(i){return i*(.5-Math.random())}function _p(i){i!==void 0&&(su=i);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(i){return i*fr}function vp(i){return i*As}function yp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ih(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sd(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wd(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ts={DEG2RAD:fr,RAD2DEG:As,generateUUID:zs,clamp:Ve,euclideanModulo:th,mapLinear:lp,inverseLerp:cp,lerp:pr,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:_p,degToRad:xp,radToDeg:vp,isPowerOfTwo:yp,ceilPowerOfTwo:bp,floorPowerOfTwo:nh,setQuaternionFromProperEuler:Mp,normalize:wd,denormalize:Sd},ch=class ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;var he=ch,ut=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hh=class hh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;var C=hh,Zl=new C,ru=new ut,uh=class uh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],v=s[1],M=s[4],y=s[7],T=s[2],b=s[5],_=s[8];return r[0]=a*x+o*v+l*T,r[3]=a*p+o*M+l*b,r[6]=a*g+o*y+l*_,r[1]=c*x+h*v+u*T,r[4]=c*p+h*M+u*b,r[7]=c*g+h*y+u*_,r[2]=d*x+f*v+m*T,r[5]=d*p+f*M+m*b,r[8]=d*g+f*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;var Ue=uh,Jl=new Ue,au=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){let i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:e,whitePoint:n,transfer:vr,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var je=Sp();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,Qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=yr("canvas")),ls.width=e.width,ls.height=e.height;let s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wp=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Ep=0,jl=new C,Kt=class i extends An{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=Jt,a=Cn,o=Ln,l=nn,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=zs(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Vc;Kt.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(g+1)/2,b=(h+d)/4,_=(u+x)/4,w=(m+p)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=_/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=w/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var pt=dh,eo=class extends An{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},br=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ro=class Ro{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ro().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ap)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(n,rn),mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(n,rn)),mi.normalize(),_a.crossVectors(rn,mi),s[0]=mi.x,s[4]=_a.x,s[8]=rn.x,s[1]=mi.y,s[5]=_a.y,s[9]=rn.y,s[2]=mi.z,s[6]=_a.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],M=n[7],y=n[11],T=n[15],b=s[0],_=s[4],w=s[8],I=s[12],R=s[1],N=s[5],U=s[9],O=s[13],P=s[2],V=s[6],q=s[10],G=s[14],te=s[3],W=s[7],Q=s[11],ee=s[15];return r[0]=a*b+o*R+l*P+c*te,r[4]=a*_+o*N+l*V+c*W,r[8]=a*w+o*U+l*q+c*Q,r[12]=a*I+o*O+l*G+c*ee,r[1]=h*b+u*R+d*P+f*te,r[5]=h*_+u*N+d*V+f*W,r[9]=h*w+u*U+d*q+f*Q,r[13]=h*I+u*O+d*G+f*ee,r[2]=m*b+x*R+p*P+g*te,r[6]=m*_+x*N+p*V+g*W,r[10]=m*w+x*U+p*q+g*Q,r[14]=m*I+x*O+p*G+g*ee,r[3]=v*b+M*R+y*P+T*te,r[7]=v*_+M*N+y*V+T*W,r[11]=v*w+M*U+y*q+T*Q,r[15]=v*I+M*O+y*G+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15],v=l*f-c*d,M=o*f-c*u,y=o*d-l*u,T=a*f-c*h,b=a*d-l*h,_=a*u-o*h;return t*(x*v-p*M+g*y)-n*(m*v-p*T+g*b)+s*(m*M-x*T+g*_)-r*(m*y-x*b+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],v=t*o-n*a,M=t*l-s*a,y=t*c-r*a,T=n*l-s*o,b=n*c-r*o,_=s*c-r*l,w=h*x-u*m,I=h*p-d*m,R=h*g-f*m,N=u*p-d*x,U=u*g-f*x,O=d*g-f*p,P=v*O-M*U+y*N+T*R-b*I+_*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(o*O-l*U+c*N)*V,e[1]=(s*U-n*O-r*N)*V,e[2]=(x*_-p*b+g*T)*V,e[3]=(d*b-u*_-f*T)*V,e[4]=(l*R-a*O-c*I)*V,e[5]=(t*O-s*R+r*I)*V,e[6]=(p*y-m*_-g*M)*V,e[7]=(h*_-d*y+f*M)*V,e[8]=(a*U-o*R+c*w)*V,e[9]=(n*R-t*U-r*w)*V,e[10]=(m*b-x*y+g*v)*V,e[11]=(u*y-h*b-f*v)*V,e[12]=(o*I-a*N-l*w)*V,e[13]=(t*N-n*I+s*w)*V,e[14]=(x*M-m*T-p*v)*V,e[15]=(h*T-u*M+d*v)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,p=a*u,g=o*u,v=l*c,M=l*h,y=l*u,T=n.x,b=n.y,_=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+y)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+g))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(m+M)*_,s[9]=(p-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);let c=1/a,h=1/o,u=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===yn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Es)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===yn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Es)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ro.prototype.isMatrix4=!0;var ke=Ro,cs=new C,wn=new ke,Tp=new C(0,0,0),Ap=new C(1,1,1),mi=new C,_a=new C,rn=new C,lu=new ke,cu=new ut,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rp=0,hu=new C,hs=new ut,Yn=new ke,xa=new C,rr=new C,Cp=new C,Ip=new ut,uu=new C(1,0,0),du=new C(0,1,0),fu=new C(0,0,1),pu={type:"added"},Pp={type:"removed"},us={type:"childadded",child:null},Ql={type:"childremoved",child:null},Et=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Qt,n=new ut,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ue}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(rr,xa,this.up):Yn.lookAt(xa,rr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Yn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),us.child=e,this.dispatchEvent(us),us.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var at=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},va={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=th(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ec(a,r,e+1/3),this.g=ec(a,r,e),this.b=ec(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return je.workingToColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=bt){je.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(va);let n=pr(gi.h,va.h,t),s=pr(gi.s,va.s,t),r=pr(gi.l,va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Be;Be.NAMES=Ed;var qi=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new C,Zn=new C,tc=new C,Jn=new C,ds=new C,fs=new C,mu=new C,nc=new C,ic=new C,sc=new C,rc=new pt,ac=new pt,oc=new pt,yi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Zn.subVectors(n,t),tc.subVectors(e,t);let a=En.dot(En),o=En.dot(Zn),l=En.dot(tc),c=Zn.dot(Zn),h=Zn.dot(tc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return rc.setScalar(0),ac.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(rc,r.x),a.addScaledVector(ac,r.y),a.addScaledVector(oc,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Zn.subVectors(e,t),En.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),En.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),nc.subVectors(e,n);let l=ds.dot(nc),c=fs.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);let h=ds.dot(ic),u=fs.dot(ic);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ds,a);sc.subVectors(e,r);let f=ds.dot(sc),m=fs.dot(sc);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(fs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return mu.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(mu,o);let g=1/(p+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),ba.subVectors(this.max,ar),ps.subVectors(e.a,ar),ms.subVectors(e.b,ar),gs.subVectors(e.c,ar),_i.subVectors(ms,ps),xi.subVectors(gs,ms),zi.subVectors(ps,gs);let t=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!lc(t,ps,ms,gs,ba)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,ps,ms,gs,ba))?!1:(Ma.crossVectors(_i,xi),t=[Ma.x,Ma.y,Ma.z],lc(t,ps,ms,gs,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,ya=new xt,ps=new C,ms=new C,gs=new C,_i=new C,xi=new C,zi=new C,ar=new C,ba=new C,Ma=new C,Hi=new C;function lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wt=new C,Sa=new he,Dp=0,Rt=class extends An{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=e!==void 0?ih(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wd(e,this.array)}};var Mr=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sr=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Np=new xt,or=new C,cc=new C,ti=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Np.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(cc)),this.expandByPoint(or.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fp=0,vn=new ke,hc=new Et,_s=new C,an=new xt,lr=new xt,Ut=new C,yt=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?Sr:Mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(an.min,lr.min),an.expandByPoint(Ut),Ut.addVectors(an.max,lr.max),an.expandByPoint(Ut)):(an.expandByPoint(lr.min),an.expandByPoint(lr.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Ut.add(_s)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;let h=new C,u=new C,d=new C,f=new he,m=new he,x=new he,p=new C,g=new C;function v(I,R,N){c[I]=c[R]=c[N]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(U),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(U),o[I].add(p),o[R].add(p),o[N].add(p),l[I].add(g),l[R].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,R=M.length;I<R;++I){let N=M[I],U=N.start,O=N.count;for(let P=U,V=U+O;P<V;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new C,T=new C,b=new C,_=new C;function w(I){b.fromBufferAttribute(s,I),_.copy(b);let R=o[I];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),T.crossVectors(_,R);let U=T.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,R=n.count;I<R;++I)c[I]&&w(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Rt(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uc=new C,Up=new C,Op=new Ue,on=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uc.subVectors(n,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Op.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kp=0,Rn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Uc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new on().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jn=new C,dc=new C,wa=new C,Ea=new C,bi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dc.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ea.copy(this.origin).sub(dc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Ea.dot(this.direction),l=-Ea.dot(wa),c=Ea.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dc).addScaledVector(wa,d),f}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h),_,w,I,R,N,U,O,P,V,q,G,te;if(y>=T&&y>=b?(I=l,U=u,V=m,te=g,l>=0?(_=c,w=h,R=d,N=f,O=x,P=p,q=v,G=M):(_=h,w=c,R=f,N=d,O=p,P=x,q=M,G=v)):T>=b?(I=c,U=d,V=x,te=v,c>=0?(_=h,w=l,R=f,N=u,O=p,P=m,q=M,G=g):(_=l,w=h,R=u,N=f,O=m,P=p,q=g,G=M)):(I=h,U=f,V=p,te=M,h>=0?(_=l,w=c,R=u,N=d,O=m,P=x,q=g,G=v):(_=c,w=l,R=d,N=u,O=x,P=m,q=v,G=g)),I===0)return null;let W=_/I,Q=w/I,ee=1/I,we=R-W*U,ze=N-Q*U,Z=O-W*V,_e=P-Q*V,be=q-W*te,Pe=G-Q*te,xe=be*_e-Pe*Z,Ge=we*Pe-ze*be,Mt=Z*ze-_e*we;if(s){if(xe<0||Ge<0||Mt<0)return null}else if((xe<0||Ge<0||Mt<0)&&(xe>0||Ge>0||Mt>0))return null;let De=xe+Ge+Mt;if(De===0)return null;let st=ee*(xe*U+Ge*V+Mt*te);return(De>0?st<0:st>0)?null:this.at(st/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gu=new ke,Gi=new bi,Ta=new ti,_u=new C,Aa=new C,Ra=new C,Ca=new C,fc=new C,Ia=new C,xu=new C,Pa=new C,Re=class extends Et{constructor(e=new yt,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,e),a?Ia.addScaledVector(fc,h):Ia.addScaledVector(fc.sub(t),h))}t.add(Ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Ta.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ta,_u)===null||Gi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let b=o.getX(y),_=o.getX(y+1),w=o.getX(y+2);s=La(this,g,e,n,c,h,u,b,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);s=La(this,a,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let b=y,_=y+1,w=y+2;s=La(this,g,e,n,c,h,u,b,_,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let v=p,M=p+1,y=p+2;s=La(this,a,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Bp(i,e,t,n,s,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Li,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:i}}function La(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Aa),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Ca);let h=Bp(i,e,t,n,Aa,Ra,Ca,xu);if(h){let u=new C;yi.getBarycoord(xu,Aa,Ra,Ca,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};yi.getNormal(Aa,Ra,Ca,d.normal),h.face=d,h.barycoord=u}return h}var wr=class extends Kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,h=Ot,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new ke,vu=new ke,Da=[],yu=new xt,zp=new ke,cr=new Re,hr=new ti,Xi=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),yu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),hr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),vu.multiplyMatrices(n,xs),cr.matrixWorld=vu,cr.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){let l=Da[a];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,Oo,Mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new ti,Hp=new he(.5,.5),Na=new C,Si=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],v=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-m,T-v).normalize(),s[1].setComponents(c+a,f+h,g+m,T+v).normalize(),s[2].setComponents(c+o,f+u,g+x,T+M).normalize(),s[3].setComponents(c-o,f-u,g-x,T-M).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,g-p,T-y).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-y).normalize(),t===yn)s[5].setComponents(c+l,f+d,g+p,T+y).normalize();else if(t===Es)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=Hp.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bu=new ke,no=class i{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(bu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Si),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ps=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},io=new C,so=new C,Mu=new ke,ur=new bi,Fa=new ti,pc=new C,Su=new C,ro=class extends Et{constructor(e=new yt,t=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)io.fromBufferAttribute(t,s-1),so.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=io.distanceTo(so);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Mu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Mu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),v=h.getX(x+1),M=Ua(this,e,ur,l,g,v,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Ua(this,e,ur,l,x,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=Ua(this,e,ur,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ua(this,e,ur,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ua(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(io.fromBufferAttribute(o,s),so.fromBufferAttribute(o,r),t.distanceSqToSegment(io,so,pc,Su)>n)return;pc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pc);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wu=new C,Eu=new C,Tr=class extends ro{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Eu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Eu);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends Kt{constructor(e=[],t=Qi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cn=class extends Kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends Kt{constructor(e,t,n=In,s,r,a,o=Ot,l=Ot,c,h=ei,u=1){if(h!==ei&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Rr=class extends ni{constructor(e,t=In,n=Qi,s,r,a=Ot,o=Ot,l,c=ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cr=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function m(x,p,g,v,M,y,T,b,_,w,I){let R=y/_,N=T/w,U=y/2,O=T/2,P=b/2,V=_+1,q=w+1,G=0,te=0,W=new C;for(let Q=0;Q<q;Q++){let ee=Q*N-O;for(let we=0;we<V;we++){let ze=we*R-U;W[x]=ze*v,W[p]=ee*M,W[g]=P,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[g]=b>0?1:-1,h.push(W.x,W.y,W.z),u.push(we/_),u.push(1-Q/w),G+=1}}for(let Q=0;Q<w;Q++)for(let ee=0;ee<_;ee++){let we=d+ee+V*Q,ze=d+ee+V*(Q+1),Z=d+(ee+1)+V*(Q+1),_e=d+(ee+1)+V*Q;l.push(we,ze,_e),l.push(ze,Z,_e),te+=6}o.addGroup(f,te,I),f+=te,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},$i=class i extends yt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,x=s+1,p=new C,g=new C;for(let v=0;v<=m;v++){let M=0,y=0,T=0,b=0;if(v<=n){let I=v/n,R=I*Math.PI/2;y=-h-e*Math.cos(R),T=e*Math.sin(R),b=-e*Math.cos(R),M=I*u}else if(v<=n+r){let I=(v-n)/r;y=-h+I*t,T=e,b=0,M=u+I*d}else{let I=(v-n-r)/n,R=I*Math.PI/2;y=h+e*Math.sin(R),T=e*Math.cos(R),b=e*Math.sin(R),M=u+d+I*u}let _=Math.max(0,Math.min(1,M/f)),w=0;v===0?w=.5/s:v===m&&(w=-.5/s);for(let I=0;I<=s;I++){let R=I/s,N=R*Math.PI*2,U=Math.sin(N),O=Math.cos(N);g.x=-T*O,g.y=y,g.z=T*U,o.push(g.x,g.y,g.z),p.set(-T*O,b,T*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+w,_)}if(v>0){let I=(v-1)*x;for(let R=0;R<s;R++){let N=I+R,U=I+R+1,O=v*x+R,P=v*x+R+1;a.push(N,U,O),a.push(U,P,O)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ii=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yi=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function v(){let y=new C,T=new C,b=0,_=(t-e)/n;for(let w=0;w<=r;w++){let I=[],R=w/r,N=R*(t-e)+e;for(let U=0;U<=s;U++){let O=U/s,P=O*l+o,V=Math.sin(P),q=Math.cos(P);T.x=N*V,T.y=-R*n+p,T.z=N*q,u.push(T.x,T.y,T.z),y.set(V,_,q).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-R),I.push(m++)}x.push(I)}for(let w=0;w<s;w++)for(let I=0;I<r;I++){let R=x[I][w],N=x[I+1][w],U=x[I+1][w+1],O=x[I][w+1];(e>0||I!==0)&&(h.push(R,N,O),b+=3),(t>0||I!==r-1)&&(h.push(N,U,O),b+=3)}c.addGroup(g,b,0),g+=b}function M(y){let T=m,b=new he,_=new C,w=0,I=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let N=m;for(let U=0;U<=s;U++){let P=U/s*l+o,V=Math.cos(P),q=Math.sin(P);_.x=I*q,_.y=p*R,_.z=I*V,u.push(_.x,_.y,_.z),d.push(0,R,0),b.x=V*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),m++}for(let U=0;U<s;U++){let O=T+U,P=N+U;y===!0?h.push(P,P+1,O):h.push(P+1,P,O),w+=3}c.addGroup(g,w,y===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ke;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ir=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ao=class extends Ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Tu=new C,Au=new C,mc=new sh,gc=new sh,_c=new sh,wi=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Au.subVectors(s[0],s[1]).add(s[0]),c=Au);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Tu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),mc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,p),gc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,p),_c.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_c.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(mc.calc(l),gc.calc(l),_c.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Gp(i,e){let t=1-i;return t*t*e}function Vp(i,e){return 2*(1-i)*i*e}function Wp(i,e){return i*i*e}function mr(i,e,t,n){return Gp(i,e)+Vp(i,t)+Wp(i,n)}function qp(i,e){let t=1-i;return t*t*t*e}function Xp(i,e){let t=1-i;return 3*t*t*i*e}function $p(i,e){return 3*(1-i)*i*i*e}function Yp(i,e){return i*i*i*e}function gr(i,e,t,n,s){return qp(i,e)+Xp(i,t)+$p(i,n)+Yp(i,s)}var oo=class extends bn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,s.x,r.x,a.x,o.x),gr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends bn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,s.x,r.x,a.x,o.x),gr(e,s.y,r.y,a.y,o.y),gr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends bn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends bn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends bn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,s.x,r.x,a.x),mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends bn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,s.x,r.x,a.x),mr(e,s.y,r.y,a.y),mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ru(o,l.x,c.x,h.x,u.x),Ru(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Zp=Object.freeze({__proto__:null,ArcCurve:ao,CatmullRomCurve3:wi,CubicBezierCurve:oo,CubicBezierCurve3:lo,EllipseCurve:Ir,LineCurve:co,LineCurve3:ho,QuadraticBezierCurve:uo,QuadraticBezierCurve3:Pr,SplineCurve:fo});function Jp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Td(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Lr(r,a,t,o,l,c,0),a}function Td(i,e,t,n,s){let r;if(s===dm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Cu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Cu(a/n|0,i[a],i[a+1],r);return r&&Ls(r,r.next)&&(Nr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||_t(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&am(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?jp(i,n,s,r):Kp(i)){e.push(l.i,i.i,c.i),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qp(Zi(i),e),Lr(i,e,t,n,s,r,2)):a===2&&em(i,e,t,n,s,r):Lr(Zi(i),e,t,n,s,r,1);break}}}function Kp(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&dr(s,o,r,l,a,c,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(_t(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),p=Math.max(h,u,d),g=Sc(f,m,e,t,n),v=Sc(x,p,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&dr(o,h,l,u,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&dr(o,h,l,u,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&dr(o,h,l,u,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&dr(o,h,l,u,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ls(n,s)&&Rd(n,t,t.next,s)&&Dr(n,s)&&Dr(s,n)&&(e.push(n.i,t.i,s.i),Nr(t),Nr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function em(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cm(a,o)){let l=Cd(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Lr(a,e,t,n,s,r,0),Lr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Td(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lm(c))}s.sort(nm);for(let r=0;r<s.length;r++)t=im(s[r],t);return t}function nm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function im(i,e){let t=sm(i,e);if(!t)return e;let n=Cd(t,i);return Zi(n,n.next),Zi(t,t.next)}function sm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ls(i,t))return t;do{if(Ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ad(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Dr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&rm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function rm(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function am(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ad(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ad(i,e,t,n,s,r,a,o)}function cm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hm(i,e)&&(Dr(i,e)&&Dr(e,i)&&um(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||Ls(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ls(i,e){return i.x===e.x&&i.y===e.y}function Rd(i,e,t,n){let s=ka(_t(i,e,t)),r=ka(_t(i,e,n)),a=ka(_t(t,n,i)),o=ka(_t(t,n,e));return!!(s!==r&&a!==o||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||a===0&&Oa(t,i,n)||o===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ka(i){return i>0?1:i<0?-1:0}function hm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Dr(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function um(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cd(i,e){let t=wc(i.i,i.x,i.y),n=wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cu(i,e,t,n){let s=wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ec=class{static triangulate(e,t,n=2){return Jp(e,t,n)}},Ei=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Iu(e),Pu(n,e);let a=e.length;t.forEach(Iu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Pu(n,t[l]);let o=Ec.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Iu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ds=class i extends yt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new he,f=new C,m=new C,x=new C,p=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let M=n+v*h*s,y=Math.sin(M),T=Math.cos(M);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*T,a.push(u.x,u.y,u.z),d.x=v/t,d.y=b/(e.length-1),o.push(d.x,d.y);let _=l[3*b+0]*y,w=l[3*b+1],I=l[3*b+0]*T;c.push(_,w,I)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,T=y,b=y+e.length,_=y+e.length+1,w=y+1;r.push(T,b,w),r.push(_,w,b)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var si=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*d-a;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-v,0),x.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),b=v+1+c*g;f.push(M,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var hn=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new C,f=new C,m=new C;for(let x=0;x<=n;x++){let p=a+x/n*o;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,M=(s+1)*(x-1)+p,y=(s+1)*x+p;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ji=class i extends yt{constructor(e=new Pr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new he,h=new C,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function x(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),v(),g()}function p(M){h=e.getPointAt(M/t,h);let y=a.normals[M],T=a.binormals[M];for(let b=0;b<=s;b++){let _=b/s*Math.PI*2,w=Math.sin(_),I=-Math.cos(_);l.x=I*y.x+w*T.x,l.y=I*y.y+w*T.y,l.z=I*y.z+w*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let T=(s+1)*(M-1)+(y-1),b=(s+1)*M+(y-1),_=(s+1)*M+y,w=(s+1)*(M-1)+y;m.push(T,b,w),m.push(b,_,w)}}function v(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Zp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Fr=class extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Lu(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Id={clone:ns,merge:Yt},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ur=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mo=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},go=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ba(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-n;break;case Mc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,l=2*n-t;break;case Mc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*x+.5*m,y=f*p-f*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+M*a[l+T]+y*a[u+T];return r}},xo=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},vo=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yo=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*d+m*2,v=u[g],M=u[g+1],y=e*d+m*2,T=h[y],b=h[y+1],_=_m(n,t,v,T,s);r[m]=Pd(_,x,M,b,p)}return r}};function Pd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function gm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _m(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Pd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=gm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vs(t,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vs(e.times,Array),values:vs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ba(e.settings)&&(n.settings={inTangents:vs(e.settings.inTangents,Array),outTangents:vs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ba(this.settings)&&(Du(this.settings.inTangents,e),Du(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ba(this.settings)&&(Nu(this.settings.inTangents,e),Nu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&op(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Du(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Nu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ja;var Ai=class extends dn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=_r;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="color";var Mo=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Mo.prototype.ValueTypeName="number";var So=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ut.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends dn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=_r;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="vector";var Eo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new Eo,To=class{constructor(e){this.manager=e!==void 0?e:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var xc=new ke,Fu=new C,Uu=new C,Br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Es||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},za=new C,Ha=new ut,On=new C,zr=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Ha,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(za,Ha,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new C,Ou=new he,ku=new he,$t=class extends zr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Ou,ku),t.subVectors(ku,Ou)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends Br{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Hr=class extends kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gr=class extends zr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends Br{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ys=-90,bs=1,Fs=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(ys,bs,e,t);s.layers=this.layers,this.add(s);let r=new $t(ys,bs,e,t);r.layers=this.layers,this.add(r);let a=new $t(ys,bs,e,t);a.layers=this.layers,this.add(a);let o=new $t(ys,bs,e,t);o.layers=this.layers,this.add(o);let l=new $t(ys,bs,e,t);l.layers=this.layers,this.add(l);let c=new $t(ys,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ao=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ah="\\[\\]\\.:\\/",xm=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",vm="[^"+ah.replace("\\.","")+"]",ym=/((?:WC+[\/:])*)/.source.replace("WC",oh),bm=/(WCOD+)?/.source.replace("WCOD",vm),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),wm=new RegExp("^"+ym+bm+Mm+Sm+"$"),Em=["material","materials","bones","map"],Rc=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(e){let t=wm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Rc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);var Bu=new ke,Vr=class{constructor(e,t,n=0,s=1/0){this.ray=new bi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(e,t=!0,n=[]){return Cc(e,this,n,t),n.sort(zu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cc(e[s],this,n,t);return n.sort(zu),n}};function zu(i,e){return i.distance-e.distance}function Cc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Cc(r[a],e,t,!0)}}var Ci=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fh=class fh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};fh.prototype.isMatrix2=!0;var Ic=fh;var Wr=class extends An{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function lh(i,e,t,n){let s=Tm(n);switch(t){case Yc:return i*e;case Oo:return i*e/s.components*s.byteLength;case ko:return i*e/s.components*s.byteLength;case Di:return i*e*2/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case Zc:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Ho:case Vo:return Math.max(i,8)*Math.max(e,8)/2;case qo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case jr:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(i){switch(i){case nn:case Wc:return{byteLength:1,components:1};case Bs:case qc:case Pn:return{byteLength:2,components:1};case Fo:case Uo:return{byteLength:2,components:4};case In:case No:case Mn:return{byteLength:4,components:1};case Xc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ef(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
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
#endif`,Um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
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
#endif`,Vm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Qm=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,T0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Xg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jg=`#define PHONG
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
}`,Kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,e_=`#define TOON
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
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,n_=`uniform float size;
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,a_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Cm,alphahash_pars_fragment:Im,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Nm,aomap_fragment:Fm,aomap_pars_fragment:Um,batching_pars_vertex:Om,batching_vertex:km,begin_vertex:Bm,beginnormal_vertex:zm,bsdfs:Hm,iridescence_fragment:Gm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:$m,color_fragment:Ym,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:Km,common:jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:a0,envmap_common_pars_fragment:o0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:y0,envmap_vertex:h0,fog_vertex:u0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:x0,lights_pars_begin:v0,lights_toon_fragment:b0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:w0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,lightprobes_pars_fragment:I0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:N0,map_fragment:F0,map_pars_fragment:U0,map_particle_fragment:O0,map_particle_pars_fragment:k0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:H0,morphcolor_vertex:G0,morphnormal_vertex:V0,morphtarget_pars_vertex:W0,morphtarget_vertex:q0,normal_fragment_begin:X0,normal_fragment_maps:$0,normal_pars_fragment:Y0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:xg,specularmap_pars_fragment:vg,tonemapping_fragment:yg,tonemapping_pars_fragment:bg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Ig,backgroundCube_frag:Pg,cube_vert:Lg,cube_frag:Dg,depth_vert:Ng,depth_frag:Fg,distance_vert:Ug,distance_frag:Og,equirect_vert:kg,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Gg,meshbasic_frag:Vg,meshlambert_vert:Wg,meshlambert_frag:qg,meshmatcap_vert:Xg,meshmatcap_frag:$g,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:Kg,meshphysical_vert:jg,meshphysical_frag:Qg,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:a_,sprite_frag:o_},ge={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Gn={basic:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Yt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Yt([ge.lights,ge.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Gn.physical={uniforms:Yt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var _l={r:0,b:0,g:0},l_=new ke,tf=new Ue;tf.set(-1,0,0,0,1,0,0,0,1);function c_(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(v){let M=!1,y=f(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Re(new en(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ns(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tf),c.material.toneMapped=je.getTransfer(y.colorSpace)!==it,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new si(2,2),new Bn({name:"BackgroundMaterial",uniforms:ns(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(_l,rh(i)),t.buffers.color.setClear(_l.r,_l.g,_l.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function h_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,U,O,P,V){let q=!1,G=u(N,P,O,U);r!==G&&(r=G,c(r.object)),q=f(N,P,O,V),q&&m(N,P,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,U,O,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,U,O,P){let V=P.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let G=N.isInstancedMesh===!0?N.id:0,te=q[G];te===void 0&&(te={},q[G]=te);let W=te[O.id];W===void 0&&(W={},te[O.id]=W);let Q=W[V];return Q===void 0&&(Q=d(l()),W[V]=Q),Q}function d(N){let U=[],O=[],P=[];for(let V=0;V<t;V++)U[V]=0,O[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,U,O,P){let V=r.attributes,q=U.attributes,G=0,te=O.getAttributes();for(let W in te)if(te[W].location>=0){let ee=V[W],we=q[W];if(we===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function m(N,U,O,P){let V={},q=U.attributes,G=0,te=O.getAttributes();for(let W in te)if(te[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),V[W]=we,G++}r.attributes=V,r.attributesNum=G,r.index=P}function x(){let N=r.newAttributes;for(let U=0,O=N.length;U<O;U++)N[U]=0}function p(N){g(N,0)}function g(N,U){let O=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;O[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),V[N]!==U&&(i.vertexAttribDivisor(N,U),V[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let O=0,P=U.length;O<P;O++)U[O]!==N[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function M(N,U,O,P,V,q,G){G===!0?i.vertexAttribIPointer(N,U,O,V,q):i.vertexAttribPointer(N,U,O,P,V,q)}function y(N,U,O,P){x();let V=P.attributes,q=O.getAttributes(),G=U.defaultAttributeValues;for(let te in q){let W=q[te];if(W.location>=0){let Q=V[te];if(Q===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ee=Q.normalized,we=Q.itemSize,ze=e.get(Q);if(ze===void 0)continue;let Z=ze.buffer,_e=ze.type,be=ze.bytesPerElement,Pe=_e===i.INT||_e===i.UNSIGNED_INT||Q.gpuType===No;if(Q.isInterleavedBufferAttribute){let xe=Q.data,Ge=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Mt=Q.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let De=0;De<W.locationSize;De++)g(W.location+De,xe.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let De=0;De<W.locationSize;De++)p(W.location+De);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let De=0;De<W.locationSize;De++)M(W.location+De,we/W.locationSize,_e,ee,Ge*be,(Mt+we/W.locationSize*De)*be,Pe)}else{if(Q.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let xe=0;xe<W.locationSize;xe++)M(W.location+xe,we/W.locationSize,_e,ee,we*be,we/W.locationSize*xe*be,Pe)}}else if(G!==void 0){let ee=G[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}v()}function T(){I();for(let N in n){let U=n[N];for(let O in U){let P=U[O];for(let V in P){let q=P[V];for(let G in q)h(q[G].object),delete q[G];delete P[V]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let O in U){let P=U[O];for(let V in P){let q=P[V];for(let G in q)h(q[G].object),delete q[G];delete P[V]}}delete n[N.id]}function _(N){for(let U in n){let O=n[U];for(let P in O){let V=O[P];if(V[N.id]===void 0)continue;let q=V[N.id];for(let G in q)h(q[G].object),delete q[G];delete V[N.id]}}}function w(N){for(let U in n){let O=n[U],P=N.isInstancedMesh===!0?N.id:0,V=O[P];if(V!==void 0){for(let q in V){let G=V[q];for(let te in G)h(G[te].object),delete G[te];delete V[q]}delete O[P],Object.keys(O).length===0&&delete n[U]}}}function I(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function u_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==nn&&_!==Mn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:b}}function f_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=h(m,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ia=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Ki});r.uniforms.tEquirect.value=t;let a=new Re(s,r),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Jt),new Fs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Dd=256,p_=3,m_=20,nf=256,sf=16,g_=3,__=new C,x_=new Be,Gs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fs(1,10,null),this._boxMesh=new Re(new en(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=__}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(x_));let p=new Fs(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Dd,nh(e))}_fromTexture(e,t){e.mapping===Qi||e.mapping===ks?this._setSize(e.image.length===0?Dd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Nd(e,!1,!1),n=Math.log2(e)-p_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qi||e.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=v_(),this._integrationMaterial=y_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/sf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-g_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(nf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=b_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Nd(i,e,t){return new ia(i,{minFilter:Cn,generateMipmaps:e,type:Pn,colorSpace:xr,depthBuffer:t})}function sa(i,e,t){return new Bn({name:i,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Ct,blending:Ki,depthTest:!1,depthWrite:!1})}function v_(){return sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function y_(){return sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b_(){return sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${m_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fd(){return sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ud(){return sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function M_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Po||f===Lo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new ia(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Po||f===Lo,x=f===Qi||f===ks;if(m||x){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Gs(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Gs(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Po?d.mapping=Qi:f===Lo&&(d.mapping=ks),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function S_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?Sr:Mr,y=new M(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,I=0;w<v;w+=3){let R=_[w+0],N=_[w+1],U=_[w+2];T[I++]=R,T[I++]=N,T[I++]=N,T[I++]=U,T[I++]=U,T[I++]=R}}else{g=p.version;for(let _=0,w=0;_<v;_+=3){let I=_+0,R=_+1,N=_+2;T[w++]=I,T[w++]=R,T[w++]=R,T[w++]=N,T[w++]=N,T[w++]=I}}y.version=g;let b=r.get(m);b&&e.remove(b),r.set(m,y)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function E_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*u),_=new br(b,y,T,u);_.type=Mn,_.needsUpdate=!0;let w=M*4;for(let R=0;R<u;R++){let N=p[R],U=g[R],O=v[R],P=y*T*4*R;for(let V=0;V<N.count;V++){let q=V*w;f===!0&&(s.fromBufferAttribute(N,V),b[P+q+0]=s.x,b[P+q+1]=s.y,b[P+q+2]=s.z,b[P+q+3]=0),m===!0&&(s.fromBufferAttribute(U,V),b[P+q+4]=s.x,b[P+q+5]=s.y,b[P+q+6]=s.z,b[P+q+7]=0),x===!0&&(s.fromBufferAttribute(O,V),b[P+q+8]=s.x,b[P+q+9]=s.y,b[P+q+10]=s.z,b[P+q+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new he(y,T)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function R_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var C_={[Oc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[zc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Xr]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function I_(i,e,t,n,s,r){let a=new ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new yt;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Re(h,u),f=new Gr(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,M=[],y=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),l!==null&&l.setSize(T,b);for(let _=0;_<M.length;_++){let w=M[_];w.setSize&&w.setSize(T,b)}},this.setEffects=function(T){M=T,y=M.length>0&&M[0].isRenderPass===!0;let b=a.width,_=a.height;M.length>0&&o===null&&(o=new ln(b,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(b,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&M.some(I=>I.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new ni(b,_),r===!0&&(c.format=ri,c.type=es)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let I=0;I<M.length;I++){let R=M[I];R.setSize&&R.setSize(b,_),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,b){if(p||T.toneMapping===zn&&M.length===0)return!1;if(v=b,b!==null){let _=b.width,w=b.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(T,b){T.toneMapping=g,p=!0;let _=a,w=o;for(let I=0;I<M.length;I++){let R=M[I];R.enabled!==!1&&(R.render(T,w,_,b),R.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,u.defines={},je.getTransfer(m)===it&&(u.defines.SRGB_TRANSFER="");let I=C_[x];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var rf=new Kt,af=new ni(1,1),of=new Rr(1),lf=new br,cf=new to,hf=new Ar,Od=[],kd=[],Bd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function F_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Pt(t,n)}}function U_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;zd.set(n),i.uniformMatrix3fv(this.addr,!1,zd),Pt(t,n)}}function O_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),Pt(t,n)}}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function G_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function bl(i){return i.version===0&&(i.compareFunction=jc,i.needsUpdate=!0),i}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bl(af):r=rf,t.setTexture2D(e||r,s)}function $_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cf,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bl(of):r=hf,t.setTextureCube(e||r,s)}function Z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lf,s)}function J_(i){switch(i){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return F_;case 35675:return U_;case 35676:return O_;case 5124:case 35670:return k_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}function K_(i,e){i.uniform1fv(this.addr,e)}function j_(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Q_(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function ex(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function tx(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nx(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ix(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sx(i,e){i.uniform1iv(this.addr,e)}function rx(i,e){i.uniform2iv(this.addr,e)}function ax(i,e){i.uniform3iv(this.addr,e)}function ox(i,e){i.uniform4iv(this.addr,e)}function lx(i,e){i.uniform1uiv(this.addr,e)}function cx(i,e){i.uniform2uiv(this.addr,e)}function hx(i,e){i.uniform3uiv(this.addr,e)}function ux(i,e){i.uniform4uiv(this.addr,e)}function dx(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bl(af):a=rf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function fx(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cf,r[a])}function px(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bl(of):a=hf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function mx(i,e,t){let n=this.cache,s=e.length,r=yl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lf,r[a])}function gx(i){switch(i){case 5126:return K_;case 35664:return j_;case 35665:return Q_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),a=ph.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gd(t,c===void 0?new gh(o,i,e):new _h(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new xh(o),Gd(t,u)),t=u}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_x(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xx=37297,vx=0;function yx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wd=new Ue;function bx(i){je._getMatrix(Wd,je.workingColorSpace,i);let e=`mat3( ${Wd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case vr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yx(i.getShaderSource(e),o)}else return r}function Mx(i,e){let t=bx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sx={[Oc]:"Linear",[kc]:"Reinhard",[Bc]:"Cineon",[zc]:"ACESFilmic",[Gc]:"AgX",[Xr]:"Neutral",[Hc]:"Custom"};function wx(i,e){let t=Sx[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xl=new C;function Ex(){je.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function Ax(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function na(i){return i!==""}function Xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(Cx,Ix)}function Ix(i,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vh(t)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(i){return i.replace(Px,Lx)}function Lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Dx={[qr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Nx(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fx={[ks]:"ENVMAP_MODE_REFRACTION"};function Ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ox={[Io]:"ENVMAP_BLENDING_MULTIPLY",[od]:"ENVMAP_BLENDING_MIX",[ld]:"ENVMAP_BLENDING_ADD"};function kx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[i.combine]||"ENVMAP_BLENDING_NONE"}function Bx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Nx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ux(t),u=kx(t),d=Tx(t),f=Ax(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(na).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(na).join(`
`),p.length>0&&(p+=`
`)):(x=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==zn?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Mx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),a=vh(a),a=Xd(a,t),a=$d(a,t),o=vh(o),o=Xd(o,t),o=$d(o,t),a=Yd(a),o=Yd(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,M=g+p+o,y=Vd(s,s.VERTEX_SHADER,v),T=Vd(s,s.FRAGMENT_SHADER,M);s.attachShader(m,y),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(y)||"",O=s.getShaderInfoLog(T)||"",P=N.trim(),V=U.trim(),q=O.trim(),G=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,T);else{let W=qd(s,y,"vertex"),Q=qd(s,T,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(V===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(T),_=new Hs(s,m),w=Rx(s,m)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,xx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var zx=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}};function Hx(i){return i===Di||i===jr||i===Qr}function Gx(i,e,t,n,s,r){let a=new Cs,o=new yh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,I,R,N,U){let O=R.fog,P=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||V,q),te=d[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0,we=0;P.morphAttributes.position!==void 0&&(we=1),P.morphAttributes.normal!==void 0&&(we=2),P.morphAttributes.color!==void 0&&(we=3);let ze,Z,_e,be;if(te){let me=Gn[te];ze=me.vertexShader,Z=me.fragmentShader}else{ze=_.vertexShader,Z=_.fragmentShader;let me=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,me,rt),_e=me.id,be=rt.id}let Pe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ge=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,De=!!_.map,st=!!_.matcap,ot=!!G,Ze=ot&&G.isPMREMTexture===!0,zt=!!_.aoMap,Tt=!!_.lightMap,jt=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Un=!!_.displacementMap,Dt=!!_.emissiveMap,mn=!!_.metalnessMap,gn=!!_.roughnessMap,_n=_.anisotropy>0,F=_.clearcoat>0,xn=_.diffuseRoughness>0,dt=_.dispersion>0,ft=_.retroreflectivity>0,fe=_.iridescence>0,At=_.sheen>0,Le=_.transmission>0,Oe=_n&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,S=F&&!!_.clearcoatNormalMap,B=F&&!!_.clearcoatRoughnessMap,ne=xn&&!!_.diffuseRoughnessMap,j=fe&&!!_.iridescenceMap,re=fe&&!!_.iridescenceThicknessMap,ue=At&&!!_.sheenColorMap,$=At&&!!_.sheenRoughnessMap,Y=!!_.specularMap,oe=!!_.specularColorMap,L=!!_.specularIntensityMap,J=Le&&!!_.transmissionMap,X=Le&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,ae=_.alphaTest>0,Te=!!_.alphaHash,qe=!!_.extensions,ie=zn;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=Ze?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,We={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:Z,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&N.instanceColor!==null,instancingMorph:Ge&&N.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:st,envMap:ot,envMapMode:ot&&G.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Ce.length-1:null,envMapSize:Ze?Ce[0].width:null,aoMap:zt,lightMap:Tt,bumpMap:jt,normalMap:mt,displacementMap:Un,emissiveMap:Dt,normalMapObjectSpace:mt&&_.normalMapType===ud,normalMapTangentSpace:mt&&_.normalMapType===ea,packedNormalMap:mt&&_.normalMapType===ea&&Hx(_.normalMap.format),metalnessMap:mn,roughnessMap:gn,anisotropy:_n,anisotropyMap:Oe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:xn,diffuseRoughnessMap:ne,dispersion:dt,retroreflection:ft,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:re,sheen:At,sheenColorMap:ue,sheenRoughnessMap:$,specularMap:Y,specularColorMap:oe,specularIntensityMap:L,transmission:Le,transmissionMap:J,thicknessMap:X,gradientMap:le,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Te,combine:_.combine,mapUv:De&&f(_.map.channel),aoMapUv:zt&&f(_.aoMap.channel),lightMapUv:Tt&&f(_.lightMap.channel),bumpMapUv:jt&&f(_.bumpMap.channel),normalMapUv:mt&&f(_.normalMap.channel),displacementMapUv:Un&&f(_.displacementMap.channel),emissiveMapUv:Dt&&f(_.emissiveMap.channel),metalnessMapUv:mn&&f(_.metalnessMap.channel),roughnessMapUv:gn&&f(_.roughnessMap.channel),anisotropyMapUv:Oe&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:Y&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(mt||_n),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(De||se),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)w.push(I),w.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(w,_),g(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let w=d[_.type],I;if(w){let R=Gn[w];I=Id.clone(R.uniforms)}else I=_.uniforms;return I}function M(_,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new Bx(i,w,_,s),c.push(I),h.set(w,I)),I}function y(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:b}}function Vx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,p,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let M=o(d,f,m,x,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(d,f,m,x,p,g){let v=o(d,f,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Wx),n.length>1&&n.sort(f||Jd),s.length>1&&s.sort(f||Jd)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Kd,i.set(n,[a])):s>=r.length?(a=new Kd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function $x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yx=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jx(i){let e=new Xx,t=$x(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,v=0,M=0,y=0,T=0,b=0,_=0,w=0,I=0,R=0;c.sort(Zx);for(let U=0,O=c.length;U<O;U++){let P=c[U],V=P.color,q=P.intensity,G=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Di?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*q,u+=V.g*q,d+=V.b*q;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],q);R++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=te;let we=Q.getViewportCount();for(let ze=0;ze<we;ze++)n.sunShadowMatrix[x+ze]=Q.getMatrix(ze),n.sunShadowCascade[x+ze]=Q._cascadeData[ze];x+=we,m++}n.sun[f]=W,f++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let Q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=te,_++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=W,M++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(q),W.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==M||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==_||N.numSpotMaps!==w||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=M,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=_,N.numSpotMaps=w,N.numLightProbes=R,n.version=Yx++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function jd(i){let e=new Jx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jd(i),e.set(s,[o])):r>=a.length?(o=new jd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ev=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],tv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Qd=new ke,ta=new C,mh=new C;function nv(i,e,t){let n=new Si,s=new he,r=new he,a=new pt,o=new mo,l=new go,c={},h=t.maxTextureSize,u={[Li]:Ct,[Ct]:Li,[tn]:tn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:jx,fragmentShader:Qx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new yt;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let g=this.type;this.render=function(b,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Co&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qr);let I=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ki),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=g!==this.type;O&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=b.length;P<V;P++){let q=b[P],G=q.shadow;if(G===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Us){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ln(s.x,s.y,{format:Di,type:Pn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new ni(s.x,s.y,Mn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=ei,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}else q.isPointLight?(G.map=new ia(s.x),G.map.depthTexture=new Rr(s.x,In)):(G.map=new ln(s.x,s.y),G.map.depthTexture=new ni(s.x,s.y,In)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=ei,this.type===qr?(G.map.depthTexture.compareFunction=W?Kc:Jc,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,w);let ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:w.layers;for(let we=0;we<Q;we++){let ze=G.getCamera(we);if(q.isPointLight){let Z=G.camera,_e=G.matrix,be=q.distance||Z.far;be!==Z.far&&(Z.far=be,Z.updateProjectionMatrix()),ta.setFromMatrixPosition(q.matrixWorld),Z.position.copy(ta),mh.copy(Z.position),mh.add(ev[we]),Z.up.copy(tv[we]),Z.lookAt(mh),Z.updateMatrixWorld(),_e.makeTranslation(-ta.x,-ta.y,-ta.z),Qd.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Qd,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,we),i.clear();else{we===0&&(i.setRenderTarget(G.map),i.clear());let Z=G.getViewport(we);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(a)}n=G.getFrustum(we),y(_,w,ze,q,ee,this.type)}G.isPointLightShadow!==!0&&this.type===Us&&v(G,w),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,R,N)};function v(b,_){let w=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ln(s.x,s.y,{format:Di,type:Pn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,w,f,x,null)}function M(b,_,w,I){let R=null,N=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=w.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=R.uuid,O=_.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let V=P[O];V===void 0&&(V=R.clone(),P[O]=V,_.addEventListener("dispose",T)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,I===Us?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=w}return R}function y(b,_,w,I,R,N){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let P=e.update(b),V=b.material;if(Array.isArray(V)){let q=P.groups;for(let G=0,te=q.length;G<te;G++){let W=q[G],Q=V[W.materialIndex];if(Q&&Q.visible){let ee=M(b,Q,I,N);b.onBeforeShadow(i,b,_,w,P,ee,W),i.renderBufferDirect(w,null,P,ee,b,W),b.onAfterShadow(i,b,_,w,P,ee,W)}}}else if(V.visible){let q=M(b,V,I,N);b.onBeforeShadow(i,b,_,w,P,q,null),i.renderBufferDirect(w,null,P,q,b,null),b.onAfterShadow(i,b,_,w,P,q,null)}}let O=b.children;for(let P=0,V=O.length;P<V;P++)y(O[P],_,w,I,R,N)}function T(b){b.target.removeEventListener("dispose",T);for(let w in c){let I=c[w],R=b.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function iv(i,e){function t(){let L=!1,J=new pt,X=null,le=new pt(0,0,0,0);return{setMask:function(se){X!==se&&!L&&(i.colorMask(se,se,se,se),X=se)},setLocked:function(se){L=se},setClear:function(se,ae,Te,qe,ie){ie===!0&&(se*=qe,ae*=qe,Te*=qe),J.set(se,ae,Te,qe),le.equals(J)===!1&&(i.clearColor(se,ae,Te,qe),le.copy(J))},reset:function(){L=!1,X=null,le.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,X=null,le=null,se=null;return{setReversed:function(ae){if(J!==ae){let Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),J=ae;let qe=se;se=null,this.setClear(qe)}},getReversed:function(){return J},setTest:function(ae){ae?xe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ae){X!==ae&&!L&&(i.depthMask(ae),X=ae)},setFunc:function(ae){if(J&&(ae=Md[ae]),le!==ae){switch(ae){case Wa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){L=ae},setClear:function(ae){se!==ae&&(se=ae,J&&(ae=1-ae),i.clearDepth(ae))},reset:function(){L=!1,X=null,le=null,se=null,J=!1}}}function s(){let L=!1,J=null,X=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null;return{setTest:function(Ce){L||(Ce?xe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!L&&(i.stencilMask(Ce),J=Ce)},setFunc:function(Ce,We,me){(X!==Ce||le!==We||se!==me)&&(i.stencilFunc(Ce,We,me),X=Ce,le=We,se=me)},setOp:function(Ce,We,me){(ae!==Ce||Te!==We||qe!==me)&&(i.stencilOp(Ce,We,me),ae=Ce,Te=We,qe=me)},setLocked:function(Ce){L=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){L=!1,J=null,X=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,M=null,y=null,T=null,b=null,_=null,w=new Be(0,0,0),I=0,R=!1,N=null,U=null,O=null,P=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=te>=2);let Q=null,ee={},we=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Z=new pt().fromArray(we),_e=new pt().fromArray(ze);function be(L,J,X,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(L,ae),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<X;Te++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(J+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Pe={};Pe[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(Ss),jt(!1),mt(Pc),xe(i.CULL_FACE),zt(Ki);function xe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ge(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Mt(L,J){return d[L]!==J?(i.bindFramebuffer(L,J),d[L]=J,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function De(L,J){let X=m,le=!1;if(L){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let se=L.textures;if(X.length!==se.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Te=se.length;ae<Te;ae++)X[ae]=i.COLOR_ATTACHMENT0+ae;X.length=se.length,le=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,le=!0);le&&i.drawBuffers(X)}function st(L){return x!==L?(i.useProgram(L),x=L,!0):!1}let ot={[ji]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[qu]:i.FUNC_REVERSE_SUBTRACT};ot[Xu]=i.MIN,ot[$u]=i.MAX;let Ze={[Yu]:i.ZERO,[Zu]:i.ONE,[Ju]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[ju]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(L,J,X,le,se,ae,Te,qe,ie,Ce){if(L===Ki){p===!0&&(Ge(i.BLEND),p=!1);return}if(p===!1&&(xe(i.BLEND),p=!0),L!==Vu){if(L!==g||Ce!==R){if((v!==ji||T!==ji)&&(i.blendEquation(i.FUNC_ADD),v=ji,T=ji),Ce)switch(L){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}M=null,y=null,b=null,_=null,w.set(0,0,0),I=0,g=L,R=Ce}return}se=se||J,ae=ae||X,Te=Te||le,(J!==v||se!==T)&&(i.blendEquationSeparate(ot[J],ot[se]),v=J,T=se),(X!==M||le!==y||ae!==b||Te!==_)&&(i.blendFuncSeparate(Ze[X],Ze[le],Ze[ae],Ze[Te]),M=X,y=le,b=ae,_=Te),(qe.equals(w)===!1||ie!==I)&&(i.blendColor(qe.r,qe.g,qe.b,ie),w.copy(qe),I=ie),g=L,R=!1}function Tt(L,J){L.side===tn?Ge(i.CULL_FACE):xe(i.CULL_FACE);let X=L.side===Ct;J&&(X=!X),jt(X),L.blending===Os&&L.transparent===!1?zt(Ki):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function mt(L){L!==Hu?(xe(i.CULL_FACE),L!==U&&(L===Pc?i.cullFace(i.BACK):L===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),U=L}function Un(L){L!==O&&(G&&i.lineWidth(L),O=L)}function Dt(L,J,X){L?(xe(i.POLYGON_OFFSET_FILL),(P!==J||V!==X)&&(P=J,V=X,a.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Ge(i.POLYGON_OFFSET_FILL)}function mn(L){L?xe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function gn(L){L===void 0&&(L=i.TEXTURE0+q-1),Q!==L&&(i.activeTexture(L),Q=L)}function _n(L,J,X){X===void 0&&(Q===null?X=i.TEXTURE0+q-1:X=Q);let le=ee[X];le===void 0&&(le={type:void 0,texture:void 0},ee[X]=le),(le.type!==L||le.texture!==J)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(L,J||Pe[L]),le.type=L,le.texture=J)}function F(){let L=ee[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function xn(){try{i.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ft(){try{i.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function fe(){try{i.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Oe(){try{i.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function S(){try{i.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function B(){try{i.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ne(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function j(L,J){u[L]!==J&&(i.pixelStorei(L,J),u[L]=J)}function re(L){Z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ue(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function $(L,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let le=X.get(L);le===void 0&&(le=i.getUniformBlockIndex(J,L.name),i.uniformBlockBinding(J,le,le),X.set(L,le))}function Y(L,J,X){let se=c.get(J).get(L);l[se]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,X),l[se]=X)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ee={},d={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,v=null,M=null,y=null,T=null,b=null,_=null,w=new Be(0,0,0),I=0,R=!1,N=null,U=null,O=null,P=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ge,bindFramebuffer:Mt,drawBuffers:De,useProgram:st,setBlending:zt,setMaterial:Tt,setFlipSided:jt,setCullFace:mt,setLineWidth:Un,setPolygonOffset:Dt,setScissorTest:mn,activeTexture:gn,bindTexture:_n,unbindTexture:F,compressedTexImage2D:xn,compressedTexImage3D:dt,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:ne,updateUBOMapping:$,uniformBlockBinding:Y,texStorage2D:Oe,texStorage3D:A,texSubImage2D:ft,texSubImage3D:fe,compressedTexSubImage2D:At,compressedTexSubImage3D:Le,scissor:re,viewport:ue,reset:oe}}function sv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):yr("canvas")}function v(A,S,B){let ne=1,j=Oe(A);if((j.width>B||j.height>B)&&(ne=B/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(ne*j.width),ue=Math.floor(ne*j.height);d===void 0&&(d=g(re,ue));let $=S?g(re,ue):d;return $.width=re,$.height=ue,$.getContext("2d").drawImage(A,0,0,re,ue),Ie("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+ue+")."),$}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function M(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,B,ne,j,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),B===i.SHORT&&ue&&($=ue.R16_SNORM_EXT)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),B===i.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),B===i.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let Y=re?vr:je.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Y===it?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),B===i.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(A,S){let B;return A?S===null||S===In||S===es?B=i.DEPTH24_STENCIL8:S===Mn?B=i.DEPTH32F_STENCIL8:S===Bs&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===In||S===es?B=i.DEPTH_COMPONENT24:S===Mn?B=i.DEPTH_COMPONENT32F:S===Bs&&(B=i.DEPTH_COMPONENT16),B}function w(A,S){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),x.register(A,S,S)}function R(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),x.unregister(S))}function N(A){O(A.target)}function U(A){P(A.target)}function O(A){A.removeEventListener("dispose",N),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",U),R(A),te(A)}function V(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):O(S))}m.clear(),u.clear()}function q(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,ne=f.get(B);if(ne){let j=ne[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(A),Object.keys(ne).length===0&&f.delete(B)}n.remove(A)}function G(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,ne=f.get(B);delete ne[S.__cacheKey],a.memory.textures--}function te(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&O(B),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let re=0;re<S.__webglFramebuffer[j].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[j][re]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ne=A.textures;for(let j=0,re=ne.length;j<re;j++){let ue=n.get(ne[j]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(A)}let W=0;function Q(){W=0}function ee(){return W}function we(A){W=A}function ze(){let A=W;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function _e(A,S){let B=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ne=A.image;if(ne===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function be(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Tt(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Pe(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Tt(B,A,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function xe(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){jt(B,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let Ge={[ws]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},Mt={[Ot]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},De={[fd]:i.NEVER,[jc]:i.ALWAYS,[pd]:i.LESS,[Jc]:i.LEQUAL,[md]:i.EQUAL,[Kc]:i.GEQUAL,[gd]:i.GREATER,[_d]:i.NOTEQUAL};function st(A,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===Do||S.magFilter===$r||S.magFilter===Cn||S.minFilter===Jt||S.minFilter===Do||S.minFilter===$r||S.minFilter===Cn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ge[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ge[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ge[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==$r&&S.minFilter!==Cn||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ot(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),I(S));let ne=S.source,j=f.get(ne);j===void 0&&(j={},f.set(ne,j));let re=Z(S);if(re!==A.__cacheKey){j[re]===void 0&&(j[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[re].usedTimes++;let ue=j[A.__cacheKey];ue!==void 0&&(j[A.__cacheKey].usedTimes--,ue.usedTimes===0&&G(S)),A.__cacheKey=re,A.__webglTexture=j[re].texture}return B}function Ze(A,S,B){return Math.floor(Math.floor(A/B)/S)}function zt(A,S,B,ne){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,ne,S.data);else{re.sort((L,J)=>L.start-J.start);let ue=0;for(let L=1;L<re.length;L++){let J=re[ue],X=re[L],le=J.start+J.count,se=Ze(X.start,S.width,4),ae=Ze(J.start,S.width,4);X.start<=le+1&&se===ae&&Ze(X.start+X.count-1,S.width,4)===se?J.count=Math.max(J.count,X.start+X.count-J.start):(++ue,re[ue]=X)}re.length=ue+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let L=0,J=re.length;L<J;L++){let X=re[L],le=Math.floor(X.start/4),se=Math.ceil(X.count/4),ae=le%S.width,Te=Math.floor(le/S.width),qe=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,ae,Te,qe,ie,B,ne,S.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function Tt(A,S,B){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);let j=ot(A,S),re=S.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+B);let ue=n.get(re);if(re.version!==ue.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=je.getPrimaries(je.workingColorSpace),Ce=S.colorSpace===ai?null:je.getPrimaries(S.colorSpace),We=S.colorSpace===ai||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=v(S.image,!1,s.maxTextureSize);Y=Le(S,Y);let oe=r.convert(S.format,S.colorSpace),L=r.convert(S.type),J=b(S.internalFormat,oe,L,S.normalized,S.colorSpace,S.isVideoTexture);st(ne,S);let X,le=S.mipmaps,se=S.isVideoTexture!==!0,ae=ue.__version===void 0||j===!0,Te=re.dataReady,qe=w(S,Y);if(S.isDepthTexture)J=_(S.format===ri,S.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,J,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,J,Y.width,Y.height,0,oe,L,null));else if(S.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,L,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,L,X.data);S.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,Y.width,Y.height),Te&&zt(S,Y,oe,L)):t.texImage2D(i.TEXTURE_2D,0,J,Y.width,Y.height,0,oe,L,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,J,le[0].width,le[0].height,Y.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(X=le[ie],S.format!==Ln)if(oe!==null)if(se){if(Te)if(S.layerUpdates.size>0){let We=lh(X.width,X.height,S.format,S.type);for(let me of S.layerUpdates){let rt=X.data.subarray(me*We/X.data.BYTES_PER_ELEMENT,(me+1)*We/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,X.width,X.height,1,oe,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,Y.depth,oe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,Y.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,Y.depth,oe,L,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,Y.depth,0,oe,L,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],S.format!==Ln?oe!==null?se?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,L,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,L,X.data)}else if(S.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,J,Y.width,Y.height,Y.depth),Te)if(S.layerUpdates.size>0){let ie=lh(Y.width,Y.height,S.format,S.type);for(let Ce of S.layerUpdates){let We=Y.data.subarray(Ce*ie/Y.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,Y.width,Y.height,1,oe,L,We)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,L,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Y.width,Y.height,Y.depth,0,oe,L,Y.data);else if(S.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,qe,J,Y.width,Y.height,Y.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,L,Y.data)):t.texImage3D(i.TEXTURE_3D,0,J,Y.width,Y.height,Y.depth,0,oe,L,Y.data);else if(S.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,qe,J,Y.width,Y.height);else{let ie=Y.width,Ce=Y.height;for(let We=0;We<qe;We++)t.texImage2D(i.TEXTURE_2D,We,J,ie,Ce,0,oe,L,null),ie>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),u.add(S),ie.onpaint=Ce=>{let We=Ce.changedElements;for(let me of u)We.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let We=i.RGBA,me=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,me,rt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=Oe(le[0]);t.texStorage2D(i.TEXTURE_2D,qe,J,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,L,X):t.texImage2D(i.TEXTURE_2D,ie,J,oe,L,X);S.generateMipmaps=!1}else if(se){if(ae){let ie=Oe(Y);t.texStorage2D(i.TEXTURE_2D,qe,J,ie.width,ie.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,L,Y)}else t.texImage2D(i.TEXTURE_2D,0,J,oe,L,Y);M(S)&&S.mipmapsAutoUpdate===!0&&y(ne),ue.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function jt(A,S,B){if(S.image.length!==6)return;let ne=ot(A,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let re=n.get(j);if(j.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);let ue=je.getPrimaries(je.workingColorSpace),$=S.colorSpace===ai?null:je.getPrimaries(S.colorSpace),Y=S.colorSpace===ai||ue===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let oe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,J=[];for(let me=0;me<6;me++)!oe&&!L?J[me]=v(S.image[me],!0,s.maxCubemapSize):J[me]=L?S.image[me].image:S.image[me],J[me]=Le(S,J[me]);let X=J[0],le=r.convert(S.format,S.colorSpace),se=r.convert(S.type),ae=b(S.internalFormat,le,se,S.normalized,S.colorSpace),Te=S.isVideoTexture!==!0,qe=re.__version===void 0||ne===!0,ie=j.dataReady,Ce=w(S,X);st(i.TEXTURE_CUBE_MAP,S);let We;if(S.isDepthTexture){if(ae=_(S.format===ri,S.type),qe)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,X.width,X.height,0,le,se,null)}else if(oe){Te&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,X.width,X.height);for(let me=0;me<6;me++){We=J[me].mipmaps;for(let rt=0;rt<We.length;rt++){let Nt=We[rt];S.format!==Ln?le!==null?Te?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt,0,0,Nt.width,Nt.height,le,Nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt,ae,Nt.width,Nt.height,0,Nt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt,0,0,Nt.width,Nt.height,le,se,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt,ae,Nt.width,Nt.height,0,le,se,Nt.data)}}}else{if(We=S.mipmaps,Te&&qe){We.length>0&&Ce++;let me=Oe(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,me.width,me.height)}for(let me=0;me<6;me++)if(L){Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,J[me].width,J[me].height,le,se,J[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,J[me].width,J[me].height,0,le,se,J[me].data);for(let rt=0;rt<We.length;rt++){let di=We[rt].image[me].image;Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt+1,0,0,di.width,di.height,le,se,di.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt+1,ae,di.width,di.height,0,le,se,di.data)}}else{Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,J[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,J[me]);for(let rt=0;rt<We.length;rt++){let Nt=We[rt];Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt+1,0,0,le,se,Nt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,rt+1,ae,le,se,Nt.image[me])}}}M(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function mt(A,S,B,ne,j,re){let ue=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Y=b(B.internalFormat,ue,$,B.normalized,B.colorSpace),oe=n.get(S),L=n.get(B);if(L.__renderTarget=S,!oe.__hasExternalTextures){let J=Math.max(1,S.width>>re),X=Math.max(1,S.height>>re);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,re,Y,J,X,S.depth,0,ue,$,null):t.texImage2D(j,re,Y,J,X,0,ue,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,L.__webglTexture,0,ft(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,L.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Un(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let ne=S.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,re=_(S.stencilBuffer,j),ue=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(S),re,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{let ne=S.textures;for(let j=0;j<ne.length;j++){let re=ne[j],ue=r.convert(re.format,re.colorSpace),$=r.convert(re.type),Y=b(re.internalFormat,ue,$,re.normalized,re.colorSpace);fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(S),Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(S),Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,S,B){let ne=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(S.depthTexture);j.__renderTarget=S;let re=ne?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||re.width!==S.width||re.height!==S.height)&&(re.width=S.width,re.height=S.height,S.depthTexture.needsUpdate=!0),ne?xe(S.depthTexture,0):_e(S.depthTexture,0);let ue=j.__webglTexture,$=ft(S),Y=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,oe=S.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ei)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ue,0);else if(S.depthTexture.format===ri)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mn(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=ne}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Dt(S.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?Dt(S.__webglFramebuffer[0],A,0):Dt(S.__webglFramebuffer,A,0);else if(B){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),Un(S.__webglDepthbuffer[ne],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Un(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gn(A,S,B){let ne=n.get(A);S!==void 0&&mt(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&mn(A)}function _n(A){let S=A.texture,B=n.get(A),ne=n.get(S);A.addEventListener("dispose",U),I(A);let j=A.textures,re=A.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Y=0;Y<S.mipmaps.length;Y++)B.__webglFramebuffer[$][Y]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let $=0,Y=j.length;$<Y;$++){let oe=n.get(j[$]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){let Y=j[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let oe=r.convert(Y.format,Y.colorSpace),L=r.convert(Y.type),J=b(Y.internalFormat,oe,L,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),X=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Un(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),st(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)mt(B.__webglFramebuffer[$][Y],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Y);else mt(B.__webglFramebuffer[$],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let $=0,Y=j.length;$<Y;$++){let oe=j[$],L=n.get(oe),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,L.__webglTexture),st(J,oe),mt(B.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+$,J,0),M(oe)&&y(J)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,ne.__webglTexture),st($,S),S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)mt(B.__webglFramebuffer[Y],A,S,i.COLOR_ATTACHMENT0,$,Y);else mt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,$,0);M(S)?y($):S.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&mn(A)}function F(A){let S=A.textures;for(let B=0,ne=S.length;B<ne;B++){let j=S[B];if(M(j)&&j.mipmapsAutoUpdate===!0){let re=T(A),ue=n.get(j).__webglTexture;t.bindTexture(re,ue),y(re),t.unbindTexture()}}}let xn=[];function dt(A){if(A.samples>0){if(fe(A)===!1){let S=A.textures,B=A.width,ne=A.height,j=i.COLOR_BUFFER_BIT,re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),$=S.length>1;if($)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let L=n.get(S[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,j,i.NEAREST),l===!0&&(xn.length=0,xn.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&xn.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let L=n.get(S[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function fe(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Le(A,S){let B=A.colorSpace,ne=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==xr&&B!==ai&&(je.getTransfer(B)===it?(ne!==Ln||j!==nn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",B)),S}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=we,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=Pe,this.setTextureCube=xe,this.rebindTextures=gn,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=mn,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=fe,this.dispose=V}function rv(i,e){function t(n,s=ai){let r,a=je.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Ln)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Yr||n===Zr||n===Jr||n===Kr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Go||n===Vo||n===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Xo||n===$o||n===Yo||n===Zo||n===jr||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Xo)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===Qr||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:av,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends An{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new Mh,g={},v=t.getContextAttributes(),M=null,y=null,T=[],b=[],_=new he,w=null,I=null,R=new $t;R.viewport=new pt;let N=new $t;N.viewport=new pt;let U=[R,N],O=new Ao,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Is,T[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Is,T[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Is,T[Z]=_e),_e.getHandSpace()};function q(Z){let _e=b.indexOf(Z.inputSource);if(_e===-1)return;let be=T[_e];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let _e=b[Z];_e!==null&&(b[Z]=null,T[Z].disconnect(_e))}P=null,V=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?ri:ei,Pe=v.stencil?es:In);let Ge={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ln(d.textureWidth,d.textureHeight,{format:Ln,type:nn,depthTexture:new ni(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ln(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let _e=0;_e<Z.removed.length;_e++){let be=Z.removed[_e],Pe=b.indexOf(be);Pe>=0&&(b[Pe]=null,T[Pe].disconnect(be))}for(let _e=0;_e<Z.added.length;_e++){let be=Z.added[_e],Pe=b.indexOf(be);if(Pe===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=b.length){b.push(be),Pe=Ge;break}else if(b[Ge]===null){b[Ge]=be,Pe=Ge;break}if(Pe===-1)break}let xe=T[Pe];xe&&xe.connect(be)}}function W(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,be=Z.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(be=p.depthFar)),O.near=N.near=R.near=_e,O.far=N.far=R.far=be,(P!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,V=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Pe=Z.parent,xe=O.cameras;W(O,Pe);for(let Ge=0;Ge<xe.length;Ge++)W(xe[Ge],Pe);O.projectionMatrix.copy(R.projectionMatrix),O.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,O,Pe)};function Q(Z,_e,be){be===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=As*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return g[Z]};let ee=null;function we(Z,_e){if(h=_e.getViewerPose(c||a),m=_e,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;be.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let De=0;De<be.length;De++){let st=be[De],ot=null;if(f!==null)ot=f.getViewport(st);else{let zt=u.getViewSubImage(d,st);ot=zt.viewport,De===0&&(e.setRenderTargetTextures(y,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(y))}let Ze=U[De];Ze===void 0&&(Ze=new $t,Ze.layers.enable(De),Ze.viewport=new pt,U[De]=Ze),Ze.matrix.fromArray(st.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(st.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ot.x,ot.y,ot.width,ot.height),De===0&&(O.matrix.copy(Ze.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(Ze)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let De=u.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&p.init(De,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let De=0;De<be.length;De++){let st=be[De].camera;if(st){let ot=g[st];ot||(ot=new Cr,g[st]=ot);let Ze=u.getCameraImage(st);ot.sourceTexture=Ze}}}}for(let be=0;be<T.length;be++){let Pe=b[be],xe=T[be];Pe!==null&&xe!==void 0&&xe.update(Pe,_e,c||a)}ee&&ee(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let ze=new ef;ze.setAnimationLoop(we),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},lv=new ke,uf=new Ue;uf.set(-1,0,0,0,1,0,0,0,1);function cv(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,rh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ct&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ct&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(uf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ct&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,e,t,n){let s={},r={};function a(v,M){let y=M.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,M){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",p));let T=M.program;n.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){let M=i.createBuffer(),y=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(v){let M=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,_=y.length;b<_;b++){let w=y[b];if(Array.isArray(w))for(let I=0,R=w.length;I<R;I++)h(w[I],b,I,T);else h(w,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,M,y,T){if(d(v,M,y,T)===!0){let b=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let I=0;I<_.length;I++){let R=_[I],N=x(R,!0);u(R,v.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function u(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function d(v,M,y,T){let b=v.value,_=M+"_"+y;if(Array.isArray(b)){T[_]===void 0&&(T[_]=[]);let w=T[_],I=!1;for(let R=0;R<b.length;R++)f(b[R],w,R)===!0&&(I=!0);return I}return f(b,T,_)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let T=M[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let M=v.uniforms,y=0,T=16;for(let _=0,w=M.length;_<w;_++){let I=Array.isArray(M[_])?M[_]:[M[_]];for(let R=0,N=I.length;R<N;R++){let U=I[R],O=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(M[_])||Array.isArray(U.value),V=y;for(let G=0,te=O.length;G<te;G++){let W=O[G],Q=x(W,P),ee=y%T,we=ee%Q.boundary,ze=ee+we;y+=we,ze!==0&&T-ze<Q.storage&&(y+=T-ze),G===0&&(V=y),y+=Q.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((y-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function x(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let M=v.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function dv(){return Hn===null&&(Hn=new wr(uv,16,16,Di,Pn),Hn.name="DFG_LUT",Hn.minFilter=Jt,Hn.magFilter=Jt,Hn.wrapS=kn,Hn.wrapT=kn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var vl=class{constructor(e={}){let{canvas:t=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([zo,Bo,ko]),g=new Set([nn,In,Bs,es,Fo,Uo]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,b=null,_=[],w=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,O=null,P=null,V=null;this._outputColorSpace=bt;let q=0,G=0,te=null,W=-1,Q=null,ee=new pt,we=new pt,ze=null,Z=new Be(0),_e=0,be=t.width,Pe=t.height,xe=1,Ge=null,Mt=null,De=new pt(0,0,be,Pe),st=new pt(0,0,be,Pe),ot=!1,Ze=new Si,zt=new no,Tt=!1,jt=!1,mt=new ke,Un=new C,Dt=new pt,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gn=!1;function _n(){return te===null?xe:1}let F=n;function xn(E,D){return t.getContext(E,D)}let dt,ft,fe,At,Le,Oe,A,S,B,ne,j,re,ue,$,Y,oe,L,J,X,le,se,ae,Te;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){let D="webgl2";if(F=xn(D,E),F===null)throw xn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(E){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Fe("WebGLRenderer: "+E.message),E}function qe(){dt=new S_(F),dt.init(),se=new rv(F,dt),ft=new d_(F,dt,e,se),fe=new iv(F,dt),ft.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),O=F.createFramebuffer(),P=F.createFramebuffer(),V=F.createFramebuffer(),At=new T_(F),Le=new Vx,Oe=new sv(F,dt,fe,Le,ft,se,At),A=new M_(R),S=new Rm(F),ae=new h_(F,S),B=new w_(F,S,At,ae),ne=new R_(F,B,S,ae,At),J=new A_(F,ft,Oe),Y=new f_(Le),j=new Gx(R,A,dt,ft,ae,Y),re=new cv(R,Le),ue=new qx,$=new Kx(dt),L=new c_(R,A,fe,ne,m,l),oe=new nv(R,ne,ft),Te=new hv(F,At,ft,fe),X=new u_(F,dt,At),le=new E_(F,dt,At),At.programs=j.programs,R.capabilities=ft,R.extensions=dt,R.properties=Le,R.renderLists=ue,R.shadowMap=oe,R.state=fe,R.info=At}x!==nn&&(I=new I_(x,t.width,t.height,o,s,r));let ie=new Sh(R,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(E){E!==void 0&&(xe=E,this.setSize(be,Pe,!1))},this.getSize=function(E){return E.set(be,Pe)},this.setSize=function(E,D,H=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}be=E,Pe=D,t.width=Math.floor(E*xe),t.height=Math.floor(D*xe),H===!0&&(t.style.width=E+"px",t.style.height=D+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(be*xe,Pe*xe).floor()},this.setDrawingBufferSize=function(E,D,H){be=E,Pe=D,xe=H,t.width=Math.floor(E*H),t.height=Math.floor(D*H),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(x===nn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,D,H,k){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,D,H,k),fe.viewport(ee.copy(De).multiplyScalar(_n()).round())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,D,H,k){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,D,H,k),fe.scissor(we.copy(st).multiplyScalar(_n()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){fe.setScissorTest(ot=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,H=!0){let k=0;if(E){let z=!1;if(te!==null){let de=te.texture.format;z=p.has(de)}if(z){let de=te.texture.type,ye=g.has(de),ce=L.getClearColor(),ve=L.getClearAlpha(),Ee=ce.r,He=ce.g,Je=ce.b;ye?(v[0]=Ee,v[1]=He,v[2]=Je,v[3]=ve,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ee,M[1]=He,M[2]=Je,M[3]=ve,F.clearBufferiv(F.COLOR,0,M))}else k|=F.COLOR_BUFFER_BIT}D&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),L.dispose(),ue.dispose(),$.dispose(),Oe.dispose(),Le.dispose(),A.dispose(),ne.dispose(),B.dispose(),ae.dispose(),Te.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$h),ie.removeEventListener("sessionend",Yh),Oi.stop()};function Ce(E){E.preventDefault(),eh("WebGLRenderer: Context Lost."),N=!0}function We(){eh("WebGLRenderer: Context Restored."),N=!1;let E=At.autoReset,D=oe.enabled,H=oe.autoUpdate,k=oe.needsUpdate,z=oe.type;qe(),At.autoReset=E,oe.enabled=D,oe.autoUpdate=H,oe.needsUpdate=k,oe.type=z}function me(E){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function rt(E){let D=E.target;D.removeEventListener("dispose",rt),Nt(D)}function Nt(E){di(E),Le.remove(E)}function di(E){let D=Le.get(E).programs;D!==void 0&&(D.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,H,k,z,de){D===null&&(D=mn);let ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=np(E,D,H,k,z);fe.setMaterial(k,ye);let ve=H.index,Ee=1;if(k.wireframe===!0){if(ve=B.getWireframeAttribute(H),ve===void 0)return;Ee=2}let He=H.drawRange,Je=H.attributes.position,Me=He.start*Ee,Ke=(He.start+He.count)*Ee;de!==null&&(Me=Math.max(Me,de.start*Ee),Ke=Math.min(Ke,(de.start+de.count)*Ee)),ve!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,ve.count)):Je!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,Je.count));let St=Ke-Me;if(St<0||St===1/0)return;ae.setup(z,k,ce,H,ve);let ct,lt=X;if(ve!==null&&(ct=S.get(ve),lt=le,lt.setIndex(ct)),z.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*_n()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(z.isLine){let Vt=k.linewidth;Vt===void 0&&(Vt=1),fe.setLineWidth(Vt*_n()),z.isLineSegments?lt.setMode(F.LINES):z.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else z.isPoints?lt.setMode(F.POINTS):z.isSprite&&lt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Vt=z._multiDrawStarts,Se=z._multiDrawCounts,Zt=z._multiDrawCount,tt=ve?S.get(ve).bytesPerElement:1,ki=Le.get(k).currentProgram.getUniforms();for(let Wt=0;Wt<Zt;Wt++)ki.setValue(F,"_gl_DrawID",Wt),lt.render(Vt[Wt]/tt,Se[Wt])}else if(z.isInstancedMesh)lt.renderInstances(Me,St,z.count);else if(H.isInstancedBufferGeometry){let Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,Vt);lt.renderInstances(Me,St,Se)}else lt.render(Me,St)};function Xh(E,D,H,k){U!==null&&E.isNodeMaterial&&U.setObject(k,E),Tt===!0&&Y.setState(E,H,!1),E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,sr(E,D,k),E.side=Li,E.needsUpdate=!0,sr(E,D,k),E.side=tn):sr(E,D,k)}this.compile=function(E,D,H=null){H===null&&(H=E),U!==null&&U.renderStart(E,D,H),b=$.get(H),b.init(D),w.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),jt=this.localClippingEnabled,Tt=Y.init(this.clippingPlanes,jt),Tt===!0&&Y.setGlobalState(this.clippingPlanes,D),U!==null&&oe.render(b.state.shadowsArray,H,D);let k=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let ce=de[ye];Xh(ce,H,D,z),k.add(ce)}else Xh(de,H,D,z),k.add(de)}),b=w.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(E,D,H=null){let k=this.compile(E,D,H);return new Promise(z=>{function de(){if(k.forEach(function(ye){let ve=Le.get(ye).currentProgram;(ve===void 0||ve.isReady())&&k.delete(ye)}),k.size===0){z(E);return}setTimeout(de,10)}dt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $l=null;function ep(E){$l&&$l(E)}function $h(){Oi.stop()}function Yh(){Oi.start()}let Oi=new ef;Oi.setAnimationLoop(ep),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){$l=E,ie.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},ie.addEventListener("sessionstart",$h),ie.addEventListener("sessionend",Yh),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,D);let H=ie.enabled===!0&&ie.isPresenting===!0,k=I!==null&&(te===null||H)&&I.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,D,te),b=$.get(E,w.length),b.init(D),b.state.textureUnits=Oe.getTextureUnits(),w.push(b),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?zt.setFromArrayCamera(D):Ze.setFromProjectionMatrix(mt,yn,D.reversedDepth),jt=this.localClippingEnabled,Tt=Y.init(this.clippingPlanes,jt),T=ue.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&Yl(ye,D,-1/0,R.sortObjects)}Yl(E,D,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(Ge,Mt),gn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gn&&L.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&Y.beginShadows();let z=b.state.shadowsArray;if(oe.render(z,E,D),Tt===!0&&Y.endShadows(),(k&&I.hasRenderPass())===!1){let ye=T.opaque,ce=T.transmissive;if(b.setupLights(),D.isArrayCamera){let ve=D.cameras;if(ce.length>0)for(let Ee=0,He=ve.length;Ee<He;Ee++){let Je=ve[Ee];Jh(ye,ce,E,Je)}gn&&L.render(E);for(let Ee=0,He=ve.length;Ee<He;Ee++){let Je=ve[Ee];Zh(T,E,Je,Je.viewport)}}else ce.length>0&&Jh(ye,ce,E,D),gn&&L.render(E),Zh(T,E,D)}te!==null&&G===0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),k&&I.end(R),E.isScene===!0&&E.onAfterRender(R,E,D),ae.resetDefaultState(),W=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],Oe.setTextureUnits(b.state.textureUnits),Tt===!0&&Y.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function Yl(E,D,H,k){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){let ye=D.isArrayCamera?zt:Ze;if(!E.frustumCulled||E.intersectsFrustum(ye)){k&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);let ce=ne.update(E),ve=E.material;ve.visible&&T.push(E,ce,ve,H,Dt.z,null,D)}}else if(E.isMesh||E.isLine||E.isPoints){let ye=D.isArrayCamera?zt:Ze;if(!E.frustumCulled||E.intersectsFrustum(ye)){let ce=ne.update(E),ve=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Dt.copy(ce.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(ve)){let Ee=ce.groups;for(let He=0,Je=Ee.length;He<Je;He++){let Me=Ee[He],Ke=ve[Me.materialIndex];Ke&&Ke.visible&&T.push(E,ce,Ke,H,Dt.z,Me,D)}}else ve.visible&&T.push(E,ce,ve,H,Dt.z,null,D)}}}let de=E.children;for(let ye=0,ce=de.length;ye<ce;ye++)Yl(de[ye],D,H,k)}function Zh(E,D,H,k){let{opaque:z,transmissive:de,transparent:ye}=E;b.setupLightsView(H),Tt===!0&&Y.setGlobalState(R.clippingPlanes,H),k&&fe.viewport(ee.copy(k)),z.length>0&&ma(z,D,H),de.length>0&&ma(de,D,H),ye.length>0&&ma(ye,D,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Jh(E,D,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Me=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new ln(1,1,{generateMipmaps:!0,type:Me?Pn:nn,minFilter:Cn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let de=b.state.transmissionRenderTarget[k.id],ye=k.viewport||ee;de.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),ve=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(Z),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),gn&&L.render(H);let He=R.toneMapping;R.toneMapping=zn;let Je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),Tt===!0&&Y.setGlobalState(R.clippingPlanes,k),ma(E,H,k),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ke=0,St=D.length;Ke<St;Ke++){let ct=D[Ke],{object:lt,geometry:Vt,material:Se,group:Zt}=ct;if(Se.side===tn&&lt.layers.test(k.layers)){let tt=Se.side;Se.side=Ct,Se.needsUpdate=!0,Kh(lt,H,k,Vt,Se,Zt),Se.side=tt,Se.needsUpdate=!0,Me=!0}}Me===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de))}R.setRenderTarget(ce,ve,Ee),R.setClearColor(Z,_e),Je!==void 0&&(k.viewport=Je),R.toneMapping=He}function ma(E,D,H){let k=D.isScene===!0?D.overrideMaterial:null;for(let z=0,de=E.length;z<de;z++){let ye=E[z],{object:ce,geometry:ve,group:Ee}=ye,He=ye.material;He.allowOverride===!0&&k!==null&&(He=k),ce.layers.test(H.layers)&&Kh(ce,D,H,ve,He,Ee)}}function Kh(E,D,H,k,z,de){U!==null&&z.isNodeMaterial&&U.setObject(E,z),E.onBeforeRender(R,D,H,k,z,de),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(R,D,H,k,E,de),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Ct,z.needsUpdate=!0,R.renderBufferDirect(H,D,k,z,E,de),z.side=Li,z.needsUpdate=!0,R.renderBufferDirect(H,D,k,z,E,de),z.side=tn):R.renderBufferDirect(H,D,k,z,E,de),E.onAfterRender(R,D,H,k,z,de)}function jh(E){let D=0;for(let H of E)H.texture!==null&&D++;return D}function sr(E,D,H){D.isScene!==!0&&(D=mn);let k=Le.get(E),z=b.state.lights,de=b.state.shadowsArray,ye=z.state.version,ce=j.getParameters(E,z.state,de,D,H,b.state.lightProbeGridArray),ve=j.getProgramCacheKey(ce),Ee=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=A.get(E.envMap||k.environment,He),k.envMapRotation=k.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",rt),Ee=new Map,k.programs=Ee,k.programVariants=new Map);let Je=Ee.get(ve);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===ye)return eu(E,ce),Je}else ce.uniforms=j.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,H,ce),E.onBeforeCompile(ce,R),Je=j.acquireProgram(ce,ve),Ee.set(ve,Je),k.uniforms=ce.uniforms;let Me=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=Y.uniform),eu(E,ce),k.needsLights=sp(E),k.lightsStateVersion=ye,k.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),k.numLightProbeGrids=jh(b.state.lightProbeGridArray),k.currentProgram=Je,k.uniformsList=null,Je}function tp(E,D,H,k,z){let de=Le.get(E),ye=de.currentProgram.id+","+k+","+z,ce=de.programVariants.get(ye);return ce===void 0?(ce=sr(E,D,H),de.programVariants.set(ye,ce)):(de.currentProgram=ce,de.uniformsList=null,de.outputColorSpace=k,de.toneMapping=z),ce}function Qh(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function eu(E,D){let H=Le.get(E);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function np(E,D,H,k,z){D.isScene!==!0&&(D=mn),Oe.resetTextureUnits();let de=D.fog,ye=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,ce=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ee=A.get(k.envMap||ye,ve),He=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Je=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,St=!!H.morphAttributes.color,ct=zn;k.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ct=R.toneMapping);let lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Vt=lt!==void 0?lt.length:0,Se=Le.get(k),Zt=b.state.lights;if(Tt===!0&&(jt===!0||E!==Q)){let gt=E===Q&&k.id===W;Y.setState(k,E,gt)}let tt=!1,ki=!1;k.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Zt.state.version||z.isBatchedMesh&&Se.batching===!1||!z.isBatchedMesh&&Se.batching===!0||z.isBatchedMesh&&Se.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Se.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Se.instancing===!1||!z.isInstancedMesh&&Se.instancing===!0||z.isSkinnedMesh&&Se.skinning===!1||!z.isSkinnedMesh&&Se.skinning===!0||z.isInstancedMesh&&Se.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Se.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Se.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Se.instancingMorph===!1&&z.morphTexture!==null||Se.envMap!==Ee||k.fog===!0&&Se.fog!==de||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==Je||Se.morphTargets!==Me||Se.morphNormals!==Ke||Se.morphColors!==St||Se.morphTargetsCount!==Vt||Se.numLightProbeGrids!==jh(b.state.lightProbeGridArray)?tt=!0:(Se.outputColorSpace!==ce||Se.toneMapping!==ct)&&(ki=!0):(tt=!0,Se.__version=k.version);let Wt=Se.currentProgram;(tt===!0||ki===!0)&&(Wt=ki===!0?tp(k,D,z,ce,ct):sr(k,D,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Wt,Se));let ga=!1,fi=!1,Bi=!1,Qe=Wt.getUniforms(),Ht=Se.uniforms;if(fe.useProgram(Wt.program)&&(ga=!0,fi=!0,Bi=!0),k.id!==W&&(W=k.id,fi=!0),ga||Q!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Qe.setValue(F,"projectionMatrix",E.projectionMatrix),Qe.setValue(F,"viewMatrix",E.matrixWorldInverse);let Ft=Qe.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,Un.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&Qe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,fi=!0,Bi=!0)}if(Se.needsLights&&(Zt.state.sunShadowMap.length>0&&Qe.setValue(F,"sunShadowMap",Zt.state.sunShadowMap,Oe),Zt.state.directionalShadowMap.length>0&&Qe.setValue(F,"directionalShadowMap",Zt.state.directionalShadowMap,Oe),Zt.state.spotShadowMap.length>0&&Qe.setValue(F,"spotShadowMap",Zt.state.spotShadowMap,Oe),Zt.state.pointShadowMap.length>0&&Qe.setValue(F,"pointShadowMap",Zt.state.pointShadowMap,Oe)),z.isSkinnedMesh){Qe.setOptional(F,z,"bindMatrix"),Qe.setOptional(F,z,"bindMatrixInverse");let gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Qe.setValue(F,"boneTexture",gt.boneTexture,Oe))}z.isBatchedMesh&&(Qe.setOptional(F,z,"batchingTexture"),Qe.setValue(F,"batchingTexture",z._matricesTexture,Oe),Qe.setOptional(F,z,"batchingIdTexture"),Qe.setValue(F,"batchingIdTexture",z._indirectTexture,Oe),Qe.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(F,"batchingColorTexture",z._colorsTexture,Oe));let Sn=H.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&J.update(z,H,Wt),(fi||Se.receiveShadow!==z.receiveShadow)&&(Se.receiveShadow=z.receiveShadow,Qe.setValue(F,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=dv()),fi){if(Qe.setValue(F,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&ip(Ht,Bi),de&&k.fog===!0&&re.refreshFogUniforms(Ht,de),re.refreshMaterialUniforms(Ht,k,xe,Pe,b.state.transmissionRenderTarget[E.id]),Se.needsLights&&Se.numLightProbeGrids>0){let gt=y,Ft=0;for(let $n of b.state.lightProbeGridArray)$n.texture!==null&&(gt.textures[Ft]=$n.texture,gt.min[Ft]=$n.boundingBox.min,gt.max[Ft]=$n.boundingBox.max,gt.resolution[Ft]=$n.resolution,Ft++);for(let $n in gt)gt[$n].length=Ft;Ht.probesSH.value=gt.textures,Ht.probesMin.value=gt.min,Ht.probesMax.value=gt.max,Ht.probesResolution.value=gt.resolution}Hs.upload(F,Qh(Se),Ht,Oe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hs.upload(F,Qh(Se),Ht,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qe.setValue(F,"center",z.center),Qe.setValue(F,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(F,"normalMatrix",z.normalMatrix),Qe.setValue(F,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let gt=k.uniformsGroups;for(let Ft=0,$n=gt.length;Ft<$n;Ft++){let nu=gt[Ft];Te.update(nu,Wt),Te.bind(nu,Wt)}}return Wt}function ip(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function sp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,D,H){let k=Le.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Le.get(E.texture).__webglTexture=D,Le.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){let H=Le.get(E);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,H=0){te=E,q=D,G=H;let k=null,z=!1,de=!1;if(E){let ce=Le.get(E);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(F.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(E.viewport),we.copy(E.scissor),ze=E.scissorTest,fe.viewport(ee),fe.scissor(we),fe.setScissorTest(ze),W=-1;return}else if(ce.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(ce.__hasExternalTextures)Oe.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&Le.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Ee=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?k=Ee[D][H]:k=Ee[D],z=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?k=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?k=Ee[H]:k=Ee,ee.copy(E.viewport),we.copy(E.scissor),ze=E.scissorTest}else ee.copy(De).multiplyScalar(xe).floor(),we.copy(st).multiplyScalar(xe).floor(),ze=ot;if(H!==0&&(k=O),fe.bindFramebuffer(F.FRAMEBUFFER,k)&&fe.drawBuffers(E,k),fe.viewport(ee),fe.scissor(we),fe.setScissorTest(ze),z){let ce=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ce.__webglTexture,H)}else if(de){let ce=D;for(let ve=0;ve<E.textures.length;ve++){let Ee=Le.get(E.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,H,ce)}}else if(E!==null&&H!==0){let ce=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,H)}W=-1};function tu(E){let D=Le.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=ft.textureFormatReadable(E.format),D.__typeReadable=ft.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,H,k,z,de,ye,ce=0){if(!(E&&E.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(F.FRAMEBUFFER,ve);try{let Ee=E.textures[ce],He=Ee.format,Je=Ee.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Me=tu(Ee);if(Me.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-k&&H>=0&&H<=E.height-z&&F.readPixels(D,H,k,z,se.convert(He),se.convert(Je),de)}finally{let Ee=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,D,H,k,z,de,ye,ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve)if(D>=0&&D<=E.width-k&&H>=0&&H<=E.height-z){fe.bindFramebuffer(F.FRAMEBUFFER,ve);let Ee=E.textures[ce],He=Ee.format,Je=Ee.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Me=tu(Ee);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.bufferData(F.PIXEL_PACK_BUFFER,de.byteLength,F.STREAM_READ),F.readPixels(D,H,k,z,se.convert(He),se.convert(Je),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let St=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,St);let ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bd(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,de),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ke),F.deleteSync(ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,H=0){let k=Math.pow(2,-H),z=Math.floor(E.image.width*k),de=Math.floor(E.image.height*k),ye=D!==null?D.x:0,ce=D!==null?D.y:0;Oe.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,ye,ce,z,de),fe.unbindTexture()},this.copyTextureToTexture=function(E,D,H=null,k=null,z=0,de=0){let ye,ce,ve,Ee,He,Je,Me,Ke,St,ct=E.isCompressedTexture?E.mipmaps[de]:E.image;if(H!==null)ye=H.max.x-H.min.x,ce=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,He=H.min.y,Je=H.isBox3?H.min.z:0;else{let Qe=Math.pow(2,-z);ye=Math.floor(ct.width*Qe),ce=Math.floor(ct.height*Qe),E.isDataArrayTexture?ve=ct.depth:E.isData3DTexture?ve=Math.floor(ct.depth*Qe):ve=1,Ee=0,He=0,Je=0}k!==null?(Me=k.x,Ke=k.y,St=k.z):(Me=0,Ke=0,St=0);let lt=se.convert(D.format),Vt=se.convert(D.type),Se;D.isData3DTexture?(Oe.setTexture3D(D,0),Se=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Oe.setTexture2DArray(D,0),Se=F.TEXTURE_2D_ARRAY):(Oe.setTexture2D(D,0),Se=F.TEXTURE_2D),fe.activeTexture(F.TEXTURE0),fe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),fe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),fe.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let Zt=fe.getParameter(F.UNPACK_ROW_LENGTH),tt=fe.getParameter(F.UNPACK_IMAGE_HEIGHT),ki=fe.getParameter(F.UNPACK_SKIP_PIXELS),Wt=fe.getParameter(F.UNPACK_SKIP_ROWS),ga=fe.getParameter(F.UNPACK_SKIP_IMAGES);fe.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ee),fe.pixelStorei(F.UNPACK_SKIP_ROWS,He),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);let fi=E.isDataArrayTexture||E.isData3DTexture,Bi=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){let Qe=Le.get(E),Ht=Le.get(D),Sn=Le.get(Qe.__renderTarget),gt=Le.get(Ht.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ft=0;Ft<ve;Ft++)fi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,z,Je+Ft),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(D).__webglTexture,de,St+Ft)),F.blitFramebuffer(Ee,He,Ee+ye,He+ce,Me,Ke,Me+ye,Ke+ce,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Le.has(E)){let Qe=Le.get(E),Ht=Le.get(D);fe.bindFramebuffer(F.READ_FRAMEBUFFER,P),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Sn=0;Sn<ve;Sn++)fi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,z,Je+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,z),Bi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,de,St+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,de),z!==0?F.blitFramebuffer(Ee,He,Ee+ye,He+ce,Me,Ke,Me+ye,Ke+ce,F.COLOR_BUFFER_BIT,F.NEAREST):Bi?F.copyTexSubImage3D(Se,de,Me,Ke,St+Sn,Ee,He,ye,ce):F.copyTexSubImage2D(Se,de,Me,Ke,Ee,He,ye,ce);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bi?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,Vt,ct.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,ct.data):F.texSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,Vt,ct):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,de,Me,Ke,ye,ce,lt,Vt,ct.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,de,Me,Ke,ct.width,ct.height,lt,ct.data):F.texSubImage2D(F.TEXTURE_2D,de,Me,Ke,ye,ce,lt,Vt,ct);fe.pixelStorei(F.UNPACK_ROW_LENGTH,Zt),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,ki),fe.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,ga),de===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(Se),fe.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){q=0,G=0,te=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var qs=[{id:"flat",name:"Cards & flat print"},{id:"folded",name:"Folded leaflets"},{id:"invitations",name:"Invitations & greetings"},{id:"envelopes",name:"Envelopes"},{id:"folders",name:"Folders"},{id:"bound",name:"Brochures & books"},{id:"stationery",name:"Calendars & pads"},{id:"boxes",name:"Boxes"},{id:"bags",name:"Bags & food"},{id:"labels",name:"Labels & stickers"},{id:"display",name:"Large format & display"}],Ml={a7:[74,105],a6:[105,148],a5:[148,210],a4:[210,297],a3:[297,420],a2:[420,594],a1:[594,841],a0:[841,1189],b2:[500,700],b1:[700,1e3]},ra=["silk-350","silk-300","offset-120","cotton-450","kraft-300","black-300"],oi=["silk-170","gloss-170","silk-135","offset-120","silk-250","silk-300"],Sl=["cotton-450","silk-350","offset-120","kraft-300","black-300"],aa=["env-120","env-90","kraft-120","black-300"],fn=["gc1-350","gc1-400","kraftboard-400","black-300"],wl=["eflute-white","eflute-kraft"],$e=["none","matte","gloss","soft"],K=(i,e,t)=>({id:i,label:e,p:t}),pe=(i,e,t,n,s)=>K(i,e,{w:t,h:n,...s}),oa=(i,e)=>i.map(t=>pe(t,`${t.toUpperCase()} ${Ml[t][0]} \xD7 ${Ml[t][1]} mm`,Ml[t][0],Ml[t][1],e)),Ne=(i,e,t,n,s)=>K(i,e,{w:t,h:n,...s}),Ws=[{id:"business-card",cat:"flat",name:"Business card",nl:"Visitekaartje",fr:"Carte de visite",use:"The European standard, 85 \xD7 55 mm.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55),pe("wide","90 \xD7 50 mm",90,50),pe("us","89 \xD7 51 mm",89,51)],stocks:ra,finishes:$e},{id:"business-card-round",cat:"flat",name:"Rounded business card",nl:"Visitekaartje afgeronde hoeken",fr:"Carte de visite coins arrondis",use:"Same card with die-cut corners.",tpl:"sheet",sizes:[pe("r3","85 \xD7 55 mm, radius 3",85,55,{r:3}),pe("r6","85 \xD7 55 mm, radius 6",85,55,{r:6})],stocks:ra,finishes:$e},{id:"business-card-square",cat:"flat",name:"Square business card",nl:"Vierkant visitekaartje",fr:"Carte de visite carr\xE9e",use:"Stands out in a stack of standard cards.",tpl:"sheet",sizes:[pe("s55","55 \xD7 55 mm",55,55),pe("s65","65 \xD7 65 mm",65,65),pe("s85","85 \xD7 85 mm",85,85)],stocks:ra,finishes:$e},{id:"business-card-slim",cat:"flat",name:"Slim business card",nl:"Smal visitekaartje",fr:"Carte de visite \xE9troite",use:"A narrow card for a short message.",tpl:"sheet",sizes:[pe("s","85 \xD7 35 mm",85,35),pe("m","90 \xD7 40 mm",90,40)],stocks:ra,finishes:$e},{id:"business-card-circle",cat:"flat",name:"Round card",nl:"Rond kaartje",fr:"Carte ronde",use:"Die-cut circle, also works as a coaster or tag.",tpl:"sheet",sizes:[pe("d60","\xD8 60 mm",60,60,{shape:"circle"}),pe("d70","\xD8 70 mm",70,70,{shape:"circle"})],stocks:ra,finishes:$e},{id:"business-card-folded",cat:"flat",name:"Folded business card",nl:"Gevouwen visitekaartje",fr:"Carte de visite pli\xE9e",use:"Four sides of space in a wallet format.",tpl:"halfFold",sizes:[Ne("tent","170 \xD7 55 \u2192 85 \xD7 55 mm",170,55),Ne("top","85 \xD7 110 \u2192 85 \xD7 55 mm",85,110,{axis:"h"})],stocks:["silk-300","silk-350","offset-120","kraft-300"],finishes:$e},{id:"flyer",cat:"flat",name:"Flyer",nl:"Flyer",fr:"Flyer",use:"Single sheet, one or two sides.",tpl:"sheet",sizes:[...oa(["a7","a6","a5","a4"]),pe("dl","DL 99 \xD7 210 mm",99,210),pe("xl","X-long 105 \xD7 297 mm",105,297),pe("s148","Square 148 \xD7 148 mm",148,148),pe("s210","Square 210 \xD7 210 mm",210,210)],stocks:oi,finishes:$e,def:"a5"},{id:"postcard",cat:"flat",name:"Postcard",nl:"Postkaart",fr:"Carte postale",use:"Heavy card, writable back.",tpl:"sheet",sizes:[pe("a6","A6 148 \xD7 105 mm",148,105),pe("lg","A5 210 \xD7 148 mm",210,148),pe("dl","DL 210 \xD7 99 mm",210,99),pe("sq","Square 140 \xD7 140 mm",140,140)],stocks:["silk-350","silk-300","offset-120","kraft-300"],finishes:["none","matte"]},{id:"letterhead",cat:"flat",name:"Letterhead",nl:"Briefpapier",fr:"Papier \xE0 en-t\xEAte",use:"Office-printable uncoated paper.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"compliment-slip",cat:"flat",name:"Compliment slip",nl:"Complimentkaart",fr:"Carte de correspondance",use:"Short note that fits a DL envelope.",tpl:"sheet",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99)],stocks:["offset-120","silk-250","silk-300"],finishes:["none","matte"]},{id:"bookmark",cat:"flat",name:"Bookmark",nl:"Boekenlegger",fr:"Marque-page",use:"Long narrow card, optional punched hole.",tpl:"sheet",sizes:[pe("s","50 \xD7 148 mm",50,148),pe("m","50 \xD7 200 mm",50,200),pe("l","60 \xD7 210 mm",60,210)],stocks:["silk-300","silk-350","kraft-300"],finishes:$e},{id:"door-hanger",cat:"flat",name:"Door hanger",nl:"Deurhanger",fr:"Accroche-porte",use:"Die-cut hole with a slit for the handle.",tpl:"doorHanger",sizes:[pe("xl","105 \xD7 297 mm",105,297),pe("dl","99 \xD7 210 mm",99,210)],stocks:["silk-350","silk-300"],finishes:$e},{id:"hang-tag",cat:"flat",name:"Hang tag",nl:"Hangtag",fr:"\xC9tiquette volante",use:"Clothing and product tag with a string.",tpl:"hangTag",sizes:[pe("s","50 \xD7 90 mm",50,90),pe("m","55 \xD7 85 mm",55,85),pe("l","70 \xD7 120 mm",70,120)],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:$e},{id:"coaster",cat:"flat",name:"Beer mat",nl:"Bierviltje",fr:"Sous-bock",use:"Thick absorbent board, a Belgian classic.",tpl:"sheet",sizes:[pe("sq","Square 93 \xD7 93 mm",93,93,{r:3}),pe("rd","Round \xD8 93 mm",93,93,{shape:"circle"})],stocks:["beermat-1000"],finishes:["none"]},{id:"placemat",cat:"flat",name:"Placemat",nl:"Placemat",fr:"Set de table",use:"Paper table mat for horeca.",tpl:"sheet",sizes:[pe("a3","A3 420 \xD7 297 mm",420,297,{stack:8}),pe("l","430 \xD7 300 mm",430,300,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"menu-card",cat:"flat",name:"Menu card",nl:"Menukaart",fr:"Carte de menu",use:"Single card, often laminated for horeca.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297),pe("a5","A5 148 \xD7 210 mm",148,210),pe("xl","X-long 105 \xD7 297 mm",105,297)],stocks:["silk-350","silk-300","kraft-300"],finishes:$e},{id:"voucher",cat:"flat",name:"Gift voucher",nl:"Cadeaubon",fr:"Bon cadeau",use:"DL card with a tear-off stub.",tpl:"ticket",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99,{stub:50})],stocks:["silk-250","silk-300"],finishes:["none","matte"]},{id:"event-ticket",cat:"flat",name:"Event ticket",nl:"Toegangsticket",fr:"Ticket d'entr\xE9e",use:"Perforated stub for checking in.",tpl:"ticket",sizes:[pe("m","200 \xD7 70 mm",200,70,{stub:40}),pe("s","148 \xD7 52 mm",148,52,{stub:34})],stocks:["silk-250","silk-300","gloss-300"],finishes:["none","matte"]},{id:"loyalty-card",cat:"flat",name:"Loyalty card",nl:"Spaarkaart",fr:"Carte de fid\xE9lit\xE9",use:"Stamp card, keep the back uncoated.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55)],stocks:["offset-120","silk-300"],finishes:["none"]},{id:"certificate",cat:"flat",name:"Certificate",nl:"Certificaat",fr:"Certificat",use:"Heavy A4 sheet with a writable surface.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:2})],stocks:["silk-250","offset-120","cotton-450"],finishes:["none"]},{id:"badge",cat:"flat",name:"Event badge",nl:"Badge",fr:"Badge",use:"Lanyard slot on top.",tpl:"badge",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a7","A7 74 \xD7 105 mm",74,105)],stocks:["silk-300","silk-350"],finishes:$e},{id:"table-tent",cat:"flat",name:"Tent card",nl:"Tafelstandaard",fr:"Chevalet de table",use:"Folded card that stands on a table.",tpl:"tentCard",sizes:[K("a6","A5 \u2192 148 \xD7 105 mm",{w:148,h:210}),K("a5","A4 \u2192 210 \xD7 148 mm",{w:210,h:297}),K("name","Name card 90 \xD7 50 mm",{w:90,h:100})],stocks:["silk-350","silk-300","kraft-300"],finishes:$e},{id:"table-talker",cat:"flat",name:"Table talker",nl:"Tafelprisma",fr:"Prisme de table",use:"Three-sided prism with a glue strip.",tpl:"tableTalker",sizes:[K("a6","148 \xD7 105 mm face",{w:148,side:105,h:310}),K("dl","210 \xD7 99 mm face",{w:210,side:99,h:300})],stocks:["silk-350","silk-300"],finishes:$e},{id:"half-fold",cat:"folded",name:"Half fold",nl:"Enkelvouw",fr:"Pli simple",use:"One fold, four pages. The default leaflet.",tpl:"halfFold",sizes:[Ne("a4a5","A4 \u2192 A5",297,210),Ne("a3a4","A3 \u2192 A4",420,297),Ne("a5a6","A5 \u2192 A6",210,148),Ne("dl","198 \xD7 210 \u2192 DL",198,210),Ne("xl","A4 \u2192 X-long",210,297),Ne("sq","Square 296 \xD7 148 \u2192 148 mm",296,148)],stocks:oi,finishes:$e},{id:"tri-fold",cat:"folded",name:"Tri-fold",nl:"Wikkelvouw",fr:"Pli roul\xE9",use:"Roll fold, six pages. The inner flap is cut narrower.",tpl:"rollFold",sizes:[Ne("a4","A4 \u2192 100 \xD7 210 mm",297,210,{panels:[97,100,100]}),Ne("a5","A5 \u2192 70 \xD7 148 mm",210,148,{panels:[68,71,71]}),Ne("a3","A3 \u2192 140 \xD7 297 mm",420,297,{panels:[138,141,141]}),Ne("sq","444 \xD7 148 \u2192 square 148 mm",444,148,{panels:[145,149.5,149.5]})],stocks:oi,finishes:$e},{id:"z-fold",cat:"folded",name:"Z-fold",nl:"Zigzagvouw",fr:"Pli accord\xE9on",use:"Three equal panels that open like a Z.",tpl:"zFold",sizes:[Ne("a4","A4 \u2192 99 \xD7 210 mm",297,210),Ne("a5","A5 \u2192 70 \xD7 148 mm",210,148),Ne("a5l","630 \xD7 148 \u2192 A5 landscape",630,148),Ne("a3","A3 \u2192 140 \xD7 297 mm",420,297)],stocks:oi,finishes:$e},{id:"gate-fold",cat:"folded",name:"Gate fold",nl:"Altaarvouw",fr:"Pli fen\xEAtre",use:"Two doors open onto a double centre.",tpl:"gateFold",sizes:[Ne("a4","A4 \u2192 149 \xD7 210 mm",297,210),Ne("a3","A3 \u2192 A4",420,297),Ne("a5","A5 \u2192 106 \xD7 148 mm",210,148)],stocks:oi,finishes:$e},{id:"double-gate",cat:"folded",name:"Double gate fold",nl:"Dubbele altaarvouw",fr:"Pli portefeuille",use:"Gate fold closed once more down the middle.",tpl:"doubleGate",sizes:[Ne("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),Ne("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:oi,finishes:$e},{id:"double-parallel",cat:"folded",name:"Double parallel fold",nl:"Dubbele parallelvouw",fr:"Double pli parall\xE8le",use:"Folded in half, then in half again.",tpl:"doubleParallel",sizes:[Ne("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),Ne("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:oi,finishes:$e},{id:"roll-fold-8",cat:"folded",name:"Four-panel roll fold",nl:"Wikkelvouw 8 pagina\u2019s",fr:"Pli roul\xE9 4 volets",use:"Eight pages rolling inwards.",tpl:"roll4",sizes:[Ne("dl","396 \xD7 210 \u2192 100 \xD7 210 mm",396,210),Ne("a3","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:oi,finishes:$e},{id:"accordion-4",cat:"folded",name:"Accordion, 4 panels",nl:"Zigzagvouw 4-luik",fr:"Accord\xE9on 4 volets",use:"Stands on a table as a small display.",tpl:"accordion",sizes:[Ne("dl","396 \xD7 210 \u2192 99 \xD7 210 mm",396,210,{n:4}),Ne("a6","420 \xD7 148 \u2192 105 \xD7 148 mm",420,148,{n:4})],stocks:oi,finishes:$e},{id:"accordion-6",cat:"folded",name:"Leporello, 6 panels",nl:"Leporello",fr:"Leporello",use:"Long concertina for timelines and photo series.",tpl:"accordion",sizes:[Ne("dl","594 \xD7 210 \u2192 99 \xD7 210 mm",594,210,{n:6}),Ne("sq","888 \xD7 148 \u2192 square 148 mm",888,148,{n:6}),Ne("five","495 \xD7 210, 5 panels",495,210,{n:5})],stocks:["silk-250","silk-300","silk-170"],finishes:$e},{id:"cross-fold",cat:"folded",name:"Cross fold",nl:"Kruisvouw",fr:"Pli crois\xE9",use:"Two folds at right angles, from A3 to A5.",tpl:"crossFold",sizes:[Ne("a3","A3 \u2192 A5",420,297),Ne("a2","A2 \u2192 A4",594,420),Ne("a4","A4 \u2192 A6",297,210)],stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"]},{id:"map-fold",cat:"folded",name:"Map fold",nl:"Landkaartvouw",fr:"Pli carte",use:"Concertina first, then folded across.",tpl:"mapFold",sizes:[Ne("a2","A2 \u2192 148 \xD7 210 mm",594,420,{cols:4}),Ne("a1","A1 \u2192 141 \xD7 210 mm",841,420,{cols:6})],stocks:["offset-90","silk-135"],finishes:["none"]},{id:"invite-flat",cat:"invitations",name:"Flat invitation",nl:"Uitnodiging plat",fr:"Faire-part simple",use:"A single heavy card, printed on both sides.",tpl:"sheet",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a5","A5 148 \xD7 210 mm",148,210),pe("5x7","127 \xD7 178 mm",127,178),pe("sq","Square 140 \xD7 140 mm",140,140),pe("dl","DL 99 \xD7 210 mm",99,210)],stocks:Sl,finishes:["none","matte","soft"]},{id:"invite-round",cat:"invitations",name:"Rounded invitation",nl:"Uitnodiging afgerond",fr:"Faire-part coins ronds",use:"Soft die-cut corners.",tpl:"sheet",sizes:[pe("a6","A6, radius 6",105,148,{r:6}),pe("a5","A5, radius 8",148,210,{r:8}),pe("sq","Square, radius 8",140,140,{r:8})],stocks:Sl,finishes:["none","matte","soft"]},{id:"invite-arch",cat:"invitations",name:"Arch invitation",nl:"Uitnodiging boogvorm",fr:"Faire-part en arche",use:"Die-cut arched top, popular for weddings.",tpl:"sheet",sizes:[pe("m","120 \xD7 170 mm",120,170,{shape:"arch"}),pe("s","105 \xD7 148 mm",105,148,{shape:"arch"})],stocks:Sl,finishes:["none","soft"]},{id:"invite-oval",cat:"invitations",name:"Oval invitation",nl:"Ovale uitnodiging",fr:"Faire-part ovale",use:"Die-cut oval for a softer shape.",tpl:"sheet",sizes:[pe("m","110 \xD7 160 mm",110,160,{shape:"ellipse"})],stocks:Sl,finishes:["none","soft"]},{id:"card-side",cat:"invitations",name:"Folded card, side fold",nl:"Dubbele kaart, zijvouw",fr:"Carte double, pli vertical",use:"Opens like a book, the greeting card.",tpl:"halfFold",sizes:[Ne("a6","A5 \u2192 A6",210,148),Ne("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178),Ne("sq","280 \xD7 140 \u2192 square 140 mm",280,140),Ne("a5","A4 \u2192 A5",297,210)],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"card-top",cat:"invitations",name:"Folded card, top fold",nl:"Dubbele kaart, kopvouw",fr:"Carte double, pli horizontal",use:"Opens upwards, landscape front.",tpl:"halfFold",sizes:[Ne("a6","A5 \u2192 A6 landscape",148,210,{axis:"h"}),Ne("sq","140 \xD7 280 \u2192 square 140 mm",140,280,{axis:"h"}),Ne("a5","A4 \u2192 A5 landscape",210,297,{axis:"h"})],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"invite-gate",cat:"invitations",name:"Gatefold invitation",nl:"Uitnodiging altaarvouw",fr:"Faire-part pli fen\xEAtre",use:"Two doors, a formal reveal.",tpl:"gateFold",sizes:[Ne("sq","300 \xD7 150 \u2192 square 150 mm",300,150),Ne("a6","210 \xD7 148 \u2192 106 \xD7 148 mm",210,148),Ne("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178)],stocks:["silk-300","cotton-450","kraft-300","black-300"],finishes:["none","soft"]},{id:"invite-z",cat:"invitations",name:"Z-fold invitation",nl:"Uitnodiging zigzagvouw",fr:"Faire-part accord\xE9on",use:"Three panels for programme and details.",tpl:"zFold",sizes:[Ne("sq","420 \xD7 140 \u2192 square 140 mm",420,140),Ne("dl","297 \xD7 210 \u2192 DL",297,210)],stocks:["silk-300","cotton-450","kraft-300"],finishes:["none","soft"]},{id:"invite-tri",cat:"invitations",name:"Tri-fold invitation",nl:"Uitnodiging wikkelvouw",fr:"Faire-part pli roul\xE9",use:"Folds into a slim DL card.",tpl:"rollFold",sizes:[Ne("dl","A4 \u2192 DL",297,210,{panels:[97,100,100]}),Ne("sq","420 \xD7 140 \u2192 square 140 mm",420,140,{panels:[136,142,142]})],stocks:["silk-250","silk-300","kraft-300"],finishes:["none","soft"]},{id:"invite-pocket",cat:"invitations",name:"Pocketfold invitation",nl:"Pocketfold uitnodiging",fr:"Faire-part pochette",use:"A little folder that holds the invitation suite.",tpl:"folder",sizes:[K("5x7","135 \xD7 185 mm",{w:135,h:185,pocket:70,slit:!1,insert:!0}),K("sq","150 \xD7 150 mm",{w:150,h:150,pocket:60,slit:!1,insert:!0})],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:["none","soft"]},{id:"belly-band",cat:"invitations",name:"Belly band",nl:"Bandrol",fr:"Bande de papier",use:"Paper band that holds the suite together.",tpl:"sleeve",sizes:[K("5x7","127 mm card, 40 mm band",{L:127,W:40,H:2.2,inner:178,t:.2,innerColor:"#f7f5ef"}),K("a6","A6 card, 35 mm band",{L:105,W:35,H:2.2,inner:148,t:.2,innerColor:"#f7f5ef"})],stocks:["offset-120","kraft-120","silk-170"],finishes:["none"]},{id:"rsvp-card",cat:"invitations",name:"RSVP & save the date",nl:"Antwoordkaart",fr:"Carte r\xE9ponse",use:"Small reply card, uncoated so it takes a pen.",tpl:"sheet",sizes:[pe("a7","A7 105 \xD7 74 mm",105,74),pe("a6","A6 148 \xD7 105 mm",148,105)],stocks:["offset-120","cotton-450","kraft-300"],finishes:["none"]},{id:"place-card",cat:"invitations",name:"Place card",nl:"Naamkaartje",fr:"Marque-place",use:"Small tent for the table.",tpl:"tentCard",sizes:[K("s","90 \xD7 50 mm",{w:90,h:100}),K("m","100 \xD7 60 mm",{w:100,h:120})],stocks:["cotton-450","silk-300","kraft-300"],finishes:["none"]},{id:"envelope-wallet",cat:"envelopes",name:"Wallet envelope",nl:"Envelop met lange klep",fr:"Enveloppe patte longue",use:"Flap on the long side, DL and C-series.",tpl:"envelope",sizes:[K("dl","DL 220 \xD7 110 mm",{w:220,h:110}),K("c6","C6 162 \xD7 114 mm",{w:162,h:114}),K("c5","C5 229 \xD7 162 mm",{w:229,h:162}),K("c65","C6/5 229 \xD7 114 mm",{w:229,h:114}),K("c7","C7 114 \xD7 81 mm",{w:114,h:81})],stocks:aa,finishes:["none"]},{id:"envelope-window",cat:"envelopes",name:"Window envelope",nl:"Vensterenvelop",fr:"Enveloppe \xE0 fen\xEAtre",use:"Address window on the left, as used in Belgium.",tpl:"envelope",sizes:[K("dl","DL, window 90 \xD7 45 mm",{w:220,h:110,window:{x:20,y:50,w:90,h:45}}),K("c5","C5, window 90 \xD7 45 mm",{w:229,h:162,window:{x:20,y:96,w:90,h:45}})],stocks:aa,finishes:["none"]},{id:"envelope-pocket",cat:"envelopes",name:"Pocket envelope",nl:"Akte-envelop",fr:"Pochette",use:"Opens on the short side, for flat documents.",tpl:"envelope",sizes:[K("c4","C4 229 \xD7 324 mm",{w:229,h:324,style:"pocket"}),K("c5","C5 162 \xD7 229 mm",{w:162,h:229,style:"pocket"}),K("b4","B4 250 \xD7 353 mm",{w:250,h:353,style:"pocket"})],stocks:aa,finishes:["none"]},{id:"envelope-square",cat:"envelopes",name:"Square envelope",nl:"Vierkante envelop",fr:"Enveloppe carr\xE9e",use:"For square invitations, check the postage.",tpl:"envelope",sizes:[K("140","140 \xD7 140 mm",{w:140,h:140}),K("155","155 \xD7 155 mm",{w:155,h:155}),K("170","170 \xD7 170 mm",{w:170,h:170})],stocks:aa,finishes:["none"]},{id:"envelope-pointed",cat:"envelopes",name:"Pointed flap envelope",nl:"Envelop met puntklep",fr:"Enveloppe patte pointue",use:"The classic diamond-cut invitation envelope.",tpl:"envelope",sizes:[K("c6","C6 162 \xD7 114 mm",{w:162,h:114,style:"pointed"}),K("c5","C5 229 \xD7 162 mm",{w:229,h:162,style:"pointed"}),K("sq","Square 170 \xD7 170 mm",{w:170,h:170,style:"pointed"})],stocks:aa,finishes:["none"]},{id:"envelope-gusset",cat:"envelopes",name:"Gusset envelope",nl:"Envelop met balgzijde",fr:"Pochette \xE0 soufflet",use:"Expands for catalogues and thick documents.",tpl:"gussetEnvelope",sizes:[K("c4","C4 229 \xD7 324 mm, 25 mm",{w:229,h:324,g:25}),K("b4","B4 250 \xD7 353 mm, 40 mm",{w:250,h:353,g:40})],stocks:["kraft-120","env-120"],finishes:["none"]},{id:"folder-one",cat:"folders",name:"Presentation folder",nl:"Presentatiemap",fr:"Chemise \xE0 rabat",use:"A4 folder with one pocket and card slits.",tpl:"folder",sizes:[K("a4","A4 220 \xD7 310 mm",{w:220,h:310,insert:!0}),K("a5","A5 155 \xD7 220 mm",{w:155,h:220,pocket:70,insert:!0})],stocks:["silk-300","silk-350","gc1-350","kraft-300"],finishes:$e},{id:"folder-two",cat:"folders",name:"Folder with two pockets",nl:"Map met twee flappen",fr:"Chemise \xE0 deux rabats",use:"Pockets left and right.",tpl:"folder",sizes:[K("a4","A4 220 \xD7 310 mm",{w:220,h:310,two:!0})],stocks:["silk-300","silk-350","gc1-350"],finishes:$e},{id:"folder-spine",cat:"folders",name:"Folder with spine",nl:"Map met rug",fr:"Chemise avec dos",use:"A scored spine for thicker document sets.",tpl:"folder",sizes:[K("s3","A4, spine 3 mm",{w:220,h:310,spine:3}),K("s5","A4, spine 5 mm",{w:220,h:310,spine:5}),K("s10","A4, spine 10 mm",{w:220,h:310,spine:10})],stocks:["silk-350","gc1-350","gc1-400"],finishes:$e},{id:"brochure-saddle",cat:"bound",name:"Stapled brochure",nl:"Geniete brochure",fr:"Brochure agraf\xE9e",use:"Saddle stitched, page count in fours.",tpl:"saddleBook",sizes:oa(["a6","a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210),pe("dl","DL 99 \xD7 210 mm",99,210)),pageOptions:[8,12,16,24,32,48],defPages:16,stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"brochure-perfect",cat:"bound",name:"Perfect bound book",nl:"Gelijmde brochure",fr:"Dos carr\xE9 coll\xE9",use:"Square glued spine for catalogues and magazines.",tpl:"perfectBook",sizes:oa(["a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210)),pageOptions:[40,64,96,128,200],defPages:96,stocks:["silk-250","silk-300"],finishes:["none","matte","gloss","soft"],def:"a5"},{id:"book-hardcover",cat:"bound",name:"Hardcover book",nl:"Hardcover boek",fr:"Livre reli\xE9",use:"Cover wrapped over rigid board.",tpl:"perfectBook",sizes:oa(["a5","a4"],{hard:!0}).concat(pe("sq","Square 210 \xD7 210 mm",210,210,{hard:!0})),pageOptions:[64,96,128,200,300],defPages:128,stocks:["silk-170","silk-250"],finishes:["matte","gloss","soft"],def:"a5"},{id:"notebook-wire",cat:"bound",name:"Wire-O notebook",nl:"Wire-O notitieboek",fr:"Carnet \xE0 spirale",use:"Opens flat, pages turn all the way round.",tpl:"wireBook",sizes:oa(["a6","a5","a4"]),pageOptions:[40,80,100],defPages:80,stocks:["silk-300","silk-350","kraft-300"],finishes:["none","matte"],def:"a5"},{id:"calendar-wall",cat:"stationery",name:"Wall calendar",nl:"Wandkalender",fr:"Calendrier mural",use:"Twelve months on a wire with a hanger.",tpl:"wireBook",sizes:[pe("a4","A4 landscape, opens to A3",297,210,{pages:26,edge:"top",wall:!0}),pe("a3","A3 landscape, opens to A2",420,297,{pages:26,edge:"top",wall:!0})],stocks:["silk-250","silk-170"],finishes:["none"]},{id:"calendar-desk",cat:"stationery",name:"Desk calendar",nl:"Bureaukalender",fr:"Calendrier de bureau",use:"Stands on a folded easel.",tpl:"deskCalendar",sizes:[K("l","210 \xD7 105 mm",{w:210,h:105}),K("s","148 \xD7 105 mm",{w:148,h:105})],stocks:["silk-350","silk-300"],finishes:["none"]},{id:"calendar-poster",cat:"stationery",name:"Poster calendar",nl:"Jaarkalender",fr:"Calendrier poster",use:"One year on one sheet.",tpl:"poster",sizes:[K("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Calendar"}),K("a3","A3 297 \xD7 420 mm",{w:297,h:420,name:"Calendar"})],stocks:["poster-135","silk-170"],finishes:["none"]},{id:"notepad",cat:"stationery",name:"Notepad",nl:"Notitieblok",fr:"Bloc-notes",use:"Glued at the top on a chipboard back.",tpl:"notepad",sizes:[pe("a4","A4, 50 sheets",210,297),pe("a5","A5, 50 sheets",148,210),pe("a6","A6, 50 sheets",105,148),pe("a7","A7, 50 sheets",74,105)],stocks:["offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"memo-block",cat:"stationery",name:"Memo block",nl:"Memoblok",fr:"Bloc cube",use:"A tall stack of 500 sheets, printed on the sides too.",tpl:"notepad",sizes:[pe("90","90 \xD7 90 mm, 500 sheets",90,90,{sheets:500,t:.09})],stocks:["offset-90"],finishes:["none"]},{id:"box-straight",cat:"boxes",name:"Straight tuck box",nl:"Vouwdoos, tuck aan \xE9\xE9n zijde",fr:"\xC9tui \xE0 rabats droits",use:"Both tucks open to the same side.",tpl:"tuckBox",sizes:[K("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130}),K("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180}),K("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150}),K("tea","110 \xD7 70 \xD7 70 mm",{L:110,W:70,H:70})],stocks:fn,finishes:$e},{id:"box-reverse",cat:"boxes",name:"Reverse tuck box",nl:"Vouwdoos, omgekeerde tuck",fr:"\xC9tui \xE0 rabats invers\xE9s",use:"Tucks on opposite sides, cheaper to cut.",tpl:"tuckBox",sizes:[K("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130,reverse:!0}),K("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180,reverse:!0}),K("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150,reverse:!0})],stocks:fn,finishes:$e},{id:"box-autolock",cat:"boxes",name:"Auto-lock bottom box",nl:"Vouwdoos met autolockbodem",fr:"\xC9tui \xE0 fond automatique",use:"Bottom snaps into place when the box opens.",tpl:"autoLockBox",sizes:[K("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),K("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:fn,finishes:$e},{id:"box-snap",cat:"boxes",name:"Snap-lock bottom box",nl:"Vouwdoos met snapbodem",fr:"\xC9tui \xE0 fond 1-2-3",use:"Four flaps folded in order, the 1-2-3 bottom.",tpl:"snapBox",sizes:[K("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),K("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:fn,finishes:$e},{id:"box-hang",cat:"boxes",name:"Hang tab box",nl:"Doos met ophangoog",fr:"\xC9tui avec eurotrou",use:"Retail box with a euro slot.",tpl:"tuckBox",sizes:[K("s","80 \xD7 30 \xD7 120 mm",{L:80,W:30,H:120,hang:!0}),K("m","110 \xD7 40 \xD7 150 mm",{L:110,W:40,H:150,hang:!0})],stocks:fn,finishes:$e},{id:"box-wine",cat:"boxes",name:"Wine box",nl:"Wijndoos",fr:"Bo\xEEte \xE0 vin",use:"Tall carton for one bottle.",tpl:"autoLockBox",sizes:[K("b1","1 bottle, 90 \xD7 90 \xD7 340 mm",{L:90,W:90,H:340})],stocks:fn,finishes:$e},{id:"box-mailer",cat:"boxes",name:"Mailer box",nl:"Verzenddoos",fr:"Bo\xEEte postale",use:"FEFCO 0427 family, double walls, no tape.",tpl:"mailerBox",sizes:[K("s","200 \xD7 140 \xD7 50 mm",{L:200,W:140,H:50}),K("m","300 \xD7 220 \xD7 80 mm",{L:300,W:220,H:80}),K("a4","A4 305 \xD7 215 \xD7 40 mm",{L:305,W:215,H:40}),K("xs","160 \xD7 120 \xD7 40 mm",{L:160,W:120,H:40})],stocks:wl,finishes:["none"]},{id:"box-shipping",cat:"boxes",name:"Shipping carton",nl:"Amerikaanse vouwdoos",fr:"Caisse am\xE9ricaine",use:"FEFCO 0201, the standard slotted carton.",tpl:"shippingBox",sizes:[K("s","200 \xD7 200 \xD7 110 mm",{L:200,W:200,H:110,t:3}),K("m","305 \xD7 220 \xD7 250 mm",{L:305,W:220,H:250,t:3}),K("l","430 \xD7 305 \xD7 250 mm",{L:430,W:305,H:250,t:3})],stocks:["bflute-kraft","eflute-kraft"],finishes:["none"]},{id:"box-lid",cat:"boxes",name:"Lid and base box",nl:"Dekseldoos",fr:"Bo\xEEte \xE0 couvercle",use:"Two trays, FEFCO 03xx family, gift packaging.",tpl:"lidBox",sizes:[K("m","160 \xD7 120 \xD7 60 mm",{L:160,W:120,H:60}),K("sq","150 \xD7 150 \xD7 80 mm",{L:150,W:150,H:80}),K("l","240 \xD7 180 \xD7 80 mm",{L:240,W:180,H:80})],stocks:fn,finishes:$e},{id:"box-drawer",cat:"boxes",name:"Drawer box",nl:"Schuifdoos",fr:"Bo\xEEte tiroir",use:"A tray that slides out of a sleeve.",tpl:"drawerBox",sizes:[K("m","120 \xD7 80 \xD7 30 mm",{L:120,W:80,H:30}),K("l","180 \xD7 120 \xD7 50 mm",{L:180,W:120,H:50})],stocks:fn,finishes:$e},{id:"box-sleeve",cat:"boxes",name:"Packaging sleeve",nl:"Sleeve",fr:"Fourreau",use:"Printed band around a plain box.",tpl:"sleeve",sizes:[K("m","120 \xD7 70 \xD7 30 mm",{L:120,W:70,H:30,inner:160,innerColor:"#c9b08a"}),K("l","200 \xD7 90 \xD7 50 mm",{L:200,W:90,H:50,inner:220,innerColor:"#c9b08a"})],stocks:fn,finishes:$e},{id:"box-gable",cat:"boxes",name:"Gable box",nl:"Gable box",fr:"Bo\xEEte \xE0 anse",use:"Built-in carry handle.",tpl:"gableBox",sizes:[K("m","140 \xD7 70 \xD7 120 mm",{L:140,W:70,H:120}),K("s","100 \xD7 60 \xD7 90 mm",{L:100,W:60,H:90})],stocks:fn,finishes:$e},{id:"box-pillow",cat:"boxes",name:"Pillow box",nl:"Pillow box",fr:"Bo\xEEte berlingot",use:"Curved scores close the two ends.",tpl:"pillowBox",sizes:[K("m","120 \xD7 80 \xD7 34 mm",{L:120,W:80,H:34}),K("s","90 \xD7 60 \xD7 26 mm",{L:90,W:60,H:26})],stocks:fn,finishes:$e},{id:"box-tray",cat:"boxes",name:"Open tray",nl:"Tray",fr:"Barquette",use:"Lidless tray, also for shelf-ready packs.",tpl:"trayBox",sizes:[K("m","200 \xD7 140 \xD7 40 mm",{L:200,W:140,H:40}),K("s","120 \xD7 90 \xD7 30 mm",{L:120,W:90,H:30})],stocks:[...fn,...wl],finishes:["none","matte"]},{id:"box-cake",cat:"boxes",name:"Cake box",nl:"Taartdoos",fr:"Bo\xEEte \xE0 p\xE2tisserie",use:"One piece with a hinged lid.",tpl:"cakeBox",sizes:[K("m","200 \xD7 200 \xD7 90 mm",{L:200,W:200,H:90}),K("l","260 \xD7 260 \xD7 100 mm",{L:260,W:260,H:100}),K("b","Pralines 150 \xD7 100 \xD7 40 mm",{L:150,W:100,H:40})],stocks:fn,finishes:["none","matte"]},{id:"box-pizza",cat:"boxes",name:"Pizza box",nl:"Pizzadoos",fr:"Bo\xEEte \xE0 pizza",use:"Flat hinged box in corrugated board.",tpl:"cakeBox",sizes:[K("33","330 \xD7 330 \xD7 40 mm",{L:330,W:330,H:40,t:1.5})],stocks:wl,finishes:["none"]},{id:"counter-display",cat:"boxes",name:"Counter display",nl:"Toonbankdisplay",fr:"Pr\xE9sentoir de comptoir",use:"Tray with a printed header card.",tpl:"counterDisplay",sizes:[K("m","220 \xD7 160 mm, header 120 mm",{L:220,W:160,H:70,header:120})],stocks:wl,finishes:["none"]},{id:"bag-carrier",cat:"bags",name:"Carrier bag",nl:"Papieren draagtas",fr:"Sac papier",use:"Rope handles, reinforced top hem.",tpl:"paperBag",sizes:[K("m","240 \xD7 100 \xD7 320 mm",{w:240,h:320,g:100}),K("s","180 \xD7 80 \xD7 240 mm",{w:180,h:240,g:80}),K("l","320 \xD7 120 \xD7 420 mm",{w:320,h:420,g:120})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"bag-bakery",cat:"bags",name:"Flat-bottom paper bag",nl:"Bakkerszak",fr:"Sac boulanger",use:"Square bottom, no handles.",tpl:"paperBag",sizes:[K("m","180 \xD7 80 \xD7 260 mm",{w:180,h:260,g:80,hem:0,handles:!1}),K("s","140 \xD7 60 \xD7 200 mm",{w:140,h:200,g:60,hem:0,handles:!1})],stocks:["kraftbag-120","bag-170"],finishes:["none"]},{id:"bag-wine",cat:"bags",name:"Wine bag",nl:"Wijntas",fr:"Sac \xE0 bouteille",use:"Narrow bag for one bottle.",tpl:"paperBag",sizes:[K("b1","100 \xD7 90 \xD7 360 mm",{w:100,h:360,g:90})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"fries-cone",cat:"bags",name:"Fries cone",nl:"Frietzak",fr:"Cornet de frites",use:"Rolled cone in its wire holder.",tpl:"friesCone",sizes:[K("m","Height 210 mm, \xD8 110 mm",{h:210,topD:110}),K("s","Height 170 mm, \xD8 90 mm",{h:170,topD:90})],stocks:["silk-250","kraft-300"],finishes:["none"]},{id:"paper-cup",cat:"bags",name:"Paper cup",nl:"Koffiebeker",fr:"Gobelet carton",use:"Printed wrap of a takeaway cup.",tpl:"coneWrap",sizes:[K("m","8 oz, \xD8 80 mm",{topD:80,bottomD:56,height:92}),K("l","12 oz, \xD8 90 mm",{topD:90,bottomD:60,height:110})],stocks:["silk-300","kraft-300"],finishes:["none"]},{id:"cup-sleeve",cat:"bags",name:"Cup sleeve",nl:"Bekerhuls",fr:"Manchon de gobelet",use:"Heat-protecting band around a plain cup.",tpl:"coneWrap",sizes:[K("l","For 12 oz cups",{topD:88,bottomD:72,height:55,kind:"sleeve"})],stocks:["kraft-300","silk-300"],finishes:["none"]},{id:"sticker-round",cat:"labels",name:"Round sticker",nl:"Ronde sticker",fr:"Autocollant rond",use:"Single die-cut stickers.",tpl:"sheet",sizes:[pe("d50","\xD8 50 mm",50,50,{shape:"circle",bleed:2}),pe("d80","\xD8 80 mm",80,80,{shape:"circle",bleed:2}),pe("d30","\xD8 30 mm",30,30,{shape:"circle",bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-rect",cat:"labels",name:"Rectangular sticker",nl:"Rechthoekige sticker",fr:"Autocollant rectangulaire",use:"Rounded corners, for packaging and seals.",tpl:"sheet",sizes:[pe("m","100 \xD7 50 mm",100,50,{r:3,bleed:2}),pe("s","60 \xD7 40 mm",60,40,{r:2,bleed:2}),pe("a6","A6 148 \xD7 105 mm",148,105,{r:3,bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-sheet",cat:"labels",name:"Sticker sheet",nl:"Stickervel",fr:"Planche de stickers",use:"Kiss cut on one backing sheet.",tpl:"stickerSheet",sizes:[K("a4","A4, 12 \xD7 \xD8 60 mm",{w:210,h:297,cols:3,rows:4,d:60}),K("a5","A5, 6 \xD7 \xD8 40 mm",{w:148,h:210,cols:2,rows:3,d:54})],stocks:["label-90","vinyl-100"],finishes:["none","gloss"]},{id:"label-wine",cat:"labels",name:"Wine label",nl:"Wijnetiket",fr:"\xC9tiquette de vin",use:"Front label on a Bordeaux bottle.",tpl:"wrapLabel",sizes:[K("m","100 \xD7 120 mm",{w:100,h:120,container:"wine",y:40}),K("s","90 \xD7 100 mm",{w:90,h:100,container:"wine",y:50})],stocks:["label-90","offset-90"],finishes:["none"]},{id:"label-beer",cat:"labels",name:"Beer label",nl:"Bieretiket",fr:"\xC9tiquette de bi\xE8re",use:"33 cl bottle, a Belgian must-have.",tpl:"wrapLabel",sizes:[K("m","100 \xD7 90 mm",{w:100,h:90,container:"beer",y:18}),K("w","Wrap 188 \xD7 60 mm",{w:188,h:60,container:"beer",y:30})],stocks:["label-90"],finishes:["none","gloss"]},{id:"label-jar",cat:"labels",name:"Jar label",nl:"Potetiket",fr:"\xC9tiquette de bocal",use:"For food jars, jam, honey, sauces.",tpl:"wrapLabel",sizes:[K("m","120 \xD7 70 mm",{w:120,h:70,container:"jar",y:22}),K("o","Oval 90 \xD7 70 mm",{w:90,h:70,container:"jar",y:22,shape:"oval"})],stocks:["label-90","kraft-120"],finishes:["none"]},{id:"label-can",cat:"labels",name:"Can wrap",nl:"Blikwikkel",fr:"\xC9tiquette de canette",use:"Full wrap around a 33 cl can.",tpl:"wrapLabel",sizes:[K("33","33 cl, 206 \xD7 96 mm",{w:206,h:96,container:"can",y:10})],stocks:["label-90","vinyl-100"],finishes:["gloss","matte"]},{id:"mug-wrap",cat:"labels",name:"Mug print",nl:"Mok bedrukken",fr:"Mug personnalis\xE9",use:"All-round print on a ceramic mug.",tpl:"wrapLabel",sizes:[K("m","200 \xD7 90 mm",{w:200,h:90,container:"mug",y:3})],stocks:["vinyl-100"],finishes:["gloss"]},{id:"poster",cat:"display",name:"Poster",nl:"Affiche",fr:"Affiche",use:"A and B series, indoor paper.",tpl:"poster",sizes:[K("a3","A3 297 \xD7 420 mm",{w:297,h:420}),K("a2","A2 420 \xD7 594 mm",{w:420,h:594}),K("a1","A1 594 \xD7 841 mm",{w:594,h:841}),K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),K("b2","B2 500 \xD7 700 mm",{w:500,h:700}),K("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3})],stocks:["poster-135","silk-170","silk-250"],finishes:["none","matte"],def:"a2"},{id:"poster-blueback",cat:"display",name:"Blueback poster",nl:"Blueback affiche",fr:"Affiche dos bleu",use:"Opaque back for street and billboard pasting.",tpl:"poster",sizes:[K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),K("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3}),K("abri","Abribus 1185 \xD7 1750 mm",{w:1185,h:1750})],stocks:["blueback-115"],finishes:["none"]},{id:"rollup",cat:"display",name:"Roll-up banner",nl:"Roll-up banner",fr:"Roll-up",use:"Graphic pulls out of an aluminium cassette.",tpl:"rollup",sizes:[K("85","850 \xD7 2000 mm",{w:850,h:2e3}),K("100","1000 \xD7 2000 mm",{w:1e3,h:2e3}),K("120","1200 \xD7 2000 mm",{w:1200,h:2e3})],stocks:["pet-510"],finishes:["none"]},{id:"a-board",cat:"display",name:"A-board",nl:"Stoepbord",fr:"Stop-trottoir",use:"Two-sided pavement sign with a clip frame.",tpl:"aBoard",sizes:[K("a1","A1 594 \xD7 841 mm",{w:594,h:841}),K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189})],stocks:["poster-135"],finishes:["none"]},{id:"sign-rigid",cat:"display",name:"Rigid sign",nl:"Forex bord",fr:"Panneau PVC",use:"Direct print on 5 mm foam PVC.",tpl:"poster",sizes:[K("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Sign"}),K("a1","A1 594 \xD7 841 mm",{w:594,h:841,name:"Sign"}),K("m","1000 \xD7 700 mm",{w:1e3,h:700,name:"Sign"})],stocks:["pvc-5","corplast-3"],finishes:["none"]},{id:"banner-pvc",cat:"display",name:"PVC banner",nl:"Spandoek",fr:"B\xE2che",use:"Outdoor banner with eyelets every 50 cm.",tpl:"poster",sizes:[K("2x1","2000 \xD7 1000 mm",{w:2e3,h:1e3,eyelets:500,name:"Banner"}),K("3x1","3000 \xD7 1000 mm",{w:3e3,h:1e3,eyelets:500,name:"Banner"})],stocks:["pvc-banner"],finishes:["none"]},{id:"wobbler",cat:"display",name:"Shelf wobbler",nl:"Wobbler",fr:"Stop-rayon",use:"Small round card on a flexible strip.",tpl:"sheet",sizes:[pe("d90","\xD8 90 mm",90,90,{shape:"circle"})],stocks:["silk-300","silk-350"],finishes:$e}],El=Object.fromEntries(Ws.map(i=>[i.id,i])),df=()=>({formats:Ws.length,sizes:Ws.reduce((i,e)=>i+e.sizes.length,0)});var is={"offset-90":{name:"Uncoated 90 g",gsm:90,mm:.11,color:"#f7f6f1",rough:.92,kind:"paper"},"offset-120":{name:"Uncoated 120 g",gsm:120,mm:.15,color:"#f7f6f1",rough:.92,kind:"paper"},"silk-135":{name:"Silk 135 g",gsm:135,mm:.11,color:"#f9f8f4",rough:.55,kind:"paper"},"silk-170":{name:"Silk 170 g",gsm:170,mm:.14,color:"#f9f8f4",rough:.55,kind:"paper"},"gloss-170":{name:"Gloss 170 g",gsm:170,mm:.13,color:"#fbfaf7",rough:.3,kind:"paper"},"silk-250":{name:"Silk 250 g",gsm:250,mm:.22,color:"#f9f8f4",rough:.55,kind:"card"},"silk-300":{name:"Silk 300 g",gsm:300,mm:.27,color:"#f9f8f4",rough:.55,kind:"card"},"silk-350":{name:"Silk 350 g",gsm:350,mm:.33,color:"#f9f8f4",rough:.55,kind:"card"},"gloss-300":{name:"Gloss 300 g",gsm:300,mm:.26,color:"#fbfaf7",rough:.3,kind:"card"},"cotton-450":{name:"Cotton 450 g",gsm:450,mm:.6,color:"#f6f2e9",rough:.96,kind:"card"},"kraft-300":{name:"Kraft 300 g",gsm:300,mm:.36,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"black-300":{name:"Black card 300 g",gsm:300,mm:.34,color:"#17171a",rough:.72,kind:"card",dark:!0},"env-90":{name:"Envelope 90 g",gsm:90,mm:.12,color:"#f6f5f0",rough:.9,kind:"paper"},"env-120":{name:"Envelope 120 g",gsm:120,mm:.16,color:"#f4f2ea",rough:.9,kind:"paper"},"kraft-120":{name:"Kraft 120 g",gsm:120,mm:.17,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"gc1-350":{name:"GC1 carton 350 g",gsm:350,mm:.45,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"gc1-400":{name:"GC1 carton 400 g",gsm:400,mm:.52,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"kraftboard-400":{name:"Kraft carton 400 g",gsm:400,mm:.55,color:"#b08a60",rough:.88,kind:"kraft",multiply:!0},"eflute-white":{name:"E-flute white",gsm:0,mm:1.5,color:"#f2f0ea",rough:.78,kind:"corrugated",inside:"#efe7d6",flute:3.2,core:"#d9c6a4"},"eflute-kraft":{name:"E-flute kraft",gsm:0,mm:1.5,color:"#b58f63",rough:.86,kind:"corrugated",multiply:!0,flute:3.2,core:"#c9a97c"},"bflute-kraft":{name:"B-flute kraft",gsm:0,mm:3,color:"#b58f63",rough:.88,kind:"corrugated",multiply:!0,flute:6.5,core:"#c9a97c"},"bag-170":{name:"Bag paper 170 g",gsm:170,mm:.2,color:"#f6f5f0",rough:.7,kind:"paper"},"kraftbag-120":{name:"Kraft bag 120 g",gsm:120,mm:.18,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"label-90":{name:"Label paper",gsm:90,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"vinyl-100":{name:"White vinyl",gsm:0,mm:.1,color:"#fbfbfb",rough:.34,kind:"paper"},"beermat-1000":{name:"Beer mat board",gsm:1e3,mm:1.5,color:"#f5f2e8",rough:.9,kind:"board"},"poster-135":{name:"Poster 135 g",gsm:135,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"blueback-115":{name:"Blueback 115 g",gsm:115,mm:.13,color:"#f6f6f2",rough:.72,kind:"paper",inside:"#5c7fa8"},"pet-510":{name:"Roll-up film 510 \xB5m",gsm:0,mm:.51,color:"#f4f4f2",rough:.45,kind:"board"},"pvc-5":{name:"Forex 5 mm",gsm:0,mm:5,color:"#f8f8f6",rough:.45,kind:"board"},"pvc-banner":{name:"PVC banner 510 g",gsm:510,mm:.5,color:"#f5f5f3",rough:.55,kind:"board"},"corplast-3":{name:"Corrugated plastic 3 mm",gsm:0,mm:3,color:"#f2f2ef",rough:.5,kind:"board"}},Xs={none:{name:"No lamination",rough:null,clearcoat:0},matte:{name:"Matte lamination",rough:.62,clearcoat:0},gloss:{name:"Gloss lamination",rough:.22,clearcoat:.6},soft:{name:"Soft-touch",rough:.78,clearcoat:0,sheen:.5}};var li=(i,e)=>[i[0]-e[0],i[1]-e[1]],ss=(i,e)=>[i[0]+e[0],i[1]+e[1]],$s=(i,e)=>[i[0]*e,i[1]*e],Tl=(i,e)=>i[0]*e[0]+i[1]*e[1];var wh=i=>Math.hypot(i[0],i[1]),la=i=>{let e=wh(i)||1;return[i[0]/e,i[1]/e]};function ff(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2}function pf(i){let e=0,t=0,n=0;for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],o=r[0]*a[1]-a[0]*r[1];n+=o,e+=(r[0]+a[0])*o,t+=(r[1]+a[1])*o}return Math.abs(n)<1e-6?[i[0][0],i[0][1]]:[e/(3*n),t/(3*n)]}function Eh(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i)for(let a of r)a[0]<e&&(e=a[0]),a[1]<t&&(t=a[1]),a[0]>n&&(n=a[0]),a[1]>s&&(s=a[1]);return{x0:e,y0:t,x1:n,y1:s,w:n-e,h:s-t}}var ci=(i,e,t,n)=>[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];function Vn(i,e,t,n=64){let s=[];for(let r=0;r<n;r++){let a=r/n*Math.PI*2;s.push([i+Math.cos(a)*t,e+Math.sin(a)*t])}return s}function Al(i,e,t,n,s=72){let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2;r.push([i+Math.cos(o)*t,e+Math.sin(o)*n])}return r}function Ni(i,e,t=7){let n=i.length,s=[];for(let r=0;r<n;r++){let a=i[r],o=Array.isArray(e)?e[r]||0:e;if(!o){s.push(a);continue}let l=i[(r-1+n)%n],c=i[(r+1)%n],h=la(li(l,a)),u=la(li(c,a)),d=Math.max(-1,Math.min(1,Tl(h,u))),f=Math.acos(d);if(f<.02||f>Math.PI-.02){s.push(a);continue}let m=Math.min(wh(li(l,a)),wh(li(c,a)))*.499,x=o/Math.tan(f/2),p=o;x>m&&(x=m,p=x*Math.tan(f/2));let g=ss(a,$s(h,x)),v=ss(a,$s(u,x)),M=la(ss(h,u)),y=ss(a,$s(M,p/Math.sin(f/2))),T=Math.atan2(g[1]-y[1],g[0]-y[0]),b=Math.atan2(v[1]-y[1],v[0]-y[0]),_=b-T;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;b=T+_;for(let w=0;w<=t;w++){let I=w/t,R=T+(b-T)*I;s.push([y[0]+Math.cos(R)*p,y[1]+Math.sin(R)*p])}}return s}function mf(i,e=1e-4){let t=[];for(let n of i){let s=t[t.length-1];(!s||Math.hypot(n[0]-s[0],n[1]-s[1])>e)&&t.push(n)}for(;t.length>2&&Math.hypot(t[0][0]-t[t.length-1][0],t[0][1]-t[t.length-1][1])<=e;)t.pop();return t}var vt=i=>{let e=Math.round(i*10)/10;return Number.isInteger(e)?String(e):e.toFixed(1)},Ys=(i,e)=>`${vt(i)} \xD7 ${vt(e)}`;var gf={type:"change"},Ah={type:"start"},xf={type:"end"},Rl=new bi,_f=new on,fv=Math.cos(70*ts.DEG2RAD),Lt=new C,sn=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Th=1e-6,Cl=class extends Wr{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ut,this._lastTargetPosition=new C,this._quat=new ut().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ci,this._sphericalDelta=new Ci,this._scale=1,this._panOffset=new C,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new C,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mv.bind(this),this._onPointerDown=pv.bind(this),this._onPointerUp=gv.bind(this),this._onContextMenu=Sv.bind(this),this._onMouseWheel=vv.bind(this),this._onKeyDown=yv.bind(this),this._onTouchStart=bv.bind(this),this._onTouchMove=Mv.bind(this),this._onMouseDown=_v.bind(this),this._onMouseMove=xv.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Ev.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=nt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<fv?this.object.lookAt(this.target):(_f.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(_f,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Th||this._lastTargetPosition.distanceToSquared(this.target)>Th?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function pv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xf),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _v(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ah)}function xv(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vv(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xf))}function yv(i){this.enabled!==!1&&this._handleKeyDown(i)}function bv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1){this.state=nt.NONE;break}this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1){this.state=nt.NONE;break}this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ah)}function Mv(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function Sv(i){this.enabled!==!1&&i.preventDefault()}function wv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ev(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Il=class extends qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new en;e.deleteAttribute("uv");let t=new et({side:Ct}),n=new et,s=new Hr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xi(e,n,6),o=new Et;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Re(e,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(e,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Re(e,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Re(e,Zs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Re(e,Zs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Re(e,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zs(i){return new Ur({color:0,emissive:16777215,emissiveIntensity:i})}var kt=Math.PI/180,vf=22,Tv=5,Fi=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,rs=i=>Math.min(1,Math.max(0,i)),ca=new ut().setFromAxisAngle(new C(1,0,0),-90*kt),Rh=new ut().setFromAxisAngle(new C(0,1,0),180*kt);function yf(i,e=0){let t=new ut;if(i&&i.up){let n=new C(...i.up).normalize(),s=new C(...i.face);s.addScaledVector(n,-s.dot(n)).normalize();let r=new C().crossVectors(n,s).normalize(),a=new ke().makeBasis(r,n,s);t.setFromRotationMatrix(a).invert()}else if(Array.isArray(i))t.setFromEuler(new Qt(i[0]*kt,i[1]*kt,i[2]*kt,"YXZ"));else switch(i){case"keep":t.copy(ca);break;case"flip":t.copy(ca).multiply(Rh);break;case"stand":case"stand-outside":t.identity();break;case"stand-inside":t.copy(Rh);break;default:t.copy(ca)}return e&&t.premultiply(new ut().setFromAxisAngle(new C(0,1,0),e*kt)),t}var Pl=class{constructor(e,t={}){this.host=e,this.opts=t;let n=new vl({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!t.capture});this.renderer=n,n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxDpr||2)),n.outputColorSpace=bt,n.toneMapping=Xr,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Co,e.appendChild(n.domElement),n.domElement.style.display="block",n.domElement.style.touchAction="none";let s=new qi;this.scene=s,this.bg=new Be(t.background??"#060606"),s.background=this.bg;let r=new Gs(n);this.envRT=r.fromScene(new Il,.04),s.environment=this.envRT.texture,s.environmentIntensity=.42,r.dispose();let a=new Ns("#ffffff",2.1);a.position.set(-3.4,8.5,4.6),a.castShadow=!0,a.shadow.mapSize.set(t.shadowSize||2048,t.shadowSize||2048);let o=a.shadow.camera;o.left=-6,o.right=6,o.top=6,o.bottom=-6,o.near=.5,o.far=30,a.shadow.bias=-12e-5,a.shadow.normalBias=.012,a.shadow.radius=7,s.add(a),this.key=a;let l=new Ns("#9db8ff",.5);l.position.set(5,3.5,-5),s.add(l);let c=document.createElement("canvas");c.width=c.height=512;let h=c.getContext("2d"),u=h.createRadialGradient(256,256,8,256,256,256);u.addColorStop(0,"rgba(36,37,42,1)"),u.addColorStop(.5,"rgba(20,21,24,0.85)"),u.addColorStop(1,"rgba(6,6,6,0)"),h.fillStyle=u,h.fillRect(0,0,512,512);let d=new cn(c);d.colorSpace=bt,this.pool=new Re(new ii(11,64),new Mi({map:d,transparent:!0,depthWrite:!1,toneMapped:!1})),this.pool.rotation.x=-Math.PI/2,this.pool.position.y=-.012,this.pool.renderOrder=-2,s.add(this.pool),this.shadowCatcher=new Re(new ii(16,48),new Fr({opacity:.62})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.position.y=-.008,this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.renderOrder=-1,s.add(this.shadowCatcher),this.camera=new $t(vf,1,.1,400),this.controls=new Cl(this.camera,n.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,screenSpacePanning:!0,zoomToCursor:!0,rotateSpeed:.8,maxPolarAngle:.57*Math.PI}),this.controls.addEventListener("change",()=>this.invalidate()),this.controls.addEventListener("start",()=>{this.userMoved=!0,this.stopSpin()}),this.rig=new at,this.rig.matrixAutoUpdate=!1,s.add(this.rig),this.state="flat",this.needs=!0,this.ray=new Vr,this._raf=0,this._tick=this._tick.bind(this),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),this._tick()}invalidate(){this.needs=!0}resize(){let e=this.host.clientWidth||800,t=this.host.clientHeight||600;e===this.w&&t===this.h||(this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width=`${e}px`,this.renderer.domElement.style.height=`${t}px`,this.camera.aspect=e/t,this._viewOffset(),this.camera.updateProjectionMatrix(),this.model&&!this.tween&&!this.userMoved&&this.state!=="custom"&&this._frame(this.state),this.invalidate())}setSafe(e,t){this.safe={top:e,bottom:t},this._viewOffset(),this.camera.updateProjectionMatrix(),this.cache={}}_viewOffset(){let e=this.safe;!e||!this.w||this.camera.setViewOffset(this.w,this.h,0,(e.bottom-e.top)/2,this.w,this.h)}setModel(e,{die:t,state:n="closed",instant:s=!0}={}){this.model&&(this.rig.remove(this.model.object),this.model.dispose?.()),this.tween=null,this.scrubWin=null,this.model=e,this.die=t,this.rig.add(e.object),this.scaleK=Tv/Math.max(t.w,t.h,1),t.meta.unitBoost&&(this.scaleK*=t.meta.unitBoost),this.userMoved=!1,this.cache={},this.go(n,{instant:s})}_info(e){if(this.cache[e])return this.cache[e];let{die:t,model:n}=this,s=n.vector(e),r;e==="flat"?r=ca.clone():e==="inside"?r=ca.clone().multiply(Rh):e==="open"?r=yf(t.pose.open,t.pose.openYaw||0):r=yf(t.pose.fold,t.pose.closedYaw||0),e==="closed"&&t.pose.tilt&&r.premultiply(new ut().setFromAxisAngle(new C(1,0,0),t.pose.tilt*kt));let a=n.bounds(s),o=a.getCenter(new C),l=this.scaleK,c=[];for(let m of[a.min.x,a.max.x])for(let x of[a.min.y,a.max.y])for(let p of[a.min.z,a.max.z])c.push(new C(m,x,p).sub(o).multiplyScalar(l).applyQuaternion(r));let h=1/0;for(let m of c)h=Math.min(h,m.y);let u=-h,d=t.view&&t.view[e]||(e==="flat"||e==="inside"?{az:0,el:89.9}:{az:-32,el:30}),f={vec:s,q:r,c:o,lift:u,corners:c,view:{...d},s:l};return f.cam=this._fit(f),this.cache[e]=f,f}_fit(e){let t=e.view.az*kt,n=e.view.el*kt,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)).normalize(),r=new C(0,e.lift,0),a=Math.abs(s.y)>.999?new C(0,0,-1):new C(0,1,0),o=new C().crossVectors(a,s).normalize(),l=new C().crossVectors(s,o).normalize(),c=1/0,h=-1/0,u=1/0,d=-1/0;for(let y of e.corners){let T=y.dot(l),b=y.dot(o);c=Math.min(c,T),h=Math.max(h,T),u=Math.min(u,b),d=Math.max(d,b)}r.add(l.clone().multiplyScalar((c+h)/2)).add(o.clone().multiplyScalar((u+d)/2));let f=this.camera.aspect||1.4,m=vf*kt/2,x=Math.atan(Math.tan(m)*f),p=this.safe||{top:0,bottom:0},g=Math.max(.3,1-(p.top+p.bottom)/(this.h||600)),v=e.view.pad||(this.opts.pad??1.16),M=0;for(let y of e.corners){let T=y.clone().sub(r.clone().setY(r.y-e.lift)),b=T.dot(s);M=Math.max(M,Math.abs(T.dot(o))*v/Math.tan(x)+b),M=Math.max(M,Math.abs(T.dot(l))*v/g/Math.tan(m)+b)}return M*=e.view.zoom||1,{az:e.view.az,el:e.view.el,d:M,target:r}}_placeCam(e){let t=e.az*kt,n=e.el*kt,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));this.camera.position.copy(e.target).addScaledVector(s,e.d),this.camera.near=Math.max(.02,e.d/60),this.camera.far=e.d*8+40,this.camera.updateProjectionMatrix(),this.controls.target.copy(e.target),this.camera.lookAt(e.target)}_setRig(e,t,n){let s=this.scaleK,r=new ke;r.compose(new C(0,n,0),e,new C(s,s,s)),r.multiply(new ke().makeTranslation(-t.x,-t.y,-t.z)),this.rig.matrix.copy(r),this.rig.matrixWorldNeedsUpdate=!0}_frame(e){this.cache={};let t=this._info(e);this._placeCam(t.cam),this.invalidate()}_currentCam(){let e=new Ci().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{az:(e.theta/kt+360)%360>180?(e.theta/kt+360)%360-360:(e.theta/kt+360)%360,el:90-e.phi/kt,d:e.radius,target:this.controls.target.clone()}}go(e,{instant:t=!1,duration:n}={}){let s=this._info(e);if(t||!this.current){this.tween=null,this.state=e,this.model.apply(s.vec),this.current={vec:s.vec,q:s.q.clone(),c:s.c.clone(),lift:s.lift},this._setRig(s.q,s.c,s.lift),this._placeCam(s.cam),this.userMoved=!1,this.invalidate(),this.onState?.(e);return}let r=this.current,a={flat:0,inside:0,closed:2,open:1},o=v=>v==="closed"?2:v==="open"?1:0,l=o(e)>=o(this.state)?1:-1;a[e]===void 0&&(l=1);let c=this.model.windows(r.vec,s.vec,l),u=r.q.angleTo(s.q)>60*kt,d=c.steps>0&&r.vec.some((v,M)=>Math.abs(v-s.vec[M])>.01),f=d?Math.min(4.2,.95+c.steps*.5):1.1,m=n??f+(u&&d?.45:0),x=[0,1],p=[0,1];u&&d&&(l>0?(x=[0,.26],p=[.2,1]):(x=[.74,1],p=[0,.8])),this.tween={t0:performance.now(),dur:m*1e3,from:r,to:s,win:c,poseWin:x,foldWin:p,cam0:this._currentCam(),cam1:s.cam,state:e,flip:u};let g=this.tween.cam1.az-this.tween.cam0.az;for(;g>180;)g-=360;for(;g<-180;)g+=360;this.tween.azDelta=g,this.state=e,this.userMoved=!1,this.controls.enabled=!1,this.onStart?.(e),this.invalidate()}scrub(e){if(!this.model)return;let t=this._info("flat"),n=this._info("closed");this.scrubWin||(this.scrubWin=this.model.windows(t.vec,n.vec,1)),this.tween=null,this.controls.enabled=!0;let s=t.q.angleTo(n.q)>60*kt,r=s?rs(e/.26):e,a=s?rs((e-.2)/.8):e,o=t.vec.map((c,h)=>{let[u,d]=this.scrubWin.list[h];return c+(n.vec[h]-c)*Fi(rs((a-u)/(d-u)))});this._applyMix(t,n,o,Fi(r),Fi(a),s);let l=this._mixCam(t.cam,n.cam,Fi(e));this._placeCam(l),this.state=e<=.001?"flat":e>=.999?"closed":"custom",this.invalidate()}_mixCam(e,t,n,s){let r=s;if(r===void 0){for(r=t.az-e.az;r>180;)r-=360;for(;r<-180;)r+=360}return{az:e.az+r*n,el:e.el+(t.el-e.el)*n,d:e.d+(t.d-e.d)*n,target:e.target.clone().lerp(t.target,n)}}_applyMix(e,t,n,s,r,a){this.model.apply(n);let o=e.q.clone().slerp(t.q,s),l=e.c.clone().lerp(t.c,r),c=e.lift+(t.lift-e.lift)*r;a&&(c+=Math.sin(Math.PI*s)*this.flipR(e,t)),this.current={vec:n,q:o,c:l,lift:c},this._setRig(o,l,c)}flipR(e,t){let n=0;for(let s of e.corners)n=Math.max(n,Math.hypot(s.x,s.z));for(let s of t.corners)n=Math.max(n,Math.hypot(s.x,s.z));return n*.72}_step(e){let t=this.tween;if(!t)return;let n=rs((e-t.t0)/t.dur),s=rs((n-t.foldWin[0])/(t.foldWin[1]-t.foldWin[0])),r=rs((n-t.poseWin[0])/(t.poseWin[1]-t.poseWin[0])),a=t.from.vec.map((l,c)=>{let[h,u]=t.win.list[c];return l+(t.to.vec[c]-l)*Fi(rs((s-h)/(u-h)))}),o={q:t.from.q,c:t.from.c,lift:t.from.lift,corners:this._info(t.state).corners};this._applyMix(o,t.to,a,Fi(r),Fi(s),t.flip),this._placeCam(this._mixCam(t.cam0,t.cam1,Fi(n),t.azDelta)),this.invalidate(),n>=1&&(this.tween=null,this.scrubWin=null,this.current={vec:t.to.vec,q:t.to.q.clone(),c:t.to.c.clone(),lift:t.to.lift},this.controls.enabled=!0,this.onState?.(t.state))}pick(e,t){if(!this.model?.pickables)return null;let n=this.renderer.domElement.getBoundingClientRect(),s=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.ray.intersectObjects(this.model.pickables,!1)[0];if(!r)return null;let a=r.object.userData.side==="back"?1:r.face?.materialIndex??0;return{panel:r.object.userData.panel,side:a===1?"back":"front",point:r.point}}zoom(e){let t=this._currentCam();t.d*=e,this._placeCam(t),this.invalidate()}resetView(){this.userMoved=!1,this.go(this.state==="custom"?"closed":this.state,{duration:.8})}spin(e){this.spinOn=e,this.invalidate()}stopSpin(){this.spinOn&&(this.spinOn=!1,this.onSpinStop?.())}capture(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement}_tick(){if(this._raf=requestAnimationFrame(this._tick),document.hidden)return;let e=performance.now();if(this.tween&&this._step(e),this.spinOn&&!this.tween){let t=this._currentCam();t.az+=.12,this._placeCam(t),this.needs=!0}this.controls.enabled&&this.controls.update(),this.needs&&(this.needs=!1,this.renderer.render(this.scene,this.camera),this.frames=(this.frames||0)+1)}dispose(){cancelAnimationFrame(this._raf),this.ro.disconnect(),this.controls.dispose(),this.model&&this.model.dispose?.(),this.renderer.dispose(),this.envRT.dispose(),this.renderer.domElement.remove()}};var Ih={};pi(Ih,{accordion:()=>Uv,crossFold:()=>Ov,doubleGate:()=>Dv,doubleParallel:()=>Nv,gateFold:()=>Lv,halfFold:()=>Cv,mapFold:()=>kv,roll4:()=>Fv,rollFold:()=>Iv,tableTalker:()=>zv,tentCard:()=>Bv,tentPose:()=>Ch,zFold:()=>Pv});var bf=.02;function Mf(i,e){let t=la(li(e,i)),n=[t[1],-t[0]];return{d:t,n}}var Nn=(i,e,t,n)=>ss(ss(i,$s(e.d,t)),$s(e.n,n)),Ae=class{constructor(e={}){this.bleed=e.bleed??3,this.safe=e.safe??3,this.panels=[],this.byId={},this.lines=[],this.seams=[],this.holes=[],this.extras=[],this.pose={fold:"flip",closedYaw:0,open:"stand-inside",...e.pose||{}},this.view={closed:{az:-32,el:30},open:{az:-24,el:16},...e.view||{}},this.relax=e.relax??0,this.sides=e.sides??2,this.meta=e.meta||{}}_push(e){if(this.byId[e.id])throw new Error(`Duplicate panel id ${e.id}`);return e.poly=mf(e.poly),e.children=[],e.holes=e.holes||[],this.panels.push(e),this.byId[e.id]=e,e.parent&&this.byId[e.parent].children.push(e.id),e}rectEdges(e,t,n,s){return{top:{a:[e,t],b:[e+n,t]},right:{a:[e+n,t],b:[e+n,t+s]},bottom:{a:[e+n,t+s],b:[e,t+s]},left:{a:[e,t+s],b:[e,t]}}}root(e,t,n,s,r,a={}){let o=a.r?Ni([[t,n],[t+s,n],[t+s,n+r],[t,n+r]],a.r,a.segs??8):[[t,n],[t+s,n],[t+s,n+r],[t,n+r]];return this._push({id:e,name:a.name||e,nameIn:a.nameIn,role:a.role||"main",poly:o,edges:this.rectEdges(t,n,s,r),holes:a.holes,art:a.art,cover:a.cover})}rootPoly(e,t,n={}){return this._push({id:e,name:n.name||e,nameIn:n.nameIn,role:n.role||"main",poly:t,edges:n.edges||{},holes:n.holes,art:n.art,cover:n.cover})}add(e,t,n,s={}){let r=this.byId[e];if(!r)throw new Error(`Unknown parent ${e} for ${n}`);let a=typeof t=="string"?r.edges[t]:t;if(!a)throw new Error(`Unknown edge ${t} on ${e}`);let o=Mf(a.a,a.b),l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]),c=s.inL??0,h=l-(s.inR??0),u,d=[c,h],f={};if(s.pts){u=s.pts;let p=u.filter(g=>Math.abs(g[1])<1e-6).map(g=>g[0]);if(s.hu?d=s.hu:p.length>=2&&(d=[Math.min(...p),Math.max(...p)]),s.edgesLocal)for(let[g,v]of Object.entries(s.edgesLocal))f[g]={a:Nn(a.a,o,v[0][0],v[0][1]),b:Nn(a.a,o,v[1][0],v[1][1])}}else{let p=s.d,g=s.tL??0,v=s.tR??0,M=s.w!==void 0?(s.w-(h-c))/2:0,y=[[c,0],[c+g-M,p],[h-v+M,p],[h,0]],T=Array.isArray(s.r)?s.r:[s.r||0,s.r||0];u=T[0]||T[1]?Ni(y,[0,T[0],T[1],0],s.segs??8):y,f.far={a:Nn(a.a,o,c+g-M,p),b:Nn(a.a,o,h-v+M,p)};let b={a:Nn(a.a,o,c,0),b:Nn(a.a,o,c+g-M,p)},_={a:Nn(a.a,o,h-v+M,p),b:Nn(a.a,o,h,0)};for(let w of[f.far,b,_]){let{n:I}=Mf(w.a,w.b),R=Math.abs(I[0])>Math.abs(I[1])?I[0]>0?"right":"left":I[1]>0?"bottom":"top";f[R]=w}}let m=u.map(p=>Nn(a.a,o,p[0],p[1])),x={a:Nn(a.a,o,d[0],0),b:Nn(a.a,o,d[1],0)};return this._push({id:n,name:s.name||n,nameIn:s.nameIn,role:s.role||"main",parent:e,poly:m,hinge:x,angle:s.angle??180,open:s.open,seq:s.seq??1,gap:s.gap??0,lift:s.lift??0,edges:f,holes:s.holes,art:s.art,cover:s.cover,bead:s.bead})}mount(e,t,n,s={}){return this._push({id:t,name:s.name||t,role:s.role||"main",parent:e,poly:n,edges:s.edges||{},mount:s.to,seq:s.seq??9,holes:s.holes,art:s.art,cover:s.cover,standalone:s.standalone,detached:s.detached??!0})}mountRect(e,t,n,s,r,a,o={}){let l=this.mount(e,t,[[n,s],[n+r,s],[n+r,s+a],[n,s+a]],o);return l.edges=this.rectEdges(n,s,r,a),l}leaf(e,t,n,s,r,a,o={}){let l=[[n,s],[n+r,s],[n+r,s+a],[n,s+a]];return this._push({id:t,name:o.name||t,nameIn:o.nameIn,role:"leaf",parent:e,poly:l,hinge:o.hinge,angle:o.angle??0,open:o.open,seq:o.seq??1,gap:0,edges:{},holes:o.holes,zOff:o.zOff||0,pivotZ:o.pivotZ,uvRect:o.coverLeaf?void 0:{x:n,y:s,w:r,h:a},coverLeaf:o.coverLeaf,pageFront:o.pageFront,pageBack:o.pageBack,bead:o.bead,valley:o.valley})}seam(e,t){return this.seams.push({a:e,b:t}),this}perf(e,t,n="perf"){return this.lines.push({kind:n,a:e,b:t}),this}extra(e){return this.extras.push(e),this}finish(){let e=Eh(this.panels.map(s=>s.poly)),t=[e.x0,e.y0],n=s=>[s[0]-t[0],s[1]-t[1]];for(let s of this.panels){s.mount&&(s.mount.pos&&(s.mount.pos=[s.mount.pos[0]-t[0],s.mount.pos[1]+t[1],s.mount.pos[2]||0]),s.mount.center&&(s.mount.center=[s.mount.center[0]-t[0],s.mount.center[1]+t[1],s.mount.center[2]||0])),s.uvRect&&(s.uvRect={...s.uvRect,x:s.uvRect.x-t[0],y:s.uvRect.y-t[1]}),s.poly=s.poly.map(n),s.holes=(s.holes||[]).map(r=>r.map(n)),s.hinge&&(s.hinge={a:n(s.hinge.a),b:n(s.hinge.b)});for(let r of Object.values(s.edges||{}))r.a=n(r.a),r.b=n(r.b);s.centroid=pf(s.poly),s.area=Math.abs(ff(s.poly)),s.bounds=Eh([s.poly])}return this.lines=this.lines.map(s=>({...s,a:n(s.a),b:n(s.b)})),this.seams=this.seams.map(s=>({a:n(s.a),b:n(s.b)})),this.extras=this.extras.map(s=>{let r={...s};return s.pts&&(r.pts=s.pts.map(n)),s.at&&(r.at=n(s.at)),s.a&&(r.a=n(s.a)),s.b&&(r.b=n(s.b)),s.rect&&(r.rect={...s.rect,x:s.rect.x-t[0],y:s.rect.y-t[1]}),r}),this.w=e.w,this.h=e.h,this.seqMax=Math.max(0,...this.panels.map(s=>s.seq||0)),this._lines(),this}_lines(){let e=this.panels.filter(l=>l.hinge&&l.role!=="leaf"&&!l.perfed).map(l=>({id:l.id,a:l.hinge.a,b:l.hinge.b,angle:l.angle})),t=[],n=new Set,s=(l,c)=>{let h=f=>`${Math.round(f[0]*50)},${Math.round(f[1]*50)}`,u=h(l),d=h(c);return u<d?`${u}|${d}`:`${d}|${u}`},r=null,a=(l,c)=>{if(Math.hypot(l[0]-c[0],l[1]-c[1])<.05)return;(r.outline=r.outline||[]).push([l,c]);let h=s(l,c);n.has(h)||(n.add(h),t.push([l,c]))},o=l=>{let c=[...this.seams];for(let h of e)(h.id===l.id||l.children.includes(h.id))&&c.push(h);return c};for(let l of this.panels){if(l.role==="leaf")continue;r=l;let c=o(l),h=l.poly;for(let u=0;u<h.length;u++){let d=h[u],f=h[(u+1)%h.length],m=[[0,1]],x=li(f,d),p=Math.hypot(x[0],x[1]);if(p<1e-6)continue;let g=[x[0]/p,x[1]/p];for(let v of c){let M=li(v.a,d),y=li(v.b,d),T=I=>Math.abs(I[0]*g[1]-I[1]*g[0]);if(T(M)>bf||T(y)>bf)continue;let b=Tl(M,g)/p,_=Tl(y,g)/p;b>_&&([b,_]=[_,b]);let w=[];for(let[I,R]of m)_<=I||b>=R?w.push([I,R]):(b>I&&w.push([I,b]),_<R&&w.push([_,R]));m=w}for(let[v,M]of m)a([d[0]+x[0]*v,d[1]+x[1]*v],[d[0]+x[0]*M,d[1]+x[1]*M])}for(let u of l.holes||[])for(let d=0;d<u.length;d++)a(u[d],u[(d+1)%u.length])}this.cuts=t,this.creases=e.map(l=>({a:l.a,b:l.b,mountain:l.angle<0,id:l.id}));for(let l of this.seams)this.creases.push({a:l.a,b:l.b,mountain:!1,id:"seam"});for(let l of this.lines)l.kind==="score"&&this.creases.push({a:l.a,b:l.b,mountain:!1,id:"score"});this.perfs=this.lines.filter(l=>l.kind==="perf"),this.kiss=this.lines.filter(l=>l.kind==="kiss")}mainPanels(){return this.panels.filter(e=>e.role==="main").sort((e,t)=>t.area-e.area)}};var pn=179.1,Fn=179.92,Av={closed:{az:-26,el:36},open:{az:-10,el:13,pad:1.22}},Wn=(i={})=>({bleed:3,safe:4,pose:{fold:"flip",open:"stand-inside",...i.pose||{}},view:{...Av,...i.view||{}},meta:i.meta});function Rv(i,e,t=2){let n=(i+t)/e;return{base:n,inner:n-t}}function Ch(i){let e=i*Math.PI/180,t=[0,-Math.cos(e),-Math.sin(e)],n=[0,1+t[1],t[2]],s=Math.hypot(n[1],n[2]),r=[0,-n[1]/s,-n[2]/s],a=[0,-Math.sin(e),Math.cos(e)];return{up:r,face:a}}function Cv({w:i,h:e,axis:t="v"}){let n=new Ae(Wn({pose:t==="h"?{closedYaw:180,open:Ch(112)}:{open:"stand-inside",openYaw:-29},view:t==="h"?{open:{az:-26,el:14}}:{open:{az:0,el:14}}}));return t==="v"?(n.root("back",0,0,i/2,e,{name:"Back cover",nameIn:"Inside right"}),n.add("back","right","front",{d:i/2,angle:pn,seq:1,open:58,name:"Front cover",nameIn:"Inside left",cover:!0})):(n.root("back",0,0,i,e/2,{name:"Back cover",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:pn,seq:1,open:112,name:"Front cover",nameIn:"Inside bottom",cover:!0})),n.finish()}function Iv({w:i,h:e,panels:t}){let n=Rv(i,3,3),[s,r,a]=t||[n.inner,n.base,n.base],o=new Ae(Wn({view:{closed:{az:-24,el:36}}}));return o.root("back",s,0,r,e,{name:"Back cover",nameIn:"Inside centre"}),o.add("back","left","flap",{d:s,angle:Fn,seq:1,open:58,name:"Inner flap",nameIn:"Inside right"}),o.add("back","right","front",{d:a,angle:pn,seq:2,gap:1,open:62,name:"Front cover",nameIn:"Inside left",cover:!0}),o.finish()}function Pv({w:i,h:e}){let t=i/3,n=new Ae(Wn({pose:{fold:"keep",open:"stand-outside",openYaw:-12},view:{closed:{az:-24,el:36},open:{az:-18,el:14}}}));return n.root("back",0,0,t,e,{name:"Back",nameIn:"Inside right"}),n.add("back","right","mid",{d:t,angle:-pn,seq:1,open:-66,name:"Middle",nameIn:"Inside centre"}),n.add("mid","far","front",{d:t,angle:pn,seq:2,open:66,name:"Front cover",nameIn:"Inside left",cover:!0}),n.finish()}function Lv({w:i,h:e}){let t=i/4-1,n=i/2+2,s=new Ae(Wn({view:{closed:{az:-22,el:38}}}));return s.root("back",t,0,n,e,{name:"Back cover",nameIn:"Inside centre"}),s.add("back","left","door-l",{d:t,angle:pn+.8,seq:1,open:48,name:"Door right",nameIn:"Inside right",cover:!0}),s.add("back","right","door-r",{d:t,angle:pn+.8,seq:2,open:48,name:"Door left",nameIn:"Inside left",cover:!0}),s.finish()}function Dv({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Ae(Wn({view:{closed:{az:-24,el:36}}}));return s.root("cr",t+n,0,n,e,{name:"Back cover",nameIn:"Inside left-centre"}),s.add("cr","right","r",{d:t,angle:Fn,seq:1,open:60,name:"Inner flap",nameIn:"Inside left"}),s.add("cr","left","cl",{d:n,angle:pn,seq:2,gap:2,open:22,name:"Front cover",nameIn:"Inside right-centre",cover:!0}),s.add("cl","far","l",{d:t,angle:Fn,seq:1,open:60,name:"Inner flap",nameIn:"Inside right"}),s.finish()}function Nv({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Ae(Wn({view:{closed:{az:-24,el:36}}}));return s.root("c",t+n,0,n,e,{name:"Panel 3",nameIn:"Inside 2"}),s.add("c","left","b",{d:n,angle:Fn,seq:1,open:74,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:t,angle:-Fn,seq:2,open:-70,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:t,angle:pn,seq:2,gap:2,open:70,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Fv({w:i,h:e}){let t=(i-4-3)/4+0,n=[t,t+1.5,t+2.75,t+2.75],s=new Ae(Wn({view:{closed:{az:-24,el:36}}}));return s.root("c",n[0]+n[1],0,n[2],e,{name:"Back cover",nameIn:"Inside 2"}),s.add("c","left","b",{d:n[1],angle:Fn,seq:2,gap:1,open:60,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:n[0],angle:Fn,seq:1,open:62,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:n[3],angle:pn,seq:3,gap:2,open:58,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Uv({w:i,h:e,n:t}){let n=i/t,s=t%2===0,r=new Ae(Wn({pose:{fold:s?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:36},open:{az:-20,el:14}}}));r.root("p0",0,0,n,e,{name:"Back",nameIn:`Inside ${t}`});let a=s?1:-1;for(let o=1;o<t;o++)r.add(o===1?"p0":`p${o-1}`,o===1?"right":"far",`p${o}`,{d:n,angle:a*(o===t-1?pn:Fn),seq:t-o,open:a*64,name:o===t-1?"Front cover":`Panel ${o+1}`,nameIn:`Inside ${t-o}`,cover:o===t-1}),a=-a;return r.finish()}function Ov({w:i,h:e}){let t=i/2,n=e/2,s=new Ae(Wn({pose:{open:"flip"},view:{closed:{az:-24,el:38},open:{az:-22,el:34}}}));return s.root("bl",0,n,t,n,{name:"Back cover",nameIn:"Inside 2"}),s.add("bl","top","tl",{d:n,angle:Fn,seq:1,name:"Inside top",nameIn:"Inside 3"}),s.add("bl","right","br",{d:t,angle:pn,seq:2,gap:2,open:118,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.add("tl","right","tr",{d:t,angle:-Fn,seq:2,open:-118,name:"Inside top right",nameIn:"Inside 4"}),s.seam([t,n],[i,n]),s.finish()}function kv({w:i,h:e,cols:t=4}){let n=i/t,s=e/2,r=t%2===0,a=new Ae(Wn({pose:{fold:r?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:38},open:{az:-20,el:14}}}));a.root("r1c0",0,s,n,s,{name:"Back cover",nameIn:"Panel"}),a.add("r1c0","top","r0c0",{d:s,angle:pn,seq:2,gap:t-1,name:"Panel",nameIn:"Panel"});for(let o of[1,0]){let l=r?1:-1;for(let c=1;c<t;c++){let h=c===1?"right":"far",u=o===1?l:-l;a.add(`r${o}c${c-1}`,h,`r${o}c${c}`,{d:n,angle:u*Fn,seq:1,open:u*62,name:o===1&&c===t-1?"Front cover":"Panel",nameIn:"Panel",cover:o===1&&c===t-1}),l=-l}}return a.seam([n,s],[i,s]),a.finish()}function Bv({w:i,h:e}){let n=new Ae({bleed:3,safe:3,pose:{fold:Ch(128)},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("back",0,0,i,e/2,{name:"Back (reads upside down)",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:128,seq:1,name:"Front",nameIn:"Inside bottom",cover:!0}),n.finish()}function zv({w:i,h:e,side:t}){let n=t??e*.45,s=n*.72,r=14,a=180-Math.acos(s/2/n)*180/Math.PI,o=180-2*(180-a),l=new Ae({bleed:3,safe:3,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return l.root("base",0,n,i,s,{name:"Base",nameIn:"Base"}),l.add("base","top","back",{d:n,angle:a,seq:1,name:"Back",nameIn:"Inside"}),l.add("base","bottom","front",{d:n,angle:a,seq:1,name:"Front",nameIn:"Inside",cover:!0}),l.add("front","far","glue",{d:r,inL:1,inR:1,tL:2,tR:2,angle:180-o,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),l.finish()}var Ph={};pi(Ph,{badge:()=>Xv,doorHanger:()=>Vv,hangTag:()=>Gv,sheet:()=>Hv,stickerSheet:()=>qv,ticket:()=>Wv});var Js={fold:"keep",open:"keep"},Ks={closed:{az:-30,el:34}},ha={noOpen:!0};function Hv({w:i,h:e,r:t=0,holes:n=[],shape:s,bleed:r=3,safe:a=3,stack:o=6,name:l="Front",nameIn:c="Back"}){let h=new Ae({bleed:r,safe:a,pose:Js,view:Ks,meta:ha}),u=ci(0,0,i,e);if(s==="circle")u=Vn(i/2,e/2,i/2,96);else if(s==="ellipse")u=Al(i/2,e/2,i/2,e/2,96);else if(s==="arch"){let d=[];for(let f=0;f<=28;f++){let m=Math.PI+f/28*Math.PI;d.push([i/2+Math.cos(m)*(i/2),i/2+Math.sin(m)*(i/2)])}u=[...d,[i,e],[0,e]]}else t&&(u=Ni(u,t,8));return h.rootPoly("sheet",u,{name:l,nameIn:c,holes:n,cover:!0,edges:h.rectEdges(0,0,i,e)}),o&&h.extra({type:"stack",count:o,spread:Math.min(i,e)*.012}),h.finish()}function Gv({w:i,h:e,chamfer:t=9}){let n=t,s=[[n,0],[i-n,0],[i,n],[i,e],[0,e],[0,n]],r=new Ae({bleed:3,safe:3,pose:Js,view:Ks,meta:ha});return r.rootPoly("sheet",s,{name:"Front",nameIn:"Back",holes:[Vn(i/2,9,2.5,28)],cover:!0}),r.extra({type:"string",at:[i/2,9],len:e*.9}),r.extra({type:"stack",count:3,spread:1.4}),r.finish()}function Vv({w:i,h:e}){let n=i/2,s=30,r=-.25,a=42,o=n+19*1.28,l=[[0,0],[o-1,0],[n+Math.cos(r)*19,s+Math.sin(r)*19]];for(let h=1;h<=a;h++){let u=r-h/a*(Math.PI*2-.5);l.push([n+Math.cos(u)*19,s+Math.sin(u)*19])}l.push([o+3,0],[i,0],[i,e],[0,e]);let c=new Ae({bleed:3,safe:4,pose:Js,view:Ks,meta:ha});return c.rootPoly("sheet",l,{name:"Front",nameIn:"Back",cover:!0}),c.extra({type:"stack",count:4,spread:1.6}),c.finish()}function Wv({w:i,h:e,stub:t=40}){let n=new Ae({bleed:3,safe:3,pose:Js,view:{...Ks,open:{az:-30,el:34}}});return n.root("sheet",0,0,i-t,e,{name:"Ticket",nameIn:"Back",cover:!0}),n.add("sheet","right","stub",{d:t,angle:0,open:14,seq:1,name:"Stub",nameIn:"Stub back",bead:!1}),n.perf([i-t,0],[i-t,e]),n.byId.stub.perfed=!0,n.extra({type:"stack",count:4,spread:1.4}),n.finish()}function qv({w:i,h:e,cols:t,rows:n,d:s}){let r=new Ae({bleed:2,safe:2,pose:Js,view:Ks,sides:1,meta:ha});r.root("sheet",0,0,i,e,{name:"Sticker sheet",nameIn:"Liner",cover:!0});let a=(i-t*s)/(t+1),o=(e-n*s)/(n+1);for(let l=0;l<n;l++)for(let c=0;c<t;c++){let h=Vn(a+s/2+c*(s+a),o+s/2+l*(s+o),s/2,40);h.forEach((u,d)=>r.perf(u,h[(d+1)%h.length],"kiss"))}return r.extra({type:"stack",count:3,spread:2}),r.finish()}function Xv({w:i,h:e}){let t=i/2-8,n=[[t,8],[t+16,8],[t+16,12],[t,12]],s=new Ae({bleed:3,safe:4,pose:Js,view:Ks,meta:ha});return s.rootPoly("sheet",Ni(ci(0,0,i,e),4,6),{name:"Front",nameIn:"Back",cover:!0,holes:[n]}),s.extra({type:"stack",count:3,spread:1.5}),s.finish()}var Dh={};pi(Dh,{envelope:()=>$v,gussetEnvelope:()=>Yv});var hi=179.95,Lh=179.3;function $v({w:i,h:e,style:t="wallet",window:n,sealR:s=7}){let r=new Ae({bleed:3,safe:4,pose:{fold:n?"keep":"flip",open:"flip"},view:{closed:{az:-24,el:40},open:{az:-18,el:46}},meta:{seam:!0}}),a=[];if(n&&a.push(ci(n.x,n.y,n.w,n.h)),r.root("front",0,0,i,e,{name:"Address side",nameIn:"Inside",holes:a,cover:!0}),t==="pointed"){let o=i*.34,l=(c,h)=>({pts:[[0,0],[c*.47,h*.97],[c*.5,h],[c*.53,h*.97],[c,0]]});r.add("front","left","side-l",{...l(e,o),angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{...l(e,o),angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{...l(i,e*.56),angle:hi,seq:2,gap:1,lift:.5,role:"flap",name:"Bottom flap",nameIn:"Inside"}),r.add("front","top","seal",{...l(i,e*.62),angle:Lh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else if(t==="pocket"){let o=Math.min(i*.13,30);r.add("front","left","side-l",{d:o,tL:8,tR:8,r:3,angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:8,tR:8,r:3,angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.78,inL:0,inR:0,tL:7,tR:7,r:3,angle:hi,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:Math.min(e*.27,62),tL:12,tR:12,r:s,angle:Lh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else{let o=Math.min(e*.42,36);r.add("front","left","side-l",{d:o,tL:6,tR:10,r:3,angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:10,tR:6,r:3,angle:hi,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.66,tL:e*.3,tR:e*.3,r:5,angle:hi,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:e*.5,tL:e*.2,tR:e*.2,r:s,angle:Lh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}return n&&r.extra({type:"film",panel:"front",rect:n}),r.extra({type:"insert",panel:"front",size:[i-8,e-8],rise:e*.42,z:1}),r.finish()}function Yv({w:i,h:e,g:t=25}){let s=new Ae({bleed:3,safe:5,pose:{fold:"stand",open:"stand"},view:{closed:{az:-32,el:18},open:{az:-30,el:26}}}),r=.3;return s.root("front",16+t-r,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),s.add("front","right","gus-b",{d:t,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),s.add("front","left","gus-a",{d:t-r,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-a","far","glue",{d:16,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),s.add("gus-a","bottom","b-a",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("gus-b","bottom","b-b",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("front","bottom","b-f",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","bottom","b-k",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","top","seal-top",{d:t,inL:.2,inR:.2,angle:90,seq:6,open:0,gap:2,role:"flap",name:"Top",nameIn:"Inside"}),s.add("seal-top","far","seal",{d:42,tL:6,tR:6,r:6,angle:90,seq:6,open:0,role:"flap",name:"Seal flap",nameIn:"Gum"}),s.add("gus-a","top","t-a",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.add("gus-b","top","t-b",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.finish()}var Nh={};pi(Nh,{folder:()=>Zv});function Zv({w:i,h:e,spine:t=0,pocket:n=100,two:s=!1,slit:r=!0,insert:a=!1}){let o=new Ae({bleed:3,safe:5,pose:{fold:"flip",open:"flip",openYaw:0},view:{closed:{az:-24,el:36},open:{az:-14,el:52,pad:1.14}},meta:{seam:!0}});o.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside right"});let l=t>0?"spine":"back";t>0&&o.add("back","right","spine",{d:t,angle:90,seq:3,open:8,name:"Spine",nameIn:"Spine",role:"flap"}),o.add(l,t>0?"far":"right","front",{d:i,angle:t>0?90:179.2,seq:3,gap:t>0?0:2,open:t>0?8:16,name:"Front cover",nameIn:"Inside left",cover:!0});let c=(u,d,f)=>f?{pts:[[0,0],[0,d-16],[18,d],[u,d],[u,0]]}:{pts:[[0,0],[0,d],[u-18,d],[u,d-16],[u,0]]},h=o.add("back","bottom","pocket",{...c(i,n,!0),angle:179.92,seq:1,gap:0,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]});return o.add("pocket",{a:[0,e+n-16],b:[0,e]},"pocket-tab",{d:12,tL:3,tR:3,angle:-179.9,seq:0,role:"glue",name:"Glue",nameIn:"Glue"}),s&&o.add("front","bottom","pocket2",{...c(i,n,!1),angle:179.92,seq:1,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]}),r&&(o.perf([i-72,e+n*.42],[i-62,e+n*.3],"perf"),o.perf([i-18,e+n*.3],[i-8,e+n*.42],"perf")),a&&o.extra({type:"insert",panel:"back",size:[i-16,e-n*.5],rise:0,z:.5,at:"pocket",openOnly:!0}),o.finish()}var Fh={};pi(Fh,{autoLockBox:()=>jv,cakeBox:()=>oy,counterDisplay:()=>ly,drawerBox:()=>iy,gableBox:()=>ay,lidBox:()=>ny,mailerBox:()=>ty,paperBag:()=>cy,shippingBox:()=>ey,sleeve:()=>ry,snapBox:()=>Qv,trayBox:()=>sy,tuckBox:()=>Jv});var Qs={fold:"stand",open:"stand"},Dl={closed:{az:-34,el:22},open:{az:-30,el:30}};function ua(i,{L:e,W:t,H:n,t:s,glue:r=14}){let a=.25+s*.6;i.root("front",r+t-a,0,e,n,{name:"Front",nameIn:"Inside front",cover:!0}),i.add("front","right","side-b",{d:t,angle:90,seq:3,name:"Right side",nameIn:"Inside"}),i.add("side-b","far","back",{d:e,angle:90,seq:3,name:"Back",nameIn:"Inside back"}),i.add("front","left","side-a",{d:t-a,angle:90,seq:3,name:"Left side",nameIn:"Inside"}),i.add("side-a","far","glue",{d:r,inL:2,inR:2,tL:3,tR:3,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"})}function js(i,e,t,n,{L:s,W:r,tuck:a,t:o,seq:l,open:c}){i.add(e,t,`${n}-lid`,{d:r-o*2.4-.3,angle:90,seq:l,gap:2,open:c,name:n==="top"?"Top":"Base",nameIn:"Inside"}),i.add(`${n}-lid`,"far",`${n}-tuck`,{d:a,inL:.6,inR:.6,tL:2,tR:2,r:6,angle:90.6,seq:l,open:40,role:"flap",name:"Tuck",nameIn:"Tuck"})}function qn(i,e,t,n,s,r){i.add(e,t,n,{d:s,inL:.6,inR:.6,tL:2,tR:6,r:2,angle:90,seq:r,role:"flap",name:"Dust flap",nameIn:"Dust flap"})}function Jv({L:i,W:e,H:t,t:n=.45,reverse:s=!1,hang:r=!1}){let a=new Ae({bleed:3,safe:3,pose:{...Qs},view:Dl});ua(a,{L:i,W:e,H:t,t:n});let o=Math.min(16,e*.6),l=Math.min(e*.62,26);if(qn(a,"side-a","top","dust-a-top",l,6),qn(a,"side-b","top","dust-b-top",l,6),qn(a,"side-a","bottom","dust-a-bot",l,4),qn(a,"side-b","bottom","dust-b-bot",l,4),r){js(a,"front","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});let c=a.byId.back.edges.top,h=(c.a[0]+c.b[0])/2,u=c.a[1]-21;a.add("back","top","hang",{d:36,r:5,angle:0,seq:1,name:"Hang tab",nameIn:"Hang tab",bead:!1,holes:[Kv(h,u)]})}else js(a,"back","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});return js(a,s?"front":"back","bottom","bot",{L:i,W:e,tuck:o,t:n,seq:5}),a.finish()}function Kv(i,e){let s=[];for(let r=0;r<=10;r++){let a=Math.PI/2+r/10*Math.PI;s.push([i-14+Math.cos(a)*3,e+Math.sin(a)*3])}s.push([i-5,e-3],[i-3.5,e-6.5],[i+3.5,e-6.5],[i+5,e-3]);for(let r=0;r<=10;r++){let a=-Math.PI/2+r/10*Math.PI;s.push([i+14+Math.cos(a)*3,e+Math.sin(a)*3])}return s}function jv({L:i,W:e,H:t,t:n=.45}){let s=new Ae({bleed:3,safe:3,pose:{...Qs},view:Dl});ua(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);qn(s,"side-a","top","dust-a-top",a,6),qn(s,"side-b","top","dust-b-top",a,6),js(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18});let o=e*.58,l=(c,h,u)=>({pts:u?[[0,0],[0,h*.5],[c*.28,h],[c*.72,h],[c,h*.42],[c,0]]:[[0,0],[0,h*.42],[c*.28,h],[c*.72,h],[c,h*.5],[c,0]]});return s.add("front","bottom","lock-f",{...l(i,o,!1),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("back","bottom","lock-b",{...l(i,o,!0),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-a","bottom","lock-a",{d:e*.5,inL:.5,inR:.5,tL:2,tR:8,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-b","bottom","lock-c",{d:e*.5,inL:.5,inR:.5,tL:8,tR:2,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.finish()}function Qv({L:i,W:e,H:t,t:n=.45}){let s=new Ae({bleed:3,safe:3,pose:{...Qs},view:Dl});ua(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);return qn(s,"side-a","top","dust-a-top",a,6),qn(s,"side-b","top","dust-b-top",a,6),js(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18}),s.add("side-a","bottom","snap-1",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"1",nameIn:"1"}),s.add("side-b","bottom","snap-2",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"2",nameIn:"2"}),s.add("front","bottom","snap-3",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"3",nameIn:"3"}),s.add("back","bottom","snap-4",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"4",nameIn:"4"}),s.finish()}function ey({L:i,W:e,H:t,t:n=3}){let s=new Ae({bleed:0,safe:10,pose:{...Qs},view:Dl});ua(s,{L:i,W:e,H:t,t:n,glue:30});let r=e/2;return s.add("side-a","bottom","min-a-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","bottom","min-b-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","bottom","maj-f-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("back","bottom","maj-k-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("side-a","top","min-a-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","top","min-b-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","top","maj-f-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.add("back","top","maj-k-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.finish()}function ty({L:i,W:e,H:t,t:n=1.5}){let s=Math.max(5,n*3.5),r=n+.3,a=i+2*s,o=new Ae({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-26,el:40}}});o.root("base",0,0,a,e,{name:"Base",nameIn:"Inside base"}),o.add("base","top","back",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Back",nameIn:"Inside back"}),o.add("back","far","lid",{d:e-n*2.1-.4,inL:s-r+.4,inR:s-r+.4,angle:90,seq:6,gap:1,open:8,name:"Lid",nameIn:"Inside lid",cover:!0}),o.add("lid","far","tuck",{d:t*.86,inL:1,inR:1,tL:2,tR:2,r:8,angle:90.6,seq:6,open:26,role:"flap",name:"Tuck",nameIn:"Tuck"}),o.add("lid","left","ear-l",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("lid","right","ear-r",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("base","bottom","front",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Front",nameIn:"Inside front"});let l=Math.min(e*.34,46);o.add("back","left","back-l",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("back","right","back-r",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","left","front-l",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","right","front-r",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"});for(let[c,h]of[["l","left"],["r","right"]])o.add("base",h,`wall-${c}`,{d:t,angle:90,seq:3,name:c==="l"?"Left side":"Right side",nameIn:"Inside"}),o.add(`wall-${c}`,"far",`roll-${c}`,{d:s-n,inL:1,inR:1,angle:90,seq:4,role:"flap",name:"Roll",nameIn:"Roll"}),o.add(`roll-${c}`,"far",`in-${c}`,{d:t-n-1,inL:1,inR:1,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Inner wall",nameIn:"Inner wall"});return o.finish()}function Ll(i,e,t,n,s,r,a,o={}){let l=e?`${e}-`:"",c=`${l}base`,h=o.seq??2,u=Math.min(a*.9,18);o.mount?i.mountRect(o.parent,c,t,n,s,r,{to:o.mount,seq:o.mountSeq,name:o.name||"Top",nameIn:"Inside",cover:!0}):i.root(c,t,n,s,r,{name:o.name||"Base",nameIn:"Inside base"});let d=o.t*1.4;for(let[f,m,x]of[["t","top","Back"],["b","bottom","Front"]])i.add(c,m,`${l}wall-${f}`,{d:a,inL:0,inR:0,angle:90,seq:h+1,name:x,nameIn:"Inside",gap:1}),i.add(`${l}wall-${f}`,"left",`${l}tab-${f}l`,{d:u,inL:1,inR:1,tL:0,tR:3,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"}),i.add(`${l}wall-${f}`,"right",`${l}tab-${f}r`,{d:u,inL:1,inR:1,tL:3,tR:0,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"});for(let[f,m,x]of[["l","left","Left"],["r","right","Right"]])i.add(c,m,`${l}wall-${f}`,{d:a,inL:.3,inR:.3,angle:90,seq:h+2,gap:3,name:x,nameIn:"Inside"})}function ny({L:i,W:e,H:t,lid:n,t:s=.5}){let r=n??Math.max(t*.5,20),a=s*3+.6,o=t+r+22,l=new Ae({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:28},open:{az:-28,el:32}}});Ll(l,"",0,0,i,e,t,{t:s,name:"Base"});let c=i+2*a,h=e+2*a,u=i+t*2+40,d=(e-h)/2;return Ll(l,"lid",u,d,c,h,r,{t:s,parent:"base",name:"Lid top",seq:2,mountSeq:6,mount:{pos:[i/2,-e/2,-t-s-.2],rot:[0,180,0],center:[u+c/2,-(d+h/2),0],arc:Math.max(i,e)*.55,openAt:.42}}),l.finish()}function iy({L:i,W:e,H:t,t:n=.5}){let s=new Ae({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:26},open:{az:-34,el:32}}});Ll(s,"",0,0,i,e,t,{t:n,name:"Tray"});let r=n*2+.6,a=e+r,o=t+r,l=i+t*2+40,c=-t-10;return s.mountRect("base","sleeve",l,c,i,a,{name:"Sleeve top",nameIn:"Inside",seq:7,cover:!0,to:{pos:[i/2,-e/2,-t-n*2.2],rot:[0,180,0],center:[l+i/2,-(c+a/2),0],arc:i*.5,slide:[i*.95,0,0],openAt:.76}}),s.add("sleeve","bottom","sleeve-f",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-f","far","sleeve-u",{d:a,angle:90,seq:6,name:"Sleeve base",nameIn:"Inside"}),s.add("sleeve-u","far","sleeve-b",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-b","far","sleeve-g",{d:12,inL:2,inR:2,tL:2,tR:2,angle:90,seq:5,role:"glue",gap:0,name:"Glue",nameIn:"Glue"}),s.finish()}function sy({L:i,W:e,H:t,t:n=.5}){let s=new Ae({bleed:3,safe:3,pose:{fold:"flip"},view:{closed:{az:-30,el:34}},meta:{noOpen:!0}});return Ll(s,"",0,0,i,e,t,{t:n,name:"Base"}),s.finish()}function ry({L:i,W:e,H:t,t:n=.45,inner:s,innerColor:r}){let a=new Ae({bleed:3,safe:3,pose:{fold:"keep"},view:{closed:{az:-28,el:28}},meta:{noOpen:!0}});return a.root("top",12+t,0,i,e,{name:"Top",nameIn:"Inside",cover:!0}),s&&a.extra({type:"block",panel:"top",size:[i-n*2-.4,s,t-n*1.5],pos:[12+t+i/2,-e/2,-n-(t-n*1.5)/2-.1],color:r,seq:2}),a.add("top","right","side-b",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-b","far","under",{d:i,angle:90,seq:1,name:"Under",nameIn:"Inside"}),a.add("top","left","side-a",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-a","far","glue",{d:12,inL:1,inR:1,tL:2,tR:2,angle:90,seq:1,gap:1,role:"glue",name:"Glue",nameIn:"Glue"}),a.finish()}function ay({L:i,W:e,H:t,t:n=.45}){let s=new Ae({bleed:3,safe:3,pose:{...Qs},view:{closed:{az:-34,el:18},open:{az:-30,el:28}}});ua(s,{L:i,W:e,H:t,t:n});let r=e*.62,a=Math.asin(Math.min(.98,(e/2+.2)/r))*(180/Math.PI),o=34,l=Math.min(i*.55,80),c=(d,f)=>{let m=[];for(let g=0;g<=12;g++){let v=Math.PI/2+g/12*Math.PI;m.push([d+Math.cos(v)*7,f+Math.sin(v)*7])}for(let g=0;g<=12;g++){let v=-Math.PI/2+g/12*Math.PI;m.push([d+l+Math.cos(v)*7,f+Math.sin(v)*7])}return m},h=(d,f,m)=>{s.add(d,"top",`${f}-roof`,{d:r,angle:90-a,seq:6,open:0,name:"Roof",nameIn:"Inside",cover:!1});let x=s.byId[`${f}-roof`].edges.far,p=(x.a[0]+x.b[0])/2,g=x.a[1]-o*.46;s.add(`${f}-roof`,"far",`${f}-handle`,{d:o,r:8,tL:4,tR:4,angle:-(90-a)*0+90-(90-a),seq:7,open:0,role:"flap",name:"Handle",nameIn:"Handle",holes:[c(p-l/2,g)]})};h("back","k",1),h("front","f",-1);for(let d of["a","b"]){let f=[[0,0],[e/2,e*.5],[e,0]];s.add(`side-${d}`,"top",`gus-${d}`,{pts:f,angle:52,seq:5,open:0,role:"flap",name:"Gusset",nameIn:"Gusset"})}let u=Math.min(e*.62,26);return qn(s,"side-a","bottom","dust-a-bot",u,4),qn(s,"side-b","bottom","dust-b-bot",u,4),js(s,"back","bottom","bot",{L:i,W:e,tuck:14,t:n,seq:5}),s.finish()}function oy({L:i,W:e,H:t,t:n=.5}){let s=new Ae({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-24,el:38}}});s.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),s.add("base","top","back",{d:t,angle:90,seq:2,name:"Back",nameIn:"Inside"}),s.add("back","far","lid",{d:e-n*2.4-.3,inL:n*1.6+.4,inR:n*1.6+.4,angle:90,seq:5,gap:2,open:2,name:"Lid",nameIn:"Inside lid",cover:!0}),s.add("lid","far","tuck",{d:t*.55,inL:3,inR:3,tL:6,tR:6,r:5,angle:90.6,seq:5,open:18,role:"flap",name:"Tuck",nameIn:"Tuck"}),s.add("lid","left","lip-l",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("lid","right","lip-r",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("base","bottom","front",{d:t,angle:90,seq:2,name:"Front",nameIn:"Inside"}),s.add("base","left","left",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Left",nameIn:"Inside"}),s.add("base","right","right",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Right",nameIn:"Inside"});for(let r of["back","front"])s.add(r,"left",`${r}-gl`,{d:e*.22,inL:1,inR:1,tL:0,tR:4,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),s.add(r,"right",`${r}-gr`,{d:e*.22,inL:1,inR:1,tL:4,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return s.finish()}function ly({L:i,W:e,H:t,header:n,t:s=1.5}){let r=new Ae({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:22},open:{az:-30,el:22}}});r.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),r.add("base","top","back",{d:t+n,angle:90,seq:2,name:"Header",nameIn:"Header inside",cover:!0}),r.add("base","bottom","front",{d:t*.8,angle:90,seq:2,name:"Front lip",nameIn:"Inside"}),r.add("base","left","left",{pts:[[0,0],[0,t+n*.7],[e*.45,t],[e,t*.8],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Left wing",nameIn:"Inside"}),r.add("base","right","right",{pts:[[0,0],[0,t*.8],[e*.55,t],[e,t+n*.7],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Right wing",nameIn:"Inside"});for(let a of["front"])r.add(a,"left",`${a}-gl`,{d:14,inL:1,inR:1,tL:0,tR:3,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),r.add(a,"right",`${a}-gr`,{d:14,inL:1,inR:1,tL:3,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return r.finish()}function cy({w:i,h:e,g:t,hem:n=40,base:s,handles:r=!0,t:a=.2}){let o=s??t*.72,l=18,c=a*1.6+.2,h=new Ae({bleed:3,safe:5,pose:{...Qs},view:{closed:{az:-30,el:12},open:{az:-30,el:22}}});if(h.root("front",l+t-c,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),h.add("front","right","gus-b",{d:t,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),h.add("front","left","gus-a",{d:t-c,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-a","far","glue",{d:l,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),n)for(let u of["front","gus-a","gus-b","back"])h.add(u,"top",`hem-${u}`,{d:n,inL:.1,inR:.1,angle:179.9,seq:1,role:"flap",name:"Hem",nameIn:"Hem"});return h.add("gus-a","bottom","b-a",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("gus-b","bottom","b-b",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("front","bottom","b-f",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("back","bottom","b-k",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),r&&(h.extra({type:"rope",panel:"front",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i}),h.extra({type:"rope",panel:"back",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i})),h.finish()}var Oh={};pi(Oh,{deskCalendar:()=>my,notepad:()=>py,perfectBook:()=>uy,saddleBook:()=>hy,wireBook:()=>dy});var Uh=7;function hy({w:i,h:e,pages:t=16,t:n=.12,coverT:s}){let a=Math.max(1,Math.ceil(t/4))-1,o=Math.min(a,Uh),l=a*n/Math.max(1,o),c=s??n,u=-(o*2*l+2*c)/2,d=new Ae({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-26,el:34},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"saddle"}}});d.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside back cover"}),d.add("back","right","front",{d:i,angle:179.6,seq:1,open:5,name:"Front cover",nameIn:"Inside front cover",cover:!0}),d.byId.front.pivotZ=u;let f=[i,0],m=[i,e];for(let p=0;p<o;p++){let g=c+p*l,v=2*(p+1)+1;d.leaf("back",`l${p}`,i,0,i,e,{hinge:{a:f,b:m},zOff:g,pivotZ:u,angle:179.7,open:p===o-1?62:6+p*1.2,seq:1,pageFront:v,pageBack:v+1,valley:!0,bead:!1}),d.leaf("back",`r${p}`,0,0,i,e,{hinge:{a:f,b:m},zOff:g,pivotZ:u,angle:0,open:0,seq:1,pageFront:t-v+1,pageBack:t-v,valley:!0,bead:!1})}d.meta.pageT=l,d.meta.leafT=l;let x=e*.26;return d.extra({type:"staples",x:i,ys:[x,e-x],len:8,panel:"back"}),d.finish()}function uy({w:i,h:e,pages:t=64,t:n=.12,coverT:s=.3,hard:r=!1}){let a=Math.ceil((t-4)/2),o=Math.max(2,a*n+(r?3:.6)),l=Math.min(a,Uh+2),c=a*n/l,h=r?2.4:s,u=r?3:0,d=new Ae({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-28,el:32},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"perfect"},thick:h}}),f=i+u,m=e+u*2;d.root("back",0,0,f,m,{name:"Back cover",nameIn:"Inside back cover"}),d.add("back","right","spine",{d:o,angle:90,seq:1,open:90,name:"Spine",nameIn:"Spine",role:"flap",lift:0}),d.add("spine","far","front",{d:f,angle:90,seq:2,open:-80,name:"Front cover",nameIn:"Inside front cover",cover:!0});let x=[f,u],p=[f,u+e],g=o;for(let v=0;v<l;v++){let M=h+(v+0)*c*.999,y=l-1-v;d.leaf("back",`p${v}`,f-i,u,i,e,{hinge:{a:x,b:p},zOff:M,pivotZ:-(h+g/2),angle:0,open:y<4?[172,169,166,118][3-y]:0,seq:3,pageFront:t-2-2*v,pageBack:t-3-2*v,valley:!0,bead:!1})}return d.meta.pageT=c,d.meta.leafT=c,d.finish()}function dy({w:i,h:e,pages:t=40,t:n=.13,coverT:s=.33,edge:r="left",stand:a=!1,wall:o=!1,r:l}){let c=Math.ceil(t/2),h=Math.min(c,Uh+1),u=c*n/h,d=h*u+2*s,f=r==="left",m=f?[0,0]:[0,0],x=f?[0,e]:[i,0],p=8.47,g=2,v=[],M=Math.floor((f?e:i)/p),y=6;for(let R=0;R<M;R++){let N=(R+.5)/M*(f?e:i);v.push(f?Vn(y,N,g,14):Vn(N,y,g,14))}let T=l??Math.max(6.5,d/2+3.2),b=new Ae({bleed:3,safe:11,pose:o?{fold:"stand",open:"stand",closedYaw:0}:{fold:"keep",open:"keep"},view:o?{closed:{az:-20,el:6},open:{az:-20,el:6}}:{closed:{az:-26,el:34},open:{az:-26,el:40}},meta:{book:{pages:t,kind:"wire"}}});b.root("backleaf",0,0,i,e,{name:"Back",nameIn:"Inside",holes:v});let _=-d+y*0,w={a:m,b:x};for(let R=0;R<h;R++){let N=(h-R)*u,U=R===0;b.leaf("backleaf",`w${R}`,0,0,i,e,{hinge:w,zOff:-N-(U?s:0),pivotZ:d/2,coverLeaf:U,holes:U?v:[],angle:0,open:R<2?-176+R*7:0,seq:2-Math.min(R,1),pageFront:2*R+1,pageBack:2*R+2,valley:!1,bead:!1})}return b.meta.leafT=u,b.meta.pageT=u,b.extra({type:"wire",a:f?[6*0-1,0]:[0,-1],b:f?[-1,e]:[i,-1],pitch:p,r:T,h:0,z:d/2-T*0-0,always:!0,ox:f?1+y*.2:0,oy:f?0:y*.2}),o&&b.extra({type:"custom",build:fy(i)}),b.finish()}function fy(i){return(e,t)=>{let n=new Re(new hn(8,.6,8,32,Math.PI),new et({color:"#16161a",metalness:.8,roughness:.35}));n.position.set(i/2,6,0),t.group.add(n)}}function py({w:i,h:e,sheets:t=50,t:n=.1}){let r=t*n/6,a=new Ae({bleed:3,safe:5,pose:{fold:"keep",open:"keep"},view:{closed:{az:-28,el:32},open:{az:-28,el:38}},meta:{book:{pages:t,kind:"pad"}}});a.root("back",0,0,i,e,{name:"Chipboard back",nameIn:"Chipboard",holes:[]});let o={a:[0,0],b:[i,0]};for(let l=0;l<6;l++){let c=(6-l)*r;a.leaf("back",`n${l}`,0,0,i,e,{hinge:o,zOff:-c,pivotZ:1.5,coverLeaf:!0,angle:0,open:l===0?-58:0,seq:1,pageFront:1,pageBack:2,valley:!1,bead:!1})}return a.meta.leafT=r,a.meta.pageT=r,a.finish()}function my({w:i,h:e,base:t}){let n=t??e*.75,s=18,r=e+6,a=180-Math.acos((n*n+r*r-r*r)/(2*n*r))*180/Math.PI,o=new Ae({bleed:3,safe:5,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-28,el:18}},meta:{noOpen:!0}});return o.root("base",0,r,i,n,{name:"Base",nameIn:"Base"}),o.add("base","top","back",{d:r,angle:a,seq:1,name:"Back",nameIn:"Inside"}),o.add("base","bottom","front",{d:r,angle:a,seq:1,name:"Month sheet",nameIn:"Inside",cover:!0}),o.add("front","far","glue",{d:s,inL:1,inR:1,tL:2,tR:2,angle:2*(180-a),seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),o.extra({type:"wire",panel:"front",a:[0,0],b:[i,0],pitch:8.47,r:5.5,h:0,z:0,oy:3}),o.finish()}var kh={};pi(kh,{coneWrap:()=>yy,friesCone:()=>by,pillowBox:()=>My,wrapLabel:()=>vy});var gy=i=>Math.min(1,Math.max(0,i)),_y=i=>i*i*(3-2*i),Nl=class{constructor(e,{thickness:t,materials:n,uvOf:s,surface:r}){this.kind="warp",this.die=e,this.t=t,this.object=new at,this.pickables=[],this.channels=[];let a=e.warp;this.warp=a;let o=a.nu||96,l=a.nv||32;this.nu=o,this.nv=l;let c=(o+1)*(l+1);this.flat=new Float32Array(c*2);let h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*2),f=[],m=0;for(let M=0;M<=l;M++)for(let y=0;y<=o;y++){let[T,b]=a.grid(y/o,M/l);this.flat[m*2]=T,this.flat[m*2+1]=b;let[_,w]=s(T,b);u[m*2]=_,u[m*2+1]=w,d[m*2]=1-_,d[m*2+1]=w,m++}for(let M=0;M<l;M++)for(let y=0;y<o;y++){let T=M*(o+1)+y,b=T+1,_=T+o+1,w=_+1;f.push(T,_,b,b,_,w)}let x=new yt;x.setAttribute("position",new Rt(h,3)),x.setAttribute("uv",new Rt(u,2)),x.setIndex(f),x.computeVertexNormals(),this.geo=x;let p=new yt;p.setAttribute("position",x.attributes.position),p.setAttribute("normal",x.attributes.normal),p.setAttribute("uv",new Rt(d,2)),p.setIndex(f),r.back.side=Ct,a.mask&&this._mask(r);let g=new Re(x,n[0]),v=new Re(p,n[1]);v.userData.side="back";for(let M of[g,v])M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,M.userData.panel=e.panels[0].id,this.object.add(M),this.pickables.push(M);g.customDepthMaterial=void 0,a.prop&&(this.prop=a.prop(),this.prop&&this.object.add(this.prop.object)),this.apply([0])}_mask(e){let t=document.createElement("canvas");t.width=e.canvas.front.width,t.height=e.canvas.front.height;let n=t.getContext("2d"),s=t.width/e.ext.w;n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.fillStyle="#fff",n.beginPath(),this.die.panels[0].poly.forEach((a,o)=>{let l=(a[0]-e.ext.x0)*s,c=(a[1]-e.ext.y0)*s;o?n.lineTo(l,c):n.moveTo(l,c)}),n.closePath(),n.fill();let r=new cn(t);this.maskTex=r;for(let a of[e.front,e.back])a.alphaMap=r,a.alphaTest=.5,a.needsUpdate=!0}vector(e){return e==="flat"||e==="inside"?[0]:e==="open"?[this.warp.openAt??1]:[1]}windows(){return{steps:3,list:[[0,1]]}}_deform(e,t){let{flat:n,warp:s}=this,r=n.length/2;for(let a=0;a<r;a++){let o=s.deform(n[a*2],n[a*2+1],e);t[a*3]=o[0],t[a*3+1]=o[1],t[a*3+2]=o[2]}}apply(e){this.vec=e;let t=e[0];this._deform(t,this.geo.attributes.position.array),this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals(),this.geo.attributes.normal.needsUpdate=!0,this.prop&&this.prop.apply(t)}bounds(e){let t=this.flat.length/2,n=new Float32Array(t*3);this._deform(e[0],n);let s=new xt,r=new C,a=Math.max(1,Math.floor(t/600));for(let o=0;o<t;o+=a)r.set(n[o*3],n[o*3+1],n[o*3+2]),s.expandByPoint(r);if(this.prop?.box){let o=this.prop.box(e[0]);o&&s.union(o)}return s}dispose(){this.geo.dispose(),this.maskTex?.dispose(),this.prop?.dispose?.()}},Fl={clamp01:gy,smooth:_y};function Sf(i,e,t,n){let s=n/t,r=i-e;return s<1e-5?[i,0]:[e+Math.sin(s*r)/s,-(1-Math.cos(s*r))/s]}var{clamp01:er,smooth:tr}=Fl;function Ui(i,e,t=72){let n=i.map(r=>new he(r[0],r[1])),s=new Re(new Ds(n,t),e);return s.castShadow=!0,s.receiveShadow=!0,s}var Ul=(i,e=6)=>{let t=[];for(let n=0;n<i.length-1;n++){let s=i[Math.max(0,n-1)],r=i[n],a=i[n+1],o=i[Math.min(i.length-1,n+2)];for(let l=0;l<e;l++){let c=l/e,h=(u,d,f,m)=>.5*(2*d+(f-u)*c+(2*u-5*d+4*f-m)*c*c+(3*d-u-3*f+m)*c*c*c);t.push([Math.max(0,h(s[0],r[0],a[0],o[0])),h(s[1],r[1],a[1],o[1])])}}return t.push(i[i.length-1]),t},xy={wine:{r:37,build(){let i=new un({color:"#10231a",roughness:.12,clearcoat:1,clearcoatRoughness:.1}),e=new et({color:"#141416",metalness:.7,roughness:.35}),t=new at;t.add(Ui(Ul([[0,0],[35,0],[37,3],[37,60],[37,190],[35,210],[24,236],[15.5,258],[14,290],[14,310],[15,312],[15,318],[0,318]]),i));let n=Ui([[14.6,262],[14.6,300],[15.6,300],[15.6,319],[0,320]],e);return t.add(n),t},height:320,labelY:30},beer:{r:30,build(){let i=new un({color:"#3a1c07",roughness:.14,clearcoat:1,clearcoatRoughness:.1}),e=new et({color:"#b7b8bb",metalness:1,roughness:.3}),t=new at;return t.add(Ui(Ul([[0,0],[28,0],[30,3],[30,60],[30,120],[28,142],[16,176],[13,200],[13,214],[14.5,216],[14.5,221],[0,221]]),i)),t.add(Ui([[15,214],[15.2,222],[0,224]],e)),t},height:224,labelY:18},jar:{r:37,build(){let i=new un({color:"#d9c7a4",roughness:.2,clearcoat:1,clearcoatRoughness:.08}),e=new et({color:"#17171a",metalness:.7,roughness:.3}),t=new at;return t.add(Ui(Ul([[0,0],[33,0],[37,5],[37,60],[37,100],[33,110],[31,116]]),i)),t.add(Ui([[35,114],[35,128],[34,130],[0,130]],e)),t},height:130,labelY:14},can:{r:33,build(){let i=new et({color:"#d7d8dc",metalness:1,roughness:.28}),e=new at;return e.add(Ui(Ul([[0,3],[24,0],[29,1],[33,10],[33,60],[33,100],[33,104],[27,114],[26.6,115.4],[24.4,112],[0,112]]),i)),e},height:115.4,labelY:10},mug:{r:41,build(){let i=new un({color:"#f4f3ef",roughness:.3,clearcoat:.6}),e=new at;e.add(Ui([[0,0],[37,0],[41,3],[41,95],[40,96],[37.6,96],[37.6,8],[0,7]],i));let t=new wi([new C(0,76,-40),new C(0,82,-60),new C(0,56,-72),new C(0,28,-60),new C(0,22,-40)]),n=new Re(new Ji(t,40,5.5,12),i);return n.castShadow=!0,e.add(n),e},height:96,labelY:0}};function vy({w:i,h:e,container:t="wine",r:n,y:s,shape:r,stock:a}){let o=xy[t],c=(n??o.r)+.5,h=new Ae({bleed:2,safe:3,sides:1,pose:{fold:"stand",open:"stand"},view:{closed:{az:t==="mug"?58:-22,el:t==="mug"?16:8}},meta:{noOpen:!0,unitBoost:.9,closedLabel:"Applied"}}),u=ci(0,0,i,e);r==="round"&&(u=Ni(u,6,6)),r==="oval"&&(u=Al(i/2,e/2,i/2,e/2,64)),h.rootPoly("label",u,{name:"Label",nameIn:"Adhesive",cover:!0}),h.finish();let d=s??o.labelY;return h.warp={nu:120,nv:8,mask:r==="oval"||r==="round",grid:(f,m)=>[f*i,m*e],deform(f,m,x){let p=tr(er(x)),[g,v]=Sf(f,i/2,c,p);return[g,-m,v]},prop(){let f=o.build(),m=new at;return m.add(f),m.position.set(i/2,-(e+d),-c),{object:m,apply(x){let p=tr(er((x-.15)/.55));m.visible=p>.01,m.scale.setScalar(Math.max(.001,p))},box(x){if(x<.5)return null;let p=new xt;return p.min.set(i/2-c,-(e+d),-2*c),p.max.set(i/2+c,-(e+d)+o.height,0),p}}}},h}function wf(i,e,t,n,s,r=56){let a=[];for(let o=0;o<=r;o++){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*e,s+Math.cos(l)*e])}if(i>.5)for(let o=r;o>=0;o--){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*i,s+Math.cos(l)*i])}else a.push([n,s]);return a}var Ef=i=>({up:[0,-Math.cos(i),-Math.sin(i)],face:[0,-Math.sin(i),Math.cos(i)]});function Tf({cx:i,cy:e,beta:t}){return(n,s,r)=>{let a=n-i,o=s-e,l=Math.hypot(a,o),c=Math.atan2(a,o),h=Math.PI/2+(t-Math.PI/2)*r,u=Math.sin(h),d=Math.cos(h),f=c/u,m=l*u*Math.sin(f),x=l*u*Math.cos(f),p=l*d,g=x*u+p*d,v=x*d-p*u;return[i+m,-(e+g),v]}}function yy({topD:i,bottomD:e,height:t,overlap:n=8,kind:s="cup"}){let r=i/2,a=e/2,o=Math.hypot(t,r-a),l=(r-a)/o,c=r/l,h=a/l,u=(2*Math.PI*r+n)/c,d=new Ae({bleed:2,safe:3,sides:1,pose:{fold:Ef(Math.asin(l))},view:{closed:{az:-20,el:20}},meta:{noOpen:!0,closedLabel:"Rolled"}}),f=0,m=0,x=wf(h,c,u,f,m,80);d.rootPoly("wrap",x,{name:s==="cup"?"Cup wrap":"Sleeve",nameIn:"Inside",cover:!0});let p=Math.min(...x.map(b=>b[1])),g=Math.min(...x.map(b=>b[0]));d.finish();let v=-g,M=-p,y=Math.asin(l),T=Tf({cx:f+v,cy:m+M,beta:y});return d.warp={nu:96,nv:12,grid:(b,_)=>{let w=-u/2+b*u,I=h+(c-h)*_;return[f+v+Math.sin(w)*I,m+M+Math.cos(w)*I]},deform:(b,_,w)=>{let I=tr(er(w));return T(b,_,I)},prop(){let b=new at,_=new et({color:"#f4f2ea",roughness:.7,side:tn}),w=new C(0,-Math.cos(y),-Math.sin(y)),I=new C(v,-M,0),R=P=>I.clone().addScaledVector(w,P),N=new ut().setFromUnitVectors(new C(0,0,1),w),U=new Re(new hn(r+.3,1.4,10,96),_);U.position.copy(R(c*Math.cos(y))),U.quaternion.copy(N),b.add(U);let O=new Re(new ii(a,64),_);if(O.position.copy(R(h*Math.cos(y)+6)),O.quaternion.copy(N),b.add(O),s==="sleeve"){let P=t*.5,V=[],q=Q=>Q*Math.tan(y),G=h*Math.cos(y)-P*.25,te=c*Math.cos(y)+P*.7;for(let Q=0;Q<=10;Q++){let ee=G+(te-G)*Q/10;V.push(new he(q(ee)-.6,ee))}let W=new Re(new Ds(V,64),_);W.castShadow=!0,W.quaternion.setFromUnitVectors(new C(0,1,0),w),W.position.copy(I),b.add(W),U.position.copy(R(te)),U.geometry.dispose(),U.geometry=new hn(q(te),1.4,10,96),O.position.copy(R(G)),O.geometry.dispose(),O.geometry=new ii(q(G)-.6,64)}return{object:b,apply(P){b.visible=P>.97}}}},d}function by({h:i=210,topD:e=110}){let t=e/2,n=Math.hypot(i,t),s=t/n,r=(2*Math.PI*t+16)/n,a=new Ae({bleed:3,safe:4,sides:1,pose:{fold:Ef(Math.asin(s))},view:{closed:{az:-22,el:16}},meta:{noOpen:!0,closedLabel:"Rolled"}}),o=wf(0,n,r,0,0,72);a.rootPoly("cone",o,{name:"Cone",nameIn:"Inside",cover:!0});let l=Math.min(...o.map(m=>m[1])),c=Math.min(...o.map(m=>m[0]));a.finish();let h=-c,u=-l,d=Math.asin(s),f=Tf({cx:h,cy:u,beta:d});return a.warp={nu:96,nv:14,grid:(m,x)=>{let p=-r/2+m*r,g=.5+(n-.5)*x;return[h+Math.sin(p)*g,u+Math.cos(p)*g]},deform:(m,x,p)=>f(m,x,tr(er(p))),prop(){let m=new at,x=new et({color:"#2a2b30",metalness:.9,roughness:.35}),p=new C(0,-Math.cos(d),-Math.sin(d)),g=new C(h,-u,0),v=new ut().setFromUnitVectors(new C(0,0,1),p),M=n*Math.cos(d)*.62,y=M*Math.tan(d)+1,T=new Re(new hn(y,1.2,8,72),x);T.position.copy(g).addScaledVector(p,M),T.quaternion.copy(v),T.castShadow=!0,m.add(T);let b=new Re(new hn(y*1.05,1.2,8,72),x);b.position.copy(g).addScaledVector(p,-8),b.quaternion.copy(v),b.castShadow=!0,m.add(b);for(let _=0;_<3;_++){let w=_/3*Math.PI*2+.5,I=P=>new C(Math.cos(w)*P,Math.sin(w)*P,0).applyQuaternion(v),R=T.position.clone().add(I(y)),N=b.position.clone().add(I(y*1.05)),U=R.distanceTo(N),O=new Re(new Yi(1.1,1.1,U,8),x);O.position.copy(R).add(N).multiplyScalar(.5),O.quaternion.setFromUnitVectors(new C(0,1,0),R.clone().sub(N).normalize()),O.castShadow=!0,m.add(O)}return{object:m,apply(_){m.visible=_>.9},box(_){if(_<.5)return null;let w=new xt().setFromObject(b);return w.expandByObject(T),w}}}},a}function My({L:i,W:e,H:t}){let n=e/2,s=t/2,r=Math.PI*(3*(n+s)-Math.sqrt((3*n+s)*(n+3*s))),a=12,o=e*.2,l=r,c=i+o*2,h=new Ae({bleed:3,safe:4,pose:{fold:"keep"},view:{closed:{az:-34,el:26}},meta:{noOpen:!0}}),u=48,d=p=>Math.abs(Math.sin(p/l*Math.PI*2)),f=[],m=[];for(let p=0;p<=u;p++){let g=p/u*l;f.push([g,o*(1-d(g))]),m.push([g,c-o*(1-d(g))])}let x=[...f,[l+a,o+6],[l+a,c-o-6],...m.reverse()];h.rootPoly("body",x,{name:"Body",nameIn:"Inside",cover:!0});for(let p=0;p<u;p++){let g=p/u*l,v=(p+1)/u*l;h.perf([g,o+o*d(g)],[v,o+o*d(v)],"score"),h.perf([g,c-o-o*d(g)],[v,c-o-o*d(v)],"score")}return h.finish(),h.warp={nu:120,nv:72,mask:!0,grid:(p,g)=>[p*(l+a),g*c],deform(p,g,v){let M=tr(er(v/.62)),y=tr(er((v-.5)/.5)),T=Math.min(p,l)/l*Math.PI*2-Math.PI/2,b=g-c/2,_=[p-l/2,-b,0],w=i/2+o*.5,I=Math.max(0,Math.abs(b)-w),R=(Math.abs(b)>w?w-I*.9:Math.abs(b))*Math.sign(b),N=Math.min(1,Math.abs(R)/w),U=1-y*(1-Math.pow(Math.max(0,1-N*N),.6)),O=I>0?1-Math.min(.4,I/o)*y:1,P=[n*Math.cos(T)*O,-R,-s*U*Math.sin(T)*O-s];return[_[0]+(P[0]-_[0])*M,_[1]+(P[1]-_[1])*M,_[2]+(P[2]-_[2])*M]}},h}var zh={};pi(zh,{aBoard:()=>Ey,poster:()=>Sy,rollup:()=>wy});var{clamp01:I1,smooth:Bh}=Fl;function Sy({w:i,h:e,eyelets:t=0,name:n="Poster",stand:s=!0}){let r=[];if(t){let o=Math.max(2,Math.round(i/t));for(let l=0;l<=o;l++){let c=20+(i-40)*l/o;r.push(Vn(c,20,6,18),Vn(c,e-20,6,18))}}let a=new Ae({bleed:t?0:3,safe:t?30:5,pose:{fold:"stand",open:"stand",tilt:s?-5:0},view:{closed:{az:-26,el:8}},meta:{noOpen:!0,closedLabel:"Standing"}});return a.root("sheet",0,0,i,e,{name:n,nameIn:"Back",cover:!0,holes:r}),a.finish()}function wy({w:i=850,h:e=2e3,tube:t=120}){let n=new Ae({bleed:3,safe:25,sides:1,pose:{fold:"stand"},view:{closed:{az:-28,el:6}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("banner",0,0,i,e,{name:"Banner",nameIn:"Back",cover:!0}),n.finish(),n.warp={nu:4,nv:96,grid:(s,r)=>[s*i,r*e],deform(s,r,a){let o=a<.5?1-Bh(a*2):Bh((a-.5)*2),l=e-r-e*(1-o);return[s,Math.max(0,l)-e,0]},prop(){let s=new at,r=new et({color:"#c3c5c9",metalness:1,roughness:.3}),a=new et({color:"#17181b",metalness:.4,roughness:.5}),o=new Re(new $i(40,i+20,6,20),r);o.rotation.z=Math.PI/2,o.position.set(i/2,-e+6,0),o.castShadow=!0,s.add(o);for(let h of[-1,1]){let u=new Re(new en(50,12,360),a);u.position.set(i/2+h*(i/2-60),-e-34,0),u.castShadow=!0,s.add(u)}let l=new Re(new Yi(9,9,e,12),r);l.position.set(i/2,-e/2,-22),l.castShadow=!0,s.add(l);let c=new Re(new en(i+6,22,14),r);return c.castShadow=!0,s.add(c),{object:s,apply(h){let u=h<.5?0:Bh((h-.5)*2);s.visible=h>.02,l.scale.y=Math.max(.01,u),l.position.y=-e+e*u/2,c.position.set(i/2,-e+e*u,0)},box(h){if(h<.5)return null;let u=new xt;return u.min.set(-20,-e-42,-190),u.max.set(i+20,12,190),u}}}},n}function Ey({w:i,h:e,t=22}){let s=148*Math.PI/180,r=[0,-Math.cos(s),-Math.sin(s)],a=[0,1+r[1],r[2]],o=Math.hypot(a[1],a[2]),l=[0,-a[1]/o,-a[2]/o],c=new Ae({bleed:3,safe:15,pose:{fold:{up:l,face:[0,-Math.sin(s),Math.cos(s)]}},view:{closed:{az:-30,el:10}},meta:{noOpen:!0,thick:t,edge:"#b6b8bd",closedLabel:"Standing"}});return c.root("rear",0,0,i,e,{name:"Rear poster",nameIn:"Frame back"}),c.add("rear","bottom","front",{d:e,angle:148,seq:1,name:"Front poster",nameIn:"Frame back",cover:!0,bead:!1}),c.finish()}var as={cut:"#ff2d87",crease:"#16a7ff",mountain:"#ffb020",perf:"#16d67b",safe:"rgba(0, 200, 120, 0.9)",glue:"rgba(0, 81, 255, 0.10)",label:"#0051FF"};function Af(i,e,t=7){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=t,o=()=>(a=a*16807%2147483647,(a&65535)/65535);for(let l=0;l<r.data.length;l+=4){let c=128+(o()-.5)*e;r.data[l]=r.data[l+1]=r.data[l+2]=c,r.data[l+3]=255}return s.putImageData(r,0,0),n}function Ty(i,e){let t=document.createElement("canvas");t.width=128,t.height=64;let n=t.getContext("2d");n.fillStyle="#3a2c1b",n.fillRect(0,0,128,64),n.fillStyle=e,n.fillRect(0,0,128,9),n.fillRect(0,55,128,9),n.strokeStyle=i,n.lineWidth=7,n.beginPath();for(let r=0;r<=128;r+=2){let a=32+Math.sin(r/128*Math.PI*2)*21;r===0?n.moveTo(r,a):n.lineTo(r,a)}n.stroke();let s=new cn(t);return s.wrapS=ws,s.colorSpace=bt,s.anisotropy=4,s}var Ol=class{constructor(e,t={}){this.die=e,this.stockId=t.stock,this.finishId=t.finish||"none",this.stock=is[t.stock]||is["silk-170"],this.maxTex=t.maxTex||4096,this.anisotropy=t.anisotropy||8,this.detail=t.detail||"blank";let n=e.bleed;this.ext={x0:-n,y0:-n,w:e.w+2*n,h:e.h+2*n},this.opts={lines:!1,safe:!1,labels:!1,...t.overlays},this.art={front:null,back:null},this.orient={},this.uvOf=(s,r)=>[(s-this.ext.x0)/this.ext.w,1-(r-this.ext.y0)/this.ext.h],this._materials(),this._resize(this.detail==="art"?this.maxTex:Math.min(this.maxTex,2048)),this._bump(),this.compose()}_resize(e){let{w:t,h:n}=this.ext,s=e/Math.max(t,n);this.pxPerMm=Math.min(s,16);let r=Math.max(64,Math.round(t*this.pxPerMm)),a=Math.max(64,Math.round(n*this.pxPerMm));if(!(this.canvas&&this.canvas.front.width===r&&this.canvas.front.height===a)){this.canvas={front:document.createElement("canvas"),back:document.createElement("canvas")},this.layer={front:document.createElement("canvas"),back:document.createElement("canvas")};for(let o of["front","back"]){this.canvas[o].width=this.layer[o].width=r,this.canvas[o].height=this.layer[o].height=a;let l=this.tex?.[o];l&&l.dispose()}this.tex={front:this._canvasTexture(this.canvas.front),back:this._canvasTexture(this.canvas.back)},this.front.map=this.tex.front,this.back.map=this.tex.back,this.front.needsUpdate=!0,this.back.needsUpdate=!0}}_canvasTexture(e){let t=new cn(e);return t.colorSpace=bt,t.anisotropy=this.anisotropy,t.generateMipmaps=!0,t.minFilter=Cn,t}_materials(){let e=this.stock,t=Xs[this.finishId]||Xs.none,n=t.rough??e.rough;this.front=new un({color:16777215,roughness:n,metalness:0,clearcoat:t.clearcoat,clearcoatRoughness:.18,envMapIntensity:1}),this.back=new un({color:16777215,roughness:Math.max(e.rough,.6),metalness:0}),this.edge=new et({color:e.dark?"#26262a":e.core||e.color,roughness:.85}),e.kind==="corrugated"&&(this.fluteTex=Ty(e.core||"#c9a97c",e.color),this.edge.map=this.fluteTex,this.edge.color.set("#ffffff")),this.materials=[this.front,this.back,this.edge]}_bump(){let{w:e,h:t}=this.ext,n=Math.min(1536/Math.max(e,t),8),s=document.createElement("canvas");s.width=Math.max(64,Math.round(e*n)),s.height=Math.max(64,Math.round(t*n));let r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s.width,s.height);let a=this.stock;if((a.kind!=="board"||a.rough>.7)&&(r.globalAlpha=a.rough>.8?.55:.22,r.fillStyle=r.createPattern(Af(256,a.rough>.8?90:40),"repeat"),r.fillRect(0,0,s.width,s.height),r.globalAlpha=1),r.save(),r.scale(n,n),r.translate(-this.ext.x0,-this.ext.y0),a.kind==="corrugated"){r.strokeStyle="rgba(0,0,0,0.05)",r.lineWidth=a.flute*.42;for(let c=0;c<this.die.h+10;c+=a.flute)r.beginPath(),r.moveTo(-5,c),r.lineTo(this.die.w+5,c),r.stroke()}let o=Math.max(.45,2.2/n,(a.mm||.2)*.8);r.lineCap="butt";for(let c of this.die.creases)r.strokeStyle="rgba(0,0,0,0.33)",r.lineWidth=o*2.2,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke(),r.strokeStyle="rgba(0,0,0,0.6)",r.lineWidth=o,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke();r.restore(),this.bumpTex&&this.bumpTex.dispose();let l=new cn(s);l.anisotropy=4,this.bumpTex=l,this.front.bumpMap=l,this.front.bumpScale=1.1,this.back.bumpMap=l,this.back.bumpScale=-1.1,this.front.needsUpdate=!0,this.back.needsUpdate=!0}setArt(e,t){if(this.art[e]=t,t&&this.detail!=="art"){this.detail="art",this._resize(this.maxTex),this.compose("front"),this.compose("back");return}this.compose(e)}setOverlays(e){Object.assign(this.opts,e),this.compose()}compose(e){if(!e){this.compose("front"),this.compose("back");return}let t=this.canvas[e],n=t.getContext("2d"),s=this.pxPerMm,r=this.stock;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation="source-over",n.globalAlpha=1,n.fillStyle=e==="back"&&r.inside?r.inside:r.color,n.fillRect(0,0,t.width,t.height),(r.kind==="kraft"||r.kind==="corrugated"&&r.multiply)&&(n.globalAlpha=.09,n.globalCompositeOperation="multiply",n.fillStyle=n.createPattern(Af(256,150,11),"repeat"),n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="source-over",n.globalAlpha=1);let a=this.art[e];if(a){let o=this.layer[e],l=o.getContext("2d");l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,o.width,o.height),a(l,s,this.ext,e),n.globalCompositeOperation=r.multiply?"multiply":"source-over",n.drawImage(o,0,0),n.globalCompositeOperation="source-over"}this._overlays(n,e),this.tex[e]&&(this.tex[e].needsUpdate=!0),this.onChange?.()}_toSheet(e,t){let n=this.pxPerMm;t==="back"?e.setTransform(-n,0,0,n,this.ext.w*n+this.ext.x0*n,-this.ext.y0*n):e.setTransform(n,0,0,n,-this.ext.x0*n,-this.ext.y0*n)}_overlays(e,t){let{die:n,opts:s}=this,r=this.pxPerMm,a=Math.max(.2,1.6/r),o=this.stock.dark;if(s.lines){this._toSheet(e,t),e.lineCap="round",e.fillStyle=as.glue;for(let c of n.panels)c.role==="glue"&&(e.beginPath(),c.poly.forEach((h,u)=>u?e.lineTo(h[0],h[1]):e.moveTo(h[0],h[1])),e.closePath(),e.fill());e.setLineDash([]),e.strokeStyle=as.cut,e.lineWidth=a*1.15,e.beginPath();for(let c of n.cuts)e.moveTo(c[0][0],c[0][1]),e.lineTo(c[1][0],c[1][1]);e.stroke();let l=Math.max(1.6,5/r);for(let c of n.creases)e.setLineDash([l*1.6,l]),e.strokeStyle=c.mountain?as.mountain:as.crease,e.lineWidth=a*1.1,e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.strokeStyle=as.perf,e.setLineDash([l*.5,l*.7]);for(let c of[...n.perfs,...n.kiss])e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.setLineDash([])}if(s.safe){this._toSheet(e,t),e.strokeStyle=as.safe,e.lineWidth=a,e.setLineDash([Math.max(1,3/r),Math.max(1,3/r)]);for(let l of n.panels){if(l.role!=="main"||l.area<300)continue;let c=l.bounds,h=n.safe;c.w<h*3||c.h<h*3||e.strokeRect(c.x0+h,c.y0+h,c.w-2*h,c.h-2*h)}e.setLineDash([])}if(s.labels){e.setTransform(1,0,0,1,0,0);let l=this.ext.w;for(let c of n.panels){if(c.role==="hidden")continue;let h=c.bounds;if(Math.min(h.w,h.h)<8)continue;let u=t==="back"?l-(c.centroid[0]-this.ext.x0):c.centroid[0]-this.ext.x0,d=c.centroid[1]-this.ext.y0,f=t==="back"&&c.nameIn||c.name||"",m=this.orient[c.id]?.[t]||0,p=m%180===0?h.w:h.h,g=Math.min(Math.max(2.4,Math.min(h.w,h.h)*.075),p/Math.max(4,f.length*.62));e.save(),e.translate(u*r,d*r),e.rotate(m*Math.PI/180),e.font=`500 ${g*r}px Outfit, Figtree, Arial, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=o?"#ffffff":c.role==="glue"?"#7a8aa8":as.label,e.globalAlpha=c.role==="main"?.9:.6,e.fillText(f.toUpperCase(),0,0),e.restore()}}e.setTransform(1,0,0,1,0,0)}dispose(){this.tex?.front.dispose(),this.tex?.back.dispose(),this.bumpTex?.dispose(),this.fluteTex?.dispose(),this.front.dispose(),this.back.dispose(),this.edge.dispose()}};var da=Math.PI/180,Hh=7,kl=new ke,Rf=new ke,Cf=new ke,os=new ut,ui=new C,Bl=new C;function Ay(i,e){let t=i.map(a=>new he(a[0],a[1])),n=(e||[]).map(a=>a.map(o=>new he(o[0],o[1])));Ei.isClockWise(t)&&t.reverse();for(let a of n)Ei.isClockWise(a)||a.reverse();let s=Ei.triangulateShape(t,n),r=[...t];for(let a of n)r.push(...a);return{pts:r,tris:s}}function Ry(i,e,t,n=8){let{pts:s,tris:r}=Ay(i.poly,i.holes),a=-(i.zOff||0),o=[],l=[],c=[],h=[],u=[],d=[],f=s.length;for(let g of s){o.push(g.x,-g.y,a),l.push(0,0,1);let[v,M]=t(g.x,g.y);c.push(v,M)}for(let g of s){o.push(g.x,-g.y,a-e),l.push(0,0,-1);let[v,M]=t(g.x,g.y);c.push(1-v,M)}for(let g of r){let[v,M,y]=g,T=s[v].x,b=-s[v].y;(s[M].x-T)*(-s[y].y-b)-(-s[M].y-b)*(s[y].x-T)<0&&([M,y]=[y,M]),h.push(v,M,y),u.push(y+f,M+f,v+f)}let m=g=>{let v=0,y=Ei.area(g.map(T=>new he(T[0],-T[1])))>=0?1:-1;for(let T=0;T<g.length;T++){let b=g[T],_=g[(T+1)%g.length],w=_[0]-b[0],I=-(_[1]-b[1]),R=Math.hypot(w,I);if(R<1e-6)continue;let N=I/R*y,U=-w/R*y,O=o.length/3;o.push(b[0],-b[1],a,_[0],-_[1],a,_[0],-_[1],a-e,b[0],-b[1],a-e);for(let q=0;q<4;q++)l.push(N,U,0);let P=v/n,V=(v+R)/n;c.push(P,1,V,1,V,0,P,0),v+=R,y>0?d.push(O,O+3,O+2,O,O+2,O+1):d.push(O,O+2,O+3,O,O+1,O+2)}};m(i.poly);for(let g of i.holes||[])m(g);let x=new yt;x.setAttribute("position",new Ye(o,3)),x.setAttribute("normal",new Ye(l,3)),x.setAttribute("uv",new Ye(c,2));let p=[...h,...u,...d];return x.setIndex(p),x.addGroup(0,h.length,0),x.addGroup(h.length,u.length,1),x.addGroup(h.length+u.length,d.length,2),x.computeBoundingSphere(),x}var zl=class{constructor(e,{thickness:t,materials:n,uvOf:s,flute:r,leafMaterials:a,leafT:o}){this.kind="fold",this.die=e,this.t=t,this.materials=n,this.uvOf=s,this.object=new at,this.object.name="fold-model",this.nodes=[],this.byId={},this.pickables=[],this.flute=r,this.channels=[],this.leafMaterials=a,this.leafT=o,this.outlineMat=new Ps({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}),this._build(),this.apply(this.vector("flat"))}_build(){let{die:e,t}=this;for(let n of e.panels){let s=new at;s.matrixAutoUpdate=!1;let r=n.parent?this.byId[n.parent]:null;(r?r.group:this.object).add(s);let a=n.uvRect?(d,f)=>[(d-n.uvRect.x)/n.uvRect.w,1-(f-n.uvRect.y)/n.uvRect.h]:this.uvOf,o=n.role==="leaf"&&!n.coverLeaf&&this.leafMaterials?this.leafMaterials(n):this.materials,l=n.role==="leaf"&&this.leafT?this.leafT:t,c=new Re(Ry(n,l,a,this.flute?this.flute:8),o);c.castShadow=!0,c.receiveShadow=!0,c.userData.panel=n.id,s.add(c),this.pickables.push(c),n.outline?.length&&s.add(this._outline(n));let h={panel:n,group:s,mesh:c,parent:r,angle:0,world:new ke};this.nodes.push(h),this.byId[n.id]=h,n.hinge&&this._hinge(h),n.mount&&this._mount(h);let u=Math.max(1,Math.floor(n.poly.length/14));h.sample=n.poly.filter((d,f)=>f%u===0).map(d=>new C(d[0],-d[1],0))}this.steps=[...new Set(e.panels.filter(n=>n.seq).map(n=>n.seq))].sort((n,s)=>n-s)}_outline(e){let t=Math.max(.04,this.t*.2),n=[];for(let[r,a]of e.outline)n.push(r[0],-r[1],t,a[0],-a[1],t),n.push(r[0],-r[1],-this.t-t,a[0],-a[1],-this.t-t);let s=new yt;return s.setAttribute("position",new Ye(n,3)),new Tr(s,this.outlineMat)}_hinge(e){let{t}=this,n=e.panel,s=new C(n.hinge.a[0],-n.hinge.a[1],0),r=new C(n.hinge.b[0],-n.hinge.b[1],0),a=r.clone().sub(s).normalize(),o=new C(n.centroid[0],-n.centroid[1],0).sub(s);new C().crossVectors(a,o).z>0&&a.negate();let l=n.valley??(n.angle??0)>=0,c=(n.gap||0)*t+(n.lift||0),h=n.pivotZ!==void 0?n.pivotZ:l?-t-c/2:c/2,u=s.clone();if(u.z=h,e.axis=a,e.pivot=u,e.valley=l,e.A=s,e.B=r,e.pre=new ke().makeTranslation(u.x,u.y,u.z),e.post=new ke().makeTranslation(-u.x,-u.y,-u.z),n.bead===!1||n.perfed)return;let d=this._bead(e);d&&(e.parent?e.parent.group:this.object).add(d)}_bead(e){let t=Hh,n=t+1,s=n*2*2+8,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*2),l=[],c=[],h=[];for(let T=0;T<t;T++){let b=T*2;l.push(b,b+2,b+3,b,b+3,b+1);let _=n*2+T*2;c.push(_,_+3,_+2,_,_+1,_+3)}let u=new yt;u.setAttribute("position",new Rt(r,3)),u.setAttribute("normal",new Rt(a,3)),u.setAttribute("uv",new Rt(o,2)),u.setIndex([...l,...c,...h]);let d=e.valley?0:1,f=e.valley?1:0;u.addGroup(0,l.length,d),u.addGroup(l.length,c.length,f);let m=new Re(u,this.materials);m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!1,m.matrixAutoUpdate=!1,m.visible=!1,e.bead=m;let x=e.panel,[p,g]=this.uvOf(x.hinge.a[0],x.hinge.a[1]),[v,M]=this.uvOf(x.hinge.b[0],x.hinge.b[1]),y=(T,b,_)=>{for(let w=0;w<n;w++){let I=T+w*2;o[I*2]=b?1-p:p,o[I*2+1]=g,o[(I+1)*2]=b?1-v:v,o[(I+1)*2+1]=M}};return y(0,!e.valley),y(n*2,e.valley),m}_updateBead(e,t){let n=e.bead;if(!n)return;if(Math.abs(t)<.05||this.t<.02){n.visible=!1;return}n.visible=!0;let{t:s}=this,{A:r,B:a,pivot:o,axis:l,valley:c}=e,h=t*da,u=n.geometry,d=u.attributes.position.array,f=u.attributes.normal.array,m=Hh+1,x=c?1:-1,p=c?0:-s,g=c?-s:0,v=p-o.z,M=g-o.z,y=(T,b,_)=>{for(let w=0;w<m;w++){let I=h*w/Hh;os.setFromAxisAngle(l,I),ui.set(0,0,b).applyQuaternion(os),Bl.set(0,0,x*_).applyQuaternion(os);let R=T+w*2;d[R*3]=r.x+ui.x,d[R*3+1]=r.y+ui.y,d[R*3+2]=o.z+ui.z,d[(R+1)*3]=a.x+ui.x,d[(R+1)*3+1]=a.y+ui.y,d[(R+1)*3+2]=o.z+ui.z,f[R*3]=f[(R+1)*3]=Bl.x,f[R*3+1]=f[(R+1)*3+1]=Bl.y,f[R*3+2]=f[(R+1)*3+2]=Bl.z}};y(0,v,1),y(m*2,M,-1),u.attributes.position.needsUpdate=!0,u.attributes.normal.needsUpdate=!0}_mount(e){let t=e.panel,n=t.mount;e.mountTo={pos:new C(...n.pos||[0,0,0]),q:new ut().setFromEuler(new Qt((n.rot?.[0]||0)*da,(n.rot?.[1]||0)*da,(n.rot?.[2]||0)*da)),center:new C(...n.center||[t.centroid[0],-t.centroid[1],0]),arc:n.arc||0,slide:n.slide?new C(...n.slide):null}}vector(e){return[...this.nodes.map(n=>{let s=n.panel;return s.mount?e==="flat"||e==="inside"?0:e==="open"&&s.mount.openAt!==void 0?s.mount.openAt:1:!s.hinge||e==="flat"||e==="inside"?0:e==="open"?s.open??s.angle:s.angle}),...this.channels.map(n=>n.value(e))]}windows(e,t,n){let s=new Set,r=[...this.nodes.map(h=>h.panel.seq||1),...this.channels.map(h=>h.seq||1)];r.forEach((h,u)=>{Math.abs(e[u]-t[u])>.01&&s.add(h)});let a=[...s].sort((h,u)=>n>0?h-u:u-h),o=Math.max(1,a.length),l=o===1?1:Math.min(1,1.5/o),c=h=>o===1?0:h*(1-l)/(o-1);return{steps:o,list:r.map(h=>{let u=a.indexOf(h);return u<0?[0,1]:[c(u),c(u)+l]})}}apply(e){this.vec=e;for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t],s=e[t];if(n.axis)os.setFromAxisAngle(n.axis,s*da),kl.makeRotationFromQuaternion(os),n.group.matrix.copy(n.pre).multiply(kl).multiply(n.post),n.group.matrixWorldNeedsUpdate=!0,this._updateBead(n,s);else if(n.mountTo){let r=n.mountTo,a=r.center,o=r.slide?Math.min(1,s/.55):s,l=r.slide?Math.max(0,(s-.55)/.45):0;os.identity().slerp(r.q,o),kl.makeRotationFromQuaternion(os),Rf.makeTranslation(-a.x,-a.y,-a.z);let c=Math.sin(Math.PI*o)*r.arc,h=r.slide?r.slide.x*(1-l):0,u=r.slide?r.slide.y*(1-l):0,d=r.slide?r.slide.z*(1-l):0,f=ts.lerp(a.x,r.pos.x+h,o),m=ts.lerp(a.y,r.pos.y+u,o),x=ts.lerp(a.z,r.pos.z+d,o)-c;Cf.makeTranslation(f,m,x),n.group.matrix.copy(Cf).multiply(kl).multiply(Rf),n.group.matrixWorldNeedsUpdate=!0}}this.channels.forEach((t,n)=>t.apply(e[this.nodes.length+n]))}bounds(e){let t=this.vec;this.apply(e);let n=new xt,s=this.t;for(let r of this.nodes){r.world.copy(r.group.matrix),r.parent&&r.world.premultiply(r.parent.world);let a=-(r.panel.zOff||0);for(let o of r.sample)for(let l of[a,a-s])ui.set(o.x,o.y,l).applyMatrix4(r.world),n.expandByPoint(ui)}for(let r of this.extraBounds||[])n.union(r(e));return this.apply(t),n}panelMatrix(e,t){let n=this.vec;this.apply(t);let s=[],r=this.byId[e];for(;r;)s.unshift(r),r=r.parent;let a=new ke;for(let o of s)a.multiply(o.group.matrix);return this.apply(n),a}dispose(){this.object.traverse(e=>{e.geometry&&e.geometry.dispose()})}};var If=()=>new et({color:"#c9cacd",metalness:1,roughness:.32}),fa=i=>i==="flat"||i==="inside"?0:1;function Pf(i,e,t,n=80){let s=new wi(i,!1,"catmullrom",.5),r=new Re(new Ji(s,n,e,8,!1),t);return r.castShadow=!0,r}function Lf(i,e,t){let n=i.t,s=i.nodes[0];for(let r of e.extras){let a=r.panel?i.byId[r.panel]:s;if(r.type==="stack"){let o=new at;a.group.add(o);let l=s.panel.centroid,c=[],h=4,u=()=>(h=h*16807%2147483647,h%2e3/1e3-1);for(let m=0;m<r.count;m++){let x=new Re(s.mesh.geometry,i.materials);x.castShadow=!0,x.receiveShadow=!0;let p=new at;p.position.set(l[0],-l[1],0),x.position.set(-l[0],l[1],0),p.add(x),o.add(p),c.push({piv:p,dx:u()*r.spread,dy:u()*r.spread,rz:u()*.022,i:m})}let d=Math.max(n*1.02,.01),f=i.channels.length;i.channels.push({seq:1,value:fa,apply(m){o.visible=m>.01;for(let x of c)x.piv.position.set(l[0]+x.dx*m,-l[1]+x.dy*m,-(x.i+1)*d),x.piv.rotation.z=x.rz*m}}),i.extraBounds=i.extraBounds||[],i.extraBounds.push(m=>{let x=m[i.nodes.length+f]??0,p=new xt;return p.min.set(0,-e.h,-(r.count+1)*d*(x>.01?1:0)),p.max.set(e.w,0,0),p})}else if(r.type==="string"){let[o,l]=r.at,c=r.len,h=new et({color:r.color||"#d8cdb8",roughness:.9}),u=.6,d=[[o,-l,-n-.2],[o,-l,u],[o+c*.1,-l+c*.12,u+.2],[o+c*.34,-l+c*.42,u+.3],[o+c*.3,-l+c*.66,u+.3],[o+c*.02,-l+c*.62,u+.3],[o-c*.2,-l+c*.44,u+.25],[o-c*.06,-l+c*.14,u+.2],[o,-l,u]].map(m=>new C(...m)),f=Pf(d,Math.max(.35,c*.005),h);a.group.add(f),i.channels.push({seq:1,value:fa,apply:m=>f.visible=m>.5})}else if(r.type==="rope"){let l=a.panel.bounds,c=l.x0+l.w/2,h=-l.y0,u=r.span/2,d=r.radius||Math.max(1.8,r.width*.0075),f=new et({color:r.color||"#1b1b1d",roughness:.8}),m=2,x=r.tilt??0,p=[[c-u,h-34,m*0-n-1],[c-u,h-18,m],[c-u*1.02,h+r.drop*.34,m+x*.4],[c-u*.72,h+r.drop*.82,m+x*.8],[c,h+r.drop,m+x],[c+u*.72,h+r.drop*.82,m+x*.8],[c+u*1.02,h+r.drop*.34,m+x*.4],[c+u,h-18,m],[c+u,h-34,-n-1]].map(y=>new C(...y)),g=Pf(p,d,f,96),v=new at;v.position.set(c,h,0),g.position.set(-c,-h,0),v.add(g),a.group.add(v);let M=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(y=>{let T=new xt;return(y[i.nodes.length+M]??0)>.5&&(T.min.set(c-u,h,-2),T.max.set(c+u,h+r.drop,2)),T});for(let y of[-u,u]){let T=new Re(new hn(d*1.9,d*.5,10,28),If());T.position.set(c+y,h-26,.5),a.group.add(T)}i.channels.push({seq:8,value:fa,apply(y){v.visible=y>.02,v.scale.set(1,Math.max(.02,y),1)}})}else if(r.type==="film"){let o=r.rect,l=new si(o.w+6,o.h+6),c=new Re(l,new un({color:"#ffffff",transparent:!0,opacity:.22,roughness:.12,side:tn,depthWrite:!1}));c.position.set(o.x+o.w/2,-(o.y+o.h/2),-n-.03),a.group.add(c)}else if(r.type==="staples"){let o=If();for(let l of r.ys){let c=new $i(.28,r.len,4,8),h=new Re(c,o);h.position.set(r.x,-l,.08),h.castShadow=!0,a.group.add(h)}}else if(r.type==="wire"){let o=new et({color:r.color||"#16161a",metalness:.8,roughness:.35}),[l,c]=r.a,[h,u]=r.b,d=Math.max(2,Math.floor(Math.hypot(h-l,u-c)/r.pitch)),f=r.r,m=new hn(f,Math.max(.32,f*.075),8,32),x=new Xi(m,o,d*2),p=new Et,g=Math.abs(u-c)<Math.abs(h-l);for(let v=0;v<d;v++){let M=(v+.5)/d;for(let y=0;y<2;y++){let T=y?r.pitch*.16:-r.pitch*.16;p.position.set(l+(h-l)*M+(g?T:0)+(r.ox||0),-(c+(u-c)*M+(g?0:T)+(r.oy||0)),r.z??-r.h/2),p.rotation.set(0,g?Math.PI/2:0,0),p.rotation.set(g?0:Math.PI/2,g?Math.PI/2:0,0),p.updateMatrix(),x.setMatrixAt(v*2+y,p.matrix)}}x.castShadow=!0,x.frustumCulled=!1,a.group.add(x),i.channels.push({seq:1,value:r.always?()=>1:fa,apply:v=>x.visible=v>.5})}else if(r.type==="block"){let o=new Re(new en(r.size[0],r.size[1],r.size[2]),new et({color:r.color||"#d8d4ca",roughness:.75}));o.castShadow=!0,o.position.set(r.pos[0],r.pos[1],r.pos[2]),a.group.add(o);let l=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(c=>{let h=new xt;return(c[i.nodes.length+l]??0)>.5&&(h.min.set(r.pos[0]-r.size[0]/2,r.pos[1]-r.size[1]/2,r.pos[2]-r.size[2]/2),h.max.set(r.pos[0]+r.size[0]/2,r.pos[1]+r.size[1]/2,r.pos[2]+r.size[2]/2)),h}),i.channels.push({seq:r.seq||3,value:fa,apply(c){o.visible=c>.01,o.position.x=r.pos[0]+(1-c)*(r.size[0]*1.2)}})}else if(r.type==="insert"){let l=a.panel.bounds,c=new Re(new en(r.size[0],r.size[1],Math.max(.3,n)),new et({color:"#fbfaf6",roughness:.65}));c.castShadow=!0,c.receiveShadow=!0;let h=l.x0+l.w/2,u=-(l.y0+l.h/2);c.position.set(h,u,-n-(r.z??.4)),a.group.add(c),i.channels.push({seq:9,value:d=>d==="open"?1:0,apply(d){c.visible=d>.01,c.position.y=u-(r.at==="pocket"?(l.h-r.size[1])/2*(1-d)*-1+(l.h-r.size[1])/2:0)+(r.rise||0)*d}})}else r.type==="custom"&&r.build(i,a,t)}}var Cy={...Ih,...Ph,...Dh,...Nh,...Fh,...Oh,...kh,...zh};function Iy(i,e){return i.sizes.find(t=>t.id===e)||i.sizes.find(t=>t.id===i.def)||i.sizes[0]}function Gl(i,e,t={}){let n=El[i];if(!n)throw new Error(`Unknown format ${i}`);let s=Iy(n,e),r=t.stock&&n.stocks.includes(t.stock)?t.stock:n.stocks[0],a=is[r],o=t.finish&&n.finishes.includes(t.finish)?t.finish:n.finishes[0],l={...s.p};n.pageOptions&&(l.pages=t.pages&&n.pageOptions.includes(+t.pages)?+t.pages:n.defPages),"L"in l&&l.t===void 0&&(l.t=a.mm);let c=Cy[n.tpl];if(!c)throw new Error(`Unknown template ${n.tpl}`);let h=c(l);return{format:n,size:s,stockId:r,finishId:o,stock:a,die:h,params:l}}var Hl=class{constructor(){this.edge=new et({color:"#efece4",roughness:.9}),this.pages=new Map,this.textures=new Map,this.blank=new et({color:"#fbfaf6",roughness:.72})}material(e){return e?(this.pages.has(e)||this.pages.set(e,new et({color:"#fbfaf6",roughness:.72})),this.pages.get(e)):this.blank}setPage(e,t){let n=this.material(e),s=this.textures.get(e);if(s&&s.dispose(),!t)n.map=null,n.color.set("#fbfaf6");else{let r=new cn(t);r.colorSpace=bt,r.anisotropy=8,this.textures.set(e,r),n.map=r,n.color.set("#ffffff")}n.needsUpdate=!0}dispose(){for(let e of this.textures.values())e.dispose();for(let e of this.pages.values())e.dispose();this.edge.dispose(),this.blank.dispose()}};function Df(i,{surface:e,pages:t}){let{die:n,stock:s}=i,r=Math.max(n.meta.thick||0,s.mm,Math.max(n.w,n.h)*28e-5);if(n.meta.edge&&e.edge.color.set(n.meta.edge),n.warp)return new Nl(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,surface:e});let a=n.meta.leafT,o=new zl(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,flute:s.flute,leafT:a,leafMaterials:l=>[t.material(l.pageFront),t.material(l.pageBack),t.edge]});return Lf(o,n,e),o.apply(o.vector("flat")),o}function Nf(i,e={}){return new Ol(i.die,{stock:i.stockId,finish:i.finishId,...e})}function Ff(i,e,t){let n={};if(!e.panelMatrix){for(let l of t.panels)n[l.id]={front:0,back:0};return n}let s=i._info("closed"),r=new ke().makeRotationFromQuaternion(s.q),a=new C,o=new C;for(let l of t.panels){let c=e.panelMatrix(l.id,s.vec),h=new ke().multiplyMatrices(r,c),u={};for(let d of["front","back"]){a.set(0,0,d==="front"?1:-1).transformDirection(h);let f=Math.abs(a.y)>.72?new C(0,0,-1):new C(0,1,0),m=0,x=-1/0;for(let p of[0,90,180,270]){let g=p*Math.PI/180,v=d==="front"?Math.sin(g):-Math.sin(g);o.set(v,Math.cos(g),0).transformDirection(h);let M=o.dot(f);M>x+1e-6&&(x=M,m=p)}u[d]=m}n[l.id]=u}return n}var Py="#0b0f1a",Ly="#0051FF";function Dy(i,e,t,n,s){let r=s;i.font=`${t} ${r}px Outfit, Figtree, Arial, sans-serif`;let a=i.measureText(e).width;return a>n&&(r*=n/a),r}function Gh(i,e,t,n,s,r){let a=e.bounds,o=(r?t.w-(a.x0+a.w/2-t.x0):a.x0+a.w/2-t.x0)*n,l=(a.y0+a.h/2-t.y0)*n;i.setTransform(1,0,0,1,0,0),i.translate(o,l),i.rotate(s*Math.PI/180);let c=s%180!==0;return{W:(c?a.h:a.w)*n,H:(c?a.w:a.h)*n}}function Uf(i,e,t="OK DESIGN"){return{front:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0);let h=r.createLinearGradient(0,0,l,c);h.addColorStop(0,"#02040c"),h.addColorStop(.55,"#031235"),h.addColorStop(1,"#000000"),r.fillStyle=h,r.fillRect(0,0,l,c);let u=(p,g,v,M)=>{let y=r.createRadialGradient(p,g,0,p,g,v);y.addColorStop(0,M),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(0,0,l,c)},d=Math.max(l,c);u(l*.82,c*.22,d*.62,"rgba(0,81,255,0.95)"),u(l*.12,c*.92,d*.52,"rgba(120,140,190,0.55)"),u(l*.5,c*.5,d*.3,"rgba(0,40,160,0.5)");let f=i.panels.filter(p=>p.role==="main"&&p.bounds),m=f.filter(p=>p.cover),x=m.length?m:f.slice().sort((p,g)=>g.area-p.area).slice(0,1);for(let p of x){let g=e[p.id]?.front||0,v=Gh(r,p,o,a,g,!1);r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let M=Dy(r,t,800,v.W*.72,v.H*.2);r.font=`800 ${M}px Outfit, Figtree, Arial, sans-serif`,r.fillText(t,0,-M*.1);let y="Full-stack design studio",T=Math.max(M*.17,2*a);r.font=`500 ${T}px Outfit, Figtree, Arial, sans-serif`,r.globalAlpha=.72,r.fillText(y,0,M*.72),r.globalAlpha=1}for(let p of f){if(x.includes(p)||p.area<900)continue;let g=e[p.id]?.front||0,v=Gh(r,p,o,a,g,!1);r.fillStyle="rgba(255,255,255,0.78)",r.textAlign="center",r.textBaseline="middle";let M=Math.min(v.W,v.H)*.05;r.font=`600 ${M}px Outfit, Figtree, Arial, sans-serif`,r.fillText("okdesign.cc",0,0)}r.setTransform(1,0,0,1,0,0)},back:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0),r.fillStyle="#f7f6f2",r.fillRect(0,0,l,c);let h=i.panels.filter(u=>u.role==="main"&&u.area>1200&&u.bounds);for(let u of h){let d=e[u.id]?.back||0,f=Gh(r,u,o,a,d,!0),m=Math.min(f.W,f.H)*.12,x=-f.W/2+m,p=-f.H/2+m,g=f.W-2*m;r.fillStyle=Ly,r.textAlign="left",r.textBaseline="top";let v=Math.min(f.W,f.H)*.085;r.font=`700 ${v}px Outfit, Figtree, Arial, sans-serif`,r.fillText((u.nameIn||"Inside").slice(0,24),x,p),r.fillStyle=Py,r.globalAlpha=.13;let M=v*.72,y=p+v*1.8,T=0;for(;y<f.H/2-m;){let b=g*(T%5===4?.55:T%3===2?.86:.97);r.fillRect(x,y,b,M*.34),y+=M,T++}r.globalAlpha=1}r.setTransform(1,0,0,1,0,0)}}}var nr=.35277777777777775,Ny=40;function Fy(){let i=document.querySelector('script[src*="print-lab.js"]');return i?new URL(".",i.src).href:"assets/print-lab/"}function Of(i){return new Promise((e,t)=>{let n=document.createElement("script");n.src=i,n.onload=e,n.onerror=()=>t(new Error(`Could not load ${i}`)),document.head.appendChild(n)})}var Vl=null;function Uy(){if(Vl)return Vl;let i=Fy();return Vl=(async()=>{await Of(`${i}vendor/pdf.min.js`);let e=window.pdfjsLib;return location.protocol==="file:"?await Of(`${i}vendor/pdf.worker.min.js`):e.GlobalWorkerOptions.workerSrc=`${i}vendor/pdf.worker.min.js`,e})(),Vl}function Oy(i){let e=i.length>4e6?i.subarray(0,4e6):i,t=new TextDecoder("latin1").decode(e),n=/\/TrimBox\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*\]/.exec(t);if(!n)return null;let[s,r,a,o]=n.slice(1).map(Number);return{x0:s,y0:r,x1:a,y1:o}}function kf(i,e){return{source:i,w:i.width,h:i.height,mmW:null,mmH:null,name:e}}async function ky(i){if(/svg/.test(i.type)||/\.svg$/i.test(i.name)){let n=await i.text(),s=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"})),r=new Image;await new Promise((h,u)=>{r.onload=h,r.onerror=()=>u(new Error("This SVG could not be read.")),r.src=s});let a=3e3/Math.max(r.naturalWidth||1e3,r.naturalHeight||1e3),o=document.createElement("canvas");o.width=Math.round((r.naturalWidth||1e3)*a),o.height=Math.round((r.naturalHeight||1e3)*a),o.getContext("2d").drawImage(r,0,0,o.width,o.height),URL.revokeObjectURL(s);let l=/<svg[^>]*\swidth="([\d.]+)mm"[^>]*\sheight="([\d.]+)mm"/.exec(n),c=kf(o,i.name);return l&&(c.mmW=+l[1],c.mmH=+l[2]),{kind:"svg",name:i.name,pages:[c]}}let t=await createImageBitmap(i);return{kind:"image",name:i.name,pages:[kf(t,i.name)]}}async function By(i,{maxSide:e=4096,onProgress:t}={}){let n=await Uy(),s=new Uint8Array(await i.arrayBuffer()),r=Oy(s),a=await n.getDocument({data:s.slice()}).promise,o=[],l=Math.min(a.numPages,Ny);for(let c=1;c<=l;c++){let h=await a.getPage(c),u=h.getViewport({scale:1}),d=c<=2||c===l?e:Math.min(e,1800),f=Math.min(d/Math.max(u.width,u.height),300/72),m=h.getViewport({scale:f}),x=document.createElement("canvas");x.width=Math.ceil(m.width),x.height=Math.ceil(m.height),await h.render({canvasContext:x.getContext("2d"),viewport:m,background:"rgb(255,255,255)"}).promise;let p={source:x,w:x.width,h:x.height,mmW:u.width*nr,mmH:u.height*nr,name:`${i.name} p.${c}`};if(r){let[g,v,M,y]=h.view;p.trim={w:(r.x1-r.x0)*nr,h:(r.y1-r.y0)*nr,cx:((r.x0+r.x1)/2-(g+M)/2)*nr,cy:((r.y0+r.y1)/2-(v+y)/2)*nr}}o.push(p),t?.(c,l)}return{kind:"pdf",name:i.name,pages:o,total:a.numPages}}async function Bf(i,e){if(/pdf/.test(i.type)||/\.pdf$/i.test(i.name))return By(i,e);if(/^image\//.test(i.type)||/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(i.name))return ky(i);throw new Error(`${i.name} is not a PDF or image.`)}function Vh(i,e,t){let n=t.w,s=t.h,r=(f,m,x=1.5)=>Math.abs(f-m)<=x,a={page:i,cx:e.w/2,cy:e.h/2,rot:0,fit:"bleed",mirror:!1},o=f=>{a.mmPerPx=f};if(i.mmW){let f=i.mmW/i.w,m=!r(i.mmW,e.w,8)&&r(i.mmH,e.w,8)&&r(i.mmW,e.h,8);m&&(a.rot=90);let x=m?i.mmH:i.mmW,p=m?i.mmW:i.mmH;if(i.trim&&r(i.trim.w,n,2)&&r(i.trim.h,s,2))return o(f),a.cx-=i.trim.cx,a.cy+=i.trim.cy,a.fit="trimbox",a;if(r(x,e.w)&&r(p,e.h))return o(f),a.fit="bleed",a;if(r(x,n)&&r(p,s))return o(f),a.fit="trim",a;if(x>=e.w&&p>=e.h)return o(f),a.fit="marks",a}let l=a.rot?i.h:i.w,c=a.rot?i.w:i.h,h=l/c,u=e.w/e.h,d=n/s;return Math.abs(h/d-1)<Math.abs(h/u-1)*.8?(o(Math.max(n/l,s/c)),a.fit="trim"):(o(Math.max(e.w/l,e.h/c)),a.fit="bleed"),a}function Wh(i,e,t,n){let s=i.rot%180!==0,r=s?i.page.h:i.page.w,a=s?i.page.w:i.page.h;i.cx=t.w/2,i.cy=t.h/2,e==="bleed"&&(i.mmPerPx=Math.max(t.w/r,t.h/a)),e==="trim"&&(i.mmPerPx=Math.max(n.w/r,n.h/a)),e==="contain"&&(i.mmPerPx=Math.min(t.w/r,t.h/a)),e==="actual"&&i.page.mmW&&(i.mmPerPx=i.page.mmW/i.page.w),i.fit=e}function zf(i,e,t){let{page:n}=t;i.setTransform(e,0,0,e,0,0),i.translate(t.cx,t.cy),i.rotate(t.rot*Math.PI/180),i.scale(t.mmPerPx,t.mmPerPx),i.imageSmoothingQuality="high",i.drawImage(n.source,-n.w/2,-n.h/2,n.w,n.h),i.setTransform(1,0,0,1,0,0)}function Hf(i,e,t,n,s,r,a){let o=s.byId[n.panel];if(!o)return;let l=a==="back",c=p=>(l?t.w-(p-t.x0):p-t.x0)*e,h=p=>(p-t.y0)*e;i.save(),i.setTransform(1,0,0,1,0,0),i.beginPath(),o.poly.forEach((p,g)=>g?i.lineTo(c(p[0]),h(p[1])):i.moveTo(c(p[0]),h(p[1]))),i.closePath(),i.clip();let u=o.bounds,d=r[o.id]?.[a]||0;i.translate(c(u.x0+u.w/2),h(u.y0+u.h/2)),i.rotate(d*Math.PI/180);let f=(d%180?u.h:u.w)*e,m=(d%180?u.w:u.h)*e,x=Math.max(f/n.page.w,m/n.page.h);i.imageSmoothingQuality="high",i.drawImage(n.page.source,-n.page.w*x/2,-n.page.h*x/2,n.page.w*x,n.page.h*x),i.restore()}function Gf(i,e,t){let n=[],{page:s}=i,r=s.w*i.mmPerPx,a=Math.round(s.w/r*25.4);a>=280?n.push({level:"ok",text:`Resolution ${a} ppi at this size`}):a>=170?n.push({level:"warn",text:`Resolution ${a} ppi, usable but below the 300 ppi target`}):n.push({level:"bad",text:`Resolution ${a} ppi, too low for print`});let o=i.rot%180!==0,l=(o?s.h:s.w)*i.mmPerPx,c=(o?s.w:s.h)*i.mmPerPx,h=i.cx-l/2,u=i.cx+l/2,d=i.cy-c/2,f=i.cy+c/2,m=.3,x=h<=m&&d<=m&&u>=e.w-m&&f>=e.h-m,p=t.bleed,g=h<=p+m&&d<=p+m&&u>=e.w-p-m&&f>=e.h-p-m;if(x?n.push({level:"ok",text:`Covers the ${p} mm bleed`}):g?n.push({level:"warn",text:`Reaches the trim but has no ${p} mm bleed`}):n.push({level:"bad",text:"Does not cover the whole sheet"}),s.mmW){let v={trimbox:"Trim box matched, crop marks ignored",bleed:"Page size matches sheet + bleed",trim:"Page size matches the trim size",marks:"Larger page: centred at real size"};n.push({level:v[i.fit]?"ok":"warn",text:v[i.fit]||`Page is ${Ys(s.mmW,s.mmH)} mm, sheet needs ${Ys(e.w,e.h)} mm`})}else{let v=(o?s.h/s.w:s.w/s.h)/(e.w/e.h);Math.abs(v-1)>.03&&n.push({level:"warn",text:"Image proportions differ from the sheet, parts get cropped"})}return n}var Xn=18,Vf={bleed:{label:"Bleed",stroke:"#16d67b"},cut:{label:"Cut",stroke:"#ff2d87"},fold:{label:"Fold (valley)",stroke:"#16a7ff"},mountain:{label:"Fold (mountain)",stroke:"#ffb020"},perf:{label:"Perforation / kiss cut",stroke:"#8a4dff"},safe:{label:"Safe zone",stroke:"#9aa0a6"}};function ql(i){return`${i.format.name} / ${i.size.label}`.replace(/[^\x20-\x7e×→]/g,"")}function Wf(i){let e=[];for(let t of i.panels){if(t.role!=="main"||t.area<300)continue;let n=t.bounds,s=i.safe;n.w<s*3||n.h<s*3||e.push([n.x0+s,n.y0+s,n.w-2*s,n.h-2*s])}return e}function qf(i){let{die:e}=i,t=e.bleed,n=e.w+2*t+2*Xn,s=e.h+2*t+2*Xn+8,r=Xn+t,a=Vf,o=(h,u)=>`<line x1="${Bt(h[0])}" y1="${Bt(h[1])}" x2="${Bt(u[0])}" y2="${Bt(u[1])}"/>`,l=e.panels.filter(h=>h.role==="glue").map(h=>`<polygon points="${h.poly.map(u=>`${Bt(u[0])},${Bt(u[1])}`).join(" ")}"/>`).join(""),c=e.panels.filter(h=>h.role!=="leaf"&&h.role!=="hidden"&&Math.min(h.bounds.w,h.bounds.h)>8).map(h=>`<text x="${Bt(h.centroid[0])}" y="${Bt(h.centroid[1])}">${qh(h.name)}</text>`).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${Bt(n)}mm" height="${Bt(s)}mm" viewBox="0 0 ${Bt(n)} ${Bt(s)}">
<title>${qh(ql(i))}</title>
<desc>OK Design print template. Sheet ${vt(e.w)} x ${vt(e.h)} mm, bleed ${vt(t)} mm. All units in mm, scale 1:1. Remove this layer set before export.</desc>
<g transform="translate(${r} ${r})" fill="none" stroke-width="0.25">
<g id="BLEED" stroke="${a.bleed.stroke}"><rect x="${-t}" y="${-t}" width="${Bt(e.w+2*t)}" height="${Bt(e.h+2*t)}"/></g>
<g id="GLUE" fill="#0051ff" fill-opacity="0.1" stroke="none">${l}</g>
<g id="SAFE" stroke="${a.safe.stroke}" stroke-dasharray="1 1">${Wf(e).map(h=>`<rect x="${Bt(h[0])}" y="${Bt(h[1])}" width="${Bt(h[2])}" height="${Bt(h[3])}"/>`).join("")}</g>
<g id="CUT" stroke="${a.cut.stroke}">${e.cuts.map(h=>o(h[0],h[1])).join("")}</g>
<g id="FOLD" stroke="${a.fold.stroke}" stroke-dasharray="3 2">${e.creases.filter(h=>!h.mountain).map(h=>o(h.a,h.b)).join("")}</g>
<g id="FOLD-MOUNTAIN" stroke="${a.mountain.stroke}" stroke-dasharray="3 1 1 1">${e.creases.filter(h=>h.mountain).map(h=>o(h.a,h.b)).join("")}</g>
<g id="PERFORATION" stroke="${a.perf.stroke}" stroke-dasharray="1 1">${[...e.perfs,...e.kiss].map(h=>o(h.a,h.b)).join("")}</g>
<g id="LABELS" fill="#0051ff" stroke="none" font-family="Helvetica, Arial, sans-serif" font-size="3.2" text-anchor="middle">${c}</g>
</g>
<g id="LEGEND" font-family="Helvetica, Arial, sans-serif" font-size="2.8" fill="#333">
<text x="${Xn}" y="${s-10}">${qh(ql(i))}  |  sheet ${vt(e.w)} x ${vt(e.h)} mm  |  bleed ${vt(t)} mm  |  safe ${vt(e.safe)} mm</text>
<text x="${Xn}" y="${s-6}">pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone</text>
</g>
</svg>`}var Bt=i=>String(Math.round(i*1e3)/1e3),qh=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Xf(i){let{die:e}=i,t=e.bleed,n=72/25.4,s=e.w+2*t+2*Xn,r=e.h+2*t+2*Xn+8,a=Xn+t,o=b=>((b+a)*n).toFixed(3),l=b=>((r-(b+a))*n).toFixed(3),c=b=>{let _=parseInt(b.slice(1),16);return`${((_>>16&255)/255).toFixed(3)} ${((_>>8&255)/255).toFixed(3)} ${((_&255)/255).toFixed(3)}`},h=b=>String(b).replace(/×/g,"x").replace(/→/g,">").replace(/[^\x20-\x7e]/g,"").replace(/([()\\])/g,"\\$1"),u=[],d=(b,_,w)=>{if(w.length){u.push(`q ${c(b)} RG 0.6 w [${_}] 0 d`);for(let[I,R]of w)u.push(`${o(I[0])} ${l(I[1])} m ${o(R[0])} ${l(R[1])} l S`);u.push("Q")}},f=Vf,m=(b,_,w,I)=>[[[b,_],[b+w,_]],[[b+w,_],[b+w,_+I]],[[b+w,_+I],[b,_+I]],[[b,_+I],[b,_]]];d(f.bleed.stroke,"",m(-t,-t,e.w+2*t,e.h+2*t)),d(f.safe.stroke,"2 2",Wf(e).flatMap(b=>m(...b))),d(f.cut.stroke,"",e.cuts.map(b=>[b[0],b[1]])),d(f.fold.stroke,"8 5",e.creases.filter(b=>!b.mountain).map(b=>[b.a,b.b])),d(f.mountain.stroke,"8 3 2 3",e.creases.filter(b=>b.mountain).map(b=>[b.a,b.b])),d(f.perf.stroke,"2 2",[...e.perfs,...e.kiss].map(b=>[b.a,b.b]));let x=(b,_,w,I,R="#333333")=>{u.push(`BT /F1 ${w} Tf ${c(R)} rg ${b.toFixed(2)} ${_.toFixed(2)} Td (${h(I)}) Tj ET`)};for(let b of e.panels){if(b.role==="leaf"||b.role==="hidden"||Math.min(b.bounds.w,b.bounds.h)<8)continue;let _=h(b.name).length*4.6*.5;x(+o(b.centroid[0])-_,+l(b.centroid[1])-3,9,b.name,"#0051ff")}x(Xn*n,7.5*n,8,`${ql(i)}  |  sheet ${vt(e.w)} x ${vt(e.h)} mm  |  bleed ${vt(t)} mm  |  safe ${vt(e.safe)} mm`),x(Xn*n,3.6*n,7,"pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone","#666666");let p=u.join(`
`),g=(b,_,w,I)=>`[${[o(b),l(I),o(w),l(_)].join(" ")}]`,v=["<< /Type /Catalog /Pages 2 0 R >>","<< /Type /Pages /Kids [3 0 R] /Count 1 >>",`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${(s*n).toFixed(3)} ${(r*n).toFixed(3)}] /TrimBox ${g(0,0,e.w,e.h)} /BleedBox ${g(-t,-t,e.w+t,e.h+t)} /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,`<< /Length ${p.length} >>
stream
${p}
endstream`,"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",`<< /Title (${h(ql(i))}) /Producer (OK Design Print Lab) >>`],M=`%PDF-1.4
`,y=[];v.forEach((b,_)=>{y.push(M.length),M+=`${_+1} 0 obj
${b}
endobj
`});let T=M.length;M+=`xref
0 ${v.length+1}
0000000000 65535 f 
`;for(let b of y)M+=`${String(b).padStart(10,"0")} 00000 n 
`;return M+=`trailer
<< /Size ${v.length+1} /Root 1 0 R /Info 6 0 R >>
startxref
${T}
%%EOF`,M}function $f(i){let e=Math.max(i.w,i.h)*.03,t=`${-e} ${-e} ${i.w+2*e} ${i.h+2*e}`,n=(a,o)=>`M${Wl(a[0])} ${Wl(a[1])}L${Wl(o[0])} ${Wl(o[1])}`,s=i.cuts.map(a=>n(a[0],a[1])).join(""),r=i.creases.map(a=>n(a.a,a.b)).join("");return`<svg viewBox="${t}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="c" d="${s}"/><path class="f" d="${r}"/></svg>`}var Wl=i=>Math.round(i*10)/10;function Xl(i,e,t){let n=e instanceof Blob?e:new Blob([e],{type:t}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),4e3)}function zy(){let i=document.querySelector('script[src*="print-lab.js"]');return i?new URL(".",i.src).href:"assets/print-lab/"}function Hy(){return window.__OK_RUNTIME?Promise.resolve():new Promise((i,e)=>{let t=document.createElement("script");t.src=`${zy()}print-lab.runtime.js`,t.onload=i,t.onerror=()=>e(new Error("The proof runtime could not be loaded.")),document.head.appendChild(t)})}function Yf(i,e){let t=i.art[e];if(!t)return null;let{ext:n}=i,s=Math.min(3e3/Math.max(n.w,n.h),i.pxPerMm),r=document.createElement("canvas");r.width=Math.round(n.w*s),r.height=Math.round(n.h*s);let a=r.getContext("2d");return a.fillStyle=e==="back"&&i.stock.inside?i.stock.inside:i.stock.color,a.fillRect(0,0,r.width,r.height),t(a,s,n,e),r.toDataURL("image/jpeg",.88)}var Gy=i=>JSON.stringify(i).replace(/</g,"\\u003c");async function Zf(i,e={}){await Hy();let{surface:t,s:n,art:s,job:r}=i,a={};if(s.pagesMap){let h=0;for(let[u,d]of s.pagesMap){if(h++>=16)break;let f=document.createElement("canvas"),m=Math.min(1,1100/Math.max(d.width,d.height));f.width=Math.round(d.width*m),f.height=Math.round(d.height*m),f.getContext("2d").drawImage(d,0,0,f.width,f.height),a[u]=f.toDataURL("image/jpeg",.84)}}let o={v:1,id:n.id,size:n.size,stock:n.stock,finish:n.finish,pages:n.pages,client:e.client||"",project:e.project||r.format.name,version:e.version||"v1",note:e.note||"",date:new Date().toISOString().slice(0,10),email:"hello@okdesign.cc",art:{front:Yf(t,"front"),back:Yf(t,"back")},bookPages:a},l=`${o.project} ${o.version} \u2014 Proof by OK Design`.replace(/</g,""),c=window.__OK_RUNTIME.replace(/<\/script/gi,"<\\/script");return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${l}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..800&family=Outfit:wght@300..800&display=swap" rel="stylesheet">
<style>${window.__OK_RUNTIME_CSS}</style>
</head>
<body class="pl-proof-page">
<div id="plProof"></div>
<script>window.__OK_PROOF__=${Gy(o)};<\/script>
<script>${c}<\/script>
</body>
</html>`}var Vy=i=>{let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild},Gt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Jf=i=>String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Wy={flat:"Outside",inside:"Inside",closed:"Folded",open:"Open"},ir=class{constructor(e,{mode:t="lab",onClose:n,onChange:s,proof:r}={}){this.host=e,this.mode=t,this.onClose=n,this.onChange=s,this.proof=r,this.s={overlays:{lines:!1,bleed:!1,safe:!1,labels:!1},tab:"spec"},this.art=this._emptyArt(),this._dom()}_emptyArt(){return{front:null,back:null,panels:[],sample:!1,doc:null,pagesMap:null}}_dom(){let e=this.mode==="proof",t=this.mode==="client";this.el=Vy(`
      <div class="pl-studio pl-mode-${this.mode}" role="dialog" aria-modal="true" aria-label="Format preview">
        <div class="pl-stage">
          <div class="pl-canvas"></div>
          <div class="pl-head">
            ${e?"":'<a class="pl-back" href="#/"><span aria-hidden="true">\u2190</span> All formats</a>'}
            <div class="pl-title">
              <p class="pl-eyebrow"></p>
              <h2></h2>
              <p class="pl-sub"></p>
            </div>
          </div>
          <div class="pl-measure" hidden></div>
          <div class="pl-dock">
            <div class="pl-seg" role="group" aria-label="View"></div>
            <label class="pl-fold"><span>Fold</span><input type="range" min="0" max="100" value="100" aria-label="Fold amount"></label>
            <div class="pl-tools">
              <button type="button" class="pl-tog" data-o="lines">Die lines</button>
              <button type="button" class="pl-tog" data-o="bleed">Bleed</button>
              ${e||t?"":'<button type="button" class="pl-tog" data-o="safe">Safe</button><button type="button" class="pl-tog" data-o="labels">Labels</button>'}
              <span class="pl-sep"></span>
              <button type="button" class="pl-ico" data-z="out" aria-label="Zoom out">\u2212</button>
              <button type="button" class="pl-ico" data-z="in" aria-label="Zoom in">+</button>
              <button type="button" class="pl-ico" data-z="spin" aria-label="Turn the model" title="Turn the model">\u27F3</button>
              <button type="button" class="pl-ico" data-z="reset" aria-label="Reset view" title="Reset view">\u2316</button>
            </div>
          </div>
          <div class="pl-veil" hidden><p></p></div>
          <div class="pl-tip" hidden></div>
          <div class="pl-note" hidden></div>
        </div>
        ${e||t?"":`
        <aside class="pl-side" aria-label="Format details">
          <div class="pl-tabs" role="tablist">
            <button type="button" role="tab" data-tab="spec">Spec</button>
            <button type="button" role="tab" data-tab="art">Artwork</button>
            <button type="button" role="tab" data-tab="share">Share</button>
          </div>
          <div class="pl-tabpane" data-pane="spec"></div>
          <div class="pl-tabpane" data-pane="art"></div>
          <div class="pl-tabpane" data-pane="share"></div>
        </aside>`}
      </div>`),this.host.appendChild(this.el),this.$=s=>this.el.querySelector(s),this.canvasHost=this.$(".pl-canvas"),this.$(".pl-back")?.addEventListener("click",s=>{s.preventDefault(),this.onClose?.()}),this.el.querySelectorAll(".pl-tog").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.o;this.s.overlays[r]=!this.s.overlays[r],this._syncOverlays()})),this.el.querySelectorAll("[data-z]").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.z;r==="in"&&this.stage.zoom(.84),r==="out"&&this.stage.zoom(1.19),r==="reset"&&this.stage.resetView(),r==="spin"&&(this.spin=!this.spin,this.stage.spin(this.spin),s.classList.toggle("is-on",this.spin))}));let n=this.$(".pl-fold input");n.addEventListener("input",()=>{this.stage.scrub(n.value/100),this._markState("custom")}),this.el.querySelectorAll("[data-tab]").forEach(s=>s.addEventListener("click",()=>this.tab(s.dataset.tab))),this.mode==="lab"&&this._wireDrop(),this._wireHover()}_ensureStage(){if(this.stage)return;try{this.stage=new Pl(this.canvasHost,{pad:1.14})}catch{let t=this.$(".pl-note");throw t.textContent="This browser cannot show the 3D model: WebGL is turned off or not available.",t.hidden=!1,new Error("WebGL unavailable")}this.stage.onState=t=>this._markState(t),this.stage.onSpinStop=()=>{this.spin=!1,this.$('[data-z="spin"]')?.classList.remove("is-on")},this.maxTex=Math.min(this.stage.renderer.capabilities.maxTextureSize,window.innerWidth<800?2048:4096);let e=window.innerWidth<900;this.stage.setSafe(e?62:84,e?50:74)}open(e){this.el.classList.add("is-open"),this._ensureStage(),Object.assign(this.s,{id:e.id,size:e.size,stock:e.stock,finish:e.finish,pages:e.pages}),this.art=this._emptyArt(),this._rebuild({intro:!e.noIntro}),this.stage.resize(),this.$(".pl-back")?.focus({preventScroll:!0})}close(){this.el.classList.remove("is-open"),this.spin=!1,this.stage?.spin(!1)}_rebuild({intro:e=!1,keepState:t=!1}={}){let{s:n}=this,s=this.surface,r=this.pages,a=Gl(n.id,n.size,{stock:n.stock,finish:n.finish,pages:n.pages});this.job=a,n.size=a.size.id,n.stock=a.stockId,n.finish=a.finishId,n.pages=a.params.pages;let{die:o}=a,l=Nf(a,{maxTex:this.maxTex,anisotropy:this.stage.renderer.capabilities.getMaxAnisotropy()}),c=new Hl,h=Df(a,{surface:l,pages:c});this.surface=l,this.pages=c,this.model=h;let u=t&&this.stage.state!=="custom"?this.stage.state:"closed";this.stage.setModel(h,{die:o,state:"closed"}),s?.dispose(),r?.dispose(),this.orient=Ff(this.stage,h,o),l.orient=this.orient,l.onChange=()=>this.stage.invalidate(),this._bleedPlanes(),this._syncOverlays(),this._seg(),this._titles(),this._reapplyArt(),this._renderPanes();let d=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;e&&!d?(this.stage.go("flat",{instant:!0}),this._markState("flat"),clearTimeout(this._introT),this._introT=setTimeout(()=>{this.stage.go("closed"),this._markState("closed")},420)):(this.stage.go(u==="open"&&o.meta.noOpen?"closed":u,{instant:!0}),this._markState(this.stage.state)),this.onChange?.(this.params())}params(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s;return{id:e,size:t,stock:n,finish:s,pages:r}}_bleedPlanes(){let{surface:e,model:t}=this,n=e.ext,s=new si(n.w,n.h),r=t.t,a=o=>{let l=new Re(s,new Mi({map:e.tex[o],color:"#7d7d7d",toneMapped:!1}));return l.position.set(n.x0+n.w/2,-(n.y0+n.h/2),-r*.5),o==="back"&&(l.rotation.y=Math.PI),l.visible=!1,t.object.add(l),l};this.bleedPlanes={front:a("front"),back:a("back")},this.stage.onStart=()=>this._syncBleed()}_syncBleed(){let e=this.s.overlays.bleed,t=this.stage.tween?this.stage.tween.state:this.stage.state,n=t==="flat"||t==="inside";if(!this.bleedPlanes)return;let{surface:s}=this;this.bleedPlanes.front.material.map=s.tex.front,this.bleedPlanes.back.material.map=s.tex.back,this.bleedPlanes.front.visible=e&&n,this.bleedPlanes.back.visible=e&&n,this.stage.invalidate()}_syncOverlays(){let e=this.s.overlays;this.el.querySelectorAll(".pl-tog").forEach(t=>t.classList.toggle("is-on",!!e[t.dataset.o])),this.surface?.setOverlays({lines:e.lines,safe:e.safe,labels:e.labels}),this._syncBleed()}_titles(){let{format:e,size:t}=this.job,n=qs.find(r=>r.id===e.cat);this.$(".pl-eyebrow").textContent=n?.name||"",this.$(".pl-title h2").textContent=this.proof?.project||e.name;let s=[e.nl,e.fr].filter((r,a,o)=>r&&r!==e.name&&o.indexOf(r)===a);if(this.$(".pl-sub").textContent=this.proof?`${e.name} \xB7 ${t.label}`:s.join(" \xB7 "),this.mode!=="lab"){let r=this.$(".pl-measure");r.hidden=!1,r.innerHTML=this._measureRows().map(([a,o])=>`<div><span>${Gt(a)}</span><b>${Gt(o)}</b></div>`).join("")}}_finished(){let{model:e}=this;if(!e)return null;let n=e.bounds(e.vector("closed")).getSize(new C);return[n.x,n.y,n.z].sort((s,r)=>r-s)}_measureRows(){let{die:e,stock:t,finishId:n}=this.job,s=[],r=this._finished(),a=r&&r[2]>6&&!e.extras.some(o=>o.type==="stack");return r&&s.push([a?"Outside":"Finished",a?`${vt(r[0])} \xD7 ${vt(r[1])} \xD7 ${vt(r[2])} mm`:`${vt(r[1])} \xD7 ${vt(r[0])} mm`]),s.push(["Flat sheet",`${Ys(e.w,e.h)} mm`]),s.push(["With bleed",`${Ys(e.w+2*e.bleed,e.h+2*e.bleed)} mm`]),s.push(["Stock",t.name]),n!=="none"&&s.push(["Finish",Xs[n].name]),s}_seg(){let{die:e}=this.job,t=["flat"];(e.sides??2)>1&&t.push("inside"),t.push("closed"),e.meta.noOpen||t.push("open");let n=!e.creases.length&&!e.warp,s={...Wy,...n?{flat:"Front",inside:"Back",closed:"3D"}:{},...e.meta.closedLabel?{closed:e.meta.closedLabel}:{}},r=this.$(".pl-seg");r.innerHTML=t.map(a=>`<button type="button" data-state="${a}">${s[a]}</button>`).join(""),r.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{clearTimeout(this._introT),this.stage.go(a.dataset.state),this._markState(a.dataset.state)}))}_markState(e){this.el.querySelectorAll("[data-state]").forEach(n=>n.classList.toggle("is-on",n.dataset.state===e));let t=this.$(".pl-fold input");(e==="flat"||e==="inside")&&(t.value=0),(e==="closed"||e==="open")&&(t.value=100),this._syncBleed()}tab(e){this.s.tab=e,this.el.querySelectorAll("[data-tab]").forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle("is-on",n),t.setAttribute("aria-selected",n)}),this.el.querySelectorAll("[data-pane]").forEach(t=>t.hidden=t.dataset.pane!==e)}_renderPanes(){this.mode==="lab"&&(this._paneSpec(),this._paneArt(),this._paneShare(),this.tab(this.s.tab))}_select(e,t,n,s){if(n.length<2){let r=n[0];return`<div class="pl-field"><span>${e}</span><p class="pl-static">${Gt(r?.[1]??"")}</p></div>`}return`<label class="pl-field"><span>${e}</span><select data-k="${t}">${n.map(([r,a])=>`<option value="${Gt(r)}"${String(r)===String(s)?" selected":""}>${Gt(a)}</option>`).join("")}</select></label>`}_paneSpec(){let e=this.$('[data-pane="spec"]'),{format:t,die:n}=this.job,{s}=this,r=this._measureRows();r.push(["Safe margin",`${vt(n.safe)} mm`]);let a=n.panels.filter(o=>o.role==="main").length;a>1&&r.push(["Printed panels",String(a)]),n.creases.length&&r.push(["Folds",String(n.creases.length)]),e.innerHTML=`
      <p class="pl-use">${Gt(t.use)}</p>
      <div class="pl-fields">
        ${this._select("Size","size",t.sizes.map(o=>[o.id,o.label]),s.size)}
        ${t.pageOptions?this._select("Pages","pages",t.pageOptions.map(o=>[o,`${o} pages`]),s.pages):""}
        ${this._select("Stock","stock",t.stocks.map(o=>[o,is[o].name]),s.stock)}
        ${this._select("Finish","finish",t.finishes.map(o=>[o,Xs[o].name]),s.finish)}
      </div>
      <dl class="pl-spec">${r.map(([o,l])=>`<div><dt>${Gt(o)}</dt><dd>${Gt(l)}</dd></div>`).join("")}</dl>
      <p class="pl-label">Template, 1:1 in mm</p>
      <div class="pl-row">
        <button type="button" class="pl-btn" data-dl="pdf">Download PDF</button>
        <button type="button" class="pl-btn" data-dl="svg">Download SVG</button>
      </div>
      <p class="pl-hint">Cut, fold, bleed and safe zone on separate lines. Check panel widths against your printer's own template before going to press.</p>`,e.querySelectorAll("select").forEach(o=>o.addEventListener("change",()=>{s[o.dataset.k]=o.value,this._rebuild({keepState:!0})})),e.querySelector('[data-dl="pdf"]').addEventListener("click",()=>{Xl(`${t.id}-${s.size}-template.pdf`,new Blob([qy(Xf(this.job))],{type:"application/pdf"}))}),e.querySelector('[data-dl="svg"]').addEventListener("click",()=>{Xl(`${t.id}-${s.size}-template.svg`,qf(this.job),"image/svg+xml")})}_sideBlock(e,t){let n=this.art[e];if(!n)return`<div class="pl-slot"><div class="pl-slot-head"><b>${t}</b><span>Empty</span></div>
        <button type="button" class="pl-link" data-pick="${e}">Choose a file for this side</button></div>`;let s=Gf(n,this.surface.ext,this.job.die),r=Math.round(n.mmPerPx/(n.base||n.mmPerPx)*100);return`<div class="pl-slot" data-side="${e}">
      <div class="pl-slot-head"><b>${t}</b><span title="${Gt(n.page.name)}">${Gt(n.page.name)}</span></div>
      <ul class="pl-checks">${s.map(a=>`<li class="is-${a.level}">${Gt(a.text)}</li>`).join("")}</ul>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-fit="bleed">Fit bleed</button>
        <button type="button" class="pl-chip" data-fit="trim">Fit trim</button>
        ${n.page.mmW?'<button type="button" class="pl-chip" data-fit="actual">100%</button>':""}
        <button type="button" class="pl-chip" data-act="rot">Rotate</button>
        <button type="button" class="pl-chip" data-act="del">Remove</button>
      </div>
      <label class="pl-slider"><span>Scale <i>${r}%</i></span><input type="range" min="50" max="200" value="${r}" data-v="scale"></label>
      <div class="pl-xy">
        <label><span>Move X, mm</span><input type="number" step="0.5" value="${vt(n.cx-this.surface.ext.w/2)}" data-v="x"></label>
        <label><span>Move Y, mm</span><input type="number" step="0.5" value="${vt(n.cy-this.surface.ext.h/2)}" data-v="y"></label>
      </div>
    </div>`}_paneArt(){let e=this.$('[data-pane="art"]'),{die:t}=this.job,n=(t.sides??2)>1,s=t.meta.book,r=this.art.panels;e.innerHTML=`
      <div class="pl-dropzone" tabindex="0" role="button" aria-label="Choose artwork file">
        <p><b>Drop a print PDF or image</b></p>
        <p>PDF, PNG, JPG, SVG. Stays on this device.</p>
        <input type="file" accept=".pdf,image/*" hidden multiple>
      </div>
      <div class="pl-progress" hidden></div>
      <p class="pl-error" hidden></p>
      ${s?'<p class="pl-hint">A multi-page PDF fills the book in reading order: page 1 is the front cover, the last page the back cover.</p>':""}
      ${this._sideBlock("front",n?"Outside":"Print side")}
      ${n?this._sideBlock("back","Inside"):""}
      ${r.length?`<div class="pl-slot"><div class="pl-slot-head"><b>Placed on panels</b><span>${r.length}</span></div>
        <ul class="pl-items">${r.map((l,c)=>`<li><span>${Gt(t.byId[l.panel]?.[l.side==="back"?"nameIn":"name"]||l.panel)}</span><button type="button" class="pl-link" data-rm="${c}">Remove</button></li>`).join("")}</ul></div>`:""}
      <p class="pl-hint">You can also drop a picture straight onto a panel of the 3D model, or paste one from the clipboard.</p>
      <div class="pl-row">
        <button type="button" class="pl-btn" data-sample>${this.art.sample?"Remove sample":"Use sample design"}</button>
      </div>`;let a=e.querySelector("input[type=file]"),o=e.querySelector(".pl-dropzone");o.addEventListener("click",()=>a.click()),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),a.click())}),a.addEventListener("change",()=>{a.files.length&&this._files([...a.files],{side:this._pickSide}),this._pickSide=null,a.value=""}),e.querySelectorAll("[data-pick]").forEach(l=>l.addEventListener("click",()=>{this._pickSide=l.dataset.pick,a.click()})),e.querySelector("[data-sample]").addEventListener("click",()=>this.useSample(!this.art.sample)),e.querySelectorAll("[data-rm]").forEach(l=>l.addEventListener("click",()=>{this.art.panels.splice(+l.dataset.rm,1),this._reapplyArt(),this._paneArt()})),e.querySelectorAll(".pl-slot[data-side]").forEach(l=>{let c=l.dataset.side,h=this.art[c],{ext:u}=this.surface,d=(m=!1)=>{this._applySide(c),m&&this._paneArt()};l.querySelectorAll("[data-fit]").forEach(m=>m.addEventListener("click",()=>{Wh(h,m.dataset.fit,u,t),h.base=h.mmPerPx,d(!0)})),l.querySelector('[data-act="rot"]').addEventListener("click",()=>{h.rot=(h.rot+90)%360,Wh(h,"bleed",u,t),h.base=h.mmPerPx,d(!0)}),l.querySelector('[data-act="del"]').addEventListener("click",()=>{this.art[c]=null,d(!0)});let f=l.querySelector('[data-v="scale"]');f.addEventListener("input",()=>{h.mmPerPx=h.base*(f.value/100),l.querySelector(".pl-slider i").textContent=`${f.value}%`,d()}),f.addEventListener("change",()=>d(!0)),l.querySelector('[data-v="x"]').addEventListener("change",m=>{h.cx=u.w/2+(+m.target.value||0),d(!0)}),l.querySelector('[data-v="y"]').addEventListener("change",m=>{h.cy=u.h/2+(+m.target.value||0),d(!0)})})}_paneShare(){let e=this.$('[data-pane="share"]'),t=!!(this.art.front||this.art.back||this.art.panels.length||this.art.sample);e.innerHTML=`
      <p class="pl-label">Blank for the client</p>
      <p class="pl-hint">A page with this exact format and nothing else. Send it right after the order is placed.</p>
      <div class="pl-row"><button type="button" class="pl-btn" data-copy>Copy client link</button></div>
      <p class="pl-label pl-gap">Proof with your design</p>
      <p class="pl-hint">One HTML file with the 3D model and the design inside. It needs no server: send it as it is, or put it in a hidden folder on the site.</p>
      <div class="pl-fields">
        <label class="pl-field"><span>Client</span><input type="text" data-p="client" value="${Gt(this.meta?.client)}" placeholder="Client name"></label>
        <label class="pl-field"><span>Project</span><input type="text" data-p="project" value="${Gt(this.meta?.project)}" placeholder="${Gt(this.job.format.name)}"></label>
        <label class="pl-field"><span>Version</span><input type="text" data-p="version" value="${Gt(this.meta?.version||"v1")}"></label>
        <label class="pl-field"><span>Note</span><textarea rows="2" data-p="note" placeholder="Anything to check in this round">${Gt(this.meta?.note)}</textarea></label>
      </div>
      <div class="pl-row"><button type="button" class="pl-btn pl-btn-primary" data-proof ${t?"":"disabled"}>Download proof</button></div>
      ${t?"":'<p class="pl-hint">Add artwork first.</p>'}
      <p class="pl-error" hidden></p>`,e.querySelector("[data-copy]").addEventListener("click",async n=>{let s=this.clientLink(),r=n.currentTarget;try{await navigator.clipboard.writeText(s),r.textContent="Copied"}catch{window.prompt("Copy this link",s)}setTimeout(()=>r.textContent="Copy client link",1600)}),this.meta=this.meta||{},e.querySelectorAll("[data-p]").forEach(n=>n.addEventListener("input",()=>this.meta[n.dataset.p]=n.value)),e.querySelector("[data-proof]").addEventListener("click",async n=>{let s=n.currentTarget,r=e.querySelector(".pl-error");r.hidden=!0,s.disabled=!0,s.textContent="Building\u2026";try{let a=Jf(this.meta.project||this.job.format.name),o=await Zf(this,this.meta);Xl(`proof-${a}-${Jf(this.meta.version||"v1")}.html`,o,"text/html")}catch(a){r.textContent=a.message,r.hidden=!1}s.disabled=!1,s.textContent="Download proof"})}clientLink(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s,a=new URLSearchParams({size:t,stock:n,finish:s,view:"client"});return r&&a.set("pages",r),`${location.href.split("#")[0]}#/f/${e}?${a}`}async useSample(e){if(e)try{await Promise.all([document.fonts.load("800 40px Outfit"),document.fonts.load("600 40px Outfit")])}catch{}this.art.sample=e,e&&(this.art.front=null,this.art.back=null,this.art.panels=[]),this._reapplyArt(),this.mode==="lab"&&(this._paneArt(),this._paneShare())}_applySide(e){let{surface:t,job:n,orient:s,art:r}=this;if(r.sample){let l=Uf(n.die,s);t.setArt(e,e==="front"?l.front:l.back),this._syncBleed();return}let a=r[e],o=r.panels.filter(l=>l.side===e);!a&&!o.length?t.setArt(e,null):t.setArt(e,(l,c,h)=>{a&&zf(l,c,a);for(let u of o)Hf(l,c,h,u,n.die,s,e)}),this._syncBleed()}_reapplyArt(){let{art:e,surface:t,job:n}=this;for(let s of["front","back"]){let r=e[s];if(r){let a=Vh(r.page,t.ext,n.die);a.base=a.mmPerPx,e[s]=a}this._applySide(s)}if(e.pagesMap)for(let[s,r]of e.pagesMap)this.pages.setPage(s,r)}async _files(e,{side:t,panel:n}={}){let s=this.$('[data-pane="art"]'),r=s?.querySelector(".pl-progress"),a=s?.querySelector(".pl-error");a&&(a.hidden=!0),this.tab("art");try{let o=0;for(let l of e){r&&(r.hidden=!1,r.textContent=`Reading ${l.name}\u2026`);let c=await Bf(l,{maxSide:this.maxTex,onProgress:(h,u)=>{r&&(r.textContent=`Rendering page ${h} of ${u}\u2026`)}});this._placeDoc(c,{side:o===1&&!t?"back":t,panel:n}),o++}}catch(o){a&&(a.textContent=o.message||"This file could not be read.",a.hidden=!1)}r&&(r.hidden=!0),this._paneArt(),this._paneShare()}_placeDoc(e,{side:t,panel:n}){let{die:s}=this.job,{art:r,surface:a}=this;if(r.sample=!1,n){r.panels=r.panels.filter(h=>!(h.panel===n.panel&&h.side===n.side)),r.panels.push({panel:n.panel,side:n.side,page:e.pages[0]}),this._applySide(n.side);return}if(s.meta.book&&e.pages.length>2&&s.byId.front&&s.byId.back){if(this.job.format.pageOptions?.includes(e.pages.length)&&e.pages.length!==this.s.pages){this.s.pages=e.pages.length,this._rebuild({keepState:!0}),this._placeBook(e),this._paneSpec();return}this._placeBook(e);return}let l=t||(this.stage.state==="inside"?"back":"front"),c=(h,u)=>{let d=Vh(u,a.ext,s);d.base=d.mmPerPx,r[h]=d,this._applySide(h)};c(l,e.pages[0]),e.pages[1]&&!t&&(s.sides??2)>1&&c(l==="front"?"back":"front",e.pages[1]),this.stage.state!=="flat"&&this.stage.state!=="inside"&&this.stage.go(l==="back"?"inside":"flat"),this.s.overlays.lines=!0,this._syncOverlays()}_placeBook(e){let{art:t}=this,n=e.pages,s=n.length;t.panels=[{panel:"front",side:"front",page:n[0]},{panel:"back",side:"front",page:n[s-1]}],s>3&&t.panels.push({panel:"front",side:"back",page:n[1]},{panel:"back",side:"back",page:n[s-2]}),t.pagesMap=new Map;for(let r=2;r<s-2;r++)t.pagesMap.set(r+1,n[r].source);for(let[r,a]of t.pagesMap)this.pages.setPage(r,a);this._applySide("front"),this._applySide("back"),this.stage.go("closed")}_wireDrop(){let e=this.$(".pl-stage"),t=this.$(".pl-veil"),n=0,s=()=>this.stage.state==="flat"||this.stage.state==="inside",r=()=>{t.querySelector("p").textContent=s()?`Drop to fill the ${this.stage.state==="inside"?"inside":"outside"} of the sheet`:"Drop on a panel to place it there"};this.el.addEventListener("dragenter",a=>{a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),n++,r(),t.hidden=!1)}),this.el.addEventListener("dragleave",()=>{n=Math.max(0,n-1),n||(t.hidden=!0)}),this.el.addEventListener("dragover",a=>{if(a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),!s()&&e.contains(a.target))){let o=this.stage.pick(a.clientX,a.clientY),l=o&&this._panelName(o);t.querySelector("p").textContent=l?`Place on ${l}`:"Drop on a panel to place it there"}}),this.el.addEventListener("drop",a=>{a.preventDefault(),n=0,t.hidden=!0;let o=[...a.dataTransfer?.files||[]];if(!o.length)return;if(e.contains(a.target)&&!s()){let c=this.stage.pick(a.clientX,a.clientY);if(c&&c.panel){this._files([o[0]],{panel:c});return}}this._files(o)}),this._onPaste=a=>{if(!this.el.classList.contains("is-open")||/INPUT|TEXTAREA/.test(document.activeElement?.tagName||""))return;let o=[...a.clipboardData?.files||[]].filter(l=>/^image\//.test(l.type));o.length&&this._files([o[0]])},window.addEventListener("paste",this._onPaste)}_panelName(e){let t=this.job.die.byId[e.panel];return!t||t.role==="leaf"?null:e.side==="back"?t.nameIn||"Inside":t.name}_wireHover(){let e=this.$(".pl-tip"),t=this.$(".pl-stage");if(this.mode!=="lab")return;let n=0;t.addEventListener("pointermove",s=>{if(s.pointerType==="touch"||s.buttons){e.hidden=!0;return}let r=performance.now();if(r-n<60)return;if(n=r,s.target.tagName!=="CANVAS"||!this.stage){e.hidden=!0;return}let a=this.stage.pick(s.clientX,s.clientY),o=a&&this._panelName(a);if(!o){e.hidden=!0;return}let l=t.getBoundingClientRect();e.textContent=o,e.style.transform=`translate(${s.clientX-l.left+14}px, ${s.clientY-l.top+14}px)`,e.hidden=!1}),t.addEventListener("pointerleave",()=>e.hidden=!0)}async loadBaked(e){let t=a=>new Promise((o,l)=>{let c=new Image;c.onload=()=>o(c),c.onerror=l,c.src=a}),n=e.art.front?await t(e.art.front):null,s=e.art.back?await t(e.art.back):null,r=a=>(o,l,c)=>{o.setTransform(1,0,0,1,0,0),o.drawImage(a,0,0,c.w*l,c.h*l)};n&&this.surface.setArt("front",r(n)),s&&this.surface.setArt("back",r(s));for(let[a,o]of Object.entries(e.pages||{})){let l=await t(o),c=document.createElement("canvas");c.width=l.naturalWidth,c.height=l.naturalHeight,c.getContext("2d").drawImage(l,0,0),this.pages.setPage(+a,c)}this.stage.invalidate()}};function qy(i){let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t)&255;return e}var pa=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Kf=i=>String(i).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function jf(i,{thumbs:e}){let t={cat:"*",q:""},n=i.querySelector("#plCats"),s=i.querySelector("#plGrid"),r=i.querySelector("#plCount"),a=i.querySelector("#plSearch"),o=i.querySelector("#plEmpty");n.innerHTML=[{id:"*",name:"All"},...qs].map(u=>`<button type="button" class="btn btn-envato-dropdown pl-pill" data-cat="${u.id}">${pa(u.name)}</button>`).join("");let l=new Map(Ws.map(u=>[u.id,Kf([u.name,u.nl,u.fr,u.use,...u.sizes.map(d=>d.label)].join(" "))])),c=u=>{let d=u.sizes.length>1?`${u.sizes.length} sizes`:u.sizes[0].label;return`<a href="#/f/${u.id}" class="article-blog no-div pl-card" data-id="${u.id}">
      <div class="blog-image pl-thumb">
        <img loading="lazy" width="640" height="480" src="${e}${u.id}.webp" alt="${pa(u.name)}, blank 3D model">
        <div class="pl-die" aria-hidden="true"></div>
      </div>
      <div class="blog-content">
        <div class="infor">
          <p class="infor_sub text-white-64">${pa(d)}</p>
          <h6><span class="link infor_name">${pa(u.name)}</span></h6>
        </div>
        <div class="btn-action"><i class="icon icon-arrow-top-right"></i></div>
      </div>
    </a>`},h=()=>{let u=Kf(t.q.trim()),d=x=>(t.cat==="*"||x.cat===t.cat)&&(!u||u.split(/\s+/).every(p=>l.get(x.id).includes(p))),f=Ws.filter(d),m="";for(let x of qs){let p=f.filter(g=>g.cat===x.id);p.length&&(m+=`<section class="pl-section">
        <div class="pl-section-head"><span class="text-uppercase text-primary text-caption fw-medium">${String(qs.indexOf(x)+1).padStart(2,"0")} /</span><h2>${pa(x.name)}</h2><span class="pl-section-count">${p.length}</span></div>
        <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4 pl-grid">${p.map(c).join("")}</div>
      </section>`)}s.innerHTML=m,r.textContent=`${f.length} ${f.length===1?"format":"formats"}`,o.hidden=f.length>0,n.querySelectorAll(".pl-pill").forEach(x=>x.classList.toggle("is-active",x.dataset.cat===t.cat))};n.addEventListener("click",u=>{let d=u.target.closest("[data-cat]");d&&(t.cat=d.dataset.cat,h())}),a.addEventListener("input",()=>{t.q=a.value,h()}),i.querySelector("#plReset")?.addEventListener("click",()=>{t.q="",t.cat="*",a.value="",h()}),s.addEventListener("pointerover",u=>{let d=u.target.closest(".pl-card");if(!(!d||d.dataset.die)){d.dataset.die="1";try{let f=Gl(d.dataset.id);d.querySelector(".pl-die").innerHTML=$f(f.die)}catch{}}}),h()}function Xy(){let i=/^#\/f\/([^?]+)(?:\?(.*))?$/.exec(location.hash);if(!i)return null;let e=new URLSearchParams(i[2]||"");return{id:decodeURIComponent(i[1]),size:e.get("size")||void 0,stock:e.get("stock")||void 0,finish:e.get("finish")||void 0,pages:e.get("pages")||void 0,view:e.get("view")||void 0}}function $y(){let i=document.getElementById("plApp");if(!i)return;let e=document.getElementById("plStudioHost"),t=i.dataset.thumbs||"assets/print-lab/thumbs/";jf(i,{thumbs:t});let n=df(),s=document.getElementById("plTotals");s&&(s.textContent=`${n.formats} formats, ${n.sizes} sizes`);let r=null,a=null,o=null,l="",c=()=>{o?.close(),o=null,l="",document.documentElement.classList.remove("pl-lock")},h=()=>{let f=Xy();if(!f||!El[f.id]){c();return}let m=`${f.view==="client"?"c":"l"}:${f.id}`;m!==l&&(l=m,o?.close(),f.view==="client"?(a=a||new ir(e,{mode:"client",onClose:u}),o=a):(r=r||new ir(e,{mode:"lab",onClose:u,onChange:d}),o=r),document.documentElement.classList.add("pl-lock"),o.open(f))};function u(){history.pushState("","",location.pathname+location.search),c()}function d(f){let m=new URLSearchParams;f.size&&m.set("size",f.size),f.stock&&m.set("stock",f.stock),f.finish&&m.set("finish",f.finish),f.pages&&m.set("pages",f.pages),history.replaceState(null,"",`#/f/${f.id}?${m}`)}window.addEventListener("hashchange",h),window.addEventListener("keydown",f=>{f.key==="Escape"&&o&&u()}),h(),window.__plStudio=()=>o}function Yy(i){let e=document.getElementById("plProof"),t=new ir(e,{mode:"proof",proof:i});t.open({id:i.id,size:i.size,stock:i.stock,finish:i.finish,pages:i.pages,noIntro:!0});let n=document.createElement("div");n.className="pl-proofcard";let s=encodeURIComponent(`${i.project} ${i.version}`),r=c=>`mailto:${i.email}?subject=${encodeURIComponent(c)}%20${s}`,a=c=>String(c).replace(/[&<>"]/g,h=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[h]),o=i.links?.length?i.links.map(c=>`<a class="pl-btn${c.primary?" pl-btn-primary":""}" href="${a(c.href)}"${c.download?" download":' target="_blank" rel="noopener"'}>${a(c.label)}</a>`).join(""):`<a class="pl-btn pl-btn-primary" href="${r("Approved:")}">Approve</a>
      <a class="pl-btn" href="${r("Changes for")}">Request changes</a>`,l=i.meta||`${i.client?`${i.client} \xB7 `:""}${i.version} \xB7 ${i.date}`;n.innerHTML=`
    <p class="pl-proof-brand">OK DESIGN</p>
    <p class="pl-proof-meta">${a(l)}</p>
    ${i.note?`<p class="pl-proof-note">${a(i.note)}</p>`:""}
    <div class="pl-proof-actions">${o}</div>`,t.el.querySelector(".pl-stage").appendChild(n),t.loadBaked({art:i.art,pages:i.bookPages}).then(()=>{setTimeout(()=>t.stage.go("closed"),300)}),t.stage.go("flat",{instant:!0}),t.el.classList.add("is-open"),window.__plStudio=()=>t}var Qf=()=>{window.__OK_PROOF__?Yy(window.__OK_PROOF__):$y()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qf):Qf();})();
