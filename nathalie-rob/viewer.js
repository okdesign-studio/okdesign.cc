/* OK Design Print Lab. Built from tools/print-lab. Includes three.js (MIT). */
(()=>{var up=Object.defineProperty;var gi=(i,e)=>{for(var t in e)up(i,t,{get:e[t],enumerable:!0})};var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,Fc=1,$u=2;var Yr=1,Do=2,Bs=3,Ni=0,Ct=1,nn=2,ji=0,zs=1,Uc=2,kc=3,Oc=4,Yu=5;var Qi=100,Zu=101,Ju=102,Ku=103,ju=104,Qu=200,ed=201,td=202,nd=203,Bc=204,zc=205,id=206,sd=207,rd=208,ad=209,od=210,ld=211,cd=212,hd=213,ud=214,Ya=0,Za=1,Ja=2,ws=3,Ka=4,ja=5,Qa=6,eo=7,No=0,dd=1,fd=2,Gn=0,Hc=1,Gc=2,Vc=3,Wc=4,qc=5,Xc=6,Zr=7;var $c=300,es=301,Hs=302,Fo=303,Uo=304,Es=1e3,Bn=1001,to=1002,kt=1003,pd=1004;var Jr=1005;var Kt=1006,ko=1007;var In=1008;var sn=1009,Yc=1010,Zc=1011,Gs=1012,Oo=1013,Pn=1014,bn=1015,Ln=1016,Bo=1017,zo=1018,ts=1020,Jc=35902,Kc=35899,jc=1021,Qc=1022,Dn=1023,ni=1026,oi=1027,Ho=1028,Go=1029,Fi=1030,Vo=1031;var Wo=1033,Kr=33776,jr=33777,Qr=33778,ea=33779,qo=35840,Xo=35841,$o=35842,Yo=35843,Zo=36196,Jo=37492,Ko=37496,jo=37488,Qo=37489,ta=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,na=36285,yl=36286;var yr=2300,no=2301,qa=2302,Sc=2303,wc=2400,Ec=2401,Tc=2402;var md=3200;var ia=0,gd=1,li="",yt="srgb",br="srgb-linear",Mr="linear",st="srgb";var Xa=7680;var _d=519,xd=512,vd=513,yd=514,eh=515,bd=516,Md=517,th=518,nh=519,Sd=35044;var ih="300 es",vn=2e3,Ts=2001;function dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){let i=As("canvas");return i.style.display="block",i}var ou={},Rs=null;function sh(...i){let e="THREE."+i.shift();Rs?Rs("log",e,...i):console.log(e,...i)}function Ed(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Ed(i);let e="THREE."+i.shift();if(Rs)Rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Fe(...i){i=Ed(i);let e="THREE."+i.shift();if(Rs)Rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){let e=i.join(" ");e in ou||(ou[e]=!0,Ie(...i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ad={[Ya]:Ya,[Ja]:Qa,[Ka]:Ka,[ws]:ja,[Za]:Za,[Qa]:Ja,[eo]:eo,[ja]:ws},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=1234567,gr=Math.PI/180,Cs=180/Math.PI;function Vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function rh(i,e){return(i%e+e)%e}function pp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mp(i,e,t){return i!==e?(t-i)/(e-i):0}function _r(i,e,t){return(1-t)*i+t*e}function gp(i,e,t,n){return _r(i,e,1-Math.exp(-t*n))}function _p(i,e=1){return e-Math.abs(rh(i,e*2)-e)}function xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bp(i,e){return i+Math.random()*(e-i)}function Mp(i){return i*(.5-Math.random())}function Sp(i){i!==void 0&&(lu=i);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(i){return i*gr}function Ep(i){return i*Cs}function Tp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rd(i,e){if(e.constructor===Float32Array)return i;let t=oh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Cd(i,e){if(e.constructor===Float32Array)return i;let t=oh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ns={DEG2RAD:gr,RAD2DEG:Cs,generateUUID:Vs,clamp:Ve,euclideanModulo:rh,mapLinear:pp,inverseLerp:mp,lerp:_r,damp:gp,pingpong:_p,smoothstep:xp,smootherstep:vp,randInt:yp,randFloat:bp,randFloatSpread:Mp,seededRandom:Sp,degToRad:wp,radToDeg:Ep,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:ah,setQuaternionFromProperEuler:Rp,normalize:Cd,denormalize:Rd},fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;var he=fh,ut=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var C=ph,Ql=new C,cu=new ut,mh=class mh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],v=s[1],M=s[4],y=s[7],T=s[2],b=s[5],x=s[8];return r[0]=a*_+o*v+l*T,r[3]=a*p+o*M+l*b,r[6]=a*g+o*y+l*x,r[1]=c*_+h*v+u*T,r[4]=c*p+h*M+u*b,r[7]=c*g+h*y+u*x,r[2]=d*_+f*v+m*T,r[5]=d*p+f*M+m*b,r[8]=d*g+f*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var Ue=mh,ec=new Ue,hu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){let i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var je=Cp();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=As("canvas")),ls.width=e.width,ls.height=e.height;let s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=As("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ip=0,Is=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Pp=0,nc=new C,Yt=class i extends Rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=Kt,a=In,o=Dn,l=sn,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Vs(),this.name="",this.source=new Is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=$c;Yt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(g+1)/2,b=(h+d)/4,x=(u+_)/4,w=(m+p)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=w/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var pt=gh,so=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Is(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends so{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lo=class Lo{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,_,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Dp)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(n,an),_i.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(n,an)),_i.normalize(),ya.crossVectors(an,_i),s[0]=_i.x,s[4]=ya.x,s[8]=an.x,s[1]=_i.y,s[5]=ya.y,s[9]=an.y,s[2]=_i.z,s[6]=ya.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],M=n[7],y=n[11],T=n[15],b=s[0],x=s[4],w=s[8],I=s[12],R=s[1],N=s[5],U=s[9],k=s[13],P=s[2],V=s[6],q=s[10],G=s[14],te=s[3],W=s[7],Q=s[11],ee=s[15];return r[0]=a*b+o*R+l*P+c*te,r[4]=a*x+o*N+l*V+c*W,r[8]=a*w+o*U+l*q+c*Q,r[12]=a*I+o*k+l*G+c*ee,r[1]=h*b+u*R+d*P+f*te,r[5]=h*x+u*N+d*V+f*W,r[9]=h*w+u*U+d*q+f*Q,r[13]=h*I+u*k+d*G+f*ee,r[2]=m*b+_*R+p*P+g*te,r[6]=m*x+_*N+p*V+g*W,r[10]=m*w+_*U+p*q+g*Q,r[14]=m*I+_*k+p*G+g*ee,r[3]=v*b+M*R+y*P+T*te,r[7]=v*x+M*N+y*V+T*W,r[11]=v*w+M*U+y*q+T*Q,r[15]=v*I+M*k+y*G+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*f-c*d,M=o*f-c*u,y=o*d-l*u,T=a*f-c*h,b=a*d-l*h,x=a*u-o*h;return t*(_*v-p*M+g*y)-n*(m*v-p*T+g*b)+s*(m*M-_*T+g*x)-r*(m*y-_*b+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*o-n*a,M=t*l-s*a,y=t*c-r*a,T=n*l-s*o,b=n*c-r*o,x=s*c-r*l,w=h*_-u*m,I=h*p-d*m,R=h*g-f*m,N=u*p-d*_,U=u*g-f*_,k=d*g-f*p,P=v*k-M*U+y*N+T*R-b*I+x*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(o*k-l*U+c*N)*V,e[1]=(s*U-n*k-r*N)*V,e[2]=(_*x-p*b+g*T)*V,e[3]=(d*b-u*x-f*T)*V,e[4]=(l*R-a*k-c*I)*V,e[5]=(t*k-s*R+r*I)*V,e[6]=(p*y-m*x-g*M)*V,e[7]=(h*x-d*y+f*M)*V,e[8]=(a*U-o*R+c*w)*V,e[9]=(n*R-t*U-r*w)*V,e[10]=(m*b-_*y+g*v)*V,e[11]=(u*y-h*b-f*v)*V,e[12]=(o*I-a*N-l*w)*V,e[13]=(t*N-n*I+s*w)*V,e[14]=(_*M-m*T-p*v)*V,e[15]=(h*T-u*M+d*v)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,p=a*u,g=o*u,v=l*c,M=l*h,y=l*u,T=n.x,b=n.y,x=n.z;return s[0]=(1-(_+g))*T,s[1]=(f+y)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+g))*b,s[6]=(p+v)*b,s[7]=0,s[8]=(m+M)*x,s[9]=(p-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===vn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ts)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===vn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ts)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lo.prototype.isMatrix4=!0;var Oe=Lo,cs=new C,En=new Oe,Lp=new C(0,0,0),Dp=new C(1,1,1),_i=new C,ya=new C,an=new C,du=new Oe,fu=new ut,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Np=0,pu=new C,hs=new ut,Jn=new Oe,ba=new C,lr=new C,Fp=new C,Up=new ut,mu=new C(1,0,0),gu=new C(0,1,0),_u=new C(0,0,1),xu={type:"added"},kp={type:"removed"},us={type:"childadded",child:null},ic={type:"childremoved",child:null},Et=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new en,n=new ut,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ue}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(lr,ba,this.up):Jn.lookAt(ba,lr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Jn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),us.child=e,this.dispatchEvent(us),us.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Op={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=rh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sc(a,r,e+1/3),this.g=sc(a,r,e),this.b=sc(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.workingToColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=yt){je.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ma);let n=_r(xi.h,Ma.h,t),s=_r(xi.s,Ma.s,t),r=_r(xi.l,Ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Be;Be.NAMES=Id;var $i=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new C,Kn=new C,rc=new C,jn=new C,ds=new C,fs=new C,vu=new C,ac=new C,oc=new C,lc=new C,cc=new pt,hc=new pt,uc=new pt,Mi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Kn.subVectors(n,t),rc.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Kn),l=Tn.dot(rc),c=Kn.dot(Kn),h=Kn.dot(rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Kn.subVectors(e,t),Tn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),ac.subVectors(e,n);let l=ds.dot(ac),c=fs.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,s);let h=ds.dot(oc),u=fs.dot(oc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ds,a);lc.subVectors(e,r);let f=ds.dot(lc),m=fs.dot(lc);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(fs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return vu.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(vu,o);let g=1/(p+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),wa.subVectors(this.max,cr),ps.subVectors(e.a,cr),ms.subVectors(e.b,cr),gs.subVectors(e.c,cr),vi.subVectors(ms,ps),yi.subVectors(gs,ms),Gi.subVectors(ps,gs);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Gi.z,Gi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Gi.z,0,-Gi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Gi.y,Gi.x,0];return!dc(t,ps,ms,gs,wa)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,ps,ms,gs,wa))?!1:(Ea.crossVectors(vi,yi),t=[Ea.x,Ea.y,Ea.z],dc(t,ps,ms,gs,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Sa=new xt,ps=new C,ms=new C,gs=new C,vi=new C,yi=new C,Gi=new C,cr=new C,wa=new C,Ea=new C,Vi=new C;function dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wt=new C,Ta=new he,Bp=0,Rt=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=e!==void 0?oh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cd(e,this.array)}};var wr=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Er=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},zp=new xt,hr=new C,fc=new C,ii=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(fc)),this.expandByPoint(hr.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hp=0,xn=new Oe,pc=new Et,_s=new C,on=new xt,ur=new xt,Ut=new C,bt=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dp(e)?Er:wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(on.min,ur.min),on.expandByPoint(Ut),Ut.addVectors(on.max,ur.max),on.expandByPoint(Ut)):(on.expandByPoint(ur.min),on.expandByPoint(ur.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Ut.add(_s)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;let h=new C,u=new C,d=new C,f=new he,m=new he,_=new he,p=new C,g=new C;function v(I,R,N){c[I]=c[R]=c[N]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,R),_.fromBufferAttribute(r,N),u.sub(h),d.sub(h),m.sub(f),_.sub(f);let U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(U),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(U),o[I].add(p),o[R].add(p),o[N].add(p),l[I].add(g),l[R].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,R=M.length;I<R;++I){let N=M[I],U=N.start,k=N.count;for(let P=U,V=U+k;P<V;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new C,T=new C,b=new C,x=new C;function w(I){b.fromBufferAttribute(s,I),x.copy(b);let R=o[I];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),T.crossVectors(x,R);let U=T.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,R=n.count;I<R;++I)c[I]&&w(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Rt(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=new C,Gp=new C,Vp=new Ue,ln=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vp.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wp=0,Cn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=zs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=zc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ei=new C,gc=new C,Aa=new C,Ra=new C,Si=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Ra.dot(this.direction),l=-Ra.dot(Aa),c=Ra.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Aa,d),f}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h),x,w,I,R,N,U,k,P,V,q,G,te;if(y>=T&&y>=b?(I=l,U=u,V=m,te=g,l>=0?(x=c,w=h,R=d,N=f,k=_,P=p,q=v,G=M):(x=h,w=c,R=f,N=d,k=p,P=_,q=M,G=v)):T>=b?(I=c,U=d,V=_,te=v,c>=0?(x=h,w=l,R=f,N=u,k=p,P=m,q=M,G=g):(x=l,w=h,R=u,N=f,k=m,P=p,q=g,G=M)):(I=h,U=f,V=p,te=M,h>=0?(x=l,w=c,R=u,N=d,k=m,P=_,q=g,G=v):(x=c,w=l,R=d,N=u,k=_,P=m,q=v,G=g)),I===0)return null;let W=x/I,Q=w/I,ee=1/I,we=R-W*U,ze=N-Q*U,Z=k-W*V,_e=P-Q*V,be=q-W*te,Pe=G-Q*te,xe=be*_e-Pe*Z,Ge=we*Pe-ze*be,Mt=Z*ze-_e*we;if(s){if(xe<0||Ge<0||Mt<0)return null}else if((xe<0||Ge<0||Mt<0)&&(xe>0||Ge>0||Mt>0))return null;let Ne=xe+Ge+Mt;if(Ne===0)return null;let rt=ee*(xe*U+Ge*V+Mt*te);return(Ne>0?rt<0:rt>0)?null:this.at(rt/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wi=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yu=new Oe,Wi=new Si,Ca=new ii,bu=new C,Ia=new C,Pa=new C,La=new C,_c=new C,Da=new C,Mu=new C,Na=new C,Ae=class extends Et{constructor(e=new bt,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),a?Da.addScaledVector(_c,h):Da.addScaledVector(_c.sub(t),h))}t.add(Da)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Ca,bu)===null||Wi.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(yu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let b=o.getX(y),x=o.getX(y+1),w=o.getX(y+2);s=Fa(this,g,e,n,c,h,u,b,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);s=Fa(this,a,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],v=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let b=y,x=y+1,w=y+2;s=Fa(this,g,e,n,c,h,u,b,x,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let v=p,M=p+1,y=p+2;s=Fa(this,a,e,n,c,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function qp(i,e,t,n,s,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;Na.copy(o),Na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:i}}function Fa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ia),i.getVertexPosition(l,Pa),i.getVertexPosition(c,La);let h=qp(i,e,t,n,Ia,Pa,La,Mu);if(h){let u=new C;Mi.getBarycoord(Mu,Ia,Pa,La,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Mi.getNormal(Ia,Pa,La,d.normal),h.face=d,h.barycoord=u}return h}var Tr=class extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=kt,h=kt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Oe,Su=new Oe,Ua=[],wu=new xt,Xp=new Oe,dr=new Ae,fr=new ii,Yi=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),wu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),fr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Su.multiplyMatrices(n,xs),dr.matrixWorld=Su,dr.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){let l=Ua[a];l.instanceId=r,l.object=this,t.push(l)}Ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Ho,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new ii,$p=new he(.5,.5),ka=new C,Ei=class{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],M=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-m,T-v).normalize(),s[1].setComponents(c+a,f+h,g+m,T+v).normalize(),s[2].setComponents(c+o,f+u,g+_,T+M).normalize(),s[3].setComponents(c-o,f-u,g-_,T-M).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,g-p,T-y).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-y).normalize(),t===vn)s[5].setComponents(c+l,f+d,g+p,T+y).normalize();else if(t===Ts)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=$p.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new Oe,ao=class i{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ei),n[s].setFromProjectionMatrix(Eu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ds=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new C,lo=new C,Tu=new Oe,pr=new Si,Oa=new ii,xc=new C,Au=new C,co=class extends Et{constructor(e=new bt,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)oo.fromBufferAttribute(t,s-1),lo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Tu.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),M=Ba(this,e,pr,l,g,v,_);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(f),g=Ba(this,e,pr,l,_,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=c){let g=Ba(this,e,pr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Ba(this,e,pr,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ba(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),lo.fromBufferAttribute(o,r),t.distanceSqToSegment(oo,lo,xc,Au)>n)return;xc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xc);if(!(c<e.near||c>e.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ru=new C,Cu=new C,Rr=class extends co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ru.fromBufferAttribute(t,s),Cu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ru.distanceTo(Cu);e.setAttribute("lineDistance",new Ye(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Cr=class extends Yt{constructor(e=[],t=es,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hn=class extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var si=class extends Yt{constructor(e,t,n=Pn,s,r,a,o=kt,l=kt,c,h=ni,u=1){if(h!==ni&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ir=class extends si{constructor(e,t=Pn,n=es,s,r,a=kt,o=kt,l,c=ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pr=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function m(_,p,g,v,M,y,T,b,x,w,I){let R=y/x,N=T/w,U=y/2,k=T/2,P=b/2,V=x+1,q=w+1,G=0,te=0,W=new C;for(let Q=0;Q<q;Q++){let ee=Q*N-k;for(let we=0;we<V;we++){let ze=we*R-U;W[_]=ze*v,W[p]=ee*M,W[g]=P,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=b>0?1:-1,h.push(W.x,W.y,W.z),u.push(we/x),u.push(1-Q/w),G+=1}}for(let Q=0;Q<w;Q++)for(let ee=0;ee<x;ee++){let we=d+ee+V*Q,ze=d+ee+V*(Q+1),Z=d+(ee+1)+V*(Q+1),_e=d+(ee+1)+V*Q;l.push(we,ze,_e),l.push(ze,Z,_e),te+=6}o.addGroup(f,te,I),f+=te,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Zi=class i extends bt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,_=s+1,p=new C,g=new C;for(let v=0;v<=m;v++){let M=0,y=0,T=0,b=0;if(v<=n){let I=v/n,R=I*Math.PI/2;y=-h-e*Math.cos(R),T=e*Math.sin(R),b=-e*Math.cos(R),M=I*u}else if(v<=n+r){let I=(v-n)/r;y=-h+I*t,T=e,b=0,M=u+I*d}else{let I=(v-n-r)/n,R=I*Math.PI/2;y=h+e*Math.sin(R),T=e*Math.cos(R),b=e*Math.sin(R),M=u+d+I*u}let x=Math.max(0,Math.min(1,M/f)),w=0;v===0?w=.5/s:v===m&&(w=-.5/s);for(let I=0;I<=s;I++){let R=I/s,N=R*Math.PI*2,U=Math.sin(N),k=Math.cos(N);g.x=-T*k,g.y=y,g.z=T*U,o.push(g.x,g.y,g.z),p.set(-T*k,b,T*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+w,x)}if(v>0){let I=(v-1)*_;for(let R=0;R<s;R++){let N=I+R,U=I+R+1,k=v*_+R,P=v*_+R+1;a.push(N,U,k),a.push(U,P,k)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zn=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ri=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],p=n/2,g=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function v(){let y=new C,T=new C,b=0,x=(t-e)/n;for(let w=0;w<=r;w++){let I=[],R=w/r,N=R*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,P=k*l+o,V=Math.sin(P),q=Math.cos(P);T.x=N*V,T.y=-R*n+p,T.z=N*q,u.push(T.x,T.y,T.z),y.set(V,x,q).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-R),I.push(m++)}_.push(I)}for(let w=0;w<s;w++)for(let I=0;I<r;I++){let R=_[I][w],N=_[I+1][w],U=_[I+1][w+1],k=_[I][w+1];(e>0||I!==0)&&(h.push(R,N,k),b+=3),(t>0||I!==r-1)&&(h.push(N,U,k),b+=3)}c.addGroup(g,b,0),g+=b}function M(y){let T=m,b=new he,x=new C,w=0,I=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let N=m;for(let U=0;U<=s;U++){let P=U/s*l+o,V=Math.cos(P),q=Math.sin(P);x.x=I*q,x.y=p*R,x.z=I*V,u.push(x.x,x.y,x.z),d.push(0,R,0),b.x=V*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),m++}for(let U=0;U<s;U++){let k=T+U,P=N+U;y===!0?h.push(P,P+1,k):h.push(P+1,P,k),w+=3}c.addGroup(g,w,y===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new Oe;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Lr=class extends yn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ho=class extends Lr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Iu=new C,Pu=new C,vc=new lh,yc=new lh,bc=new lh,Ti=class extends yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Pu.subVectors(s[0],s[1]).add(s[0]),c=Pu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),vc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),yc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),bc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),yc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(vc.calc(l),yc.calc(l),bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Yp(i,e){let t=1-i;return t*t*e}function Zp(i,e){return 2*(1-i)*i*e}function Jp(i,e){return i*i*e}function xr(i,e,t,n){return Yp(i,e)+Zp(i,t)+Jp(i,n)}function Kp(i,e){let t=1-i;return t*t*t*e}function jp(i,e){let t=1-i;return 3*t*t*i*e}function Qp(i,e){return 3*(1-i)*i*i*e}function em(i,e){return i*i*i*e}function vr(i,e,t,n,s){return Kp(i,e)+jp(i,t)+Qp(i,n)+em(i,s)}var uo=class extends yn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends yn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y),vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends yn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends yn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends yn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends yn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y),xr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Lu(o,l.x,c.x,h.x,u.x),Lu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},tm=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:Ti,CubicBezierCurve:uo,CubicBezierCurve3:fo,EllipseCurve:Lr,LineCurve:po,LineCurve3:mo,QuadraticBezierCurve:go,QuadraticBezierCurve3:Dr,SplineCurve:_o});function nm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=om(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Nr(r,a,t,o,l,c,0),a}function Pd(i,e,t,n,s){let r;if(s===xm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Du(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Du(a/n|0,i[a],i[a+1],r);return r&&Ns(r,r.next)&&(Ur(r),r=r.next),r}function Ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ns(t,t.next)||_t(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sm(i,n,s,r):im(i)){e.push(l.i,i.i,c.i),Ur(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rm(Ji(i),e),Nr(i,e,t,n,s,r,2)):a===2&&am(i,e,t,n,s,r):Nr(Ji(i),e,t,n,s,r,1);break}}}function im(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&mr(s,o,r,l,a,c,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(_t(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),_=Math.max(o,l,c),p=Math.max(h,u,d),g=Ac(f,m,e,t,n),v=Ac(_,p,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&mr(o,h,l,u,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&mr(o,h,l,u,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&mr(o,h,l,u,c,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&mr(o,h,l,u,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ns(n,s)&&Dd(n,t,t.next,s)&&Fr(n,s)&&Fr(s,n)&&(e.push(n.i,t.i,s.i),Ur(t),Ur(t.next),t=i=s),t=t.next}while(t!==i);return Ji(t)}function am(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mm(a,o)){let l=Nd(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Nr(a,e,t,n,s,r,0),Nr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function om(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Pd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pm(c))}s.sort(lm);for(let r=0;r<s.length;r++)t=cm(s[r],t);return t}function lm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cm(i,e){let t=hm(i,e);if(!t)return e;let n=Nd(t,i);return Ji(n,n.next),Ji(t,t.next)}function hm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ns(i,t))return t;do{if(Ns(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ld(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Fr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&um(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function um(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function dm(i,e,t,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fm(s)}function fm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ld(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function mr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ld(i,e,t,n,s,r,a,o)}function mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gm(i,e)&&(Fr(i,e)&&Fr(e,i)&&_m(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||Ns(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ns(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let s=Ha(_t(i,e,t)),r=Ha(_t(i,e,n)),a=Ha(_t(t,n,i)),o=Ha(_t(t,n,e));return!!(s!==r&&a!==o||s===0&&za(i,t,e)||r===0&&za(i,n,e)||a===0&&za(t,i,n)||o===0&&za(t,e,n))}function za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function gm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fr(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function _m(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nd(i,e){let t=Rc(i.i,i.x,i.y),n=Rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Du(i,e,t,n){let s=Rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Cc=class{static triangulate(e,t,n=2){return nm(e,t,n)}},Ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Nu(e),Fu(n,e);let a=e.length;t.forEach(Nu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Fu(n,t[l]);let o=Cc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fs=class i extends bt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new he,f=new C,m=new C,_=new C,p=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=t;v++){let M=n+v*h*s,y=Math.sin(M),T=Math.cos(M);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*T,a.push(u.x,u.y,u.z),d.x=v/t,d.y=b/(e.length-1),o.push(d.x,d.y);let x=l[3*b+0]*y,w=l[3*b+1],I=l[3*b+0]*T;c.push(x,w,I)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let y=M+v*e.length,T=y,b=y+e.length,x=y+e.length+1,w=y+1;r.push(T,b,w),r.push(x,w,b)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ai=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*d-a;for(let M=0;M<c;M++){let y=M*u-r;m.push(y,-v,0),_.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let M=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),b=v+1+c*g;f.push(M,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var un=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new C,f=new C,m=new C;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let g=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,M=(s+1)*(_-1)+p,y=(s+1)*_+p;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ki=class i extends bt{constructor(e=new Dr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new he,h=new C,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function _(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),v(),g()}function p(M){h=e.getPointAt(M/t,h);let y=a.normals[M],T=a.binormals[M];for(let b=0;b<=s;b++){let x=b/s*Math.PI*2,w=Math.sin(x),I=-Math.cos(x);l.x=I*y.x+w*T.x,l.y=I*y.y+w*T.y,l.z=I*y.z+w*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let T=(s+1)*(M-1)+(y-1),b=(s+1)*M+(y-1),x=(s+1)*M+y,w=(s+1)*(M-1)+y;m.push(T,b,w),m.push(b,x,w)}}function v(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new tm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var kr=class extends Cn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Uu(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=is(i[t]);for(let s in n)e[s]=n[s]}return e}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ch(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Fd={clone:is,merge:Zt},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xo=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jt=class extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Or=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=No,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vo=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yo=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,o=2*t-n;break;case Tc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case Tc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+M*a[l+T]+y*a[u+T];return r}},Mo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},So=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wo=class extends Ri{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),_=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=f*d+m*2,v=u[g],M=u[g+1],y=e*d+m*2,T=h[y],b=h[y+1],x=Sm(n,t,v,T,s);r[m]=Ud(x,_,M,b,p)}return r}};function Ud(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Mm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Sm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ud(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Mm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vs(t,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vs(e.times,Array),values:vs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ga(e.settings)&&(n.settings={inTangents:vs(e.settings.inTangents,Array),outTangents:vs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break;case Sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ga(this.settings)&&(ku(this.settings.inTangents,e),ku(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ga(this.settings)&&(Ou(this.settings.inTangents,e),Ou(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ku(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ou(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=no;var Ci=class extends dn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=yr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Eo.prototype.ValueTypeName="color";var To=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};To.prototype.ValueTypeName="number";var Ao=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ut.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends dn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=yr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Ro.prototype.ValueTypeName="vector";var $a={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Bu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Bu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Bu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Co=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kd=new Co,Us=class{constructor(e){this.manager=e!==void 0?e:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Us.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=new WeakMap,Io=class extends Us{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$a.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ys.get(a);u===void 0&&(u=[],ys.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=As("img");function l(){h(),t&&t(this);let u=ys.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ys.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),$a.remove(`image:${e}`);let d=ys.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$a.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var zr=class extends Us{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,a=new Io(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hr=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Mc=new Oe,zu=new C,Hu=new C,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Va=new C,Wa=new ut,On=new C,Vr=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Wa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Wa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new C,Gu=new he,Vu=new he,$t=class extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Vu),t.subVectors(Vu,Gu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ic=class extends Gr{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qr=class extends Vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=class extends Gr{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bs=-90,Ms=1,Os=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(bs,Ms,e,t);s.layers=this.layers,this.add(s);let r=new $t(bs,Ms,e,t);r.layers=this.layers,this.add(r);let a=new $t(bs,Ms,e,t);a.layers=this.layers,this.add(a);let o=new $t(bs,Ms,e,t);o.layers=this.layers,this.add(o);let l=new $t(bs,Ms,e,t);l.layers=this.layers,this.add(l);let c=new $t(bs,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Po=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var hh="\\[\\]\\.:\\/",wm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Em="[^"+hh.replace("\\.","")+"]",Tm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Am=/(WCOD+)?/.source.replace("WCOD",Em),Rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Im=new RegExp("^"+Tm+Am+Rm+Cm+"$"),Pm=["material","materials","bones","map"],Lc=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(e){let t=Im.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Lc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nb=new Float32Array(1);var Wu=new Oe,Xr=class{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dc(e[s],this,n,t);return n.sort(qu),n}};function qu(i,e){return i.distance-e.distance}function Dc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],e,t,!0)}}var Pi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _h=class _h{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_h.prototype.isMatrix2=!0;var Nc=_h;var $r=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function dh(i,e,t,n){let s=Lm(n);switch(t){case jc:return i*e;case Ho:return i*e/s.components*s.byteLength;case Go:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case Vo:return i*e*2/s.components*s.byteLength;case Qc:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case Wo:return i*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(e,8)/4;case qo:case $o:return Math.max(i,8)*Math.max(e,8)/2;case Zo:case Jo:case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:case ta:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case na:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lm(i){switch(i){case sn:case Yc:return{byteLength:1,components:1};case Gs:case Zc:case Ln:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case Pn:case Oo:case bn:return{byteLength:4,components:1};case Jc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function af(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,D0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
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
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform float backgroundBlurriness;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,Gg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,t_=`#define NORMAL
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
}`,n_=`#define PHONG
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
}`,i_=`#define PHONG
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
}`,s_=`#define STANDARD
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
}`,r_=`#define STANDARD
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
}`,a_=`#define TOON
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
}`,o_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,h_=`#include <common>
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
}`,u_=`uniform vec3 color;
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
}`,d_=`uniform float rotation;
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
}`,f_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Fm,alphahash_pars_fragment:Um,alphamap_fragment:km,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:Hm,aomap_pars_fragment:Gm,batching_pars_vertex:Vm,batching_vertex:Wm,begin_vertex:qm,beginnormal_vertex:Xm,bsdfs:$m,iridescence_fragment:Ym,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Qm,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:a0,displacementmap_vertex:o0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:w0,lights_pars_begin:E0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:I0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:F0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:X0,morphinstance_vertex:$0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:j0,normal_fragment_maps:Q0,normal_pars_fragment:eg,normal_pars_vertex:tg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:ag,iridescence_pars_fragment:og,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:dg,dithering_pars_fragment:fg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:_g,shadowmap_vertex:xg,shadowmask_pars_fragment:vg,skinbase_vertex:yg,skinning_pars_vertex:bg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Eg,tonemapping_fragment:Tg,tonemapping_pars_fragment:Ag,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Ig,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Dg,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Ug,backgroundCube_frag:kg,cube_vert:Og,cube_frag:Bg,depth_vert:zg,depth_frag:Hg,distance_vert:Gg,distance_frag:Vg,equirect_vert:Wg,equirect_frag:qg,linedashed_vert:Xg,linedashed_frag:$g,meshbasic_vert:Yg,meshbasic_frag:Zg,meshlambert_vert:Jg,meshlambert_frag:Kg,meshmatcap_vert:jg,meshmatcap_frag:Qg,meshnormal_vert:e_,meshnormal_frag:t_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:a_,meshtoon_frag:o_,points_vert:l_,points_frag:c_,shadow_vert:h_,shadow_frag:u_,sprite_vert:d_,sprite_frag:f_},ge={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Wn={basic:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Zt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Zt([ge.lights,ge.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Wn.physical={uniforms:Zt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var bl={r:0,b:0,g:0},p_=new Oe,of=new Ue;of.set(-1,0,0,0,1,0,0,0,1);function m_(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(v){let M=!1,y=f(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Ae(new tn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:is(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=je.getTransfer(y.colorSpace)!==st,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ae(new ai(2,2),new Hn({name:"BackgroundMaterial",uniforms:is(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(bl,ch(i)),t.buffers.color.setClear(bl.r,bl.g,bl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:_,dispose:g}}function g_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,U,k,P,V){let q=!1,G=u(N,P,k,U);r!==G&&(r=G,c(r.object)),q=f(N,P,k,V),q&&m(N,P,k,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,U,k,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,U,k,P){let V=P.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let G=N.isInstancedMesh===!0?N.id:0,te=q[G];te===void 0&&(te={},q[G]=te);let W=te[k.id];W===void 0&&(W={},te[k.id]=W);let Q=W[V];return Q===void 0&&(Q=d(l()),W[V]=Q),Q}function d(N){let U=[],k=[],P=[];for(let V=0;V<t;V++)U[V]=0,k[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,U,k,P){let V=r.attributes,q=U.attributes,G=0,te=k.getAttributes();for(let W in te)if(te[W].location>=0){let ee=V[W],we=q[W];if(we===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),ee===void 0||ee.attribute!==we||we&&ee.data!==we.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function m(N,U,k,P){let V={},q=U.attributes,G=0,te=k.getAttributes();for(let W in te)if(te[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let we={};we.attribute=ee,ee&&ee.data&&(we.data=ee.data),V[W]=we,G++}r.attributes=V,r.attributesNum=G,r.index=P}function _(){let N=r.newAttributes;for(let U=0,k=N.length;U<k;U++)N[U]=0}function p(N){g(N,0)}function g(N,U){let k=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;k[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),V[N]!==U&&(i.vertexAttribDivisor(N,U),V[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let k=0,P=U.length;k<P;k++)U[k]!==N[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function M(N,U,k,P,V,q,G){G===!0?i.vertexAttribIPointer(N,U,k,V,q):i.vertexAttribPointer(N,U,k,P,V,q)}function y(N,U,k,P){_();let V=P.attributes,q=k.getAttributes(),G=U.defaultAttributeValues;for(let te in q){let W=q[te];if(W.location>=0){let Q=V[te];if(Q===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ee=Q.normalized,we=Q.itemSize,ze=e.get(Q);if(ze===void 0)continue;let Z=ze.buffer,_e=ze.type,be=ze.bytesPerElement,Pe=_e===i.INT||_e===i.UNSIGNED_INT||Q.gpuType===Oo;if(Q.isInterleavedBufferAttribute){let xe=Q.data,Ge=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Mt=Q.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Ne=0;Ne<W.locationSize;Ne++)g(W.location+Ne,xe.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ne=0;Ne<W.locationSize;Ne++)p(W.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ne=0;Ne<W.locationSize;Ne++)M(W.location+Ne,we/W.locationSize,_e,ee,Ge*be,(Mt+we/W.locationSize*Ne)*be,Pe)}else{if(Q.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let xe=0;xe<W.locationSize;xe++)M(W.location+xe,we/W.locationSize,_e,ee,we*be,we/W.locationSize*xe*be,Pe)}}else if(G!==void 0){let ee=G[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}v()}function T(){I();for(let N in n){let U=n[N];for(let k in U){let P=U[k];for(let V in P){let q=P[V];for(let G in q)h(q[G].object),delete q[G];delete P[V]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let k in U){let P=U[k];for(let V in P){let q=P[V];for(let G in q)h(q[G].object),delete q[G];delete P[V]}}delete n[N.id]}function x(N){for(let U in n){let k=n[U];for(let P in k){let V=k[P];if(V[N.id]===void 0)continue;let q=V[N.id];for(let G in q)h(q[G].object),delete q[G];delete V[N.id]}}}function w(N){for(let U in n){let k=n[U],P=N.isInstancedMesh===!0?N.id:0,V=k[P];if(V!==void 0){for(let q in V){let G=V[q];for(let te in G)h(G[te].object),delete G[te];delete V[q]}delete k[P],Object.keys(k).length===0&&delete n[U]}}}function I(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function __(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function x_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Dn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==sn&&x!==bn&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:b}}function v_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ln,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,M=v*4,y=g.clippingState||null;l.value=y,y=h(m,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==_;++M,y+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var aa=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:ji});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Kt),new Os(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Od=256,y_=3,b_=20,lf=256,cf=16,M_=3,S_=new C,w_=new Be,qs=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Os(1,10,null),this._boxMesh=new Ae(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=S_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(w_));let p=new Os(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Od,ah(e))}_fromTexture(e,t){e.mapping===es||e.mapping===Hs?this._setSize(e.image.length===0?Od:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Bd(e,!1,!1),n=Math.log2(e)-y_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===es||e.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=E_(),this._integrationMaterial=T_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-M_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(lf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=A_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Bd(i,e,t){return new aa(i,{minFilter:In,generateMipmaps:e,type:Ln,colorSpace:br,depthBuffer:t})}function oa(i,e,t){return new Hn({name:i,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Ct,blending:ji,depthTest:!1,depthWrite:!1})}function E_(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lf}u

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
	`)}function T_(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cf}},`

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
	`)}function A_(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b_}
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
	`)}function zd(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hd(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function R_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Fo||f===Uo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new aa(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Fo||f===Uo,_=f===es||f===Hs;if(m||_){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new qs(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new qs(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Fo?d.mapping=es:f===Uo&&(d.mapping=Hs),d}function l(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function C_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function I_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function u(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?Er:wr,y=new M(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let w=0,I=0;w<v;w+=3){let R=x[w+0],N=x[w+1],U=x[w+2];T[I++]=R,T[I++]=N,T[I++]=N,T[I++]=U,T[I++]=U,T[I++]=R}}else{g=p.version;for(let x=0,w=0;x<v;x+=3){let I=x+0,R=x+1,N=x+2;T[w++]=I,T[w++]=R,T[w++]=R,T[w++]=N,T[w++]=N,T[w++]=I}}y.version=g;let b=r.get(m);b&&e.remove(b),r.set(m,y)}function d(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function P_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function L_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function D_(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*u),x=new Sr(b,y,T,u);x.type=bn,x.needsUpdate=!0;let w=M*4;for(let R=0;R<u;R++){let N=p[R],U=g[R],k=v[R],P=y*T*4*R;for(let V=0;V<N.count;V++){let q=V*w;f===!0&&(s.fromBufferAttribute(N,V),b[P+q+0]=s.x,b[P+q+1]=s.y,b[P+q+2]=s.z,b[P+q+3]=0),m===!0&&(s.fromBufferAttribute(U,V),b[P+q+4]=s.x,b[P+q+5]=s.y,b[P+q+6]=s.z,b[P+q+7]=0),_===!0&&(s.fromBufferAttribute(k,V),b[P+q+8]=s.x,b[P+q+9]=s.y,b[P+q+10]=s.z,b[P+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new he(y,T)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function N_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var F_={[Hc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[Zr]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};function U_(i,e,t,n,s,r){let a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new bt;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let u=new xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(h,u),f=new qr(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,M=[],y=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),l!==null&&l.setSize(T,b);for(let x=0;x<M.length;x++){let w=M[x];w.setSize&&w.setSize(T,b)}},this.setEffects=function(T){M=T,y=M.length>0&&M[0].isRenderPass===!0;let b=a.width,x=a.height;M.length>0&&o===null&&(o=new cn(b,x,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new cn(b,x,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&M.some(I=>I.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new si(b,x),r===!0&&(c.format=oi,c.type=ts)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let I=0;I<M.length;I++){let R=M[I];R.setSize&&R.setSize(b,x),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,b){if(p||T.toneMapping===Gn&&M.length===0)return!1;if(v=b,b!==null){let x=b.width,w=b.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Gn,!0},this.hasRenderPass=function(){return y},this.end=function(T,b){T.toneMapping=g,p=!0;let x=a,w=o;for(let I=0;I<M.length;I++){let R=M[I];R.enabled!==!1&&(R.render(T,w,x,b),R.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,u.defines={},je.getTransfer(m)===st&&(u.defines.SRGB_TRANSFER="");let I=F_[_];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var hf=new Yt,uf=new si(1,1),df=new Ir(1),ff=new Sr,pf=new ro,mf=new Cr,Gd=[],Vd=[],Wd=new Float32Array(16),qd=new Float32Array(9),Xd=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wl(i,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function H_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Pt(t,n)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Pt(t,n)}}function V_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Pt(t,n)}}function W_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function El(i){return i.version===0&&(i.compareFunction=nh,i.needsUpdate=!0),i}function j_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=El(uf):r=hf,t.setTexture2D(e||r,s)}function Q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pf,s)}function ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=El(df):r=mf,t.setTextureCube(e||r,s)}function tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ff,s)}function nx(i){switch(i){case 5126:return k_;case 35664:return O_;case 35665:return B_;case 35666:return z_;case 35674:return H_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return W_;case 35667:case 35671:return q_;case 35668:case 35672:return X_;case 35669:case 35673:return $_;case 5125:return Y_;case 36294:return Z_;case 36295:return J_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(i,e){i.uniform1fv(this.addr,e)}function sx(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function rx(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function ax(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lx(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cx(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hx(i,e){i.uniform1iv(this.addr,e)}function ux(i,e){i.uniform2iv(this.addr,e)}function dx(i,e){i.uniform3iv(this.addr,e)}function fx(i,e){i.uniform4iv(this.addr,e)}function px(i,e){i.uniform1uiv(this.addr,e)}function mx(i,e){i.uniform2uiv(this.addr,e)}function gx(i,e){i.uniform3uiv(this.addr,e)}function _x(i,e){i.uniform4uiv(this.addr,e)}function xx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=El(uf):a=hf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function vx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pf,r[a])}function yx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=El(df):a=mf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function bx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ff,r[a])}function Mx(i){switch(i){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ax;case 35674:return ox;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return bx}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}},bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mx(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function $d(i,e){i.seq.push(e),i.map[e.id]=e}function Sx(i,e,t){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),a=xh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$d(t,c===void 0?new yh(o,i,e):new bh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mh(o),$d(t,u)),t=u}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Sx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wx=37297,Ex=0;function Tx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zd=new Ue;function Ax(i){je._getMatrix(Zd,je.workingColorSpace,i);let e=`mat3( ${Zd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Mr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tx(i.getShaderSource(e),o)}else return r}function Rx(i,e){let t=Ax(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cx={[Hc]:"Linear",[Gc]:"Reinhard",[Vc]:"Cineon",[Wc]:"ACESFilmic",[Xc]:"AgX",[Zr]:"Neutral",[qc]:"Custom"};function Ix(i,e){let t=Cx[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ml=new C;function Px(){je.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Dx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ra(i){return i!==""}function Kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(Fx,Ux)}function Ux(i,e){let t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(kx,Ox)}function Ox(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Bx={[Yr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function zx(i){return Bx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hx={[Hs]:"ENVMAP_MODE_REFRACTION"};function Gx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vx={[No]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function Wx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vx[i.combine]||"ENVMAP_BLENDING_NONE"}function qx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=zx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gx(t),u=Wx(t),d=Lx(t),f=Dx(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ra).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(_=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Rx("linearToOutputTexel",t.outputColorSpace),Px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=Sh(a),a=Kd(a,t),a=jd(a,t),o=Sh(o),o=Kd(o,t),o=jd(o,t),a=Qd(a),o=Qd(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+a,M=g+p+o,y=Yd(s,s.VERTEX_SHADER,v),T=Yd(s,s.FRAGMENT_SHADER,M);s.attachShader(m,y),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(T)||"",P=N.trim(),V=U.trim(),q=k.trim(),G=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,T);else{let W=Jd(s,y,"vertex"),Q=Jd(s,T,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(V===""||q==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:_},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(T),x=new Ws(s,m),w=Nx(s,m)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,wx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ex++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var Xx=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eh(e),t.set(e,n)),n}},Eh=class{constructor(e){this.id=Xx++,this.code=e,this.usedTimes=0}};function $x(i){return i===Fi||i===ta||i===na}function Yx(i,e,t,n,s,r){let a=new Ps,o=new wh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,I,R,N,U){let k=R.fog,P=N.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||V,q),te=d[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0,we=0;P.morphAttributes.position!==void 0&&(we=1),P.morphAttributes.normal!==void 0&&(we=2),P.morphAttributes.color!==void 0&&(we=3);let ze,Z,_e,be;if(te){let me=Wn[te];ze=me.vertexShader,Z=me.fragmentShader}else{ze=x.vertexShader,Z=x.fragmentShader;let me=o.getVertexShaderStage(x),at=o.getFragmentShaderStage(x);o.update(x,me,at),_e=me.id,be=at.id}let Pe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ge=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,Ne=!!x.map,rt=!!x.matcap,ot=!!G,Ze=ot&&G.isPMREMTexture===!0,zt=!!x.aoMap,Tt=!!x.lightMap,Qt=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,kn=!!x.displacementMap,Dt=!!x.emissiveMap,pn=!!x.metalnessMap,mn=!!x.roughnessMap,gn=x.anisotropy>0,F=x.clearcoat>0,_n=x.diffuseRoughness>0,dt=x.dispersion>0,ft=x.retroreflectivity>0,fe=x.iridescence>0,At=x.sheen>0,Le=x.transmission>0,ke=gn&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,S=F&&!!x.clearcoatNormalMap,B=F&&!!x.clearcoatRoughnessMap,ne=_n&&!!x.diffuseRoughnessMap,j=fe&&!!x.iridescenceMap,re=fe&&!!x.iridescenceThicknessMap,ue=At&&!!x.sheenColorMap,$=At&&!!x.sheenRoughnessMap,Y=!!x.specularMap,oe=!!x.specularColorMap,L=!!x.specularIntensityMap,J=Le&&!!x.transmissionMap,X=Le&&!!x.thicknessMap,le=!!x.gradientMap,se=!!x.alphaMap,ae=x.alphaTest>0,Te=!!x.alphaHash,qe=!!x.extensions,ie=Gn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=Ze?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,We={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Z,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&N.instanceColor!==null,instancingMorph:Ge&&N.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:rt,envMap:ot,envMapMode:ot&&G.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Ce.length-1:null,envMapSize:Ze?Ce[0].width:null,aoMap:zt,lightMap:Tt,bumpMap:Qt,normalMap:mt,displacementMap:kn,emissiveMap:Dt,normalMapObjectSpace:mt&&x.normalMapType===gd,normalMapTangentSpace:mt&&x.normalMapType===ia,packedNormalMap:mt&&x.normalMapType===ia&&$x(x.normalMap.format),metalnessMap:pn,roughnessMap:mn,anisotropy:gn,anisotropyMap:ke,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:_n,diffuseRoughnessMap:ne,dispersion:dt,retroreflection:ft,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:re,sheen:At,sheenColorMap:ue,sheenRoughnessMap:$,specularMap:Y,specularColorMap:oe,specularIntensityMap:L,transmission:Le,transmissionMap:J,thicknessMap:X,gradientMap:le,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Te,combine:x.combine,mapUv:Ne&&f(x.map.channel),aoMapUv:zt&&f(x.aoMap.channel),lightMapUv:Tt&&f(x.lightMap.channel),bumpMapUv:Qt&&f(x.bumpMap.channel),normalMapUv:mt&&f(x.normalMap.channel),displacementMapUv:kn&&f(x.displacementMap.channel),emissiveMapUv:Dt&&f(x.emissiveMap.channel),metalnessMapUv:pn&&f(x.metalnessMap.channel),roughnessMapUv:mn&&f(x.roughnessMap.channel),anisotropyMapUv:ke&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(x.sheenRoughnessMap.channel),specularMapUv:Y&&f(x.specularMap.channel),specularColorMapUv:oe&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:X&&f(x.thicknessMap.channel),alphaMapUv:se&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(mt||gn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ne||se),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===Ct,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(w,x),g(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let w=d[x.type],I;if(w){let R=Wn[w];I=Fd.clone(R.uniforms)}else I=x.uniforms;return I}function M(x,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new qx(i,w,x,s),c.push(I),h.set(w,I)),I}function y(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:b}}function Zx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=g),e++,v}function l(d,f,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let M=o(d,f,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(d,f,m,_,p,g){let v=o(d,f,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Jx),n.length>1&&n.sort(f||tf),s.length>1&&s.sort(f||tf)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new nf,i.set(n,[a])):s>=r.length?(a=new nf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function jx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ev=0;function tv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nv(i){let e=new jx,t=Qx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Oe,a=new Oe;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,v=0,M=0,y=0,T=0,b=0,x=0,w=0,I=0,R=0;c.sort(tv);for(let U=0,k=c.length;U<k;U++){let P=c[U],V=P.color,q=P.intensity,G=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fi?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*q,u+=V.g*q,d+=V.b*q;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],q);R++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=te;let we=Q.getViewportCount();for(let ze=0;ze<we;ze++)n.sunShadowMatrix[_+ze]=Q.getMatrix(ze),n.sunShadowCascade[_+ze]=Q._cascadeData[ze];_+=we,m++}n.sun[f]=W,f++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let Q=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=te,x++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=W,M++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(q),W.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==M||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=M,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=R,n.version=ev++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function sf(i){let e=new nv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function iv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sf(i),e.set(s,[o])):r>=a.length?(o=new sf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`,av=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],ov=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],rf=new Oe,sa=new C,vh=new C;function lv(i,e,t){let n=new Ei,s=new he,r=new he,a=new pt,o=new vo,l=new yo,c={},h=t.maxTextureSize,u={[Ni]:Ct,[Ct]:Ni,[nn]:nn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let g=this.type;this.render=function(b,x,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Do&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);let I=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=b.length;P<V;P++){let q=b[P],G=q.shadow;if(G===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Bs){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new cn(s.x,s.y,{format:Fi,type:Ln,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new si(s.x,s.y,bn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=ni,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt}else q.isPointLight?(G.map=new aa(s.x),G.map.depthTexture=new Ir(s.x,Pn)):(G.map=new cn(s.x,s.y),G.map.depthTexture=new si(s.x,s.y,Pn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=ni,this.type===Yr?(G.map.depthTexture.compareFunction=W?th:eh,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,w);let ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:w.layers;for(let we=0;we<Q;we++){let ze=G.getCamera(we);if(q.isPointLight){let Z=G.camera,_e=G.matrix,be=q.distance||Z.far;be!==Z.far&&(Z.far=be,Z.updateProjectionMatrix()),sa.setFromMatrixPosition(q.matrixWorld),Z.position.copy(sa),vh.copy(Z.position),vh.add(av[we]),Z.up.copy(ov[we]),Z.lookAt(vh),Z.updateMatrixWorld(),_e.makeTranslation(-sa.x,-sa.y,-sa.z),rf.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(rf,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,we),i.clear();else{we===0&&(i.setRenderTarget(G.map),i.clear());let Z=G.getViewport(we);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(a)}n=G.getFrustum(we),y(x,w,ze,q,ee,this.type)}G.isPointLightShadow!==!0&&this.type===Bs&&v(G,w),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,R,N)};function v(b,x){let w=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new cn(s.x,s.y,{format:Fi,type:Ln}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,w,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,w,f,_,null)}function M(b,x,w,I){let R=null,N=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=R.uuid,k=x.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let V=P[k];V===void 0&&(V=R.clone(),P[k]=V,x.addEventListener("dispose",T)),R=V}if(R.visible=x.visible,R.wireframe=x.wireframe,I===Bs?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=w}return R}function y(b,x,w,I,R,N){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Bs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let P=e.update(b),V=b.material;if(Array.isArray(V)){let q=P.groups;for(let G=0,te=q.length;G<te;G++){let W=q[G],Q=V[W.materialIndex];if(Q&&Q.visible){let ee=M(b,Q,I,N);b.onBeforeShadow(i,b,x,w,P,ee,W),i.renderBufferDirect(w,null,P,ee,b,W),b.onAfterShadow(i,b,x,w,P,ee,W)}}}else if(V.visible){let q=M(b,V,I,N);b.onBeforeShadow(i,b,x,w,P,q,null),i.renderBufferDirect(w,null,P,q,b,null),b.onAfterShadow(i,b,x,w,P,q,null)}}let k=b.children;for(let P=0,V=k.length;P<V;P++)y(k[P],x,w,I,R,N)}function T(b){b.target.removeEventListener("dispose",T);for(let w in c){let I=c[w],R=b.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function cv(i,e){function t(){let L=!1,J=new pt,X=null,le=new pt(0,0,0,0);return{setMask:function(se){X!==se&&!L&&(i.colorMask(se,se,se,se),X=se)},setLocked:function(se){L=se},setClear:function(se,ae,Te,qe,ie){ie===!0&&(se*=qe,ae*=qe,Te*=qe),J.set(se,ae,Te,qe),le.equals(J)===!1&&(i.clearColor(se,ae,Te,qe),le.copy(J))},reset:function(){L=!1,X=null,le.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,X=null,le=null,se=null;return{setReversed:function(ae){if(J!==ae){let Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),J=ae;let qe=se;se=null,this.setClear(qe)}},getReversed:function(){return J},setTest:function(ae){ae?xe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ae){X!==ae&&!L&&(i.depthMask(ae),X=ae)},setFunc:function(ae){if(J&&(ae=Ad[ae]),le!==ae){switch(ae){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){L=ae},setClear:function(ae){se!==ae&&(se=ae,J&&(ae=1-ae),i.clearDepth(ae))},reset:function(){L=!1,X=null,le=null,se=null,J=!1}}}function s(){let L=!1,J=null,X=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null;return{setTest:function(Ce){L||(Ce?xe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!L&&(i.stencilMask(Ce),J=Ce)},setFunc:function(Ce,We,me){(X!==Ce||le!==We||se!==me)&&(i.stencilFunc(Ce,We,me),X=Ce,le=We,se=me)},setOp:function(Ce,We,me){(ae!==Ce||Te!==We||qe!==me)&&(i.stencilOp(Ce,We,me),ae=Ce,Te=We,qe=me)},setLocked:function(Ce){L=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){L=!1,J=null,X=null,le=null,se=null,ae=null,Te=null,qe=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,T=null,b=null,x=null,w=new Be(0,0,0),I=0,R=!1,N=null,U=null,k=null,P=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=te>=2);let Q=null,ee={},we=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Z=new pt().fromArray(we),_e=new pt().fromArray(ze);function be(L,J,X,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(L,ae),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<X;Te++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(J+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Pe={};Pe[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(ws),Qt(!1),mt(Fc),xe(i.CULL_FACE),zt(ji);function xe(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ge(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Mt(L,J){return d[L]!==J?(i.bindFramebuffer(L,J),d[L]=J,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ne(L,J){let X=m,le=!1;if(L){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let se=L.textures;if(X.length!==se.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Te=se.length;ae<Te;ae++)X[ae]=i.COLOR_ATTACHMENT0+ae;X.length=se.length,le=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,le=!0);le&&i.drawBuffers(X)}function rt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let ot={[Qi]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};ot[Ku]=i.MIN,ot[ju]=i.MAX;let Ze={[Qu]:i.ZERO,[ed]:i.ONE,[td]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[ad]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[ld]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(L,J,X,le,se,ae,Te,qe,ie,Ce){if(L===ji){p===!0&&(Ge(i.BLEND),p=!1);return}if(p===!1&&(xe(i.BLEND),p=!0),L!==Yu){if(L!==g||Ce!==R){if((v!==Qi||T!==Qi)&&(i.blendEquation(i.FUNC_ADD),v=Qi,T=Qi),Ce)switch(L){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}M=null,y=null,b=null,x=null,w.set(0,0,0),I=0,g=L,R=Ce}return}se=se||J,ae=ae||X,Te=Te||le,(J!==v||se!==T)&&(i.blendEquationSeparate(ot[J],ot[se]),v=J,T=se),(X!==M||le!==y||ae!==b||Te!==x)&&(i.blendFuncSeparate(Ze[X],Ze[le],Ze[ae],Ze[Te]),M=X,y=le,b=ae,x=Te),(qe.equals(w)===!1||ie!==I)&&(i.blendColor(qe.r,qe.g,qe.b,ie),w.copy(qe),I=ie),g=L,R=!1}function Tt(L,J){L.side===nn?Ge(i.CULL_FACE):xe(i.CULL_FACE);let X=L.side===Ct;J&&(X=!X),Qt(X),L.blending===zs&&L.transparent===!1?zt(ji):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function mt(L){L!==Xu?(xe(i.CULL_FACE),L!==U&&(L===Fc?i.cullFace(i.BACK):L===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),U=L}function kn(L){L!==k&&(G&&i.lineWidth(L),k=L)}function Dt(L,J,X){L?(xe(i.POLYGON_OFFSET_FILL),(P!==J||V!==X)&&(P=J,V=X,a.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Ge(i.POLYGON_OFFSET_FILL)}function pn(L){L?xe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function mn(L){L===void 0&&(L=i.TEXTURE0+q-1),Q!==L&&(i.activeTexture(L),Q=L)}function gn(L,J,X){X===void 0&&(Q===null?X=i.TEXTURE0+q-1:X=Q);let le=ee[X];le===void 0&&(le={type:void 0,texture:void 0},ee[X]=le),(le.type!==L||le.texture!==J)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(L,J||Pe[L]),le.type=L,le.texture=J)}function F(){let L=ee[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _n(){try{i.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ft(){try{i.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function fe(){try{i.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ke(){try{i.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function A(){try{i.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function S(){try{i.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function B(){try{i.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ne(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function j(L,J){u[L]!==J&&(i.pixelStorei(L,J),u[L]=J)}function re(L){Z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ue(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function $(L,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let le=X.get(L);le===void 0&&(le=i.getUniformBlockIndex(J,L.name),i.uniformBlockBinding(J,le,le),X.set(L,le))}function Y(L,J,X){let se=c.get(J).get(L);l[se]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,X),l[se]=X)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ee={},d={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,v=null,M=null,y=null,T=null,b=null,x=null,w=new Be(0,0,0),I=0,R=!1,N=null,U=null,k=null,P=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ge,bindFramebuffer:Mt,drawBuffers:Ne,useProgram:rt,setBlending:zt,setMaterial:Tt,setFlipSided:Qt,setCullFace:mt,setLineWidth:kn,setPolygonOffset:Dt,setScissorTest:pn,activeTexture:mn,bindTexture:gn,unbindTexture:F,compressedTexImage2D:_n,compressedTexImage3D:dt,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:ne,updateUBOMapping:$,uniformBlockBinding:Y,texStorage2D:ke,texStorage3D:A,texSubImage2D:ft,texSubImage3D:fe,compressedTexSubImage2D:At,compressedTexSubImage3D:Le,scissor:re,viewport:ue,reset:oe}}function hv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):As("canvas")}function v(A,S,B){let ne=1,j=ke(A);if((j.width>B||j.height>B)&&(ne=B/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(ne*j.width),ue=Math.floor(ne*j.height);d===void 0&&(d=g(re,ue));let $=S?g(re,ue):d;return $.width=re,$.height=ue,$.getContext("2d").drawImage(A,0,0,re,ue),Ie("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+ue+")."),$}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function M(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,B,ne,j,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),B===i.SHORT&&ue&&($=ue.R16_SNORM_EXT)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),B===i.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),B===i.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let Y=re?Mr:je.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Y===st?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),B===i.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(A,S){let B;return A?S===null||S===Pn||S===ts?B=i.DEPTH24_STENCIL8:S===bn?B=i.DEPTH32F_STENCIL8:S===Gs&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pn||S===ts?B=i.DEPTH_COMPONENT24:S===bn?B=i.DEPTH_COMPONENT32F:S===Gs&&(B=i.DEPTH_COMPONENT16),B}function w(A,S){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){let S=new WeakRef(A);n.get(A).__ref=S,m.add(S),_.register(A,S,S)}function R(A){let S=n.get(A).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(A){k(A.target)}function U(A){P(A.target)}function k(A){A.removeEventListener("dispose",N),R(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",U),R(A),te(A)}function V(){for(let A of m){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):k(S))}m.clear(),u.clear()}function q(A){let S=n.get(A);if(S.__webglInit===void 0)return;let B=A.source,ne=f.get(B);if(ne){let j=ne[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(A),Object.keys(ne).length===0&&f.delete(B)}n.remove(A)}function G(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let B=A.source,ne=f.get(B);delete ne[S.__cacheKey],a.memory.textures--}function te(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&k(B),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let re=0;re<S.__webglFramebuffer[j].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[j][re]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ne=A.textures;for(let j=0,re=ne.length;j<re;j++){let ue=n.get(ne[j]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(A)}let W=0;function Q(){W=0}function ee(){return W}function we(A){W=A}function ze(){let A=W;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function _e(A,S){let B=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ne=A.image;if(ne===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function be(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Tt(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Pe(A,S){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Tt(B,A,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function xe(A,S){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Qt(B,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let Ge={[Es]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Mt={[kt]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Ne={[xd]:i.NEVER,[nh]:i.ALWAYS,[vd]:i.LESS,[eh]:i.LEQUAL,[yd]:i.EQUAL,[th]:i.GEQUAL,[bd]:i.GREATER,[Md]:i.NOTEQUAL};function rt(A,S){if(S.type===bn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kt||S.magFilter===ko||S.magFilter===Jr||S.magFilter===In||S.minFilter===Kt||S.minFilter===ko||S.minFilter===Jr||S.minFilter===In)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ge[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ge[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ge[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==Jr&&S.minFilter!==In||S.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ot(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N),I(S));let ne=S.source,j=f.get(ne);j===void 0&&(j={},f.set(ne,j));let re=Z(S);if(re!==A.__cacheKey){j[re]===void 0&&(j[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[re].usedTimes++;let ue=j[A.__cacheKey];ue!==void 0&&(j[A.__cacheKey].usedTimes--,ue.usedTimes===0&&G(S)),A.__cacheKey=re,A.__webglTexture=j[re].texture}return B}function Ze(A,S,B){return Math.floor(Math.floor(A/B)/S)}function zt(A,S,B,ne){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,ne,S.data);else{re.sort((L,J)=>L.start-J.start);let ue=0;for(let L=1;L<re.length;L++){let J=re[ue],X=re[L],le=J.start+J.count,se=Ze(X.start,S.width,4),ae=Ze(J.start,S.width,4);X.start<=le+1&&se===ae&&Ze(X.start+X.count-1,S.width,4)===se?J.count=Math.max(J.count,X.start+X.count-J.start):(++ue,re[ue]=X)}re.length=ue+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let L=0,J=re.length;L<J;L++){let X=re[L],le=Math.floor(X.start/4),se=Math.ceil(X.count/4),ae=le%S.width,Te=Math.floor(le/S.width),qe=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,ae,Te,qe,ie,B,ne,S.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function Tt(A,S,B){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);let j=ot(A,S),re=S.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+B);let ue=n.get(re);if(re.version!==ue.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=je.getPrimaries(je.workingColorSpace),Ce=S.colorSpace===li?null:je.getPrimaries(S.colorSpace),We=S.colorSpace===li||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=v(S.image,!1,s.maxTextureSize);Y=Le(S,Y);let oe=r.convert(S.format,S.colorSpace),L=r.convert(S.type),J=b(S.internalFormat,oe,L,S.normalized,S.colorSpace,S.isVideoTexture);rt(ne,S);let X,le=S.mipmaps,se=S.isVideoTexture!==!0,ae=ue.__version===void 0||j===!0,Te=re.dataReady,qe=w(S,Y);if(S.isDepthTexture)J=x(S.format===oi,S.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,J,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,J,Y.width,Y.height,0,oe,L,null));else if(S.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,L,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,L,X.data);S.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,Y.width,Y.height),Te&&zt(S,Y,oe,L)):t.texImage2D(i.TEXTURE_2D,0,J,Y.width,Y.height,0,oe,L,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,J,le[0].width,le[0].height,Y.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(X=le[ie],S.format!==Dn)if(oe!==null)if(se){if(Te)if(S.layerUpdates.size>0){let We=dh(X.width,X.height,S.format,S.type);for(let me of S.layerUpdates){let at=X.data.subarray(me*We/X.data.BYTES_PER_ELEMENT,(me+1)*We/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,X.width,X.height,1,oe,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,Y.depth,oe,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,Y.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,X.width,X.height,Y.depth,oe,L,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,J,X.width,X.height,Y.depth,0,oe,L,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,qe,J,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],S.format!==Dn?oe!==null?se?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,X.width,X.height,oe,L,X.data):t.texImage2D(i.TEXTURE_2D,ie,J,X.width,X.height,0,oe,L,X.data)}else if(S.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,J,Y.width,Y.height,Y.depth),Te)if(S.layerUpdates.size>0){let ie=dh(Y.width,Y.height,S.format,S.type);for(let Ce of S.layerUpdates){let We=Y.data.subarray(Ce*ie/Y.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,Y.width,Y.height,1,oe,L,We)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,L,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Y.width,Y.height,Y.depth,0,oe,L,Y.data);else if(S.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,qe,J,Y.width,Y.height,Y.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,L,Y.data)):t.texImage3D(i.TEXTURE_3D,0,J,Y.width,Y.height,Y.depth,0,oe,L,Y.data);else if(S.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,qe,J,Y.width,Y.height);else{let ie=Y.width,Ce=Y.height;for(let We=0;We<qe;We++)t.texImage2D(i.TEXTURE_2D,We,J,ie,Ce,0,oe,L,null),ie>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),u.add(S),ie.onpaint=Ce=>{let We=Ce.changedElements;for(let me of u)We.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let We=i.RGBA,me=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,me,at,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=ke(le[0]);t.texStorage2D(i.TEXTURE_2D,qe,J,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)X=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,L,X):t.texImage2D(i.TEXTURE_2D,ie,J,oe,L,X);S.generateMipmaps=!1}else if(se){if(ae){let ie=ke(Y);t.texStorage2D(i.TEXTURE_2D,qe,J,ie.width,ie.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,L,Y)}else t.texImage2D(i.TEXTURE_2D,0,J,oe,L,Y);M(S)&&S.mipmapsAutoUpdate===!0&&y(ne),ue.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Qt(A,S,B){if(S.image.length!==6)return;let ne=ot(A,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let re=n.get(j);if(j.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);let ue=je.getPrimaries(je.workingColorSpace),$=S.colorSpace===li?null:je.getPrimaries(S.colorSpace),Y=S.colorSpace===li||ue===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let oe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,J=[];for(let me=0;me<6;me++)!oe&&!L?J[me]=v(S.image[me],!0,s.maxCubemapSize):J[me]=L?S.image[me].image:S.image[me],J[me]=Le(S,J[me]);let X=J[0],le=r.convert(S.format,S.colorSpace),se=r.convert(S.type),ae=b(S.internalFormat,le,se,S.normalized,S.colorSpace),Te=S.isVideoTexture!==!0,qe=re.__version===void 0||ne===!0,ie=j.dataReady,Ce=w(S,X);rt(i.TEXTURE_CUBE_MAP,S);let We;if(S.isDepthTexture){if(ae=x(S.format===oi,S.type),qe)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,X.width,X.height,0,le,se,null)}else if(oe){Te&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,X.width,X.height);for(let me=0;me<6;me++){We=J[me].mipmaps;for(let at=0;at<We.length;at++){let Nt=We[at];S.format!==Dn?le!==null?Te?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at,0,0,Nt.width,Nt.height,le,Nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at,ae,Nt.width,Nt.height,0,Nt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at,0,0,Nt.width,Nt.height,le,se,Nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at,ae,Nt.width,Nt.height,0,le,se,Nt.data)}}}else{if(We=S.mipmaps,Te&&qe){We.length>0&&Ce++;let me=ke(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,me.width,me.height)}for(let me=0;me<6;me++)if(L){Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,J[me].width,J[me].height,le,se,J[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,J[me].width,J[me].height,0,le,se,J[me].data);for(let at=0;at<We.length;at++){let pi=We[at].image[me].image;Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at+1,0,0,pi.width,pi.height,le,se,pi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at+1,ae,pi.width,pi.height,0,le,se,pi.data)}}else{Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,J[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,J[me]);for(let at=0;at<We.length;at++){let Nt=We[at];Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at+1,0,0,le,se,Nt.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,at+1,ae,le,se,Nt.image[me])}}}M(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),re.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function mt(A,S,B,ne,j,re){let ue=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Y=b(B.internalFormat,ue,$,B.normalized,B.colorSpace),oe=n.get(S),L=n.get(B);if(L.__renderTarget=S,!oe.__hasExternalTextures){let J=Math.max(1,S.width>>re),X=Math.max(1,S.height>>re);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,re,Y,J,X,S.depth,0,ue,$,null):t.texImage2D(j,re,Y,J,X,0,ue,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,L.__webglTexture,0,ft(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,L.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function kn(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let ne=S.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,re=x(S.stencilBuffer,j),ue=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(S),re,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{let ne=S.textures;for(let j=0;j<ne.length;j++){let re=ne[j],ue=r.convert(re.format,re.colorSpace),$=r.convert(re.type),Y=b(re.internalFormat,ue,$,re.normalized,re.colorSpace);fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(S),Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(S),Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(A,S,B){let ne=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(S.depthTexture);j.__renderTarget=S;let re=ne?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||re.width!==S.width||re.height!==S.height)&&(re.width=S.width,re.height=S.height,S.depthTexture.needsUpdate=!0),ne?xe(S.depthTexture,0):_e(S.depthTexture,0);let ue=j.__webglTexture,$=ft(S),Y=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,oe=S.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ni)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ue,0);else if(S.depthTexture.format===oi)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pn(A){let S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=ne}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Dt(S.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?Dt(S.__webglFramebuffer[0],A,0):Dt(S.__webglFramebuffer,A,0);else if(B){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),kn(S.__webglDepthbuffer[ne],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),kn(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mn(A,S,B){let ne=n.get(A);S!==void 0&&mt(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&pn(A)}function gn(A){let S=A.texture,B=n.get(A),ne=n.get(S);A.addEventListener("dispose",U),I(A);let j=A.textures,re=A.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Y=0;Y<S.mipmaps.length;Y++)B.__webglFramebuffer[$][Y]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let $=0,Y=j.length;$<Y;$++){let oe=n.get(j[$]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){let Y=j[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let oe=r.convert(Y.format,Y.colorSpace),L=r.convert(Y.type),J=b(Y.internalFormat,oe,L,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),X=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),kn(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),rt(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)mt(B.__webglFramebuffer[$][Y],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Y);else mt(B.__webglFramebuffer[$],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let $=0,Y=j.length;$<Y;$++){let oe=j[$],L=n.get(oe),J=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,L.__webglTexture),rt(J,oe),mt(B.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+$,J,0),M(oe)&&y(J)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,ne.__webglTexture),rt($,S),S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)mt(B.__webglFramebuffer[Y],A,S,i.COLOR_ATTACHMENT0,$,Y);else mt(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,$,0);M(S)?y($):S.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&pn(A)}function F(A){let S=A.textures;for(let B=0,ne=S.length;B<ne;B++){let j=S[B];if(M(j)&&j.mipmapsAutoUpdate===!0){let re=T(A),ue=n.get(j).__webglTexture;t.bindTexture(re,ue),y(re),t.unbindTexture()}}}let _n=[];function dt(A){if(A.samples>0){if(fe(A)===!1){let S=A.textures,B=A.width,ne=A.height,j=i.COLOR_BUFFER_BIT,re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),$=S.length>1;if($)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let L=n.get(S[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,j,i.NEAREST),l===!0&&(_n.length=0,_n.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&_n.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_n))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let L=n.get(S[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function fe(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Le(A,S){let B=A.colorSpace,ne=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==br&&B!==li&&(je.getTransfer(B)===st?(ne!==Dn||j!==sn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",B)),S}function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=we,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=Pe,this.setTextureCube=xe,this.rebindTextures=mn,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=pn,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=fe,this.dispose=V}function uv(i,e){function t(n,s=li){let r,a=je.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Dn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Vo)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===Kr||n===jr||n===Qr||n===ea)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Xo||n===$o||n===Yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Jo)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return r.COMPRESSED_R11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===na||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Th,g={},v=t.getContextAttributes(),M=null,y=null,T=[],b=[],x=new he,w=null,I=null,R=new $t;R.viewport=new pt;let N=new $t;N.viewport=new pt;let U=[R,N],k=new Po,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Ls,T[Z]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Ls,T[Z]=_e),_e.getGripSpace()},this.getHand=function(Z){let _e=T[Z];return _e===void 0&&(_e=new Ls,T[Z]=_e),_e.getHandSpace()};function q(Z){let _e=b.indexOf(Z.inputSource);if(_e===-1)return;let be=T[_e];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||a),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let _e=b[Z];_e!==null&&(b[Z]=null,T[Z].disconnect(_e))}P=null,V=null,p.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?oi:ni,Pe=v.stencil?ts:Pn);let Ge={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:Dn,type:sn,depthTexture:new si(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let _e=0;_e<Z.removed.length;_e++){let be=Z.removed[_e],Pe=b.indexOf(be);Pe>=0&&(b[Pe]=null,T[Pe].disconnect(be))}for(let _e=0;_e<Z.added.length;_e++){let be=Z.added[_e],Pe=b.indexOf(be);if(Pe===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=b.length){b.push(be),Pe=Ge;break}else if(b[Ge]===null){b[Ge]=be,Pe=Ge;break}if(Pe===-1)break}let xe=T[Pe];xe&&xe.connect(be)}}function W(Z,_e){_e===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(_e.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let _e=Z.near,be=Z.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(be=p.depthFar)),k.near=N.near=R.near=_e,k.far=N.far=R.far=be,(P!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,V=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Pe=Z.parent,xe=k.cameras;W(k,Pe);for(let Ge=0;Ge<xe.length;Ge++)W(xe[Ge],Pe);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,k,Pe)};function Q(Z,_e,be){be===null?Z.matrix.copy(_e.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(_e.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(_e.projectionMatrix),Z.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(Z){return g[Z]};let ee=null;function we(Z,_e){if(h=_e.getViewerPose(c||a),m=_e,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let Ne=0;Ne<be.length;Ne++){let rt=be[Ne],ot=null;if(f!==null)ot=f.getViewport(rt);else{let zt=u.getViewSubImage(d,rt);ot=zt.viewport,Ne===0&&(e.setRenderTargetTextures(y,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(y))}let Ze=U[Ne];Ze===void 0&&(Ze=new $t,Ze.layers.enable(Ne),Ze.viewport=new pt,U[Ne]=Ze),Ze.matrix.fromArray(rt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(rt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(k.matrix.copy(Ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(Ze)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Ne=u.getDepthInformation(be[0]);Ne&&Ne.isValid&&Ne.texture&&p.init(Ne,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<be.length;Ne++){let rt=be[Ne].camera;if(rt){let ot=g[rt];ot||(ot=new Pr,g[rt]=ot);let Ze=u.getCameraImage(rt);ot.sourceTexture=Ze}}}}for(let be=0;be<T.length;be++){let Pe=b[be],xe=T[be];Pe!==null&&xe!==void 0&&xe.update(Pe,_e,c||a)}ee&&ee(Z,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),m=null}let ze=new af;ze.setAnimationLoop(we),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},pv=new Oe,gf=new Ue;gf.set(-1,0,0,0,1,0,0,0,1);function mv(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ch(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ct&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ct&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ct&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={};function a(v,M){let y=M.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,M){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",p));let T=M.program;n.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){let M=i.createBuffer(),y=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(v){let M=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,x=y.length;b<x;b++){let w=y[b];if(Array.isArray(w))for(let I=0,R=w.length;I<R;I++)h(w[I],b,I,T);else h(w,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,M,y,T){if(d(v,M,y,T)===!0){let b=v.__offset,x=v.value;if(Array.isArray(x)){let w=0;for(let I=0;I<x.length;I++){let R=x[I],N=_(R,!0);u(R,v.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function u(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function d(v,M,y,T){let b=v.value,x=M+"_"+y;if(Array.isArray(b)){T[x]===void 0&&(T[x]=[]);let w=T[x],I=!1;for(let R=0;R<b.length;R++)f(b[R],w,R)===!0&&(I=!0);return I}return f(b,T,x)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let T=M[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let M=v.uniforms,y=0,T=16;for(let x=0,w=M.length;x<w;x++){let I=Array.isArray(M[x])?M[x]:[M[x]];for(let R=0,N=I.length;R<N;R++){let U=I[R],k=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(M[x])||Array.isArray(U.value),V=y;for(let G=0,te=k.length;G<te;G++){let W=k[G],Q=_(W,P),ee=y%T,we=ee%Q.boundary,ze=ee+we;y+=we,ze!==0&&T-ze<Q.storage&&(y+=T-ze),G===0&&(V=y),y+=Q.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((y-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function _(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let M=v.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var _v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function xv(){return Vn===null&&(Vn=new Tr(_v,16,16,Fi,Ln),Vn.name="DFG_LUT",Vn.minFilter=Kt,Vn.magFilter=Kt,Vn.wrapS=Bn,Vn.wrapT=Bn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Sl=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,p=new Set([Wo,Vo,Go]),g=new Set([sn,Pn,Gs,ts,Bo,zo]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,b=null,x=[],w=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,k=null,P=null,V=null;this._outputColorSpace=yt;let q=0,G=0,te=null,W=-1,Q=null,ee=new pt,we=new pt,ze=null,Z=new Be(0),_e=0,be=t.width,Pe=t.height,xe=1,Ge=null,Mt=null,Ne=new pt(0,0,be,Pe),rt=new pt(0,0,be,Pe),ot=!1,Ze=new Ei,zt=new ao,Tt=!1,Qt=!1,mt=new Oe,kn=new C,Dt=new pt,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mn=!1;function gn(){return te===null?xe:1}let F=n;function _n(E,D){return t.getContext(E,D)}let dt,ft,fe,At,Le,ke,A,S,B,ne,j,re,ue,$,Y,oe,L,J,X,le,se,ae,Te;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){let D="webgl2";if(F=_n(D,E),F===null)throw _n(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(E){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Fe("WebGLRenderer: "+E.message),E}function qe(){dt=new C_(F),dt.init(),se=new uv(F,dt),ft=new x_(F,dt,e,se),fe=new cv(F,dt),ft.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),k=F.createFramebuffer(),P=F.createFramebuffer(),V=F.createFramebuffer(),At=new L_(F),Le=new Zx,ke=new hv(F,dt,fe,Le,ft,se,At),A=new R_(R),S=new Nm(F),ae=new g_(F,S),B=new I_(F,S,At,ae),ne=new N_(F,B,S,ae,At),J=new D_(F,ft,ke),Y=new v_(Le),j=new Yx(R,A,dt,ft,ae,Y),re=new mv(R,Le),ue=new Kx,$=new iv(dt),L=new m_(R,A,fe,ne,m,l),oe=new lv(R,ne,ft),Te=new gv(F,At,ft,fe),X=new __(F,dt,At),le=new P_(F,dt,At),At.programs=j.programs,R.capabilities=ft,R.extensions=dt,R.properties=Le,R.renderLists=ue,R.shadowMap=oe,R.state=fe,R.info=At}_!==sn&&(I=new U_(_,t.width,t.height,o,s,r));let ie=new Ah(R,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(E){E!==void 0&&(xe=E,this.setSize(be,Pe,!1))},this.getSize=function(E){return E.set(be,Pe)},this.setSize=function(E,D,H=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}be=E,Pe=D,t.width=Math.floor(E*xe),t.height=Math.floor(D*xe),H===!0&&(t.style.width=E+"px",t.style.height=D+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(be*xe,Pe*xe).floor()},this.setDrawingBufferSize=function(E,D,H){be=E,Pe=D,xe=H,t.width=Math.floor(E*H),t.height=Math.floor(D*H),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(_===sn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,D,H,O){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,D,H,O),fe.viewport(ee.copy(Ne).multiplyScalar(gn()).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,D,H,O){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,D,H,O),fe.scissor(we.copy(rt).multiplyScalar(gn()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){fe.setScissorTest(ot=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,H=!0){let O=0;if(E){let z=!1;if(te!==null){let de=te.texture.format;z=p.has(de)}if(z){let de=te.texture.type,ye=g.has(de),ce=L.getClearColor(),ve=L.getClearAlpha(),Ee=ce.r,He=ce.g,Je=ce.b;ye?(v[0]=Ee,v[1]=He,v[2]=Je,v[3]=ve,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ee,M[1]=He,M[2]=Je,M[3]=ve,F.clearBufferiv(F.COLOR,0,M))}else O|=F.COLOR_BUFFER_BIT}D&&(O|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",me,!1),L.dispose(),ue.dispose(),$.dispose(),ke.dispose(),Le.dispose(),A.dispose(),ne.dispose(),B.dispose(),ae.dispose(),Te.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Kh),ie.removeEventListener("sessionend",jh),Bi.stop()};function Ce(E){E.preventDefault(),sh("WebGLRenderer: Context Lost."),N=!0}function We(){sh("WebGLRenderer: Context Restored."),N=!1;let E=At.autoReset,D=oe.enabled,H=oe.autoUpdate,O=oe.needsUpdate,z=oe.type;qe(),At.autoReset=E,oe.enabled=D,oe.autoUpdate=H,oe.needsUpdate=O,oe.type=z}function me(E){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){let D=E.target;D.removeEventListener("dispose",at),Nt(D)}function Nt(E){pi(E),Le.remove(E)}function pi(E){let D=Le.get(E).programs;D!==void 0&&(D.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,H,O,z,de){D===null&&(D=pn);let ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=lp(E,D,H,O,z);fe.setMaterial(O,ye);let ve=H.index,Ee=1;if(O.wireframe===!0){if(ve=B.getWireframeAttribute(H),ve===void 0)return;Ee=2}let He=H.drawRange,Je=H.attributes.position,Me=He.start*Ee,Ke=(He.start+He.count)*Ee;de!==null&&(Me=Math.max(Me,de.start*Ee),Ke=Math.min(Ke,(de.start+de.count)*Ee)),ve!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,ve.count)):Je!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,Je.count));let St=Ke-Me;if(St<0||St===1/0)return;ae.setup(z,O,ce,H,ve);let ct,lt=X;if(ve!==null&&(ct=S.get(ve),lt=le,lt.setIndex(ct)),z.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*gn()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(z.isLine){let Vt=O.linewidth;Vt===void 0&&(Vt=1),fe.setLineWidth(Vt*gn()),z.isLineSegments?lt.setMode(F.LINES):z.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else z.isPoints?lt.setMode(F.POINTS):z.isSprite&&lt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Vt=z._multiDrawStarts,Se=z._multiDrawCounts,Jt=z._multiDrawCount,tt=ve?S.get(ve).bytesPerElement:1,zi=Le.get(O).currentProgram.getUniforms();for(let Wt=0;Wt<Jt;Wt++)zi.setValue(F,"_gl_DrawID",Wt),lt.render(Vt[Wt]/tt,Se[Wt])}else if(z.isInstancedMesh)lt.renderInstances(Me,St,z.count);else if(H.isInstancedBufferGeometry){let Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,Vt);lt.renderInstances(Me,St,Se)}else lt.render(Me,St)};function Jh(E,D,H,O){U!==null&&E.isNodeMaterial&&U.setObject(O,E),Tt===!0&&Y.setState(E,H,!1),E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=Ct,E.needsUpdate=!0,or(E,D,O),E.side=Ni,E.needsUpdate=!0,or(E,D,O),E.side=nn):or(E,D,O)}this.compile=function(E,D,H=null){H===null&&(H=E),U!==null&&U.renderStart(E,D,H),b=$.get(H),b.init(D),w.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),Qt=this.localClippingEnabled,Tt=Y.init(this.clippingPlanes,Qt),Tt===!0&&Y.setGlobalState(this.clippingPlanes,D),U!==null&&oe.render(b.state.shadowsArray,H,D);let O=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let ce=de[ye];Jh(ce,H,D,z),O.add(ce)}else Jh(de,H,D,z),O.add(de)}),b=w.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(E,D,H=null){let O=this.compile(E,D,H);return new Promise(z=>{function de(){if(O.forEach(function(ye){let ve=Le.get(ye).currentProgram;(ve===void 0||ve.isReady())&&O.delete(ye)}),O.size===0){z(E);return}setTimeout(de,10)}dt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Kl=null;function ap(E){Kl&&Kl(E)}function Kh(){Bi.stop()}function jh(){Bi.start()}let Bi=new af;Bi.setAnimationLoop(ap),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Kl=E,ie.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},ie.addEventListener("sessionstart",Kh),ie.addEventListener("sessionend",jh),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,D);let H=ie.enabled===!0&&ie.isPresenting===!0,O=I!==null&&(te===null||H)&&I.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,D,te),b=$.get(E,w.length),b.init(D),b.state.textureUnits=ke.getTextureUnits(),w.push(b),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?zt.setFromArrayCamera(D):Ze.setFromProjectionMatrix(mt,vn,D.reversedDepth),Qt=this.localClippingEnabled,Tt=Y.init(this.clippingPlanes,Qt),T=ue.get(E,x.length),T.init(),x.push(T),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ye=R.xr.getDepthSensingMesh();ye!==null&&jl(ye,D,-1/0,R.sortObjects)}jl(E,D,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(Ge,Mt),mn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,mn&&L.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&Y.beginShadows();let z=b.state.shadowsArray;if(oe.render(z,E,D),Tt===!0&&Y.endShadows(),(O&&I.hasRenderPass())===!1){let ye=T.opaque,ce=T.transmissive;if(b.setupLights(),D.isArrayCamera){let ve=D.cameras;if(ce.length>0)for(let Ee=0,He=ve.length;Ee<He;Ee++){let Je=ve[Ee];eu(ye,ce,E,Je)}mn&&L.render(E);for(let Ee=0,He=ve.length;Ee<He;Ee++){let Je=ve[Ee];Qh(T,E,Je,Je.viewport)}}else ce.length>0&&eu(ye,ce,E,D),mn&&L.render(E),Qh(T,E,D)}te!==null&&G===0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te)),O&&I.end(R),E.isScene===!0&&E.onAfterRender(R,E,D),ae.resetDefaultState(),W=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],ke.setTextureUnits(b.state.textureUnits),Tt===!0&&Y.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,U!==null&&U.renderEnd()};function jl(E,D,H,O){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){let ye=D.isArrayCamera?zt:Ze;if(!E.frustumCulled||E.intersectsFrustum(ye)){O&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);let ce=ne.update(E),ve=E.material;ve.visible&&T.push(E,ce,ve,H,Dt.z,null,D)}}else if(E.isMesh||E.isLine||E.isPoints){let ye=D.isArrayCamera?zt:Ze;if(!E.frustumCulled||E.intersectsFrustum(ye)){let ce=ne.update(E),ve=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Dt.copy(ce.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(ve)){let Ee=ce.groups;for(let He=0,Je=Ee.length;He<Je;He++){let Me=Ee[He],Ke=ve[Me.materialIndex];Ke&&Ke.visible&&T.push(E,ce,Ke,H,Dt.z,Me,D)}}else ve.visible&&T.push(E,ce,ve,H,Dt.z,null,D)}}}let de=E.children;for(let ye=0,ce=de.length;ye<ce;ye++)jl(de[ye],D,H,O)}function Qh(E,D,H,O){let{opaque:z,transmissive:de,transparent:ye}=E;b.setupLightsView(H),Tt===!0&&Y.setGlobalState(R.clippingPlanes,H),O&&fe.viewport(ee.copy(O)),z.length>0&&xa(z,D,H),de.length>0&&xa(de,D,H),ye.length>0&&xa(ye,D,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function eu(E,D,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){let Me=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new cn(1,1,{generateMipmaps:!0,type:Me?Ln:sn,minFilter:In,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let de=b.state.transmissionRenderTarget[O.id],ye=O.viewport||ee;de.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),ve=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(Z),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),mn&&L.render(H);let He=R.toneMapping;R.toneMapping=Gn;let Je=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),Tt===!0&&Y.setGlobalState(R.clippingPlanes,O),xa(E,H,O),ke.updateMultisampleRenderTarget(de),ke.updateRenderTargetMipmap(de),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ke=0,St=D.length;Ke<St;Ke++){let ct=D[Ke],{object:lt,geometry:Vt,material:Se,group:Jt}=ct;if(Se.side===nn&&lt.layers.test(O.layers)){let tt=Se.side;Se.side=Ct,Se.needsUpdate=!0,tu(lt,H,O,Vt,Se,Jt),Se.side=tt,Se.needsUpdate=!0,Me=!0}}Me===!0&&(ke.updateMultisampleRenderTarget(de),ke.updateRenderTargetMipmap(de))}R.setRenderTarget(ce,ve,Ee),R.setClearColor(Z,_e),Je!==void 0&&(O.viewport=Je),R.toneMapping=He}function xa(E,D,H){let O=D.isScene===!0?D.overrideMaterial:null;for(let z=0,de=E.length;z<de;z++){let ye=E[z],{object:ce,geometry:ve,group:Ee}=ye,He=ye.material;He.allowOverride===!0&&O!==null&&(He=O),ce.layers.test(H.layers)&&tu(ce,D,H,ve,He,Ee)}}function tu(E,D,H,O,z,de){U!==null&&z.isNodeMaterial&&U.setObject(E,z),E.onBeforeRender(R,D,H,O,z,de),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(R,D,H,O,E,de),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=Ct,z.needsUpdate=!0,R.renderBufferDirect(H,D,O,z,E,de),z.side=Ni,z.needsUpdate=!0,R.renderBufferDirect(H,D,O,z,E,de),z.side=nn):R.renderBufferDirect(H,D,O,z,E,de),E.onAfterRender(R,D,H,O,z,de)}function nu(E){let D=0;for(let H of E)H.texture!==null&&D++;return D}function or(E,D,H){D.isScene!==!0&&(D=pn);let O=Le.get(E),z=b.state.lights,de=b.state.shadowsArray,ye=z.state.version,ce=j.getParameters(E,z.state,de,D,H,b.state.lightProbeGridArray),ve=j.getProgramCacheKey(ce),Ee=O.programs;O.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;O.envMap=A.get(E.envMap||O.environment,He),O.envMapRotation=O.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",at),Ee=new Map,O.programs=Ee,O.programVariants=new Map);let Je=Ee.get(ve);if(Je!==void 0){if(O.currentProgram===Je&&O.lightsStateVersion===ye)return su(E,ce),Je}else ce.uniforms=j.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,H,ce),E.onBeforeCompile(ce,R),Je=j.acquireProgram(ce,ve),Ee.set(ve,Je),O.uniforms=ce.uniforms;let Me=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=Y.uniform),su(E,ce),O.needsLights=hp(E),O.lightsStateVersion=ye,O.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=nu(b.state.lightProbeGridArray),O.currentProgram=Je,O.uniformsList=null,Je}function op(E,D,H,O,z){let de=Le.get(E),ye=de.currentProgram.id+","+O+","+z,ce=de.programVariants.get(ye);return ce===void 0?(ce=or(E,D,H),de.programVariants.set(ye,ce)):(de.currentProgram=ce,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=z),ce}function iu(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function su(E,D){let H=Le.get(E);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function lp(E,D,H,O,z){D.isScene!==!0&&(D=pn),ke.resetTextureUnits();let de=D.fog,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,ce=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ee=A.get(O.envMap||ye,ve),He=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Je=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Me=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,St=!!H.morphAttributes.color,ct=Gn;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ct=R.toneMapping);let lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Vt=lt!==void 0?lt.length:0,Se=Le.get(O),Jt=b.state.lights;if(Tt===!0&&(Qt===!0||E!==Q)){let gt=E===Q&&O.id===W;Y.setState(O,E,gt)}let tt=!1,zi=!1;O.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Jt.state.version||z.isBatchedMesh&&Se.batching===!1||!z.isBatchedMesh&&Se.batching===!0||z.isBatchedMesh&&Se.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Se.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Se.instancing===!1||!z.isInstancedMesh&&Se.instancing===!0||z.isSkinnedMesh&&Se.skinning===!1||!z.isSkinnedMesh&&Se.skinning===!0||z.isInstancedMesh&&Se.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Se.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Se.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Se.instancingMorph===!1&&z.morphTexture!==null||Se.envMap!==Ee||O.fog===!0&&Se.fog!==de||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==Je||Se.morphTargets!==Me||Se.morphNormals!==Ke||Se.morphColors!==St||Se.morphTargetsCount!==Vt||Se.numLightProbeGrids!==nu(b.state.lightProbeGridArray)?tt=!0:(Se.outputColorSpace!==ce||Se.toneMapping!==ct)&&(zi=!0):(tt=!0,Se.__version=O.version);let Wt=Se.currentProgram;(tt===!0||zi===!0)&&(Wt=zi===!0?op(O,D,z,ce,ct):or(O,D,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Wt,Se));let va=!1,mi=!1,Hi=!1,et=Wt.getUniforms(),Ht=Se.uniforms;if(fe.useProgram(Wt.program)&&(va=!0,mi=!0,Hi=!0),O.id!==W&&(W=O.id,mi=!0),va||Q!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),et.setValue(F,"projectionMatrix",E.projectionMatrix),et.setValue(F,"viewMatrix",E.matrixWorldInverse);let Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,kn.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&et.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,mi=!0,Hi=!0)}if(Se.needsLights&&(Jt.state.sunShadowMap.length>0&&et.setValue(F,"sunShadowMap",Jt.state.sunShadowMap,ke),Jt.state.directionalShadowMap.length>0&&et.setValue(F,"directionalShadowMap",Jt.state.directionalShadowMap,ke),Jt.state.spotShadowMap.length>0&&et.setValue(F,"spotShadowMap",Jt.state.spotShadowMap,ke),Jt.state.pointShadowMap.length>0&&et.setValue(F,"pointShadowMap",Jt.state.pointShadowMap,ke)),z.isSkinnedMesh){et.setOptional(F,z,"bindMatrix"),et.setOptional(F,z,"bindMatrixInverse");let gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),et.setValue(F,"boneTexture",gt.boneTexture,ke))}z.isBatchedMesh&&(et.setOptional(F,z,"batchingTexture"),et.setValue(F,"batchingTexture",z._matricesTexture,ke),et.setOptional(F,z,"batchingIdTexture"),et.setValue(F,"batchingIdTexture",z._indirectTexture,ke),et.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&et.setValue(F,"batchingColorTexture",z._colorsTexture,ke));let wn=H.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&J.update(z,H,Wt),(mi||Se.receiveShadow!==z.receiveShadow)&&(Se.receiveShadow=z.receiveShadow,et.setValue(F,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=xv()),mi){if(et.setValue(F,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&cp(Ht,Hi),de&&O.fog===!0&&re.refreshFogUniforms(Ht,de),re.refreshMaterialUniforms(Ht,O,xe,Pe,b.state.transmissionRenderTarget[E.id]),Se.needsLights&&Se.numLightProbeGrids>0){let gt=y,Ft=0;for(let Zn of b.state.lightProbeGridArray)Zn.texture!==null&&(gt.textures[Ft]=Zn.texture,gt.min[Ft]=Zn.boundingBox.min,gt.max[Ft]=Zn.boundingBox.max,gt.resolution[Ft]=Zn.resolution,Ft++);for(let Zn in gt)gt[Zn].length=Ft;Ht.probesSH.value=gt.textures,Ht.probesMin.value=gt.min,Ht.probesMax.value=gt.max,Ht.probesResolution.value=gt.resolution}Ws.upload(F,iu(Se),Ht,ke)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ws.upload(F,iu(Se),Ht,ke),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(F,"center",z.center),et.setValue(F,"modelViewMatrix",z.modelViewMatrix),et.setValue(F,"normalMatrix",z.normalMatrix),et.setValue(F,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let gt=O.uniformsGroups;for(let Ft=0,Zn=gt.length;Ft<Zn;Ft++){let au=gt[Ft];Te.update(au,Wt),Te.bind(au,Wt)}}return Wt}function cp(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function hp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,D,H){let O=Le.get(E);O.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Le.get(E.texture).__webglTexture=D,Le.get(E.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){let H=Le.get(E);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,H=0){te=E,q=D,G=H;let O=null,z=!1,de=!1;if(E){let ce=Le.get(E);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(F.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(E.viewport),we.copy(E.scissor),ze=E.scissorTest,fe.viewport(ee),fe.scissor(we),fe.setScissorTest(ze),W=-1;return}else if(ce.__webglFramebuffer===void 0)ke.setupRenderTarget(E);else if(ce.__hasExternalTextures)ke.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&Le.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Ee=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?O=Ee[D][H]:O=Ee[D],z=!0):E.samples>0&&ke.useMultisampledRTT(E)===!1?O=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[H]:O=Ee,ee.copy(E.viewport),we.copy(E.scissor),ze=E.scissorTest}else ee.copy(Ne).multiplyScalar(xe).floor(),we.copy(rt).multiplyScalar(xe).floor(),ze=ot;if(H!==0&&(O=k),fe.bindFramebuffer(F.FRAMEBUFFER,O)&&fe.drawBuffers(E,O),fe.viewport(ee),fe.scissor(we),fe.setScissorTest(ze),z){let ce=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ce.__webglTexture,H)}else if(de){let ce=D;for(let ve=0;ve<E.textures.length;ve++){let Ee=Le.get(E.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,Ee.__webglTexture,H,ce)}}else if(E!==null&&H!==0){let ce=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,H)}W=-1};function ru(E){let D=Le.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=ft.textureFormatReadable(E.format),D.__typeReadable=ft.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,H,O,z,de,ye,ce=0){if(!(E&&E.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(F.FRAMEBUFFER,ve);try{let Ee=E.textures[ce],He=Ee.format,Je=Ee.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Me=ru(Ee);if(Me.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-O&&H>=0&&H<=E.height-z&&F.readPixels(D,H,O,z,se.convert(He),se.convert(Je),de)}finally{let Ee=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,D,H,O,z,de,ye,ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye],Array.isArray(ve)&&(ve=ve[0])),ve)if(D>=0&&D<=E.width-O&&H>=0&&H<=E.height-z){fe.bindFramebuffer(F.FRAMEBUFFER,ve);let Ee=E.textures[ce],He=Ee.format,Je=Ee.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ce);let Me=ru(Ee);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.bufferData(F.PIXEL_PACK_BUFFER,de.byteLength,F.STREAM_READ),F.readPixels(D,H,O,z,se.convert(He),se.convert(Je),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let St=te!==null?Le.get(te).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,St);let ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Td(F,ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,de),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ke),F.deleteSync(ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,H=0){let O=Math.pow(2,-H),z=Math.floor(E.image.width*O),de=Math.floor(E.image.height*O),ye=D!==null?D.x:0,ce=D!==null?D.y:0;ke.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,ye,ce,z,de),fe.unbindTexture()},this.copyTextureToTexture=function(E,D,H=null,O=null,z=0,de=0){let ye,ce,ve,Ee,He,Je,Me,Ke,St,ct=E.isCompressedTexture?E.mipmaps[de]:E.image;if(H!==null)ye=H.max.x-H.min.x,ce=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,He=H.min.y,Je=H.isBox3?H.min.z:0;else{let et=Math.pow(2,-z);ye=Math.floor(ct.width*et),ce=Math.floor(ct.height*et),E.isDataArrayTexture?ve=ct.depth:E.isData3DTexture?ve=Math.floor(ct.depth*et):ve=1,Ee=0,He=0,Je=0}O!==null?(Me=O.x,Ke=O.y,St=O.z):(Me=0,Ke=0,St=0);let lt=se.convert(D.format),Vt=se.convert(D.type),Se;D.isData3DTexture?(ke.setTexture3D(D,0),Se=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ke.setTexture2DArray(D,0),Se=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(D,0),Se=F.TEXTURE_2D),fe.activeTexture(F.TEXTURE0),fe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),fe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),fe.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let Jt=fe.getParameter(F.UNPACK_ROW_LENGTH),tt=fe.getParameter(F.UNPACK_IMAGE_HEIGHT),zi=fe.getParameter(F.UNPACK_SKIP_PIXELS),Wt=fe.getParameter(F.UNPACK_SKIP_ROWS),va=fe.getParameter(F.UNPACK_SKIP_IMAGES);fe.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ee),fe.pixelStorei(F.UNPACK_SKIP_ROWS,He),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);let mi=E.isDataArrayTexture||E.isData3DTexture,Hi=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){let et=Le.get(E),Ht=Le.get(D),wn=Le.get(et.__renderTarget),gt=Le.get(Ht.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ft=0;Ft<ve;Ft++)mi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,z,Je+Ft),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(D).__webglTexture,de,St+Ft)),F.blitFramebuffer(Ee,He,Ee+ye,He+ce,Me,Ke,Me+ye,Ke+ce,F.DEPTH_BUFFER_BIT,F.NEAREST);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Le.has(E)){let et=Le.get(E),Ht=Le.get(D);fe.bindFramebuffer(F.READ_FRAMEBUFFER,P),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let wn=0;wn<ve;wn++)mi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,et.__webglTexture,z,Je+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,et.__webglTexture,z),Hi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,de,St+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,de),z!==0?F.blitFramebuffer(Ee,He,Ee+ye,He+ce,Me,Ke,Me+ye,Ke+ce,F.COLOR_BUFFER_BIT,F.NEAREST):Hi?F.copyTexSubImage3D(Se,de,Me,Ke,St+wn,Ee,He,ye,ce):F.copyTexSubImage2D(Se,de,Me,Ke,Ee,He,ye,ce);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Hi?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,Vt,ct.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,ct.data):F.texSubImage3D(Se,de,Me,Ke,St,ye,ce,ve,lt,Vt,ct):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,de,Me,Ke,ye,ce,lt,Vt,ct.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,de,Me,Ke,ct.width,ct.height,lt,ct.data):F.texSubImage2D(F.TEXTURE_2D,de,Me,Ke,ye,ce,lt,Vt,ct);fe.pixelStorei(F.UNPACK_ROW_LENGTH,Jt),fe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),fe.pixelStorei(F.UNPACK_SKIP_PIXELS,zi),fe.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),fe.pixelStorei(F.UNPACK_SKIP_IMAGES,va),de===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(Se),fe.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ke.setTextureCube(E,0):E.isData3DTexture?ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ke.setTexture2DArray(E,0):ke.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){q=0,G=0,te=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Ys=[{id:"flat",name:"Cards & flat print"},{id:"folded",name:"Folded leaflets"},{id:"invitations",name:"Invitations & greetings"},{id:"envelopes",name:"Envelopes"},{id:"folders",name:"Folders"},{id:"bound",name:"Brochures & books"},{id:"stationery",name:"Calendars & pads"},{id:"boxes",name:"Boxes"},{id:"bags",name:"Bags & food"},{id:"labels",name:"Labels & stickers"},{id:"display",name:"Large format & display"}],Tl={a7:[74,105],a6:[105,148],a5:[148,210],a4:[210,297],a3:[297,420],a2:[420,594],a1:[594,841],a0:[841,1189],b2:[500,700],b1:[700,1e3]},la=["silk-350","silk-300","offset-120","cotton-450","kraft-300","black-300"],ci=["silk-170","gloss-170","silk-135","offset-120","silk-250","silk-300"],Al=["cotton-450","silk-350","offset-120","kraft-300","black-300"],ca=["env-120","env-90","kraft-120","black-300"],fn=["gc1-350","gc1-400","kraftboard-400","black-300"],Rl=["eflute-white","eflute-kraft"],$e=["none","matte","gloss","soft"],K=(i,e,t)=>({id:i,label:e,p:t}),pe=(i,e,t,n,s)=>K(i,e,{w:t,h:n,...s}),ha=(i,e)=>i.map(t=>pe(t,`${t.toUpperCase()} ${Tl[t][0]} \xD7 ${Tl[t][1]} mm`,Tl[t][0],Tl[t][1],e)),De=(i,e,t,n,s)=>K(i,e,{w:t,h:n,...s}),$s=[{id:"business-card",cat:"flat",name:"Business card",nl:"Visitekaartje",fr:"Carte de visite",use:"The European standard, 85 \xD7 55 mm.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55),pe("wide","90 \xD7 50 mm",90,50),pe("us","89 \xD7 51 mm",89,51)],stocks:la,finishes:$e},{id:"business-card-round",cat:"flat",name:"Rounded business card",nl:"Visitekaartje afgeronde hoeken",fr:"Carte de visite coins arrondis",use:"Same card with die-cut corners.",tpl:"sheet",sizes:[pe("r3","85 \xD7 55 mm, radius 3",85,55,{r:3}),pe("r6","85 \xD7 55 mm, radius 6",85,55,{r:6})],stocks:la,finishes:$e},{id:"business-card-square",cat:"flat",name:"Square business card",nl:"Vierkant visitekaartje",fr:"Carte de visite carr\xE9e",use:"Stands out in a stack of standard cards.",tpl:"sheet",sizes:[pe("s55","55 \xD7 55 mm",55,55),pe("s65","65 \xD7 65 mm",65,65),pe("s85","85 \xD7 85 mm",85,85)],stocks:la,finishes:$e},{id:"business-card-slim",cat:"flat",name:"Slim business card",nl:"Smal visitekaartje",fr:"Carte de visite \xE9troite",use:"A narrow card for a short message.",tpl:"sheet",sizes:[pe("s","85 \xD7 35 mm",85,35),pe("m","90 \xD7 40 mm",90,40)],stocks:la,finishes:$e},{id:"business-card-circle",cat:"flat",name:"Round card",nl:"Rond kaartje",fr:"Carte ronde",use:"Die-cut circle, also works as a coaster or tag.",tpl:"sheet",sizes:[pe("d60","\xD8 60 mm",60,60,{shape:"circle"}),pe("d70","\xD8 70 mm",70,70,{shape:"circle"})],stocks:la,finishes:$e},{id:"business-card-folded",cat:"flat",name:"Folded business card",nl:"Gevouwen visitekaartje",fr:"Carte de visite pli\xE9e",use:"Four sides of space in a wallet format.",tpl:"halfFold",sizes:[De("tent","170 \xD7 55 \u2192 85 \xD7 55 mm",170,55),De("top","85 \xD7 110 \u2192 85 \xD7 55 mm",85,110,{axis:"h"})],stocks:["silk-300","silk-350","offset-120","kraft-300"],finishes:$e},{id:"flyer",cat:"flat",name:"Flyer",nl:"Flyer",fr:"Flyer",use:"Single sheet, one or two sides.",tpl:"sheet",sizes:[...ha(["a7","a6","a5","a4"]),pe("dl","DL 99 \xD7 210 mm",99,210),pe("xl","X-long 105 \xD7 297 mm",105,297),pe("s148","Square 148 \xD7 148 mm",148,148),pe("s210","Square 210 \xD7 210 mm",210,210)],stocks:ci,finishes:$e,def:"a5"},{id:"postcard",cat:"flat",name:"Postcard",nl:"Postkaart",fr:"Carte postale",use:"Heavy card, writable back.",tpl:"sheet",sizes:[pe("a6","A6 148 \xD7 105 mm",148,105),pe("lg","A5 210 \xD7 148 mm",210,148),pe("dl","DL 210 \xD7 99 mm",210,99),pe("sq","Square 140 \xD7 140 mm",140,140)],stocks:["silk-350","silk-300","offset-120","kraft-300"],finishes:["none","matte"]},{id:"letterhead",cat:"flat",name:"Letterhead",nl:"Briefpapier",fr:"Papier \xE0 en-t\xEAte",use:"Office-printable uncoated paper.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"compliment-slip",cat:"flat",name:"Compliment slip",nl:"Complimentkaart",fr:"Carte de correspondance",use:"Short note that fits a DL envelope.",tpl:"sheet",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99)],stocks:["offset-120","silk-250","silk-300"],finishes:["none","matte"]},{id:"bookmark",cat:"flat",name:"Bookmark",nl:"Boekenlegger",fr:"Marque-page",use:"Long narrow card, optional punched hole.",tpl:"sheet",sizes:[pe("s","50 \xD7 148 mm",50,148),pe("m","50 \xD7 200 mm",50,200),pe("l","60 \xD7 210 mm",60,210)],stocks:["silk-300","silk-350","kraft-300"],finishes:$e},{id:"door-hanger",cat:"flat",name:"Door hanger",nl:"Deurhanger",fr:"Accroche-porte",use:"Die-cut hole with a slit for the handle.",tpl:"doorHanger",sizes:[pe("xl","105 \xD7 297 mm",105,297),pe("dl","99 \xD7 210 mm",99,210)],stocks:["silk-350","silk-300"],finishes:$e},{id:"hang-tag",cat:"flat",name:"Hang tag",nl:"Hangtag",fr:"\xC9tiquette volante",use:"Clothing and product tag with a string.",tpl:"hangTag",sizes:[pe("s","50 \xD7 90 mm",50,90),pe("m","55 \xD7 85 mm",55,85),pe("l","70 \xD7 120 mm",70,120)],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:$e},{id:"coaster",cat:"flat",name:"Beer mat",nl:"Bierviltje",fr:"Sous-bock",use:"Thick absorbent board, a Belgian classic.",tpl:"sheet",sizes:[pe("sq","Square 93 \xD7 93 mm",93,93,{r:3}),pe("rd","Round \xD8 93 mm",93,93,{shape:"circle"})],stocks:["beermat-1000"],finishes:["none"]},{id:"placemat",cat:"flat",name:"Placemat",nl:"Placemat",fr:"Set de table",use:"Paper table mat for horeca.",tpl:"sheet",sizes:[pe("a3","A3 420 \xD7 297 mm",420,297,{stack:8}),pe("l","430 \xD7 300 mm",430,300,{stack:8})],stocks:["offset-90","offset-120"],finishes:["none"]},{id:"menu-card",cat:"flat",name:"Menu card",nl:"Menukaart",fr:"Carte de menu",use:"Single card, often laminated for horeca.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297),pe("a5","A5 148 \xD7 210 mm",148,210),pe("xl","X-long 105 \xD7 297 mm",105,297)],stocks:["silk-350","silk-300","kraft-300"],finishes:$e},{id:"voucher",cat:"flat",name:"Gift voucher",nl:"Cadeaubon",fr:"Bon cadeau",use:"DL card with a tear-off stub.",tpl:"ticket",sizes:[pe("dl","DL 210 \xD7 99 mm",210,99,{stub:50})],stocks:["silk-250","silk-300"],finishes:["none","matte"]},{id:"event-ticket",cat:"flat",name:"Event ticket",nl:"Toegangsticket",fr:"Ticket d'entr\xE9e",use:"Perforated stub for checking in.",tpl:"ticket",sizes:[pe("m","200 \xD7 70 mm",200,70,{stub:40}),pe("s","148 \xD7 52 mm",148,52,{stub:34})],stocks:["silk-250","silk-300","gloss-300"],finishes:["none","matte"]},{id:"loyalty-card",cat:"flat",name:"Loyalty card",nl:"Spaarkaart",fr:"Carte de fid\xE9lit\xE9",use:"Stamp card, keep the back uncoated.",tpl:"sheet",sizes:[pe("eu","85 \xD7 55 mm",85,55)],stocks:["offset-120","silk-300"],finishes:["none"]},{id:"certificate",cat:"flat",name:"Certificate",nl:"Certificaat",fr:"Certificat",use:"Heavy A4 sheet with a writable surface.",tpl:"sheet",sizes:[pe("a4","A4 210 \xD7 297 mm",210,297,{stack:2})],stocks:["silk-250","offset-120","cotton-450"],finishes:["none"]},{id:"badge",cat:"flat",name:"Event badge",nl:"Badge",fr:"Badge",use:"Lanyard slot on top.",tpl:"badge",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a7","A7 74 \xD7 105 mm",74,105)],stocks:["silk-300","silk-350"],finishes:$e},{id:"table-tent",cat:"flat",name:"Tent card",nl:"Tafelstandaard",fr:"Chevalet de table",use:"Folded card that stands on a table.",tpl:"tentCard",sizes:[K("a6","A5 \u2192 148 \xD7 105 mm",{w:148,h:210}),K("a5","A4 \u2192 210 \xD7 148 mm",{w:210,h:297}),K("name","Name card 90 \xD7 50 mm",{w:90,h:100})],stocks:["silk-350","silk-300","kraft-300"],finishes:$e},{id:"table-talker",cat:"flat",name:"Table talker",nl:"Tafelprisma",fr:"Prisme de table",use:"Three-sided prism with a glue strip.",tpl:"tableTalker",sizes:[K("a6","148 \xD7 105 mm face",{w:148,side:105,h:310}),K("dl","210 \xD7 99 mm face",{w:210,side:99,h:300})],stocks:["silk-350","silk-300"],finishes:$e},{id:"half-fold",cat:"folded",name:"Half fold",nl:"Enkelvouw",fr:"Pli simple",use:"One fold, four pages. The default leaflet.",tpl:"halfFold",sizes:[De("a4a5","A4 \u2192 A5",297,210),De("a3a4","A3 \u2192 A4",420,297),De("a5a6","A5 \u2192 A6",210,148),De("dl","198 \xD7 210 \u2192 DL",198,210),De("xl","A4 \u2192 X-long",210,297),De("sq","Square 296 \xD7 148 \u2192 148 mm",296,148)],stocks:ci,finishes:$e},{id:"tri-fold",cat:"folded",name:"Tri-fold",nl:"Wikkelvouw",fr:"Pli roul\xE9",use:"Roll fold, six pages. The inner flap is cut narrower.",tpl:"rollFold",sizes:[De("a4","A4 \u2192 100 \xD7 210 mm",297,210,{panels:[97,100,100]}),De("a5","A5 \u2192 70 \xD7 148 mm",210,148,{panels:[68,71,71]}),De("a3","A3 \u2192 140 \xD7 297 mm",420,297,{panels:[138,141,141]}),De("sq","444 \xD7 148 \u2192 square 148 mm",444,148,{panels:[145,149.5,149.5]})],stocks:ci,finishes:$e},{id:"z-fold",cat:"folded",name:"Z-fold",nl:"Zigzagvouw",fr:"Pli accord\xE9on",use:"Three equal panels that open like a Z.",tpl:"zFold",sizes:[De("a4","A4 \u2192 99 \xD7 210 mm",297,210),De("a5","A5 \u2192 70 \xD7 148 mm",210,148),De("a5l","630 \xD7 148 \u2192 A5 landscape",630,148),De("a3","A3 \u2192 140 \xD7 297 mm",420,297)],stocks:ci,finishes:$e},{id:"gate-fold",cat:"folded",name:"Gate fold",nl:"Altaarvouw",fr:"Pli fen\xEAtre",use:"Two doors open onto a double centre.",tpl:"gateFold",sizes:[De("a4","A4 \u2192 149 \xD7 210 mm",297,210),De("a3","A3 \u2192 A4",420,297),De("a5","A5 \u2192 106 \xD7 148 mm",210,148)],stocks:ci,finishes:$e},{id:"double-gate",cat:"folded",name:"Double gate fold",nl:"Dubbele altaarvouw",fr:"Pli portefeuille",use:"Gate fold closed once more down the middle.",tpl:"doubleGate",sizes:[De("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),De("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:ci,finishes:$e},{id:"double-parallel",cat:"folded",name:"Double parallel fold",nl:"Dubbele parallelvouw",fr:"Double pli parall\xE8le",use:"Folded in half, then in half again.",tpl:"doubleParallel",sizes:[De("a3","420 \xD7 210 \u2192 106 \xD7 210 mm",420,210),De("a3f","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:ci,finishes:$e},{id:"roll-fold-8",cat:"folded",name:"Four-panel roll fold",nl:"Wikkelvouw 8 pagina\u2019s",fr:"Pli roul\xE9 4 volets",use:"Eight pages rolling inwards.",tpl:"roll4",sizes:[De("dl","396 \xD7 210 \u2192 100 \xD7 210 mm",396,210),De("a3","A3 \u2192 106 \xD7 297 mm",420,297)],stocks:ci,finishes:$e},{id:"accordion-4",cat:"folded",name:"Accordion, 4 panels",nl:"Zigzagvouw 4-luik",fr:"Accord\xE9on 4 volets",use:"Stands on a table as a small display.",tpl:"accordion",sizes:[De("dl","396 \xD7 210 \u2192 99 \xD7 210 mm",396,210,{n:4}),De("a6","420 \xD7 148 \u2192 105 \xD7 148 mm",420,148,{n:4})],stocks:ci,finishes:$e},{id:"accordion-6",cat:"folded",name:"Leporello, 6 panels",nl:"Leporello",fr:"Leporello",use:"Long concertina for timelines and photo series.",tpl:"accordion",sizes:[De("dl","594 \xD7 210 \u2192 99 \xD7 210 mm",594,210,{n:6}),De("sq","888 \xD7 148 \u2192 square 148 mm",888,148,{n:6}),De("five","495 \xD7 210, 5 panels",495,210,{n:5})],stocks:["silk-250","silk-300","silk-170"],finishes:$e},{id:"cross-fold",cat:"folded",name:"Cross fold",nl:"Kruisvouw",fr:"Pli crois\xE9",use:"Two folds at right angles, from A3 to A5.",tpl:"crossFold",sizes:[De("a3","A3 \u2192 A5",420,297),De("a2","A2 \u2192 A4",594,420),De("a4","A4 \u2192 A6",297,210)],stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"]},{id:"map-fold",cat:"folded",name:"Map fold",nl:"Landkaartvouw",fr:"Pli carte",use:"Concertina first, then folded across.",tpl:"mapFold",sizes:[De("a2","A2 \u2192 148 \xD7 210 mm",594,420,{cols:4}),De("a1","A1 \u2192 141 \xD7 210 mm",841,420,{cols:6})],stocks:["offset-90","silk-135"],finishes:["none"]},{id:"invite-flat",cat:"invitations",name:"Flat invitation",nl:"Uitnodiging plat",fr:"Faire-part simple",use:"A single heavy card, printed on both sides.",tpl:"sheet",sizes:[pe("a6","A6 105 \xD7 148 mm",105,148),pe("a5","A5 148 \xD7 210 mm",148,210),pe("5x7","127 \xD7 178 mm",127,178),pe("sq","Square 140 \xD7 140 mm",140,140),pe("dl","DL 99 \xD7 210 mm",99,210)],stocks:Al,finishes:["none","matte","soft"]},{id:"invite-round",cat:"invitations",name:"Rounded invitation",nl:"Uitnodiging afgerond",fr:"Faire-part coins ronds",use:"Soft die-cut corners.",tpl:"sheet",sizes:[pe("a6","A6, radius 6",105,148,{r:6}),pe("a5","A5, radius 8",148,210,{r:8}),pe("sq","Square, radius 8",140,140,{r:8})],stocks:Al,finishes:["none","matte","soft"]},{id:"invite-arch",cat:"invitations",name:"Arch invitation",nl:"Uitnodiging boogvorm",fr:"Faire-part en arche",use:"Die-cut arched top, popular for weddings.",tpl:"sheet",sizes:[pe("m","120 \xD7 170 mm",120,170,{shape:"arch"}),pe("s","105 \xD7 148 mm",105,148,{shape:"arch"})],stocks:Al,finishes:["none","soft"]},{id:"invite-oval",cat:"invitations",name:"Oval invitation",nl:"Ovale uitnodiging",fr:"Faire-part ovale",use:"Die-cut oval for a softer shape.",tpl:"sheet",sizes:[pe("m","110 \xD7 160 mm",110,160,{shape:"ellipse"})],stocks:Al,finishes:["none","soft"]},{id:"card-side",cat:"invitations",name:"Folded card, side fold",nl:"Dubbele kaart, zijvouw",fr:"Carte double, pli vertical",use:"Opens like a book, the greeting card.",tpl:"halfFold",sizes:[De("a6","A5 \u2192 A6",210,148),De("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178),De("sq","280 \xD7 140 \u2192 square 140 mm",280,140),De("a5","A4 \u2192 A5",297,210)],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"card-top",cat:"invitations",name:"Folded card, top fold",nl:"Dubbele kaart, kopvouw",fr:"Carte double, pli horizontal",use:"Opens upwards, landscape front.",tpl:"halfFold",sizes:[De("a6","A5 \u2192 A6 landscape",148,210,{axis:"h"}),De("sq","140 \xD7 280 \u2192 square 140 mm",140,280,{axis:"h"}),De("a5","A4 \u2192 A5 landscape",210,297,{axis:"h"})],stocks:["silk-300","silk-350","cotton-450","kraft-300"],finishes:["none","matte","soft"]},{id:"invite-gate",cat:"invitations",name:"Gatefold invitation",nl:"Uitnodiging altaarvouw",fr:"Faire-part pli fen\xEAtre",use:"Two doors, a formal reveal.",tpl:"gateFold",sizes:[De("sq","300 \xD7 150 \u2192 square 150 mm",300,150),De("a6","210 \xD7 148 \u2192 106 \xD7 148 mm",210,148),De("5x7","254 \xD7 178 \u2192 127 \xD7 178 mm",254,178),De("a6-flush","210 \xD7 148 \u2192 105 \xD7 148 mm, doors meet",210,148,{gap:.5})],stocks:["silk-300","cotton-450","pastel-board-700","kraft-300","black-300"],finishes:["none","soft"]},{id:"invite-z",cat:"invitations",name:"Z-fold invitation",nl:"Uitnodiging zigzagvouw",fr:"Faire-part accord\xE9on",use:"Three panels for programme and details.",tpl:"zFold",sizes:[De("sq","420 \xD7 140 \u2192 square 140 mm",420,140),De("dl","297 \xD7 210 \u2192 DL",297,210)],stocks:["silk-300","cotton-450","kraft-300"],finishes:["none","soft"]},{id:"invite-tri",cat:"invitations",name:"Tri-fold invitation",nl:"Uitnodiging wikkelvouw",fr:"Faire-part pli roul\xE9",use:"Folds into a slim DL card.",tpl:"rollFold",sizes:[De("dl","A4 \u2192 DL",297,210,{panels:[97,100,100]}),De("sq","420 \xD7 140 \u2192 square 140 mm",420,140,{panels:[136,142,142]})],stocks:["silk-250","silk-300","kraft-300"],finishes:["none","soft"]},{id:"invite-pocket",cat:"invitations",name:"Pocketfold invitation",nl:"Pocketfold uitnodiging",fr:"Faire-part pochette",use:"A little folder that holds the invitation suite.",tpl:"folder",sizes:[K("5x7","135 \xD7 185 mm",{w:135,h:185,pocket:70,slit:!1,insert:!0}),K("sq","150 \xD7 150 mm",{w:150,h:150,pocket:60,slit:!1,insert:!0})],stocks:["silk-350","cotton-450","kraft-300","black-300"],finishes:["none","soft"]},{id:"belly-band",cat:"invitations",name:"Belly band",nl:"Bandrol",fr:"Bande de papier",use:"Paper band that holds the suite together.",tpl:"sleeve",sizes:[K("5x7","127 mm card, 40 mm band",{L:127,W:40,H:2.2,inner:178,t:.2,innerColor:"#f7f5ef"}),K("a6","A6 card, 35 mm band",{L:105,W:35,H:2.2,inner:148,t:.2,innerColor:"#f7f5ef"})],stocks:["offset-120","kraft-120","silk-170"],finishes:["none"]},{id:"rsvp-card",cat:"invitations",name:"RSVP & save the date",nl:"Antwoordkaart",fr:"Carte r\xE9ponse",use:"Small reply card, uncoated so it takes a pen.",tpl:"sheet",sizes:[pe("a7","A7 105 \xD7 74 mm",105,74),pe("a6","A6 148 \xD7 105 mm",148,105)],stocks:["offset-120","cotton-450","kraft-300"],finishes:["none"]},{id:"place-card",cat:"invitations",name:"Place card",nl:"Naamkaartje",fr:"Marque-place",use:"Small tent for the table.",tpl:"tentCard",sizes:[K("s","90 \xD7 50 mm",{w:90,h:100}),K("m","100 \xD7 60 mm",{w:100,h:120})],stocks:["cotton-450","silk-300","kraft-300"],finishes:["none"]},{id:"envelope-wallet",cat:"envelopes",name:"Wallet envelope",nl:"Envelop met lange klep",fr:"Enveloppe patte longue",use:"Flap on the long side, DL and C-series.",tpl:"envelope",sizes:[K("dl","DL 220 \xD7 110 mm",{w:220,h:110}),K("c6","C6 162 \xD7 114 mm",{w:162,h:114}),K("c5","C5 229 \xD7 162 mm",{w:229,h:162}),K("c65","C6/5 229 \xD7 114 mm",{w:229,h:114}),K("c7","C7 114 \xD7 81 mm",{w:114,h:81})],stocks:ca,finishes:["none"]},{id:"envelope-window",cat:"envelopes",name:"Window envelope",nl:"Vensterenvelop",fr:"Enveloppe \xE0 fen\xEAtre",use:"Address window on the left, as used in Belgium.",tpl:"envelope",sizes:[K("dl","DL, window 90 \xD7 45 mm",{w:220,h:110,window:{x:20,y:50,w:90,h:45}}),K("c5","C5, window 90 \xD7 45 mm",{w:229,h:162,window:{x:20,y:96,w:90,h:45}})],stocks:ca,finishes:["none"]},{id:"envelope-pocket",cat:"envelopes",name:"Pocket envelope",nl:"Akte-envelop",fr:"Pochette",use:"Opens on the short side, for flat documents.",tpl:"envelope",sizes:[K("c4","C4 229 \xD7 324 mm",{w:229,h:324,style:"pocket"}),K("c5","C5 162 \xD7 229 mm",{w:162,h:229,style:"pocket"}),K("b4","B4 250 \xD7 353 mm",{w:250,h:353,style:"pocket"})],stocks:ca,finishes:["none"]},{id:"envelope-square",cat:"envelopes",name:"Square envelope",nl:"Vierkante envelop",fr:"Enveloppe carr\xE9e",use:"For square invitations, check the postage.",tpl:"envelope",sizes:[K("140","140 \xD7 140 mm",{w:140,h:140}),K("155","155 \xD7 155 mm",{w:155,h:155}),K("170","170 \xD7 170 mm",{w:170,h:170})],stocks:ca,finishes:["none"]},{id:"envelope-pointed",cat:"envelopes",name:"Pointed flap envelope",nl:"Envelop met puntklep",fr:"Enveloppe patte pointue",use:"The classic diamond-cut invitation envelope.",tpl:"envelope",sizes:[K("c6","C6 162 \xD7 114 mm",{w:162,h:114,style:"pointed"}),K("c5","C5 229 \xD7 162 mm",{w:229,h:162,style:"pointed"}),K("sq","Square 170 \xD7 170 mm",{w:170,h:170,style:"pointed"})],stocks:ca,finishes:["none"]},{id:"envelope-gusset",cat:"envelopes",name:"Gusset envelope",nl:"Envelop met balgzijde",fr:"Pochette \xE0 soufflet",use:"Expands for catalogues and thick documents.",tpl:"gussetEnvelope",sizes:[K("c4","C4 229 \xD7 324 mm, 25 mm",{w:229,h:324,g:25}),K("b4","B4 250 \xD7 353 mm, 40 mm",{w:250,h:353,g:40})],stocks:["kraft-120","env-120"],finishes:["none"]},{id:"folder-one",cat:"folders",name:"Presentation folder",nl:"Presentatiemap",fr:"Chemise \xE0 rabat",use:"A4 folder with one pocket and card slits.",tpl:"folder",sizes:[K("a4","A4 220 \xD7 310 mm",{w:220,h:310,insert:!0}),K("a5","A5 155 \xD7 220 mm",{w:155,h:220,pocket:70,insert:!0})],stocks:["silk-300","silk-350","gc1-350","kraft-300"],finishes:$e},{id:"folder-two",cat:"folders",name:"Folder with two pockets",nl:"Map met twee flappen",fr:"Chemise \xE0 deux rabats",use:"Pockets left and right.",tpl:"folder",sizes:[K("a4","A4 220 \xD7 310 mm",{w:220,h:310,two:!0})],stocks:["silk-300","silk-350","gc1-350"],finishes:$e},{id:"folder-spine",cat:"folders",name:"Folder with spine",nl:"Map met rug",fr:"Chemise avec dos",use:"A scored spine for thicker document sets.",tpl:"folder",sizes:[K("s3","A4, spine 3 mm",{w:220,h:310,spine:3}),K("s5","A4, spine 5 mm",{w:220,h:310,spine:5}),K("s10","A4, spine 10 mm",{w:220,h:310,spine:10})],stocks:["silk-350","gc1-350","gc1-400"],finishes:$e},{id:"brochure-saddle",cat:"bound",name:"Stapled brochure",nl:"Geniete brochure",fr:"Brochure agraf\xE9e",use:"Saddle stitched, page count in fours.",tpl:"saddleBook",sizes:ha(["a6","a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210),pe("dl","DL 99 \xD7 210 mm",99,210)),pageOptions:[8,12,16,24,32,48],defPages:16,stocks:["silk-135","silk-170","offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"brochure-perfect",cat:"bound",name:"Perfect bound book",nl:"Gelijmde brochure",fr:"Dos carr\xE9 coll\xE9",use:"Square glued spine for catalogues and magazines.",tpl:"perfectBook",sizes:ha(["a5","a4"]).concat(pe("sq","Square 210 \xD7 210 mm",210,210)),pageOptions:[40,64,96,128,200],defPages:96,stocks:["silk-250","silk-300"],finishes:["none","matte","gloss","soft"],def:"a5"},{id:"book-hardcover",cat:"bound",name:"Hardcover book",nl:"Hardcover boek",fr:"Livre reli\xE9",use:"Cover wrapped over rigid board.",tpl:"perfectBook",sizes:ha(["a5","a4"],{hard:!0}).concat(pe("sq","Square 210 \xD7 210 mm",210,210,{hard:!0})),pageOptions:[64,96,128,200,300],defPages:128,stocks:["silk-170","silk-250"],finishes:["matte","gloss","soft"],def:"a5"},{id:"notebook-wire",cat:"bound",name:"Wire-O notebook",nl:"Wire-O notitieboek",fr:"Carnet \xE0 spirale",use:"Opens flat, pages turn all the way round.",tpl:"wireBook",sizes:ha(["a6","a5","a4"]),pageOptions:[40,80,100],defPages:80,stocks:["silk-300","silk-350","kraft-300"],finishes:["none","matte"],def:"a5"},{id:"calendar-wall",cat:"stationery",name:"Wall calendar",nl:"Wandkalender",fr:"Calendrier mural",use:"Twelve months on a wire with a hanger.",tpl:"wireBook",sizes:[pe("a4","A4 landscape, opens to A3",297,210,{pages:26,edge:"top",wall:!0}),pe("a3","A3 landscape, opens to A2",420,297,{pages:26,edge:"top",wall:!0})],stocks:["silk-250","silk-170"],finishes:["none"]},{id:"calendar-desk",cat:"stationery",name:"Desk calendar",nl:"Bureaukalender",fr:"Calendrier de bureau",use:"Stands on a folded easel.",tpl:"deskCalendar",sizes:[K("l","210 \xD7 105 mm",{w:210,h:105}),K("s","148 \xD7 105 mm",{w:148,h:105})],stocks:["silk-350","silk-300"],finishes:["none"]},{id:"calendar-poster",cat:"stationery",name:"Poster calendar",nl:"Jaarkalender",fr:"Calendrier poster",use:"One year on one sheet.",tpl:"poster",sizes:[K("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Calendar"}),K("a3","A3 297 \xD7 420 mm",{w:297,h:420,name:"Calendar"})],stocks:["poster-135","silk-170"],finishes:["none"]},{id:"notepad",cat:"stationery",name:"Notepad",nl:"Notitieblok",fr:"Bloc-notes",use:"Glued at the top on a chipboard back.",tpl:"notepad",sizes:[pe("a4","A4, 50 sheets",210,297),pe("a5","A5, 50 sheets",148,210),pe("a6","A6, 50 sheets",105,148),pe("a7","A7, 50 sheets",74,105)],stocks:["offset-90","offset-120"],finishes:["none"],def:"a5"},{id:"memo-block",cat:"stationery",name:"Memo block",nl:"Memoblok",fr:"Bloc cube",use:"A tall stack of 500 sheets, printed on the sides too.",tpl:"notepad",sizes:[pe("90","90 \xD7 90 mm, 500 sheets",90,90,{sheets:500,t:.09})],stocks:["offset-90"],finishes:["none"]},{id:"box-straight",cat:"boxes",name:"Straight tuck box",nl:"Vouwdoos, tuck aan \xE9\xE9n zijde",fr:"\xC9tui \xE0 rabats droits",use:"Both tucks open to the same side.",tpl:"tuckBox",sizes:[K("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130}),K("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180}),K("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150}),K("tea","110 \xD7 70 \xD7 70 mm",{L:110,W:70,H:70})],stocks:fn,finishes:$e},{id:"box-reverse",cat:"boxes",name:"Reverse tuck box",nl:"Vouwdoos, omgekeerde tuck",fr:"\xC9tui \xE0 rabats invers\xE9s",use:"Tucks on opposite sides, cheaper to cut.",tpl:"tuckBox",sizes:[K("s","80 \xD7 50 \xD7 130 mm",{L:80,W:50,H:130,reverse:!0}),K("m","120 \xD7 60 \xD7 180 mm",{L:120,W:60,H:180,reverse:!0}),K("cos","60 \xD7 60 \xD7 150 mm",{L:60,W:60,H:150,reverse:!0})],stocks:fn,finishes:$e},{id:"box-autolock",cat:"boxes",name:"Auto-lock bottom box",nl:"Vouwdoos met autolockbodem",fr:"\xC9tui \xE0 fond automatique",use:"Bottom snaps into place when the box opens.",tpl:"autoLockBox",sizes:[K("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),K("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:fn,finishes:$e},{id:"box-snap",cat:"boxes",name:"Snap-lock bottom box",nl:"Vouwdoos met snapbodem",fr:"\xC9tui \xE0 fond 1-2-3",use:"Four flaps folded in order, the 1-2-3 bottom.",tpl:"snapBox",sizes:[K("m","100 \xD7 70 \xD7 150 mm",{L:100,W:70,H:150}),K("l","150 \xD7 100 \xD7 200 mm",{L:150,W:100,H:200})],stocks:fn,finishes:$e},{id:"box-hang",cat:"boxes",name:"Hang tab box",nl:"Doos met ophangoog",fr:"\xC9tui avec eurotrou",use:"Retail box with a euro slot.",tpl:"tuckBox",sizes:[K("s","80 \xD7 30 \xD7 120 mm",{L:80,W:30,H:120,hang:!0}),K("m","110 \xD7 40 \xD7 150 mm",{L:110,W:40,H:150,hang:!0})],stocks:fn,finishes:$e},{id:"box-wine",cat:"boxes",name:"Wine box",nl:"Wijndoos",fr:"Bo\xEEte \xE0 vin",use:"Tall carton for one bottle.",tpl:"autoLockBox",sizes:[K("b1","1 bottle, 90 \xD7 90 \xD7 340 mm",{L:90,W:90,H:340})],stocks:fn,finishes:$e},{id:"box-mailer",cat:"boxes",name:"Mailer box",nl:"Verzenddoos",fr:"Bo\xEEte postale",use:"FEFCO 0427 family, double walls, no tape.",tpl:"mailerBox",sizes:[K("s","200 \xD7 140 \xD7 50 mm",{L:200,W:140,H:50}),K("m","300 \xD7 220 \xD7 80 mm",{L:300,W:220,H:80}),K("a4","A4 305 \xD7 215 \xD7 40 mm",{L:305,W:215,H:40}),K("xs","160 \xD7 120 \xD7 40 mm",{L:160,W:120,H:40})],stocks:Rl,finishes:["none"]},{id:"box-shipping",cat:"boxes",name:"Shipping carton",nl:"Amerikaanse vouwdoos",fr:"Caisse am\xE9ricaine",use:"FEFCO 0201, the standard slotted carton.",tpl:"shippingBox",sizes:[K("s","200 \xD7 200 \xD7 110 mm",{L:200,W:200,H:110,t:3}),K("m","305 \xD7 220 \xD7 250 mm",{L:305,W:220,H:250,t:3}),K("l","430 \xD7 305 \xD7 250 mm",{L:430,W:305,H:250,t:3})],stocks:["bflute-kraft","eflute-kraft"],finishes:["none"]},{id:"box-lid",cat:"boxes",name:"Lid and base box",nl:"Dekseldoos",fr:"Bo\xEEte \xE0 couvercle",use:"Two trays, FEFCO 03xx family, gift packaging.",tpl:"lidBox",sizes:[K("m","160 \xD7 120 \xD7 60 mm",{L:160,W:120,H:60}),K("sq","150 \xD7 150 \xD7 80 mm",{L:150,W:150,H:80}),K("l","240 \xD7 180 \xD7 80 mm",{L:240,W:180,H:80})],stocks:fn,finishes:$e},{id:"box-drawer",cat:"boxes",name:"Drawer box",nl:"Schuifdoos",fr:"Bo\xEEte tiroir",use:"A tray that slides out of a sleeve.",tpl:"drawerBox",sizes:[K("m","120 \xD7 80 \xD7 30 mm",{L:120,W:80,H:30}),K("l","180 \xD7 120 \xD7 50 mm",{L:180,W:120,H:50})],stocks:fn,finishes:$e},{id:"box-sleeve",cat:"boxes",name:"Packaging sleeve",nl:"Sleeve",fr:"Fourreau",use:"Printed band around a plain box.",tpl:"sleeve",sizes:[K("m","120 \xD7 70 \xD7 30 mm",{L:120,W:70,H:30,inner:160,innerColor:"#c9b08a"}),K("l","200 \xD7 90 \xD7 50 mm",{L:200,W:90,H:50,inner:220,innerColor:"#c9b08a"})],stocks:fn,finishes:$e},{id:"box-gable",cat:"boxes",name:"Gable box",nl:"Gable box",fr:"Bo\xEEte \xE0 anse",use:"Built-in carry handle.",tpl:"gableBox",sizes:[K("m","140 \xD7 70 \xD7 120 mm",{L:140,W:70,H:120}),K("s","100 \xD7 60 \xD7 90 mm",{L:100,W:60,H:90})],stocks:fn,finishes:$e},{id:"box-pillow",cat:"boxes",name:"Pillow box",nl:"Pillow box",fr:"Bo\xEEte berlingot",use:"Curved scores close the two ends.",tpl:"pillowBox",sizes:[K("m","120 \xD7 80 \xD7 34 mm",{L:120,W:80,H:34}),K("s","90 \xD7 60 \xD7 26 mm",{L:90,W:60,H:26})],stocks:fn,finishes:$e},{id:"box-tray",cat:"boxes",name:"Open tray",nl:"Tray",fr:"Barquette",use:"Lidless tray, also for shelf-ready packs.",tpl:"trayBox",sizes:[K("m","200 \xD7 140 \xD7 40 mm",{L:200,W:140,H:40}),K("s","120 \xD7 90 \xD7 30 mm",{L:120,W:90,H:30})],stocks:[...fn,...Rl],finishes:["none","matte"]},{id:"box-cake",cat:"boxes",name:"Cake box",nl:"Taartdoos",fr:"Bo\xEEte \xE0 p\xE2tisserie",use:"One piece with a hinged lid.",tpl:"cakeBox",sizes:[K("m","200 \xD7 200 \xD7 90 mm",{L:200,W:200,H:90}),K("l","260 \xD7 260 \xD7 100 mm",{L:260,W:260,H:100}),K("b","Pralines 150 \xD7 100 \xD7 40 mm",{L:150,W:100,H:40})],stocks:fn,finishes:["none","matte"]},{id:"box-pizza",cat:"boxes",name:"Pizza box",nl:"Pizzadoos",fr:"Bo\xEEte \xE0 pizza",use:"Flat hinged box in corrugated board.",tpl:"cakeBox",sizes:[K("33","330 \xD7 330 \xD7 40 mm",{L:330,W:330,H:40,t:1.5})],stocks:Rl,finishes:["none"]},{id:"counter-display",cat:"boxes",name:"Counter display",nl:"Toonbankdisplay",fr:"Pr\xE9sentoir de comptoir",use:"Tray with a printed header card.",tpl:"counterDisplay",sizes:[K("m","220 \xD7 160 mm, header 120 mm",{L:220,W:160,H:70,header:120})],stocks:Rl,finishes:["none"]},{id:"bag-carrier",cat:"bags",name:"Carrier bag",nl:"Papieren draagtas",fr:"Sac papier",use:"Rope handles, reinforced top hem.",tpl:"paperBag",sizes:[K("m","240 \xD7 100 \xD7 320 mm",{w:240,h:320,g:100}),K("s","180 \xD7 80 \xD7 240 mm",{w:180,h:240,g:80}),K("l","320 \xD7 120 \xD7 420 mm",{w:320,h:420,g:120})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"bag-bakery",cat:"bags",name:"Flat-bottom paper bag",nl:"Bakkerszak",fr:"Sac boulanger",use:"Square bottom, no handles.",tpl:"paperBag",sizes:[K("m","180 \xD7 80 \xD7 260 mm",{w:180,h:260,g:80,hem:0,handles:!1}),K("s","140 \xD7 60 \xD7 200 mm",{w:140,h:200,g:60,hem:0,handles:!1})],stocks:["kraftbag-120","bag-170"],finishes:["none"]},{id:"bag-wine",cat:"bags",name:"Wine bag",nl:"Wijntas",fr:"Sac \xE0 bouteille",use:"Narrow bag for one bottle.",tpl:"paperBag",sizes:[K("b1","100 \xD7 90 \xD7 360 mm",{w:100,h:360,g:90})],stocks:["bag-170","kraftbag-120"],finishes:["none","matte"]},{id:"fries-cone",cat:"bags",name:"Fries cone",nl:"Frietzak",fr:"Cornet de frites",use:"Rolled cone in its wire holder.",tpl:"friesCone",sizes:[K("m","Height 210 mm, \xD8 110 mm",{h:210,topD:110}),K("s","Height 170 mm, \xD8 90 mm",{h:170,topD:90})],stocks:["silk-250","kraft-300"],finishes:["none"]},{id:"paper-cup",cat:"bags",name:"Paper cup",nl:"Koffiebeker",fr:"Gobelet carton",use:"Printed wrap of a takeaway cup.",tpl:"coneWrap",sizes:[K("m","8 oz, \xD8 80 mm",{topD:80,bottomD:56,height:92}),K("l","12 oz, \xD8 90 mm",{topD:90,bottomD:60,height:110})],stocks:["silk-300","kraft-300"],finishes:["none"]},{id:"cup-sleeve",cat:"bags",name:"Cup sleeve",nl:"Bekerhuls",fr:"Manchon de gobelet",use:"Heat-protecting band around a plain cup.",tpl:"coneWrap",sizes:[K("l","For 12 oz cups",{topD:88,bottomD:72,height:55,kind:"sleeve"})],stocks:["kraft-300","silk-300"],finishes:["none"]},{id:"sticker-round",cat:"labels",name:"Round sticker",nl:"Ronde sticker",fr:"Autocollant rond",use:"Single die-cut stickers.",tpl:"sheet",sizes:[pe("d50","\xD8 50 mm",50,50,{shape:"circle",bleed:2}),pe("d80","\xD8 80 mm",80,80,{shape:"circle",bleed:2}),pe("d30","\xD8 30 mm",30,30,{shape:"circle",bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-rect",cat:"labels",name:"Rectangular sticker",nl:"Rechthoekige sticker",fr:"Autocollant rectangulaire",use:"Rounded corners, for packaging and seals.",tpl:"sheet",sizes:[pe("m","100 \xD7 50 mm",100,50,{r:3,bleed:2}),pe("s","60 \xD7 40 mm",60,40,{r:2,bleed:2}),pe("a6","A6 148 \xD7 105 mm",148,105,{r:3,bleed:2})],stocks:["label-90","vinyl-100"],finishes:["none","gloss","matte"]},{id:"sticker-sheet",cat:"labels",name:"Sticker sheet",nl:"Stickervel",fr:"Planche de stickers",use:"Kiss cut on one backing sheet.",tpl:"stickerSheet",sizes:[K("a4","A4, 12 \xD7 \xD8 60 mm",{w:210,h:297,cols:3,rows:4,d:60}),K("a5","A5, 6 \xD7 \xD8 40 mm",{w:148,h:210,cols:2,rows:3,d:54})],stocks:["label-90","vinyl-100"],finishes:["none","gloss"]},{id:"label-wine",cat:"labels",name:"Wine label",nl:"Wijnetiket",fr:"\xC9tiquette de vin",use:"Front label on a Bordeaux bottle.",tpl:"wrapLabel",sizes:[K("m","100 \xD7 120 mm",{w:100,h:120,container:"wine",y:40}),K("s","90 \xD7 100 mm",{w:90,h:100,container:"wine",y:50})],stocks:["label-90","offset-90"],finishes:["none"]},{id:"label-beer",cat:"labels",name:"Beer label",nl:"Bieretiket",fr:"\xC9tiquette de bi\xE8re",use:"33 cl bottle, a Belgian must-have.",tpl:"wrapLabel",sizes:[K("m","100 \xD7 90 mm",{w:100,h:90,container:"beer",y:18}),K("w","Wrap 188 \xD7 60 mm",{w:188,h:60,container:"beer",y:30})],stocks:["label-90"],finishes:["none","gloss"]},{id:"label-jar",cat:"labels",name:"Jar label",nl:"Potetiket",fr:"\xC9tiquette de bocal",use:"For food jars, jam, honey, sauces.",tpl:"wrapLabel",sizes:[K("m","120 \xD7 70 mm",{w:120,h:70,container:"jar",y:22}),K("o","Oval 90 \xD7 70 mm",{w:90,h:70,container:"jar",y:22,shape:"oval"})],stocks:["label-90","kraft-120"],finishes:["none"]},{id:"label-can",cat:"labels",name:"Can wrap",nl:"Blikwikkel",fr:"\xC9tiquette de canette",use:"Full wrap around a 33 cl can.",tpl:"wrapLabel",sizes:[K("33","33 cl, 206 \xD7 96 mm",{w:206,h:96,container:"can",y:10})],stocks:["label-90","vinyl-100"],finishes:["gloss","matte"]},{id:"mug-wrap",cat:"labels",name:"Mug print",nl:"Mok bedrukken",fr:"Mug personnalis\xE9",use:"All-round print on a ceramic mug.",tpl:"wrapLabel",sizes:[K("m","200 \xD7 90 mm",{w:200,h:90,container:"mug",y:3})],stocks:["vinyl-100"],finishes:["gloss"]},{id:"poster",cat:"display",name:"Poster",nl:"Affiche",fr:"Affiche",use:"A and B series, indoor paper.",tpl:"poster",sizes:[K("a3","A3 297 \xD7 420 mm",{w:297,h:420}),K("a2","A2 420 \xD7 594 mm",{w:420,h:594}),K("a1","A1 594 \xD7 841 mm",{w:594,h:841}),K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),K("b2","B2 500 \xD7 700 mm",{w:500,h:700}),K("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3})],stocks:["poster-135","silk-170","silk-250"],finishes:["none","matte"],def:"a2"},{id:"poster-blueback",cat:"display",name:"Blueback poster",nl:"Blueback affiche",fr:"Affiche dos bleu",use:"Opaque back for street and billboard pasting.",tpl:"poster",sizes:[K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189}),K("b1","B1 700 \xD7 1000 mm",{w:700,h:1e3}),K("abri","Abribus 1185 \xD7 1750 mm",{w:1185,h:1750})],stocks:["blueback-115"],finishes:["none"]},{id:"rollup",cat:"display",name:"Roll-up banner",nl:"Roll-up banner",fr:"Roll-up",use:"Graphic pulls out of an aluminium cassette.",tpl:"rollup",sizes:[K("85","850 \xD7 2000 mm",{w:850,h:2e3}),K("100","1000 \xD7 2000 mm",{w:1e3,h:2e3}),K("120","1200 \xD7 2000 mm",{w:1200,h:2e3})],stocks:["pet-510"],finishes:["none"]},{id:"a-board",cat:"display",name:"A-board",nl:"Stoepbord",fr:"Stop-trottoir",use:"Two-sided pavement sign with a clip frame.",tpl:"aBoard",sizes:[K("a1","A1 594 \xD7 841 mm",{w:594,h:841}),K("a0","A0 841 \xD7 1189 mm",{w:841,h:1189})],stocks:["poster-135"],finishes:["none"]},{id:"sign-rigid",cat:"display",name:"Rigid sign",nl:"Forex bord",fr:"Panneau PVC",use:"Direct print on 5 mm foam PVC.",tpl:"poster",sizes:[K("a2","A2 420 \xD7 594 mm",{w:420,h:594,name:"Sign"}),K("a1","A1 594 \xD7 841 mm",{w:594,h:841,name:"Sign"}),K("m","1000 \xD7 700 mm",{w:1e3,h:700,name:"Sign"})],stocks:["pvc-5","corplast-3"],finishes:["none"]},{id:"banner-pvc",cat:"display",name:"PVC banner",nl:"Spandoek",fr:"B\xE2che",use:"Outdoor banner with eyelets every 50 cm.",tpl:"poster",sizes:[K("2x1","2000 \xD7 1000 mm",{w:2e3,h:1e3,eyelets:500,name:"Banner"}),K("3x1","3000 \xD7 1000 mm",{w:3e3,h:1e3,eyelets:500,name:"Banner"})],stocks:["pvc-banner"],finishes:["none"]},{id:"wobbler",cat:"display",name:"Shelf wobbler",nl:"Wobbler",fr:"Stop-rayon",use:"Small round card on a flexible strip.",tpl:"sheet",sizes:[pe("d90","\xD8 90 mm",90,90,{shape:"circle"})],stocks:["silk-300","silk-350"],finishes:$e}],Cl=Object.fromEntries($s.map(i=>[i.id,i])),_f=()=>({formats:$s.length,sizes:$s.reduce((i,e)=>i+e.sizes.length,0)});var ss={"offset-90":{name:"Uncoated 90 g",gsm:90,mm:.11,color:"#f7f6f1",rough:.92,kind:"paper"},"offset-120":{name:"Uncoated 120 g",gsm:120,mm:.15,color:"#f7f6f1",rough:.92,kind:"paper"},"silk-135":{name:"Silk 135 g",gsm:135,mm:.11,color:"#f9f8f4",rough:.55,kind:"paper"},"silk-170":{name:"Silk 170 g",gsm:170,mm:.14,color:"#f9f8f4",rough:.55,kind:"paper"},"gloss-170":{name:"Gloss 170 g",gsm:170,mm:.13,color:"#fbfaf7",rough:.3,kind:"paper"},"silk-250":{name:"Silk 250 g",gsm:250,mm:.22,color:"#f9f8f4",rough:.55,kind:"card"},"silk-300":{name:"Silk 300 g",gsm:300,mm:.27,color:"#f9f8f4",rough:.55,kind:"card"},"silk-350":{name:"Silk 350 g",gsm:350,mm:.33,color:"#f9f8f4",rough:.55,kind:"card"},"gloss-300":{name:"Gloss 300 g",gsm:300,mm:.26,color:"#fbfaf7",rough:.3,kind:"card"},"pastel-board-700":{name:"Designer board 700 g \xB7 warm pastel",gsm:700,mm:.9,color:"#f2e2d5",rough:.95,kind:"card",multiply:!0,felt:!0,core:"#e2b3a2",inside:"#f2e2d5"},"cotton-450":{name:"Cotton 450 g",gsm:450,mm:.6,color:"#f6f2e9",rough:.96,kind:"card"},"kraft-300":{name:"Kraft 300 g",gsm:300,mm:.36,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"black-300":{name:"Black card 300 g",gsm:300,mm:.34,color:"#17171a",rough:.72,kind:"card",dark:!0},"env-90":{name:"Envelope 90 g",gsm:90,mm:.12,color:"#f6f5f0",rough:.9,kind:"paper"},"env-120":{name:"Envelope 120 g",gsm:120,mm:.16,color:"#f4f2ea",rough:.9,kind:"paper"},"kraft-120":{name:"Kraft 120 g",gsm:120,mm:.17,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"gc1-350":{name:"GC1 carton 350 g",gsm:350,mm:.45,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"gc1-400":{name:"GC1 carton 400 g",gsm:400,mm:.52,color:"#f4f3ee",rough:.6,kind:"board",inside:"#ece9df"},"kraftboard-400":{name:"Kraft carton 400 g",gsm:400,mm:.55,color:"#b08a60",rough:.88,kind:"kraft",multiply:!0},"eflute-white":{name:"E-flute white",gsm:0,mm:1.5,color:"#f2f0ea",rough:.78,kind:"corrugated",inside:"#efe7d6",flute:3.2,core:"#d9c6a4"},"eflute-kraft":{name:"E-flute kraft",gsm:0,mm:1.5,color:"#b58f63",rough:.86,kind:"corrugated",multiply:!0,flute:3.2,core:"#c9a97c"},"bflute-kraft":{name:"B-flute kraft",gsm:0,mm:3,color:"#b58f63",rough:.88,kind:"corrugated",multiply:!0,flute:6.5,core:"#c9a97c"},"bag-170":{name:"Bag paper 170 g",gsm:170,mm:.2,color:"#f6f5f0",rough:.7,kind:"paper"},"kraftbag-120":{name:"Kraft bag 120 g",gsm:120,mm:.18,color:"#b7936a",rough:.9,kind:"kraft",multiply:!0},"label-90":{name:"Label paper",gsm:90,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"vinyl-100":{name:"White vinyl",gsm:0,mm:.1,color:"#fbfbfb",rough:.34,kind:"paper"},"beermat-1000":{name:"Beer mat board",gsm:1e3,mm:1.5,color:"#f5f2e8",rough:.9,kind:"board"},"poster-135":{name:"Poster 135 g",gsm:135,mm:.12,color:"#f9f8f4",rough:.5,kind:"paper"},"blueback-115":{name:"Blueback 115 g",gsm:115,mm:.13,color:"#f6f6f2",rough:.72,kind:"paper",inside:"#5c7fa8"},"pet-510":{name:"Roll-up film 510 \xB5m",gsm:0,mm:.51,color:"#f4f4f2",rough:.45,kind:"board"},"pvc-5":{name:"Forex 5 mm",gsm:0,mm:5,color:"#f8f8f6",rough:.45,kind:"board"},"pvc-banner":{name:"PVC banner 510 g",gsm:510,mm:.5,color:"#f5f5f3",rough:.55,kind:"board"},"corplast-3":{name:"Corrugated plastic 3 mm",gsm:0,mm:3,color:"#f2f2ef",rough:.5,kind:"board"}},Zs={none:{name:"No lamination",rough:null,clearcoat:0},matte:{name:"Matte lamination",rough:.62,clearcoat:0},gloss:{name:"Gloss lamination",rough:.22,clearcoat:.6},soft:{name:"Soft-touch",rough:.78,clearcoat:0,sheen:.5}};var hi=(i,e)=>[i[0]-e[0],i[1]-e[1]],rs=(i,e)=>[i[0]+e[0],i[1]+e[1]],Js=(i,e)=>[i[0]*e,i[1]*e],Il=(i,e)=>i[0]*e[0]+i[1]*e[1];var Rh=i=>Math.hypot(i[0],i[1]),ua=i=>{let e=Rh(i)||1;return[i[0]/e,i[1]/e]};function xf(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2}function vf(i){let e=0,t=0,n=0;for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],o=r[0]*a[1]-a[0]*r[1];n+=o,e+=(r[0]+a[0])*o,t+=(r[1]+a[1])*o}return Math.abs(n)<1e-6?[i[0][0],i[0][1]]:[e/(3*n),t/(3*n)]}function Ch(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i)for(let a of r)a[0]<e&&(e=a[0]),a[1]<t&&(t=a[1]),a[0]>n&&(n=a[0]),a[1]>s&&(s=a[1]);return{x0:e,y0:t,x1:n,y1:s,w:n-e,h:s-t}}var ui=(i,e,t,n)=>[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];function qn(i,e,t,n=64){let s=[];for(let r=0;r<n;r++){let a=r/n*Math.PI*2;s.push([i+Math.cos(a)*t,e+Math.sin(a)*t])}return s}function Pl(i,e,t,n,s=72){let r=[];for(let a=0;a<s;a++){let o=a/s*Math.PI*2;r.push([i+Math.cos(o)*t,e+Math.sin(o)*n])}return r}function Ui(i,e,t=7){let n=i.length,s=[];for(let r=0;r<n;r++){let a=i[r],o=Array.isArray(e)?e[r]||0:e;if(!o){s.push(a);continue}let l=i[(r-1+n)%n],c=i[(r+1)%n],h=ua(hi(l,a)),u=ua(hi(c,a)),d=Math.max(-1,Math.min(1,Il(h,u))),f=Math.acos(d);if(f<.02||f>Math.PI-.02){s.push(a);continue}let m=Math.min(Rh(hi(l,a)),Rh(hi(c,a)))*.499,_=o/Math.tan(f/2),p=o;_>m&&(_=m,p=_*Math.tan(f/2));let g=rs(a,Js(h,_)),v=rs(a,Js(u,_)),M=ua(rs(h,u)),y=rs(a,Js(M,p/Math.sin(f/2))),T=Math.atan2(g[1]-y[1],g[0]-y[0]),b=Math.atan2(v[1]-y[1],v[0]-y[0]),x=b-T;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;b=T+x;for(let w=0;w<=t;w++){let I=w/t,R=T+(b-T)*I;s.push([y[0]+Math.cos(R)*p,y[1]+Math.sin(R)*p])}}return s}function yf(i,e=1e-4){let t=[];for(let n of i){let s=t[t.length-1];(!s||Math.hypot(n[0]-s[0],n[1]-s[1])>e)&&t.push(n)}for(;t.length>2&&Math.hypot(t[0][0]-t[t.length-1][0],t[0][1]-t[t.length-1][1])<=e;)t.pop();return t}var vt=i=>{let e=Math.round(i*10)/10;return Number.isInteger(e)?String(e):e.toFixed(1)},Ks=(i,e)=>`${vt(i)} \xD7 ${vt(e)}`;var bf={type:"change"},Ph={type:"start"},Sf={type:"end"},Ll=new Si,Mf=new ln,vv=Math.cos(70*ns.DEG2RAD),Lt=new C,rn=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ih=1e-6,Dl=class extends $r{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ut,this._lastTargetPosition=new C,this._quat=new ut().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pi,this._sphericalDelta=new Pi,this._scale=1,this._panOffset=new C,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new C,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bv.bind(this),this._onPointerDown=yv.bind(this),this._onPointerUp=Mv.bind(this),this._onContextMenu=Cv.bind(this),this._onMouseWheel=Ev.bind(this),this._onKeyDown=Tv.bind(this),this._onTouchStart=Av.bind(this),this._onTouchMove=Rv.bind(this),this._onMouseDown=Sv.bind(this),this._onMouseMove=wv.bind(this),this._interceptControlDown=Iv.bind(this),this._interceptControlUp=Pv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=it.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bf),this.update(),this.state=it.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<vv?this.object.lookAt(this.target):(Mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Mf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ih||this._lastTargetPosition.distanceToSquared(this.target)>Ih?(this.dispatchEvent(bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Mv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=it.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ph)}function wv(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ev(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(Ph),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sf))}function Tv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Av(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1){this.state=it.NONE;break}this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1){this.state=it.NONE;break}this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ph)}function Rv(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function Cv(i){this.enabled!==!1&&i.preventDefault()}function Iv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nl=class extends $i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new tn;e.deleteAttribute("uv");let t=new Qe({side:Ct}),n=new Qe,s=new Wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Yi(e,n,6),o=new Et;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ae(e,js(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ae(e,js(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ae(e,js(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ae(e,js(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ae(e,js(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ae(e,js(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function js(i){return new Or({color:0,emissive:16777215,emissiveIntensity:i})}var Ot=Math.PI/180,wf=22,Lv=5,ki=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Fn=i=>Math.min(1,Math.max(0,i)),da=new ut().setFromAxisAngle(new C(1,0,0),-90*Ot),Lh=new ut().setFromAxisAngle(new C(0,1,0),180*Ot);function Ef(i,e=0){let t=new ut;if(i&&i.up){let n=new C(...i.up).normalize(),s=new C(...i.face);s.addScaledVector(n,-s.dot(n)).normalize();let r=new C().crossVectors(n,s).normalize(),a=new Oe().makeBasis(r,n,s);t.setFromRotationMatrix(a).invert()}else if(Array.isArray(i))t.setFromEuler(new en(i[0]*Ot,i[1]*Ot,i[2]*Ot,"YXZ"));else switch(i){case"keep":t.copy(da);break;case"flip":t.copy(da).multiply(Lh);break;case"stand":case"stand-outside":t.identity();break;case"stand-inside":t.copy(Lh);break;default:t.copy(da)}return e&&t.premultiply(new ut().setFromAxisAngle(new C(0,1,0),e*Ot)),t}var Fl=class{constructor(e,t={}){this.host=e,this.opts=t;let n=new Sl({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!t.capture});this.renderer=n,n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxDpr||2)),n.outputColorSpace=yt,n.toneMapping=Zr,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Do,e.appendChild(n.domElement),n.domElement.style.display="block",n.domElement.style.touchAction="none";let s=new $i;this.scene=s,this.bg=new Be(t.background??"#060606"),s.background=this.bg;let r=new qs(n);this.envRT=r.fromScene(new Nl,.04),s.environment=this.envRT.texture,s.environmentIntensity=.42,r.dispose();let a=new ks("#ffffff",2.1);a.position.set(-3.4,8.5,4.6),a.castShadow=!0,a.shadow.mapSize.set(t.shadowSize||2048,t.shadowSize||2048);let o=a.shadow.camera;o.left=-6,o.right=6,o.top=6,o.bottom=-6,o.near=.5,o.far=30,a.shadow.bias=-12e-5,a.shadow.normalBias=.012,a.shadow.radius=7,s.add(a),this.key=a;let l=new ks("#9db8ff",.5);l.position.set(5,3.5,-5),s.add(l);let c=document.createElement("canvas");c.width=c.height=512;let h=c.getContext("2d"),u=h.createRadialGradient(256,256,8,256,256,256);u.addColorStop(0,"rgba(36,37,42,1)"),u.addColorStop(.5,"rgba(20,21,24,0.85)"),u.addColorStop(1,"rgba(6,6,6,0)"),h.fillStyle=u,h.fillRect(0,0,512,512);let d=new hn(c);d.colorSpace=yt,this.pool=new Ae(new zn(11,64),new wi({map:d,transparent:!0,depthWrite:!1,toneMapped:!1})),this.pool.rotation.x=-Math.PI/2,this.pool.position.y=-.012,this.pool.renderOrder=-2,s.add(this.pool),this.shadowCatcher=new Ae(new zn(16,48),new kr({opacity:.62})),this.shadowCatcher.rotation.x=-Math.PI/2,this.shadowCatcher.position.y=-.008,this.shadowCatcher.receiveShadow=!0,this.shadowCatcher.renderOrder=-1,s.add(this.shadowCatcher),this.camera=new $t(wf,1,.1,400),this.controls=new Dl(this.camera,n.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,screenSpacePanning:!0,zoomToCursor:!0,rotateSpeed:.8,maxPolarAngle:.57*Math.PI}),this.controls.addEventListener("change",()=>this.invalidate()),this.controls.addEventListener("start",()=>{this.userMoved=!0,this.stopSpin()}),this.rig=new nt,this.rig.matrixAutoUpdate=!1,s.add(this.rig),this.state="flat",this.needs=!0,this.ray=new Xr,this._raf=0,this._tick=this._tick.bind(this),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),this._tick()}invalidate(){this.needs=!0}resize(){let e=this.host.clientWidth||800,t=this.host.clientHeight||600;e===this.w&&t===this.h||(this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width=`${e}px`,this.renderer.domElement.style.height=`${t}px`,this.camera.aspect=e/t,this._viewOffset(),this.camera.updateProjectionMatrix(),this.model&&!this.tween&&!this.userMoved&&this.state!=="custom"&&this._frame(this.state),this.invalidate())}setSafe(e,t){this.safe={top:e,bottom:t},this._viewOffset(),this.camera.updateProjectionMatrix(),this.cache={}}_viewOffset(){let e=this.safe;!e||!this.w||this.camera.setViewOffset(this.w,this.h,0,(e.bottom-e.top)/2,this.w,this.h)}setModel(e,{die:t,state:n="closed",instant:s=!0}={}){this.clearSticker(),this.model&&(this.rig.remove(this.model.object),this.model.dispose?.()),this.tween=null,this.scrubWin=null,this.model=e,this.die=t,this.rig.add(e.object),this.scaleK=Lv/Math.max(t.w,t.h,1),t.meta.unitBoost&&(this.scaleK*=t.meta.unitBoost),this.userMoved=!1,this.cache={},this.go(n,{instant:s})}_info(e){if(this.cache[e])return this.cache[e];let{die:t,model:n}=this,s=n.vector(e),r;e==="flat"?r=da.clone():e==="inside"?r=da.clone().multiply(Lh):e==="open"?r=Ef(t.pose.open,t.pose.openYaw||0):r=Ef(t.pose.fold,t.pose.closedYaw||0),e==="closed"&&t.pose.tilt&&r.premultiply(new ut().setFromAxisAngle(new C(1,0,0),t.pose.tilt*Ot));let a=n.bounds(s),o=a.getCenter(new C),l=this.scaleK,c=[];for(let m of[a.min.x,a.max.x])for(let _ of[a.min.y,a.max.y])for(let p of[a.min.z,a.max.z])c.push(new C(m,_,p).sub(o).multiplyScalar(l).applyQuaternion(r));let h=1/0;for(let m of c)h=Math.min(h,m.y);let u=-h,d=t.view&&t.view[e]||(e==="flat"||e==="inside"?{az:0,el:89.9}:{az:-32,el:30}),f={vec:s,q:r,c:o,lift:u,corners:c,view:{...d},s:l};return f.cam=this._fit(f),this.cache[e]=f,f}_fit(e){let t=e.view.az*Ot,n=e.view.el*Ot,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)).normalize(),r=new C(0,e.lift,0),a=Math.abs(s.y)>.999?new C(0,0,-1):new C(0,1,0),o=new C().crossVectors(a,s).normalize(),l=new C().crossVectors(s,o).normalize(),c=1/0,h=-1/0,u=1/0,d=-1/0;for(let y of e.corners){let T=y.dot(l),b=y.dot(o);c=Math.min(c,T),h=Math.max(h,T),u=Math.min(u,b),d=Math.max(d,b)}r.add(l.clone().multiplyScalar((c+h)/2)).add(o.clone().multiplyScalar((u+d)/2));let f=this.camera.aspect||1.4,m=wf*Ot/2,_=Math.atan(Math.tan(m)*f),p=this.safe||{top:0,bottom:0},g=Math.max(.3,1-(p.top+p.bottom)/(this.h||600)),v=e.view.pad||(this.opts.pad??1.16),M=0;for(let y of e.corners){let T=y.clone().sub(r.clone().setY(r.y-e.lift)),b=T.dot(s);M=Math.max(M,Math.abs(T.dot(o))*v/Math.tan(_)+b),M=Math.max(M,Math.abs(T.dot(l))*v/g/Math.tan(m)+b)}return M*=e.view.zoom||1,{az:e.view.az,el:e.view.el,d:M,target:r}}_placeCam(e){let t=e.az*Ot,n=e.el*Ot,s=new C(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n));this.camera.position.copy(e.target).addScaledVector(s,e.d),this.camera.near=Math.max(.02,e.d/60),this.camera.far=e.d*8+40,this.camera.updateProjectionMatrix(),this.controls.target.copy(e.target),this.camera.lookAt(e.target)}_setRig(e,t,n){let s=this.scaleK,r=new Oe;r.compose(new C(0,n,0),e,new C(s,s,s)),r.multiply(new Oe().makeTranslation(-t.x,-t.y,-t.z)),this.rig.matrix.copy(r),this.rig.matrixWorldNeedsUpdate=!0}_frame(e){this.cache={};let t=this._info(e);this._placeCam(t.cam),this.invalidate()}_currentCam(){let e=new Pi().setFromVector3(this.camera.position.clone().sub(this.controls.target));return{az:(e.theta/Ot+360)%360>180?(e.theta/Ot+360)%360-360:(e.theta/Ot+360)%360,el:90-e.phi/Ot,d:e.radius,target:this.controls.target.clone()}}async loadSticker(e){let t=await new zr().loadAsync(e.src);t.colorSpace=yt,t.anisotropy=8,this.setSticker({...e,texture:t})}setSticker(e){this.clearSticker();let t=this.model?.byId?.[e.panel];if(!t)return;let n=e.d/2,s=e.t??.14,r=new Ae(new zn(n,96),new jt({map:e.texture,roughness:.42,metalness:0,clearcoat:.45,clearcoatRoughness:.32,transparent:!0}));r.position.z=s;let a=new Ae(new ri(n,n,s,96,1,!0),new Qe({color:e.edge||"#9a7a76",roughness:.55,transparent:!0}));a.rotation.x=Math.PI/2,a.position.z=s/2;for(let c of[r,a])c.castShadow=!0,c.receiveShadow=!0;let o=new nt;o.add(r,a);let l=new nt;l.position.set(e.x,-e.y,e.z0??.08),l.add(o),t.group.add(l),this.sticker={base:l,lift:o,mats:[r.material,a.material],t:0,H:e.height||80,anim:null},this.sticker.t=this.state==="closed"&&!this.tween?1:0,this._stickerApply()}clearSticker(){let e=this.sticker;e&&(e.base.parent?.remove(e.base),e.base.traverse(t=>{t.geometry?.dispose(),t.material&&(t.material.map?.dispose(),t.material.dispose())}),this.sticker=null)}_stickerApply(){let e=this.sticker;if(!e)return;let t=Fn(e.t),n=1-(1-t)**3;e.lift.visible=t>.002,e.lift.position.z=e.H*(1-n);let s=t>.86?Math.sin(Math.PI*Fn((t-.86)/.14)):0;e.lift.scale.set(1+s*.035,1+s*.035,1-s*.3);let r=Fn(t*2.4);for(let a of e.mats)a.opacity=r,a.transparent=r<.999,a.depthWrite=r>.5;this.invalidate()}_stickerTo(e,t,n){let s=this.sticker;if(!s){n?.();return}if(Math.abs(s.t-e)<.001&&!s.anim){n?.();return}s.anim={from:s.t,to:e,t0:performance.now(),dur:t*1e3*Math.max(.25,Math.abs(e-s.t)),done:n},this.invalidate()}_stickerStep(e){let t=this.sticker,n=t?.anim;if(!n)return;let s=Fn((e-n.t0)/n.dur);t.t=n.from+(n.to-n.from)*s,this._stickerApply(),s>=1&&(t.anim=null,n.done?.())}go(e,t={}){let n=this.sticker;if(n&&t.instant)return n.anim=null,n.t=e==="closed"?1:0,this._stickerApply(),this._go(e,t);if(n&&this.current&&e!=="closed"&&(n.t>.001||n.anim)){if(this._pendingGo=[e,t],n.anim&&n.anim.to===0){n.anim.done=()=>this._flushGo();return}this._stickerTo(0,.6,()=>this._flushGo());return}if(n&&e==="closed"&&this.state==="closed"&&!this.tween){this._go(e,t),this._stickerTo(1,.85);return}return this._go(e,t)}_flushGo(){let e=this._pendingGo;this._pendingGo=null,e&&this._go(e[0],e[1])}_go(e,{instant:t=!1,duration:n}={}){let s=this._info(e);if(t||!this.current){this.tween=null,this.state=e,this.model.apply(s.vec),this.current={vec:s.vec,q:s.q.clone(),c:s.c.clone(),lift:s.lift},this._setRig(s.q,s.c,s.lift),this._placeCam(s.cam),this.userMoved=!1,this.invalidate(),this.onState?.(e);return}let r=this.current,a={flat:0,inside:0,closed:2,open:1},o=v=>v==="closed"?2:v==="open"?1:0,l=o(e)>=o(this.state)?1:-1;a[e]===void 0&&(l=1);let c=this.model.windows(r.vec,s.vec,l),u=r.q.angleTo(s.q)>60*Ot,d=c.steps>0&&r.vec.some((v,M)=>Math.abs(v-s.vec[M])>.01),f=d?Math.min(4.2,.95+c.steps*.5):1.1,m=n??f+(u&&d?.45:0),_=[0,1],p=[0,1];u&&d&&(l>0?(_=[0,.26],p=[.2,1]):(_=[.74,1],p=[0,.8])),this.tween={t0:performance.now(),dur:m*1e3,from:r,to:s,win:c,poseWin:_,foldWin:p,cam0:this._currentCam(),cam1:s.cam,state:e,flip:u};let g=this.tween.cam1.az-this.tween.cam0.az;for(;g>180;)g-=360;for(;g<-180;)g+=360;this.tween.azDelta=g,this.state=e,this.userMoved=!1,this.controls.enabled=!1,this.onStart?.(e),this.invalidate()}scrub(e){if(!this.model)return;let t=this._info("flat"),n=this._info("closed");this.scrubWin||(this.scrubWin=this.model.windows(t.vec,n.vec,1)),this.tween=null,this.controls.enabled=!0;let s=t.q.angleTo(n.q)>60*Ot,r=s?Fn(e/.26):e,a=s?Fn((e-.2)/.8):e,o=t.vec.map((c,h)=>{let[u,d]=this.scrubWin.list[h];return c+(n.vec[h]-c)*ki(Fn((a-u)/(d-u)))});this._applyMix(t,n,o,ki(r),ki(a),s);let l=this._mixCam(t.cam,n.cam,ki(e));this._placeCam(l),this.state=e<=.001?"flat":e>=.999?"closed":"custom",this.sticker&&this._stickerTo(e>=.999?1:0,e>=.999?.85:.4),this.invalidate()}_mixCam(e,t,n,s){let r=s;if(r===void 0){for(r=t.az-e.az;r>180;)r-=360;for(;r<-180;)r+=360}return{az:e.az+r*n,el:e.el+(t.el-e.el)*n,d:e.d+(t.d-e.d)*n,target:e.target.clone().lerp(t.target,n)}}_applyMix(e,t,n,s,r,a){this.model.apply(n);let o=e.q.clone().slerp(t.q,s),l=e.c.clone().lerp(t.c,r),c=e.lift+(t.lift-e.lift)*r;a&&(c+=Math.sin(Math.PI*s)*this.flipR(e,t)),this.current={vec:n,q:o,c:l,lift:c},this._setRig(o,l,c)}flipR(e,t){let n=0;for(let s of e.corners)n=Math.max(n,Math.hypot(s.x,s.z));for(let s of t.corners)n=Math.max(n,Math.hypot(s.x,s.z));return n*.72}_step(e){let t=this.tween;if(!t)return;let n=Fn((e-t.t0)/t.dur),s=Fn((n-t.foldWin[0])/(t.foldWin[1]-t.foldWin[0])),r=Fn((n-t.poseWin[0])/(t.poseWin[1]-t.poseWin[0])),a=t.from.vec.map((l,c)=>{let[h,u]=t.win.list[c];return l+(t.to.vec[c]-l)*ki(Fn((s-h)/(u-h)))}),o={q:t.from.q,c:t.from.c,lift:t.from.lift,corners:this._info(t.state).corners};this._applyMix(o,t.to,a,ki(r),ki(s),t.flip),this._placeCam(this._mixCam(t.cam0,t.cam1,ki(n),t.azDelta)),this.invalidate(),n>=1&&(this.tween=null,this.scrubWin=null,this.current={vec:t.to.vec,q:t.to.q.clone(),c:t.to.c.clone(),lift:t.to.lift},this.controls.enabled=!0,this.onState?.(t.state),t.state==="closed"&&this.sticker&&this._stickerTo(1,.85))}pick(e,t){if(!this.model?.pickables)return null;let n=this.renderer.domElement.getBoundingClientRect(),s=new he((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(s,this.camera);let r=this.ray.intersectObjects(this.model.pickables,!1)[0];if(!r)return null;let a=r.object.userData.side==="back"?1:r.face?.materialIndex??0;return{panel:r.object.userData.panel,side:a===1?"back":"front",point:r.point}}zoom(e){let t=this._currentCam();t.d*=e,this._placeCam(t),this.invalidate()}resetView(){this.userMoved=!1,this.go(this.state==="custom"?"closed":this.state,{duration:.8})}spin(e){this.spinOn=e,this.invalidate()}stopSpin(){this.spinOn&&(this.spinOn=!1,this.onSpinStop?.())}capture(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement}_tick(){if(this._raf=requestAnimationFrame(this._tick),document.hidden)return;let e=performance.now();if(this.sticker?.anim&&this._stickerStep(e),this.tween&&this._step(e),this.spinOn&&!this.tween){let t=this._currentCam();t.az+=.12,this._placeCam(t),this.needs=!0}this.controls.enabled&&this.controls.update(),this.needs&&(this.needs=!1,this.renderer.render(this.scene,this.camera),this.frames=(this.frames||0)+1)}dispose(){cancelAnimationFrame(this._raf),this.ro.disconnect(),this.controls.dispose(),this.model&&this.model.dispose?.(),this.renderer.dispose(),this.envRT.dispose(),this.renderer.domElement.remove()}};var Nh={};gi(Nh,{accordion:()=>Gv,crossFold:()=>Vv,doubleGate:()=>Bv,doubleParallel:()=>zv,gateFold:()=>Ov,halfFold:()=>Fv,mapFold:()=>Wv,roll4:()=>Hv,rollFold:()=>Uv,tableTalker:()=>Xv,tentCard:()=>qv,tentPose:()=>Dh,zFold:()=>kv});var Tf=.02;function Af(i,e){let t=ua(hi(e,i)),n=[t[1],-t[0]];return{d:t,n}}var Un=(i,e,t,n)=>rs(rs(i,Js(e.d,t)),Js(e.n,n)),Re=class{constructor(e={}){this.bleed=e.bleed??3,this.safe=e.safe??3,this.panels=[],this.byId={},this.lines=[],this.seams=[],this.holes=[],this.extras=[],this.pose={fold:"flip",closedYaw:0,open:"stand-inside",...e.pose||{}},this.view={closed:{az:-32,el:30},open:{az:-24,el:16},...e.view||{}},this.relax=e.relax??0,this.sides=e.sides??2,this.meta=e.meta||{}}_push(e){if(this.byId[e.id])throw new Error(`Duplicate panel id ${e.id}`);return e.poly=yf(e.poly),e.children=[],e.holes=e.holes||[],this.panels.push(e),this.byId[e.id]=e,e.parent&&this.byId[e.parent].children.push(e.id),e}rectEdges(e,t,n,s){return{top:{a:[e,t],b:[e+n,t]},right:{a:[e+n,t],b:[e+n,t+s]},bottom:{a:[e+n,t+s],b:[e,t+s]},left:{a:[e,t+s],b:[e,t]}}}root(e,t,n,s,r,a={}){let o=a.r?Ui([[t,n],[t+s,n],[t+s,n+r],[t,n+r]],a.r,a.segs??8):[[t,n],[t+s,n],[t+s,n+r],[t,n+r]];return this._push({id:e,name:a.name||e,nameIn:a.nameIn,role:a.role||"main",poly:o,edges:this.rectEdges(t,n,s,r),holes:a.holes,art:a.art,cover:a.cover})}rootPoly(e,t,n={}){return this._push({id:e,name:n.name||e,nameIn:n.nameIn,role:n.role||"main",poly:t,edges:n.edges||{},holes:n.holes,art:n.art,cover:n.cover})}add(e,t,n,s={}){let r=this.byId[e];if(!r)throw new Error(`Unknown parent ${e} for ${n}`);let a=typeof t=="string"?r.edges[t]:t;if(!a)throw new Error(`Unknown edge ${t} on ${e}`);let o=Af(a.a,a.b),l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]),c=s.inL??0,h=l-(s.inR??0),u,d=[c,h],f={};if(s.pts){u=s.pts;let p=u.filter(g=>Math.abs(g[1])<1e-6).map(g=>g[0]);if(s.hu?d=s.hu:p.length>=2&&(d=[Math.min(...p),Math.max(...p)]),s.edgesLocal)for(let[g,v]of Object.entries(s.edgesLocal))f[g]={a:Un(a.a,o,v[0][0],v[0][1]),b:Un(a.a,o,v[1][0],v[1][1])}}else{let p=s.d,g=s.tL??0,v=s.tR??0,M=s.w!==void 0?(s.w-(h-c))/2:0,y=[[c,0],[c+g-M,p],[h-v+M,p],[h,0]],T=Array.isArray(s.r)?s.r:[s.r||0,s.r||0];u=T[0]||T[1]?Ui(y,[0,T[0],T[1],0],s.segs??8):y,f.far={a:Un(a.a,o,c+g-M,p),b:Un(a.a,o,h-v+M,p)};let b={a:Un(a.a,o,c,0),b:Un(a.a,o,c+g-M,p)},x={a:Un(a.a,o,h-v+M,p),b:Un(a.a,o,h,0)};for(let w of[f.far,b,x]){let{n:I}=Af(w.a,w.b),R=Math.abs(I[0])>Math.abs(I[1])?I[0]>0?"right":"left":I[1]>0?"bottom":"top";f[R]=w}}let m=u.map(p=>Un(a.a,o,p[0],p[1])),_={a:Un(a.a,o,d[0],0),b:Un(a.a,o,d[1],0)};return this._push({id:n,name:s.name||n,nameIn:s.nameIn,role:s.role||"main",parent:e,poly:m,hinge:_,angle:s.angle??180,open:s.open,seq:s.seq??1,gap:s.gap??0,lift:s.lift??0,edges:f,holes:s.holes,art:s.art,cover:s.cover,bead:s.bead})}mount(e,t,n,s={}){return this._push({id:t,name:s.name||t,role:s.role||"main",parent:e,poly:n,edges:s.edges||{},mount:s.to,seq:s.seq??9,holes:s.holes,art:s.art,cover:s.cover,standalone:s.standalone,detached:s.detached??!0})}mountRect(e,t,n,s,r,a,o={}){let l=this.mount(e,t,[[n,s],[n+r,s],[n+r,s+a],[n,s+a]],o);return l.edges=this.rectEdges(n,s,r,a),l}leaf(e,t,n,s,r,a,o={}){let l=[[n,s],[n+r,s],[n+r,s+a],[n,s+a]];return this._push({id:t,name:o.name||t,nameIn:o.nameIn,role:"leaf",parent:e,poly:l,hinge:o.hinge,angle:o.angle??0,open:o.open,seq:o.seq??1,gap:0,edges:{},holes:o.holes,zOff:o.zOff||0,pivotZ:o.pivotZ,uvRect:o.coverLeaf?void 0:{x:n,y:s,w:r,h:a},coverLeaf:o.coverLeaf,pageFront:o.pageFront,pageBack:o.pageBack,bead:o.bead,valley:o.valley})}seam(e,t){return this.seams.push({a:e,b:t}),this}perf(e,t,n="perf"){return this.lines.push({kind:n,a:e,b:t}),this}extra(e){return this.extras.push(e),this}finish(){let e=Ch(this.panels.map(s=>s.poly)),t=[e.x0,e.y0],n=s=>[s[0]-t[0],s[1]-t[1]];for(let s of this.panels){s.mount&&(s.mount.pos&&(s.mount.pos=[s.mount.pos[0]-t[0],s.mount.pos[1]+t[1],s.mount.pos[2]||0]),s.mount.center&&(s.mount.center=[s.mount.center[0]-t[0],s.mount.center[1]+t[1],s.mount.center[2]||0])),s.uvRect&&(s.uvRect={...s.uvRect,x:s.uvRect.x-t[0],y:s.uvRect.y-t[1]}),s.poly=s.poly.map(n),s.holes=(s.holes||[]).map(r=>r.map(n)),s.hinge&&(s.hinge={a:n(s.hinge.a),b:n(s.hinge.b)});for(let r of Object.values(s.edges||{}))r.a=n(r.a),r.b=n(r.b);s.centroid=vf(s.poly),s.area=Math.abs(xf(s.poly)),s.bounds=Ch([s.poly])}return this.lines=this.lines.map(s=>({...s,a:n(s.a),b:n(s.b)})),this.seams=this.seams.map(s=>({a:n(s.a),b:n(s.b)})),this.extras=this.extras.map(s=>{let r={...s};return s.pts&&(r.pts=s.pts.map(n)),s.at&&(r.at=n(s.at)),s.a&&(r.a=n(s.a)),s.b&&(r.b=n(s.b)),s.rect&&(r.rect={...s.rect,x:s.rect.x-t[0],y:s.rect.y-t[1]}),r}),this.w=e.w,this.h=e.h,this.seqMax=Math.max(0,...this.panels.map(s=>s.seq||0)),this._lines(),this}_lines(){let e=this.panels.filter(l=>l.hinge&&l.role!=="leaf"&&!l.perfed).map(l=>({id:l.id,a:l.hinge.a,b:l.hinge.b,angle:l.angle})),t=[],n=new Set,s=(l,c)=>{let h=f=>`${Math.round(f[0]*50)},${Math.round(f[1]*50)}`,u=h(l),d=h(c);return u<d?`${u}|${d}`:`${d}|${u}`},r=null,a=(l,c)=>{if(Math.hypot(l[0]-c[0],l[1]-c[1])<.05)return;(r.outline=r.outline||[]).push([l,c]);let h=s(l,c);n.has(h)||(n.add(h),t.push([l,c]))},o=l=>{let c=[...this.seams];for(let h of e)(h.id===l.id||l.children.includes(h.id))&&c.push(h);return c};for(let l of this.panels){if(l.role==="leaf")continue;r=l;let c=o(l),h=l.poly;for(let u=0;u<h.length;u++){let d=h[u],f=h[(u+1)%h.length],m=[[0,1]],_=hi(f,d),p=Math.hypot(_[0],_[1]);if(p<1e-6)continue;let g=[_[0]/p,_[1]/p];for(let v of c){let M=hi(v.a,d),y=hi(v.b,d),T=I=>Math.abs(I[0]*g[1]-I[1]*g[0]);if(T(M)>Tf||T(y)>Tf)continue;let b=Il(M,g)/p,x=Il(y,g)/p;b>x&&([b,x]=[x,b]);let w=[];for(let[I,R]of m)x<=I||b>=R?w.push([I,R]):(b>I&&w.push([I,b]),x<R&&w.push([x,R]));m=w}for(let[v,M]of m)a([d[0]+_[0]*v,d[1]+_[1]*v],[d[0]+_[0]*M,d[1]+_[1]*M])}for(let u of l.holes||[])for(let d=0;d<u.length;d++)a(u[d],u[(d+1)%u.length])}this.cuts=t,this.creases=e.map(l=>({a:l.a,b:l.b,mountain:l.angle<0,id:l.id}));for(let l of this.seams)this.creases.push({a:l.a,b:l.b,mountain:!1,id:"seam"});for(let l of this.lines)l.kind==="score"&&this.creases.push({a:l.a,b:l.b,mountain:!1,id:"score"});this.perfs=this.lines.filter(l=>l.kind==="perf"),this.kiss=this.lines.filter(l=>l.kind==="kiss")}mainPanels(){return this.panels.filter(e=>e.role==="main").sort((e,t)=>t.area-e.area)}};var Mn=179.1,Sn=179.92,Dv={closed:{az:-26,el:36},open:{az:-10,el:13,pad:1.22}},Xn=(i={})=>({bleed:3,safe:4,pose:{fold:"flip",open:"stand-inside",...i.pose||{}},view:{...Dv,...i.view||{}},meta:i.meta});function Nv(i,e,t=2){let n=(i+t)/e;return{base:n,inner:n-t}}function Dh(i){let e=i*Math.PI/180,t=[0,-Math.cos(e),-Math.sin(e)],n=[0,1+t[1],t[2]],s=Math.hypot(n[1],n[2]),r=[0,-n[1]/s,-n[2]/s],a=[0,-Math.sin(e),Math.cos(e)];return{up:r,face:a}}function Fv({w:i,h:e,axis:t="v"}){let n=new Re(Xn({pose:t==="h"?{closedYaw:180,open:Dh(112)}:{open:"stand-inside",openYaw:-29},view:t==="h"?{open:{az:-26,el:14}}:{open:{az:0,el:14}}}));return t==="v"?(n.root("back",0,0,i/2,e,{name:"Back cover",nameIn:"Inside right"}),n.add("back","right","front",{d:i/2,angle:Mn,seq:1,open:58,name:"Front cover",nameIn:"Inside left",cover:!0})):(n.root("back",0,0,i,e/2,{name:"Back cover",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:Mn,seq:1,open:112,name:"Front cover",nameIn:"Inside bottom",cover:!0})),n.finish()}function Uv({w:i,h:e,panels:t}){let n=Nv(i,3,3),[s,r,a]=t||[n.inner,n.base,n.base],o=new Re(Xn({view:{closed:{az:-24,el:36}}}));return o.root("back",s,0,r,e,{name:"Back cover",nameIn:"Inside centre"}),o.add("back","left","flap",{d:s,angle:Sn,seq:1,open:58,name:"Inner flap",nameIn:"Inside right"}),o.add("back","right","front",{d:a,angle:Mn,seq:2,gap:1,open:62,name:"Front cover",nameIn:"Inside left",cover:!0}),o.finish()}function kv({w:i,h:e}){let t=i/3,n=new Re(Xn({pose:{fold:"keep",open:"stand-outside",openYaw:-12},view:{closed:{az:-24,el:36},open:{az:-18,el:14}}}));return n.root("back",0,0,t,e,{name:"Back",nameIn:"Inside right"}),n.add("back","right","mid",{d:t,angle:-Mn,seq:1,open:-66,name:"Middle",nameIn:"Inside centre"}),n.add("mid","far","front",{d:t,angle:Mn,seq:2,open:66,name:"Front cover",nameIn:"Inside left",cover:!0}),n.finish()}function Ov({w:i,h:e,gap:t=4}){let n=(i-t)/4,s=(i+t)/2,r=new Re(Xn({view:{closed:{az:-22,el:38}}}));r.root("back",n,0,s,e,{name:"Back cover",nameIn:"Inside centre"});let a=t<2?Sn:Mn+.8;return r.add("back","left","door-l",{d:n,angle:a,seq:1,open:48,name:"Door right",nameIn:"Inside right",cover:!0}),r.add("back","right","door-r",{d:n,angle:a,seq:2,open:48,name:"Door left",nameIn:"Inside left",cover:!0}),r.finish()}function Bv({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Re(Xn({view:{closed:{az:-24,el:36}}}));return s.root("cr",t+n,0,n,e,{name:"Back cover",nameIn:"Inside left-centre"}),s.add("cr","right","r",{d:t,angle:Sn,seq:1,open:60,name:"Inner flap",nameIn:"Inside left"}),s.add("cr","left","cl",{d:n,angle:Mn,seq:2,gap:2,open:22,name:"Front cover",nameIn:"Inside right-centre",cover:!0}),s.add("cl","far","l",{d:t,angle:Sn,seq:1,open:60,name:"Inner flap",nameIn:"Inside right"}),s.finish()}function zv({w:i,h:e}){let t=i/4-1,n=i/4+1,s=new Re(Xn({view:{closed:{az:-24,el:36}}}));return s.root("c",t+n,0,n,e,{name:"Panel 3",nameIn:"Inside 2"}),s.add("c","left","b",{d:n,angle:Sn,seq:1,open:74,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:t,angle:-Sn,seq:2,open:-70,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:t,angle:Mn,seq:2,gap:2,open:70,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Hv({w:i,h:e}){let t=(i-4-3)/4+0,n=[t,t+1.5,t+2.75,t+2.75],s=new Re(Xn({view:{closed:{az:-24,el:36}}}));return s.root("c",n[0]+n[1],0,n[2],e,{name:"Back cover",nameIn:"Inside 2"}),s.add("c","left","b",{d:n[1],angle:Sn,seq:2,gap:1,open:60,name:"Panel 2",nameIn:"Inside 3"}),s.add("b","far","a",{d:n[0],angle:Sn,seq:1,open:62,name:"Panel 1",nameIn:"Inside 4"}),s.add("c","right","d",{d:n[3],angle:Mn,seq:3,gap:2,open:58,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.finish()}function Gv({w:i,h:e,n:t}){let n=i/t,s=t%2===0,r=new Re(Xn({pose:{fold:s?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:36},open:{az:-20,el:14}}}));r.root("p0",0,0,n,e,{name:"Back",nameIn:`Inside ${t}`});let a=s?1:-1;for(let o=1;o<t;o++)r.add(o===1?"p0":`p${o-1}`,o===1?"right":"far",`p${o}`,{d:n,angle:a*(o===t-1?Mn:Sn),seq:t-o,open:a*64,name:o===t-1?"Front cover":`Panel ${o+1}`,nameIn:`Inside ${t-o}`,cover:o===t-1}),a=-a;return r.finish()}function Vv({w:i,h:e}){let t=i/2,n=e/2,s=new Re(Xn({pose:{open:"flip"},view:{closed:{az:-24,el:38},open:{az:-22,el:34}}}));return s.root("bl",0,n,t,n,{name:"Back cover",nameIn:"Inside 2"}),s.add("bl","top","tl",{d:n,angle:Sn,seq:1,name:"Inside top",nameIn:"Inside 3"}),s.add("bl","right","br",{d:t,angle:Mn,seq:2,gap:2,open:118,name:"Front cover",nameIn:"Inside 1",cover:!0}),s.add("tl","right","tr",{d:t,angle:-Sn,seq:2,open:-118,name:"Inside top right",nameIn:"Inside 4"}),s.seam([t,n],[i,n]),s.finish()}function Wv({w:i,h:e,cols:t=4}){let n=i/t,s=e/2,r=t%2===0,a=new Re(Xn({pose:{fold:r?"flip":"keep",open:"stand-outside",openYaw:-10},view:{closed:{az:-24,el:38},open:{az:-20,el:14}}}));a.root("r1c0",0,s,n,s,{name:"Back cover",nameIn:"Panel"}),a.add("r1c0","top","r0c0",{d:s,angle:Mn,seq:2,gap:t-1,name:"Panel",nameIn:"Panel"});for(let o of[1,0]){let l=r?1:-1;for(let c=1;c<t;c++){let h=c===1?"right":"far",u=o===1?l:-l;a.add(`r${o}c${c-1}`,h,`r${o}c${c}`,{d:n,angle:u*Sn,seq:1,open:u*62,name:o===1&&c===t-1?"Front cover":"Panel",nameIn:"Panel",cover:o===1&&c===t-1}),l=-l}}return a.seam([n,s],[i,s]),a.finish()}function qv({w:i,h:e}){let n=new Re({bleed:3,safe:3,pose:{fold:Dh(128)},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("back",0,0,i,e/2,{name:"Back (reads upside down)",nameIn:"Inside top"}),n.add("back","bottom","front",{d:e/2,angle:128,seq:1,name:"Front",nameIn:"Inside bottom",cover:!0}),n.finish()}function Xv({w:i,h:e,side:t}){let n=t??e*.45,s=n*.72,r=14,a=180-Math.acos(s/2/n)*180/Math.PI,o=180-2*(180-a),l=new Re({bleed:3,safe:3,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-30,el:16}},meta:{noOpen:!0,closedLabel:"Standing"}});return l.root("base",0,n,i,s,{name:"Base",nameIn:"Base"}),l.add("base","top","back",{d:n,angle:a,seq:1,name:"Back",nameIn:"Inside"}),l.add("base","bottom","front",{d:n,angle:a,seq:1,name:"Front",nameIn:"Inside",cover:!0}),l.add("front","far","glue",{d:r,inL:1,inR:1,tL:2,tR:2,angle:180-o,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),l.finish()}var Fh={};gi(Fh,{badge:()=>jv,doorHanger:()=>Zv,hangTag:()=>Yv,sheet:()=>$v,stickerSheet:()=>Kv,ticket:()=>Jv});var Qs={fold:"keep",open:"keep"},er={closed:{az:-30,el:34}},fa={noOpen:!0};function $v({w:i,h:e,r:t=0,holes:n=[],shape:s,bleed:r=3,safe:a=3,stack:o=6,name:l="Front",nameIn:c="Back"}){let h=new Re({bleed:r,safe:a,pose:Qs,view:er,meta:fa}),u=ui(0,0,i,e);if(s==="circle")u=qn(i/2,e/2,i/2,96);else if(s==="ellipse")u=Pl(i/2,e/2,i/2,e/2,96);else if(s==="arch"){let d=[];for(let f=0;f<=28;f++){let m=Math.PI+f/28*Math.PI;d.push([i/2+Math.cos(m)*(i/2),i/2+Math.sin(m)*(i/2)])}u=[...d,[i,e],[0,e]]}else t&&(u=Ui(u,t,8));return h.rootPoly("sheet",u,{name:l,nameIn:c,holes:n,cover:!0,edges:h.rectEdges(0,0,i,e)}),o&&h.extra({type:"stack",count:o,spread:Math.min(i,e)*.012}),h.finish()}function Yv({w:i,h:e,chamfer:t=9}){let n=t,s=[[n,0],[i-n,0],[i,n],[i,e],[0,e],[0,n]],r=new Re({bleed:3,safe:3,pose:Qs,view:er,meta:fa});return r.rootPoly("sheet",s,{name:"Front",nameIn:"Back",holes:[qn(i/2,9,2.5,28)],cover:!0}),r.extra({type:"string",at:[i/2,9],len:e*.9}),r.extra({type:"stack",count:3,spread:1.4}),r.finish()}function Zv({w:i,h:e}){let n=i/2,s=30,r=-.25,a=42,o=n+19*1.28,l=[[0,0],[o-1,0],[n+Math.cos(r)*19,s+Math.sin(r)*19]];for(let h=1;h<=a;h++){let u=r-h/a*(Math.PI*2-.5);l.push([n+Math.cos(u)*19,s+Math.sin(u)*19])}l.push([o+3,0],[i,0],[i,e],[0,e]);let c=new Re({bleed:3,safe:4,pose:Qs,view:er,meta:fa});return c.rootPoly("sheet",l,{name:"Front",nameIn:"Back",cover:!0}),c.extra({type:"stack",count:4,spread:1.6}),c.finish()}function Jv({w:i,h:e,stub:t=40}){let n=new Re({bleed:3,safe:3,pose:Qs,view:{...er,open:{az:-30,el:34}}});return n.root("sheet",0,0,i-t,e,{name:"Ticket",nameIn:"Back",cover:!0}),n.add("sheet","right","stub",{d:t,angle:0,open:14,seq:1,name:"Stub",nameIn:"Stub back",bead:!1}),n.perf([i-t,0],[i-t,e]),n.byId.stub.perfed=!0,n.extra({type:"stack",count:4,spread:1.4}),n.finish()}function Kv({w:i,h:e,cols:t,rows:n,d:s}){let r=new Re({bleed:2,safe:2,pose:Qs,view:er,sides:1,meta:fa});r.root("sheet",0,0,i,e,{name:"Sticker sheet",nameIn:"Liner",cover:!0});let a=(i-t*s)/(t+1),o=(e-n*s)/(n+1);for(let l=0;l<n;l++)for(let c=0;c<t;c++){let h=qn(a+s/2+c*(s+a),o+s/2+l*(s+o),s/2,40);h.forEach((u,d)=>r.perf(u,h[(d+1)%h.length],"kiss"))}return r.extra({type:"stack",count:3,spread:2}),r.finish()}function jv({w:i,h:e}){let t=i/2-8,n=[[t,8],[t+16,8],[t+16,12],[t,12]],s=new Re({bleed:3,safe:4,pose:Qs,view:er,meta:fa});return s.rootPoly("sheet",Ui(ui(0,0,i,e),4,6),{name:"Front",nameIn:"Back",cover:!0,holes:[n]}),s.extra({type:"stack",count:3,spread:1.5}),s.finish()}var kh={};gi(kh,{envelope:()=>Qv,gussetEnvelope:()=>ey});var di=179.95,Uh=179.3;function Qv({w:i,h:e,style:t="wallet",window:n,sealR:s=7}){let r=new Re({bleed:3,safe:4,pose:{fold:n?"keep":"flip",open:"flip"},view:{closed:{az:-24,el:40},open:{az:-18,el:46}},meta:{seam:!0}}),a=[];if(n&&a.push(ui(n.x,n.y,n.w,n.h)),r.root("front",0,0,i,e,{name:"Address side",nameIn:"Inside",holes:a,cover:!0}),t==="pointed"){let o=i*.34,l=(c,h)=>({pts:[[0,0],[c*.47,h*.97],[c*.5,h],[c*.53,h*.97],[c,0]]});r.add("front","left","side-l",{...l(e,o),angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{...l(e,o),angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{...l(i,e*.56),angle:di,seq:2,gap:1,lift:.5,role:"flap",name:"Bottom flap",nameIn:"Inside"}),r.add("front","top","seal",{...l(i,e*.62),angle:Uh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else if(t==="pocket"){let o=Math.min(i*.13,30);r.add("front","left","side-l",{d:o,tL:8,tR:8,r:3,angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:8,tR:8,r:3,angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.78,inL:0,inR:0,tL:7,tR:7,r:3,angle:di,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:Math.min(e*.27,62),tL:12,tR:12,r:s,angle:Uh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}else{let o=Math.min(e*.42,36);r.add("front","left","side-l",{d:o,tL:6,tR:10,r:3,angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","right","side-r",{d:o,tL:10,tR:6,r:3,angle:di,seq:1,role:"flap",name:"Side flap",nameIn:"Inside"}),r.add("front","bottom","bottom",{d:e*.66,tL:e*.3,tR:e*.3,r:5,angle:di,seq:2,gap:1,lift:.5,name:"Back panel",nameIn:"Inside"}),r.add("front","top","seal",{d:e*.5,tL:e*.2,tR:e*.2,r:s,angle:Uh,seq:3,gap:2,lift:1,open:34,role:"flap",name:"Seal flap",nameIn:"Gum"})}return n&&r.extra({type:"film",panel:"front",rect:n}),r.extra({type:"insert",panel:"front",size:[i-8,e-8],rise:e*.42,z:1}),r.finish()}function ey({w:i,h:e,g:t=25}){let s=new Re({bleed:3,safe:5,pose:{fold:"stand",open:"stand"},view:{closed:{az:-32,el:18},open:{az:-30,el:26}}}),r=.3;return s.root("front",16+t-r,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),s.add("front","right","gus-b",{d:t,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),s.add("front","left","gus-a",{d:t-r,angle:90,seq:3,role:"flap",name:"Gusset",nameIn:"Inside"}),s.add("gus-a","far","glue",{d:16,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),s.add("gus-a","bottom","b-a",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("gus-b","bottom","b-b",{d:t*.7,inL:.3,inR:.3,tL:1,tR:1,angle:90,seq:4,role:"flap",name:"Base",nameIn:"Base"}),s.add("front","bottom","b-f",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","bottom","b-k",{d:t*.6,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base",nameIn:"Base"}),s.add("back","top","seal-top",{d:t,inL:.2,inR:.2,angle:90,seq:6,open:0,gap:2,role:"flap",name:"Top",nameIn:"Inside"}),s.add("seal-top","far","seal",{d:42,tL:6,tR:6,r:6,angle:90,seq:6,open:0,role:"flap",name:"Seal flap",nameIn:"Gum"}),s.add("gus-a","top","t-a",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.add("gus-b","top","t-b",{d:t*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:5,open:20,role:"flap",name:"Flap",nameIn:"Flap"}),s.finish()}var Oh={};gi(Oh,{folder:()=>ty});function ty({w:i,h:e,spine:t=0,pocket:n=100,two:s=!1,slit:r=!0,insert:a=!1}){let o=new Re({bleed:3,safe:5,pose:{fold:"flip",open:"flip",openYaw:0},view:{closed:{az:-24,el:36},open:{az:-14,el:52,pad:1.14}},meta:{seam:!0}});o.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside right"});let l=t>0?"spine":"back";t>0&&o.add("back","right","spine",{d:t,angle:90,seq:3,open:8,name:"Spine",nameIn:"Spine",role:"flap"}),o.add(l,t>0?"far":"right","front",{d:i,angle:t>0?90:179.2,seq:3,gap:t>0?0:2,open:t>0?8:16,name:"Front cover",nameIn:"Inside left",cover:!0});let c=(u,d,f)=>f?{pts:[[0,0],[0,d-16],[18,d],[u,d],[u,0]]}:{pts:[[0,0],[0,d],[u-18,d],[u,d-16],[u,0]]},h=o.add("back","bottom","pocket",{...c(i,n,!0),angle:179.92,seq:1,gap:0,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]});return o.add("pocket",{a:[0,e+n-16],b:[0,e]},"pocket-tab",{d:12,tL:3,tR:3,angle:-179.9,seq:0,role:"glue",name:"Glue",nameIn:"Glue"}),s&&o.add("front","bottom","pocket2",{...c(i,n,!1),angle:179.92,seq:1,name:"Pocket",nameIn:"Pocket inside",hu:[0,i]}),r&&(o.perf([i-72,e+n*.42],[i-62,e+n*.3],"perf"),o.perf([i-18,e+n*.3],[i-8,e+n*.42],"perf")),a&&o.extra({type:"insert",panel:"back",size:[i-16,e-n*.5],rise:0,z:.5,at:"pocket",openOnly:!0}),o.finish()}var Bh={};gi(Bh,{autoLockBox:()=>sy,cakeBox:()=>fy,counterDisplay:()=>py,drawerBox:()=>cy,gableBox:()=>dy,lidBox:()=>ly,mailerBox:()=>oy,paperBag:()=>my,shippingBox:()=>ay,sleeve:()=>uy,snapBox:()=>ry,trayBox:()=>hy,tuckBox:()=>ny});var nr={fold:"stand",open:"stand"},kl={closed:{az:-34,el:22},open:{az:-30,el:30}};function pa(i,{L:e,W:t,H:n,t:s,glue:r=14}){let a=.25+s*.6;i.root("front",r+t-a,0,e,n,{name:"Front",nameIn:"Inside front",cover:!0}),i.add("front","right","side-b",{d:t,angle:90,seq:3,name:"Right side",nameIn:"Inside"}),i.add("side-b","far","back",{d:e,angle:90,seq:3,name:"Back",nameIn:"Inside back"}),i.add("front","left","side-a",{d:t-a,angle:90,seq:3,name:"Left side",nameIn:"Inside"}),i.add("side-a","far","glue",{d:r,inL:2,inR:2,tL:3,tR:3,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"})}function tr(i,e,t,n,{L:s,W:r,tuck:a,t:o,seq:l,open:c}){i.add(e,t,`${n}-lid`,{d:r-o*2.4-.3,angle:90,seq:l,gap:2,open:c,name:n==="top"?"Top":"Base",nameIn:"Inside"}),i.add(`${n}-lid`,"far",`${n}-tuck`,{d:a,inL:.6,inR:.6,tL:2,tR:2,r:6,angle:90.6,seq:l,open:40,role:"flap",name:"Tuck",nameIn:"Tuck"})}function $n(i,e,t,n,s,r){i.add(e,t,n,{d:s,inL:.6,inR:.6,tL:2,tR:6,r:2,angle:90,seq:r,role:"flap",name:"Dust flap",nameIn:"Dust flap"})}function ny({L:i,W:e,H:t,t:n=.45,reverse:s=!1,hang:r=!1}){let a=new Re({bleed:3,safe:3,pose:{...nr},view:kl});pa(a,{L:i,W:e,H:t,t:n});let o=Math.min(16,e*.6),l=Math.min(e*.62,26);if($n(a,"side-a","top","dust-a-top",l,6),$n(a,"side-b","top","dust-b-top",l,6),$n(a,"side-a","bottom","dust-a-bot",l,4),$n(a,"side-b","bottom","dust-b-bot",l,4),r){tr(a,"front","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});let c=a.byId.back.edges.top,h=(c.a[0]+c.b[0])/2,u=c.a[1]-21;a.add("back","top","hang",{d:36,r:5,angle:0,seq:1,name:"Hang tab",nameIn:"Hang tab",bead:!1,holes:[iy(h,u)]})}else tr(a,"back","top","top",{L:i,W:e,tuck:o,t:n,seq:7,open:18});return tr(a,s?"front":"back","bottom","bot",{L:i,W:e,tuck:o,t:n,seq:5}),a.finish()}function iy(i,e){let s=[];for(let r=0;r<=10;r++){let a=Math.PI/2+r/10*Math.PI;s.push([i-14+Math.cos(a)*3,e+Math.sin(a)*3])}s.push([i-5,e-3],[i-3.5,e-6.5],[i+3.5,e-6.5],[i+5,e-3]);for(let r=0;r<=10;r++){let a=-Math.PI/2+r/10*Math.PI;s.push([i+14+Math.cos(a)*3,e+Math.sin(a)*3])}return s}function sy({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...nr},view:kl});pa(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);$n(s,"side-a","top","dust-a-top",a,6),$n(s,"side-b","top","dust-b-top",a,6),tr(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18});let o=e*.58,l=(c,h,u)=>({pts:u?[[0,0],[0,h*.5],[c*.28,h],[c*.72,h],[c,h*.42],[c,0]]:[[0,0],[0,h*.42],[c*.28,h],[c*.72,h],[c,h*.5],[c,0]]});return s.add("front","bottom","lock-f",{...l(i,o,!1),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("back","bottom","lock-b",{...l(i,o,!0),angle:90,seq:4,gap:2,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-a","bottom","lock-a",{d:e*.5,inL:.5,inR:.5,tL:2,tR:8,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.add("side-b","bottom","lock-c",{d:e*.5,inL:.5,inR:.5,tL:8,tR:2,angle:90,seq:4,role:"flap",name:"Lock",nameIn:"Lock"}),s.finish()}function ry({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...nr},view:kl});pa(s,{L:i,W:e,H:t,t:n});let r=Math.min(16,e*.6),a=Math.min(e*.62,26);return $n(s,"side-a","top","dust-a-top",a,6),$n(s,"side-b","top","dust-b-top",a,6),tr(s,"back","top","top",{L:i,W:e,tuck:r,t:n,seq:7,open:18}),s.add("side-a","bottom","snap-1",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"1",nameIn:"1"}),s.add("side-b","bottom","snap-2",{d:e*.5,inL:.5,inR:.5,tL:3,tR:3,angle:90,seq:3,role:"flap",name:"2",nameIn:"2"}),s.add("front","bottom","snap-3",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"3",nameIn:"3"}),s.add("back","bottom","snap-4",{d:e*.7,inL:.5,inR:.5,tL:i*.1,tR:i*.1,r:4,angle:90,seq:4,gap:2,role:"flap",name:"4",nameIn:"4"}),s.finish()}function ay({L:i,W:e,H:t,t:n=3}){let s=new Re({bleed:0,safe:10,pose:{...nr},view:kl});pa(s,{L:i,W:e,H:t,t:n,glue:30});let r=e/2;return s.add("side-a","bottom","min-a-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","bottom","min-b-b",{d:r,inL:2,inR:2,angle:90,seq:4,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","bottom","maj-f-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("back","bottom","maj-k-b",{d:r-1,inL:1,inR:1,angle:90,seq:5,gap:2,name:"Major flap",nameIn:"Major flap",role:"flap"}),s.add("side-a","top","min-a-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("side-b","top","min-b-t",{d:r,inL:2,inR:2,angle:90,seq:6,open:62,name:"Minor flap",nameIn:"Minor flap",role:"flap"}),s.add("front","top","maj-f-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.add("back","top","maj-k-t",{d:r-1,inL:1,inR:1,angle:90,seq:7,gap:2,open:-30,name:"Top flap",nameIn:"Top flap"}),s.finish()}function oy({L:i,W:e,H:t,t:n=1.5}){let s=Math.max(5,n*3.5),r=n+.3,a=i+2*s,o=new Re({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-26,el:40}}});o.root("base",0,0,a,e,{name:"Base",nameIn:"Inside base"}),o.add("base","top","back",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Back",nameIn:"Inside back"}),o.add("back","far","lid",{d:e-n*2.1-.4,inL:s-r+.4,inR:s-r+.4,angle:90,seq:6,gap:1,open:8,name:"Lid",nameIn:"Inside lid",cover:!0}),o.add("lid","far","tuck",{d:t*.86,inL:1,inR:1,tL:2,tR:2,r:8,angle:90.6,seq:6,open:26,role:"flap",name:"Tuck",nameIn:"Tuck"}),o.add("lid","left","ear-l",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("lid","right","ear-r",{d:t*.8,inL:6,inR:6,tL:8,tR:8,r:8,angle:90.6,seq:5,open:20,role:"flap",name:"Ear",nameIn:"Ear"}),o.add("base","bottom","front",{d:t,inL:r,inR:r,angle:90,seq:2,name:"Front",nameIn:"Inside front"});let l=Math.min(e*.34,46);o.add("back","left","back-l",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("back","right","back-r",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","left","front-l",{d:l,inL:2,inR:2,tL:6,tR:0,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"}),o.add("front","right","front-r",{d:l,inL:2,inR:2,tL:0,tR:6,angle:90,seq:1,role:"flap",name:"Flap",nameIn:"Flap"});for(let[c,h]of[["l","left"],["r","right"]])o.add("base",h,`wall-${c}`,{d:t,angle:90,seq:3,name:c==="l"?"Left side":"Right side",nameIn:"Inside"}),o.add(`wall-${c}`,"far",`roll-${c}`,{d:s-n,inL:1,inR:1,angle:90,seq:4,role:"flap",name:"Roll",nameIn:"Roll"}),o.add(`roll-${c}`,"far",`in-${c}`,{d:t-n-1,inL:1,inR:1,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Inner wall",nameIn:"Inner wall"});return o.finish()}function Ul(i,e,t,n,s,r,a,o={}){let l=e?`${e}-`:"",c=`${l}base`,h=o.seq??2,u=Math.min(a*.9,18);o.mount?i.mountRect(o.parent,c,t,n,s,r,{to:o.mount,seq:o.mountSeq,name:o.name||"Top",nameIn:"Inside",cover:!0}):i.root(c,t,n,s,r,{name:o.name||"Base",nameIn:"Inside base"});let d=o.t*1.4;for(let[f,m,_]of[["t","top","Back"],["b","bottom","Front"]])i.add(c,m,`${l}wall-${f}`,{d:a,inL:0,inR:0,angle:90,seq:h+1,name:_,nameIn:"Inside",gap:1}),i.add(`${l}wall-${f}`,"left",`${l}tab-${f}l`,{d:u,inL:1,inR:1,tL:0,tR:3,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"}),i.add(`${l}wall-${f}`,"right",`${l}tab-${f}r`,{d:u,inL:1,inR:1,tL:3,tR:0,angle:90,seq:h,role:"glue",name:"Glue",nameIn:"Glue"});for(let[f,m,_]of[["l","left","Left"],["r","right","Right"]])i.add(c,m,`${l}wall-${f}`,{d:a,inL:.3,inR:.3,angle:90,seq:h+2,gap:3,name:_,nameIn:"Inside"})}function ly({L:i,W:e,H:t,lid:n,t:s=.5}){let r=n??Math.max(t*.5,20),a=s*3+.6,o=t+r+22,l=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:28},open:{az:-28,el:32}}});Ul(l,"",0,0,i,e,t,{t:s,name:"Base"});let c=i+2*a,h=e+2*a,u=i+t*2+40,d=(e-h)/2;return Ul(l,"lid",u,d,c,h,r,{t:s,parent:"base",name:"Lid top",seq:2,mountSeq:6,mount:{pos:[i/2,-e/2,-t-s-.2],rot:[0,180,0],center:[u+c/2,-(d+h/2),0],arc:Math.max(i,e)*.55,openAt:.42}}),l.finish()}function cy({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:26},open:{az:-34,el:32}}});Ul(s,"",0,0,i,e,t,{t:n,name:"Tray"});let r=n*2+.6,a=e+r,o=t+r,l=i+t*2+40,c=-t-10;return s.mountRect("base","sleeve",l,c,i,a,{name:"Sleeve top",nameIn:"Inside",seq:7,cover:!0,to:{pos:[i/2,-e/2,-t-n*2.2],rot:[0,180,0],center:[l+i/2,-(c+a/2),0],arc:i*.5,slide:[i*.95,0,0],openAt:.76}}),s.add("sleeve","bottom","sleeve-f",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-f","far","sleeve-u",{d:a,angle:90,seq:6,name:"Sleeve base",nameIn:"Inside"}),s.add("sleeve-u","far","sleeve-b",{d:o,angle:90,seq:6,name:"Sleeve side",nameIn:"Inside"}),s.add("sleeve-b","far","sleeve-g",{d:12,inL:2,inR:2,tL:2,tR:2,angle:90,seq:5,role:"glue",gap:0,name:"Glue",nameIn:"Glue"}),s.finish()}function hy({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip"},view:{closed:{az:-30,el:34}},meta:{noOpen:!0}});return Ul(s,"",0,0,i,e,t,{t:n,name:"Base"}),s.finish()}function uy({L:i,W:e,H:t,t:n=.45,inner:s,innerColor:r}){let a=new Re({bleed:3,safe:3,pose:{fold:"keep"},view:{closed:{az:-28,el:28}},meta:{noOpen:!0}});return a.root("top",12+t,0,i,e,{name:"Top",nameIn:"Inside",cover:!0}),s&&a.extra({type:"block",panel:"top",size:[i-n*2-.4,s,t-n*1.5],pos:[12+t+i/2,-e/2,-n-(t-n*1.5)/2-.1],color:r,seq:2}),a.add("top","right","side-b",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-b","far","under",{d:i,angle:90,seq:1,name:"Under",nameIn:"Inside"}),a.add("top","left","side-a",{d:t,angle:90,seq:1,name:"Side",nameIn:"Inside"}),a.add("side-a","far","glue",{d:12,inL:1,inR:1,tL:2,tR:2,angle:90,seq:1,gap:1,role:"glue",name:"Glue",nameIn:"Glue"}),a.finish()}function dy({L:i,W:e,H:t,t:n=.45}){let s=new Re({bleed:3,safe:3,pose:{...nr},view:{closed:{az:-34,el:18},open:{az:-30,el:28}}});pa(s,{L:i,W:e,H:t,t:n});let r=e*.62,a=Math.asin(Math.min(.98,(e/2+.2)/r))*(180/Math.PI),o=34,l=Math.min(i*.55,80),c=(d,f)=>{let m=[];for(let g=0;g<=12;g++){let v=Math.PI/2+g/12*Math.PI;m.push([d+Math.cos(v)*7,f+Math.sin(v)*7])}for(let g=0;g<=12;g++){let v=-Math.PI/2+g/12*Math.PI;m.push([d+l+Math.cos(v)*7,f+Math.sin(v)*7])}return m},h=(d,f,m)=>{s.add(d,"top",`${f}-roof`,{d:r,angle:90-a,seq:6,open:0,name:"Roof",nameIn:"Inside",cover:!1});let _=s.byId[`${f}-roof`].edges.far,p=(_.a[0]+_.b[0])/2,g=_.a[1]-o*.46;s.add(`${f}-roof`,"far",`${f}-handle`,{d:o,r:8,tL:4,tR:4,angle:-(90-a)*0+90-(90-a),seq:7,open:0,role:"flap",name:"Handle",nameIn:"Handle",holes:[c(p-l/2,g)]})};h("back","k",1),h("front","f",-1);for(let d of["a","b"]){let f=[[0,0],[e/2,e*.5],[e,0]];s.add(`side-${d}`,"top",`gus-${d}`,{pts:f,angle:52,seq:5,open:0,role:"flap",name:"Gusset",nameIn:"Gusset"})}let u=Math.min(e*.62,26);return $n(s,"side-a","bottom","dust-a-bot",u,4),$n(s,"side-b","bottom","dust-b-bot",u,4),tr(s,"back","bottom","bot",{L:i,W:e,tuck:14,t:n,seq:5}),s.finish()}function fy({L:i,W:e,H:t,t:n=.5}){let s=new Re({bleed:3,safe:3,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:30},open:{az:-24,el:38}}});s.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),s.add("base","top","back",{d:t,angle:90,seq:2,name:"Back",nameIn:"Inside"}),s.add("back","far","lid",{d:e-n*2.4-.3,inL:n*1.6+.4,inR:n*1.6+.4,angle:90,seq:5,gap:2,open:2,name:"Lid",nameIn:"Inside lid",cover:!0}),s.add("lid","far","tuck",{d:t*.55,inL:3,inR:3,tL:6,tR:6,r:5,angle:90.6,seq:5,open:18,role:"flap",name:"Tuck",nameIn:"Tuck"}),s.add("lid","left","lip-l",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("lid","right","lip-r",{d:t*.42,inL:4,inR:4,tL:5,tR:5,angle:90.6,seq:4,open:10,role:"flap",name:"Lip",nameIn:"Lip"}),s.add("base","bottom","front",{d:t,angle:90,seq:2,name:"Front",nameIn:"Inside"}),s.add("base","left","left",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Left",nameIn:"Inside"}),s.add("base","right","right",{d:t,inL:n,inR:n,angle:90,seq:3,gap:2,name:"Right",nameIn:"Inside"});for(let r of["back","front"])s.add(r,"left",`${r}-gl`,{d:e*.22,inL:1,inR:1,tL:0,tR:4,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),s.add(r,"right",`${r}-gr`,{d:e*.22,inL:1,inR:1,tL:4,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return s.finish()}function py({L:i,W:e,H:t,header:n,t:s=1.5}){let r=new Re({bleed:3,safe:4,pose:{fold:"flip",open:"flip"},view:{closed:{az:-30,el:22},open:{az:-30,el:22}}});r.root("base",0,0,i,e,{name:"Base",nameIn:"Inside base"}),r.add("base","top","back",{d:t+n,angle:90,seq:2,name:"Header",nameIn:"Header inside",cover:!0}),r.add("base","bottom","front",{d:t*.8,angle:90,seq:2,name:"Front lip",nameIn:"Inside"}),r.add("base","left","left",{pts:[[0,0],[0,t+n*.7],[e*.45,t],[e,t*.8],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Left wing",nameIn:"Inside"}),r.add("base","right","right",{pts:[[0,0],[0,t*.8],[e*.55,t],[e,t+n*.7],[e,0]],hu:[0,e],angle:90,seq:3,gap:2,name:"Right wing",nameIn:"Inside"});for(let a of["front"])r.add(a,"left",`${a}-gl`,{d:14,inL:1,inR:1,tL:0,tR:3,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"}),r.add(a,"right",`${a}-gr`,{d:14,inL:1,inR:1,tL:3,tR:0,angle:90,seq:1,role:"glue",name:"Glue",nameIn:"Glue"});return r.finish()}function my({w:i,h:e,g:t,hem:n=40,base:s,handles:r=!0,t:a=.2}){let o=s??t*.72,l=18,c=a*1.6+.2,h=new Re({bleed:3,safe:5,pose:{...nr},view:{closed:{az:-30,el:12},open:{az:-30,el:22}}});if(h.root("front",l+t-c,0,i,e,{name:"Front",nameIn:"Inside",cover:!0}),h.add("front","right","gus-b",{d:t,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-b","far","back",{d:i,angle:90,seq:3,name:"Back",nameIn:"Inside"}),h.add("front","left","gus-a",{d:t-c,angle:90,seq:3,name:"Side",nameIn:"Inside"}),h.add("gus-a","far","glue",{d:l,inL:2,inR:2,angle:90,seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),n)for(let u of["front","gus-a","gus-b","back"])h.add(u,"top",`hem-${u}`,{d:n,inL:.1,inR:.1,angle:179.9,seq:1,role:"flap",name:"Hem",nameIn:"Hem"});return h.add("gus-a","bottom","b-a",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("gus-b","bottom","b-b",{d:o,inL:.3,inR:.3,tL:2,tR:2,angle:90,seq:4,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("front","bottom","b-f",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),h.add("back","bottom","b-k",{d:t*.56,inL:.3,inR:.3,angle:90,seq:5,gap:2,role:"flap",name:"Base flap",nameIn:"Base flap"}),r&&(h.extra({type:"rope",panel:"front",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i}),h.extra({type:"rope",panel:"back",span:i*.4,drop:Math.min(i*.42,150),top:0,width:i})),h.finish()}var Hh={};gi(Hh,{deskCalendar:()=>by,notepad:()=>yy,perfectBook:()=>_y,saddleBook:()=>gy,wireBook:()=>xy});var zh=7;function gy({w:i,h:e,pages:t=16,t:n=.12,coverT:s}){let a=Math.max(1,Math.ceil(t/4))-1,o=Math.min(a,zh),l=a*n/Math.max(1,o),c=s??n,u=-(o*2*l+2*c)/2,d=new Re({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-26,el:34},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"saddle"}}});d.root("back",0,0,i,e,{name:"Back cover",nameIn:"Inside back cover"}),d.add("back","right","front",{d:i,angle:179.6,seq:1,open:5,name:"Front cover",nameIn:"Inside front cover",cover:!0}),d.byId.front.pivotZ=u;let f=[i,0],m=[i,e];for(let p=0;p<o;p++){let g=c+p*l,v=2*(p+1)+1;d.leaf("back",`l${p}`,i,0,i,e,{hinge:{a:f,b:m},zOff:g,pivotZ:u,angle:179.7,open:p===o-1?62:6+p*1.2,seq:1,pageFront:v,pageBack:v+1,valley:!0,bead:!1}),d.leaf("back",`r${p}`,0,0,i,e,{hinge:{a:f,b:m},zOff:g,pivotZ:u,angle:0,open:0,seq:1,pageFront:t-v+1,pageBack:t-v,valley:!0,bead:!1})}d.meta.pageT=l,d.meta.leafT=l;let _=e*.26;return d.extra({type:"staples",x:i,ys:[_,e-_],len:8,panel:"back"}),d.finish()}function _y({w:i,h:e,pages:t=64,t:n=.12,coverT:s=.3,hard:r=!1}){let a=Math.ceil((t-4)/2),o=Math.max(2,a*n+(r?3:.6)),l=Math.min(a,zh+2),c=a*n/l,h=r?2.4:s,u=r?3:0,d=new Re({bleed:3,safe:8,pose:{fold:"flip",open:"flip"},view:{closed:{az:-28,el:32},open:{az:-14,el:40}},meta:{book:{pages:t,kind:"perfect"},thick:h}}),f=i+u,m=e+u*2;d.root("back",0,0,f,m,{name:"Back cover",nameIn:"Inside back cover"}),d.add("back","right","spine",{d:o,angle:90,seq:1,open:90,name:"Spine",nameIn:"Spine",role:"flap",lift:0}),d.add("spine","far","front",{d:f,angle:90,seq:2,open:-80,name:"Front cover",nameIn:"Inside front cover",cover:!0});let _=[f,u],p=[f,u+e],g=o;for(let v=0;v<l;v++){let M=h+(v+0)*c*.999,y=l-1-v;d.leaf("back",`p${v}`,f-i,u,i,e,{hinge:{a:_,b:p},zOff:M,pivotZ:-(h+g/2),angle:0,open:y<4?[172,169,166,118][3-y]:0,seq:3,pageFront:t-2-2*v,pageBack:t-3-2*v,valley:!0,bead:!1})}return d.meta.pageT=c,d.meta.leafT=c,d.finish()}function xy({w:i,h:e,pages:t=40,t:n=.13,coverT:s=.33,edge:r="left",stand:a=!1,wall:o=!1,r:l}){let c=Math.ceil(t/2),h=Math.min(c,zh+1),u=c*n/h,d=h*u+2*s,f=r==="left",m=f?[0,0]:[0,0],_=f?[0,e]:[i,0],p=8.47,g=2,v=[],M=Math.floor((f?e:i)/p),y=6;for(let R=0;R<M;R++){let N=(R+.5)/M*(f?e:i);v.push(f?qn(y,N,g,14):qn(N,y,g,14))}let T=l??Math.max(6.5,d/2+3.2),b=new Re({bleed:3,safe:11,pose:o?{fold:"stand",open:"stand",closedYaw:0}:{fold:"keep",open:"keep"},view:o?{closed:{az:-20,el:6},open:{az:-20,el:6}}:{closed:{az:-26,el:34},open:{az:-26,el:40}},meta:{book:{pages:t,kind:"wire"}}});b.root("backleaf",0,0,i,e,{name:"Back",nameIn:"Inside",holes:v});let x=-d+y*0,w={a:m,b:_};for(let R=0;R<h;R++){let N=(h-R)*u,U=R===0;b.leaf("backleaf",`w${R}`,0,0,i,e,{hinge:w,zOff:-N-(U?s:0),pivotZ:d/2,coverLeaf:U,holes:U?v:[],angle:0,open:R<2?-176+R*7:0,seq:2-Math.min(R,1),pageFront:2*R+1,pageBack:2*R+2,valley:!1,bead:!1})}return b.meta.leafT=u,b.meta.pageT=u,b.extra({type:"wire",a:f?[6*0-1,0]:[0,-1],b:f?[-1,e]:[i,-1],pitch:p,r:T,h:0,z:d/2-T*0-0,always:!0,ox:f?1+y*.2:0,oy:f?0:y*.2}),o&&b.extra({type:"custom",build:vy(i)}),b.finish()}function vy(i){return(e,t)=>{let n=new Ae(new un(8,.6,8,32,Math.PI),new Qe({color:"#16161a",metalness:.8,roughness:.35}));n.position.set(i/2,6,0),t.group.add(n)}}function yy({w:i,h:e,sheets:t=50,t:n=.1}){let r=t*n/6,a=new Re({bleed:3,safe:5,pose:{fold:"keep",open:"keep"},view:{closed:{az:-28,el:32},open:{az:-28,el:38}},meta:{book:{pages:t,kind:"pad"}}});a.root("back",0,0,i,e,{name:"Chipboard back",nameIn:"Chipboard",holes:[]});let o={a:[0,0],b:[i,0]};for(let l=0;l<6;l++){let c=(6-l)*r;a.leaf("back",`n${l}`,0,0,i,e,{hinge:o,zOff:-c,pivotZ:1.5,coverLeaf:!0,angle:0,open:l===0?-58:0,seq:1,pageFront:1,pageBack:2,valley:!1,bead:!1})}return a.meta.leafT=r,a.meta.pageT=r,a.finish()}function by({w:i,h:e,base:t}){let n=t??e*.75,s=18,r=e+6,a=180-Math.acos((n*n+r*r-r*r)/(2*n*r))*180/Math.PI,o=new Re({bleed:3,safe:5,pose:{fold:"flip",closedYaw:180},view:{closed:{az:-28,el:18}},meta:{noOpen:!0}});return o.root("base",0,r,i,n,{name:"Base",nameIn:"Base"}),o.add("base","top","back",{d:r,angle:a,seq:1,name:"Back",nameIn:"Inside"}),o.add("base","bottom","front",{d:r,angle:a,seq:1,name:"Month sheet",nameIn:"Inside",cover:!0}),o.add("front","far","glue",{d:s,inL:1,inR:1,tL:2,tR:2,angle:2*(180-a),seq:2,role:"glue",name:"Glue",nameIn:"Glue"}),o.extra({type:"wire",panel:"front",a:[0,0],b:[i,0],pitch:8.47,r:5.5,h:0,z:0,oy:3}),o.finish()}var Gh={};gi(Gh,{coneWrap:()=>Ty,friesCone:()=>Ay,pillowBox:()=>Ry,wrapLabel:()=>Ey});var My=i=>Math.min(1,Math.max(0,i)),Sy=i=>i*i*(3-2*i),Ol=class{constructor(e,{thickness:t,materials:n,uvOf:s,surface:r}){this.kind="warp",this.die=e,this.t=t,this.object=new nt,this.pickables=[],this.channels=[];let a=e.warp;this.warp=a;let o=a.nu||96,l=a.nv||32;this.nu=o,this.nv=l;let c=(o+1)*(l+1);this.flat=new Float32Array(c*2);let h=new Float32Array(c*3),u=new Float32Array(c*2),d=new Float32Array(c*2),f=[],m=0;for(let M=0;M<=l;M++)for(let y=0;y<=o;y++){let[T,b]=a.grid(y/o,M/l);this.flat[m*2]=T,this.flat[m*2+1]=b;let[x,w]=s(T,b);u[m*2]=x,u[m*2+1]=w,d[m*2]=1-x,d[m*2+1]=w,m++}for(let M=0;M<l;M++)for(let y=0;y<o;y++){let T=M*(o+1)+y,b=T+1,x=T+o+1,w=x+1;f.push(T,x,b,b,x,w)}let _=new bt;_.setAttribute("position",new Rt(h,3)),_.setAttribute("uv",new Rt(u,2)),_.setIndex(f),_.computeVertexNormals(),this.geo=_;let p=new bt;p.setAttribute("position",_.attributes.position),p.setAttribute("normal",_.attributes.normal),p.setAttribute("uv",new Rt(d,2)),p.setIndex(f),r.back.side=Ct,a.mask&&this._mask(r);let g=new Ae(_,n[0]),v=new Ae(p,n[1]);v.userData.side="back";for(let M of[g,v])M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,M.userData.panel=e.panels[0].id,this.object.add(M),this.pickables.push(M);g.customDepthMaterial=void 0,a.prop&&(this.prop=a.prop(),this.prop&&this.object.add(this.prop.object)),this.apply([0])}_mask(e){let t=document.createElement("canvas");t.width=e.canvas.front.width,t.height=e.canvas.front.height;let n=t.getContext("2d"),s=t.width/e.ext.w;n.fillStyle="#000",n.fillRect(0,0,t.width,t.height),n.fillStyle="#fff",n.beginPath(),this.die.panels[0].poly.forEach((a,o)=>{let l=(a[0]-e.ext.x0)*s,c=(a[1]-e.ext.y0)*s;o?n.lineTo(l,c):n.moveTo(l,c)}),n.closePath(),n.fill();let r=new hn(t);this.maskTex=r;for(let a of[e.front,e.back])a.alphaMap=r,a.alphaTest=.5,a.needsUpdate=!0}vector(e){return e==="flat"||e==="inside"?[0]:e==="open"?[this.warp.openAt??1]:[1]}windows(){return{steps:3,list:[[0,1]]}}_deform(e,t){let{flat:n,warp:s}=this,r=n.length/2;for(let a=0;a<r;a++){let o=s.deform(n[a*2],n[a*2+1],e);t[a*3]=o[0],t[a*3+1]=o[1],t[a*3+2]=o[2]}}apply(e){this.vec=e;let t=e[0];this._deform(t,this.geo.attributes.position.array),this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals(),this.geo.attributes.normal.needsUpdate=!0,this.prop&&this.prop.apply(t)}bounds(e){let t=this.flat.length/2,n=new Float32Array(t*3);this._deform(e[0],n);let s=new xt,r=new C,a=Math.max(1,Math.floor(t/600));for(let o=0;o<t;o+=a)r.set(n[o*3],n[o*3+1],n[o*3+2]),s.expandByPoint(r);if(this.prop?.box){let o=this.prop.box(e[0]);o&&s.union(o)}return s}dispose(){this.geo.dispose(),this.maskTex?.dispose(),this.prop?.dispose?.()}},Bl={clamp01:My,smooth:Sy};function Rf(i,e,t,n){let s=n/t,r=i-e;return s<1e-5?[i,0]:[e+Math.sin(s*r)/s,-(1-Math.cos(s*r))/s]}var{clamp01:ir,smooth:sr}=Bl;function Oi(i,e,t=72){let n=i.map(r=>new he(r[0],r[1])),s=new Ae(new Fs(n,t),e);return s.castShadow=!0,s.receiveShadow=!0,s}var zl=(i,e=6)=>{let t=[];for(let n=0;n<i.length-1;n++){let s=i[Math.max(0,n-1)],r=i[n],a=i[n+1],o=i[Math.min(i.length-1,n+2)];for(let l=0;l<e;l++){let c=l/e,h=(u,d,f,m)=>.5*(2*d+(f-u)*c+(2*u-5*d+4*f-m)*c*c+(3*d-u-3*f+m)*c*c*c);t.push([Math.max(0,h(s[0],r[0],a[0],o[0])),h(s[1],r[1],a[1],o[1])])}}return t.push(i[i.length-1]),t},wy={wine:{r:37,build(){let i=new jt({color:"#10231a",roughness:.12,clearcoat:1,clearcoatRoughness:.1}),e=new Qe({color:"#141416",metalness:.7,roughness:.35}),t=new nt;t.add(Oi(zl([[0,0],[35,0],[37,3],[37,60],[37,190],[35,210],[24,236],[15.5,258],[14,290],[14,310],[15,312],[15,318],[0,318]]),i));let n=Oi([[14.6,262],[14.6,300],[15.6,300],[15.6,319],[0,320]],e);return t.add(n),t},height:320,labelY:30},beer:{r:30,build(){let i=new jt({color:"#3a1c07",roughness:.14,clearcoat:1,clearcoatRoughness:.1}),e=new Qe({color:"#b7b8bb",metalness:1,roughness:.3}),t=new nt;return t.add(Oi(zl([[0,0],[28,0],[30,3],[30,60],[30,120],[28,142],[16,176],[13,200],[13,214],[14.5,216],[14.5,221],[0,221]]),i)),t.add(Oi([[15,214],[15.2,222],[0,224]],e)),t},height:224,labelY:18},jar:{r:37,build(){let i=new jt({color:"#d9c7a4",roughness:.2,clearcoat:1,clearcoatRoughness:.08}),e=new Qe({color:"#17171a",metalness:.7,roughness:.3}),t=new nt;return t.add(Oi(zl([[0,0],[33,0],[37,5],[37,60],[37,100],[33,110],[31,116]]),i)),t.add(Oi([[35,114],[35,128],[34,130],[0,130]],e)),t},height:130,labelY:14},can:{r:33,build(){let i=new Qe({color:"#d7d8dc",metalness:1,roughness:.28}),e=new nt;return e.add(Oi(zl([[0,3],[24,0],[29,1],[33,10],[33,60],[33,100],[33,104],[27,114],[26.6,115.4],[24.4,112],[0,112]]),i)),e},height:115.4,labelY:10},mug:{r:41,build(){let i=new jt({color:"#f4f3ef",roughness:.3,clearcoat:.6}),e=new nt;e.add(Oi([[0,0],[37,0],[41,3],[41,95],[40,96],[37.6,96],[37.6,8],[0,7]],i));let t=new Ti([new C(0,76,-40),new C(0,82,-60),new C(0,56,-72),new C(0,28,-60),new C(0,22,-40)]),n=new Ae(new Ki(t,40,5.5,12),i);return n.castShadow=!0,e.add(n),e},height:96,labelY:0}};function Ey({w:i,h:e,container:t="wine",r:n,y:s,shape:r,stock:a}){let o=wy[t],c=(n??o.r)+.5,h=new Re({bleed:2,safe:3,sides:1,pose:{fold:"stand",open:"stand"},view:{closed:{az:t==="mug"?58:-22,el:t==="mug"?16:8}},meta:{noOpen:!0,unitBoost:.9,closedLabel:"Applied"}}),u=ui(0,0,i,e);r==="round"&&(u=Ui(u,6,6)),r==="oval"&&(u=Pl(i/2,e/2,i/2,e/2,64)),h.rootPoly("label",u,{name:"Label",nameIn:"Adhesive",cover:!0}),h.finish();let d=s??o.labelY;return h.warp={nu:120,nv:8,mask:r==="oval"||r==="round",grid:(f,m)=>[f*i,m*e],deform(f,m,_){let p=sr(ir(_)),[g,v]=Rf(f,i/2,c,p);return[g,-m,v]},prop(){let f=o.build(),m=new nt;return m.add(f),m.position.set(i/2,-(e+d),-c),{object:m,apply(_){let p=sr(ir((_-.15)/.55));m.visible=p>.01,m.scale.setScalar(Math.max(.001,p))},box(_){if(_<.5)return null;let p=new xt;return p.min.set(i/2-c,-(e+d),-2*c),p.max.set(i/2+c,-(e+d)+o.height,0),p}}}},h}function Cf(i,e,t,n,s,r=56){let a=[];for(let o=0;o<=r;o++){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*e,s+Math.cos(l)*e])}if(i>.5)for(let o=r;o>=0;o--){let l=-t/2+o/r*t;a.push([n+Math.sin(l)*i,s+Math.cos(l)*i])}else a.push([n,s]);return a}var If=i=>({up:[0,-Math.cos(i),-Math.sin(i)],face:[0,-Math.sin(i),Math.cos(i)]});function Pf({cx:i,cy:e,beta:t}){return(n,s,r)=>{let a=n-i,o=s-e,l=Math.hypot(a,o),c=Math.atan2(a,o),h=Math.PI/2+(t-Math.PI/2)*r,u=Math.sin(h),d=Math.cos(h),f=c/u,m=l*u*Math.sin(f),_=l*u*Math.cos(f),p=l*d,g=_*u+p*d,v=_*d-p*u;return[i+m,-(e+g),v]}}function Ty({topD:i,bottomD:e,height:t,overlap:n=8,kind:s="cup"}){let r=i/2,a=e/2,o=Math.hypot(t,r-a),l=(r-a)/o,c=r/l,h=a/l,u=(2*Math.PI*r+n)/c,d=new Re({bleed:2,safe:3,sides:1,pose:{fold:If(Math.asin(l))},view:{closed:{az:-20,el:20}},meta:{noOpen:!0,closedLabel:"Rolled"}}),f=0,m=0,_=Cf(h,c,u,f,m,80);d.rootPoly("wrap",_,{name:s==="cup"?"Cup wrap":"Sleeve",nameIn:"Inside",cover:!0});let p=Math.min(..._.map(b=>b[1])),g=Math.min(..._.map(b=>b[0]));d.finish();let v=-g,M=-p,y=Math.asin(l),T=Pf({cx:f+v,cy:m+M,beta:y});return d.warp={nu:96,nv:12,grid:(b,x)=>{let w=-u/2+b*u,I=h+(c-h)*x;return[f+v+Math.sin(w)*I,m+M+Math.cos(w)*I]},deform:(b,x,w)=>{let I=sr(ir(w));return T(b,x,I)},prop(){let b=new nt,x=new Qe({color:"#f4f2ea",roughness:.7,side:nn}),w=new C(0,-Math.cos(y),-Math.sin(y)),I=new C(v,-M,0),R=P=>I.clone().addScaledVector(w,P),N=new ut().setFromUnitVectors(new C(0,0,1),w),U=new Ae(new un(r+.3,1.4,10,96),x);U.position.copy(R(c*Math.cos(y))),U.quaternion.copy(N),b.add(U);let k=new Ae(new zn(a,64),x);if(k.position.copy(R(h*Math.cos(y)+6)),k.quaternion.copy(N),b.add(k),s==="sleeve"){let P=t*.5,V=[],q=Q=>Q*Math.tan(y),G=h*Math.cos(y)-P*.25,te=c*Math.cos(y)+P*.7;for(let Q=0;Q<=10;Q++){let ee=G+(te-G)*Q/10;V.push(new he(q(ee)-.6,ee))}let W=new Ae(new Fs(V,64),x);W.castShadow=!0,W.quaternion.setFromUnitVectors(new C(0,1,0),w),W.position.copy(I),b.add(W),U.position.copy(R(te)),U.geometry.dispose(),U.geometry=new un(q(te),1.4,10,96),k.position.copy(R(G)),k.geometry.dispose(),k.geometry=new zn(q(G)-.6,64)}return{object:b,apply(P){b.visible=P>.97}}}},d}function Ay({h:i=210,topD:e=110}){let t=e/2,n=Math.hypot(i,t),s=t/n,r=(2*Math.PI*t+16)/n,a=new Re({bleed:3,safe:4,sides:1,pose:{fold:If(Math.asin(s))},view:{closed:{az:-22,el:16}},meta:{noOpen:!0,closedLabel:"Rolled"}}),o=Cf(0,n,r,0,0,72);a.rootPoly("cone",o,{name:"Cone",nameIn:"Inside",cover:!0});let l=Math.min(...o.map(m=>m[1])),c=Math.min(...o.map(m=>m[0]));a.finish();let h=-c,u=-l,d=Math.asin(s),f=Pf({cx:h,cy:u,beta:d});return a.warp={nu:96,nv:14,grid:(m,_)=>{let p=-r/2+m*r,g=.5+(n-.5)*_;return[h+Math.sin(p)*g,u+Math.cos(p)*g]},deform:(m,_,p)=>f(m,_,sr(ir(p))),prop(){let m=new nt,_=new Qe({color:"#2a2b30",metalness:.9,roughness:.35}),p=new C(0,-Math.cos(d),-Math.sin(d)),g=new C(h,-u,0),v=new ut().setFromUnitVectors(new C(0,0,1),p),M=n*Math.cos(d)*.62,y=M*Math.tan(d)+1,T=new Ae(new un(y,1.2,8,72),_);T.position.copy(g).addScaledVector(p,M),T.quaternion.copy(v),T.castShadow=!0,m.add(T);let b=new Ae(new un(y*1.05,1.2,8,72),_);b.position.copy(g).addScaledVector(p,-8),b.quaternion.copy(v),b.castShadow=!0,m.add(b);for(let x=0;x<3;x++){let w=x/3*Math.PI*2+.5,I=P=>new C(Math.cos(w)*P,Math.sin(w)*P,0).applyQuaternion(v),R=T.position.clone().add(I(y)),N=b.position.clone().add(I(y*1.05)),U=R.distanceTo(N),k=new Ae(new ri(1.1,1.1,U,8),_);k.position.copy(R).add(N).multiplyScalar(.5),k.quaternion.setFromUnitVectors(new C(0,1,0),R.clone().sub(N).normalize()),k.castShadow=!0,m.add(k)}return{object:m,apply(x){m.visible=x>.9},box(x){if(x<.5)return null;let w=new xt().setFromObject(b);return w.expandByObject(T),w}}}},a}function Ry({L:i,W:e,H:t}){let n=e/2,s=t/2,r=Math.PI*(3*(n+s)-Math.sqrt((3*n+s)*(n+3*s))),a=12,o=e*.2,l=r,c=i+o*2,h=new Re({bleed:3,safe:4,pose:{fold:"keep"},view:{closed:{az:-34,el:26}},meta:{noOpen:!0}}),u=48,d=p=>Math.abs(Math.sin(p/l*Math.PI*2)),f=[],m=[];for(let p=0;p<=u;p++){let g=p/u*l;f.push([g,o*(1-d(g))]),m.push([g,c-o*(1-d(g))])}let _=[...f,[l+a,o+6],[l+a,c-o-6],...m.reverse()];h.rootPoly("body",_,{name:"Body",nameIn:"Inside",cover:!0});for(let p=0;p<u;p++){let g=p/u*l,v=(p+1)/u*l;h.perf([g,o+o*d(g)],[v,o+o*d(v)],"score"),h.perf([g,c-o-o*d(g)],[v,c-o-o*d(v)],"score")}return h.finish(),h.warp={nu:120,nv:72,mask:!0,grid:(p,g)=>[p*(l+a),g*c],deform(p,g,v){let M=sr(ir(v/.62)),y=sr(ir((v-.5)/.5)),T=Math.min(p,l)/l*Math.PI*2-Math.PI/2,b=g-c/2,x=[p-l/2,-b,0],w=i/2+o*.5,I=Math.max(0,Math.abs(b)-w),R=(Math.abs(b)>w?w-I*.9:Math.abs(b))*Math.sign(b),N=Math.min(1,Math.abs(R)/w),U=1-y*(1-Math.pow(Math.max(0,1-N*N),.6)),k=I>0?1-Math.min(.4,I/o)*y:1,P=[n*Math.cos(T)*k,-R,-s*U*Math.sin(T)*k-s];return[x[0]+(P[0]-x[0])*M,x[1]+(P[1]-x[1])*M,x[2]+(P[2]-x[2])*M]}},h}var Wh={};gi(Wh,{aBoard:()=>Py,poster:()=>Cy,rollup:()=>Iy});var{clamp01:D1,smooth:Vh}=Bl;function Cy({w:i,h:e,eyelets:t=0,name:n="Poster",stand:s=!0}){let r=[];if(t){let o=Math.max(2,Math.round(i/t));for(let l=0;l<=o;l++){let c=20+(i-40)*l/o;r.push(qn(c,20,6,18),qn(c,e-20,6,18))}}let a=new Re({bleed:t?0:3,safe:t?30:5,pose:{fold:"stand",open:"stand",tilt:s?-5:0},view:{closed:{az:-26,el:8}},meta:{noOpen:!0,closedLabel:"Standing"}});return a.root("sheet",0,0,i,e,{name:n,nameIn:"Back",cover:!0,holes:r}),a.finish()}function Iy({w:i=850,h:e=2e3,tube:t=120}){let n=new Re({bleed:3,safe:25,sides:1,pose:{fold:"stand"},view:{closed:{az:-28,el:6}},meta:{noOpen:!0,closedLabel:"Standing"}});return n.root("banner",0,0,i,e,{name:"Banner",nameIn:"Back",cover:!0}),n.finish(),n.warp={nu:4,nv:96,grid:(s,r)=>[s*i,r*e],deform(s,r,a){let o=a<.5?1-Vh(a*2):Vh((a-.5)*2),l=e-r-e*(1-o);return[s,Math.max(0,l)-e,0]},prop(){let s=new nt,r=new Qe({color:"#c3c5c9",metalness:1,roughness:.3}),a=new Qe({color:"#17181b",metalness:.4,roughness:.5}),o=new Ae(new Zi(40,i+20,6,20),r);o.rotation.z=Math.PI/2,o.position.set(i/2,-e+6,0),o.castShadow=!0,s.add(o);for(let h of[-1,1]){let u=new Ae(new tn(50,12,360),a);u.position.set(i/2+h*(i/2-60),-e-34,0),u.castShadow=!0,s.add(u)}let l=new Ae(new ri(9,9,e,12),r);l.position.set(i/2,-e/2,-22),l.castShadow=!0,s.add(l);let c=new Ae(new tn(i+6,22,14),r);return c.castShadow=!0,s.add(c),{object:s,apply(h){let u=h<.5?0:Vh((h-.5)*2);s.visible=h>.02,l.scale.y=Math.max(.01,u),l.position.y=-e+e*u/2,c.position.set(i/2,-e+e*u,0)},box(h){if(h<.5)return null;let u=new xt;return u.min.set(-20,-e-42,-190),u.max.set(i+20,12,190),u}}}},n}function Py({w:i,h:e,t=22}){let s=148*Math.PI/180,r=[0,-Math.cos(s),-Math.sin(s)],a=[0,1+r[1],r[2]],o=Math.hypot(a[1],a[2]),l=[0,-a[1]/o,-a[2]/o],c=new Re({bleed:3,safe:15,pose:{fold:{up:l,face:[0,-Math.sin(s),Math.cos(s)]}},view:{closed:{az:-30,el:10}},meta:{noOpen:!0,thick:t,edge:"#b6b8bd",closedLabel:"Standing"}});return c.root("rear",0,0,i,e,{name:"Rear poster",nameIn:"Frame back"}),c.add("rear","bottom","front",{d:e,angle:148,seq:1,name:"Front poster",nameIn:"Frame back",cover:!0,bead:!1}),c.finish()}var as={cut:"#ff2d87",crease:"#16a7ff",mountain:"#ffb020",perf:"#16d67b",safe:"rgba(0, 200, 120, 0.9)",glue:"rgba(0, 81, 255, 0.10)",label:"#0051FF"};function Lf(i,e,t=7){let n=document.createElement("canvas");n.width=n.height=i;let s=n.getContext("2d"),r=s.createImageData(i,i),a=t,o=()=>(a=a*16807%2147483647,(a&65535)/65535);for(let l=0;l<r.data.length;l+=4){let c=128+(o()-.5)*e;r.data[l]=r.data[l+1]=r.data[l+2]=c,r.data[l+3]=255}return s.putImageData(r,0,0),n}function Df(i=512,e=23){let t=document.createElement("canvas");t.width=t.height=i;let n=t.getContext("2d"),s=e,r=()=>(s=s*16807%2147483647,(s&65535)/65535);n.fillStyle="#808080",n.fillRect(0,0,i,i);for(let a=0;a<70;a++){let o=r()*i,l=r()*i,c=20+r()*70,h=r()>.5;for(let u of[-i,0,i])for(let d of[-i,0,i]){let f=n.createRadialGradient(o+u,l+d,0,o+u,l+d,c);f.addColorStop(0,h?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)"),f.addColorStop(1,"rgba(128,128,128,0)"),n.fillStyle=f,n.fillRect(o+u-c,l+d-c,c*2,c*2)}}n.lineCap="round";for(let a=0;a<2600;a++){let o=r()*i,l=r()*i,c=r()*Math.PI*2,h=3+r()*r()*16,u=(r()-.5)*.9,d=Math.round(70+r()*120);n.strokeStyle=`rgba(${d},${d},${d},${.18+r()*.3})`,n.lineWidth=.5+r()*.9;for(let f of[-i,0,i])for(let m of[-i,0,i]){let _=o+f,p=l+m;_<-20||p<-20||_>i+20||p>i+20||(n.beginPath(),n.moveTo(_,p),n.quadraticCurveTo(_+Math.cos(c+u)*h*.5,p+Math.sin(c+u)*h*.5,_+Math.cos(c)*h,p+Math.sin(c)*h),n.stroke())}}return t}function Ly(i,e){let t=document.createElement("canvas");t.width=128,t.height=64;let n=t.getContext("2d");n.fillStyle="#3a2c1b",n.fillRect(0,0,128,64),n.fillStyle=e,n.fillRect(0,0,128,9),n.fillRect(0,55,128,9),n.strokeStyle=i,n.lineWidth=7,n.beginPath();for(let r=0;r<=128;r+=2){let a=32+Math.sin(r/128*Math.PI*2)*21;r===0?n.moveTo(r,a):n.lineTo(r,a)}n.stroke();let s=new hn(t);return s.wrapS=Es,s.colorSpace=yt,s.anisotropy=4,s}var Hl=class{constructor(e,t={}){this.die=e,this.stockId=t.stock,this.finishId=t.finish||"none",this.stock=ss[t.stock]||ss["silk-170"],this.maxTex=t.maxTex||4096,this.anisotropy=t.anisotropy||8,this.detail=t.detail||"blank";let n=e.bleed;this.ext={x0:-n,y0:-n,w:e.w+2*n,h:e.h+2*n},this.opts={lines:!1,safe:!1,labels:!1,...t.overlays},this.art={front:null,back:null},this.orient={},this.uvOf=(s,r)=>[(s-this.ext.x0)/this.ext.w,1-(r-this.ext.y0)/this.ext.h],this._materials(),this._resize(this.detail==="art"?this.maxTex:Math.min(this.maxTex,2048)),this._bump(),this.compose()}_resize(e){let{w:t,h:n}=this.ext,s=e/Math.max(t,n);this.pxPerMm=Math.min(s,16);let r=Math.max(64,Math.round(t*this.pxPerMm)),a=Math.max(64,Math.round(n*this.pxPerMm));if(!(this.canvas&&this.canvas.front.width===r&&this.canvas.front.height===a)){this.canvas={front:document.createElement("canvas"),back:document.createElement("canvas")},this.layer={front:document.createElement("canvas"),back:document.createElement("canvas")};for(let o of["front","back"]){this.canvas[o].width=this.layer[o].width=r,this.canvas[o].height=this.layer[o].height=a;let l=this.tex?.[o];l&&l.dispose()}this.tex={front:this._canvasTexture(this.canvas.front),back:this._canvasTexture(this.canvas.back)},this.front.map=this.tex.front,this.back.map=this.tex.back,this.front.needsUpdate=!0,this.back.needsUpdate=!0}}_canvasTexture(e){let t=new hn(e);return t.colorSpace=yt,t.anisotropy=this.anisotropy,t.generateMipmaps=!0,t.minFilter=In,t}_materials(){let e=this.stock,t=Zs[this.finishId]||Zs.none,n=t.rough??e.rough;this.front=new jt({color:16777215,roughness:n,metalness:0,clearcoat:t.clearcoat,clearcoatRoughness:.18,envMapIntensity:1}),this.back=new jt({color:16777215,roughness:Math.max(e.rough,.6),metalness:0}),this.edge=new Qe({color:e.dark?"#26262a":e.core||e.color,roughness:.85}),e.kind==="corrugated"&&(this.fluteTex=Ly(e.core||"#c9a97c",e.color),this.edge.map=this.fluteTex,this.edge.color.set("#ffffff")),this.materials=[this.front,this.back,this.edge]}_bump(){let{w:e,h:t}=this.ext,n=Math.min(1536/Math.max(e,t),8),s=document.createElement("canvas");s.width=Math.max(64,Math.round(e*n)),s.height=Math.max(64,Math.round(t*n));let r=s.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s.width,s.height);let a=this.stock;if(a.felt){let c=r.createPattern(Df(512,31),"repeat");c.setTransform(new DOMMatrix().scale(Math.max(.6,n/5.5))),r.globalAlpha=.85,r.fillStyle=c,r.fillRect(0,0,s.width,s.height),r.globalAlpha=1}else(a.kind!=="board"||a.rough>.7)&&(r.globalAlpha=a.rough>.8?.55:.22,r.fillStyle=r.createPattern(Lf(256,a.rough>.8?90:40),"repeat"),r.fillRect(0,0,s.width,s.height),r.globalAlpha=1);if(r.save(),r.scale(n,n),r.translate(-this.ext.x0,-this.ext.y0),a.kind==="corrugated"){r.strokeStyle="rgba(0,0,0,0.05)",r.lineWidth=a.flute*.42;for(let c=0;c<this.die.h+10;c+=a.flute)r.beginPath(),r.moveTo(-5,c),r.lineTo(this.die.w+5,c),r.stroke()}let o=Math.max(.45,2.2/n,(a.mm||.2)*.8);r.lineCap="butt";for(let c of this.die.creases)r.strokeStyle="rgba(0,0,0,0.33)",r.lineWidth=o*2.2,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke(),r.strokeStyle="rgba(0,0,0,0.6)",r.lineWidth=o,r.beginPath(),r.moveTo(c.a[0],c.a[1]),r.lineTo(c.b[0],c.b[1]),r.stroke();r.restore(),this.bumpTex&&this.bumpTex.dispose();let l=new hn(s);l.anisotropy=4,this.bumpTex=l,this.front.bumpMap=l,this.front.bumpScale=a.felt?1.6:1.1,this.back.bumpMap=l,this.back.bumpScale=a.felt?-1.6:-1.1,this.front.needsUpdate=!0,this.back.needsUpdate=!0}setArt(e,t){if(this.art[e]=t,t&&this.detail!=="art"){this.detail="art",this._resize(this.maxTex),this.compose("front"),this.compose("back");return}this.compose(e)}setOverlays(e){Object.assign(this.opts,e),this.compose()}compose(e){if(!e){this.compose("front"),this.compose("back");return}let t=this.canvas[e],n=t.getContext("2d"),s=this.pxPerMm,r=this.stock;n.setTransform(1,0,0,1,0,0),n.globalCompositeOperation="source-over",n.globalAlpha=1,n.fillStyle=e==="back"&&r.inside?r.inside:r.color,n.fillRect(0,0,t.width,t.height),(r.kind==="kraft"||r.kind==="corrugated"&&r.multiply)&&(n.globalAlpha=.09,n.globalCompositeOperation="multiply",n.fillStyle=n.createPattern(Lf(256,150,11),"repeat"),n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="source-over",n.globalAlpha=1);let a=this.art[e];if(a){let o=this.layer[e],l=o.getContext("2d");l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,o.width,o.height),a(l,s,this.ext,e),n.globalCompositeOperation=r.multiply?"multiply":"source-over",n.drawImage(o,0,0),n.globalCompositeOperation="source-over"}if(r.felt){let o=n.createPattern(Df(512,31),"repeat");o.setTransform(new DOMMatrix().scale(Math.max(.6,s/5.5)*(this.pxPerMm/s))),n.globalCompositeOperation="multiply",n.globalAlpha=.16,n.fillStyle=o,n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="screen",n.globalAlpha=.07,n.fillRect(0,0,t.width,t.height),n.globalCompositeOperation="source-over",n.globalAlpha=1}this._overlays(n,e),this.tex[e]&&(this.tex[e].needsUpdate=!0),this.onChange?.()}_toSheet(e,t){let n=this.pxPerMm;t==="back"?e.setTransform(-n,0,0,n,this.ext.w*n+this.ext.x0*n,-this.ext.y0*n):e.setTransform(n,0,0,n,-this.ext.x0*n,-this.ext.y0*n)}_overlays(e,t){let{die:n,opts:s}=this,r=this.pxPerMm,a=Math.max(.2,1.6/r),o=this.stock.dark;if(s.lines){this._toSheet(e,t),e.lineCap="round",e.fillStyle=as.glue;for(let c of n.panels)c.role==="glue"&&(e.beginPath(),c.poly.forEach((h,u)=>u?e.lineTo(h[0],h[1]):e.moveTo(h[0],h[1])),e.closePath(),e.fill());e.setLineDash([]),e.strokeStyle=as.cut,e.lineWidth=a*1.15,e.beginPath();for(let c of n.cuts)e.moveTo(c[0][0],c[0][1]),e.lineTo(c[1][0],c[1][1]);e.stroke();let l=Math.max(1.6,5/r);for(let c of n.creases)e.setLineDash([l*1.6,l]),e.strokeStyle=c.mountain?as.mountain:as.crease,e.lineWidth=a*1.1,e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.strokeStyle=as.perf,e.setLineDash([l*.5,l*.7]);for(let c of[...n.perfs,...n.kiss])e.beginPath(),e.moveTo(c.a[0],c.a[1]),e.lineTo(c.b[0],c.b[1]),e.stroke();e.setLineDash([])}if(s.safe){this._toSheet(e,t),e.strokeStyle=as.safe,e.lineWidth=a,e.setLineDash([Math.max(1,3/r),Math.max(1,3/r)]);for(let l of n.panels){if(l.role!=="main"||l.area<300)continue;let c=l.bounds,h=n.safe;c.w<h*3||c.h<h*3||e.strokeRect(c.x0+h,c.y0+h,c.w-2*h,c.h-2*h)}e.setLineDash([])}if(s.labels){e.setTransform(1,0,0,1,0,0);let l=this.ext.w;for(let c of n.panels){if(c.role==="hidden")continue;let h=c.bounds;if(Math.min(h.w,h.h)<8)continue;let u=t==="back"?l-(c.centroid[0]-this.ext.x0):c.centroid[0]-this.ext.x0,d=c.centroid[1]-this.ext.y0,f=t==="back"&&c.nameIn||c.name||"",m=this.orient[c.id]?.[t]||0,p=m%180===0?h.w:h.h,g=Math.min(Math.max(2.4,Math.min(h.w,h.h)*.075),p/Math.max(4,f.length*.62));e.save(),e.translate(u*r,d*r),e.rotate(m*Math.PI/180),e.font=`500 ${g*r}px Outfit, Figtree, Arial, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=o?"#ffffff":c.role==="glue"?"#7a8aa8":as.label,e.globalAlpha=c.role==="main"?.9:.6,e.fillText(f.toUpperCase(),0,0),e.restore()}}e.setTransform(1,0,0,1,0,0)}dispose(){this.tex?.front.dispose(),this.tex?.back.dispose(),this.bumpTex?.dispose(),this.fluteTex?.dispose(),this.front.dispose(),this.back.dispose(),this.edge.dispose()}};var ma=Math.PI/180,qh=7,Gl=new Oe,Nf=new Oe,Ff=new Oe,os=new ut,fi=new C,Vl=new C;function Dy(i,e){let t=i.map(a=>new he(a[0],a[1])),n=(e||[]).map(a=>a.map(o=>new he(o[0],o[1])));Ai.isClockWise(t)&&t.reverse();for(let a of n)Ai.isClockWise(a)||a.reverse();let s=Ai.triangulateShape(t,n),r=[...t];for(let a of n)r.push(...a);return{pts:r,tris:s}}function Ny(i,e,t,n=8){let{pts:s,tris:r}=Dy(i.poly,i.holes),a=-(i.zOff||0),o=[],l=[],c=[],h=[],u=[],d=[],f=s.length;for(let g of s){o.push(g.x,-g.y,a),l.push(0,0,1);let[v,M]=t(g.x,g.y);c.push(v,M)}for(let g of s){o.push(g.x,-g.y,a-e),l.push(0,0,-1);let[v,M]=t(g.x,g.y);c.push(1-v,M)}for(let g of r){let[v,M,y]=g,T=s[v].x,b=-s[v].y;(s[M].x-T)*(-s[y].y-b)-(-s[M].y-b)*(s[y].x-T)<0&&([M,y]=[y,M]),h.push(v,M,y),u.push(y+f,M+f,v+f)}let m=g=>{let v=0,y=Ai.area(g.map(T=>new he(T[0],-T[1])))>=0?1:-1;for(let T=0;T<g.length;T++){let b=g[T],x=g[(T+1)%g.length],w=x[0]-b[0],I=-(x[1]-b[1]),R=Math.hypot(w,I);if(R<1e-6)continue;let N=I/R*y,U=-w/R*y,k=o.length/3;o.push(b[0],-b[1],a,x[0],-x[1],a,x[0],-x[1],a-e,b[0],-b[1],a-e);for(let q=0;q<4;q++)l.push(N,U,0);let P=v/n,V=(v+R)/n;c.push(P,1,V,1,V,0,P,0),v+=R,y>0?d.push(k,k+3,k+2,k,k+2,k+1):d.push(k,k+2,k+3,k,k+1,k+2)}};m(i.poly);for(let g of i.holes||[])m(g);let _=new bt;_.setAttribute("position",new Ye(o,3)),_.setAttribute("normal",new Ye(l,3)),_.setAttribute("uv",new Ye(c,2));let p=[...h,...u,...d];return _.setIndex(p),_.addGroup(0,h.length,0),_.addGroup(h.length,u.length,1),_.addGroup(h.length+u.length,d.length,2),_.computeBoundingSphere(),_}var Wl=class{constructor(e,{thickness:t,materials:n,uvOf:s,flute:r,leafMaterials:a,leafT:o}){this.kind="fold",this.die=e,this.t=t,this.materials=n,this.uvOf=s,this.object=new nt,this.object.name="fold-model",this.nodes=[],this.byId={},this.pickables=[],this.flute=r,this.channels=[],this.leafMaterials=a,this.leafT=o,this.outlineMat=new Ds({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}),this._build(),this.apply(this.vector("flat"))}_build(){let{die:e,t}=this;for(let n of e.panels){let s=new nt;s.matrixAutoUpdate=!1;let r=n.parent?this.byId[n.parent]:null;(r?r.group:this.object).add(s);let a=n.uvRect?(d,f)=>[(d-n.uvRect.x)/n.uvRect.w,1-(f-n.uvRect.y)/n.uvRect.h]:this.uvOf,o=n.role==="leaf"&&!n.coverLeaf&&this.leafMaterials?this.leafMaterials(n):this.materials,l=n.role==="leaf"&&this.leafT?this.leafT:t,c=new Ae(Ny(n,l,a,this.flute?this.flute:8),o);c.castShadow=!0,c.receiveShadow=!0,c.userData.panel=n.id,s.add(c),this.pickables.push(c),n.outline?.length&&s.add(this._outline(n));let h={panel:n,group:s,mesh:c,parent:r,angle:0,world:new Oe};this.nodes.push(h),this.byId[n.id]=h,n.hinge&&this._hinge(h),n.mount&&this._mount(h);let u=Math.max(1,Math.floor(n.poly.length/14));h.sample=n.poly.filter((d,f)=>f%u===0).map(d=>new C(d[0],-d[1],0))}this.steps=[...new Set(e.panels.filter(n=>n.seq).map(n=>n.seq))].sort((n,s)=>n-s)}_outline(e){let t=Math.max(.04,this.t*.2),n=[];for(let[r,a]of e.outline)n.push(r[0],-r[1],t,a[0],-a[1],t),n.push(r[0],-r[1],-this.t-t,a[0],-a[1],-this.t-t);let s=new bt;return s.setAttribute("position",new Ye(n,3)),new Rr(s,this.outlineMat)}_hinge(e){let{t}=this,n=e.panel,s=new C(n.hinge.a[0],-n.hinge.a[1],0),r=new C(n.hinge.b[0],-n.hinge.b[1],0),a=r.clone().sub(s).normalize(),o=new C(n.centroid[0],-n.centroid[1],0).sub(s);new C().crossVectors(a,o).z>0&&a.negate();let l=n.valley??(n.angle??0)>=0,c=(n.gap||0)*t+(n.lift||0),h=n.pivotZ!==void 0?n.pivotZ:l?-t-c/2:c/2,u=s.clone();if(u.z=h,e.axis=a,e.pivot=u,e.valley=l,e.A=s,e.B=r,e.pre=new Oe().makeTranslation(u.x,u.y,u.z),e.post=new Oe().makeTranslation(-u.x,-u.y,-u.z),n.bead===!1||n.perfed)return;let d=this._bead(e);d&&(e.parent?e.parent.group:this.object).add(d)}_bead(e){let t=qh,n=t+1,s=n*2*2+8,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*2),l=[],c=[],h=[];for(let T=0;T<t;T++){let b=T*2;l.push(b,b+2,b+3,b,b+3,b+1);let x=n*2+T*2;c.push(x,x+3,x+2,x,x+1,x+3)}let u=new bt;u.setAttribute("position",new Rt(r,3)),u.setAttribute("normal",new Rt(a,3)),u.setAttribute("uv",new Rt(o,2)),u.setIndex([...l,...c,...h]);let d=e.valley?0:1,f=e.valley?1:0;u.addGroup(0,l.length,d),u.addGroup(l.length,c.length,f);let m=new Ae(u,this.materials);m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!1,m.matrixAutoUpdate=!1,m.visible=!1,e.bead=m;let _=e.panel,[p,g]=this.uvOf(_.hinge.a[0],_.hinge.a[1]),[v,M]=this.uvOf(_.hinge.b[0],_.hinge.b[1]),y=(T,b,x)=>{for(let w=0;w<n;w++){let I=T+w*2;o[I*2]=b?1-p:p,o[I*2+1]=g,o[(I+1)*2]=b?1-v:v,o[(I+1)*2+1]=M}};return y(0,!e.valley),y(n*2,e.valley),m}_updateBead(e,t){let n=e.bead;if(!n)return;if(Math.abs(t)<.05||this.t<.02){n.visible=!1;return}n.visible=!0;let{t:s}=this,{A:r,B:a,pivot:o,axis:l,valley:c}=e,h=t*ma,u=n.geometry,d=u.attributes.position.array,f=u.attributes.normal.array,m=qh+1,_=c?1:-1,p=c?0:-s,g=c?-s:0,v=p-o.z,M=g-o.z,y=(T,b,x)=>{for(let w=0;w<m;w++){let I=h*w/qh;os.setFromAxisAngle(l,I),fi.set(0,0,b).applyQuaternion(os),Vl.set(0,0,_*x).applyQuaternion(os);let R=T+w*2;d[R*3]=r.x+fi.x,d[R*3+1]=r.y+fi.y,d[R*3+2]=o.z+fi.z,d[(R+1)*3]=a.x+fi.x,d[(R+1)*3+1]=a.y+fi.y,d[(R+1)*3+2]=o.z+fi.z,f[R*3]=f[(R+1)*3]=Vl.x,f[R*3+1]=f[(R+1)*3+1]=Vl.y,f[R*3+2]=f[(R+1)*3+2]=Vl.z}};y(0,v,1),y(m*2,M,-1),u.attributes.position.needsUpdate=!0,u.attributes.normal.needsUpdate=!0}_mount(e){let t=e.panel,n=t.mount;e.mountTo={pos:new C(...n.pos||[0,0,0]),q:new ut().setFromEuler(new en((n.rot?.[0]||0)*ma,(n.rot?.[1]||0)*ma,(n.rot?.[2]||0)*ma)),center:new C(...n.center||[t.centroid[0],-t.centroid[1],0]),arc:n.arc||0,slide:n.slide?new C(...n.slide):null}}vector(e){return[...this.nodes.map(n=>{let s=n.panel;return s.mount?e==="flat"||e==="inside"?0:e==="open"&&s.mount.openAt!==void 0?s.mount.openAt:1:!s.hinge||e==="flat"||e==="inside"?0:e==="open"?s.open??s.angle:s.angle}),...this.channels.map(n=>n.value(e))]}windows(e,t,n){let s=new Set,r=[...this.nodes.map(h=>h.panel.seq||1),...this.channels.map(h=>h.seq||1)];r.forEach((h,u)=>{Math.abs(e[u]-t[u])>.01&&s.add(h)});let a=[...s].sort((h,u)=>n>0?h-u:u-h),o=Math.max(1,a.length),l=o===1?1:Math.min(1,1.5/o),c=h=>o===1?0:h*(1-l)/(o-1);return{steps:o,list:r.map(h=>{let u=a.indexOf(h);return u<0?[0,1]:[c(u),c(u)+l]})}}apply(e){this.vec=e;for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t],s=e[t];if(n.axis)os.setFromAxisAngle(n.axis,s*ma),Gl.makeRotationFromQuaternion(os),n.group.matrix.copy(n.pre).multiply(Gl).multiply(n.post),n.group.matrixWorldNeedsUpdate=!0,this._updateBead(n,s);else if(n.mountTo){let r=n.mountTo,a=r.center,o=r.slide?Math.min(1,s/.55):s,l=r.slide?Math.max(0,(s-.55)/.45):0;os.identity().slerp(r.q,o),Gl.makeRotationFromQuaternion(os),Nf.makeTranslation(-a.x,-a.y,-a.z);let c=Math.sin(Math.PI*o)*r.arc,h=r.slide?r.slide.x*(1-l):0,u=r.slide?r.slide.y*(1-l):0,d=r.slide?r.slide.z*(1-l):0,f=ns.lerp(a.x,r.pos.x+h,o),m=ns.lerp(a.y,r.pos.y+u,o),_=ns.lerp(a.z,r.pos.z+d,o)-c;Ff.makeTranslation(f,m,_),n.group.matrix.copy(Ff).multiply(Gl).multiply(Nf),n.group.matrixWorldNeedsUpdate=!0}}this.channels.forEach((t,n)=>t.apply(e[this.nodes.length+n]))}bounds(e){let t=this.vec;this.apply(e);let n=new xt,s=this.t;for(let r of this.nodes){r.world.copy(r.group.matrix),r.parent&&r.world.premultiply(r.parent.world);let a=-(r.panel.zOff||0);for(let o of r.sample)for(let l of[a,a-s])fi.set(o.x,o.y,l).applyMatrix4(r.world),n.expandByPoint(fi)}for(let r of this.extraBounds||[])n.union(r(e));return this.apply(t),n}panelMatrix(e,t){let n=this.vec;this.apply(t);let s=[],r=this.byId[e];for(;r;)s.unshift(r),r=r.parent;let a=new Oe;for(let o of s)a.multiply(o.group.matrix);return this.apply(n),a}dispose(){this.object.traverse(e=>{e.geometry&&e.geometry.dispose()})}};var Uf=()=>new Qe({color:"#c9cacd",metalness:1,roughness:.32}),ga=i=>i==="flat"||i==="inside"?0:1;function kf(i,e,t,n=80){let s=new Ti(i,!1,"catmullrom",.5),r=new Ae(new Ki(s,n,e,8,!1),t);return r.castShadow=!0,r}function Of(i,e,t){let n=i.t,s=i.nodes[0];for(let r of e.extras){let a=r.panel?i.byId[r.panel]:s;if(r.type==="stack"){let o=new nt;a.group.add(o);let l=s.panel.centroid,c=[],h=4,u=()=>(h=h*16807%2147483647,h%2e3/1e3-1);for(let m=0;m<r.count;m++){let _=new Ae(s.mesh.geometry,i.materials);_.castShadow=!0,_.receiveShadow=!0;let p=new nt;p.position.set(l[0],-l[1],0),_.position.set(-l[0],l[1],0),p.add(_),o.add(p),c.push({piv:p,dx:u()*r.spread,dy:u()*r.spread,rz:u()*.022,i:m})}let d=Math.max(n*1.02,.01),f=i.channels.length;i.channels.push({seq:1,value:ga,apply(m){o.visible=m>.01;for(let _ of c)_.piv.position.set(l[0]+_.dx*m,-l[1]+_.dy*m,-(_.i+1)*d),_.piv.rotation.z=_.rz*m}}),i.extraBounds=i.extraBounds||[],i.extraBounds.push(m=>{let _=m[i.nodes.length+f]??0,p=new xt;return p.min.set(0,-e.h,-(r.count+1)*d*(_>.01?1:0)),p.max.set(e.w,0,0),p})}else if(r.type==="string"){let[o,l]=r.at,c=r.len,h=new Qe({color:r.color||"#d8cdb8",roughness:.9}),u=.6,d=[[o,-l,-n-.2],[o,-l,u],[o+c*.1,-l+c*.12,u+.2],[o+c*.34,-l+c*.42,u+.3],[o+c*.3,-l+c*.66,u+.3],[o+c*.02,-l+c*.62,u+.3],[o-c*.2,-l+c*.44,u+.25],[o-c*.06,-l+c*.14,u+.2],[o,-l,u]].map(m=>new C(...m)),f=kf(d,Math.max(.35,c*.005),h);a.group.add(f),i.channels.push({seq:1,value:ga,apply:m=>f.visible=m>.5})}else if(r.type==="rope"){let l=a.panel.bounds,c=l.x0+l.w/2,h=-l.y0,u=r.span/2,d=r.radius||Math.max(1.8,r.width*.0075),f=new Qe({color:r.color||"#1b1b1d",roughness:.8}),m=2,_=r.tilt??0,p=[[c-u,h-34,m*0-n-1],[c-u,h-18,m],[c-u*1.02,h+r.drop*.34,m+_*.4],[c-u*.72,h+r.drop*.82,m+_*.8],[c,h+r.drop,m+_],[c+u*.72,h+r.drop*.82,m+_*.8],[c+u*1.02,h+r.drop*.34,m+_*.4],[c+u,h-18,m],[c+u,h-34,-n-1]].map(y=>new C(...y)),g=kf(p,d,f,96),v=new nt;v.position.set(c,h,0),g.position.set(-c,-h,0),v.add(g),a.group.add(v);let M=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(y=>{let T=new xt;return(y[i.nodes.length+M]??0)>.5&&(T.min.set(c-u,h,-2),T.max.set(c+u,h+r.drop,2)),T});for(let y of[-u,u]){let T=new Ae(new un(d*1.9,d*.5,10,28),Uf());T.position.set(c+y,h-26,.5),a.group.add(T)}i.channels.push({seq:8,value:ga,apply(y){v.visible=y>.02,v.scale.set(1,Math.max(.02,y),1)}})}else if(r.type==="film"){let o=r.rect,l=new ai(o.w+6,o.h+6),c=new Ae(l,new jt({color:"#ffffff",transparent:!0,opacity:.22,roughness:.12,side:nn,depthWrite:!1}));c.position.set(o.x+o.w/2,-(o.y+o.h/2),-n-.03),a.group.add(c)}else if(r.type==="staples"){let o=Uf();for(let l of r.ys){let c=new Zi(.28,r.len,4,8),h=new Ae(c,o);h.position.set(r.x,-l,.08),h.castShadow=!0,a.group.add(h)}}else if(r.type==="wire"){let o=new Qe({color:r.color||"#16161a",metalness:.8,roughness:.35}),[l,c]=r.a,[h,u]=r.b,d=Math.max(2,Math.floor(Math.hypot(h-l,u-c)/r.pitch)),f=r.r,m=new un(f,Math.max(.32,f*.075),8,32),_=new Yi(m,o,d*2),p=new Et,g=Math.abs(u-c)<Math.abs(h-l);for(let v=0;v<d;v++){let M=(v+.5)/d;for(let y=0;y<2;y++){let T=y?r.pitch*.16:-r.pitch*.16;p.position.set(l+(h-l)*M+(g?T:0)+(r.ox||0),-(c+(u-c)*M+(g?0:T)+(r.oy||0)),r.z??-r.h/2),p.rotation.set(0,g?Math.PI/2:0,0),p.rotation.set(g?0:Math.PI/2,g?Math.PI/2:0,0),p.updateMatrix(),_.setMatrixAt(v*2+y,p.matrix)}}_.castShadow=!0,_.frustumCulled=!1,a.group.add(_),i.channels.push({seq:1,value:r.always?()=>1:ga,apply:v=>_.visible=v>.5})}else if(r.type==="block"){let o=new Ae(new tn(r.size[0],r.size[1],r.size[2]),new Qe({color:r.color||"#d8d4ca",roughness:.75}));o.castShadow=!0,o.position.set(r.pos[0],r.pos[1],r.pos[2]),a.group.add(o);let l=i.channels.length;i.extraBounds=i.extraBounds||[],i.extraBounds.push(c=>{let h=new xt;return(c[i.nodes.length+l]??0)>.5&&(h.min.set(r.pos[0]-r.size[0]/2,r.pos[1]-r.size[1]/2,r.pos[2]-r.size[2]/2),h.max.set(r.pos[0]+r.size[0]/2,r.pos[1]+r.size[1]/2,r.pos[2]+r.size[2]/2)),h}),i.channels.push({seq:r.seq||3,value:ga,apply(c){o.visible=c>.01,o.position.x=r.pos[0]+(1-c)*(r.size[0]*1.2)}})}else if(r.type==="insert"){let l=a.panel.bounds,c=new Ae(new tn(r.size[0],r.size[1],Math.max(.3,n)),new Qe({color:"#fbfaf6",roughness:.65}));c.castShadow=!0,c.receiveShadow=!0;let h=l.x0+l.w/2,u=-(l.y0+l.h/2);c.position.set(h,u,-n-(r.z??.4)),a.group.add(c),i.channels.push({seq:9,value:d=>d==="open"?1:0,apply(d){c.visible=d>.01,c.position.y=u-(r.at==="pocket"?(l.h-r.size[1])/2*(1-d)*-1+(l.h-r.size[1])/2:0)+(r.rise||0)*d}})}else r.type==="custom"&&r.build(i,a,t)}}var Fy={...Nh,...Fh,...kh,...Oh,...Bh,...Hh,...Gh,...Wh};function Uy(i,e){return i.sizes.find(t=>t.id===e)||i.sizes.find(t=>t.id===i.def)||i.sizes[0]}function Xl(i,e,t={}){let n=Cl[i];if(!n)throw new Error(`Unknown format ${i}`);let s=Uy(n,e),r=t.stock&&n.stocks.includes(t.stock)?t.stock:n.stocks[0],a=ss[r],o=t.finish&&n.finishes.includes(t.finish)?t.finish:n.finishes[0],l={...s.p};n.pageOptions&&(l.pages=t.pages&&n.pageOptions.includes(+t.pages)?+t.pages:n.defPages),"L"in l&&l.t===void 0&&(l.t=a.mm);let c=Fy[n.tpl];if(!c)throw new Error(`Unknown template ${n.tpl}`);let h=c(l);return{format:n,size:s,stockId:r,finishId:o,stock:a,die:h,params:l}}var ql=class{constructor(){this.edge=new Qe({color:"#efece4",roughness:.9}),this.pages=new Map,this.textures=new Map,this.blank=new Qe({color:"#fbfaf6",roughness:.72})}material(e){return e?(this.pages.has(e)||this.pages.set(e,new Qe({color:"#fbfaf6",roughness:.72})),this.pages.get(e)):this.blank}setPage(e,t){let n=this.material(e),s=this.textures.get(e);if(s&&s.dispose(),!t)n.map=null,n.color.set("#fbfaf6");else{let r=new hn(t);r.colorSpace=yt,r.anisotropy=8,this.textures.set(e,r),n.map=r,n.color.set("#ffffff")}n.needsUpdate=!0}dispose(){for(let e of this.textures.values())e.dispose();for(let e of this.pages.values())e.dispose();this.edge.dispose(),this.blank.dispose()}};function Bf(i,{surface:e,pages:t}){let{die:n,stock:s}=i,r=Math.max(n.meta.thick||0,s.mm,Math.max(n.w,n.h)*28e-5);if(n.meta.edge&&e.edge.color.set(n.meta.edge),n.warp)return new Ol(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,surface:e});let a=n.meta.leafT,o=new Wl(n,{thickness:r,materials:e.materials,uvOf:e.uvOf,flute:s.flute,leafT:a,leafMaterials:l=>[t.material(l.pageFront),t.material(l.pageBack),t.edge]});return Of(o,n,e),o.apply(o.vector("flat")),o}function zf(i,e={}){return new Hl(i.die,{stock:i.stockId,finish:i.finishId,...e})}function Hf(i,e,t){let n={};if(!e.panelMatrix){for(let l of t.panels)n[l.id]={front:0,back:0};return n}let s=i._info("closed"),r=new Oe().makeRotationFromQuaternion(s.q),a=new C,o=new C;for(let l of t.panels){let c=e.panelMatrix(l.id,s.vec),h=new Oe().multiplyMatrices(r,c),u={};for(let d of["front","back"]){a.set(0,0,d==="front"?1:-1).transformDirection(h);let f=Math.abs(a.y)>.72?new C(0,0,-1):new C(0,1,0),m=0,_=-1/0;for(let p of[0,90,180,270]){let g=p*Math.PI/180,v=d==="front"?Math.sin(g):-Math.sin(g);o.set(v,Math.cos(g),0).transformDirection(h);let M=o.dot(f);M>_+1e-6&&(_=M,m=p)}u[d]=m}n[l.id]=u}return n}var ky="#0b0f1a",Oy="#0051FF";function By(i,e,t,n,s){let r=s;i.font=`${t} ${r}px Outfit, Figtree, Arial, sans-serif`;let a=i.measureText(e).width;return a>n&&(r*=n/a),r}function Xh(i,e,t,n,s,r){let a=e.bounds,o=(r?t.w-(a.x0+a.w/2-t.x0):a.x0+a.w/2-t.x0)*n,l=(a.y0+a.h/2-t.y0)*n;i.setTransform(1,0,0,1,0,0),i.translate(o,l),i.rotate(s*Math.PI/180);let c=s%180!==0;return{W:(c?a.h:a.w)*n,H:(c?a.w:a.h)*n}}function Gf(i,e,t="OK DESIGN"){return{front:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0);let h=r.createLinearGradient(0,0,l,c);h.addColorStop(0,"#02040c"),h.addColorStop(.55,"#031235"),h.addColorStop(1,"#000000"),r.fillStyle=h,r.fillRect(0,0,l,c);let u=(p,g,v,M)=>{let y=r.createRadialGradient(p,g,0,p,g,v);y.addColorStop(0,M),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(0,0,l,c)},d=Math.max(l,c);u(l*.82,c*.22,d*.62,"rgba(0,81,255,0.95)"),u(l*.12,c*.92,d*.52,"rgba(120,140,190,0.55)"),u(l*.5,c*.5,d*.3,"rgba(0,40,160,0.5)");let f=i.panels.filter(p=>p.role==="main"&&p.bounds),m=f.filter(p=>p.cover),_=m.length?m:f.slice().sort((p,g)=>g.area-p.area).slice(0,1);for(let p of _){let g=e[p.id]?.front||0,v=Xh(r,p,o,a,g,!1);r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let M=By(r,t,800,v.W*.72,v.H*.2);r.font=`800 ${M}px Outfit, Figtree, Arial, sans-serif`,r.fillText(t,0,-M*.1);let y="Full-stack design studio",T=Math.max(M*.17,2*a);r.font=`500 ${T}px Outfit, Figtree, Arial, sans-serif`,r.globalAlpha=.72,r.fillText(y,0,M*.72),r.globalAlpha=1}for(let p of f){if(_.includes(p)||p.area<900)continue;let g=e[p.id]?.front||0,v=Xh(r,p,o,a,g,!1);r.fillStyle="rgba(255,255,255,0.78)",r.textAlign="center",r.textBaseline="middle";let M=Math.min(v.W,v.H)*.05;r.font=`600 ${M}px Outfit, Figtree, Arial, sans-serif`,r.fillText("okdesign.cc",0,0)}r.setTransform(1,0,0,1,0,0)},back:(r,a,o)=>{let l=o.w*a,c=o.h*a;r.setTransform(1,0,0,1,0,0),r.fillStyle="#f7f6f2",r.fillRect(0,0,l,c);let h=i.panels.filter(u=>u.role==="main"&&u.area>1200&&u.bounds);for(let u of h){let d=e[u.id]?.back||0,f=Xh(r,u,o,a,d,!0),m=Math.min(f.W,f.H)*.12,_=-f.W/2+m,p=-f.H/2+m,g=f.W-2*m;r.fillStyle=Oy,r.textAlign="left",r.textBaseline="top";let v=Math.min(f.W,f.H)*.085;r.font=`700 ${v}px Outfit, Figtree, Arial, sans-serif`,r.fillText((u.nameIn||"Inside").slice(0,24),_,p),r.fillStyle=ky,r.globalAlpha=.13;let M=v*.72,y=p+v*1.8,T=0;for(;y<f.H/2-m;){let b=g*(T%5===4?.55:T%3===2?.86:.97);r.fillRect(_,y,b,M*.34),y+=M,T++}r.globalAlpha=1}r.setTransform(1,0,0,1,0,0)}}}var rr=.35277777777777775,zy=40;function Hy(){let i=document.querySelector('script[src*="print-lab.js"]');return i?new URL(".",i.src).href:"assets/print-lab/"}function Vf(i){return new Promise((e,t)=>{let n=document.createElement("script");n.src=i,n.onload=e,n.onerror=()=>t(new Error(`Could not load ${i}`)),document.head.appendChild(n)})}var $l=null;function Gy(){if($l)return $l;let i=Hy();return $l=(async()=>{await Vf(`${i}vendor/pdf.min.js`);let e=window.pdfjsLib;return location.protocol==="file:"?await Vf(`${i}vendor/pdf.worker.min.js`):e.GlobalWorkerOptions.workerSrc=`${i}vendor/pdf.worker.min.js`,e})(),$l}function Vy(i){let e=i.length>4e6?i.subarray(0,4e6):i,t=new TextDecoder("latin1").decode(e),n=/\/TrimBox\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*\]/.exec(t);if(!n)return null;let[s,r,a,o]=n.slice(1).map(Number);return{x0:s,y0:r,x1:a,y1:o}}function Wf(i,e){return{source:i,w:i.width,h:i.height,mmW:null,mmH:null,name:e}}async function Wy(i){if(/svg/.test(i.type)||/\.svg$/i.test(i.name)){let n=await i.text(),s=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"})),r=new Image;await new Promise((h,u)=>{r.onload=h,r.onerror=()=>u(new Error("This SVG could not be read.")),r.src=s});let a=3e3/Math.max(r.naturalWidth||1e3,r.naturalHeight||1e3),o=document.createElement("canvas");o.width=Math.round((r.naturalWidth||1e3)*a),o.height=Math.round((r.naturalHeight||1e3)*a),o.getContext("2d").drawImage(r,0,0,o.width,o.height),URL.revokeObjectURL(s);let l=/<svg[^>]*\swidth="([\d.]+)mm"[^>]*\sheight="([\d.]+)mm"/.exec(n),c=Wf(o,i.name);return l&&(c.mmW=+l[1],c.mmH=+l[2]),{kind:"svg",name:i.name,pages:[c]}}let t=await createImageBitmap(i);return{kind:"image",name:i.name,pages:[Wf(t,i.name)]}}async function qy(i,{maxSide:e=4096,onProgress:t}={}){let n=await Gy(),s=new Uint8Array(await i.arrayBuffer()),r=Vy(s),a=await n.getDocument({data:s.slice()}).promise,o=[],l=Math.min(a.numPages,zy);for(let c=1;c<=l;c++){let h=await a.getPage(c),u=h.getViewport({scale:1}),d=c<=2||c===l?e:Math.min(e,1800),f=Math.min(d/Math.max(u.width,u.height),300/72),m=h.getViewport({scale:f}),_=document.createElement("canvas");_.width=Math.ceil(m.width),_.height=Math.ceil(m.height),await h.render({canvasContext:_.getContext("2d"),viewport:m,background:"rgb(255,255,255)"}).promise;let p={source:_,w:_.width,h:_.height,mmW:u.width*rr,mmH:u.height*rr,name:`${i.name} p.${c}`};if(r){let[g,v,M,y]=h.view;p.trim={w:(r.x1-r.x0)*rr,h:(r.y1-r.y0)*rr,cx:((r.x0+r.x1)/2-(g+M)/2)*rr,cy:((r.y0+r.y1)/2-(v+y)/2)*rr}}o.push(p),t?.(c,l)}return{kind:"pdf",name:i.name,pages:o,total:a.numPages}}async function qf(i,e){if(/pdf/.test(i.type)||/\.pdf$/i.test(i.name))return qy(i,e);if(/^image\//.test(i.type)||/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(i.name))return Wy(i);throw new Error(`${i.name} is not a PDF or image.`)}function $h(i,e,t){let n=t.w,s=t.h,r=(f,m,_=1.5)=>Math.abs(f-m)<=_,a={page:i,cx:e.w/2,cy:e.h/2,rot:0,fit:"bleed",mirror:!1},o=f=>{a.mmPerPx=f};if(i.mmW){let f=i.mmW/i.w,m=!r(i.mmW,e.w,8)&&r(i.mmH,e.w,8)&&r(i.mmW,e.h,8);m&&(a.rot=90);let _=m?i.mmH:i.mmW,p=m?i.mmW:i.mmH;if(i.trim&&r(i.trim.w,n,2)&&r(i.trim.h,s,2))return o(f),a.cx-=i.trim.cx,a.cy+=i.trim.cy,a.fit="trimbox",a;if(r(_,e.w)&&r(p,e.h))return o(f),a.fit="bleed",a;if(r(_,n)&&r(p,s))return o(f),a.fit="trim",a;if(_>=e.w&&p>=e.h)return o(f),a.fit="marks",a}let l=a.rot?i.h:i.w,c=a.rot?i.w:i.h,h=l/c,u=e.w/e.h,d=n/s;return Math.abs(h/d-1)<Math.abs(h/u-1)*.8?(o(Math.max(n/l,s/c)),a.fit="trim"):(o(Math.max(e.w/l,e.h/c)),a.fit="bleed"),a}function Yh(i,e,t,n){let s=i.rot%180!==0,r=s?i.page.h:i.page.w,a=s?i.page.w:i.page.h;i.cx=t.w/2,i.cy=t.h/2,e==="bleed"&&(i.mmPerPx=Math.max(t.w/r,t.h/a)),e==="trim"&&(i.mmPerPx=Math.max(n.w/r,n.h/a)),e==="contain"&&(i.mmPerPx=Math.min(t.w/r,t.h/a)),e==="actual"&&i.page.mmW&&(i.mmPerPx=i.page.mmW/i.page.w),i.fit=e}function Xf(i,e,t){let{page:n}=t;i.setTransform(e,0,0,e,0,0),i.translate(t.cx,t.cy),i.rotate(t.rot*Math.PI/180),i.scale(t.mmPerPx,t.mmPerPx),i.imageSmoothingQuality="high",i.drawImage(n.source,-n.w/2,-n.h/2,n.w,n.h),i.setTransform(1,0,0,1,0,0)}function $f(i,e,t,n,s,r,a){let o=s.byId[n.panel];if(!o)return;let l=a==="back",c=p=>(l?t.w-(p-t.x0):p-t.x0)*e,h=p=>(p-t.y0)*e;i.save(),i.setTransform(1,0,0,1,0,0),i.beginPath(),o.poly.forEach((p,g)=>g?i.lineTo(c(p[0]),h(p[1])):i.moveTo(c(p[0]),h(p[1]))),i.closePath(),i.clip();let u=o.bounds,d=r[o.id]?.[a]||0;i.translate(c(u.x0+u.w/2),h(u.y0+u.h/2)),i.rotate(d*Math.PI/180);let f=(d%180?u.h:u.w)*e,m=(d%180?u.w:u.h)*e,_=Math.max(f/n.page.w,m/n.page.h);i.imageSmoothingQuality="high",i.drawImage(n.page.source,-n.page.w*_/2,-n.page.h*_/2,n.page.w*_,n.page.h*_),i.restore()}function Yf(i,e,t){let n=[],{page:s}=i,r=s.w*i.mmPerPx,a=Math.round(s.w/r*25.4);a>=280?n.push({level:"ok",text:`Resolution ${a} ppi at this size`}):a>=170?n.push({level:"warn",text:`Resolution ${a} ppi, usable but below the 300 ppi target`}):n.push({level:"bad",text:`Resolution ${a} ppi, too low for print`});let o=i.rot%180!==0,l=(o?s.h:s.w)*i.mmPerPx,c=(o?s.w:s.h)*i.mmPerPx,h=i.cx-l/2,u=i.cx+l/2,d=i.cy-c/2,f=i.cy+c/2,m=.3,_=h<=m&&d<=m&&u>=e.w-m&&f>=e.h-m,p=t.bleed,g=h<=p+m&&d<=p+m&&u>=e.w-p-m&&f>=e.h-p-m;if(_?n.push({level:"ok",text:`Covers the ${p} mm bleed`}):g?n.push({level:"warn",text:`Reaches the trim but has no ${p} mm bleed`}):n.push({level:"bad",text:"Does not cover the whole sheet"}),s.mmW){let v={trimbox:"Trim box matched, crop marks ignored",bleed:"Page size matches sheet + bleed",trim:"Page size matches the trim size",marks:"Larger page: centred at real size"};n.push({level:v[i.fit]?"ok":"warn",text:v[i.fit]||`Page is ${Ks(s.mmW,s.mmH)} mm, sheet needs ${Ks(e.w,e.h)} mm`})}else{let v=(o?s.h/s.w:s.w/s.h)/(e.w/e.h);Math.abs(v-1)>.03&&n.push({level:"warn",text:"Image proportions differ from the sheet, parts get cropped"})}return n}var Yn=18,Zf={bleed:{label:"Bleed",stroke:"#16d67b"},cut:{label:"Cut",stroke:"#ff2d87"},fold:{label:"Fold (valley)",stroke:"#16a7ff"},mountain:{label:"Fold (mountain)",stroke:"#ffb020"},perf:{label:"Perforation / kiss cut",stroke:"#8a4dff"},safe:{label:"Safe zone",stroke:"#9aa0a6"}};function Zl(i){return`${i.format.name} / ${i.size.label}`.replace(/[^\x20-\x7e×→]/g,"")}function Jf(i){let e=[];for(let t of i.panels){if(t.role!=="main"||t.area<300)continue;let n=t.bounds,s=i.safe;n.w<s*3||n.h<s*3||e.push([n.x0+s,n.y0+s,n.w-2*s,n.h-2*s])}return e}function Kf(i){let{die:e}=i,t=e.bleed,n=e.w+2*t+2*Yn,s=e.h+2*t+2*Yn+8,r=Yn+t,a=Zf,o=(h,u)=>`<line x1="${Bt(h[0])}" y1="${Bt(h[1])}" x2="${Bt(u[0])}" y2="${Bt(u[1])}"/>`,l=e.panels.filter(h=>h.role==="glue").map(h=>`<polygon points="${h.poly.map(u=>`${Bt(u[0])},${Bt(u[1])}`).join(" ")}"/>`).join(""),c=e.panels.filter(h=>h.role!=="leaf"&&h.role!=="hidden"&&Math.min(h.bounds.w,h.bounds.h)>8).map(h=>`<text x="${Bt(h.centroid[0])}" y="${Bt(h.centroid[1])}">${Zh(h.name)}</text>`).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${Bt(n)}mm" height="${Bt(s)}mm" viewBox="0 0 ${Bt(n)} ${Bt(s)}">
<title>${Zh(Zl(i))}</title>
<desc>OK Design print template. Sheet ${vt(e.w)} x ${vt(e.h)} mm, bleed ${vt(t)} mm. All units in mm, scale 1:1. Remove this layer set before export.</desc>
<g transform="translate(${r} ${r})" fill="none" stroke-width="0.25">
<g id="BLEED" stroke="${a.bleed.stroke}"><rect x="${-t}" y="${-t}" width="${Bt(e.w+2*t)}" height="${Bt(e.h+2*t)}"/></g>
<g id="GLUE" fill="#0051ff" fill-opacity="0.1" stroke="none">${l}</g>
<g id="SAFE" stroke="${a.safe.stroke}" stroke-dasharray="1 1">${Jf(e).map(h=>`<rect x="${Bt(h[0])}" y="${Bt(h[1])}" width="${Bt(h[2])}" height="${Bt(h[3])}"/>`).join("")}</g>
<g id="CUT" stroke="${a.cut.stroke}">${e.cuts.map(h=>o(h[0],h[1])).join("")}</g>
<g id="FOLD" stroke="${a.fold.stroke}" stroke-dasharray="3 2">${e.creases.filter(h=>!h.mountain).map(h=>o(h.a,h.b)).join("")}</g>
<g id="FOLD-MOUNTAIN" stroke="${a.mountain.stroke}" stroke-dasharray="3 1 1 1">${e.creases.filter(h=>h.mountain).map(h=>o(h.a,h.b)).join("")}</g>
<g id="PERFORATION" stroke="${a.perf.stroke}" stroke-dasharray="1 1">${[...e.perfs,...e.kiss].map(h=>o(h.a,h.b)).join("")}</g>
<g id="LABELS" fill="#0051ff" stroke="none" font-family="Helvetica, Arial, sans-serif" font-size="3.2" text-anchor="middle">${c}</g>
</g>
<g id="LEGEND" font-family="Helvetica, Arial, sans-serif" font-size="2.8" fill="#333">
<text x="${Yn}" y="${s-10}">${Zh(Zl(i))}  |  sheet ${vt(e.w)} x ${vt(e.h)} mm  |  bleed ${vt(t)} mm  |  safe ${vt(e.safe)} mm</text>
<text x="${Yn}" y="${s-6}">pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone</text>
</g>
</svg>`}var Bt=i=>String(Math.round(i*1e3)/1e3),Zh=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function jf(i){let{die:e}=i,t=e.bleed,n=72/25.4,s=e.w+2*t+2*Yn,r=e.h+2*t+2*Yn+8,a=Yn+t,o=b=>((b+a)*n).toFixed(3),l=b=>((r-(b+a))*n).toFixed(3),c=b=>{let x=parseInt(b.slice(1),16);return`${((x>>16&255)/255).toFixed(3)} ${((x>>8&255)/255).toFixed(3)} ${((x&255)/255).toFixed(3)}`},h=b=>String(b).replace(/×/g,"x").replace(/→/g,">").replace(/[^\x20-\x7e]/g,"").replace(/([()\\])/g,"\\$1"),u=[],d=(b,x,w)=>{if(w.length){u.push(`q ${c(b)} RG 0.6 w [${x}] 0 d`);for(let[I,R]of w)u.push(`${o(I[0])} ${l(I[1])} m ${o(R[0])} ${l(R[1])} l S`);u.push("Q")}},f=Zf,m=(b,x,w,I)=>[[[b,x],[b+w,x]],[[b+w,x],[b+w,x+I]],[[b+w,x+I],[b,x+I]],[[b,x+I],[b,x]]];d(f.bleed.stroke,"",m(-t,-t,e.w+2*t,e.h+2*t)),d(f.safe.stroke,"2 2",Jf(e).flatMap(b=>m(...b))),d(f.cut.stroke,"",e.cuts.map(b=>[b[0],b[1]])),d(f.fold.stroke,"8 5",e.creases.filter(b=>!b.mountain).map(b=>[b.a,b.b])),d(f.mountain.stroke,"8 3 2 3",e.creases.filter(b=>b.mountain).map(b=>[b.a,b.b])),d(f.perf.stroke,"2 2",[...e.perfs,...e.kiss].map(b=>[b.a,b.b]));let _=(b,x,w,I,R="#333333")=>{u.push(`BT /F1 ${w} Tf ${c(R)} rg ${b.toFixed(2)} ${x.toFixed(2)} Td (${h(I)}) Tj ET`)};for(let b of e.panels){if(b.role==="leaf"||b.role==="hidden"||Math.min(b.bounds.w,b.bounds.h)<8)continue;let x=h(b.name).length*4.6*.5;_(+o(b.centroid[0])-x,+l(b.centroid[1])-3,9,b.name,"#0051ff")}_(Yn*n,7.5*n,8,`${Zl(i)}  |  sheet ${vt(e.w)} x ${vt(e.h)} mm  |  bleed ${vt(t)} mm  |  safe ${vt(e.safe)} mm`),_(Yn*n,3.6*n,7,"pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone","#666666");let p=u.join(`
`),g=(b,x,w,I)=>`[${[o(b),l(I),o(w),l(x)].join(" ")}]`,v=["<< /Type /Catalog /Pages 2 0 R >>","<< /Type /Pages /Kids [3 0 R] /Count 1 >>",`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${(s*n).toFixed(3)} ${(r*n).toFixed(3)}] /TrimBox ${g(0,0,e.w,e.h)} /BleedBox ${g(-t,-t,e.w+t,e.h+t)} /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,`<< /Length ${p.length} >>
stream
${p}
endstream`,"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",`<< /Title (${h(Zl(i))}) /Producer (OK Design Print Lab) >>`],M=`%PDF-1.4
`,y=[];v.forEach((b,x)=>{y.push(M.length),M+=`${x+1} 0 obj
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
%%EOF`,M}function Qf(i){let e=Math.max(i.w,i.h)*.03,t=`${-e} ${-e} ${i.w+2*e} ${i.h+2*e}`,n=(a,o)=>`M${Yl(a[0])} ${Yl(a[1])}L${Yl(o[0])} ${Yl(o[1])}`,s=i.cuts.map(a=>n(a[0],a[1])).join(""),r=i.creases.map(a=>n(a.a,a.b)).join("");return`<svg viewBox="${t}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="c" d="${s}"/><path class="f" d="${r}"/></svg>`}var Yl=i=>Math.round(i*10)/10;function Jl(i,e,t){let n=e instanceof Blob?e:new Blob([e],{type:t}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=i,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),4e3)}function Xy(){let i=document.querySelector('script[src*="print-lab.js"]');return i?new URL(".",i.src).href:"assets/print-lab/"}function $y(){return window.__OK_RUNTIME?Promise.resolve():new Promise((i,e)=>{let t=document.createElement("script");t.src=`${Xy()}print-lab.runtime.js`,t.onload=i,t.onerror=()=>e(new Error("The proof runtime could not be loaded.")),document.head.appendChild(t)})}function ep(i,e){let t=i.art[e];if(!t)return null;let{ext:n}=i,s=Math.min(3e3/Math.max(n.w,n.h),i.pxPerMm),r=document.createElement("canvas");r.width=Math.round(n.w*s),r.height=Math.round(n.h*s);let a=r.getContext("2d");return a.fillStyle=e==="back"&&i.stock.inside?i.stock.inside:i.stock.color,a.fillRect(0,0,r.width,r.height),t(a,s,n,e),r.toDataURL("image/jpeg",.88)}var Yy=i=>JSON.stringify(i).replace(/</g,"\\u003c");async function tp(i,e={}){await $y();let{surface:t,s:n,art:s,job:r}=i,a={};if(s.pagesMap){let h=0;for(let[u,d]of s.pagesMap){if(h++>=16)break;let f=document.createElement("canvas"),m=Math.min(1,1100/Math.max(d.width,d.height));f.width=Math.round(d.width*m),f.height=Math.round(d.height*m),f.getContext("2d").drawImage(d,0,0,f.width,f.height),a[u]=f.toDataURL("image/jpeg",.84)}}let o={v:1,id:n.id,size:n.size,stock:n.stock,finish:n.finish,pages:n.pages,client:e.client||"",project:e.project||r.format.name,version:e.version||"v1",note:e.note||"",date:new Date().toISOString().slice(0,10),email:"hello@okdesign.cc",art:{front:ep(t,"front"),back:ep(t,"back")},bookPages:a},l=`${o.project} ${o.version} \u2014 Proof by OK Design`.replace(/</g,""),c=window.__OK_RUNTIME.replace(/<\/script/gi,"<\\/script");return`<!doctype html>
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
<script>window.__OK_PROOF__=${Yy(o)};<\/script>
<script>${c}<\/script>
</body>
</html>`}var Zy=i=>{let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild},Gt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),np=i=>String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Jy={flat:"Outside",inside:"Inside",closed:"Folded",open:"Open"},ar=class{constructor(e,{mode:t="lab",onClose:n,onChange:s,proof:r}={}){this.host=e,this.mode=t,this.onClose=n,this.onChange=s,this.proof=r,this.s={overlays:{lines:!1,bleed:!1,safe:!1,labels:!1},tab:"spec"},this.art=this._emptyArt(),this._dom()}_emptyArt(){return{front:null,back:null,panels:[],sample:!1,doc:null,pagesMap:null}}_dom(){let e=this.mode==="proof",t=this.mode==="client";this.el=Zy(`
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
      </div>`),this.host.appendChild(this.el),this.$=s=>this.el.querySelector(s),this.canvasHost=this.$(".pl-canvas"),this.$(".pl-back")?.addEventListener("click",s=>{s.preventDefault(),this.onClose?.()}),this.el.querySelectorAll(".pl-tog").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.o;this.s.overlays[r]=!this.s.overlays[r],this._syncOverlays()})),this.el.querySelectorAll("[data-z]").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.z;r==="in"&&this.stage.zoom(.84),r==="out"&&this.stage.zoom(1.19),r==="reset"&&this.stage.resetView(),r==="spin"&&(this.spin=!this.spin,this.stage.spin(this.spin),s.classList.toggle("is-on",this.spin))}));let n=this.$(".pl-fold input");n.addEventListener("input",()=>{this.stage.scrub(n.value/100),this._markState("custom")}),this.el.querySelectorAll("[data-tab]").forEach(s=>s.addEventListener("click",()=>this.tab(s.dataset.tab))),this.mode==="lab"&&this._wireDrop(),this._wireHover()}_ensureStage(){if(this.stage)return;try{this.stage=new Fl(this.canvasHost,{pad:1.14})}catch{let t=this.$(".pl-note");throw t.textContent="This browser cannot show the 3D model: WebGL is turned off or not available.",t.hidden=!1,new Error("WebGL unavailable")}this.stage.onState=t=>this._markState(t),this.stage.onSpinStop=()=>{this.spin=!1,this.$('[data-z="spin"]')?.classList.remove("is-on")},this.maxTex=Math.min(this.stage.renderer.capabilities.maxTextureSize,window.innerWidth<800?2048:4096);let e=window.innerWidth<900;this.stage.setSafe(e?62:84,e?50:74)}open(e){this.el.classList.add("is-open"),this._ensureStage(),Object.assign(this.s,{id:e.id,size:e.size,stock:e.stock,finish:e.finish,pages:e.pages}),this.art=this._emptyArt(),this._rebuild({intro:!e.noIntro}),this.stage.resize(),this.$(".pl-back")?.focus({preventScroll:!0})}close(){this.el.classList.remove("is-open"),this.spin=!1,this.stage?.spin(!1)}_rebuild({intro:e=!1,keepState:t=!1}={}){let{s:n}=this,s=this.surface,r=this.pages,a=Xl(n.id,n.size,{stock:n.stock,finish:n.finish,pages:n.pages});this.job=a,n.size=a.size.id,n.stock=a.stockId,n.finish=a.finishId,n.pages=a.params.pages;let{die:o}=a,l=zf(a,{maxTex:this.maxTex,anisotropy:this.stage.renderer.capabilities.getMaxAnisotropy()}),c=new ql,h=Bf(a,{surface:l,pages:c});this.surface=l,this.pages=c,this.model=h;let u=t&&this.stage.state!=="custom"?this.stage.state:"closed";this.stage.setModel(h,{die:o,state:"closed"}),s?.dispose(),r?.dispose(),this.orient=Hf(this.stage,h,o),l.orient=this.orient,l.onChange=()=>this.stage.invalidate(),this._bleedPlanes(),this._syncOverlays(),this._seg(),this._titles(),this._reapplyArt(),this._renderPanes();let d=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;e&&!d?(this.stage.go("flat",{instant:!0}),this._markState("flat"),clearTimeout(this._introT),this._introT=setTimeout(()=>{this.stage.go("closed"),this._markState("closed")},420)):(this.stage.go(u==="open"&&o.meta.noOpen?"closed":u,{instant:!0}),this._markState(this.stage.state)),this.onChange?.(this.params())}params(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s;return{id:e,size:t,stock:n,finish:s,pages:r}}_bleedPlanes(){let{surface:e,model:t}=this,n=e.ext,s=new ai(n.w,n.h),r=t.t,a=o=>{let l=new Ae(s,new wi({map:e.tex[o],color:"#7d7d7d",toneMapped:!1}));return l.position.set(n.x0+n.w/2,-(n.y0+n.h/2),-r*.5),o==="back"&&(l.rotation.y=Math.PI),l.visible=!1,t.object.add(l),l};this.bleedPlanes={front:a("front"),back:a("back")},this.stage.onStart=()=>this._syncBleed()}_syncBleed(){let e=this.s.overlays.bleed,t=this.stage.tween?this.stage.tween.state:this.stage.state,n=t==="flat"||t==="inside";if(!this.bleedPlanes)return;let{surface:s}=this;this.bleedPlanes.front.material.map=s.tex.front,this.bleedPlanes.back.material.map=s.tex.back,this.bleedPlanes.front.visible=e&&n,this.bleedPlanes.back.visible=e&&n,this.stage.invalidate()}_syncOverlays(){let e=this.s.overlays;this.el.querySelectorAll(".pl-tog").forEach(t=>t.classList.toggle("is-on",!!e[t.dataset.o])),this.surface?.setOverlays({lines:e.lines,safe:e.safe,labels:e.labels}),this._syncBleed()}_titles(){let{format:e,size:t}=this.job,n=Ys.find(r=>r.id===e.cat);this.$(".pl-eyebrow").textContent=n?.name||"",this.$(".pl-title h2").textContent=this.proof?.project||e.name;let s=[e.nl,e.fr].filter((r,a,o)=>r&&r!==e.name&&o.indexOf(r)===a);if(this.$(".pl-sub").textContent=this.proof?`${e.name} \xB7 ${t.label}`:s.join(" \xB7 "),this.mode!=="lab"){let r=this.$(".pl-measure");r.hidden=!1,r.innerHTML=this._measureRows().map(([a,o])=>`<div><span>${Gt(a)}</span><b>${Gt(o)}</b></div>`).join("")}}_finished(){let{model:e}=this;if(!e)return null;let n=e.bounds(e.vector("closed")).getSize(new C);return[n.x,n.y,n.z].sort((s,r)=>r-s)}_measureRows(){let{die:e,stock:t,finishId:n}=this.job,s=[],r=this._finished(),a=r&&r[2]>6&&!e.extras.some(o=>o.type==="stack");return r&&s.push([a?"Outside":"Finished",a?`${vt(r[0])} \xD7 ${vt(r[1])} \xD7 ${vt(r[2])} mm`:`${vt(r[1])} \xD7 ${vt(r[0])} mm`]),s.push(["Flat sheet",`${Ks(e.w,e.h)} mm`]),s.push(["With bleed",`${Ks(e.w+2*e.bleed,e.h+2*e.bleed)} mm`]),s.push(["Stock",t.name]),n!=="none"&&s.push(["Finish",Zs[n].name]),s}_seg(){let{die:e}=this.job,t=["flat"];(e.sides??2)>1&&t.push("inside"),t.push("closed"),e.meta.noOpen||t.push("open");let n=!e.creases.length&&!e.warp,s={...Jy,...n?{flat:"Front",inside:"Back",closed:"3D"}:{},...e.meta.closedLabel?{closed:e.meta.closedLabel}:{}},r=this.$(".pl-seg");r.innerHTML=t.map(a=>`<button type="button" data-state="${a}">${s[a]}</button>`).join(""),r.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{clearTimeout(this._introT),this.stage.go(a.dataset.state),this._markState(a.dataset.state)}))}_markState(e){this.el.querySelectorAll("[data-state]").forEach(n=>n.classList.toggle("is-on",n.dataset.state===e));let t=this.$(".pl-fold input");(e==="flat"||e==="inside")&&(t.value=0),(e==="closed"||e==="open")&&(t.value=100),this._syncBleed()}tab(e){this.s.tab=e,this.el.querySelectorAll("[data-tab]").forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle("is-on",n),t.setAttribute("aria-selected",n)}),this.el.querySelectorAll("[data-pane]").forEach(t=>t.hidden=t.dataset.pane!==e)}_renderPanes(){this.mode==="lab"&&(this._paneSpec(),this._paneArt(),this._paneShare(),this.tab(this.s.tab))}_select(e,t,n,s){if(n.length<2){let r=n[0];return`<div class="pl-field"><span>${e}</span><p class="pl-static">${Gt(r?.[1]??"")}</p></div>`}return`<label class="pl-field"><span>${e}</span><select data-k="${t}">${n.map(([r,a])=>`<option value="${Gt(r)}"${String(r)===String(s)?" selected":""}>${Gt(a)}</option>`).join("")}</select></label>`}_paneSpec(){let e=this.$('[data-pane="spec"]'),{format:t,die:n}=this.job,{s}=this,r=this._measureRows();r.push(["Safe margin",`${vt(n.safe)} mm`]);let a=n.panels.filter(o=>o.role==="main").length;a>1&&r.push(["Printed panels",String(a)]),n.creases.length&&r.push(["Folds",String(n.creases.length)]),e.innerHTML=`
      <p class="pl-use">${Gt(t.use)}</p>
      <div class="pl-fields">
        ${this._select("Size","size",t.sizes.map(o=>[o.id,o.label]),s.size)}
        ${t.pageOptions?this._select("Pages","pages",t.pageOptions.map(o=>[o,`${o} pages`]),s.pages):""}
        ${this._select("Stock","stock",t.stocks.map(o=>[o,ss[o].name]),s.stock)}
        ${this._select("Finish","finish",t.finishes.map(o=>[o,Zs[o].name]),s.finish)}
      </div>
      <dl class="pl-spec">${r.map(([o,l])=>`<div><dt>${Gt(o)}</dt><dd>${Gt(l)}</dd></div>`).join("")}</dl>
      <p class="pl-label">Template, 1:1 in mm</p>
      <div class="pl-row">
        <button type="button" class="pl-btn" data-dl="pdf">Download PDF</button>
        <button type="button" class="pl-btn" data-dl="svg">Download SVG</button>
      </div>
      <p class="pl-hint">Cut, fold, bleed and safe zone on separate lines. Check panel widths against your printer's own template before going to press.</p>`,e.querySelectorAll("select").forEach(o=>o.addEventListener("change",()=>{s[o.dataset.k]=o.value,this._rebuild({keepState:!0})})),e.querySelector('[data-dl="pdf"]').addEventListener("click",()=>{Jl(`${t.id}-${s.size}-template.pdf`,new Blob([Ky(jf(this.job))],{type:"application/pdf"}))}),e.querySelector('[data-dl="svg"]').addEventListener("click",()=>{Jl(`${t.id}-${s.size}-template.svg`,Kf(this.job),"image/svg+xml")})}_sideBlock(e,t){let n=this.art[e];if(!n)return`<div class="pl-slot"><div class="pl-slot-head"><b>${t}</b><span>Empty</span></div>
        <button type="button" class="pl-link" data-pick="${e}">Choose a file for this side</button></div>`;let s=Yf(n,this.surface.ext,this.job.die),r=Math.round(n.mmPerPx/(n.base||n.mmPerPx)*100);return`<div class="pl-slot" data-side="${e}">
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
      </div>`;let a=e.querySelector("input[type=file]"),o=e.querySelector(".pl-dropzone");o.addEventListener("click",()=>a.click()),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),a.click())}),a.addEventListener("change",()=>{a.files.length&&this._files([...a.files],{side:this._pickSide}),this._pickSide=null,a.value=""}),e.querySelectorAll("[data-pick]").forEach(l=>l.addEventListener("click",()=>{this._pickSide=l.dataset.pick,a.click()})),e.querySelector("[data-sample]").addEventListener("click",()=>this.useSample(!this.art.sample)),e.querySelectorAll("[data-rm]").forEach(l=>l.addEventListener("click",()=>{this.art.panels.splice(+l.dataset.rm,1),this._reapplyArt(),this._paneArt()})),e.querySelectorAll(".pl-slot[data-side]").forEach(l=>{let c=l.dataset.side,h=this.art[c],{ext:u}=this.surface,d=(m=!1)=>{this._applySide(c),m&&this._paneArt()};l.querySelectorAll("[data-fit]").forEach(m=>m.addEventListener("click",()=>{Yh(h,m.dataset.fit,u,t),h.base=h.mmPerPx,d(!0)})),l.querySelector('[data-act="rot"]').addEventListener("click",()=>{h.rot=(h.rot+90)%360,Yh(h,"bleed",u,t),h.base=h.mmPerPx,d(!0)}),l.querySelector('[data-act="del"]').addEventListener("click",()=>{this.art[c]=null,d(!0)});let f=l.querySelector('[data-v="scale"]');f.addEventListener("input",()=>{h.mmPerPx=h.base*(f.value/100),l.querySelector(".pl-slider i").textContent=`${f.value}%`,d()}),f.addEventListener("change",()=>d(!0)),l.querySelector('[data-v="x"]').addEventListener("change",m=>{h.cx=u.w/2+(+m.target.value||0),d(!0)}),l.querySelector('[data-v="y"]').addEventListener("change",m=>{h.cy=u.h/2+(+m.target.value||0),d(!0)})})}_paneShare(){let e=this.$('[data-pane="share"]'),t=!!(this.art.front||this.art.back||this.art.panels.length||this.art.sample);e.innerHTML=`
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
      <p class="pl-error" hidden></p>`,e.querySelector("[data-copy]").addEventListener("click",async n=>{let s=this.clientLink(),r=n.currentTarget;try{await navigator.clipboard.writeText(s),r.textContent="Copied"}catch{window.prompt("Copy this link",s)}setTimeout(()=>r.textContent="Copy client link",1600)}),this.meta=this.meta||{},e.querySelectorAll("[data-p]").forEach(n=>n.addEventListener("input",()=>this.meta[n.dataset.p]=n.value)),e.querySelector("[data-proof]").addEventListener("click",async n=>{let s=n.currentTarget,r=e.querySelector(".pl-error");r.hidden=!0,s.disabled=!0,s.textContent="Building\u2026";try{let a=np(this.meta.project||this.job.format.name),o=await tp(this,this.meta);Jl(`proof-${a}-${np(this.meta.version||"v1")}.html`,o,"text/html")}catch(a){r.textContent=a.message,r.hidden=!1}s.disabled=!1,s.textContent="Download proof"})}clientLink(){let{id:e,size:t,stock:n,finish:s,pages:r}=this.s,a=new URLSearchParams({size:t,stock:n,finish:s,view:"client"});return r&&a.set("pages",r),`${location.href.split("#")[0]}#/f/${e}?${a}`}async useSample(e){if(e)try{await Promise.all([document.fonts.load("800 40px Outfit"),document.fonts.load("600 40px Outfit")])}catch{}this.art.sample=e,e&&(this.art.front=null,this.art.back=null,this.art.panels=[]),this._reapplyArt(),this.mode==="lab"&&(this._paneArt(),this._paneShare())}_applySide(e){let{surface:t,job:n,orient:s,art:r}=this;if(r.sample){let l=Gf(n.die,s);t.setArt(e,e==="front"?l.front:l.back),this._syncBleed();return}let a=r[e],o=r.panels.filter(l=>l.side===e);!a&&!o.length?t.setArt(e,null):t.setArt(e,(l,c,h)=>{a&&Xf(l,c,a);for(let u of o)$f(l,c,h,u,n.die,s,e)}),this._syncBleed()}_reapplyArt(){let{art:e,surface:t,job:n}=this;for(let s of["front","back"]){let r=e[s];if(r){let a=$h(r.page,t.ext,n.die);a.base=a.mmPerPx,e[s]=a}this._applySide(s)}if(e.pagesMap)for(let[s,r]of e.pagesMap)this.pages.setPage(s,r)}async _files(e,{side:t,panel:n}={}){let s=this.$('[data-pane="art"]'),r=s?.querySelector(".pl-progress"),a=s?.querySelector(".pl-error");a&&(a.hidden=!0),this.tab("art");try{let o=0;for(let l of e){r&&(r.hidden=!1,r.textContent=`Reading ${l.name}\u2026`);let c=await qf(l,{maxSide:this.maxTex,onProgress:(h,u)=>{r&&(r.textContent=`Rendering page ${h} of ${u}\u2026`)}});this._placeDoc(c,{side:o===1&&!t?"back":t,panel:n}),o++}}catch(o){a&&(a.textContent=o.message||"This file could not be read.",a.hidden=!1)}r&&(r.hidden=!0),this._paneArt(),this._paneShare()}_placeDoc(e,{side:t,panel:n}){let{die:s}=this.job,{art:r,surface:a}=this;if(r.sample=!1,n){r.panels=r.panels.filter(h=>!(h.panel===n.panel&&h.side===n.side)),r.panels.push({panel:n.panel,side:n.side,page:e.pages[0]}),this._applySide(n.side);return}if(s.meta.book&&e.pages.length>2&&s.byId.front&&s.byId.back){if(this.job.format.pageOptions?.includes(e.pages.length)&&e.pages.length!==this.s.pages){this.s.pages=e.pages.length,this._rebuild({keepState:!0}),this._placeBook(e),this._paneSpec();return}this._placeBook(e);return}let l=t||(this.stage.state==="inside"?"back":"front"),c=(h,u)=>{let d=$h(u,a.ext,s);d.base=d.mmPerPx,r[h]=d,this._applySide(h)};c(l,e.pages[0]),e.pages[1]&&!t&&(s.sides??2)>1&&c(l==="front"?"back":"front",e.pages[1]),this.stage.state!=="flat"&&this.stage.state!=="inside"&&this.stage.go(l==="back"?"inside":"flat"),this.s.overlays.lines=!0,this._syncOverlays()}_placeBook(e){let{art:t}=this,n=e.pages,s=n.length;t.panels=[{panel:"front",side:"front",page:n[0]},{panel:"back",side:"front",page:n[s-1]}],s>3&&t.panels.push({panel:"front",side:"back",page:n[1]},{panel:"back",side:"back",page:n[s-2]}),t.pagesMap=new Map;for(let r=2;r<s-2;r++)t.pagesMap.set(r+1,n[r].source);for(let[r,a]of t.pagesMap)this.pages.setPage(r,a);this._applySide("front"),this._applySide("back"),this.stage.go("closed")}_wireDrop(){let e=this.$(".pl-stage"),t=this.$(".pl-veil"),n=0,s=()=>this.stage.state==="flat"||this.stage.state==="inside",r=()=>{t.querySelector("p").textContent=s()?`Drop to fill the ${this.stage.state==="inside"?"inside":"outside"} of the sheet`:"Drop on a panel to place it there"};this.el.addEventListener("dragenter",a=>{a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),n++,r(),t.hidden=!1)}),this.el.addEventListener("dragleave",()=>{n=Math.max(0,n-1),n||(t.hidden=!0)}),this.el.addEventListener("dragover",a=>{if(a.dataTransfer?.types?.includes("Files")&&(a.preventDefault(),!s()&&e.contains(a.target))){let o=this.stage.pick(a.clientX,a.clientY),l=o&&this._panelName(o);t.querySelector("p").textContent=l?`Place on ${l}`:"Drop on a panel to place it there"}}),this.el.addEventListener("drop",a=>{a.preventDefault(),n=0,t.hidden=!0;let o=[...a.dataTransfer?.files||[]];if(!o.length)return;if(e.contains(a.target)&&!s()){let c=this.stage.pick(a.clientX,a.clientY);if(c&&c.panel){this._files([o[0]],{panel:c});return}}this._files(o)}),this._onPaste=a=>{if(!this.el.classList.contains("is-open")||/INPUT|TEXTAREA/.test(document.activeElement?.tagName||""))return;let o=[...a.clipboardData?.files||[]].filter(l=>/^image\//.test(l.type));o.length&&this._files([o[0]])},window.addEventListener("paste",this._onPaste)}_panelName(e){let t=this.job.die.byId[e.panel];return!t||t.role==="leaf"?null:e.side==="back"?t.nameIn||"Inside":t.name}_wireHover(){let e=this.$(".pl-tip"),t=this.$(".pl-stage");if(this.mode!=="lab")return;let n=0;t.addEventListener("pointermove",s=>{if(s.pointerType==="touch"||s.buttons){e.hidden=!0;return}let r=performance.now();if(r-n<60)return;if(n=r,s.target.tagName!=="CANVAS"||!this.stage){e.hidden=!0;return}let a=this.stage.pick(s.clientX,s.clientY),o=a&&this._panelName(a);if(!o){e.hidden=!0;return}let l=t.getBoundingClientRect();e.textContent=o,e.style.transform=`translate(${s.clientX-l.left+14}px, ${s.clientY-l.top+14}px)`,e.hidden=!1}),t.addEventListener("pointerleave",()=>e.hidden=!0)}async loadBaked(e){let t=a=>new Promise((o,l)=>{let c=new Image;c.onload=()=>o(c),c.onerror=l,c.src=a}),n=e.art.front?await t(e.art.front):null,s=e.art.back?await t(e.art.back):null,r=a=>(o,l,c)=>{o.setTransform(1,0,0,1,0,0),o.drawImage(a,0,0,c.w*l,c.h*l)};n&&this.surface.setArt("front",r(n)),s&&this.surface.setArt("back",r(s));for(let[a,o]of Object.entries(e.pages||{})){let l=await t(o),c=document.createElement("canvas");c.width=l.naturalWidth,c.height=l.naturalHeight,c.getContext("2d").drawImage(l,0,0),this.pages.setPage(+a,c)}this.stage.invalidate()}};function Ky(i){let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t)&255;return e}var _a=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ip=i=>String(i).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function sp(i,{thumbs:e}){let t={cat:"*",q:""},n=i.querySelector("#plCats"),s=i.querySelector("#plGrid"),r=i.querySelector("#plCount"),a=i.querySelector("#plSearch"),o=i.querySelector("#plEmpty");n.innerHTML=[{id:"*",name:"All"},...Ys].map(u=>`<button type="button" class="btn btn-envato-dropdown pl-pill" data-cat="${u.id}">${_a(u.name)}</button>`).join("");let l=new Map($s.map(u=>[u.id,ip([u.name,u.nl,u.fr,u.use,...u.sizes.map(d=>d.label)].join(" "))])),c=u=>{let d=u.sizes.length>1?`${u.sizes.length} sizes`:u.sizes[0].label;return`<a href="#/f/${u.id}" class="article-blog no-div pl-card" data-id="${u.id}">
      <div class="blog-image pl-thumb">
        <img loading="lazy" width="640" height="480" src="${e}${u.id}.webp" alt="${_a(u.name)}, blank 3D model">
        <div class="pl-die" aria-hidden="true"></div>
      </div>
      <div class="blog-content">
        <div class="infor">
          <p class="infor_sub text-white-64">${_a(d)}</p>
          <h6><span class="link infor_name">${_a(u.name)}</span></h6>
        </div>
        <div class="btn-action"><i class="icon icon-arrow-top-right"></i></div>
      </div>
    </a>`},h=()=>{let u=ip(t.q.trim()),d=_=>(t.cat==="*"||_.cat===t.cat)&&(!u||u.split(/\s+/).every(p=>l.get(_.id).includes(p))),f=$s.filter(d),m="";for(let _ of Ys){let p=f.filter(g=>g.cat===_.id);p.length&&(m+=`<section class="pl-section">
        <div class="pl-section-head"><span class="text-uppercase text-primary text-caption fw-medium">${String(Ys.indexOf(_)+1).padStart(2,"0")} /</span><h2>${_a(_.name)}</h2><span class="pl-section-count">${p.length}</span></div>
        <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4 pl-grid">${p.map(c).join("")}</div>
      </section>`)}s.innerHTML=m,r.textContent=`${f.length} ${f.length===1?"format":"formats"}`,o.hidden=f.length>0,n.querySelectorAll(".pl-pill").forEach(_=>_.classList.toggle("is-active",_.dataset.cat===t.cat))};n.addEventListener("click",u=>{let d=u.target.closest("[data-cat]");d&&(t.cat=d.dataset.cat,h())}),a.addEventListener("input",()=>{t.q=a.value,h()}),i.querySelector("#plReset")?.addEventListener("click",()=>{t.q="",t.cat="*",a.value="",h()}),s.addEventListener("pointerover",u=>{let d=u.target.closest(".pl-card");if(!(!d||d.dataset.die)){d.dataset.die="1";try{let f=Xl(d.dataset.id);d.querySelector(".pl-die").innerHTML=Qf(f.die)}catch{}}}),h()}function jy(){let i=/^#\/f\/([^?]+)(?:\?(.*))?$/.exec(location.hash);if(!i)return null;let e=new URLSearchParams(i[2]||"");return{id:decodeURIComponent(i[1]),size:e.get("size")||void 0,stock:e.get("stock")||void 0,finish:e.get("finish")||void 0,pages:e.get("pages")||void 0,view:e.get("view")||void 0}}function Qy(){let i=document.getElementById("plApp");if(!i)return;let e=document.getElementById("plStudioHost"),t=i.dataset.thumbs||"assets/print-lab/thumbs/";sp(i,{thumbs:t});let n=_f(),s=document.getElementById("plTotals");s&&(s.textContent=`${n.formats} formats, ${n.sizes} sizes`);let r=null,a=null,o=null,l="",c=()=>{o?.close(),o=null,l="",document.documentElement.classList.remove("pl-lock")},h=()=>{let f=jy();if(!f||!Cl[f.id]){c();return}let m=`${f.view==="client"?"c":"l"}:${f.id}`;m!==l&&(l=m,o?.close(),f.view==="client"?(a=a||new ar(e,{mode:"client",onClose:u}),o=a):(r=r||new ar(e,{mode:"lab",onClose:u,onChange:d}),o=r),document.documentElement.classList.add("pl-lock"),o.open(f))};function u(){history.pushState("","",location.pathname+location.search),c()}function d(f){let m=new URLSearchParams;f.size&&m.set("size",f.size),f.stock&&m.set("stock",f.stock),f.finish&&m.set("finish",f.finish),f.pages&&m.set("pages",f.pages),history.replaceState(null,"",`#/f/${f.id}?${m}`)}window.addEventListener("hashchange",h),window.addEventListener("keydown",f=>{f.key==="Escape"&&o&&u()}),h(),window.__plStudio=()=>o}function eb(i){let e=document.getElementById("plProof"),t=new ar(e,{mode:"proof",proof:i});t.open({id:i.id,size:i.size,stock:i.stock,finish:i.finish,pages:i.pages,noIntro:!0});let n=document.createElement("div");n.className="pl-proofcard";let s=encodeURIComponent(`${i.project} ${i.version}`),r=c=>`mailto:${i.email}?subject=${encodeURIComponent(c)}%20${s}`,a=c=>String(c).replace(/[&<>"]/g,h=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[h]),o=i.links?.length?i.links.map(c=>`<a class="pl-btn${c.primary?" pl-btn-primary":""}" href="${a(c.href)}"${c.download?" download":' target="_blank" rel="noopener"'}>${a(c.label)}</a>`).join(""):`<a class="pl-btn pl-btn-primary" href="${r("Approved:")}">Approve</a>
      <a class="pl-btn" href="${r("Changes for")}">Request changes</a>`,l=i.meta||`${i.client?`${i.client} \xB7 `:""}${i.version} \xB7 ${i.date}`;n.innerHTML=`
    <p class="pl-proof-brand">OK DESIGN</p>
    <p class="pl-proof-meta">${a(l)}</p>
    ${i.note?`<p class="pl-proof-note">${a(i.note)}</p>`:""}
    <div class="pl-proof-actions">${o}</div>`,t.el.querySelector(".pl-stage").appendChild(n),t.loadBaked({art:i.art,pages:i.bookPages}).then(()=>i.sticker?t.stage.loadSticker(i.sticker).catch(()=>{}):null).then(()=>{setTimeout(()=>t.stage.go("closed"),300)}),t.stage.go("flat",{instant:!0}),t.el.classList.add("is-open"),window.__plStudio=()=>t}var rp=()=>{window.__OK_PROOF__?eb(window.__OK_PROOF__):Qy()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rp):rp();})();
