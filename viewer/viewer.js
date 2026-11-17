/* OK Design 3D viewer. Built from tools/print-lab. Includes three.js (MIT). */
(()=>{var am=Object.defineProperty;var Mi=(i,e)=>{for(var t in e)am(i,t,{get:e[t],enumerable:!0})};var Oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Qc=1,wu=2;var aa=1,Ko=2,Xs=3,zi=0,Lt=1,rn=2,rs=0,Ys=1,eh=2,th=3,nh=4,Eu=5;var as=100,Tu=101,Au=102,Ru=103,Cu=104,Iu=200,Pu=201,Lu=202,Du=203,ih=204,sh=205,Nu=206,ku=207,Fu=208,Uu=209,Ou=210,Bu=211,zu=212,Hu=213,Gu=214,uo=0,fo=1,po=2,Ls=3,mo=4,go=5,_o=6,xo=7,Jo=0,Vu=1,Wu=2,Xn=0,rh=1,ah=2,oh=3,lh=4,ch=5,hh=6,oa=7;var dh=300,os=301,Zs=302,jo=303,Qo=304,Ds=1e3,Wn=1001,vo=1002,Ht=1003,qu=1004;var la=1005;var Qt=1006,el=1007;var Dn=1008;var an=1009,uh=1010,fh=1011,Ks=1012,tl=1013,Nn=1014,wn=1015,kn=1016,nl=1017,il=1018,ls=1020,ph=35902,mh=35899,gh=1021,_h=1022,Fn=1023,oi=1026,ui=1027,sl=1028,rl=1029,Hi=1030,al=1031;var ol=1033,ca=33776,ha=33777,da=33778,ua=33779,ll=35840,cl=35841,hl=35842,dl=35843,ul=36196,fl=37492,pl=37496,ml=37488,gl=37489,fa=37490,_l=37491,xl=37808,vl=37809,yl=37810,bl=37811,Ml=37812,Sl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Ll=36492,Dl=36494,Nl=36495,kl=36283,Fl=36284,pa=36285,Ul=36286;var Lr=2300,yo=2301,lo=2302,Hc=2303,Gc=2400,Vc=2401,Wc=2402;var $u=3200;var ma=0,Xu=1,fi="",Mt="srgb",Dr="srgb-linear",Nr="linear",rt="srgb";var co=7680;var Yu=519,Zu=512,Ku=513,Ju=514,xh=515,ju=516,Qu=517,vh=518,yh=519,ef=35044;var bh="300 es",Mn=2e3,Ns=2001;function om(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){let i=ks("canvas");return i.style.display="block",i}var Od={},Fs=null;function Mh(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function nf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=nf(i);let e="THREE."+i.shift();if(Fs)Fs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=nf(i);let e="THREE."+i.shift();if(Fs)Fs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Qi(...i){let e=i.join(" ");e in Od||(Od[e]=!0,Ie(...i))}function sf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var rf={[uo]:uo,[po]:_o,[mo]:mo,[Ls]:go,[fo]:fo,[_o]:po,[xo]:xo,[go]:Ls},Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,Rr=Math.PI/180,Us=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Sh(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hm(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function dm(i,e,t,n){return Cr(i,e,1-Math.exp(-t*n))}function um(i,e=1){return e-Math.abs(Sh(i,e*2)-e)}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gm(i,e){return i+Math.random()*(e-i)}function _m(i){return i*(.5-Math.random())}function xm(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(i){return i*Rr}function ym(i){return i*Us}function bm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Eh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function af(i,e){if(e.constructor===Float32Array)return i;let t=Eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function of(i,e){if(e.constructor===Float32Array)return i;let t=Eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var cs={DEG2RAD:Rr,RAD2DEG:Us,generateUUID:Js,clamp:Ve,euclideanModulo:Sh,mapLinear:cm,inverseLerp:hm,lerp:Cr,damp:dm,pingpong:um,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:_m,seededRandom:xm,degToRad:vm,radToDeg:ym,isPowerOfTwo:bm,ceilPowerOfTwo:Mm,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Sm,normalize:of,denormalize:af},Ph=class Ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var he=Ph,pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lh=class Lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;var C=Lh,_c=new C,zd=new pt,Dh=class Dh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],b=s[4],y=s[7],T=s[2],E=s[5],x=s[8];return r[0]=a*_+o*v+l*T,r[3]=a*m+o*b+l*E,r[6]=a*g+o*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*m+h*b+d*E,r[7]=c*g+h*y+d*x,r[2]=u*_+f*v+p*T,r[5]=u*m+f*b+p*E,r[8]=u*g+f*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;var Ue=Dh,xc=new Ue,Hd=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){let i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var je=wm();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=ks("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Tm=0,yc=new C,Kt=class i extends Pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Qt,a=Dn,o=Fn,l=an,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Js(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=dh;Kt.DEFAULT_ANISOTROPY=1;var Nh=class Nh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,T=(g+1)/2,E=(h+u)/4,x=(d+_)/4,S=(p+m)/4;return b>y&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=S/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;var _t=Nh,Mo=class extends Pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zo=class Zo{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,_=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Rm)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Si.crossVectors(n,cn),Si.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Si.crossVectors(n,cn)),Si.normalize(),Ua.crossVectors(cn,Si),s[0]=Si.x,s[4]=Ua.x,s[8]=cn.x,s[1]=Si.y,s[5]=Ua.y,s[9]=cn.y,s[2]=Si.z,s[6]=Ua.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],b=n[7],y=n[11],T=n[15],E=s[0],x=s[4],S=s[8],L=s[12],R=s[1],I=s[5],N=s[9],F=s[13],P=s[2],O=s[6],V=s[10],G=s[14],ee=s[3],W=s[7],j=s[11],te=s[15];return r[0]=a*E+o*R+l*P+c*ee,r[4]=a*x+o*I+l*O+c*W,r[8]=a*S+o*N+l*V+c*j,r[12]=a*L+o*F+l*G+c*te,r[1]=h*E+d*R+u*P+f*ee,r[5]=h*x+d*I+u*O+f*W,r[9]=h*S+d*N+u*V+f*j,r[13]=h*L+d*F+u*G+f*te,r[2]=p*E+_*R+m*P+g*ee,r[6]=p*x+_*I+m*O+g*W,r[10]=p*S+_*N+m*V+g*j,r[14]=p*L+_*F+m*G+g*te,r[3]=v*E+b*R+y*P+T*ee,r[7]=v*x+b*I+y*O+T*W,r[11]=v*S+b*N+y*V+T*j,r[15]=v*L+b*F+y*G+T*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*f-c*u,b=o*f-c*d,y=o*u-l*d,T=a*f-c*h,E=a*u-l*h,x=a*d-o*h;return t*(_*v-m*b+g*y)-n*(p*v-m*T+g*E)+s*(p*b-_*T+g*x)-r*(p*y-_*E+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-n*a,b=t*l-s*a,y=t*c-r*a,T=n*l-s*o,E=n*c-r*o,x=s*c-r*l,S=h*_-d*p,L=h*m-u*p,R=h*g-f*p,I=d*m-u*_,N=d*g-f*_,F=u*g-f*m,P=v*F-b*N+y*I+T*R-E*L+x*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(o*F-l*N+c*I)*O,e[1]=(s*N-n*F-r*I)*O,e[2]=(_*x-m*E+g*T)*O,e[3]=(u*E-d*x-f*T)*O,e[4]=(l*R-a*F-c*L)*O,e[5]=(t*F-s*R+r*L)*O,e[6]=(m*y-p*x-g*b)*O,e[7]=(h*x-u*y+f*b)*O,e[8]=(a*N-o*R+c*S)*O,e[9]=(n*R-t*N-r*S)*O,e[10]=(p*E-_*y+g*v)*O,e[11]=(d*y-h*E-f*v)*O,e[12]=(o*L-a*I-l*S)*O,e[13]=(t*I-n*L+s*S)*O,e[14]=(_*b-p*T-m*v)*O,e[15]=(h*T-d*b+u*v)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,_=a*h,m=a*d,g=o*d,v=l*c,b=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return s[0]=(1-(_+g))*T,s[1]=(f+y)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+g))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(p+b)*x,s[9]=(m-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Mn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ns)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zo.prototype.isMatrix4=!0;var Be=Zo,_s=new C,Rn=new Be,Am=new C(0,0,0),Rm=new C(1,1,1),Si=new C,Ua=new C,cn=new C,Vd=new Be,Wd=new pt,nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cm=0,qd=new C,xs=new pt,ti=new Be,Oa=new C,yr=new C,Im=new C,Pm=new pt,$d=new C(1,0,0),Xd=new C(0,1,0),Yd=new C(0,0,1),Zd={type:"added"},Lm={type:"removed"},vs={type:"childadded",child:null},bc={type:"childremoved",child:null},At=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new nn,n=new pt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ue}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(yr,Oa,this.up):ti.lookAt(Oa,yr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ti),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),vs.child=e,this.dispatchEvent(vs),vs.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dm={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Sh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mc(a,r,e+1/3),this.g=Mc(a,r,e),this.b=Mc(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return je.workingToColorSpace(Yt.copy(this),e),Math.round(Ve(Yt.r*255,0,255))*65536+Math.round(Ve(Yt.g*255,0,255))*256+Math.round(Ve(Yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Mt){je.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Ba);let n=Cr(wi.h,Ba.h,t),s=Cr(wi.s,Ba.s,t),r=Cr(wi.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ze;ze.NAMES=lf;var es=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new C,ni=new C,Sc=new C,ii=new C,ys=new C,bs=new C,Kd=new C,wc=new C,Ec=new C,Tc=new C,Ac=new _t,Rc=new _t,Cc=new _t,Ri=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ni.subVectors(n,t),Sc.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(ni),l=Cn.dot(Sc),c=ni.dot(ni),h=ni.dot(Sc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ac,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Cc,r.z),a}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ni.subVectors(e,t),Cn.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),bs.subVectors(r,n),wc.subVectors(e,n);let l=ys.dot(wc),c=bs.dot(wc);if(l<=0&&c<=0)return t.copy(n);Ec.subVectors(e,s);let h=ys.dot(Ec),d=bs.dot(Ec);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ys,a);Tc.subVectors(e,r);let f=ys.dot(Tc),p=bs.dot(Tc);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(bs,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Kd.subVectors(r,s),o=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Kd,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(ys,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Ha.subVectors(this.max,br),Ms.subVectors(e.a,br),Ss.subVectors(e.b,br),ws.subVectors(e.c,br),Ei.subVectors(Ss,Ms),Ti.subVectors(ws,Ss),Zi.subVectors(Ms,ws);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!Ic(t,Ms,Ss,ws,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Ms,Ss,ws,Ha))?!1:(Ga.crossVectors(Ei,Ti),t=[Ga.x,Ga.y,Ga.z],Ic(t,Ms,Ss,ws,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,za=new bt,Ms=new C,Ss=new C,ws=new C,Ei=new C,Ti=new C,Zi=new C,br=new C,Ha=new C,Ga=new C,Ki=new C;function Ic(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Tt=new C,Va=new he,Nm=0,Pt=class extends Pn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=e!==void 0?Eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):af(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):of(e,this.array)}};var Fr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},km=new bt,Mr=new C,Pc=new C,li=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Pc)),this.expandByPoint(Mr.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fm=0,bn=new Be,Lc=new At,Es=new C,hn=new bt,Sr=new bt,zt=new C,St=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?Ur:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(hn.min,Sr.min),hn.expandByPoint(zt),zt.addVectors(hn.max,Sr.max),hn.expandByPoint(zt)):(hn.expandByPoint(Sr.min),hn.expandByPoint(Sr.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),zt.add(Es)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;let h=new C,d=new C,u=new C,f=new he,p=new he,_=new he,m=new C,g=new C;function v(L,R,I){c[L]=c[R]=c[I]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,I),d.sub(h),u.sub(h),p.sub(f),_.sub(f);let N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(N),o[L].add(m),o[R].add(m),o[I].add(m),l[L].add(g),l[R].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,R=b.length;L<R;++L){let I=b[L],N=I.start,F=I.count;for(let P=N,O=N+F;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new C,T=new C,E=new C,x=new C;function S(L){E.fromBufferAttribute(s,L),x.copy(E);let R=o[L];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(x,R);let N=T.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,N)}for(let L=0,R=n.count;L<R;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Pt(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dc=new C,Um=new C,Om=new Ue,dn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dc.subVectors(n,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Om.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bm=0,Ln=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ys,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ri=new C,Nc=new C,Wa=new C,qa=new C,Ci=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nc.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),qa.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),o=qa.dot(this.direction),l=-qa.dot(Wa),c=qa.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nc).addScaledVector(Wa,u),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,S,L,R,I,N,F,P,O,V,G,ee;if(y>=T&&y>=E?(L=l,N=d,O=p,ee=g,l>=0?(x=c,S=h,R=u,I=f,F=_,P=m,V=v,G=b):(x=h,S=c,R=f,I=u,F=m,P=_,V=b,G=v)):T>=E?(L=c,N=u,O=_,ee=v,c>=0?(x=h,S=l,R=f,I=d,F=m,P=p,V=b,G=g):(x=l,S=h,R=d,I=f,F=p,P=m,V=g,G=b)):(L=h,N=f,O=m,ee=b,h>=0?(x=l,S=c,R=d,I=u,F=p,P=_,V=g,G=v):(x=c,S=l,R=u,I=d,F=_,P=p,V=v,G=g)),L===0)return null;let W=x/L,j=S/L,te=1/L,be=R-W*N,Fe=I-j*N,Z=F-W*O,_e=P-j*O,Me=V-W*ee,Pe=G-j*ee,xe=Me*_e-Pe*Z,Ge=be*Pe-Fe*Me,wt=Z*Fe-_e*be;if(s){if(xe<0||Ge<0||wt<0)return null}else if((xe<0||Ge<0||wt<0)&&(xe>0||Ge>0||wt>0))return null;let Ne=xe+Ge+wt;if(Ne===0)return null;let at=te*(xe*N+Ge*O+wt*ee);return(Ne>0?at<0:at>0)?null:this.at(at/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jd=new Be,Ji=new Ci,$a=new li,jd=new C,Xa=new C,Ya=new C,Za=new C,kc=new C,Ka=new C,Qd=new C,Ja=new C,Ae=class extends At{constructor(e=new St,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(kc.fromBufferAttribute(d,e),a?Ka.addScaledVector(kc,h):Ka.addScaledVector(kc.sub(t),h))}t.add(Ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!($a.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere($a,jd)===null||Ji.origin.distanceToSquared(jd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){let E=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);s=ja(this,g,e,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=ja(this,a,e,n,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){let E=y,x=y+1,S=y+2;s=ja(this,g,e,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let v=m,b=m+1,y=m+2;s=ja(this,a,e,n,c,h,d,v,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function zm(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xa),i.getVertexPosition(l,Ya),i.getVertexPosition(c,Za);let h=zm(i,e,t,n,Xa,Ya,Za,Qd);if(h){let d=new C;Ri.getBarycoord(Qd,Xa,Ya,Za,d),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,l,c,d,new he)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,d,new he)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Ri.getNormal(Xa,Ya,Za,u.normal),h.face=u,h.barycoord=d}return h}var Or=class extends Kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ht,h=Ht,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Be,eu=new Be,Qa=[],tu=new bt,Hm=new Be,wr=new Ae,Er=new li,ts=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),tu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Er.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),eu.multiplyMatrices(n,Ts),wr.matrixWorld=eu,wr.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){let l=Qa[a];l.instanceId=r,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,sl,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new li,Gm=new he(.5,.5),eo=new C,Pi=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],b=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-p,T-v).normalize(),s[1].setComponents(c+a,f+h,g+p,T+v).normalize(),s[2].setComponents(c+o,f+d,g+_,T+b).normalize(),s[3].setComponents(c-o,f-d,g-_,T-b).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,g-m,T-y).normalize();else if(s[4].setComponents(c-l,f-u,g-m,T-y).normalize(),t===Mn)s[5].setComponents(c+l,f+u,g+m,T+y).normalize();else if(t===Ns)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=Gm.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},nu=new Be,wo=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Pi),n[s].setFromProjectionMatrix(nu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Pi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Hs=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eo=new C,To=new C,iu=new Be,Tr=new Ci,to=new li,Fc=new C,su=new C,Ao=class extends At{constructor(e=new St,t=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eo.fromBufferAttribute(t,s-1),To.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(To);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;iu.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),v=h.getX(_+1),b=no(this,e,Tr,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=no(this,e,Tr,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){let g=no(this,e,Tr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=no(this,e,Tr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),t.distanceSqToSegment(Eo,To,Fc,su)>n)return;Fc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fc);if(!(c<e.near||c>e.far))return{distance:c,point:su.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ru=new C,au=new C,zr=class extends Ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ru.fromBufferAttribute(t,s),au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ru.distanceTo(au);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hr=class extends Kt{constructor(e=[],t=os,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fn=class extends Kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Kt{constructor(e,t,n=Nn,s,r,a,o=Ht,l=Ht,c,h=oi,d=1){if(h!==oi&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gr=class extends ci{constructor(e,t=Nn,n=os,s,r,a=Ht,o=Ht,l,c=oi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vr=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sn=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function p(_,m,g,v,b,y,T,E,x,S,L){let R=y/x,I=T/S,N=y/2,F=T/2,P=E/2,O=x+1,V=S+1,G=0,ee=0,W=new C;for(let j=0;j<V;j++){let te=j*I-F;for(let be=0;be<O;be++){let Fe=be*R-N;W[_]=Fe*v,W[m]=te*b,W[g]=P,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(be/x),d.push(1-j/S),G+=1}}for(let j=0;j<S;j++)for(let te=0;te<x;te++){let be=u+te+O*j,Fe=u+te+O*(j+1),Z=u+(te+1)+O*(j+1),_e=u+(te+1)+O*j;l.push(be,Fe,_e),l.push(Fe,Z,_e),ee+=6}o.addGroup(f,ee,L),f+=ee,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ns=class i extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,_=s+1,m=new C,g=new C;for(let v=0;v<=p;v++){let b=0,y=0,T=0,E=0;if(v<=n){let L=v/n,R=L*Math.PI/2;y=-h-e*Math.cos(R),T=e*Math.sin(R),E=-e*Math.cos(R),b=L*d}else if(v<=n+r){let L=(v-n)/r;y=-h+L*t,T=e,E=0,b=d+L*u}else{let L=(v-n-r)/n,R=L*Math.PI/2;y=h+e*Math.sin(R),T=e*Math.cos(R),E=e*Math.sin(R),b=d+u+L*d}let x=Math.max(0,Math.min(1,b/f)),S=0;v===0?S=.5/s:v===p&&(S=-.5/s);for(let L=0;L<=s;L++){let R=L/s,I=R*Math.PI*2,N=Math.sin(I),F=Math.cos(I);g.x=-T*F,g.y=y,g.z=T*N,o.push(g.x,g.y,g.z),m.set(-T*F,E,T*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,x)}if(v>0){let L=(v-1)*_;for(let R=0;R<s;R++){let I=L+R,N=L+R+1,F=v*_+R,P=v*_+R+1;a.push(I,N,F),a.push(N,P,F)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qn=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hi=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function v(){let y=new C,T=new C,E=0,x=(t-e)/n;for(let S=0;S<=r;S++){let L=[],R=S/r,I=R*(t-e)+e;for(let N=0;N<=s;N++){let F=N/s,P=F*l+o,O=Math.sin(P),V=Math.cos(P);T.x=I*O,T.y=-R*n+m,T.z=I*V,d.push(T.x,T.y,T.z),y.set(O,x,V).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-R),L.push(p++)}_.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let R=_[L][S],I=_[L+1][S],N=_[L+1][S+1],F=_[L][S+1];(e>0||L!==0)&&(h.push(R,I,F),E+=3),(t>0||L!==r-1)&&(h.push(I,N,F),E+=3)}c.addGroup(g,E,0),g+=E}function b(y){let T=p,E=new he,x=new C,S=0,L=y===!0?e:t,R=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let N=0;N<=s;N++){let P=N/s*l+o,O=Math.cos(P),V=Math.sin(P);x.x=L*V,x.y=m*R,x.z=L*O,d.push(x.x,x.y,x.z),u.push(0,R,0),E.x=O*.5+.5,E.y=V*.5*R+.5,f.push(E.x,E.y),p++}for(let N=0;N<s;N++){let F=T+N,P=I+N;y===!0?h.push(P,P+1,F):h.push(P+1,P,F),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new Be;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Wr=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ro=class extends Wr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ou=new C,lu=new C,Uc=new Th,Oc=new Th,Bc=new Th,Li=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(lu.subVectors(s[0],s[1]).add(s[0]),c=lu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ou),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Uc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),Oc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),Bc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Oc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Bc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Uc.calc(l),Oc.calc(l),Bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Vm(i,e){let t=1-i;return t*t*e}function Wm(i,e){return 2*(1-i)*i*e}function qm(i,e){return i*i*e}function Ir(i,e,t,n){return Vm(i,e)+Wm(i,t)+qm(i,n)}function $m(i,e){let t=1-i;return t*t*t*e}function Xm(i,e){let t=1-i;return 3*t*t*i*e}function Ym(i,e){return 3*(1-i)*i*i*e}function Zm(i,e){return i*i*i*e}function Pr(i,e,t,n,s){return $m(i,e)+Xm(i,t)+Ym(i,n)+Zm(i,s)}var Co=class extends Sn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Io=class extends Sn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y),Pr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends Sn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Sn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Sn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(e,s.x,r.x,a.x),Ir(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Sn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(e,s.x,r.x,a.x),Ir(e,s.y,r.y,a.y),Ir(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(cu(o,l.x,c.x,h.x,d.x),cu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Km=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Li,CubicBezierCurve:Co,CubicBezierCurve3:Io,EllipseCurve:Wr,LineCurve:Po,LineCurve3:Lo,QuadraticBezierCurve:Do,QuadraticBezierCurve3:qr,SplineCurve:No});function Jm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=n0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return $r(r,a,t,o,l,c,0),a}function cf(i,e,t,n,s){let r;if(s===f0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=hu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=hu(a/n|0,i[a],i[a+1],r);return r&&Gs(r,r.next)&&(Yr(r),r=r.next),r}function is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||yt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,s,r,a){if(!i)return;!a&&r&&o0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Qm(i,n,s,r):jm(i)){e.push(l.i,i.i,c.i),Yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=e0(is(i),e),$r(i,e,t,n,s,r,2)):a===2&&t0(i,e,t,n,s,r):$r(is(i),e,t,n,s,r,1);break}}}function jm(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ar(s,o,r,l,a,c,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Qm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(yt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),g=qc(f,p,e,t,n),v=qc(_,m,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Ar(o,h,l,d,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Ar(o,h,l,d,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Ar(o,h,l,d,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Ar(o,h,l,d,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function e0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gs(n,s)&&df(n,t,t.next,s)&&Xr(n,s)&&Xr(s,n)&&(e.push(n.i,t.i,s.i),Yr(t),Yr(t.next),t=i=s),t=t.next}while(t!==i);return is(t)}function t0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&h0(a,o)){let l=uf(a,o);a=is(a,a.next),l=is(l,l.next),$r(a,e,t,n,s,r,0),$r(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function n0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=cf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(c0(c))}s.sort(i0);for(let r=0;r<s.length;r++)t=s0(s[r],t);return t}function i0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function s0(i,e){let t=r0(i,e);if(!t)return e;let n=uf(t,i);return is(n,n.next),is(t,t.next)}function r0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gs(i,t))return t;do{if(Gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Xr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&a0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function a0(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function o0(i,e,t,n){let s=i;do s.z===0&&(s.z=qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,l0(s)}function l0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function c0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ar(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hf(i,e,t,n,s,r,a,o)}function h0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!d0(i,e)&&(Xr(i,e)&&Xr(e,i)&&u0(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Gs(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gs(i,e){return i.x===e.x&&i.y===e.y}function df(i,e,t,n){let s=so(yt(i,e,t)),r=so(yt(i,e,n)),a=so(yt(t,n,i)),o=so(yt(t,n,e));return!!(s!==r&&a!==o||s===0&&io(i,t,e)||r===0&&io(i,n,e)||a===0&&io(t,i,n)||o===0&&io(t,e,n))}function io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function d0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function u0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function uf(i,e){let t=$c(i.i,i.x,i.y),n=$c(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hu(i,e,t,n){let s=$c(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function f0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xc=class{static triangulate(e,t,n=2){return Jm(e,t,n)}},Di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];du(e),uu(n,e);let a=e.length;t.forEach(du);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,uu(n,t[l]);let o=Xc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function uu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vs=class i extends St{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new C,u=new he,f=new C,p=new C,_=new C,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){let b=n+v*h*s,y=Math.sin(b),T=Math.cos(b);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*T,a.push(d.x,d.y,d.z),u.x=v/t,u.y=E/(e.length-1),o.push(u.x,u.y);let x=l[3*E+0]*y,S=l[3*E+1],L=l[3*E+0]*T;c.push(x,S,L)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let y=b+v*e.length,T=y,E=y+e.length,x=y+e.length+1,S=y+1;r.push(T,E,S),r.push(x,S,E)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var di=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-v,0),_.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let b=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;f.push(b,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var pn=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,p=new C;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,b=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ss=class i extends St{constructor(e=new qr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new he,h=new C,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),v(),g()}function m(b){h=e.getPointAt(b/t,h);let y=a.normals[b],T=a.binormals[b];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,S=Math.sin(x),L=-Math.cos(x);l.x=L*y.x+S*T.x,l.y=L*y.y+S*T.y,l.z=L*y.z+S*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let T=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),x=(s+1)*b+y,S=(s+1)*(b-1)+y;p.push(T,E,S),p.push(E,x,S)}}function v(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Km[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Zr=class extends Ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fu(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let s in n)e[s]=n[s]}return e}function fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function p0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var ff={clone:hs,merge:Jt},m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kr=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fo=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function As(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ro(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,o=2*t-n;break;case Wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,l=2*n-t;break;case Wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,b=(-1-f)*m+(1.5+f)*_+.5*p,y=f*m-f*_;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+b*a[l+T]+y*a[d+T];return r}},Bo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},zo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ho=class extends Ni{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=f*u+p*2,v=d[g],b=d[g+1],y=e*u+p*2,T=h[y],E=h[y+1],x=x0(n,t,v,T,s);r[p]=pf(x,_,b,E,m)}return r}};function pf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function x0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=pf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=_0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ro(e.settings)&&(n.settings={inTangents:As(e.settings.inTangents,Array),outTangents:As(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ho(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break;case Hc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ro(this.settings)&&(pu(this.settings.inTangents,e),pu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ro(this.settings)&&(mu(this.settings.inTangents,e),mu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function mu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=yo;var ki=class extends mn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Lr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="color";var Vo=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="number";var Wo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)pt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Jr=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends mn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Lr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="vector";var ho={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $o=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mf=new $o,Ws=class{constructor(e){this.manager=e!==void 0?e:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=new WeakMap,Xo=class extends Ws{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ho.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Rs.get(a);d===void 0&&(d=[],Rs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=ks("img");function l(){h(),t&&t(this);let d=Rs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Rs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),ho.remove(`image:${e}`);let u=Rs.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ho.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var jr=class extends Ws{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,a=new Xo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qr=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var zc=new Be,_u=new C,xu=new C,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=new C,oo=new pt,Vn=new C,ta=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ao,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ao,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new C,vu=new he,yu=new he,Zt=class extends ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,vu,yu),t.subVectors(yu,vu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Yc=class extends ea{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},na=class extends Qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ia=class extends ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends ea{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Is=1,$s=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Cs,Is,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Cs,Is,e,t);r.layers=this.layers,this.add(r);let a=new Zt(Cs,Is,e,t);a.layers=this.layers,this.add(a);let o=new Zt(Cs,Is,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Cs,Is,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Cs,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Yo=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Rh="\\[\\]\\.:\\/",v0=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",y0="[^"+Rh.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Ch),M0=/(WCOD+)?/.source.replace("WCOD",y0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),E0=new RegExp("^"+b0+M0+S0+w0+"$"),T0=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Kc;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dM=new Float32Array(1);var bu=new Be,sa=class{constructor(e,t,n=0,s=1/0){this.ray=new Ci(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bu),this}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Mu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jc(e[s],this,n,t);return n.sort(Mu),n}};function Mu(i,e){return i.distance-e.distance}function Jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Jc(r[a],e,t,!0)}}var Ui=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kh=class kh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};kh.prototype.isMatrix2=!0;var jc=kh;var ra=class extends Pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ih(i,e,t,n){let s=A0(n);switch(t){case gh:return i*e;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case Hi:return i*e*2/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case _h:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case ol:return i*e*4/s.components*s.byteLength;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case dl:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case fl:case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case fa:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kl:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pa:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A0(i){switch(i){case an:case uh:return{byteLength:1,components:1};case Ks:case fh:case kn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Nn:case tl:case wn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Uf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function C0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
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
#endif`,Ag=`uniform sampler2D dfgLUT;
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
}`,Rg=`
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bg=`#if defined( USE_POINTS_UV )
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
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform float backgroundBlurriness;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
}`,U_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,q_=`#define LAMBERT
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
}`,$_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,J_=`#define PHONG
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
}`,j_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:I0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:k0,aomap_fragment:F0,aomap_pars_fragment:U0,batching_pars_vertex:O0,batching_vertex:B0,begin_vertex:z0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:W0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:Y0,color_fragment:Z0,color_pars_fragment:K0,color_pars_vertex:J0,color_vertex:j0,common:Q0,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:bg,envmap_vertex:dg,fog_vertex:ug,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:xg,lights_lambert_pars_fragment:vg,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:wg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,lightprobes_pars_fragment:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:kg,map_fragment:Fg,map_pars_fragment:Ug,map_particle_fragment:Og,map_particle_pars_fragment:Bg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:qg,morphtarget_vertex:$g,normal_fragment_begin:Xg,normal_fragment_maps:Yg,normal_pars_fragment:Zg,normal_pars_vertex:Kg,normal_vertex:Jg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:u_,shadowmap_vertex:f_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:__,skinnormal_vertex:x_,specularmap_fragment:v_,specularmap_pars_fragment:y_,tonemapping_fragment:b_,tonemapping_pars_fragment:M_,transmission_fragment:S_,transmission_pars_fragment:w_,uv_pars_fragment:E_,uv_pars_vertex:T_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:I_,backgroundCube_vert:P_,backgroundCube_frag:L_,cube_vert:D_,cube_frag:N_,depth_vert:k_,depth_frag:F_,distance_vert:U_,distance_frag:O_,equirect_vert:B_,equirect_frag:z_,linedashed_vert:H_,linedashed_frag:G_,meshbasic_vert:V_,meshbasic_frag:W_,meshlambert_vert:q_,meshlambert_frag:$_,meshmatcap_vert:X_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:K_,meshphong_vert:J_,meshphong_frag:j_,meshphysical_vert:Q_,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ax,sprite_vert:ox,sprite_frag:lx},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Zn={basic:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Jt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Jt([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Zn.physical={uniforms:Jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ol={r:0,b:0,g:0},cx=new Be,Of=new Ue;Of.set(-1,0,0,0,1,0,0,0,1);function hx(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(v){let b=!1,y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new Ae(new sn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:hs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Of),c.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ae(new di(2,2),new $n({name:"BackgroundMaterial",uniforms:hs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Ol,Ah(i)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function dx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,N,F,P,O){let V=!1,G=d(I,P,F,N);r!==G&&(r=G,c(r.object)),V=f(I,P,F,O),V&&p(I,P,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(I,N,F,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,F,P){let O=P.wireframe===!0,V=n[N.id];V===void 0&&(V={},n[N.id]=V);let G=I.isInstancedMesh===!0?I.id:0,ee=V[G];ee===void 0&&(ee={},V[G]=ee);let W=ee[F.id];W===void 0&&(W={},ee[F.id]=W);let j=W[O];return j===void 0&&(j=u(l()),W[O]=j),j}function u(I){let N=[],F=[],P=[];for(let O=0;O<t;O++)N[O]=0,F[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,N,F,P){let O=r.attributes,V=N.attributes,G=0,ee=F.getAttributes();for(let W in ee)if(ee[W].location>=0){let te=O[W],be=V[W];if(be===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function p(I,N,F,P){let O={},V=N.attributes,G=0,ee=F.getAttributes();for(let W in ee)if(ee[W].location>=0){let te=V[W];te===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));let be={};be.attribute=te,te&&te.data&&(be.data=te.data),O[W]=be,G++}r.attributes=O,r.attributesNum=G,r.index=P}function _(){let I=r.newAttributes;for(let N=0,F=I.length;N<F;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let F=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;F[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),O[I]!==N&&(i.vertexAttribDivisor(I,N),O[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let F=0,P=N.length;F<P;F++)N[F]!==I[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function b(I,N,F,P,O,V,G){G===!0?i.vertexAttribIPointer(I,N,F,O,V):i.vertexAttribPointer(I,N,F,P,O,V)}function y(I,N,F,P){_();let O=P.attributes,V=F.getAttributes(),G=N.defaultAttributeValues;for(let ee in V){let W=V[ee];if(W.location>=0){let j=O[ee];if(j===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let te=j.normalized,be=j.itemSize,Fe=e.get(j);if(Fe===void 0)continue;let Z=Fe.buffer,_e=Fe.type,Me=Fe.bytesPerElement,Pe=_e===i.INT||_e===i.UNSIGNED_INT||j.gpuType===tl;if(j.isInterleavedBufferAttribute){let xe=j.data,Ge=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,wt=j.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Ne=0;Ne<W.locationSize;Ne++)g(W.location+Ne,xe.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ne=0;Ne<W.locationSize;Ne++)m(W.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ne=0;Ne<W.locationSize;Ne++)b(W.location+Ne,be/W.locationSize,_e,te,Ge*Me,(wt+be/W.locationSize*Ne)*Me,Pe)}else{if(j.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe,j.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let xe=0;xe<W.locationSize;xe++)b(W.location+xe,be/W.locationSize,_e,te,be*Me,be/W.locationSize*xe*Me,Pe)}}else if(G!==void 0){let te=G[ee];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}v()}function T(){L();for(let I in n){let N=n[I];for(let F in N){let P=N[F];for(let O in P){let V=P[O];for(let G in V)h(V[G].object),delete V[G];delete P[O]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let F in N){let P=N[F];for(let O in P){let V=P[O];for(let G in V)h(V[G].object),delete V[G];delete P[O]}}delete n[I.id]}function x(I){for(let N in n){let F=n[N];for(let P in F){let O=F[P];if(O[I.id]===void 0)continue;let V=O[I.id];for(let G in V)h(V[G].object),delete V[G];delete O[I.id]}}}function S(I){for(let N in n){let F=n[N],P=I.isInstancedMesh===!0?I.id:0,O=F[P];if(O!==void 0){for(let V in O){let G=O[V];for(let ee in G)h(G[ee].object),delete G[ee];delete O[V]}delete F[P],Object.keys(F).length===0&&delete n[N]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ux(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Fn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==an&&x!==wn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:E}}function px(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,u,b,f);for(let T=0;T!==b;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var xa=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:rs});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Qt),new $s(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},gf=256,mx=3,gx=20,Bf=256,zf=16,_x=3,xx=new C,vx=new ze,Qs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $s(1,10,null),this._boxMesh=new Ae(new sn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=xx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(vx));let m=new $s(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gf,wh(e))}_fromTexture(e,t){e.mapping===os||e.mapping===Zs?this._setSize(e.image.length===0?gf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_f(e,!1,!1),n=Math.log2(e)-mx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_f(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===os||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yx(),this._integrationMaterial=bx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/zf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-_x)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Bf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Mx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function _f(i,e,t){return new xa(i,{minFilter:Dn,generateMipmaps:e,type:kn,colorSpace:Dr,depthBuffer:t})}function va(i,e,t){return new $n({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Lt,blending:rs,depthTest:!1,depthWrite:!1})}function yx(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bf}u

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
	`)}function bx(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zf}},`

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
	`)}function Mx(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gx}
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
	`)}function xf(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vf(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===jo||f===Qo)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new xa(p.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===jo||f===Qo,_=f===os||f===Zs;if(p||_){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Qs(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Qs(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===jo?u.mapping=os:f===Qo&&(u.mapping=Zs),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ex(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?Ur:Fr,y=new b(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,L=0;S<v;S+=3){let R=x[S+0],I=x[S+1],N=x[S+2];T[L++]=R,T[L++]=I,T[L++]=I,T[L++]=N,T[L++]=N,T[L++]=R}}else{g=m.version;for(let x=0,S=0;x<v;x+=3){let L=x+0,R=x+1,I=x+2;T[S++]=L,T[S++]=R,T[S++]=R,T[S++]=I,T[S++]=I,T[S++]=L}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function u(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Tx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ax(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rx(i,e,t){let n=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new kr(E,y,T,d);x.type=wn,x.needsUpdate=!0;let S=b*4;for(let R=0;R<d;R++){let I=m[R],N=g[R],F=v[R],P=y*T*4*R;for(let O=0;O<I.count;O++){let V=O*S;f===!0&&(s.fromBufferAttribute(I,O),E[P+V+0]=s.x,E[P+V+1]=s.y,E[P+V+2]=s.z,E[P+V+3]=0),p===!0&&(s.fromBufferAttribute(N,O),E[P+V+4]=s.x,E[P+V+5]=s.y,E[P+V+6]=s.z,E[P+V+7]=0),_===!0&&(s.fromBufferAttribute(F,O),E[P+V+8]=s.x,E[P+V+9]=s.y,E[P+V+10]=s.z,E[P+V+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new he(y,T)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Cx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ix={[rh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[oa]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function Px(i,e,t,n,s,r){let a=new un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new St;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let d=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ae(h,d),f=new ia(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,b=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){b=T,y=b.length>0&&b[0].isRenderPass===!0;let E=a.width,x=a.height;b.length>0&&o===null&&(o=new un(E,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new un(E,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new ci(E,x),r===!0&&(c.format=ui,c.type=ls)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<b.length;L++){let R=b[L];R.setSize&&R.setSize(E,x),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===Xn&&b.length===0)return!1;if(v=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Xn,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,m=!0;let x=a,S=o;for(let L=0;L<b.length;L++){let R=b[L];R.enabled!==!1&&(R.render(T,S,x,E),R.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,d.defines={},je.getTransfer(p)===rt&&(d.defines.SRGB_TRANSFER="");let L=Ix[_];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Hf=new Kt,Gf=new ci(1,1),Vf=new Gr(1),Wf=new kr,qf=new So,$f=new Hr,yf=[],bf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),wf=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;wf.set(n),i.uniformMatrix2fv(this.addr,!1,wf),Nt(t,n)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),Nt(t,n)}}function Ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),Nt(t,n)}}function Bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Gl(i){return i.version===0&&(i.compareFunction=yh,i.needsUpdate=!0),i}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Gl(Gf):r=Hf,t.setTexture2D(e||r,s)}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qf,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Gl(Vf):r=$f,t.setTextureCube(e||r,s)}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wf,s)}function Jx(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return kx;case 35674:return Fx;case 35675:return Ux;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return qx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Kx}}function jx(i,e){i.uniform1fv(this.addr,e)}function Qx(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function ev(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function tv(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function nv(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iv(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sv(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rv(i,e){i.uniform1iv(this.addr,e)}function av(i,e){i.uniform2iv(this.addr,e)}function ov(i,e){i.uniform3iv(this.addr,e)}function lv(i,e){i.uniform4iv(this.addr,e)}function cv(i,e){i.uniform1uiv(this.addr,e)}function hv(i,e){i.uniform2uiv(this.addr,e)}function dv(i,e){i.uniform3uiv(this.addr,e)}function uv(i,e){i.uniform4uiv(this.addr,e)}function fv(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gl(Gf):a=Hf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function pv(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qf,r[a])}function mv(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Gl(Vf):a=$f;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function gv(i,e,t){let n=this.cache,s=e.length,r=Hl(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wf,r[a])}function _v(i){switch(i){case 5126:return jx;case 35664:return Qx;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}},Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Ef(i,e){i.seq.push(e),i.map[e.id]=e}function xv(i,e,t){let n=i.name,s=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),a=Fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ef(t,c===void 0?new Oh(o,i,e):new Bh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new zh(o),Ef(t,d)),t=d}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);xv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vv=37297,yv=0;function bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Af=new Ue;function Mv(i){je._getMatrix(Af,je.workingColorSpace,i);let e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bv(i.getShaderSource(e),o)}else return r}function Sv(i,e){let t=Mv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var wv={[rh]:"Linear",[ah]:"Reinhard",[oh]:"Cineon",[lh]:"ACESFilmic",[hh]:"AgX",[oa]:"Neutral",[ch]:"Custom"};function Ev(i,e){let t=wv[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new C;function Tv(){je.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function Rv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _a(i){return i!==""}function Cf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function If(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(Iv,Pv)}function Pv(i,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hh(t)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(i){return i.replace(Lv,Dv)}function Dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Nv={[aa]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function kv(i){return Nv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fv={[Zs]:"ENVMAP_MODE_REFRACTION"};function Uv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function zv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=kv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Uv(t),d=Bv(t),u=Av(t),f=Rv(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(_=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),Tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),a=Hh(a),a=Cf(a,t),a=If(a,t),o=Hh(o),o=Cf(o,t),o=If(o,t),a=Pf(a),o=Pf(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+a,b=g+m+o,y=Tf(s,s.VERTEX_SHADER,v),T=Tf(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(T)||"",P=I.trim(),O=N.trim(),V=F.trim(),G=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,T);else{let W=Rf(s,y,"vertex"),j=Rf(s,T,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+j)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(O===""||V==="")&&(ee=!1);ee&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:O,prefix:_},fragmentShader:{log:V,prefix:m}})}s.deleteShader(y),s.deleteShader(T),x=new js(s,p),S=Cv(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,vv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var Hv=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vh(e),t.set(e,n)),n}},Vh=class{constructor(e){this.id=Hv++,this.code=e,this.usedTimes=0}};function Gv(i){return i===Hi||i===fa||i===pa}function Vv(i,e,t,n,s,r){let a=new Bs,o=new Gh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,L,R,I,N){let F=R.fog,P=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||O,V),ee=u[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=j!==void 0?j.length:0,be=0;P.morphAttributes.position!==void 0&&(be=1),P.morphAttributes.normal!==void 0&&(be=2),P.morphAttributes.color!==void 0&&(be=3);let Fe,Z,_e,Me;if(ee){let me=Zn[ee];Fe=me.vertexShader,Z=me.fragmentShader}else{Fe=x.vertexShader,Z=x.fragmentShader;let me=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,me,ot),_e=me.id,Me=ot.id}let Pe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ge=I.isInstancedMesh===!0,wt=I.isBatchedMesh===!0,Ne=!!x.map,at=!!x.matcap,ht=!!G,Ze=ht&&G.isPMREMTexture===!0,Vt=!!x.aoMap,Ct=!!x.lightMap,tn=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Gn=!!x.displacementMap,Ut=!!x.emissiveMap,_n=!!x.metalnessMap,xn=!!x.roughnessMap,vn=x.anisotropy>0,U=x.clearcoat>0,yn=x.diffuseRoughness>0,mt=x.dispersion>0,gt=x.retroreflectivity>0,fe=x.iridescence>0,It=x.sheen>0,Le=x.transmission>0,Oe=vn&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,M=U&&!!x.clearcoatNormalMap,z=U&&!!x.clearcoatRoughnessMap,ne=yn&&!!x.diffuseRoughnessMap,Q=fe&&!!x.iridescenceMap,re=fe&&!!x.iridescenceThicknessMap,de=It&&!!x.sheenColorMap,X=It&&!!x.sheenRoughnessMap,Y=!!x.specularMap,oe=!!x.specularColorMap,D=!!x.specularIntensityMap,K=Le&&!!x.transmissionMap,$=Le&&!!x.thicknessMap,le=!!x.gradientMap,se=!!x.alphaMap,ae=x.alphaTest>0,Te=!!x.alphaHash,qe=!!x.extensions,ie=Xn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=Ze?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,We={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:Z,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:wt,batchingColor:wt&&I._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&I.instanceColor!==null,instancingMorph:Ge&&I.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:at,envMap:ht,envMapMode:ht&&G.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Ce.length-1:null,envMapSize:Ze?Ce[0].width:null,aoMap:Vt,lightMap:Ct,bumpMap:tn,normalMap:xt,displacementMap:Gn,emissiveMap:Ut,normalMapObjectSpace:xt&&x.normalMapType===Xu,normalMapTangentSpace:xt&&x.normalMapType===ma,packedNormalMap:xt&&x.normalMapType===ma&&Gv(x.normalMap.format),metalnessMap:_n,roughnessMap:xn,anisotropy:vn,anisotropyMap:Oe,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:yn,diffuseRoughnessMap:ne,dispersion:mt,retroreflection:gt,iridescence:fe,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:It,sheenColorMap:de,sheenRoughnessMap:X,specularMap:Y,specularColorMap:oe,specularIntensityMap:D,transmission:Le,transmissionMap:K,thicknessMap:$,gradientMap:le,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Te,combine:x.combine,mapUv:Ne&&f(x.map.channel),aoMapUv:Vt&&f(x.aoMap.channel),lightMapUv:Ct&&f(x.lightMap.channel),bumpMapUv:tn&&f(x.bumpMap.channel),normalMapUv:xt&&f(x.normalMap.channel),displacementMapUv:Gn&&f(x.displacementMap.channel),emissiveMapUv:Ut&&f(x.emissiveMap.channel),metalnessMapUv:_n&&f(x.metalnessMap.channel),roughnessMapUv:xn&&f(x.roughnessMap.channel),anisotropyMapUv:Oe&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(x.sheenRoughnessMap.channel),specularMapUv:Y&&f(x.specularMap.channel),specularColorMapUv:oe&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:K&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:se&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||vn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Ne||se),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=u[x.type],L;if(S){let R=Zn[S];L=ff.clone(R.uniforms)}else L=x.uniforms;return L}function b(x,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new zv(i,S,x,s),c.push(L),h.set(S,L)),L}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function Wv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,m,g){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=m,v.group=g),e++,v}function l(u,f,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let b=o(u,f,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(u,f,p,_,m,g){let v=o(u,f,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||qv),n.length>1&&n.sort(f||Df),s.length>1&&s.sort(f||Df)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function $v(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Nf,i.set(n,[a])):s>=r.length?(a=new Nf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new ze};break;case"SpotLight":t={position:new C,direction:new C,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zv=0;function Kv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jv(i){let e=new Xv,t=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Be,a=new Be;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,v=0,b=0,y=0,T=0,E=0,x=0,S=0,L=0,R=0;c.sort(Kv);for(let N=0,F=c.length;N<F;N++){let P=c[N],O=P.color,V=P.intensity,G=P.distance,ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*V,d+=O.g*V,u+=O.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],V);R++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=te,n.sunShadowMap[p]=ee;let be=j.getViewportCount();for(let Fe=0;Fe<be;Fe++)n.sunShadowMatrix[_+Fe]=j.getMatrix(Fe),n.sunShadowCascade[_+Fe]=j._cascadeData[Fe];_+=be,p++}n.sun[f]=W,f++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=W,m++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(V),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let j=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,j.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[v]=j.matrix,P.castShadow){let te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[v]=te,n.spotShadowMap[v]=ee,x++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(O).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=W,b++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let j=P.shadow,te=t.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[y]=W,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=R,n.version=Zv++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function kf(i){let e=new Jv(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kf(i),e.set(s,[o])):r>=a.length?(o=new kf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`,ty=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],ny=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ff=new Be,ga=new C,Uh=new C;function iy(i,e,t){let n=new Pi,s=new he,r=new he,a=new _t,o=new Fo,l=new Uo,c={},h=t.maxTextureSize,d={[zi]:Lt,[Lt]:zi,[rn]:rn},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Qv,fragmentShader:ey}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new St;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let g=this.type;this.render=function(E,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Ko&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(rs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=g!==this.type;F&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){let V=E[P],G=V.shadow;if(G===void 0){Ie("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();s.multiply(ee),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||F===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xs){if(V.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new un(s.x,s.y,{format:Hi,type:kn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new ci(s.x,s.y,wn),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=oi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht}else V.isPointLight?(G.map=new xa(s.x),G.map.depthTexture=new Gr(s.x,Nn)):(G.map=new un(s.x,s.y),G.map.depthTexture=new ci(s.x,s.y,Nn)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=oi,this.type===aa?(G.map.depthTexture.compareFunction=W?vh:xh,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,S);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let be=0;be<j;be++){let Fe=G.getCamera(be);if(V.isPointLight){let Z=G.camera,_e=G.matrix,Me=V.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),ga.setFromMatrixPosition(V.matrixWorld),Z.position.copy(ga),Uh.copy(Z.position),Uh.add(ty[be]),Z.up.copy(ny[be]),Z.lookAt(Uh),Z.updateMatrixWorld(),_e.makeTranslation(-ga.x,-ga.y,-ga.z),Ff.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ff,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,be),i.clear();else{be===0&&(i.setRenderTarget(G.map),i.clear());let Z=G.getViewport(be);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(a)}n=G.getFrustum(be),y(x,S,Fe,V,te,this.type)}G.isPointLightShadow!==!0&&this.type===Xs&&v(G,S),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,R,I)};function v(E,x){let S=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new un(s.x,s.y,{format:Hi,type:kn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,S,f,_,null)}function b(E,x,S,L){let R=null,I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=R.uuid,F=x.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let O=P[F];O===void 0&&(O=R.clone(),P[F]=O,x.addEventListener("dispose",T)),R=O}if(R.visible=x.visible,R.wireframe=x.wireframe,L===Xs?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=S}return R}function y(E,x,S,L,R,I){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Xs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),O=E.material;if(Array.isArray(O)){let V=P.groups;for(let G=0,ee=V.length;G<ee;G++){let W=V[G],j=O[W.materialIndex];if(j&&j.visible){let te=b(E,j,L,I);E.onBeforeShadow(i,E,x,S,P,te,W),i.renderBufferDirect(S,null,P,te,E,W),E.onAfterShadow(i,E,x,S,P,te,W)}}}else if(O.visible){let V=b(E,O,L,I);E.onBeforeShadow(i,E,x,S,P,V,null),i.renderBufferDirect(S,null,P,V,E,null),E.onAfterShadow(i,E,x,S,P,V,null)}}let F=E.children;for(let P=0,O=F.length;P<O;P++)y(F[P],x,S,L,R,I)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let L=c[S],R=E.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function sy(i,e){function t(){let D=!1,K=new _t,$=null,le=new _t(0,0,0,0);return{setMask:function(se){$!==se&&!D&&(i.colorMask(se,se,se,se),$=se)},setLocked:function(se){D=se},setClear:function(se,ae,Te,qe,ie){ie===!0&&(se*=qe,ae*=qe,Te*=qe),K.set(se,ae,Te,qe),le.equals(K)===!1&&(i.clearColor(se,ae,Te,qe),le.copy(K))},reset:function(){D=!1,$=null,le.set(-1,0,0,0)}}}function n(){let D=!1,K=!1,$=null,le=null,se=null;return{setReversed:function(ae){if(K!==ae){let Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),K=ae;let qe=se;se=null,this.setClear(qe)}},getReversed:function(){return K},setTest:function(ae){ae?xe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ae){$!==ae&&!D&&(i.depthMask(ae),$=ae)},setFunc:function(ae){if(K&&(ae=rf[ae]),le!==ae){switch(ae){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){D=ae},setClear:function(ae){se!==ae&&(se=ae,K&&(ae=1-ae),i.clearDepth(ae))},reset:function(){D=!1,$=null,le=null,se=null,K=!1}}}function s(){let D=!1,K=null,$=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null;return{setTest:function(Ce){D||(Ce?xe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Ce){K!==Ce&&!D&&(i.stencilMask(Ce),K=Ce)},setFunc:function(Ce,We,me){($!==Ce||le!==We||se!==me)&&(i.stencilFunc(Ce,We,me),$=Ce,le=We,se=me)},setOp:function(Ce,We,me){(ae!==Ce||Te!==We||qe!==me)&&(i.stencilOp(Ce,We,me),ae=Ce,Te=We,qe=me)},setLocked:function(Ce){D=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){D=!1,K=null,$=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,T=null,E=null,x=null,S=new ze(0,0,0),L=0,R=!1,I=null,N=null,F=null,P=null,O=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ee>=2);let j=null,te={},be=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Z=new _t().fromArray(be),_e=new _t().fromArray(Fe);function Me(D,K,$,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(D,ae),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<$;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(K+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Pe={};Pe[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(Ls),tn(!1),xt(Qc),xe(i.CULL_FACE),Vt(rs);function xe(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ge(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function wt(D,K){return u[D]!==K?(i.bindFramebuffer(D,K),u[D]=K,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ne(D,K){let $=p,le=!1;if(D){$=f.get(K),$===void 0&&($=[],f.set(K,$));let se=D.textures;if($.length!==se.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Te=se.length;ae<Te;ae++)$[ae]=i.COLOR_ATTACHMENT0+ae;$.length=se.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function at(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let ht={[as]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};ht[Ru]=i.MIN,ht[Cu]=i.MAX;let Ze={[Iu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(D,K,$,le,se,ae,Te,qe,ie,Ce){if(D===rs){m===!0&&(Ge(i.BLEND),m=!1);return}if(m===!1&&(xe(i.BLEND),m=!0),D!==Eu){if(D!==g||Ce!==R){if((v!==as||T!==as)&&(i.blendEquation(i.FUNC_ADD),v=as,T=as),Ce)switch(D){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",D);break}b=null,y=null,E=null,x=null,S.set(0,0,0),L=0,g=D,R=Ce}return}se=se||K,ae=ae||$,Te=Te||le,(K!==v||se!==T)&&(i.blendEquationSeparate(ht[K],ht[se]),v=K,T=se),($!==b||le!==y||ae!==E||Te!==x)&&(i.blendFuncSeparate(Ze[$],Ze[le],Ze[ae],Ze[Te]),b=$,y=le,E=ae,x=Te),(qe.equals(S)===!1||ie!==L)&&(i.blendColor(qe.r,qe.g,qe.b,ie),S.copy(qe),L=ie),g=D,R=!1}function Ct(D,K){D.side===rn?Ge(i.CULL_FACE):xe(i.CULL_FACE);let $=D.side===Lt;K&&($=!$),tn($),D.blending===Ys&&D.transparent===!1?Vt(rs):Vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let le=D.stencilWrite;o.setTest(le),le&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function tn(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function xt(D){D!==Su?(xe(i.CULL_FACE),D!==N&&(D===Qc?i.cullFace(i.BACK):D===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),N=D}function Gn(D){D!==F&&(G&&i.lineWidth(D),F=D)}function Ut(D,K,$){D?(xe(i.POLYGON_OFFSET_FILL),(P!==K||O!==$)&&(P=K,O=$,a.getReversed()&&(K=-K,$=-$),i.polygonOffset(K,$))):Ge(i.POLYGON_OFFSET_FILL)}function _n(D){D?xe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function xn(D){D===void 0&&(D=i.TEXTURE0+V-1),j!==D&&(i.activeTexture(D),j=D)}function vn(D,K,$){$===void 0&&(j===null?$=i.TEXTURE0+V-1:$=j);let le=te[$];le===void 0&&(le={type:void 0,texture:void 0},te[$]=le),(le.type!==D||le.texture!==K)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(D,K||Pe[D]),le.type=D,le.texture=K)}function U(){let D=te[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function yn(){try{i.compressedTexImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function gt(){try{i.texSubImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function fe(){try{i.texSubImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function It(){try{i.compressedTexSubImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function Oe(){try{i.texStorage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function M(){try{i.texImage2D(...arguments)}catch(D){ke("WebGLState:",D)}}function z(){try{i.texImage3D(...arguments)}catch(D){ke("WebGLState:",D)}}function ne(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Q(D,K){d[D]!==K&&(i.pixelStorei(D,K),d[D]=K)}function re(D){Z.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function de(D){_e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function X(D,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let le=$.get(D);le===void 0&&(le=i.getUniformBlockIndex(K,D.name),i.uniformBlockBinding(K,le,le),$.set(D,le))}function Y(D,K,$){let se=c.get(K).get(D);l[se]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,$),l[se]=$)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,te={},u={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,T=null,E=null,x=null,S=new ze(0,0,0),L=0,R=!1,I=null,N=null,F=null,P=null,O=null,Z.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ge,bindFramebuffer:wt,drawBuffers:Ne,useProgram:at,setBlending:Vt,setMaterial:Ct,setFlipSided:tn,setCullFace:xt,setLineWidth:Gn,setPolygonOffset:Ut,setScissorTest:_n,activeTexture:xn,bindTexture:vn,unbindTexture:U,compressedTexImage2D:yn,compressedTexImage3D:mt,texImage2D:M,texImage3D:z,pixelStorei:Q,getParameter:ne,updateUBOMapping:X,uniformBlockBinding:Y,texStorage2D:Oe,texStorage3D:A,texSubImage2D:gt,texSubImage3D:fe,compressedTexSubImage2D:It,compressedTexSubImage3D:Le,scissor:re,viewport:de,reset:oe}}function ry(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):ks("canvas")}function v(A,M,z){let ne=1,Q=Oe(A);if((Q.width>z||Q.height>z)&&(ne=z/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(ne*Q.width),de=Math.floor(ne*Q.height);u===void 0&&(u=g(re,de));let X=M?g(re,de):u;return X.width=re,X.height=de,X.getContext("2d").drawImage(A,0,0,re,de),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+de+")."),X}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function b(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,M,z,ne,Q,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;ne&&(de=e.get("EXT_texture_norm16"),de||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8),z===i.UNSIGNED_SHORT&&de&&(X=de.R16_EXT),z===i.SHORT&&de&&(X=de.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),M===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8),z===i.UNSIGNED_SHORT&&de&&(X=de.RG16_EXT),z===i.SHORT&&de&&(X=de.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&de&&(X=de.RGB16_EXT),z===i.SHORT&&de&&(X=de.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),M===i.RGBA){let Y=re?Nr:je.getTransfer(Q);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Y===rt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&de&&(X=de.RGBA16_EXT),z===i.SHORT&&de&&(X=de.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,M){let z;return A?M===null||M===Nn||M===ls?z=i.DEPTH24_STENCIL8:M===wn?z=i.DEPTH32F_STENCIL8:M===Ks&&(z=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nn||M===ls?z=i.DEPTH_COMPONENT24:M===wn?z=i.DEPTH_COMPONENT32F:M===Ks&&(z=i.DEPTH_COMPONENT16),z}function S(A,M){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){let M=new WeakRef(A);n.get(A).__ref=M,p.add(M),_.register(A,M,M)}function R(A){let M=n.get(A).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function I(A){F(A.target)}function N(A){P(A.target)}function F(A){A.removeEventListener("dispose",I),R(A),V(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",N),R(A),ee(A)}function O(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):F(M))}p.clear(),d.clear()}function V(A){let M=n.get(A);if(M.__webglInit===void 0)return;let z=A.source,ne=f.get(z);if(ne){let Q=ne[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(A),Object.keys(ne).length===0&&f.delete(z)}n.remove(A)}function G(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let z=A.source,ne=f.get(z);delete ne[M.__cacheKey],a.memory.textures--}function ee(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&F(z),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let re=0;re<M.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(M.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ne=A.textures;for(let Q=0,re=ne.length;Q<re;Q++){let de=n.get(ne[Q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(ne[Q])}n.remove(A)}let W=0;function j(){W=0}function te(){return W}function be(A){W=A}function Fe(){let A=W;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function _e(A,M){let z=n.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let ne=A.image;if(ne===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(z,A,M);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Me(A,M){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ct(z,A,M);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Pe(A,M){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ct(z,A,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function xe(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){tn(z,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let Ge={[Ds]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},wt={[Ht]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[la]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Ne={[Zu]:i.NEVER,[yh]:i.ALWAYS,[Ku]:i.LESS,[xh]:i.LEQUAL,[Ju]:i.EQUAL,[vh]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function at(A,M){if(M.type===wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===el||M.magFilter===la||M.magFilter===Dn||M.minFilter===Qt||M.minFilter===el||M.minFilter===la||M.minFilter===Dn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ge[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ge[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ge[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,wt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,wt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==la&&M.minFilter!==Dn||M.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ht(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I),L(M));let ne=M.source,Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));let re=Z(M);if(re!==A.__cacheKey){Q[re]===void 0&&(Q[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[re].usedTimes++;let de=Q[A.__cacheKey];de!==void 0&&(Q[A.__cacheKey].usedTimes--,de.usedTimes===0&&G(M)),A.__cacheKey=re,A.__webglTexture=Q[re].texture}return z}function Ze(A,M,z){return Math.floor(Math.floor(A/z)/M)}function Vt(A,M,z,ne){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,ne,M.data);else{re.sort((D,K)=>D.start-K.start);let de=0;for(let D=1;D<re.length;D++){let K=re[de],$=re[D],le=K.start+K.count,se=Ze($.start,M.width,4),ae=Ze(K.start,M.width,4);$.start<=le+1&&se===ae&&Ze($.start+$.count-1,M.width,4)===se?K.count=Math.max(K.count,$.start+$.count-K.start):(++de,re[de]=$)}re.length=de+1;let X=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let D=0,K=re.length;D<K;D++){let $=re[D],le=Math.floor($.start/4),se=Math.ceil($.count/4),ae=le%M.width,Te=Math.floor(le/M.width),qe=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,ae,Te,qe,ie,z,ne,M.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function Ct(A,M,z){let ne=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=i.TEXTURE_3D);let Q=ht(A,M),re=M.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+z);let de=n.get(re);if(re.version!==de.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ie=je.getPrimaries(je.workingColorSpace),Ce=M.colorSpace===fi?null:je.getPrimaries(M.colorSpace),We=M.colorSpace===fi||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let Y=v(M.image,!1,s.maxTextureSize);Y=Le(M,Y);let oe=r.convert(M.format,M.colorSpace),D=r.convert(M.type),K=E(M.internalFormat,oe,D,M.normalized,M.colorSpace,M.isVideoTexture);at(ne,M);let $,le=M.mipmaps,se=M.isVideoTexture!==!0,ae=de.__version===void 0||Q===!0,Te=re.dataReady,qe=S(M,Y);if(M.isDepthTexture)K=x(M.format===ui,M.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,K,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,K,Y.width,Y.height,0,oe,D,null));else if(M.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,K,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)$=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,oe,D,$.data):t.texImage2D(i.TEXTURE_2D,ie,K,$.width,$.height,0,oe,D,$.data);M.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,qe,K,Y.width,Y.height),Te&&Vt(M,Y,oe,D)):t.texImage2D(i.TEXTURE_2D,0,K,Y.width,Y.height,0,oe,D,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,K,le[0].width,le[0].height,Y.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if($=le[ie],M.format!==Fn)if(oe!==null)if(se){if(Te)if(M.layerUpdates.size>0){let We=Ih($.width,$.height,M.format,M.type);for(let me of M.layerUpdates){let ot=$.data.subarray(me*We/$.data.BYTES_PER_ELEMENT,(me+1)*We/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,$.width,$.height,1,oe,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Y.depth,oe,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,K,$.width,$.height,Y.depth,0,$.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Y.depth,oe,D,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,K,$.width,$.height,Y.depth,0,oe,D,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,K,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)$=le[ie],M.format!==Fn?oe!==null?se?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,oe,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,K,$.width,$.height,0,$.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,oe,D,$.data):t.texImage2D(i.TEXTURE_2D,ie,K,$.width,$.height,0,oe,D,$.data)}else if(M.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,K,Y.width,Y.height,Y.depth),Te)if(M.layerUpdates.size>0){let ie=Ih(Y.width,Y.height,M.format,M.type);for(let Ce of M.layerUpdates){let We=Y.data.subarray(Ce*ie/Y.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,Y.width,Y.height,1,oe,D,We)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,D,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Y.width,Y.height,Y.depth,0,oe,D,Y.data);else if(M.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,qe,K,Y.width,Y.height,Y.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,D,Y.data)):t.texImage3D(i.TEXTURE_3D,0,K,Y.width,Y.height,Y.depth,0,oe,D,Y.data);else if(M.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,qe,K,Y.width,Y.height);else{let ie=Y.width,Ce=Y.height;for(let We=0;We<qe;We++)t.texImage2D(i.TEXTURE_2D,We,K,ie,Ce,0,oe,D,null),ie>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),d.add(M),ie.onpaint=Ce=>{let We=Ce.changedElements;for(let me of d)We.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let We=i.RGBA,me=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,me,ot,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=Oe(le[0]);t.texStorage2D(i.TEXTURE_2D,qe,K,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)$=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,D,$):t.texImage2D(i.TEXTURE_2D,ie,K,oe,D,$);M.generateMipmaps=!1}else if(se){if(ae){let ie=Oe(Y);t.texStorage2D(i.TEXTURE_2D,qe,K,ie.width,ie.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,D,Y)}else t.texImage2D(i.TEXTURE_2D,0,K,oe,D,Y);b(M)&&M.mipmapsAutoUpdate===!0&&y(ne),de.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function tn(A,M,z){if(M.image.length!==6)return;let ne=ht(A,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let re=n.get(Q);if(Q.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let de=je.getPrimaries(je.workingColorSpace),X=M.colorSpace===fi?null:je.getPrimaries(M.colorSpace),Y=M.colorSpace===fi||de===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let oe=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,K=[];for(let me=0;me<6;me++)!oe&&!D?K[me]=v(M.image[me],!0,s.maxCubemapSize):K[me]=D?M.image[me].image:M.image[me],K[me]=Le(M,K[me]);let $=K[0],le=r.convert(M.format,M.colorSpace),se=r.convert(M.type),ae=E(M.internalFormat,le,se,M.normalized,M.colorSpace),Te=M.isVideoTexture!==!0,qe=re.__version===void 0||ne===!0,ie=Q.dataReady,Ce=S(M,$);at(i.TEXTURE_CUBE_MAP,M);let We;if(M.isDepthTexture){if(ae=x(M.format===ui,M.type),qe)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,$.width,$.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,$.width,$.height,0,le,se,null)}else if(oe){Te&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,$.width,$.height);for(let me=0;me<6;me++){We=K[me].mipmaps;for(let ot=0;ot<We.length;ot++){let Ot=We[ot];M.format!==Fn?le!==null?Te?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,0,0,Ot.width,Ot.height,le,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,ae,Ot.width,Ot.height,0,Ot.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,0,0,Ot.width,Ot.height,le,se,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,ae,Ot.width,Ot.height,0,le,se,Ot.data)}}}else{if(We=M.mipmaps,Te&&qe){We.length>0&&Ce++;let me=Oe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,me.width,me.height)}for(let me=0;me<6;me++)if(D){Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,K[me].width,K[me].height,le,se,K[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,K[me].width,K[me].height,0,le,se,K[me].data);for(let ot=0;ot<We.length;ot++){let yi=We[ot].image[me].image;Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,0,0,yi.width,yi.height,le,se,yi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,ae,yi.width,yi.height,0,le,se,yi.data)}}else{Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,K[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,K[me]);for(let ot=0;ot<We.length;ot++){let Ot=We[ot];Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,0,0,le,se,Ot.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,ae,le,se,Ot.image[me])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xt(A,M,z,ne,Q,re){let de=r.convert(z.format,z.colorSpace),X=r.convert(z.type),Y=E(z.internalFormat,de,X,z.normalized,z.colorSpace),oe=n.get(M),D=n.get(z);if(D.__renderTarget=M,!oe.__hasExternalTextures){let K=Math.max(1,M.width>>re),$=Math.max(1,M.height>>re);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,Y,K,$,M.depth,0,de,X,null):t.texImage2D(Q,re,Y,K,$,0,de,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,D.__webglTexture,0,gt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,D.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Gn(A,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let ne=M.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,re=x(M.stencilBuffer,Q),de=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(M),re,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(M),re,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,re,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,A)}else{let ne=M.textures;for(let Q=0;Q<ne.length;Q++){let re=ne[Q],de=r.convert(re.format,re.colorSpace),X=r.convert(re.type),Y=E(re.internalFormat,de,X,re.normalized,re.colorSpace);fe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(M),Y,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(M),Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,M,z){let ne=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(M.depthTexture);Q.__renderTarget=M;let re=ne?M.depthTexture.image[0]:M.depthTexture.image;(!Q.__webglTexture||re.width!==M.width||re.height!==M.height)&&(re.width=M.width,re.height=M.height,M.depthTexture.needsUpdate=!0),ne?xe(M.depthTexture,0):_e(M.depthTexture,0);let de=Q.__webglTexture,X=gt(M),Y=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,oe=M.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===oi)fe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,de,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,de,0);else if(M.depthTexture.format===ui)fe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,de,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(A){let M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=ne}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)Ut(M.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?Ut(M.__webglFramebuffer[0],A,0):Ut(M.__webglFramebuffer,A,0);else if(z){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=i.createRenderbuffer(),Gn(M.__webglDepthbuffer[ne],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Gn(M.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(A,M,z){let ne=n.get(A);M!==void 0&&xt(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&_n(A)}function vn(A){let M=A.texture,z=n.get(A),ne=n.get(M);A.addEventListener("dispose",N),L(A);let Q=A.textures,re=A.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=M.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps.length>0){z.__webglFramebuffer[X]=[];for(let Y=0;Y<M.mipmaps.length;Y++)z.__webglFramebuffer[X][Y]=i.createFramebuffer()}else z.__webglFramebuffer[X]=i.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)z.__webglFramebuffer[X]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(de)for(let X=0,Y=Q.length;X<Y;X++){let oe=n.get(Q[X]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let Y=Q[X];z.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[X]);let oe=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),K=E(Y.internalFormat,oe,D,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),$=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,z.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gn(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),at(i.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)xt(z.__webglFramebuffer[X][Y],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else xt(z.__webglFramebuffer[X],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);b(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(de){for(let X=0,Y=Q.length;X<Y;X++){let oe=Q[X],D=n.get(oe),K=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,D.__webglTexture),at(K,oe),xt(z.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+X,K,0),b(oe)&&y(K)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,ne.__webglTexture),at(X,M),M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)xt(z.__webglFramebuffer[Y],A,M,i.COLOR_ATTACHMENT0,X,Y);else xt(z.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,X,0);b(M)?y(X):M.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&_n(A)}function U(A){let M=A.textures;for(let z=0,ne=M.length;z<ne;z++){let Q=M[z];if(b(Q)&&Q.mipmapsAutoUpdate===!0){let re=T(A),de=n.get(Q).__webglTexture;t.bindTexture(re,de),y(re),t.unbindTexture()}}}let yn=[];function mt(A){if(A.samples>0){if(fe(A)===!1){let M=A.textures,z=A.width,ne=A.height,Q=i.COLOR_BUFFER_BIT,re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(A),X=M.length>1;if(X)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[oe]);let D=n.get(M[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,Q,i.NEAREST),l===!0&&(yn.length=0,yn.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&yn.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,de.__webglColorRenderbuffer[oe]);let D=n.get(M[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function fe(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Le(A,M){let z=A.colorSpace,ne=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Dr&&z!==fi&&(je.getTransfer(z)===rt?(ne!==Fn||Q!==an)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",z)),M}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=Pe,this.setTextureCube=xe,this.rebindTextures=xn,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=fe,this.dispose=O}function ay(i,e){function t(n,s=fi){let r,a=je.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Fn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===ca||n===ha||n===da||n===ua)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===fl||n===pl||n===ml||n===gl||n===fa||n===_l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===fl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fa)return r.COMPRESSED_RG11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===vl||n===yl||n===bl||n===Ml||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Fl||n===pa||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $n({vertexShader:oy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends Pn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Wh,g={},v=t.getContextAttributes(),b=null,y=null,T=[],E=[],x=new he,S=null,L=null,R=new Zt;R.viewport=new _t;let I=new Zt;I.viewport=new _t;let N=[R,I],F=new Yo,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=T[Z];return _e===void 0&&(_e=new zs,T[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=T[Z];return _e===void 0&&(_e=new zs,T[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=T[Z];return _e===void 0&&(_e=new zs,T[Z]=_e),_e.getHandSpace()};function V(Z){let _e=E.indexOf(Z.inputSource);if(_e===-1)return;let Me=T[_e];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<T.length;Z++){let _e=E[Z];_e!==null&&(E[Z]=null,T[Z].disconnect(_e))}P=null,O=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(b),f=null,u=null,d=null,s=null,y=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),L!==null){let Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?ui:oi,Pe=v.stencil?ls:Nn);let Ge={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new un(u.textureWidth,u.textureHeight,{format:Fn,type:an,depthTexture:new ci(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new un(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let _e=0;_e<Z.removed.length;_e++){let Me=Z.removed[_e],Pe=E.indexOf(Me);Pe>=0&&(E[Pe]=null,T[Pe].disconnect(Me))}for(let _e=0;_e<Z.added.length;_e++){let Me=Z.added[_e],Pe=E.indexOf(Me);if(Pe===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=E.length){E.push(Me),Pe=Ge;break}else if(E[Ge]===null){E[Ge]=Me,Pe=Ge;break}if(Pe===-1)break}let xe=T[Pe];xe&&xe.connect(Me)}}function W(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),F.near=I.near=R.near=_e,F.far=I.far=R.far=Me,(P!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,O=F.far),F.layers.mask=Z.layers.mask|6,R.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Pe=Z.parent,xe=F.cameras;W(F,Pe);for(let Ge=0;Ge<xe.length;Ge++)W(xe[Ge],Pe);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,F,Pe)};function j(Z,_e,Me){Me===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return g[Z]};let te=null;function be(Z,_e){if(h=_e.getViewerPose(c||a),p=_e,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let Ne=0;Ne<Me.length;Ne++){let at=Me[Ne],ht=null;if(f!==null)ht=f.getViewport(at);else{let Vt=d.getViewSubImage(u,at);ht=Vt.viewport,Ne===0&&(e.setRenderTargetTextures(y,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(y))}let Ze=N[Ne];Ze===void 0&&(Ze=new Zt,Ze.layers.enable(Ne),Ze.viewport=new _t,N[Ne]=Ze),Ze.matrix.fromArray(at.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(at.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ht.x,ht.y,ht.width,ht.height),Ne===0&&(F.matrix.copy(Ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Ze)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ne=d.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<Me.length;Ne++){let at=Me[Ne].camera;if(at){let ht=g[at];ht||(ht=new Vr,g[at]=ht);let Ze=d.getCameraImage(at);ht.sourceTexture=Ze}}}}for(let Me=0;Me<T.length;Me++){let Pe=E[Me],xe=T[Me];Pe!==null&&xe!==void 0&&xe.update(Pe,_e,c||a)}te&&te(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let Fe=new Uf;Fe.setAnimationLoop(be),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}},cy=new Be,Xf=new Ue;Xf.set(-1,0,0,0,1,0,0,0,1);function hy(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ah(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Lt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Lt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Lt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dy(i,e,t,n){let s={},r={};function a(v,b){let y=b.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,b){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",m));let T=b.program;n.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let b=i.createBuffer(),y=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,x=y.length;E<x;E++){let S=y[E];if(Array.isArray(S))for(let L=0,R=S.length;L<R;L++)h(S[L],E,L,T);else h(S,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,y,T){if(u(v,b,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let L=0;L<x.length;L++){let R=x[L],I=_(R,!0);d(R,v.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function d(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function u(v,b,y,T){let E=v.value,x=b+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let S=T[x],L=!1;for(let R=0;R<E.length;R++)f(E[R],S,R)===!0&&(L=!0);return L}return f(E,T,x)}function f(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let T=b[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let b=v.uniforms,y=0,T=16;for(let x=0,S=b.length;x<S;x++){let L=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,I=L.length;R<I;R++){let N=L[R],F=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(b[x])||Array.isArray(N.value),O=y;for(let G=0,ee=F.length;G<ee;G++){let W=F[G],j=_(W,P),te=y%T,be=te%j.boundary,Fe=te+be;y+=be,Fe!==0&&T-Fe<j.storage&&(y+=T-Fe),G===0&&(O=y),y+=j.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((y-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let b=v.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var uy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function fy(){return Yn===null&&(Yn=new Or(uy,16,16,Hi,kn),Yn.name="DFG_LUT",Yn.minFilter=Qt,Yn.magFilter=Qt,Yn.wrapS=Wn,Yn.wrapT=Wn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var zl=class{constructor(e={}){let{canvas:t=tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,m=new Set([ol,al,rl]),g=new Set([an,Nn,Ks,ls,nl,il]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,F=null,P=null,O=null;this._outputColorSpace=Mt;let V=0,G=0,ee=null,W=-1,j=null,te=new _t,be=new _t,Fe=null,Z=new ze(0),_e=0,Me=t.width,Pe=t.height,xe=1,Ge=null,wt=null,Ne=new _t(0,0,Me,Pe),at=new _t(0,0,Me,Pe),ht=!1,Ze=new Pi,Vt=new wo,Ct=!1,tn=!1,xt=new Be,Gn=new C,Ut=new _t,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xn=!1;function vn(){return ee===null?xe:1}let U=n;function yn(w,k){return t.getContext(w,k)}let mt,gt,fe,It,Le,Oe,A,M,z,ne,Q,re,de,X,Y,oe,D,K,$,le,se,ae,Te;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){let k="webgl2";if(U=yn(k,w),U===null)throw yn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(w){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ke("WebGLRenderer: "+w.message),w}function qe(){mt=new wx(U),mt.init(),se=new ay(U,mt),gt=new fx(U,mt,e,se),fe=new sy(U,mt),gt.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),F=U.createFramebuffer(),P=U.createFramebuffer(),O=U.createFramebuffer(),It=new Ax(U),Le=new Wv,Oe=new ry(U,mt,fe,Le,gt,se,It),A=new Sx(R),M=new C0(U),ae=new dx(U,M),z=new Ex(U,M,It,ae),ne=new Cx(U,z,M,ae,It),K=new Rx(U,gt,Oe),Y=new px(Le),Q=new Vv(R,A,mt,gt,ae,Y),re=new hy(R,Le),de=new $v,X=new jv(mt),D=new hx(R,A,fe,ne,p,l),oe=new iy(R,ne,gt),Te=new dy(U,It,gt,fe),$=new ux(U,mt,It),le=new Tx(U,mt,It),It.programs=Q.programs,R.capabilities=gt,R.extensions=mt,R.properties=Le,R.renderLists=de,R.shadowMap=oe,R.state=fe,R.info=It}_!==an&&(L=new Px(_,t.width,t.height,o,s,r));let ie=new qh(R,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(w){w!==void 0&&(xe=w,this.setSize(Me,Pe,!1))},this.getSize=function(w){return w.set(Me,Pe)},this.setSize=function(w,k,q=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,Pe=k,t.width=Math.floor(w*xe),t.height=Math.floor(k*xe),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Me*xe,Pe*xe).floor()},this.setDrawingBufferSize=function(w,k,q){Me=w,Pe=k,xe=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(_===an){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Ne)},this.setViewport=function(w,k,q,B){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,k,q,B),fe.viewport(te.copy(Ne).multiplyScalar(vn()).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,k,q,B){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,k,q,B),fe.scissor(be.copy(at).multiplyScalar(vn()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){fe.setScissorTest(ht=w)},this.setOpaqueSort=function(w){Ge=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let B=0;if(w){let H=!1;if(ee!==null){let ue=ee.texture.format;H=m.has(ue)}if(H){let ue=ee.texture.type,ye=g.has(ue),ce=D.getClearColor(),ve=D.getClearAlpha(),Ee=ce.r,He=ce.g,Ke=ce.b;ye?(v[0]=Ee,v[1]=He,v[2]=Ke,v[3]=ve,U.clearBufferuiv(U.COLOR,0,v)):(b[0]=Ee,b[1]=He,b[2]=Ke,b[3]=ve,U.clearBufferiv(U.COLOR,0,b))}else B|=U.COLOR_BUFFER_BIT}k&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),D.dispose(),de.dispose(),X.dispose(),Oe.dispose(),Le.dispose(),A.dispose(),ne.dispose(),z.dispose(),ae.dispose(),Te.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Rd),ie.removeEventListener("sessionend",Cd),$i.stop()};function Ce(w){w.preventDefault(),Mh("WebGLRenderer: Context Lost."),I=!0}function We(){Mh("WebGLRenderer: Context Restored."),I=!1;let w=It.autoReset,k=oe.enabled,q=oe.autoUpdate,B=oe.needsUpdate,H=oe.type;qe(),It.autoReset=w,oe.enabled=k,oe.autoUpdate=q,oe.needsUpdate=B,oe.type=H}function me(w){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){let k=w.target;k.removeEventListener("dispose",ot),Ot(k)}function Ot(w){yi(w),Le.remove(w)}function yi(w){let k=Le.get(w).programs;k!==void 0&&(k.forEach(function(q){Q.releaseProgram(q)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,B,H,ue){k===null&&(k=_n);let ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,ce=im(w,k,q,B,H);fe.setMaterial(B,ye);let ve=q.index,Ee=1;if(B.wireframe===!0){if(ve=z.getWireframeAttribute(q),ve===void 0)return;Ee=2}let He=q.drawRange,Ke=q.attributes.position,Se=He.start*Ee,Je=(He.start+He.count)*Ee;ue!==null&&(Se=Math.max(Se,ue.start*Ee),Je=Math.min(Je,(ue.start+ue.count)*Ee)),ve!==null?(Se=Math.max(Se,0),Je=Math.min(Je,ve.count)):Ke!=null&&(Se=Math.max(Se,0),Je=Math.min(Je,Ke.count));let Et=Je-Se;if(Et<0||Et===1/0)return;ae.setup(H,B,ce,q,ve);let ut,dt=$;if(ve!==null&&(ut=M.get(ve),dt=le,dt.setIndex(ut)),H.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*vn()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(H.isLine){let qt=B.linewidth;qt===void 0&&(qt=1),fe.setLineWidth(qt*vn()),H.isLineSegments?dt.setMode(U.LINES):H.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else H.isPoints?dt.setMode(U.POINTS):H.isSprite&&dt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let qt=H._multiDrawStarts,we=H._multiDrawCounts,jt=H._multiDrawCount,nt=ve?M.get(ve).bytesPerElement:1,Xi=Le.get(B).currentProgram.getUniforms();for(let $t=0;$t<jt;$t++)Xi.setValue(U,"_gl_DrawID",$t),dt.render(qt[$t]/nt,we[$t])}else if(H.isInstancedMesh)dt.renderInstances(Se,Et,H.count);else if(q.isInstancedBufferGeometry){let qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,we=Math.min(q.instanceCount,qt);dt.renderInstances(Se,Et,we)}else dt.render(Se,Et)};function Ad(w,k,q,B){N!==null&&w.isNodeMaterial&&N.setObject(B,w),Ct===!0&&Y.setState(w,q,!1),w.transparent===!0&&w.side===rn&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,vr(w,k,B),w.side=zi,w.needsUpdate=!0,vr(w,k,B),w.side=rn):vr(w,k,B)}this.compile=function(w,k,q=null){q===null&&(q=w),N!==null&&N.renderStart(w,k,q),E=X.get(q),E.init(k),S.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),tn=this.localClippingEnabled,Ct=Y.init(this.clippingPlanes,tn),Ct===!0&&Y.setGlobalState(this.clippingPlanes,k),N!==null&&oe.render(E.state.shadowsArray,q,k);let B=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ue=H.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let ce=ue[ye];Ad(ce,q,k,H),B.add(ce)}else Ad(ue,q,k,H),B.add(ue)}),E=S.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(w,k,q=null){let B=this.compile(w,k,q);return new Promise(H=>{function ue(){if(B.forEach(function(ye){let ve=Le.get(ye).currentProgram;(ve===void 0||ve.isReady())&&B.delete(ye)}),B.size===0){H(w);return}setTimeout(ue,10)}mt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let mc=null;function tm(w){mc&&mc(w)}function Rd(){$i.stop()}function Cd(){$i.start()}let $i=new Uf;$i.setAnimationLoop(tm),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(w){mc=w,ie.setAnimationLoop(w),w===null?$i.stop():$i.start()},ie.addEventListener("sessionstart",Rd),ie.addEventListener("sessionend",Cd),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(w,k);let q=ie.enabled===!0&&ie.isPresenting===!0,B=L!==null&&(ee===null||q)&&L.begin(R,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,k,ee),E=X.get(w,S.length),E.init(k),E.state.textureUnits=Oe.getTextureUnits(),S.push(E),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Vt.setFromArrayCamera(k):Ze.setFromProjectionMatrix(xt,Mn,k.reversedDepth),tn=this.localClippingEnabled,Ct=Y.init(this.clippingPlanes,tn),T=de.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&gc(ye,k,-1/0,R.sortObjects)}gc(w,k,0,R.sortObjects),T.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Ge,wt),xn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,xn&&D.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&Y.beginShadows();let H=E.state.shadowsArray;if(oe.render(H,w,k),Ct===!0&&Y.endShadows(),(B&&L.hasRenderPass())===!1){let ye=T.opaque,ce=T.transmissive;if(E.setupLights(),k.isArrayCamera){let ve=k.cameras;if(ce.length>0)for(let Ee=0,He=ve.length;Ee<He;Ee++){let Ke=ve[Ee];Pd(ye,ce,w,Ke)}xn&&D.render(w);for(let Ee=0,He=ve.length;Ee<He;Ee++){let Ke=ve[Ee];Id(T,w,Ke,Ke.viewport)}}else ce.length>0&&Pd(ye,ce,w,k),xn&&D.render(w),Id(T,w,k)}ee!==null&&G===0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee)),B&&L.end(R),w.isScene===!0&&w.onAfterRender(R,w,k),ae.resetDefaultState(),W=-1,j=null,S.pop(),S.length>0?(E=S[S.length-1],Oe.setTextureUnits(E.state.textureUnits),Ct===!0&&Y.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,N!==null&&N.renderEnd()};function gc(w,k,q,B){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let ye=k.isArrayCamera?Vt:Ze;if(!w.frustumCulled||w.intersectsFrustum(ye)){B&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);let ce=ne.update(w),ve=w.material;ve.visible&&T.push(w,ce,ve,q,Ut.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){let ye=k.isArrayCamera?Vt:Ze;if(!w.frustumCulled||w.intersectsFrustum(ye)){let ce=ne.update(w),ve=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ut.copy(ce.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(ve)){let Ee=ce.groups;for(let He=0,Ke=Ee.length;He<Ke;He++){let Se=Ee[He],Je=ve[Se.materialIndex];Je&&Je.visible&&T.push(w,ce,Je,q,Ut.z,Se,k)}}else ve.visible&&T.push(w,ce,ve,q,Ut.z,null,k)}}}let ue=w.children;for(let ye=0,ce=ue.length;ye<ce;ye++)gc(ue[ye],k,q,B)}function Id(w,k,q,B){let{opaque:H,transmissive:ue,transparent:ye}=w;E.setupLightsView(q),Ct===!0&&Y.setGlobalState(R.clippingPlanes,q),B&&fe.viewport(te.copy(B)),H.length>0&&ka(H,k,q),ue.length>0&&ka(ue,k,q),ye.length>0&&ka(ye,k,q),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Pd(w,k,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Se=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new un(1,1,{generateMipmaps:!0,type:Se?kn:an,minFilter:Dn,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let ue=E.state.transmissionRenderTarget[B.id],ye=B.viewport||te;ue.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),ve=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(Z),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),xn&&D.render(q);let He=R.toneMapping;R.toneMapping=Xn;let Ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Ct===!0&&Y.setGlobalState(R.clippingPlanes,B),ka(w,q,B),Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Je=0,Et=k.length;Je<Et;Je++){let ut=k[Je],{object:dt,geometry:qt,material:we,group:jt}=ut;if(we.side===rn&&dt.layers.test(B.layers)){let nt=we.side;we.side=Lt,we.needsUpdate=!0,Ld(dt,q,B,qt,we,jt),we.side=nt,we.needsUpdate=!0,Se=!0}}Se===!0&&(Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue))}R.setRenderTarget(ce,ve,Ee),R.setClearColor(Z,_e),Ke!==void 0&&(B.viewport=Ke),R.toneMapping=He}function ka(w,k,q){let B=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ue=w.length;H<ue;H++){let ye=w[H],{object:ce,geometry:ve,group:Ee}=ye,He=ye.material;He.allowOverride===!0&&B!==null&&(He=B),ce.layers.test(q.layers)&&Ld(ce,k,q,ve,He,Ee)}}function Ld(w,k,q,B,H,ue){N!==null&&H.isNodeMaterial&&N.setObject(w,H),w.onBeforeRender(R,k,q,B,H,ue),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(R,k,q,B,w,ue),H.transparent===!0&&H.side===rn&&H.forceSinglePass===!1?(H.side=Lt,H.needsUpdate=!0,R.renderBufferDirect(q,k,B,H,w,ue),H.side=zi,H.needsUpdate=!0,R.renderBufferDirect(q,k,B,H,w,ue),H.side=rn):R.renderBufferDirect(q,k,B,H,w,ue),w.onAfterRender(R,k,q,B,H,ue)}function Dd(w){let k=0;for(let q of w)q.texture!==null&&k++;return k}function vr(w,k,q){k.isScene!==!0&&(k=_n);let B=Le.get(w),H=E.state.lights,ue=E.state.shadowsArray,ye=H.state.version,ce=Q.getParameters(w,H.state,ue,k,q,E.state.lightProbeGridArray),ve=Q.getProgramCacheKey(ce),Ee=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,B.fog=k.fog;let He=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=A.get(w.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ee===void 0&&(w.addEventListener("dispose",ot),Ee=new Map,B.programs=Ee,B.programVariants=new Map);let Ke=Ee.get(ve);if(Ke!==void 0){if(B.currentProgram===Ke&&B.lightsStateVersion===ye)return kd(w,ce),Ke}else ce.uniforms=Q.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,q,ce),w.onBeforeCompile(ce,R),Ke=Q.acquireProgram(ce,ve),Ee.set(ve,Ke),B.uniforms=ce.uniforms;let Se=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=Y.uniform),kd(w,ce),B.needsLights=rm(w),B.lightsStateVersion=ye,B.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.sunLights.value=H.state.sun,Se.sunLightShadows.value=H.state.sunShadow,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.sunShadowMatrix.value=H.state.sunShadowMatrix,Se.sunShadowCascade.value=H.state.sunShadowCascade,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Dd(E.state.lightProbeGridArray),B.currentProgram=Ke,B.uniformsList=null,Ke}function nm(w,k,q,B,H){let ue=Le.get(w),ye=ue.currentProgram.id+","+B+","+H,ce=ue.programVariants.get(ye);return ce===void 0?(ce=vr(w,k,q),ue.programVariants.set(ye,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=B,ue.toneMapping=H),ce}function Nd(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=js.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function kd(w,k){let q=Le.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function im(w,k,q,B,H){k.isScene!==!0&&(k=_n),Oe.resetTextureUnits();let ue=k.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?k.environment:null,ce=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ee=A.get(B.envMap||ye,ve),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,Et=!!q.morphAttributes.color,ut=Xn;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ut=R.toneMapping);let dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=dt!==void 0?dt.length:0,we=Le.get(B),jt=E.state.lights;if(Ct===!0&&(tn===!0||w!==j)){let vt=w===j&&B.id===W;Y.setState(B,w,vt)}let nt=!1,Xi=!1;B.version===we.__version?we.needsLights&&we.lightsStateVersion!==jt.state.version||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Ee||B.fog===!0&&we.fog!==ue||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Y.numPlanes||we.numIntersection!==Y.numIntersection)||we.vertexAlphas!==He||we.vertexTangents!==Ke||we.morphTargets!==Se||we.morphNormals!==Je||we.morphColors!==Et||we.morphTargetsCount!==qt||we.numLightProbeGrids!==Dd(E.state.lightProbeGridArray)?nt=!0:(we.outputColorSpace!==ce||we.toneMapping!==ut)&&(Xi=!0):(nt=!0,we.__version=B.version);let $t=we.currentProgram;(nt===!0||Xi===!0)&&($t=Xi===!0?nm(B,k,H,ce,ut):vr(B,k,H),N&&B.isNodeMaterial&&N.onUpdateProgram(B,$t,we));let Fa=!1,bi=!1,Yi=!1,et=$t.getUniforms(),Wt=we.uniforms;if(fe.useProgram($t.program)&&(Fa=!0,bi=!0,Yi=!0),B.id!==W&&(W=B.id,bi=!0),Fa||j!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),et.setValue(U,"projectionMatrix",w.projectionMatrix),et.setValue(U,"viewMatrix",w.matrixWorldInverse);let Bt=et.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,Gn.setFromMatrixPosition(w.matrixWorld)),gt.logarithmicDepthBuffer&&et.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&et.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,bi=!0,Yi=!0)}if(we.needsLights&&(jt.state.sunShadowMap.length>0&&et.setValue(U,"sunShadowMap",jt.state.sunShadowMap,Oe),jt.state.directionalShadowMap.length>0&&et.setValue(U,"directionalShadowMap",jt.state.directionalShadowMap,Oe),jt.state.spotShadowMap.length>0&&et.setValue(U,"spotShadowMap",jt.state.spotShadowMap,Oe),jt.state.pointShadowMap.length>0&&et.setValue(U,"pointShadowMap",jt.state.pointShadowMap,Oe)),H.isSkinnedMesh){et.setOptional(U,H,"bindMatrix"),et.setOptional(U,H,"bindMatrixInverse");let vt=H.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),et.setValue(U,"boneTexture",vt.boneTexture,Oe))}H.isBatchedMesh&&(et.setOptional(U,H,"batchingTexture"),et.setValue(U,"batchingTexture",H._matricesTexture,Oe),et.setOptional(U,H,"batchingIdTexture"),et.setValue(U,"batchingIdTexture",H._indirectTexture,Oe),et.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&et.setValue(U,"batchingColorTexture",H._colorsTexture,Oe));let An=q.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&K.update(H,q,$t),(bi||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,et.setValue(U,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&k.environment!==null&&(Wt.envMapIntensity.value=k.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=fy()),bi){if(et.setValue(U,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&sm(Wt,Yi),ue&&B.fog===!0&&re.refreshFogUniforms(Wt,ue),re.refreshMaterialUniforms(Wt,B,xe,Pe,E.state.transmissionRenderTarget[w.id]),we.needsLights&&we.numLightProbeGrids>0){let vt=y,Bt=0;for(let ei of E.state.lightProbeGridArray)ei.texture!==null&&(vt.textures[Bt]=ei.texture,vt.min[Bt]=ei.boundingBox.min,vt.max[Bt]=ei.boundingBox.max,vt.resolution[Bt]=ei.resolution,Bt++);for(let ei in vt)vt[ei].length=Bt;Wt.probesSH.value=vt.textures,Wt.probesMin.value=vt.min,Wt.probesMax.value=vt.max,Wt.probesResolution.value=vt.resolution}js.upload(U,Nd(we),Wt,Oe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(js.upload(U,Nd(we),Wt,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&et.setValue(U,"center",H.center),et.setValue(U,"modelViewMatrix",H.modelViewMatrix),et.setValue(U,"normalMatrix",H.normalMatrix),et.setValue(U,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){let vt=B.uniformsGroups;for(let Bt=0,ei=vt.length;Bt<ei;Bt++){let Ud=vt[Bt];Te.update(Ud,$t),Te.bind(Ud,$t)}}return $t}function sm(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function rm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,k,q){let B=Le.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Le.get(w.texture).__webglTexture=k,Le.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let q=Le.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,q=0){ee=w,V=k,G=q;let B=null,H=!1,ue=!1;if(w){let ce=Le.get(w);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,ce.__webglFramebuffer),te.copy(w.viewport),be.copy(w.scissor),Fe=w.scissorTest,fe.viewport(te),fe.scissor(be),fe.setScissorTest(Fe),W=-1;return}else if(ce.__webglFramebuffer===void 0)Oe.setupRenderTarget(w);else if(ce.__hasExternalTextures)Oe.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let He=w.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&Le.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(w)}}let ve=w.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);let Ee=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ee[k])?B=Ee[k][q]:B=Ee[k],H=!0):w.samples>0&&Oe.useMultisampledRTT(w)===!1?B=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Ee)?B=Ee[q]:B=Ee,te.copy(w.viewport),be.copy(w.scissor),Fe=w.scissorTest}else te.copy(Ne).multiplyScalar(xe).floor(),be.copy(at).multiplyScalar(xe).floor(),Fe=ht;if(q!==0&&(B=F),fe.bindFramebuffer(U.FRAMEBUFFER,B)&&fe.drawBuffers(w,B),fe.viewport(te),fe.scissor(be),fe.setScissorTest(Fe),H){let ce=Le.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce.__webglTexture,q)}else if(ue){let ce=k;for(let ve=0;ve<w.textures.length;ve++){let Ee=Le.get(w.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,q,ce)}}else if(w!==null&&q!==0){let ce=Le.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,q)}W=-1};function Fd(w){let k=Le.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=gt.textureFormatReadable(w.format),k.__typeReadable=gt.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,q,B,H,ue,ye,ce=0){if(!(w&&w.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Ee=w.textures[ce],He=Ee.format,Ke=Ee.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let Se=Fd(Ee);if(Se.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-B&&q>=0&&q<=w.height-H&&U.readPixels(k,q,B,H,se.convert(He),se.convert(Ke),ue)}finally{let Ee=ee!==null?Le.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,B,H,ue,ye,ce=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve)if(k>=0&&k<=w.width-B&&q>=0&&q<=w.height-H){fe.bindFramebuffer(U.FRAMEBUFFER,ve);let Ee=w.textures[ce],He=Ee.format,Ke=Ee.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ce);let Se=Fd(Ee);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(k,q,B,H,se.convert(He),se.convert(Ke),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Et=ee!==null?Le.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Et);let ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sf(U,ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Je),U.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,q=0){let B=Math.pow(2,-q),H=Math.floor(w.image.width*B),ue=Math.floor(w.image.height*B),ye=k!==null?k.x:0,ce=k!==null?k.y:0;Oe.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ye,ce,H,ue),fe.unbindTexture()},this.copyTextureToTexture=function(w,k,q=null,B=null,H=0,ue=0){let ye,ce,ve,Ee,He,Ke,Se,Je,Et,ut=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(q!==null)ye=q.max.x-q.min.x,ce=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,He=q.min.y,Ke=q.isBox3?q.min.z:0;else{let et=Math.pow(2,-H);ye=Math.floor(ut.width*et),ce=Math.floor(ut.height*et),w.isDataArrayTexture?ve=ut.depth:w.isData3DTexture?ve=Math.floor(ut.depth*et):ve=1,Ee=0,He=0,Ke=0}B!==null?(Se=B.x,Je=B.y,Et=B.z):(Se=0,Je=0,Et=0);let dt=se.convert(k.format),qt=se.convert(k.type),we;k.isData3DTexture?(Oe.setTexture3D(k,0),we=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Oe.setTexture2DArray(k,0),we=U.TEXTURE_2D_ARRAY):(Oe.setTexture2D(k,0),we=U.TEXTURE_2D),fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let jt=fe.getParameter(U.UNPACK_ROW_LENGTH),nt=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),Xi=fe.getParameter(U.UNPACK_SKIP_PIXELS),$t=fe.getParameter(U.UNPACK_SKIP_ROWS),Fa=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),fe.pixelStorei(U.UNPACK_SKIP_ROWS,He),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);let bi=w.isDataArrayTexture||w.isData3DTexture,Yi=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let et=Le.get(w),Wt=Le.get(k),An=Le.get(et.__renderTarget),vt=Le.get(Wt.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,An.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Bt=0;Bt<ve;Bt++)bi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(w).__webglTexture,H,Ke+Bt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Le.get(k).__webglTexture,ue,Et+Bt)),U.blitFramebuffer(Ee,He,Ee+ye,He+ce,Se,Je,Se+ye,Je+ce,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||Le.has(w)){let et=Le.get(w),Wt=Le.get(k);fe.bindFramebuffer(U.READ_FRAMEBUFFER,P),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let An=0;An<ve;An++)bi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.__webglTexture,H,Ke+An):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,et.__webglTexture,H),Yi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,ue,Et+An):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Wt.__webglTexture,ue),H!==0?U.blitFramebuffer(Ee,He,Ee+ye,He+ce,Se,Je,Se+ye,Je+ce,U.COLOR_BUFFER_BIT,U.NEAREST):Yi?U.copyTexSubImage3D(we,ue,Se,Je,Et+An,Ee,He,ye,ce):U.copyTexSubImage2D(we,ue,Se,Je,Ee,He,ye,ce);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Yi?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(we,ue,Se,Je,Et,ye,ce,ve,dt,qt,ut.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(we,ue,Se,Je,Et,ye,ce,ve,dt,ut.data):U.texSubImage3D(we,ue,Se,Je,Et,ye,ce,ve,dt,qt,ut):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,Se,Je,ye,ce,dt,qt,ut.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,Se,Je,ut.width,ut.height,dt,ut.data):U.texSubImage2D(U.TEXTURE_2D,ue,Se,Je,ye,ce,dt,qt,ut);fe.pixelStorei(U.UNPACK_ROW_LENGTH,jt),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Xi),fe.pixelStorei(U.UNPACK_SKIP_ROWS,$t),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Fa),ue===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&U.generateMipmap(we),fe.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&Oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){V=0,G=0,ee=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var nr=[{id:"flat",name:"Cards & flat print"},{id:"folded",name:"Folded leaflets"},{id:"invitations",name:"Invitations & greetings"},{id:"envelopes",name:"Envelopes"},{id:"folders",name:"Folders"},{id:"bound",name:"Brochures & books"},{id:"stationery",name:"Calendars & pads"},{id:"boxes",name:"Boxes"},{id:"bags",name:"Bags & food"},{id:"labels",name:"Labels & stickers"},{id:"display",name:"Large format & display"}],Vl={a7:[74,105],a6:[105,148],a5:[148,210],a4:[210,297],a3:[297,420],a2:[420,594],a1:[594,841],a0:[841,1189],b2:[500,700],b1:[700,1e3]},ya=["silk-350","silk-300","offset-120","cotton-450","kraft-300","black-300"],pi=["silk-170","gloss-170","silk-135","offset-120","silk-250","silk-300"],Wl=["cotton-450","silk-350","offset-120","kraft-300","black-300"],ba=["env-120","env-90","kraft-120","black-300"],gn=["gc1-350","gc1-400","kraftboard-400","black-300"],ql=["eflute-white","eflute-kraft"],Xe=["none","matte","gloss","soft"],J=(i,e,t)=>({id:i,label:e,p:t}),pe=(i,e,t,n,s)=>J(i,e,{w:t,h:n,...s}),Ma=(i,e)=>i.map(t=>pe(t,`${t.toUpperCase()} ${Vl[t][0]} \xD7 ${Vl[t][1]} mm`,Vl[t][0],Vl[t][1],e)),De=(i,e,t,n,s)=>J(i,e,{w:t,h:n,...s}),tr=[{id:"business-card",cat:"flat",name:"Business card",nl:"Visitekaartje",fr:"Carte de visite",use:"The European standard, 85 \xD7 55 mm.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55),pe("wide","90 \xD7 50 mm",90,50),pe("us","89 \xD7 51 mm",89,51)],stocks:ya,finishes:Xe},{id:"business-card-round",cat:"flat",name:"Rounded business card",nl:"Visitekaartje afgeronde hoeken",fr:"Carte de visite coins arrondis",use:"Same card with die-cut corners.",tpl:"sheet",sizes:[pe("r3","85 \xD7 55 mm, radius 3",85,55,{r:3}),pe("r6","85 \xD7 55 mm, radius 6",85,55,{r:6})],stocks:ya,finishes:Xe},{id:"business-card-square",cat:"flat",name:"Square business card",nl:"Vierkant visitekaartje",fr:"Carte de visite carr\xE9e",use:"Stands out in a stack of standard cards.",tpl:"sheet",sizes:[pe("s55","55 \xD7 55 mm",55,55),pe("s65","65 \xD7 65 mm",65,65),pe("s85","85 \xD7 85 mm",85,85)],stocks:ya,finishes:Xe},{id:"business-card-slim",cat:"flat",name:"Slim business card",nl:"Smal visitekaartje",fr:"Carte de visite \xE9troite",use:"A narrow card for a short message.",tpl:"sheet",sizes:[pe("s","85 \xD7 35 mm",85,35),pe("m","90 \xD7 40 mm",90,40)],stocks:ya,finishes:Xe},{id:"business-card-circle",cat:"flat",name:"Round card",nl:"Rond kaartje",fr:"Carte ronde",use:"Die-cut circle, also works as a coaster or tag.",tpl:"sheet",sizes:[pe("d60","\xD8 60 mm",60,60,{shape:"circle"}),pe("d70","\xD8 70 mm",70,70,{shape:"circle"})],stocks:ya,finishes:Xe},{id:"business-card-folded",cat:"flat",name:"Folded business card",nl:"Gevouwen visitekaartje",fr:"Carte de visite pli\xE9e",use:"Four sides of space in a wallet format.",tpl:"halfFold",sizes:[De("tent","170 \xD7 55 \u2192 85 \xD7 55 mm",170,55),De("top","85 \xD7 110 \u2192 85 \xD7 55 mm",85,110,{axis:"h"})],stocks:["silk-300","silk-350","offset-120","kraft-300"],finishes:Xe},{id:"flyer",cat:"flat",name:"Flyer",nl:"Flyer",fr:"Flyer",use:"Single sheet, one or two sides.",tpl:"sheet",sizes:[...Ma(["a7","a6","a5","a4"]),pe("dl","DL 99 \xD7 210 mm",99,210),pe("xl","X-long 105 \xD7 297 mm",105,297),pe("s148","Square 148 \xD7 148 mm",148,148),pe("s210","Square 210 \xD7 210 mm",210,210)],stocks:pi,finishes:Xe,def:"a5"},{id:"postcard",cat:"flat",name:"Postcard",nl:"Postkaart",fr:"Carte postale",use:"Heavy card, writable back.",tpl:"sheet",sizes:[pe("a6","A6 148 \xD7 105 mm",148,105),pe("lg","A5 210 \xD7 148 mm",210,148),pe("dl","DL 210 \xD7 99 mm",210,99),pe("sq","Square 140 \xD7 140 mm",140,140)],stocks:["silk-350","silk-300","offset-120","kraft-300"],finishes:["none","matte"]},{id:"letterhead",cat:"flat",name:"Letterhead",nl:"Briefpapier",fr:"Papier \xE0 en-t\xEAte",use:"Office-printable uncoated paper.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"compliment-slip",cat:"flat",name:"Compliment slip",nl:"Complimentkaart",fr:"Carte de correspondance",use:"Short note that fits a DL envelope.",tpl:"sheet",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99)],stocks:["offset-120","silk-250","silk-300"],finishes:["none","matte"]},{id:"bookmark",cat:"flat",name:"Bookmark",nl:"Boekenlegger",fr:"Marque-page",use:"Long narrow card, optional punched hole.",tpl:"sheet",sizes:[pe("s","50 \xD7 148 mm",50,148),pe("m","50 \xD7 200 mm",50,200),pe("l","60 \xD7 210 mm",60,210)],stocks:["silk-300","silk-350","kraft-300"],finishes:Xe},{id:"door-hanger",cat:"flat",name:"Door hanger",nl:"Deurhanger",fr:"Accroche-porte",use:"Die-cut hole with a slit for the handle.",tpl:"doorHanger",sizes:[pe("xl","105 \xD7 297 mm",105,297),pe("dl","99 \xD7 210 mm",99,210)],stocks:["silk-350","silk-300"],finishes:Xe},{id:"hang-tag",cat:"flat",name:"Hang tag",nl:"Hangtag",fr:"\xC9tiquette volante",use:"Clothing and product tag with a string.",tpl:"hangTag",sizes:[pe("s","50 \xD7 90 mm",50,90),pe("m","55 \xD7 85 mm",55,85),pe("l","70 \xD7 120 mm",70,120)],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:Xe},{id:"coaster",cat:"flat",name:"Beer mat",nl:"Bierviltje",fr:"Sous-bock",use:"Thick absorbent board, a Belgian classic.",tpl:"sheet",sizes:[pe("sq","Square 93 \xD7 93 mm",93,93,{r:3}),pe("rd","Round \xD8 93 mm",93,93,{shape:"circle"})],stocks:["beermat-1000"],finishes:["none"]},{id:"placemat",cat:"flat",name:"Placemat",nl:"Placemat",fr:"Set de table",use:"Paper table mat for horeca.",tpl:"sheet",sizes:[pe("a3","A3 420 \xD7 297 mm",420,297,{stack:8}),pe("l","430 \xD7 300 mm",430,300,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"menu-card",cat:"flat",name:"Menu card",nl:"Menukaart",fr:"Carte de menu",use:"Single card, often laminated for horeca.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297),pe("a5","A5 148 \xD7 210 mm",148,210),pe("xl","X-long 105 \xD7 297 mm",105,297)],stocks:["silk-350","silk-300","kraft-300"],finishes:Xe},{id:"voucher",cat:"flat",name:"Gift voucher",nl:"Cadeaubon",fr:"Bon cadeau",use:"DL card with a tear-off stub.",tpl:"ticket",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99,{stub:50})],stocks:["silk-250","silk-300"],finishes:["none","matte"]},{id:"event-ticket",cat:"flat",name:"Event ticket",nl:"Toegangsticket",fr:"Ticket d'entr\xE9e",use:"Perforated stub for checking in.",tpl:"ticket",sizes:[pe("m","200 \xD7 70 mm",200,70,{stub:40}),pe("s","148 \xD7 52 mm",148,52,{stub:34})],stocks:["silk-250","silk-300","gloss-300"],finishes:["none","matte"]},{id:"loyalty-card",cat:"flat",name:"Loyalty card",nl:"Spaarkaart",fr:"Carte de fid\xE9lit\xE9",use:"Stamp card, keep the back uncoated.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55)],stocks:["offset-120","silk-300"],finishes:["none"]},{id:"certificate",cat:"flat",name:"Certificate",nl:"Certificaat",fr:"Certificat",use:"Heavy A4 sheet with a writable surface.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:2})],stocks:["silk-250","offset-120","cotton-450"],finishes:["none"]},{id:"badge",cat:"flat",name:"Event badge",nl:"Badge",fr:"Badge",use:"Lanyard slot on top.",tpl:"badge",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a7","A7 74 \xD7 105 mm",74,105)],stocks:["silk-300","silk-350"],finishes:Xe},{id:"table-tent",cat:"flat",name:"Tent card",nl:"Tafelstandaard",fr:"Chevalet de table",use:"Folded card that stands on a table.",tpl:"tentCard",sizes:[J("a6","A5 \u2192 148 \xD7 105 mm",{w:148,h:210}),J("a5","A4 \u2192 210 \xD7 148 mm",{w:210,h:297}),J("name","Name card 90 \xD7 50 mm",{w:90,h:100})],stocks:["silk-350","silk-300","kraft-300"],finishes:Xe},{id:"table-talker",cat:"flat",name:"Table talker",nl:"Tafelprisma",fr:"Prisme de table",use:"Three-sided prism with a glue strip.",tpl:"tableTalker",sizes:[J("a6","148 \xD7 105 mm face",{w:148,side:105,h:310}),J("dl","210 \xD7 99 mm face",{w:210,side:99,h:300})],stocks:["silk-350","silk-300"],finishes:Xe},{id:"half-fold",cat:"folded",name:"Half fold",nl:"Enkelvouw",fr:"Pli simple",use:"One fold, four pages. The default leaflet.",tpl:"halfFold",sizes:[De("a4a5","A4 \u2192 A5",297,210),De("a3a4","A3 \u2192 A4",420,297),De("a5a6","A5 \u2192 A6",210,148),De("dl","198 \xD7 210 \u2192 DL",198,210),De("xl","A4 \u2192 X-long",210,297),De("sq","Square 296 \xD7 148 \u2192 148 mm",296,148)],stocks:pi,finishes:Xe},{id:"tri-fold",cat:"folded",name:"Tri-fold",nl:"Wikkelvouw",fr:"Pli roul\xE9",use:"Roll fold, six pages. The inner flap is cut narrower.",tpl:"rollFold",sizes:[De("a4","A4 \u2192 100 \xD7 210 mm",297,210,{panels:[97,100,100]}),De("a5","A5 \u2192 70 \xD7 148 mm",210,148,{panels:[68,71,71]}),De("a3","A3 \u2192 140 \xD7 297 mm",420,297,{panels:[138,141,141]}),De("sq","444 \xD7 148 \u2192 square 148 mm",444,148,{panels:[145,149.5,149.5]})],stocks:pi,finishes:Xe},{id:"z-fold",cat:"folded",name:"Z-fold",nl:"Zigzagvouw",fr:"Pli accord\xE9on",use:"Three equal panels that open like a Z.",tpl:"zFold",sizes:[De("a4","A4 \u2192 99 \xD7 210 mm",297,210),De("a5","A5 \u2192 70 \xD7 148 mm",210,148),De("a5l","630 \xD7 148 \u2192 A5 landscape",630,148),De("a3","A3 \u2192 140 \xD7 297 mm",420,297)],stocks:pi,finishes:Xe},{id:"gate-fold",cat:"folded",name:"Gate fold",nl:"Altaarvouw",fr:"Pli fen\xEAtre",use:"Two doors open onto a double centre.",tpl:"gateFold",sizes:[De("a4","A4 \u2192 149 \xD7 210 mm",297,210),De("a3","A3 \u2192 A4",420,297),De("a5","A5 \u2192 106 \xD7 148 mm",210,148)],stocks:pi,finishes:Xe},{id:"double-gate",cat:"folded",name:"Double gate fold",nl:"Dubbele altaarvouw",fr:"Pli portefeuille",use:"Gate fold closed once more down the middle.",tpl:"doubleGate",sizes:[De("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),De("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:pi,finishes:Xe},{id:"double-parallel",cat:"folded",name:"Double parallel fold",nl:"Dubbele parallelvouw",fr:"Double pli parall\xE8le",use:"Folded in half, then in half again.",tpl:"doubleParallel",sizes:[De("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),De("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:pi,finishes:Xe},{id:"roll-fold-8",cat:"folded",name:"Four-panel roll fold",nl:"Wikkelvouw 8 pagina\u2019s",fr:"Pli roul\xE9 4 volets",use:"Eight pages rolling inwards.",tpl:"roll4",sizes:[De("dl","396 \xD7 210 \u2192 100 \xD7 210 mm",396,210),De("a3","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:pi,finishes:Xe},{id:"accordion-4",cat:"folded",name:"Accordion, 4 panels",nl:"Zigzagvouw 4-luik",fr:"Accord\xE9on 4 volets",use:"Stands on a table as a small display.",tpl:"accordion",sizes:[De("dl","396 \xD7 210 \u2192 99 \xD7 210 mm",396,210,{n:4}),De("a6","420 \xD7 148 \u2192 105 \xD7 148 mm",420,148,{n:4})],stocks:pi,finishes:Xe},{id:"accordion-6",cat:"folded",name:"Leporello, 6 panels",nl:"Leporello",fr:"Leporello",use:"Long concertina for timelines and photo series.",tpl:"accordion",sizes:[De("dl","594 \xD7 210 \u2192 99 \xD7 210 mm",594,210,{n:6}),De("sq","888 \xD7 148 \u2192 square 148 mm",888,148,{n:6}),De("five","495 \xD7 210, 5 panels",495,210,{n:5})],stocks:["silk-250","silk-300","silk-170"],finishes:Xe},{id:"cross-fold",cat:"folded",name:"Cross fold",nl:"Kruisvouw",fr:"Pli crois\xE9",use:"Two folds at right angles, from A3 to A5.",tpl:"crossFold",sizes:[De("a3","A3 \u2192 A5",420,297),De("a2","A2 \u2192 A4",594,420),De("a4","A4 \u2192 A6",297,210)],stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"]},{id:"map-fold",cat:"folded",name:"Map fold",nl:"Landkaartvouw",fr:"Pli carte",use:"Concertina first, then folded across.",tpl:"mapFold",sizes:[De("a2","A2 \u2192 148 \xD7 210 mm",594,420,{cols:4}),De("a1","A1 \u2192 141 \xD7 210 mm",841,420,{cols:6})],stocks:["offset-90","silk-135"],finishes:["none"]},{id:"invite-flat",cat:"invitations",name:"Flat invitation",nl:"Uitnodiging plat",fr:"Faire-part simple",use:"A single heavy card, printed on both sides.",tpl:"sheet",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a5","A5 148 \xD7 210 mm",148,210),pe("5x7","127 \xD7 178 mm",127,178),pe("sq","Square 140 \xD7 140 mm",140,140),pe("dl","DL 99 \xD7 210 mm",99,210)],stocks:Wl,finishes:["none","matte","soft"]},{id:"invite-round",cat:"invitations",name:"Rounded invitation",nl:"Uitnodiging afgerond",fr:"Faire-part coins ronds",use:"Soft die-cut corners.",tpl:"sheet",sizes:[pe("a6","A6, radius 6",105,148,{r:6}),pe("a5","A5, radius 8",148,210,{r:8}),pe("sq","Square, radius 8",140,140,{r:8})],stocks:Wl,finishes:["none","matte","soft"]},{id:"invite-arch",cat:"invitations",name:"Arch invitation",nl:"Uitnodiging boogvorm",fr:"Faire-part en arche",use:"Die-cut arched top, popular for weddings.",tpl:"sheet",sizes:[pe("m","120 \xD7 170 mm",120,170,{shape:"arch"}),pe("s","105 \xD7 148 mm",105,148,{shape:"arch"})],stocks:Wl,finishes:["none","soft"]},{id:"invite-oval",cat:"invitations",name:"Oval invitation",nl:"Ovale uitnodiging",fr:"Faire-part ovale",use:"Die-cut oval for a softer shape.",tpl:"sheet",sizes:[pe("m","110 \xD7 160 mm",110,160,{shape:"ellipse"})],stocks:Wl,finishes:["none","soft"]},{id:"card-side",cat:"invitations",name:"Folded card, side fold",nl:"Dubbele kaart, zijvouw",fr:"Carte double, pli vertical",use:"Opens like a book, the greeting card.",tpl:"halfFold",sizes:[De("a6","A5 \u2192 A6",210,148),De("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178),De("sq","280 \xD7 140 \u2192 square 140 mm",280,140),De("a5","A4 \u2192 A5",297,210)],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"card-top",cat:"invitations",name:"Folded card, top fold",nl:"Dubbele kaart, kopvouw",fr:"Carte double, pli horizontal",use:"Opens upwards, landscape front.",tpl:"halfFold",sizes:[De("a6","A5 \u2192 A6 landscape",148,210,{axis:"h"}),De("sq","140 \xD7 280 \u2192 square 140 mm",140,280,{axis:"h"}),De("a5","A4 \u2192 A5 landscape",210,297,{axis:"h"})],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"invite-gate",cat:"invitations",name:"Gatefold invitation",nl:"Uitnodiging altaarvouw",fr:"Faire-part pli fen\xEAtre",use:"Two doors, a formal reveal.",tpl:"gateFold",sizes:[De("sq","300 \xD7 150 \u2192 square 150 mm",300,150),De("a6","210 \xD7 148 \u2192 106 \xD7 148 mm",210,148),De("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178),De("a6-flush","210 \xD7 148 \u2192 105 \xD7 148 mm, doors meet",210,148,{gap:.5})],stocks:["silk-300","cotton-450","pastel-board-700","kraft-300","black-300"],finishes:["none","soft"]},{id:"invite-z",cat:"invitations",name:"Z-fold invitation",nl:"Uitnodiging zigzagvouw",fr:"Faire-part accord\xE9on",use:"Three panels for programme and details.",tpl:"zFold",sizes:[De("sq","420 \xD7 140 \u2192 square 140 mm",420,140),De("dl","297 \xD7 210 \u2192 DL",297,210)],stocks:["silk-300","cotton-450","kraft-300"],finishes:["none","soft"]},{id:"invite-tri",cat:"invitations",name:"Tri-fold invitation",nl:"Uitnodiging wikkelvouw",fr:"Faire-part pli roul\xE9",use:"Folds into a slim DL card.",tpl:"rollFold",sizes:[De("dl","A4 \u2192 DL",297,210,{panels:[97,100,100]}),De("sq","420 \xD7 140 \u2192 square 140 mm",420,140,{panels:[136,142,142]})],stocks:["silk-250","silk-300","kraft-300"],finishes:["none","soft"]},{id:"invite-pocket",cat:"invitations",name:"Pocketfold invitation",nl:"Pocketfold uitnodiging",fr:"Faire-part pochette",use:"A little folder that holds the invitation suite.",tpl:"folder",sizes:[J("5x7","135 \xD7 185 mm",{w:135,h:185,pocket:70,slit:!1,insert:!0}),J("sq","150 \xD7 150 mm",{w:150,h:150,pocket:60,slit:!1,insert:!0})],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:["none","soft"]},{id:"belly-band",cat:"invitations",name:"Belly band",nl:"Bandrol",fr:"Bande de papier",use:"Paper band that holds the suite together.",tpl:"sleeve",sizes:[J("5x7","127 mm card, 40 mm band",{L:127,W:40,H:2.2,inner:178,t:.2,innerColor:"#f7f5ef"}),J("a6","A6 card, 35 mm band",{L:105,W:35,H:2.2,inner:148,t:.2,innerColor:"#f7f5ef"})],stocks:["offset-120","kraft-120","silk-170"],finishes:["none"]},{id:"rsvp-card",cat:"invitations",name:"RSVP & save the date",nl:"Antwoordkaart",fr:"Carte r\xE9ponse",use:"Small reply card, uncoated so it takes a pen.",tpl:"sheet",sizes:[pe("a7","A7 105 \xD7 74 mm",105,74),pe("a6","A6 148 \xD7 105 mm",148,105)],stocks:["offset-120","cotton-450","kraft-300"],finishes:["none"]},{id:"place-card",cat:"invitations",name:"Place card",nl:"Naamkaartje",fr:"Marque-place",use:"Small tent for the table.",tpl:"tentCard",sizes:[J("s","90 \xD7 50 mm",{w:90,h:100}),J("m","100 \xD7 60 mm",{w:100,h:120})],stocks:["cotton-450","silk-300","kraft-300"],finishes:["none"]},{id:"envelope-wallet",cat:"envelopes",name:"Wallet envelope",nl:"Envelop met lange klep",fr:"Enveloppe patte longue",use:"Flap on the long side, DL and C-series.",tpl:"envelope",sizes:[J("dl","DL 220 \xD7 110 mm",{w:220,h:110}),J("c6","C6 162 \xD7 114 mm",{w:162,h:114}),J("c5","C5 229 \xD7 162 mm",{w:229,h:162}),J("c65","C6/5 229 \xD7 114 mm",{w:229,h:114}),J("c7","C7 114 \xD7 81 mm",{w:114,h:81})],stocks:ba,finishes:["none"]},{id:"envelope-window",cat:"envelopes",name:"Window envelope",nl:"Vensterenvelop",fr:"Enveloppe \xE0 fen\xEAtre",use:"Address window on the left, as used in Belgium.",tpl:"envelope",sizes:[J("dl","DL, window 90 \xD7 45 mm",{w:220,h:110,window:{x:20,y:50,w:90,h:45}}),J("c5","C5, window 90 \xD7 45 mm",{w:229,h:162,window:{x:20,y:96,w:90,h:45}})],stocks:ba,finishes:["none"]},{id:"envelope-pocket",cat:"envelopes",name:"Pocket envelope",nl:"Akte-envelop",fr:"Pochette",use:"Opens on the short side, for flat documents.",tpl:"envelope",sizes:[J("c4","C4 229 \xD7 324 mm",{w:229,h:324,style:"pocket"}),J("c5","C5 162 \xD7 229 mm",{w:162,h:229,style:"pocket"}),J("b4","B4 250 \xD7 353 mm",{w:250,h:353,style:"pocket"})],stocks:ba,finishes:["none"]},{id:"envelope-square",cat:"envelopes",name:"Square envelope",nl:"Vierkante envelop",fr:"Enveloppe carr\xE9e",use:"For square invitations, check the postage.",tpl:"envelope",sizes:[J("140","140 \xD7 140 mm",{w:140,h:140}),J("155","155 \xD7 155 mm",{w:155,h:155}),J("170","170 \xD7 170 mm",{w:170,h:170})],stocks:ba,finishes:["none"]},{id:"envelope-pointed",cat:"envelopes",name:"Pointed flap envelope",nl:"Envelop met puntklep",fr:"Enveloppe patte pointue",use:"The classic diamond-cut invitation envelope.",tpl:"envelope",sizes:[J("c6","C6 162 \xD7 114 mm",{w:162,h:114,style:"pointed"}),J("c5","C5 229 \xD7 162 mm",{w:229,h:162,style:"pointed"}),J("sq","Square 170 \xD7 170 mm",{w:170,h:170,style:"pointed"})],stocks:ba,finishes:["none"]},{id:"envelope-gusset",cat:"envelopes",name:"Gusset envelope",nl:"Envelop met balgzijde",fr:"Pochette \xE0 soufflet",use:"Expands for catalogues and thick documents.",tpl:"gussetEnvelope",sizes:[J("c4","C4 229 \xD7 324 mm, 25 mm",{w:229,h:324,g:25}),J("b4","B4 250 \xD7 353 mm, 40 mm",{w:250,h:353,g:40})],stocks:["kraft-120","env-120"],finishes:["none"]},{id:"folder-one",cat:"folders",name:"Presentation folder",nl:"Presentatiemap",fr:"Chemise \xE0 rabat",use:"A4 folder with one pocket and card slits.",tpl:"folder",sizes:[J("a4","A4 220 \xD7 310 mm",{w:220,h:310,insert:!0}),J("a5","A5 155 \xD7 220 mm",{w:155,h:220,pocket:70,insert:!0})],stocks:["silk-300","silk-350","gc1-350","kraft-300"],finishes:Xe},{id:"folder-two",cat:"folders",name:"Folder with two pockets",nl:"Map met twee flappen",fr:"Chemise \xE0 deux rabats",use:"Pockets left and right.",tpl:"folder",sizes:[J("a4","A4 220 \xD7 310 mm",{w:220,h:310,two:!0})],stocks:["silk-300","silk-350","gc1-350"],finishes:Xe},{id:"folder-spine",cat:"folders",name:"Folder with spine",nl:"Map met rug",fr:"Chemise avec dos",use:"A scored spine for thicker document sets.",tpl:"folder",sizes:[J("s3","A4, spine 3 mm",{w:220,h:310,spine:3}),J("s5","A4, spine 5 mm",{w:220,h:310,spine:5}),J("s10","A4, spine 10 mm",{w:220,h:310,spine:10})],stocks:["silk-350","gc1-350","gc1-400"],finishes:Xe},{id:"brochure-saddle",cat:"bound",name:"Stapled brochure",nl:"Geniete brochure",fr:"Brochure agraf\xE9e",use:"Saddle stitched, page count in fours.",tpl:"saddleBook",sizes:Ma(["a6","a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210),pe("dl","DL 99 \xD7 210 mm",99,210)),pageOptions:[8,12,16,24,32,48],defPages:16,stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"brochure-perfect",cat:"bound",name:"Perfect bound book",nl:"Gelijmde brochure",fr:"Dos carr\xE9 coll\xE9",use:"Square glued spine for catalogues and magazines.",tpl:"perfectBook",sizes:Ma(["a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210)),pageOptions:[40,64,96,128,200],defPages:96,stocks:["silk-250","silk-300"],finishes:["none","matte","gloss","soft"],def:"a5"},{id:"book-hardcover",cat:"bound",name:"Hardcover book",nl:"Hardcover boek",fr:"Livre reli\xE9",use:"Cover wrapped over rigid board.",tpl:"perfectBook",sizes:Ma(["a5","a4"],{hard:!0}).concat(pe("sq","Square 210 \xD7 210 mm",210,210,{hard:!0})),pageOptions:[64,96,128,200,300],defPages:128,stocks:["silk-170","silk-250"],finishes:["matte","gloss","soft"],def:"a5"},{id:"notebook-wire",cat:"bound",name:"Wire-O notebook",nl:"Wire-O notitieboek",fr:"Carnet \xE0 spirale",use:"Opens flat, pages turn all the way round.",tpl:"wireBook",sizes:Ma(["a6","a5","a4"]),pageOptions:[40,80,100],defPages:80,stocks:["silk-300","silk-350","kraft-300"],finishes:["none","matte"],def:"a5"},{id:"calendar-wall",cat:"stationery",name:"Wall calendar",nl:"Wandkalender",fr:"Calendrier mural",use:"Twelve months on a wire with a hanger.",tpl:"wireBook",sizes:[pe("a4","A4 landscape, opens to A3",297,210,{pages:26,edge:"top",wall:!0}),pe("a3","A3 landscape, opens to A2",420,297,{pages:26,edge:"top",wall:!0})],stocks:["silk-250","silk-170"],finishes:["none"]},{id:"calendar-desk",cat:"stationery",name:"Desk calendar",nl:"Bureaukalender",fr:"Calendrier de bureau",use:"Stands on a folded easel.",tpl:"deskCalendar",sizes:[J("l","210 \xD7 105 mm",{w:210,h:105}),J("s","148 \xD7 105 mm",{w:148,h:105})],stocks:["silk-350","silk-300"],finishes:["none"]},{id:"calendar-poster",cat:"stationery",name:"Poster calendar",nl:"Jaarkalender",fr:"Calendrier poster",use:"One year on one sheet.",tpl:"poster",sizes:[J("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Calendar"}),J("a3","A3 297 \xD7 420 mm",{w:297,h:420,name:"Calendar"})],stocks:["poster-135","silk-170"],finishes:["none"]},{id:"notepad",cat:"stationery",name:"Notepad",nl:"Notitieblok",fr:"Bloc-notes",use:"Glued at the top on a chipboard back.",tpl:"notepad",sizes:[pe("a4","A4, 50 sheets",210,297),pe("a5","A5, 50 sheets",148,210),pe("a6","A6, 50 sheets",105,148),pe("a7","A7, 50 sheets",74,105)],stocks:["offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"memo-block",cat:"stationery",name:"Memo block",nl:"Memoblok",fr:"Bloc cube",use:"A tall stack of 500 sheets, printed on the sides too.",tpl:"notepad",sizes:[pe("90","90 \xD7 90 mm, 500 sheets",90,90,{sheets:500,t:.09})],stocks:["offset-90"],finishes:["none"]},{id:"box-straight",cat:"boxes",name:"Straight tuck box",nl:"Vouwdoos, tuck aan \xE9\xE9n zijde",fr:"\xC9tui \xE0 rabats droits",use:"Both tucks open to the same side.",tpl:"tuckBox",sizes:[J("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130}),J("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180}),J("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150}),J("tea","110 \xD7 70 \xD7 70 mm",{L:110,W:70,H:70})],stocks:gn,finishes:Xe},{id:"box-reverse",cat:"boxes",name:"Reverse tuck box",nl:"Vouwdoos, omgekeerde tuck",fr:"\xC9tui \xE0 rabats invers\xE9s",use:"Tucks on opposite sides, cheaper to cut.",tpl:"tuckBox",sizes:[J("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130,reverse:!0}),J("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180,reverse:!0}),J("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150,reverse:!0})],stocks:gn,finishes:Xe},{id:"box-autolock",cat:"boxes",name:"Auto-lock bottom box",nl:"Vouwdoos met autolockbodem",fr:"\xC9tui \xE0 fond automatique",use:"Bottom snaps into place when the box opens.",tpl:"autoLockBox",sizes:[J("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),J("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:gn,finishes:Xe},{id:"box-snap",cat:"boxes",name:"Snap-lock bottom box",nl:"Vouwdoos met snapbodem",fr:"\xC9tui \xE0 fond 1-2-3",use:"Four flaps folded in order, the 1-2-3 bottom.",tpl:"snapBox",sizes:[J("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),J("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:gn,finishes:Xe},{id:"box-hang",cat:"boxes",name:"Hang tab box",nl:"Doos met ophangoog",fr:"\xC9tui avec eurotrou",use:"Retail box with a euro slot.",tpl:"tuckBox",sizes:[J("s","80 \xD7 30 \xD7 120 mm",{L:80,W:30,H:120,hang:!0}),J("m","110 \xD7 40 \xD7 150 mm",{L:110,W:40,H:150,hang:!0})],stocks:gn,finishes:Xe},{id:"box-wine",cat:"boxes",name:"Wine box",nl:"Wijndoos",fr:"Bo\xEEte \xE0 vin",use:"Tall carton for one bottle.",tpl:"autoLockBox",sizes:[J("b1","1 bottle, 90 \xD7 90 \xD7 340 mm",{L:90,W:90,H:340})],stocks:gn,finishes:Xe},{id:"box-mailer",cat:"boxes",name:"Mailer box",nl:"Verzenddoos",fr:"Bo\xEEte postale",use:"FEFCO 0427 family, double walls, no tape.",tpl:"mailerBox",sizes:[J("s","200 \xD7 140 \xD7 50 mm",{L:200,W:140,H:50}),J("m","300 \xD7 220 \xD7 80 mm",{L:300,W:220,H:80}),J("a4","A4 305 \xD7 215 \xD7 40 mm",{L:305,W:215,H:40}),J("xs","160 \xD7 120 \xD7 40 mm",{L:160,W:120,H:40})],stocks:ql,finishes:["none"]},{id:"box-shipping",cat:"boxes",name:"Shipping carton",nl:"Amerikaanse vouwdoos",fr:"Caisse am\xE9ricaine",use:"FEFCO 0201, the standard slotted carton.",tpl:"shippingBox",sizes:[J("s","200 \xD7 200 \xD7 110 mm",{L:200,W:200,H:110,t:3}),J("m","305 \xD7 220 \xD7 250 mm",{L:305,W:220,H:250,t:3}),J("l","430 \xD7 305 \xD7 250 mm",{L:430,W:305,H:250,t:3})],stocks:["bflute-kraft","eflute-kraft"],finishes:["none"]},{id:"box-lid",cat:"boxes",name:"Lid and base box",nl:"Dekseldoos",fr:"Bo\xEEte \xE0 couvercle",use:"Two trays, FEFCO 03xx family, gift packaging.",tpl:"lidBox",sizes:[J("m","160 \xD7 120 \xD7 60 mm",{L:160,W:120,H:60}),J("sq","150 \xD7 150 \xD7 80 mm",{L:150,W:150,H:80}),J("l","240 \xD7 180 \xD7 80 mm",{L:240,W:180,H:80})],stocks:gn,finishes:Xe},{id:"box-drawer",cat:"boxes",name:"Drawer box",nl:"Schuifdoos",fr:"Bo\xEEte tiroir",use:"A tray that slides out of a sleeve.",tpl:"drawerBox",sizes:[J("m","120 \xD7 80 \xD7 30 mm",{L:120,W:80,H:30}),J("l","180 \xD7 120 \xD7 50 mm",{L:180,W:120,H:50})],stocks:gn,finishes:Xe},{id:"box-sleeve",cat:"boxes",name:"Packaging sleeve",nl:"Sleeve",fr:"Fourreau",use:"Printed band around a plain box.",tpl:"sleeve",sizes:[J("m","120 \xD7 70 \xD7 30 mm",{L:120,W:70,H:30,inner:160,innerColor:"#c9b08a"}),J("l","200 \xD7 90 \xD7 50 mm",{L:200,W:90,H:50,inner:220,innerColor:"#c9b08a"})],stocks:gn,finishes:Xe},{id:"box-gable",cat:"boxes",name:"Gable box",nl:"Gable box",fr:"Bo\xEEte \xE0 anse",use:"Built-in carry handle.",tpl:"gableBox",sizes:[J("m","140 \xD7 70 \xD7 120 mm",{L:140,W:70,H:120}),J("s","100 \xD7 60 \xD7 90 mm",{L:100,W:60,H:90})],stocks:gn,finishes:Xe},{id:"box-pillow",cat:"boxes",name:"Pillow box",nl:"Pillow box",fr:"Bo\xEEte berlingot",use:"Curved scores close the two ends.",tpl:"pillowBox",sizes:[J("m","120 \xD7 80 \xD7 34 mm",{L:120,W:80,H:34}),J("s","90 \xD7 60 \xD7 26 mm",{L:90,W:60,H:26})],stocks:gn,finishes:Xe},{id:"box-tray",cat:"boxes",name:"Open tray",nl:"Tray",fr:"Barquette",use:"Lidless tray, also for shelf-ready packs.",tpl:"trayBox",sizes:[J("m","200 \xD7 140 \xD7 40 mm",{L:200,W:140,H:40}),J("s","120 \xD7 90 \xD7 30 mm",{L:120,W:90,H:30})],stocks:[...gn,...ql],finishes:["none","matte"]},{id:"box-cake",cat:"boxes",name:"Cake box",nl:"Taartdoos",fr:"Bo\xEEte \xE0 p\xE2tisserie",use:"One piece with a hinged lid.",tpl:"cakeBox",sizes:[J("m","200 \xD7 200 \xD7 90 mm",{L:200,W:200,H:90}),J("l","260 \xD7 260 \xD7 100 mm",{L:260,W:260,H:100}),J("b","Pralines 150 \xD7 100 \xD7 40 mm",{L:150,W:100,H:40})],stocks:gn,finishes:["none","matte"]},{id:"box-pizza",cat:"boxes",name:"Pizza box",nl:"Pizzadoos",fr:"Bo\xEEte \xE0 pizza",use:"Flat hinged box in corrugated board.",tpl:"cakeBox",sizes:[J("33","330 \xD7 330 \xD7 40 mm",{L:330,W:330,H:40,t:1.5})],stocks:ql,finishes:["none"]},{id:"counter-display",cat:"boxes",name:"Counter display",nl:"Toonbankdisplay",fr:"Pr\xE9sentoir de comptoir",use:"Tray with a printed header card.",tpl:"counterDisplay",sizes:[J("m","220 \xD7 160 mm, header 120 mm",{L:220,W:160,H:70,header:120})],stocks:ql,finishes:["none"]},{id:"bag-carrier",cat:"bags",name:"Carrier bag",nl:"Papieren draagtas",fr:"Sac papier",use:"Rope handles, reinforced top hem.",tpl:"paperBag",sizes:[J("m","240 \xD7 100 \xD7 320 mm",{w:240,h:320,g:100}),J("s","180 \xD7 80 \xD7 240 mm",{w:180,h:240,g:80}),J("l","320 \xD7 120 \xD7 420 mm",{w:320,h:420,g:120})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"bag-bakery",cat:"bags",name:"Flat-bottom paper bag",nl:"Bakkerszak",fr:"Sac boulanger",use:"Square bottom, no handles.",tpl:"paperBag",sizes:[J("m","180 \xD7 80 \xD7 260 mm",{w:180,h:260,g:80,hem:0,handles:!1}),J("s","140 \xD7 60 \xD7 200 mm",{w:140,h:200,g:60,hem:0,handles:!1})],stocks:["kraftbag-120","bag-170"],finishes:["none"]},{id:"bag-wine",cat:"bags",name:"Wine bag",nl:"Wijntas",fr:"Sac \xE0 bouteille",use:"Narrow bag for one bottle.",tpl:"paperBag",sizes:[J("b1","100 \xD7 90 \xD7 360 mm",{w:100,h:360,g:90})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"fries-cone",cat:"bags",name:"Fries cone",nl:"Frietzak",fr:"Cornet de frites",use:"Rolled cone in its wire holder.",tpl:"friesCone",sizes:[J("m","Height 210 mm, \xD8 110 mm",{h:210,topD:110}),J("s","Height 170 mm, \xD8 90 mm",{h:170,topD:90})],stocks:["silk-250","kraft-300"],finishes:["none"]},{id:"paper-cup",cat:"bags",name:"Paper cup",nl:"Koffiebeker",fr:"Gobelet carton",use:"Printed wrap of a takeaway cup.",tpl:"coneWrap",sizes:[J("m","8 oz, \xD8 80 mm",{topD:80,bottomD:56,height:92}),J("l","12 oz, \xD8 90 mm",{topD:90,bottomD:60,height:110})],stocks:["silk-300","kraft-300"],finishes:["none"]},{id:"cup-sleeve",cat:"bags",name:"Cup sleeve",nl:"Bekerhuls",fr:"Manchon de gobelet",use:"Heat-protecting band around a plain cup.",tpl:"coneWrap",sizes:[J("l","For 12 oz cups",{topD:88,bottomD:72,height:55,kind:"sleeve"})],stocks:["kraft-300","silk-300"],finishes:["none"]},{id:"sticker-round",cat:"labels",name:"Round sticker",nl:"Ronde sticker",fr:"Autocollant rond",use:"Single die-cut stickers.",tpl:"sheet",sizes:[pe("d50","\xD8 50 mm",50,50,{shape:"circle",bleed:2}),pe("d80","\xD8 80 mm",80,80,{shape:"circle",bleed:2}),pe("d30","\xD8 30 mm",30,30,{shape:"circle",bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-rect",cat:"labels",name:"Rectangular sticker",nl:"Rechthoekige sticker",fr:"Autocollant rectangulaire",use:"Rounded corners, for packaging and seals.",tpl:"sheet",sizes:[pe("m","100 \xD7 50 mm",100,50,{r:3,bleed:2}),pe("s","60 \xD7 40 mm",60,40,{r:2,bleed:2}),pe("a6","A6 148 \xD7 105 mm",148,105,{r:3,bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-sheet",cat:"labels",name:"Sticker sheet",nl:"Stickervel",fr:"Planche de stickers",use:"Kiss cut on one backing sheet.",tpl:"stickerSheet",sizes:[J("a4","A4, 12 \xD7 \xD8 60 mm",{w:210,h:297,cols:3,rows:4,d:60}),J("a5","A5, 6 \xD7 \xD8 40 mm",{w:148,h:210,cols:2,rows:3,d:54})],stocks:["label-90","vinyl-100"],finishes:["none","gloss"]},{id:"label-wine",cat:"labels",name:"Wine label",nl:"Wijnetiket",fr:"\xC9tiquette de vin",use:"Front label on a Bordeaux bottle.",tpl:"wrapLabel",sizes:[J("m","100 \xD7 120 mm",{w:100,h:120,container:"wine",y:40}),J("s","90 \xD7 100 mm",{w:90,h:100,container:"wine",y:50})],stocks:["label-90","offset-90"],finishes:["none"]},{id:"label-beer",cat:"labels",name:"Beer label",nl:"Bieretiket",fr:"\xC9tiquette de bi\xE8re",use:"33 cl bottle, a Belgian must-have.",tpl:"wrapLabel",sizes:[J("m","100 \xD7 90 mm",{w:100,h:90,container:"beer",y:18}),J("w","Wrap 188 \xD7 60 mm",{w:188,h:60,container:"beer",y:30})],stocks:["label-90"],finishes:["none","gloss"]},{id:"label-jar",cat:"labels",name:"Jar label",nl:"Potetiket",fr:"\xC9tiquette de bocal",use:"For food jars, jam, honey, sauces.",tpl:"wrapLabel",sizes:[J("m","120 \xD7 70 mm",{w:120,h:70,container:"jar",y:22}),J("o","Oval 90 \xD7 70 mm",{w:90,h:70,container:"jar",y:22,shape:"oval"})],stocks:["label-90","kraft-120"],finishes:["none"]},{id:"label-can",cat:"labels",name:"Can wrap",nl:"Blikwikkel",fr:"\xC9tiquette de canette",use:"Full wrap around a 33 cl can.",tpl:"wrapLabel",sizes:[J("33","33 cl, 206 \xD7 96 mm",{w:206,h:96,container:"can",y:10})],stocks:["label-90","vinyl-100"],finishes:["gloss","matte"]},{id:"mug-wrap",cat:"labels",name:"Mug print",nl:"Mok bedrukken",fr:"Mug personnalis\xE9",use:"All-round print on a ceramic mug.",tpl:"wrapLabel",sizes:[J("m","200 \xD7 90 mm",{w:200,h:90,container:"mug",y:3})],stocks:["vinyl-100"],finishes:["gloss"]},{id:"poster",cat:"display",name:"Poster",nl:"Affiche",fr:"Affiche",use:"A and B series, indoor paper.",tpl:"poster",sizes:[J("a3","A3 297 \xD7 420 mm",{w:297,h:420}),J("a2","A2 420 \xD7 594 mm",{w:420,h:594}),J("a1","A1 594 \xD7 841 mm",{w:594,h:841}),J("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),J("b2","B2 500 \xD7 700 mm",{w:500,h:700}),J("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3})],stocks:["poster-135","silk-170","silk-250"],finishes:["none","matte"],def:"a2"},{id:"poster-blueback",cat:"display",name:"Blueback poster",nl:"Blueback affiche",fr:"Affiche dos bleu",use:"Opaque back for street and billboard pasting.",tpl:"poster",sizes:[J("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),J("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3}),J("abri","Abribus 1185 \xD7 1750 mm",{w:1185,h:1750})],stocks:["blueback-115"],finishes:["none"]},{id:"rollup",cat:"display",name:"Roll-up banner",nl:"Roll-up banner",fr:"Roll-up",use:"Graphic pulls out of an aluminium cassette.",tpl:"rollup",sizes:[J("85","850 \xD7 2000 mm",{w:850,h:2e3}),J("100","1000 \xD7 2000 mm",{w:1e3,h:2e3}),J("120","1200 \xD7 2000 mm",{w:1200,h:2e3})],stocks:["pet-510"],finishes:["none"]},{id:"a-board",cat:"display",name:"A-board",nl:"Stoepbord",fr:"Stop-trottoir",use:"Two-sided pavement sign with a clip frame.",tpl:"aBoard",sizes:[J("a1","A1 594 \xD7 841 mm",{w:594,h:841}),J("a0","A0 841 \xD7 1189 mm",{w:841,h:1189})],stocks:["poster-135"],finishes:["none"]},{id:"sign-rigid",cat:"display",name:"Rigid sign",nl:"Forex bord",fr:"Panneau PVC",use:"Direct print on 5 mm foam PVC.",tpl:"poster",sizes:[J("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Sign"}),J("a1","A1 594 \xD7 841 mm",{w:594,h:841,name:"Sign"}),J("m","1000 \xD7 700 mm",{w:1e3,h:700,name:"Sign"})],stocks:["pvc-5","corplast-3"],finishes:["none"]},{id:"banner-pvc",cat:"display",name:"PVC banner",nl:"Spandoek",fr:"B\xE2che",use:"Outdoor banner with eyelets every 50 cm.",tpl:"poster",sizes:[J("2x1","2000 \xD7 1000 mm",{w:2e3,h:1e3,eyelets:500,name:"Banner"}),J("3x1","3000 \xD7 1000 mm",{w:3e3,h:1e3,eyelets:500,name:"Banner"})],stocks:["pvc-banner"],finishes:["none"]},{id:"wobbler",cat:"display",name:"Shelf wobbler",nl:"Wobbler",fr:"Stop-rayon",use:"Small round card on a flexible strip.",tpl:"sheet",sizes:[pe("d90","\xD8 90 mm",90,90,{shape:"circle"})],stocks:["silk-300","silk-350"],finishes:Xe}],ir=Object.fromEntries(tr.map(i=>[i.id,i])),Yf=()=>({formats:tr.length,sizes:tr.reduce((i,e)=>i+e.sizes.length,0)});var ds={"offset-90":{name:"Uncoated 90 g",gsm:90,mm:.11,color:"#f7f6f1",rough:.92,kind:"paper"},"offset-120":{name:"Uncoated 120 g",gsm:120,mm:.15,color:"#f7f6f1",rough:.92,kind:"paper"},"silk-135":{name:"Silk 135 g",gsm:135,mm:.11,color:"#f9f8f4",rough:.55,kind:"paper"},"silk-170":{name:"Silk 170 g",gsm:170,mm:.14,color:"#f9f8f4",rough:.55,kind:"paper"},"gloss-170":{name:"Gloss 170 g",gsm:170,mm:.13,color:"#fbfaf7",rough:.3,kind:"paper"},"silk-250":{name:"Silk 250 g",gsm:250,mm:.22,color:"#f9f8f4",rough:.55,kind:"card"},"silk-300":{name:"Silk 300 g",gsm:300,mm:.27,color:"#f9f8f4",rough:.55,kind:"card"},"silk-350":{name:"Silk 350 g",gsm:350,mm:.33,color:"#f9f8f4",rough:.55,kind:"card"},"gloss-300":{name:"Gloss 300 g",gsm:300,mm:.26,color:"#fbfaf7",rough:.3,kind:"card"},"cotton-450":{name:"Cotton 450 g",gsm:450,mm:.6,color:"#f6f2e9",rough:.96,kind:"card"},"pastel-board-700":{name:"Designer board 700 g \xB7 warm pastel",gsm:700,mm:.9,color:"#f2e2d5",rough:.95,kind:"card",multiply:!0,felt:!0,core:"#e2b3a2",inside:"#f2e2d5"},"kraft-300":{name:"Kraft 300 g",gsm:300,mm:.36,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"black-300":{name:"Black card 300 g",gsm:300,mm:.34,color:"#17171a",rough:.72,kind:"card",dark:!0},"env-90":{name:"Envelope 90 g",gsm:90,mm:.12,color:"#f6f5f0",rough:.9,kind:"paper"},"env-120":{name:"Envelope 120 g",gsm:120,mm:.16,color:"#f4f2ea",rough:.9,kind:"paper"},"kraft-120":{name:"Kraft 120 g",gsm:120,mm:.17,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"gc1-350":{name:"GC1 carton 350 g",gsm:350,mm:.45,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"gc1-400":{name:"GC1 carton 400 g",gsm:400,mm:.52,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"kraftboard-400":{name:"Kraft carton 400 g",gsm:400,mm:.55,color:"#b08a60",rough:.88,kind:"kraft",multiply:!0},"eflute-white":{name:"E-flute white",gsm:0,mm:1.5,color:"#f2f0ea",rough:.78,kind:"corrugated",inside:"#efe7d6",flute:3.2,core:"#d9c6a4"},"eflute-kraft":{name:"E-flute kraft",gsm:0,mm:1.5,color:"#b58f63",rough:.86,kind:"corrugated",multiply:!0,flute:3.2,core:"#c9a97c"},"bflute-kraft":{name:"B-flute kraft",gsm:0,mm:3,color:"#b58f63",rough:.88,kind:"corrugated",multiply:!0,flute:6.5,core:"#c9a97c"},"bag-170":{name:"Bag paper 170 g",gsm:170,mm:.2,color:"#f6f5f0",rough:.7,kind:"paper"},"kraftbag-120":{name:"Kraft bag 120 g",gsm:120,mm:.18,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"label-90":{name:"Label paper",gsm:90,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"vinyl-100":{name:"White vinyl",gsm:0,mm:.1,color:"#fbfbfb",rough:.34,kind:"paper"},"beermat-1000":{name:"Beer mat board",gsm:1e3,mm:1.5,color:"#f5f2e8",rough:.9,kind:"board"},"poster-135":{name:"Poster 135 g",gsm:135,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"blueback-115":{name:"Blueback 115 g",gsm:115,mm:.13,color:"#f6f6f2",rough:.72,kind:"paper",inside:"#5c7fa8"},"pet-510":{name:"Roll-up film 510 \xB5m",gsm:0,mm:.51,color:"#f4f4f2",rough:.45,kind:"board"},"pvc-5":{name:"Forex 5 mm",gsm:0,mm:5,color:"#f8f8f6",rough:.45,kind:"board"},"pvc-banner":{name:"PVC banner 510 g",gsm:510,mm:.5,color:"#f5f5f3",rough:.55,kind:"board"},"corplast-3":{name:"Corrugated plastic 3 mm",gsm:0,mm:3,color:"#f2f2ef",rough:.5,kind:"board"}},sr={none:{name:"No lamination",rough:null,clearcoat:0},matte:{name:"Matte lamination",rough:.62,clearcoat:0},gloss:{name:"Gloss lamination",rough:.22,clearcoat:.6},soft:{name:"Soft-touch",rough:.78,clearcoat:0,sheen:.5}};var mi=(i,e)=>[i[0]-e[0],i[1]-e[1]],us=(i,e)=>[i[0]+e[0],i[1]+e[1]],rr=(i,e)=>[i[0]*e,i[1]*e],$l=(i,e)=>i[0]*e[0]+i[1]*e[1];var $h=i=>Math.hypot(i[0],i[1]),Sa=i=>{let e=$h(i)||1;return[i[0]/e,i[1]/e]};function Zf(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2}function Kf(i){let e=0,t=0,n=0;for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],o=r[0]*a[1]-a[0]*r[1];n+=o,e+=(r[0]+a[0])*o,t+=(r[1]+a[1])*o}return Math.abs(n)<1e-6?[i[0][0],i[0][1]]:[e/(3*n),t/(3*n)]}function Xh(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i)for(let a of r)a[0]<e&&(e=a[0]),a[1]<t&&(t=a[1]),a[0]>n&&(n=a[0]),a[1]>s&&(s=a[1]);return{x0:e,y0:t,x1:n,y1:s,w:n-e,h:s-t}}var gi=(i,e,t,n)=>[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];function Kn(i,e,t,n=64){let s=[];for(let r=0;r<n;r++){let a=r/n*Math.PI*2;s.push([i+Math.cos(a)*t,e+Math.sin(a)*t])}return s}function Xl(i,e,t,n,s=72){let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2;r.push([i+Math.cos(o)*t,e+Math.sin(o)*n])}return r}function Gi(i,e,t=7){let n=i.length,s=[];for(let r=0;r<n;r++){let a=i[r],o=Array.isArray(e)?e[r]||0:e;if(!o){s.push(a);continue}let l=i[(r-1+n)%n],c=i[(r+1)%n],h=Sa(mi(l,a)),d=Sa(mi(c,a)),u=Math.max(-1,Math.min(1,$l(h,d))),f=Math.acos(u);if(f<.02||f>Math.PI-.02){s.push(a);continue}let p=Math.min($h(mi(l,a)),$h(mi(c,a)))*.499,_=o/Math.tan(f/2),m=o;_>p&&(_=p,m=_*Math.tan(f/2));let g=us(a,rr(h,_)),v=us(a,rr(d,_)),b=Sa(us(h,d)),y=us(a,rr(b,m/Math.sin(f/2))),T=Math.atan2(g[1]-y[1],g[0]-y[0]),E=Math.atan2(v[1]-y[1],v[0]-y[0]),x=E-T;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;E=T+x;for(let S=0;S<=t;S++){let L=S/t,R=T+(E-T)*L;s.push([y[0]+Math.cos(R)*m,y[1]+Math.sin(R)*m])}}return s}function Jf(i,e=1e-4){let t=[];for(let n of i){let s=t[t.length-1];(!s||Math.hypot(n[0]-s[0],n[1]-s[1])>e)&&t.push(n)}for(;t.length>2&&Math.hypot(t[0][0]-t[t.length-1][0],t[0][1]-t[t.length-1][1])<=e;)t.pop();return t}var lt=i=>{let e=Math.round(i*10)/10;return Number.isInteger(e)?String(e):e.toFixed(1)},ar=(i,e)=>`${lt(i)} \xD7 ${lt(e)}`;var jf={type:"change"},Zh={type:"start"},ep={type:"end"},Yl=new Ci,Qf=new dn,py=Math.cos(70*cs.DEG2RAD),kt=new C,on=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6,Zl=class extends ra{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new pt,this._lastTargetPosition=new C,this._quat=new pt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ui,this._sphericalDelta=new Ui,this._scale=1,this._panOffset=new C,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new C,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gy.bind(this),this._onPointerDown=my.bind(this),this._onPointerUp=_y.bind(this),this._onContextMenu=wy.bind(this),this._onMouseWheel=yy.bind(this),this._onKeyDown=by.bind(this),this._onTouchStart=My.bind(this),this._onTouchMove=Sy.bind(this),this._onMouseDown=xy.bind(this),this._onMouseMove=vy.bind(this),this._interceptControlDown=Ey.bind(this),this._interceptControlUp=Ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=st.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=st.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=kt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yl.origin.copy(this.object.position),Yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yl.direction))<py?this.object.lookAt(this.target):(Qf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yl.intersectPlane(Qf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function my(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _y(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ep),this.state=st.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=st.DOLLY;break;case Oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}break;case Oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Zh)}function vy(i){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yy(i){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(i.preventDefault(),this.dispatchEvent(Zh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ep))}function by(i){this.enabled!==!1&&this._handleKeyDown(i)}function My(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bi.ROTATE:if(this.enableRotate===!1){this.state=st.NONE;break}this._handleTouchStartRotate(i),this.state=st.TOUCH_ROTATE;break;case Bi.PAN:if(this.enablePan===!1){this.state=st.NONE;break}this._handleTouchStartPan(i),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=st.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Zh)}function Sy(i){switch(this._trackPointer(i),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=st.NONE}}function wy(i){this.enabled!==!1&&i.preventDefault()}function Ey(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ty(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Kl=class extends es{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new sn;e.deleteAttribute("uv");let t=new Qe({side:Lt}),n=new Qe,s=new na(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ts(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ae(e,or(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ae(e,or(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ae(e,or(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ae(e,or(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ae(e,or(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ae(e,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(i){return new Kr({color:0,emissive:16777215,emissiveIntensity:i})}var Gt=Math.PI/180,tp=22,Ay=5,Vi=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,On=i=>Math.min(1,Math.max(0,i)),wa=new pt().setFromAxisAngle(new C(1,0,0),-90*Gt),Kh=new pt().setFromAxisAngle(new C(0,1,0),180*Gt);function np(i,e=0){let t=new pt;if(i&&i.up){let n=new C(...i.up).normalize(),s=new C(...i.face);s.addScaledVector(n,-s.dot(n)).normalize();let r=new C().crossVectors(n,s).normalize(),a=new Be().makeBasis(r,n,s);t.setFromRotationMatrix(a).invert()}else if(Array.isArray(i))t.setFromEuler(new nn(i[0]*Gt,i[1]*Gt,i[2]*Gt,"YXZ"));else switch(i){case"keep":t.copy(wa);break;case"flip":t.copy(wa).multiply(Kh);break;case"stand":case"stand-outside":t.identity();break;case"stand-inside":t.copy(Kh);break;default:t.copy(wa)}return e&&t.premultiply(new pt().setFromAxisAngle(new C(0,1,0),e*Gt)),t}var Jl=class{constructor(e,t={}){this.host=e,this.opts=t;let n=new zl({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!t.capture});this.renderer=n,n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxDpr||2)),n.outputColorSpace=Mt,n.toneMapping=oa,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Ko,e.appendChild(n.domElement),n.domElement.style.display="block",n.domElement.style.touchAction="none";let s=new es;this.scene=s,this.bg=new ze(t.background??"#060606"),s.background=this.bg;let r=new Qs(n);this.envRT=r.fromScene(new Kl,.04),s.environment=this.envRT.texture,s.environmentIntensity=.42,r.dispose();let a=new qs("#ffffff",2.1);a.position.set(-3.4,8.5,4.6),a.castShadow=!0,a.shadow.mapSize.set(t.shadowSize||2048,t.shadowSize||2048);let o=a.shadow.camera;o.left=-6,o.right=6,o.top=6,o.bottom=-6,o.near=.5,o.far=30,a.shadow.bias=-12e-5,a.shadow.normalBias=.012,a.shadow.radius=7,s.add(a),this.key=a;let l=new qs("#9db8ff",.5);l.position.set(5,3.5,-5),s.add(l);let c=document.createElement("canvas");c.width=c.height=512;let h=c.getContext("2d"),d=h.createRadialGradient(256,256,8,256,256,256);d.addColorStop(0,"rgba(36,37,42,1)"),d.addColorStop(.5,"rgba(20,21,24,0.85)"),d.addColorStop(1,"rgba(6,6,6,0)"),h.fillStyle=d,h.fillRect(0,0,512,512);let u=new fn(c);u.colorSpace=Mt,this.pool=new Ae(new qn(11,64),new Ii({map:u,transparent:!0,depthWrite:!1,toneMapped:!1})),this.pool.rotation.x=-Math.PI/2,this.pool.position.y=-.012,this.pool.renderOrder=-2,s.add(this.pool),this.shadowCatcher=new Ae(new qn(16,48),new Zr({opacity:.62})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.position.y=-.008,this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.renderOrder=-1,s.add(this.shadowCatcher),this.camera=new Zt(tp,1,.1,400),this.controls=new Zl(this.camera,n.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,screenSpacePanning:!0,zoomToCursor:!0,rotateSpeed:.8,maxPolarAngle:.57*Math.PI}),this.controls.addEventListener("change",()=>this.invalidate()),this.controls.addEventListener("start",()=>{this.userMoved=!0,this.stopSpin()}),this.rig=new it,this.rig.matrixAutoUpdate=!1,s.add(this.rig),this.state="flat",this.needs=!0,this.ray=new sa,this._raf=0,this._tick=this._tick.bind(this),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),this._tick()}invalidate(){this.needs=!0}resize(){let e=this.host.clientWidth||800,t=this.host.clientHeight||600;e===this.w&&t===this.h||(this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width=`${e}px`,this.renderer.domElement.style.height=`${t}px`,this.camera.aspect=e/t,this._viewOffset(),this.camera.updateProjectionMatrix(),this.model&&!this.tween&&!this.userMoved&&this.state!=="custom"&&this._frame(this.state),this.invalidate())}setSafe(e,t){this.safe={top:e,bottom:t},this._viewOffset(),this.camera.updateProjectionMatrix(),this.cache={}}_viewOffset(){let e=this.safe;!e||!this.w||this.camera.setViewOffset(this.w,this.h,0,(e.bottom-e.top)/2,this.w,this.h)}setModel(e,{die:t,state:n="closed",instant:s=!0}={}){this.clearSticker(),this.model&&(this.rig.remove(this.model.object),this.model.dispose?.()),this.tween=null,this.scrubWin=null,this.model=e,this.die=t,this.rig.add(e.object),this.scaleK=Ay/Math.max(t.w,t.h,1),t.meta.unitBoost&&(this.scaleK*=t.meta.unitBoost),this.userMoved=!1,this.cache={},this.go(n,{instant:s})}_info(e){if(this.cache[e])return this.cache[e];let{die:t,model:n}=this,s=n.vector(e),r;e==="flat"?r=wa.clone():e==="inside"?r=wa.clone().multiply(Kh):e==="open"?r=np(t.pose.open,t.pose.openYaw||0):r=np(t.pose.fold,t.pose.closedYaw||0),e==="closed"&&t.pose.tilt&&r.premultiply(new pt().setFromAxisAngle(new C(1,0,0),t.pose.tilt*Gt));let a=n.bounds(s),o=a.getCenter(new C),l=this.scaleK,c=[];for(let p of[a.min.x,a.max.x])for(let _ of[a.min.y,a.max.y])for(let m of[a.min.z,a.max.z])c.push(new C(p,_,m).sub(o).multiplyScalar(l).applyQuaternion(r));let h=1/0;for(let p of c)h=Math.min(h,p.y);let d=-h,u=t.view&&t.view[e]||(e==="flat"||e==="inside"?{az:0,el:89.9}:{az:-32,el:30}),f={vec:s,q:r,c:o,lift:d,corners:c,view:{...u},s:l};return f.cam=this._fit(f),this.cache[e]=f,f}_fit(e){let t=e.view.az*Gt,n=e.view.el*Gt,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)).normalize(),r=new C(0,e.lift,0),a=Math.abs(s.y)>.999?new C(0,0,-1):new C(0,1,0),o=new C().crossVectors(a,s).normalize(),l=new C().crossVectors(s,o).normalize(),c=1/0,h=-1/0,d=1/0,u=-1/0;for(let y of e.corners){let T=y.dot(l),E=y.dot(o);c=Math.min(c,T),h=Math.max(h,T),d=Math.min(d,E),u=Math.max(u,E)}r.add(l.clone().multiplyScalar((c+h)/2)).add(o.clone().multiplyScalar((d+u)/2));let f=this.camera.aspect||1.4,p=tp*Gt/2,_=Math.atan(Math.tan(p)*f),m=this.safe||{top:0,bottom:0},g=Math.max(.3,1-(m.top+m.bottom)/(this.h||600)),v=e.view.pad||(this.opts.pad??1.16),b=0;for(let y of e.corners){let T=y.clone().sub(r.clone().setY(r.y-e.lift)),E=T.dot(s);b=Math.max(b,Math.abs(T.dot(o))*v/Math.tan(_)+E),b=Math.max(b,Math.abs(T.dot(l))*v/g/Math.tan(p)+E)}return b*=e.view.zoom||1,{az:e.view.az,el:e.view.el,d:b,target:r}}_placeCam(e){let t=e.az*Gt,n=e.el*Gt,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));this.camera.position.copy(e.target).addScaledVector(s,e.d),this.camera.near=Math.max(.02,e.d/60),this.camera.far=e.d*8+40,this.camera.updateProjectionMatrix(),this.controls.target.copy(e.target),this.camera.lookAt(e.target)}_setRig(e,t,n){let s=this.scaleK,r=new Be;r.compose(new C(0,n,0),e,new C(s,s,s)),r.multiply(new Be().makeTranslation(-t.x,-t.y,-t.z)),this.rig.matrix.copy(r),this.rig.matrixWorldNeedsUpdate=!0}_frame(e){this.cache={};let t=this._info(e);this._placeCam(t.cam),this.invalidate()}_currentCam(){let e=new Ui().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{az:(e.theta/Gt+360)%360>180?(e.theta/Gt+360)%360-360:(e.theta/Gt+360)%360,el:90-e.phi/Gt,d:e.radius,target:this.controls.target.clone()}}async loadSticker(e){let t=await new jr().loadAsync(e.src);t.colorSpace=Mt,t.anisotropy=8,this.setSticker({...e,texture:t})}setSticker(e){this.clearSticker();let t=this.model?.byId?.[e.panel];if(!t)return;let n=e.d/2,s=e.t??.14,r=new Ae(new qn(n,96),new en({map:e.texture,roughness:.42,metalness:0,clearcoat:.45,clearcoatRoughness:.32,transparent:!0}));r.position.z=s;let a=new Ae(new hi(n,n,s,96,1,!0),new Qe({color:e.edge||"#9a7a76",roughness:.55,transparent:!0}));a.rotation.x=Math.PI/2,a.position.z=s/2;for(let c of[r,a])c.castShadow=!0,c.receiveShadow=!0;let o=new it;o.add(r,a);let l=new it;l.position.set(e.x,-e.y,e.z0??.08),l.add(o),t.group.add(l),this.sticker={base:l,lift:o,mats:[r.material,a.material],t:0,H:e.height||80,anim:null},this.sticker.t=this.state==="closed"&&!this.tween?1:0,this._stickerApply()}clearSticker(){let e=this.sticker;e&&(e.base.parent?.remove(e.base),e.base.traverse(t=>{t.geometry?.dispose(),t.material&&(t.material.map?.dispose(),t.material.dispose())}),this.sticker=null)}_stickerApply(){let e=this.sticker;if(!e)return;let t=On(e.t),n=1-(1-t)**3;e.lift.visible=t>.002,e.lift.position.z=e.H*(1-n);let s=t>.86?Math.sin(Math.PI*On((t-.86)/.14)):0;e.lift.scale.set(1+s*.035,1+s*.035,1-s*.3);let r=On(t*2.4);for(let a of e.mats)a.opacity=r,a.transparent=r<.999,a.depthWrite=r>.5;this.invalidate()}_stickerTo(e,t,n){let s=this.sticker;if(!s||Math.abs(s.t-e)<.001&&!s.anim){n?.();return}s.anim={from:s.t,to:e,t0:performance.now(),dur:t*1e3*Math.max(.25,Math.abs(e-s.t)),done:n},this.invalidate()}_stickerStep(e){let t=this.sticker,n=t?.anim;if(!n)return;let s=On((e-n.t0)/n.dur);t.t=n.from+(n.to-n.from)*s,this._stickerApply(),s>=1&&(t.anim=null,n.done?.())}go(e,t={}){let n=this.sticker;if(n&&t.instant)return n.anim=null,n.t=e==="closed"?1:0,this._stickerApply(),this._go(e,t);if(n&&this.current&&e!=="closed"&&(n.t>.001||n.anim)){if(this._pendingGo=[e,t],n.anim&&n.anim.to===0){n.anim.done=()=>this._flushGo();return}this._stickerTo(0,.6,()=>this._flushGo());return}if(n&&e==="closed"&&this.state==="closed"&&!this.tween){this._go(e,t),this._stickerTo(1,.85);return}return this._go(e,t)}_flushGo(){let e=this._pendingGo;this._pendingGo=null,e&&this._go(e[0],e[1])}_go(e,{instant:t=!1,duration:n}={}){let s=this._info(e);if(t||!this.current){this.tween=null,this.state=e,this.model.apply(s.vec),this.current={vec:s.vec,q:s.q.clone(),c:s.c.clone(),lift:s.lift},this._setRig(s.q,s.c,s.lift),this._placeCam(s.cam),this.userMoved=!1,this.invalidate(),this.onState?.(e);return}let r=this.current,a={flat:0,inside:0,closed:2,open:1},o=v=>v==="closed"?2:v==="open"?1:0,l=o(e)>=o(this.state)?1:-1;a[e]===void 0&&(l=1);let c=this.model.windows(r.vec,s.vec,l),d=r.q.angleTo(s.q)>60*Gt,u=c.steps>0&&r.vec.some((v,b)=>Math.abs(v-s.vec[b])>.01),f=u?Math.min(4.2,.95+c.steps*.5):1.1,p=n??f+(d&&u?.45:0),_=[0,1],m=[0,1];d&&u&&(l>0?(_=[0,.26],m=[.2,1]):(_=[.74,1],m=[0,.8])),this.tween={t0:performance.now(),dur:p*1e3,from:r,to:s,win:c,poseWin:_,foldWin:m,cam0:this._currentCam(),cam1:s.cam,state:e,flip:d};let g=this.tween.cam1.az-this.tween.cam0.az;for(;g>180;)g-=360;for(;g<-180;)g+=360;this.tween.azDelta=g,this.state=e,this.userMoved=!1,this.controls.enabled=!1,this.onStart?.(e),this.invalidate()}scrub(e){if(!this.model)return;let t=this._info("flat"),n=this._info("closed");this.scrubWin||(this.scrubWin=this.model.windows(t.vec,n.vec,1)),this.tween=null,this.controls.enabled=!0;let s=t.q.angleTo(n.q)>60*Gt,r=s?On(e/.26):e,a=s?On((e-.2)/.8):e,o=t.vec.map((c,h)=>{let[d,u]=this.scrubWin.list[h];return c+(n.vec[h]-c)*Vi(On((a-d)/(u-d)))});this._applyMix(t,n,o,Vi(r),Vi(a),s);let l=this._mixCam(t.cam,n.cam,Vi(e));this._placeCam(l),this.state=e<=.001?"flat":e>=.999?"closed":"custom",this.sticker&&this._stickerTo(e>=.999?1:0,e>=.999?.85:.4),this.invalidate()}_mixCam(e,t,n,s){let r=s;if(r===void 0){for(r=t.az-e.az;r>180;)r-=360;for(;r<-180;)r+=360}return{az:e.az+r*n,el:e.el+(t.el-e.el)*n,d:e.d+(t.d-e.d)*n,target:e.target.clone().lerp(t.target,n)}}_applyMix(e,t,n,s,r,a){this.model.apply(n);let o=e.q.clone().slerp(t.q,s),l=e.c.clone().lerp(t.c,r),c=e.lift+(t.lift-e.lift)*r;a&&(c+=Math.sin(Math.PI*s)*this.flipR(e,t)),this.current={vec:n,q:o,c:l,lift:c},this._setRig(o,l,c)}flipR(e,t){let n=0;for(let s of e.corners)n=Math.max(n,Math.hypot(s.x,s.z));for(let s of t.corners)n=Math.max(n,Math.hypot(s.x,s.z));return n*.72}_step(e){let t=this.tween;if(!t)return;let n=On((e-t.t0)/t.dur),s=On((n-t.foldWin[0])/(t.foldWin[1]-t.foldWin[0])),r=On((n-t.poseWin[0])/(t.poseWin[1]-t.poseWin[0])),a=t.from.vec.map((l,c)=>{let[h,d]=t.win.list[c];return l+(t.to.vec[c]-l)*Vi(On((s-h)/(d-h)))}),o={q:t.from.q,c:t.from.c,lift:t.from.lift,corners:this._info(t.state).corners};this._applyMix(o,t.to,a,Vi(r),Vi(s),t.flip),this._placeCam(this._mixCam(t.cam0,t.cam1,Vi(n),t.azDelta)),this.invalidate(),n>=1&&(this.tween=null,this.scrubWin=null,this.current={vec:t.to.vec,q:t.to.q.clone(),c:t.to.c.clone(),lift:t.to.lift},this.controls.enabled=!0,this.onState?.(t.state),t.state==="closed"&&this.sticker&&this._stickerTo(1,.85))}pick(e,t){if(!this.model?.pickables)return null;let n=this.renderer.domElement.getBoundingClientRect(),s=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.ray.intersectObjects(this.model.pickables,!1)[0];if(!r)return null;let a=r.object.userData.side==="back"?1:r.face?.materialIndex??0;return{panel:r.object.userData.panel,side:a===1?"back":"front",point:r.point}}zoom(e){let t=this._currentCam();t.d*=e,this._placeCam(t),this.invalidate()}resetView(){this.userMoved=!1,this.go(this.state==="custom"?"closed":this.state,{duration:.8})}spin(e){this.spinOn=e,this.invalidate()}stopSpin(){this.spinOn&&(this.spinOn=!1,this.onSpinStop?.())}capture(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement}_tick(){if(this._raf=requestAnimationFrame(this._tick),document.hidden)return;let e=performance.now();if(this.sticker?.anim&&this._stickerStep(e),this.tween&&this._step(e),this.spinOn&&!this.tween){let t=this._currentCam();t.az+=.12,this._placeCam(t),this.needs=!0}this.controls.enabled&&this.controls.update(),this.needs&&(this.needs=!1,this.renderer.render(this.scene,this.camera),this.frames=(this.frames||0)+1)}dispose(){cancelAnimationFrame(this._raf),this.ro.disconnect(),this.controls.dispose(),this.model&&this.model.dispose?.(),this.renderer.dispose(),this.envRT.dispose(),this.renderer.domElement.remove()}};var jh={};Mi(jh,{accordion:()=>Uy,crossFold:()=>Oy,doubleGate:()=>Ny,doubleParallel:()=>ky,gateFold:()=>Dy,halfFold:()=>Iy,mapFold:()=>By,roll4:()=>Fy,rollFold:()=>Py,tableTalker:()=>Hy,tentCard:()=>zy,tentPose:()=>Jh,zFold:()=>Ly});var ip=.02;function sp(i,e){let t=Sa(mi(e,i)),n=[t[1],-t[0]];return{d:t,n}}var Bn=(i,e,t,n)=>us(us(i,rr(e.d,t)),rr(e.n,n)),Re=class{constructor(e={}){this.bleed=e.bleed??3,this.safe=e.safe??3,this.panels=[],this.byId={},this.lines=[],this.seams=[],this.holes=[],this.extras=[],this.pose={fold:"flip",closedYaw:0,open:"stand-inside",...e.pose||{}},this.view={closed:{az:-32,el:30},open:{az:-24,el:16},...e.view||{}},this.relax=e.relax??0,this.sides=e.sides??2,this.meta=e.meta||{}}_push(e){if(this.byId[e.id])throw new Error(`Duplicate panel id ${e.id}`);return e.poly=Jf(e.poly),e.children=[],e.holes=e.holes||[],this.panels.push(e),this.byId[e.id]=e,e.parent&&this.byId[e.parent].children.push(e.id),e}rectEdges(e,t,n,s){return{top:{a:[e,t],b:[e+n,t]},right:{a:[e+n,t],b:[e+n,t+s]},bottom:{a:[e+n,t+s],b:[e,t+s]},left:{a:[e,t+s],b:[e,t]}}}root(e,t,n,s,r,a={}){let o=a.r?Gi([[t,n],[t+s,n],[t+s,n+r],[t,n+r]],a.r,a.segs??8):[[t,n],[t+s,n],[t+s,n+r],[t,n+r]];return this._push({id:e,name:a.name||e,nameIn:a.nameIn,role:a.role||"main",poly:o,edges:this.rectEdges(t,n,s,r),holes:a.holes,art:a.art,cover:a.cover})}rootPoly(e,t,n={}){return this._push({id:e,name:n.name||e,nameIn:n.nameIn,role:n.role||"main",poly:t,edges:n.edges||{},holes:n.holes,art:n.art,cover:n.cover})}add(e,t,n,s={}){let r=this.byId[e];if(!r)throw new Error(`Unknown parent ${e} for ${n}`);let a=typeof t=="string"?r.edges[t]:t;if(!a)throw new Error(`Unknown edge ${t} on ${e}`);let o=sp(a.a,a.b),l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]),c=s.inL??0,h=l-(s.inR??0),d,u=[c,h],f={};if(s.pts){d=s.pts;let m=d.filter(g=>Math.abs(g[1])<1e-6).map(g=>g[0]);if(s.hu?u=s.hu:m.length>=2&&(u=[Math.min(...m),Math.max(...m)]),s.edgesLocal)for(let[g,v]of Object.entries(s.edgesLocal))f[g]={a:Bn(a.a,o,v[0][0],v[0][1]),b:Bn(a.a,o,v[1][0],v[1][1])}}else{let m=s.d,g=s.tL??0,v=s.tR??0,b=s.w!==void 0?(s.w-(h-c))/2:0,y=[[c,0],[c+g-b,m],[h-v+b,m],[h,0]],T=Array.isArray(s.r)?s.r:[s.r||0,s.r||0];d=T[0]||T[1]?Gi(y,[0,T[0],T[1],0],s.segs??8):y,f.far={a:Bn(a.a,o,c+g-b,m),b:Bn(a.a,o,h-v+b,m)};let E={a:Bn(a.a,o,c,0),b:Bn(a.a,o,c+g-b,m)},x={a:Bn(a.a,o,h-v+b,m),b:Bn(a.a,o,h,0)};for(let S of[f.far,E,x]){let{n:L}=sp(S.a,S.b),R=Math.abs(L[0])>Math.abs(L[1])?L[0]>0?"right":"left":L[1]>0?"bottom":"top";f[R]=S}}let p=d.map(m=>Bn(a.a,o,m[0],m[1])),_={a:Bn(a.a,o,u[0],0),b:Bn(a.a,o,u[1],0)};return this._push({id:n,name:s.name||n,nameIn:s.nameIn,role:s.role||"main",parent:e,poly:p,hinge:_,angle:s.angle??180,open:s.open,seq:s.seq??1,gap:s.gap??0,lift:s.lift??0,edges:f,holes:s.holes,art:s.art,cover:s.cover,bead:s.bead})}mount(e,t,n,s={}){return this._push({id:t,name:s.name||t,role:s.role||"main",parent:e,poly:n,edges:s.edges||{},mount:s.to,seq:s.seq??9,holes:s.holes,art:s.art,cover:s.cover,standalone:s.standalone,detached:s.detached??!0})}mountRect(e,t,n,s,r,a,o={}){let l=this.mount(e,t,[[n,s],[n+r,s],[n+r,s+a],[n,s+a]],o);return l.edges=this.rectEdges(n,s,r,a),l}leaf(e,t,n,s,r,a,o={}){let l=[[n,s],[n+r,s],[n+r,s+a],[n,s+a]];return this._push({id:t,name:o.name||t,nameIn:o.nameIn,role:"leaf",parent:e,poly:l,hinge:o.hinge,angle:o.angle??0,open:o.open,seq:o.seq??1,gap:0,edges:{},holes:o.holes,zOff:o.zOff||0,pivotZ:o.pivotZ,uvRect:o.coverLeaf?void 0:{x:n,y:s,w:r,h:a},coverLeaf:o.coverLeaf,pageFront:o.pageFront,pageBack:o.pageBack,bead:o.bead,valley:o.valley})}seam(e,t){return this.seams.push({a:e,b:t}),this}perf(e,t,n="perf"){return this.lines.push({kind:n,a:e,b:t}),this}extra(e){return this.extras.push(e),this}finish(){let e=Xh(this.panels.map(s=>s.poly)),t=[e.x0,e.y0],n=s=>[s[0]-t[0],s[1]-t[1]];for(let s of this.panels){s.mount&&(s.mount.pos&&(s.mount.pos=[s.mount.pos[0]-t[0],s.mount.pos[1]+t[1],s.mount.pos[2]||0]),s.mount.center&&(s.mount.center=[s.mount.center[0]-t[0],s.mount.center[1]+t[1],s.mount.center[2]||0])),s.uvRect&&(s.uvRect={...s.uvRect,x:s.uvRect.x-t[0],y:s.uvRect.y-t[1]}),s.poly=s.poly.map(n),s.holes=(s.holes||[]).map(r=>r.map(n)),s.hinge&&(s.hinge={a:n(s.hinge.a),b:n(s.hinge.b)});for(let r of Object.values(s.edges||{}))r.a=n(r.a),r.b=n(r.b);s.centroid=Kf(s.poly),s.area=Math.abs(Zf(s.poly)),s.bounds=Xh([s.poly])}return this.lines=this.lines.map(s=>({...s,a:n(s.a),b:n(s.b)})),this.seams=this.seams.map(s=>({a:n(s.a),b:n(s.b)})),this.extras=this.extras.map(s=>{let r={...s};return s.pts&&(r.pts=s.pts.map(n)),s.at&&(r.at=n(s.at)),s.a&&(r.a=n(s.a)),s.b&&(r.b=n(s.b)),s.rect&&(r.rect={...s.rect,x:s.rect.x-t[0],y:s.rect.y-t[1]}),r}),this.w=e.w,this.h=e.h,this.seqMax=Math.max(0,...this.panels.map(s=>s.seq||0)),this._lines(),this}_lines(){let e=this.panels.filter(l=>l.hinge&&l.role!=="leaf"&&!l.perfed).map(l=>({id:l.id,a:l.hinge.a,b:l.hinge.b,angle:l.angle})),t=[],n=new Set,s=(l,c)=>{let h=f=>`${Math.round(f[0]*50)},${Math.round(f[1]*50)}`,d=h(l),u=h(c);return d<u?`${d}|${u}`:`${u}|${d}`},r=null,a=(l,c)=>{if(Math.hypot(l[0]-c[0],l[1]-c[1])<.05)return;(r.outline=r.outline||[]).push([l,c]);let h=s(l,c);n.has(h)||(n.add(h),t.push([l,c]))},o=l=>{let c=[...this.seams];for(let h of e)(h.id===l.id||l.children.includes(h.id))&&c.push(h);return c};for(let l of this.panels){if(l.role==="leaf")continue;r=l;let c=o(l),h=l.poly;for(let d=0;d<h.length;d++){let u=h[d],f=h[(d+1)%h.length],p=[[0,1]],_=mi(f,u),m=Math.hypot(_[0],_[1]);if(m<1e-6)continue;let g=[_[0]/m,_[1]/m];for(let v of c){let b=mi(v.a,u),y=mi(v.b,u),T=L=>Math.abs(L[0]*g[1]-L[1]*g[0]);if(T(b)>ip||T(y)>ip)continue;let E=$l(b,g)/m,x=$l(y,g)/m;E>x&&([E,x]=[x,E]);let S=[];for(let[L,R]of p)x<=L||E>=R?S.push([L,R]):(E>L&&S.push([L,E]),x<R&&S.push([x,R]));p=S}for(let[v,b]of p)a([u[0]+_[0]*v,u[1]+_[1]*v],[u[0]+_[0]*b,u[1]+_[1]*b])}for(let d of l.holes||[])for(let u=0;u<d.length;u++)a(d[u],d[(u+1)%d.length])}this.cuts=t,this.creases=e.map(l=>({a:l.a,b:l.b,mountain:l.angle<0,id:l.id}));for(let l of this.seams)this.creases.push({a:l.a,b:l.b,mountain:!1,id:"seam"});for(let l of this.lines)l.kind==="score"&&this.creases.push({a:l.a,b:l.b,mountain:!1,id:"score"});this.perfs=this.lines.filter(l=>l.kind==="perf"),this.kiss=this.lines.filter(l=>l.kind==="kiss")}mainPanels(){return this.panels.filter(e=>e.role==="main").sort((e,t)=>t.area-e.area)}};var En=179.1,Tn=179.92,Ry={closed:{az:-26,el:36},open:{az:-10,el:13,pad:1.22}},Jn=(i={})=>({bleed:3,safe:4,pose:{fold:"flip",open:"stand-inside",...i.pose||{}},view:{...Ry,...i.view||{}},meta:i.meta});function Cy(i,e,t=2){let n=(i+t)/e;return{base:n,inner:n-t}}function Jh(i){let e=i*Math.PI/180,t=[0,-Math.cos(e),-Math.sin(e)],n=[0,1+t[1],t[2]],s=Math.hypot(n[1],n[2]),r=[0,-n[1]/s,-n[2]/s],a=[0,-Math.sin(e),Math.cos(e)];return{up:r,face:a}}function Iy({w:i,h:e,axis:t="v"}){let n=new Re(Jn({pose:t==="h"?{closedYaw:180,open:Jh(112)}:{open:"stand-inside",openYaw:-29},view:t==="h"?{open:{az:-26,el:14}}:{open:{az:0,el:14}}}));return t==="v"?(n.root("back",0,0,i/2,e,{name:"Back cover",nameIn:"Inside right"}),n.add("back","right","front",{d:i/2,angle:En,seq:1,open:58,name:"Front cover",nameIn:"Inside left",cover:!0})):(n.root("back",0,0,i,e/2,{name:"Back cover",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:En,seq:1,open:112,name:"Front cover",nameIn:"Inside bottom",cover:!0})),n.finish()}function Py({w:i,h:e,panels:t}){let n=Cy(i,3,3),[s,r,a]=t||[n.inner,n.base,n.base],o=new Re(Jn({view:{closed:{az:-24,el:36}}}));return o.root("back",s,0,r,e,{name:"Back cover",nameIn:"Inside centre"}),o.add("back","left","flap",{d:s,angle:Tn,seq:1,open:58,name:"Inner flap",nameIn:"Inside right"}),o.add("back","right","front",{d:a,angle:En,seq:2,gap:1,open:62,name:"Front cover",nameIn:"Inside left",cover:!0}),o.finish()}function Ly({w:i,h:e}){let t=i/3,n=new Re(Jn({pose:{fold:"keep",open:"stand-outside",openYaw:-12},view:{closed:{az:-24,el:36},open:{az:-18,el:14}}}));return n.root("back",0,0,t,e,{name:"Back",nameIn:"Inside right"}),n.add("back","right","mid",{d:t,angle:-En,seq:1,open:-66,name:"Middle",nameIn:"Inside centre"}),n.add("mid","far","front",{d:t,angle:En,seq:2,open:66,name:"Front cover",nameIn:"Inside left",cover:!0}),n.finish()}function Dy({w:i,h:e,gap:t=4}){let n=(i-t)/4,s=(i+t)/2,r=new Re(Jn({view:{closed:{az:-22,el:38}}}));r.root("back",n,0,s,e,{name:"Back cover",nameIn:"Inside centre"});let a=t<2?Tn:En+.8;return r.add("back","left","door-l",{d:n,angle:a,seq:1,open:48,name:"Door right",nameIn:"Inside right",cover:!0}),r.add("back","right","door-r",{d:n,angle:a,seq:2,open:48,name:"Door left",nameIn:"Inside left",cover:!0}),r.finish()}function Ny({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Re(Jn({view:{closed:{az:-24,el:36}}}));return s.root("cr",t+n,0,n,e,{name:"Back cover",nameIn:"Inside left-centre"}),s.add("cr","right","r",{d:t,angle:Tn,seq:1,open:60,name:"Inner flap",nameIn:"Inside left"}),s.add("cr","left","cl",{d:n,angle:En,seq:2,gap:2,open:22,name:"Front cover",nameIn:"Inside right-centre",cover:!0}),s.add("cl","far","l",{d:t,angle:Tn,seq:1,open:60,name:"Inner flap",nameIn:"Inside right"}),s.finish()}function ky({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Re(Jn({view:{closed:{az:-24,el:36}}}));return s.root("c",t+n,0,n,e,{name:"Panel 3",nameIn:"Inside 2"}),s.add("c","left","b",{d:n,angle:Tn,seq:1,open:74,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:t,angle:-Tn,seq:2,open:-70,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:t,angle:En,seq:2,gap:2,open:70,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Fy({w:i,h:e}){let t=(i-4-3)/4+0,n=[t,t+1.5,t+2.75,t+2.75],s=new Re(Jn({view:{closed:{az:-24,el:36}}}));return s.root("c",n[0]+n[1],0,n[2],e,{name:"Back cover",nameIn:"Inside 2"}),s.add("c","left","b",{d:n[1],angle:Tn,seq:2,gap:1,open:60,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:n[0],angle:Tn,seq:1,open:62,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:n[3],angle:En,seq:3,gap:2,open:58,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Uy({w:i,h:e,n:t}){let n=i/t,s=t%2===0,r=new Re(Jn({pose:{fold:s?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:36},open:{az:-20,el:14}}}));r.root("p0",0,0,n,e,{name:"Back",nameIn:`Inside ${t}`});let a=s?1:-1;for(let o=1;o<t;o++)r.add(o===1?"p0":`p${o-1}`,o===1?"right":"far",`p${o}`,{d:n,angle:a*(o===t-1?En:Tn),seq:t-o,open:a*64,name:o===t-1?"Front cover":`Panel ${o+1}`,nameIn:`Inside ${t-o}`,cover:o===t-1}),a=-a;return r.finish()}function Oy({w:i,h:e}){let t=i/2,n=e/2,s=new Re(Jn({pose:{open:"flip"},view:{closed:{az:-24,el:38},open:{az:-22,el:34}}}));return s.root("bl",0,n,t,n,{name:"Back cover",nameIn:"Inside 2"}),s.add("bl","top","tl",{d:n,angle:Tn,seq:1,name:"Inside top",nameIn:"Inside 3"}),s.add("bl","right","br",{d:t,angle:En,seq:2,gap:2,open:118,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.add("tl","right","tr",{d:t,angle:-Tn,seq:2,open:-118,name:"Inside top right",nameIn:"Inside 4"}),s.seam([t,n],[i,n]),s.finish()}function By({w:i,h:e,cols:t=4}){let n=i/t,s=e/2,r=t%2===0,a=new Re(Jn({pose:{fold:r?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:38},open:{az:-20,el:14}}}));a.root("r1c0",0,s,n,s,{name:"Back cover",nameIn:"Panel"}),a.add("r1c0","top","r0c0",{d:s,angle:En,seq:2,gap:t-1,name:"Panel",nameIn:"Panel"});for(let o of[1,0]){let l=r?1:-1;for(let c=1;c<t;c++){let h=c===1?"right":"far",d=o===1?l:-l;a.add(`r${o}c${c-1}`,h,`r${o}c${c}`,{d:n,angle:d*Tn,seq:1,open:d*62,name:o===1&&c===t-1?"Front cover":"Panel",nameIn:"Panel",cover:o===1&&c===t-1}),l=-l}}return a.seam([n,s],[i,s]),a.finish()}function zy({w:i,h:e}){let n=new Re({bleed:3,safe:3,pose:{fold:Jh(128)},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("back",0,0,i,e/2,{name:"Back (reads upside down)",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:128,seq:1,name:"Front",nameIn:"Inside bottom",cover:!0}),n.finish()}function Hy({w:i,h:e,side:t}){let n=t??e*.45,s=n*.72,r=14,a=180-Math.acos(s/2/n)*180/Math.PI,o=180-2*(180-a),l=new Re({bleed:3,safe:3,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return l.root("base",0,n,i,s,{name:"Base",nameIn:"Base"}),l.add("base","top","back",{d:n,angle:a,seq:1,name:"Back",nameIn:"Inside"}),l.add("base","bottom","front",{d:n,angle:a,seq:1,name:"Front",nameIn:"Inside",cover:!0}),l.add("front","far","glue",{d:r,inL:1,inR:1,tL:2,tR:2,angle:180-o,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),l.finish()}var Qh={};Mi(Qh,{badge:()=>Xy,doorHanger:()=>Wy,hangTag:()=>Vy,sheet:()=>Gy,stickerSheet:()=>$y,ticket:()=>qy});var lr={fold:"keep",open:"keep"},cr={closed:{az:-30,el:34}},Ea={noOpen:!0};function Gy({w:i,h:e,r:t=0,holes:n=[],shape:s,bleed:r=3,safe:a=3,stack:o=6,name:l="Front",nameIn:c="Back"}){let h=new Re({bleed:r,safe:a,pose:lr,view:cr,meta:Ea}),d=gi(0,0,i,e);if(s==="circle")d=Kn(i/2,e/2,i/2,96);else if(s==="ellipse")d=Xl(i/2,e/2,i/2,e/2,96);else if(s==="arch"){let u=[];for(let f=0;f<=28;f++){let p=Math.PI+f/28*Math.PI;u.push([i/2+Math.cos(p)*(i/2),i/2+Math.sin(p)*(i/2)])}d=[...u,[i,e],[0,e]]}else t&&(d=Gi(d,t,8));return h.rootPoly("sheet",d,{name:l,nameIn:c,holes:n,cover:!0,edges:h.rectEdges(0,0,i,e)}),o&&h.extra({type:"stack",count:o,spread:Math.min(i,e)*.012}),h.finish()}function Vy({w:i,h:e,chamfer:t=9}){let n=t,s=[[n,0],[i-n,0],[i,n],[i,e],[0,e],[0,n]],r=new Re({bleed:3,safe:3,pose:lr,view:cr,meta:Ea});return r.rootPoly("sheet",s,{name:"Front",nameIn:"Back",holes:[Kn(i/2,9,2.5,28)],cover:!0}),r.extra({type:"string",at:[i/2,9],len:e*.9}),r.extra({type:"stack",count:3,spread:1.4}),r.finish()}function Wy({w:i,h:e}){let n=i/2,s=30,r=-.25,a=42,o=n+19*1.28,l=[[0,0],[o-1,0],[n+Math.cos(r)*19,s+Math.sin(r)*19]];for(let h=1;h<=a;h++){let d=r-h/a*(Math.PI*2-.5);l.push([n+Math.cos(d)*19,s+Math.sin(d)*19])}l.push([o+3,0],[i,0],[i,e],[0,e]);let c=new Re({bleed:3,safe:4,pose:lr,view:cr,meta:Ea});return c.rootPoly("sheet",l,{name:"Front",nameIn:"Back",cover:!0}),c.extra({type:"stack",count:4,spread:1.6}),c.finish()}function qy({w:i,h:e,stub:t=40}){let n=new Re({bleed:3,safe:3,pose:lr,view:{...cr,open:{az:-30,el:34}}});return n.root("sheet",0,0,i-t,e,{name:"Ticket",nameIn:"Back",cover:!0}),n.add("sheet","right","stub",{d:t,angle:0,open:14,seq:1,name:"Stub",nameIn:"Stub back",bead:!1}),n.perf([i-t,0],[i-t,e]),n.byId.stub.perfed=!0,n.extra({type:"stack",count:4,spread:1.4}),n.finish()}function $y({w:i,h:e,cols:t,rows:n,d:s}){let r=new Re({bleed:2,safe:2,pose:lr,view:cr,sides:1,meta:Ea});r.root("sheet",0,0,i,e,{name:"Sticker sheet",nameIn:"Liner",cover:!0});let a=(i-t*s)/(t+1),o=(e-n*s)/(n+1);for(let l=0;l<n;l++)for(let c=0;c<t;c++){let h=Kn(a+s/2+c*(s+a),o+s/2+l*(s+o),s/2,40);h.forEach((d,u)=>r.perf(d,h[(u+1)%h.length],"kiss"))}return r.extra({type:"stack",count:3,spread:2}),r.finish()}function Xy({w:i,h:e}){let t=i/2-8,n=[[t,8],[t+16,8],[t+16,12],[t,12]],s=new Re({bleed:3,safe:4,pose:lr,view:cr,meta:Ea});return s.rootPoly("sheet",Gi(gi(0,0,i,e),4,6),{name:"Front",nameIn:"Back",cover:!0,holes:[n]}),s.extra({type:"stack",count:3,spread:1.5}),s.finish()}var td={};Mi(td,{envelope:()=>Yy,gussetEnvelope:()=>Zy});var _i=179.95,ed=179.3;function Yy({w:i,h:e,style:t="wallet",window:n,sealR:s=7}){let r=new Re({bleed:3,safe:4,pose:{fold:n?"keep":"flip",open:"flip"},view:{closed:{az:-24,el:40},open:{az:-18,el:46}},meta:{seam:!0}}),a=[];if(n&&a.push(gi(n.x,n.y,n.w,n.h)),r.root("front",0,0,i,e,{name:"Address side",nameIn:"Inside",holes:a,cover:!0}),t==="pointed"){let o=i*.34,l=(c,h)=>({pts:[[0,0],[c*.47,h*.97],[c*.5,h],[c*.53,h*.97],[c,0]]});r.add("front","left","side-l",{...l(e,o),angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{...l(e,o),angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{...l(i,e*.56),angle:_i,seq:2,gap:1,lift:.5,role:"flap",name:"Bottom flap",nameIn:"Inside"}),r.add("front","top","seal",{...l(i,e*.62),angle:ed,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else if(t==="pocket"){let o=Math.min(i*.13,30);r.add("front","left","side-l",{d:o,tL:8,tR:8,r:3,angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:8,tR:8,r:3,angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.78,inL:0,inR:0,tL:7,tR:7,r:3,angle:_i,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:Math.min(e*.27,62),tL:12,tR:12,r:s,angle:ed,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else{let o=Math.min(e*.42,36);r.add("front","left","side-l",{d:o,tL:6,tR:10,r:3,angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:10,tR:6,r:3,angle:_i,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.66,tL:e*.3,tR:e*.3,r:5,angle:_i,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:e*.5,tL:e*.2,tR:e*.2,r:s,angle:ed,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}return n&&r.extra({type:"film",panel:"front",rect:n}),r.extra({type:"insert",panel:"front",size:[i-8,e-8],rise:e*.42,z:1}),r.finish()}function Zy({w:i,h:e,g:t=25}){let s=new Re({bleed:3,safe:5,pose:{fold:"stand",open:"stand"},view:{closed:{az:-32,el:18},open:{az:-30,el:26}}}),r=.3;return s.root("front",16+t-r,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),s.add("front","right","gus-b",{d:t,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),s.add("front","left","gus-a",{d:t-r,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-a","far","glue",{d:16,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),s.add("gus-a","bottom","b-a",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("gus-b","bottom","b-b",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("front","bottom","b-f",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","bottom","b-k",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","top","seal-top",{d:t,inL:.2,inR:.2,angle:90,seq:6,open:0,gap:2,role:"flap",name:"Top",nameIn:"Inside"}),s.add("seal-top","far","seal",{d:42,tL:6,tR:6,r:6,angle:90,seq:6,open:0,role:"flap",name:"Seal flap",nameIn:"Gum"}),s.add("gus-a","top","t-a",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.add("gus-b","top","t-b",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.finish()}var nd={};Mi(nd,{folder:()=>Ky});function Ky({w:i,h:e,spine:t=0,pocket:n=100,two:s=!1,slit:r=!0,insert:a=!1}){let o=new Re({bleed:3,safe:5,pose:{fold:"flip",open:"flip",openYaw:0},view:{closed:{az:-24,el:36},open:{az:-14,el:52,pad:1.14}},meta:{seam:!0}});o.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside right"});let l=t>0?"spine":"back";t>0&&o.add("back","right","spine",{d:t,angle:90,seq:3,open:8,name:"Spine",nameIn:"Spine",role:"flap"}),o.add(l,t>0?"far":"right","front",{d:i,angle:t>0?90:179.2,seq:3,gap:t>0?0:2,open:t>0?8:16,name:"Front cover",nameIn:"Inside left",cover:!0});let c=(d,u,f)=>f?{pts:[[0,0],[0,u-16],[18,u],[d,u],[d,0]]}:{pts:[[0,0],[0,u],[d-18,u],[d,u-16],[d,0]]},h=o.add("back","bottom","pocket",{...c(i,n,!0),angle:179.92,seq:1,gap:0,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]});return o.add("pocket",{a:[0,e+n-16],b:[0,e]},"pocket-tab",{d:12,tL:3,tR:3,angle:-179.9,seq:0,role:"glue",name:"Glue",nameIn:"Glue"}),s&&o.add("front","bottom","pocket2",{...c(i,n,!1),angle:179.92,seq:1,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]}),r&&(o.perf([i-72,e+n*.42],[i-62,e+n*.3],"perf"),o.perf([i-18,e+n*.3],[i-8,e+n*.42],"perf")),a&&o.extra({type:"insert",panel:"back",size:[i-16,e-n*.5],rise:0,z:.5,at:"pocket",openOnly:!0}),o.finish()}var id={};Mi(id,{autoLockBox:()=>Qy,cakeBox:()=>lb,counterDisplay:()=>cb,drawerBox:()=>sb,gableBox:()=>ob,lidBox:()=>ib,mailerBox:()=>nb,paperBag:()=>hb,shippingBox:()=>tb,sleeve:()=>ab,snapBox:()=>eb,trayBox:()=>rb,tuckBox:()=>Jy});var dr={fold:"stand",open:"stand"},Ql={closed:{az:-34,el:22},open:{az:-30,el:30}};function Ta(i,{L:e,W:t,H:n,t:s,glue:r=14}){let a=.25+s*.6;i.root("front",r+t-a,0,e,n,{name:"Front",nameIn:"Inside front",cover:!0}),i.add("front","right","side-b",{d:t,angle:90,seq:3,name:"Right side",nameIn:"Inside"}),i.add("side-b","far","back",{d:e,angle:90,seq:3,name:"Back",nameIn:"Inside back"}),i.add("front","left","side-a",{d:t-a,angle:90,seq:3,name:"Left side",nameIn:"Inside"}),i.add("side-a","far","glue",{d:r,inL:2,inR:2,tL:3,tR:3,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"})}function hr(i,e,t,n,{L:s,W:r,tuck:a,t:o,seq:l,open:c}){i.add(e,t,`${n}-lid`,{d:r-o*2.4-.3,angle:90,seq:l,gap:2,open:c,name:n==="top"?"Top":"Base",nameIn:"Inside"}),i.add(`${n}-lid`,"far",`${n}-tuck`,{d:a,inL:.6,inR:.6,tL:2,tR:2,r:6,angle:90.6,seq:l,open:40,role:"flap",name:"Tuck",nameIn:"Tuck"})}function jn(i,e,t,n,s,r){i.add(e,t,n,{d:s,inL:.6,inR:.6,tL:2,tR:6,r:2,angle:90,seq:r,role:"flap",name:"Dust flap",nameIn:"Dust flap"})}function Jy({L:i,W:e,H:t,t:n=.45,reverse:s=!1,hang:r=!1}){let a=new Re({bleed:3,safe:3,pose:{...dr},view:Ql});Ta(a,{L:i,W:e,H:t,t:n});let o=Math.min(16,e*.6),l=Math.min(e*.62,26);if(jn(a,"side-a","top","dust-a-top",l,6),jn(a,"side-b","top","dust-b-top",l,6),jn(a,"side-a","bottom","dust-a-bot",l,4),jn(a,"side-b","bottom","dust-b-bot",l,4),r){hr(a,"front","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});let c=a.byId.back.edges.top,h=(c.a[0]+c.b[0])/2,d=c.a[1]-21;a.add("back","top","hang",{d:36,r:5,angle:0,seq:1,name:"Hang tab",nameIn:"Hang tab",bead:!1,holes:[jy(h,d)]})}else hr(a,"back","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});return hr(a,s?"front":"back","bottom","bot",{L:i,W:e,tuck:o,t:n,seq:5}),a.finish()}function jy(i,e){let s=[];for(let r=0;r<=10;r++){let a=Math.PI/2+r/10*Math.PI;s.push([i-14+Math.cos(a)*3,e+Math.sin(a)*3])}s.push([i-5,e-3],[i-3.5,e-6.5],[i+3.5,e-6.5],[i+5,e-3]);for(let r=0;r<=10;r++){let a=-Math.PI/2+r/10*Math.PI;s.push([i+14+Math.cos(a)*3,e+Math.sin(a)*3])}return s}function Qy({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...dr},view:Ql});Ta(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);jn(s,"side-a","top","dust-a-top",a,6),jn(s,"side-b","top","dust-b-top",a,6),hr(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18});let o=e*.58,l=(c,h,d)=>({pts:d?[[0,0],[0,h*.5],[c*.28,h],[c*.72,h],[c,h*.42],[c,0]]:[[0,0],[0,h*.42],[c*.28,h],[c*.72,h],[c,h*.5],[c,0]]});return s.add("front","bottom","lock-f",{...l(i,o,!1),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("back","bottom","lock-b",{...l(i,o,!0),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-a","bottom","lock-a",{d:e*.5,inL:.5,inR:.5,tL:2,tR:8,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-b","bottom","lock-c",{d:e*.5,inL:.5,inR:.5,tL:8,tR:2,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.finish()}function eb({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...dr},view:Ql});Ta(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);return jn(s,"side-a","top","dust-a-top",a,6),jn(s,"side-b","top","dust-b-top",a,6),hr(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18}),s.add("side-a","bottom","snap-1",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"1",nameIn:"1"}),s.add("side-b","bottom","snap-2",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"2",nameIn:"2"}),s.add("front","bottom","snap-3",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"3",nameIn:"3"}),s.add("back","bottom","snap-4",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"4",nameIn:"4"}),s.finish()}function tb({L:i,W:e,H:t,t:n=3}){let s=new Re({bleed:0,safe:10,pose:{...dr},view:Ql});Ta(s,{L:i,W:e,H:t,t:n,glue:30});let r=e/2;return s.add("side-a","bottom","min-a-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","bottom","min-b-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","bottom","maj-f-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("back","bottom","maj-k-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("side-a","top","min-a-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","top","min-b-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","top","maj-f-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.add("back","top","maj-k-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.finish()}function nb({L:i,W:e,H:t,t:n=1.5}){let s=Math.max(5,n*3.5),r=n+.3,a=i+2*s,o=new Re({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-26,el:40}}});o.root("base",0,0,a,e,{name:"Base",nameIn:"Inside base"}),o.add("base","top","back",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Back",nameIn:"Inside back"}),o.add("back","far","lid",{d:e-n*2.1-.4,inL:s-r+.4,inR:s-r+.4,angle:90,seq:6,gap:1,open:8,name:"Lid",nameIn:"Inside lid",cover:!0}),o.add("lid","far","tuck",{d:t*.86,inL:1,inR:1,tL:2,tR:2,r:8,angle:90.6,seq:6,open:26,role:"flap",name:"Tuck",nameIn:"Tuck"}),o.add("lid","left","ear-l",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("lid","right","ear-r",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("base","bottom","front",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Front",nameIn:"Inside front"});let l=Math.min(e*.34,46);o.add("back","left","back-l",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("back","right","back-r",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","left","front-l",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","right","front-r",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"});for(let[c,h]of[["l","left"],["r","right"]])o.add("base",h,`wall-${c}`,{d:t,angle:90,seq:3,name:c==="l"?"Left side":"Right side",nameIn:"Inside"}),o.add(`wall-${c}`,"far",`roll-${c}`,{d:s-n,inL:1,inR:1,angle:90,seq:4,role:"flap",name:"Roll",nameIn:"Roll"}),o.add(`roll-${c}`,"far",`in-${c}`,{d:t-n-1,inL:1,inR:1,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Inner wall",nameIn:"Inner wall"});return o.finish()}function jl(i,e,t,n,s,r,a,o={}){let l=e?`${e}-`:"",c=`${l}base`,h=o.seq??2,d=Math.min(a*.9,18);o.mount?i.mountRect(o.parent,c,t,n,s,r,{to:o.mount,seq:o.mountSeq,name:o.name||"Top",nameIn:"Inside",cover:!0}):i.root(c,t,n,s,r,{name:o.name||"Base",nameIn:"Inside base"});let u=o.t*1.4;for(let[f,p,_]of[["t","top","Back"],["b","bottom","Front"]])i.add(c,p,`${l}wall-${f}`,{d:a,inL:0,inR:0,angle:90,seq:h+1,name:_,nameIn:"Inside",gap:1}),i.add(`${l}wall-${f}`,"left",`${l}tab-${f}l`,{d,inL:1,inR:1,tL:0,tR:3,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"}),i.add(`${l}wall-${f}`,"right",`${l}tab-${f}r`,{d,inL:1,inR:1,tL:3,tR:0,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"});for(let[f,p,_]of[["l","left","Left"],["r","right","Right"]])i.add(c,p,`${l}wall-${f}`,{d:a,inL:.3,inR:.3,angle:90,seq:h+2,gap:3,name:_,nameIn:"Inside"})}function ib({L:i,W:e,H:t,lid:n,t:s=.5}){let r=n??Math.max(t*.5,20),a=s*3+.6,o=t+r+22,l=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:28},open:{az:-28,el:32}}});jl(l,"",0,0,i,e,t,{t:s,name:"Base"});let c=i+2*a,h=e+2*a,d=i+t*2+40,u=(e-h)/2;return jl(l,"lid",d,u,c,h,r,{t:s,parent:"base",name:"Lid top",seq:2,mountSeq:6,mount:{pos:[i/2,-e/2,-t-s-.2],rot:[0,180,0],center:[d+c/2,-(u+h/2),0],arc:Math.max(i,e)*.55,openAt:.42}}),l.finish()}function sb({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:26},open:{az:-34,el:32}}});jl(s,"",0,0,i,e,t,{t:n,name:"Tray"});let r=n*2+.6,a=e+r,o=t+r,l=i+t*2+40,c=-t-10;return s.mountRect("base","sleeve",l,c,i,a,{name:"Sleeve top",nameIn:"Inside",seq:7,cover:!0,to:{pos:[i/2,-e/2,-t-n*2.2],rot:[0,180,0],center:[l+i/2,-(c+a/2),0],arc:i*.5,slide:[i*.95,0,0],openAt:.76}}),s.add("sleeve","bottom","sleeve-f",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-f","far","sleeve-u",{d:a,angle:90,seq:6,name:"Sleeve base",nameIn:"Inside"}),s.add("sleeve-u","far","sleeve-b",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-b","far","sleeve-g",{d:12,inL:2,inR:2,tL:2,tR:2,angle:90,seq:5,role:"glue",gap:0,name:"Glue",nameIn:"Glue"}),s.finish()}function rb({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip"},view:{closed:{az:-30,el:34}},meta:{noOpen:!0}});return jl(s,"",0,0,i,e,t,{t:n,name:"Base"}),s.finish()}function ab({L:i,W:e,H:t,t:n=.45,inner:s,innerColor:r}){let a=new Re({bleed:3,safe:3,pose:{fold:"keep"},view:{closed:{az:-28,el:28}},meta:{noOpen:!0}});return a.root("top",12+t,0,i,e,{name:"Top",nameIn:"Inside",cover:!0}),s&&a.extra({type:"block",panel:"top",size:[i-n*2-.4,s,t-n*1.5],pos:[12+t+i/2,-e/2,-n-(t-n*1.5)/2-.1],color:r,seq:2}),a.add("top","right","side-b",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-b","far","under",{d:i,angle:90,seq:1,name:"Under",nameIn:"Inside"}),a.add("top","left","side-a",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-a","far","glue",{d:12,inL:1,inR:1,tL:2,tR:2,angle:90,seq:1,gap:1,role:"glue",name:"Glue",nameIn:"Glue"}),a.finish()}function ob({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...dr},view:{closed:{az:-34,el:18},open:{az:-30,el:28}}});Ta(s,{L:i,W:e,H:t,t:n});let r=e*.62,a=Math.asin(Math.min(.98,(e/2+.2)/r))*(180/Math.PI),o=34,l=Math.min(i*.55,80),c=(u,f)=>{let p=[];for(let g=0;g<=12;g++){let v=Math.PI/2+g/12*Math.PI;p.push([u+Math.cos(v)*7,f+Math.sin(v)*7])}for(let g=0;g<=12;g++){let v=-Math.PI/2+g/12*Math.PI;p.push([u+l+Math.cos(v)*7,f+Math.sin(v)*7])}return p},h=(u,f,p)=>{s.add(u,"top",`${f}-roof`,{d:r,angle:90-a,seq:6,open:0,name:"Roof",nameIn:"Inside",cover:!1});let _=s.byId[`${f}-roof`].edges.far,m=(_.a[0]+_.b[0])/2,g=_.a[1]-o*.46;s.add(`${f}-roof`,"far",`${f}-handle`,{d:o,r:8,tL:4,tR:4,angle:-(90-a)*0+90-(90-a),seq:7,open:0,role:"flap",name:"Handle",nameIn:"Handle",holes:[c(m-l/2,g)]})};h("back","k",1),h("front","f",-1);for(let u of["a","b"]){let f=[[0,0],[e/2,e*.5],[e,0]];s.add(`side-${u}`,"top",`gus-${u}`,{pts:f,angle:52,seq:5,open:0,role:"flap",name:"Gusset",nameIn:"Gusset"})}let d=Math.min(e*.62,26);return jn(s,"side-a","bottom","dust-a-bot",d,4),jn(s,"side-b","bottom","dust-b-bot",d,4),hr(s,"back","bottom","bot",{L:i,W:e,tuck:14,t:n,seq:5}),s.finish()}function lb({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-24,el:38}}});s.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),s.add("base","top","back",{d:t,angle:90,seq:2,name:"Back",nameIn:"Inside"}),s.add("back","far","lid",{d:e-n*2.4-.3,inL:n*1.6+.4,inR:n*1.6+.4,angle:90,seq:5,gap:2,open:2,name:"Lid",nameIn:"Inside lid",cover:!0}),s.add("lid","far","tuck",{d:t*.55,inL:3,inR:3,tL:6,tR:6,r:5,angle:90.6,seq:5,open:18,role:"flap",name:"Tuck",nameIn:"Tuck"}),s.add("lid","left","lip-l",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("lid","right","lip-r",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("base","bottom","front",{d:t,angle:90,seq:2,name:"Front",nameIn:"Inside"}),s.add("base","left","left",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Left",nameIn:"Inside"}),s.add("base","right","right",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Right",nameIn:"Inside"});for(let r of["back","front"])s.add(r,"left",`${r}-gl`,{d:e*.22,inL:1,inR:1,tL:0,tR:4,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),s.add(r,"right",`${r}-gr`,{d:e*.22,inL:1,inR:1,tL:4,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return s.finish()}function cb({L:i,W:e,H:t,header:n,t:s=1.5}){let r=new Re({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:22},open:{az:-30,el:22}}});r.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),r.add("base","top","back",{d:t+n,angle:90,seq:2,name:"Header",nameIn:"Header inside",cover:!0}),r.add("base","bottom","front",{d:t*.8,angle:90,seq:2,name:"Front lip",nameIn:"Inside"}),r.add("base","left","left",{pts:[[0,0],[0,t+n*.7],[e*.45,t],[e,t*.8],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Left wing",nameIn:"Inside"}),r.add("base","right","right",{pts:[[0,0],[0,t*.8],[e*.55,t],[e,t+n*.7],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Right wing",nameIn:"Inside"});for(let a of["front"])r.add(a,"left",`${a}-gl`,{d:14,inL:1,inR:1,tL:0,tR:3,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),r.add(a,"right",`${a}-gr`,{d:14,inL:1,inR:1,tL:3,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return r.finish()}function hb({w:i,h:e,g:t,hem:n=40,base:s,handles:r=!0,t:a=.2}){let o=s??t*.72,l=18,c=a*1.6+.2,h=new Re({bleed:3,safe:5,pose:{...dr},view:{closed:{az:-30,el:12},open:{az:-30,el:22}}});if(h.root("front",l+t-c,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),h.add("front","right","gus-b",{d:t,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),h.add("front","left","gus-a",{d:t-c,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-a","far","glue",{d:l,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),n)for(let d of["front","gus-a","gus-b","back"])h.add(d,"top",`hem-${d}`,{d:n,inL:.1,inR:.1,angle:179.9,seq:1,role:"flap",name:"Hem",nameIn:"Hem"});return h.add("gus-a","bottom","b-a",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("gus-b","bottom","b-b",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("front","bottom","b-f",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("back","bottom","b-k",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),r&&(h.extra({type:"rope",panel:"front",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i}),h.extra({type:"rope",panel:"back",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i})),h.finish()}var rd={};Mi(rd,{deskCalendar:()=>gb,notepad:()=>mb,perfectBook:()=>ub,saddleBook:()=>db,wireBook:()=>fb});var sd=7;function db({w:i,h:e,pages:t=16,t:n=.12,coverT:s}){let a=Math.max(1,Math.ceil(t/4))-1,o=Math.min(a,sd),l=a*n/Math.max(1,o),c=s??n,d=-(o*2*l+2*c)/2,u=new Re({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-26,el:34},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"saddle"}}});u.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside back cover"}),u.add("back","right","front",{d:i,angle:179.6,seq:1,open:5,name:"Front cover",nameIn:"Inside front cover",cover:!0}),u.byId.front.pivotZ=d;let f=[i,0],p=[i,e];for(let m=0;m<o;m++){let g=c+m*l,v=2*(m+1)+1;u.leaf("back",`l${m}`,i,0,i,e,{hinge:{a:f,b:p},zOff:g,pivotZ:d,angle:179.7,open:m===o-1?62:6+m*1.2,seq:1,pageFront:v,pageBack:v+1,valley:!0,bead:!1}),u.leaf("back",`r${m}`,0,0,i,e,{hinge:{a:f,b:p},zOff:g,pivotZ:d,angle:0,open:0,seq:1,pageFront:t-v+1,pageBack:t-v,valley:!0,bead:!1})}u.meta.pageT=l,u.meta.leafT=l;let _=e*.26;return u.extra({type:"staples",x:i,ys:[_,e-_],len:8,panel:"back"}),u.finish()}function ub({w:i,h:e,pages:t=64,t:n=.12,coverT:s=.3,hard:r=!1}){let a=Math.ceil((t-4)/2),o=Math.max(2,a*n+(r?3:.6)),l=Math.min(a,sd+2),c=a*n/l,h=r?2.4:s,d=r?3:0,u=new Re({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-28,el:32},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"perfect"},thick:h}}),f=i+d,p=e+d*2;u.root("back",0,0,f,p,{name:"Back cover",nameIn:"Inside back cover"}),u.add("back","right","spine",{d:o,angle:90,seq:1,open:90,name:"Spine",nameIn:"Spine",role:"flap",lift:0}),u.add("spine","far","front",{d:f,angle:90,seq:2,open:-80,name:"Front cover",nameIn:"Inside front cover",cover:!0});let _=[f,d],m=[f,d+e],g=o;for(let v=0;v<l;v++){let b=h+(v+0)*c*.999,y=l-1-v;u.leaf("back",`p${v}`,f-i,d,i,e,{hinge:{a:_,b:m},zOff:b,pivotZ:-(h+g/2),angle:0,open:y<4?[172,169,166,118][3-y]:0,seq:3,pageFront:t-2-2*v,pageBack:t-3-2*v,valley:!0,bead:!1})}return u.meta.pageT=c,u.meta.leafT=c,u.finish()}function fb({w:i,h:e,pages:t=40,t:n=.13,coverT:s=.33,edge:r="left",stand:a=!1,wall:o=!1,r:l}){let c=Math.ceil(t/2),h=Math.min(c,sd+1),d=c*n/h,u=h*d+2*s,f=r==="left",p=f?[0,0]:[0,0],_=f?[0,e]:[i,0],m=8.47,g=2,v=[],b=Math.floor((f?e:i)/m),y=6;for(let R=0;R<b;R++){let I=(R+.5)/b*(f?e:i);v.push(f?Kn(y,I,g,14):Kn(I,y,g,14))}let T=l??Math.max(6.5,u/2+3.2),E=new Re({bleed:3,safe:11,pose:o?{fold:"stand",open:"stand",closedYaw:0}:{fold:"keep",open:"keep"},view:o?{closed:{az:-20,el:6},open:{az:-20,el:6}}:{closed:{az:-26,el:34},open:{az:-26,el:40}},meta:{book:{pages:t,kind:"wire"}}});E.root("backleaf",0,0,i,e,{name:"Back",nameIn:"Inside",holes:v});let x=-u+y*0,S={a:p,b:_};for(let R=0;R<h;R++){let I=(h-R)*d,N=R===0;E.leaf("backleaf",`w${R}`,0,0,i,e,{hinge:S,zOff:-I-(N?s:0),pivotZ:u/2,coverLeaf:N,holes:N?v:[],angle:0,open:R<2?-176+R*7:0,seq:2-Math.min(R,1),pageFront:2*R+1,pageBack:2*R+2,valley:!1,bead:!1})}return E.meta.leafT=d,E.meta.pageT=d,E.extra({type:"wire",a:f?[6*0-1,0]:[0,-1],b:f?[-1,e]:[i,-1],pitch:m,r:T,h:0,z:u/2-T*0-0,always:!0,ox:f?1+y*.2:0,oy:f?0:y*.2}),o&&E.extra({type:"custom",build:pb(i)}),E.finish()}function pb(i){return(e,t)=>{let n=new Ae(new pn(8,.6,8,32,Math.PI),new Qe({color:"#16161a",metalness:.8,roughness:.35}));n.position.set(i/2,6,0),t.group.add(n)}}function mb({w:i,h:e,sheets:t=50,t:n=.1}){let r=t*n/6,a=new Re({bleed:3,safe:5,pose:{fold:"keep",open:"keep"},view:{closed:{az:-28,el:32},open:{az:-28,el:38}},meta:{book:{pages:t,kind:"pad"}}});a.root("back",0,0,i,e,{name:"Chipboard back",nameIn:"Chipboard",holes:[]});let o={a:[0,0],b:[i,0]};for(let l=0;l<6;l++){let c=(6-l)*r;a.leaf("back",`n${l}`,0,0,i,e,{hinge:o,zOff:-c,pivotZ:1.5,coverLeaf:!0,angle:0,open:l===0?-58:0,seq:1,pageFront:1,pageBack:2,valley:!1,bead:!1})}return a.meta.leafT=r,a.meta.pageT=r,a.finish()}function gb({w:i,h:e,base:t}){let n=t??e*.75,s=18,r=e+6,a=180-Math.acos((n*n+r*r-r*r)/(2*n*r))*180/Math.PI,o=new Re({bleed:3,safe:5,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-28,el:18}},meta:{noOpen:!0}});return o.root("base",0,r,i,n,{name:"Base",nameIn:"Base"}),o.add("base","top","back",{d:r,angle:a,seq:1,name:"Back",nameIn:"Inside"}),o.add("base","bottom","front",{d:r,angle:a,seq:1,name:"Month sheet",nameIn:"Inside",cover:!0}),o.add("front","far","glue",{d:s,inL:1,inR:1,tL:2,tR:2,angle:2*(180-a),seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),o.extra({type:"wire",panel:"front",a:[0,0],b:[i,0],pitch:8.47,r:5.5,h:0,z:0,oy:3}),o.finish()}var ad={};Mi(ad,{coneWrap:()=>bb,friesCone:()=>Mb,pillowBox:()=>Sb,wrapLabel:()=>yb});var _b=i=>Math.min(1,Math.max(0,i)),xb=i=>i*i*(3-2*i),ec=class{constructor(e,{thickness:t,materials:n,uvOf:s,surface:r}){this.kind="warp",this.die=e,this.t=t,this.object=new it,this.pickables=[],this.channels=[];let a=e.warp;this.warp=a;let o=a.nu||96,l=a.nv||32;this.nu=o,this.nv=l;let c=(o+1)*(l+1);this.flat=new Float32Array(c*2);let h=new Float32Array(c*3),d=new Float32Array(c*2),u=new Float32Array(c*2),f=[],p=0;for(let b=0;b<=l;b++)for(let y=0;y<=o;y++){let[T,E]=a.grid(y/o,b/l);this.flat[p*2]=T,this.flat[p*2+1]=E;let[x,S]=s(T,E);d[p*2]=x,d[p*2+1]=S,u[p*2]=1-x,u[p*2+1]=S,p++}for(let b=0;b<l;b++)for(let y=0;y<o;y++){let T=b*(o+1)+y,E=T+1,x=T+o+1,S=x+1;f.push(T,x,E,E,x,S)}let _=new St;_.setAttribute("position",new Pt(h,3)),_.setAttribute("uv",new Pt(d,2)),_.setIndex(f),_.computeVertexNormals(),this.geo=_;let m=new St;m.setAttribute("position",_.attributes.position),m.setAttribute("normal",_.attributes.normal),m.setAttribute("uv",new Pt(u,2)),m.setIndex(f),r.back.side=Lt,a.mask&&this._mask(r);let g=new Ae(_,n[0]),v=new Ae(m,n[1]);v.userData.side="back";for(let b of[g,v])b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1,b.userData.panel=e.panels[0].id,this.object.add(b),this.pickables.push(b);g.customDepthMaterial=void 0,a.prop&&(this.prop=a.prop(),this.prop&&this.object.add(this.prop.object)),this.apply([0])}_mask(e){let t=document.createElement("canvas");t.width=e.canvas.front.width,t.height=e.canvas.front.height;let n=t.getContext("2d"),s=t.width/e.ext.w;n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.fillStyle="#fff",n.beginPath(),this.die.panels[0].poly.forEach((a,o)=>{let l=(a[0]-e.ext.x0)*s,c=(a[1]-e.ext.y0)*s;o?n.lineTo(l,c):n.moveTo(l,c)}),n.closePath(),n.fill();let r=new fn(t);this.maskTex=r;for(let a of[e.front,e.back])a.alphaMap=r,a.alphaTest=.5,a.needsUpdate=!0}vector(e){return e==="flat"||e==="inside"?[0]:e==="open"?[this.warp.openAt??1]:[1]}windows(){return{steps:3,list:[[0,1]]}}_deform(e,t){let{flat:n,warp:s}=this,r=n.length/2;for(let a=0;a<r;a++){let o=s.deform(n[a*2],n[a*2+1],e);t[a*3]=o[0],t[a*3+1]=o[1],t[a*3+2]=o[2]}}apply(e){this.vec=e;let t=e[0];this._deform(t,this.geo.attributes.position.array),this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals(),this.geo.attributes.normal.needsUpdate=!0,this.prop&&this.prop.apply(t)}bounds(e){let t=this.flat.length/2,n=new Float32Array(t*3);this._deform(e[0],n);let s=new bt,r=new C,a=Math.max(1,Math.floor(t/600));for(let o=0;o<t;o+=a)r.set(n[o*3],n[o*3+1],n[o*3+2]),s.expandByPoint(r);if(this.prop?.box){let o=this.prop.box(e[0]);o&&s.union(o)}return s}dispose(){this.geo.dispose(),this.maskTex?.dispose(),this.prop?.dispose?.()}},tc={clamp01:_b,smooth:xb};function rp(i,e,t,n){let s=n/t,r=i-e;return s<1e-5?[i,0]:[e+Math.sin(s*r)/s,-(1-Math.cos(s*r))/s]}var{clamp01:ur,smooth:fr}=tc;function Wi(i,e,t=72){let n=i.map(r=>new he(r[0],r[1])),s=new Ae(new Vs(n,t),e);return s.castShadow=!0,s.receiveShadow=!0,s}var nc=(i,e=6)=>{let t=[];for(let n=0;n<i.length-1;n++){let s=i[Math.max(0,n-1)],r=i[n],a=i[n+1],o=i[Math.min(i.length-1,n+2)];for(let l=0;l<e;l++){let c=l/e,h=(d,u,f,p)=>.5*(2*u+(f-d)*c+(2*d-5*u+4*f-p)*c*c+(3*u-d-3*f+p)*c*c*c);t.push([Math.max(0,h(s[0],r[0],a[0],o[0])),h(s[1],r[1],a[1],o[1])])}}return t.push(i[i.length-1]),t},vb={wine:{r:37,build(){let i=new en({color:"#10231a",roughness:.12,clearcoat:1,clearcoatRoughness:.1}),e=new Qe({color:"#141416",metalness:.7,roughness:.35}),t=new it;t.add(Wi(nc([[0,0],[35,0],[37,3],[37,60],[37,190],[35,210],[24,236],[15.5,258],[14,290],[14,310],[15,312],[15,318],[0,318]]),i));let n=Wi([[14.6,262],[14.6,300],[15.6,300],[15.6,319],[0,320]],e);return t.add(n),t},height:320,labelY:30},beer:{r:30,build(){let i=new en({color:"#3a1c07",roughness:.14,clearcoat:1,clearcoatRoughness:.1}),e=new Qe({color:"#b7b8bb",metalness:1,roughness:.3}),t=new it;return t.add(Wi(nc([[0,0],[28,0],[30,3],[30,60],[30,120],[28,142],[16,176],[13,200],[13,214],[14.5,216],[14.5,221],[0,221]]),i)),t.add(Wi([[15,214],[15.2,222],[0,224]],e)),t},height:224,labelY:18},jar:{r:37,build(){let i=new en({color:"#d9c7a4",roughness:.2,clearcoat:1,clearcoatRoughness:.08}),e=new Qe({color:"#17171a",metalness:.7,roughness:.3}),t=new it;return t.add(Wi(nc([[0,0],[33,0],[37,5],[37,60],[37,100],[33,110],[31,116]]),i)),t.add(Wi([[35,114],[35,128],[34,130],[0,130]],e)),t},height:130,labelY:14},can:{r:33,build(){let i=new Qe({color:"#d7d8dc",metalness:1,roughness:.28}),e=new it;return e.add(Wi(nc([[0,3],[24,0],[29,1],[33,10],[33,60],[33,100],[33,104],[27,114],[26.6,115.4],[24.4,112],[0,112]]),i)),e},height:115.4,labelY:10},mug:{r:41,build(){let i=new en({color:"#f4f3ef",roughness:.3,clearcoat:.6}),e=new it;e.add(Wi([[0,0],[37,0],[41,3],[41,95],[40,96],[37.6,96],[37.6,8],[0,7]],i));let t=new Li([new C(0,76,-40),new C(0,82,-60),new C(0,56,-72),new C(0,28,-60),new C(0,22,-40)]),n=new Ae(new ss(t,40,5.5,12),i);return n.castShadow=!0,e.add(n),e},height:96,labelY:0}};function yb({w:i,h:e,container:t="wine",r:n,y:s,shape:r,stock:a}){let o=vb[t],c=(n??o.r)+.5,h=new Re({bleed:2,safe:3,sides:1,pose:{fold:"stand",open:"stand"},view:{closed:{az:t==="mug"?58:-22,el:t==="mug"?16:8}},meta:{noOpen:!0,unitBoost:.9,closedLabel:"Applied"}}),d=gi(0,0,i,e);r==="round"&&(d=Gi(d,6,6)),r==="oval"&&(d=Xl(i/2,e/2,i/2,e/2,64)),h.rootPoly("label",d,{name:"Label",nameIn:"Adhesive",cover:!0}),h.finish();let u=s??o.labelY;return h.warp={nu:120,nv:8,mask:r==="oval"||r==="round",grid:(f,p)=>[f*i,p*e],deform(f,p,_){let m=fr(ur(_)),[g,v]=rp(f,i/2,c,m);return[g,-p,v]},prop(){let f=o.build(),p=new it;return p.add(f),p.position.set(i/2,-(e+u),-c),{object:p,apply(_){let m=fr(ur((_-.15)/.55));p.visible=m>.01,p.scale.setScalar(Math.max(.001,m))},box(_){if(_<.5)return null;let m=new bt;return m.min.set(i/2-c,-(e+u),-2*c),m.max.set(i/2+c,-(e+u)+o.height,0),m}}}},h}function ap(i,e,t,n,s,r=56){let a=[];for(let o=0;o<=r;o++){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*e,s+Math.cos(l)*e])}if(i>.5)for(let o=r;o>=0;o--){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*i,s+Math.cos(l)*i])}else a.push([n,s]);return a}var op=i=>({up:[0,-Math.cos(i),-Math.sin(i)],face:[0,-Math.sin(i),Math.cos(i)]});function lp({cx:i,cy:e,beta:t}){return(n,s,r)=>{let a=n-i,o=s-e,l=Math.hypot(a,o),c=Math.atan2(a,o),h=Math.PI/2+(t-Math.PI/2)*r,d=Math.sin(h),u=Math.cos(h),f=c/d,p=l*d*Math.sin(f),_=l*d*Math.cos(f),m=l*u,g=_*d+m*u,v=_*u-m*d;return[i+p,-(e+g),v]}}function bb({topD:i,bottomD:e,height:t,overlap:n=8,kind:s="cup"}){let r=i/2,a=e/2,o=Math.hypot(t,r-a),l=(r-a)/o,c=r/l,h=a/l,d=(2*Math.PI*r+n)/c,u=new Re({bleed:2,safe:3,sides:1,pose:{fold:op(Math.asin(l))},view:{closed:{az:-20,el:20}},meta:{noOpen:!0,closedLabel:"Rolled"}}),f=0,p=0,_=ap(h,c,d,f,p,80);u.rootPoly("wrap",_,{name:s==="cup"?"Cup wrap":"Sleeve",nameIn:"Inside",cover:!0});let m=Math.min(..._.map(E=>E[1])),g=Math.min(..._.map(E=>E[0]));u.finish();let v=-g,b=-m,y=Math.asin(l),T=lp({cx:f+v,cy:p+b,beta:y});return u.warp={nu:96,nv:12,grid:(E,x)=>{let S=-d/2+E*d,L=h+(c-h)*x;return[f+v+Math.sin(S)*L,p+b+Math.cos(S)*L]},deform:(E,x,S)=>{let L=fr(ur(S));return T(E,x,L)},prop(){let E=new it,x=new Qe({color:"#f4f2ea",roughness:.7,side:rn}),S=new C(0,-Math.cos(y),-Math.sin(y)),L=new C(v,-b,0),R=P=>L.clone().addScaledVector(S,P),I=new pt().setFromUnitVectors(new C(0,0,1),S),N=new Ae(new pn(r+.3,1.4,10,96),x);N.position.copy(R(c*Math.cos(y))),N.quaternion.copy(I),E.add(N);let F=new Ae(new qn(a,64),x);if(F.position.copy(R(h*Math.cos(y)+6)),F.quaternion.copy(I),E.add(F),s==="sleeve"){let P=t*.5,O=[],V=j=>j*Math.tan(y),G=h*Math.cos(y)-P*.25,ee=c*Math.cos(y)+P*.7;for(let j=0;j<=10;j++){let te=G+(ee-G)*j/10;O.push(new he(V(te)-.6,te))}let W=new Ae(new Vs(O,64),x);W.castShadow=!0,W.quaternion.setFromUnitVectors(new C(0,1,0),S),W.position.copy(L),E.add(W),N.position.copy(R(ee)),N.geometry.dispose(),N.geometry=new pn(V(ee),1.4,10,96),F.position.copy(R(G)),F.geometry.dispose(),F.geometry=new qn(V(G)-.6,64)}return{object:E,apply(P){E.visible=P>.97}}}},u}function Mb({h:i=210,topD:e=110}){let t=e/2,n=Math.hypot(i,t),s=t/n,r=(2*Math.PI*t+16)/n,a=new Re({bleed:3,safe:4,sides:1,pose:{fold:op(Math.asin(s))},view:{closed:{az:-22,el:16}},meta:{noOpen:!0,closedLabel:"Rolled"}}),o=ap(0,n,r,0,0,72);a.rootPoly("cone",o,{name:"Cone",nameIn:"Inside",cover:!0});let l=Math.min(...o.map(p=>p[1])),c=Math.min(...o.map(p=>p[0]));a.finish();let h=-c,d=-l,u=Math.asin(s),f=lp({cx:h,cy:d,beta:u});return a.warp={nu:96,nv:14,grid:(p,_)=>{let m=-r/2+p*r,g=.5+(n-.5)*_;return[h+Math.sin(m)*g,d+Math.cos(m)*g]},deform:(p,_,m)=>f(p,_,fr(ur(m))),prop(){let p=new it,_=new Qe({color:"#2a2b30",metalness:.9,roughness:.35}),m=new C(0,-Math.cos(u),-Math.sin(u)),g=new C(h,-d,0),v=new pt().setFromUnitVectors(new C(0,0,1),m),b=n*Math.cos(u)*.62,y=b*Math.tan(u)+1,T=new Ae(new pn(y,1.2,8,72),_);T.position.copy(g).addScaledVector(m,b),T.quaternion.copy(v),T.castShadow=!0,p.add(T);let E=new Ae(new pn(y*1.05,1.2,8,72),_);E.position.copy(g).addScaledVector(m,-8),E.quaternion.copy(v),E.castShadow=!0,p.add(E);for(let x=0;x<3;x++){let S=x/3*Math.PI*2+.5,L=P=>new C(Math.cos(S)*P,Math.sin(S)*P,0).applyQuaternion(v),R=T.position.clone().add(L(y)),I=E.position.clone().add(L(y*1.05)),N=R.distanceTo(I),F=new Ae(new hi(1.1,1.1,N,8),_);F.position.copy(R).add(I).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new C(0,1,0),R.clone().sub(I).normalize()),F.castShadow=!0,p.add(F)}return{object:p,apply(x){p.visible=x>.9},box(x){if(x<.5)return null;let S=new bt().setFromObject(E);return S.expandByObject(T),S}}}},a}function Sb({L:i,W:e,H:t}){let n=e/2,s=t/2,r=Math.PI*(3*(n+s)-Math.sqrt((3*n+s)*(n+3*s))),a=12,o=e*.2,l=r,c=i+o*2,h=new Re({bleed:3,safe:4,pose:{fold:"keep"},view:{closed:{az:-34,el:26}},meta:{noOpen:!0}}),d=48,u=m=>Math.abs(Math.sin(m/l*Math.PI*2)),f=[],p=[];for(let m=0;m<=d;m++){let g=m/d*l;f.push([g,o*(1-u(g))]),p.push([g,c-o*(1-u(g))])}let _=[...f,[l+a,o+6],[l+a,c-o-6],...p.reverse()];h.rootPoly("body",_,{name:"Body",nameIn:"Inside",cover:!0});for(let m=0;m<d;m++){let g=m/d*l,v=(m+1)/d*l;h.perf([g,o+o*u(g)],[v,o+o*u(v)],"score"),h.perf([g,c-o-o*u(g)],[v,c-o-o*u(v)],"score")}return h.finish(),h.warp={nu:120,nv:72,mask:!0,grid:(m,g)=>[m*(l+a),g*c],deform(m,g,v){let b=fr(ur(v/.62)),y=fr(ur((v-.5)/.5)),T=Math.min(m,l)/l*Math.PI*2-Math.PI/2,E=g-c/2,x=[m-l/2,-E,0],S=i/2+o*.5,L=Math.max(0,Math.abs(E)-S),R=(Math.abs(E)>S?S-L*.9:Math.abs(E))*Math.sign(E),I=Math.min(1,Math.abs(R)/S),N=1-y*(1-Math.pow(Math.max(0,1-I*I),.6)),F=L>0?1-Math.min(.4,L/o)*y:1,P=[n*Math.cos(T)*F,-R,-s*N*Math.sin(T)*F-s];return[x[0]+(P[0]-x[0])*b,x[1]+(P[1]-x[1])*b,x[2]+(P[2]-x[2])*b]}},h}var ld={};Mi(ld,{aBoard:()=>Tb,poster:()=>wb,rollup:()=>Eb});var{clamp01:Gw,smooth:od}=tc;function wb({w:i,h:e,eyelets:t=0,name:n="Poster",stand:s=!0}){let r=[];if(t){let o=Math.max(2,Math.round(i/t));for(let l=0;l<=o;l++){let c=20+(i-40)*l/o;r.push(Kn(c,20,6,18),Kn(c,e-20,6,18))}}let a=new Re({bleed:t?0:3,safe:t?30:5,pose:{fold:"stand",open:"stand",tilt:s?-5:0},view:{closed:{az:-26,el:8}},meta:{noOpen:!0,closedLabel:"Standing"}});return a.root("sheet",0,0,i,e,{name:n,nameIn:"Back",cover:!0,holes:r}),a.finish()}function Eb({w:i=850,h:e=2e3,tube:t=120}){let n=new Re({bleed:3,safe:25,sides:1,pose:{fold:"stand"},view:{closed:{az:-28,el:6}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("banner",0,0,i,e,{name:"Banner",nameIn:"Back",cover:!0}),n.finish(),n.warp={nu:4,nv:96,grid:(s,r)=>[s*i,r*e],deform(s,r,a){let o=a<.5?1-od(a*2):od((a-.5)*2),l=e-r-e*(1-o);return[s,Math.max(0,l)-e,0]},prop(){let s=new it,r=new Qe({color:"#c3c5c9",metalness:1,roughness:.3}),a=new Qe({color:"#17181b",metalness:.4,roughness:.5}),o=new Ae(new ns(40,i+20,6,20),r);o.rotation.z=Math.PI/2,o.position.set(i/2,-e+6,0),o.castShadow=!0,s.add(o);for(let h of[-1,1]){let d=new Ae(new sn(50,12,360),a);d.position.set(i/2+h*(i/2-60),-e-34,0),d.castShadow=!0,s.add(d)}let l=new Ae(new hi(9,9,e,12),r);l.position.set(i/2,-e/2,-22),l.castShadow=!0,s.add(l);let c=new Ae(new sn(i+6,22,14),r);return c.castShadow=!0,s.add(c),{object:s,apply(h){let d=h<.5?0:od((h-.5)*2);s.visible=h>.02,l.scale.y=Math.max(.01,d),l.position.y=-e+e*d/2,c.position.set(i/2,-e+e*d,0)},box(h){if(h<.5)return null;let d=new bt;return d.min.set(-20,-e-42,-190),d.max.set(i+20,12,190),d}}}},n}function Tb({w:i,h:e,t=22}){let s=148*Math.PI/180,r=[0,-Math.cos(s),-Math.sin(s)],a=[0,1+r[1],r[2]],o=Math.hypot(a[1],a[2]),l=[0,-a[1]/o,-a[2]/o],c=new Re({bleed:3,safe:15,pose:{fold:{up:l,face:[0,-Math.sin(s),Math.cos(s)]}},view:{closed:{az:-30,el:10}},meta:{noOpen:!0,thick:t,edge:"#b6b8bd",closedLabel:"Standing"}});return c.root("rear",0,0,i,e,{name:"Rear poster",nameIn:"Frame back"}),c.add("rear","bottom","front",{d:e,angle:148,seq:1,name:"Front poster",nameIn:"Frame back",cover:!0,bead:!1}),c.finish()}var fs={cut:"#ff2d87",crease:"#16a7ff",mountain:"#ffb020",perf:"#16d67b",safe:"rgba(0, 200, 120, 0.9)",glue:"rgba(0, 81, 255, 0.10)",label:"#0051FF"};function cp(i=512,e=23){let t=document.createElement("canvas");t.width=t.height=i;let n=t.getContext("2d"),s=e,r=()=>(s=s*16807%2147483647,(s&65535)/65535);n.fillStyle="#808080",n.fillRect(0,0,i,i);for(let a=0;a<70;a++){let o=r()*i,l=r()*i,c=20+r()*70,h=r()>.5;for(let d of[-i,0,i])for(let u of[-i,0,i]){let f=n.createRadialGradient(o+d,l+u,0,o+d,l+u,c);f.addColorStop(0,h?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"),f.addColorStop(1,"rgba(128,128,128,0)"),n.fillStyle=f,n.fillRect(o+d-c,l+u-c,c*2,c*2)}}n.lineCap="round";for(let a=0;a<2600;a++){let o=r()*i,l=r()*i,c=r()*Math.PI*2,h=3+r()*r()*16,d=(r()-.5)*.9,u=Math.round(70+r()*120);n.strokeStyle=`rgba(${u},${u},${u},${.18+r()*.3})`,n.lineWidth=.5+r()*.9;for(let f of[-i,0,i])for(let p of[-i,0,i]){let _=o+f,m=l+p;_<-20||m<-20||_>i+20||m>i+20||(n.beginPath(),n.moveTo(_,m),n.quadraticCurveTo(_+Math.cos(c+d)*h*.5,m+Math.sin(c+d)*h*.5,_+Math.cos(c)*h,m+Math.sin(c)*h),n.stroke())}}return t}function hp(i,e,t=7){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=t,o=()=>(a=a*16807%2147483647,(a&65535)/65535);for(let l=0;l<r.data.length;l+=4){let c=128+(o()-.5)*e;r.data[l]=r.data[l+1]=r.data[l+2]=c,r.data[l+3]=255}return s.putImageData(r,0,0),n}function Ab(i,e){let t=document.createElement("canvas");t.width=128,t.height=64;let n=t.getContext("2d");n.fillStyle="#3a2c1b",n.fillRect(0,0,128,64),n.fillStyle=e,n.fillRect(0,0,128,9),n.fillRect(0,55,128,9),n.strokeStyle=i,n.lineWidth=7,n.beginPath();for(let r=0;r<=128;r+=2){let a=32+Math.sin(r/128*Math.PI*2)*21;r===0?n.moveTo(r,a):n.lineTo(r,a)}n.stroke();let s=new fn(t);return s.wrapS=Ds,s.colorSpace=Mt,s.anisotropy=4,s}var ic=class{constructor(e,t={}){this.die=e,this.stockId=t.stock,this.finishId=t.finish||"none",this.stock=ds[t.stock]||ds["silk-170"],this.maxTex=t.maxTex||4096,this.anisotropy=t.anisotropy||8,this.detail=t.detail||"blank";let n=e.bleed;this.ext={x0:-n,y0:-n,w:e.w+2*n,h:e.h+2*n},this.opts={lines:!1,safe:!1,labels:!1,...t.overlays},this.art={front:null,back:null},this.orient={},this.uvOf=(s,r)=>[(s-this.ext.x0)/this.ext.w,1-(r-this.ext.y0)/this.ext.h],this._materials(),this._resize(this.detail==="art"?this.maxTex:Math.min(this.maxTex,2048)),this._bump(),this.compose()}_resize(e){let{w:t,h:n}=this.ext,s=e/Math.max(t,n);this.pxPerMm=Math.min(s,16);let r=Math.max(64,Math.round(t*this.pxPerMm)),a=Math.max(64,Math.round(n*this.pxPerMm));if(!(this.canvas&&this.canvas.front.width===r&&this.canvas.front.height===a)){this.canvas={front:document.createElement("canvas"),back:document.createElement("canvas")},this.layer={front:document.createElement("canvas"),back:document.createElement("canvas")};for(let o of["front","back"]){this.canvas[o].width=this.layer[o].width=r,this.canvas[o].height=this.layer[o].height=a;let l=this.tex?.[o];l&&l.dispose()}this.tex={front:this._canvasTexture(this.canvas.front),back:this._canvasTexture(this.canvas.back)},this.front.map=this.tex.front,this.back.map=this.tex.back,this.front.needsUpdate=!0,this.back.needsUpdate=!0}}_canvasTexture(e){let t=new fn(e);return t.colorSpace=Mt,t.anisotropy=this.anisotropy,t.generateMipmaps=!0,t.minFilter=Dn,t}_materials(){let e=this.stock,t=sr[this.finishId]||sr.none,n=t.rough??e.rough;this.front=new en({color:16777215,roughness:n,metalness:0,clearcoat:t.clearcoat,clearcoatRoughness:.18,envMapIntensity:1}),this.back=new en({color:16777215,roughness:Math.max(e.rough,.6),metalness:0}),this.edge=new Qe({color:e.dark?"#26262a":e.core||e.color,roughness:.85}),e.kind==="corrugated"&&(this.fluteTex=Ab(e.core||"#c9a97c",e.color),this.edge.map=this.fluteTex,this.edge.color.set("#ffffff")),this.materials=[this.front,this.back,this.edge]}_bump(){let{w:e,h:t}=this.ext,n=Math.min(1536/Math.max(e,t),8),s=document.createElement("canvas");s.width=Math.max(64,Math.round(e*n)),s.height=Math.max(64,Math.round(t*n));let r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s.width,s.height);let a=this.stock;if(a.felt){let c=r.createPattern(cp(512,31),"repeat");c.setTransform(new DOMMatrix().scale(Math.max(.6,n/5.5))),r.globalAlpha=.85,r.fillStyle=c,r.fillRect(0,0,s.width,s.height),r.globalAlpha=1}else(a.kind!=="board"||a.rough>.7)&&(r.globalAlpha=a.rough>.8?.55:.22,r.fillStyle=r.createPattern(hp(256,a.rough>.8?90:40),"repeat"),r.fillRect(0,0,s.width,s.height),r.globalAlpha=1);if(r.save(),r.scale(n,n),r.translate(-this.ext.x0,-this.ext.y0),a.kind==="corrugated"){r.strokeStyle="rgba(0,0,0,0.05)",r.lineWidth=a.flute*.42;for(let c=0;c<this.die.h+10;c+=a.flute)r.beginPath(),r.moveTo(-5,c),r.lineTo(this.die.w+5,c),r.stroke()}let o=Math.max(.45,2.2/n,(a.mm||.2)*.8);r.lineCap="butt";for(let c of this.die.creases)r.strokeStyle="rgba(0,0,0,0.33)",r.lineWidth=o*2.2,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke(),r.strokeStyle="rgba(0,0,0,0.6)",r.lineWidth=o,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke();r.restore(),this.bumpTex&&this.bumpTex.dispose();let l=new fn(s);l.anisotropy=4,this.bumpTex=l,this.front.bumpMap=l,this.front.bumpScale=a.felt?1.6:1.1,this.back.bumpMap=l,this.back.bumpScale=a.felt?-1.6:-1.1,this.front.needsUpdate=!0,this.back.needsUpdate=!0}setArt(e,t){if(this.art[e]=t,t&&this.detail!=="art"){this.detail="art",this._resize(this.maxTex),this.compose("front"),this.compose("back");return}this.compose(e)}setOverlays(e){Object.assign(this.opts,e),this.compose()}compose(e){if(!e){this.compose("front"),this.compose("back");return}let t=this.canvas[e],n=t.getContext("2d"),s=this.pxPerMm,r=this.stock;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation="source-over",n.globalAlpha=1,n.fillStyle=e==="back"&&r.inside?r.inside:r.color,n.fillRect(0,0,t.width,t.height),(r.kind==="kraft"||r.kind==="corrugated"&&r.multiply)&&(n.globalAlpha=.09,n.globalCompositeOperation="multiply",n.fillStyle=n.createPattern(hp(256,150,11),"repeat"),n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="source-over",n.globalAlpha=1);let a=this.art[e];if(a){let o=this.layer[e],l=o.getContext("2d");l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,o.width,o.height),a(l,s,this.ext,e),n.globalCompositeOperation=r.multiply?"multiply":"source-over",n.drawImage(o,0,0),n.globalCompositeOperation="source-over"}if(r.felt){let o=n.createPattern(cp(512,31),"repeat");o.setTransform(new DOMMatrix().scale(Math.max(.6,s/5.5))),n.globalCompositeOperation="multiply",n.globalAlpha=.16,n.fillStyle=o,n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="screen",n.globalAlpha=.07,n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="source-over",n.globalAlpha=1}this._overlays(n,e),this.tex[e]&&(this.tex[e].needsUpdate=!0),this.onChange?.()}_toSheet(e,t){let n=this.pxPerMm;t==="back"?e.setTransform(-n,0,0,n,this.ext.w*n+this.ext.x0*n,-this.ext.y0*n):e.setTransform(n,0,0,n,-this.ext.x0*n,-this.ext.y0*n)}_overlays(e,t){let{die:n,opts:s}=this,r=this.pxPerMm,a=Math.max(.2,1.6/r),o=this.stock.dark;if(s.lines){this._toSheet(e,t),e.lineCap="round",e.fillStyle=fs.glue;for(let c of n.panels)c.role==="glue"&&(e.beginPath(),c.poly.forEach((h,d)=>d?e.lineTo(h[0],h[1]):e.moveTo(h[0],h[1])),e.closePath(),e.fill());e.setLineDash([]),e.strokeStyle=fs.cut,e.lineWidth=a*1.15,e.beginPath();for(let c of n.cuts)e.moveTo(c[0][0],c[0][1]),e.lineTo(c[1][0],c[1][1]);e.stroke();let l=Math.max(1.6,5/r);for(let c of n.creases)e.setLineDash([l*1.6,l]),e.strokeStyle=c.mountain?fs.mountain:fs.crease,e.lineWidth=a*1.1,e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.strokeStyle=fs.perf,e.setLineDash([l*.5,l*.7]);for(let c of[...n.perfs,...n.kiss])e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.setLineDash([])}if(s.safe){this._toSheet(e,t),e.strokeStyle=fs.safe,e.lineWidth=a,e.setLineDash([Math.max(1,3/r),Math.max(1,3/r)]);for(let l of n.panels){if(l.role!=="main"||l.area<300)continue;let c=l.bounds,h=n.safe;c.w<h*3||c.h<h*3||e.strokeRect(c.x0+h,c.y0+h,c.w-2*h,c.h-2*h)}e.setLineDash([])}if(s.labels){e.setTransform(1,0,0,1,0,0);let l=this.ext.w;for(let c of n.panels){if(c.role==="hidden")continue;let h=c.bounds;if(Math.min(h.w,h.h)<8)continue;let d=t==="back"?l-(c.centroid[0]-this.ext.x0):c.centroid[0]-this.ext.x0,u=c.centroid[1]-this.ext.y0,f=t==="back"&&c.nameIn||c.name||"",p=this.orient[c.id]?.[t]||0,m=p%180===0?h.w:h.h,g=Math.min(Math.max(2.4,Math.min(h.w,h.h)*.075),m/Math.max(4,f.length*.62));e.save(),e.translate(d*r,u*r),e.rotate(p*Math.PI/180),e.font=`500 ${g*r}px Outfit, Figtree, Arial, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=o?"#ffffff":c.role==="glue"?"#7a8aa8":fs.label,e.globalAlpha=c.role==="main"?.9:.6,e.fillText(f.toUpperCase(),0,0),e.restore()}}e.setTransform(1,0,0,1,0,0)}dispose(){this.tex?.front.dispose(),this.tex?.back.dispose(),this.bumpTex?.dispose(),this.fluteTex?.dispose(),this.front.dispose(),this.back.dispose(),this.edge.dispose()}};var Aa=Math.PI/180,cd=7,sc=new Be,dp=new Be,up=new Be,ps=new pt,xi=new C,rc=new C;function Rb(i,e){let t=i.map(a=>new he(a[0],a[1])),n=(e||[]).map(a=>a.map(o=>new he(o[0],o[1])));Di.isClockWise(t)&&t.reverse();for(let a of n)Di.isClockWise(a)||a.reverse();let s=Di.triangulateShape(t,n),r=[...t];for(let a of n)r.push(...a);return{pts:r,tris:s}}function Cb(i,e,t,n=8){let{pts:s,tris:r}=Rb(i.poly,i.holes),a=-(i.zOff||0),o=[],l=[],c=[],h=[],d=[],u=[],f=s.length;for(let g of s){o.push(g.x,-g.y,a),l.push(0,0,1);let[v,b]=t(g.x,g.y);c.push(v,b)}for(let g of s){o.push(g.x,-g.y,a-e),l.push(0,0,-1);let[v,b]=t(g.x,g.y);c.push(1-v,b)}for(let g of r){let[v,b,y]=g,T=s[v].x,E=-s[v].y;(s[b].x-T)*(-s[y].y-E)-(-s[b].y-E)*(s[y].x-T)<0&&([b,y]=[y,b]),h.push(v,b,y),d.push(y+f,b+f,v+f)}let p=g=>{let v=0,y=Di.area(g.map(T=>new he(T[0],-T[1])))>=0?1:-1;for(let T=0;T<g.length;T++){let E=g[T],x=g[(T+1)%g.length],S=x[0]-E[0],L=-(x[1]-E[1]),R=Math.hypot(S,L);if(R<1e-6)continue;let I=L/R*y,N=-S/R*y,F=o.length/3;o.push(E[0],-E[1],a,x[0],-x[1],a,x[0],-x[1],a-e,E[0],-E[1],a-e);for(let V=0;V<4;V++)l.push(I,N,0);let P=v/n,O=(v+R)/n;c.push(P,1,O,1,O,0,P,0),v+=R,y>0?u.push(F,F+3,F+2,F,F+2,F+1):u.push(F,F+2,F+3,F,F+1,F+2)}};p(i.poly);for(let g of i.holes||[])p(g);let _=new St;_.setAttribute("position",new Ye(o,3)),_.setAttribute("normal",new Ye(l,3)),_.setAttribute("uv",new Ye(c,2));let m=[...h,...d,...u];return _.setIndex(m),_.addGroup(0,h.length,0),_.addGroup(h.length,d.length,1),_.addGroup(h.length+d.length,u.length,2),_.computeBoundingSphere(),_}var ac=class{constructor(e,{thickness:t,materials:n,uvOf:s,flute:r,leafMaterials:a,leafT:o}){this.kind="fold",this.die=e,this.t=t,this.materials=n,this.uvOf=s,this.object=new it,this.object.name="fold-model",this.nodes=[],this.byId={},this.pickables=[],this.flute=r,this.channels=[],this.leafMaterials=a,this.leafT=o,this.outlineMat=new Hs({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}),this._build(),this.apply(this.vector("flat"))}_build(){let{die:e,t}=this;for(let n of e.panels){let s=new it;s.matrixAutoUpdate=!1;let r=n.parent?this.byId[n.parent]:null;(r?r.group:this.object).add(s);let a=n.uvRect?(u,f)=>[(u-n.uvRect.x)/n.uvRect.w,1-(f-n.uvRect.y)/n.uvRect.h]:this.uvOf,o=n.role==="leaf"&&!n.coverLeaf&&this.leafMaterials?this.leafMaterials(n):this.materials,l=n.role==="leaf"&&this.leafT?this.leafT:t,c=new Ae(Cb(n,l,a,this.flute?this.flute:8),o);c.castShadow=!0,c.receiveShadow=!0,c.userData.panel=n.id,s.add(c),this.pickables.push(c),n.outline?.length&&s.add(this._outline(n));let h={panel:n,group:s,mesh:c,parent:r,angle:0,world:new Be};this.nodes.push(h),this.byId[n.id]=h,n.hinge&&this._hinge(h),n.mount&&this._mount(h);let d=Math.max(1,Math.floor(n.poly.length/14));h.sample=n.poly.filter((u,f)=>f%d===0).map(u=>new C(u[0],-u[1],0))}this.steps=[...new Set(e.panels.filter(n=>n.seq).map(n=>n.seq))].sort((n,s)=>n-s)}_outline(e){let t=Math.max(.04,this.t*.2),n=[];for(let[r,a]of e.outline)n.push(r[0],-r[1],t,a[0],-a[1],t),n.push(r[0],-r[1],-this.t-t,a[0],-a[1],-this.t-t);let s=new St;return s.setAttribute("position",new Ye(n,3)),new zr(s,this.outlineMat)}_hinge(e){let{t}=this,n=e.panel,s=new C(n.hinge.a[0],-n.hinge.a[1],0),r=new C(n.hinge.b[0],-n.hinge.b[1],0),a=r.clone().sub(s).normalize(),o=new C(n.centroid[0],-n.centroid[1],0).sub(s);new C().crossVectors(a,o).z>0&&a.negate();let l=n.valley??(n.angle??0)>=0,c=(n.gap||0)*t+(n.lift||0),h=n.pivotZ!==void 0?n.pivotZ:l?-t-c/2:c/2,d=s.clone();if(d.z=h,e.axis=a,e.pivot=d,e.valley=l,e.A=s,e.B=r,e.pre=new Be().makeTranslation(d.x,d.y,d.z),e.post=new Be().makeTranslation(-d.x,-d.y,-d.z),n.bead===!1||n.perfed)return;let u=this._bead(e);u&&(e.parent?e.parent.group:this.object).add(u)}_bead(e){let t=cd,n=t+1,s=n*2*2+8,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*2),l=[],c=[],h=[];for(let T=0;T<t;T++){let E=T*2;l.push(E,E+2,E+3,E,E+3,E+1);let x=n*2+T*2;c.push(x,x+3,x+2,x,x+1,x+3)}let d=new St;d.setAttribute("position",new Pt(r,3)),d.setAttribute("normal",new Pt(a,3)),d.setAttribute("uv",new Pt(o,2)),d.setIndex([...l,...c,...h]);let u=e.valley?0:1,f=e.valley?1:0;d.addGroup(0,l.length,u),d.addGroup(l.length,c.length,f);let p=new Ae(d,this.materials);p.castShadow=!1,p.receiveShadow=!0,p.frustumCulled=!1,p.matrixAutoUpdate=!1,p.visible=!1,e.bead=p;let _=e.panel,[m,g]=this.uvOf(_.hinge.a[0],_.hinge.a[1]),[v,b]=this.uvOf(_.hinge.b[0],_.hinge.b[1]),y=(T,E,x)=>{for(let S=0;S<n;S++){let L=T+S*2;o[L*2]=E?1-m:m,o[L*2+1]=g,o[(L+1)*2]=E?1-v:v,o[(L+1)*2+1]=b}};return y(0,!e.valley),y(n*2,e.valley),p}_updateBead(e,t){let n=e.bead;if(!n)return;if(Math.abs(t)<.05||this.t<.02){n.visible=!1;return}n.visible=!0;let{t:s}=this,{A:r,B:a,pivot:o,axis:l,valley:c}=e,h=t*Aa,d=n.geometry,u=d.attributes.position.array,f=d.attributes.normal.array,p=cd+1,_=c?1:-1,m=c?0:-s,g=c?-s:0,v=m-o.z,b=g-o.z,y=(T,E,x)=>{for(let S=0;S<p;S++){let L=h*S/cd;ps.setFromAxisAngle(l,L),xi.set(0,0,E).applyQuaternion(ps),rc.set(0,0,_*x).applyQuaternion(ps);let R=T+S*2;u[R*3]=r.x+xi.x,u[R*3+1]=r.y+xi.y,u[R*3+2]=o.z+xi.z,u[(R+1)*3]=a.x+xi.x,u[(R+1)*3+1]=a.y+xi.y,u[(R+1)*3+2]=o.z+xi.z,f[R*3]=f[(R+1)*3]=rc.x,f[R*3+1]=f[(R+1)*3+1]=rc.y,f[R*3+2]=f[(R+1)*3+2]=rc.z}};y(0,v,1),y(p*2,b,-1),d.attributes.position.needsUpdate=!0,d.attributes.normal.needsUpdate=!0}_mount(e){let t=e.panel,n=t.mount;e.mountTo={pos:new C(...n.pos||[0,0,0]),q:new pt().setFromEuler(new nn((n.rot?.[0]||0)*Aa,(n.rot?.[1]||0)*Aa,(n.rot?.[2]||0)*Aa)),center:new C(...n.center||[t.centroid[0],-t.centroid[1],0]),arc:n.arc||0,slide:n.slide?new C(...n.slide):null}}vector(e){return[...this.nodes.map(n=>{let s=n.panel;return s.mount?e==="flat"||e==="inside"?0:e==="open"&&s.mount.openAt!==void 0?s.mount.openAt:1:!s.hinge||e==="flat"||e==="inside"?0:e==="open"?s.open??s.angle:s.angle}),...this.channels.map(n=>n.value(e))]}windows(e,t,n){let s=new Set,r=[...this.nodes.map(h=>h.panel.seq||1),...this.channels.map(h=>h.seq||1)];r.forEach((h,d)=>{Math.abs(e[d]-t[d])>.01&&s.add(h)});let a=[...s].sort((h,d)=>n>0?h-d:d-h),o=Math.max(1,a.length),l=o===1?1:Math.min(1,1.5/o),c=h=>o===1?0:h*(1-l)/(o-1);return{steps:o,list:r.map(h=>{let d=a.indexOf(h);return d<0?[0,1]:[c(d),c(d)+l]})}}apply(e){this.vec=e;for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t],s=e[t];if(n.axis)ps.setFromAxisAngle(n.axis,s*Aa),sc.makeRotationFromQuaternion(ps),n.group.matrix.copy(n.pre).multiply(sc).multiply(n.post),n.group.matrixWorldNeedsUpdate=!0,this._updateBead(n,s);else if(n.mountTo){let r=n.mountTo,a=r.center,o=r.slide?Math.min(1,s/.55):s,l=r.slide?Math.max(0,(s-.55)/.45):0;ps.identity().slerp(r.q,o),sc.makeRotationFromQuaternion(ps),dp.makeTranslation(-a.x,-a.y,-a.z);let c=Math.sin(Math.PI*o)*r.arc,h=r.slide?r.slide.x*(1-l):0,d=r.slide?r.slide.y*(1-l):0,u=r.slide?r.slide.z*(1-l):0,f=cs.lerp(a.x,r.pos.x+h,o),p=cs.lerp(a.y,r.pos.y+d,o),_=cs.lerp(a.z,r.pos.z+u,o)-c;up.makeTranslation(f,p,_),n.group.matrix.copy(up).multiply(sc).multiply(dp),n.group.matrixWorldNeedsUpdate=!0}}this.channels.forEach((t,n)=>t.apply(e[this.nodes.length+n]))}bounds(e){let t=this.vec;this.apply(e);let n=new bt,s=this.t;for(let r of this.nodes){r.world.copy(r.group.matrix),r.parent&&r.world.premultiply(r.parent.world);let a=-(r.panel.zOff||0);for(let o of r.sample)for(let l of[a,a-s])xi.set(o.x,o.y,l).applyMatrix4(r.world),n.expandByPoint(xi)}for(let r of this.extraBounds||[])n.union(r(e));return this.apply(t),n}panelMatrix(e,t){let n=this.vec;this.apply(t);let s=[],r=this.byId[e];for(;r;)s.unshift(r),r=r.parent;let a=new Be;for(let o of s)a.multiply(o.group.matrix);return this.apply(n),a}dispose(){this.object.traverse(e=>{e.geometry&&e.geometry.dispose()})}};var fp=()=>new Qe({color:"#c9cacd",metalness:1,roughness:.32}),Ra=i=>i==="flat"||i==="inside"?0:1;function pp(i,e,t,n=80){let s=new Li(i,!1,"catmullrom",.5),r=new Ae(new ss(s,n,e,8,!1),t);return r.castShadow=!0,r}function mp(i,e,t){let n=i.t,s=i.nodes[0];for(let r of e.extras){let a=r.panel?i.byId[r.panel]:s;if(r.type==="stack"){let o=new it;a.group.add(o);let l=s.panel.centroid,c=[],h=4,d=()=>(h=h*16807%2147483647,h%2e3/1e3-1);for(let p=0;p<r.count;p++){let _=new Ae(s.mesh.geometry,i.materials);_.castShadow=!0,_.receiveShadow=!0;let m=new it;m.position.set(l[0],-l[1],0),_.position.set(-l[0],l[1],0),m.add(_),o.add(m),c.push({piv:m,dx:d()*r.spread,dy:d()*r.spread,rz:d()*.022,i:p})}let u=Math.max(n*1.02,.01),f=i.channels.length;i.channels.push({seq:1,value:Ra,apply(p){o.visible=p>.01;for(let _ of c)_.piv.position.set(l[0]+_.dx*p,-l[1]+_.dy*p,-(_.i+1)*u),_.piv.rotation.z=_.rz*p}}),i.extraBounds=i.extraBounds||[],i.extraBounds.push(p=>{let _=p[i.nodes.length+f]??0,m=new bt;return m.min.set(0,-e.h,-(r.count+1)*u*(_>.01?1:0)),m.max.set(e.w,0,0),m})}else if(r.type==="string"){let[o,l]=r.at,c=r.len,h=new Qe({color:r.color||"#d8cdb8",roughness:.9}),d=.6,u=[[o,-l,-n-.2],[o,-l,d],[o+c*.1,-l+c*.12,d+.2],[o+c*.34,-l+c*.42,d+.3],[o+c*.3,-l+c*.66,d+.3],[o+c*.02,-l+c*.62,d+.3],[o-c*.2,-l+c*.44,d+.25],[o-c*.06,-l+c*.14,d+.2],[o,-l,d]].map(p=>new C(...p)),f=pp(u,Math.max(.35,c*.005),h);a.group.add(f),i.channels.push({seq:1,value:Ra,apply:p=>f.visible=p>.5})}else if(r.type==="rope"){let l=a.panel.bounds,c=l.x0+l.w/2,h=-l.y0,d=r.span/2,u=r.radius||Math.max(1.8,r.width*.0075),f=new Qe({color:r.color||"#1b1b1d",roughness:.8}),p=2,_=r.tilt??0,m=[[c-d,h-34,p*0-n-1],[c-d,h-18,p],[c-d*1.02,h+r.drop*.34,p+_*.4],[c-d*.72,h+r.drop*.82,p+_*.8],[c,h+r.drop,p+_],[c+d*.72,h+r.drop*.82,p+_*.8],[c+d*1.02,h+r.drop*.34,p+_*.4],[c+d,h-18,p],[c+d,h-34,-n-1]].map(y=>new C(...y)),g=pp(m,u,f,96),v=new it;v.position.set(c,h,0),g.position.set(-c,-h,0),v.add(g),a.group.add(v);let b=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(y=>{let T=new bt;return(y[i.nodes.length+b]??0)>.5&&(T.min.set(c-d,h,-2),T.max.set(c+d,h+r.drop,2)),T});for(let y of[-d,d]){let T=new Ae(new pn(u*1.9,u*.5,10,28),fp());T.position.set(c+y,h-26,.5),a.group.add(T)}i.channels.push({seq:8,value:Ra,apply(y){v.visible=y>.02,v.scale.set(1,Math.max(.02,y),1)}})}else if(r.type==="film"){let o=r.rect,l=new di(o.w+6,o.h+6),c=new Ae(l,new en({color:"#ffffff",transparent:!0,opacity:.22,roughness:.12,side:rn,depthWrite:!1}));c.position.set(o.x+o.w/2,-(o.y+o.h/2),-n-.03),a.group.add(c)}else if(r.type==="staples"){let o=fp();for(let l of r.ys){let c=new ns(.28,r.len,4,8),h=new Ae(c,o);h.position.set(r.x,-l,.08),h.castShadow=!0,a.group.add(h)}}else if(r.type==="wire"){let o=new Qe({color:r.color||"#16161a",metalness:.8,roughness:.35}),[l,c]=r.a,[h,d]=r.b,u=Math.max(2,Math.floor(Math.hypot(h-l,d-c)/r.pitch)),f=r.r,p=new pn(f,Math.max(.32,f*.075),8,32),_=new ts(p,o,u*2),m=new At,g=Math.abs(d-c)<Math.abs(h-l);for(let v=0;v<u;v++){let b=(v+.5)/u;for(let y=0;y<2;y++){let T=y?r.pitch*.16:-r.pitch*.16;m.position.set(l+(h-l)*b+(g?T:0)+(r.ox||0),-(c+(d-c)*b+(g?0:T)+(r.oy||0)),r.z??-r.h/2),m.rotation.set(0,g?Math.PI/2:0,0),m.rotation.set(g?0:Math.PI/2,g?Math.PI/2:0,0),m.updateMatrix(),_.setMatrixAt(v*2+y,m.matrix)}}_.castShadow=!0,_.frustumCulled=!1,a.group.add(_),i.channels.push({seq:1,value:r.always?()=>1:Ra,apply:v=>_.visible=v>.5})}else if(r.type==="block"){let o=new Ae(new sn(r.size[0],r.size[1],r.size[2]),new Qe({color:r.color||"#d8d4ca",roughness:.75}));o.castShadow=!0,o.position.set(r.pos[0],r.pos[1],r.pos[2]),a.group.add(o);let l=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(c=>{let h=new bt;return(c[i.nodes.length+l]??0)>.5&&(h.min.set(r.pos[0]-r.size[0]/2,r.pos[1]-r.size[1]/2,r.pos[2]-r.size[2]/2),h.max.set(r.pos[0]+r.size[0]/2,r.pos[1]+r.size[1]/2,r.pos[2]+r.size[2]/2)),h}),i.channels.push({seq:r.seq||3,value:Ra,apply(c){o.visible=c>.01,o.position.x=r.pos[0]+(1-c)*(r.size[0]*1.2)}})}else if(r.type==="insert"){let l=a.panel.bounds,c=new Ae(new sn(r.size[0],r.size[1],Math.max(.3,n)),new Qe({color:"#fbfaf6",roughness:.65}));c.castShadow=!0,c.receiveShadow=!0;let h=l.x0+l.w/2,d=-(l.y0+l.h/2);c.position.set(h,d,-n-(r.z??.4)),a.group.add(c),i.channels.push({seq:9,value:u=>u==="open"?1:0,apply(u){c.visible=u>.01,c.position.y=d-(r.at==="pocket"?(l.h-r.size[1])/2*(1-u)*-1+(l.h-r.size[1])/2:0)+(r.rise||0)*u}})}else r.type==="custom"&&r.build(i,a,t)}}var Ib={...jh,...Qh,...td,...nd,...id,...rd,...ad,...ld};function Pb(i,e){return i.sizes.find(t=>t.id===e)||i.sizes.find(t=>t.id===i.def)||i.sizes[0]}function lc(i,e,t={}){let n=ir[i];if(!n)throw new Error(`Unknown format ${i}`);let s=Pb(n,e),r=t.stock&&n.stocks.includes(t.stock)?t.stock:n.stocks[0],a=ds[r],o=t.finish&&n.finishes.includes(t.finish)?t.finish:n.finishes[0],l={...s.p};n.pageOptions&&(l.pages=t.pages&&n.pageOptions.includes(+t.pages)?+t.pages:n.defPages),"L"in l&&l.t===void 0&&(l.t=a.mm);let c=Ib[n.tpl];if(!c)throw new Error(`Unknown template ${n.tpl}`);let h=c(l);return{format:n,size:s,stockId:r,finishId:o,stock:a,die:h,params:l}}var oc=class{constructor(){this.edge=new Qe({color:"#efece4",roughness:.9}),this.pages=new Map,this.textures=new Map,this.blank=new Qe({color:"#fbfaf6",roughness:.72})}material(e){return e?(this.pages.has(e)||this.pages.set(e,new Qe({color:"#fbfaf6",roughness:.72})),this.pages.get(e)):this.blank}setPage(e,t){let n=this.material(e),s=this.textures.get(e);if(s&&s.dispose(),!t)n.map=null,n.color.set("#fbfaf6");else{let r=new fn(t);r.colorSpace=Mt,r.anisotropy=8,this.textures.set(e,r),n.map=r,n.color.set("#ffffff")}n.needsUpdate=!0}dispose(){for(let e of this.textures.values())e.dispose();for(let e of this.pages.values())e.dispose();this.edge.dispose(),this.blank.dispose()}};function gp(i,{surface:e,pages:t}){let{die:n,stock:s}=i,r=Math.max(n.meta.thick||0,s.mm,Math.max(n.w,n.h)*28e-5);if(n.meta.edge&&e.edge.color.set(n.meta.edge),n.warp)return new ec(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,surface:e});let a=n.meta.leafT,o=new ac(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,flute:s.flute,leafT:a,leafMaterials:l=>[t.material(l.pageFront),t.material(l.pageBack),t.edge]});return mp(o,n,e),o.apply(o.vector("flat")),o}function _p(i,e={}){return new ic(i.die,{stock:i.stockId,finish:i.finishId,...e})}function hd(i,e,t,n={front:"closed",back:"closed"}){let s={};if(!e.panelMatrix){for(let l of t.panels)s[l.id]={front:0,back:0};return s}let r={};for(let l of["front","back"]){let c=i._info(n[l]||"closed");r[l]={info:c,R:new Be().makeRotationFromQuaternion(c.q)}}let a=new C,o=new C;for(let l of t.panels){let c={};for(let h of["front","back"]){let{info:d,R:u}=r[h],f=e.panelMatrix(l.id,d.vec),p=new Be().multiplyMatrices(u,f);a.set(0,0,h==="front"?1:-1).transformDirection(p);let _=Math.abs(a.y)>.72?new C(0,0,-1):new C(0,1,0),m=0,g=-1/0;for(let v of[0,90,180,270]){let b=v*Math.PI/180,y=h==="front"?Math.sin(b):-Math.sin(b);o.set(y,Math.cos(b),0).transformDirection(p);let T=o.dot(_);T>g+1e-6&&(g=T,m=v)}c[h]=m}s[l.id]=c}return s}var Lb="#0b0f1a",Db="#0051FF";function Nb(i,e,t,n,s){let r=s;i.font=`${t} ${r}px Outfit, Figtree, Arial, sans-serif`;let a=i.measureText(e).width;return a>n&&(r*=n/a),r}function dd(i,e,t,n,s,r){let a=e.bounds,o=(r?t.w-(a.x0+a.w/2-t.x0):a.x0+a.w/2-t.x0)*n,l=(a.y0+a.h/2-t.y0)*n;i.setTransform(1,0,0,1,0,0),i.translate(o,l),i.rotate(s*Math.PI/180);let c=s%180!==0;return{W:(c?a.h:a.w)*n,H:(c?a.w:a.h)*n}}function xp(i,e,t="OK DESIGN"){return{front:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0);let h=r.createLinearGradient(0,0,l,c);h.addColorStop(0,"#02040c"),h.addColorStop(.55,"#031235"),h.addColorStop(1,"#000000"),r.fillStyle=h,r.fillRect(0,0,l,c);let d=(m,g,v,b)=>{let y=r.createRadialGradient(m,g,0,m,g,v);y.addColorStop(0,b),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(0,0,l,c)},u=Math.max(l,c);d(l*.82,c*.22,u*.62,"rgba(0,81,255,0.95)"),d(l*.12,c*.92,u*.52,"rgba(120,140,190,0.55)"),d(l*.5,c*.5,u*.3,"rgba(0,40,160,0.5)");let f=i.panels.filter(m=>m.role==="main"&&m.bounds),p=f.filter(m=>m.cover),_=p.length?p:f.slice().sort((m,g)=>g.area-m.area).slice(0,1);for(let m of _){let g=e[m.id]?.front||0,v=dd(r,m,o,a,g,!1);r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let b=Nb(r,t,800,v.W*.72,v.H*.2);r.font=`800 ${b}px Outfit, Figtree, Arial, sans-serif`,r.fillText(t,0,-b*.1);let y="Full-stack design studio",T=Math.max(b*.17,2*a);r.font=`500 ${T}px Outfit, Figtree, Arial, sans-serif`,r.globalAlpha=.72,r.fillText(y,0,b*.72),r.globalAlpha=1}for(let m of f){if(_.includes(m)||m.area<900)continue;let g=e[m.id]?.front||0,v=dd(r,m,o,a,g,!1);r.fillStyle="rgba(255,255,255,0.78)",r.textAlign="center",r.textBaseline="middle";let b=Math.min(v.W,v.H)*.05;r.font=`600 ${b}px Outfit, Figtree, Arial, sans-serif`,r.fillText("okdesign.cc",0,0)}r.setTransform(1,0,0,1,0,0)},back:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0),r.fillStyle="#f7f6f2",r.fillRect(0,0,l,c);let h=i.panels.filter(d=>d.role==="main"&&d.area>1200&&d.bounds);for(let d of h){let u=e[d.id]?.back||0,f=dd(r,d,o,a,u,!0),p=Math.min(f.W,f.H)*.12,_=-f.W/2+p,m=-f.H/2+p,g=f.W-2*p;r.fillStyle=Db,r.textAlign="left",r.textBaseline="top";let v=Math.min(f.W,f.H)*.085;r.font=`700 ${v}px Outfit, Figtree, Arial, sans-serif`,r.fillText((d.nameIn||"Inside").slice(0,24),_,m),r.fillStyle=Lb,r.globalAlpha=.13;let b=v*.72,y=m+v*1.8,T=0;for(;y<f.H/2-p;){let E=g*(T%5===4?.55:T%3===2?.86:.97);r.fillRect(_,y,E,b*.34),y+=b,T++}r.globalAlpha=1}r.setTransform(1,0,0,1,0,0)}}}function pr(){let i=document.querySelector('script[src*="viewer.js"], script[src*="print-lab.js"]');return i?new URL(".",i.src).href:"/viewer/"}var mr=25.4/72,kb=40;function vp(i){return new Promise((e,t)=>{let n=document.createElement("script");n.src=i,n.onload=e,n.onerror=()=>t(new Error(`Could not load ${i}`)),document.head.appendChild(n)})}var cc=null;function Fb(){if(cc)return cc;let i=pr();return cc=(async()=>{await vp(`${i}vendor/pdf.min.js`);let e=window.pdfjsLib;return location.protocol==="file:"?await vp(`${i}vendor/pdf.worker.min.js`):e.GlobalWorkerOptions.workerSrc=`${i}vendor/pdf.worker.min.js`,e})(),cc}function Ub(i){let e=i.length>4e6?i.subarray(0,4e6):i,t=new TextDecoder("latin1").decode(e),n=/\/TrimBox\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*\]/.exec(t);if(!n)return null;let[s,r,a,o]=n.slice(1).map(Number);return{x0:s,y0:r,x1:a,y1:o}}function yp(i,e){return{source:i,w:i.width,h:i.height,mmW:null,mmH:null,name:e}}async function Ob(i){if(/svg/.test(i.type)||/\.svg$/i.test(i.name)){let n=await i.text(),s=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"})),r=new Image;await new Promise((h,d)=>{r.onload=h,r.onerror=()=>d(new Error("This SVG could not be read.")),r.src=s});let a=3e3/Math.max(r.naturalWidth||1e3,r.naturalHeight||1e3),o=document.createElement("canvas");o.width=Math.round((r.naturalWidth||1e3)*a),o.height=Math.round((r.naturalHeight||1e3)*a),o.getContext("2d").drawImage(r,0,0,o.width,o.height),URL.revokeObjectURL(s);let l=/<svg[^>]*\swidth="([\d.]+)mm"[^>]*\sheight="([\d.]+)mm"/.exec(n),c=yp(o,i.name);return l&&(c.mmW=+l[1],c.mmH=+l[2]),{kind:"svg",name:i.name,pages:[c]}}let t=await createImageBitmap(i);return{kind:"image",name:i.name,pages:[yp(t,i.name)]}}async function Bb(i,{maxSide:e=4096,onProgress:t}={}){let n=await Fb(),s=new Uint8Array(await i.arrayBuffer()),r=Ub(s),a=await n.getDocument({data:s.slice()}).promise,o=[],l=Math.min(a.numPages,kb);for(let c=1;c<=l;c++){let h=await a.getPage(c),d=h.getViewport({scale:1}),u=c<=2||c===l?e:Math.min(e,1800),f=Math.min(u/Math.max(d.width,d.height),300/72),p=h.getViewport({scale:f}),_=document.createElement("canvas");_.width=Math.ceil(p.width),_.height=Math.ceil(p.height),await h.render({canvasContext:_.getContext("2d"),viewport:p,background:"rgb(255,255,255)"}).promise;let m={source:_,w:_.width,h:_.height,mmW:d.width*mr,mmH:d.height*mr,name:`${i.name} p.${c}`};if(r){let[g,v,b,y]=h.view;m.trim={w:(r.x1-r.x0)*mr,h:(r.y1-r.y0)*mr,cx:((r.x0+r.x1)/2-(g+b)/2)*mr,cy:((r.y0+r.y1)/2-(v+y)/2)*mr}}o.push(m),t?.(c,l)}return{kind:"pdf",name:i.name,pages:o,total:a.numPages}}async function bp(i,e){if(/pdf/.test(i.type)||/\.pdf$/i.test(i.name))return Bb(i,e);if(/^image\//.test(i.type)||/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(i.name))return Ob(i);throw new Error(`${i.name} is not a PDF or image.`)}function ud(i,e,t){let n=t.w,s=t.h,r=(f,p,_=1.5)=>Math.abs(f-p)<=_,a={page:i,cx:e.w/2,cy:e.h/2,rot:0,fit:"bleed",mirror:!1},o=f=>{a.mmPerPx=f};if(i.mmW){let f=i.mmW/i.w,p=!r(i.mmW,e.w,8)&&r(i.mmH,e.w,8)&&r(i.mmW,e.h,8);p&&(a.rot=90);let _=p?i.mmH:i.mmW,m=p?i.mmW:i.mmH;if(i.trim&&r(i.trim.w,n,2)&&r(i.trim.h,s,2))return o(f),a.cx-=i.trim.cx,a.cy+=i.trim.cy,a.fit="trimbox",a;if(r(_,e.w)&&r(m,e.h))return o(f),a.fit="bleed",a;if(r(_,n)&&r(m,s))return o(f),a.fit="trim",a;let g=(b,y)=>Math.abs(b/y-1)<.006,v=g(_/m,e.w/e.h)||g(_/m,n/s);if(v&&(a.scaled=!0),!v&&_>=e.w&&m>=e.h)return o(f),a.fit="marks",a}let l=a.rot?i.h:i.w,c=a.rot?i.w:i.h,h=l/c,d=e.w/e.h,u=n/s;return Math.abs(h/u-1)<Math.abs(h/d-1)*.8?(o(Math.max(n/l,s/c)),a.fit="trim"):(o(Math.max(e.w/l,e.h/c)),a.fit="bleed"),a}function fd(i,e,t,n){let s=i.rot%180!==0,r=s?i.page.h:i.page.w,a=s?i.page.w:i.page.h;i.cx=t.w/2,i.cy=t.h/2,e==="bleed"&&(i.mmPerPx=Math.max(t.w/r,t.h/a)),e==="trim"&&(i.mmPerPx=Math.max(n.w/r,n.h/a)),e==="contain"&&(i.mmPerPx=Math.min(t.w/r,t.h/a)),e==="actual"&&i.page.mmW&&(i.mmPerPx=i.page.mmW/i.page.w),i.fit=e}function Mp(i,e,t){let{page:n}=t;i.setTransform(e,0,0,e,0,0),i.translate(t.cx,t.cy),i.rotate(t.rot*Math.PI/180),i.scale(t.mmPerPx,t.mmPerPx),i.imageSmoothingQuality="high",i.drawImage(n.source,-n.w/2,-n.h/2,n.w,n.h),i.setTransform(1,0,0,1,0,0)}function Sp(i,e,t,n,s,r,a){let o=s.byId[n.panel];if(!o)return;let l=a==="back",c=m=>(l?t.w-(m-t.x0):m-t.x0)*e,h=m=>(m-t.y0)*e;i.save(),i.setTransform(1,0,0,1,0,0),i.beginPath(),o.poly.forEach((m,g)=>g?i.lineTo(c(m[0]),h(m[1])):i.moveTo(c(m[0]),h(m[1]))),i.closePath(),i.clip();let d=o.bounds,u=r[o.id]?.[a]||0;i.translate(c(d.x0+d.w/2),h(d.y0+d.h/2)),i.rotate(u*Math.PI/180);let f=(u%180?d.h:d.w)*e,p=(u%180?d.w:d.h)*e,_=Math.max(f/n.page.w,p/n.page.h);i.imageSmoothingQuality="high",i.drawImage(n.page.source,-n.page.w*_/2,-n.page.h*_/2,n.page.w*_,n.page.h*_),i.restore()}function wp(i,e,t){let n=[],{page:s}=i,r=s.w*i.mmPerPx,a=Math.round(s.w/r*25.4);a>=280?n.push({level:"ok",text:`\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 ${a} ppi: \u0433\u043E\u0434\u0438\u0442\u0441\u044F \u0438 \u0434\u043B\u044F \u043F\u0435\u0447\u0430\u0442\u0438`}):a>=90?n.push({level:"warn",text:`\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 ${a} ppi: \u0434\u043B\u044F 3D-\u043F\u0440\u0435\u0432\u044C\u044E \u0445\u043E\u0440\u043E\u0448\u043E, \u0434\u043B\u044F \u043F\u0435\u0447\u0430\u0442\u0438 \u043D\u0443\u0436\u043D\u043E 300`}):n.push({level:"bad",text:`\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 ${a} ppi: \u043C\u0430\u043B\u043E \u0434\u0430\u0436\u0435 \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E, \u0431\u0443\u0434\u0435\u0442 \u043C\u044B\u043B\u044C\u043D\u043E`});let o=i.rot%180!==0,l=(o?s.h:s.w)*i.mmPerPx,c=(o?s.w:s.h)*i.mmPerPx,h=i.cx-l/2,d=i.cx+l/2,u=i.cy-c/2,f=i.cy+c/2,p=.3,_=h<=p&&u<=p&&d>=e.w-p&&f>=e.h-p,m=t.bleed,g=h<=m+p&&u<=m+p&&d>=e.w-m-p&&f>=e.h-m-p;if(_?n.push({level:"ok",text:`\u0412\u044B\u043B\u0435\u0442\u044B ${m} \u043C\u043C \u043D\u0430 \u043C\u0435\u0441\u0442\u0435`}):g?n.push({level:"warn",text:`\u0414\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u043E \u043B\u0438\u043D\u0438\u0438 \u0440\u0435\u0437\u0430, \u043D\u043E \u0431\u0435\u0437 \u0432\u044B\u043B\u0435\u0442\u043E\u0432 ${m} \u043C\u043C`}):n.push({level:"bad",text:"\u041C\u0430\u043A\u0435\u0442 \u043D\u0435 \u043F\u043E\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u0435\u0441\u044C \u043B\u0438\u0441\u0442"}),s.mmW){let v={trimbox:"\u041D\u0430\u0439\u0434\u0435\u043D TrimBox, \u043C\u0435\u0442\u043A\u0438 \u0440\u0435\u0437\u0430 \u043D\u0435 \u043C\u0435\u0448\u0430\u044E\u0442",bleed:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B = \u043B\u0438\u0441\u0442 \u0441 \u0432\u044B\u043B\u0435\u0442\u0430\u043C\u0438",trim:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B = \u043E\u0431\u0440\u0435\u0437\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 (\u0431\u0435\u0437 \u0432\u044B\u043B\u0435\u0442\u043E\u0432)",marks:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043B\u0438\u0441\u0442\u0430: \u0441\u0442\u043E\u0438\u0442 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435"};n.push(i.scaled?{level:"ok",text:"\u041F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438 \u043B\u0438\u0441\u0442\u0430 \u0441\u043E\u0432\u043F\u0430\u043B\u0438, \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \u043F\u043E\u0434\u043E\u0433\u043D\u0430\u043D"}:{level:v[i.fit]?"ok":"warn",text:v[i.fit]||`\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${ar(s.mmW,s.mmH)} \u043C\u043C, \u0430 \u043B\u0438\u0441\u0442 \u0441 \u0432\u044B\u043B\u0435\u0442\u0430\u043C\u0438 ${ar(e.w,e.h)} \u043C\u043C`})}else{let v=(o?s.h/s.w:s.w/s.h)/(e.w/e.h);Math.abs(v-1)>.03&&n.push({level:"warn",text:"\u041F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 \u0441 \u043B\u0438\u0441\u0442\u043E\u043C, \u043A\u0440\u0430\u044F \u043E\u0431\u0440\u0435\u0436\u0443\u0442\u0441\u044F"})}return n}var ln=18,Ep={bleed:{label:"Bleed",stroke:"#16d67b"},cut:{label:"Cut",stroke:"#ff2d87"},fold:{label:"Fold (valley)",stroke:"#16a7ff"},mountain:{label:"Fold (mountain)",stroke:"#ffb020"},perf:{label:"Perforation / kiss cut",stroke:"#8a4dff"},safe:{label:"Safe zone",stroke:"#9aa0a6"}},pd={front:"OUTSIDE, print side A (page 1 of the print PDF)",back:"INSIDE, print side B, mirrored as it prints (page 2 of the print PDF)"};function dc(i){return`${i.format.name} / ${i.size.label}`.replace(/[^\x20-\x7e×→]/g,"")}function Tp(i){let e=[];for(let t of i.panels){if(t.role!=="main"||t.area<300)continue;let n=t.bounds,s=i.safe;n.w<s*3||n.h<s*3||e.push([n.x0+s,n.y0+s,n.w-2*s,n.h-2*s])}return e}function Ap(i,e){let t=e==="back",n=o=>t?i.w-o:o,s=o=>[n(o[0]),o[1]];return{back:t,mx:n,pt:s,seg:(o,l)=>[s(o),s(l)],rect:([o,l,c,h])=>t?[i.w-o-c,l,c,h]:[o,l,c,h]}}function Rp(i,e,t){return i.panels.filter(n=>n.role!=="leaf"&&n.role!=="hidden"&&Math.min(n.bounds.w,n.bounds.h)>8).map(n=>({p:n,name:e==="back"&&n.nameIn||n.name||n.id,rot:t?.[n.id]?.[e]??null,arrow:!!t&&n.role==="main"&&Math.min(n.bounds.w,n.bounds.h)>16,k:Math.max(1,Math.min(3.2,Math.min(n.bounds.w,n.bounds.h)/48))}))}function Cp(i,{side:e="front",orient:t=null}={}){let{die:n}=i,s=Ap(n,e),r=n.bleed,a=n.w+2*r+2*ln,o=n.h+2*r+2*ln+8,l=ln+r,c=Ep,h=([f,p])=>`<line x1="${Ft(f[0])}" y1="${Ft(f[1])}" x2="${Ft(p[0])}" y2="${Ft(p[1])}"/>`,d=n.panels.filter(f=>f.role==="glue").map(f=>`<polygon points="${f.poly.map(p=>s.pt(p)).map(p=>`${Ft(p[0])},${Ft(p[1])}`).join(" ")}"/>`).join(""),u=Rp(n,e,t).map(({p:f,name:p,rot:_,arrow:m,k:g})=>{let[v,b]=s.pt(f.centroid),y=_??0,T=m?'<path d="M0 -8.2 L2.6 -4.4 L-2.6 -4.4 Z" fill="#0051ff"/><text y="-9.6" font-size="2.4">TOP</text>':"";return`<g transform="translate(${Ft(v)} ${Ft(b)}) rotate(${y}) scale(${Ft(g)})">${T}<text y="1.2">${Ca(p)}</text></g>`}).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${Ft(a)}mm" height="${Ft(o)}mm" viewBox="0 0 ${Ft(a)} ${Ft(o)}">
<title>${Ca(dc(i))} / ${e==="back"?"inside":"outside"}</title>
<desc>OK Design print template, ${Ca(pd[e])}. Sheet ${lt(n.w)} x ${lt(n.h)} mm, bleed ${lt(r)} mm. All units in mm, scale 1:1. Arrows point to the top of each panel once folded. Hide these layers before export.</desc>
<g transform="translate(${l} ${l})" fill="none" stroke-width="0.25">
<g id="BLEED" stroke="${c.bleed.stroke}"><rect x="${-r}" y="${-r}" width="${Ft(n.w+2*r)}" height="${Ft(n.h+2*r)}"/></g>
<g id="GLUE" fill="#0051ff" fill-opacity="0.1" stroke="none">${d}</g>
<g id="SAFE" stroke="${c.safe.stroke}" stroke-dasharray="1 1">${Tp(n).map(f=>s.rect(f)).map(f=>`<rect x="${Ft(f[0])}" y="${Ft(f[1])}" width="${Ft(f[2])}" height="${Ft(f[3])}"/>`).join("")}</g>
<g id="CUT" stroke="${c.cut.stroke}">${n.cuts.map(f=>h(s.seg(f[0],f[1]))).join("")}</g>
<g id="FOLD" stroke="${c.fold.stroke}" stroke-dasharray="3 2">${n.creases.filter(f=>!f.mountain).map(f=>h(s.seg(f.a,f.b))).join("")}</g>
<g id="FOLD-MOUNTAIN" stroke="${c.mountain.stroke}" stroke-dasharray="3 1 1 1">${n.creases.filter(f=>f.mountain).map(f=>h(s.seg(f.a,f.b))).join("")}</g>
<g id="PERFORATION" stroke="${c.perf.stroke}" stroke-dasharray="1 1">${[...n.perfs,...n.kiss].map(f=>h(s.seg(f.a,f.b))).join("")}</g>
<g id="LABELS" fill="#0051ff" stroke="none" font-family="Helvetica, Arial, sans-serif" font-size="3.2" text-anchor="middle">${u}</g>
</g>
<g id="LEGEND" font-family="Helvetica, Arial, sans-serif" font-size="2.8" fill="#333">
<text x="${ln}" y="${ln-7}" font-size="3.4" font-weight="bold">${Ca(pd[e])}</text>
<text x="${ln}" y="${o-10}">${Ca(dc(i))}  |  sheet ${lt(n.w)} x ${lt(n.h)} mm  |  bleed ${lt(r)} mm  |  safe ${lt(n.safe)} mm</text>
<text x="${ln}" y="${o-6}">pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone, blue arrow = top of the panel</text>
</g>
</svg>`}var Ft=i=>String(Math.round(i*1e3)/1e3),Ca=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Ip(i,{side:e="front",orient:t=null}={}){let{die:n}=i,s=Ap(n,e),r=n.bleed,a=72/25.4,o=n.w+2*r+2*ln,l=n.h+2*r+2*ln+8,c=ln+r,h=I=>((I+c)*a).toFixed(3),d=I=>((l-(I+c))*a).toFixed(3),u=I=>{let N=parseInt(I.slice(1),16);return`${((N>>16&255)/255).toFixed(3)} ${((N>>8&255)/255).toFixed(3)} ${((N&255)/255).toFixed(3)}`},f=I=>String(I).replace(/×/g,"x").replace(/→/g,">").replace(/[^\x20-\x7e]/g,"").replace(/([()\\])/g,"\\$1"),p=[],_=(I,N,F)=>{if(F.length){p.push(`q ${u(I)} RG 0.6 w [${N}] 0 d`);for(let[P,O]of F)p.push(`${h(P[0])} ${d(P[1])} m ${h(O[0])} ${d(O[1])} l S`);p.push("Q")}},m=Ep,g=(I,N,F,P)=>[[[I,N],[I+F,N]],[[I+F,N],[I+F,N+P]],[[I+F,N+P],[I,N+P]],[[I,N+P],[I,N]]];_(m.bleed.stroke,"",g(-r,-r,n.w+2*r,n.h+2*r)),_(m.safe.stroke,"2 2",Tp(n).flatMap(I=>g(...s.rect(I)))),_(m.cut.stroke,"",n.cuts.map(I=>s.seg(I[0],I[1]))),_(m.fold.stroke,"8 5",n.creases.filter(I=>!I.mountain).map(I=>s.seg(I.a,I.b))),_(m.mountain.stroke,"8 3 2 3",n.creases.filter(I=>I.mountain).map(I=>s.seg(I.a,I.b))),_(m.perf.stroke,"2 2",[...n.perfs,...n.kiss].map(I=>s.seg(I.a,I.b)));let v=(I,N,F,P,O="#333333")=>{p.push(`BT /F1 ${F} Tf ${u(O)} rg ${I.toFixed(2)} ${N.toFixed(2)} Td (${f(P)}) Tj ET`)},b=(I,N,F,P,O)=>{let V=F*Math.PI/180;return[I+P*Math.cos(V)-O*Math.sin(V),N+P*Math.sin(V)+O*Math.cos(V)]},y=(I,N,F,P,O,V,G)=>{let ee=F*Math.PI/180,W=f(V).length*O*.5/a,[j,te]=b(I,N,F,-W/2,P),be=Math.cos(ee).toFixed(4),Fe=Math.sin(ee).toFixed(4);p.push(`BT /F1 ${O} Tf ${u(G)} rg ${be} ${(-Fe).toString()} ${Fe} ${be} ${h(j)} ${d(te)} Tm (${f(V)}) Tj ET`.replace("--",""))};for(let{p:I,name:N,rot:F,arrow:P,k:O}of Rp(n,e,t)){let[V,G]=s.pt(I.centroid),ee=F??0;if(y(V,G,ee,1.2*O,9*O,N,"#0051ff"),P){let W=[b(V,G,ee,0,-8.2*O),b(V,G,ee,2.6*O,-4.4*O),b(V,G,ee,-2.6*O,-4.4*O)];p.push(`q ${u("#0051ff")} rg ${h(W[0][0])} ${d(W[0][1])} m ${h(W[1][0])} ${d(W[1][1])} l ${h(W[2][0])} ${d(W[2][1])} l f Q`),y(V,G,ee,-9.6*O,7*O,"TOP","#0051ff")}}v(ln*a,(l-ln+7)*a,9.5,pd[e],"#111111"),v(ln*a,7.5*a,8,`${dc(i)}  |  sheet ${lt(n.w)} x ${lt(n.h)} mm  |  bleed ${lt(r)} mm  |  safe ${lt(n.safe)} mm`),v(ln*a,3.6*a,7,"pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone, blue arrow = top of the panel","#666666");let T=p.join(`
`),E=(I,N,F,P)=>`[${[h(I),d(P),h(F),d(N)].join(" ")}]`,x=["<< /Type /Catalog /Pages 2 0 R >>","<< /Type /Pages /Kids [3 0 R] /Count 1 >>",`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${(o*a).toFixed(3)} ${(l*a).toFixed(3)}] /TrimBox ${E(0,0,n.w,n.h)} /BleedBox ${E(-r,-r,n.w+r,n.h+r)} /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,`<< /Length ${T.length} >>
stream
${T}
endstream`,"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",`<< /Title (${f(dc(i))} ${e==="back"?"inside":"outside"}) /Producer (OK Design Print Lab) >>`],S=`%PDF-1.4
`,L=[];x.forEach((I,N)=>{L.push(S.length),S+=`${N+1} 0 obj
${I}
endobj
`});let R=S.length;S+=`xref
0 ${x.length+1}
0000000000 65535 f 
`;for(let I of L)S+=`${String(I).padStart(10,"0")} 00000 n 
`;return S+=`trailer
<< /Size ${x.length+1} /Root 1 0 R /Info 6 0 R >>
startxref
${R}
%%EOF`,S}function Pp(i){let e=Math.max(i.w,i.h)*.03,t=`${-e} ${-e} ${i.w+2*e} ${i.h+2*e}`,n=(a,o)=>`M${hc(a[0])} ${hc(a[1])}L${hc(o[0])} ${hc(o[1])}`,s=i.cuts.map(a=>n(a[0],a[1])).join(""),r=i.creases.map(a=>n(a.a,a.b)).join("");return`<svg viewBox="${t}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="c" d="${s}"/><path class="f" d="${r}"/></svg>`}var hc=i=>Math.round(i*10)/10;function uc(i,e,t){let n=e instanceof Blob?e:new Blob([e],{type:t}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),4e3)}var zb=3e3,Hb=16;function Gb(){return window.__OK_RUNTIME?Promise.resolve():new Promise((i,e)=>{let t=document.createElement("script");t.src=`${pr()}viewer.runtime.js`,t.onload=i,t.onerror=()=>e(new Error("The proof runtime could not be loaded.")),document.head.appendChild(t)})}function md(i,e,t=zb){let n=i.art[e];if(!n)return null;let{ext:s}=i,r=Math.min(t/Math.max(s.w,s.h),i.pxPerMm),a=document.createElement("canvas");a.width=Math.round(s.w*r),a.height=Math.round(s.h*r);let o=a.getContext("2d");return o.fillStyle=e==="back"&&i.stock.inside?i.stock.inside:i.stock.color,o.fillRect(0,0,a.width,a.height),n(o,r,s,e),a}function Lp(i,e){return md(i,e)?.toDataURL("image/jpeg",.88)??null}var Vb=i=>JSON.stringify(i).replace(/</g,"\\u003c");async function Dp(i,e={}){await Gb();let{surface:t,s:n,art:s,job:r}=i,a={};if(s.pagesMap){let h=0;for(let[d,u]of s.pagesMap){if(h++>=Hb)break;let f=document.createElement("canvas"),p=Math.min(1,1100/Math.max(u.width,u.height));f.width=Math.round(u.width*p),f.height=Math.round(u.height*p),f.getContext("2d").drawImage(u,0,0,f.width,f.height),a[d]=f.toDataURL("image/jpeg",.84)}}let o={v:1,id:n.id,size:n.size,stock:n.stock,finish:n.finish,pages:n.pages,client:e.client||"",project:e.project||r.format.name,version:e.version||"v1",note:e.note||"",date:new Date().toISOString().slice(0,10),email:"hello@okdesign.cc",art:{front:Lp(t,"front"),back:Lp(t,"back")},bookPages:a},l=`${o.project} ${o.version} \u2014 Proof by OK Design`.replace(/</g,""),c=window.__OK_RUNTIME.replace(/<\/script/gi,"<\\/script");return`<!doctype html>
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
<script>window.__OK_PROOF__=${Vb(o)};<\/script>
<script>${c}<\/script>
</body>
</html>`}var vd="okds.vault",Ia="okds.session",gd="okds.github.token";var Up=i=>({get(e){try{return window[i].getItem(e)}catch{return null}},set(e,t){try{t==null?window[i].removeItem(e):window[i].setItem(e,t)}catch{}}}),gr=Up("localStorage"),Pa=Up("sessionStorage"),Op=new TextEncoder,Wb=new TextDecoder,_d=i=>btoa(String.fromCharCode(...i)),xd=i=>Uint8Array.from(atob(i),e=>e.charCodeAt(0)),La=class extends Error{constructor(){super("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.")}};async function Np(i,e,t){let n=await crypto.subtle.importKey("raw",Op.encode(String(i).normalize("NFC")),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:e,iterations:t},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}function kp(){try{let i=JSON.parse(gr.get(vd)||"null");return i&&i.salt&&i.iv&&i.data?i:null}catch{return null}}function Fp(i){Pa.set(Ia,JSON.stringify({token:i,until:Date.now()+432e5}))}var Rt={has:()=>!!kp(),legacy:()=>gr.get(gd)||"",token(){try{let i=JSON.parse(Pa.get(Ia)||"null");if(i?.token&&i.until>Date.now())return i.token}catch{}return Pa.set(Ia,null),""},unlocked(){return!!this.token()},async save(i,e){if(String(e).length<10)throw new Error("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.");let t=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(12)),s=await Np(e,t,6e5),r=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:n},s,Op.encode(i.trim())));gr.set(vd,JSON.stringify({v:1,kdf:"PBKDF2-SHA-256",iter:6e5,salt:_d(t),iv:_d(n),data:_d(r)})),gr.set(gd,null),Fp(i.trim())},async open(i){let e=kp();if(!e)throw new Error("\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0441\u0442\u0443\u0434\u0438\u044F \u0435\u0449\u0451 \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0430.");let t;try{let n=await Np(i,xd(e.salt),e.iter||6e5);t=Wb.decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:xd(e.iv)},n,xd(e.data)))}catch{throw new La}return Fp(t),t},close(){Pa.set(Ia,null)},forget(){gr.set(vd,null),gr.set(gd,null),Pa.set(Ia,null)}};var tt={repo:"okdesign-studio/okdesign.cc",branch:"main",origin:"https://okdesign.cc",folder:"demo"},qb="https://api.github.com",Da={get:()=>Rt.token()},vi=i=>`${tt.origin}/${tt.folder}/${i}/`;function fc(i){let e={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0491:"g",\u0434:"d",\u0435:"e",\u0454:"ie",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0456:"i",\u0457:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"kh",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"shch",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"iu",\u044F:"ia"};return String(i||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[а-яёєіїґ]/g,t=>e[t]??"").replace(/&/g,"-").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)}var Qn=class extends Error{};async function zn(i,{method:e="GET",body:t,raw:n=!1,auth:s}={}){let r=s||Da.get();if(!r)throw new Qn("\u0421\u0442\u0443\u0434\u0438\u044F \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430. \u041E\u0431\u043D\u043E\u0432\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.");let a;try{a=await fetch(`${qb}${i}`,{method:e,headers:{Authorization:`Bearer ${r}`,Accept:n?"application/vnd.github.raw+json":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28",...t?{"Content-Type":"application/json"}:{}},body:t?JSON.stringify(t):void 0,cache:"no-store"})}catch{throw new Qn("\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 GitHub. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.")}if(a.status===404&&e==="GET")return null;if(!a.ok){let o="";try{o=(await a.json()).message||""}catch{}throw a.status===401?new Qn("GitHub \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u043B \u0442\u043E\u043A\u0435\u043D: \u043E\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0438\u043B\u0438 \u0438\u0441\u0442\u0451\u043A. \u0421\u043E\u0437\u0434\u0430\u0439 \u043D\u043E\u0432\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0438 \u0437\u0430\u043C\u0435\u043D\u0438 \u0435\u0433\u043E \u0432 \xAB\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445\xBB \u0441\u0442\u0443\u0434\u0438\u0438."):a.status===403||a.status===404?new Qn(`\u0423 \u0442\u043E\u043A\u0435\u043D\u0430 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A ${tt.repo} \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C. ${o}`.trim()):a.status===409||a.status===422?new Qn(`GitHub \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435: ${o||a.status}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.`):new Qn(`GitHub \u043E\u0442\u0432\u0435\u0442\u0438\u043B ${a.status}${o?`: ${o}`:""}`)}return a.status===204?null:n?a.text():a.json()}async function _r(i){let e=await zn(`/repos/${tt.repo}`,{auth:i});if(!e)throw new Qn(`\u0422\u043E\u043A\u0435\u043D \u043D\u0435 \u0432\u0438\u0434\u0438\u0442 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 ${tt.repo}. \u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0432\u044B\u0431\u0435\u0440\u0438 \u0435\u0433\u043E \u0432 "Repository access".`);if(!e.permissions?.push)throw new Qn('\u0422\u043E\u043A\u0435\u043D \u0432\u0438\u0434\u0438\u0442 \u0441\u0430\u0439\u0442, \u043D\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0432 \u043D\u0435\u0433\u043E \u043F\u0438\u0441\u0430\u0442\u044C. \u0414\u0430\u0439 \u0435\u043C\u0443 "Contents: Read and write".');return{repo:e.full_name,private:e.private}}async function Bp(){let i=await zn(`/repos/${tt.repo}/contents/${tt.folder}?ref=${tt.branch}`);if(!i)return[];let e=i.filter(n=>n.type==="dir");return(await Promise.all(e.map(async n=>{try{let s=await zn(`/repos/${tt.repo}/contents/${tt.folder}/${n.name}/demo.json?ref=${tt.branch}`,{raw:!0});return s?{...JSON.parse(s),slug:n.name}:null}catch{return null}}))).filter(Boolean).sort((n,s)=>String(s.updated||"").localeCompare(String(n.updated||"")))}async function bd(){let i=await zn(`/repos/${tt.repo}/git/ref/heads/${tt.branch}`),e=await zn(`/repos/${tt.repo}/git/commits/${i.object.sha}`);return{sha:i.object.sha,tree:e.tree.sha}}async function zp(i,e){return((await zn(`/repos/${tt.repo}/git/trees/${i}?recursive=1`))?.tree||[]).filter(n=>n.type==="blob"&&n.path.startsWith(e)).map(n=>n.path)}var yd=i=>{let e="";for(let t=0;t<i.length;t+=32768)e+=String.fromCharCode.apply(null,i.subarray(t,t+32768));return btoa(e)};async function $b(i){return typeof i=="string"?yd(new TextEncoder().encode(i)):i instanceof Blob?yd(new Uint8Array(await i.arrayBuffer())):yd(i)}async function Hp({files:i=[],remove:e=[],message:t},n=()=>{}){for(let s=0;s<2;s++){let r=await bd(),a=[],o=0,l=[...i],c=async()=>{for(;l.length;){let u=l.shift(),f=await zn(`/repos/${tt.repo}/git/blobs`,{method:"POST",body:{content:await $b(u.content),encoding:"base64"}});a.push({path:u.path,mode:"100644",type:"blob",sha:f.sha}),n(`\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u0444\u0430\u0439\u043B\u044B: ${++o} \u0438\u0437 ${i.length}`)}};await Promise.all([c(),c(),c()]);for(let u of e)a.push({path:u,mode:"100644",type:"blob",sha:null});n("\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 GitHub\u2026");let h=await zn(`/repos/${tt.repo}/git/trees`,{method:"POST",body:{base_tree:r.tree,tree:a}}),d=await zn(`/repos/${tt.repo}/git/commits`,{method:"POST",body:{message:t,tree:h.sha,parents:[r.sha]}});try{return await zn(`/repos/${tt.repo}/git/refs/heads/${tt.branch}`,{method:"PATCH",body:{sha:d.sha}}),d.sha}catch(u){if(s)throw u;n("\u041D\u0430 GitHub \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043D\u043E\u0432\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u2026")}}return null}async function Gp(i,e,{keep:t=[],message:n},s){let r=await bd(),a=`${tt.folder}/${i}/`,o=await zp(r.tree,a),l=new Set(e.map(d=>`${a}${d.name}`)),c=new Set(t.map(d=>`${a}${d}`)),h=o.filter(d=>!l.has(d)&&!c.has(d));return Hp({files:e.map(d=>({path:`${a}${d.name}`,content:d.content})),remove:h,message:n},s)}async function Vp(i,e){let t=await bd(),n=await zp(t.tree,`${tt.folder}/${i}/`);return n.length?Hp({remove:n,message:`Demo: remove ${i}`},e):null}async function Wp(i){return!!await zn(`/repos/${tt.repo}/contents/${tt.folder}/${i}/demo.json?ref=${tt.branch}`,{raw:!0})}async function qp(i,e,t=18e4){let n=Date.now();for(;Date.now()-n<t;){try{let s=await fetch(`${vi(i)}demo.json?t=${Date.now()}`,{cache:"no-store"});if(s.ok){let r=await s.json();if(!e||r.updated===e)return!0}}catch{}await new Promise(s=>setTimeout(s,6e3))}return!1}var Xb=3600,Yb=1400,Zb=24,xr=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Kb=i=>JSON.stringify(i,null,2).replace(/</g,"\\u003c"),Md=(i,e=.88)=>new Promise(t=>i.toBlob(n=>t(n),"image/jpeg",e));function Sd(i){let e=/^(.*?)(\.[a-z0-9]{1,5})?$/i.exec(String(i||"file"));return`${(e[1]||"file").normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9._-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)||"file"}${(e[2]||"").toLowerCase()}`}async function Jb(i){let{stage:e,s:t}=i,n=e.state==="custom"?"closed":e.state,s={...t.overlays};Object.assign(t.overlays,{lines:!1,bleed:!1,safe:!1,labels:!1}),i._syncOverlays(),e.go("closed",{instant:!0});let r=e.capture(),a=1200,o=630,l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,o);h.addColorStop(0,"#1b1c20"),h.addColorStop(1,"#0d0d0f"),c.fillStyle=h,c.fillRect(0,0,a,o);let d=Math.max(a/r.width,o/r.height),u=r.width*d,f=r.height*d;return c.drawImage(r,(a-u)/2,(o-f)/2,u,f),Object.assign(t.overlays,s),i._syncOverlays(),e.go(n,{instant:!0}),Md(l,.86)}function jb(i){let e=vi(i.slug),t=i.share||{},n=i.project||"Design preview",s=t.description||i.note||`${n}, a 3D preview by OK Design.`,r=t.title||`${n} \xB7 OK Design`,a=t.ogTitle||n,o=t.ogDescription||s,l={...i};return delete l.files,delete l.client,`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${xr(r)}</title>
<meta name="description" content="${xr(s)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${xr(e)}">
<meta property="og:title" content="${xr(a)}">
<meta property="og:description" content="${xr(o)}">
<meta property="og:image" content="${xr(e)}og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="/assets/images/logo/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..800&family=Outfit:wght@300..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/viewer/viewer.css">
</head>
<body class="pl-proof-page">
<div id="plProof"></div>
<!-- Published from the OK Design studio (okdesign.cc/studio/). Edit it there, not by hand. -->
<script>window.__OK_PROOF__ = ${Kb(l)};<\/script>
<script src="/viewer/viewer.js"><\/script>
</body>
</html>
`}async function $p(i,e,t=null){let{surface:n,art:s,job:r,s:a}=i,o=[],l=[],c=new Date().toISOString(),h={};for(let[p,_]of[["front","outside.jpg"],["back","inside.jpg"]]){let m=md(n,p,Xb);m&&(o.push({name:_,content:await Md(m)}),h[p]=_)}if(!h.front&&!h.back)throw new Error("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C \u043C\u0430\u043A\u0435\u0442 \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \xAB\u041C\u0430\u043A\u0435\u0442\xBB.");let d={};if(s.pagesMap){let p=0;for(let[_,m]of s.pagesMap){if(p++>=Zb)break;let g=Math.min(1,Yb/Math.max(m.width,m.height)),v=document.createElement("canvas");v.width=Math.round(m.width*g),v.height=Math.round(m.height*g),v.getContext("2d").drawImage(m,0,0,v.width,v.height);let b=`page-${_}.jpg`;o.push({name:b,content:await Md(v,.85)}),d[_]=b}}o.push({name:"og.jpg",content:await Jb(i)});let u=[];for(let p of e.links||[])if(p.label){if(p.file){let _=Sd(p.file.name);o.push({name:_,content:p.file}),u.push({label:p.label,href:_,download:!0})}else if(p.href){let _=!/^[a-z]+:|^\//i.test(p.href);_&&l.push(p.href),u.push({label:p.label,href:p.href,..._||p.download?{download:!0}:{}})}}t?.sticker?.src&&l.push(t.sticker.src);let f={v:1,slug:e.slug,id:a.id,size:a.size,stock:a.stock,finish:a.finish,...a.pages?{pages:a.pages}:{},project:e.project||r.format.name,client:e.client||"",meta:e.meta||"",note:e.note||"",version:e.version||t?.version||"v1",date:c.slice(0,10),email:"hello@okdesign.cc",art:{front:h.front||null,back:h.back||null},bookPages:d,links:u,...t?.sticker?{sticker:t.sticker}:{},...e.card==="credit"?{card:"credit"}:{},...(()=>{let p={...t?.share||{}};return e.share!==void 0&&(e.share?Object.assign(p,{description:e.share,ogDescription:e.share}):(delete p.description,delete p.ogDescription)),Object.keys(p).length?{share:p}:{}})(),format:{name:r.format.name,size:r.size.label},created:t?.created||c,updated:c};return o.push({name:"demo.json",content:`${JSON.stringify(f,null,2)}
`}),o.push({name:"index.html",content:jb(f)}),{files:o,data:f,keep:l,url:vi(e.slug),folder:`${tt.folder}/${e.slug}/`}}var Qb=i=>{let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild},ct=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),eM=i=>String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),tM={flat:"Outside",inside:"Inside",closed:"Folded",open:"Open"},nM={flat:"\u0421\u043D\u0430\u0440\u0443\u0436\u0438",inside:"\u0412\u043D\u0443\u0442\u0440\u0438",closed:"\u0421\u043B\u043E\u0436\u0435\u043D\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u043E"},iM={Outside:"\u0413\u0430\u0431\u0430\u0440\u0438\u0442",Finished:"\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440","Flat sheet":"\u041B\u0438\u0441\u0442 \u0432 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u0435","With bleed":"\u0421 \u0432\u044B\u043B\u0435\u0442\u0430\u043C\u0438",Stock:"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B",Finish:"\u041E\u0442\u0434\u0435\u043B\u043A\u0430"},ms=class{constructor(e,{mode:t="lab",onClose:n,onChange:s,proof:r,back:a=!0}={}){this.host=e,this.mode=t,this.back=a,this.onClose=n,this.onChange=s,this.proof=r,this.s={overlays:{lines:!1,bleed:!1,safe:!1,labels:!1},tab:"spec"},this.art=this._emptyArt(),this._dom()}_emptyArt(){return{front:null,back:null,panels:[],sample:!1,doc:null,pagesMap:null}}_dom(){let e=this.mode==="proof",t=this.mode==="lab",n=this.mode==="client";this.el=Qb(`
      <div class="pl-studio pl-mode-${this.mode}" role="dialog" aria-modal="true" aria-label="Format preview">
        <div class="pl-stage">
          <div class="pl-canvas"></div>
          <div class="pl-head">
            ${e||!this.back?"":`<a class="pl-back" href="#/"><span aria-hidden="true">\u2190</span> ${t?"\u0412\u0441\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B":"All formats"}</a>`}
            <div class="pl-title">
              <p class="pl-eyebrow"></p>
              <h2></h2>
              <p class="pl-sub"></p>
            </div>
          </div>
          <div class="pl-measure" hidden></div>
          <div class="pl-dock">
            <div class="pl-seg" role="group" aria-label="View"></div>
            <label class="pl-fold"><span>${t?"\u0421\u0433\u0438\u0431":"Fold"}</span><input type="range" min="0" max="100" value="100" aria-label="Fold amount"></label>
            <div class="pl-tools">
              <button type="button" class="pl-tog" data-o="lines">${t?"\u041B\u0438\u043D\u0438\u0438":"Die lines"}</button>
              <button type="button" class="pl-tog" data-o="bleed">${t?"\u0412\u044B\u043B\u0435\u0442\u044B":"Bleed"}</button>
              ${e||n?"":'<button type="button" class="pl-tog" data-o="safe">\u0411\u0435\u0437\u043E\u043F. \u0437\u043E\u043D\u0430</button><button type="button" class="pl-tog" data-o="labels">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F</button>'}
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
        ${e||n?"":`
        <aside class="pl-side" aria-label="Format details">
          <div class="pl-tabs" role="tablist">
            <button type="button" role="tab" data-tab="spec">\u0424\u043E\u0440\u043C\u0430\u0442</button>
            <button type="button" role="tab" data-tab="art">\u041C\u0430\u043A\u0435\u0442</button>
            <button type="button" role="tab" data-tab="share">\u0414\u0435\u043C\u043E</button>
          </div>
          <div class="pl-tabpane" data-pane="spec"></div>
          <div class="pl-tabpane" data-pane="art"></div>
          <div class="pl-tabpane" data-pane="share"></div>
        </aside>`}
      </div>`),this.host.appendChild(this.el),this.$=r=>this.el.querySelector(r),this.canvasHost=this.$(".pl-canvas"),this.$(".pl-back")?.addEventListener("click",r=>{r.preventDefault(),this.onClose?.()}),this.el.querySelectorAll(".pl-tog").forEach(r=>r.addEventListener("click",()=>{let a=r.dataset.o;this.s.overlays[a]=!this.s.overlays[a],this._syncOverlays()})),this.el.querySelectorAll("[data-z]").forEach(r=>r.addEventListener("click",()=>{let a=r.dataset.z;a==="in"&&this.stage.zoom(.84),a==="out"&&this.stage.zoom(1.19),a==="reset"&&this.stage.resetView(),a==="spin"&&(this.spin=!this.spin,this.stage.spin(this.spin),r.classList.toggle("is-on",this.spin))}));let s=this.$(".pl-fold input");s.addEventListener("input",()=>{this.stage.scrub(s.value/100),this._markState("custom")}),this.el.querySelectorAll("[data-tab]").forEach(r=>r.addEventListener("click",()=>this.tab(r.dataset.tab))),this.mode==="lab"&&this._wireDrop(),this._wireHover()}_ensureStage(){if(this.stage)return;try{this.stage=new Jl(this.canvasHost,{pad:1.14})}catch{let t=this.$(".pl-note");throw t.textContent="This browser cannot show the 3D model: WebGL is turned off or not available.",t.hidden=!1,new Error("WebGL unavailable")}this.stage.onState=t=>this._markState(t),this.stage.onSpinStop=()=>{this.spin=!1,this.$('[data-z="spin"]')?.classList.remove("is-on")},this.maxTex=Math.min(this.stage.renderer.capabilities.maxTextureSize,window.innerWidth<800?2048:4096);let e=window.innerWidth<900;this.stage.setSafe(e?62:84,e?50:74)}open(e){this.el.classList.add("is-open"),this._ensureStage(),Object.assign(this.s,{id:e.id,size:e.size,stock:e.stock,finish:e.finish,pages:e.pages}),this.art=this._emptyArt(),this.demo=null,this.form=null,this.stage.clearSticker(),this._rebuild({intro:!e.noIntro}),this.stage.resize(),this.$(".pl-back")?.focus({preventScroll:!0})}close(){this.el.classList.remove("is-open"),this.spin=!1,this.stage?.spin(!1)}_rebuild({intro:e=!1,keepState:t=!1}={}){let{s:n}=this,s=this.surface,r=this.pages,a=lc(n.id,n.size,{stock:n.stock,finish:n.finish,pages:n.pages});this.job=a,n.size=a.size.id,n.stock=a.stockId,n.finish=a.finishId,n.pages=a.params.pages;let{die:o}=a,l=_p(a,{maxTex:this.maxTex,anisotropy:this.stage.renderer.capabilities.getMaxAnisotropy()}),c=new oc,h=gp(a,{surface:l,pages:c});this.surface=l,this.pages=c,this.model=h;let d=t&&this.stage.state!=="custom"?this.stage.state:"closed";this.stage.setModel(h,{die:o,state:"closed"}),s?.dispose(),r?.dispose(),this.orient=hd(this.stage,h,o),this.orientTpl=hd(this.stage,h,o,{front:"closed",back:o.meta.noOpen?"closed":"open"}),l.orient=this.orient,l.onChange=()=>this.stage.invalidate(),this._bleedPlanes(),this._syncOverlays(),this._seg(),this._titles(),this._reapplyArt(),this._renderPanes();let u=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;e&&!u?(this.stage.go("flat",{instant:!0}),this._markState("flat"),clearTimeout(this._introT),this._introT=setTimeout(()=>{this.stage.go("closed"),this._markState("closed")},420)):(this.stage.go(d==="open"&&o.meta.noOpen?"closed":d,{instant:!0}),this._markState(this.stage.state)),this.onChange?.(this.params())}params(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s;return{id:e,size:t,stock:n,finish:s,pages:r}}_bleedPlanes(){let{surface:e,model:t}=this,n=e.ext,s=new di(n.w,n.h),r=t.t,a=o=>{let l=new Ae(s,new Ii({map:e.tex[o],color:"#7d7d7d",toneMapped:!1}));return l.position.set(n.x0+n.w/2,-(n.y0+n.h/2),-r*.5),o==="back"&&(l.rotation.y=Math.PI),l.visible=!1,t.object.add(l),l};this.bleedPlanes={front:a("front"),back:a("back")},this.stage.onStart=()=>this._syncBleed()}_syncBleed(){let e=this.s.overlays.bleed,t=this.stage.tween?this.stage.tween.state:this.stage.state,n=t==="flat"||t==="inside";if(!this.bleedPlanes)return;let{surface:s}=this;this.bleedPlanes.front.material.map=s.tex.front,this.bleedPlanes.back.material.map=s.tex.back,this.bleedPlanes.front.visible=e&&n,this.bleedPlanes.back.visible=e&&n,this.stage.invalidate()}_syncOverlays(){let e=this.s.overlays;this.el.querySelectorAll(".pl-tog").forEach(t=>t.classList.toggle("is-on",!!e[t.dataset.o])),this.surface?.setOverlays({lines:e.lines,safe:e.safe,labels:e.labels}),this._syncBleed()}_titles(){let{format:e,size:t}=this.job,n=nr.find(r=>r.id===e.cat);this.$(".pl-eyebrow").textContent=n?.name||"",this.$(".pl-title h2").textContent=this.proof?.project||e.name;let s=[e.nl,e.fr].filter((r,a,o)=>r&&r!==e.name&&o.indexOf(r)===a);if(this.$(".pl-sub").textContent=this.proof?`${e.name} \xB7 ${t.label}`:s.join(" \xB7 "),this.mode!=="lab"){let r=this.$(".pl-measure");r.hidden=!1,r.innerHTML=this._measureRows().map(([a,o])=>`<div><span>${ct(a)}</span><b>${ct(o)}</b></div>`).join("")}}_finished(){let{model:e}=this;if(!e)return null;let n=e.bounds(e.vector("closed")).getSize(new C);return[n.x,n.y,n.z].sort((s,r)=>r-s)}_measureRows(){let{die:e,stock:t,finishId:n}=this.job,s=[],r=this._finished(),a=r&&r[2]>6&&!e.extras.some(o=>o.type==="stack");return r&&s.push([a?"Outside":"Finished",a?`${lt(r[0])} \xD7 ${lt(r[1])} \xD7 ${lt(r[2])} mm`:`${lt(r[1])} \xD7 ${lt(r[0])} mm`]),s.push(["Flat sheet",`${ar(e.w,e.h)} mm`]),s.push(["With bleed",`${ar(e.w+2*e.bleed,e.h+2*e.bleed)} mm`]),s.push(["Stock",t.name]),n!=="none"&&s.push(["Finish",sr[n].name]),s}_seg(){let{die:e}=this.job,t=["flat"];(e.sides??2)>1&&t.push("inside"),t.push("closed"),e.meta.noOpen||t.push("open");let n=!e.creases.length&&!e.warp,s={...this.mode==="lab"?nM:tM,...n?this.mode==="lab"?{flat:"\u041B\u0438\u0446\u043E",inside:"\u041E\u0431\u043E\u0440\u043E\u0442",closed:"3D"}:{flat:"Front",inside:"Back",closed:"3D"}:{},...e.meta.closedLabel?{closed:e.meta.closedLabel}:{}},r=this.$(".pl-seg");r.innerHTML=t.map(a=>`<button type="button" data-state="${a}">${s[a]}</button>`).join(""),r.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{clearTimeout(this._introT),this.stage.go(a.dataset.state),this._markState(a.dataset.state)}))}_markState(e){this.el.querySelectorAll("[data-state]").forEach(n=>n.classList.toggle("is-on",n.dataset.state===e));let t=this.$(".pl-fold input");(e==="flat"||e==="inside")&&(t.value=0),(e==="closed"||e==="open")&&(t.value=100),this._syncBleed()}tab(e){this.s.tab=e,this.el.querySelectorAll("[data-tab]").forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle("is-on",n),t.setAttribute("aria-selected",n)}),this.el.querySelectorAll("[data-pane]").forEach(t=>t.hidden=t.dataset.pane!==e)}_renderPanes(){this.mode==="lab"&&(this._paneSpec(),this._paneArt(),this._paneShare(),this.tab(this.s.tab))}_select(e,t,n,s){if(n.length<2){let r=n[0];return`<div class="pl-field"><span>${e}</span><p class="pl-static">${ct(r?.[1]??"")}</p></div>`}return`<label class="pl-field"><span>${e}</span><select data-k="${t}">${n.map(([r,a])=>`<option value="${ct(r)}"${String(r)===String(s)?" selected":""}>${ct(a)}</option>`).join("")}</select></label>`}_paneSpec(){let e=this.$('[data-pane="spec"]'),{format:t,die:n}=this.job,{s}=this,r=this._measureRows().map(([l,c])=>[iM[l]||l,c]);r.push(["\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0437\u043E\u043D\u0430",`${lt(n.safe)} \u043C\u043C \u043E\u0442 \u0440\u0435\u0437\u0430`]);let a=n.panels.filter(l=>l.role==="main").length;a>1&&r.push(["\u041F\u0430\u043D\u0435\u043B\u0435\u0439 \u0441 \u043F\u0435\u0447\u0430\u0442\u044C\u044E",String(a)]),n.creases.length&&r.push(["\u0421\u0433\u0438\u0431\u043E\u0432",String(n.creases.length)]);let o=(n.sides??2)>1;e.innerHTML=`
      <p class="pl-use">${ct(t.use)}</p>
      <div class="pl-fields">
        ${this._select("\u0420\u0430\u0437\u043C\u0435\u0440","size",t.sizes.map(l=>[l.id,l.label]),s.size)}
        ${t.pageOptions?this._select("\u0421\u0442\u0440\u0430\u043D\u0438\u0446","pages",t.pageOptions.map(l=>[l,`${l} \u0441\u0442\u0440.`]),s.pages):""}
        ${this._select("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B","stock",t.stocks.map(l=>[l,ds[l].name]),s.stock)}
        ${this._select("\u041E\u0442\u0434\u0435\u043B\u043A\u0430","finish",t.finishes.map(l=>[l,sr[l].name]),s.finish)}
      </div>
      <dl class="pl-spec">${r.map(([l,c])=>`<div><dt>${ct(l)}</dt><dd>${ct(c)}</dd></div>`).join("")}</dl>
      ${this._uploadGuide()}
      <p class="pl-label">\u0428\u0430\u0431\u043B\u043E\u043D 1:1, \u0432 \u043C\u0438\u043B\u043B\u0438\u043C\u0435\u0442\u0440\u0430\u0445</p>
      <div class="pl-tplgrid">
        <span>${o?"\u0421\u043D\u0430\u0440\u0443\u0436\u0438 \xB7 \u0441\u0442\u0440. 1":"\u0428\u0430\u0431\u043B\u043E\u043D"}</span>
        <button type="button" class="pl-btn" data-dl="pdf" data-side="front">PDF</button>
        <button type="button" class="pl-btn" data-dl="svg" data-side="front">SVG</button>
        ${o?`<span>\u0412\u043D\u0443\u0442\u0440\u0438 \xB7 \u0441\u0442\u0440. 2</span>
        <button type="button" class="pl-btn" data-dl="pdf" data-side="back">PDF</button>
        <button type="button" class="pl-btn" data-dl="svg" data-side="back">SVG</button>`:""}
      </div>
      <p class="pl-hint">\u041D\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u0435: \u0440\u043E\u0437\u043E\u0432\u043E\u0435 \u2014 \u0440\u0435\u0437, \u0441\u0438\u043D\u0438\u0439 \u043F\u0443\u043D\u043A\u0442\u0438\u0440 \u2014 \u0441\u0433\u0438\u0431, \u0437\u0435\u043B\u0451\u043D\u043E\u0435 \u2014 \u0432\u044B\u043B\u0435\u0442\u044B, \u0441\u0435\u0440\u043E\u0435 \u2014 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0437\u043E\u043D\u0430, \u0441\u0438\u043D\u0438\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 TOP \u2014 \u0432\u0435\u0440\u0445 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u043E\u0441\u043B\u0435 \u0441\u0431\u043E\u0440\u043A\u0438. \u041F\u0435\u0440\u0435\u0434 \u043F\u0435\u0447\u0430\u0442\u044C\u044E \u0441\u0432\u0435\u0440\u044C \u0448\u0438\u0440\u0438\u043D\u044B \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0441 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u043C \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u0438.</p>`,e.querySelectorAll("select").forEach(l=>l.addEventListener("change",()=>{s[l.dataset.k]=l.value,this._rebuild({keepState:!0})})),e.querySelectorAll("[data-dl]").forEach(l=>l.addEventListener("click",()=>{let c=l.dataset.side,h={side:c,orient:this.orientTpl},d=`${t.id}-${s.size}-${c==="back"?"inside":"outside"}-template`;l.dataset.dl==="pdf"?uc(`${d}.pdf`,new Blob([sM(Ip(this.job,h))],{type:"application/pdf"})):uc(`${d}.svg`,Cp(this.job,h),"image/svg+xml")}))}_uploadGuide(){let{die:e}=this.job,t=e.bleed,n=e.w+2*t,s=e.h+2*t,r=(d,u)=>Math.round(d/25.4*u),a=(e.sides??2)>1,o=!e.creases.length&&!e.warp,l=e.meta.book,c=e.panels.some(d=>d.role==="main"&&((this.orientTpl?.[d.id]?.front||0)!==0||a&&(this.orientTpl?.[d.id]?.back||0)!==0)),h;return l?h=`\u043E\u0434\u0438\u043D \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 PDF \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0447\u0442\u0435\u043D\u0438\u044F: 1 \u2014 \u043E\u0431\u043B\u043E\u0436\u043A\u0430, 2 \u2014 \u0435\u0451 \u043E\u0431\u043E\u0440\u043E\u0442, \u0434\u0430\u043B\u044C\u0448\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0431\u043B\u043E\u043A\u0430, \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u2014 \u043E\u0431\u043E\u0440\u043E\u0442 \u0437\u0430\u0434\u043D\u0435\u0439 \u043E\u0431\u043B\u043E\u0436\u043A\u0438, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u2014 \u0437\u0430\u0434\u043D\u044F\u044F \u043E\u0431\u043B\u043E\u0436\u043A\u0430. \u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043E ${this.s.pages||"\u2026"} \u0441\u0442\u0440.`:a?o?h="\u0441\u0442\u0440. 1 \u2014 \u043B\u0438\u0446\u043E, \u0441\u0442\u0440. 2 \u2014 \u043E\u0431\u043E\u0440\u043E\u0442. \u041E\u0431\u043E\u0440\u043E\u0442 \u0440\u0438\u0441\u0443\u0439 \u0442\u0430\u043A, \u043A\u0430\u043A \u0435\u0433\u043E \u0432\u0438\u0434\u043D\u043E, \u0435\u0441\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043B\u0438\u0441\u0442.":h="\u0441\u0442\u0440. 1 \u2014 \u0432\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430, \u0441\u0442\u0440. 2 \u2014 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F. \u0428\u0430\u0431\u043B\u043E\u043D \xAB\u0412\u043D\u0443\u0442\u0440\u0438\xBB \u0443\u0436\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043B\u0438\u0441\u0442 \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0440\u0438\u0441\u0443\u0439 \u043D\u0430 \u043D\u0451\u043C \u043A\u0430\u043A \u0435\u0441\u0442\u044C, \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u044F.":h="\u043E\u0434\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430.",`<div class="pl-guide">
      <p class="pl-label">\u0427\u0442\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C</p>
      <ol>
        <li><b>\u0424\u0430\u0439\u043B:</b> PDF (\u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E) \u0438\u043B\u0438 PNG/JPG. ${a&&!l?"\u0414\u0432\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u0434\u0430\u0442\u044C \u043E\u0434\u043D\u0438\u043C PDF \u043D\u0430 2 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u043B\u0438 \u0434\u0432\u0443\u043C\u044F \u0444\u0430\u0439\u043B\u0430\u043C\u0438.":""}</li>
        <li><b>\u0420\u0430\u0437\u043C\u0435\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B:</b> ${lt(n)} \xD7 ${lt(s)} \u043C\u043C, \u044D\u0442\u043E \u043B\u0438\u0441\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0432\u044B\u043B\u0435\u0442\u0430\u043C\u0438 ${lt(t)} \u043C\u043C. \u0414\u043B\u044F PNG/JPG: ${r(n,300)} \xD7 ${r(s,300)} px \u043F\u0440\u0438 300 ppi, \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E \u0445\u0432\u0430\u0442\u0438\u0442 ${r(n,150)} \xD7 ${r(s,150)} px.</li>
        <li><b>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B:</b> ${h}</li>
        <li><b>\u0412\u0435\u0440\u0445 \u043F\u0430\u043D\u0435\u043B\u0435\u0439:</b> \u0441\u0438\u043D\u0438\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438 TOP \u043D\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u0435.${c?" \u0423 \u044D\u0442\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0447\u0430\u0441\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u0430 \u0438\u043B\u0438 \u0441\u0442\u043E\u0438\u0442 \u0432\u0432\u0435\u0440\u0445 \u043D\u043E\u0433\u0430\u043C\u0438, \u043F\u0440\u043E\u0432\u0435\u0440\u044C \u0441\u0442\u0440\u0435\u043B\u043A\u0438.":""}</li>
        <li><b>\u0422\u0435\u043A\u0441\u0442 \u0438 \u0432\u0430\u0436\u043D\u043E\u0435:</b> \u043D\u0435 \u0431\u043B\u0438\u0436\u0435 ${lt(e.safe)} \u043C\u043C \u043A \u043B\u0438\u043D\u0438\u0438 \u0440\u0435\u0437\u0430.</li>
        <li><b>Figma:</b> \u0444\u0440\u0435\u0439\u043C ${lt(n*4)} \xD7 ${lt(s*4)} px (1 \u043C\u043C = 4 px). \u042D\u043A\u0441\u043F\u043E\u0440\u0442 PDF \u0438\u043B\u0438 PNG: \xD71,5 \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E, \xD73 \u0434\u043B\u044F \u043F\u0435\u0447\u0430\u0442\u0438.</li>
      </ol>
    </div>`}_sideBlock(e,t){let n=this.art[e];if(!n)return`<div class="pl-slot"><div class="pl-slot-head"><b>${t}</b><span>\u041F\u0443\u0441\u0442\u043E</span></div>
        <button type="button" class="pl-link" data-pick="${e}">\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B</button></div>`;let s=wp(n,this.surface.ext,this.job.die),r=Math.round(n.mmPerPx/(n.base||n.mmPerPx)*100);return`<div class="pl-slot" data-side="${e}">
      <div class="pl-slot-head"><b>${t}</b><span title="${ct(n.page.name)}">${ct(n.page.name)}</span></div>
      <ul class="pl-checks">${s.map(a=>`<li class="is-${a.level}">${ct(a.text)}</li>`).join("")}</ul>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-fit="bleed">\u041F\u043E \u0432\u044B\u043B\u0435\u0442\u0430\u043C</button>
        <button type="button" class="pl-chip" data-fit="trim">\u041F\u043E \u043E\u0431\u0440\u0435\u0437\u0443</button>
        ${n.page.mmW?'<button type="button" class="pl-chip" data-fit="actual">100%</button>':""}
        <button type="button" class="pl-chip" data-act="rot">\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C</button>
        <button type="button" class="pl-chip" data-act="del">\u0423\u0431\u0440\u0430\u0442\u044C</button>
      </div>
      <label class="pl-slider"><span>\u041C\u0430\u0441\u0448\u0442\u0430\u0431 <i>${r}%</i></span><input type="range" min="50" max="200" value="${r}" data-v="scale"></label>
      <div class="pl-xy">
        <label><span>\u0421\u0434\u0432\u0438\u0433 X, \u043C\u043C</span><input type="number" step="0.5" value="${lt(n.cx-this.surface.ext.w/2)}" data-v="x"></label>
        <label><span>\u0421\u0434\u0432\u0438\u0433 Y, \u043C\u043C</span><input type="number" step="0.5" value="${lt(n.cy-this.surface.ext.h/2)}" data-v="y"></label>
      </div>
    </div>`}_paneArt(){let e=this.$('[data-pane="art"]'),{die:t}=this.job,n=(t.sides??2)>1,s=t.meta.book,r=this.art.panels;e.innerHTML=`
      <div class="pl-dropzone" tabindex="0" role="button" aria-label="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043C\u0430\u043A\u0435\u0442\u0430">
        <p><b>\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438 \u0441\u044E\u0434\u0430 PDF \u0438\u043B\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443</b></p>
        <p>PDF, PNG, JPG, SVG. \u0424\u0430\u0439\u043B \u043D\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u0441 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u0448\u044C \u0434\u0435\u043C\u043E.</p>
        <input type="file" accept=".pdf,image/*" hidden multiple>
      </div>
      <div class="pl-progress" hidden></div>
      <p class="pl-error" hidden></p>
      ${s?'<p class="pl-hint">\u041C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 PDF \u043B\u043E\u0436\u0438\u0442\u0441\u044F \u0432 \u043A\u043D\u0438\u0433\u0443 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443: \u0441\u0442\u0440. 1 \u2014 \u043E\u0431\u043B\u043E\u0436\u043A\u0430, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u2014 \u0437\u0430\u0434\u043D\u044F\u044F \u043E\u0431\u043B\u043E\u0436\u043A\u0430.</p>':""}
      ${this._sideBlock("front",n?"\u0421\u043D\u0430\u0440\u0443\u0436\u0438 \xB7 \u0441\u0442\u0440. 1":"\u0421\u0442\u043E\u0440\u043E\u043D\u0430 \u043F\u0435\u0447\u0430\u0442\u0438")}
      ${n?this._sideBlock("back","\u0412\u043D\u0443\u0442\u0440\u0438 \xB7 \u0441\u0442\u0440. 2"):""}
      ${r.length?`<div class="pl-slot"><div class="pl-slot-head"><b>\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044F\u0445</b><span>${r.length}</span></div>
        <ul class="pl-items">${r.map((l,c)=>`<li><span>${ct(t.byId[l.panel]?.[l.side==="back"?"nameIn":"name"]||l.panel)}</span><button type="button" class="pl-link" data-rm="${c}">\u0423\u0431\u0440\u0430\u0442\u044C</button></li>`).join("")}</ul></div>`:""}
      <p class="pl-hint">\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C 3D-\u043C\u043E\u0434\u0435\u043B\u0438 \u0438\u043B\u0438 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 (Ctrl+V).</p>
      <div class="pl-row">
        <button type="button" class="pl-btn" data-sample>${this.art.sample?"\u0423\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440 \u043C\u0430\u043A\u0435\u0442\u0430"}</button>
      </div>`;let a=e.querySelector("input[type=file]"),o=e.querySelector(".pl-dropzone");o.addEventListener("click",()=>a.click()),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),a.click())}),a.addEventListener("change",()=>{a.files.length&&this._files([...a.files],{side:this._pickSide}),this._pickSide=null,a.value=""}),e.querySelectorAll("[data-pick]").forEach(l=>l.addEventListener("click",()=>{this._pickSide=l.dataset.pick,a.click()})),e.querySelector("[data-sample]").addEventListener("click",()=>this.useSample(!this.art.sample)),e.querySelectorAll("[data-rm]").forEach(l=>l.addEventListener("click",()=>{this.art.panels.splice(+l.dataset.rm,1),this._reapplyArt(),this._paneArt()})),e.querySelectorAll(".pl-slot[data-side]").forEach(l=>{let c=l.dataset.side,h=this.art[c],{ext:d}=this.surface,u=(p=!1)=>{this._applySide(c),p&&this._paneArt()};l.querySelectorAll("[data-fit]").forEach(p=>p.addEventListener("click",()=>{fd(h,p.dataset.fit,d,t),h.base=h.mmPerPx,u(!0)})),l.querySelector('[data-act="rot"]').addEventListener("click",()=>{h.rot=(h.rot+90)%360,fd(h,"bleed",d,t),h.base=h.mmPerPx,u(!0)}),l.querySelector('[data-act="del"]').addEventListener("click",()=>{this.art[c]=null,u(!0)});let f=l.querySelector('[data-v="scale"]');f.addEventListener("input",()=>{h.mmPerPx=h.base*(f.value/100),l.querySelector(".pl-slider i").textContent=`${f.value}%`,u()}),f.addEventListener("change",()=>u(!0)),l.querySelector('[data-v="x"]').addEventListener("change",p=>{h.cx=d.w/2+(+p.target.value||0),u(!0)}),l.querySelector('[data-v="y"]').addEventListener("change",p=>{h.cy=d.h/2+(+p.target.value||0),u(!0)})})}_demoForm(){if(!this.form){let e=this.demo?.data;this.form={slug:this.demo?.slug||"",project:e?.project||"",client:e?.client||"",meta:e?.meta||"",note:e?.note||"",links:(e?.links||[]).map(t=>({label:t.label,href:t.href})),card:e?.card||"card",share:e?.share?.ogDescription||e?.share?.description||"",slugTouched:!!this.demo}}return this.form}_paneShare(){let e=this.$('[data-pane="share"]'),t=this._demoForm(),n=!!(this.art.front||this.art.back||this.art.panels.length),s=!!Da.get(),r=!!this.demo,a=`${this.job.format.name} by OK Design`;e.innerHTML=`
      ${r?`<p class="pl-editing">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u0448\u044C \u0434\u0435\u043C\u043E <a href="${ct(vi(this.demo.slug))}" target="_blank" rel="noopener">/demo/${ct(this.demo.slug)}/</a>. \u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u0435\u0433\u043E \u043F\u043E \u0442\u043E\u0439 \u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u0435.</p>`:""}
      <p class="pl-label">\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</p>
      <label class="pl-slugrow"><span>okdesign.cc/demo/</span><input type="text" data-f="slug" value="${ct(t.slug)}" placeholder="imya-proekta" spellcheck="false" autocomplete="off"${r?" readonly":""}></label>
      <p class="pl-hint" data-slughint>${r?"\u0410\u0434\u0440\u0435\u0441 \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u043D \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F.":"\u041B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u0434\u0435\u0444\u0438\u0441. \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F \u0447\u0438\u0442\u0430\u0435\u043C\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430, \u0435\u0451 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0437\u0430 \u043A\u043E\u0434\u043E\u043C."}</p>
      <div class="pl-fields">
        <label class="pl-field"><span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 (\u043A\u0440\u0443\u043F\u043D\u043E \u043D\u0430\u0434 \u043C\u043E\u0434\u0435\u043B\u044C\u044E)</span><input type="text" data-f="project" value="${ct(t.project)}" placeholder="${ct(this.job.format.name)}"></label>
        <label class="pl-field"><span>\u041A\u043B\u0438\u0435\u043D\u0442 (\u0434\u043B\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u0432 \u0441\u0442\u0443\u0434\u0438\u0438)</span><input type="text" data-f="client" value="${ct(t.client)}" placeholder="\u0418\u043C\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"></label>
        <label class="pl-field"><span>\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0434 OK DESIGN</span><input type="text" data-f="meta" value="${ct(t.meta)}" placeholder="${ct(a)}"></label>
        <label class="pl-field"><span>\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</span><textarea rows="3" data-f="note" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: A5, 210 \xD7 148 \u043C\u043C \u0432 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u0435. \u041F\u043E\u043A\u0440\u0443\u0442\u0438 \u043C\u043E\u0434\u0435\u043B\u044C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438 Open.">${ct(t.note)}</textarea></label>
        <label class="pl-field"><span>\u0427\u0442\u043E \u0432\u0438\u0434\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435</span><select data-f="card">
          <option value="card"${t.card!=="credit"?" selected":""}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430: \u043F\u043E\u0434\u043F\u0438\u0441\u044C, \u0442\u0435\u043A\u0441\u0442 \u0438 \u043A\u043D\u043E\u043F\u043A\u0438</option>
          <option value="credit"${t.card==="credit"?" selected":""}>\u0422\u043E\u043B\u044C\u043A\u043E \xABDesigned by OK Design\xBB \u0432 \u0443\u0433\u043B\u0443</option>
        </select></label>
        <label class="pl-field"><span>\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0435\u0432\u044C\u044E \u0441\u0441\u044B\u043B\u043A\u0438 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430\u0445 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</span><textarea rows="2" data-f="share" placeholder="\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430">${ct(t.share)}</textarea></label>
      </div>
      <p class="pl-label">\u041A\u043D\u043E\u043F\u043A\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435</p>
      <div class="pl-linklist">${t.links.map((h,d)=>`<div class="pl-linkrow">
            <input type="text" data-l="label" data-i="${d}" value="${ct(h.label)}" placeholder="\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438">
            ${h.file?`<span class="pl-linkfile" title="${ct(h.file.name)}">${ct(h.file.name)}</span>`:`<input type="text" data-l="href" data-i="${d}" value="${ct(h.href)}" placeholder="https://\u2026 \u0438\u043B\u0438 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430">`}
            <button type="button" class="pl-ico" data-ldel="${d}" aria-label="\u0423\u0431\u0440\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443">\xD7</button>
          </div>`).join("")}</div>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-ladd="link">+ \u0421\u0441\u044B\u043B\u043A\u0430</button>
        <button type="button" class="pl-chip" data-ladd="file">+ \u0424\u0430\u0439\u043B \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F</button>
        <input type="file" data-lfile hidden>
      </div>
      <div class="pl-row">
        <button type="button" class="pl-btn pl-btn-primary" data-publish ${n&&s?"":"disabled"}>${r?"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0435\u043C\u043E":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0434\u0435\u043C\u043E"}</button>
      </div>
      ${n?"":'<p class="pl-hint">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C \u043C\u0430\u043A\u0435\u0442 \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \xAB\u041C\u0430\u043A\u0435\u0442\xBB.</p>'}
      ${s?"":'<p class="pl-hint">\u0421\u0442\u0443\u0434\u0438\u044F \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0430\u0441\u044C: \u043F\u0440\u043E\u0448\u043B\u043E 12 \u0447\u0430\u0441\u043E\u0432 \u0438\u043B\u0438 \u0442\u044B \u043D\u0430\u0436\u0430\u043B \xAB\u0412\u044B\u0439\u0442\u0438\xBB. \u041E\u0431\u043D\u043E\u0432\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0432\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0438 \u0431\u0440\u043E\u0441\u044C \u043C\u0430\u043A\u0435\u0442 \u0435\u0449\u0451 \u0440\u0430\u0437.</p>'}
      <div class="pl-status" hidden></div>
      <p class="pl-error" hidden></p>
      <p class="pl-label pl-gap">\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B</p>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-copy>\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u0443\u0441\u0442\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C</button>
        <button type="button" class="pl-chip" data-proof ${n?"":"disabled"}>\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043E\u0444\u043B\u0430\u0439\u043D-\u0444\u0430\u0439\u043B</button>
      </div>
      <p class="pl-hint">\u041F\u0443\u0441\u0442\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C: \u043A\u043B\u0438\u0435\u043D\u0442 \u0432\u0438\u0434\u0438\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0431\u0435\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0430. \u041E\u0444\u043B\u0430\u0439\u043D-\u0444\u0430\u0439\u043B: \u043E\u0434\u043D\u043E HTML \u0441 \u043C\u043E\u0434\u0435\u043B\u044C\u044E \u0438 \u043C\u0430\u043A\u0435\u0442\u043E\u043C \u0432\u043D\u0443\u0442\u0440\u0438, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430.</p>`;let o=(h,d)=>{t[h]=d},l=e.querySelector('[data-f="slug"]');e.querySelectorAll("[data-f]").forEach(h=>h.addEventListener(h.tagName==="SELECT"?"change":"input",()=>{if(h.dataset.f==="slug"){t.slugTouched=!0;let d=fc(h.value);d!==h.value&&!/-$/.test(h.value)&&(h.value=d),o("slug",fc(h.value));return}o(h.dataset.f,h.value),h.dataset.f==="project"&&!t.slugTouched&&!r&&(t.slug=fc(h.value),l.value=t.slug)})),e.querySelectorAll("[data-l]").forEach(h=>h.addEventListener("input",()=>t.links[+h.dataset.i][h.dataset.l]=h.value)),e.querySelectorAll("[data-ldel]").forEach(h=>h.addEventListener("click",()=>{t.links.splice(+h.dataset.ldel,1),this._paneShare()}));let c=e.querySelector("[data-lfile]");e.querySelector('[data-ladd="link"]').addEventListener("click",()=>{t.links.push({label:"",href:""}),this._paneShare()}),e.querySelector('[data-ladd="file"]').addEventListener("click",()=>c.click()),c.addEventListener("change",()=>{let h=c.files[0];if(!h)return;let d=/\.pdf$/i.test(h.name);t.links.push({label:d?"Download PDF":`Download ${Sd(h.name)}`,file:h}),this._paneShare()}),e.querySelector("[data-gosettings]")?.addEventListener("click",h=>{h.preventDefault(),this.onClose?.(),setTimeout(()=>document.getElementById("settings")?.scrollIntoView({behavior:"smooth"}),60)}),e.querySelector("[data-publish]")?.addEventListener("click",()=>this._publish(e)),e.querySelector("[data-copy]").addEventListener("click",async h=>{let d=this.clientLink(),u=h.currentTarget;try{await navigator.clipboard.writeText(d),u.textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}catch{window.prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0441\u0441\u044B\u043B\u043A\u0443",d)}setTimeout(()=>u.textContent="\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u0443\u0441\u0442\u0443\u044E \u043C\u043E\u0434\u0435\u043B\u044C",1600)}),e.querySelector("[data-proof]").addEventListener("click",async h=>{let d=h.currentTarget,u=e.querySelector(".pl-error");u.hidden=!0,d.disabled=!0,d.textContent="\u0421\u043E\u0431\u0438\u0440\u0430\u044E\u2026";try{let f={project:t.project,client:t.client,note:t.note,version:"v1"},p=await Dp(this,f);uc(`proof-${eM(t.project||this.job.format.name)}.html`,p,"text/html")}catch(f){u.textContent=f.message,u.hidden=!1}d.disabled=!1,d.textContent="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043E\u0444\u043B\u0430\u0439\u043D-\u0444\u0430\u0439\u043B"})}async _publish(e){let t=this._demoForm(),n=e.querySelector("[data-publish]"),s=e.querySelector(".pl-status"),r=e.querySelector(".pl-error");if(r.hidden=!0,!/^[a-z0-9][a-z0-9-]{1,59}$/.test(t.slug||"")){r.textContent="\u0417\u0430\u0434\u0430\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438: \u043C\u0438\u043D\u0438\u043C\u0443\u043C 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430, \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u0446\u0438\u0444\u0440\u044B \u0438 \u0434\u0435\u0444\u0438\u0441.",r.hidden=!1;return}if(t.links.some(l=>l.label&&!l.file&&!l.href)){r.textContent="\u0423 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043A\u043D\u043E\u043F\u043E\u043A \u043D\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438. \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0435\u0451 \u0438\u043B\u0438 \u0443\u0431\u0435\u0440\u0438 \u043A\u043D\u043E\u043F\u043A\u0443.",r.hidden=!1;return}n.disabled=!0,s.hidden=!1;let o=l=>s.innerHTML=`<span class="pl-spin"></span>${ct(l)}`;try{if(o("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u0430\u0434\u0440\u0435\u0441\u2026"),!this.demo&&await Wp(t.slug)&&!window.confirm(`\u0414\u0435\u043C\u043E okdesign.cc/demo/${t.slug}/ \u0443\u0436\u0435 \u0435\u0441\u0442\u044C. \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E \u044D\u0442\u0438\u043C?`))throw new Error("\u041E\u0442\u043C\u0435\u043D\u0435\u043D\u043E. \u041F\u043E\u043C\u0435\u043D\u044F\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.");o("\u0413\u043E\u0442\u043E\u0432\u043B\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438\u2026");let l=await $p(this,{...t,meta:t.meta||`${this.job.format.name} by OK Design`},this.demo?.data);await Gp(t.slug,l.files,{keep:l.keep,message:`Demo: ${this.demo?"update":"publish"} ${t.slug}`},o),this.demo={slug:t.slug,data:l.data},this.form=null,this._paneShare();let c=this.$('[data-pane="share"] .pl-status');c.hidden=!1,c.innerHTML=`<p><b>\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E.</b> \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430\u0447\u043D\u0451\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443.</p>
        <div class="pl-row pl-row-tight"><a class="pl-chip" href="${ct(l.url)}" target="_blank" rel="noopener">${ct(l.url.replace(/^https:\/\//,""))}</a><button type="button" class="pl-chip" data-copylink>\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div>
        <p class="pl-hint" data-live><span class="pl-spin"></span>\u0416\u0434\u0443, \u043F\u043E\u043A\u0430 GitHub \u0432\u044B\u043B\u043E\u0436\u0438\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443\u2026</p>`,c.querySelector("[data-copylink]").addEventListener("click",async u=>{try{await navigator.clipboard.writeText(l.url),u.currentTarget.textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}catch{window.prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0441\u0441\u044B\u043B\u043A\u0443",l.url)}});let h=await qp(t.slug,l.data.updated),d=c.querySelector("[data-live]");d&&(d.textContent=h?"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0443\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443.":"GitHub \u0435\u0449\u0451 \u0432\u044B\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u0443 \u043C\u0438\u043D\u0443\u0442.")}catch(l){s.hidden=!0,r.textContent=l.message||String(l),r.hidden=!1,n.disabled=!1}}async loadDemo(e){let t=vi(e),n=await fetch(`${t}demo.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)throw new Error(`\u041D\u0435 \u043D\u0430\u0448\u0451\u043B \u0434\u0435\u043C\u043E /demo/${e}/`);let s=await n.json();this.demo={slug:e,data:s},this.form=null;let r=[];for(let a of["front","back"]){let o=s.art?.[a];if(!o)continue;let l=await fetch(`${t}${o}?t=${Date.now()}`,{cache:"no-store"});l.ok&&r.push([a,new File([await l.blob()],o,{type:"image/jpeg"})])}for(let[a,o]of r)await this._files([o],{side:a});if(s.sticker?.src)try{await this.stage.loadSticker({...s.sticker,src:`${t}${s.sticker.src}`})}catch{}this._paneShare(),this.tab("share"),this.stage.go("closed"),this._markState("closed")}clientLink(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s,a=new URLSearchParams({size:t,stock:n,finish:s});return r&&a.set("pages",r),`${location.origin}/model/#/f/${e}?${a}`}async useSample(e){if(e)try{await Promise.all([document.fonts.load("800 40px Outfit"),document.fonts.load("600 40px Outfit")])}catch{}this.art.sample=e,e&&(this.art.front=null,this.art.back=null,this.art.panels=[]),this._reapplyArt(),this.mode==="lab"&&(this._paneArt(),this._paneShare())}_applySide(e){let{surface:t,job:n,orient:s,art:r}=this;if(r.sample){let l=xp(n.die,s);t.setArt(e,e==="front"?l.front:l.back),this._syncBleed();return}let a=r[e],o=r.panels.filter(l=>l.side===e);!a&&!o.length?t.setArt(e,null):t.setArt(e,(l,c,h)=>{a&&Mp(l,c,a);for(let d of o)Sp(l,c,h,d,n.die,s,e)}),this._syncBleed()}_reapplyArt(){let{art:e,surface:t,job:n}=this;for(let s of["front","back"]){let r=e[s];if(r){let a=ud(r.page,t.ext,n.die);a.base=a.mmPerPx,e[s]=a}this._applySide(s)}if(e.pagesMap)for(let[s,r]of e.pagesMap)this.pages.setPage(s,r)}async _files(e,{side:t,panel:n}={}){let s=this.$('[data-pane="art"]'),r=s?.querySelector(".pl-progress"),a=s?.querySelector(".pl-error");a&&(a.hidden=!0),this.tab("art");try{let o=0;for(let l of e){r&&(r.hidden=!1,r.textContent=`\u0427\u0438\u0442\u0430\u044E ${l.name}\u2026`);let c=await bp(l,{maxSide:this.maxTex,onProgress:(h,d)=>{r&&(r.textContent=`\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${h} \u0438\u0437 ${d}\u2026`)}});this._placeDoc(c,{side:o===1&&!t?"back":t,panel:n}),o++}}catch(o){a&&(a.textContent=o.message||"\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B.",a.hidden=!1)}r&&(r.hidden=!0),this._paneArt(),this._paneShare()}_placeDoc(e,{side:t,panel:n}){let{die:s}=this.job,{art:r,surface:a}=this;if(r.sample=!1,n){r.panels=r.panels.filter(h=>!(h.panel===n.panel&&h.side===n.side)),r.panels.push({panel:n.panel,side:n.side,page:e.pages[0]}),this._applySide(n.side);return}if(s.meta.book&&e.pages.length>2&&s.byId.front&&s.byId.back){if(this.job.format.pageOptions?.includes(e.pages.length)&&e.pages.length!==this.s.pages){this.s.pages=e.pages.length,this._rebuild({keepState:!0}),this._placeBook(e),this._paneSpec();return}this._placeBook(e);return}let l=t||(this.stage.state==="inside"?"back":"front"),c=(h,d)=>{let u=ud(d,a.ext,s);u.base=u.mmPerPx,r[h]=u,this._applySide(h)};c(l,e.pages[0]),e.pages[1]&&!t&&(s.sides??2)>1&&c(l==="front"?"back":"front",e.pages[1]),this.stage.state!=="flat"&&this.stage.state!=="inside"&&this.stage.go(l==="back"?"inside":"flat"),this.s.overlays.lines=!0,this._syncOverlays()}_placeBook(e){let{art:t}=this,n=e.pages,s=n.length;t.panels=[{panel:"front",side:"front",page:n[0]},{panel:"back",side:"front",page:n[s-1]}],s>3&&t.panels.push({panel:"front",side:"back",page:n[1]},{panel:"back",side:"back",page:n[s-2]}),t.pagesMap=new Map;for(let r=2;r<s-2;r++)t.pagesMap.set(r+1,n[r].source);for(let[r,a]of t.pagesMap)this.pages.setPage(r,a);this._applySide("front"),this._applySide("back"),this.stage.go("closed")}_wireDrop(){let e=this.$(".pl-stage"),t=this.$(".pl-veil"),n=0,s=()=>this.stage.state==="flat"||this.stage.state==="inside",r=()=>{t.querySelector("p").textContent=s()?`\u041E\u0442\u043F\u0443\u0441\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043B\u0438\u0442\u044C ${this.stage.state==="inside"?"\u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E":"\u0432\u043D\u0435\u0448\u043D\u044E\u044E"} \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u043B\u0438\u0441\u0442\u0430`:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043D\u0430 \u043D\u0435\u0451"};this.el.addEventListener("dragenter",a=>{a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),n++,r(),t.hidden=!1)}),this.el.addEventListener("dragleave",()=>{n=Math.max(0,n-1),n||(t.hidden=!0)}),this.el.addEventListener("dragover",a=>{if(a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),!s()&&e.contains(a.target))){let o=this.stage.pick(a.clientX,a.clientY),l=o&&this._panelName(o);t.querySelector("p").textContent=l?`\u041D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C: ${l}`:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043D\u0430 \u043D\u0435\u0451"}}),this.el.addEventListener("drop",a=>{a.preventDefault(),n=0,t.hidden=!0;let o=[...a.dataTransfer?.files||[]];if(!o.length)return;if(e.contains(a.target)&&!s()){let c=this.stage.pick(a.clientX,a.clientY);if(c&&c.panel){this._files([o[0]],{panel:c});return}}this._files(o)}),this._onPaste=a=>{if(!this.el.classList.contains("is-open")||/INPUT|TEXTAREA/.test(document.activeElement?.tagName||""))return;let o=[...a.clipboardData?.files||[]].filter(l=>/^image\//.test(l.type));o.length&&this._files([o[0]])},window.addEventListener("paste",this._onPaste)}_panelName(e){let t=this.job.die.byId[e.panel];return!t||t.role==="leaf"?null:e.side==="back"?t.nameIn||"Inside":t.name}_wireHover(){let e=this.$(".pl-tip"),t=this.$(".pl-stage");if(this.mode!=="lab")return;let n=0;t.addEventListener("pointermove",s=>{if(s.pointerType==="touch"||s.buttons){e.hidden=!0;return}let r=performance.now();if(r-n<60)return;if(n=r,s.target.tagName!=="CANVAS"||!this.stage){e.hidden=!0;return}let a=this.stage.pick(s.clientX,s.clientY),o=a&&this._panelName(a);if(!o){e.hidden=!0;return}let l=t.getBoundingClientRect();e.textContent=o,e.style.transform=`translate(${s.clientX-l.left+14}px, ${s.clientY-l.top+14}px)`,e.hidden=!1}),t.addEventListener("pointerleave",()=>e.hidden=!0)}async loadBaked(e){let t=a=>new Promise((o,l)=>{let c=new Image;c.onload=()=>o(c),c.onerror=l,c.src=a}),n=e.art.front?await t(e.art.front):null,s=e.art.back?await t(e.art.back):null,r=a=>(o,l,c)=>{o.setTransform(1,0,0,1,0,0),o.drawImage(a,0,0,c.w*l,c.h*l)};n&&this.surface.setArt("front",r(n)),s&&this.surface.setArt("back",r(s));for(let[a,o]of Object.entries(e.pages||{})){let l=await t(o),c=document.createElement("canvas");c.width=l.naturalWidth,c.height=l.naturalHeight,c.getContext("2d").drawImage(l,0,0),this.pages.setPage(+a,c)}this.stage.invalidate()}};function sM(i){let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t)&255;return e}var Na=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Xp=i=>String(i).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Yp(i,{thumbs:e}){let t={cat:"*",q:""},n=i.querySelector("#plCats"),s=i.querySelector("#plGrid"),r=i.querySelector("#plCount"),a=i.querySelector("#plSearch"),o=i.querySelector("#plEmpty"),l=i.dataset.lang==="ru",c=(f,p,_,m)=>f%10===1&&f%100!==11?p:f%10>=2&&f%10<=4&&(f%100<10||f%100>=20)?_:m;n.innerHTML=[{id:"*",name:l?"\u0412\u0441\u0435":"All"},...nr].map(f=>`<button type="button" class="btn btn-envato-dropdown pl-pill" data-cat="${f.id}">${Na(f.name)}</button>`).join("");let h=new Map(tr.map(f=>[f.id,Xp([f.name,f.nl,f.fr,f.use,...f.sizes.map(p=>p.label)].join(" "))])),d=f=>{let p=f.sizes.length,_=p>1?l?`${p} ${c(p,"\u0440\u0430\u0437\u043C\u0435\u0440","\u0440\u0430\u0437\u043C\u0435\u0440\u0430","\u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432")}`:`${p} sizes`:f.sizes[0].label;return`<a href="#/f/${f.id}" class="article-blog no-div pl-card" data-id="${f.id}">
      <div class="blog-image pl-thumb">
        <img loading="lazy" width="640" height="480" src="${e}${f.id}.webp" alt="${Na(f.name)}, blank 3D model">
        <div class="pl-die" aria-hidden="true"></div>
      </div>
      <div class="blog-content">
        <div class="infor">
          <p class="infor_sub text-white-64">${Na(_)}</p>
          <h6><span class="link infor_name">${Na(f.name)}</span></h6>
        </div>
        <div class="btn-action"><i class="icon icon-arrow-top-right"></i></div>
      </div>
    </a>`},u=()=>{let f=Xp(t.q.trim()),p=g=>(t.cat==="*"||g.cat===t.cat)&&(!f||f.split(/\s+/).every(v=>h.get(g.id).includes(v))),_=tr.filter(p),m="";for(let g of nr){let v=_.filter(b=>b.cat===g.id);v.length&&(m+=`<section class="pl-section">
        <div class="pl-section-head"><span class="text-uppercase text-primary text-caption fw-medium">${String(nr.indexOf(g)+1).padStart(2,"0")} /</span><h2>${Na(g.name)}</h2><span class="pl-section-count">${v.length}</span></div>
        <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4 pl-grid">${v.map(d).join("")}</div>
      </section>`)}s.innerHTML=m,r.textContent=l?`${_.length} ${c(_.length,"\u0444\u043E\u0440\u043C\u0430\u0442","\u0444\u043E\u0440\u043C\u0430\u0442\u0430","\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432")}`:`${_.length} ${_.length===1?"format":"formats"}`,o.hidden=_.length>0,n.querySelectorAll(".pl-pill").forEach(g=>g.classList.toggle("is-active",g.dataset.cat===t.cat))};n.addEventListener("click",f=>{let p=f.target.closest("[data-cat]");p&&(t.cat=p.dataset.cat,u())}),a.addEventListener("input",()=>{t.q=a.value,u()}),i.querySelector("#plReset")?.addEventListener("click",()=>{t.q="",t.cat="*",a.value="",u()}),s.addEventListener("pointerover",f=>{let p=f.target.closest(".pl-card");if(!(!p||p.dataset.die)){p.dataset.die="1";try{let _=lc(p.dataset.id);p.querySelector(".pl-die").innerHTML=Pp(_.die)}catch{}}}),u()}var Zp=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Td=`
  <ol class="ds-howto">
    <li>\u041E\u0442\u043A\u0440\u043E\u0439 <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">GitHub \u2192 Fine-grained token \u2192 Generate new token</a> (\u0432\u043E\u0439\u0434\u0438 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442).</li>
    <li><b>Token name:</b> OK Design studio. <b>Expiration:</b> \u043D\u0430 \u0433\u043E\u0434.</li>
    <li><b>Resource owner:</b> okdesign-studio.</li>
    <li><b>Repository access:</b> Only select repositories \u2192 okdesign.cc.</li>
    <li><b>Permissions \u2192 Repository permissions \u2192 Contents:</b> Read and write. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0435 \u0442\u0440\u043E\u0433\u0430\u0439.</li>
    <li>\u041D\u0430\u0436\u043C\u0438 <b>Generate token</b> \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0435\u0433\u043E \u0441\u044E\u0434\u0430.</li>
  </ol>`,wd='<input class="ds-vh" type="text" name="username" value="okdesign-studio" autocomplete="username" tabindex="-1" aria-hidden="true">',Kp="okds.fails",Ed={get(){try{return JSON.parse(sessionStorage.getItem(Kp)||'{"n":0,"t":0}')}catch{return{n:0,t:0}}},set(i){try{sessionStorage.setItem(Kp,JSON.stringify(i))}catch{}}};function Jp({onUnlock:i}){let e=document.createElement("div");e.className="ds-lock",e.id="dsLock",document.body.appendChild(e);let t=()=>{e.remove(),i()},n=(d,u,f)=>{e.innerHTML=`
      <div class="ds-lockbox" role="dialog" aria-modal="true" aria-labelledby="dsLockTitle">
        <h1 id="dsLockTitle">${d}</h1>
        <p class="ds-locklead">${u}</p>
        ${f}
      </div>`,e.querySelector("input:not(.ds-vh)")?.focus()},s=(d,u=!0)=>{let f=e.querySelector(".ds-lockmsg");f&&(f.innerHTML=d?`${u?"":'<span class="pl-spin"></span>'}${Zp(d)}`:"",f.classList.toggle("is-bad",u))},r=d=>e.querySelectorAll("button, input").forEach(u=>u.disabled=d),a=`
    <label class="ds-lockfield"><span>\u041F\u0430\u0440\u043E\u043B\u044C \u0441\u0442\u0443\u0434\u0438\u0438</span><input type="password" name="password" autocomplete="new-password" minlength="${10}" required></label>
    <label class="ds-lockfield"><span>\u041F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0451 \u0440\u0430\u0437</span><input type="password" name="password2" autocomplete="new-password" required></label>
    <p class="ds-lockhint">\u041D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 ${10} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u041F\u0440\u043E\u0449\u0435 \u0432\u0441\u0435\u0433\u043E 3\u20134 \u0441\u043B\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B. \u0421\u043E\u0445\u0440\u0430\u043D\u0438 \u0435\u0433\u043E \u0432 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0435 \u043F\u0430\u0440\u043E\u043B\u0435\u0439: \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435\u043B\u044C\u0437\u044F.</p>`,o=d=>{let u=d.password.value,f=d.password2.value;if(u.length<10)throw new Error(`\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 ${10} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.`);if(u!==f)throw new Error("\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.");return u},l=()=>{n("\u0421\u0442\u0443\u0434\u0438\u044F OK Design","\u0412\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0441\u0442\u0443\u0434\u0438\u0438.",`<form class="ds-lockform" autocomplete="on">
        ${wd}
        <label class="ds-lockfield"><span>\u041F\u0430\u0440\u043E\u043B\u044C</span><input type="password" name="password" autocomplete="current-password" required></label>
        <button type="submit" class="pl-btn pl-btn-primary">\u0412\u043E\u0439\u0442\u0438</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>
      <details class="ds-lockmore">
        <summary>\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C?</summary>
        <p>\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0438\u0433\u0434\u0435 \u043D\u0435 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043D\u0435\u043B\u044C\u0437\u044F. \u0421\u0431\u0440\u043E\u0441\u044C \u0432\u0445\u043E\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435, \u043F\u043E\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u0439 \u043D\u043E\u0432\u044B\u0439 \u0442\u043E\u043A\u0435\u043D GitHub \u0438 \u0437\u0430\u0434\u0430\u0439 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C. \u0421\u0442\u0430\u0440\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0443\u0434\u0430\u043B\u0438 \u043D\u0430 GitHub \u0432 <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">\u0441\u043F\u0438\u0441\u043A\u0435 \u0442\u043E\u043A\u0435\u043D\u043E\u0432</a>.</p>
        <button type="button" class="pl-chip ds-danger" data-reset>\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0445\u043E\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435</button>
      </details>`);let d=e.querySelector("form");d.addEventListener("submit",async u=>{u.preventDefault();let f=Ed.get(),p=f.n>=5?Math.ceil((f.t+3e4-Date.now())/1e3):0;if(p>0){s(`\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u044B\u0442\u043E\u043A. \u041F\u043E\u0434\u043E\u0436\u0434\u0438 ${p} \u0441.`);return}r(!0),s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026",!1);try{await Rt.open(d.password.value),Ed.set({n:0,t:0}),t()}catch(_){r(!1),_ instanceof La&&Ed.set({n:f.n+1,t:Date.now()}),s(_.message),d.password.select()}}),e.querySelector("[data-reset]").addEventListener("click",()=>{window.confirm(`\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0445\u043E\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435?

\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u043E\u0432\u0430 \u0432\u043E\u0439\u0442\u0438, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0442\u043E\u043A\u0435\u043D GitHub \u0438 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C. \u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u0435\u043C\u043E \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u044E\u0442.`)&&(Rt.forget(),h())})},c=()=>{n("\u0417\u0430\u0434\u0430\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0441\u0442\u0443\u0434\u0438\u0438","\u0422\u043E\u043A\u0435\u043D GitHub \u0443\u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0442\u0435\u043A\u0441\u0442\u043E\u043C. \u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439 \u043F\u0430\u0440\u043E\u043B\u044C: \u0442\u043E\u043A\u0435\u043D \u0437\u0430\u0448\u0438\u0444\u0440\u0443\u0435\u0442\u0441\u044F, \u0430 \u0441\u0442\u0443\u0434\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043F\u0430\u0440\u043E\u043B\u044E.",`<form class="ds-lockform">
        ${wd}
        ${a}
        <button type="submit" class="pl-btn pl-btn-primary">\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0432\u043E\u0439\u0442\u0438</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>`);let d=e.querySelector("form");d.addEventListener("submit",async u=>{u.preventDefault(),r(!0);try{let f=o(d);s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u0442\u043E\u043A\u0435\u043D \u043D\u0430 GitHub\u2026",!1);let p=Rt.legacy();try{await _r(p)}catch(_){Rt.forget(),h(`\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u043D\u0435 \u043F\u043E\u0434\u043E\u0448\u0451\u043B: ${_.message} \u0412\u0441\u0442\u0430\u0432\u044C \u043D\u043E\u0432\u044B\u0439.`);return}s("\u0428\u0438\u0444\u0440\u0443\u044E\u2026",!1),await Rt.save(p,f),t()}catch(f){r(!1),s(f.message)}})},h=(d="")=>{n("\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0445\u043E\u0434 \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435",`\u0412\u0441\u0442\u0430\u0432\u044C \u0441\u0432\u043E\u0439 \u0442\u043E\u043A\u0435\u043D GitHub \u0438 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u0439 \u043F\u0430\u0440\u043E\u043B\u044C. \u0421\u0442\u0443\u0434\u0438\u044F \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 GitHub \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442, \u0447\u0442\u043E \u0442\u043E\u043A\u0435\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u0438\u0441\u0430\u0442\u044C \u0432 <b>${Zp(tt.repo)}</b>. \u0422\u043E\u043A\u0435\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C.`,`<form class="ds-lockform">
        ${wd}
        <label class="ds-lockfield"><span>\u0422\u043E\u043A\u0435\u043D GitHub</span><input type="password" name="token" autocomplete="off" spellcheck="false" placeholder="github_pat_\u2026" required></label>
        ${a}
        <button type="submit" class="pl-btn pl-btn-primary">\u0412\u043E\u0439\u0442\u0438</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>
      <details class="ds-lockmore">
        <summary>\u0413\u0434\u0435 \u0432\u0437\u044F\u0442\u044C \u0442\u043E\u043A\u0435\u043D</summary>
        ${Td}
      </details>`);let u=e.querySelector("form");d&&s(d),u.addEventListener("submit",async f=>{f.preventDefault(),r(!0);try{let p=u.token.value.trim();if(!p)throw new Error("\u0412\u0441\u0442\u0430\u0432\u044C \u0442\u043E\u043A\u0435\u043D.");let _=o(u);s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u0442\u043E\u043A\u0435\u043D \u043D\u0430 GitHub\u2026",!1),await _r(p),s("\u0428\u0438\u0444\u0440\u0443\u044E\u2026",!1),await Rt.save(p,_),u.token.value="",t()}catch(p){r(!1),s(p.message)}})};Rt.has()?l():Rt.legacy()?c():h()}var Hn=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),rM=i=>{if(!i)return"";let e=new Date(i);return Number.isNaN(+e)?"":e.toLocaleDateString("ru-RU",{day:"numeric",month:"short",year:"numeric"})};function aM(i){let e=new URLSearchParams;for(let t of["size","stock","finish","pages"])i[t]&&e.set(t,i[t]);return e.set("demo",i.slug),`#/f/${i.id}?${e}`}function jp(){let i=document.getElementById("dsDemos"),e=document.getElementById("dsSettings");if(!i||!e)return;let t=async()=>{if(!Da.get()){i.innerHTML='<div class="ds-empty"><p><b>\u0421\u0442\u0443\u0434\u0438\u044F \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430.</b></p><p>\u041E\u0431\u043D\u043E\u0432\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u0432\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.</p></div>';return}i.innerHTML='<div class="ds-empty"><p><span class="pl-spin"></span>\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u0434\u0435\u043C\u043E \u0441 GitHub\u2026</p></div>';try{let l=await Bp();if(!l.length){i.innerHTML='<div class="ds-empty"><p><b>\u041F\u043E\u043A\u0430 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0434\u0435\u043C\u043E.</b></p><p>\u041E\u0442\u043A\u0440\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u043D\u0438\u0436\u0435, \u0434\u043E\u0431\u0430\u0432\u044C \u043C\u0430\u043A\u0435\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0434\u0435\u043C\u043E\xBB \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \xAB\u0414\u0435\u043C\u043E\xBB.</p></div>';return}i.innerHTML=`<div class="ds-grid">${l.map(c=>{let h=vi(c.slug);return`<article class="ds-card">
            <a class="ds-thumb" href="${Hn(h)}" target="_blank" rel="noopener"><img loading="lazy" src="${Hn(h)}og.jpg?v=${encodeURIComponent(c.updated||"")}" alt=""></a>
            <div class="ds-body">
              <p class="ds-title">${Hn(c.project||c.slug)}</p>
              <p class="ds-meta">${Hn([c.client,c.format?.name,c.format?.size].filter(Boolean).join(" \xB7 "))}</p>
              <p class="ds-meta">/${tt.folder}/${Hn(c.slug)}/ \xB7 ${Hn(rM(c.updated))}</p>
              <div class="ds-actions">
                <a class="pl-chip" href="${Hn(h)}" target="_blank" rel="noopener">\u041E\u0442\u043A\u0440\u044B\u0442\u044C</a>
                <button type="button" class="pl-chip" data-copy="${Hn(h)}">\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>
                ${c.id?`<a class="pl-chip" href="${Hn(aM(c))}">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</a>`:""}
                <button type="button" class="pl-chip ds-danger" data-del="${Hn(c.slug)}">\u0421\u043D\u044F\u0442\u044C</button>
              </div>
            </div>
          </article>`}).join("")}</div>`,i.querySelectorAll("[data-copy]").forEach(c=>c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(c.dataset.copy),c.textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}catch{window.prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0441\u0441\u044B\u043B\u043A\u0443",c.dataset.copy)}setTimeout(()=>c.textContent="\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",1500)})),i.querySelectorAll("[data-del]").forEach(c=>c.addEventListener("click",async()=>{let h=c.dataset.del;if(window.confirm(`\u0421\u043D\u044F\u0442\u044C \u0434\u0435\u043C\u043E okdesign.cc/${tt.folder}/${h}/ \u0441 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438?

\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C\u0441\u044F. \u0412 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 GitHub \u0444\u0430\u0439\u043B\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F, \u0442\u0430\u043A \u0447\u0442\u043E \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0435\u0440\u043D\u0443\u0442\u044C.`)){c.disabled=!0,c.textContent="\u0421\u043D\u0438\u043C\u0430\u044E\u2026";try{await Vp(h,()=>{}),await t()}catch(u){c.disabled=!1,c.textContent="\u0421\u043D\u044F\u0442\u044C",window.alert(u.message)}}}))}catch(l){i.innerHTML=`<div class="ds-empty"><p><b>\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A.</b></p><p>${Hn(l.message)}</p></div>`}};e.innerHTML=`
    <div class="ds-settings">
      <div>
        <p class="ds-h">\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0442\u0443\u0434\u0438\u0438</p>
        <p class="ds-p">\u0421\u0442\u0443\u0434\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u043F\u0430\u0440\u043E\u043B\u044E. \u041F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0438 \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u0434\u0435\u043C\u043E \u043C\u043E\u0436\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E\u043A\u0435\u043D GitHub, \u0430 \u043E\u043D \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0442\u0432\u043E\u0438\u043C \u043F\u0430\u0440\u043E\u043B\u0435\u043C. \u041E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043E\u043D \u0436\u0438\u0432\u0451\u0442 \u0432 \u044D\u0442\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0434\u043E \u0435\u0451 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F, \u0434\u043E \u043A\u043D\u043E\u043F\u043A\u0438 \xAB\u0412\u044B\u0439\u0442\u0438\xBB \u0438\u043B\u0438 12 \u0447\u0430\u0441\u043E\u0432.</p>
        <div class="ds-tokenrow">
          <button type="button" class="pl-btn" id="dsLockNow">\u0412\u044B\u0439\u0442\u0438</button>
          <button type="button" class="pl-btn" id="dsCheck">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F</button>
        </div>
        <p class="ds-status" id="dsStatus" aria-live="polite"></p>
        <details class="ds-more">
          <summary>\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</summary>
          <form class="ds-form" id="dsPassForm">
            <input class="ds-vh" type="text" name="username" value="okdesign-studio" autocomplete="username" tabindex="-1" aria-hidden="true">
            <input type="password" name="old" autocomplete="current-password" placeholder="\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" required>
            <input type="password" name="password" autocomplete="new-password" placeholder="\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C, \u043E\u0442 ${10} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" required>
            <input type="password" name="password2" autocomplete="new-password" placeholder="\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0451 \u0440\u0430\u0437" required>
            <button type="submit" class="pl-btn">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</button>
          </form>
        </details>
        <details class="ds-more">
          <summary>\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u043A\u0435\u043D GitHub</summary>
          <p class="ds-p">\u041A\u043E\u0433\u0434\u0430 \u0441\u0440\u043E\u043A \u0442\u043E\u043A\u0435\u043D\u0430 \u0432\u044B\u0439\u0434\u0435\u0442, GitHub \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043D\u0435\u0442 \u0435\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C. \u0421\u043E\u0437\u0434\u0430\u0439 \u043D\u043E\u0432\u044B\u0439 (\u0448\u0430\u0433\u0438 \u0441\u043F\u0440\u0430\u0432\u0430) \u0438 \u0432\u0441\u0442\u0430\u0432\u044C \u0441\u044E\u0434\u0430.</p>
          <form class="ds-form" id="dsTokenForm">
            <input type="password" name="token" autocomplete="off" spellcheck="false" placeholder="github_pat_\u2026" required>
            <input type="password" name="password" autocomplete="current-password" placeholder="\u041F\u0430\u0440\u043E\u043B\u044C \u0441\u0442\u0443\u0434\u0438\u0438" required>
            <button type="submit" class="pl-btn">\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u043A\u0435\u043D</button>
          </form>
        </details>
        <details class="ds-more">
          <summary>\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E</summary>
          <p class="ds-p">\u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043D\u0430 \u0447\u0443\u0436\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435. \u0414\u0435\u043C\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u044E\u0442.</p>
          <button type="button" class="pl-chip ds-danger" id="dsForget">\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E</button>
        </details>
      </div>
      <div>
        <p class="ds-h">\u041A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D GitHub</p>
        ${Td}
        <p class="ds-p">\u0415\u0441\u043B\u0438 GitHub \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u043E\u0434\u043E\u0431\u0440\u0438 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 okdesign-studio. \u0421\u0442\u0430\u0440\u044B\u0435 \u0442\u043E\u043A\u0435\u043D\u044B \u0443\u0434\u0430\u043B\u044F\u0439 \u0432 <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">\u0441\u043F\u0438\u0441\u043A\u0435 \u0442\u043E\u043A\u0435\u043D\u043E\u0432</a>.</p>
      </div>
    </div>`;let n=e.querySelector("#dsStatus"),s=(l,c=!1)=>{n.textContent=l,n.classList.toggle("is-bad",c)},r=()=>{Rt.close(),location.reload()};document.getElementById("dsLockTop")?.addEventListener("click",l=>{l.preventDefault(),r()}),e.querySelector("#dsLockNow").addEventListener("click",r),e.querySelector("#dsCheck").addEventListener("click",async()=>{s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026");try{let l=await _r();s(`\u0412\u0441\u0451 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442: \u043C\u043E\u0436\u043D\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 ${l.repo}.`)}catch(l){s(l.message,!0)}});let a=e.querySelector("#dsPassForm");a.addEventListener("submit",async l=>{l.preventDefault();let{old:c,password:h,password2:d}=a;try{if(h.value.length<10)throw new Error(`\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 ${10} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.`);if(h.value!==d.value)throw new Error("\u041D\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.");s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026");let u=await Rt.open(c.value);await Rt.save(u,h.value),a.reset(),s("\u041F\u0430\u0440\u043E\u043B\u044C \u0441\u043C\u0435\u043D\u0451\u043D. \u0412 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445, \u0433\u0434\u0435 \u0442\u044B \u0432\u0445\u043E\u0434\u0438\u043B, \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C.")}catch(u){s(u.message,!0)}});let o=e.querySelector("#dsTokenForm");return o.addEventListener("submit",async l=>{l.preventDefault();let c=o.token.value.trim();try{s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u043F\u0430\u0440\u043E\u043B\u044C\u2026"),await Rt.open(o.password.value),s("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u043D\u043E\u0432\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u043D\u0430 GitHub\u2026"),await _r(c),await Rt.save(c,o.password.value),o.reset(),s("\u0422\u043E\u043A\u0435\u043D \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u0438 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D."),t()}catch(h){s(h.message,!0)}}),e.querySelector("#dsForget").addEventListener("click",()=>{window.confirm(`\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E?

\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0427\u0442\u043E\u0431\u044B \u0441\u043D\u043E\u0432\u0430 \u0432\u043E\u0439\u0442\u0438 \u0437\u0434\u0435\u0441\u044C, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0442\u043E\u043A\u0435\u043D GitHub \u0438 \u043F\u0430\u0440\u043E\u043B\u044C.`)&&(Rt.forget(),location.reload())}),document.getElementById("dsRefresh")?.addEventListener("click",t),t(),{refresh:t}}function pc(){let i=/^#\/f\/([^?]+)(?:\?(.*))?$/.exec(location.hash);if(!i)return null;let e=new URLSearchParams(i[2]||"");return{id:decodeURIComponent(i[1]),size:e.get("size")||void 0,stock:e.get("stock")||void 0,finish:e.get("finish")||void 0,pages:e.get("pages")||void 0,view:e.get("view")||void 0,demo:e.get("demo")||void 0}}function oM(){let i=document.getElementById("plApp");if(!i)return;let e=document.documentElement;if(pc()?.view==="client"){location.replace(`/model/${location.hash.replace(/([?&])view=client&?/,"$1").replace(/[?&]$/,"")}`);return}if(e.classList.contains("ds-locked")&&!Rt.unlocked()){Jp({onUnlock:()=>{e.classList.remove("ds-locked"),Qp(i)}});return}e.classList.remove("ds-locked"),Qp(i)}function Qp(i){let e=document.getElementById("plStudioHost"),t=i.dataset.thumbs||`${pr()}thumbs/`;Yp(i,{thumbs:t});let n=Yf(),s=document.getElementById("plTotals");s&&(s.textContent=i.dataset.lang==="ru"?`${n.formats} \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \xB7 ${n.sizes} \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432`:`${n.formats} formats, ${n.sizes} sizes`);let r=jp(),a=null,o=null,l=null,c="",h=()=>{l?.close(),l=null,c="",document.documentElement.classList.remove("pl-lock")},d=()=>{let p=pc();if(!p||!ir[p.id]){h();return}let _=`${p.view==="client"?"c":"l"}:${p.id}:${p.demo||""}`;_!==c&&(c=_,l?.close(),p.view==="client"?(o=o||new ms(e,{mode:"client",onClose:u}),l=o):(a=a||new ms(e,{mode:"lab",onClose:u,onChange:f}),l=a),document.documentElement.classList.add("pl-lock"),l.open(p),p.demo&&l.loadDemo&&l.loadDemo(p.demo).catch(m=>window.alert(m.message)))};function u(){let p=!!l?.demo;history.pushState("","",location.pathname+location.search),h(),p&&r?.refresh()}function f(p){let _=new URLSearchParams;p.size&&_.set("size",p.size),p.stock&&_.set("stock",p.stock),p.finish&&_.set("finish",p.finish),p.pages&&_.set("pages",p.pages);let m=pc();m?.demo&&_.set("demo",m.demo),history.replaceState(null,"",`#/f/${p.id}?${_}`)}window.addEventListener("hashchange",d),window.addEventListener("keydown",p=>{p.key==="Escape"&&l&&u()}),d(),window.__plStudio=()=>l}function lM(i){let e=document.getElementById("plProof"),t=new ms(e,{mode:"proof",proof:i});t.open({id:i.id,size:i.size,stock:i.stock,finish:i.finish,pages:i.pages,noIntro:!0});let n=document.createElement("div");n.className="pl-proofcard";let s=encodeURIComponent(`${i.project} ${i.version}`),r=c=>`mailto:${i.email}?subject=${encodeURIComponent(c)}%20${s}`,a=c=>String(c).replace(/[&<>"]/g,h=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[h]),o=i.links?.length?i.links.map(c=>`<a class="pl-btn${c.primary?" pl-btn-primary":""}" href="${a(c.href)}"${c.download?" download":' target="_blank" rel="noopener"'}>${a(c.label)}</a>`).join(""):`<a class="pl-btn pl-btn-primary" href="${r("Approved:")}">Approve</a>
      <a class="pl-btn" href="${r("Changes for")}">Request changes</a>`,l=i.meta||`${i.client?`${i.client} \xB7 `:""}${i.version} \xB7 ${i.date}`;if(n.innerHTML=`
    <p class="pl-proof-brand">OK DESIGN</p>
    <p class="pl-proof-meta">${a(l)}</p>
    ${i.note?`<p class="pl-proof-note">${a(i.note)}</p>`:""}
    <div class="pl-proof-actions">${o}</div>`,i.card==="credit"){let c=document.createElement("p");c.className="pl-credit",c.innerHTML='Designed by<br><a href="https://okdesign.cc/" target="_blank" rel="noopener">OK Design</a>',document.body.appendChild(c)}else t.el.querySelector(".pl-stage").appendChild(n);t.loadBaked({art:i.art,pages:i.bookPages}).then(()=>i.sticker?t.stage.loadSticker(i.sticker).catch(()=>{}):null).then(()=>{setTimeout(()=>t.stage.go("closed"),300)}),t.stage.go("flat",{instant:!0}),t.el.classList.add("is-open"),window.__plStudio=()=>t}function cM(){let i=document.getElementById("plModel"),e=null,t="",n=()=>{let r=pc(),a=r?`${r.id}?${r.size}&${r.stock}&${r.finish}&${r.pages}`:"";if(a!==t){if(t=a,!r||!ir[r.id]){e?.close(),i.querySelector(".pl-model-missing")?.remove(),i.insertAdjacentHTML("beforeend",'<p class="pl-model-missing">This preview link is incomplete. Please ask OK Design for a new one.</p>');return}i.querySelector(".pl-model-missing")?.remove(),e=e||new ms(i,{mode:"client",back:!1}),e.open(r),document.title=`${ir[r.id].name}, 3D preview \xB7 OK Design`,window.__plStudio=()=>e}},s=document.createElement("p");s.className="pl-credit",s.innerHTML='Designed by<br><a href="https://okdesign.cc/" target="_blank" rel="noopener">OK Design</a>',document.body.appendChild(s),window.addEventListener("hashchange",n),n()}var em=()=>{window.__OK_PROOF__?lM(window.__OK_PROOF__):document.getElementById("plModel")?cM():oM()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",em):em();})();
