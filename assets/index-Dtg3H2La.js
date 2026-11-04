(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,N=33778,P=33779,F=35840,te=35841,I=35842,ne=35843,re=36196,L=37492,R=37496,z=37488,B=37489,V=37490,ie=37491,ae=37808,oe=37809,se=37810,ce=37811,le=37812,ue=37813,de=37814,fe=37815,pe=37816,me=37817,he=37818,ge=37819,_e=37820,ve=37821,ye=36492,be=36494,xe=36495,Se=36283,Ce=36284,we=36285,Te=36286,Ee=2300,De=2301,H=2302,Oe=2303,ke=2400,Ae=2401,U=2402,je=3200,Me=`srgb`,W=`srgb-linear`,Ne=`linear`,Pe=`srgb`,Fe=7680,Ie=35044,Le=35048,Re=2e3;function ze(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Be(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ve(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function He(){let e=Ve(`canvas`);return e.style.display=`block`,e}var Ue={};function We(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ge(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Ke(...e){e=Ge(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function qe(...e){e=Ge(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Je(...e){let t=e.join(` `);t in Ue||(Ue[t]=!0,Ke(...e))}function Ye(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Xe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ze=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),$e=1234567,et=Math.PI/180,tt=180/Math.PI;function nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+`-`+Qe[t&255]+Qe[t>>8&255]+`-`+Qe[t>>16&15|64]+Qe[t>>24&255]+`-`+Qe[n&63|128]+Qe[n>>8&255]+`-`+Qe[n>>16&255]+Qe[n>>24&255]+Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]).toLowerCase()}function rt(e,t,n){return Math.max(t,Math.min(n,e))}function it(e,t){return(e%t+t)%t}function at(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ot(e,t,n){return e===t?0:(n-e)/(t-e)}function st(e,t,n){return(1-n)*e+n*t}function ct(e,t,n,r){return st(e,t,1-Math.exp(-n*r))}function lt(e,t=1){return t-Math.abs(it(e,t*2)-t)}function ut(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ft(e,t){return e+Math.floor(Math.random()*(t-e+1))}function pt(e,t){return e+Math.random()*(t-e)}function mt(e){return e*(.5-Math.random())}function ht(e){e!==void 0&&($e=e);let t=$e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gt(e){return e*et}function _t(e){return e*tt}function vt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function yt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function bt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function xt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:Ke(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function St(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ct(e,t){if(t.constructor===Float32Array)return e;let n=St(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function wt(e,t){if(t.constructor===Float32Array)return e;let n=St(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Tt={DEG2RAD:et,RAD2DEG:tt,generateUUID:nt,clamp:rt,euclideanModulo:it,mapLinear:at,inverseLerp:ot,lerp:st,damp:ct,pingpong:lt,smoothstep:ut,smootherstep:dt,randInt:ft,randFloat:pt,randFloatSpread:mt,seededRandom:ht,degToRad:gt,radToDeg:_t,isPowerOfTwo:vt,ceilPowerOfTwo:yt,floorPowerOfTwo:bt,setQuaternionFromProperEuler:xt,normalize:wt,denormalize:Ct},G=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Ke(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new K,Ot=new Et,kt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Je(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Je(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Je(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new kt,jt=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:W,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ne:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[W]:{primaries:t,whitePoint:r,transfer:Ne,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ve(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ve(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return Ke(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ke(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new K,Wt=class r extends Ze{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=nt(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ke(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends Ze{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Wt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*P,i[12]=a*w+o*O+s*j+c*F,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*P,i[13]=l*w+u*O+d*j+f*F,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*P,i[14]=p*w+m*O+h*j+g*F,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*P,i[15]=_*w+v*O+y*j+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Re,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Re,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new K,Qt=new Xt,$t=new K(0,0,0),en=new K(1,1,1),tn=new K,nn=new K,rn=new K,an=new Xt,on=new Et,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-rt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Ke(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ln=0,un=new K,dn=new Et,fn=new Xt,pn=new K,mn=new K,hn=new K,gn=new Et,_n=new K(1,0,0),vn=new K(0,1,0),yn=new K(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new sn,r=new Et,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new kt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(qe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):qe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new K(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Me){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=it(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Me){function n(t){t!==void 0&&parseFloat(t)<1&&Ke(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Ke(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Ke(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Me){let n=On[e.toLowerCase()];return n===void 0?Ke(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Me){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(rt(Mn.r*255,0,255))*65536+Math.round(rt(Mn.g*255,0,255))*256+Math.round(rt(Mn.b*255,0,255))}getHexString(e=Me){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Me){Pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=st(kn.h,An.h,t),r=st(kn.s,An.s,t),i=st(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new q;q.NAMES=On;var Nn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new Gt,Kn=new Gt,qn=new Gt,Jn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new K,new K,new K,new K,new K,new K,new K,new K],Zn=new K,Qn=new Yn,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new K,dr=new G,fr=0,pr=class extends Ze{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ie,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:St(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Ct(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.array):Math.round(e*t)}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},J=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Yn,_r=new K,vr=new K,yr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Xt,Sr=new wn,Cr=new K,wr=new Yn,Tr=new Yn,Er=new K,Dr=class e extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ze(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new kt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new J(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Ke(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)qe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)qe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return Ke(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=new K,kr=new K,Ar=new kt,jr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Or.subVectors(n,t).cross(kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Or),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ar.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mr=0,Nr=class extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fe,this.stencilZFail=Fe,this.stencilZPass=Fe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ke(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),s=-Lr.dot(Ir),c=Lr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fr).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,I=E-P*D,ne=O-N*A,re=k-P*A,L=ee-N*M,R=j-P*M,z=L*re-R*ne,B=te*R-I*L,V=ne*I-re*te;if(r){if(z<0||B<0||V<0)return null}else if((z<0||B<0||V<0)&&(z>0||B>0||V>0))return null;let ie=z+B+V;if(ie===0)return null;let ae=F*(z*D+B*A+V*M);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new Xt,Vr=new Rr,Hr=new yr,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,Y=class extends wn{constructor(e=new Dr,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2)||(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),(n.boundingBox===null||Vr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function Qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Zr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new K;Jn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Jn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var $r=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ti=new Xt,ni=new Xt,ri=[],ii=new Yn,ai=new Xt,oi=new Y,si=new yr,ci=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ai)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ti),ii.copy(e.boundingBox).applyMatrix4(ti),this.boundingBox.union(ii)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ti),si.copy(e.boundingSphere).applyMatrix4(ti),this.boundingSphere.union(si)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(oi.geometry=this.geometry,oi.material=this.material,oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),si.copy(this.boundingSphere),si.applyMatrix4(n),e.ray.intersectsSphere(si)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ti),ni.multiplyMatrices(n,ti),oi.matrixWorld=ni,oi.raycast(e,ri);for(let e=0,n=ri.length;e<n;e++){let n=ri[e];n.instanceId=i,n.object=this,t.push(n)}ri.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},li=new yr,ui=new G(.5,.5),di=new K,fi=class{constructor(e=new jr,t=new jr,n=new jr,r=new jr,i=new jr,a=new jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Re,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476+ui.distanceTo(e.center),li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(di.x=r.normal.x>0?e.max.x:e.min.x,di.y=r.normal.y>0?e.max.y:e.min.y,di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(di)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pi=new Xt,mi=class e{constructor(){this.coordinateSystem=Re,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];pi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new fi),n[e].setFromProjectionMatrix(pi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new fi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},hi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gi=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vi=class extends _i{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yi=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bi=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xi=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new K,g=new K;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new J(o,3)),this.setAttribute(`normal`,new J(s,3)),this.setAttribute(`uv`,new J(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Si=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new J(a,3)),this.setAttribute(`normal`,new J(o,3)),this.setAttribute(`uv`,new J(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ci=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new J(u,3)),this.setAttribute(`normal`,new J(d,3)),this.setAttribute(`uv`,new J(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class e extends Ci{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class e extends Dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new J(i,3)),this.setAttribute(`normal`,new J(i.slice(),3)),this.setAttribute(`uv`,new J(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ei=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new Xt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(rt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(rt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Di=class extends Ei{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oi=class extends Di{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ki(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ai=new K,ji=new K,Mi=new ki,Ni=new ki,Pi=new ki,Fi=class extends Ei{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ji.subVectors(r[0],r[1]).add(r[0]),c=ji);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ai.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ai),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Mi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ni.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Pi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Mi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ni.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Pi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Mi.calc(s),Ni.calc(s),Pi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ii(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Li(e,t){let n=1-e;return n*n*t}function Ri(e,t){return 2*(1-e)*e*t}function zi(e,t){return e*e*t}function Bi(e,t,n,r){return Li(e,t)+Ri(e,n)+zi(e,r)}function Vi(e,t){let n=1-e;return n*n*n*t}function Hi(e,t){let n=1-e;return 3*n*n*e*t}function Ui(e,t){return 3*(1-e)*e*e*t}function Wi(e,t){return e*e*e*t}function Gi(e,t,n,r,i){return Vi(e,t)+Hi(e,n)+Ui(e,r)+Wi(e,i)}var Ki=class extends Ei{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qi=class extends Ei{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,r.x,i.x,a.x,o.x),Gi(e,r.y,i.y,a.y,o.y),Gi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ji=class extends Ei{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Ei{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Ei{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Ei{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Bi(e,r.x,i.x,a.x),Bi(e,r.y,i.y,a.y),Bi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ii(o,s.x,c.x,l.x,u.x),Ii(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},$i=Object.freeze({__proto__:null,ArcCurve:Oi,CatmullRomCurve3:Fi,CubicBezierCurve:Ki,CubicBezierCurve3:qi,EllipseCurve:Di,LineCurve:Ji,LineCurve3:Yi,QuadraticBezierCurve:Xi,QuadraticBezierCurve3:Zi,SplineCurve:Qi}),ea=class extends Ei{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new $i[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new $i[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ta=class extends ea{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ji(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Xi(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ki(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Qi([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Di(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},na=class extends ta{constructor(e){super(e),this.uuid=nt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ta().fromJSON(n))}return this}};function ra(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ia(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=da(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return oa(a,o,n,s,c,l,0),o}function ia(e,t,n,r,i){let a;if(i===Fa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ma(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ma(i/r|0,e[i],e[i+1],a);return a&&wa(a,a.next)&&(Na(a),a=a.next),a}function aa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(wa(n,n.next)||Ca(n.prev,n,n.next)===0)){if(Na(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function oa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ga(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ca(e,r,i,a):sa(e))t.push(c.i,e.i,l.i),Na(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=la(aa(e),t),oa(e,t,n,r,i,a,2)):o===2&&ua(e,t,n,r,i,a):oa(aa(e),t,n,r,i,a,1);break}}}function sa(e){let t=e.prev,n=e,r=e.next;if(Ca(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&xa(i,s,a,c,o,l,m.x,m.y)&&Ca(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ca(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ca(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=va(p,m,t,n,r),v=va(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xa(s,u,c,d,l,f,y.x,y.y)&&Ca(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&xa(s,u,c,d,l,f,b.x,b.y)&&Ca(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function la(e,t){let n=e;do{let r=n.prev,i=n.next.next;!wa(r,i)&&Ta(r,n,n.next,i)&&ka(r,i)&&ka(i,r)&&(t.push(r.i,n.i,i.i),Na(n),Na(n.next),n=e=i),n=n.next}while(n!==e);return aa(n)}function ua(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Sa(o,e)){let s=ja(o,e);o=aa(o,o.next),s=aa(s,s.next),oa(o,t,n,r,i,a,0),oa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function da(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ia(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ya(o))}i.sort(fa);for(let e=0;e<i.length;e++)n=pa(i[e],n);return n}function fa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function pa(e,t){let n=ma(e,t);if(!n)return t;let r=ja(n,e);return aa(r,r.next),aa(n,n.next)}function ma(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(wa(e,n))return n;do{if(wa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ba(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ka(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ha(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ha(e,t){return Ca(e.prev,e,t.prev)<0&&Ca(t.next,e,e.next)<0}function ga(e,t,n,r){let i=e;do i.z===0&&(i.z=va(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,_a(i)}function _a(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function va(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ya(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ba(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function xa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ba(e,t,n,r,i,a,o,s)}function Sa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Oa(e,t)&&(ka(e,t)&&ka(t,e)&&Aa(e,t)&&(Ca(e.prev,e,t.prev)||Ca(e,t.prev,t))||wa(e,t)&&Ca(e.prev,e,e.next)>0&&Ca(t.prev,t,t.next)>0)}function Ca(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function wa(e,t){return e.x===t.x&&e.y===t.y}function Ta(e,t,n,r){let i=Da(Ca(e,t,n)),a=Da(Ca(e,t,r)),o=Da(Ca(n,r,e)),s=Da(Ca(n,r,t));return!!(i!==a&&o!==s||i===0&&Ea(e,n,t)||a===0&&Ea(e,r,t)||o===0&&Ea(n,e,r)||s===0&&Ea(n,t,r))}function Ea(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Da(e){return e>0?1:e<0?-1:0}function Oa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ta(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ka(e,t){return Ca(e.prev,e,e.next)<0?Ca(e,t,e.next)>=0&&Ca(e,e.prev,t)>=0:Ca(e,t,e.prev)<0||Ca(e,e.next,t)<0}function Aa(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ja(e,t){let n=Pa(e.i,e.x,e.y),r=Pa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ma(e,t,n,r){let i=Pa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Na(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Pa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ia=class{static triangulate(e,t,n=2){return ra(e,t,n)}},La=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ra(e),za(n,e);let a=e.length;t.forEach(Ra);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,za(n,t[e]);let o=Ia.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ra(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function za(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ba=class e extends Dr{constructor(e=new na([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new J(r,3)),this.setAttribute(`uv`,new J(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Va:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!La.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];La.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||qe(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],M,N=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);j.push(M),N=N.concat(M)}let P;if(p===0)P=La.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);L(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);L(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=La.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),L(x.x,x.y,x.z)):L(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),L(x.x,x.y,x.z)):L(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);L(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?L(i.x,i.y+g[s-1].y,g[s-1].x+n):L(i.x,i.y,c+n)}}}I(),ne();function I(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];R(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];R(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];R(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];R(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);z(t+r+n,t+i+n,t+i+a,t+r+a)}}}function L(e,t,n){a.push(e),a.push(t),a.push(n)}function R(e,t,i){B(e),B(t),B(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);V(o[0]),V(o[1]),V(o[2])}function z(e,t,i,a){B(e),B(t),B(a),B(t),B(i),B(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);V(s[0]),V(s[1]),V(s[3]),V(s[1]),V(s[2]),V(s[3])}function B(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function V(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ha(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $i[i.type]().fromJSON(i)),new e(r,t.options)}},Va={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Ha(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ua=class e extends Ti{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wa=class e extends Dr{constructor(e=[new G(0,-.5),new G(.5,0),new G(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new K,d=new G,f=new K,p=new K,m=new K,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new J(a,3)),this.setAttribute(`uv`,new J(o,2)),this.setAttribute(`normal`,new J(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ga=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ka=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qa=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ja=class e extends Dr{constructor(e=new Zi(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new J(u,3)),this.setAttribute(`normal`,new J(d,3)),this.setAttribute(`uv`,new J(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new $i[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ya(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Za(i))i.isRenderTargetTexture?(Ke(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Za(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Xa(e){let t={};for(let n=0;n<e.length;n++){let r=Ya(e[n]);for(let e in r)t[e]=r[e]}return t}function Za(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Qa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $a(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var eo={clone:Ya,merge:Xa},to=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,no=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ro=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=to,this.fragmentShader=no,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ya(e.uniforms),this.uniformsGroups=Qa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new kt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},io=class extends ro{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ao=class extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oo=class extends ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Je(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Je(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},so=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=je,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function uo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var fo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},po=class extends fo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ke,endingEnd:ke}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ae:i=e,o=2*t-n;break;case U:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ae:a=e,s=2*n-t;break;case U:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},mo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ho=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},go=class extends fo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=yo(n,t,g,y,r);i[p]=_o(x,o,_,b,m)}return i}};function _o(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function vo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function yo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=_o(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=vo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var bo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),uo(e.settings)&&(n.settings={inTangents:lo(e.settings.inTangents,Array),outTangents:lo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ee:t=this.InterpolantFactoryMethodDiscrete;break;case De:t=this.InterpolantFactoryMethodLinear;break;case H:t=this.InterpolantFactoryMethodSmooth;break;case Oe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Ke(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ee;case this.InterpolantFactoryMethodLinear:return De;case this.InterpolantFactoryMethodSmooth:return H;case this.InterpolantFactoryMethodBezier:return Oe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;uo(this.settings)&&(xo(this.settings.inTangents,e),xo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;uo(this.settings)&&(So(this.settings.inTangents,e),So(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(qe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){qe(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){qe(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Be(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){qe(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===H,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,uo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function xo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function So(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}bo.prototype.ValueTypeName=``,bo.prototype.TimeBufferType=Float32Array,bo.prototype.ValueBufferType=Float32Array,bo.prototype.DefaultInterpolation=De;var Co=class extends bo{constructor(e,t,n){super(e,t,n)}};Co.prototype.ValueTypeName=`bool`,Co.prototype.ValueBufferType=Array,Co.prototype.DefaultInterpolation=Ee,Co.prototype.InterpolantFactoryMethodLinear=void 0,Co.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}};wo.prototype.ValueTypeName=`color`;var To=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName=`number`;var Eo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},Do=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName=`quaternion`,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends bo{constructor(e,t,n){super(e,t,n)}};Oo.prototype.ValueTypeName=`string`,Oo.prototype.ValueBufferType=Array,Oo.prototype.DefaultInterpolation=Ee,Oo.prototype.InterpolantFactoryMethodLinear=void 0,Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends bo{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`vector`;var Ao=class extends wn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},jo=new Xt,Mo=new K,No=new K,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mo),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fo=new K,Io=new Et,Lo=new K,Ro=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Re,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Io,Lo),Lo.x===1&&Lo.y===1&&Lo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Io,Lo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fo,Io,Lo),Lo.x===1&&Lo.y===1&&Lo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Io,Lo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zo=new K,Bo=new G,Vo=new G,Ho=class extends Ro{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tt*2*Math.atan(Math.tan(et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zo.x,zo.y).multiplyScalar(-e/zo.z),zo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zo.x,zo.y).multiplyScalar(-e/zo.z)}getViewSize(e,t){return this.getViewBounds(e,Bo,Vo),t.subVectors(Vo,Bo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Uo=class extends Po{constructor(){super(new Ho(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=tt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Wo=class extends Ao{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Uo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Go=class extends Ro{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ko=class extends Po{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Ko}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Jo=class extends Dr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Yo=-90,Xo=1,Zo=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ho(Yo,Xo,e,t);r.layers=this.layers,this.add(r);let i=new Ho(Yo,Xo,e,t);i.layers=this.layers,this.add(i);let a=new Ho(Yo,Xo,e,t);a.layers=this.layers,this.add(a);let o=new Ho(Yo,Xo,e,t);o.layers=this.layers,this.add(o);let s=new Ho(Yo,Xo,e,t);s.layers=this.layers,this.add(s);let c=new Ho(Yo,Xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qo=class extends Ho{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},$o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=es.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function es(){this._document.hidden===!1&&this.reset()}var ts=`\\[\\]\\.:\\/`,ns=RegExp(`[\\[\\]\\.:\\/]`,`g`),rs=`[^\\[\\]\\.:\\/]`,is=`[^`+ts.replace(`\\.`,``)+`]`,as=`((?:WC+[\\/:])*)`.replace(`WC`,rs),os=`(WCOD+)?`.replace(`WCOD`,is),ss=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,rs),cs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,rs),ls=RegExp(`^`+as+os+ss+cs+`$`),us=[`material`,`materials`,`bones`,`map`],ds=class{constructor(e,t,n){let r=n||fs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ns,``)}static parseTrackName(e){let t=ls.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);us.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ke(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){qe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){qe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){qe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){qe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){qe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){qe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;qe(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){qe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fs.Composite=ds,fs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fs.prototype.GetterByBindingType=[fs.prototype._getValue_direct,fs.prototype._getValue_array,fs.prototype._getValue_arrayElement,fs.prototype._getValue_toArray],fs.prototype.SetterByBindingTypeAndVersioning=[[fs.prototype._setValue_direct,fs.prototype._setValue_direct_setNeedsUpdate,fs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_array,fs.prototype._setValue_array_setNeedsUpdate,fs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_arrayElement,fs.prototype._setValue_arrayElement_setNeedsUpdate,fs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fs.prototype._setValue_fromArray,fs.prototype._setValue_fromArray_setNeedsUpdate,fs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ps=new Xt,ms=class{constructor(e,t,n=0,r=1/0){this.ray=new Rr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ps.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ps),this}intersectObject(e,t=!0,n=[]){return gs(e,this,n,t),n.sort(hs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)gs(e[r],this,n,t);return n.sort(hs),n}};function hs(e,t){return e.distance-t.distance}function gs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)gs(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function _s(e,t,n,r){let i=vs(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case ne:return Math.max(e,16)*Math.max(t,8)/4;case F:case I:return Math.max(e,8)*Math.max(t,8)/2;case re:case L:case z:case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case R:case V:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case le:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case _e:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ve:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ye:case be:case xe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*8;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function vs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?Ke(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ys(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function bs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var xs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
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
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},X={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ss={basic:{uniforms:Xa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:xs.meshbasic_vert,fragmentShader:xs.meshbasic_frag},lambert:{uniforms:Xa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:xs.meshlambert_vert,fragmentShader:xs.meshlambert_frag},phong:{uniforms:Xa([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xs.meshphong_vert,fragmentShader:xs.meshphong_frag},standard:{uniforms:Xa([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xs.meshphysical_vert,fragmentShader:xs.meshphysical_frag},toon:{uniforms:Xa([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new q(0)}}]),vertexShader:xs.meshtoon_vert,fragmentShader:xs.meshtoon_frag},matcap:{uniforms:Xa([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:xs.meshmatcap_vert,fragmentShader:xs.meshmatcap_frag},points:{uniforms:Xa([X.points,X.fog]),vertexShader:xs.points_vert,fragmentShader:xs.points_frag},dashed:{uniforms:Xa([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xs.linedashed_vert,fragmentShader:xs.linedashed_frag},depth:{uniforms:Xa([X.common,X.displacementmap]),vertexShader:xs.depth_vert,fragmentShader:xs.depth_frag},normal:{uniforms:Xa([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:xs.meshnormal_vert,fragmentShader:xs.meshnormal_frag},sprite:{uniforms:Xa([X.sprite,X.fog]),vertexShader:xs.sprite_vert,fragmentShader:xs.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xs.background_vert,fragmentShader:xs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:xs.backgroundCube_vert,fragmentShader:xs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xs.cube_vert,fragmentShader:xs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xs.equirect_vert,fragmentShader:xs.equirect_frag},distance:{uniforms:Xa([X.common,X.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xs.distance_vert,fragmentShader:xs.distance_frag},shadow:{uniforms:Xa([X.lights,X.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:xs.shadow_vert,fragmentShader:xs.shadow_frag}};Ss.physical={uniforms:Xa([Ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:xs.meshphysical_vert,fragmentShader:xs.meshphysical_frag};var Cs={r:0,b:0,g:0},ws=new Xt,Ts=new kt;Ts.set(-1,0,0,0,1,0,0,0,1);function Es(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Y(new bi(1,1,1),new ro({name:`BackgroundCubeMaterial`,uniforms:Ya(Ss.backgroundCube.uniforms),vertexShader:Ss.backgroundCube.vertexShader,fragmentShader:Ss.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ws.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ts),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Pe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new Ga(2,2),new ro({name:`BackgroundMaterial`,uniforms:Ya(Ss.background.uniforms),vertexShader:Ss.background.vertexShader,fragmentShader:Ss.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Pe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Cs,$a(e)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ds(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Os(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ks(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ke(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ke(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&Ke(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function As(e){let t=this,n=null,r=0,i=!1,a=!1,o=new jr,s=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var js=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),i=new ro({name:`CubemapFromEquirect`,uniforms:Ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Zo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ms=256,Ns=3,Ps=20,Fs=256,Is=16,Ls=3,Rs=new K,zs=new q,Bs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zo(1,10,null),this._boxMesh=new Y(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Rs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(zs));let h=new Zo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ks(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ms,bt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ms:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Vs(e,!1,!1),n=Math.log2(e)-Ns;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=qs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ks()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Us(),this._integrationMaterial=Ws());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Is);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ls)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Fs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Gs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Vs(e,t,n){return new js(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:W,depthBuffer:n})}function Hs(e,t,n){return new ro({name:e,uniforms:t,vertexShader:xs.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Us(){return Hs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fs}u

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
	`)}function Ws(){return Hs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Is}},`

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
	`)}function Gs(){return Hs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ps}
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
	`)}function Ks(){return Hs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function qs(){return Hs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Js(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new js(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Bs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Bs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ys(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?hr:mr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Zs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Qs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:qe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $s(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new G(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ec(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var tc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function nc(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Dr;u.setAttribute(`position`,new J([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new J([0,2,0,0,2,0],2));let d=new io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Y(u,d),p=new Go(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new _i(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Pt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=tc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var rc=new Wt,ic=new _i(1,1),ac=new vi(1),oc=new Jt,sc=new Yt,cc=new hi,lc=[],uc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function mc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=lc[i];if(a===void 0&&(a=new Float32Array(i),lc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _c(e,t){let n=uc[t];n===void 0&&(n=new Int32Array(t),uc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hc(n,t))return;e.uniform2fv(this.addr,t),gc(n,t)}}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hc(n,t))return;e.uniform3fv(this.addr,t),gc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hc(n,t))return;e.uniform4fv(this.addr,t),gc(n,t)}}function Sc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gc(n,t)}else{if(hc(n,r))return;pc.set(r),e.uniformMatrix2fv(this.addr,!1,pc),gc(n,r)}}function Cc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gc(n,t)}else{if(hc(n,r))return;fc.set(r),e.uniformMatrix3fv(this.addr,!1,fc),gc(n,r)}}function wc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gc(n,t)}else{if(hc(n,r))return;dc.set(r),e.uniformMatrix4fv(this.addr,!1,dc),gc(n,r)}}function Tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hc(n,t))return;e.uniform2iv(this.addr,t),gc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hc(n,t))return;e.uniform3iv(this.addr,t),gc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hc(n,t))return;e.uniform4iv(this.addr,t),gc(n,t)}}function kc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hc(n,t))return;e.uniform2uiv(this.addr,t),gc(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hc(n,t))return;e.uniform3uiv(this.addr,t),gc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hc(n,t))return;e.uniform4uiv(this.addr,t),gc(n,t)}}function Nc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Nc(ic):rc,n.setTexture2D(t||a,i)}function Fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||sc,i)}function Ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Nc(ac):cc,n.setTextureCube(t||a,i)}function Lc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||oc,i)}function Rc(e){switch(e){case 5126:return vc;case 35664:return yc;case 35665:return bc;case 35666:return xc;case 35674:return Sc;case 35675:return Cc;case 35676:return wc;case 5124:case 35670:return Tc;case 35667:case 35671:return Ec;case 35668:case 35672:return Dc;case 35669:case 35673:return Oc;case 5125:return kc;case 36294:return Ac;case 36295:return jc;case 36296:return Mc;case 35678:case 36198:case 36298:case 36306:case 35682:return Pc;case 35679:case 36299:case 36307:return Fc;case 35680:case 36300:case 36308:case 36293:return Ic;case 36289:case 36303:case 36311:case 36292:return Lc}}function zc(e,t){e.uniform1fv(this.addr,t)}function Bc(e,t){let n=mc(t,this.size,2);e.uniform2fv(this.addr,n)}function Vc(e,t){let n=mc(t,this.size,3);e.uniform3fv(this.addr,n)}function Hc(e,t){let n=mc(t,this.size,4);e.uniform4fv(this.addr,n)}function Uc(e,t){let n=mc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Wc(e,t){let n=mc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Gc(e,t){let n=mc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Kc(e,t){e.uniform1iv(this.addr,t)}function qc(e,t){e.uniform2iv(this.addr,t)}function Jc(e,t){e.uniform3iv(this.addr,t)}function Yc(e,t){e.uniform4iv(this.addr,t)}function Xc(e,t){e.uniform1uiv(this.addr,t)}function Zc(e,t){e.uniform2uiv(this.addr,t)}function Qc(e,t){e.uniform3uiv(this.addr,t)}function $c(e,t){e.uniform4uiv(this.addr,t)}function el(e,t,n){let r=this.cache,i=t.length,a=_c(n,i);hc(r,a)||(e.uniform1iv(this.addr,a),gc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Nc(ic):rc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function tl(e,t,n){let r=this.cache,i=t.length,a=_c(n,i);hc(r,a)||(e.uniform1iv(this.addr,a),gc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||sc,a[e])}function nl(e,t,n){let r=this.cache,i=t.length,a=_c(n,i);hc(r,a)||(e.uniform1iv(this.addr,a),gc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Nc(ac):cc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function rl(e,t,n){let r=this.cache,i=t.length,a=_c(n,i);hc(r,a)||(e.uniform1iv(this.addr,a),gc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||oc,a[e])}function il(e){switch(e){case 5126:return zc;case 35664:return Bc;case 35665:return Vc;case 35666:return Hc;case 35674:return Uc;case 35675:return Wc;case 35676:return Gc;case 5124:case 35670:return Kc;case 35667:case 35671:return qc;case 35668:case 35672:return Jc;case 35669:case 35673:return Yc;case 5125:return Xc;case 36294:return Zc;case 36295:return Qc;case 36296:return $c;case 35678:case 36198:case 36298:case 36306:case 35682:return el;case 35679:case 36299:case 36307:return tl;case 35680:case 36300:case 36308:case 36293:return nl;case 36289:case 36303:case 36311:case 36292:return rl}}var al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rc(t.type)}},ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=il(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},cl=/(\w+)(\])?(\[|\.)?/g;function ll(e,t){e.seq.push(t),e.map[t.id]=t}function ul(e,t,n){let r=e.name,i=r.length;for(cl.lastIndex=0;;){let a=cl.exec(r),o=cl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ll(n,l===void 0?new al(s,e,t):new ol(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new sl(s),ll(n,e)),n=e}}}var dl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ul(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var pl=37297,ml=0;function hl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var gl=new kt;function _l(e){Pt._getMatrix(gl,Pt.workingColorSpace,e);let t=`mat3( ${gl.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case Ne:return[t,`LinearTransferOETF`];case Pe:return[t,`sRGBTransferOETF`];default:return Ke(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+hl(e.getShaderSource(t),r)}return i}function yl(e,t){let n=_l(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var bl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function xl(e,t){let n=bl[t];return n===void 0?(Ke(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Sl=new K;function Cl(){return Pt.getLuminanceCoefficients(Sl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Sl.x.toFixed(4)}, ${Sl.y.toFixed(4)}, ${Sl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function wl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Dl).join(`
`)}function Tl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function El(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Dl(e){return e!==``}function Ol(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function kl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Al=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(e){return e.replace(Al,Ml)}function Ml(e,t){let n=xs[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return jl(n)}var Nl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(e){return e.replace(Nl,Fl)}function Fl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Il(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ll={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Rl(e){return Ll[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var zl={302:`ENVMAP_MODE_REFRACTION`};function Bl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:zl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Vl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Hl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Vl[e.combine]||`ENVMAP_BLENDING_NONE`}function Ul(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Rl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Bl(n),d=Hl(n),f=wl(n),p=Tl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Dl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Dl).join(`
`),g.length>0&&(g+=`
`)):(h=[Il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Dl).join(`
`),g=[Il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:xs.tonemapping_pars_fragment,n.toneMapping===0?``:xl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,xs.colorspace_pars_fragment,yl(`linearToOutputTexel`,n.outputColorSpace),Cl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Dl).join(`
`)),o=jl(o),o=Ol(o,n),o=kl(o,n),s=jl(s),s=Ol(s,n),s=kl(s,n),o=Pl(o),s=Pl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=fl(i,i.VERTEX_SHADER,v),x=fl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=vl(i,b,`vertex`),n=vl(i,x,`fragment`);qe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ke(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new dl(i,m),w=El(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,pl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ml++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Wl=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=Wl++,this.code=e,this.usedTimes=0}};function ql(e){return e===1030||e===37490||e===36285}function Jl(e,t,n,r,i,a){let o=new cn,s=new Gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&Ke(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ss[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,L=!!i.normalMap,R=!!i.displacementMap,z=!!i.emissiveMap,B=!!i.metalnessMap,V=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.diffuseRoughness>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ie&&!!i.anisotropyMap,pe=ae&&!!i.clearcoatMap,me=ae&&!!i.clearcoatNormalMap,he=ae&&!!i.clearcoatRoughnessMap,ge=oe&&!!i.diffuseRoughnessMap,_e=le&&!!i.iridescenceMap,ve=le&&!!i.iridescenceThicknessMap,ye=ue&&!!i.sheenColorMap,be=ue&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=de&&!!i.transmissionMap,Te=de&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,H=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let U=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,je={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?U.length-1:null,envMapSize:te?U[0].width:null,aoMap:I,lightMap:ne,bumpMap:re,normalMap:L,displacementMap:R,emissiveMap:z,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&ql(i.normalMap.format),metalnessMap:B,roughnessMap:V,anisotropy:ie,anisotropyMap:fe,clearcoat:ae,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,diffuseRoughness:oe,diffuseRoughnessMap:ge,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:ue,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:de,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:H,alphaHash:Oe,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:I&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:L&&p(i.normalMap.channel),displacementMapUv:R&&p(i.displacementMap.channel),emissiveMapUv:z&&p(i.emissiveMap.channel),metalnessMapUv:B&&p(i.metalnessMap.channel),roughnessMapUv:V&&p(i.roughnessMap.channel),anisotropyMapUv:fe&&p(i.anisotropyMap.channel),clearcoatMapUv:pe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(i.sheenRoughnessMap.channel),specularMapUv:xe&&p(i.specularMap.channel),specularColorMapUv:Se&&p(i.specularColorMap.channel),specularIntensityMapUv:Ce&&p(i.specularIntensityMap.channel),transmissionMapUv:we&&p(i.transmissionMap.channel),thicknessMapUv:Te&&p(i.thicknessMap.channel),alphaMapUv:De&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(L||ie),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||De),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:z&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ss[t];n=eo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ul(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Yl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ql(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Xl),r.length>1&&r.sort(t||Zl),i.length>1&&i.sort(t||Zl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function $l(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ql,e.set(t,[i])):n>=r.length?(i=new Ql,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function eu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new q};break;case`SpotLight`:n={position:new K,direction:new K,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function tu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var nu=0;function ru(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function iu(e){let t=new eu,n=tu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ru);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=nu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function au(e){let t=new iu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function ou(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new au(e),t.set(n,[a])):r>=i.length?(a=new au(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cu=`uniform sampler2D shadow_pass;
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
}`,lu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],uu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],du=new Xt,fu=new K,pu=new K;function mu(e,t,n){let i=new fi,a=new G,s=new G,c=new Gt,l=new so,u=new co,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:su,fragmentShader:cu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Y(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(Ke(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){Ke(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){Ke(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new _i(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new js(a.x),p.map.depthTexture=new vi(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new _i(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),fu.setFromMatrixPosition(d.matrixWorld),e.position.copy(fu),pu.copy(e.position),pu.add(lu[t]),e.up.copy(uu[t]),e.lookAt(pu),e.updateMatrixWorld(),n.makeTranslation(-fu.x,-fu.y,-fu.z),du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(du,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new qt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function hu(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Xe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,te={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Gt().fromArray(I),L=new Gt().fromArray(ne);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let z={};z[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),B(e.CULL_FACE),le(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(B(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:qe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:qe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:qe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?V(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?V(e.CULL_FACE):(B(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function me(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function he(t){t?B(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function _e(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||z[t]),i.type=t,i.texture=n)}function ve(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function H(){try{e.texImage3D(...arguments)}catch(e){qe(`WebGLState:`,e)}}function Oe(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function U(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Me(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function W(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,re.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:V,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:De,texImage3D:H,pixelStorei:ke,getParameter:Oe,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:Ae,viewport:U,reset:W}}function gu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ve(`canvas`)}function O(e,t,n){let r=1,i=W(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ke(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ke(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];Ke(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||Ke(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ne:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function M(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,Ke(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function N(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function P(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function te(e){ne(e.target)}function I(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,te),F(e),R(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,I),F(e),B(e)}function L(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function R(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&z(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function z(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function B(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ne(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let V=0;function ie(){V=0}function ae(){return V}function oe(e){V=e}function se(){let e=V;return e>=p.maxTextures&&Ke(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),V+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(e,t){let n=f.get(e);if(e.isVideoTexture&&je(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)Ke(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)Ke(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function de(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?xe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&Ke(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te),P(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&z(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Me(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=N(t,e);if(t.isDepthTexture)u=M(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=_s(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=_s(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=W(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=W(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Me(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=N(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=M(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?Ke(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=W(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),U(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ae(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=M(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;U(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);U(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?fe(t.depthTexture,0):le(t.depthTexture,0);let o=i.__webglTexture,s=Ae(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)U(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)U(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,I),P(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&U(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ae(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Te(e)}function H(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Oe=[];function ke(e){if(e.samples>0){if(U(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Oe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function U(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function je(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ke(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):qe(`WebGLTextures: Unsupported texture color space:`,n)),t}function W(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=U,this.dispose=L}function _u(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var vu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yu=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ro({vertexShader:vu,fragmentShader:yu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new Ga(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Ze{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new bu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new G,k=null,A=null,ee=new Ho;ee.viewport=new Gt;let j=new Ho;j.viewport=new Gt;let M=[ee,j],N=new Qo,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Dn,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ke(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ke(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new _i(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=ee.near=t,N.far=j.far=ee.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;re(N,i);for(let e=0;e<a.length;e++)re(a[e],i);N.projectionMatrix.copy(ee.projectionMatrix),N.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),L(e,N,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let R=null;function z(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new Ho,o.layers.enable(n),o.viewport=new Gt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new yi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let B=new ys;B.setAnimationLoop(z),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},Su=new Xt,Cu=new kt;Cu.set(-1,0,0,0,1,0,0,0,1);function wu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,$a(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Su.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Cu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?Ke(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):Ke(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Eu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Du=null;function Ou(){return Du===null&&(Du=new $r(Eu,16,16,k,g),Du.name=`DFG_LUT`,Du.minFilter=o,Du.magFilter=o,Du.wrapS=t,Du.wrapT=t,Du.generateMipmaps=!1,Du.needsUpdate=!0),Du}var ku=class{constructor(e={}){let{canvas:t=He(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,M=[],N=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,I=null,ne=null,re=null,L=null;this._outputColorSpace=Me;let R=0,z=0,B=null,V=-1,ie=null,ae=new Gt,oe=new Gt,se=null,ce=new q(0),le=0,ue=t.width,de=t.height,fe=1,pe=null,me=null,he=new Gt(0,0,ue,de),ge=new Gt(0,0,ue,de),_e=!1,ve=new fi,ye=new mi,be=!1,xe=!1,Se=new Xt,Ce=new K,we=new Gt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return B===null?fe:1}let H=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,U,je,W,Ne,Pe,Fe,Ie,Le,ze,Be,Ve,Ue,Ge,Je,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),H===null){let t=`webgl2`;if(H=Oe(t,e),H===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),qe(`WebGLRenderer: `+e.message),e}function rt(){ke=new Ys(H),ke.init(),et=new _u(H,ke),Ae=new ks(H,ke,e,et),U=new hu(H,ke),Ae.reversedDepthBuffer&&h&&U.buffers.depth.setReversed(!0),ne=H.createFramebuffer(),re=H.createFramebuffer(),L=H.createFramebuffer(),je=new Qs(H),W=new Yl,Ne=new gu(H,ke,U,W,Ae,et,je),Pe=new Js(F),Fe=new bs(H),tt=new Ds(H,Fe),Ie=new Xs(H,Fe,je,tt),Le=new ec(H,Ie,Fe,tt,je),Ze=new $s(H,Ae,Ne),Ge=new As(W),ze=new Jl(F,Pe,ke,Ae,tt,Ge),Be=new wu(F,W),Ve=new $l,Ue=new ou(ke),Xe=new Es(F,Pe,U,Le,x,s),Je=new mu(F,Le,Ae),nt=new Tu(H,je,Ae,U),Qe=new Os(H,ke,je),$e=new Zs(H,ke,je),je.programs=ze.programs,F.capabilities=Ae,F.extensions=ke,F.properties=W,F.renderLists=Ve,F.shadowMap=Je,F.state=U,F.info=je}S!==1009&&(P=new nc(S,t.width,t.height,o,r,i));let it=new xu(F,H);this.xr=it,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(ue,de,!1))},this.getSize=function(e){return e.set(ue,de)},this.setSize=function(e,n,r=!0){it.isPresenting?Ke(`WebGLRenderer: Can't change size while VR device is presenting.`):(ue=e,de=n,t.width=Math.floor(e*fe),t.height=Math.floor(n*fe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ue*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,n,r){ue=e,de=n,fe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)qe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ke(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(he)},this.setViewport=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),U.viewport(ae.copy(he).multiplyScalar(De()).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),U.scissor(oe.copy(ge).multiplyScalar(De()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(e){U.setScissorTest(_e=e)},this.setOpaqueSort=function(e){pe=e},this.setTransparentSort=function(e){me=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(B!==null){let t=B.texture.format;e=C.has(t)}if(e){let e=B.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,H.clearBufferuiv(H.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,H.clearBufferiv(H.COLOR,0,E))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ve.dispose(),Ue.dispose(),Ne.dispose(),W.dispose(),Pe.dispose(),Le.dispose(),Ie.dispose(),tt.dispose(),nt.dispose(),ze.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,mt),it.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),We(`WebGLRenderer: Context Lost.`),te=!0}function ot(){We(`WebGLRenderer: Context Restored.`),te=!1;let e=je.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;rt(),je.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function st(e){qe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),W.remove(e)}function ut(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Fe.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*De()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*De()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),be===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),j=Ue.get(n),j.init(t),N.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),I!==null&&I.updateLights(j.state.lightsArray),xe=this.localClippingEnabled,be=Ge.init(this.clippingPlanes,xe),be===!0&&Ge.setGlobalState(this.clippingPlanes,t),I!==null&&Je.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),j=N.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=W.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new ys;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?gt.stop():gt.start()},it.addEventListener(`sessionstart`,mt),it.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){qe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;I!==null&&I.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=P!==null&&(B===null||n)&&P.begin(F,B);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,B),j=Ue.get(e,N.length),j.init(t),j.state.textureUnits=Ne.getTextureUnits(),N.push(j),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ye.setFromArrayCamera(t):ve.setFromProjectionMatrix(Se,Re,t.reversedDepth),xe=this.localClippingEnabled,be=Ge.init(this.clippingPlanes,xe),k=Ve.get(e,M.length),k.init(),M.push(k),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,F.sortObjects)}_t(e,t,0,F.sortObjects),k.finish(),I!==null&&I.updateLights(j.state.lightsArray),F.sortObjects===!0&&k.sort(pe,me),Ee=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ee&&Xe.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),be===!0&&Ge.beginShadows();let i=j.state.shadowsArray;if(Je.render(i,e,t),be===!0&&Ge.endShadows(),(r&&P.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ee&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ee&&Xe.render(e),vt(k,e,t)}B!==null&&z===0&&(Ne.updateMultisampleRenderTarget(B),Ne.updateRenderTargetMipmap(B)),r&&P.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),tt.resetDefaultState(),V=-1,ie=null,N.pop(),N.length>0?(j=N[N.length-1],Ne.setTextureUnits(j.state.textureUnits),be===!0&&Ge.setGlobalState(F.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,I!==null&&I.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ye:ve;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Le.update(e),a=e.material;a.visible&&k.push(e,i,a,n,we.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ye:ve;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,we.z,s,t)}}else a.visible&&k.push(e,i,a,n,we.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),be===!0&&Ge.setGlobalState(F.clippingPlanes,n),r&&U.viewport(ae.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(ce),le=F.getClearAlpha(),le<1&&F.setClearColor(16777215,.5),F.clear(),Ee&&Xe.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),be===!0&&Ge.setGlobalState(F.clippingPlanes,r),bt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(ce,le),p!==void 0&&(r.viewport=p),F.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=Te);let r=W.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return G(e,s),d}else s.uniforms=ze.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,F),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),G(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=W.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=dl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function G(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Te),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=B===null?F.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=j.state.lights;if(be===!0&&(xe===!0||e!==ie)){let t=e===ie&&r.id===V;Ge.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?wt(r,t,i,s,h):Ct(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(U.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==V&&(V=r.id,w=!0),C||ie!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(H,`projectionMatrix`,e.projectionMatrix),E.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(H,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&E.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(H,`sunShadowMap`,y.state.sunShadowMap,Ne),y.state.directionalShadowMap.length>0&&E.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&E.setValue(H,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&E.setValue(H,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){E.setOptional(H,i,`bindMatrix`),E.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(H,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(E.setOptional(H,i,`batchingTexture`),E.setValue(H,`batchingTexture`,i._matricesTexture,Ne),E.setOptional(H,i,`batchingIdTexture`),E.setValue(H,`batchingIdTexture`,i._indirectTexture,Ne),E.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(H,`batchingColorTexture`,i._colorsTexture,Ne));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ze.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Ou()),w){if(E.setValue(H,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Dt(O,T),a&&r.fog===!0&&Be.refreshFogUniforms(O,a),Be.refreshMaterialUniforms(O,r,fe,de,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}dl.upload(H,Tt(v),O,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(dl.upload(H,Tt(v),O,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(H,`center`,i.center),E.setValue(H,`modelViewMatrix`,i.modelViewMatrix),E.setValue(H,`normalMatrix`,i.normalMatrix),E.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){B=e,R=t,z=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest,U.viewport(ae),U.scissor(oe),U.setScissorTest(se),V=-1;return}if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),se=e.scissorTest}else ae.copy(he).multiplyScalar(fe).floor(),oe.copy(ge).multiplyScalar(fe).floor(),se=_e;if(n!==0&&(r=ne),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(ae),U.scissor(oe),U.setScissorTest(se),i){let r=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}V=-1};function kt(e){let t=W.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){qe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=B===null?null:W.get(B).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=B===null?null:W.get(B).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Ye(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,re),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,L);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){R=0,z=0,B=null,U.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Re}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};function Au(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ju(e,t,n=0){let r=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,2654435761);return r^=r>>>15,r=Math.imul(r,2246822507),r^=r>>>13,r=Math.imul(r,3266489909),r^=r>>>16,(r>>>0)/4294967296}var Mu=new Float32Array([1,-1,1,-1,1,-1,0,0,.7071,-.7071,.7071,-.7071]),Nu=new Float32Array([1,1,-1,-1,0,0,1,-1,.7071,.7071,-.7071,-.7071]),Pu=.5*(Math.sqrt(3)-1),Fu=(3-Math.sqrt(3))/6,Iu=class{constructor(e=1){let t=Au(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}this.perm=new Uint8Array(512),this.pm12=new Uint8Array(512);for(let e=0;e<512;e++)this.perm[e]=n[e&255],this.pm12[e]=this.perm[e]%12}noise2(e,t){let n=this.perm,r=this.pm12,i=(e+t)*Pu,a=Math.floor(e+i),o=Math.floor(t+i),s=(a+o)*Fu,c=e-(a-s),l=t-(o-s),u=+(c>l),d=c>l?0:1,f=c-u+Fu,p=l-d+Fu,m=c-1+2*Fu,h=l-1+2*Fu,g=a&255,_=o&255,v=0,y=0,b=0,x=.5-c*c-l*l;if(x>0){let e=r[g+n[_]];x*=x,v=x*x*(Mu[e]*c+Nu[e]*l)}let S=.5-f*f-p*p;if(S>0){let e=r[g+u+n[_+d]];S*=S,y=S*S*(Mu[e]*f+Nu[e]*p)}let C=.5-m*m-h*h;if(C>0){let e=r[g+1+n[_+1]];C*=C,b=C*C*(Mu[e]*m+Nu[e]*h)}return 70*(v+y+b)}fbm(e,t,n=4,r=2.03,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.noise2(e*o+l*17.31,t*o-l*9.17),c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=4,r=2.07,i=.5){let a=1,o=1,s=0,c=0,l=1;for(let u=0;u<n;u++){let n=1-Math.abs(this.noise2(e*o+u*5.7,t*o+u*3.3));n*=n,n*=l,l=Math.min(1,Math.max(0,n*1.6)),s+=n*a,c+=a,a*=i,o*=r}return s/c}},Lu=(e,t,n)=>e<t?t:e>n?n:e,Ru=(e,t,n)=>e+(t-e)*n;function zu(e,t,n){let r=Lu((n-e)/(t-e),0,1);return r*r*(3-2*r)}var Bu=9.5,Vu=2,Hu=1e4,Uu={BOULDER:0,SAGUARO:1,YUCCA:2,SHRUB:3,OCOTILLO:4,PEBBLE:5},Wu=`desert`,Gu=28,Ku=new Iu(1),qu={cx:0,cz:0,ax:1500,az:1e3},Z={ready:!1,N:0,length:0,x:null,z:null,y:null,tx:null,tz:null,kappa:null,hdg:null,bbox:null,features:[]},Ju=null,Yu={h:0,rock:0,dune:0,wash:0,mount:0};function Xu(e,t,n){let r=Ku,i=r.fbm(e*.0015+9,t*.0015-4,3)*150+r.fbm(e*.006,t*.006,2)*24,a=e*.8+t*.6,o=270+70*r.fbm(e*6e-4,t*6e-4,2),s=(a+i)/o*Math.PI*2,c=(15+8*zu(-.25,.55,r.fbm(e*7e-4+40,t*7e-4-70,2)))*(.5-.5*Math.cos(s+.95*Math.sin(s))),l=(e*-.55+t*.83+i*.5)/84*Math.PI*2;c+=3.4*(.5-.5*Math.cos(l+.8*Math.sin(l)))*(.35+.65*(.5-.5*Math.cos(s))),c+=r.fbm(e*8e-4,t*8e-4,3)*11,c+=r.fbm(e*.045,t*.045,2)*.22+r.noise2(e*.18,t*.18)*.06;let u=0,d=Math.hypot((e-qu.cx)/qu.ax,(t-qu.cz)/qu.az);return d>1&&(u=zu(1,2.1,d),c+=u*(60+380*r.ridged(e*65e-5,t*65e-5,5))*(.45+.55*u)),n.h=c,n.rock=0,n.dune=1,n.wash=0,n.mount=u,n}function Zu(e,t,n=Yu){if(Wu===`dunes`)return Xu(e,t,n);let r=Ku,i=r.fbm(e*45e-5,t*45e-5,4)*26;i+=r.fbm(e*.0028+100,t*.0028,3)*4.2;let a=zu(.08,.5,r.fbm(e*75e-5-40,t*75e-5+60,3));if(a>0){let n=r.ridged(e*.0034,t*.0034,4),o=n*46,s=7.5,c=Math.floor(o/s);o=(c+zu(.62,.97,o/s-c))*s,i+=a*(o*.62+n*18)}let o=zu(.05,.55,r.fbm(e*6e-4+300,t*6e-4-200,2))*(1-a);if(o>0){let n=r.fbm(e*.0045,t*.0045,2)*46,a=(e*.82+t*.57+n)/58*Math.PI*2;i+=o*8.5*(.5-.5*Math.cos(a+.95*Math.sin(a)))}let s=1-zu(0,.04,Math.abs(r.fbm(e*.0011+7,t*.0011-3,2)));i-=s*3.4*(1-a*.6)*(1-o*.5);let c=0,l=Math.hypot((e-qu.cx)/qu.ax,(t-qu.cz)/qu.az);return l>1&&(c=zu(1,2.1,l),i+=c*(90+560*r.ridged(e*65e-5,t*65e-5,5))*(.45+.55*c)),c>.05&&(i+=c*c*r.ridged(e*.0042+13,t*.0042-7,3)*95),i+=r.fbm(e*.03,t*.03,3)*.55*(1-o*.7),i+=r.noise2(e*.11,t*.11)*.09,n.h=i,n.rock=a,n.dune=o,n.wash=s,n.mount=c,n}function Qu(e,t){return Zu(e,t,Yu).h}var $u={d:Hu,lat:0,h:0};function ed(e,t,n=$u){if(n.d=Hu,n.lat=0,n.h=0,!Ju)return n;let r=(e-Ju.x0)/Vu,i=(t-Ju.z0)/Vu,a=Math.floor(r),o=Math.floor(i);if(a<0||o<0||a>=Ju.nx-1||o>=Ju.nz-1)return n;let s=o*Ju.nx+a,c=Ju.lat,l=c[s],u=c[s+1],d=c[s+Ju.nx],f=c[s+Ju.nx+1];if(Math.abs(l)>=Hu||Math.abs(u)>=Hu||Math.abs(d)>=Hu||Math.abs(f)>=Hu)return n;let p=r-a,m=i-o,h=(l*(1-p)+u*p)*(1-m)+(d*(1-p)+f*p)*m,g=Ju.h;return n.h=(g[s]*(1-p)+g[s+1]*p)*(1-m)+(g[s+Ju.nx]*(1-p)+g[s+Ju.nx+1]*p)*m,n.lat=h,n.d=Math.abs(h),n}function td(e,t){let n=Zu(e,t,Yu).h,r=ed(e,t,$u);if(r.d>9.5+Gu)return n;let i=1-zu(10.5,Bu+Gu,r.d),a=n+(r.h-n)*i,o=(r.d-11.5)/1.3;return a+=.3*Math.exp(-o*o)*i,a}var nd={h:0,rock:0,dune:0,wash:0,mount:0},rd={d:0,lat:0,h:0};function id(e,t,n){let r=Zu(e,t,nd),i=ed(e,t,rd),a=r.h;if(i.d<=9.5+Gu){let e=1-zu(10.5,Bu+Gu,i.d);a=r.h+(i.h-r.h)*e;let t=(i.d-11.5)/1.3;a+=.3*Math.exp(-t*t)*e}return n.h=a,n.rock=Math.min(1,r.rock+r.mount*.8),n.dune=r.dune,n.wash=r.wash,n.lat=i.d>=Hu?90:i.lat,n}var ad={d:0};function od(e,t){let n=td(e,t),r=ed(e,t,ad).d<9.5?.014:.032;return n+(Ku.noise2(e*.34,t*.34)*r+Ku.noise2(e*1.15+9,t*1.15)*r*.35)}function sd(e,t,n,r=.55){let i=td(e+r,t),a=td(e-r,t),o=td(e,t+r),s=td(e,t-r);return n.set(a-i,2*r,s-o).normalize(),n}var cd={h:0,rock:0,dune:0,wash:0,mount:0},ld={d:0,lat:0,h:0};function ud(e,t,n){let r=Zu(e,t,cd),i=1-zu(8,12,ed(e,t,ld).d),a=Lu(r.dune*1.25,0,1)*(1-i*.85),o=Lu(r.rock+r.mount*.6,0,1)*(1-i),s=r.wash*(1-i),c=.98+.12*i;return c=Ru(c,.7,a),c=Ru(c,1.02,o*.6),c=Ru(c,.82,s*.6),n.mu=c,n.rr=.02+a*.05+(1-i)*.012+s*.01,n.road=i,n.sand=a,n.rock=o,n.gravel=s,n}function dd(e,t,n){let r=e.length,i=new Float64Array(r+1);for(let n=0;n<r;n++){let a=(n+1)%r;i[n+1]=i[n]+Math.hypot(e[a]-e[n],t[a]-t[n])}let a=i[r],o=Math.round(a/n),s=new Float64Array(o),c=new Float64Array(o),l=0;for(let n=0;n<o;n++){let u=n/o*a;for(;l<r-1&&i[l+1]<u;)l++;let d=(u-i[l])/Math.max(1e-6,i[l+1]-i[l]),f=(l+1)%r;s[n]=e[l]+(e[f]-e[l])*d,c[n]=t[l]+(t[f]-t[l])*d}return{x:s,z:c,total:a}}function fd(e,t,n=1){let r=e.length,i=Float64Array.from(e);for(let e=0;e<n;e++){let e=new Float64Array(r);for(let n=0;n<r;n++){let a=0;for(let e=-t;e<=t;e++)a+=i[(n+e+r*4)%r];e[n]=a/(2*t+1)}i=e}return i}function pd(e=7,t={}){Wu=t.map===`dunes`?`dunes`:`desert`,Gu=Wu===`dunes`?15:28,Ku=new Iu(e+(Wu===`dunes`?101:0)),Ju=null;let n=t.length||(Wu===`dunes`?6600:5200),r=[];for(let e=0;e<26;e++){let t=e/26*Math.PI*2,n=1+.3*Math.sin(2*t+.8)+.17*Math.sin(3*t+2.1)+.07*Math.sin(5*t+.4)+.05*Math.sin(7*t+1.3);r.push(new K(1.5*n*Math.cos(t)*700,0,.92*n*Math.sin(t)*700))}let i=new Fi(r,!0,`centripetal`).getSpacedPoints(1600);i.pop();let a=dd(i.map(e=>e.x),i.map(e=>e.z),4),o=n/a.total;a=dd(Array.from(a.x,e=>e*o),Array.from(a.z,e=>e*o),3);{let e=a.x.length,t=a.total,n=[[.27,.38,20,240],[.69,.78,17,215],[.88,.95,14,190]],r=new Float64Array(e),i=new Float64Array(e);for(let o=0;o<e;o++){let s=a.x[(o+1)%e]-a.x[(o-1+e)%e],c=a.z[(o+1)%e]-a.z[(o-1+e)%e],l=Math.hypot(s,c)||1,u=o/e*t,d=0;for(let[e,r,i,a]of n){let n=(u/t-e)/(r-e);n>0&&n<1&&(d+=i*Math.sin(n*Math.PI)*Math.sin(2*Math.PI*(u-e*t)/a))}r[o]=a.x[o]+-c/l*d,i[o]=a.z[o]+s/l*d}a=dd(Array.from(r),Array.from(i),3)}let s=a.x.length;Z.N=s,Z.length=a.total,Z.x=a.x,Z.z=a.z;let c=1e9,l=-1e9,u=1e9,d=-1e9;for(let e=0;e<s;e++)c=Math.min(c,a.x[e]),l=Math.max(l,a.x[e]),u=Math.min(u,a.z[e]),d=Math.max(d,a.z[e]);qu={cx:(c+l)/2,cz:(u+d)/2,ax:(l-c)/2+520,az:(d-u)/2+520},Z.bbox={minX:c,maxX:l,minZ:u,maxZ:d},Z.tx=new Float64Array(s),Z.tz=new Float64Array(s),Z.hdg=new Float64Array(s);for(let e=0;e<s;e++){let t=a.x[(e+1)%s]-a.x[(e-1+s)%s],n=a.z[(e+1)%s]-a.z[(e-1+s)%s],r=Math.hypot(t,n);Z.tx[e]=t/r,Z.tz[e]=n/r,Z.hdg[e]=Math.atan2(t,n)}let f=new Float64Array(s);for(let e=0;e<s;e++){let t=(e+1)%s,n=(e-1+s)%s,r=Z.tx[n]*Z.tz[t]-Z.tz[n]*Z.tx[t];f[e]=r/6}Z.kappa=fd(f,3,2);let p=new Float64Array(s);for(let e=0;e<s;e++)p[e]=Qu(a.x[e],a.z[e]);let m=Wu===`dunes`,h=fd(p,m?5:16,m?2:3),g=fd(p,m?2:6,m?1:2),_=new Float64Array(s);for(let e=0;e<s;e++)_[e]=h[e]*.72+g[e]*.28;let v=a.total;Z.features=(m?[]:[[`jump`,.075,2.1,10],[`whoops`,.125,.42,.045],[`jump`,.215,2.7,11],[`dip`,.31,1.4,22],[`jump`,.445,3.3,12],[`whoops`,.515,.5,.05],[`jump`,.6,2.4,10],[`dip`,.665,1.9,24],[`jump`,.74,2.9,11],[`whoops`,.8,.4,.04],[`jump`,.925,2.2,10]]).map(([e,t,n,r])=>({type:e,s:t*v,amp:n,w:r}));for(let e=0;e<s;e++){let t=e/s*v;for(let n of Z.features){let r=t-n.s;if(r>v/2&&(r-=v),r<-v/2&&(r+=v),n.type===`jump`){let t=r/n.w;_[e]+=n.amp*Math.exp(-t*t)*1}else if(n.type===`dip`){let t=r/n.w;_[e]-=n.amp*Math.exp(-t*t)}else{let t=n.w*v*.5;if(Math.abs(r)<t){let i=Math.sin((r+t)/(2*t)*Math.PI);_[e]+=n.amp*i*Math.sin(r/8.5*Math.PI*2)}}}}Z.y=_;let y=49.5,b=c-y,x=u-y,S=Math.ceil((l-c+2*y)/Vu)+2,C=Math.ceil((d-u+2*y)/Vu)+2,w=new Float32Array(S*C).fill(Hu),T=new Float32Array(S*C),E=43.5;for(let e=0;e<s;e++){let t=(e+1)%s,n=a.x[e],r=a.z[e],i=a.x[t],o=a.z[t],c=i-n,l=o-r,u=c*c+l*l,d=Math.max(0,Math.floor((Math.min(n,i)-E-b)/Vu)),f=Math.min(S-1,Math.ceil((Math.max(n,i)+E-b)/Vu)),p=Math.max(0,Math.floor((Math.min(r,o)-E-x)/Vu)),m=Math.min(C-1,Math.ceil((Math.max(r,o)+E-x)/Vu));for(let i=p;i<=m;i++)for(let a=d;a<=f;a++){let o=b+a*Vu,s=x+i*Vu,d=Lu(((o-n)*c+(s-r)*l)/u,0,1),f=o-(n+c*d),p=s-(r+l*d),m=Math.hypot(f,p);if(m>E)continue;let h=i*S+a;m<Math.abs(w[h])&&(w[h]=c*(s-r)-l*(o-n)>=0?m:-m,T[h]=_[e]+(_[t]-_[e])*d)}}Ju={x0:b,z0:x,nx:S,nz:C,lat:w,h:T},Z.ready=!0,_d.clear();for(let e=0;e<s;e++)Z.y[e]=td(a.x[e],a.z[e]);return Z}function md(e,t,n=-1,r=45){let i=Z.N,a=Z.x,o=Z.z,s=-1,c=0xde0b6b3a7640000;if(n>=0)for(let l=-r;l<=r;l++){let r=(n+l+i)%i,u=e-a[r],d=t-o[r],f=u*u+d*d;f<c&&(c=f,s=r)}else for(let n=0;n<i;n++){let r=e-a[n],i=t-o[n],l=r*r+i*i;l<c&&(c=l,s=n)}return s}function hd(e){let t=Z.N,n=Math.floor(e/2),r=e%2,i=(t-5-n*4+t*4)%t,a=r===0?-3.4:3.4,o=(i+Math.round((r===0?0:-3)/3)+t)%t,s=-Z.tz[o],c=Z.tx[o];return{x:Z.x[o]+s*a,z:Z.z[o]+c*a,heading:Z.hdg[o],idx:o}}var gd=14,_d=new Map,vd={h:0,rock:0,dune:0,wash:0,mount:0},yd={d:0,lat:0,h:0};function bd(e,t){let n=[],r=e*gd,i=t*gd,a=r+gd/2,o=t*gd+gd/2,s=Zu(a,o,vd);if(s.mount>.85)return n;let c=zu(-.35,.45,Ku.fbm(a*.004+50,o*.004-20,2))*(1-.85*s.dune)*(1-.55*s.rock)*(1-.7*s.mount)+.05,l=[[Uu.SHRUB,2.4*c+.2*s.wash],[Uu.BOULDER,.05+1.05*s.rock+.25*s.mount],[Uu.SAGUARO,.18*c*(1-s.wash)],[Uu.YUCCA,.22*c*(1-s.wash)],[Uu.OCOTILLO,.2*c],[Uu.PEBBLE,2.6*(.35+.65*s.rock+.3*s.wash)]];Wu===`dunes`&&(l[0][1]*=.45,l[1][1]*=.06,l[2][1]=0,l[3][1]*=.5,l[4][1]*=.5,l[5][1]*=.06);let u=11;for(let[a,o]of l){u+=7;let s=Math.floor(o+ju(e,t,u));for(let o=0;o<s;o++){let s=ju(e,t,u*31+o*5+1),c=ju(e,t,u*31+o*5+2),l=r+s*gd,d=i+c*gd,f=ed(l,d,yd),p=a===Uu.PEBBLE||a===Uu.SHRUB?11:14;if(f.d<p)continue;let m=ju(e,t,u*31+o*5+3),h=ju(e,t,u*31+o*5+4),g=td(l,d),_=1,v=0;switch(a){case Uu.BOULDER:_=.55+m*m*2.6,v=_*.92;break;case Uu.SAGUARO:_=.7+m*.75,v=.42*_;break;case Uu.YUCCA:_=.7+m*.7,v=.5*_;break;case Uu.SHRUB:_=.5+m*.9,v=0;break;case Uu.OCOTILLO:_=.7+m*.7,v=.12;break;default:_=.12+m*.3,v=0}n.push({x:l,z:d,y:g,type:a,s:_,r:v,rot:h*Math.PI*2,tint:ju(e,t,u*31+o*5+9)})}}return n}function xd(e,t){let n=(e+32768)*65536+(t+32768),r=_d.get(n);if(!r&&(r=bd(e,t),_d.set(n,r),_d.size>9e3)){let e=_d.keys().next().value;_d.delete(e)}return r}function Sd(e,t,n,r){let i=Math.floor((e-n)/gd),a=Math.floor((e+n)/gd),o=Math.floor((t-n)/gd),s=Math.floor((t+n)/gd);for(let e=o;e<=s;e++)for(let t=i;t<=a;t++){let n=xd(t,e);for(let e=0;e<n.length;e++){let t=n[e];t.r>0&&r(t)}}}var Cd=.0254,wd=.4536,Td={tacoma1:{make:`Toyota`,model:`Tacoma`,gen:`1st Gen`,years:`1995–2004`,wb:121.9,len:203.1,wid:70.3,hgt:67.7,lb:3800,hp:190,nm:298,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.8,arch:2.2,cab:`double`,fascia:`tacoma1`,tail:`TACOMA`,belt:1},tacoma2:{make:`Toyota`,model:`Tacoma`,gen:`2nd Gen`,years:`2005–2015`,wb:127.4,len:208.1,wid:74.6,hgt:70.1,lb:4400,hp:236,nm:361,front:`coil`,rear:`leaf`,travelF:8.5,travelR:10,tire:32,round:.5,arch:3,cab:`double`,fascia:`tacoma2`,tail:`TACOMA`,belt:1.03},tacoma3:{make:`Toyota`,model:`Tacoma`,gen:`3rd Gen`,years:`2016–2023`,wb:127.4,len:212.3,wid:74.4,hgt:70.6,lb:4500,hp:278,nm:359,front:`coil`,rear:`leaf`,travelF:9,travelR:10.5,tire:33,round:.4,arch:3,cab:`double`,fascia:`tacoma3`,tail:`TACOMA`,belt:1.05},tacoma4:{make:`Toyota`,model:`Tacoma`,gen:`4th Gen`,years:`2024+`,wb:131.9,len:213,wid:77.9,hgt:74.6,lb:4900,hp:326,nm:630,front:`coil`,rear:`coil`,travelF:9.5,travelR:11,tire:33,round:.25,arch:3.6,cab:`double`,fascia:`tacoma4`,tail:`TACOMA`,belt:1.08},ranger1:{make:`Ford`,model:`Ranger`,gen:`1st Gen`,years:`1983–1992`,wb:125,len:193.6,wid:66.8,hgt:66.7,lb:3100,hp:160,nm:305,front:`ttb`,rear:`leaf`,travelF:9,travelR:8,tire:29,round:.05,arch:3.4,cab:`ext`,fascia:`ranger1`,tail:`RANGER`,belt:.95},ranger2:{make:`Ford`,model:`Ranger`,gen:`2nd Gen`,years:`1993–1997`,wb:125.2,len:198.2,wid:69.4,hgt:67.5,lb:3300,hp:160,nm:305,front:`ttb`,rear:`leaf`,travelF:9,travelR:8.5,tire:30,round:.7,arch:2.3,cab:`ext`,fascia:`ranger2`,tail:`RANGER`,belt:.96},ranger3:{make:`Ford`,model:`Ranger`,gen:`3rd Gen`,years:`1998–2011`,wb:125.9,len:203.6,wid:71.3,hgt:67.7,lb:3500,hp:207,nm:325,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.45,arch:2.6,cab:`ext`,fascia:`ranger3`,tail:`RANGER`,belt:1},ranger4:{make:`Ford`,model:`Ranger`,gen:`T6`,years:`2019–2023`,wb:126.8,len:210.8,wid:73.3,hgt:71.5,lb:4400,hp:270,nm:420,front:`coil`,rear:`leaf`,travelF:9,travelR:10,tire:32,round:.4,arch:3,cab:`double`,fascia:`ranger4`,tail:`RANGER`,belt:1.08},ranger5:{make:`Ford`,model:`Ranger`,gen:`2024+ Lariat`,years:`2024+`,wb:128.7,len:210.6,wid:75.5,hgt:74.4,lb:4600,hp:315,nm:542,front:`coil`,rear:`leaf`,travelF:9.5,travelR:10.5,tire:32,round:.25,arch:3.4,cab:`double`,fascia:`ranger5`,tail:`RANGER`,belt:1.08},ranger5r:{make:`Ford`,model:`Ranger Raptor`,gen:`2024+`,years:`2024+`,wb:128.7,len:210.9,wid:79.8,hgt:75.9,lb:5300,hp:405,nm:583,front:`coil`,rear:`coil`,travelF:10.1,travelR:10.1,tire:33,round:.25,arch:3.8,cab:`double`,fascia:`rangerR`,tail:`RAPTOR`,belt:1.08,shock:`foxLive25`},tundra1:{make:`Toyota`,model:`Tundra`,gen:`1st Gen`,years:`2000–2006`,wb:140.5,len:230.1,wid:79.3,hgt:74.4,lb:5e3,hp:282,nm:441,front:`coil`,rear:`leaf`,travelF:8.5,travelR:10,tire:32,round:.7,arch:2.4,cab:`double`,fascia:`tundra1`,tail:`TUNDRA`,belt:1.1},tundra2:{make:`Toyota`,model:`Tundra`,gen:`2nd Gen`,years:`2007–2021`,wb:145.7,len:228.9,wid:79.9,hgt:76,lb:5600,hp:381,nm:544,front:`coil`,rear:`leaf`,travelF:9,travelR:11,tire:33,round:.4,arch:3.2,cab:`double`,fascia:`tundra2`,tail:`TUNDRA`,belt:1.18},tundra3:{make:`Toyota`,model:`Tundra`,gen:`3rd Gen`,years:`2022+`,wb:145.7,len:233.6,wid:80.2,hgt:78,lb:5900,hp:437,nm:790,front:`coil`,rear:`coil`,travelF:9.5,travelR:11.5,tire:33,round:.2,arch:3.8,cab:`double`,fascia:`tundra3`,tail:`TUNDRA`,belt:1.2},raptor1:{make:`Ford`,model:`SVT Raptor`,gen:`Gen 1`,years:`2010–2014`,wb:133.3,len:220.6,wid:86.3,hgt:78.5,lb:6e3,hp:411,nm:588,front:`coil`,rear:`leaf`,travelF:11.2,travelR:12.1,tire:35,round:.3,arch:3.6,cab:`double`,fascia:`raptor1`,tail:`RAPTOR`,belt:1.22,shock:`foxIbp25`,wide:!0},raptor2:{make:`Ford`,model:`F-150 Raptor`,gen:`Gen 2`,years:`2017–2020`,wb:146,len:231.9,wid:86.3,hgt:78.5,lb:5550,hp:450,nm:691,front:`coil`,rear:`leaf`,travelF:13,travelR:13.9,tire:35,round:.2,arch:3.8,cab:`double`,fascia:`raptor2`,tail:`RAPTOR`,belt:1.24,shock:`foxIbp30`,wide:!0},raptor3:{make:`Ford`,model:`F-150 Raptor`,gen:`Gen 3`,years:`2021+`,wb:145.4,len:232.6,wid:86.6,hgt:79.8,lb:5700,hp:450,nm:691,front:`coil`,rear:`coil`,travelF:14,travelR:15,tire:35,round:.15,arch:4,cab:`double`,fascia:`raptor3`,tail:`RAPTOR`,belt:1.24,shock:`foxLive31`,wide:!0},silverado99:{make:`Chevrolet`,model:`Silverado 1500`,gen:`"Bubble Eye"`,years:`1999–2002`,wb:143.5,len:227.7,wid:78.5,hgt:73.9,lb:4900,hp:285,nm:325,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.62,arch:2.4,cab:`double`,fascia:`silverado99`,tail:`CHEVROLET`,belt:1},silverado03:{make:`Chevrolet`,model:`Silverado 1500`,gen:`Cateye`,years:`2003–2007 Classic`,wb:143.5,len:225.9,wid:78.5,hgt:75,lb:5e3,hp:295,nm:335,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.55,arch:2.9,cab:`double`,fascia:`silverado03`,tail:`CHEVROLET`,belt:1},silverado07:{make:`Chevrolet`,model:`Silverado 1500`,gen:`GMT900`,years:`2007–2013`,wb:143.5,len:230.2,wid:80,hgt:73.7,lb:5200,hp:403,nm:417,front:`torsion`,rear:`leaf`,travelF:8.5,travelR:10,tire:32,round:.45,arch:3.1,cab:`double`,fascia:`silverado07`,tail:`CHEVROLET`,belt:1.05},silverado14:{make:`Chevrolet`,model:`Silverado 1500`,gen:`K2XX`,years:`2014–2018`,wb:143.5,len:230,wid:80,hgt:74,lb:5200,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:9,travelR:10.5,tire:32,round:.35,arch:3.4,cab:`double`,fascia:`silverado14`,tail:`CHEVROLET`,belt:1.08},silverado19:{make:`Chevrolet`,model:`Silverado 1500`,gen:`T1XX`,years:`2019–2021`,wb:147.5,len:231.7,wid:81.2,hgt:78.4,lb:5100,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:9.5,travelR:11,tire:33,round:.28,arch:3.7,cab:`double`,fascia:`silverado19`,tail:`CHEVROLET`,belt:1.12},silverado22:{make:`Chevrolet`,model:`Silverado 1500`,gen:`T1XX refresh`,years:`2022+`,wb:147.5,len:232.9,wid:81.2,hgt:78.5,lb:5500,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:10,travelR:11.5,tire:33,round:.25,arch:3.8,cab:`double`,fascia:`silverado22`,tail:`CHEVROLET`,belt:1.12},sierra99:{make:`GMC`,model:`Sierra 1500`,gen:`GMT800`,years:`1999–2002`,wb:143.5,len:227.7,wid:78.5,hgt:73.9,lb:4900,hp:285,nm:325,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.6,arch:2.4,cab:`double`,fascia:`sierra99`,tail:`GMC`,belt:1},sierra03:{make:`GMC`,model:`Sierra 1500`,gen:`GMT800 refresh`,years:`2003–2007 Classic`,wb:143.5,len:228.4,wid:78.5,hgt:75,lb:5e3,hp:295,nm:335,front:`torsion`,rear:`leaf`,travelF:8,travelR:9,tire:31,round:.52,arch:2.9,cab:`double`,fascia:`sierra03`,tail:`GMC`,belt:1},sierra07:{make:`GMC`,model:`Sierra 1500`,gen:`GMT900`,years:`2007–2013`,wb:143.5,len:230.2,wid:80,hgt:73.7,lb:5200,hp:403,nm:417,front:`torsion`,rear:`leaf`,travelF:8.5,travelR:10,tire:32,round:.45,arch:3.1,cab:`double`,fascia:`sierra07`,tail:`GMC`,belt:1.05},sierra14:{make:`GMC`,model:`Sierra 1500`,gen:`K2XX`,years:`2014–2018`,wb:143.5,len:229.5,wid:80,hgt:74,lb:5200,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:9,travelR:10.5,tire:32,round:.33,arch:3.4,cab:`double`,fascia:`sierra14`,tail:`GMC`,belt:1.08},sierra19:{make:`GMC`,model:`Sierra 1500`,gen:`T1XX`,years:`2019–2023`,wb:147.5,len:232.2,wid:81.2,hgt:78.4,lb:5100,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:9.5,travelR:11,tire:33,round:.28,arch:3.7,cab:`double`,fascia:`sierra19`,tail:`GMC`,belt:1.12},sierra24:{make:`GMC`,model:`Sierra 1500`,gen:`T1XX refresh`,years:`2024+`,wb:147.6,len:234,wid:81.2,hgt:78.7,lb:5600,hp:420,nm:460,front:`coil`,rear:`leaf`,travelF:10,travelR:11.5,tire:33,round:.22,arch:3.8,cab:`double`,fascia:`sierra24`,tail:`GMC`,belt:1.12}},Ed={tacoma1:{fo:.826,cowl:1.549,roofF:2.337,roofR:3.335,cabB:3.411,belt:1.232,roof:1.72,hoodF:1.016,hoodC:1.168,corner:.2,droop:.04,flare:.02,dome:{w:.3,h:.012,z0:.2,z1:1.4}},tacoma2:{fo:.876,cowl:1.575,roofF:2.388,roofR:3.462,cabB:3.538,belt:1.283,roof:1.781,hoodF:1.092,hoodC:1.232,corner:.2,droop:.05,flare:.035,dome:{w:.3,h:.035,z0:.18,z1:1.5}},tacoma3:{fo:.914,cowl:1.626,roofF:2.451,roofR:3.564,cabB:3.64,belt:1.295,roof:1.793,hoodF:1.13,hoodC:1.257,corner:.22,droop:.05,flare:.045,dome:{w:.34,h:.04,z0:.2,z1:1.55}},tacoma4:{fo:.876,cowl:1.524,roofF:2.148,roofR:3.586,cabB:3.663,belt:1.384,roof:1.895,hoodF:1.206,hoodC:1.372,corner:.16,droop:.04,flare:.05,dome:{w:.42,h:.035,z0:.2,z1:1.45}},tundra1:{fo:.953,cowl:1.753,roofF:2.596,roofR:3.622,cabB:3.698,belt:1.372,roof:1.89,hoodF:1.156,hoodC:1.321,corner:.2,droop:.04,flare:.03,dome:{w:.34,h:.02,z0:.2,z1:1.65}},tundra2:{fo:.991,cowl:1.778,roofF:2.632,roofR:3.828,cabB:3.904,belt:1.422,roof:1.93,hoodF:1.257,hoodC:1.397,corner:.16,droop:.04,flare:.045,dome:{w:.36,h:.04,z0:.2,z1:1.7}},tundra3:{fo:1.029,cowl:1.88,roofF:2.733,roofR:3.947,cabB:4.023,belt:1.46,roof:1.981,hoodF:1.333,hoodC:1.448,corner:.12,droop:.03,flare:.05,dome:{w:.46,h:.03,z0:.2,z1:1.8}},ranger1:{fo:.737,cowl:1.422,roofF:1.803,roofR:2.845,cabB:2.896,belt:1.127,roof:1.694,hoodF:1.017,hoodC:1.22,corner:.08,droop:.03,flare:.03},ranger2:{fo:.787,cowl:1.473,roofF:2.032,roofR:2.972,cabB:3.048,belt:1.14,roof:1.714,hoodF:1.003,hoodC:1.226,corner:.22,droop:.04,flare:.03,dome:{w:.3,h:.015,z0:.2,z1:1.42}},ranger3:{fo:.838,cowl:1.549,roofF:2.108,roofR:3.073,cabB:3.15,belt:1.152,roof:1.72,hoodF:1.023,hoodC:1.238,corner:.18,droop:.05,flare:.03,dome:{w:.3,h:.03,z0:.2,z1:1.5}},ranger4:{fo:.909,cowl:1.727,roofF:2.515,roofR:3.454,cabB:3.531,belt:1.344,roof:1.816,hoodF:1.208,hoodC:1.271,corner:.16,droop:.05,flare:.03,dome:{w:.35,h:.03,z0:.2,z1:1.68}},ranger5:{fo:.856,cowl:1.778,roofF:2.616,roofR:3.505,cabB:3.581,belt:1.408,roof:1.89,hoodF:1.266,hoodC:1.323,corner:.14,droop:.05,flare:.03,dome:{w:.4,h:.03,z0:.2,z1:1.73}},ranger5r:{fo:.861,cowl:1.778,roofF:2.642,roofR:3.505,cabB:3.581,belt:1.436,roof:1.928,hoodF:1.301,hoodC:1.359,corner:.12,droop:.05,flare:.08,dome:{w:.45,h:.06,z0:.2,z1:1.73}},raptor1:{fo:.965,cowl:2.007,roofF:2.591,roofR:3.556,cabB:3.632,belt:1.555,roof:1.994,hoodF:1.326,hoodC:1.555,corner:.14,droop:.05,flare:.12,dome:{w:.4,h:.025,z0:.2,z1:1.9}},raptor2:{fo:.978,cowl:2.045,roofF:2.629,roofR:3.861,cabB:3.937,belt:1.545,roof:1.994,hoodF:1.356,hoodC:1.565,corner:.14,droop:.05,flare:.12,dome:{w:.5,h:.05,z0:.2,z1:1.9}},raptor3:{fo:.978,cowl:2.083,roofF:2.667,roofR:3.861,cabB:3.937,belt:1.571,roof:2.027,hoodF:1.399,hoodC:1.591,corner:.12,droop:.05,flare:.12,dome:{w:.55,h:.045,z0:.2,z1:1.9}},silverado99:{fo:.945,cowl:1.288,roofF:1.93,roofR:3.48,cabB:3.581,belt:1.27,roof:1.877,hoodF:1.156,hoodC:1.372,corner:.3,droop:.06,flare:.03,dome:{w:.3,h:.02,z0:.2,z1:1.24}},silverado03:{fo:.94,cowl:1.283,roofF:1.943,roofR:3.696,cabB:3.785,belt:1.295,roof:1.905,hoodF:1.12,hoodC:1.3,corner:.26,droop:.015,brow:.035,browX:[.5,.62],flare:.03,dome:{w:.25,h:.05,z0:.2,z1:1.23}},silverado07:{fo:.983,cowl:1.333,roofF:2.007,roofR:3.759,cabB:3.861,belt:1.283,roof:1.872,hoodF:1.181,hoodC:1.384,corner:.2,droop:.05,flare:.03,dome:{w:.4,h:.04,z0:.2,z1:1.28}},silverado14:{fo:.986,cowl:1.341,roofF:2.032,roofR:3.759,cabB:3.861,belt:1.321,roof:1.88,hoodF:1.232,hoodC:1.422,corner:.16,droop:.05,flare:.03,dome:{w:.5,h:.035,z0:.2,z1:1.29}},silverado19:{fo:1.003,cowl:1.333,roofF:2.057,roofR:3.759,cabB:3.861,belt:1.42,roof:1.991,hoodF:1.331,hoodC:1.524,corner:.1,droop:.05,flare:.03,dome:{w:.55,h:.035,z0:.2,z1:1.28}},silverado22:{fo:1.016,cowl:1.333,roofF:2.057,roofR:3.759,cabB:3.861,belt:1.42,roof:1.994,hoodF:1.331,hoodC:1.524,corner:.1,droop:.05,flare:.03,dome:{w:.55,h:.035,z0:.2,z1:1.28}},sierra99:{fo:.945,cowl:1.288,roofF:1.93,roofR:3.48,cabB:3.581,belt:1.27,roof:1.877,hoodF:1.168,hoodC:1.372,corner:.3,droop:.06,flare:.03,dome:{w:.3,h:.02,z0:.2,z1:1.24}},sierra03:{fo:1.003,cowl:1.333,roofF:1.943,roofR:3.696,cabB:3.785,belt:1.295,roof:1.905,hoodF:1.206,hoodC:1.397,corner:.24,droop:.06,flare:.03,dome:{w:.28,h:.04,z0:.2,z1:1.28}},sierra07:{fo:1.003,cowl:1.346,roofF:2.007,roofR:3.759,cabB:3.861,belt:1.283,roof:1.872,hoodF:1.219,hoodC:1.384,corner:.18,droop:.05,flare:.03,dome:{w:.4,h:.035,z0:.2,z1:1.3}},sierra14:{fo:.991,cowl:1.341,roofF:2.032,roofR:3.759,cabB:3.861,belt:1.321,roof:1.88,hoodF:1.245,hoodC:1.422,corner:.12,droop:.05,flare:.03,dome:{w:.5,h:.035,z0:.2,z1:1.29}},sierra19:{fo:1.029,cowl:1.333,roofF:2.057,roofR:3.759,cabB:3.861,belt:1.42,roof:1.991,hoodF:1.333,hoodC:1.524,corner:.1,droop:.05,flare:.03,dome:{w:.55,h:.035,z0:.2,z1:1.28}},sierra24:{fo:1.041,cowl:1.346,roofF:2.057,roofR:3.759,cabB:3.861,belt:1.42,roof:1.999,hoodF:1.359,hoodC:1.524,corner:.08,droop:.05,flare:.03,dome:{w:.55,h:.035,z0:.2,z1:1.3}}};for(let e in Ed)Td[e]&&(Td[e].prof=Ed[e]);var Dd=[{id:`Tacoma`,keys:[`tacoma1`,`tacoma2`,`tacoma3`,`tacoma4`]},{id:`Ranger`,keys:[`ranger1`,`ranger2`,`ranger3`,`ranger4`,`ranger5`,`ranger5r`]},{id:`Tundra`,keys:[`tundra1`,`tundra2`,`tundra3`]},{id:`Raptor`,keys:[`raptor1`,`raptor2`,`raptor3`]},{id:`Silverado`,keys:[`silverado99`,`silverado03`,`silverado07`,`silverado14`,`silverado19`,`silverado22`]},{id:`Sierra`,keys:[`sierra99`,`sierra03`,`sierra07`,`sierra14`,`sierra19`,`sierra24`]}],Od=1513499,kd=13488856,Ad=1946323,jd={oem:{name:`Factory twin-tube`,brand:`OEM`,dia:2,c:.34,bypass:0,heat:.45,cool:.5,fade:.55,hyd:0,res:0,body:2105636,ring:2105636,spring:1842206,price:`Stock`,blurb:`Small oil volume. Fades fast on whoops.`},fox20:{name:`Fox 2.0 Performance`,brand:`Fox`,dia:2,c:.44,bypass:0,heat:.7,cool:.8,fade:.42,hyd:0,res:0,body:Od,ring:16738816,spring:12172480,blurb:`Monotube street/trail step up.`},foxIbp25:{name:`Fox 2.5 Internal Bypass`,brand:`Fox`,dia:2.5,c:.5,bypass:.55,heat:1.1,cool:1.1,fade:.32,hyd:0,res:1,body:Od,ring:16738816,spring:12172480,blurb:`Position-sensitive zones inside the body (Gen 1 Raptor recipe).`},fox25:{name:`Fox 2.5 Factory Race`,brand:`Fox`,dia:2.5,c:.56,bypass:0,heat:1.2,cool:1.25,fade:.28,hyd:1,res:1,body:Od,ring:16738816,spring:12172480,blurb:`Remote reservoir, firm and controlled.`},foxIbp30:{name:`Fox 3.0 Internal Bypass`,brand:`Fox`,dia:3,c:.56,bypass:.75,heat:1.7,cool:1.5,fade:.22,hyd:1,res:1,body:Od,ring:16738816,spring:12172480,blurb:`More oil, more stroke zones (Gen 2 Raptor recipe).`},foxLive25:{name:`Fox 2.5 Live Valve`,brand:`Fox`,dia:2.5,c:.52,bypass:.5,heat:1.2,cool:1.3,fade:.26,hyd:1,res:1,live:1,body:Od,ring:2784255,spring:12172480,blurb:`Electronic valving stiffens when it senses air or big hits.`},foxLive31:{name:`Fox 3.1 Live Valve`,brand:`Fox`,dia:3.1,c:.56,bypass:.8,heat:1.9,cool:1.6,fade:.2,hyd:1,res:1,live:1,body:Od,ring:2784255,spring:12172480,blurb:`Electronic internal bypass (Gen 3 Raptor recipe).`},king25:{name:`King 2.5 Performance`,brand:`King`,dia:2.5,c:.52,bypass:0,heat:1.3,cool:1.3,fade:.26,hyd:1,res:1,body:kd,ring:Ad,spring:2053576,blurb:`Remote reservoir, smooth and plush.`},king30:{name:`King 3.0 Race + 3-tube bypass`,brand:`King`,dia:3,c:.54,bypass:1,heat:2.1,cool:1.8,fade:.16,hyd:2,res:1,tubes:3,body:kd,ring:Ad,spring:2053576,blurb:`External tubes: soft mid-stroke, huge end-stroke support.`},king35:{name:`King 3.5 Race + 4-tube bypass`,brand:`King`,dia:3.5,c:.56,bypass:1.25,heat:2.9,cool:2.1,fade:.1,hyd:2,res:1,tubes:4,body:kd,ring:Ad,spring:2053576,blurb:`Race truck hardware. Survives anything.`},fox35:{name:`Fox 3.5 Race + 4-tube bypass`,brand:`Fox`,dia:3.5,c:.6,bypass:1.2,heat:2.8,cool:2.1,fade:.11,hyd:2,res:1,tubes:4,body:Od,ring:16738816,spring:12172480,blurb:`Race truck hardware, firmer than the King.`}},Md={stock:{name:`Stock arms`,addF:0,addR:0,track:0,lb:0,blurb:`Factory geometry`},mid:{name:`Mid travel`,addF:2.5,addR:3,track:1.5,lb:60,blurb:`Boxed arms, longer rear shocks`},lt:{name:`Long travel +3"`,addF:5,addR:6,track:3,lb:120,blurb:`Wider arms front, long leaf pack or links rear`},race:{name:`Race long travel +5"`,addF:8,addR:10,track:5,lb:220,blurb:`Cut-and-weld kit, chassis tie-ins, hoops through the bed`}},Nd={stock:{name:`Stock steel`,flare:0,lift:0,lb:0},flare2:{name:`+2" bolt-on flares`,flare:2,lift:.3,lb:-5},glass4:{name:`+4" fiberglass`,flare:4,lift:1,lb:-25},glass6:{name:`+6" race fiberglass`,flare:6,lift:1.8,lb:-35},glass8:{name:`+8" trophy widebody`,flare:8,lift:2.2,lb:-45}},Pd={stock:{name:`Stock steel bed`,flare:0,lift:0,lb:0},glass4:{name:`+4" fiberglass bedsides`,flare:4,lift:1,lb:-50},glass6:{name:`+6" race bedsides`,flare:6,lift:2,lb:-70},glass8:{name:`Trophy rear widebody`,flare:8,lift:2.5,lb:-90}},Fd={stock:{name:`Stock hood`,lb:0},vent:{name:`Fiberglass vented`,lb:-18},scoop:{name:`Fiberglass ram-air scoop`,lb:-14},pins:{name:`One-piece flip front + pins`,lb:-60}},Id={stock:{name:`Stock bumper`,lb:0},plate:{name:`Fiberglass bumper cap`,lb:-20},tube:{name:`Tube race bumper`,lb:15},hoop:{name:`Tube bumper + hoop`,lb:30},prerunner:{name:`Dirt King pre-runner bumper (tube frame + aluminum skid)`,lb:45}},Ld={black:{name:`Black rock guard (BD logo)`,blurb:`Daytime only. It blocks the light.`},amber:{name:`Amber rock guard`,blurb:`Snap-on. Day and night.`},clear:{name:`Clear rock guard`,blurb:`Snap-on. Day and night.`}},Rd={clear:{name:`Clear lens`},amber:{name:`Amber lens`}},zd={none:{name:`No flag`},checkered:{name:`Checkered`},usa:{name:`USA`},mexico:{name:`Mexico`},team:{name:`Team colours`},dustline:{name:`DUSTLINE`}},Bd={kc:{name:`KC HiLiTES`,blurb:`6" round Daylighter pods + classic round-pod bars`},baja:{name:`Baja Designs`,blurb:`Squadron Pro pods in the pods, roof bar and bumper bar`}},Vd={none:{name:`Empty bed`,spares:0,cage:0,cans:0,lb:0},rack1:{name:`Chase rack + 1 spare`,spares:1,cage:1,cans:0,lb:130},cage2:{name:`Bed cage + 2 spares`,spares:2,cage:2,cans:0,lb:240},cage2f:{name:`Bed cage + 2 spares + fuel cell`,spares:2,cage:2,cans:2,lb:330},flat2:{name:`Flat rack + 2 spares (race)`,spares:2,cage:3,cans:1,lb:280},cage4:{name:`Bed cage + 2 flat spares (stacked, face up)`,spares:2,cage:4,cans:0,lb:270},race:{name:`Race bed: 2 upright spares, 2 extinguishers, fuel cell + spare fuel`,spares:2,cage:5,cans:0,lb:310}},Hd={oem:{name:`KMC XD Series 6-spoke alloy`,spokes:6,bead:0,style:`alloy`},sim:{name:`KMC XD222 Enduro, simulated beadlock`,spokes:6,bead:1,style:`alloy`},race8:{name:`KMC XD231 RG Race Beadlock, 8-spoke`,spokes:8,bead:2,style:`spoke`},mesh:{name:`KMC XD228 Machete Desert Beadlock, mesh`,spokes:14,bead:2,style:`mesh`},dish:{name:`KMC XD820 Grenade, dish beadlock`,spokes:0,bead:2,style:`dish`}},Ud={black:{name:`Matte black`,col:1710878,m:.7,r:.45},silver:{name:`Machined`,col:12041153,m:1,r:.3},bronze:{name:`Bronze`,col:8018480,m:1,r:.35},gold:{name:`Gold`,col:11571247,m:1,r:.28},red:{name:`Race red`,col:11015702,m:.7,r:.35}},Wd={at:{name:`All-terrain`,grip:{dirt:1,sand:.92,rock:1},rr:1,tread:`at`},mt:{name:`Mud-terrain`,grip:{dirt:.97,sand:1,rock:1.04},rr:1.2,tread:`mt`},race:{name:`Desert race radial`,grip:{dirt:1.08,sand:1.04,rock:.98},rr:.9,tread:`race`}},Gd=[31,33,35,37,39,40];function Kd(e=`prerunner`){return e===`trophy`?{cls:e,platform:`raptor3`,shock:`king35`,travel:`race`,fenders:`glass8`,bedsides:`glass8`,hood:`scoop`,bumper:`prerunner`,roofBar:50,bumperBar:0,pods:!0,chase:!0,lights:`kc`,lens:`clear`,bdCover:`black`,flag:`none`,rim:`race8`,finish:`black`,tire:`race`,size:39,bed:`race`,livery:0}:{cls:e,platform:`tacoma3`,shock:`king25`,travel:`lt`,fenders:`glass4`,bedsides:`glass4`,hood:`vent`,bumper:`prerunner`,roofBar:40,bumperBar:30,pods:!0,chase:!0,lights:`kc`,lens:`clear`,bdCover:`black`,flag:`none`,rim:`race8`,finish:`black`,tire:`at`,size:35,bed:`race`,livery:2}}function qd(e){let t=Td[e.platform];return e.cls===`trophy`?`Trophy Truck (${t.model}-style body)`:`${t.years} ${t.make} ${t.model} ${t.gen}`}function Jd(e){let t={...Kd(e?.cls||`prerunner`),...e},n=Td[t.platform]||Td.tacoma3,r=t.cls===`trophy`,i=t.shock===`factory`?jd[n.shock||`oem`]:jd[t.shock]||jd.oem,a=Md[t.travel]||Md.stock,o=Nd[t.fenders]||Nd.stock,s=Pd[t.bedsides]||Pd.stock,c=Vd[t.bed]||Vd.none,l=Fd[t.hood]||Fd.stock,u=Id[t.bumper]||Id.stock,d=Wd[t.tire]||Wd.at,f=t.size*Cd/2,p=(t.size>=37?12.5:t.size>=33?11.5:10.5)*Cd,m=(28+t.size*1.35+(t.tire===`mt`?10:0)+50)*wd,h,g,_,v,y,b,x,S,C,w,T;r?(h=137*Cd,g=94*Cd,_=225*Cd,v=74*Cd,y=6200,b=950,x=1300,S=26,C=33,w=`aarm`,T=`fourlink`):(h=n.wb*Cd,g=n.wid*Cd,_=n.len*Cd,v=n.hgt*Cd,b=n.hp,x=n.nm,y=n.lb+a.lb+c.lb+o.lb+s.lb+l.lb+u.lb,S=n.travelF+a.addF,C=n.travelR+a.addR,w=n.front===`ttb`&&t.travel===`stock`?`ttb`:`aarm`,T=n.rear),y+=(t.roofBar?12:0)+(t.bumperBar?10:0);let E=y*wd,D=r?0:(t.size-n.tire)/2*Cd*0+(t.travel===`stock`?0:1.5*Cd),O=r?(g-p)/2-.02:(g-p)/2+a.track*Cd/2*2*.5,k=c.lb*wd/E,A=r?.48:Yd(.56-k*.8,.46,.6),ee=h*(1-A),j=-h*A,M=r?.42:.5+D*.8+c.lb*wd/E*.45,N=f+M,P=b*745.7*.82/(.575*(r?3:3.6)),F=Math.min(68,Math.cbrt(P)*1.1),te=r?6800:b>400?6e3:5800,I=[[0,.5],[.2,.74],[.42,.95],[.62,1],[.84,.92],[1,.7]],ne=E/2e3;return{id:r?`trophy`:`prerunner`,cls:t.cls,build:t,platform:n,name:qd(t),mass:E,cgHeight:N,cgAboveHub:M,inertia:[E*(h*h+1.6)/12*.95,E*(h*h+g*g)/12*.95,E*(g*g+1.6)/12*.75],wheelRadius:f,wheelWidth:p,wheelMass:m,tire:d,tireK:f/.45*(r?235e3:26e4),tireC:2200,front:{x:O,z:ee},rear:{x:O,z:j},axF:{kind:w,spring:`coil`,travel:S*Cd,sagFrac:r?.3:.32,unsprung:m+(r?28:24),solid:!1},axR:{kind:T,spring:r?`coil`:T===`leaf`?`leaf`:`coil`,travel:C*Cd,sagFrac:.3,unsprung:m+(r||T!==`aarm`?58:32),solid:!0},shock:i,arb:r?9e3:15e3+(a.track===0?7e3:0),drive:r?[0,0,1,1]:[1,1,1,1],awdFront:.42,engine:{peak:x,idle:r?1100:900,red:te,curve:I},gears:r?[2.95,2,1.5,1.18,.96,.8]:[3.1,2.1,1.55,1.2,.95,.78],reverse:3.1,topSpeed:F,eff:r?.88:.86,brakeTorque:2500*ne*(f/.45),handbrake:3e3*ne,lsd:1400,steerMax:.56,steerFast:.16,grip:r?1.12:1+(t.size-33)*.008,cdA:r?3:3.5,aLat:r?7.2:6.3+Math.min(1,t.size/40-.75)*1.6,skidY:-(N-(r?.42:.34)),bodyHalf:[g/2-.06,v-N,_/2+.02],hitR:g/2-.02,len:_,wid:g,hgt:v,wb:h,lift:D}}function Yd(e,t,n){return e<t?t:e>n?n:e}function Xd(e){let t=e.engine.peak*523/745.7/e.mass;return{power:Math.min(1,t/.33),travel:Math.min(1,(e.axF.travel+e.axR.travel)/2/.75),damping:Math.min(1,e.shock.c*.8+e.shock.bypass*.3+e.shock.heat*.14),mass:e.mass,tF:e.axF.travel/Cd,tR:e.axR.travel/Cd}}var Zd=1/120,Qd=9.81,$d=K,ef=Et,tf=new $d,nf=new $d,rf=new $d,af=new $d,of=new $d,sf=new $d,cf=new $d,lf=new $d,uf=new $d,df=new $d,ff=new $d,pf=new ef,mf=new ef,hf=new $d,gf=new $d,_f={mu:1,rr:.02,road:0,sand:0,rock:0,gravel:0},vf={t:0,hit:!1};function yf(e,t,n,r){let i=0,a=e.y-od(e.x,e.z);if(a<=0)return r.t=0,r.hit=!0,r;let o=.28,s=0,c=!1;for(let r=o;r<=n+o*.5;r+=o){let o=Math.min(r,n),l=e.y+t.y*o-od(e.x+t.x*o,e.z+t.z*o);if(l<=0){i=s,s=o,c=!0;break}if(s=o,a=l,o>=n)break}if(!c)return r.hit=!1,r.t=n,r;let l=i,u=s;for(let n=0;n<6;n++){let n=(l+u)*.5;e.y+t.y*n-od(e.x+t.x*n,e.z+t.z*n)>0?l=n:u=n}return r.t=(l+u)*.5,r.hit=!0,r}var bf=class{constructor(e,t,n,r,i){this.i=e,this.lx=t,this.lz=n,this.front=r,this.drive=i,this.len=0,this.prevLen=0,this.visLen=0,this.ground=!1,this.load=0,this.omega=0,this.angle=0,this.steer=0,this.contact=new $d,this.normal=new $d(0,1,0),this.slipX=0,this.slipY=0,this.mu=1,this.surfSand=0,this.surfRoad=1,this.surfRock=0,this.hub=new $d,this.fx=0,this.fy=0,this.compression=0,this.dust=0}},xf=class{constructor(e,t=0){let n=this.spec=typeof e==`string`?Jd({cls:e}):e;this.id=t,this.pos=new $d,this.quat=new ef,this.vel=new $d,this.ang=new $d,this.prevPos=new $d,this.prevQuat=new ef,this.force=new $d,this.torque=new $d,this.wheels=[new bf(0,+n.front.x,n.front.z,!0,n.drive[0]),new bf(1,-n.front.x,n.front.z,!0,n.drive[1]),new bf(2,+n.rear.x,n.rear.z,!1,n.drive[2]),new bf(3,-n.rear.x,n.rear.z,!1,n.drive[3])],this.r=n.wheelRadius;let r=n.front.z-n.rear.z,i=-n.rear.z/r;this.mass=n.mass-2*n.axF.unsprung-2*n.axR.unsprung;let a=n.shock,o=(e,t)=>{let r=this.mass*Qd*t*.5,i=this.mass*t*.5,o=e.travel*e.sagFrac,s=r*.22,c={ax:e,load:r,m:i,sag:o,travel:e.travel,leaf:e.spring===`leaf`,dual:e.spring===`coil`&&a.res>0,xc:e.travel*.55,F0:s,kS:(r-s)/o};c.k2=c.dual?c.kS*2.3:c.kS;let l=2*Math.sqrt(c.kS*i);c.cC=l*a.c*.9,c.cR=l*a.c*1.45;let u=(r+e.unsprung*Qd)/n.tireK;return c.Lmin=.1,c.Lmax=c.Lmin+e.travel,c.Leq=c.Lmax-o,c.mountY=c.Leq+(this.r-u)-n.cgHeight,c};this.cF=o(n.axF,i),this.cR=o(n.axR,1-i),this.Lmax=this.cF.Lmax,this.Lmin=this.cF.Lmin,this.Leq=this.cF.Leq,this.wheels.forEach((e,t)=>{let n=t<2?this.cF:this.cR;e.c=n,e.len=n.Leq,e.prevPen=0,e.wv=0,e.temp=40}),this.Iw=.5*n.wheelMass*this.r*this.r+3.5;let s=n.engine,c=n.topSpeed/this.r*60/(2*Math.PI);this.final=s.red/c/n.gears[n.gears.length-1],this.gear=1,this.rpm=s.idle,this.shiftTimer=0,this.gearDir=1,this.input={throttle:0,brake:0,steer:0,handbrake:0},this.thr=0,this.steerAng=0,this.tc=!0,this.speed=0,this.fwdSpeed=0,this.airborne=!1,this.airTime=0,this.impact=0,this.bottomed=0,this.landing=0,this.crash=0,this.shake=0,this.slip=0,this.tcActive=0,this.onRoad=1,this.hitCount=0,this.groundCount=4,this.invI=new $d(1/n.inertia[0],1/n.inertia[1],1/n.inertia[2]),this.hits=this._buildHits(),this.cr=0,this.sphereZ=[n.front.z+.2,0,n.rear.z-.3],this.upDot=1,this.flippedTime=0,this.stuckTime=0,this.heading=0}_buildHits(){let e=this.spec,[t,n,r]=e.bodyHalf,i=[],a=e.skidY;for(let e of[r*.95,r*.3,-r*.4,-r*.95])for(let n of[-t*.65,0,t*.65])i.push([n,a,e,0]);for(let e of[-t,t])i.push([e,a+.35,r,1]),i.push([e,a+.35,-r,1]);for(let e of[-t*.8,t*.8])for(let t of[r*.1,-r*.45])i.push([e,n,t,2]);return i.push([0,n+.1,r*.1,2]),i.map(e=>({l:new $d(e[0],e[1],e[2]),kind:e[3],w:new $d}))}placeAt(e,t,n,r=.15){let i=sd(e,t,cf);tf.set(Math.sin(n),0,Math.cos(n)),tf.addScaledVector(i,-tf.dot(i)).normalize(),nf.crossVectors(i,tf);let a=new Xt().makeBasis(nf,i,tf);this.quat.setFromRotationMatrix(a);let o=td(e,t);this.pos.set(e,o+this.spec.cgHeight+r,t),this.vel.set(0,0,0),this.ang.set(0,0,0);for(let e of this.wheels)e.omega=0,e.len=e.c.Leq,e.prevLen=e.c.Leq,e.visLen=e.c.Leq,e.ground=!0,e.wv=0,e.pen=0,e.temp=Math.min(e.temp??40,60);this.gear=1,this.rpm=this.spec.engine.idle,this.thr=0,this.steerAng=0,this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.flippedTime=0,this.stuckTime=0,this.airTime=0,this.landing=0}setInput(e){Object.assign(this.input,e)}get forward(){return af.set(0,0,1).applyQuaternion(this.quat)}step(e){let t=this.spec,n=t.engine,r=this.input;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this.quat;nf.set(1,0,0).applyQuaternion(i),rf.set(0,1,0).applyQuaternion(i),tf.set(0,0,1).applyQuaternion(i),this.upDot=rf.y;let a=this.vel.dot(tf);this.fwdSpeed=a,this.speed=this.vel.length();let o=r.throttle,s=r.brake;this.gear>=0&&a<1&&s>.1&&o<.1?this.gear=-1:this.gear<0&&a>-1&&o>.1&&s<.1&&(this.gear=1);let c=this.gear<0?s:o,l=this.gear<0?o:s;this.gear<0&&a>-1&&o>.1&&(l=0),this.thr+=(c-this.thr)*Math.min(1,e*(c>this.thr?7:12)),c=this.thr;let u=Math.abs(a),d=Ru(t.steerMax,t.steerFast,zu(4,48,u)),f=Lu(r.steer,-1,1)*d;this.steerAng+=(f-this.steerAng)*Math.min(1,e*14),this.force.set(0,-9.81*this.mass,0),this.torque.set(0,0,0);let p=0,m=0,h=this.wheels,g=t.shock,_=g.live?1+.9*Lu(this.airTime*3+this.liveHit,0,1):1;this.liveHit=(this.liveHit||0)*.02**e;let v=h[0].compression-h[1].compression,y=h[2].compression-h[3].compression,b=[v*t.arb,-v*t.arb,y*t.arb*.8,-y*t.arb*.8];for(let n=0;n<4;n++){let r=h[n],a=r.c;hf.set(r.lx,a.mountY,r.lz).applyQuaternion(i).add(this.pos),r.mount=(r.mount||new $d).copy(hf),ff.copy(hf).sub(this.pos),df.crossVectors(this.ang,ff).add(this.vel);let o=df.dot(rf);gf.copy(rf).negate(),yf(hf,gf,a.Lmax+this.r+.3,vf),r.prevLen=r.len;let s=0;if(vf.hit){let n=this.r-(vf.t-r.len);if(n>0){let i=Lu((n-(r.pen||0))/e,-12,12),a=n-this.r*.42,o=zu(.45,1,n/(this.r*.42)),c=t.tireC*(i>0?1+7*o:1);s=Lu(t.tireK*n+c*i+(a>0?t.tireK*7*a:0),0,17e4),r.pen=n,r.rimHit=a>0,r.contact.copy(hf).addScaledVector(gf,vf.t),sd(r.contact.x,r.contact.z,r.normal),r.normal.dot(rf)<.25&&r.normal.copy(rf)}else r.pen=0}else r.pen=0;r.ground=s>1,r.ground&&p++,r.load=s;let c=a.Lmax-r.len,l=c/a.travel,u=r.wv-o,d;a.leaf?(d=a.F0+a.kS*Math.max(0,c)*(1+1.6*zu(.55,1,l)*l),d+=a.load*.09*Math.tanh(u/.04)):d=c<a.xc?a.F0+a.kS*Math.max(0,c):a.F0+a.kS*a.xc+a.k2*(c-a.xc);let f=1;g.bypass>0&&(f=u>0?Ru(1-.25*Math.min(1,g.bypass),1+2.6*g.bypass,zu(.42,.84,l)):Ru(1-.35*Math.min(1,g.bypass),1+1.6*g.bypass,1-zu(.06,.34,l)));let v=1-g.fade*zu(95,190,r.temp),y=(u>0?a.cC:a.cR)*f*v*(u>0?_:1),x=Math.abs(u),S=.7,C=y*(x<S?u:Math.sign(u)*(S+(x-S)*.42));d+=C;let w=Math.abs(u)>1e-4?C/u:y;r.temp+=(Math.abs(C*u)/(1e3*g.heat*60)-(r.temp-40)*(.015+.0012*this.speed)*g.cool)*e*8;let T=.1+a.travel*.06,E=a.Lmin+T-r.len;if(E>0){let e=E/T,t=u>0?1:.1,n=Math.max(0,u),i=(g.hyd?26e3*g.hyd**.5+6e4:9e4)*e;g.hyd?d+=t*9e4*E*(g.hyd>1?1.2:1)+i*n:d+=t*(26e4*E+3e5*E*E*8)+i*n,u>0&&(w+=i),r.len<=a.Lmin+.02&&u>1.2&&(m=Math.max(m,u))}g.live&&u>2.2&&(this.liveHit=1),c<0&&(d+=3e5*c-6e3*Math.max(0,-u),u<0&&(w+=6e3)),d+=b[n];let D=r.normal.dot(rf),O=a.ax.unsprung,k=d-w*u,A=(r.wv+e/O*(s*D-k-O*Qd*rf.y+w*o))/(1+e*w/O);d=k+w*(A-o);let ee=Lu(d,-12e4,26e4);if(r.wv=ee===d?A:r.wv+e*((s*D-ee)/O-Qd*rf.y),d=ee,r.len+=(o-r.wv)*e,r.len<a.Lmin-.05){r.len=a.Lmin-.05;let t=(r.wv-o)*a.ax.unsprung/e;r.wv=o,d+=Lu(t,-a.load*2,a.load*7)}r.spdComp=u,af.copy(rf).multiplyScalar(d),this.force.add(af),this.torque.add(of.crossVectors(ff,af)),r.hub.copy(hf).addScaledVector(rf,-r.len),s>0&&(af.copy(r.normal).addScaledVector(rf,-D).multiplyScalar(s),this.force.add(af),ff.copy(r.hub).sub(this.pos),this.torque.add(of.crossVectors(ff,af))),r.compression=Math.max(0,a.Lmax-r.len),r.xr=Lu(c/a.travel,0,1)}this.groundCount=p,m>0&&(this.bottomed=Math.max(this.bottomed,m));let x=this.gear,S=(x<0?-t.reverse:x>0?t.gears[x-1]:0)*this.final,C=0,w=0;for(let e of h)e.drive&&(C+=e.omega,w++);let T=w?C/w:0,E=Math.abs(T)*60/(2*Math.PI)*Math.abs(S);this.shiftTimer-=e,this.gear>0&&(E>n.red*.935&&this.gear<t.gears.length&&this.shiftTimer<=0?(this.gear++,this.shiftTimer=.22):E<n.red*.42&&this.gear>1&&this.shiftTimer<=0&&(this.gear--,this.shiftTimer=.12));let D=n.idle+(n.red*.5-n.idle)*Lu(c*1.2,0,1),O=Math.max(E,D);O=Math.min(O,n.red*1.04),this.rpmTarget=O,this.rpm+=(O-this.rpm)*Math.min(1,e*14);let k=O/n.red,A=n.curve[n.curve.length-1][1];for(let e=1;e<n.curve.length;e++)if(k<=n.curve[e][0]){let t=n.curve[e-1],r=n.curve[e];A=Ru(t[1],r[1],(k-t[0])/(r[0]-t[0]));break}let ee=n.peak*A*c;O>=n.red&&(ee=0),this.shiftTimer>0&&(ee*=0);let j=0,M=S>=0?1:-1;for(let e of h)e.drive&&e.ground&&(j=Math.max(j,(e.omega*this.r-a)*M));let N=.8+.035*Math.abs(a),P=1;this.tc&&(P=1-.94*Lu((j-N)/2.2,0,1)),this.tcCutS=(this.tcCutS??1)+(P-(this.tcCutS??1))*Math.min(1,e*22);let F=this.tcCutS;this.tcActive=1-F,this.frozen&&(ee=0);let te=ee*S*t.eff*F;c<.05&&x>0&&this.shiftTimer<=0&&(te-=.07*n.peak*k*Math.abs(S)*Math.sign(T||1));let I=[0,0,0,0];if(w){let e=0,n=1,r=t.drive[0]+t.drive[1],i=t.drive[2]+t.drive[3];r&&i?(e=t.awdFront,n=1-t.awdFront):r&&(e=1,n=0);for(let a=0;a<4;a++){if(!t.drive[a])continue;let o=a<2?e/r:n/i;I[a]=te*o}for(let[e,n]of[[0,1],[2,3]])if(t.drive[e]&&t.drive[n]){let r=Lu((h[e].omega-h[n].omega)*t.lsd*.02,-t.lsd,t.lsd);I[e]-=r,I[n]+=r}}let ne=this.speed,re=0,L=0;for(let n=0;n<4;n++){let a=h[n],o=l*t.brakeTorque*(n<2?.55:.45)*.5*2;r.handbrake>0&&n>=2&&(o+=r.handbrake*t.handbrake);let s=a.omega+I[n]/this.Iw*e,c=o/this.Iw*e;if(Math.abs(s)<=c?s=0:s-=Math.sign(s)*c,a.steer=a.front?this.steerAng:0,!a.ground){a.omega=s*(1-.15*e),a.fx=a.fy=0,a.slipX=0,a.slipY=0;continue}let u=Math.cos(a.steer),d=Math.sin(a.steer);lf.set(d,0,u).applyQuaternion(i),cf.copy(a.normal),lf.addScaledVector(cf,-lf.dot(cf)).normalize(),uf.crossVectors(cf,lf),ff.copy(a.hub).sub(this.pos),df.crossVectors(this.ang,ff).add(this.vel);let f=df.dot(lf),p=df.dot(uf);ud(a.contact.x,a.contact.z,_f),a.surfSand=_f.sand,a.surfRoad=_f.road,a.surfRock=_f.rock,a.mu=_f.mu;let m=a.load,g=f-s*this.r,_=p,v=Math.hypot(g,_)+1e-6,y=Ru(2,3.1,_f.sand)*Lu(ne/5,.1,1),b=t.tire.grip,x=Ru(Ru(b.dirt,b.sand,_f.sand),b.rock,_f.rock*.7),S=_f.mu*(t.grip||1)*x*(1-.14*zu(y*1.5,y*5,v))*m*Math.tanh(v/y),C=-S*g/v,w=-S*_/v,T=this.Iw/(this.r*this.r*e)*Math.abs(g);Math.abs(C)>T&&(C=Math.sign(C)*T);let E=t.mass*.25*Math.abs(_)/e*.8;Math.abs(w)>E&&(w=Math.sign(w)*E);let D=_f.rr*t.tire.rr*m;C-=D*Lu(f/1.5,-1,1),s-=C*this.r/this.Iw*e,a.omega=s,a.fx=C,a.fy=w,a.slipX=g,a.slipY=_;let O=this.mass/t.mass;af.set(0,0,0).addScaledVector(lf,C*O).addScaledVector(uf,w*O),this.force.add(af),ff.copy(a.hub).addScaledVector(rf,.12).sub(this.pos),this.torque.add(of.crossVectors(ff,af)),re+=Math.min(1,v/8)*+(m>100),L+=_f.road,a.dust=Lu((v-.6)/5+ne/45*.5,0,1.4)*+(m>100)}if(this.slip=re/Math.max(1,p),this.onRoad=p?L/p:1,this.esc!==!1&&p>=3&&this.upDot>.8&&r.handbrake<.1&&Math.abs(a)>6){let e=t.front.z-t.rear.z,n=a*Math.tan(this.steerAng)/e*.85,r=Lu(-(this.ang.dot(rf)-n)*3*t.inertia[1],-9e3,9e3)*(this.escStrength??1);this.torque.addScaledVector(rf,r)}let R=this.speed;if(R>.1){let e=.575*t.cdA*R;this.force.addScaledVector(this.vel,-e)}if(this.airborne=p===0,this.airborne){this.airTime+=e;let t=3200;this.torque.addScaledVector(nf,-(r.throttle-r.brake)*t*.6*Math.min(1,this.airTime*2)),this.torque.addScaledVector(tf,-Lu(r.steer,-1,1)*t*.35*Math.min(1,this.airTime*2)),this.torque.addScaledVector(rf,Lu(r.steer,-1,1)*t*.3*Math.min(1,this.airTime*2))}else this.airTime>.35&&(this.landing=Math.max(this.landing,this.airTime)),this.airTime=0;let z=0;for(let e of this.hits){e.w.copy(e.l).applyQuaternion(i).add(this.pos);let t=od(e.w.x,e.w.z)-e.w.y;if(t<=0)continue;z++,sd(e.w.x,e.w.z,cf,.8),ff.copy(e.w).sub(this.pos),df.crossVectors(this.ang,ff).add(this.vel);let n=df.dot(cf),r=e.kind===2?13e4:17e4,a=r*Math.min(t,.6)-8500*Math.min(n,0);n>0&&(a=Math.max(0,r*Math.min(t,.6)-2500*n)),a=Lu(a,0,22e4),af.copy(cf).multiplyScalar(a),sf.copy(df).addScaledVector(cf,-n);let o=sf.length(),s=e.kind===0?.55:.7;af.addScaledVector(sf,-s*a*(1/(o+.8))),this.force.add(af),this.torque.add(of.crossVectors(ff,af)),this.impact=Math.max(this.impact,-n)}this.hitCount=z;let B=t.hitR;for(let e of this.sphereZ)hf.set(0,-.15,e).applyQuaternion(i).add(this.pos),Sd(hf.x,hf.z,B+3.5,e=>{let t=hf.x-e.x,n=hf.z-e.z,r=B*(e.type===Uu.BOULDER?.95:.8)+e.r,i=t*t+n*n;if(i>=r*r)return;let a=e.y+(e.type===Uu.BOULDER?e.s*.95:e.type===Uu.SAGUARO?3*e.s:1.4*e.s);if(hf.y-.55>a)return;let o=Math.sqrt(i)+1e-4,s=t/o,c=n/o,l=r-o;ff.copy(hf).sub(this.pos),df.crossVectors(this.ang,ff).add(this.vel);let u=df.x*s+df.z*c,d=e.type===Uu.BOULDER?1:.28,f=26e4*d*l-(u<0?12e3*d*u:0);u>0&&(f=Math.max(0,26e4*d*l-3e3*u)),f=Lu(f,0,3e5),af.set(s*f,0,c*f),this.force.add(af),this.torque.add(of.crossVectors(ff,af)),this.impact=Math.max(this.impact,-u),this.crash=Math.max(this.crash,-u*(e.type===Uu.BOULDER?1:.55))});let V=1/this.mass;this.vel.addScaledVector(this.force,V*e),pf.copy(i).invert(),af.copy(this.torque).applyQuaternion(pf),af.set(af.x*this.invI.x,af.y*this.invI.y,af.z*this.invI.z).applyQuaternion(i),this.ang.addScaledVector(af,e),this.ang.multiplyScalar(1-.35*e);let ie=this.ang.length();ie>14&&this.ang.multiplyScalar(14/ie);let ae=this.vel.length();if(ae>110&&this.vel.multiplyScalar(110/ae),this.pos.addScaledVector(this.vel,e),mf.set(this.ang.x*.5*e,this.ang.y*.5*e,this.ang.z*.5*e,0).multiply(i),i.set(i.x+mf.x,i.y+mf.y,i.z+mf.z,i.w+mf.w).normalize(),this.frozen){this.vel.x=0,this.vel.z=0,this.ang.multiplyScalar(.96);for(let e of h)e.omega=0}for(let t of h)t.angle+=t.omega*e,t.visLen=t.len;tf.set(0,0,1).applyQuaternion(i),this.heading=Math.atan2(tf.x,tf.z),this.upDot<.25&&this.speed<5?this.flippedTime+=e:this.flippedTime=Math.max(0,this.flippedTime-e*2),this.impact*=1e-4**e,this.crash*=.001**e,this.bottomed*=1e-4**e,this.landing*=.001**e,isFinite(this.pos.x+this.pos.y+this.pos.z+this.vel.x+this.vel.y+this.vel.z)||(this.bad=!0)}getRenderPose(e,t,n){t.lerpVectors(this.prevPos,this.pos,e),n.slerpQuaternions(this.prevQuat,this.quat,e)}},Sf=new $d,Cf=new $d,wf=new $d,Tf=new $d,Ef=new $d,Df=new $d,Of=new $d,kf=new $d,Af=new $d;function jf(e,t){let n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z;if(n*n+r*r>100)return 0;let i=0,a=e.spec.hitR,o=t.spec.hitR;for(let n of e.sphereZ){Sf.set(0,0,n).applyQuaternion(e.quat).add(e.pos);for(let n of t.sphereZ){if(Cf.set(0,0,n).applyQuaternion(t.quat).add(t.pos),wf.subVectors(Sf,Cf),Math.abs(wf.y)>1.6)continue;wf.y*=.3;let r=wf.length(),s=a*.95+o*.95;if(r>=s||r<1e-5)continue;wf.multiplyScalar(1/r);let c=s-r;Df.subVectors(Sf,e.pos),Of.subVectors(Cf,t.pos),Tf.crossVectors(e.ang,Df).add(e.vel),Ef.crossVectors(t.ang,Of).add(t.vel);let l=Tf.sub(Ef).dot(wf),u=12e4*c-(l<0?14e3*l:0);l>0&&(u=Math.max(0,12e4*c-2500*l)),u=Math.min(u,16e4),kf.copy(wf).multiplyScalar(u),kf.y=0,e.vel.addScaledVector(kf,1/e.mass*(1/120)),t.vel.addScaledVector(kf,-1/t.mass*(1/120)),e.ang.addScaledVector(Af.crossVectors(Df,kf).multiplyScalar(.3),e.invI.y*(1/120)),t.ang.addScaledVector(Af.crossVectors(Of,kf).multiplyScalar(-.3),t.invI.y*(1/120)),e.impact=Math.max(e.impact,-l),t.impact=Math.max(t.impact,-l),e.crash=Math.max(e.crash,-l*.5),t.crash=Math.max(t.crash,-l*.5),i++}}return i}function Mf(e,t,n){let r=Z.N,i=new Float32Array(r);for(let n=0;n<r;n++){let r=Math.abs(Z.kappa[n]);i[n]=Math.min(e,Math.sqrt(t/Math.max(r,1e-4)))}for(let t of Z.features){if(t.type!==`jump`)continue;let n=Math.round(t.s/3);for(let t=-14;t<=6;t++){let a=(n+t+r)%r;i[a]=Math.min(i[a],e*.8)}}for(let e=0;e<3;e++)for(let e=r*2-1;e>=0;e--){let t=e%r,a=(e+1)%r;i[t]=Math.min(i[t],Math.sqrt(i[a]*i[a]+2*n*3))}return i}var Nf=class{constructor(e,{skill:t=.9,lane:n=0,aggression:r=.5,seed:i=3}={}){this.v=e,this.skill=t,this.lane=n,this.idx=0;let a=e.spec;this.profile=Mf(a.topSpeed*.93,a.aLat*t,9.5),this.wheelbase=a.front.z-a.rear.z,this.steerFilt=0,this.stuck=0,this.noise=i*7.3,this.wander=0,this.speedScale=1}reseat(){this.idx=md(this.v.pos.x,this.v.pos.z,-1)}update(e,t,n=!0){let r=this.v,i=Z.N;this.idx=md(r.pos.x,r.pos.z,this.idx,28);let a=r.fwdSpeed,o=Lu(9+Math.max(0,a)*.5,11,42),s=Math.round(o/3),c=(this.idx+s)%i,l=this.lane+Math.sin(t*.13+this.noise)*1.6,u=-Z.tz[c],d=Z.tx[c],f=Z.x[c]+u*l,p=Z.z[c]+d*l,m=f-r.pos.x,h=p-r.pos.z,g=r.forward,_=g.z*m-g.x*h,v=g.x*m+g.z*h,y=Math.atan2(_,v),b=Math.hypot(m,h)+.001,x=Lu(Math.atan2(2*this.wheelbase*Math.sin(y),b)/Ru(r.spec.steerMax,r.spec.steerFast,zu(4,48,Math.abs(a))),-1,1);this.steerFilt+=(x-this.steerFilt)*Math.min(1,e*9);let S=1e9,C=Math.round(Math.max(10,a*.9)/3);for(let e=0;e<=C;e+=2)S=Math.min(S,this.profile[(this.idx+e)%i]);S*=1-.65*zu(.5,1.4,Math.abs(y)),S*=this.speedScale,n||(S=0);let w=S-a,T=Lu(w/2.5,0,1)*(1-.7*Math.min(1,Math.abs(this.steerFilt)*1.6)),E=Lu(-w/5,0,1);r.setInput({throttle:T,brake:E,steer:this.steerFilt,handbrake:0}),n&&Math.abs(a)<1.2&&t>6?this.stuck+=e:this.stuck=Math.max(0,this.stuck-e)}},Pf=new K;function Ff(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Pf.copy(t),Pf[r]=0,Pf.normalize();let l=.5*o/(o+s),u=1-Pf.angleTo(e)/c;return Math.sign(Pf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var If=class e extends bi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new K,c=new K,l=new K(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new K,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Ff(m,c,`z`,`y`,i,n),f[a+1]=1-Ff(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Ff(m,c,`z`,`y`,i,n),f[a+1]=1-Ff(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Ff(m,c,`x`,`z`,i,e),f[a+1]=Ff(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Ff(m,c,`x`,`z`,i,e),f[a+1]=1-Ff(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Ff(m,c,`x`,`y`,i,e),f[a+1]=1-Ff(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Ff(m,c,`x`,`y`,i,e),f[a+1]=1-Ff(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Lf=class extends Dr{constructor(e=(e,t,n)=>n.set(e,t,Math.cos(e)*Math.sin(t)),t=8,n=8){super(),this.type=`ParametricGeometry`,this.parameters={func:e,slices:t,stacks:n};let r=[],i=[],a=[],o=[],s=1e-5,c=new K,l=new K,u=new K,d=new K,f=new K,p=t+1;for(let r=0;r<=n;r++){let p=r/n;for(let n=0;n<=t;n++){let r=n/t;e(r,p,l),i.push(l.x,l.y,l.z),r-s>=0?(e(r-s,p,u),d.subVectors(l,u)):(e(r+s,p,u),d.subVectors(u,l)),p-s>=0?(e(r,p-s,u),f.subVectors(l,u)):(e(r,p+s,u),f.subVectors(u,l)),c.crossVectors(d,f).normalize(),a.push(c.x,c.y,c.z),o.push(r,p)}}for(let e=0;e<n;e++)for(let n=0;n<t;n++){let t=e*p+n,i=e*p+n+1,a=(e+1)*p+n+1,o=(e+1)*p+n;r.push(t,i,o),r.push(i,a,o)}this.setIndex(r),this.setAttribute(`position`,new J(i,3)),this.setAttribute(`normal`,new J(a,3)),this.setAttribute(`uv`,new J(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=zf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=zf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function zf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new pr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Q=K,Bf=new Xt,Vf=new Et,Hf=new Q,Uf=new Q,Wf=new Q(0,1,0),Gf=new Q,Kf=class{constructor(){this.items=new Map}add(e,t,n){let r=t.index?t.toNonIndexed():t.clone();n&&r.applyMatrix4(n),r.attributes.uv||r.setAttribute(`uv`,new J(new Float32Array(r.attributes.position.count*2),2));for(let e of Object.keys(r.attributes))[`position`,`normal`,`uv`].includes(e)||r.deleteAttribute(e);this.items.has(e)||this.items.set(e,[]),this.items.get(e).push(r)}box(e,t,n,r,i,a,o,s=0,c=0,l=0,u=0){let d=u>0?new If(t,n,r,3,u):new bi(t,n,r);Bf.compose(Hf.set(i,a,o),Vf.setFromEuler(new sn(s,c,l)),Uf.set(1,1,1)),this.add(e,d,Bf),d.dispose()}tube(e,t,n,r,i=8,a=null){Gf.subVectors(n,t);let o=Gf.length();if(o<1e-5)return;let s=new Ci(a??r,r,1,i,1);Vf.setFromUnitVectors(Wf,Gf.multiplyScalar(1/o)),Bf.compose(Hf.addVectors(t,n).multiplyScalar(.5),Vf,Uf.set(1,o,1)),this.add(e,s,Bf),s.dispose()}bar(e,t,n,r=8,i=!0){for(let i=0;i<t.length-1;i++)this.tube(e,t[i],t[i+1],n,r);if(i)for(let r=1;r<t.length-1;r++)this.sphere(e,t[r],n)}sphere(e,t,n,r=1,i=1,a=1,o=10,s=7){let c=new Ka(n,o,s);Bf.compose(t,Vf.identity(),Uf.set(r,i,a)),this.add(e,c,Bf),c.dispose()}build(e,t={}){let n=new Tn;for(let[r,i]of this.items){let a=Rf(i,!1);if(i.forEach(e=>e.dispose()),!a)continue;let o=e[r];if(!o)throw Error(`missing material `+r);let s=new Y(a,o);s.castShadow=t.castShadow!==!1&&!(o.userData&&o.userData.noShadow),s.receiveShadow=!0,s.name=r,n.add(s)}return n}};function qf(e,t=22,n=!0){let r=[],i=[],a=(e,t)=>Math.sign(e)*Math.abs(e)**+t;for(let n of e){let e=n.n??3,i=n.taper??1,o=(n.y0+n.y1)/2,s=(n.y1-n.y0)/2;for(let c=0;c<t;c++){let l=c/t*Math.PI*2,u=Math.cos(l),d=Math.sin(l),f=a(u,2/e),p=o+s*a(d,2/e),m=(p-n.y0)/(n.y1-n.y0),h=n.w*f*(1+(i-1)*m)+(n.xoff??0);r.push(h,p,n.z)}}let o=e.length;for(let e=0;e<o-1;e++)for(let n=0;n<t;n++){let r=e*t+n,a=e*t+(n+1)%t,o=(e+1)*t+n,s=(e+1)*t+(n+1)%t;i.push(r,o,a,a,o,s)}if(n)for(let[n,a]of[[0,!1],[o-1,!0]]){let o=e[n],s=(o.y0+o.y1)/2,c=r.length/3;r.push(o.xoff??0,s,o.z);for(let e=0;e<t;e++){let r=n*t+e,o=n*t+(e+1)%t;a?i.push(c,r,o):i.push(c,o,r)}}let s=new Dr;s.setAttribute(`position`,new J(r,3)),s.setIndex(i),s.computeVertexNormals();let c=s.attributes.normal,l=s.attributes.position,u=0,d=0,f=0;for(let e=0;e<l.count;e++)u+=l.getX(e),d+=l.getY(e),f+=l.getZ(e);u/=l.count,d/=l.count,f/=l.count;let p=0;for(let e=0;e<l.count;e++)p+=c.getX(e)*(l.getX(e)-u)+c.getY(e)*(l.getY(e)-d)+c.getZ(e)*(l.getZ(e)-f);if(p<0){let e=s.index.array;for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}s.computeVertexNormals()}return s}function Jf(e,t,n=-.4,r=Math.PI+.4){let i=new Ci(e,e,t,30,1,!0,n,r-n);return i.rotateZ(Math.PI/2),i}function Yf(e,t,n,r=0,i=0,a=0,o=1,s=1,c=1){return new Xt().compose(new Q(e,t,n),new Et().setFromEuler(new sn(r,i,a)),new Q(o,s,c))}function Xf(e,t,n,r){Gf.subVectors(n,t);let i=Gf.length();e.position.addVectors(t,n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(Wf,i>1e-5?Gf.multiplyScalar(1/i):Wf),e.scale.set(r,Math.max(i,1e-4),r)}function Zf(t,n,r,{srgb:i=!0,repeat:a=!1,aniso:o=8}={}){let s=document.createElement(`canvas`);s.width=t,s.height=n,r(s.getContext(`2d`),t,n);let c=new gi(s);return i&&(c.colorSpace=Me),a&&(c.wrapS=c.wrapT=e),c.anisotropy=o,c}function Qf(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var $f={};function ep(e=`at`){if($f[e])return $f[e];let t=1024,n=(n,r)=>{let i=Qf(5),a=r===`bump`;n.fillStyle=a?`#555`:`#2a2520`,n.fillRect(0,0,t,256);for(let e=0;e<6;e++)n.fillStyle=a?`#666`:`#262119`,n.fillRect(0,10+e*6,t,2),n.fillRect(0,242-e*6,t,2);let o=a?`#fff`:`#32291f`;if(e===`mt`){let e=t/22;for(let t=0;t<22;t++)for(let r of[0,1]){let i=t*e+(r?e/2:0);n.fillStyle=o,n.beginPath();let a=r?128:35.84,s=r?220.16:128,c=r?-14:14;n.moveTo(i,a),n.lineTo(i+e*.62,a),n.lineTo(i+e*.62+c,s),n.lineTo(i+c,s),n.closePath(),n.fill()}}else if(e===`race`){let e=t/34;for(let t=0;t<4;t++)for(let r=0;r<34;r++){let i=r*e+t%2*e/2,a=256*(.18+t*.16);n.fillStyle=o,n.beginPath(),n.moveTo(i,a),n.lineTo(i+e*.72,a+6),n.lineTo(i+e*.72-7,a+33.28),n.lineTo(i-7,a+33.28-6),n.closePath(),n.fill()}}else{for(let e=0;e<3;e++)for(let t=0;t<21;t++){let r=t*48+e%2*48/2,i=256*(.26+e*.16);n.fillStyle=o,n.beginPath(),n.moveTo(r,i),n.lineTo(r+34,i+8),n.lineTo(r+34,i+38.4),n.lineTo(r,i+38.4-8),n.closePath(),n.fill()}for(let e of[0,1])for(let r=0;r<27.3;r++)n.fillStyle=a?`#ddd`:`#2d251c`,n.fillRect(r/27.3*t,e?209.92:17.92,26,30.72)}if(!a){for(let e=0;e<3e3;e++)n.fillStyle=`rgba(170,135,95,${i()*.18})`,n.fillRect(i()*t,i()*256,2+i()*4,2+i()*4);let e=n.createLinearGradient(0,0,0,256);e.addColorStop(0,`rgba(160,125,85,0.35)`),e.addColorStop(.2,`rgba(160,125,85,0)`),e.addColorStop(.8,`rgba(160,125,85,0)`),e.addColorStop(1,`rgba(160,125,85,0.35)`),n.fillStyle=e,n.fillRect(0,0,t,256)}};return $f[e]={color:Zf(t,256,e=>n(e,`color`),{srgb:!0,repeat:!0}),bump:Zf(t,256,e=>n(e,`bump`),{srgb:!1,repeat:!0})},$f[e]}function tp(e,t={}){let n=t.primary||`#c8141e`,r=t.accent||`#111214`,i=t.cls||``;return Zf(512,512,(t,a,o)=>{t.clearRect(0,0,a,o);let s=(e,n,r,i,a)=>{t.beginPath(),t.moveTo(e+a,n),t.arcTo(e+r,n,e+r,n+i,a),t.arcTo(e+r,n+i,e,n+i,a),t.arcTo(e,n+i,e,n,a),t.arcTo(e,n,e+r,n,a),t.closePath()},c=a-48,l=o-80;if(s(24,40,c,l,70),t.fillStyle=`#111214`,t.fill(),s(36,52,c-24,l-24,58),t.fillStyle=`#f6f3ea`,t.fill(),t.save(),s(36,52,c-24,l-24,58),t.clip(),t.fillStyle=n,t.fillRect(0,52,a,74),t.fillStyle=r,t.fillRect(0,126,a,8),i){t.fillStyle=`#ffffff`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`900 44px "Arial Black", Impact, sans-serif`,t.save(),t.translate(a/2,91),t.transform(1,0,-.2,1,0,0);let e=t.measureText(i).width,n=c-90;e>n&&t.scale(n/e,1),t.fillText(i,0,0),t.restore()}let u=40+l-12-46;for(let e=0;e*23<a;e++)for(let n=0;n<2;n++)t.fillStyle=(e+n)%2?`#111214`:`#f6f3ea`,t.fillRect(e*23,u+n*23,23,23);t.fillStyle=`#111214`,t.fillRect(0,u-6,a,6),t.restore();let d=String(e),f=(134+u-6)/2+6;t.save(),t.translate(a/2,f),t.transform(1,0,-.16,1,0,0),t.font=`900 250px "Arial Black", Impact, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`;let p=t.measureText(d).width,m=c-80;p>m&&t.scale(m/p,1),t.lineJoin=`round`,t.lineWidth=16,t.strokeStyle=n,t.strokeText(d,13,11),t.fillStyle=n,t.fillText(d,13,11),t.lineWidth=20,t.strokeStyle=`#f6f3ea`,t.strokeText(d,0,0),t.fillStyle=`#111214`,t.fillText(d,0,0),t.restore()})}function np(e,t=`#ffffff`,n=`rgba(0,0,0,0)`,r=512,i=128,a=`900 78px "Arial Black", Impact, sans-serif`){return Zf(r,i,o=>{o.clearRect(0,0,r,i),n!==`rgba(0,0,0,0)`&&(o.fillStyle=n,o.fillRect(0,0,r,i)),o.fillStyle=t,o.font=a,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(e,r/2,i/2+4)})}var rp=`"Arial Black", Impact, sans-serif`,ip=.16,ap=.1,op=1.3,sp=.75,cp=.29,lp=.3;function up(e,t){return Zf(512,256,(n,r,i)=>{n.fillStyle=e.primary,n.fillRect(0,0,r,i),n.fillStyle=e.secondary,n.fillRect(0,0,r,i*.24),n.fillStyle=e.accent,n.fillRect(0,i*.24,r,i*.035);for(let t of[.25,.75])n.fillStyle=e.accent,n.fillRect(r*(t-.05),i*.26,r*.1,i),n.fillStyle=e.secondary,n.fillRect(r*(t-.012),i*.26,r*.024,i);n.fillStyle=e.secondary;for(let e of[0,r])n.beginPath(),n.moveTo(e-r*.09,i*.36),n.lineTo(e,i*.5),n.lineTo(e+r*.09,i*.36),n.lineTo(e+r*.09,i*.43),n.lineTo(e,i*.57),n.lineTo(e-r*.09,i*.43),n.closePath(),n.fill();n.save(),n.translate(r*.5,i*.58),n.textAlign=`center`,n.textBaseline=`middle`,n.font=`900 ${Math.round(i*.34)}px ${rp}`,n.lineJoin=`round`,n.lineWidth=i*.03,n.strokeStyle=e.accent,n.strokeText(String(t),0,0),n.fillStyle=e.secondary,n.fillText(String(t),0,0),n.restore()})}function dp(e){let t=new q(e),n={};return t.getHSL(n),(n.h<.1||n.h>.93)&&n.s>.4?1315862:11736604}function fp(e,t,n,r,i,a,o){let s=new Q().subVectors(r,n),c=s.length();if(c<1e-5)return;s.multiplyScalar(1/c);let l=i.clone().addScaledVector(s,-i.dot(s)).normalize(),u=new Q().crossVectors(s,l),d=new Xt().makeBasis(u,s,l).setPosition(new Q().addVectors(n,r).multiplyScalar(.5)),f=new bi(a,c*1.04,o);e.add(t,f,d),f.dispose()}var pp=e=>new Q(e.x/op,e.y-Tt.clamp(e.y,-.1,ap),e.z/sp).divide(new Q(op,1,sp));function mp(e){let{livery:t,headC:n,eyeX:r,floorY:i,seatZ:a,roofY:o}=e,s=new Tn,c=new Tn;s.add(c);let l=(e,t={})=>new oo({color:new q(e),roughness:.22,metalness:.15,clearcoat:1,clearcoatRoughness:.08,...t}),u={shell:l(t.primary),stripe:l(t.secondary),peak:l(t.secondary,{side:2,clearcoat:.4,roughness:.4}),chin:l(t.primary,{side:2}),visor:new oo({color:658448,roughness:.04,metalness:.85,iridescence:.7,iridescenceIOR:1.7,iridescenceThicknessMinimum:250,iridescenceThicknessMaximum:600,envMapIntensity:1.6}),dark:new ao({color:1513499,roughness:.75}),carbon:new ao({color:1052947,roughness:.35,metalness:.3}),jersey:new ao({map:up(t,e.number),roughness:.85}),harness:new ao({color:1315862,roughness:.9}),harnessRed:new ao({color:dp(t.primary),roughness:.85}),buckle:new ao({color:12896462,roughness:.28,metalness:1}),pants:new ao({color:new q(t.accent).lerp(new q(2763824),.5),roughness:.85}),sleeve:new ao({color:new q(t.primary),roughness:.85}),cuff:new ao({color:new q(t.secondary),roughness:.85}),glove:e.glove},d=new Tn;d.position.copy(n),c.add(d);{let e=new Kf,t=new Q(1,1.03,1.1),n=(e=new Q(1,1,1),n=new Q)=>new Xt().compose(n,new Et,t.clone().multiply(e)),r=(t,n,r)=>{e.add(t,n,r||void 0),n.dispose()};r(`shell`,new Ka(.135,28,20),n());{let e=new Ka(.1368,30,2,Math.PI/2+.78,2.95,Math.PI/2-.16,.32);e.rotateZ(Math.PI/2),r(`stripe`,e,n())}r(`dark`,new Ka(.1384,24,8,Math.PI/2-.78,1.56,.93,.67),n()),r(`visor`,new Ka(.1394,24,8,Math.PI/2-.7,1.4,.98,.56),n()),r(`chin`,new Ka(.138,24,8,Math.PI/2-.95,1.9,Math.PI/2+.06,.78),n(new Q(.97,1.02,1.42),new Q(0,-.01,-.012))),e.box(`dark`,.065,.03,.018,0,-.055,.192,-.4,0,0,.007);for(let t of[1,-1])e.box(`dark`,.024,.018,.03,t*.072,-.066,.178,-.35,t*.55,0,.005);r(`peak`,new Lf((e,t,n)=>{let r=e*2-1,i=.098*(1-.3*t);n.set(r*i,.125-.05*r*r+t*.12*.2-.012*t*t*r*r,.06+t*.12+.012*(1-r*r)*t)},16,6),null),r(`dark`,new Lf((e,t,n)=>{let r=e*2-1;n.set(r*.0686,.125-.05*r*r+.024-.012*r*r-t*.008,.18+.012*(1-r*r))},16,1),null);for(let t of[1,-1])e.sphere(`buckle`,new Q(t*.112,.07,.07),.009);e.tube(`dark`,new Q(-.125,.02,-.02),new Q(-.15,.03,-.03),.022,10);let i=e.build(u);i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),d.add(i)}{let e=new Kf,t=new Q(r,n.y,n.z-.03);e.tube(`dark`,new Q(t.x,n.y-.24,t.z),new Q(t.x,n.y-.08,t.z),.058,12);let i=new qa(.11,.028,8,22,Math.PI*1.05);i.rotateX(Math.PI/2),i.rotateY(-Math.PI*.975),e.add(`carbon`,i,new Xt().makeTranslation(t.x,n.y-.205,t.z)),i.dispose(),e.box(`carbon`,.1,.12,.035,t.x,n.y-.14,t.z-.105,-.25,0,0,.012);for(let r of[1,-1])e.tube(`dark`,new Q(t.x+r*.04,n.y-.09,t.z-.11),new Q(t.x+r*.11,n.y-.04,t.z-.03),.006,6);let a=Math.min(o-.07,n.y+.32),s=new Fi([new Q(r-.15,n.y+.03,n.z-.03),new Q(r-.22,n.y+.06,n.z-.1),new Q(r-.24,a-.04,n.z-.22),new Q(r-.24,a,n.z-.36)]),l=new Ja(s,24,.02,8,!1);e.add(`dark`,l),l.dispose();for(let t=1;t<12;t++){let n=s.getPoint(t/12);e.sphere(`dark`,n,.0225,1,1,1,8,5)}c.add(e.build(u))}let f=new Tn;f.position.set(r,n.y-.42,n.z-.05),f.rotation.x=-.16,c.add(f);{let e=new Y(new xi(ip,ap*2,8,20),u.jersey);e.scale.set(op,1,sp),e.castShadow=!0,f.add(e);let t=new Kf,n=.011,r=(e,t,n)=>new Q(e,t,n);for(let e of[1,-1]){let i=e*.085,a=i/op,o=Math.sqrt(ip*ip-a*a)+n,s=[];s.push(r(i,-.14,o*sp),r(i,0,o*sp),r(i,ap,o*sp));for(let e=1;e<=9;e++){let t=e/9*Math.PI*.9;s.push(r(i,ap+o*Math.sin(t),o*Math.cos(t)*sp))}for(let e=0;e<s.length-1;e++){let n=s[e].clone().add(s[e+1]).multiplyScalar(.5);fp(t,`harnessRed`,s[e],s[e+1],pp(n),.052,.008)}t.box(`buckle`,.04,.03,.012,i,.04,o*sp+.006,0,0,0,.004)}{let e=.04999999999999999,r=Math.sqrt(ip*ip-e*e)+n,i=[];for(let e=0;e<=10;e++){let t=-1.35+2.7*e/10;i.push(new Q(r*Math.sin(t)*op,-.15,r*Math.cos(t)*sp))}for(let e=0;e<i.length-1;e++){let n=i[e].clone().add(i[e+1]).multiplyScalar(.5);fp(t,`harnessRed`,i[e],i[e+1],new Q(n.x/op/op,0,n.z/sp/sp),.055,.008)}t.box(`buckle`,.08,.07,.02,0,-.145,r*sp+.008,0,0,0,.008),t.sphere(`dark`,new Q(0,-.145,r*sp+.02),.016,1,1,.4,12,6)}f.add(t.build(u))}{let e=new Kf;for(let t of[1,-1]){let n=new Q(r+t*.1,i+.25,a+.02),o=new Q(r+t*.12,i+.42,a+.48),s=new Q(r+t*.11,i+.1,a+.72);e.tube(`pants`,n,o,.075,10,.065),e.sphere(`pants`,o,.066,1,1,1,10,7),e.tube(`pants`,o,s,.062,10,.05),e.box(`dark`,.1,.12,.26,s.x,i+.06,s.z+.06,-.2,0,0,.03)}s.add(e.build(u))}let p=new Ci(1,1,1,10),m=new Ka(1,10,8),h=t=>{let n={up:new Y(p,u.sleeve),el:new Y(m,u.sleeve),fore:new Y(p,u.sleeve),cuff:new Y(p,u.cuff),gaunt:new Y(p,u.glove)};for(let e of Object.values(n))e.castShadow=!0,e.scale.setScalar(.04),s.add(e);return{side:t,parts:n,shoulder:t>0?e.shoulderL:e.shoulderR}},g=[h(1),h(-1)],_=new Q,v=new Q,y=new Q,b=new Q,x=new Q,S=(e,t,n,r)=>{_.subVectors(n,t);let i=_.length();e.position.addVectors(t,n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(new Q(0,1,0),i>1e-5?_.multiplyScalar(1/i):_.set(0,1,0)),e.scale.set(r,Math.max(i,1e-4),r)},C=0;return{group:s,upper:c,head:d,update(e,t,n,r){g.forEach((n,r)=>{let i=n.shoulder,a=r?t:e;_.subVectors(a,i);let o=Math.min(_.length(),.585);_.normalize();let s=(cp*cp-lp*lp+o*o)/(2*o),c=Math.sqrt(Math.max(0,cp*cp-s*s));v.set(n.side*.8,-1,-.15),v.addScaledVector(_,-v.dot(_)).normalize(),y.copy(i).addScaledVector(_,s).addScaledVector(v,c),_.subVectors(y,a).normalize(),b.copy(a).addScaledVector(_,.075),x.copy(a).addScaledVector(_,.11),S(n.parts.up,i,y,.05),n.parts.el.position.copy(y),n.parts.el.scale.setScalar(.047),S(n.parts.fore,y,x,.042),S(n.parts.cuff,x,b,.043),S(n.parts.gaunt,b,a,.044)});let i=Tt.clamp(n*.7,-.32,.32);C+=(i-C)*Math.min(1,r*5),d.rotation.y=C}}}var hp=new Map,gp=(e,t)=>(hp.has(e)||hp.set(e,t()),hp.get(e)),_p=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()};function vp(){return gp(`kcCover`,()=>Zf(512,512,(e,t,n)=>{let r=e.createRadialGradient(t*.38,n*.32,20,t/2,n/2,t*.56);r.addColorStop(0,`#ffe04a`),r.addColorStop(.7,`#f5bd06`),r.addColorStop(1,`#d99a00`),e.fillStyle=r,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(120,80,0,0.35)`,e.lineWidth=6,e.beginPath(),e.arc(t/2,n/2,t*.455,0,Math.PI*2),e.stroke(),e.strokeStyle=`rgba(255,255,255,0.18)`,e.lineWidth=3,e.beginPath(),e.arc(t/2,n/2,t*.425,0,Math.PI*2),e.stroke(),e.fillStyle=`#0a0a0a`,e.textAlign=`center`,e.textBaseline=`alphabetic`,e.save(),e.translate(t/2,n*.5),e.transform(1,0,-.2,1,0,0),e.font=`900 250px "Arial Black", Impact, sans-serif`,e.fillText(`KC`,0,40),e.restore(),e.lineCap=`round`,e.strokeStyle=`#0a0a0a`,e.beginPath(),e.moveTo(t*.27,n*.625),e.quadraticCurveTo(t*.5,n*.78,t*.73,n*.625),e.lineWidth=17,e.stroke(),e.font=`900 italic 46px "Arial Black", Arial, sans-serif`,e.fillText(`DAYLIGHTER`,t/2,n*.83)}))}function yp(e,t,n,r,i,a){let o=r/408;e.save(),e.translate(t,n),e.scale(o,o),e.translate(-536,-576);let s=t=>{e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e.fill()};e.fillStyle=i,s([[232,385],[410,385],[410,460],[355,460],[355,438],[316,438],[316,475],[368,475],[368,527],[316,527],[316,570],[343,570],[343,618],[235,618],[235,570],[255,570],[255,435],[232,435]]),s([[616,385],[713,385],[713,435],[700,435],[724,463],[745,435],[737,435],[737,385],[836,385],[836,435],[810,435],[758,497],[822,570],[840,570],[840,618],[737,618],[737,570],[748,570],[724,540],[697,570],[712,570],[712,618],[607,618],[607,570],[628,570],[690,497],[637,435],[616,435]]),e.beginPath(),e.ellipse(510,486,122,115,0,0,Math.PI*2),e.fill();let c=()=>{e.beginPath(),e.moveTo(432,515),e.bezierCurveTo(415,555,410,620,428,660),e.bezierCurveTo(445,700,485,728,545,735),e.bezierCurveTo(600,742,650,735,685,738),e.bezierCurveTo(705,742,716,758,720,778),e.bezierCurveTo(745,752,756,712,738,678),e.bezierCurveTo(722,650,698,636,655,632),e.bezierCurveTo(615,628,590,620,570,603),e.bezierCurveTo(548,585,535,562,540,540),e.bezierCurveTo(545,515,565,495,555,470),e.bezierCurveTo(545,448,515,440,490,450),e.bezierCurveTo(462,462,445,490,432,515),e.closePath()};c(),e.fillStyle=a,e.fill(),e.lineWidth=13,e.lineJoin=`round`,e.lineCap=`round`,e.strokeStyle=i,c(),e.stroke(),e.beginPath(),e.moveTo(686,664),e.quadraticCurveTo(605,662,533,641),e.quadraticCurveTo(555,690,660,706),e.moveTo(660,708),e.quadraticCurveTo(580,712,507,685),e.quadraticCurveTo(522,722,560,731),e.stroke(),e.restore()}function bp(e,t,n){_p(e,-t/2+3,-n/2+3,t-6,n-6,n*.1),e.fillStyle=`#0b63c6`,e.fill(),e.lineWidth=5,e.strokeStyle=`#ffffff`,_p(e,-t/2+11,-n/2+11,t-22,n-22,n*.07),e.stroke(),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`alphabetic`,e.save(),e.translate(0,-n*.02),e.transform(1.28,0,-.2,1,0,0),e.font=`900 italic `+Math.round(n*.5)+`px "Arial Black", Impact, sans-serif`,e.fillText(`KING`,0,0),e.restore(),e.fillRect(-t*.4,n*.075,t*.8,n*.032),e.font=`900 `+Math.round(n*.135)+`px "Arial Black", Arial, sans-serif`,e.fillText(`OFF - ROAD`,0,n*.255),e.fillText(`RACING SHOCKS`,0,n*.385)}function xp(e){return gp(`label`+e,()=>Zf(256,e===`King`?704:640,(t,n,r)=>{t.clearRect(0,0,n,r),t.save(),t.translate(n/2,r/2),t.rotate(-Math.PI/2);let i=r,a=n;e===`King`?bp(t,i-4,a-4):(_p(t,-i/2+6,-a/2+18,i-12,a-36,14),t.fillStyle=`#0a0a0b`,t.fill(),t.lineWidth=7,t.strokeStyle=`#ff6a00`,t.stroke(),yp(t,0,0,(a-36)*.78,`#ff6a00`,`#0a0a0b`)),t.restore()},{aniso:8}))}function Sp(e=`INTERNAL BYPASS`){return gp(`foxRes`+e,()=>Zf(256,704,(t,n,r)=>{t.clearRect(0,0,n,r);let i=`#f26a21`;t.save(),t.translate(n*.1,r*.035),t.rotate(Math.PI/2),t.fillStyle=i,t.textBaseline=`alphabetic`,t.textAlign=`left`,t.font=`900 176px "Arial Black", Impact, sans-serif`,t.fillText(`FOX`,0,0),t.globalCompositeOperation=`destination-out`,t.fillStyle=`rgba(0,0,0,0.55)`;for(let e=0;e<3;e++)t.fillRect(40+e*118,-96,5,96);t.restore(),t.save(),t.fillStyle=i,t.beginPath(),t.moveTo(n*.64,r*.5),t.bezierCurveTo(n*.98,r*.43,n*.99,r*.21,n*.84,r*.04),t.bezierCurveTo(n*.86,r*.15,n*.8,r*.26,n*.66,r*.34),t.bezierCurveTo(n*.6,r*.4,n*.6,r*.46,n*.64,r*.5),t.fill(),t.fillStyle=`#ff9a55`,t.beginPath(),t.moveTo(n*.84,r*.04),t.bezierCurveTo(n*.9,r*.12,n*.88,r*.2,n*.8,r*.27),t.bezierCurveTo(n*.82,r*.18,n*.83,r*.1,n*.84,r*.04),t.fill(),t.restore();let a=r*.585,o=r*.095;t.fillStyle=i,t.fillRect(0,a,n,o),t.fillStyle=`#17120e`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`800 25px Arial, sans-serif`,t.letterSpacing=`2px`;let s=e.split(` `);s.forEach((e,r)=>t.fillText(e,n/2,a+o*(s.length===1?.5:.3+r*.4))),t.fillStyle=i,t.font=`900 italic 40px "Arial Black", Arial, sans-serif`,t.letterSpacing=`1px`,t.fillText(`FACTORY`,n/2,r*.915)},{aniso:8}))}function Cp(){return gp(`foxBody`,()=>Zf(128,384,(e,t,n)=>{e.clearRect(0,0,t,n),e.save(),e.translate(t*.16,n*.02),e.rotate(Math.PI/2),e.fillStyle=`#f26a21`,e.textBaseline=`alphabetic`,e.textAlign=`left`,e.font=`900 96px "Arial Black", Impact, sans-serif`,e.fillText(`FOX`,0,0),e.restore(),e.fillStyle=`#f26a21`,e.beginPath(),e.moveTo(t*.66,n*.42),e.bezierCurveTo(t*.98,n*.36,t*.99,n*.18,t*.84,n*.03),e.bezierCurveTo(t*.86,n*.13,t*.8,n*.23,t*.68,n*.29),e.bezierCurveTo(t*.62,n*.34,t*.62,n*.39,t*.66,n*.42),e.fill()},{aniso:8}))}function wp(){return gp(`kingRed`,()=>Zf(128,320,(e,t,n)=>{e.clearRect(0,0,t,n),e.save(),e.translate(t/2,n/2),e.rotate(-Math.PI/2),_p(e,-n/2+4,-t/2+10,n-8,t-20,10),e.fillStyle=`#d6402c`,e.fill(),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`900 30px "Arial Black", Arial, sans-serif`,e.fillText(`KING`,0,-13),e.font=`800 17px Arial, sans-serif`,e.fillText(`COMPRESSION  ADJ`,0,13),e.restore()}))}function Tp(e=!1){return gp(`kmcCap`+e,()=>Zf(256,256,(t,n,r)=>{let i=t.createRadialGradient(n*.4,r*.35,8,n/2,r/2,n*.55);i.addColorStop(0,e?`#e4e6e9`:`#34363b`),i.addColorStop(1,e?`#a9adb3`:`#0e0f11`),t.fillStyle=i,t.fillRect(0,0,n,r),t.strokeStyle=e?`#2a2c30`:`#c8ccd2`,t.lineWidth=7,t.beginPath(),t.arc(n/2,r/2,n*.43,0,Math.PI*2),t.stroke(),t.fillStyle=e?`#121316`:`#f2f4f7`,t.textAlign=`center`,t.textBaseline=`middle`,t.save(),t.translate(n/2,r*.47),t.transform(1,0,-.16,1,0,0),t.font=`900 92px "Arial Black", Impact, sans-serif`,t.fillText(`KMC`,0,0),t.restore(),t.fillRect(n*.27,r*.65,n*.46,5),t.font=`800 24px Arial, sans-serif`,t.fillText(`XD SERIES`,n/2,r*.73)}))}function Ep(e=!1){return gp(`kmcRing`+e,()=>Zf(2048,64,(t,n,r)=>{t.clearRect(0,0,n,r),t.fillStyle=e?`#15161a`:`#eceff3`,t.textBaseline=`middle`,t.textAlign=`left`;let i=`KMC   XD SERIES   `;t.font=`900 38px "Arial Black", Arial, sans-serif`;let a=t.measureText(i).width,o=Math.max(1,Math.round(n/a)),s=n/o;for(let e=0;e<o;e++)t.fillText(i,e*s+4,r/2+2)},{aniso:8,repeat:!0}))}function Dp(e,t,n=0,r=72){let i=[],a=[],o=[],s=[];for(let c=0;c<=r;c++){let l=c/r*Math.PI*2,u=Math.sin(l),d=Math.cos(l);if(i.push(n,e*u,e*d,n,t*u,t*d),o.push(1,0,0,1,0,0),a.push(c/r,0,c/r,1),c<r){let e=c*2;s.push(e,e+1,e+2,e+1,e+3,e+2)}}let c=new Dr;return c.setAttribute(`position`,new J(i,3)),c.setAttribute(`normal`,new J(o,3)),c.setAttribute(`uv`,new J(a,2)),c.setIndex(s),c}function Op(e=!1){return gp(`dkPlate`+e,()=>Zf(1024,768,(t,n,r)=>{let i=t.createLinearGradient(0,0,n,r);i.addColorStop(0,`#b9bec4`),i.addColorStop(.5,`#a3a8ae`),i.addColorStop(1,`#b4b8be`),t.fillStyle=i,t.fillRect(0,0,n,r);for(let e=0;e<640;e++)t.fillStyle=`rgba(${e%2?`255,255,255`:`80,84,90`},${.05+e%5*.012})`,t.fillRect(0,e/640*r,n,1+e%3*.4);let a=document.createElement(`canvas`);a.width=a.height=8;let o=a.getContext(`2d`);o.fillStyle=`#3a3d42`,o.fillRect(0,0,8,8),o.fillStyle=`#9a9fa5`,o.beginPath(),o.arc(4,4,2.2,0,7),o.fill(),t.save(),t.translate(n/2,r*(e?.2:.8)),t.transform(1,0,-.14,1,0,0),t.font=`900 150px "Arial Black", Impact, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.letterSpacing=`3px`,t.lineWidth=6,t.strokeStyle=`rgba(30,32,36,0.95)`,t.strokeText(`DIRTKING`,0,0),t.fillStyle=t.createPattern(a,`repeat`),t.fillText(`DIRTKING`,0,0),t.restore(),t.fillStyle=`rgba(40,43,48,0.9)`,t.font=`700 44px Arial, sans-serif`,t.textAlign=`center`,t.letterSpacing=`24px`,t.save(),t.translate(n/2,r*(e?.065:.935)),t.transform(1,0,-.14,1,0,0),t.fillText(`FABRICATION`,0,0),t.restore();for(let[e,i]of[[.1,.96],[.9,.96],[.2,.5],[.8,.5],[.3,.1],[.7,.1],[.5,.5]])t.fillStyle=`#7c8086`,t.beginPath(),t.arc(e*n,i*r,10,0,7),t.fill(),t.fillStyle=`#4b4e53`,t.beginPath(),t.arc(e*n,i*r,4.5,0,7),t.fill()},{aniso:8}))}function kp(e=!1){return gp(`bdFace`+e,()=>Zf(512,512,(t,n,r)=>{t.fillStyle=`#0b0b0d`,t.fillRect(0,0,n,r),t.strokeStyle=`rgba(255,255,255,0.13)`,t.lineWidth=4,_p(t,10,10,n-20,r-20,56),t.stroke(),t.save(),_p(t,52,70,n-104,r-118,50),t.clip();for(let[i,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let o=n/2+i*104,s=r/2+8+a*100,c=t.createRadialGradient(o-i*30,s-a*30,10,o,s,118);e?(c.addColorStop(0,`#ffd23a`),c.addColorStop(.7,`#e2a600`),c.addColorStop(1,`#a87500`)):(c.addColorStop(0,`#f4f8fa`),c.addColorStop(.6,`#c6d0d6`),c.addColorStop(1,`#8c979e`)),t.fillStyle=c,t.beginPath(),t.arc(o,s,118,0,7),t.fill(),t.strokeStyle=e?`rgba(120,80,0,0.45)`:`rgba(70,82,90,0.5)`,t.lineWidth=3;for(let e=-4;e<=4;e++)t.beginPath(),t.moveTo(o+e*22,s-100),t.lineTo(o+e*22,s+100),t.stroke();t.fillStyle=`rgba(255,255,255,0.9)`,t.beginPath(),t.arc(o-i*20,s-a*20,14,0,7),t.fill()}t.restore(),t.save(),t.translate(n/2,r/2+8),t.fillStyle=`#0d0e10`,t.beginPath(),t.arc(0,0,46,0,7),t.fill(),t.strokeStyle=`#9aa2a8`,t.lineWidth=3,t.stroke(),t.fillStyle=`#cfd5da`,t.font=`900 italic 50px "Arial Black", Arial, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`BD`,0,3),t.restore();for(let[e,i]of[[.075,.5],[.925,.5],[.5,.93],[.5,.115]])t.fillStyle=`#9ba0a6`,t.beginPath(),t.arc(e*n,i*r,19,0,7),t.fill(),t.fillStyle=`#3b3e42`,t.beginPath(),t.arc(e*n,i*r,8,0,7),t.fill();t.fillStyle=`#e8ecef`,t.font=`italic 800 34px Arial, sans-serif`,t.textAlign=`left`,t.fillText(`squadron`,62,52),t.font=`900 30px "Arial Black", Arial, sans-serif`,t.textAlign=`right`,t.fillText(`PRO`,n-62,52)},{aniso:8}))}function Ap(){return gp(`bdCap`,()=>Zf(128,128,(e,t,n)=>{e.fillStyle=`#0e0f11`,e.fillRect(0,0,t,n),e.strokeStyle=`#8f979d`,e.lineWidth=5,e.beginPath(),e.arc(t/2,n/2,54,0,7),e.stroke(),e.fillStyle=`#e1e6ea`,e.font=`900 italic 58px "Arial Black", Arial, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`BD`,t/2,n/2+3)}))}function jp(){return gp(`kcLens`,()=>Zf(512,512,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,6,t/2,n/2,t*.5);r.addColorStop(0,`#fffdf2`),r.addColorStop(.07,`#fff3c8`),r.addColorStop(.2,`#cfd4d8`),r.addColorStop(.55,`#8d949a`),r.addColorStop(.85,`#b9bec3`),r.addColorStop(1,`#4b4f54`),e.fillStyle=r,e.fillRect(0,0,t,n),e.lineWidth=2;for(let r=28;r<t*.49;r+=15)e.strokeStyle=`rgba(${r%30?`255,255,255`:`40,44,50`},${r%30?.16:.2})`,e.beginPath(),e.arc(t/2,n/2,r,0,7),e.stroke();e.strokeStyle=`rgba(255,255,255,0.1)`;for(let r=-t;r<t*2;r+=11)e.beginPath(),e.moveTo(r,0),e.lineTo(r,n),e.stroke();e.fillStyle=`#fffbe8`,e.beginPath(),e.arc(t/2,n/2,21,0,7),e.fill(),e.strokeStyle=`#2a2d31`,e.lineWidth=12,e.beginPath(),e.arc(t/2,n/2,t*.488,0,7),e.stroke()},{aniso:8}))}function Mp(e){return gp(`bdGuard`+e,()=>Zf(512,512,(t,n,r)=>{if(t.clearRect(0,0,n,r),e===`black`){t.fillStyle=`#050506`,t.fillRect(0,0,n,r);let e=t.createLinearGradient(0,0,n*.7,r*.9);e.addColorStop(0,`rgba(255,255,255,0.1)`),e.addColorStop(.3,`rgba(255,255,255,0.02)`),e.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=e,t.fillRect(0,0,n,r);let i=n/2,a=r*.4,o=n*.3;t.beginPath();for(let e=0;e<6;e++){let n=e/6*Math.PI*2,r=i+o*Math.cos(n),s=a+o*Math.sin(n);e?t.lineTo(r,s):t.moveTo(r,s)}t.closePath(),t.lineJoin=`round`,t.lineWidth=15,t.strokeStyle=`#f4f4f2`,t.stroke(),t.save(),t.translate(i,a+6),t.textAlign=`center`,t.textBaseline=`alphabetic`,t.font=`900 italic 205px "Arial Black", Impact, sans-serif`,t.lineJoin=`round`,t.transform(1,0,-.1,1,0,0);for(let[e,n,r]of[[`b`,-50,18],[`d`,58,78]])t.lineWidth=16,t.strokeStyle=`#050506`,t.strokeText(e,n,r),t.fillStyle=`#f4f4f2`,t.fillText(e,n,r);t.restore(),t.fillStyle=`#f4f4f2`,t.textAlign=`center`,t.textBaseline=`middle`,t.save(),t.translate(n/2-6,r*.835),t.transform(1,0,-.16,1,0,0),t.font=`900 italic 60px "Arial Black", Arial, sans-serif`,t.letterSpacing=`-2px`,t.fillText(`baja designs`,0,0),t.restore(),t.font=`700 16px Arial, sans-serif`,t.fillText(`®`,n*.835,r*.815)}else{let i=e===`amber`;t.fillStyle=i?`rgba(255,170,20,0.62)`:`rgba(210,225,235,0.14)`,t.fillRect(0,0,n,r),t.strokeStyle=i?`rgba(120,60,0,0.55)`:`rgba(255,255,255,0.45)`,t.lineWidth=14,_p(t,18,18,n-36,r-36,110),t.stroke(),t.strokeStyle=`rgba(255,255,255,0.35)`,t.lineWidth=9,t.beginPath(),t.moveTo(80,104),t.lineTo(240,60),t.stroke(),t.fillStyle=i?`rgba(90,45,0,0.5)`:`rgba(255,255,255,0.5)`,t.font=`900 italic 40px Arial, sans-serif`,t.textAlign=`right`,t.fillText(`bd`,n-62,r-54)}},{aniso:8}))}var Np={king:{name:`King Shocks`,aspect:2},fox:{name:`Fox`,aspect:1.75},baja:{name:`Baja Designs`,aspect:3.4},kc:{name:`KC HiLiTES`,aspect:2.2},dirtking:{name:`Dirt King`,aspect:3.2},kmc:{name:`KMC Wheels`,aspect:2.3}},Pp=`"Arial Black", Impact, sans-serif`;function Fp(e,t,n,r){let i=r*.14;e.save(),_p(e,0,0,n,r,i),e.fillStyle=`#f4f2ec`,e.fill();let a=r*.06,o=n-2*a,s=r-2*a;if(e.translate(a,a),t===`king`)e.save(),e.translate(o/2,s/2),bp(e,o,s),e.restore();else if(_p(e,0,0,o,s,i*.7),e.fillStyle=`#0c0c0d`,e.fill(),e.textBaseline=`middle`,t===`fox`)yp(e,o/2,s/2,s*.84,`#ff6a00`,`#0c0c0d`);else if(t===`baja`){_p(e,0,0,o,s,i*.7),e.fillStyle=`#ffffff`,e.fill();let t=`#d7182a`,n=s*.5,r=s*.5,a=s*.46;e.beginPath();for(let t=0;t<6;t++){let i=t*Math.PI/3,o=i+Math.PI/3,s=[n+Math.cos(i)*a,r+Math.sin(i)*a],c=[n+Math.cos(o)*a,r+Math.sin(o)*a],l=[(s[0]+c[0])/2,(s[1]+c[1])/2];t?e.lineTo(l[0],l[1]):e.moveTo(l[0],l[1]);let u=o+Math.PI/3,d=[n+Math.cos(u)*a,r+Math.sin(u)*a];e.arcTo(c[0],c[1],(c[0]+d[0])/2,(c[1]+d[1])/2,a*.22)}e.closePath(),e.fillStyle=t,e.fill(),e.save(),e.translate(n,r+s*.02),e.transform(1,0,-.32,1,0,0),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.font=`900 ${Math.round(s*.62)}px ${Pp}`,e.fillText(`bd`,0,0),e.restore(),e.save(),e.translate(s*1.04,s*.52),e.transform(1,0,-.3,1,0,0),e.fillStyle=t,e.textAlign=`left`,e.font=`900 ${Math.round(s*.3)}px ${Pp}`;let c=e.measureText(`baja designs`).width,l=o-s*1.12;c>l&&e.scale(l/c,1),e.fillText(`baja designs`,0,0),e.restore()}else if(t===`kc`){let t=s*.52,n=s*.5,r=s*.38;e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=`#f5bd06`,e.fill(),e.fillStyle=`#0a0a0a`,e.textAlign=`center`,e.save(),e.translate(t,n-r*.12),e.transform(1,0,-.2,1,0,0),e.font=`900 ${Math.round(r*.95)}px ${Pp}`,e.fillText(`KC`,0,0),e.restore(),e.lineCap=`round`,e.strokeStyle=`#0a0a0a`,e.lineWidth=r*.12,e.beginPath(),e.moveTo(t-r*.5,n+r*.38),e.quadraticCurveTo(t,n+r*.7,t+r*.5,n+r*.38),e.stroke(),e.fillStyle=`#ffffff`,e.textAlign=`left`,e.save(),e.translate(s*1.02,s*.5),e.transform(1,0,-.18,1,0,0),e.font=`900 ${Math.round(s*.36)}px ${Pp}`;let i=e.measureText(`HiLiTES`).width,a=o-s*1.1;i>a&&e.scale(a/i,1),e.fillText(`HiLiTES`,0,0),e.restore()}else t===`dirtking`?(e.lineWidth=s*.05,e.strokeStyle=`#ffc20e`,_p(e,s*.06,s*.06,o-s*.12,s*.88,i*.5),e.stroke(),e.save(),e.translate(o/2,s*.42),e.transform(1.05,0,-.22,1,0,0),e.textAlign=`center`,e.font=`900 ${Math.round(s*.5)}px ${Pp}`,e.lineWidth=s*.05,e.strokeStyle=`#000`,e.strokeText(`DIRTKING`,0,0),e.fillStyle=`#ffc20e`,e.fillText(`DIRTKING`,0,0),e.restore(),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.font=`800 ${Math.round(s*.14)}px Arial, sans-serif`,e.fillText(`FABRICATION`,o/2,s*.78)):t===`kmc`&&(e.fillStyle=`#ffffff`,e.textAlign=`center`,e.save(),e.translate(o/2,s*.42),e.scale(1.25,1),e.font=`900 ${Math.round(s*.56)}px ${Pp}`,e.fillText(`KMC`,0,0),e.restore(),e.fillStyle=`#d4202a`,e.fillRect(o*.18,s*.7,o*.64,s*.05),e.fillStyle=`#ffffff`,e.font=`800 ${Math.round(s*.13)}px Arial, sans-serif`,e.fillText(`WHEELS`,o/2,s*.86));e.restore()}function Ip(e){let t=Np[e].aspect,n=Math.round(512/t);return gp(`sticker`+e,()=>Zf(512,n,t=>{t.clearRect(0,0,512,n),Fp(t,e,512,n)},{aniso:8}))}var Lp=.0254,Rp=.45,zp=.72,Bp=.86;function Vp(e){let t=e.platform,n=e.build,r=e.cls===`trophy`,i=e.wheelRadius,a=r?i:t.tire*Lp/2,o=r?.1:e.lift+Math.max(0,i-a)*.55,s=e.front.z,c=e.rear.z,l=e.len,u=r?.92:.8+(l-e.wb-1.7)*.32,d=!r&&t.prof||(r?{corner:t.prof&&t.prof.corner!=null?t.prof.corner:.3,droop:t.prof&&t.prof.droop!=null?t.prof.droop:.04,brow:t.prof&&t.prof.brow,browX:t.prof&&t.prof.browX}:null),f=s+(d&&d.fo!=null?d.fo:u),p=f-l,m=d&&d.cowl!=null?f-d.cowl:s-(r?.78:.34+(e.wb-3)*.1),h=r?.72:.55+(1-Math.min(1,t.round+.35))*-.03+.1,g=d&&d.roofF!=null?f-d.roofF:m-h,_=d&&d.cabB!=null?f-d.cabB:m-(r?1.72:t.cab===`double`?2.25+(e.wb-3.1)*.25:1.85),v=d&&d.roofR!=null?f-d.roofR:_+(r?.3:.14),y=(d&&d.belt!=null?d.belt:r?1.2:t.belt+.17)+o,b=(r?1.86:d&&d.roof!=null?d.roof:e.hgt)+o,x=.05+t.round*.13,S=d&&d.droop!=null?d.droop:.05,C=d&&d.hoodF!=null?d.hoodF-x-.035+S+o:y-(r?.14:.035+t.round*.09),w=d&&d.hoodC!=null?d.hoodC-x-.035+o:y+.02,T=(d&&d.rocker!=null?d.rocker:r?.52:.42+a*.1)+o,E=e.wid/2-(t.wide&&!r?.1:0)-(r?.2:.02),D=Nd[n.fenders]||Nd.stock,O=Pd[n.bedsides]||Pd.stock,k=d&&d.flare!=null?d.flare:t.wide?.12:.02,A=i,ee=i,j=i+.075+(e.lift>0?.03:0);return{noseZ:f,tailZ:p,cowlZ:m,roofFrontZ:g,roofRearZ:v,cabRearZ:_,beltY:y,roofY:b,hoodFY:C,rockerY:T,w:E,arches:[{zc:s,yc:A+.04,R:j+D.lift*Lp,flare:k+D.flare*Lp,fw:.1+D.flare*Lp*3.2},{zc:c,yc:ee+.04,R:j+O.lift*Lp,flare:k+O.flare*Lp,fw:.1+O.flare*Lp*3.2}],e:t.arch,round:t.round,tr:r,dY:o,r:i,prof:d||{},fascia:t.fascia,hoodCY:w,rad:x}}function Hp(e,t){let n=e.prof&&e.prof.corner||0,r=e.noseZ-t;if(n>0){if(r>=n)return e.w;let t=n-Math.max(0,r);return e.w-n+Math.sqrt(Math.max(0,n*n-t*t))}let i=Math.max(0,(t-(e.noseZ-.75))/.75);return e.w*(1-(.05+e.round*.05)*i**2.4)}var Up=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Wp(e,t,n,r,i,a,o){let s=a==null?e.fw:Math.min(e.fw,Math.max(.1,a-(e.zc+e.R)-.005)),c=o==null?e.fw:Math.min(e.fw,Math.max(.1,e.zc-e.R-o-.005)),l=n>=e.zc?Up(e.zc,e.zc+e.R,n):1-Up(e.zc-e.R,e.zc,n),u=1-Up(0,c+(s-c)*l,Math.max(0,t.d)),d=1-Up(i-.22,i,r);return e.flare*u*d}function Gp(e,t,n,r){let i=n-e.zc,a=r-e.yc;if(a>=0){let o=(Math.abs(i)**+t+a**+t)**(1/t)/e.R;return{m:o,z:o<1?e.zc+i/Math.max(o,.001):n,y:o<1?e.yc+a/Math.max(o,.001):r,d:(o-1)*e.R}}let o=Math.abs(i)/e.R;return{m:o,z:o<1?e.zc+(i>=0?1:-1)*e.R:n,y:r,d:(o-1)*e.R}}function Kp(e,t,n,r){let i=e.length,a=2*t+1,o=new Float32Array(i*a*3),s=new Float32Array(i*a*2),c=[],l=[],u={x:0,y:0,z:0,s:!1};for(let l=0;l<i;l++)for(let i=0;i<a;i++){let d=i<=t?1:-1,f=(i<=t?i:2*t-i)/t;n(e[l],f,u);let p=l*a+i;o[p*3]=u.x*d,o[p*3+1]=u.y,o[p*3+2]=u.z,s[p*2]=r(e[l]),s[p*2+1]=f,u.s&&c.push(p,u.sz,u.sy)}for(let e=0;e<i-1;e++)for(let t=0;t<a-1;t++){let n=e*a+t,r=n+1,i=n+a,o=i+1;l.push(n,i,r,r,i,o)}let d=new Dr;d.setAttribute(`position`,new pr(o,3)),d.setAttribute(`uv`,new pr(s,2)),d.setIndex(l),d.computeVertexNormals();for(let e=0;e<c.length;e+=3)o[c[e]*3+1]=c[e+2],o[c[e]*3+2]=c[e+1];if(c.length){let e=d.index.array,t=[];for(let n=0;n<e.length;n+=3){let r=o[e[n]*3+2],i=o[e[n+1]*3+2],a=o[e[n+2]*3+2];Math.max(r,i,a)-Math.min(r,i,a)<.2&&t.push(e[n],e[n+1],e[n+2])}d.setIndex(t)}let f=d.attributes.normal,p=0;for(let e=0;e<o.length/3;e+=37)p+=f.getY(e)*Math.max(0,o[e*3+1]-1)+f.getX(e)*o[e*3];if(p<0){let e=d.index.array;for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}d.computeVertexNormals()}return d}function qp(e){let{noseZ:t,tailZ:n,cowlZ:r,roofFrontZ:i,roofRearZ:a,cabRearZ:o,beltY:s,roofY:c,hoodFY:l,rockerY:u,w:d,arches:f,e:p,round:m}=e,h=e=>(e-n)/(t-n),g=n=>{let u=[[t,l],[r+.02,e.hoodCY==null?s+.02:e.hoodCY],[i,c-.03],[a,c-.05],[o,s+.05]];for(let e=0;e<u.length-1;e++)if(n<=u[e][0]&&n>=u[e+1][0]){let t=(u[e][0]-n)/(u[e][0]-u[e+1][0]);return u[e][1]+(u[e+1][1]-u[e][1])*t}return s},_=t=>Hp(e,t),v=.05+m*.13,y=e.prof||{},b=y.dome,x=y.droop==null?.05:y.droop,S=y.creases||[],C=(e,n,r)=>{let i=t-e,a=0;if(i<.22&&(a-=(x+(y.brow||0)*Up(y.browX?y.browX[0]:.5,y.browX?y.browX[1]:.64,n))*(1-i/.22)**2),b&&i>b.z0&&i<b.z1){let e=(i-b.z0)/(b.z1-b.z0),t=Math.sin(Math.PI*Math.min(1,e*1.15))**.7;a+=b.h*t*Math.max(0,1-(n/b.w)**2.4)}for(let e of S){let t=(n-e.x)/e.w;i>.1&&i<(e.z1||9)&&(a+=e.h*Math.exp(-t*t)*Up(.1,.5,i))}return a},w=(e,n,i,a,o)=>{let c=_(e),l=g(e),d=Math.min(l,s-(e>r?(t-e)*-0:0)),m=Math.max(0,l-d),h=c-Math.min(.16,m*.24)-.01,y,b;if(n<=.45){let e=n/Rp;b=u+(Math.min(d,l)-u)*e,y=c*(1+.012*Math.sin(e*Math.PI))}else if(n<=.72){let e=(n-Rp)/.26999999999999996;b=d+(l-v-d)*e*+(m>v),y=c+(h-c)*e,m<=v&&(y=c,b=d-(1-e)*0)}else if(n<=.86){let e=(n-zp)/.14*Math.PI/2;y=h-v+Math.cos(e)*v,b=(m>v?l-v:d)+Math.sin(e)*v}else{let e=(n-Bp)/.14;y=(h-v)*(1-e),b=(m>v?l:d+v)+.035*Math.sin(e*Math.PI/2)}if(n>.7199&&e>r-.02&&(b+=C(e,Math.abs(y),n)),i.x=y,i.y=b,i.z=e,i.s=!1,n<=.4501)for(let n of f){let r=Gp(n,p,e,b);r.d<n.fw&&(i.x+=Wp(n,r,e,b,d,t,null)),r.m<1&&(i.s=!0,i.sz=r.z,i.sy=r.y,i.x=c+Wp(n,r,r.z,r.y,d,t,null)-.012)}},T=[];for(let e=t;e>o;e-=.034)T.push(e);return T.push(o),{cab:Kp(T,34,w,h),U:h}}function Jp(e,t){let{noseZ:n,tailZ:r,cabRearZ:i,beltY:a,rockerY:o,w:s,arches:c,e:l}=e,u=e=>(e-r)/(n-r),d=a+.015,f=c[1],p=(e,n,a)=>{let c,u;if(a.s=!1,a.z=e,n<=.45){let e=n/Rp;u=o+(d-o)*e,c=s}else if(n<=.72){let e=(n-Rp)/.26999999999999996;u=d+Math.sin(e*Math.PI)*.012,c=s-.1*e}else{let e=(n-zp)/.28;u=d+(t-d)*e,c=s-.1}if(a.x=c,a.y=u,n<=.4501){let t=Gp(f,l,e,u);t.d<f.fw&&(a.x+=Wp(f,t,e,u,d,i,r)),t.m<1&&(a.s=!0,a.sz=t.z,a.sy=t.y,a.x=s+Wp(f,t,t.z,t.y,d,i,r)-.012)}},m=[];for(let e=i-.035;e>r;e-=.03)m.push(e);m.push(r);let h=Kp(m,20,p,u),g=[],_=h.index.array,v=h.attributes.position;for(let e=0;e<_.length;e+=3){let t=v.getX(_[e]),n=v.getX(_[e+1]),r=v.getX(_[e+2]);Math.max(t,n,r)-Math.min(t,n,r)>.5||g.push(_[e],_[e+1],_[e+2])}return h.setIndex(g),h}var Yp={tacoma1:`chrome`,tundra1:`chrome`,silverado99:`chrome`,silverado03:`chrome`,silverado07:`chrome`,silverado14:`chrome`,sierra99:`chrome`,sierra03:`chrome`,sierra07:`chrome`,sierra14:`chrome`,tacoma2:`paint`,tacoma3:`paint`,tundra2:`paint`,ranger1:`paint`,ranger2:`paint`,ranger3:`paint`,ranger4:`paint`};function Xp(e,t,n){let r=2048,i=1024,a=t=>(t-e.tailZ)/(e.noseZ-e.tailZ)*r,o=e=>(1-e)*i,{cowlZ:s,roofFrontZ:c,roofRearZ:l,cabRearZ:u,tailZ:d,noseZ:f,tr:p}=e,m=t=>{let n=(e,n=18)=>{let r=e.map(e=>[a(e[0]),o(e[1])]),i=r.length,s=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2];t.beginPath();let c=s(r[i-1],r[0]);t.moveTo(c[0],c[1]);for(let e=0;e<i;e++){let a=r[e],o=s(a,r[(e+1)%i]);t.arcTo(a[0],a[1],o[0],o[1],n)}t.closePath(),t.fill()};n([[s-.03,.805],[s-.03,1.01],[c+.03,1.01],[c+.03,.805]]),n([[u+.01,.8],[u+.01,1.01],[l-.02,1.01],[l-.02,.8]]);let r=s-.1,i=u+(p?.14:.09),d=(c+l)/2-.05,f=.462,m=.708;p||e.singleWindow?n([[r,f],[c-.04,m],[l+.1,m],[i,f]]):(n([[r,f],[c-.04,m],[d+.05,m],[d+.05,f]]),n([[d-.05,f],[d-.05,m],[l+.08,m],[i,f]]))},h=Zf(r,i,d=>{let h=Qf(n);d.fillStyle=t.primary,d.fillRect(0,0,r,i),d.fillStyle=t.accent,d.fillRect(0,o(.1),r,i),d.fillStyle=t.secondary,d.beginPath(),d.moveTo(0,o(.34)),d.lineTo(r*.55,o(.25)),d.lineTo(r,o(.16)),d.lineTo(r,o(.1)),d.lineTo(r*.55,o(.17)),d.lineTo(0,o(.26)),d.closePath(),d.fill(),d.strokeStyle=`rgba(0,0,0,0.75)`,d.lineWidth=2.2;let g=(e,t,n)=>{d.beginPath(),d.moveTo(a(e),o(t)),d.lineTo(a(e),o(n)),d.stroke()};if(g(s-.05,0,Rp),g(u+.04,0,Rp),!p){let n=(c+l)/2-.05;g(n,0,Rp);let r=Yp[e.fascia]||`black`;d.fillStyle=r===`chrome`?`#cfd3d8`:r===`paint`?t.primary:`#111`,d.fillRect(a(n+.12),o(.38),34,9),d.fillRect(a(u+.2),o(.38),34,9),r!==`paint`&&(d.fillStyle=`rgba(255,255,255,0.35)`,d.fillRect(a(n+.12),o(.38),34,2),d.fillRect(a(u+.2),o(.38),34,2))}d.fillStyle=`rgba(8,8,10,0.9)`,d.fillRect(a(u),o(.46),a(s)-a(u),12),d.strokeStyle=`rgba(0,0,0,0.6)`,d.beginPath(),d.moveTo(a(f),o(.78)),d.lineTo(a(s),o(.78)),d.stroke(),d.fillStyle=`#0a0a0c`,d.fillRect(a(s-.02),o(1),14,i*.2);let _=d.createLinearGradient(0,i,0,0);_.addColorStop(0,`rgba(150,116,80,0.85)`),_.addColorStop(.2,`rgba(150,116,80,0.5)`),_.addColorStop(.5,`rgba(150,116,80,0.1)`),_.addColorStop(1,`rgba(150,116,80,0.05)`),d.fillStyle=_,d.fillRect(0,0,r,i);for(let e=0;e<5200;e++)d.fillStyle=`rgba(${130+h()*50},${100+h()*35},${65+h()*30},${h()*.1})`,d.fillRect(h()*r,i*(.25+h()*.75),1+h()*6,1+h()*6);d.fillStyle=`#000`,d.lineWidth=8,d.globalCompositeOperation=`destination-out`,m(d),d.globalCompositeOperation=`source-over`},{aniso:8}),g=Zf(r,i,e=>{e.fillStyle=`#000`,e.fillRect(0,0,r,i),e.fillStyle=`#fff`,m(e)},{srgb:!1}),_=e.prof||{},v=t=>Rp*Math.min(1.4,Math.max(0,(t-e.rockerY)/(e.beltY-e.rockerY)));return{paint:h,mask:g,bump:Zf(r,i,t=>{t.fillStyle=`#808080`,t.fillRect(0,0,r,i);let n=(e,n,r,i=7)=>{let s=t.createLinearGradient(a(e)-i,0,a(e)+i,0);s.addColorStop(0,`rgba(128,128,128,0)`),s.addColorStop(.5,`rgba(10,10,10,0.95)`),s.addColorStop(1,`rgba(128,128,128,0)`),t.fillStyle=s,t.fillRect(a(e)-i,o(r),i*2,o(n)-o(r))},d=(e,n,r,i,s)=>{let c=o(v(e)),l=t.createLinearGradient(0,c-i,0,c+i);l.addColorStop(0,`rgba(128,128,128,0)`),l.addColorStop(.42,`rgba(${128+s},${128+s},${128+s},0.95)`),l.addColorStop(.58,`rgba(${128-s*.8},${128-s*.8},${128-s*.8},0.95)`),l.addColorStop(1,`rgba(128,128,128,0)`),t.fillStyle=l,t.fillRect(a(n),c-i,a(r)-a(n),i*2)},m=_.bPillar==null?(c+l)/2-.05:f-_.bPillar;if(n(s-.05,.03,Rp),n(u+.04,.03,Rp),p||n(m,.03,Rp),t.fillStyle=`rgba(14,14,14,0.9)`,t.fillRect(a(u+.04),o(v(e.rockerY+.13))-3,a(s-.05)-a(u+.04),6),t.fillRect(a(f),o(.78)-3,a(s)-a(f),6),!p)for(let n of[m+.14,u+.2])t.fillStyle=`rgba(30,30,30,0.9)`,t.fillRect(a(n)-4,o(v(e.beltY-.1))-3,38,12);for(let e of _.lines||[])d(e.y,f-e.z0,f-e.z1,e.w||9,e.amt||60);for(let e of _.stamps||[])t.fillStyle=`rgb(${128+(e.amt||50)},${128+(e.amt||50)},${128+(e.amt||50)})`,t.fillRect(a(f-e.z1),o(v(e.y1)),a(f-e.z0)-a(f-e.z1),o(v(e.y0))-o(v(e.y1)))},{srgb:!1})}}var Zp={tacoma1:{grille:`bars`,gw:.46,gh:.3,bars:3,chrome:1,hl:`wrap`,hlh:.26,badge:`oval`},tacoma2:{grille:`bars`,gw:.46,gh:.5,bars:3,chrome:0,thick:1,hl:`swept`,hlh:.34,badge:`oval`},tacoma3:{grille:`hex`,gw:.58,gh:.72,hl:`angular`,hlh:.3,text:`TOYOTA`},tacoma4:{grille:`honey`,gw:.7,gh:.82,hl:`slim`,hlh:.16,text:`TOYOTA`},ranger1:{grille:`egg`,gw:.62,gh:.42,hl:`square`,hlh:.34,badge:`ford`},ranger2:{grille:`slot`,gw:.4,gh:.2,hl:`wrap`,hlh:.3,badge:`ford`},ranger3:{grille:`egg`,gw:.4,gh:.5,thick:1,hl:`swept`,hlh:.36,badge:`ford`},ranger4:{grille:`bar2`,gw:.62,gh:.5,hl:`angular`,hlh:.26,badge:`ford`},ranger5:{grille:`bar2`,gw:.68,gh:.6,hl:`cclamp`,hlh:.42,badge:`ford`},rangerR:{grille:`letters`,gw:.68,gh:.62,hl:`cclamp`,hlh:.42,text:`FORD`},tundra1:{grille:`bars`,gw:.44,gh:.42,bars:2,chrome:1,hl:`wrap`,hlh:.36,badge:`oval`},tundra2:{grille:`bars`,gw:.56,gh:.72,bars:3,chrome:1,thick:1,hl:`swept`,hlh:.44,badge:`oval`},tundra3:{grille:`honey`,gw:.74,gh:.86,hl:`slim`,hlh:.14,text:`TOYOTA`,bar:1},raptor1:{grille:`letters`,gw:.6,gh:.58,hl:`square`,hlh:.42,text:`FORD`,amber:3},raptor2:{grille:`letters`,gw:.66,gh:.62,hl:`cdrl`,hlh:.4,text:`FORD`,amber:3},raptor3:{grille:`letters`,gw:.7,gh:.62,hl:`cclamp`,hlh:.44,text:`FORD`,amber:3}};function Qp(e,t,n){let r=Zp[e]||Zp.tacoma3,i=1024;return Zf(i,384,e=>{let a=n===`emit`;e.fillStyle=a?`#000`:t,e.fillRect(0,0,i,384);let o=i*(.5-r.gw/2),s=384*(.5-r.gh/2)+8,c=i*r.gw,l=384*r.gh;if(!a){if(e.fillStyle=`#08090b`,r.grille===`hex`||r.grille===`honey`?(e.beginPath(),e.moveTo(o+34,s),e.lineTo(o+c-34,s),e.lineTo(o+c,s+l*.5),e.lineTo(o+c-34*1.6,s+l),e.lineTo(o+34*1.6,s+l),e.lineTo(o,s+l*.5),e.closePath(),e.fill()):e.fillRect(o,s,c,l),r.grille===`bars`){e.fillStyle=r.chrome?`#c8ccd0`:`#26282c`;let t=r.bars,n=r.thick?18:10;for(let r=0;r<t;r++)e.fillRect(o+8,s+l*(r+.6)/t-n/2,c-16,n);e.fillRect(o-6,s-7,c+12,7)}if(r.grille===`egg`){e.strokeStyle=r.thick?`#b9bdc2`:`#30333a`,e.lineWidth=r.thick?12:7;for(let t=0;t<=(r.thick?3:6);t++){let n=o+c*t/(r.thick?3:6);e.beginPath(),e.moveTo(n,s),e.lineTo(n,s+l),e.stroke()}for(let t=0;t<=2;t++){let n=s+l*t/2;e.beginPath(),e.moveTo(o,n),e.lineTo(o+c,n),e.stroke()}}if(r.grille===`bar2`&&(e.fillStyle=`#2b2d33`,e.fillRect(o+4,s+l*.32,c-8,20),e.fillRect(o+4,s+l*.66,c-8,14)),r.grille===`honey`||r.grille===`hex`){e.fillStyle=`#20222a`;for(let t=0;t<14;t++)for(let n=0;n<42;n++){let r=o+18+n*15+t%2*7,i=s+8+t*13;r<o+c-18&&i<s+l-6&&e.fillRect(r,i,8,7)}}r.grille===`slot`&&(e.fillStyle=`#25272c`,e.fillRect(o,s+l*.45,c,8)),r.grille===`letters`&&(e.fillStyle=`#17181c`,e.fillRect(o+8,s+8,c-16,l-16)),r.text&&(e.fillStyle=r.grille===`letters`?`#d7d7d7`:`#e8e8ea`,e.font=`900 ${r.grille===`letters`?96:54}px "Arial Black", Impact, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,r.text===`FORD`?e.fillText(`F O R D`,i/2,s+l*.5+4):e.fillText(r.text,i/2,s+l*.45)),r.badge===`oval`&&(e.strokeStyle=`#d9dbde`,e.lineWidth=7,e.beginPath(),e.ellipse(i/2,s+l/2,38,26,0,0,7),e.stroke(),e.beginPath(),e.ellipse(i/2,s+l/2,14,26,0,0,7),e.stroke()),r.badge===`ford`&&(e.fillStyle=`#16307e`,e.strokeStyle=`#ddd`,e.lineWidth=5,e.beginPath(),e.ellipse(i/2,s+l/2,58,25,0,0,7),e.fill(),e.stroke(),e.fillStyle=`#fff`,e.font=`italic 700 34px Georgia, serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`Ford`,i/2,s+l/2+1))}for(let t of[-1,1]){let n=i/2+t*(c/2+12),o=i/2-c/2-28,l=s+6,u=384*r.hlh,d=e=>n+t*e,f=t=>{e.beginPath(),t(),e.closePath(),e.fillStyle=a?`#fff`:`#d8dde2`,e.fill(),a||(e.strokeStyle=`#0c0d10`,e.lineWidth=8,e.stroke())};r.hl===`square`?f(()=>{e.rect(Math.min(d(0),d(o)),l,o,u)}):r.hl===`wrap`?f(()=>{e.moveTo(d(0),l+u*.2),e.lineTo(d(o),l),e.lineTo(d(o),l+u),e.lineTo(d(0),l+u)}):r.hl===`swept`?f(()=>{e.moveTo(d(0),l+u*.8),e.quadraticCurveTo(d(o*.5),l-6,d(o),l-8),e.lineTo(d(o),l+u*.7),e.lineTo(d(o*.3),l+u)}):r.hl===`angular`?f(()=>{e.moveTo(d(0),l+u*.7),e.lineTo(d(o*.2),l+4),e.lineTo(d(o),l-6),e.lineTo(d(o),l+u*.45)}):r.hl===`slim`?f(()=>{e.moveTo(d(0),l+12),e.lineTo(d(o),l-8),e.lineTo(d(o),l+u-8),e.lineTo(d(0),l+u+8)}):(r.hl===`cdrl`||r.hl===`cclamp`)&&(a||(e.fillStyle=`#111317`,e.fillRect(Math.min(d(0),d(o)),l,o,u)),e.strokeStyle=a?`#fff`:`#eef2f5`,e.lineWidth=10,e.beginPath(),e.moveTo(d(o-6),l+8),e.lineTo(d(10),l+8),e.lineTo(d(10),l+u-8),e.lineTo(d(o-6),l+u-8),r.hl===`cclamp`&&(e.moveTo(d(o-6),l+8),e.lineTo(d(o-6),l+u-8)),e.stroke(),e.fillStyle=a?`#888`:`#cfd5da`,e.fillRect(Math.min(d(o*.35),d(o*.8)),l+u*.32,o*.45,u*.36))}if(r.bar&&(e.fillStyle=a?`#fff`:`#e8eef4`,e.fillRect(o+40,s+l-26,c-80,9)),r.amber){e.fillStyle=a?`#ff9a20`:`#ffae3a`;for(let t=-1;t<=1;t++)e.fillRect(i/2+t*90-16,s-2,32,9)}},{srgb:n!==`emit`})}function $p(e,t){return Zf(1024,256,(n,r,i)=>{n.fillStyle=t,n.fillRect(0,0,r,i),n.fillStyle=`rgba(0,0,0,0.5)`,n.fillRect(r/2-44,26,88,24),n.fillStyle=`rgba(14,14,16,0.9)`,n.font=`900 92px "Arial Black", Impact, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,r/2,i*.6);let a=n.createLinearGradient(0,i,0,0);a.addColorStop(0,`rgba(150,116,80,0.7)`),a.addColorStop(1,`rgba(150,116,80,0.08)`),n.fillStyle=a,n.fillRect(0,0,r,i)})}var em=new Map;function tm(e,t){let n=e.toFixed(4)+`|`+t.toFixed(4);if(em.has(n))return em.get(n);let r=10.2,i=t/e,a=t/.36,o=e=>{let t=Math.min(e,r-e),n=Math.min(1,Math.max(0,(t-.3)/.9));return .3+.7*n*n*(3-2*n)},s=[0];for(let e=1;e<=400;e++)s.push(s[e-1]+o((e-.5)/400*r));let c=[],l=[],u=[],d=[];for(let e=0;e<=400;e++){let t=e/400*r*Math.PI*2,n=Math.cos(t),o=Math.sin(t),d=s[e]/s[400]-.5;for(let t=0;t<=8;t++){let r=t/8*Math.PI*2,s=Math.cos(r),f=Math.sin(r);c.push(n*(1+i*s),d+a*f,o*(1+i*s));let p=s/i,m=f/a,h=Math.hypot(p,m);l.push(n*p/h,m/h,o*p/h),u.push(e/400,t/8)}}for(let e=0;e<400;e++)for(let t=0;t<8;t++){let n=e*9+t,r=n+1,i=n+8+1,a=i+1;d.push(n,r,i,r,a,i)}let f=new Dr;return f.setAttribute(`position`,new J(c,3)),f.setAttribute(`normal`,new J(l,3)),f.setAttribute(`uv`,new J(u,2)),f.setIndex(d),f.userData.shared=!0,em.set(n,f),f}var nm=(e,t,n=22)=>new Ci(e,e,t,n,1,!1),rm=(e,t,n=22)=>{let r=new Ci(e,e,t,n,1,!1);return r.rotateZ(Math.PI/2),r},im=(e,t,n,r)=>new Ci(e,e,t,26,1,!0,n-r,r*2),$=(e,t,n)=>Yf(e,t,n);function am(e,t){let{R:n,bodyLen:r,sg:i,k:a,tag:o}=t;e.add(`teal2`,rm(.036*a,.074*a),$(0,0,0)),e.add(`chrome`,rm(.0185*a,.082*a),$(0,0,0)),e.add(`black`,rm(.0098*a,.086*a,12),$(0,0,0)),e.add(`teal`,nm(n*1.06,.07),$(0,-.05,0)),e.add(`silver`,nm(n,r-.085),$(0,-(.085+r)/2,0)),e.add(`teal`,nm(n*1.13,.05),$(0,-r+.025,0)),e.add(`teal`,nm(n*.82,.032),$(0,-r-.016,0)),e.add(`teal`,nm(n*1.72,.026),$(0,-r+.145,0)),e.add(`chrome`,nm(n*1.2,.01),$(0,-r+.162,0));let s=.1;o&&(e.add(`kingRed`,im(n*1.011,.1,i*Math.PI/2,.42),$(0,-(s+.05),0)),s+=.115);let c=r-s-.18,l=Math.min(5.5*n,c);l>.09&&e.add(`kingBadge`,im(n*1.012,l,i*Math.PI/2,Math.min(1,l/(5.5*n))),$(0,-(s+l/2),0))}function om(e,t){let{R:n,bodyLen:r,sg:i,k:a,nTubes:o}=t;am(e,{...t,tag:!0}),e.add(`teal`,nm(n*1.2,.06),$(0,-r+.05,0)),e.add(`teal`,nm(n*1.15,.05),$(0,-.2,0));let s=o===3?[1.25,-1.25,Math.PI]:o===4?[1.05,-1.05,2.3,-2.3]:Array.from({length:o},(e,t)=>t/o*Math.PI*2+1.2),c=n+.024*a,l=.0105*a,u=(e,t,n)=>new Q(e,t,n);for(let t=0;t<o;t++){let o=s[t],d=i*Math.cos(o),f=Math.sin(o),p=-.165-t%3*.028,m=-r+.08+.026*((t+1)%3);e.tube(`silver`,u(d*c,p,f*c),u(d*c,m,f*c),l,12),e.tube(`silver`,u(d*n*.9,p,f*n*.9),u(d*c,p,f*c),l*.95,10),e.tube(`silver`,u(d*n*.9,m,f*n*.9),u(d*c,m,f*c),l*.95,10),e.tube(`sleeve`,u(d*c,m,f*c),u(d*c,m-.058,f*c),.0148*a,14),e.tube(`brass`,u(d*c,m-.058,f*c),u(d*c,m-.074,f*c),.0052*a,8),e.tube(`brass`,u(d*c,p,f*c),u(d*c,p+.016,f*c),.0052*a,8)}let d=n*.68,f=.2+.02*(a-.8),p=-i*(n+d+.012),m=-.2-f/2;e.add(`silver`,nm(d,f),$(p,m,0)),e.add(`teal`,nm(d*1.06,.03),$(p,m+f/2+.012,0)),e.add(`teal`,nm(d*1.06,.026),$(p,m-f/2-.006,0)),e.tube(`silver`,u(p*.2,-.19,0),u(p,-.19,0),.016*a,10);let h=1.15,g=2*h*d,_=Math.min(f*.86,2.75*g);e.add(`kingBadge`,im(d*1.012,_,0,Math.max(.2,_/(2.75*g)*h)),$(p,m,0))}function sm(e,t){let{R:n,k:r}=t;e.add(`teal`,rm(.04*r,.076*r),$(0,0,0)),e.add(`teal`,nm(.031*r,.07),$(0,.05,0)),e.add(`chrome`,rm(.0195*r,.084*r),$(0,0,0)),e.add(`black`,rm(.0102*r,.088*r,12),$(0,0,0)),e.add(`teal`,nm(n*1.72,.026),$(0,.095,0))}function cm(e,t){let{R:n,k:r,sg:i,st:a,rcY:o,yMax:s,floorY:c}=t,l=(e,t,n)=>new Q(e,t,n),u=n*.66,d=.16+.06*(t.dia-2),f=a.x-i*.04,p=a.z+.34;e.add(`silver`,nm(u,d),$(f,o,p)),e.add(`teal`,nm(u*1.06,.03),$(f,o+d/2+.012,p)),e.add(`teal`,nm(u*1.06,.026),$(f,o-d/2-.006,p)),e.add(`teal`,nm(.0165*r,.03),$(f,o-d/2-.034,p)),e.add(`chrome`,nm(.0125*r,.034),$(f,o+d/2+.042,p));let m=1.15,h=2*m*u,g=Math.min(d*.84,2.75*h),_=g/(2.75*h)*m;e.add(`kingBadge`,im(u*1.012,g,i*Math.PI/2,_),$(f,o,p));for(let t of[-.7,.7])e.box(`black`,u*2.5,.016,u*2.5,f,o+t*d*.36,p,0,0,0,.004);let v=o-d*.26,y=o-d/2-.045;e.box(`cage`,.02,d*.72,u*2.6,f-i*(u+.012),o,p,0,0,0,.004),e.tube(`cage`,l(f-i*(u+.012),y,p),l(f-i*(u+.012),c,p),.017*Math.max(.8,r),10),e.box(`cage`,.12,.012,.12,f-i*(u+.012),c+.006,p,0,0,0,.004),e.tube(`cage`,l(f-i*(u+.012),v,p),l(a.x,a.y+.02,a.z+.09),.013,8);let b=l(a.x,a.y-.05,a.z+n*1.06+.012),x=l(f,o+d/2+.07,p),S=Math.min(.09,Math.max(.02,s-Math.max(b.y,x.y))),C=new Fi([b,l(b.x,b.y+.006,b.z+.05),l(b.x-i*.01,Math.max(b.y,x.y)+S,(b.z+x.z)/2),l(x.x,x.y+Math.min(.03,S*.4),x.z-.02),x]);e.add(`hose`,new Ja(C,28,.0105*r,8,!1)),e.add(`chrome`,nm(.0125*r,.03),$(b.x,b.y,b.z+.004)),e.add(`chrome`,nm(.0125*r,.03),$(x.x,x.y-.004,x.z))}function lm(e,t){let{R:n,bodyLen:r,sg:i,k:a,res:o,resLen:s,rr:c}=t,l=(e,t,n)=>new Q(e,t,n);e.add(`fblack`,rm(.034*a,.07*a),$(0,0,0)),e.add(`chrome`,rm(.0185*a,.078*a),$(0,0,0)),e.add(`black`,rm(.0098*a,.082*a,12),$(0,0,0)),e.add(`fblack`,nm(n*.74,.08),$(0,-.045,0)),e.add(`fblack`,nm(n*1.1,.07),$(0,-.105,0)),e.add(`fblack`,nm(n,r-.1),$(0,-(.1+r)/2,0)),e.add(`fblack`,nm(n*1.42,.05),$(0,-.195,0));for(let t=0;t<14;t++){let r=t/14*Math.PI*2,i=Math.cos(r),o=Math.sin(r);e.tube(`fdim`,l(i*n*1.4,-.195,o*n*1.4),l(i*n*1.455,-.195,o*n*1.455),.0068*a,6)}if(e.add(`fblack`,nm(n*1.28,.05),$(0,-.26,0)),e.add(`fblack`,nm(n*1.72,.03),$(0,-r+.13,0)),e.add(`fring`,nm(n*1.74,.012),$(0,-r+.152,0)),e.add(`fblack`,nm(n*1.2,.05),$(0,-r+.025,0)),e.add(`fblack`,nm(n*.82,.032),$(0,-r-.016,0)),o){let t=n*1.55+c+.014,r=-.085;e.add(`fblack`,new bi(.058*a,.06*a,t-n*.5),$(0,-.12,(t+n*.5)/2)),e.add(`fblack`,nm(n*.62,.075),$(0,-.125,n*.42)),e.add(`fblack`,new Ka(c*1.04,20,12),$(0,-.09000000000000001,t)),e.add(`fblack`,nm(c,s),$(0,r-s/2,t)),e.add(`fblack`,nm(c*1.05,.022),$(0,r-s+.006,t)),e.add(`steel`,nm(.0075*a,.014),$(0,r-s-.012,t)),e.add(`fring`,nm(c*1.065,.01),$(0,-.12000000000000001,t));let o=s-.045;e.add(`foxRes`,im(c*1.012,o,i*Math.PI/2,1.3),$(0,-.115-o/2,t))}}function um(e,t){let{R:n,bodyLen:r,sg:i,k:a,nTubes:o,band:s}=t,c=(e,t,n)=>new Q(e,t,n);lm(e,{R:n,bodyLen:r,sg:i,k:a,res:!1});let l=r-.34;l>.1&&e.add(`foxBodyDecal`,im(n*1.012,Math.min(.2,l),i*Math.PI/2,.55),$(0,-.3-Math.min(.2,l)/2,0));let u=o===3?[1.25,-1.25,Math.PI]:o===4?[1.05,-1.05,2.3,-2.3]:Array.from({length:o},(e,t)=>t/o*Math.PI*2+1.2),d=n+.026*a,f=.0108*a;for(let t=0;t<o;t++){let o=u[t],s=i*Math.cos(o),l=Math.sin(o),p=-(.28+t%3*.035),m=Math.min(-(r-.1-.03*((t+1)%3)),p-.09);e.tube(`ftube`,c(s*d,p,l*d),c(s*d,m,l*d),f,12);for(let t of[p,m])e.tube(`fring`,c(s*n*.92,t,l*n*.92),c(s*(d+.006),t,l*(d+.006)),.0165*a,12);e.tube(`fring`,c(s*d,m,l*d),c(s*d,m-.05,l*d),.0185*a,14),e.tube(`steel`,c(s*d,m-.05,l*d),c(s*d,m-.066,l*d),.0065*a,8),e.tube(`steel`,c(s*d,p,l*d),c(s*d,p+.018,l*d),.0058*a,8)}let p=n*.72,m=Math.min(.3,Math.max(.2,r-.2)),h=-(n+p+.014),g=-.17;e.add(`fblack`,nm(p,m),$(0,g-m/2,h)),e.add(`fblack`,new Ka(p*1.03,18,10),$(0,g,h)),e.add(`fblack`,nm(p*1.05,.022),$(0,g-m+.006,h)),e.add(`fring`,nm(p*1.065,.01),$(0,-.2,h)),e.tube(`fblack`,c(0,-.215,-n*.4),c(0,-.19,h),.02*a,10);let _=m-.05;e.add(`foxRes`,im(p*1.012,_,i*Math.PI/2,1.2),$(0,-.20500000000000002-_/2,h))}function dm(e,t){let{R:n,k:r}=t;e.add(`fblack`,rm(.04*r,.076*r),$(0,0,0)),e.add(`fblack`,nm(.031*r,.07),$(0,.05,0)),e.add(`chrome`,rm(.0195*r,.084*r),$(0,0,0)),e.add(`black`,rm(.0102*r,.088*r,12),$(0,0,0)),e.add(`fblack`,nm(n*1.72,.03),$(0,.098,0)),e.add(`fring`,nm(n*1.74,.01),$(0,.116,0))}function fm(e,t){let{st:n,sg:r,floorY:i}=t,a=(e,t,n)=>new Q(e,t,n),o=n.y+.075;for(let t of[-.05,.05])e.box(`cage`,.016,.11,.12,n.x+t,n.y+.02,n.z,0,0,0,.004);e.box(`cage`,.15,.018,.13,n.x,o,n.z,0,0,0,.004);let s=[];for(let[t,c,l,u]of[[.04*r,-.34,0,-.07],[.3*r,0,.05*r,0],[-.3*r,0,-.05*r,0]]){let r=a(n.x+l,o,n.z+u),d=a(n.x+t,i+.012,n.z+c);e.tube(`cage`,r,d,.022,10),e.box(`cage`,.1,.012,.1,d.x,i+.006,d.z,0,0,0,.004),s.push(d.clone().lerp(r,.42))}e.tube(`cage`,s[0],s[1],.014,8),e.tube(`cage`,s[0],s[2],.014,8)}function pm(e,t,n,r,i){let a=n.shock,o=a.brand,s=o===`King`,c=o===`Fox`,l=s||c,u=a.dia,d=u/3,f=new Ci(1,1,1,10,1),p=new Ci(1,1,1,18,1);new Ka(1,12,9);let m={body:new ao({color:a.body,metalness:s?.92:.75,roughness:s?.26:.32}),ring:new ao({color:a.ring,metalness:.5,roughness:.4}),spring:new ao({color:a.spring,metalness:.55,roughness:.42})};new ao({color:2829617,metalness:.85,roughness:.45});let h=(t,n=!0,r=f)=>{let i=new Y(r,t);return i.castShadow=n,i.userData.rig=!0,e.add(i),i},g=new bi(1,1,1),_=u*.0254/2+.008,v=tm(_*1.55,.0021*u),y=n.front.x,b=n.wheelRadius,x=n.front.z,S=n.rear.z,C=n.axF.travel,w=n.axR.travel,T=Math.max(.36,y-.78),E=a.tubes||0,D=l&&E>0,O={f:{lower:[[T,.42+r.dY*.5,x+.42],[T,.42+r.dY*.5,x-.42]],upper:[[T+.12,b+.5+r.dY*.4,x+.28],[T+.12,b+.5+r.dY*.4,x-.28]],top:[y-.34,b+C*.72+.3,x+.05],t:.72},r:{top:[y-.3,b+w*.7+.32,S+.12],t:.9}};l&&(O.r.top[1]+=.3);let k=r.hoodFY;i&&(O.f.top[1]=Math.min(O.f.top[1],i(O.f.top[0],O.f.top[2])-.11,k-.02));let A=(e,t)=>{let r=e?O.f.top:O.r.top,i,a,o;return e?(i=T+(y-.17-T)*O.f.t,a=O.f.lower[0][1]+(t-.19-O.f.lower[0][1])*O.f.t,o=x):(i=n.rear.x-.3,a=t+.06,o=S+.04),Math.hypot(i-r[0],a-r[1],o-r[2])},ee=e=>{let t=e?n.axF:n.axR,r=A(e,b+t.travel*(1-t.sagFrac));return Math.max(.32,Math.min(.72,r+.09-.15))},j=[],M=s?(()=>{let e=e=>new ao(e),n=t=>e({map:t,transparent:!0,roughness:.38,metalness:.15,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1});return{silver:m.body,teal:m.ring,teal2:e({color:1740754,metalness:.5,roughness:.4}),sleeve:e({color:4893162,metalness:.5,roughness:.4}),brass:e({color:12088122,metalness:.85,roughness:.4}),hose:e({color:1994704,metalness:.2,roughness:.7}),chrome:t.chrome,black:t.black,steel:t.steel,kingBadge:n(xp(`King`)),kingRed:n(wp())}})():null,N=a.live?`LIVE VALVE`:a.tubes?`RACE BYPASS`:a.bypass>0?`INTERNAL BYPASS`:`FACTORY RACE`,P=c?(()=>{let e=e=>new ao(e);return{fblack:e({color:a.body,metalness:.6,roughness:.2}),fring:m.ring,fdim:e({color:3948356,metalness:.85,roughness:.4}),ftube:e({color:3487548,metalness:.92,roughness:.3}),foxBodyDecal:e({map:Cp(),transparent:!0,roughness:.3,metalness:.15,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}),chrome:t.chrome,black:t.black,steel:t.steel,cage:t.cageCol,foxRes:e({map:Sp(N),transparent:!0,roughness:.3,metalness:.15,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1})}})():null;M&&(M.cage=t.cageCol);let F=(t,n={})=>{let r=t.build(M||P,{castShadow:n.shadow!==!1});return r.traverse(e=>{e.isMesh&&(e.userData.rig=!0,e.castShadow=e.castShadow&&!/^king|^foxRes|hose|brass|sleeve$/.test(e.name))}),e.add(r),r},te=r.rockerY+.36,I=r.rockerY+.02,ne=e=>({rr:_*.86,resLen:Math.max(.2,Math.min(.31,ee(e)-.17))});for(let e=0;e<4;e++){let r=e%2?-1:1,o=e<2,y=ee(o),b=o?O.f.top:O.r.top,x={sg:r,bodyLen:y,front:o,lower:[h(t.cageCol),h(t.cageCol)],upper:[h(t.cageCol),h(t.cageCol)],spring:e<2||n.axR.spring===`coil`?h(m.spring,!1,v):null,bump:a.hyd?h(m.ring,!1):null,leaf:e>=2&&n.axR.spring===`leaf`?[h(t.black,!0,g),h(t.black,!0,g),h(t.black,!1,g)]:null},S=new Q(b[0]*r,b[1],b[2]);if(s){let e=new Kf;am(e,{R:_,bodyLen:y,sg:r,k:d,tag:!1}),x.G=F(e);let n=new Kf;if(sm(n,{R:_,k:d}),x.H=F(n,{shadow:!1}),x.shaft=new Y(p,t.chrome),x.shaft.userData.rig=!0,x.shaft.castShadow=!1,x.H.add(x.shaft),D){let e=new Kf;om(e,{R:_,bodyLen:y,sg:r,k:d,nTubes:E}),x.GB=F(e);let n=new Kf;sm(n,{R:_,k:d}),x.HB=F(n,{shadow:!1}),x.shaftB=new Y(p,t.chrome),x.shaftB.userData.rig=!0,x.shaftB.castShadow=!1,x.HB.add(x.shaftB)}if(a.res){let e=S.x-r*.04,t=S.z+.34,n=.16+.06*(u-2),a=o&&i?Math.min(i(e,t)-.075,k-.1):S.y+.4,s=Math.min(S.y-.06,a-.1-n/2),c=new Kf;cm(c,{R:_,k:d,sg:r,st:S,rcY:s,yMax:a,dia:u,floorY:o?I:te}),x.R=F(c)}}else if(c){let{rr:e,resLen:n}=ne(o),i=new Kf;lm(i,{R:_,bodyLen:y,sg:r,k:d,res:!!a.res,resLen:n,rr:e}),x.G=F(i);let s=new Kf;if(dm(s,{R:_,k:d}),x.H=F(s,{shadow:!1}),x.shaft=new Y(p,t.chrome),x.shaft.userData.rig=!0,x.shaft.castShadow=!1,x.H.add(x.shaft),D){let e=new Kf;um(e,{R:_,bodyLen:y,sg:r,k:d,nTubes:E}),x.GB=F(e);let n=new Kf;dm(n,{R:_,k:d}),x.HB=F(n,{shadow:!1}),x.shaftB=new Y(p,t.chrome),x.shaftB.userData.rig=!0,x.shaftB.castShadow=!1,x.HB.add(x.shaftB)}}else x.body=h(m.body,!0,f),x.shaft=h(t.chrome,!1),x.res=h(m.body,!1,f),x.band=h(m.ring,!1,f),a.bypass>0&&a.tubes&&(x.byp={body:h(m.body,!0,f),tubes:Array.from({length:E},()=>h(t.steel,!1)),shaft:h(t.chrome,!1)});if(l&&!o){let e=new Kf;fm(e,{st:S,sg:r,floorY:te}),x.T=F(e)}j.push(x)}let re=h(t.black),L=new Y(new Ka(.17,12,10),t.black);L.userData.rig=!0,L.castShadow=!0,e.add(L);let R=new Q,z=new Q,B=new Q,V=new Q,ie=new Q,ae=new Q,oe=new Q,se=new Q,ce=new Q,le=new Q,ue=new Q;new Q(0,1,0);let de=new Q(0,-1,0),fe=new Q,pe=new Q,me=new Q,he=new Q;new Q,new Q,new Q,new Q,new Q,new Q;let ge={minLen:[9,9,9,9],maxLen:[0,0,0,0],bodyLen:[j[0].bodyLen,j[2].bodyLen]},_e=(e,t,n,r,i,a,o,s,c)=>{pe.subVectors(a,i);let l=pe.length();pe.multiplyScalar(1/Math.max(l,1e-4)),e.position.copy(i),e.quaternion.setFromUnitVectors(de,pe),t.position.copy(a),t.quaternion.copy(e.quaternion);let u=Math.max(.004,l-o-.108-.03),d=_*.32;return n.position.y=.108+u/2,n.scale.set(d,u,d),r&&(me.copy(a).addScaledVector(pe,-.108),he.copy(i).addScaledVector(pe,Math.max(.1,o-.132)),Xf(r,me,he,_*1.55)),l};return{stats:ge,corners:j,update(e){for(let t=0;t<4;t++){let i=e.wheels[t],o=Math.sign(i.lx),l=j[t],u=t<2,d=i.c.mountY+n.cgHeight-i.visLen;R.set(i.lx,d,i.lz),t===2&&le.copy(R),t===3&&ue.copy(R),ie.set(R.x-.17*o,R.y-.19,R.z),ae.set(R.x-.15*o,R.y+.22,R.z);let f=u?O.f.top:O.r.top;if(se.set(f[0]*o,f[1],f[2]),u){for(let e=0;e<2;e++)z.set(O.f.lower[e][0]*o,O.f.lower[e][1],O.f.lower[e][2]),Xf(l.lower[e],z,ie,.024),z.set(O.f.upper[e][0]*o,O.f.upper[e][1],O.f.upper[e][2]),Xf(l.upper[e],z,ae,.021);ce.set(T*o,O.f.lower[0][1],x),oe.lerpVectors(ce,ie,O.f.t)}else{let e=S+(n.cls===`trophy`?1.25:1),t=.52+r.dY*.6;if(z.set((y-.45)*o,t,e),B.set(R.x-.32*o,R.y-.12,R.z),Xf(l.lower[0],z,B,.026),n.axR.spring===`leaf`){l.upper[0].visible=l.upper[1].visible=l.lower[1].visible=!1,l.lower[0].visible=!1;let e=(y-.42)*o,t=.62+r.dY*.65;z.set(e,t,S+.78),B.set(e,R.y-.13,R.z),V.set(e,t-.02,S-.72);let n=new Q,i=(e,t,r,i,a)=>{e.position.addVectors(t,r).multiplyScalar(.5),n.subVectors(r,t),e.scale.set(i,a,n.length()),e.rotation.order=`YXZ`,e.rotation.set(-Math.atan2(n.y,n.z),0,0)},a=new Q(e,t-.02,S-.72);i(l.leaf[0],z,B,.07,.05),i(l.leaf[1],B,a,.07,.05);let s=new Q(e,R.y-.17,R.z),c=z.clone().lerp(B,.45),u=a.clone().lerp(B,.45);c.y-=.03,u.y-=.03,i(l.leaf[2],c,s,.065,.04)}else z.set((y-.5)*o,t+.28,e-.2),B.set(R.x-.42*o,R.y+.14,R.z),Xf(l.lower[1],z,B,.024),z.set(.2*o,t+.3,e),B.set(.25*o,R.y+.16,R.z),Xf(l.upper[0],z,B,.022),l.upper[1].visible=!1;oe.set(R.x-.3*o,R.y+.06,R.z+.04)}let p=oe.distanceTo(se);p<ge.minLen[t]&&(ge.minLen[t]=p),p>ge.maxLen[t]&&(ge.maxLen[t]=p);let m=u?-.17:-.2;if(s||c)_e(l.G,l.H,l.shaft,l.spring,se,oe,l.bodyLen,o,u),l.GB&&(B.copy(se),B.z+=m,B.x-=.03*o,V.copy(oe),V.z+=m*.6,V.x-=.02*o,_e(l.GB,l.HB,l.shaftB,null,B,V,l.bodyLen,o,u));else if(pe.subVectors(oe,se).normalize(),l.bodyEff=Math.min(l.bodyLen,p-.06),fe.copy(se).addScaledVector(pe,l.bodyEff),Xf(l.body,fe,se,_),Xf(l.shaft,oe,fe,_*.42),V.lerpVectors(fe,se,.14),Xf(l.band,fe,V,_*1.09),l.spring&&(V.copy(oe).addScaledVector(pe,-.03),B.copy(fe).addScaledVector(pe,-.06),Xf(l.spring,V,B,_*1.55)),a.res?(B.copy(se).add(V.set(.09*o+_*.7*o,-.05,0)),V.copy(B),V.y-=.26,Xf(l.res,V,B,_*.62)):l.res.visible=!1,l.byp){B.copy(se),B.z+=m,B.x-=.03*o,V.copy(oe),V.z+=m*.6,V.x-=.02*o;let e=V.clone().lerp(B,.42);Xf(l.byp.body,e,B,_*1.02),Xf(l.byp.shaft,V,e,_*.42),l.byp.tubes.forEach((t,n)=>{let r=n/l.byp.tubes.length*6.283+.5,i=Math.cos(r)*_*1.4,a=Math.sin(r)*_*1.4;Xf(t,e.clone().lerp(B,.08).add(ce.set(i,0,a)),e.clone().lerp(B,.92).add(ce),.009)})}l.bump&&(B.set(R.x-.26*o,Math.max(d+.25,se.y-.34),R.z+(u?.2:-.2)),V.copy(B),V.y+=.28,Xf(l.bump,B,V,.032)),u&&(z.set(0,.6+r.dY*.6,R.z),B.set(R.x-.04*o,R.y,R.z),n.axF.kind===`ttb`&&(l.upper[0].visible=l.upper[1].visible=!1))}Xf(re,le,ue,.052),L.position.lerpVectors(le,ue,.5),L.position.x+=.08}}}var mm=new Map;function hm(e,t,n){let r=e+(e===`team`?t.primary+t.secondary+n:``);if(mm.has(r))return mm.get(r);let i=Zf(384,200,r=>{if(e===`checkered`)for(let e=0;e<4;e++)for(let t=0;t<8;t++)r.fillStyle=(t+e)%2?`#f6f6f2`:`#0c0c0e`,r.fillRect(t*48,e*50,49,51);else if(e===`usa`){for(let e=0;e<13;e++)r.fillStyle=e%2?`#f4f4f0`:`#b22234`,r.fillRect(0,e/13*200,384,16.384615384615387);r.fillStyle=`#3c3b6e`,r.fillRect(0,0,384*.4,1400/13),r.fillStyle=`#ffffff`;for(let e=0;e<5;e++)for(let t=0;t<6;t++)r.beginPath(),r.arc(384*.4*(t+.5+e%2*0)/6.1+4,1400/13*(e+.6)/5.2,3.2,0,7),r.fill()}else e===`mexico`?(r.fillStyle=`#006847`,r.fillRect(0,0,128,200),r.fillStyle=`#f4f4f0`,r.fillRect(128,0,128,200),r.fillStyle=`#ce1126`,r.fillRect(256,0,128,200),r.fillStyle=`#7a5a2a`,r.beginPath(),r.arc(192,100,32,0,7),r.fill(),r.fillStyle=`#3d8a3a`,r.beginPath(),r.arc(192,114,22,0,Math.PI),r.fill()):e===`dustline`?(r.fillStyle=`#16120e`,r.fillRect(0,0,384,200),r.fillStyle=`#ff7a1a`,r.fillRect(0,16,384,20),r.fillRect(0,164,384,20),r.fillStyle=`#f4efe6`,r.font=`900 italic 58px "Arial Black", Impact, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`DUST`,384*.31,100),r.fillStyle=`#ff7a1a`,r.fillText(`LINE`,384*.7,100)):(r.fillStyle=t.primary,r.fillRect(0,0,384,200),r.fillStyle=t.secondary,r.fillRect(0,140,384,32),r.fillStyle=t.accent,r.fillRect(0,172,384,200*.14),r.fillStyle=`#ffffff`,r.font=`900 112px "Arial Black", Impact, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.strokeStyle=`rgba(0,0,0,0.5)`,r.lineWidth=6,r.strokeText(String(n),192,80),r.fillText(String(n),192,80));r.strokeStyle=`rgba(0,0,0,0.18)`,r.lineWidth=4,r.strokeRect(0,0,384,200)});return mm.set(r,i),i}function gm(e,t,n,r,i,a){let o=new Ci(1,1,1,8,1),s=new ao({color:1118740,roughness:.45,metalness:.2,emissive:16742938,emissiveIntensity:0}),c=Array.from({length:7},()=>{let t=new Y(o,s);return t.castShadow=!1,t.userData.rig=!0,e.add(t),t}),l=new Tn;l.position.copy(r),e.add(l);let u=new Y(new bi(.1,.012,.1),t.black);u.position.y=.006,l.add(u);let d=new Y(new Ci(.03,.036,.06,14),t.black);d.position.y=.04,l.add(d);let f=new Y(new Ci(.02,.02,.085,12),t.steel);f.position.y=.11,l.add(f);for(let e=0;e<4;e++){let n=new Y(new qa(.02,.0042,5,14),t.steel);n.rotation.x=Math.PI/2,n.position.y=.078+e*.022,l.add(n)}l.traverse(e=>{e.isMesh&&(e.userData.rig=!0,e.castShadow=!1)});let p=.4,m=.22,h=new Dr,g=new Float32Array(165),_=new Float32Array(110),v=[];for(let e=0;e<=4;e++)for(let t=0;t<=10;t++){let n=e*11+t;_[n*2]=t/10,_[n*2+1]=1-e/4}for(let e=0;e<4;e++)for(let t=0;t<10;t++){let n=e*11+t,r=n+1,i=n+10+1,a=i+1;v.push(n,i,r,r,i,a)}h.setAttribute(`position`,new pr(g,3)),h.setAttribute(`uv`,new pr(_,2)),h.setIndex(v);let y=new Y(h,new ao({map:hm(n,i,a),roughness:.8,metalness:0,side:2}));y.frustumCulled=!1,y.castShadow=!1,y.userData.rig=!0,e.add(y);let b=new Y(new Ka(.012,8,6),new zr({color:16751168}));b.userData.rig=!0,b.visible=!1,e.add(b);let x={px:0,vx:0,pz:0,vz:0,prev:new Q,have:!1,t:0,last:performance.now()},S=new Et,C=new Q,w=new Q,T=new Q,E=new Q,D=Array.from({length:8},()=>new Q),O=new Q,k=new Q,A=new Q;new Q(0,1,0);let ee=new Q,j=new sn,M=r.clone().add(new Q(0,.15,0));return{setNight(e){s.emissiveIntensity=e?2.6:0,b.visible=e},update(e){let t=performance.now(),n=Math.min(1/20,Math.max(1/240,(t-x.last)/1e3));x.last=t,x.t+=n,x.have||=(x.prev.copy(e.vel),!0),T.copy(e.vel).sub(x.prev).multiplyScalar(1/n),x.prev.copy(e.vel),S.copy(e.quat).invert(),E.copy(T).applyQuaternion(S);let r=e.speed,i=Math.min(.55,r*r*45e-5),a=.05,o=Tt.clamp(-E.z*a-i,-.9,.9),s=Tt.clamp(E.x*a,-.8,.8),l=7.5;x.vx+=(-85*(x.px-o)-l*x.vx)*n,x.px+=x.vx*n,x.vz+=(-85*(x.pz-s)-l*x.vz)*n,x.pz+=x.vz*n,x.px+=Tt.clamp(-E.y*6e-4,-.04,.04),D[0].copy(M);for(let e=0;e<7;e++){let t=((e+.5)/7)**1.5;j.set(x.px*t,0,x.pz*t,`XYZ`),O.set(0,1,0).applyEuler(j),D[e+1].copy(D[e]).addScaledVector(O,.23),Xf(c[e],D[e],D[e+1],.0108-e*85e-5)}b.position.copy(D[7]),C.copy(O).normalize(),w.copy(D[7]).addScaledVector(C,-.025);let u=Tt.clamp(r/16,0,1);k.set(0,0,-1).lerp(ee.set(0,-1,0),1-u*.92).addScaledVector(C,-k.dot(C)).normalize(),A.crossVectors(C,k).normalize();let d=.012+.07*u,f=6+26*u;for(let e=0;e<=4;e++)for(let t=0;t<=10;t++){let n=t/10,r=e/4,i=(e*11+t)*3,a=d*n**1.1*Math.sin(n*9-x.t*f+r*1.4)+.012*n*Math.sin(x.t*3+r),o=w.x-C.x*r*m+k.x*n*p+A.x*a,s=w.y-C.y*r*m+k.y*n*p+A.y*a,c=w.z-C.z*r*m+k.z*n*p+A.z*a;g[i]=o,g[i+1]=s,g[i+2]=c}h.attributes.position.needsUpdate=!0,h.computeVertexNormals(),h.computeBoundingSphere()}}}var _m={paint:{r:.34,m:.3},black:{col:`#0b0c0e`,r:.74,m:0},gloss:{col:`#07080a`,r:.16,m:.1},chrome:{col:`#d5d9df`,r:.1,m:1},dark:{col:`#2a2c31`,r:.45,m:.7},lens:{col:`#e8edf1`,r:.05,m:0},amber:{col:`#ff9d1a`,r:.12,m:0},red:{col:`#b8141b`,r:.14,m:0},silver:{col:`#9aa0a8`,r:.32,m:.9},grey:{col:`#3a3d43`,r:.6,m:.2},white:{col:`#f2f4f6`,r:.3,m:0}},vm=e=>Math.max(0,Math.min(255,128+127/80*e));function ym(e,t){let n=e.prof||{},r=n.droop==null?.05:n.droop;return e.hoodFY+e.rad+.035-r-(t??1.2)}function bm(e,t,n){let r=!!n.rear,i=r?-1:1,a=r?-1:1,o=r?e.tailZ:e.noseZ,s=e.prof||{},c=!!e.tr,l=e.dY||0,u=s.droop==null?.05:s.droop,d=r?t.corner==null?.05:t.corner:s.corner||0,f=d>0?e.w-d:Hp(e,e.noseZ),p=d>0?d*Math.PI/2:0,m=f+p,h=s.hoodF==null?e.hoodFY+e.rad+.035-u:s.hoodF+l,g=t.lip==null?c?.05:.07:t.lip,_=r?e.beltY+.005:h-g,v=!r&&t.cutY!=null?t.cutY:null,y=!r&&v!=null&&(!!n.cut||c&&!n.stockBumper),b=c&&!r?ym(e,n.srcHoodF):l,x=r?e.rockerY+.1:y?v+b:t.yBot==null?e.rockerY-.1:t.yBot+b,S=c&&n.srcHalfW?e.w/n.srcHalfW:1,C=e=>e+b,w=e=>e-b,T=Math.min(900,2040/(2*m)),E=Math.ceil(2*m*T),D=Math.ceil((_-x)*T),O=()=>{let e=document.createElement(`canvas`);return e.width=E,e.height=D,e},k=O(),A=O(),ee=O(),j=O(),M=k.getContext(`2d`),N=A.getContext(`2d`),P=ee.getContext(`2d`),F=j.getContext(`2d`);M.fillStyle=n.primary,M.fillRect(0,0,E,D),N.fillStyle=`#000`,N.fillRect(0,0,E,D),P.fillStyle=`rgb(${vm(0)},${vm(0)},${vm(0)})`,P.fillRect(0,0,E,D),F.fillStyle=`rgb(0,${Math.round(_m.paint.r*255)},${Math.round(_m.paint.m*255)})`,F.fillRect(0,0,E,D);let te=e=>{let t=Math.abs(e),n=t<=f?t:d>0?f+d*Math.asin(Math.min(1,(t-f)/d)):f;return a*Math.sign(e||1)*n},I=(e,t)=>[(te(e*S)+m)*T,(_-C(t))*T],ne={L:e,PX:T,TW:E,TH:D,yTop:_,yBot:x,xf:f,Sh:m,c:d,dY:l,primary:n.primary,stock:n.stockBumper,px:I,w:e.w,hoodTop:h-l,rear:r,cut:y,bumper:null,profile:null,mats:_m,cx:{C:M,E:N,Hc:P,M:F},path(e,t,n=!0){e.beginPath(),t.forEach((t,n)=>{let r=I(t[0],t[1]);n?e.lineTo(r[0],r[1]):e.moveTo(r[0],r[1])}),n&&e.closePath()},fill(e,t=`black`,r={}){let i=e=>{let i=_m[t]||_m.black,a=r.col||(t===`paint`?n.primary:i.col);if(this.path(M,e),r.grad){let t=e.map(e=>I(e[0],e[1])[1]),n=M.createLinearGradient(0,Math.min(...t),0,Math.max(...t));n.addColorStop(0,r.grad[0]),n.addColorStop(1,r.grad[1]),M.fillStyle=n}else M.fillStyle=a;if(M.fill(),this.path(F,e),F.fillStyle=`rgb(0,${Math.round((r.r==null?i.r:r.r)*255)},${Math.round((r.m==null?i.m:r.m)*255)})`,F.fill(),r.h!=null){this.path(P,e);let t=vm(r.h);P.fillStyle=`rgb(${t},${t},${t})`,P.fill()}if(r.emit&&(this.path(N,e),N.fillStyle=r.emit,N.fill()),r.stroke){let t=Math.max(1,r.stroke[1]*T);this.path(M,e),M.strokeStyle=r.stroke[0],M.lineWidth=t,M.lineJoin=`round`,M.stroke(),r.strokeMat&&(this.path(F,e),F.strokeStyle=`rgb(0,${Math.round(_m[r.strokeMat].r*255)},${Math.round(_m[r.strokeMat].m*255)})`,F.lineWidth=t,F.stroke())}};i(e),r.sym&&i(e.map(e=>[-e[0],e[1]]))},rect(e,t,n,r,i=0,a=5){if(!i)return[[e,t],[n,t],[n,r],[e,r]];let o=[],s=(e,t,n)=>{for(let r=0;r<=a;r++){let s=n+r/a*Math.PI/2;o.push([e+Math.cos(s)*i,t+Math.sin(s)*i])}};return s(n-i,r-i,0),s(e+i,r-i,Math.PI/2),s(e+i,t+i,Math.PI),s(n-i,t+i,Math.PI*1.5),o},ellipse(e,t,n,r,i=28){let a=[];for(let o=0;o<i;o++){let s=o/i*Math.PI*2;a.push([e+Math.cos(s)*n,t+Math.sin(s)*r])}return a},pattern(e,t,n={}){let r=n.sym?[e,e.map(e=>[-e[0],e[1]])]:[e];for(let e of r){let r=e.map(e=>e[0]),i=e.map(e=>e[1]),a=Math.min(...r),o=Math.max(...r),s=Math.min(...i),c=Math.max(...i);M.save(),this.path(M,e),M.clip(),F.save(),this.path(F,e),F.clip(),P.save(),this.path(P,e),P.clip();let l=n.pitch||.02,u=n.bar||l*.5,d=n.col||`#1e2024`,f=n.r==null?.5:n.r,p=n.m==null?.2:n.m,m=n.h,h=(e,t,n,r,i)=>{let a=I(e,t),o=I(n,r);for(let[e,t,n]of[[M,d,i],[F,`rgb(0,${Math.round(f*255)},${Math.round(p*255)})`,i]])e.strokeStyle=t,e.lineWidth=n*T,e.lineCap=`butt`,e.beginPath(),e.moveTo(a[0],a[1]),e.lineTo(o[0],o[1]),e.stroke();if(m!=null){let e=vm(m);P.strokeStyle=`rgb(${e},${e},${e})`,P.lineWidth=i*T,P.beginPath(),P.moveTo(a[0],a[1]),P.lineTo(o[0],o[1]),P.stroke()}};if(t===`hslat`)for(let e=s+l/2;e<c;e+=l)h(a-.05,e,o+.05,e,u);else if(t===`vslat`)for(let e=a+l/2;e<o;e+=l)h(e,s-.05,e,c+.05,u);else if(t===`egg`){for(let e=s;e<c+l;e+=l)h(a-.05,e,o+.05,e,u);for(let e=a;e<o+l;e+=l)h(e,s-.05,e,c+.05,u)}else if(t===`mesh`){let e=c-s;for(let t=-e/l-2;t<(o-a)/l+2;t++)h(a+t*l,s,a+t*l+e,c,u),h(a+t*l+e,s,a+t*l,c,u)}else if(t===`honey`){let e=l,t=l*.866,n=0;for(let r=s;r<c+t;r+=t,n++)for(let t=a+n%2*e/2;t<o+e;t+=e){let e=[];for(let n=0;n<6;n++){let i=Math.PI/6+n*Math.PI/3;e.push([t+Math.cos(i)*l*.5,r+Math.sin(i)*l*.5])}this.path(M,e),M.strokeStyle=d,M.lineWidth=u*T,M.stroke(),this.path(F,e),F.strokeStyle=`rgb(0,${Math.round(f*255)},${Math.round(p*255)})`,F.lineWidth=u*T,F.stroke()}}M.restore(),F.restore(),P.restore()}},text(e,t,n,r,i={}){let a=I(t,n),o=i.font||`"Arial Black", Impact, sans-serif`,s=i.weight||`900`;for(let[t,n]of[[M,i.col||`#e8eaed`],[F,`rgb(0,${Math.round((i.r==null?.2:i.r)*255)},${Math.round((i.m==null?1:i.m)*255)})`]])t.save(),t.font=`${i.italic?`italic `:``}${s} ${Math.round(r*T*1.35)}px ${o}`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=n,i.spacing&&(t.letterSpacing=Math.round(i.spacing*T)+`px`),t.fillText(e,a[0],a[1]),t.restore();if(i.emit&&(N.save(),N.font=`${s} ${Math.round(r*T*1.35)}px ${o}`,N.textAlign=`center`,N.textBaseline=`middle`,N.fillStyle=i.emit,N.fillText(e,a[0],a[1]),N.restore()),i.h!=null){P.save(),P.font=`${s} ${Math.round(r*T*1.35)}px ${o}`,P.textAlign=`center`,P.textBaseline=`middle`;let t=vm(i.h);P.fillStyle=`rgb(${t},${t},${t})`,P.fillText(e,a[0],a[1]),P.restore()}},seam(e,t=`rgba(0,0,0,0.75)`,n=.003,r=!1){this.path(M,e,!r),M.strokeStyle=t,M.lineWidth=Math.max(1,n*T),M.stroke(),this.path(P,e,!r),P.strokeStyle=`rgb(${vm(-4)},${vm(-4)},${vm(-4)})`,P.lineWidth=Math.max(1,n*T),P.stroke()}};t(ne);{let e=P.getImageData(0,0,E,D).data,t=new Uint8ClampedArray(E*D);for(let n=0;n<E*D;n++)t[n]=e[n*4];let r=(e,t,n)=>{let r=n?E:D,i=n?D:E;for(let a=0;a<i;a++){let i=0;for(let t=-5;t<=5;t++)i+=e[n?a*E+Math.max(0,Math.min(r-1,t)):Math.max(0,Math.min(r-1,t))*E+a];for(let o=0;o<r;o++){t[n?a*E+o:o*E+a]=i/11;let s=Math.min(r-1,o+5+1),c=Math.max(0,o-5);i+=e[n?a*E+s:s*E+a]-e[n?a*E+c:c*E+a]}}},i=new Uint8ClampedArray(E*D);r(t,i,!0),r(i,t,!1),r(t,i,!0),r(i,t,!1),n.height={data:t,w:E,h:D}}let re=(e,t)=>{let n=new gi(e);return t&&(n.colorSpace=Me),n.anisotropy=8,n},L=re(k,!0),R=re(A,!0),z=re(j,!1),B=Math.min(360,Math.round(2*m/.006)),V=Math.min(140,Math.round((_-x)/.008)),ie=new Float32Array((B+1)*(V+1)*3),ae=new Float32Array((B+1)*(V+1)*2),oe=[],se=n.stockBumper&&!y?ne.bumper:null,ce=n.stockBumper&&!y?ne.profile:null,le=e=>e*e*(3-2*e),ue=e=>{if(ce){if(e<=ce[0][0])return ce[0][1];if(e>=ce[ce.length-1][0])return ce[ce.length-1][1];for(let t=0;t<ce.length-1;t++)if(e<=ce[t+1][0])return ce[t][1]+(ce[t+1][1]-ce[t][1])*le((e-ce[t][0])/(ce[t+1][0]-ce[t][0]))}if(!se)return 0;let t=(e-se.y0)/(se.y1-se.y0);if(t<=0||t>=1)return 0;let n=3.2;return se.out*Math.max(0,1-Math.abs(2*t-1)**n)**(1/n)},de=n.height,fe=(e,t)=>{let n=Math.min(de.w-1,Math.max(0,e*(de.w-1))),r=Math.min(de.h-1,Math.max(0,(1-t)*(de.h-1))),i=Math.floor(n),a=Math.floor(r),o=Math.min(de.w-1,i+1),s=Math.min(de.h-1,a+1),c=n-i,l=r-a,u=(e,t)=>de.data[t*de.w+e];return((u(i,a)*(1-c)+u(o,a)*c)*(1-l)+(u(i,s)*(1-c)+u(o,s)*c)*l-128)/127*.08},pe=t.bulge==null?r?0:.012:t.bulge;for(let e=0;e<=V;e++)for(let t=0;t<=B;t++){let n=t/B,s=e/V,c=(n-.5)*2*m,l=Math.abs(c),u=Math.sign(c)||1,h=x+s*(_-x),g,v,y,b;if(l<=f)g=l,v=o+i*pe*(1-(l/Math.max(f,.01))**2),y=0,b=i;else{let e=(l-f)/d;g=f+d*Math.sin(e),v=o-i*d+i*d*Math.cos(e),y=Math.sin(e),b=i*Math.cos(e)}let S=ue(w(h)),C=(r?.011:.004)+fe(n,s),T=(e*(B+1)+t)*3;ie[T]=a*u*(g+y*C-Math.min(.05,S*.2)*(l>f?(l-f)/Math.max(p,.001):0)),ie[T+1]=h,ie[T+2]=v+b*C+i*S,ae[(e*(B+1)+t)*2]=n,ae[(e*(B+1)+t)*2+1]=s}for(let e=0;e<V;e++)for(let t=0;t<B;t++){let n=e*(B+1)+t,r=n+1,i=n+B+1,a=i+1;oe.push(n,r,i,r,a,i)}let me=new Dr;me.setAttribute(`position`,new pr(ie,3)),me.setAttribute(`uv`,new pr(ae,2)),me.setIndex(oe),me.computeVertexNormals();let he=new oo({map:L,emissiveMap:R,emissive:16777215,emissiveIntensity:.3,metalnessMap:z,roughnessMap:z,metalness:1,roughness:1,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1.1}),ge=new Y(me,he);return ge.castShadow=!0,ge.receiveShadow=!0,ge.name=r?`rear`:`face`,{mesh:ge,yTop:_,mat:he,Sh:m,xf:f,c:d}}function xm(e,t,n){let{Sh:r,xf:i,c:a,yTop:o}=t,s=e.rad,c=e.prof||{},l=c.droop==null?.05:c.droop,u=c.brow||0,d=c.browX||[.5,.64],f=[],p=[],m=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};for(let t=0;t<=120;t++){let n=(t/120-.5)*2*r,c=Math.abs(n),h=Math.sign(n)||1,g,_;if(c<=i)g=c,_=e.noseZ+.012*(1-(c/Math.max(i,.01))**2);else{let t=(c-i)/a;g=i+a*Math.sin(t),_=e.noseZ-a+a*Math.cos(t)}let v=Hp(e,Math.min(e.noseZ,_))-.01,y=v-s,b=Math.max(0,e.noseZ-_),x=b<.22?(l+u*m(d[0],d[1],g))*(1-b/.22)**2:0,S=g<=y?e.hoodFY+s+.035*Math.sin((1-g/Math.max(y,.01))*Math.PI/2)-x:g<=v?e.hoodFY+s*Math.sin(Math.acos(Math.min(1,(g-y)/s)))-x:e.hoodFY-x;if(f.push(h*g,o-.012,_+.003,h*g,Math.max(o-.012,S)+.002,_+.001),t<120){let e=t*2;p.push(e,e+2,e+1,e+1,e+2,e+3)}}let h=new Dr;h.setAttribute(`position`,new J(f,3)),h.setIndex(p),h.computeVertexNormals();let g=new Y(h,n);return g.castShadow=!0,g.receiveShadow=!0,g.name=`hoodLip`,g}var Sm=(e,t,n=0)=>{let r=e.reduce((e,t)=>e+t[0],0)/e.length,i=e.reduce((e,t)=>e+t[1],0)/e.length;return e.map(e=>[r+(e[0]-r)*t,i+(e[1]-i)*t+n])},Cm=(e,t)=>Sm(e,t),wm=(e,t,n,r,i=`#d9dcdf`,a=7)=>{let o=r/2,s=r*.34;e.fill(e.ellipse(t,n,o,s),`chrome`,{col:i,h:a,stroke:[`#9aa0a7`,.003]}),e.fill(e.ellipse(t,n,o*.78,s*.72),`chrome`,{col:`#3d4047`,h:-1}),e.fill(e.ellipse(t,n,o*.74,s*.68),`chrome`,{col:i,h:4}),e.fill(e.ellipse(t,n,o*.38,s*.9),`chrome`,{col:`#3d4047`}),e.fill(e.ellipse(t,n,o*.3,s*.8),`chrome`,{col:i}),e.fill(e.ellipse(t,n+s*.05,o*.64,s*.2),`chrome`,{col:`#3d4047`})},Tm=(e,t,n,r,i=!0)=>{e.fill(e.ellipse(t,n,r*1.18,r*1.18),`black`,{h:-6}),e.fill(e.ellipse(t,n,r,r),`chrome`,{col:`#b9bfc6`,h:1}),e.fill(e.ellipse(t,n,r*.74,r*.74),`lens`,{col:`#cfd8e0`,grad:[`#f4f8fb`,`#aeb9c3`],h:4,emit:i?`#fff3dd`:null}),e.fill(e.ellipse(t-r*.2,n+r*.2,r*.2,r*.2),`lens`,{col:`#ffffff`})},Em=(e,t,n,r,i=`#c9a24a`,a=`#d9dde2`)=>{let o=r*.36,s=[[-1,.42],[-.4,.42],[-.27,.6],[.27,.6],[.4,.42],[1,.42],[.8,-.42],[.27,-.42],[.14,-.6],[-.14,-.6],[-.27,-.42],[-.8,-.42]].map(e=>[t+e[0]*r/2,n+e[1]*o]);e.fill(s,`chrome`,{col:a,h:7}),e.fill(s.map(e=>[t+(e[0]-t)*.82,n+(e[1]-n)*.7]),`chrome`,{col:i,grad:/^#(c9|d4)/.test(i)?[`#ecd27c`,`#9a7a2c`]:void 0,h:9,m:.85,r:.25})},Dm=(e,t,n,r,i=`#c4161c`)=>{e.text(`GMC`,t,n,r,{col:i,r:.25,m:.5,h:7,spacing:r*.04}),e.text(`GMC`,t,n,r*1,{col:`rgba(235,238,242,0.0)`,r:.2,m:1})},Om=(e,t,n,r,i,a=`corner`)=>{let o=[[t,r],[n-.04,r+0],[n,r+.03],[n,i-.03],[n-.04,i],[t,i]];e.fill(e.rect(t-.03,r-.1,n+.03,i+.03,.025),`chrome`,{h:5,sym:!0,grad:[`#f2f5f8`,`#9aa0a8`]}),e.fill(o,`black`,{h:-4,sym:!0}),e.fill(Sm(o,.9),`lens`,{grad:[`#f3f6f8`,`#b4bcc4`],h:9,sym:!0,emit:`#e8e2d2`}),a===`corner`&&e.fill([[n-.12,r+.01],[n-.03,r+.01],[n,r+.04],[n,i-.03],[n-.03,i-.01],[n-.12,i-.01]],`amber`,{h:10,sym:!0,emit:`#ff9a20`});let s=e.rect(t,r-.085,n-.02,r-.025,.02);e.fill(s,`black`,{h:-4,sym:!0}),e.fill(Sm(s,.9),`lens`,{grad:[`#e8ecef`,`#b0b8c0`],h:8,sym:!0,emit:`#e0d8c4`}),e.fill([[n-.14,r-.08],[n-.03,r-.08],[n-.03,r-.03],[n-.14,r-.03]],`amber`,{h:9,sym:!0,emit:`#ff9a20`})},km=(e,t,n,r=.05)=>{e.fill(e.ellipse(t,n,r*1.5,r*1.5),`black`,{h:-22,sym:!0}),e.fill(e.ellipse(t,n,r*1.05,r*1.05),`chrome`,{h:-16,sym:!0,col:`#a8aeb5`}),e.fill(e.ellipse(t,n,r*.85,r*.85),`lens`,{h:-20,sym:!0,emit:`#e6e0cf`,grad:[`#f0f3f5`,`#9aa4ae`]})},Am=(e,t,n,r=`#c0161d`)=>e.fill(e.rect(t-.03,n-.012,t+.03,n+.012,.01),`red`,{col:r,h:10,sym:!0}),jm=(e,t,n,r,i=`#1c3f94`)=>{let a=r/2,o=r*.37;e.fill(e.ellipse(t,n,a,o),`chrome`,{col:`#d6dae0`,h:9}),e.fill(e.ellipse(t,n,a*.88,o*.84),`chrome`,{col:i,h:5,r:.25,m:.7,grad:[i,`#0f2a6b`]}),e.text(`Ford`,t,n,r*.26,{col:`#eef1f6`,font:`Georgia, "Times New Roman", serif`,weight:`700`,italic:!0,r:.2,m:.9})},Mm=(e,t,n,r,i=`#8a9097`)=>{e.text(`FORD`,t,n-r*.03,r,{col:`#14151a`,spacing:r*.1,r:.5,m:.2,h:4}),e.text(`FORD`,t,n,r,{col:i,spacing:r*.1,r:.3,m:.85,h:12})},Nm=(e,t,n,r,i,a={})=>{let o=[[t,r+.02],[t+.02,i],[n-.03,i+.005],[n,i-.03],[n+.005,r+.01],[n-.04,r-.005],[t+.03,r]];e.fill(o,`black`,{h:-6,sym:!0}),e.fill(Sm(o,.9),`gloss`,{h:-10,sym:!0,emit:`#12151a`});for(let n=0;n<(a.proj||2);n++){let r=t+.11,o=i-.07-n*.075*(a.k||1);e.fill(e.rect(r-.026,o-.026,r+.026,o+.026,.006),`lens`,{h:-2,sym:!0,emit:`#eef4ff`,grad:[`#f4f8ff`,`#9bb0c8`]})}let s=[[t+.005,r+.03],[t+.005,i-.005],[n-.03,i-.005],[n-.006,i-.03],[n-.006,r+.02]];e.path(e.cx.C,s,!1);for(let t of[1,-1])e.path(e.cx.C,s.map(e=>[e[0]*t,e[1]]),!1),e.cx.C.strokeStyle=`#eef3f8`,e.cx.C.lineWidth=Math.max(2,.011*e.PX),e.cx.C.lineJoin=`round`,e.cx.C.stroke(),e.path(e.cx.E,s.map(e=>[e[0]*t,e[1]]),!1),e.cx.E.strokeStyle=`#ffffff`,e.cx.E.lineWidth=Math.max(2,.011*e.PX),e.cx.E.lineJoin=`round`,e.cx.E.stroke();e.fill([[n-.1,i-.004],[n-.03,i-.004],[n-.008,i-.03]],`amber`,{sym:!0,emit:`#ff9a20`})},Pm=(e,t,n=`honey`,r=.026,i=`#3a3d43`)=>{e.fill(t,`black`,{h:-22}),e.pattern(t,n,{pitch:r,bar:r*.2,col:i,h:-12,r:.45,m:.5})},Fm={tacoma1(e){e.bumper={y0:.52,y1:.7,out:.08},e.fill(e.rect(-.7,.4,.7,.52,.02),`black`,{h:-8}),e.fill(e.rect(-.78,.5,.78,.61,.03),`paint`,{}),e.fill(e.rect(-.82,.62,.82,.7,.025),`chrome`,{h:6}),e.fill(e.rect(-.12,.45,.12,.52,.01),`dark`,{h:-4}),e.fill([[-.46,.7],[.46,.7],[.5,.78],[.62,.84],[.88,.86],[.9,1],[.55,1.01],[-.55,1.01],[-.9,1],[-.88,.86],[-.62,.84],[-.5,.78]],`chrome`,{h:5}),e.fill(e.rect(-.42,.74,.42,.97,.03),`black`,{h:-18}),e.pattern(e.rect(-.42,.74,.42,.97),`vslat`,{pitch:.058,bar:.034,col:`#1c1d21`,h:-8}),e.pattern(e.rect(-.42,.74,.42,.97),`vslat`,{pitch:.058,bar:.006,col:`#7d838b`,r:.2,m:1,h:-6}),wm(e,0,.855,.17);let t=[[.55,.8],[.84,.82],[.93,.86],[.93,.99],[.55,.99]];e.fill(t,`black`,{h:-4,sym:!0}),e.fill(Sm(t,.9),`lens`,{grad:[`#eef2f5`,`#b6bec6`],h:8,sym:!0,emit:`#e8e2d2`}),e.fill([[.8,.83],[.92,.86],[.92,.97],[.8,.97]],`amber`,{h:9,sym:!0,emit:`#ff9a20`});for(let t of[-1,1])e.fill(e.ellipse(t*.66,.56,.06,.04),`lens`,{h:4,emit:`#e6e0cf`})},tacoma2(e){e.bumper={y0:.5,y1:.76,out:.08},e.fill(e.rect(-.62,.4,.62,.52,.02),`black`,{h:-8}),e.fill(e.rect(-.4,.5,.4,.6,.03),`black`,{h:-14}),e.pattern(e.rect(-.4,.5,.4,.6),`hslat`,{pitch:.03,bar:.012,col:`#25272b`,h:-4});for(let t of[-1,1])e.fill(e.ellipse(t*.62,.58,.075,.075),`black`,{h:-20}),e.fill(e.ellipse(t*.62,.58,.05,.05),`lens`,{h:-8,emit:`#e6e0cf`});e.fill(e.rect(-.66,.74,.66,.8,.02),`chrome`,{h:8}),e.fill([[-.46,.8],[.46,.8],[.5,.92],[.46,1],[-.46,1],[-.5,.92]],`chrome`,{h:4});let t=[[-.43,.82],[.43,.82],[.47,.92],[.43,.98],[-.43,.98],[-.47,.92]];e.fill(t,`black`,{h:-20}),e.pattern(t,`mesh`,{pitch:.026,bar:.006,col:`#2b2d32`,h:-10}),e.fill(e.rect(-.45,.895,.45,.925,.006),`chrome`,{h:-2}),wm(e,0,.91,.14);let n=[[.5,.84],[.66,.84],[.86,.9],[.94,.96],[.9,1.01],[.62,1],[.5,.98]];e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.9),`lens`,{grad:[`#f0f4f7`,`#b2bbc4`],h:9,sym:!0,emit:`#e8e2d2`}),e.fill(e.ellipse(.66,.92,.07,.055),`chrome`,{col:`#9aa0a8`,h:4,sym:!0}),e.fill([[.82,.9],[.93,.96],[.9,1],[.8,.98]],`amber`,{h:9,sym:!0,emit:`#ff9a20`})},tacoma3(e){e.bumper={y0:.5,y1:.77,out:.07},e.fill(e.rect(-.64,.4,.64,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.52,.3,.6,.02),`black`,{h:-12}),e.pattern(e.rect(-.3,.52,.3,.6),`hslat`,{pitch:.02,bar:.008,col:`#212327`,h:-3});for(let t of[-1,1])e.fill([[t*.5,.52],[t*.74,.52],[t*.78,.6],[t*.72,.66],[t*.5,.66]],`black`,{h:-22});for(let t of[-1,1])e.fill(e.ellipse(t*.62,.59,.042,.042),`lens`,{h:-12,emit:`#e6e0cf`,col:`#cfd6dc`}),e.fill(e.ellipse(t*.62,.59,.055,.055),`chrome`,{h:-10,stroke:[`#8a9097`,.004]}),e.fill(e.ellipse(t*.62,.59,.04,.04),`lens`,{h:-14,emit:`#e6e0cf`});let t=.4,n=[[-.4*.78,1.045],[t*.78,1.045],[t,.9],[t*.86,.74],[-.4*.86,.74],[-.4,.9]];e.fill(n,`chrome`,{h:7});let r=Sm(n,.93);e.fill(r,`black`,{h:-24}),e.pattern(r,`mesh`,{pitch:.03,bar:.0085,col:`#303338`,h:-14,r:.35,m:.5}),e.fill(e.rect(-.3,.88,.3,.92,.01),`black`,{h:-26}),wm(e,0,.895,.2);let i=[[.5,.945],[.56,1.03],[.82,1.04],[.95,.98],[.86,.9],[.52,.88]];e.fill(i,`black`,{h:-4,sym:!0}),e.fill(Sm(i,.9),`lens`,{grad:[`#f2f6f9`,`#aeb8c2`],h:10,sym:!0,emit:`#e8e2d2`});for(let t of[-1,1])Tm(e,t*.63,.96,.034),Tm(e,t*.73,.972,.026);e.fill([[.84,.92],[.94,.975],[.86,.99]],`amber`,{h:9,sym:!0,emit:`#ff9a20`}),e.fill([[.54,.915],[.8,.92],[.8,.927],[.54,.922]],`white`,{sym:!0,emit:`#ffffff`})},tacoma4(e){e.bumper={y0:.52,y1:.84,out:.07},e.fill(e.rect(-.66,.42,.66,.52,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.6-.1,.56,t*.6+.1,.74,.02),`black`,{h:-20}),e.pattern(e.rect(t*.6-.1,.56,t*.6+.1,.74),`vslat`,{pitch:.022,bar:.008,col:`#222428`,h:-8}),e.fill(e.ellipse(t*.38,.62,.04,.04),`lens`,{h:-14,emit:`#e6e0cf`});let t=[[-.38,1.04],[.38,1.04],[.44,.96],[.33,.77],[-.33,.77],[-.44,.96]];e.fill(t,`gloss`,{h:6});let n=Sm(t,.9);e.fill(n,`black`,{h:-22}),e.pattern(n,`honey`,{pitch:.034,bar:.007,col:`#33363c`,h:-12}),e.fill(e.rect(-.3,.9,.3,.94,.006),`gloss`,{h:4}),wm(e,0,.92,.18,`#cfd2d6`);let r=[[.5,1],[.9,1.04],[.97,.99],[.9,.95],[.52,.965]];e.fill(r,`black`,{h:-4,sym:!0}),e.fill(Sm(r,.88),`lens`,{grad:[`#e6edf2`,`#a6b0ba`],h:8,sym:!0,emit:`#dfe8f0`}),e.fill([[.52,1.004],[.9,1.04],[.9,1.032],[.52,.997]],`white`,{sym:!0,emit:`#ffffff`}),e.fill([[.88,.99],[.95,.99],[.9,.955]],`amber`,{sym:!0,emit:`#ff9a20`})},tundra1(e){e.bumper={y0:.5,y1:.76,out:.09},e.fill(e.rect(-.7,.42,.7,.52,.02),`black`,{h:-8}),e.fill(e.rect(-.8,.54,.8,.74,.04),`chrome`,{h:10,grad:[`#f2f4f7`,`#9aa0a8`]}),e.fill(e.rect(-.14,.46,.14,.53,.01),`dark`,{h:-4});for(let t of[-1,1])e.fill(e.ellipse(t*.56,.585,.06,.05),`black`,{h:-16}),e.fill(e.ellipse(t*.56,.585,.04,.034),`lens`,{h:-8,emit:`#e6e0cf`});let t=e.rect(-.46,.78,.46,1,.03);e.fill(t,`chrome`,{h:5}),e.fill(e.rect(-.43,.8,.43,.98,.02),`black`,{h:-22});for(let t of[.85,.93])e.fill(e.rect(-.41,t-.026,.41,t+.026,.012),`chrome`,{h:2,grad:[`#f4f6f8`,`#8b9199`]});wm(e,-.3,.93,.15);let n=[[.5,.8],[.9,.8],[.99,.86],[.99,1],[.5,1]];e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.9),`lens`,{grad:[`#f0f4f7`,`#b2bbc4`],h:8,sym:!0,emit:`#e8e2d2`}),e.fill([[.86,.81],[.98,.86],[.98,.99],[.86,.99]],`amber`,{sym:!0,h:9,emit:`#ff9a20`}),e.fill(e.ellipse(.7,.9,.08,.06),`chrome`,{col:`#9aa0a8`,h:3,sym:!0})},tundra2(e){e.bumper={y0:.54,y1:.86,out:.09},e.fill(e.rect(-.72,.44,.72,.54,.02),`black`,{h:-8}),e.fill(e.rect(-.32,.56,.32,.66,.02),`black`,{h:-12}),e.pattern(e.rect(-.32,.56,.32,.66),`hslat`,{pitch:.022,bar:.009,col:`#23252a`,h:-3});for(let t of[-1,1])e.fill(e.rect(t*.62-.1,.58,t*.62+.1,.72,.03),`black`,{h:-22}),e.fill(e.rect(t*.62-.07,.61,t*.62+.07,.69,.02),`lens`,{h:-12,emit:`#e6e0cf`});let t=.46,n=[[-.46,1.07],[t,1.07],[t*1.04,.9],[t*.96,.8],[-.4416,.8],[-.46*1.04,.9]];e.fill(n,`chrome`,{h:8,grad:[`#f2f4f7`,`#9ba1a9`]});let r=Sm(n,.92);e.fill(r,`black`,{h:-26});for(let n of[.88,.96,1.03])e.fill(e.rect(-.46*.9,n-.022,t*.9,n+.022,.01),`chrome`,{h:-8,grad:[`#f4f6f8`,`#8b9199`]});e.pattern(r,`mesh`,{pitch:.04,bar:.006,col:`#34373d`,h:-16}),wm(e,0,.92,.17);let i=[[.56,.95],[.6,1.07],[.9,1.09],[1.02,1],[.98,.93],[.7,.9]];e.fill(i,`black`,{h:-4,sym:!0}),e.fill(Sm(i,.9),`lens`,{grad:[`#f2f6f9`,`#aeb8c2`],h:10,sym:!0,emit:`#e8e2d2`});for(let t of[-1,1])Tm(e,t*.72,1,.04);e.fill([[.9,.96],[1,1],[.94,1.04]],`amber`,{sym:!0,emit:`#ff9a20`})},tundra3(e){e.bumper={y0:.56,y1:.9,out:.09},e.fill(e.rect(-.74,.46,.74,.56,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.66-.1,.6,t*.66+.1,.76,.02),`black`,{h:-22});for(let t of[-1,1])e.pattern(e.rect(t*.66-.1,.6,t*.66+.1,.76),`vslat`,{pitch:.022,bar:.009,col:`#25272c`,h:-8});let t=.5,n=[[-.41,1.15],[t*.82,1.15],[t*1.02,1],[t*.98,.78],[-.49,.78],[-.51,1]];e.fill(n,`chrome`,{h:9,grad:[`#e8ebee`,`#8f959d`]});let r=Sm(n,.91);e.fill(r,`black`,{h:-26}),e.pattern(r,`honey`,{pitch:.05,bar:.0085,col:`#3a3d43`,h:-16}),e.fill(e.rect(-.4,1.04,.4,1.09,.008),`chrome`,{h:-6,col:`#7f858d`}),wm(e,0,1.065,.15);let i=[[.58,1.1],[.98,1.17],[1.03,1.12],[.96,1.07],[.6,1.04]];e.fill(i,`black`,{h:-4,sym:!0}),e.fill(Sm(i,.9),`lens`,{grad:[`#dfe7ee`,`#a0aab4`],h:8,sym:!0,emit:`#dfe8f0`}),e.fill([[.6,1.098],[.98,1.165],[.98,1.155],[.6,1.088]],`white`,{sym:!0,emit:`#ffffff`});for(let t of[-1,1])e.fill(e.rect(t*.68-.012,.9,t*.68+.012,1),`amber`,{emit:`#ff9a20`}),e.pattern(e.rect(t*.74-.1,.84,t*.74+.1,.98,.02),`egg`,{pitch:.02,bar:.006,col:`#22242a`,h:-6})},silverado99(e){e.bumper={y0:.5,y1:.7,out:.1},e.fill(e.rect(-.82,.4,.82,.5,.02),`grey`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.4-.12,.43,t*.4+.12,.49,.015),`black`,{h:-18});e.fill(e.rect(-.9,.56,.9,.7,.04),`chrome`,{h:9,grad:[`#e9ecef`,`#9aa0a8`]}),e.fill(e.rect(-.18,.5,.18,.57,.01),`dark`,{h:-4}),e.fill(e.rect(-.46,.72,.46,1.07,.04),`paint`,{h:3});for(let[t,n]of[[.94,1.045],[.745,.85]]){let r=e.rect(-.43,t,.43,n,.02);e.fill(r,`black`,{h:-20}),e.pattern(r,`hslat`,{pitch:.016,bar:.0075,col:`#2e3035`,h:-10,r:.5,m:.4})}e.fill(e.rect(-.46,.86,.46,.93,.01),`chrome`,{h:6,grad:[`#e9ecef`,`#aab0b7`]}),Em(e,0,.895,.2);for(let[t,n,r]of[[.935,1.06,0],[.8,.905,1]]){let i=e.rect(.5,t,.94,n,.05);e.fill(i,`black`,{h:-4,sym:!0}),e.fill(Sm(i,.92),`lens`,{grad:[`#f2f5f7`,`#b2bac2`],h:8,sym:!0,emit:`#e8e2d2`}),r&&e.fill(e.rect(.84,t+.012,.93,n-.012,.03),`amber`,{h:9,sym:!0,emit:`#ff9a20`})}},silverado03(e){let t=e=>(3.6+e)/2149,n=(e,n,r)=>[(642-e)*t(r),.92+(480-n)*t(r)],r=(e,t)=>e.map(e=>n(e[0],e[1],t)),i=.4,a=.08;e.profile=[[.22,.05],[.294,.09],[.4,.16],[.468,.26],[.57,.28],[.61,.2],[.7,.17],[.725,.13],[.765,0]];let o=[`#efe2c2`,`#b08c52`];e.fill(r([[-100,728],[642,728],[642,880],[-100,880]],a),`grey`,{col:`#4a4d4f`,r:.7,m:.1,h:0,sym:!0});for(let[t,n]of[[190,301],[340,454]]){let i=r([[t+8,768],[n-8,768],[n,780],[n,826],[n-10,834],[t+10,834],[t,826],[t,780]],a);e.fill(i,`grey`,{col:`#2c2e30`,r:.8,m:0,h:-12,sym:!0})}e.fill(r([[-100,690],[642,690],[642,758],[-100,758]],0),`dark`,{col:`#7c8186`,r:.45,m:.65,h:2,sym:!0,grad:[`#8a9096`,`#6a6f74`]}),e.fill(r([[-100,548],[118,552],[160,561],[358,577],[388,594],[430,600],[642,600],[642,692],[-100,692]],.18),`black`,{col:`#35302e`,r:.86,m:0,h:3,sym:!0,grad:[`#3e3a38`,`#2c2827`]});for(let t of[1,-1]){let t=r([[421,678],[610,678],[610,708],[434,708]],0);e.fill(t,`black`,{col:`#08090a`,h:-18,sym:!0})}e.fill(r([[-60,688],[421,688],[433,704],[600,704],[612,688],[642,688],[642,694],[612,694],[600,710],[433,710],[421,694],[-60,694]],0),`chrome`,{h:6,sym:!0}),e.fill(e.rect(-.152,.367,.152,.518,.006),`white`,{col:`#f1f2f0`,r:.5,m:0,h:8});for(let t of[-.12,.12])e.fill(e.ellipse(t,.387,.007,.007,10),`chrome`,{col:`#9a9fa5`});e.fill(e.rect(-.07,.527,.07,.56,.005),`chrome`,{h:6});let s=r([[160,388],[178,383],[200,382],[322,402],[334,416],[334,455],[324,467],[170,467],[160,458]],i);e.fill(s,`black`,{col:`#16171a`,h:-3,sym:!0});let c=r([[168,392],[199,387],[316,407],[326,418],[326,452],[318,461],[174,461],[168,452]],i);e.fill(c,`lens`,{grad:[`#cdc2a3`,`#8c836f`],h:9,sym:!0,emit:`#ece4cf`,r:.08}),e.pattern(r([[172,392],[262,394],[262,458],[172,458]],i),`vslat`,{pitch:.0135,bar:.0034,col:`rgba(60,58,50,0.8)`,h:4,sym:!0,r:.3,m:.3});let l=n(298,424,i);e.fill(e.ellipse(l[0],l[1],.034,.034),`chrome`,{col:`#a7a493`,h:-8,sym:!0}),e.fill(e.ellipse(l[0],l[1],.022,.022),`lens`,{col:`#efe6c8`,h:-4,sym:!0,emit:`#fff2d2`}),e.fill(r([[154,468],[642,466],[642,507],[158,507]],i).map(e=>e),`chrome`,{h:9,sym:!0,grad:o}),e.fill(r([[160,471],[642,470],[642,474],[160,476]],i),`chrome`,{col:`#fbf1d8`,sym:!0,h:10});let u=r([[154,501],[300,505],[345,509],[358,545],[358,573],[160,573],[154,565]],i);e.fill(u,`black`,{col:`#16171a`,h:-3,sym:!0}),e.fill(r([[161,506],[298,510],[340,513],[351,547],[351,567],[164,567],[161,561]],i),`lens`,{grad:[`#e9d3a6`,`#c49a5a`],h:9,sym:!0,emit:`#f3b25a`,r:.12});let d=n(220,528,i),f=n(307,528,i);e.fill(e.ellipse(d[0],d[1],.06,.045),`amber`,{col:`#f0a24c`,grad:[`#f8c27a`,`#d98a2e`],h:-6,sym:!0,emit:`#ff9a20`}),e.fill(e.ellipse(f[0],f[1],.056,.042),`lens`,{col:`#efdcae`,grad:[`#f5e8c4`,`#d9b977`],h:-6,sym:!0,emit:`#f7d58a`}),e.fill(r([[154,501],[172,502],[172,572],[158,572],[154,565]],i),`amber`,{col:`#f08a1c`,h:11,sym:!0,emit:`#ff9a20`});let p=r([[367,399],[917,399],[909,471],[375,471]],i).map(e=>e),m=r([[388,513],[896,513],[884,567],[400,567]],i);e.fill(Cm(p,1.015),`black`,{col:`#0a0b0c`,h:-16}),e.fill(Cm(p,.965),`black`,{col:`#16171a`,h:-28}),e.pattern(Cm(p,.965),`mesh`,{pitch:.027,bar:.0042,col:`#8d9298`,h:-22,r:.3,m:.9}),e.fill(Cm(m,1.015),`black`,{col:`#0a0b0c`,h:-16}),e.fill(Cm(m,.96),`black`,{col:`#16171a`,h:-28}),e.pattern(Cm(m,.96),`mesh`,{pitch:.027,bar:.0042,col:`#8d9298`,h:-22,r:.3,m:.9}),Em(e,0,.909,.246,`#d4b25c`,`#e6d6a6`)},silverado07(e){e.bumper={y0:.54,y1:.76,out:.1},e.fill(e.rect(-.86,.42,.86,.54,.02),`black`,{h:-8});for(let t of[-1,1])km(e,t*.7,.485,.04);e.fill(e.rect(-.94,.56,.94,.74,.04),`chrome`,{h:10,grad:[`#f0f3f6`,`#8f959d`]}),e.fill(e.rect(-.94,.52,.94,.58,.03),`black`,{h:2}),e.fill(e.rect(-.2,.46,.2,.54,.01),`dark`,{h:-4});let t=e.rect(-.62,.78,.62,1.1,.05);e.fill(t,`chrome`,{h:9,grad:[`#f2f5f8`,`#979da5`]});for(let[t,n]of[[.97,1.075],[.805,.91]]){let r=e.rect(-.59,t,.59,n,.03);e.fill(r,`black`,{h:-24}),e.pattern(r,`honey`,{pitch:.026,bar:.0055,col:`#41444a`,h:-12})}e.fill(e.rect(-.6,.915,.6,.965,.01),`chrome`,{h:6,grad:[`#f2f5f8`,`#979da5`]}),Em(e,0,.94,.26);let n=e.rect(.64,.84,1,1.08,.05);e.fill(n,`black`,{h:-4,sym:!0,stroke:[`#d5d9de`,.005],strokeMat:`chrome`});for(let[t,n]of[[.97,1.065],[.85,.95]]){let r=e.rect(.66,t,.97,n,.035);e.fill(r,`lens`,{grad:[`#f2f5f7`,`#aab4be`],h:9,sym:!0,emit:`#e8e2d2`})}for(let t of[-1,1])Tm(e,t*.76,1.018,.032),Tm(e,t*.76,.9,.03),e.fill(e.rect(t*.92-.02,.85,t*.92+.03,1.06,.01),`amber`,{h:10,emit:`#ff9a20`})},silverado14(e){e.bumper={y0:.56,y1:.8,out:.1},e.fill(e.rect(-.86,.42,.86,.56,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.7-.09,.45,t*.7+.09,.55,.02),`black`,{h:-20}),e.fill(e.rect(t*.7-.06,.47,t*.7+.06,.53,.015),`lens`,{h:-12,emit:`#e6e0cf`}),Am(e,t*.45,.5);e.fill(e.rect(-.96,.58,.96,.8,.05),`chrome`,{h:11,grad:[`#f2f5f8`,`#8f959d`]}),e.fill(e.rect(-.2,.46,.2,.56,.01),`dark`,{h:-4}),e.fill(e.rect(-.7,.82,.7,1.14,.04),`paint`,{h:3});for(let[t,n]of[[1,1.1],[.84,.95]]){let r=e.rect(-.66,t,.66,n,.02);e.fill(r,`black`,{h:-22,stroke:[`#cfd4da`,.006],strokeMat:`chrome`}),e.pattern(r,`hslat`,{pitch:.021,bar:.0085,col:`#26282d`,h:-10,r:.4,m:.5})}e.fill(e.rect(-.7,.955,.7,1,.01),`chrome`,{h:9,grad:[`#f3f6f9`,`#8a9099`]}),Em(e,0,.978,.27);for(let t of[-1,1]){let n=[[.76,.86],[1,.9],[1.02,1.1],[.99,1.14],[.76,1.1]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.9),`lens`,{grad:[`#f2f5f7`,`#a8b2bc`],h:9,sym:!0,emit:`#e8e2d2`}))}for(let t of[-1,1])Tm(e,t*.86,1.04,.044),e.fill([[t*.8,.9],[t*.98,.93],[t*.98,.96],[t*.8,.935]],`amber`,{h:9,emit:`#ff9a20`}),e.fill([[t*.8,.985],[t*.99,1],[t*.99,1.012],[t*.8,.997]],`white`,{emit:`#ffffff`})},silverado19(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.84,.4,.84,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])Am(e,t*.5,.52),e.fill(e.rect(t*.72-.08,.52,t*.72+.08,.58,.015),`black`,{h:-22}),e.fill(e.rect(t*.72-.05,.53,t*.72+.05,.575,.01),`lens`,{h:-14,emit:`#e6e0cf`});e.fill(e.rect(-.8,.6,.8,.9,.05),`gloss`,{h:4});for(let[t,n]of[[.95,1.1],[.65,.8]]){let r=e.rect(-.72,t,.72,n,.03);e.fill(r,`black`,{h:-20}),e.pattern(r,`hslat`,{pitch:.036,bar:.012,col:`#14151a`,h:-6,r:.25,m:.6}),e.pattern(r,`hslat`,{pitch:.036,bar:.003,col:`#9aa0a8`,h:-4,r:.15,m:1})}e.fill(e.rect(-.76,.84,.76,.96,.03),`gloss`,{h:8}),Em(e,0,.9,.3,`#c9a24a`,`#111214`);for(let t of[-1,1]){let n=[[.74,1.08],[.98,1.1],[1.02,1.04],[.98,1],[.74,1]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.88),`gloss`,{h:4,sym:!0}))}for(let t of[-1,1]){e.fill([[t*.76,1.03],[t*.76,1.085],[t*.97,1.09],[t*.995,1.05],[t*.995,1.03]],`lens`,{grad:[`#e8eef3`,`#9faab5`],h:8,emit:`#e6eef6`});for(let n=0;n<4;n++)Tm(e,t*(.8+n*.045),1.05+n*.004,.016);e.fill([[t*.95,1],[t*1,1.04],[t*.98,1.06],[t*.94,1.03]],`amber`,{h:8,emit:`#ff9a20`}),e.fill(e.rect(t*.74-.01,.9,t*.74+.012,1),`white`,{h:6,emit:`#ffffff`}),e.fill(e.rect(t*.8,.88,t*.96,.92,.01),`black`,{h:-18})}},silverado22(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.86,.4,.86,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])Am(e,t*.52,.53),e.fill(e.rect(t*.72-.08,.54,t*.72+.08,.6,.015),`black`,{h:-22}),e.fill(e.rect(t*.72-.05,.55,t*.72+.05,.595,.01),`lens`,{h:-14,emit:`#e6e0cf`});e.fill(e.rect(-.8,.62,.8,1.13,.05),`gloss`,{h:4});for(let[t,n]of[[.98,1.1],[.66,.84]]){let r=e.rect(-.74,t,.74,n,.03);e.fill(r,`black`,{h:-22}),e.pattern(r,`hslat`,{pitch:.04,bar:.016,col:`#15161b`,h:-8,r:.3,m:.5}),e.pattern(r,`hslat`,{pitch:.04,bar:.004,col:`#8d939b`,h:-5,r:.15,m:1})}e.fill(e.rect(-.76,.86,.76,.98,.03),`gloss`,{h:9}),Em(e,0,.92,.3,`#c9a24a`,`#111214`);for(let t of[-1,1]){e.fill([[t*.76,.99],[t*.76,1.05],[t*.97,1.06],[t*1,1.02],[t*.98,.99]],`lens`,{grad:[`#e8eef3`,`#9faab5`],h:8,emit:`#e6eef6`}),e.fill(e.rect(t*.79,.9,t*.82,1.04),`white`,{h:6,emit:`#ffffff`}),e.fill([[t*.8,1.03],[t*.96,1.05],[t*.96,1.058],[t*.8,1.04]],`amber`,{emit:`#ff9a20`});for(let n=0;n<3;n++)Tm(e,t*(.84+n*.05),1.012,.016)}},sierra99(e){e.bumper={y0:.52,y1:.72,out:.1},e.fill(e.rect(-.82,.4,.82,.52,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.4-.12,.44,t*.4+.12,.5,.015),`black`,{h:-18});e.fill(e.rect(-.9,.55,.9,.72,.04),`chrome`,{h:10,grad:[`#f0f3f6`,`#8f959d`]}),e.fill(e.rect(-.18,.49,.18,.56,.01),`dark`,{h:-4});let t=[[-.5,1.06],[.5,1.06],[.52,.95],[.5,.76],[-.5,.76],[-.52,.95]];e.fill(t,`chrome`,{h:8,grad:[`#f2f5f8`,`#979da5`]});let n=Sm(t,.9);e.fill(n,`black`,{h:-22}),e.pattern(n,`egg`,{pitch:.028,bar:.006,col:`#3c3f45`,h:-12}),e.fill(e.rect(-.46,.89,.46,.93,.01),`chrome`,{h:-2}),e.text(`GMC`,0,.91,.04,{col:`#c4161c`,h:6}),Om(e,.56,.93,.93,1.06,`corner`)},sierra03(e){e.bumper={y0:.52,y1:.74,out:.1},e.fill(e.rect(-.82,.4,.82,.52,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.34-.12,.43,t*.34+.12,.5,.015),`black`,{h:-18}),km(e,t*.66,.475,.04);e.fill(e.rect(-.94,.54,.94,.74,.04),`chrome`,{h:11,grad:[`#f2f5f8`,`#858b93`]}),e.fill(e.rect(-.2,.47,.2,.55,.01),`dark`,{h:-4});let t=[[-.52,1.1],[.52,1.1],[.55,.95],[.52,.78],[-.52,.78],[-.55,.95]];e.fill(t,`chrome`,{h:10,grad:[`#f3f6f9`,`#8d939b`]});let n=Sm(t,.9);e.fill(n,`black`,{h:-26});for(let t of[1.02,.94,.86])e.fill(e.rect(-.46,t-.034,.46,t+.034,.012),`gloss`,{h:-10});e.fill(e.rect(-.5,.925,.5,.955,.008),`chrome`,{h:-6,col:`#8a9097`}),Dm(e,0,.94,.07),Om(e,.58,.97,.97,1.09,`corner`)},sierra07(e){e.bumper={y0:.54,y1:.78,out:.1},e.fill(e.rect(-.86,.42,.86,.54,.02),`black`,{h:-8});for(let t of[-1,1])km(e,t*.68,.485,.04);e.fill(e.rect(-.94,.58,.94,.78,.05),`paint`,{h:3}),e.fill(e.rect(-.9,.7,.9,.74,.01),`chrome`,{h:8}),e.fill(e.rect(-.2,.47,.2,.56,.01),`dark`,{h:-4}),e.fill(e.rect(-.6,.78,.6,1.12,.04),`chrome`,{h:9,grad:[`#f0f3f6`,`#8f959d`]}),e.fill(e.rect(-.55,.81,.55,1.09,.03),`black`,{h:-24});for(let t of[1.05,.99,.93,.87,.835])e.fill(e.rect(-.53,t-.022,.53,t+.022,.008),`gloss`,{h:-10});Dm(e,0,.93,.065);let t=e.rect(.64,.84,1,1.1,.05);e.fill(t,`black`,{h:-4,sym:!0,stroke:[`#d5d9de`,.005],strokeMat:`chrome`});for(let[t,n]of[[.98,1.075],[.86,.96]])e.fill(e.rect(.66,t,.97,n,.035),`lens`,{grad:[`#f2f5f7`,`#aab4be`],h:9,sym:!0,emit:`#e8e2d2`});for(let t of[-1,1])Tm(e,t*.76,1.03,.03),e.fill(e.rect(t*.92-.02,.86,t*.92+.03,1.07,.01),`amber`,{h:10,emit:`#ff9a20`})},sierra14(e){e.bumper={y0:.56,y1:.82,out:.1},e.fill(e.rect(-.86,.42,.86,.56,.02),`black`,{h:-8});for(let t of[-1,1])e.fill(e.rect(t*.7-.09,.45,t*.7+.09,.55,.02),`black`,{h:-20}),e.fill(e.rect(t*.7-.06,.47,t*.7+.06,.53,.015),`lens`,{h:-12,emit:`#e6e0cf`});e.fill(e.rect(-.96,.58,.96,.82,.05),`chrome`,{h:11,grad:[`#f2f5f8`,`#8f959d`]}),e.fill(e.rect(-.2,.46,.2,.56,.01),`dark`,{h:-4}),e.fill(e.rect(-.7,.84,.7,1.16,.03),`chrome`,{h:9,grad:[`#f2f5f8`,`#8f959d`]}),e.fill(e.rect(-.65,.87,.65,1.13,.02),`black`,{h:-24});for(let t of[1.06,.99,.92])e.fill(e.rect(-.62,t-.03,.62,t+.03,.01),`gloss`,{h:-10});Dm(e,0,.99,.085);for(let t of[-1,1]){let n=[[t*.74,.9],[t*1,.92],[t*1.02,1.14],[t*.74,1.12]];e.fill(n,`black`,{h:-4}),Tm(e,t*.84,1.05,.05),e.fill([[t*.92,.96],[t*1,.97],[t*1,1.1],[t*.92,1.09]],`amber`,{h:8,emit:`#ff9a20`}),e.fill(e.rect(t*.76,.93,t*.98,.96),`lens`,{emit:`#e8e2d2`,h:6})}},sierra19(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.84,.4,.84,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])Am(e,t*.5,.52),e.fill(e.rect(t*.72-.08,.53,t*.72+.08,.7,.02),`black`,{h:-22}),e.fill(e.rect(t*.72-.05,.56,t*.72+.05,.67,.015),`lens`,{h:-14,emit:`#e6e0cf`});let t=[[-.5,1.15],[.5,1.15],[.6,.98],[.56,.74],[-.56,.74],[-.6,.98]];e.fill(t,`chrome`,{h:9,col:`#4a4d53`,r:.3,m:.9});let n=Sm(t,.9);e.fill(n,`black`,{h:-24});for(let t of[1.08,.98,.88,.8])e.fill(e.rect(-.54,t-.026,.54,t+.026,.01),`dark`,{h:-8});Dm(e,0,.98,.1);for(let t of[-1,1]){let n=[[t*.66,1],[t*1,1.1],[t*1.02,1.03],[t*.98,.99],[t*.66,.97]];e.fill(n,`black`,{h:-4}),e.fill(Sm(n,.86),`lens`,{grad:[`#e8eef3`,`#9faab5`],h:8,emit:`#e6eef6`}),e.fill([[t*.68,1],[t*1,1.1],[t*1,1.085],[t*.68,.99]],`white`,{emit:`#ffffff`,h:6}),e.fill([[t*.92,1.07],[t*1,1.1],[t*1.01,1.06]],`amber`,{emit:`#ff9a20`}),Tm(e,t*.8,1.025,.028),Tm(e,t*.9,1.05,.024)}},sierra24(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.84,.4,.84,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])Am(e,t*.52,.53),e.fill(e.rect(t*.74-.08,.54,t*.74+.08,.62,.015),`black`,{h:-22}),e.fill(e.rect(t*.74-.05,.55,t*.74+.05,.605,.01),`lens`,{h:-14,emit:`#e6e0cf`});let t=e.rect(-.62,.64,.62,1.2,.04);e.fill(t,`gloss`,{h:8}),e.fill(e.rect(-.57,.68,.57,1.16,.03),`black`,{h:-26});for(let t of[1.1,1,.9,.8,.72])e.fill(e.rect(-.55,t-.03,.55,t+.03,.01),`dark`,{h:-10});Dm(e,0,1,.11);for(let t of[-1,1]){let n=[[t*.7,.88],[t*.98,.9],[t*1,1.14],[t*.7,1.12]];e.fill(n,`black`,{h:-4}),e.fill(Sm(n,.88),`lens`,{grad:[`#e8eef3`,`#9faab5`],h:8,emit:`#e6eef6`}),e.fill(e.rect(t*.93,.9,t*.965,1.12),`white`,{emit:`#ffffff`,h:6}),e.fill([[t*.76,1.08],[t*.96,1.1],[t*.96,1.115],[t*.76,1.098]],`amber`,{emit:`#ff9a20`}),Tm(e,t*.82,1,.03),Tm(e,t*.82,.93,.024)}},ranger1(e){e.bumper={y0:.47,y1:.64,out:.08},e.fill(e.rect(-.74,.38,.74,.47,.02),`black`,{h:-8}),e.fill(e.rect(-.16,.4,.16,.46,.01),`dark`,{h:-4}),e.fill(e.rect(-.82,.5,.82,.64,.025),`chrome`,{h:10,grad:[`#f2f5f8`,`#8a9099`]}),e.fill(e.rect(-.74,.65,.74,.7,.01),`black`,{h:-2});let t=e.rect(-.4,.72,.4,.93,.02);e.fill(e.rect(-.43,.7,.43,.95,.025),`chrome`,{h:5}),e.fill(t,`grey`,{h:-18}),e.pattern(t,`egg`,{pitch:.05,bar:.012,col:`#2a2c31`,h:-8}),e.fill(e.rect(-.4,.815,.4,.84,.004),`chrome`,{h:-2}),jm(e,-.16,.827,.1);for(let t of[-1,1]){let n=e.rect(t*.46,.74,t*.9,.95,.025);e.fill(n,`black`,{h:-4}),e.fill(Sm(n,.88),`lens`,{grad:[`#eef2f5`,`#b4bcc4`],h:8,emit:`#e8e2d2`}),e.fill(e.rect(t*.8-.01,.75,t*.89,.8,.008),`amber`,{h:9,emit:`#ff9a20`})}},ranger2(e){e.bumper={y0:.47,y1:.66,out:.09},e.fill(e.rect(-.76,.38,.76,.47,.02),`black`,{h:-8}),e.fill(e.rect(-.16,.4,.16,.46,.01),`dark`,{h:-4}),e.fill(e.rect(-.86,.5,.86,.66,.04),`chrome`,{h:10,grad:[`#f2f5f8`,`#8a9099`]}),e.fill(e.rect(-.48,.84,.48,.9,.02),`chrome`,{h:8,grad:[`#f2f5f8`,`#8a9099`]});let t=e.rect(-.42,.7,.42,.85,.03);e.fill(t,`grey`,{h:-18}),e.pattern(t,`egg`,{pitch:.075,bar:.016,col:`#2c2e33`,h:-8}),jm(e,0,.775,.1);for(let t of[-1,1]){let n=[[t*.5,.74],[t*.78,.76],[t*.96,.82],[t*.97,.92],[t*.5,.95]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.9),`lens`,{grad:[`#eef2f5`,`#b2bac2`],h:9,sym:!0,emit:`#e8e2d2`}),e.fill([[.84,.77],[.95,.83],[.96,.9],[.84,.88]],`amber`,{h:10,sym:!0,emit:`#ff9a20`}))}},ranger3(e){e.bumper={y0:.5,y1:.72,out:.09},e.fill(e.rect(-.76,.38,.76,.5,.02),`black`,{h:-8}),e.fill(e.rect(-.3,.4,.3,.49,.015),`black`,{h:-14}),e.pattern(e.rect(-.3,.4,.3,.49),`hslat`,{pitch:.024,bar:.01,col:`#26282c`,h:-4});for(let t of[-1,1])km(e,t*.58,.575,.04);let t=e.rect(-.44,.74,.44,1,.04);e.fill(t,`paint`,{h:5}),e.fill(e.rect(-.44+.03,.77,.41000000000000003,.97,.03),`black`,{h:-22});for(let t of[.94,.865,.795])e.fill(e.rect(-.44+.1,t-.03,.33999999999999997,t+.03,.012),t>.9?`chrome`:`dark`,{h:-6,grad:t>.9?[`#f2f5f8`,`#8a9099`]:void 0});for(let t of[-1,1])e.pattern(e.rect(t*.37-.04,.775,t*.37+.04,.965),`vslat`,{pitch:.018,bar:.008,col:`#3a3d43`,h:-10});jm(e,0,.865,.13);for(let t of[-1,1]){let n=[[t*.5,.79],[t*.88,.8],[t*.97,.88],[t*.95,1],[t*.5,.98]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0,stroke:[`#bfc4ca`,.004],strokeMat:`chrome`}),e.fill(Sm(n,.9),`lens`,{grad:[`#f2f5f7`,`#aab4be`],h:9,sym:!0,emit:`#e8e2d2`}),e.fill([[.5,.8],[.62,.8],[.62,.86],[.5,.86]],`amber`,{h:10,sym:!0,emit:`#ff9a20`}))}},ranger4(e){e.bumper={y0:.52,y1:.8,out:.08},e.fill(e.rect(-.8,.4,.8,.52,.02),`black`,{h:-8}),e.fill(e.rect(-.34,.54,.34,.62,.015),`black`,{h:-14}),e.pattern(e.rect(-.34,.54,.34,.62),`hslat`,{pitch:.022,bar:.009,col:`#23252a`,h:-5});for(let t of[-1,1])e.fill(e.rect(t*.7-.1,.55,t*.7+.1,.7,.025),`black`,{h:-22}),e.fill(e.rect(t*.7-.06,.58,t*.7+.06,.66,.02),`lens`,{h:-12,emit:`#e6e0cf`});e.fill(e.rect(-.8,.7,.8,.8,.02),`black`,{h:4});let t=e.rect(-.56,.82,.56,1.1,.06);e.fill(t,`chrome`,{h:8,grad:[`#f0f3f6`,`#8f959d`]});let n=e.rect(-.53,.845,.53,1.085,.05);e.fill(n,`black`,{h:-24}),e.pattern(n,`honey`,{pitch:.028,bar:.0055,col:`#3f4248`,h:-12});for(let t of[-1,1])e.pattern(e.rect(t*.47-.05,.86,t*.47+.05,1.07),`vslat`,{pitch:.016,bar:.009,col:`#202226`,h:-14});jm(e,0,.965,.14);for(let t of[-1,1]){let n=[[t*.6,1],[t*.96,1.08],[t*.99,1.04],[t*.94,.99],[t*.62,.95]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.88),`lens`,{grad:[`#e6edf2`,`#a2acb6`],h:8,sym:!0,emit:`#dfe8f0`}),Tm(e,.74,1.01,.03),e.fill([[.9,1],[.97,1.04],[.95,1]],`amber`,{sym:!0,emit:`#ff9a20`}))}for(let t of[-1,1])Tm(e,t*.74,1.01,.03)},ranger5(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.84,.4,.84,.5,.02),`silver`,{h:6,grad:[`#c9ced4`,`#7e848c`]});for(let t of[-1,1])e.fill(e.rect(t*.7-.1,.56,t*.7+.1,.7,.025),`black`,{h:-22}),e.fill(e.rect(t*.7-.05,.6,t*.7+.05,.66,.015),`lens`,{h:-14,emit:`#e6e0cf`});e.fill(e.rect(-.8,.5,.8,.86,.04),`gloss`,{h:3}),e.fill(e.rect(-.36,.55,.36,.63,.01),`black`,{h:-14}),e.pattern(e.rect(-.36,.55,.36,.63),`hslat`,{pitch:.02,bar:.008,col:`#202226`,h:-4});let t=e.rect(-.66,1,.66,1.2,.05),n=e.rect(-.66,.74,.66,.96,.05);Pm(e,t,`egg`,.034,`#3a3d43`),Pm(e,n,`egg`,.034,`#3a3d43`),e.fill(e.rect(-.92,.96,.92,1,.012),`gloss`,{h:8}),jm(e,0,.98,.16),Nm(e,.68,.98,1,1.15,{proj:2})},ranger5r(e){e.bumper={y0:.5,y1:.86,out:.09},e.fill(e.rect(-.86,.4,.86,.5,.02),`silver`,{h:6,grad:[`#c9ced4`,`#7e848c`]}),Am(e,.55,.45);for(let t of[-1,1])e.fill([[t*.55,.52],[t*.96,.52],[t*.96,.72],[t*.6,.76]],`black`,{h:-24}),e.pattern([[t*.55,.52],[t*.96,.52],[t*.96,.72],[t*.6,.76]],`honey`,{pitch:.032,bar:.007,col:`#33363c`,h:-12}),e.fill(e.rect(t*.4-.05,.6,t*.4+.05,.66,.015),`lens`,{h:-14,emit:`#e6e0cf`});e.fill(e.rect(-.82,.5,.82,.86,.04),`gloss`,{h:3}),e.fill([[-.7,1.2],[.7,1.2],[.78,1.1],[.78,.76],[-.78,.76],[-.78,1.1]],`gloss`,{h:6}),Pm(e,e.rect(-.7,1,.7,1.17,.04),`honey`,.03),Pm(e,e.rect(-.7,.79,.7,.93,.04),`honey`,.03),e.fill(e.rect(-.98,.93,.98,1.02,.02),`gloss`,{h:10}),Mm(e,0,.975,.072,`#979ca4`),Nm(e,.68,.98,.98,1.16,{proj:2})},raptor1(e){e.bumper={y0:.5,y1:.86,out:.1},e.fill(e.rect(-.88,.4,.88,.5,.02),`silver`,{h:6,grad:[`#cfd3d8`,`#80868e`]}),Am(e,.52,.45),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])e.fill(e.rect(t*.7-.12,.55,t*.7+.12,.72,.02),`black`,{h:-24}),e.pattern(e.rect(t*.7-.12,.55,t*.7+.12,.72),`egg`,{pitch:.03,bar:.009,col:`#2e3035`,h:-10}),e.fill(e.rect(t*.4-.07,.58,t*.4+.07,.66,.015),`lens`,{h:-16,emit:`#e6e0cf`});e.fill(e.rect(-.9,.5,.9,.88,.04),`paint`,{h:3}),e.fill(e.rect(-.8,.5,.8,.8,.04),`black`,{h:0}),e.fill(e.rect(-.68,.84,.68,1.26,.03),`black`,{h:4,stroke:[`#2a2c31`,.01]}),Pm(e,e.rect(-.64,1.07,.64,1.23,.015),`egg`,.036),Pm(e,e.rect(-.64,.87,.64,1,.015),`egg`,.036),e.fill(e.rect(-.66,.99,.66,1.08,.01),`gloss`,{h:8}),Mm(e,0,1.035,.07,`#7a8088`);for(let t=-1;t<=1;t++)e.fill(e.rect(t*.12-.028,1.255,t*.12+.028,1.275,.004),`amber`,{emit:`#ff9a20`});for(let t of[-1,1]){let n=[[t*.72,.9],[t*.96,.92],[t*.99,1.24],[t*.72,1.22]];t>0&&(e.fill(n,`black`,{h:-4,sym:!0}),e.fill(Sm(n,.9),`lens`,{grad:[`#f0f4f7`,`#aab4be`],h:9,sym:!0,emit:`#e8e2d2`}),e.fill([[.74,.92],[.95,.94],[.95,.99],[.74,.97]],`amber`,{h:10,sym:!0,emit:`#ff9a20`}),Tm(e,.84,1.1,.05))}},raptor2(e){e.bumper={y0:.5,y1:.88,out:.1},e.fill(e.rect(-.9,.4,.9,.5,.02),`silver`,{h:6,grad:[`#cfd3d8`,`#80868e`]}),Am(e,.54,.45),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])e.fill([[t*.5,.52],[t*.98,.52],[t*.98,.74],[t*.6,.78]],`black`,{h:-24}),e.pattern([[t*.5,.52],[t*.98,.52],[t*.98,.74],[t*.6,.78]],`honey`,{pitch:.034,bar:.007,col:`#34373d`,h:-12}),e.fill(e.rect(t*.38-.07,.6,t*.38+.07,.68,.015),`lens`,{h:-16,emit:`#e6e0cf`});e.fill(e.rect(-.9,.5,.9,.9,.04),`gloss`,{h:2}),e.fill([[-.5,1.27],[.5,1.27],[.58,1.2],[.58,.82],[-.58,.82],[-.58,1.2]],`gloss`,{h:9,stroke:[`#454850`,.012]}),Pm(e,e.rect(-.52,1.06,.52,1.2,.03),`honey`,.032),Pm(e,e.rect(-.52,.86,.52,.98,.03),`honey`,.032),e.fill(e.rect(-.56,.98,.56,1.07,.01),`gloss`,{h:10}),Mm(e,0,1.025,.075,`#8f959d`);for(let t=-1;t<=1;t++)e.fill(e.rect(t*.12-.03,1.28,t*.12+.03,1.3,.004),`amber`,{emit:`#ff9a20`});Nm(e,.72,.98,1,1.29,{proj:2,k:1.5})},raptor3(e){e.bumper={y0:.5,y1:.9,out:.1},e.fill(e.rect(-.92,.4,.92,.5,.02),`silver`,{h:6,grad:[`#cfd3d8`,`#80868e`]}),Am(e,.56,.45),e.fill(e.rect(-.3,.42,.3,.49,.015),`dark`,{h:-4});for(let t of[-1,1])e.fill([[t*.46,.52],[t*1,.52],[t*1,.76],[t*.6,.82]],`black`,{h:-26}),e.pattern([[t*.46,.52],[t*1,.52],[t*1,.76],[t*.6,.82]],`honey`,{pitch:.034,bar:.0075,col:`#35383e`,h:-12}),e.fill(e.rect(t*.34-.06,.6,t*.34+.06,.68,.015),`lens`,{h:-16,emit:`#e6e0cf`});e.fill(e.rect(-.94,.5,.94,.92,.04),`gloss`,{h:2}),e.fill([[-.62,1.3],[.62,1.3],[.8,1.22],[.8,.9],[-.8,.9],[-.8,1.22]],`gloss`,{h:8}),Pm(e,e.rect(-.74,1.12,.74,1.26,.03),`honey`,.03),Pm(e,e.rect(-.74,.93,.74,1.03,.03),`honey`,.03),e.fill(e.rect(-.98,1.03,.98,1.13,.012),`gloss`,{h:12}),Mm(e,0,1.08,.085,`#979ca4`);for(let t=-1;t<=1;t++)e.fill(e.rect(t*.16-.04,1.3,t*.16+.04,1.318,.004),`amber`,{emit:`#ff9a20`});Nm(e,.72,1,1.02,1.28,{proj:2,k:1.4})}},Im={tacoma1:.7,tacoma2:.76,tacoma3:.74,tacoma4:.77,tundra1:.76,tundra2:.8,tundra3:.78,ranger1:.65,ranger2:.66,ranger3:.72,ranger4:.8,ranger5:.74,ranger5r:.76,raptor1:.84,raptor2:.82,raptor3:.9,silverado99:.7,silverado03:.725,silverado07:.76,silverado14:.8,silverado19:.62,silverado22:.62,sierra99:.72,sierra03:.74,sierra07:.78,sierra14:.82,sierra19:.72,sierra24:.64};for(let e in Im)Fm[e]&&(Fm[e].cutY=Im[e]);Fm.silverado03.lip=.02,Fm.silverado03.yBot=.27;var Lm=(e,t)=>{let n=e.reduce((e,t)=>e+t[0],0)/e.length,r=e.reduce((e,t)=>e+t[1],0)/e.length;return e.map(e=>[n+(e[0]-n)*t,r+(e[1]-r)*t])};function Rm(e,t,n,r={}){e.fill(t,`black`,{h:r.h==null?6:r.h,sym:!0,stroke:r.bezel?[r.bezel,.005]:void 0,strokeMat:r.bezel?`chrome`:void 0});let i=Lm(t,.9);e.fill(i,r.smoke?`gloss`:`red`,{h:9,sym:!0,grad:r.smoke?[`#3a1013`,`#1a0608`]:[`#d4222a`,`#8e0f15`],emit:`#ff2020`});let a=i.map(e=>e[0]),o=Math.min(...a),s=Math.max(...a);for(let t of n||[]){let n={amber:`#ff9d1a`,white:`#eef2f5`,red:`#c1171e`,smoke:`#2a0c0e`,led:`#ff3030`}[t.kind],a=[[o,t.y0],[s,t.y0],[s,t.y1],[o,t.y1]];for(let o of[`C`,`M`,`E`]){let s=e.cx[o];s.save(),e.path(s,i),s.clip(),e.path(s,a),s.fillStyle=o===`C`?n:o===`M`?`rgb(0,20,0)`:t.kind===`white`?`#000`:n,s.fill(),s.restore(),r.sym!==!1&&(s.save(),e.path(s,i.map(e=>[-e[0],e[1]])),s.clip(),e.path(s,a.map(e=>[-e[0],e[1]])),s.fillStyle=o===`C`?n:o===`M`?`rgb(0,20,0)`:t.kind===`white`?`#000`:n,s.fill(),s.restore())}}}var zm=e=>e.yTop-e.dY,Bm=(e,t,n,r,i={})=>{e.text(t,0,n-r*.03,r,{col:`rgba(0,0,0,0.55)`,spacing:r*.08,h:0,m:0,r:.5}),e.text(t,0,n,r,{col:i.col||e.primary,spacing:r*.08,h:i.h==null?7:i.h,m:i.m==null?.3:i.m,r:i.r==null?.34:i.r})},Vm=(e,t,n,r=.14)=>e.fill(e.rect(t-r/2,n-.025,t+r/2,n+.025,.012),`gloss`,{h:-10}),Hm={tacoma1:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,e.rect(n-.075,t-.42,n+.075,t-.04,.012),[{y0:t-.42,y1:t-.3,kind:`white`},{y0:t-.3,y1:t-.2,kind:`amber`}],{bezel:`#c8ccd2`}),Bm(e,`TOYOTA`,t-.2,.11,{col:`#d8dadd`,h:4}),Vm(e,0,t-.06)}},tacoma2:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,[[n-.085,t-.46],[n+.085,t-.46],[n+.07,t-.03],[n-.07,t-.03]],[{y0:t-.46,y1:t-.38,kind:`white`},{y0:t-.38,y1:t-.3,kind:`amber`}]),Bm(e,`TACOMA`,t-.23,.14),Vm(e,0,t-.07,.2)}},tacoma3:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.09,t-.46],[n+.02,t-.46],[n+.09,t-.4],[n+.085,t-.03],[n-.04,t-.03],[n-.06,t-.2],[n-.09,t-.24]],[{y0:t-.46,y1:t-.35,kind:`white`},{y0:t-.35,y1:t-.29,kind:`amber`}]),Bm(e,`TACOMA`,t-.25,.15),Vm(e,0,t-.07,.22),e.fill(e.rect(.2,t-.2,.36,t-.12,.01),`black`,{h:-8})}},tacoma4:{bm:`black`,draw(e){let t=zm(e),n=e.w-.085;Rm(e,e.rect(n-.06,t-.5,n+.06,t-.05,.02),[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!1}),Bm(e,`TACOMA`,t-.25,.14),Vm(e,0,t-.08,.22)}},tundra1:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.065,t-.44,n+.065,t-.04,.012),[{y0:t-.44,y1:t-.34,kind:`white`},{y0:t-.34,y1:t-.24,kind:`amber`}],{bezel:`#c8ccd2`}),Bm(e,`TOYOTA`,t-.25,.14,{col:`#d4d7db`,h:5}),Vm(e,0,t-.07,.2)}},tundra2:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.12;Rm(e,e.rect(n-.1,t-.5,n+.1,t-.04,.02),[{y0:t-.5,y1:t-.4,kind:`white`},{y0:t-.4,y1:t-.32,kind:`amber`}]),Bm(e,`TOYOTA`,t-.27,.17),Vm(e,0,t-.08,.26)}},tundra3:{bm:`black`,draw(e){let t=zm(e),n=e.w-.09;Rm(e,[[n-.06,t-.6],[n+.06,t-.6],[n+.06,t-.04],[n-.06,t-.04]],[{y0:t-.6,y1:t-.52,kind:`white`}],{smoke:!0}),Bm(e,`TOYOTA`,t-.3,.18),Vm(e,0,t-.09,.28)}},ranger1:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.08,t-.34,n+.08,t-.03,.01),[{y0:t-.34,y1:t-.26,kind:`white`},{y0:t-.26,y1:t-.18,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`RANGER`,t-.15,.1,{col:`#d4d7db`,h:4}),e.fill(e.rect(-.07,t-.06,.07,t-.02,.01),`dark`,{h:-8})}},ranger2:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.085,t-.34,n+.085,t-.03,.012),[{y0:t-.34,y1:t-.25,kind:`white`},{y0:t-.25,y1:t-.17,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`RANGER`,t-.15,.1,{col:`#d4d7db`,h:4}),e.fill(e.rect(-.07,t-.06,.07,t-.02,.01),`dark`,{h:-8})}},ranger3:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,e.rect(n-.09,t-.38,n+.09,t-.03,.015),[{y0:t-.38,y1:t-.29,kind:`white`},{y0:t-.29,y1:t-.2,kind:`amber`}]),Bm(e,`RANGER`,t-.15,.1),e.fill(e.rect(-.08,t-.07,.08,t-.025,.01),`black`,{h:-8})}},ranger4:{bm:`black`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.1,t-.36],[n+.08,t-.36],[n+.09,t-.03],[n-.1,t-.03]],[{y0:t-.36,y1:t-.28,kind:`white`},{y0:t-.28,y1:t-.2,kind:`amber`}]),Bm(e,`FORD`,t-.19,.12),Vm(e,0,t-.06,.2),e.text(`RANGER`,0,t-.33,.06,{col:`#b9bec5`,spacing:.006})}},ranger5:{bm:`black`,draw(e){let t=zm(e),n=e.w-.085;Rm(e,e.rect(n-.05,t-.42,n+.05,t-.04,.015),[{y0:t-.42,y1:t-.36,kind:`white`}],{smoke:!0}),Bm(e,`RANGER`,t-.2,.16),Vm(e,0,t-.07,.24)}},ranger5r:{bm:`black`,draw(e){let t=zm(e),n=e.w-.085;Rm(e,e.rect(n-.05,t-.42,n+.05,t-.04,.015),[{y0:t-.42,y1:t-.36,kind:`white`}],{smoke:!0}),Bm(e,`FORD`,t-.2,.17,{col:`#2a2d32`}),Vm(e,0,t-.07,.24),e.text(`RAPTOR`,.28,t-.36,.05,{col:`#c1171e`,spacing:.006})}},raptor1:{bm:`black`,draw(e){let t=zm(e),n=e.w-.12;Rm(e,e.rect(n-.1,t-.5,n+.1,t-.05,.02),[{y0:t-.5,y1:t-.41,kind:`white`},{y0:t-.41,y1:t-.33,kind:`amber`}]),Bm(e,`FORD`,t-.26,.2),Vm(e,0,t-.08,.26),e.text(`RAPTOR`,.3,t-.46,.05,{col:`#2a2d32`,spacing:.006})}},raptor2:{bm:`black`,draw(e){let t=zm(e),n=e.w-.12;Rm(e,e.rect(n-.1,t-.5,n+.1,t-.05,.02),[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`FORD`,t-.26,.2,{col:`#2f3237`}),Vm(e,0,t-.08,.26),e.text(`RAPTOR`,.3,t-.46,.05,{col:`#c1171e`,spacing:.006})}},raptor3:{bm:`black`,draw(e){let t=zm(e),n=e.w-.12;Rm(e,[[n-.1,t-.5],[n+.1,t-.5],[n+.1,t-.05],[n-.1,t-.05]],[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`FORD`,t-.26,.2,{col:`#2f3237`}),Vm(e,0,t-.08,.26),e.text(`RAPTOR`,.3,t-.46,.05,{col:`#c1171e`,spacing:.006})}},silverado99:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.075,t-.42,n+.075,t-.03,.012),[{y0:t-.42,y1:t-.32,kind:`white`},{y0:t-.32,y1:t-.24,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`CHEVROLET`,t-.2,.09,{col:`#d4d7db`,h:5}),Vm(e,0,t-.06,.18)}},silverado03:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.075,t-.42,n+.075,t-.03,.012),[{y0:t-.42,y1:t-.32,kind:`white`},{y0:t-.32,y1:t-.24,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`CHEVROLET`,t-.2,.09,{col:`#d4d7db`,h:5}),Vm(e,0,t-.06,.18)}},silverado07:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,e.rect(n-.08,t-.44,n+.08,t-.03,.015),[{y0:t-.44,y1:t-.34,kind:`white`},{y0:t-.34,y1:t-.26,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`CHEVROLET`,t-.21,.1),Vm(e,0,t-.065,.2)}},silverado14:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,[[n-.09,t-.46],[n+.08,t-.46],[n+.09,t-.03],[n-.09,t-.03]],[{y0:t-.46,y1:t-.36,kind:`white`},{y0:t-.36,y1:t-.28,kind:`amber`}]),Bm(e,`CHEVROLET`,t-.22,.11),Vm(e,0,t-.07,.22)}},silverado19:{bm:`black`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.075,t-.5],[n+.02,t-.5],[n+.02,t-.3],[n+.08,t-.3],[n+.08,t-.04],[n-.075,t-.04]],[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`CHEVROLET`,t-.2,.12),Vm(e,0,t-.07,.22)}},silverado22:{bm:`black`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.075,t-.5],[n+.02,t-.5],[n+.02,t-.3],[n+.08,t-.3],[n+.08,t-.04],[n-.075,t-.04]],[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`CHEVROLET`,t-.2,.12),Vm(e,0,t-.07,.22)}},sierra99:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.075,t-.42,n+.075,t-.03,.012),[{y0:t-.42,y1:t-.32,kind:`white`},{y0:t-.32,y1:t-.24,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`GMC`,t-.2,.1,{col:`#d4d7db`,h:5}),Vm(e,0,t-.06,.18)}},sierra03:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,e.rect(n-.075,t-.42,n+.075,t-.03,.012),[{y0:t-.42,y1:t-.32,kind:`white`},{y0:t-.32,y1:t-.24,kind:`amber`}],{bezel:`#c0c4ca`}),Bm(e,`GMC`,t-.2,.1,{col:`#d4d7db`,h:5}),Vm(e,0,t-.06,.18)}},sierra07:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,e.rect(n-.08,t-.44,n+.08,t-.03,.015),[{y0:t-.44,y1:t-.34,kind:`white`}],{bezel:`#c0c4ca`}),Bm(e,`GMC`,t-.21,.12),Vm(e,0,t-.065,.2)}},sierra14:{bm:`chrome`,draw(e){let t=zm(e),n=e.w-.11;Rm(e,[[n-.09,t-.46],[n+.08,t-.46],[n+.09,t-.03],[n-.09,t-.03]],[{y0:t-.46,y1:t-.36,kind:`white`}]),Bm(e,`GMC`,t-.22,.13),Vm(e,0,t-.07,.22)}},sierra19:{bm:`black`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.07,t-.5],[n+.02,t-.5],[n+.02,t-.3],[n+.075,t-.3],[n+.075,t-.04],[n-.07,t-.04]],[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`GMC`,t-.2,.13),Vm(e,0,t-.07,.22)}},sierra24:{bm:`black`,draw(e){let t=zm(e),n=e.w-.1;Rm(e,[[n-.07,t-.5],[n+.02,t-.5],[n+.02,t-.3],[n+.075,t-.3],[n+.075,t-.04],[n-.07,t-.04]],[{y0:t-.5,y1:t-.42,kind:`white`}],{smoke:!0}),Bm(e,`GMC`,t-.2,.13),Vm(e,0,t-.07,.22)}}},Um=null;function Wm(){if(Um)return Um;let e=e=>new ao(e);return Um={black:e({color:855310,roughness:.62,metalness:.1}),rubber:e({color:1381394,roughness:.95,metalness:0}),steel:e({color:10132897,roughness:.38,metalness:.95}),chrome:e({color:15263978,roughness:.08,metalness:1}),rimDark:e({color:2368810,roughness:.32,metalness:.85}),brake:e({color:5592923,roughness:.5,metalness:.9}),interior:e({color:1513242,roughness:.88,metalness:0}),seat:e({color:2302758,roughness:.8,metalness:0}),belt:e({color:11542560,roughness:.7,metalness:0}),under:e({color:1776153,roughness:.9,metalness:.3}),suit:e({color:1915530,roughness:.8,metalness:0}),glass:new oo({color:463386,roughness:.04,metalness:0,transparent:!0,opacity:.38,side:2,depthWrite:!1,envMapIntensity:1.6}),lightEmit:e({color:16777215,emissive:16773328,emissiveIntensity:1.7,roughness:.2}),cageCol:e({color:1579291,roughness:.42,metalness:.55}),shackle:e({color:13112347,roughness:.38,metalness:.6}),extRed:e({color:12850716,roughness:.3,metalness:.35}),cell:e({color:2764081,roughness:.45,metalness:.45}),kcFace:e({color:16777215,map:vp(),emissiveMap:vp(),emissive:16761898,emissiveIntensity:.55,roughness:.22,metalness:0}),kcLens:e({color:16777215,map:jp(),emissiveMap:jp(),emissive:16771504,emissiveIntensity:.18,roughness:.12,metalness:.35}),bdGuardBlack:e({color:16777215,map:Mp(`black`),roughness:.18,metalness:.15}),bdGuardAmber:new ao({color:16777215,map:Mp(`amber`),emissiveMap:Mp(`amber`),emissive:16751120,emissiveIntensity:0,transparent:!0,roughness:.15,metalness:0,depthWrite:!1}),bdGuardClear:new ao({color:16777215,map:Mp(`clear`),transparent:!0,roughness:.08,metalness:0,depthWrite:!1}),bdBody:e({color:1118741,roughness:.5,metalness:.65}),bdFace:e({color:16777215,map:kp(!1),emissiveMap:kp(!1),emissive:10134698,emissiveIntensity:.3,roughness:.2,metalness:.05}),bdFaceAmber:e({color:16777215,map:kp(!0),emissiveMap:kp(!0),emissive:16756736,emissiveIntensity:.45,roughness:.2,metalness:.05}),bdCap:e({color:16777215,map:Ap(),roughness:.4,metalness:.3}),dkPlate:e({color:16777215,map:Op(!1),roughness:.38,metalness:.85}),dkPlateU:e({color:16777215,map:Op(!0),roughness:.38,metalness:.85})},Um.glass.userData.noShadow=!0,Um.glass.alphaWrite=!1,Um}var Gm=new Map;function Km(e,t){let n=e.toFixed(3)+t.toFixed(3);if(Gm.has(n))return Gm.get(n);let r=t/2,i=e*.64,a=new Wa([[i,-r*.92],[i+.045,-r*1.02],[e*.88,-r*1.03],[e-.06,-r*.98],[e-.014,-r*.84],[e,-r*.58],[e*1.002,-r*.2],[e*1.002,r*.2],[e,r*.58],[e-.014,r*.84],[e-.06,r*.98],[e*.88,r*1.03],[i+.045,r*1.02],[i,r*.92]].map(e=>new G(e[0],e[1])),48);return a.rotateZ(-Math.PI/2),a.userData.shared=!0,Gm.set(n,a),a}function qm(e,t,n,r,i,a=`decal`){let o=new Y(new Ga(t,n),new ao({map:e,transparent:!0,roughness:.45,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));return o.position.copy(r),o.rotation.set(i[0],i[1],i[2]),o.castShadow=!1,o.name=a,o}function Jm(){let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`),n=new gi(e);return n.colorSpace=Me,n.anisotropy=4,{c:e,ctx:t,tex:n}}function Ym(e,t,n){let{ctx:r}=e;r.fillStyle=`#05080b`,r.fillRect(0,0,512,256);let i=t.spec.engine,a=Math.min(1,t.rpm/i.red);r.lineWidth=16,r.lineCap=`butt`,r.strokeStyle=`#1b2530`,r.beginPath(),r.arc(150,150,110,Math.PI*.8,Math.PI*2.2),r.stroke();let o=Math.PI*.8+a*Math.PI*1.4;r.strokeStyle=a>.9?`#ff2b2b`:a>.75?`#ffb020`:`#35e0ff`,r.beginPath(),r.arc(150,150,110,Math.PI*.8,o),r.stroke(),r.fillStyle=`#9fb3c4`,r.font=`600 20px system-ui, sans-serif`,r.textAlign=`center`;for(let e=0;e<=7;e++){let t=Math.PI*.8+e/7*Math.PI*1.4;r.fillText(String(e),150+Math.cos(t)*80,150+Math.sin(t)*80+7)}r.fillStyle=`#e8f6ff`,r.font=`700 84px system-ui, sans-serif`,r.textAlign=`center`;let s=Math.round(t.speed*(n?2.23694:3.6));r.fillText(String(s),150,172),r.fillStyle=`#6f8aa0`,r.font=`600 22px system-ui, sans-serif`,r.fillText(n?`MPH`:`KM/H`,150,202),r.fillStyle=`#35e0ff`,r.font=`800 96px system-ui, sans-serif`,r.textAlign=`center`;let c=t.gear<0?`R`:t.gear===0?`N`:String(t.gear);r.fillText(c,400,130),r.fillStyle=`#6f8aa0`,r.font=`600 20px system-ui, sans-serif`,r.fillText(`GEAR`,400,160),r.fillStyle=t.tcActive>.2?`#ffb020`:`#1b2530`,r.font=`700 24px system-ui, sans-serif`,r.fillText(`TC`,330,220),r.fillStyle=t.tc?`#2ee59d`:`#1b2530`,r.fillText(t.tc?`ON`:`OFF`,400,220),e.tex.needsUpdate=!0}var Xm=!1;function Zm(e){Xm=e;let t=Wm();t.kcFace.emissiveIntensity=e?0:.55,t.bdFace.emissiveIntensity=e?2.4:.3,t.bdFaceAmber.emissiveIntensity=e?3.2:.45,t.lightEmit.emissiveIntensity=e?4:1.7,t.kcLens.emissiveIntensity=e?3.4:.18,t.bdGuardAmber.emissiveIntensity=e?2.2:0,t.kcFace.emissive.set(e?16767072:16761898),t.bdFace.emissive.set(e?16054527:10134698)}var Qm=[{name:`Rojo`,primary:`#c8141e`,secondary:`#f4f1ea`,accent:`#111214`,shock:14201146},{name:`Cobalt`,primary:`#1a46c9`,secondary:`#f4f1ea`,accent:`#0d1730`,shock:14721056},{name:`Sunburst`,primary:`#f09a10`,secondary:`#101214`,accent:`#1a1a1a`,shock:2780415},{name:`Mesa`,primary:`#8a3b1a`,secondary:`#e8d4a8`,accent:`#1a110c`,shock:15263978},{name:`Viper`,primary:`#18a548`,secondary:`#101214`,accent:`#0a1a0f`,shock:15777824},{name:`Stealth`,primary:`#2a2d33`,secondary:`#c8141e`,accent:`#0b0b0d`,shock:13112350},{name:`Arctic`,primary:`#e9eef2`,secondary:`#1a46c9`,accent:`#1b1f24`,shock:1722057},{name:`Violet`,primary:`#6a2bd0`,secondary:`#f2c814`,accent:`#14081f`,shock:15910932}],$m=new Map,eh=e=>{let t=new q(e);return .2126*t.r+.7152*t.g+.0722*t.b};function th(e,t,n,r,i,a=!1){let o=[e.toFixed(3),t.toFixed(3),n,r,a?`s`:`w`].join(),s=Hd[n]||Hd.oem,c=Ud[r]||Ud.black,l=$m.get(o);if(!l){let n=new Kf,r=e*.5+.09,u=t/2,d=eh(c.col)>.42,f=(e,t,n=28)=>{let r=new Ci(e,e,t,n,1,!1);return r.rotateZ(Math.PI/2),r};{let e=new Ci(r,r,t*.84,28,1,!0);e.rotateZ(Math.PI/2),n.add(`rim`,e),a||n.add(`brake`,f(r*.9,.012),Yf(-u*.5,0,0))}if(n.add(`rim`,f(r*.55,.05,20),Yf(u*.52,0,0)),s.style===`dish`)n.add(`rim`,f(r*.94,.03),Yf(u*.6,0,0));else if(s.style===`mesh`)for(let e=0;e<s.spokes;e++){let t=e/s.spokes*6.283;n.add(`rim`,new bi(.02,r*.82,.018),Yf(u*.6,Math.sin(t)*r*.5,Math.cos(t)*r*.5,Math.PI/2-t+.5,0,0)),n.add(`rim`,new bi(.02,r*.82,.018),Yf(u*.6,Math.sin(t)*r*.5,Math.cos(t)*r*.5,Math.PI/2-t-.5,0,0))}else for(let e=0;e<s.spokes;e++){let t=e/s.spokes*6.283;n.add(`rim`,new bi(.04,r*.72,s.style===`alloy`?.1:.05),Yf(u*.58,Math.sin(t)*r*.55,Math.cos(t)*r*.55,Math.PI/2-t,0,0))}let p=r*.27,m=u*.68+.02;n.add(`steel`,f(p,.034,28),Yf(m,0,0));{let e=new Si(p*.93,32);e.rotateY(Math.PI/2),n.add(`kmcCap`,e,Yf(m+.0175,0,0))}for(let e=0;e<8;e++){let t=e/8*6.283+.2;n.add(`chrome`,f(.016,.03,6),Yf(u*.68,Math.sin(t)*r*.36,Math.cos(t)*r*.36))}if(s.bead){n.add(`rim`,Dp(r*.86,r*1.07,u*.845),null);let e=new qa(r*1.065,.011,6,48);e.rotateY(Math.PI/2),n.add(`rim`,e,Yf(u*.845,0,0));let t=new qa(r*.86,.008,6,48);t.rotateY(Math.PI/2),n.add(`rim`,t,Yf(u*.845,0,0)),n.add(`kmcRing`,Dp(r*.885,r*.955,u*.848),null);let i=s.bead===2?32:16;for(let e=0;e<i;e++){let t=e/i*6.283;n.add(`chrome`,f(.0095,.03,6),Yf(u*.865,Math.sin(t)*r*1.012,Math.cos(t)*r*1.012))}}else{let e=new qa(r,.012,6,36);e.rotateY(Math.PI/2),n.add(`rim`,e,Yf(u*.84,0,0)),n.add(`kmcRing`,Dp(r*.9,r*.99,u*.842),null)}a||n.add(`brake`,f(r*.72,.03),Yf(-u*.25,0,0));let h=new ao({map:Ep(d),transparent:!0,roughness:.45,metalness:.3,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});l={mb:n,geos:n.build({rim:new ao({color:c.col,metalness:c.m,roughness:c.r,side:2}),steel:i.steel,chrome:i.chrome,brake:i.brake,kmcCap:new ao({map:Tp(d),roughness:.35,metalness:.4}),kmcRing:h},{castShadow:!1})},l.geos.traverse(e=>{e.geometry&&(e.geometry.userData.shared=!0)}),$m.set(o,l)}let u=new Tn;return l.geos.children.forEach(e=>u.add(new Y(e.geometry,e.material))),u}var nh={};function rh(e){if(nh[e])return nh[e];let t=ep(e);return nh[e]=new ao({map:t.color,bumpMap:t.bump,bumpScale:3.4,roughness:.93,metalness:0})}function ih(e,t){let n=e.wheelRadius,r=e.wheelWidth,i=e.build,a=new Tn,o=new Tn,s=new Tn;a.add(o),o.add(s);let c=new Y(Km(n,r),rh(e.tire.tread));c.castShadow=!0,c.receiveShadow=!0,s.add(c),s.add(th(n,r,i.rim,i.finish,t));let l=new Y(new bi(.07,n*.3,n*.28),new ao({color:12850196,roughness:.4,metalness:.4}));return l.position.set(-r*.14,0,-n*.36),o.add(l),{steerG:a,flipG:o,spinG:s,tire:c}}function ah(e,t){let n=new Tn,r=e.wheelRadius,i=e.wheelWidth,a=e.build,o=new Y(Km(r,i),rh(e.tire.tread));return o.castShadow=!0,n.add(o),n.add(th(r,i,a.rim,a.finish,t,!0)),n}function oh(e,t,n,r,i=.078,a=0,o=!0){let s=Yf(t,n,r,a,0,0),c=(e,t,n,r=0,i=0,a=0,o=1,c=1,l=1)=>s.clone().multiply(Yf(e,t,n,r,i,a,o,c,l)),l=(e,t,n=28)=>{let r=new Ci(e,e,t,n,1,!1);return r.rotateX(Math.PI/2),r};if(e.add(`black`,l(i*.97,.082),c(0,0,0)),e.add(`black`,new Ka(i*.94,20,10),c(0,0,-.04,0,0,0,1,1,.5)),e.add(`black`,l(i*1.05,.02),c(0,0,.042)),e.add(`chrome`,new qa(i*.965,.0046,8,36),c(0,0,.0536)),e.add(`kcLens`,new Si(i*.955,36),c(0,0,.0527)),e.add(`kcFace`,new Si(i*.985,32),c(0,0,.0585)),e.add(`kcFace`,new Ci(i*.99,i*.99,.0072,32,1,!0).rotateX(Math.PI/2),c(0,0,.0549)),o){for(let t of[1,-1])e.box(`black`,.012,i*1.2,.05,t*i*1.08,-i*.5,-.005,a),e.add(`chrome`,new Ci(.011,.011,.022,10).rotateZ(Math.PI/2),c(t*i*1.17,0,0));e.add(`black`,new bi(i*2.34,.012,.05),c(0,-i*1.1,-.005))}}function sh(e,t,n,r,i,a,o=.078){let s=(e,t,n)=>new Q(e,t,n),c=Math.max(3,Math.min(6,Math.round(n/10)+1)),l=t/2,u=l-o*1.25,d=r-o*1.28;e.bar(`cageCol`,[s(-l,d,i-.01),s(l,d,i-.01)],.017,10,!1);for(let t of[1,-1])e.sphere(`cageCol`,s(t*l,d,i-.01),.019),a&&e.tube(`cageCol`,s(t*u*.78,d,i-.01),s(t*u*.78,a.y,a.z),.014,8);for(let t=0;t<c;t++){let n=c===1?0:-u+t/(c-1)*2*u;oh(e,n,r,i,o,0,!0),e.box(`black`,.05,.034,.05,n,d+.014,i-.01,0,0,0,.006)}}var ch=new Map;function lh(e){let t=e.toFixed(4);if(ch.has(t))return ch.get(t);let n=e/2,r=4.4,i=[];for(let e=0;e<72;e++){let t=e/72*Math.PI*2,a=Math.cos(t),o=Math.sin(t);i.push(new G(n*Math.sign(a)*Math.abs(a)**(2/r),n*Math.sign(o)*Math.abs(o)**(2/r)))}let a=new Ba(new na(i),{depth:.012,bevelEnabled:!0,bevelThickness:.0035,bevelSize:.0035,bevelSegments:2,curveSegments:8});a.translate(0,0,-.006);let o=a.attributes.position,s=new Float32Array(o.count*2);for(let t=0;t<o.count;t++)s[t*2]=o.getX(t)/e+.5,s[t*2+1]=o.getY(t)/e+.5;return a.setAttribute(`uv`,new pr(s,2)),a.userData.shared=!0,ch.set(t,a),a}function uh(e,t,n,r,i=.092,a=0,o=!1,s=0,c=!0,l=null){let u=Yf(t,n,r,a,s,0),d=(e,t,n,r=0,i=0,a=0)=>u.clone().multiply(Yf(e,t,n,r,i,a)),f=i*.72;e.add(`bdBody`,new If(i,i,f,3,i*.16),d(0,0,0));for(let t=-2;t<=2;t++)e.add(`bdBody`,new bi(i*.74,i*.045,.02),d(0,t*i*.17,-f/2-.008));let p=new Ga(i*.985,i*.985);if(e.add(o?`bdFaceAmber`:`bdFace`,p,d(0,0,f/2+8e-4)),l&&e.add(l===`black`?`bdGuardBlack`:l===`amber`?`bdGuardAmber`:`bdGuardClear`,lh(i*1.045),d(0,0,f/2+.012)),c){for(let t of[1,-1])e.add(`steel`,new bi(.01,i*.62,f*.62),d(t*(i/2+.006),-i*.28,-f*.1));e.add(`steel`,new bi(i*1.1,.01,f*.7),d(0,-i*.58,-f*.1))}}function dh(e,t,n,r,i,a,o,s=.13,c=null){let l=(e,t,n)=>new Q(e,t,n),u=t/2,d=Math.max(3,Math.min(8,Math.round(n/6.2))),f=d>1?(t-s)/(d-1):0;s*.72;let p=r+s/2+.014,m=r-s/2-.014;e.box(`bdBody`,t+.01,.026,.06,0,p,i-.02,0,0,0,.004),e.box(`bdBody`,t+.01,.026,.06,0,m,i-.02,0,0,0,.004);for(let t of[1,-1]){e.box(`bdBody`,.022,s+.06,.09,t*(u+.004),r,i-.01,0,0,0,.004);let n=t*u*.7;a?e.tube(`black`,l(n,m-.01,i-.03),l(n,a.y,a.z),.02,8):e.box(`black`,.06,.07,.07,n,m-.04,i-.03,0,0,0,.006),e.box(`black`,.08,.02,.1,n,m-.012,i-.03,0,0,0,.005)}for(let t=0;t<d;t++)uh(e,d===1?0:-u+s/2+t*f,r,i,s,0,o,0,!1,c)}function fh(e,t,n,r,i=.12,a=.2){let o=e.attributes.position,s=-1/0;for(let e=0;e<o.count;e++){let c=o.getZ(e)-n,l=o.getY(e);c<=.03&&c>-a&&Math.abs(o.getX(e)-t)<i&&l>r.rockerY+.5&&l>s&&(s=l)}return s>-1/0?s:r.beltY}var ph=.02,mh=.024;function hh(e,t,n,r){let i=(e,t,n)=>new Q(e,t,n),a=e=>{e(1),e(-1)},{noseZ:o,rockerY:s}=t,c=.027,l=o+ph,u=n*.66,d=r-.3,f=l-.42,p=.54,m=u*.95,h=m*.45;e.bar(`black`,[i(-u,r,l-.03),i(-u*.5,r,l+.008),i(0,r,l+.02),i(u*.5,r,l+.008),i(u,r,l-.03)],c,12),a(t=>e.sphere(`black`,i(t*u,r,l-.03),c*1.02));let g=r+mh,_=o-.05;for(let t of[.4,.88])a(n=>{let a=n*u*t;e.bar(`black`,[i(a,r+.012,l-.012-.04*t*t),i(a,r+.03+(g-r)*.55,l-(l-_)*.55),i(a,g+.03,_)],c*.82,10),e.box(`black`,.07,.012,.1,a,g+.004,o-.02,0,0,0,.004),e.tube(`steel`,i(a,g-.004,o-.005),i(a,g+.012,o-.005),.0085,8)});a(t=>e.bar(`black`,[i(t*m,r-.012,l-.04),i(t*h,d,f)],c*.88,10)),e.bar(`black`,[i(-h,d,f),i(h,d,f)],c*.88,10),a(t=>{e.bar(`black`,[i(t*u,r,l-.03),i(t*(u+.03),r+.03,l-p*.48),i(t*(u+.05),r+.1,l-p)],c*.9,10),e.bar(`black`,[i(t*h,d,f),i(t*(h+.2),d+.1,f-.22),i(t*(h+.36),d+.2,f-.46)],c*.82,10),e.box(`black`,.06,.014,.12,t*(u+.05),r+.108,l-p-.04,0,0,0,.004),e.tube(`steel`,i(t*(u+.05),r+.101,l-p-.07),i(t*(u+.05),r+.116,l-p-.07),.009,8)});let v=.014,y=i(-(m-v),r-.015,l-.05),b=i(m-v,r-.015,l-.05),x=i(-(h-v),d+.004,f+.012),S=i(h-v,d+.004,f+.012),C=new Q().subVectors(x,y),w=new Q().subVectors(b,y),T=new Q().crossVectors(w,C).normalize();T.y<0&&T.negate();let E=e=>{let t=e?T.clone().negate():T,n=[],r=[],i=[];for(let[a,o,s]of[[y,0,0],[b,1,0],[x,0,1],[S,1,1]])n.push(a.x,a.y+(e?-.004:0),a.z),i.push(t.x,t.y,t.z),r.push(o,e?1-s:s);let a=new Dr;return a.setAttribute(`position`,new J(n,3)),a.setAttribute(`normal`,new J(i,3)),a.setAttribute(`uv`,new J(r,2)),a.setIndex(e?[0,3,1,0,2,3]:[0,1,3,0,3,2]),a};e.add(`dkPlate`,E(!1)),e.add(`dkPlateU`,E(!0)),a(t=>{let n=t>0?b:y,r=t>0?S:x;e.tube(`black`,i(n.x,n.y-.012,n.z),i(r.x,r.y-.012,r.z),.011,6)}),a(t=>e.box(`black`,.04,.05,.05,t*u*.55,r+.05,l+.012,0,0,0,.005))}function gh(e,t,n,r,i,a){let o=t.build,s=(e,t,n)=>new Q(e,t,n),c=e=>{e(1),e(-1)},l=t.cls===`trophy`,{noseZ:u,tailZ:d,cowlZ:f,roofFrontZ:p,roofRearZ:m,cabRearZ:h,beltY:g,roofY:_,hoodFY:v,rockerY:y,w:b}=n,x=t.wheelRadius,S=.0254,C=y+.12;e.box(`under`,b*2-.1,.05,u-d-.3,0,y+.02,(u+d)/2),e.box(`interior`,b*2-.04,g-y,.03,0,(g+y)/2,f+.05),e.box(`interior`,b*2-.04,g-y,.03,0,(g+y)/2,h+.03),e.box(`interior`,b*2-.06,.05,f-h,0,C-.1,(f+h)/2),c(t=>e.bar(`cageCol`,[s(t*.46,y-.04,u-.15),s(t*.46,y-.04,d+.1)],.045,8,!1)),e.box(`interior`,b*2-.12,.13,.4,0,g-.08,f-.14,-.14,0,0,.04);let w=f-(l?1:1.02);if(c(t=>{e.box(`seat`,.46,.12,.5,t*.4,C+.12,w+.1,0,0,0,.04),e.box(`seat`,.46,.66,.13,t*.4,C+.46,w-.2,-.16,0,0,.05),e.box(`seat`,.28,.2,.11,t*.4,C+.86,w-.28,-.1,0,0,.04),(l||o.travel===`race`)&&(e.box(`belt`,.05,.75,.015,t*.3,C+.5,w-.11,-.16),e.box(`belt`,.05,.75,.015,t*.5,C+.5,w-.11,-.16))}),!l&&t.platform.cab===`double`&&e.box(`seat`,b*1.55,.4,.46,0,C+.18,h+.34,0,0,0,.05),l||o.travel===`race`){let t=_-.1;c(n=>{e.bar(`cageCol`,[s(n*(b-.1),C,f-.1),s(n*(b-.1),g,f-.14),s(n*(b-.2),t,p-.04),s(n*(b-.2),t,h+.12),s(n*(b-.1),C,h+.12)],.028),e.bar(`cageCol`,[s(n*(b-.1),g-.12,f-.12),s(n*(b-.1),g-.12,h+.12)],.024)}),e.bar(`cageCol`,[s(-(b-.2),t,p-.04),s(b-.2,t,p-.04)],.028),e.bar(`cageCol`,[s(-(b-.2),t,h+.12),s(b-.2,t,h+.12)],.028),e.bar(`cageCol`,[s(-(b-.2),t,h+.12),s(b-.1,C+.1,h+.12)],.022)}{let n=_h[t.platform.fascia]||{k:1,col:`black`},r=n.k,i=n.col===`paint`?`paint`:`black`,a=g+.1,o=f-.22,l=b+.13+.03*r;c(t=>{e.tube(`black`,s(t*(b-.08),g+.04,o),s(t*(b+.08),a-.02,o),n.tow?.017:.012,8),e.box(i,.055*r,.17*r,.245*r,t*l,a,o,0,0,0,.02),e.box(`chrome`,.006,.145*r,.215*r,t*(l-0*r),a,o-.124*r,0,0,0,.004),n.tow&&e.box(`black`,.05*r,.07*r,.1*r,t*l,a-.15*r,o+.02,0,0,0,.01)})}let T=e=>v+(g-v)*((u-e)/(u-f)),E=(u+f)/2;(o.hood===`vent`||o.hood===`pins`)&&c(t=>{for(let n=0;n<6;n++){let r=E+.1-n*.075;e.box(`black`,.42,.018,.045,t*.4,T(r)+.03,r,-.12)}}),o.hood===`scoop`&&(e.add(`paint`,qf([{z:E+.45,w:.16,y0:T(E+.45)-.02,y1:T(E+.45)+.09,n:2.4},{z:E+.2,w:.3,y0:T(E+.2)-.02,y1:T(E+.2)+.2,n:2.6},{z:E-.2,w:.3,y0:T(E-.2)-.02,y1:T(E-.2)+.18,n:2.6},{z:E-.4,w:.22,y0:T(E-.4)-.02,y1:T(E-.4)+.06,n:2.4}],16)),e.box(`black`,.46,.11,.03,0,T(E+.2)+.1,E+.2,-.2,0,0,.01)),(o.hood===`pins`||l)&&c(t=>{e.tube(`chrome`,s(t*.6,T(u-.3)+0,u-.3),s(t*.6,T(u-.3)+.04,u-.3),.02,8)});let D=y-.04,O=b-.03;o.bumper===`stock`&&!Fm[t.platform.fascia]&&(e.add(`paint`,qf([{z:u+.14,w:O*.84,y0:D,y1:D+.19,n:4},{z:u+.04,w:O*.98,y0:D-.03,y1:D+.21,n:4},{z:u-.3,w:O,y0:D-.03,y1:D+.21,n:4}],20)),e.box(`black`,O*1.1,.06,.03,0,D+.03,u+.14,0,0,0,.012)),o.bumper===`plate`&&(e.add(`paint`,qf([{z:u+.12,w:O*.72,y0:D+.08,y1:D+.2,n:3},{z:u-.02,w:O*.95,y0:D,y1:D+.26,n:3},{z:u-.35,w:O*1.02,y0:D,y1:D+.26,n:3}],20)),e.box(`under`,O*1.2,.02,.28,0,D-.08,u-.1,.2,0,0,.01)),(o.bumper===`tube`||o.bumper===`hoop`)&&(e.box(`black`,O*1.4,.2,.05,0,D+.16,u-.05),e.box(`under`,O*1.3,.02,.3,0,D-.08,u-.1,.22,0,0,.01),e.bar(`cageCol`,[s(-O*.9,D,u-.3),s(-O*.95,D+.1,u+.1),s(O*.95,D+.1,u+.1),s(O*.9,D,u-.3)],.036),e.bar(`cageCol`,[s(-O*.8,D+.1,u+.1),s(-O*.72,D+.26,u+.08),s(O*.72,D+.26,u+.08),s(O*.8,D+.1,u+.1)],.028),o.bumper===`hoop`&&e.bar(`cageCol`,[s(-O*.72,D+.26,u+.08),s(-O*.62,v+.1,u-.06),s(O*.62,v+.1,u-.06),s(O*.72,D+.26,u+.08)],.028));let k=Fm[t.platform.fascia],A=o.bumper===`prerunner`||l&&o.bumper!==`stock`,ee=k&&k.cutY!=null?k.cutY+(l?ym(n,t.platform.prof&&t.platform.prof.hoodF):n.dY):y+.13,j=ee-mh;o.bumper===`prerunner`&&hh(e,n,O,j),A&&ee>y&&e.box(`under`,(b-.1)*2,ee-y+.03,.03,0,(y+ee)/2+.01,o.bumper===`prerunner`?u-.42:u-.1);let M=o.lights===`baja`,N=o.bumper===`prerunner`,P=o.lens===`amber`,F=o.bdCover||`black`,te=(t,n,r,i,a,o)=>M?dh(e,t,n,i,a,o,P,.13,F):sh(e,t,n,r,a,o);if(o.roofBar&&te(o.roofBar*S,o.roofBar,_+.2,_+.12,p-.1,{y:_+.02,z:p+.02}),o.bumperBar){if(N){let e=j,t=u+ph;te(Math.min(o.bumperBar*S,O*1.5),o.bumperBar,e+.17,e+.15,t+.04,null)}else te(Math.min(o.bumperBar*S,O*1.8),o.bumperBar,D+(o.bumper===`stock`?.38:.4),D+(o.bumper===`stock`?.36:.38),u+(o.bumper===`stock`?.05:.1),null)}o.pods&&c(t=>{let r=t*(b-.1),i=f+.06,o=fh(a.cab,r,i,n),c=M?.066:.08,l=Math.max(g+.12,o+.045+c),u=Math.min(g-.02,o-.03);e.box(`black`,.07,.012,.07,r,o+.002,i-.03,0,0,0,.004),e.tube(`cageCol`,s(r,u,i-.03),s(r,l-c+.006,i-.025),.014,8),M?uh(e,r,l,i,.1,-.06,P,0,!0,F):oh(e,r,l,i,.066,-.06,!0)});let I=g+.015;e.box(`under`,b*2-.2,.04,h-d-.06,0,y+.34,(h+d)/2),c(t=>e.add(`black`,Jf(n.arches[1].R*.9,.3,0,Math.PI),Yf(t*(b-.24),n.arches[1].yc,n.arches[1].zc)));let ne=I-y-.12,re=!l&&Hm[t.platform.fascia];l?e.bar(`cageCol`,[s(-b*.8,y+.02,d+.1),s(-b*.85,y+.08,d-.1),s(b*.85,y+.08,d-.1),s(b*.8,y+.02,d+.1)],.036):(e.box(`paint`,b*2-.02,ne,.05,0,y+.12+ne/2,d+.02,0,0,0,.012),e.box(re?re.bm:`under`,b*1.96,.13,.13,0,y+.04,d-.05,0,0,0,.03)),re||c(t=>{e.box(`tailEmit`,.14,ne*.55,.03,t*(b-.02),I-ne*.34,d+.005,0,0,0,.01)});let L=Vd[o.bed]||Vd.none,R=h-.12,z=d+.12,B=_+(L.cage>=2?.05:-.02),V=b-.14,ie=(n,a,o,c)=>{let l=ah(t,r);l.position.set(n,a,o),c?l.rotation.z=Math.PI/2:l.rotation.y=Math.PI/2,i.add(l),c||e.tube(`cageCol`,s(n,a,o-.1),s(n,a,o+.1),.03)};if(L.cage&&L.cage<4&&(c(t=>e.bar(`cageCol`,[s(t*V,I,R),s(t*V,B,R)],.036)),e.bar(`cageCol`,[s(-V,B,R),s(V,B,R)],.036),e.bar(`cageCol`,[s(-V,I,R),s(0,B,R)],.024),e.bar(`cageCol`,[s(V,I,R),s(0,B,R)],.024)),L.cage===1&&(c(t=>e.bar(`cageCol`,[s(t*V,B,R),s(t*V,I,R-.9)],.03)),ie(0,Math.max(I-.1,y+.36+x),R-.26,!1)),L.cage===2&&(c(t=>e.bar(`cageCol`,[s(t*V,B,R),s(t*V,B-.06,z+.25),s(t*V,I,z)],.034)),e.bar(`cageCol`,[s(-V,B-.06,z+.25),s(V,B-.06,z+.25)],.034),e.bar(`cageCol`,[s(-V,B-.03,(R+z)/2),s(V,B-.03,(R+z)/2)],.03),ie(0,y+.38+x,R-.28,!1),ie(0,y+.38+x,R-.28-t.wheelWidth-.32,!1)),L.cage===3){c(t=>e.bar(`cageCol`,[s(t*V,B,R),s(t*(V-.1),I+.34,R-.3),s(t*(V-.1),I+.34,z),s(t*V,I,z-.02)],.032)),e.bar(`cageCol`,[s(-V+.1,I+.34,z),s(V-.1,I+.34,z)],.032);let n=(R+z)/2-.02;ie(0,I+.42,n+0,!0),ie(0,I+.42+t.wheelWidth+.04,n+0,!0)}let ae=null;if(L.cage===5){let n=t.wheelWidth,a=y+.36,o=y+.17,l=d-.1-n/2,u=d-.1-n-.1,f=x+.012,p=2*x+.045,m=o+2*x+.012;ae={topY:o+.04,zRear:u,xo:p},e.box(`under`,p*2,.03,d-u+.14,0,o-.015,(d+.14+u)/2,0,0,0,.006),e.box(`black`,p*2,.07,.03,0,o+.035,u+.015,0,0,0,.006);for(let t of[-p,p])e.box(`black`,.03,.07,d-u+.14,t,o+.035,(d+.14+u)/2,0,0,0,.004);c(t=>{e.bar(`cageCol`,[s(t*.46,y-.04,d+.3),s(t*.46,y+.02,d-.04),s(t*p*.78,o-.04,u+.08)],.032,10),e.bar(`cageCol`,[s(t*.46,y-.04,d+.3),s(t*p*.9,o-.04,d-.02)],.026,8,!1)}),e.bar(`cageCol`,[s(-p*.78,o-.04,u+.08),s(p*.78,o-.04,u+.08)],.03,10,!1),e.box(`black`,.34,.46,.022,0,o+.26,l,0,0,0,.012);{let t=new Si(.1,24);t.rotateY(Math.PI),e.add(`bdCap`,t,Yf(0,o+.28,l-.013))}let g=(t,n,r)=>{let i=r.y-n.y,a=r.z-n.z;e.box(`belt`,.05,.012,Math.hypot(i,a),t,(n.y+r.y)/2,(n.z+r.z)/2,Math.atan2(-i,a),0,0)};for(let a of[-1,1]){let c=ah(t,r);c.position.set(a*f,o+x+.012,l),c.rotation.y=Math.PI/2,i.add(c);let u=a*(f+x*.62);g(u,s(0,I+.03,d+.05),s(0,m+.012,l+n*.3)),g(u,s(0,m+.012,l+n*.3),s(0,m+.012,l-n/2-.012)),g(u,s(0,m+.012,l-n/2-.012),s(0,o+.04,l-n/2-.012)),e.box(`steel`,.075,.03,.055,u,m+.03,l+n*.12,0,0,0,.006)}for(let t of[-1,1]){let n=Yf(t*.3,a+.06,h-.46,1,0,0),r=(e,t,r,i=0,a=0,o=0,s=[1,1,1])=>n.clone().multiply(Yf(e*1.18,t*1.18,r*1.18,i,a,o,s[0]*1.18,s[1]*1.18,s[2]*1.18));e.add(`extRed`,new Ci(.052,.052,.34,20),r(0,.17,0)),e.add(`extRed`,new Ka(.052,16,8),r(0,.34,0,0,0,0,[1,.55,1])),e.add(`extRed`,new Ka(.052,16,8),r(0,0,0,0,0,0,[1,.35,1])),e.add(`chrome`,new Ci(.02,.02,.05,12),r(0,.385,0)),e.add(`black`,new bi(.05,.03,.09),r(0,.41,.012)),e.add(`chrome`,new bi(.014,.012,.1),r(0,.435,-.02)),e.add(`black`,new qa(.035,.007,6,14,Math.PI*1.4),r(.05,.36,.06,0,1.2,0)),e.add(`steel`,new Ci(.018,.018,.012,14),r(.03,.4,-.05,Math.PI/2,0,0));for(let t of[.1,.25])e.add(`belt`,new Ci(.056,.056,.045,18,1,!0),r(0,t,0));e.add(`black`,new bi(.14,.02,.08),r(0,0,-.01))}let _=d+.62;e.box(`cell`,.52,.27,.46,-.16,a+.135,_,0,0,0,.035),e.add(`chrome`,new Ci(.05,.05,.03,22),Yf(-.04,a+.28,_-.06)),e.add(`black`,new Ci(.036,.036,.035,18),Yf(-.04,a+.292,_-.06)),e.tube(`black`,s(-.3,a+.27,_+.12),s(-.3,a+.36,_+.12),.012,8);for(let t of[-.13,.13])e.box(`belt`,.05,.012,.3,-.16+t,a+.275,_);{let t=.36,n=_;e.box(`extRed`,.3,.4,.14,t,a+.2,n,0,0,0,.02),e.box(`black`,.06,.03,.05,.3,a+.415,n,0,0,0,.005),e.tube(`black`,s(.41,a+.4,n),s(.41,a+.45,n),.014,8),e.add(`black`,new qa(.06,.01,6,14,Math.PI),Yf(t,a+.4,n+.07,Math.PI/2,0,0))}}let oe=null;if(L.cage===4){let n=t.wheelWidth,r=h-.1,i=Math.min(d+.14,r-(2*x+.24)),a=(r+i)/2,o=I+.045,l=o+.026+n/2,u=l+n+.012,f=u+n/2,p=f+.17,m=V;oe={topY:p,zRear:i,zFront:r},c(t=>e.bar(`cageCol`,[s(t*m,o,r),s(t*m,o,i)],.026,10,!1));for(let t of[r,a+x*.62,a,a-x*.62,i])e.bar(`cageCol`,[s(-m,o,t),s(m,o,t)],.024,10,!1);c(t=>{for(let n of[r,i])e.box(`black`,.1,.03,.1,t*m,I+.012,n),e.sphere(`cageCol`,s(t*m,o,n),.03)}),c(t=>{for(let n of[r,i])e.bar(`cageCol`,[s(t*m,o,n),s(t*m,p,n)],.032,10)}),e.bar(`cageCol`,[s(-m,p,r),s(m,p,r),s(m,p,i),s(-m,p,i),s(-m,p,r)],.03,10),c(t=>{e.bar(`cageCol`,[s(t*m,o,i),s(t*m,p,a)],.022,8,!1),e.bar(`cageCol`,[s(t*m,o,r),s(t*m,p,a)],.022,8,!1)}),e.bar(`cageCol`,[s(-m,o,i),s(m,p,i)],.02,8,!1),e.bar(`cageCol`,[s(m,o,i),s(-m,p,i)],.02,8,!1),e.bar(`cageCol`,[s(-m,p-.02,a+x*.5),s(m,p-.02,a+x*.5)],.02,8,!1),e.bar(`cageCol`,[s(-m,p-.02,a-x*.5),s(m,p-.02,a-x*.5)],.02,8,!1);for(let t of[a+x*.28,a-x*.28])e.box(`belt`,x*2+.05,.012,.055,0,f+.01,t),c(n=>e.box(`belt`,.012,f-o,.055,n*(x+.018),(f+o)/2,t)),e.box(`steel`,.07,.03,.06,x+.03,f-.05,t,0,0,0,.006);ie(0,l,a,!0),ie(0,u,a,!0)}L.cans&&(e.box(`black`,b*1,.36,.5,0,y+.56,z+.4,0,0,0,.04),c(t=>e.tube(`chrome`,s(t*.2,y+.74,z+.4),s(t*.2,y+.77,z+.4),.05,10))),o.chase&&c(t=>{let n=ae?ae.topY+.05:oe?oe.topY+.045:L.cage?B+.03:_+.04,r=ae?ae.zRear-.04:oe?oe.zRear-.02:L.cage?L.cage===2?z+.22:R-.02:h+.08;M?uh(e,t*(ae?ae.xo*.9:.42),n+.02,r,.078,0,!0,Math.PI,!0,F):(e.box(`black`,.26,.09,.07,t*.42,n,r,0,0,0,.01),e.box(`amberEmit`,.2,.06,.012,t*.42-t*.02,n,r-.04))}),l&&(c(e=>{for(let e of[1]);}),e.box(`under`,1.25,.5,.14,0,y+.42,d+.38,0,0,0,.02),c(t=>{let n=new Ci(.2,.2,.05,20);n.rotateX(Math.PI/2),e.add(`black`,n,Yf(t*.3,y+.42,d+.28))}),e.add(`paint`,qf([{z:p-.2,w:.12,y0:_-.02,y1:_+.05,n:2.4},{z:m+.45,w:.22,y0:_-.02,y1:_+.13,n:2.6},{z:m+.05,w:.24,y0:_-.02,y1:_+.14,n:2.6}],14)),e.box(`black`,.44,.1,.03,0,_+.08,m-0,0,0,0,.01),c(t=>e.tube(`chrome`,s(t*(b+.02),y+.02,f-1.1),s(t*(b+.14),y+.08,h-.3),.06,12))),c(r=>e.box(`rubber`,.36,.36,.025,r*t.front.x,y-.06,t.rear.z-n.arches[1].R-.02))}var _h={tacoma1:{k:1.15,col:`black`},tacoma2:{k:1.15,col:`paint`},tacoma3:{k:1,col:`paint`},tacoma4:{k:.9,col:`paint`},tundra1:{k:1.25,col:`black`},tundra2:{k:1.3,col:`black`,tow:!0},tundra3:{k:1.2,col:`paint`},ranger1:{k:1.1,col:`black`},ranger2:{k:1.1,col:`black`},ranger3:{k:1.1,col:`paint`},ranger4:{k:1,col:`paint`},ranger5:{k:1,col:`paint`},ranger5r:{k:1.05,col:`black`},raptor1:{k:1.3,col:`paint`,tow:!0},raptor2:{k:1.3,col:`paint`,tow:!0},raptor3:{k:1.3,col:`black`,tow:!0},silverado99:{k:1.2,col:`black`},silverado03:{k:1.2,col:`black`},silverado07:{k:1.3,col:`paint`},silverado14:{k:1.3,col:`paint`},silverado19:{k:1.25,col:`black`},silverado22:{k:1.25,col:`black`},sierra99:{k:1.2,col:`black`},sierra03:{k:1.2,col:`black`},sierra07:{k:1.3,col:`paint`},sierra14:{k:1.3,col:`paint`},sierra19:{k:1.25,col:`black`},sierra24:{k:1.25,col:`black`}};function vh(e,t){if(Array.isArray(e.stickers))return e.stickers;let n=[],r=t.shock&&t.shock.brand;return r===`King`&&n.push(`king`),r===`Fox`&&n.push(`fox`),(e.roofBar||e.bumperBar||e.pods||e.chase)&&n.push(e.lights===`baja`?`baja`:`kc`),e.bumper===`prerunner`&&n.push(`dirtking`),n.push(`kmc`),n}var yh={door:`Doors`,bed:`Bedsides`,win:`Back window`};function bh(e,t){if(Array.isArray(e.decals))return e.decals;let n=vh(e,t),r=n.length;return n.map((e,t)=>({b:e,z:`door`,u:r<2?.5:.08+.84*t/(r-1),v:.08,s:.07,side:`both`}))}function xh(e,t){return t===`door`?{a0:e.cabRearZ+.1,a1:e.cowlZ-.12,y0:e.rockerY+.1,y1:e.beltY-.04}:t===`bed`?{a0:e.tailZ+.1,a1:e.cabRearZ-.08,y0:e.rockerY+.12,y1:e.beltY-.04}:{a0:-(e.w-.24),a1:e.w-.24,y0:e.beltY+.07,y1:e.roofY-.1}}function Sh(e,t,n,r){let i=(e,r,i,a)=>{let o=-1/0;for(let t of n){let n=t.attributes.position,s=t.attributes.normal;for(let t=0;t<n.count;t++){let c=n.getX(t);if(c>.3&&c>o&&(!s||s.getX(t)>.4)){let s=n.getY(t),l=n.getZ(t);l>=e&&l<=r&&s>=i&&s<=a&&(o=c)}}}return o>-1/0?o:t.w},a=[];for(let n of r){let r=Np[n.b];if(!r)continue;let o=xh(t,n.z),s=Math.max(.04,Math.min(.6,n.s||.08)),c=s*r.aspect,l=o.a1-o.a0,u=Math.min(c/2,l/2),d=Math.min(s/2,(o.y1-o.y0)/2),f=o.a0+u+(l-2*u)*Math.min(1,Math.max(0,n.u)),p=o.y0+d+(o.y1-o.y0-2*d)*Math.min(1,Math.max(0,n.v)),m=Ip(n.b);if(n.z===`win`){let n=qm(m,c,s,new Q(-f,p,t.cabRearZ+.004),[0,Math.PI,0]);e.add(n),a.push(n.material);continue}let h=i(f-c/2,f+c/2,p-s/2,p+s/2)+.012;for(let t of n.side===`left`?[1]:n.side===`right`?[-1]:[1,-1]){let n=qm(m,c,s,new Q(t*h,p,f),[0,t*Math.PI/2,0]);n.renderOrder=3,e.add(n),a.push(n.material)}}return a}function Ch(e,t=7,n=``,r=1){let i=e.cgHeight?e:Jd(e),a=i.build,o=i.cls===`trophy`,s=i.platform,c={...Wm()},l={...Qm[a.livery%Qm.length],...a.colors||{}},u=Vp(i);u.singleWindow=s.cab===`ext`;let d=Xp(u,l,r*31+a.livery);c.paint=new oo({color:16777215,map:d.paint,bumpMap:d.bump,bumpScale:2.2,alphaTest:.5,metalness:.3,roughness:.36,clearcoat:1,clearcoatRoughness:.12,side:0,envMapIntensity:1.2}),c.solidPaint=new oo({color:new q(l.primary),metalness:.3,roughness:.36,clearcoat:1,clearcoatRoughness:.12,side:2}),c.tailEmit=new ao({color:3145728,emissive:16715792,emissiveIntensity:.6,roughness:.3}),c.amberEmit=new ao({color:4202496,emissive:16747024,emissiveIntensity:1.6,roughness:.3});let f=new Tn,p=new Tn;p.position.y=-i.cgHeight,f.add(p);let m=qp(u),h=Jp(u,u.rockerY+.34),g=()=>{let e=new ao({color:16777215,map:d.paint,alphaTest:.5,side:1,roughness:.9});return e.onBeforeCompile=e=>{e.uniforms.uArch={value:u.arches.map(e=>new K(e.zc,e.yc,e.R))},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vBodyPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vBodyPos = position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vBodyPos; uniform vec3 uArch[2];`).replace(`#include <color_fragment>`,`#include <color_fragment>
          float archM = 0.0;
          for (int i = 0; i < 2; i++) { float d = length(vec2(vBodyPos.z - uArch[i].x, vBodyPos.y - uArch[i].y)); archM = max(archM, 1.0 - smoothstep(uArch[i].z * 1.0, uArch[i].z * 1.9, d)); }
          diffuseColor.rgb *= mix(0.055, 0.5, archM);`)},e},_=[c.paint],v=[];for(let[e]of[[m.cab],[h]]){let t=new Y(e,c.paint);t.castShadow=!0,t.receiveShadow=!0,p.add(t),v.push(t);let n=new Y(e,g());p.add(n),_.push(n.material)}let y=new Y(m.cab,new oo({color:661022,roughness:.05,transparent:!0,opacity:.52,alphaMap:d.mask,depthWrite:!1,side:2,envMapIntensity:1.8}));y.renderOrder=5,p.add(y),_.push(y.material);let b=new Kf;gh(b,i,u,c,p,m);let x={...c,paint:c.solidPaint},S=b.build(x,{});p.add(S);let C=[`kcFace`,`bdGuardBlack`,`bdGuardAmber`,`bdGuardClear`],w=S.children.filter(e=>C.includes(e.name)),T=Fm[s.fascia],E=null;if(T){let e=bm(u,T,{primary:l.primary,stockBumper:a.bumper===`stock`,cut:a.bumper===`prerunner`,srcHoodF:s.prof&&s.prof.hoodF,srcHalfW:s.wid*.0254/2-(s.wide?.1:0)-.02});p.add(e.mesh),_.push(e.mat),E=e.mat;let t=xm(u,e,c.solidPaint);p.add(t)}else{let e=u.w*(1-(.05+u.round*.05)),t=u.rockerY+.13,n=u.hoodFY+.03,r=new Ga(e*2,n-t,40,4),i=r.attributes.position;for(let r=0;r<i.count;r++){let a=i.getX(r)/e,o=i.getY(r)/((n-t)/2);i.setZ(r,.11*(1-a*a)*(1-.85*Math.max(0,o)**2));let s=t+(o*.5+.5)*(n-t);i.setX(r,i.getX(r)*(1+.012*Math.sin(Math.min(1,Math.max(0,(s-u.rockerY)/(u.hoodFY-u.rockerY)))*Math.PI)))}r.computeVertexNormals(),E=new ao({map:Qp(s.fascia,l.primary,`color`),emissiveMap:Qp(s.fascia,l.primary,`emit`),emissive:16777215,emissiveIntensity:1.5,roughness:.3,metalness:.25});let a=new Y(r,E);a.position.set(0,(t+n)/2,u.noseZ),a.castShadow=!0,p.add(a);{let t=.05+u.round*.13,r=e-.01-t,i=[],a=[],o=u.prof&&u.prof.droop!=null?u.prof.droop:.05,s=e=>{let n=Math.abs(e);if(n<=r)return u.hoodFY+t+.035*Math.sin((1-n/r)*Math.PI/2)-o;let i=Math.acos(Math.min(1,(n-r)/t));return u.hoodFY+t*Math.sin(i)-o};for(let t=0;t<=48;t++){let r=(-1+2*t/48)*e,o=r/e;if(i.push(r,n-.014,u.noseZ+.0165*(1-o*o),r,Math.max(n-.014,s(r))+.004,u.noseZ+.001),t<48){let e=t*2;a.push(e,e+1,e+2,e+1,e+3,e+2)}}let l=new Dr;l.setAttribute(`position`,new J(i,3)),l.setIndex(a),l.computeVertexNormals();let d=new Y(l,c.solidPaint);d.castShadow=!0,d.receiveShadow=!0,p.add(d)}}let D=null,O=!o&&Hm[s.fascia];if(O){let e=e=>O.draw(e);e.corner=.05;let t=bm(u,e,{primary:l.primary,rear:!0});t.mesh.material.emissiveIntensity=.35,p.add(t.mesh),_.push(t.mat),D=t.mat}let k=new Y(new Ga(u.w*2-.34,(u.beltY-u.rockerY-.12)*.86),new ao({map:$p(s.tail,l.primary),roughness:.4}));k.position.set(0,u.rockerY+.12+(u.beltY-u.rockerY-.12)*.5,u.tailZ-.007),k.rotation.y=Math.PI,!o&&!O&&p.add(k);let A=tp(t,{primary:l.primary,accent:l.accent,cls:o?`TROPHY TRUCK`:`PRE-RUNNER`}),ee=(u.cowlZ+u.cabRearZ)/2+.08,j=u.beltY-.28;for(let e of[1,-1]){let t=qm(A,.46,.46,new Q(e*(u.w+.018),j,ee),[0,e*Math.PI/2,0]);p.add(t),_.push(t.material)}p.add(qm(A,.46,.46,new Q(0,u.roofY+.042,(u.roofFrontZ+u.roofRearZ)/2),[-Math.PI/2,0,0]));let M=new Tn;M.name=`decals`,p.add(M);let N=Sh(M,u,[m.cab,h],bh(a,i));_.push(...N),p.children.forEach(e=>{e.name===`decal`&&(e.renderOrder=3)});let P=[];for(let e=0;e<4;e++){let t=ih(i,c);p.add(t.steerG),e%2&&(t.flipG.rotation.y=Math.PI),P.push(t)}let F=new ms,te=new Q(0,-1,0),I=(e,t)=>{f.updateMatrixWorld(!0);let n=1/0;for(let[r,i]of[[0,0],[.1,0],[-.1,0],[0,.12],[0,-.12]]){F.set(p.localToWorld(new Q(e+r,5,t+i)),te);let a=F.intersectObjects(v,!1);a.length&&(n=Math.min(n,p.worldToLocal(a[0].point.clone()).y))}return isFinite(n)?n:u.hoodFY},ne=pm(p,c,i,u,I),re=a.flag&&a.flag!==`none`?gm(p,c,a.flag,new Q(u.w-.16,u.beltY+.015,u.tailZ+.1),l,t):null,L=new Tn;p.add(L);let R=.4,z=u.rockerY+.12,B=u.cowlZ-1,V=new Q(R,z+.82,B+.12),ie=new Q(R,z+.8,B-.02),ae=new Q(R,u.beltY+.04,u.cowlZ-.2),oe=new Tn;oe.position.set(R,u.beltY-.12,u.cowlZ-.5),oe.rotation.x=.55;let se=new Tn;oe.add(se),se.add(new Y(new qa(.17,.019,8,28),new ao({color:921104,roughness:.6})));let ce=new Y(new Ci(.05,.05,.03,14),c.black);ce.rotation.x=Math.PI/2,se.add(ce);for(let e=0;e<3;e++){let t=new Y(new bi(.17,.02,.014),c.black),n=e/3*Math.PI*2+Math.PI/2;t.position.set(Math.cos(n)*.085,Math.sin(n)*.085,0),t.rotation.z=n,se.add(t)}let le=new Y(new bi(.02,.035,.02),new zr({color:16719904}));le.position.set(0,.17,0),se.add(le);let ue=new ao({color:1579292,roughness:.8}),de=new Y(new Ka(.042,8,6),ue),fe=de.clone();de.position.set(.17,0,.01),fe.position.set(-.17,0,.01),se.add(de,fe),L.add(oe);let pe=Jm(),me=new Y(new Ga(.32,.16),new zr({map:pe.tex,toneMapped:!1}));me.position.copy(ae);{let e=new Q().subVectors(V,ae);me.rotation.order=`YXZ`,me.rotation.y=Math.atan2(e.x,e.z),me.rotation.x=-Math.atan2(e.y,Math.hypot(e.x,e.z))}L.add(me);let he=new Q,ge=new Q,_e=new Q(.6000000000000001,ie.y-.25,ie.z-.04),ve=new Q(.2,ie.y-.25,ie.z-.04),ye=mp({livery:l,number:t,headC:ie,eyeX:R,floorY:z,seatZ:B,roofY:u.roofY,shoulderL:_e,shoulderR:ve,glove:ue}),be=ye.group,xe=ye.head;L.add(be);let Se=c.tailEmit,Ce=()=>{E.emissiveIntensity=Xm?4.8:T?.3:1.5,c.amberEmit.emissiveIntensity=Xm?4.5:1.6,re&&re.setNight(Xm)},we=[];p.traverse(e=>{e.userData&&e.userData.rig&&we.push(e)});let Te=0,Ee=new jr,De=new jr;return Ce(),{root:f,body:p,wheels:P,cockpit:L,spec:i,livery:l,number:t,L:u,shell:m,rig:ne,ceil:I,whip:re,eye:V.clone().add(new Q(0,-i.cgHeight,0)),gauge:{gauge:pe,mesh:me},driver:be,helmet:xe,hood:new Q(0,u.hoodFY+.62-i.cgHeight,u.noseZ-.8),bumper:new Q(0,u.rockerY+.36-i.cgHeight,u.noseZ+.2),lodDetail:!0,applyNight:Ce,hasCovers:w.length>0,setCovers(e){w.forEach(t=>{t.visible=e})},setDecals(e){for(let e of M.children)e.geometry.dispose(),e.material.dispose();M.clear();for(let e of N){let t=_.indexOf(e);t>=0&&_.splice(t,1)}if(N=Sh(M,u,[m.cab,h],e),_.push(...N),Te)for(let e of N)e.clippingPlanes=[Ee]},setFirstPerson(e){ye.upper.visible=!e},setCutaway(e){if(e!==Te){Te=e;for(let t of _)t.clippingPlanes=e?[Ee]:null,t.needsUpdate=!0}},setDetail(e){e!==this.lodDetail&&(this.lodDetail=e,L.visible=e,we.forEach(t=>{t.visible=e}))},update(e,t,n,r=!0){e.getRenderPose(t,f.position,f.quaternion),Te&&(f.updateMatrixWorld(!0),De.set(he.set(-Te,0,0),.5),Ee.copy(De).applyMatrix4(p.matrixWorld));let a=Math.atan2(e.wheels[3].visLen-e.wheels[2].visLen,2*i.rear.x);for(let t=0;t<4;t++){let n=e.wheels[t],r=P[t],o=n.lx>0;r.steerG.position.set(n.lx,n.c.mountY+i.cgHeight-n.visLen,n.lz),r.steerG.rotation.y=n.steer,t>=2&&(r.steerG.rotation.z=-a),r.spinG.rotation.x=o?n.angle:-n.angle}this.lodDetail&&(ne.update(e),re&&re.update(e),se.rotation.z=-e.steerAng*4.2,de.getWorldPosition(he),p.worldToLocal(he),fe.getWorldPosition(ge),p.worldToLocal(ge),ye.update(he,ge,e.steerAng||0,1/60)),Se.emissiveIntensity=n?8:Xm?2.4:.6,D&&(D.emissiveIntensity=n?4.5:Xm?1.8:.35)}}}var wh={warm:16771517,clear:15988735,amber:16757575,kc:16768906},Th=class{constructor(e){this.scene=e,this.active=!1,this.beams=[],this.q=new Et,this._p=new K,this._f=new K,this.build=null,this.coversOn=!1}configure(e){this.build=e;for(let e of this.beams)this.scene.remove(e.light),this.scene.remove(e.light.target),e.light.dispose();if(this.beams=[],!this.active||!e)return;let t=e.lights===`baja`?e.lens===`amber`?wh.amber:wh.clear:wh.warm,n=(e,t,n,r,i,a,o,s)=>{let c=new Wo(t,n,a,r,i,1);c.castShadow=!1,this.scene.add(c),this.scene.add(c.target),this.beams.push({name:e,light:c,local:o,pitch:s,base:n,color:t,tint:e!==`head`})};n(`head`,wh.warm,55,.52,.75,150,`head`,-.05),e.roofBar&&n(`roof`,t,90+e.roofBar*2.2,.17,.5,340,`roof`,-.012),e.bumperBar&&n(`bumper`,t,40+e.bumperBar*1.6,.58,.65,140,`bumper`,-.07),e.pods&&n(`pods`,t,46,.46,.6,170,`pods`,-.03),this.applyCovers()}setCovers(e){this.coversOn=e,this.applyCovers()}applyCovers(){let e=this.build;if(!e)return;let t=e.lights===`baja`;for(let n of this.beams){let r=1,i=n.color;n.tint&&this.coversOn&&(t?e.bdCover===`black`?r=0:e.bdCover===`amber`?(r=.72,i=16754726):r=.93:r=0),n.light.color.setHex(i),n.light.intensity=n.base*r,n.light.visible=r>.001}}setActive(e){if(e!==this.active){if(this.active=e,e)this.configure(this.build);else{for(let e of this.beams)this.scene.remove(e.light),this.scene.remove(e.light.target),e.light.dispose();this.beams=[]}}}update(e,t){if(!this.active||!this.beams.length)return;let n=t.L,r=e.spec.cgHeight;this.q.copy(e.quat),this._f.set(0,0,1).applyQuaternion(this.q);for(let t of this.beams){let i=t.local===`head`?[0,n.hoodFY-r+.06,n.noseZ+.3]:t.local===`roof`?[0,n.roofY-r+.2,n.roofFrontZ+.1]:t.local===`bumper`?[0,n.rockerY-r+.3,n.noseZ+.4]:[0,n.beltY-r+.14,n.cowlZ+.3];this._p.set(i[0],i[1],i[2]).applyQuaternion(this.q).add(e.pos),t.light.position.copy(this._p),t.light.target.position.copy(this._p).addScaledVector(this._f,60),t.light.target.position.y+=60*t.pitch,t.light.target.updateMatrixWorld()}}},Eh=[`#c8141e`,`#e8661c`,`#f09a10`,`#f2c814`,`#18a548`,`#0f5a3a`,`#35b6e8`,`#1a46c9`,`#0b2a6b`,`#6a2bd0`,`#8a3b1a`,`#e8d4a8`,`#f4f1ea`,`#9aa0a6`,`#2a2d33`,`#0d0d0e`],Dh=[[`primary`,`Main colour`],[`secondary`,`Stripe`],[`accent`,`Rocker / lower`]],Oh=[`factory`,`fox20`,`fox25`,`foxIbp25`,`foxIbp30`,`foxLive25`,`foxLive31`,`king25`,`king30`,`king35`,`fox35`],kh=[`king30`,`king35`,`foxIbp30`,`foxLive31`,`fox35`],Ah=e=>`#`+e.toString(16).padStart(6,`0`),jh=class{constructor(e){this.g=e,this.tab=`truck`,this.dSel=0,this.root=document.getElementById(`garage`),this.body=document.getElementById(`garBody`),this.tabs=document.getElementById(`garTabs`),this.stats=document.getElementById(`garStats`),this.tabs.addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(this.tab=t.dataset.t,this.render())}),this.body.addEventListener(`click`,e=>{let t=e.target.closest(`[data-k]`);if(!t)return;let n=t.dataset.v;n===`true`?n=!0:n===`false`?n=!1:!isNaN(+n)&&n!==``&&(n=+n),this.set(t.dataset.k,n)}),this.body.addEventListener(`change`,e=>{let t=e.target.closest(`input[data-k]`);t&&(t.type===`range`?this.g.saveSettings():this.set(t.dataset.k,t.value))}),this.body.addEventListener(`input`,e=>{let t=e.target.closest(`input[type=range][data-d]`);if(!t)return;let n=this.decals()[this.dSel];if(!n)return;n[t.dataset.d]=+t.value,this.g.player.model.setDecals(this.decals());let r=t.parentElement.querySelector(`output`);r&&(r.textContent=this.fmt(t.dataset.d,+t.value))}),document.getElementById(`garDone`).addEventListener(`click`,()=>this.close()),document.getElementById(`garReset`).addEventListener(`click`,()=>{this.g.resetBuild(),this.render()})}get build(){return this.g.cfg.builds[this.g.cfg.vehicle]}set(e,t){let n=this.build;if(e===`covers`)this.g.setCovers(!!t),this.render();else{if(e===`livery`)n.livery=t,delete n.colors;else if(e.startsWith(`col.`))n.colors={...this.colours(),[e.slice(4)]:String(t)};else if(e===`num`){let e=Math.round(+String(t).replace(/[^0-9]/g,``));if(!(e>=1&&e<=999)){this.render();return}n.num=e}else if(/^d[A-Z]/.test(e)){this.editDecal(e,t);return}else n[e]=t;this.g.applyBuild(),this.render()}}decals(){let e=this.build;return Array.isArray(e.decals)||(e.decals=bh(e,Jd(e)).map(e=>({...e}))),e.decals}fmt(e,t){return e===`s`?Math.round(t*100)+` cm`:Math.round(t*100)+`%`}editDecal(e,t){let n=this.build,r=e===`dReset`?null:this.decals(),i=r&&r[this.dSel];e===`dReset`?(delete n.decals,this.dSel=0):e===`dClear`?(n.decals=[],this.dSel=0):e===`dAdd`?(r.push({b:t,z:`door`,u:.5,v:.5,s:.12,side:`both`}),this.dSel=r.length-1):e===`dSel`?this.dSel=t:e===`dDel`&&i?(r.splice(this.dSel,1),this.dSel=Math.max(0,this.dSel-1)):i&&e===`dBrand`?i.b=t:i&&e===`dZone`?(i.z=t,t===`win`&&i.s<.12&&(i.s=.16)):i&&e===`dSide`&&(i.side=t),this.g.player.model.setDecals(bh(n,Jd(n))),this.g.saveSettings(),this.render()}colours(){let e=this.build,t=Qm[e.livery%Qm.length];return{primary:t.primary,secondary:t.secondary,accent:t.accent,...e.colors||{}}}open(){this.root.classList.remove(`hidden`),document.getElementById(`menu`).classList.add(`hidden`),this.render()}close(){this.root.classList.add(`hidden`),document.getElementById(`menu`).classList.remove(`hidden`),this.g.refreshMenu()}opt(e,t,n,r=``,i=``){return`<button class="opt${String(e===`covers`?this.g.coversOn:this.build[e])===String(t)?` sel`:``}" data-k="${e}" data-v="${t}"><b>${n}</b>${r?`<i>${r}</i>`:``}${i}</button>`}group(e,t){return`<h3>${e}</h3><div class="opts">${t}</div>`}render(){let e=this.build,t=e.cls===`trophy`,n=[[`truck`,t?`Body`:`Truck`],[`susp`,`Suspension`],[`glass`,`Fiberglass`],[`lights`,`Lights`],[`wheels`,`Wheels`],[`bed`,t?`Rear rack`:`Bed`],[`paint`,`Paint`],[`decals`,`Decals`]];this.tabs.innerHTML=n.map(([e,t])=>`<button data-t="${e}" class="${this.tab===e?`sel`:``}">${t}</button>`).join(``);let r=``;if(this.tab===`truck`)for(let e of Dd)r+=this.group(e.id,e.keys.map(e=>{let n=Td[e];return this.opt(`platform`,e,`${n.model} ${n.gen}`,t?`${n.make} body on tube chassis`:`${n.years}, ${n.hp} hp, ${n.front===`ttb`?`Twin Traction Beam`:n.front===`torsion`?`torsion IFS`:`coil IFS`} / ${n.rear===`leaf`?`leaf`:`coil link`} rear`)}).join(``));if(this.tab===`susp`&&(r+=this.group(`Shocks`,(t?kh:Oh).map(t=>{if(t===`factory`){let n=jd[Td[e.platform].shock||`oem`];return this.opt(`shock`,t,`Factory shocks`,n.name)}let n=jd[t];return this.opt(`shock`,t,n.name,n.blurb,`<u class="dot" style="background:${Ah(n.body)};box-shadow:6px 0 0 ${Ah(n.ring)},12px 0 0 ${Ah(n.spring)}"></u>`)}).join(``)),r+=t?`<p class="note">Trophy trucks run A-arms up front and a 4-link solid axle out back, about 26" and 33" of travel, with a coilover, a bypass and a hydraulic bump stop at each corner.</p>`:this.group(`Arms & travel`,Object.keys(Md).map(e=>this.opt(`travel`,e,Md[e].name,Md[e].blurb)).join(``))),this.tab===`glass`&&(r+=this.group(`Front fenders`,Object.keys(Nd).filter(e=>!t||e.startsWith(`glass`)).map(e=>this.opt(`fenders`,e,Nd[e].name)).join(``)),r+=this.group(`Bedsides`,Object.keys(Pd).filter(e=>!t||e!==`stock`).map(e=>this.opt(`bedsides`,e,Pd[e].name)).join(``)),r+=this.group(`Hood`,Object.keys(Fd).map(e=>this.opt(`hood`,e,Fd[e].name)).join(``)),r+=this.group(`Front bumper`,Object.keys(Id).map(e=>this.opt(`bumper`,e,Id[e].name)).join(``))),this.tab===`lights`&&(r+=this.group(`Light brand (every slot)`,Object.keys(Bd).map(e=>this.opt(`lights`,e,Bd[e].name,Bd[e].blurb)).join(``)),r+=this.group(`Light covers`,this.opt(`covers`,!0,`Covers on`,e.lights===`baja`?`Snap the rock guards on`:`Yellow KC covers on`)+this.opt(`covers`,!1,`Covers off`,`Bare lenses (they come off by themselves on the night map)`)),e.lights===`baja`&&(r+=this.group(`Baja Designs lens`,Object.keys(Rd).map(e=>this.opt(`lens`,e,Rd[e].name)).join(``)),r+=this.group(`Baja Designs rock guards`,Object.keys(Ld).map(e=>this.opt(`bdCover`,e,Ld[e].name,Ld[e].blurb)).join(``))),r+=this.group(`Roof light bar`,[0,30,40,50].map(e=>this.opt(`roofBar`,e,e?e+`"`:`None`)).join(``)),r+=this.group(`Bumper light bar`,[0,20,30,40].map(e=>this.opt(`bumperBar`,e,e?e+`"`:`None`)).join(``)),r+=this.group(`A-pillar pods`,this.opt(`pods`,!0,`Fitted`)+this.opt(`pods`,!1,`None`)),r+=this.group(`Amber chase lights (rear)`,this.opt(`chase`,!0,`Fitted`)+this.opt(`chase`,!1,`None`))),this.tab===`wheels`&&(r+=this.group(`KMC wheels`,Object.keys(Hd).map(e=>this.opt(`rim`,e,Hd[e].name)).join(``)),r+=this.group(`Finish`,Object.keys(Ud).map(e=>this.opt(`finish`,e,Ud[e].name,``,`<u class="dot" style="background:${Ah(Ud[e].col)}"></u>`)).join(``)),r+=this.group(`Tire`,Object.keys(Wd).map(e=>this.opt(`tire`,e,Wd[e].name)).join(``)),r+=this.group(`Tire size`,Gd.map(e=>this.opt(`size`,e,e+`"`)).join(``))),this.tab===`bed`&&(r+=this.group(t?`Rear rack`:`Bed`,Object.keys(Vd).map(e=>this.opt(`bed`,e,Vd[e].name,Vd[e].lb?`+${Vd[e].lb} lb over the rear axle`:``)).join(``)),r+=this.group(`Whip flag (bed mount)`,Object.keys(zd).map(e=>this.opt(`flag`,e,zd[e].name)).join(``))),this.tab===`paint`){let t=this.colours(),n=!!e.colors;r+=`<h3>Race number</h3><div class="numrow"><input class="num" data-k="num" type="text" inputmode="numeric" maxlength="3" value="${e.num||47}"><span class="note">On both doors and the roof. 1 to 999.</span></div>`;for(let[e,n]of Dh)r+=`<h3>${n}</h3><div class="pal">${Eh.map(n=>`<button data-k="col.${e}" data-v="${n}" class="${t[e].toLowerCase()===n?`sel`:``}" style="background:${n}" title="${n}"></button>`).join(``)}<label class="pick" style="background:${t[e]}" title="Any colour"><input type="color" data-k="col.${e}" value="${t[e]}"></label></div>`;r+=this.group(`Colour presets`+(n?` (custom colours in use)`:``),Qm.map((e,t)=>this.opt(`livery`,t,e.name,``,`<u class="dot" style="background:${e.primary};box-shadow:6px 0 0 ${e.secondary}"></u>`)).map(e=>n?e.replace(` sel"`,`"`):e).join(``))}if(this.tab===`decals`){let t=bh(e,Jd(e)),n=!Array.isArray(e.decals);this.dSel>=t.length&&(this.dSel=Math.max(0,t.length-1));let i=(e,t,n,r)=>`<button class="${r?`sel`:``}" data-k="${e}" data-v="${t}">${n}</button>`;r+=`<h3>Add a decal</h3><div class="chips">${Object.keys(Np).map(e=>i(`dAdd`,e,`+ `+Np[e].name,!1)).join(``)}</div>`,r+=`<h3>On the truck${n?` (matching your parts)`:``}</h3>`,r+=t.length?`<div class="dlist">${t.map((e,t)=>`<button class="${t===this.dSel?`sel`:``}" data-k="dSel" data-v="${t}"><b>${Np[e.b]?Np[e.b].name:e.b}</b><i>${yh[e.z]}${e.z===`win`?``:e.side===`both`?`, both sides`:`, `+e.side+` side`}</i></button>`).join(``)}</div>`:`<p class="note">No decals. Add one above.</p>`;let a=t[this.dSel];if(a){let e=(e,t,n,r,i)=>`<div class="slider"><label>${t}</label><input type="range" data-d="${e}" min="${n}" max="${r}" step="${i}" value="${a[e]}"><output>${this.fmt(e,a[e])}</output></div>`;r+=`<h3>Edit: ${Np[a.b]?Np[a.b].name:a.b}</h3><div class="spec">`,r+=`<label>Logo</label><div class="seg wrap">${Object.keys(Np).map(e=>i(`dBrand`,e,Np[e].name.split(` `)[0],a.b===e)).join(``)}</div>`,r+=`<label>Place</label><div class="seg">${Object.keys(yh).map(e=>i(`dZone`,e,yh[e],a.z===e)).join(``)}</div>`,a.z!==`win`&&(r+=`<label>Side</label><div class="seg">${i(`dSide`,`both`,`Both`,a.side===`both`)}${i(`dSide`,`left`,`Left`,a.side===`left`)}${i(`dSide`,`right`,`Right`,a.side===`right`)}</div>`),r+=`</div>`,r+=e(`u`,a.z===`win`?`Left / right`:`Rear / front`,0,1,.005)+e(`v`,`Down / up`,0,1,.005)+e(`s`,`Size`,.04,a.z===`win`?.4:.32,.005),r+=`<div class="drow"><button class="ghost" data-k="dDel" data-v="1">Remove this decal</button></div>`}r+=`<div class="drow"><button class="link" data-k="dReset" data-v="1">Reset to my parts</button><button class="link" data-k="dClear" data-v="1">Remove all</button></div>`}this.body.innerHTML=r;let i=Jd(e),a=Xd(i),o=(e,t)=>`<div class="stat"><span>${e}</span><u style="--w:${Math.round(t*100)}%"></u></div>`;this.stats.innerHTML=`<b>${qd(e)}</b><i>${Math.round(i.mass/.4536)} lb, ${a.tF.toFixed(0)}" front and ${a.tR.toFixed(0)}" rear travel, ${e.size}" ${Wd[e.tire].name.toLowerCase()}</i>${o(`Power/weight`,a.power)}${o(`Travel`,a.travel)}${o(`Damping`,a.damping)}`}},Mh=64,Nh=128,Ph=5;function Fh(t=512){let n=new Uint8Array(t*t*4),r=(e,t,n,r)=>ju((e%n+n)%n,(t%n+n)%n,r),i=(e,t,n,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o;s=s*s*s*(s*(s*6-15)+10),c=c*c*c*(c*(c*6-15)+10);let l=r(a,o,n,i),u=r(a+1,o,n,i),d=r(a,o+1,n,i),f=r(a+1,o+1,n,i);return(l*(1-s)+u*s)*(1-c)+(d*(1-s)+f*s)*c},a=(e,t,n,r,a)=>{let o=.5,s=0,c=0,l=n;for(let n=0;n<r;n++)s+=o*i(e*l,t*l,l,a+n*13),c+=o,o*=.55,l*=2;return s/c};for(let e=0;e<t;e++)for(let r=0;r<t;r++){let i=r/t,o=e/t,s=(e*t+r)*4,c=a(i,o,16,5,1),l=a(i,o,4,4,100),u=(1-Math.abs(a(i,o,8,3,200)*2-1))**3,d=a(i,o,32,2,300);n[s]=Math.min(255,c*255*1.15),n[s+1]=Math.min(255,l*255*1.15),n[s+2]=u*255,n[s+3]=d*255}let s=new $r(n,t,t,w);return s.wrapS=s.wrapT=e,s.magFilter=o,s.minFilter=c,s.generateMipmaps=!0,s.anisotropy=8,s.needsUpdate=!0,s}function Ih(e){let t=new ao({color:16777215,roughness:.96,metalness:0,side:2});return t.userData.uniforms={tNoise:{value:e},uSun:{value:new K(.5,.6,.3)},uWet:{value:0},uSandy:{value:0}},t.onBeforeCompile=e=>{Object.assign(e.uniforms,t.userData.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute vec4 aInfo; varying vec4 vInfo; varying vec3 vWPos; varying vec3 vWN;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vInfo = aInfo; vWPos = position; vWN = normal;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D tNoise; uniform vec3 uSun; uniform float uSandy;
        varying vec4 vInfo; varying vec3 vWPos; varying vec3 vWN;
        float gN1, gN2, gN3, gN4, gN5, gRidge;
        vec3 perturbDetail(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
          vec3 vSigmaX = normalize(dFdx(surf_pos));
          vec3 vSigmaY = normalize(dFdy(surf_pos));
          vec3 R1 = cross(vSigmaY, surf_norm);
          vec3 R2 = cross(surf_norm, vSigmaX);
          float fDet = dot(vSigmaX, R1);
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          return normalize(abs(fDet) * surf_norm - vGrad);
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          vec2 p = vWPos.xz;
          gN1 = texture2D(tNoise, p * 0.0031).g;
          gN2 = texture2D(tNoise, p * 0.017 + 0.37).g;
          gN3 = texture2D(tNoise, p * 0.083).r;
          gN4 = texture2D(tNoise, p * 0.71).r;
          gN5 = texture2D(tNoise, p * 2.9).r;
          gRidge = texture2D(tNoise, p * 0.23).b;
          float nrmY = clamp(vWN.y, 0.0, 1.0);
          float slope = 1.0 - nrmY;
          // base desert palette (authored in sRGB, converted below)
          vec3 sandA = vec3(0.80, 0.64, 0.43);
          vec3 sandB = vec3(0.71, 0.53, 0.34);
          vec3 redDirt = vec3(0.62, 0.37, 0.22);
          vec3 dust = vec3(0.88, 0.76, 0.58);
          vec3 col = mix(sandA, sandB, smoothstep(0.25, 0.75, gN1));
          col = mix(col, redDirt, smoothstep(0.52, 0.82, gN2) * 0.5);
          col = mix(col, dust, smoothstep(0.45, 0.9, gN3) * 0.28);
          // rock (biome + steep slopes), with strata banding
          float rockMask = clamp(vInfo.y + smoothstep(0.26, 0.5, slope), 0.0, 1.0);
          float band = sin(vWPos.y * 2.3 + gN2 * 7.0 + gN3 * 2.0) * 0.5 + 0.5;
          float band2 = sin(vWPos.y * 0.7 + gN1 * 5.0) * 0.5 + 0.5;
          float vd = length(vViewPosition);
          float strataFade = 1.0 - smoothstep(120.0, 700.0, vd);
          band = mix(0.5, band, strataFade);
          band2 = mix(0.5, band2, 1.0 - smoothstep(400.0, 2500.0, vd));
          vec3 rockCol = mix(vec3(0.33, 0.24, 0.19), vec3(0.60, 0.42, 0.30), band);
          rockCol = mix(rockCol, vec3(0.45, 0.30, 0.24), band2 * 0.5);
          rockCol *= 0.72 + 0.5 * gN4 + 0.25 * gRidge;
          float rm = smoothstep(0.3, 0.62, rockMask + (gN3 - 0.5) * 0.55);
          col = mix(col, rockCol, rm);
          // dune sand: lighter, smoother
          col = mix(col, vec3(0.90, 0.74, 0.52), vInfo.z * 0.55 * (1.0 - rm));
          // sand sea: pale golden sand with wind ripples, packed a touch darker where the race line runs
          col = mix(col, vec3(0.95, 0.80, 0.56) * (0.9 + 0.2 * smoothstep(0.35, 0.75, gN4)), uSandy * 0.78 * (1.0 - rm));
          // dry wash gravel
          vec3 gravel = vec3(0.78, 0.71, 0.60) * (0.8 + 0.4 * gN4);
          col = mix(col, gravel, clamp(vInfo.w * (0.55 + 0.4 * gRidge), 0.0, 1.0) * (1.0 - rm));
          // race line: packed, darker, with tyre grooves and loose edges
          float al = abs(vInfo.x);
          float roadW = 1.0 - smoothstep(${(Bu-1.2).toFixed(1)}, ${(Bu+1.6).toFixed(1)}, al);
          float rut = exp(-pow((al - 2.4) / 0.55, 2.0)) + 0.65 * exp(-pow((al - 5.7) / 0.75, 2.0)) + 0.35 * exp(-pow((al - 8.2) / 0.9, 2.0));
          vec3 roadCol = vec3(0.56, 0.41, 0.29) * (0.92 + 0.16 * gN3);
          roadCol *= 1.0 - 0.20 * rut;
          roadCol = mix(roadCol, vec3(0.74, 0.62, 0.46), (1.0 - smoothstep(0.0, 1.2, al)) * 0.3 + smoothstep(7.0, 9.5, al) * 0.35);
          col = mix(col, roadCol, roadW * (1.0 - 0.5 * rm));
          // grain
          col *= 0.86 + 0.28 * gN4 * (0.6 + 0.4 * gN5);
          col *= 0.93 + 0.14 * gN2;
          diffuseColor.rgb = pow(col, vec3(2.2));
        }`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          float dist = length(vViewPosition);
          float fade = 1.0 - smoothstep(25.0, 140.0, dist);
          float fade2 = 1.0 - smoothstep(8.0, 45.0, dist);
          float h = gN4 * 0.55 + gN5 * 0.28 + gN3 * 1.1 + gRidge * 0.3 * (0.5 + vInfo.y);
          float al2 = abs(vInfo.x);
          float rut2 = exp(-pow((al2 - 2.4) / 0.55, 2.0)) * (1.0 - smoothstep(${(Bu-1.2).toFixed(1)}, ${(Bu+1).toFixed(1)}, al2));
          h -= rut2 * 0.8;
          vec2 dH = vec2(dFdx(h), dFdy(h)) * (0.55 * fade + 0.35 * fade2);
          normal = perturbDetail(-vViewPosition, normal, dH);
        }`)},t}var Lh={h:0,rock:0,dune:0,wash:0,lat:0};function Rh(e,t,n){let r=Nh*(1<<e),i=t*r,a=n*r,o=r/Mh,s=new Float32Array(4489),c=new Float32Array(16900),l=1e9,u=-1e9;for(let e=0;e<67;e++)for(let t=0;t<67;t++)if(id(i+(t-1)*o,a+(e-1)*o,Lh),s[e*67+t]=Lh.h,t>=1&&t<=65&&e>=1&&e<=65){let n=((e-1)*65+(t-1))*4;c[n]=Lh.lat,c[n+1]=Lh.rock,c[n+2]=Lh.dune,c[n+3]=Lh.wash,Lh.h<l&&(l=Lh.h),Lh.h>u&&(u=Lh.h)}let d=o*1.6+1.5+e*1.5,f=4485,p=new Float32Array(f*3),m=new Float32Array(f*3),h=new Float32Array(f*4);for(let e=0;e<65;e++)for(let t=0;t<65;t++){let n=e*65+t,r=s[(e+1)*67+(t+1)];p[n*3]=i+t*o,p[n*3+1]=r,p[n*3+2]=a+e*o;let l=s[(e+1)*67+t],u=s[(e+1)*67+t+2],d=s[e*67+t+1],f=s[(e+2)*67+t+1],g=l-u,_=2*o,v=d-f,y=Math.hypot(g,_,v);m[n*3]=g/y,m[n*3+1]=_/y,m[n*3+2]=v/y,h[n*4]=c[n*4],h[n*4+1]=c[n*4+1],h[n*4+2]=c[n*4+2],h[n*4+3]=c[n*4+3]}let g=(e,t)=>e===0?t:e===1?4160+t:e===2?t*65:t*65+64,_=4225;for(let e=0;e<4;e++)for(let t=0;t<65;t++){let n=g(e,t),r=_+e*65+t;p[r*3]=p[n*3],p[r*3+1]=p[n*3+1]-d,p[r*3+2]=p[n*3+2],m[r*3]=m[n*3],m[r*3+1]=m[n*3+1],m[r*3+2]=m[n*3+2];for(let e=0;e<4;e++)h[r*4+e]=h[n*4+e]}let v=new Uint32Array(26112),y=0;for(let e=0;e<Mh;e++)for(let t=0;t<Mh;t++){let n=e*65+t,r=n+1,i=n+65,a=i+1;v[y++]=n,v[y++]=i,v[y++]=r,v[y++]=r,v[y++]=i,v[y++]=a}let b=[[0,-1],[0,1],[-1,0],[1,0]];for(let e=0;e<4;e++)for(let t=0;t<Mh;t++){let n=g(e,t),r=g(e,t+1),i=_+e*65+t,a=_+e*65+t+1,o=p[r*3]-p[n*3],s=p[r*3+2]-p[n*3+2];-s*-1,o*-1;let c=s,l=-o;c*b[e][0]+l*b[e][1]>=0?(v[y++]=n,v[y++]=r,v[y++]=i,v[y++]=r,v[y++]=a,v[y++]=i):(v[y++]=n,v[y++]=i,v[y++]=r,v[y++]=r,v[y++]=i,v[y++]=a)}let x=new Dr;x.setAttribute(`position`,new pr(p,3)),x.setAttribute(`normal`,new pr(m,3)),x.setAttribute(`aInfo`,new pr(h,4)),x.setIndex(new pr(v,1));let S=(l+u)/2;return x.boundingSphere=new yr(new K(i+r/2,S,a+r/2),Math.hypot(r/2,r/2,(u-l)/2+d)+1),x.boundingBox=null,x}var zh=class{constructor(e,t){this.scene=e,this.material=t,this.chunks=new Map,this.group=new Tn,e.add(this.group),this.shadowLevels=1,this.splitFactor=1.35,this.maxLevel=Ph}_select(e,t){let n=[],r=this.maxLevel,i=this.splitFactor,a=Nh*(1<<r),o=Math.floor(e/a),s=Math.floor(t/a),c=(r,a,o)=>{let s=Nh*(1<<r),l=a*s,u=o*s,d=Math.max(l-e,0,e-(l+s)),f=Math.max(u-t,0,t-(u+s)),p=Math.hypot(d,f);if(r>0&&p<s*i)for(let e=0;e<4;e++)c(r-1,a*2+(e&1),o*2+(e>>1));else n.push({level:r,ix:a,iz:o,dist:p,key:r+`,`+a+`,`+o})};for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)c(r,o+t,s+e);return n}update(e,t,n=4,r=!1){let i=this._select(e,t),a=new Set(i.map(e=>e.key)),o=i.filter(e=>!this.chunks.has(e.key)).sort((e,t)=>e.level-t.level||e.dist-t.dist),s=performance.now();for(let e of o){if(!r&&performance.now()-s>n)break;let t=new Y(Rh(e.level,e.ix,e.iz),this.material);t.frustumCulled=!0,t.receiveShadow=!0,t.castShadow=e.level<this.shadowLevels,t.matrixAutoUpdate=!1,t.userData={level:e.level,ix:e.ix,iz:e.iz},this.group.add(t),this.chunks.set(e.key,t)}let c=(e,t,n)=>{for(let r of i){let i=Nh*(1<<r.level),a=r.ix*i,o=r.iz*i;if(a<t+e&&a+i>t&&o<n+e&&o+i>n&&!this.chunks.has(r.key))return!1}return!0};for(let[e,t]of this.chunks){if(a.has(e))continue;let{level:n,ix:r,iz:i}=t.userData,o=Nh*(1<<n);c(o,r*o,i*o)&&(this.group.remove(t),t.geometry.dispose(),this.chunks.delete(e))}return o.length}setShadowLevels(e){this.shadowLevels=e;for(let t of this.chunks.values())t.castShadow=t.userData.level<e}},Bh=K,Vh=(e,t,n)=>[e**2.2,t**2.2,n**2.2],Hh=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[]}get count(){return this.p.length/3}vert(e,t,n,r,i,a,o){return this.p.push(e,t,n),this.n.push(r,i,a),this.c.push(o[0],o[1],o[2]),this.count-1}tri(e,t,n){this.i.push(e,t,n)}build(){let e=new Dr;return e.setAttribute(`position`,new J(this.p,3)),e.setAttribute(`normal`,new J(this.n,3)),e.setAttribute(`color`,new J(this.c,3)),e.setIndex(this.i),e.computeBoundingSphere(),e}};function Uh(e,t,n,r,i,a={n:0,a:0}){let o=t.length,s=t.map((e,n)=>new Bh().subVectors(t[Math.min(n+1,o-1)],t[Math.max(n-1,0)]).normalize()),c=Math.abs(s[0].y)<.9?new Bh(0,1,0):new Bh(1,0,0),l=new Bh().crossVectors(s[0],c).normalize(),u=e.count;for(let c=0;c<o;c++){c>0&&l.addScaledVector(s[c],-l.dot(s[c])).normalize();let u=new Bh().crossVectors(s[c],l).normalize(),d=c/(o-1),f=n(d);for(let n=0;n<=r;n++){let o=n/r*Math.PI*2,s=l.x*Math.cos(o)+u.x*Math.sin(o),p=l.y*Math.cos(o)+u.y*Math.sin(o),m=l.z*Math.cos(o)+u.z*Math.sin(o),h=f*(1+a.a*Math.cos(a.n*o));e.vert(t[c].x+s*h,t[c].y+p*h,t[c].z+m*h,s,p,m,i(d,o))}}for(let t=0;t<o-1;t++)for(let n=0;n<r;n++){let i=u+t*(r+1)+n,a=i+1,o=i+r+1,s=o+1;e.tri(i,o,a),e.tri(a,o,s)}}function Wh(e,t,n,r,i,a,o,s,c,l,u=.28){let d=new Ua(1,1),f=d.attributes.position,p=d.index,m=e.count,h=f.count,g=[];for(let e=0;e<h;e++){let n=f.getX(e),i=f.getY(e),a=f.getZ(e),o=Math.hypot(n,i,a);n/=o,i/=o,a/=o;let s=1+l.noise2(n*3+t*7,i*3+a*5+r*3)*u;g.push([n,i,a,s])}for(let l=0;l<h;l++){let[u,d,f,p]=g[l],m=.8+.35*(d*.5+.5)+(c()-.5)*.12;e.vert(t+u*i*p,n+d*a*p,r+f*o*p,u,d,f,[s[0]*m,s[1]*m,s[2]*m])}if(p)for(let t=0;t<p.count;t+=3)e.tri(m+p.getX(t),m+p.getX(t+1),m+p.getX(t+2));else for(let t=0;t<h;t+=3)e.tri(m+t,m+t+1,m+t+2);d.dispose()}function Gh(e,t,n,r,i,a,o=.35){let s=new Bh().crossVectors(n,new Bh(0,1,0));s.lengthSq()<1e-4&&s.set(1,0,0),s.normalize();let c=new Bh().crossVectors(s,n).normalize(),l=t.clone().addScaledVector(n,r*.55),u=t.clone().addScaledVector(n,r*.95);u.y-=r*o;let d=e.vert(t.x+s.x*i,t.y+s.y*i,t.z+s.z*i,c.x,c.y,c.z,a),f=e.vert(t.x-s.x*i,t.y-s.y*i,t.z-s.z*i,c.x,c.y,c.z,a),p=e.vert(l.x+s.x*i*.8,l.y+s.y*i*.8+r*.04,l.z+s.z*i*.8,c.x,c.y,c.z,a),m=e.vert(l.x-s.x*i*.8,l.y-s.y*i*.8+r*.04,l.z-s.z*i*.8,c.x,c.y,c.z,a),h=e.vert(u.x,u.y,u.z,c.x,c.y,c.z,[a[0]*1.15,a[1]*1.1,a[2]*.9]);e.tri(d,f,p),e.tri(f,m,p),e.tri(p,m,h)}function Kh(e){let t=Au(e*977+1),n=new Hh,r=4.2+t()*2.2,i=.26+t()*.08,a=Vh(.2,.36,.16),o=Vh(.12,.25,.11),s=Vh(.3,.44,.18),c=(e,t)=>{let n=.5+.5*Math.cos(t*12);return[0,1,2].map(t=>(o[t]+(a[t]-o[t])*n)*(.92+e*.2)+(s[t]-a[t])*.25*e*e)},l=[],u=(t()-.5)*.35,d=(t()-.5)*.35;for(let e=0;e<=18;e++){let t=e/18;l.push(new Bh(u*t*t*r*.12,t*r,d*t*t*r*.12))}Uh(n,l,e=>{let t=e>.93?Math.sqrt(Math.max(0,1-((e-.93)/.07)**2)):1;return i*t*(e<.04?1+(.04-e)*6:1)},14,c,{n:12,a:.09});let f=1+Math.floor(t()*3);for(let e=0;e<f;e++){let e=r*(.3+t()*.28),a=t()*Math.PI*2,o=Math.cos(a),s=Math.sin(a),l=.65+t()*.55,f=1.2+t()*1.7,p=i*(.62+t()*.12),m=new Bh(u*.1,e,d*.1),h=new Bh(o*l*.9,e+.02,s*l*.9),g=new Bh(o*l*1.05,e+f,s*l*1.05),_=[];for(let e=0;e<=12;e++){let t=e/12,n=m.clone().multiplyScalar((1-t)*(1-t)).addScaledVector(h,2*t*(1-t)).addScaledVector(g,t*t);_.push(n)}Uh(n,_,e=>{let t=e>.9?Math.sqrt(Math.max(0,1-((e-.9)/.1)**2)):1;return p*t},10,c,{n:10,a:.08})}return n.build()}function qh(e){let t=Au(e*733+5),n=new Hh,r=Vh(.3,.24,.18),i=Vh(.34,.4,.18),a=1.8+t()*1.6,o=[];for(let e=0;e<=8;e++){let n=e/8;o.push(new Bh((t()-.5)*.03+n*n*.18,n*a,(t()-.5)*.03))}Uh(n,o,e=>.14*(1-e*.35),7,e=>[r[0]*(.8+.4*t()),r[1]*(.8+.4*t()),r[2]*(.8+.4*t())]);let s=[o[8].clone()],c=2+Math.floor(t()*3);for(let e=0;e<c;e++){let e=.55+t()*.35,i=o[Math.floor(e*8)].clone(),a=t()*Math.PI*2,c=.5+t()*.8,l=i.clone().add(new Bh(Math.cos(a)*c*.8,c*.9,Math.sin(a)*c*.8));Uh(n,[i,i.clone().lerp(l,.5).add(new Bh(0,.05,0)),l],e=>.09*(1-e*.4),6,()=>r),s.push(l)}for(let e of s)for(let r=0;r<38;r++){let r=t()*Math.PI*2,a=.15+t()*1.15,o=new Bh(Math.cos(r)*Math.cos(a),Math.sin(a),Math.sin(r)*Math.cos(a)).normalize(),s=.85+t()*.3;Gh(n,e,o,.55+t()*.3,.022,[i[0]*s,i[1]*s,i[2]*s],.25)}return n.build()}function Jh(e){let t=Au(e*311+9),n=new Iu(e+40),r=new Hh,i=[Vh(.27,.32,.17),Vh(.33,.35,.2),Vh(.38,.36,.22)],a=i[e%i.length],o=4+Math.floor(t()*2);for(let e=0;e<o;e++){let i=t()*Math.PI*2,o=e===0?0:.3+t()*.35,s=.32+t()*.28;Wh(r,Math.cos(i)*o,s*.55,Math.sin(i)*o,s*1.1,s*.8,s*1.1,a,t,n,.4)}return r.build()}function Yh(e){let t=Au(e*521+3),n=new Hh,r=Vh(.34,.29,.19),i=Vh(.62,.2,.12),a=Vh(.3,.42,.17),o=8+Math.floor(t()*4);for(let e=0;e<o;e++){let s=e/o*Math.PI*2+t()*.4,c=.12+t()*.22,l=2.4+t()*1.5,u=[];for(let e=0;e<=6;e++){let t=e/6;u.push(new Bh(Math.cos(s)*c*l*t*t*1.4,l*t,Math.sin(s)*c*l*t*t*1.4))}if(Uh(n,u,e=>.028*(1-e*.6)+.004,4,e=>e>.93?i:r),t()>.35)for(let e=0;e<9;e++){let r=.18+e*.09+t()*.03,i=u[Math.min(6,Math.floor(r*6))].clone(),o=t()*Math.PI*2;Gh(n,i,new Bh(Math.cos(o),.5,Math.sin(o)).normalize(),.09,.012,a,.2)}}return n.build()}function Xh(e,t=2){let n=Au(e*199+7),r=new Iu(e+90),i=new Ua(1,t),a=new Hh,o=i.attributes.position,s=new Map,c=[],l=[];for(let e=0;e<o.count;e++){let t=o.getX(e).toFixed(4)+`,`+o.getY(e).toFixed(4)+`,`+o.getZ(e).toFixed(4);s.has(t)||(s.set(t,c.length),c.push(new Bh(o.getX(e),o.getY(e),o.getZ(e)).normalize())),l.push(s.get(t))}let u=(e,t,n,i)=>(r.noise2(e*i,t*i)+r.noise2(t*i+5.3,n*i)+r.noise2(n*i-2.1,e*i+8))/3,d=Vh(.46,.34,.25),f=Vh(.3,.25,.22),p=Vh(.62,.5,.38),m=.85+n()*.4,h=.62+n()*.3,g=.85+n()*.4,_=[];for(let e of c){let t=1+u(e.x,e.y,e.z,1.3)*.38+u(e.x,e.y,e.z,3.1)*.16+u(e.x,e.y,e.z,7)*.05,n=.5*(Math.round(e.x*2.2)+Math.round(e.z*2.2))*.05;t+=n;let r=e.y*h*t;r<-.28&&(r=-.28+(r+.28)*.15);let i=new Bh(e.x*m*t,r,e.z*g*t);_.push(i)}let v=a.count,y=c.map(()=>new Bh);for(let e=0;e<o.count;e+=3){let t=l[e],n=l[e+1],r=l[e+2],i=new Bh().subVectors(_[n],_[t]),a=new Bh().subVectors(_[r],_[t]),o=new Bh().crossVectors(i,a);y[t].add(o),y[n].add(o),y[r].add(o)}c.forEach((e,t)=>{let r=_[t],i=y[t].normalize(),o=.5+.5*u(e.x,e.y,e.z,2.2),s=Math.max(0,i.y),c=[0,1,2].map(e=>(f[e]+(d[e]-f[e])*o)*(.82+.4*n()*.3)*(.82+.3*Math.max(0,r.y+.3))+p[e]*.12*s*s);a.vert(r.x,r.y,r.z,i.x,i.y,i.z,c)});for(let e=0;e<o.count;e+=3)a.tri(v+l[e],v+l[e+1],v+l[e+2]);return i.dispose(),a.build()}function Zh(e){let t=new ao({vertexColors:!0,roughness:.93,metalness:0});return t.onBeforeCompile=t=>{t.uniforms.tNoise={value:e},t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWP; varying vec3 vWNrm;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          #ifdef USE_INSTANCING
            wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          #endif
          vWP = wp.xyz;
        }`).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
        {
          vec3 wn = objectNormal;
          #ifdef USE_INSTANCING
            wn = mat3(instanceMatrix) * objectNormal;
          #endif
          vWNrm = normalize(mat3(modelMatrix) * wn);
        }`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
      uniform sampler2D tNoise; varying vec3 vWP; varying vec3 vWNrm;
      float triN(vec3 p, vec3 w, float s) {
        return texture2D(tNoise, p.zy * s).r * w.x + texture2D(tNoise, p.xz * s).r * w.y + texture2D(tNoise, p.xy * s).r * w.z;
      }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec3 tw = pow(abs(normalize(vWNrm)), vec3(4.0)); tw /= (tw.x + tw.y + tw.z);
        float g1 = triN(vWP, tw, 0.9), g2 = triN(vWP, tw, 3.7), g3 = triN(vWP, tw, 0.21);
        diffuseColor.rgb *= 0.72 + 0.5 * g1 + 0.25 * g2 + 0.25 * (g3 - 0.5);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          float h = g1 * 0.9 + g2 * 0.4 + g3 * 1.2;
          vec2 dH = vec2(dFdx(h), dFdy(h)) * (0.5 * (1.0 - smoothstep(10.0, 90.0, length(vViewPosition))));
          vec3 sx = normalize(dFdx(-vViewPosition)), sy = normalize(dFdy(-vViewPosition));
          vec3 R1 = cross(sy, normal), R2 = cross(normal, sx);
          float fDet = dot(sx, R1);
          normal = normalize(abs(fDet) * normal - sign(fDet) * (dH.x * R1 + dH.y * R2));
        }`)},t}var Qh=class{constructor(e,t,n=1){this.scene=e,this.group=new Tn,e.add(this.group),this.quality=n;let r=new ao({vertexColors:!0,roughness:.82,metalness:0,side:2}),i=Zh(t),a=n,o=e=>e*(.55+.45*a);this.entries=[];let s=(e,t,n,r,i,a,o=!0)=>{for(let s=0;s<t;s++){let c=new ci(n(s+1),r,a);c.count=0,c.frustumCulled=!1,c.castShadow=o,c.receiveShadow=!0,c.instanceMatrix.setUsage(Le),c.instanceColor=new ei(new Float32Array(a*3),3),c.instanceColor.setUsage(Le),this.group.add(c),this.entries.push({type:e,variant:s,variants:t,mesh:c,radius:i,capacity:a,tmpM:new Float32Array(a*16),tmpC:new Float32Array(a*3),n:0})}};s(Uu.BOULDER,4,e=>Xh(e,2),i,o(520),700),s(Uu.SAGUARO,3,Kh,r,o(380),260),s(Uu.YUCCA,3,qh,r,o(300),260),s(Uu.SHRUB,3,Jh,r,o(210),1e3,!1),s(Uu.OCOTILLO,2,Yh,r,o(260),220),s(Uu.PEBBLE,2,e=>Xh(e+20,1),i,o(80),600,!1),this.maxR=Math.max(...this.entries.map(e=>e.radius)),this.byType=new Map;for(let e of this.entries)this.byType.has(e.type)||this.byType.set(e.type,[]),this.byType.get(e.type).push(e);this.center={x:1e9,z:1e9},this.scan=null,this._m=new Xt,this._q=new Et,this._p=new Bh,this._s=new Bh,this._c=new q,this.UP=new Bh(0,1,0)}_startScan(e,t){let n=Math.ceil(this.maxR/14);this.scan={cx:e,cz:t,c0:Math.floor(e/14)-n,c1:Math.floor(e/14)+n,d0:Math.floor(t/14)-n,d1:Math.floor(t/14)+n},this.scan.ci=this.scan.c0,this.scan.cj=this.scan.d0;for(let e of this.entries)e.n=0}_place(e){let t=this.byType.get(e.type);if(!t)return;let n=t[Math.min(t.length-1,Math.floor(e.tint*t.length))],r=e.x-this.scan.cx,i=e.z-this.scan.cz;if(r*r+i*i>n.radius*n.radius||n.n>=n.capacity)return;let a=this._m,o=this._q,s=this._p,c=this._s;o.setFromAxisAngle(this.UP,e.rot);let l=e.s,u=e.s,d=e.s,f=0,p=e.tint*7.31%1,m=e.tint*13.7%1;e.type===Uu.BOULDER?(l*=.8+p*.5,d*=.8+m*.5,u*=.7+p*.5,f=-.12*e.s):e.type===Uu.PEBBLE?(u*=.6,f=-.02):e.type===Uu.SHRUB&&(u*=.9+p*.3),s.set(e.x,e.y+f,e.z),c.set(l,u,d),a.compose(s,o,c),a.toArray(n.tmpM,n.n*16);let h=.85+m*.3;(e.type===Uu.SHRUB||e.type===Uu.YUCCA||e.type===Uu.SAGUARO)&&(h=.8+p*.4),n.tmpC[n.n*3]=h,n.tmpC[n.n*3+1]=h*(.95+p*.1),n.tmpC[n.n*3+2]=h*(.92+m*.12),n.n++}_finish(){for(let e of this.entries)e.mesh.instanceMatrix.array.set(e.tmpM.subarray(0,e.n*16)),e.mesh.instanceColor.array.set(e.tmpC.subarray(0,e.n*3)),e.mesh.count=e.n,e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor.needsUpdate=!0;this.center.x=this.scan.cx,this.center.z=this.scan.cz,this.scan=null}update(e,t,n=500,r=!1){if(!this.scan){let n=e-this.center.x,i=t-this.center.z;if(n*n+i*i<2304&&!r)return;this._startScan(e,t)}let i=this.scan,a=r?1e9:n;for(;a-->0;){if(i.cj>i.d1){this._finish();return}let e=xd(i.ci,i.cj);for(let t=0;t<e.length;t++)this._place(e[t]);i.ci++,i.ci>i.c1&&(i.ci=i.c0,i.cj++)}}setQuality(e){this.quality=e;let t=t=>t*(.55+.45*e),n={[Uu.BOULDER]:520,[Uu.SAGUARO]:380,[Uu.YUCCA]:300,[Uu.SHRUB]:210,[Uu.OCOTILLO]:260,[Uu.PEBBLE]:80};for(let e of this.entries)e.radius=t(n[e.type]);this.center.x=1e9}},$h=(e,t,n)=>new q().setRGB(e,t,n,W),eg={golden:{name:`Golden Hour`,elev:17,azim:235,sunColor:[1,.7,.42],sunI:4.6,horizon:[.95,.55,.3],zenith:[.12,.26,.62],ground:[.55,.36,.22],fogDensity:19e-5,env:.85,exposure:.82,cloud:.55},noon:{name:`High Noon`,elev:63,azim:190,sunColor:[1,.93,.84],sunI:5.4,horizon:[.62,.66,.68],zenith:[.1,.3,.78],ground:[.55,.45,.34],fogDensity:16e-5,env:1,exposure:.7,cloud:.35},morning:{name:`Morning`,elev:11,azim:100,sunColor:[1,.8,.62],sunI:4,horizon:[.82,.62,.48],zenith:[.18,.34,.68],ground:[.5,.38,.28],fogDensity:23e-5,env:.8,exposure:.85,cloud:.6},night:{name:`Night Race`,elev:36,azim:150,sunColor:[.5,.64,1],sunI:.62,horizon:[.04,.055,.105],zenith:[.003,.007,.028],ground:[.02,.026,.045],fogDensity:42e-5,env:.075,exposure:1.35,cloud:.04,night:1},sunset:{name:`Sunset`,elev:4.5,azim:262,sunColor:[1,.46,.2],sunI:3.8,horizon:[.95,.34,.14],zenith:[.06,.1,.34],ground:[.4,.22,.16],fogDensity:24e-5,env:.6,exposure:.95,cloud:.7}},tg={morning:7,noon:12.5,golden:17,sunset:18.7,night:23},ng=[[0,`night`],[5,`night`],[7,`morning`],[12.5,`noon`],[17,`golden`],[18.7,`sunset`],[20.2,`night`],[24,`night`]],rg=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
    gl_Position.z = gl_Position.w * 0.99999;
  }`,ig=`
  precision highp float;
  varying vec3 vDir;
  uniform vec3 uSunDir, uHorizon, uZenith, uSunColor, uGround;
  uniform float uTime, uCloud, uSunDisc, uNight;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return s;
  }
  void main() {
    vec3 d = normalize(vDir);
    float y = d.y;
    float h = max(y, 0.0);
    vec3 col = mix(uHorizon, uZenith, pow(h, 0.42));
    col = mix(col, uHorizon * 1.05, exp(-h * 11.0) * 0.55);
    float sd = max(dot(d, uSunDir), 0.0);
    col += uSunColor * (0.18 * pow(sd, 4.0) + 0.55 * pow(sd, 22.0) + 2.2 * pow(sd, 260.0));
    col += uSunColor * mix(40.0, 9.0, uNight) * smoothstep(mix(0.99955, 0.9994, uNight), 0.99985, sd) * uSunDisc;
    if (uNight > 0.01 && y > 0.0) {
      vec2 sp = d.xz / (y + 0.30) * 170.0; vec2 cell = floor(sp);
      float hh = hash(cell), tw = 0.65 + 0.35 * sin(uTime * (1.5 + hh * 4.0) + hh * 40.0);
      float star = step(0.9935, hh) * smoothstep(0.55, 0.0, length(fract(sp) - 0.5)) * tw;
      col += vec3(0.85, 0.92, 1.0) * star * (0.5 + hash(cell + 3.1)) * uNight * smoothstep(0.0, 0.25, y);
      float band = exp(-pow(dot(d, normalize(vec3(0.3, 0.55, 0.78))) * 4.2, 2.0)) * (0.35 + 0.65 * vnoise(d.xz * 9.0 / (y + 0.4)));   // faint milky way
      col += vec3(0.05, 0.065, 0.11) * band * uNight * smoothstep(0.05, 0.4, y);
    }
    if (y > -0.02) {
      vec2 uv = d.xz / (max(y, 0.0) + 0.16) * 0.42 + vec2(uTime * 0.004, uTime * 0.0015);
      float c = fbm(uv * 1.5);
      float cov = smoothstep(0.50 - uCloud * 0.14, 0.86, c);
      // fake self shadow: sample towards the sun
      float c2 = fbm(uv * 1.5 + uSunDir.xz * 0.06);
      float lit = clamp(0.55 + (c - c2) * 5.0, 0.0, 1.0);
      vec3 cloudCol = mix(uHorizon * 0.55 + vec3(0.06), uSunColor * 0.95 + uHorizon * 0.25, lit * (0.55 + 0.45 * smoothstep(-0.2, 0.9, sd)));
      cloudCol += uSunColor * pow(sd, 6.0) * 0.5;
      cov *= smoothstep(0.0, 0.14, y);
      col = mix(col, cloudCol, cov * 0.88);
    }
    if (y < 0.0) col = mix(uHorizon, uGround * 0.5 + uHorizon * 0.4, smoothstep(0.0, 0.25, -y));
    gl_FragColor = vec4(col, 1.0);
  }`,ag=class{constructor(e,t,n={}){this.renderer=e,this.scene=t,this.preset=`golden`,this.clock=17;let r=new Ka(1,48,24);this.skyMat=new ro({vertexShader:rg,fragmentShader:ig,side:1,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uSunDir:{value:new K(0,1,0)},uHorizon:{value:new q},uZenith:{value:new q},uSunColor:{value:new q},uGround:{value:new q},uTime:{value:0},uCloud:{value:.5},uSunDisc:{value:1},uNight:{value:0}}}),this.sky=new Y(r,this.skyMat),this.sky.scale.setScalar(5e3),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.sun=new qo(16777215,4),this.sun.castShadow=!0,this.shadowSize=n.shadowMap||4096,this.shadowExtent=n.shadowExtent||110,this._setupShadow(),t.add(this.sun),t.add(this.sun.target),this.sunDir=new K,t.fog=new Nn(16777215,2e-4),this.pmrem=new Bs(e),this.envRT=null,this.setPreset(`golden`)}_setupShadow(){let e=this.sun.shadow;e.mapSize.set(this.shadowSize,this.shadowSize);let t=this.shadowExtent;e.camera.left=-t,e.camera.right=t,e.camera.top=t,e.camera.bottom=-t,e.camera.near=1,e.camera.far=700,e.bias=-3e-4,e.normalBias=.28,e.camera.updateProjectionMatrix(),e.map&&=(e.map.dispose(),null)}setShadowQuality(e,t){this.shadowSize=e,this.shadowExtent=t,this._setupShadow(),this.sun.castShadow=e>0}setPreset(e){this.preset=e,this.clock=tg[e]==null?tg.golden:tg[e],this._apply(eg[e]||eg.golden,!0)}setClock(e,t){e=(e%24+24)%24,this.clock=e;let n=0;for(;n<ng.length-2&&e>=ng[n+1][0];)n++;let[r,i]=ng[n],[a,o]=ng[n+1],s=eg[i],c=eg[o],l=a>r?(e-r)/(a-r):0,u=l*l*(3-2*l),d=(e,t)=>e+(t-e)*u,f=(e,t)=>[d(e[0],t[0]),d(e[1],t[1]),d(e[2],t[2])],p={name:`Day cycle`,elev:d(s.elev,c.elev),azim:d(s.azim,c.azim),sunColor:f(s.sunColor,c.sunColor),sunI:d(s.sunI,c.sunI),horizon:f(s.horizon,c.horizon),zenith:f(s.zenith,c.zenith),ground:f(s.ground,c.ground),fogDensity:d(s.fogDensity,c.fogDensity),env:d(s.env,c.env),exposure:d(s.exposure,c.exposure),cloud:d(s.cloud,c.cloud),night:d(s.night||0,c.night||0)};this.preset=p.night>.5?`night`:`day`,this._apply(p,t)}_apply(e,t){this.t=e;let n=Tt.degToRad(e.elev),r=Tt.degToRad(e.azim);this.sunDir.set(Math.cos(n)*Math.sin(r),Math.sin(n),Math.cos(n)*Math.cos(r)).normalize();let i=this.skyMat.uniforms;if(i.uSunDir.value.copy(this.sunDir),i.uHorizon.value.copy($h(...e.horizon)),i.uZenith.value.copy($h(...e.zenith)),i.uSunColor.value.copy($h(...e.sunColor)),i.uGround.value.copy($h(...e.ground)),i.uCloud.value=e.cloud,i.uNight.value=e.night||0,this.sun.color.copy($h(...e.sunColor)),this.sun.intensity=e.sunI,this.scene.fog.color.copy($h(...e.horizon).multiplyScalar(1)),this.scene.fog.density=e.fogDensity,this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.env,!t&&this.envRT)return;i.uSunDisc.value=0;let a=new Pn,o=new Y(new Ka(1,48,24),this.skyMat);o.scale.setScalar(50),a.add(o),this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(a,.02,.1,400),this.scene.environment=this.envRT.texture,i.uSunDisc.value=1,o.geometry.dispose()}update(e,t,n){this.skyMat.uniforms.uTime.value+=e,this.sky.position.copy(t.position);let r=2*this.shadowExtent/this.shadowSize,i=this.sunDir,a=new K(0,1,0),o=new K().crossVectors(a,i).normalize(),s=new K().crossVectors(i,o).normalize(),c=n.dot(o),l=n.dot(s),u=n.dot(i),d=Math.round(c/r)*r,f=Math.round(l/r)*r,p=o.multiplyScalar(d).addScaledVector(s,f).addScaledVector(i,u);this.sun.target.position.copy(p),this.sun.position.copy(p).addScaledVector(i,350),this.sun.target.updateMatrixWorld()}},og={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},sg=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},cg=new Go(-1,1,1,-1,0,1),lg=new class extends Dr{constructor(){super(),this.setAttribute(`position`,new J([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new J([0,2,0,0,2,0],2))}},ug=class{constructor(e){this._mesh=new Y(lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},dg=class extends sg{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ro?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=eo.clone(e.uniforms),this.material=new ro({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ug(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},fg=class extends sg{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},pg=class extends sg{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},mg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new G);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dg(og),this.copyPass.material.blending=0,this.timer=new $o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}fg!==void 0&&(r instanceof fg?n=!0:r instanceof pg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},hg=class extends sg{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new q}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},gg={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},_g=class e extends sg{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new G(256,256):new G(e.x,e.y),this.clearColor=new q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new qt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new qt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=gg;this.highPassUniforms=eo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ro({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=eo.clone(og.uniforms),this.blendMaterial=new ro({uniforms:this.copyUniforms,vertexShader:og.vertexShader,fragmentShader:og.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new q,this._oldClearAlpha=1,this._basic=new zr,this._fsQuad=new ug(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ro({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ro({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};_g.BlurDirectionX=new G(1,0),_g.BlurDirectionY=new G(0,1);var vg={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},yg=class extends sg{constructor(){super(),this.isOutputPass=!0,this.uniforms=eo.clone(vg.uniforms),this.material=new io({name:vg.name,uniforms:this.uniforms,vertexShader:vg.vertexShader,fragmentShader:vg.fragmentShader}),this._fsQuad=new ug(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},bg={uniforms:{tDiffuse:{value:null},uBlur:{value:0},uAber:{value:6e-4},uVig:{value:.32},uTime:{value:0},uDust:{value:0},uDustColor:{value:new q(.7,.55,.38)},uSat:{value:1.08},uShake:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uBlur, uAber, uVig, uTime, uDust, uSat, uShake; uniform vec3 uDustColor;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r = length(c);
      vec3 col;
      float ab = uAber * (0.4 + r * 2.2);
      if (uBlur > 0.001) {
        col = vec3(0.0);
        for (int i = 0; i < 8; i++) {
          float t = float(i) / 7.0;
          float s = 1.0 - uBlur * t * smoothstep(0.08, 0.75, r);
          vec2 uv = c * s + 0.5;
          col.r += texture2D(tDiffuse, uv + c * ab).r;
          col.g += texture2D(tDiffuse, uv).g;
          col.b += texture2D(tDiffuse, uv - c * ab).b;
        }
        col /= 8.0;
      } else {
        col.r = texture2D(tDiffuse, vUv + c * ab).r;
        col.g = texture2D(tDiffuse, vUv).g;
        col.b = texture2D(tDiffuse, vUv - c * ab).b;
      }
      // dust haze on the lens
      col = mix(col, uDustColor * (0.35 + 0.4 * dot(col, vec3(0.333))), uDust * 0.55);
      // saturation + subtle warm/cool split
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col *= mix(vec3(1.04, 1.0, 0.94), vec3(0.97, 1.0, 1.05), smoothstep(0.0, 1.2, l));
      // vignette
      col *= 1.0 - uVig * smoothstep(0.30, 0.92, r * 1.25);
      // film grain
      col += (hash(vUv * 1000.0 + uTime) - 0.5) * 0.012;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`},xg={uniforms:{tDiffuse:{value:null}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c.rgb)) || any(isinf(c.rgb))) c.rgb = vec3(0.0);
      gl_FragColor = vec4(clamp(c.rgb, vec3(0.0), vec3(16.0)), 1.0);
    }`},Sg=class{constructor(e,t,n,r={}){this.renderer=e;let i=e.getDrawingBufferSize(new G),a=new qt(i.x,i.y,{type:g,samples:r.samples??4});this.composer=new mg(e,a),this.renderPass=new hg(t,n),this.composer.addPass(this.renderPass),this.composer.addPass(new dg(xg)),this.bloom=new _g(new G(i.x,i.y),.22,.5,1.7),this.composer.addPass(this.bloom),this.grade=new dg(bg),this.composer.addPass(this.grade),this.composer.addPass(new yg),this.enabledBloom=r.bloom!==!1,this.bloom.enabled=this.enabledBloom}setCamera(e){this.renderPass.camera=e}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t)}setBloom(e){this.enabledBloom=e,this.bloom.enabled=e}setNight(e){this.bloom.strength=e?.7:.22,this.bloom.threshold=e?1:1.7,this.bloom.radius=e?.6:.5,this.grade.uniforms.uVig.value=e?.45:.32}render(e,t,n={}){let r=this.grade.uniforms;r.uTime.value=t%100,r.uBlur.value=n.blur??0,r.uDust.value=n.dust??0,r.uAber.value=5e-4+(n.blur??0)*.01,this.composer.render(e)}},Cg=K;function wg(){return Zf(256,32,(e,t,n)=>{let r=n/2;for(let n=0;n<2;n++)for(let i=0;i<t/r;i++)e.fillStyle=(i+n)%2?`#111`:`#f4f4f4`,e.fillRect(i*r,n*r,r,r)},{repeat:!0})}function Tg(e){return Zf(256,256,(t,n,r)=>{t.fillStyle=`#f2b800`,t.fillRect(0,0,n,r),t.strokeStyle=`#111`,t.lineWidth=16,t.strokeRect(8,8,n-16,r-16),t.lineWidth=34,t.lineCap=`butt`,t.lineJoin=`miter`;for(let n=0;n<2;n++){let r=n*78-34;t.beginPath(),e>0?(t.moveTo(70+r,52),t.lineTo(150+r,128),t.lineTo(70+r,204)):(t.moveTo(186-r,52),t.lineTo(106-r,128),t.lineTo(186-r,204)),t.stroke()}})}function Eg(e){let t=new Tn;e.add(t);let n=new ao({color:1381912,roughness:.6,metalness:.6}),r=new ao({color:12106946,roughness:.4,metalness:.85});new ao({color:15328990,roughness:.7});let i=Z.N,a=e=>{let t=Z.x[e],n=Z.z[e];return{x:t,z:n,y:td(t,n),h:Z.hdg[e]}},o=[],s=(e,i,s,c)=>{let l=a(e),u=new Tn,d=Bu+3.2,f=s?8.6:7.2;for(let e of[-1,1]){let t=new Y(new bi(.55,f,.55),r);t.position.set(e*d,f/2,0),t.castShadow=!0,u.add(t);let i=new Y(new bi(1.6,.4,1.6),n);i.position.set(e*d,.2,0),i.castShadow=!0,u.add(i);for(let t=0;t<5;t++){let n=new Y(new bi(.08,1.9,.08),r);n.position.set(e*d,1+t*1.5,.3),n.rotation.z=(t%2?.3:-.3)*e,u.add(n)}}let p=new Y(new bi(d*2+.6,1.7,.7),r);p.position.y=f,p.castShadow=!0,u.add(p);let m=np(i,`#ffffff`,`#c8141e`,1024,128,`900 78px "Arial Black", Impact, sans-serif`);for(let e of[1,-1]){let t=new Y(new Ga(d*2-.6,1.4),new ao({map:m,roughness:.7,emissive:2236962,emissiveMap:m,emissiveIntensity:.25}));t.position.set(0,f,e*.37),e<0&&(t.rotation.y=Math.PI),u.add(t)}if(s){let e=wg();e.repeat.set(d*2/1.2,1);let t=new Y(new Ga(d*2-.6,.45),new ao({map:e,roughness:.8}));t.position.set(0,f+.95,.37),u.add(t);let n=t.clone();n.position.z=-.37,n.rotation.y=Math.PI,u.add(n);let r=new Y(new Ga(Bu*2+2,1.2),new ao({map:e,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));r.rotation.x=-Math.PI/2,r.position.set(0,.06,0),r.receiveShadow=!0,u.add(r)}else{let e=new Y(new Ga(4,.9),new ao({map:np(c||`CHECKPOINT`,`#101010`,`#f2b800`,512,128,`900 70px "Arial Black", Impact, sans-serif`),roughness:.7}));e.position.set(0,f-1.5,.4),u.add(e);let t=e.clone();t.position.z=-.4,t.rotation.y=Math.PI,u.add(t)}return u.position.set(l.x,l.y,l.z),u.rotation.y=l.h,t.add(u),o.push({idx:e,group:u,x:l.x,z:l.z,y:l.y,hdg:l.h}),u};s(0,`DUSTLINE BAJA 1000`,!0);for(let e=1;e<8;e++)s(Math.round(e*i/8),`DUSTLINE BAJA 1000`,!1,`CHECKPOINT ${e}`);let c=new Wa([[.3,-.15],[.52,-.15],[.56,-.1],[.56,.1],[.52,.15],[.3,.15],[.28,0]].map(e=>new G(e[0],e[1])),14),l=[];for(let e=0;e<3;e++){let t=c.clone();t.translate(0,.16+e*.31,0),t.rotateY(e*.7),l.push(t)}let u=Rf(l),d=new ao({color:16777215,roughness:.9,metalness:0}),f=[],p=Qf(5);new Cg;for(let e=0;e<i;e+=4){let t=Z.kappa[e];if(Math.abs(t)<.0062)continue;let n=t>0?-1:1,r=-Z.tz[e],i=Z.tx[e],a=(Bu+2.6)*n,o=Z.x[e]+r*a,s=Z.z[e]+i*a;f.push({x:o,z:s,y:td(o,s),c:p()})}let m=new ci(u,d,Math.max(1,f.length)),h=new Xt,g=new Et,_=new sn,v=new q;f.forEach((e,t)=>{g.setFromEuler(_.set(0,p()*6,0)),h.compose(new Cg(e.x,e.y-.02,e.z),g,new Cg(1,1,1)),m.setMatrixAt(t,h),v.set(e.c<.55?921102:e.c<.8?14276303:13112350),m.setColorAt(t,v)}),m.count=f.length,m.castShadow=!0,m.receiveShadow=!0,t.add(m);let y=[];for(let e=0;e<i;e+=14){let t=Z.kappa[e];if(Math.abs(t)<.0085)continue;let n=t>0?-1:1,r=-Z.tz[e],i=Z.tx[e],a=(Bu+4.4)*n,o=Z.x[e]+r*a,s=Z.z[e]+i*a;y.push({x:o,z:s,y:td(o,s),dir:t>0?1:-1,hdg:Z.hdg[e],side:n})}let b=new Ga(1.8,1.8),x=new Ci(.04,.04,2.6,6);for(let e of[1,-1]){let n=y.filter(t=>t.dir===e);if(!n.length)continue;let i=new ci(b,new ao({map:Tg(e),roughness:.6,side:2}),n.length),a=new ci(x,r,n.length);n.forEach((e,t)=>{g.setFromEuler(_.set(0,e.hdg+Math.PI,0)),h.compose(new Cg(e.x,e.y+2.1,e.z),g,new Cg(1,1,1)),i.setMatrixAt(t,h),h.compose(new Cg(e.x,e.y+1.3,e.z),new Et,new Cg(1,1,1)),a.setMatrixAt(t,h)}),i.castShadow=!0,a.castShadow=!0,t.add(i,a)}let S=new Tn,C=[15328990,13620182,12029018].map(e=>new ao({color:e,roughness:.55,metalness:.15})),w=new ao({color:1713712,roughness:.1,metalness:.5}),T=(e,t,r,i)=>{let a=new Tn,o=new Y(new bi(2.5,2.7,7.5),i);o.position.y=1.8,o.castShadow=!0,o.receiveShadow=!0,a.add(o);let s=new Y(new bi(2.4,1.6,2),i);s.position.set(0,1.2,4.6),s.castShadow=!0,a.add(s);let c=new Y(new Ga(2.2,.9),w);c.position.set(0,1.7,5.61),a.add(c);let l=new Y(new bi(2.56,.3,7.52),new ao({color:13112350,roughness:.6}));l.position.y=1.2,a.add(l);for(let e of[-1,1])for(let t of[-2.4,3.8]){let r=new Y(new Ci(.5,.5,.3,14),n);r.rotation.z=Math.PI/2,r.position.set(e*1.15,.5,t),a.add(r)}return a.position.set(e,td(e,t),t),a.rotation.y=r,a},E=[13112350,1722057,15921906,15768080].map(e=>new ao({color:e,roughness:.85,side:2})),D=(e,t,n)=>{let i=new Tn,a=new Y(new wi(3,1.1,4),n);a.rotation.y=Math.PI/4,a.position.y=2.7,a.castShadow=!0,i.add(a);for(let[e,t]of[[-1.7,-1.7],[1.7,-1.7],[-1.7,1.7],[1.7,1.7]]){let n=new Y(new Ci(.04,.04,2.3,6),r);n.position.set(e,1.15,t),i.add(n)}return i.position.set(e,td(e,t),t),i},O=a(0),k=Z.tx[0],A=Z.tz[0],ee=-A,j=k,M=Qf(21);for(let e=0;e<7;e++){let t=e%2?-1:1,n=-60+e*17+(M()-.5)*6,r=t*(Bu+30+M()*12),i=O.x+k*n+ee*r,a=O.z+A*n+j*r;e%3==0?S.add(D(i,a,E[e%4])):S.add(T(i,a,O.h+(M()-.5)*.5+(t>0?0:Math.PI),C[e%3]))}let N=new xi(.2,.62,3,8);N.translate(0,.62,0);let P=new Ka(.115,10,8);P.translate(0,1.4,0);let F=new ci(Rf([N.toNonIndexed(),P.toNonIndexed()]),new ao({color:16777215,roughness:.85}),70),te=new q,I=[2767442,5916214,7039578,8007210,4086330,9077880,2040616,10123850];for(let e=0;e<70;e++){let t=e%2?-1:1,n=-40+M()*100,r=t*(Bu+8+M()*12),i=O.x+k*n+ee*r,a=O.z+A*n+j*r;h.compose(new Cg(i,td(i,a),a),new Et().setFromEuler(new sn(0,M()*6,0)),new Cg(1,.92+M()*.18,1)),F.setMatrixAt(e,h),te.setHex(I[Math.floor(M()*I.length)]),F.setColorAt(e,te)}return F.castShadow=!0,S.add(F),t.add(S),{group:t,gates:o,stacks:f}}function Dg(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=e===`dust`?11:3,i=()=>(r=r*16807%2147483647,r/2147483647);if(e===`dust`){for(let e=0;e<26;e++){let e=64+(i()-.5)*46,t=64+(i()-.5)*46,r=16+i()*26,a=n.createRadialGradient(e,t,0,e,t,r);a.addColorStop(0,`rgba(255,255,255,0.20)`),a.addColorStop(.6,`rgba(255,255,255,0.09)`),a.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=a,n.fillRect(0,0,128,128)}let e=n.createRadialGradient(64,64,20,64,64,64);e.addColorStop(0,`rgba(0,0,0,0)`),e.addColorStop(1,`rgba(0,0,0,1)`),n.globalCompositeOperation=`destination-out`,n.fillStyle=e,n.fillRect(0,0,128,128)}else{let e=n.createRadialGradient(64,64,0,64,64,60);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(.5,`rgba(255,255,255,0.7)`),e.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=e,n.fillRect(0,0,128,128)}let a=new gi(t);return a.colorSpace=Me,a}var Og=`
  attribute vec3 iPos; attribute vec4 iData; attribute vec3 iCol;
  varying vec2 vUv; varying float vAlpha; varying vec3 vCol; varying float vFogDepth;
  void main() {
    vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
    float c = cos(iData.z), s = sin(iData.z);
    vec2 q = vec2(c * position.x - s * position.y, s * position.x + c * position.y);
    mv.xy += q * iData.x;
    gl_Position = projectionMatrix * mv;
    vUv = position.xy + 0.5; vAlpha = iData.y; vCol = iCol; vFogDepth = -mv.z;
  }`,kg=`
  uniform sampler2D uTex; uniform vec3 uLight; uniform float uFogDensity; uniform vec3 uFogColor;
  varying vec2 vUv; varying float vAlpha; varying vec3 vCol; varying float vFogDepth;
  void main() {
    vec4 t = texture2D(uTex, vUv);
    float a = t.a * vAlpha;
    if (a < 0.002) discard;
    vec3 col = vCol * uLight * (0.8 + 0.2 * t.r);
    float f = 1.0 - exp(-pow(uFogDensity * vFogDepth, 2.0));
    col = mix(col, uFogColor, f);
    gl_FragColor = vec4(col, a);
  }`,Ag=class{constructor(e,{max:t=2500,kind:n=`dust`,gravity:r=0,drag:i=1.2,additive:a=!1,light:o=new q(1,1,1)}={}){this.max=t,this.gravity=r,this.drag=i,this.next=0,this.kind=n,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.data=new Float32Array(t*4),this.col=new Float32Array(t*3),this.age=new Float32Array(t).fill(1e9),this.life=new Float32Array(t).fill(1),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.a0=new Float32Array(t),this.spin=new Float32Array(t);let s=new Ga(1,1),c=new Jo;c.index=s.index,c.setAttribute(`position`,s.attributes.position),this.aPos=new ei(this.pos,3),this.aPos.setUsage(Le),this.aData=new ei(this.data,4),this.aData.setUsage(Le),this.aCol=new ei(this.col,3),this.aCol.setUsage(Le),c.setAttribute(`iPos`,this.aPos),c.setAttribute(`iData`,this.aData),c.setAttribute(`iCol`,this.aCol),c.instanceCount=t,this.uniforms={uTex:{value:Dg(n)},uLight:{value:o.clone()},uFogDensity:{value:2e-4},uFogColor:{value:new q(1,1,1)}},this.mat=new ro({vertexShader:Og,fragmentShader:kg,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:a?2:1}),this.mesh=new Y(c,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8,e.add(this.mesh)}setLighting(e,t){this.uniforms.uLight.value.copy(e),t&&(this.uniforms.uFogColor.value.copy(t.color),this.uniforms.uFogDensity.value=t.density)}emit(e,t,n,r,i,a,o,s,c,l,u=.7,d=.55,f=.4){let p=this.next;this.next=(this.next+1)%this.max,this.pos[p*3]=e,this.pos[p*3+1]=t,this.pos[p*3+2]=n,this.vel[p*3]=r,this.vel[p*3+1]=i,this.vel[p*3+2]=a,this.age[p]=0,this.life[p]=c,this.s0[p]=o,this.s1[p]=s,this.a0[p]=l,this.data[p*4+2]=Math.random()*6.28,this.spin[p]=(Math.random()-.5)*.9,this.col[p*3]=u,this.col[p*3+1]=d,this.col[p*3+2]=f}update(e,t){let{pos:n,vel:r,data:i,age:a,life:o,s0:s,s1:c,a0:l,spin:u}=this,d=Math.exp(-this.drag*e),f=t?t.x:0,p=t?t.z:0;for(let t=0;t<this.max;t++){if(a[t]>=o[t]){i[t*4+1]=0,i[t*4]=0;continue}a[t]+=e;let m=Math.min(1,a[t]/o[t]),h=t*3;r[h]*=d,r[h+2]*=d,r[h+1]=r[h+1]*(this.kind===`dust`?d:1)-this.gravity*e,this.kind===`dust`&&(r[h]+=f*e*.6,r[h+2]+=p*e*.6,r[h+1]+=.5*e),n[h]+=r[h]*e,n[h+1]+=r[h+1]*e,n[h+2]+=r[h+2]*e,i[t*4]=s[t]+(c[t]-s[t])*Math.sqrt(m),i[t*4+1]=l[t]*(1-m)**1.4*Math.min(1,m*10),i[t*4+2]+=u[t]*e}this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aCol.needsUpdate=!0}};function jg(e){let t=1024,n=new Float32Array(t);for(let r=0;r<t;r++){let t=r/1023*2-1;n[r]=Math.tanh(t*e)/Math.tanh(e)}return n}var Mg=class e{constructor(t,n,{panner:r=!1,cyl:i=8,base:a=1}={}){this.ctx=t,this.cyl=i,this.base=a;let o=e=>{let n=t.createOscillator();return n.type=e,n};this.o1=o(`sawtooth`),this.o2=o(`square`),this.o3=o(`sawtooth`),this.o4=o(`triangle`),this.g1=t.createGain(),this.g2=t.createGain(),this.g3=t.createGain(),this.g4=t.createGain(),this.sum=t.createGain(),this.sum.gain.value=1,this.shaper=t.createWaveShaper(),this.shaper.curve=jg(2.4),this.shaper.oversample=`2x`,this.lp=t.createBiquadFilter(),this.lp.type=`lowpass`,this.lp.Q.value=.9,this.out=t.createGain(),this.out.gain.value=0,this.o1.connect(this.g1).connect(this.sum),this.o2.connect(this.g2).connect(this.sum),this.o3.connect(this.g3).connect(this.sum),this.o4.connect(this.g4).connect(this.sum),this.lfo=t.createOscillator(),this.lfo.type=`sine`,this.lfoG=t.createGain(),this.lfoG.gain.value=.14,this.lfo.connect(this.lfoG).connect(this.sum.gain),this.noise=t.createBufferSource(),this.noise.buffer=e.noiseBuf(t),this.noise.loop=!0,this.nbp=t.createBiquadFilter(),this.nbp.type=`bandpass`,this.nbp.Q.value=.7,this.ng=t.createGain(),this.ng.gain.value=0,this.noise.connect(this.nbp).connect(this.ng).connect(this.shaper),this.sum.connect(this.shaper),this.shaper.connect(this.lp).connect(this.out),r?(this.pan=t.createPanner(),this.pan.panningModel=`equalpower`,this.pan.distanceModel=`inverse`,this.pan.refDistance=8,this.pan.rolloffFactor=1.2,this.pan.maxDistance=600,this.out.connect(this.pan).connect(n)):this.out.connect(n),[this.o1,this.o2,this.o3,this.o4,this.lfo,this.noise].forEach(e=>e.start())}static noiseBuf(t){if(e._nb&&e._nb.sampleRate===t.sampleRate)return e._nb;let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return e._nb=n,n}set(e,t,n,r=1,i=1){let a=this.ctx.currentTime,o=.035,s=e/60*(this.cyl/2)*i*this.base;this.o1.frequency.setTargetAtTime(s,a,o),this.o2.frequency.setTargetAtTime(s*.5,a,o),this.o3.frequency.setTargetAtTime(s*2.004,a,o),this.o4.frequency.setTargetAtTime(s*.25,a,o),this.lfo.frequency.setTargetAtTime(s*.25+.5,a,o);let c=.35+.65*t;this.g1.gain.setTargetAtTime(.5*c,a,o),this.g2.gain.setTargetAtTime(.55,a,o),this.g3.gain.setTargetAtTime(.16*c*c,a,o),this.g4.gain.setTargetAtTime(.4,a,o),this.ng.gain.setTargetAtTime(.12*t+.02,a,o),this.nbp.frequency.setTargetAtTime(300+e*.25,a,o),this.lp.frequency.setTargetAtTime((380+2800*t+e*.35)*r,a,o),this.out.gain.setTargetAtTime(n,a,.05)}dispose(){try{[this.o1,this.o2,this.o3,this.o4,this.lfo,this.noise].forEach(e=>e.stop()),this.out.disconnect()}catch{}}},Ng=class{constructor(){this.ctx=null,this.muted=!1,this.ai=[],this.lastThr=0,this.popCool=0}start(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=this.muted?0:.85,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(e.destination),this.engine=new Mg(e,this.master,{cyl:8}),this.windSrc=e.createBufferSource(),this.windSrc.buffer=Mg.noiseBuf(e),this.windSrc.loop=!0,this.windBP=e.createBiquadFilter(),this.windBP.type=`bandpass`,this.windBP.Q.value=.5,this.windBP.frequency.value=500,this.windG=e.createGain(),this.windG.gain.value=0,this.windSrc.connect(this.windBP).connect(this.windG).connect(this.master),this.windSrc.start(),this.tireSrc=e.createBufferSource(),this.tireSrc.buffer=Mg.noiseBuf(e),this.tireSrc.loop=!0,this.tireSrc.playbackRate.value=.8,this.tireLP=e.createBiquadFilter(),this.tireLP.type=`lowpass`,this.tireLP.frequency.value=1200,this.tireHP=e.createBiquadFilter(),this.tireHP.type=`highpass`,this.tireHP.frequency.value=160,this.tireG=e.createGain(),this.tireG.gain.value=0,this.tireSrc.connect(this.tireLP).connect(this.tireHP).connect(this.tireG).connect(this.master),this.tireSrc.start(),this.rumble=e.createOscillator(),this.rumble.type=`sine`,this.rumble.frequency.value=38,this.rumbleG=e.createGain(),this.rumbleG.gain.value=0,this.rumble.connect(this.rumbleG).connect(this.master),this.rumble.start()}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.85,this.ctx.currentTime,.05)}update(e,t,{cockpit:n=!1,paused:r=!1}={}){if(!this.ctx)return;let i=this.ctx.currentTime;if(r){this.engine.out.gain.setTargetAtTime(0,i,.05),this.windG.gain.setTargetAtTime(0,i,.05),this.tireG.gain.setTargetAtTime(0,i,.05),this.rumbleG.gain.setTargetAtTime(0,i,.05);return}let a=t.spec.engine,o=Math.min(1,t.thr*(t.shiftTimer>0?.3:1)+.05),s=n?.62:1;this.engine.set(t.rpm,o,n?.34:.4,s,t.spec.id===`prerunner`?1.18:1);let c=t.speed;this.windG.gain.setTargetAtTime(Math.min(.5,(c/60)**2*.55)*(n?.6:1),i,.1),this.windBP.frequency.setTargetAtTime(350+c*22,i,.1);let l=t.groundCount/4,u=.6+.4*(1-t.onRoad);this.tireG.gain.setTargetAtTime(Math.min(.5,c/40*.3*l*u+t.slip*.28),i,.06),this.tireLP.frequency.setTargetAtTime(500+c*30+t.slip*900,i,.1),this.tireSrc.playbackRate.setTargetAtTime(.6+c/80,i,.1),this.rumbleG.gain.setTargetAtTime(Math.min(.25,c/100*l*(1-t.onRoad*.4)),i,.1),this.rumble.frequency.setTargetAtTime(28+c*.5,i,.1),this.popCool-=e,this.lastThr>.7&&t.thr<.2&&t.rpm>a.red*.6&&this.popCool<=0&&(this.pop(),this.popCool=.35),this.lastThr=t.thr}pop(){this.ctx;let e=Math.floor(2+Math.random()*3);for(let t=0;t<e;t++)this.burst(.03+Math.random()*.05,700+Math.random()*500,.18,.05+t*.06+Math.random()*.03)}burst(e,t,n,r=0,i=`lowpass`){let a=this.ctx;if(!a)return;let o=a.createBufferSource();o.buffer=Mg.noiseBuf(a);let s=a.createBiquadFilter();s.type=i,s.frequency.value=t;let c=a.createGain(),l=a.currentTime+r;c.gain.setValueAtTime(0,l),c.gain.linearRampToValueAtTime(n,l+.004),c.gain.exponentialRampToValueAtTime(.001,l+e),o.connect(s).connect(c).connect(this.master),o.start(l,Math.random()),o.stop(l+e+.05)}thump(e){let t=this.ctx;if(!t)return;let n=Math.min(1,e),r=t.createOscillator();r.type=`sine`;let i=t.createGain(),a=t.currentTime;r.frequency.setValueAtTime(95,a),r.frequency.exponentialRampToValueAtTime(34,a+.22),i.gain.setValueAtTime(0,a),i.gain.linearRampToValueAtTime(.7*n,a+.01),i.gain.exponentialRampToValueAtTime(.001,a+.35),r.connect(i).connect(this.master),r.start(a),r.stop(a+.4),this.burst(.25,500,.35*n)}crash(e){let t=Math.min(1,e);this.burst(.5,1500,.55*t),this.burst(.3,3500,.25*t,0,`highpass`),this.thump(t)}beep(e=660,t=.18,n=.25){let r=this.ctx;if(!r)return;let i=r.createOscillator();i.type=`square`,i.frequency.value=e;let a=r.createGain(),o=r.currentTime;a.gain.setValueAtTime(n,o),a.gain.exponentialRampToValueAtTime(.001,o+t);let s=r.createBiquadFilter();s.type=`lowpass`,s.frequency.value=2400,i.connect(s).connect(a).connect(this.master),i.start(o),i.stop(o+t+.02)}updateAI(e,t,n,r){if(!this.ctx)return;let i=this.ctx,a=i.listener;a.positionX&&(a.positionX.value=e.x,a.positionY.value=e.y,a.positionZ.value=e.z,a.forwardX.value=t.x,a.forwardY.value=t.y,a.forwardZ.value=t.z,a.upX.value=0,a.upY.value=1,a.upZ.value=0);let o=n.map(t=>({v:t,d:t.pos.distanceTo(e)})).sort((e,t)=>e.d-t.d).slice(0,4);for(;this.ai.length<o.length;)this.ai.push({voice:new Mg(i,this.master,{panner:!0,cyl:8}),v:null});this.ai.forEach((t,n)=>{let a=o[n];if(!a){t.voice.out.gain.setTargetAtTime(0,i.currentTime,.1);return}let s=a.v,c=t.voice.pan;c.positionX&&(c.positionX.value=s.pos.x,c.positionY.value=s.pos.y,c.positionZ.value=s.pos.z);let l=s.pos.x-e.x,u=s.pos.z-e.z,d=Math.hypot(l,u)+.001,f=((s.vel.x-r.x)*l+(s.vel.z-r.z)*u)/d,p=343/(343+Math.max(-60,Math.min(60,f)));t.voice.set(s.rpm,Math.min(1,s.thr+.05),a.d>400?0:.5*Math.min(1,80/(a.d+20)),.8,p*(s.spec.id===`prerunner`?1.15:1)*.97)})}},Pg=[`chase`,`far`,`side`,`hood`,`bumper`,`cockpit`],Fg={chase:`Chase`,far:`Far Chase`,side:`Cinematic Side · Suspension`,hood:`Hood`,bumper:`Bumper`,cockpit:`Cockpit (1st person)`},Ig=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Lg=class{constructor(e){this.camera=e,this.mode=`chase`,this.pos=new K,this.yaw=0,this.init=!1,this.t=0,this.shake=0,this.fovBase=65,this.back=0,this.lookYaw=0,this.headOff=new K,this.prevVel=new K,this.localAcc=new K,this._f=new K,this._q=new Et,this._v=new K,this._tgt=new K,this._m=new Xt,this._up=new K(0,1,0),this.sideSign=1,this.sideT=0,this.sideInit=!1,this.sy=0,this.sideFov=34,this.sideD=8.5,this.sideZ=0,this.sideH=.8,this.cutaway=!0,this.sideLift=0,this._b=new K,this._sv=new K}cycle(e=1){let t=Pg.indexOf(this.mode);return this.mode=Pg[(t+e+Pg.length)%Pg.length],this.sideInit=!1,this.mode}snap(){this.init=!1,this.sideInit=!1}update(e,t,n,r,i=null){let a=this.camera,o=n.root;this.t+=e;let s=o.position,c=o.quaternion,l=t.speed,u=(1-t.onRoad*.55)*Lu(l/55,0,1)*.5+t.impact*.06+t.bottomed*.025+t.landing*.12;this.shake+=(u-this.shake)*Math.min(1,e*(u>this.shake?18:5));let d=this.shake,f=Math.sin(this.t*37.1)+Math.sin(this.t*23.7+1.3),p=Math.sin(this.t*41.3+2.1)+Math.sin(this.t*19.9);if(this._v.copy(t.vel).sub(this.prevVel).multiplyScalar(1/Math.max(e,.001)),this.prevVel.copy(t.vel),this._q.copy(c).invert(),this._v.applyQuaternion(this._q),this.localAcc.lerp(this._v,Math.min(1,e*6)),i){let e=i.angle,t=i.radius;a.position.set(s.x+Math.sin(e)*t,s.y+i.height,s.z+Math.cos(e)*t),a.lookAt(s.x,s.y+.7,s.z),a.fov=40,a.updateProjectionMatrix(),this.init=!1}else{if(this.mode===`chase`||this.mode===`far`){let n=this.mode===`far`;this._f.set(0,0,1).applyQuaternion(c),this._f.y=0,this._f.normalize();let i=Math.atan2(this._f.x,this._f.z),o=i;l>6&&(o=i+Ig(Math.atan2(t.vel.x,t.vel.z)-i)*zu(6,22,l)*.55),this.init||=(this.yaw=o,this.pos.copy(s),!0),this.yaw+=Ig(o-this.yaw)*(1-Math.exp(-e*4.2)),this.back+=(+!!r-this.back)*(1-Math.exp(-e*9));let u=this.yaw+this.back*Math.PI,m=(n?12.5:7.4)+l*(n?.02:.016),h=n?4.6:2.7,g=Math.sin(u),_=Math.cos(u),v=this._v.set(s.x-g*m,s.y+h,s.z-_*m);this.pos.x+=(v.x-this.pos.x)*(1-Math.exp(-e*11)),this.pos.y+=(v.y-this.pos.y)*(1-Math.exp(-e*6)),this.pos.z+=(v.z-this.pos.z)*(1-Math.exp(-e*11));let y=td(this.pos.x,this.pos.z)+.8;this.pos.y<y&&(this.pos.y=y),a.position.copy(this.pos),a.position.x+=f*d*.035,a.position.y+=p*d*.045,this._tgt.set(s.x+g*(n?4:3)*(1-this.back*2)+g*l*.03,s.y+(n?1.1:1.45),s.z+_*(n?4:3)*(1-this.back*2)+_*l*.03),a.lookAt(this._tgt),a.rotateZ(Lu(-this.localAcc.x*.0025,-.06,.06)+f*d*.004),a.fov=Ru(a.fov,(n?60:64)+Lu(l*.3,0,18)+t.landing*1.5,Math.min(1,e*4))}else if(this.mode===`side`){let r=n.spec;this._f.set(0,0,1).applyQuaternion(c),this._f.y=0,this._f.normalize();let i=Math.atan2(this._f.x,this._f.z),o=i;l>8&&(o=i+Ig(Math.atan2(t.vel.x,t.vel.z)-i)*.5*zu(8,20,l)),this.sideInit||(this.yaw=o,this.sy=s.y,this.sideT=0,this.sideInit=!0,this.sideLift=0,this.sideFov=34,this.sideD=8.5,this.sideZ=0,this.sideH=.8),this.yaw+=Ig(o-this.yaw)*(1-Math.exp(-e*3.2)),this.sy+=(s.y-this.sy)*(1-Math.exp(-e*2.2)),this.sideT+=e;let u=[{z:0,d:8.8,h:.85,fov:33,ly:.8},{z:r.front.z-.1,d:5,h:.75,fov:31,ly:1},{z:0,d:8.8,h:.85,fov:33,ly:.8},{z:r.rear.z+.1,d:5.2,h:.75,fov:31,ly:1}],m=6.5,h=Math.floor(this.sideT/m)%u.length,g=zu(5,m,this.sideT%m),_=u[h],v=u[(h+1)%u.length],y={z:Ru(_.z,v.z,g),d:Ru(_.d,v.d,g),h:Ru(_.h,v.h,g),fov:Ru(_.fov,v.fov,g),ly:Ru(_.ly,v.ly,g)},b=1-Math.exp(-e*5);this.sideZ+=(y.z-this.sideZ)*b,this.sideD+=(y.d-this.sideD)*b,this.sideH+=(y.h-this.sideH)*b,this.sideFov+=(y.fov-this.sideFov)*b;let x=this.sideSign,S=Math.sin(this.yaw),C=Math.cos(this.yaw),w=Math.cos(this.yaw)*x,T=-Math.sin(this.yaw)*x,E=.2*Math.sin(this.sideT*.33),D=Lu(this.localAcc.z*.03,-1,1),O=this.sy-r.cgHeight,k=s.x+S*(this.sideZ-D),A=s.z+C*(this.sideZ-D);a.position.set(k+(w*Math.cos(E)+S*Math.sin(E))*this.sideD,O+this.sideH,A+(T*Math.cos(E)+C*Math.sin(E))*this.sideD);let ee=O+y.ly,j=a.position.y;for(let e=0;e<=6;e++){let t=e/7,n=(td(Ru(a.position.x,k,t),Ru(a.position.z,A,t))+.3-ee*t)/(1-t);n>j&&(j=n)}let M=j-a.position.y;this.sideLift+=(M-this.sideLift)*(1-Math.exp(-e*(M>this.sideLift?10:2.5))),a.position.y+=Math.max(0,this.sideLift),a.position.x+=f*d*.01,a.position.y+=p*d*.012,a.up.set(0,1,0),a.lookAt(k,O+y.ly,A),a.fov=Ru(a.fov,this.sideFov+Lu(l*.05,0,3),Math.min(1,e*6)),this.back=0}else{let i=this._tgt;this.mode===`cockpit`?i.copy(n.eye):this.mode===`hood`?i.copy(n.hood):i.copy(n.bumper),this.mode===`cockpit`&&(i.x+=Lu(this.localAcc.x*.004,-.05,.05),i.y+=Lu(-this.localAcc.y*.002+t.landing*-.01,-.04,.03),i.z+=Lu(-this.localAcc.z*.003,-.07,.07)),i.applyQuaternion(c).add(s),a.position.copy(i),a.quaternion.copy(c),this.lookYaw+=((this.mode===`cockpit`?t.steerAng*.5:0)-this.lookYaw)*Math.min(1,e*5),this.back+=(+!!r-this.back)*(1-Math.exp(-e*9)),a.rotateY(Math.PI+this.lookYaw+this.back*Math.PI),this.mode===`cockpit`&&a.rotateX(-.02),a.position.x+=f*d*.012,a.position.y+=p*d*.016,a.rotateZ(f*d*.003);let o=this.mode===`cockpit`?76:72;a.fov=Ru(a.fov,o+Lu(l*.18,0,10),Math.min(1,e*4)),this.init=!1}a.updateProjectionMatrix()}}},Rg=class{constructor(){this.keys=new Set,this.pressed=new Set,this.steer=0,this.throttle=0,this.brake=0,this.handbrake=0,this.lookBack=!1,this.pad=null,this.padPrev={},addEventListener(`keydown`,e=>{[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.keys.add(e.code)}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>this.keys.clear())}wasPressed(e){return this.pressed.has(e)}update(e,t){let n=this.keys,r=n.has(`KeyW`)||n.has(`ArrowUp`)?1:0,i=n.has(`KeyS`)||n.has(`ArrowDown`)?1:0,a=+!!n.has(`Space`),o=(n.has(`KeyA`)||n.has(`ArrowLeft`)?1:0)-(n.has(`KeyD`)||n.has(`ArrowRight`)?1:0);this.lookBack=n.has(`KeyB`)||n.has(`KeyQ`);let s=navigator.getGamepads?navigator.getGamepads():[],c=null;for(let e of s)if(e&&e.connected){c=e;break}if(this.padPressed={},c){let e=Math.abs(c.axes[0])>.08?c.axes[0]:0,t=e=>c.buttons[e]?c.buttons[e].value:0;r=Math.max(r,t(7)),i=Math.max(i,t(6)),a=Math.max(a,t(0)),e!==0&&(o=-e*Math.abs(e)*.4+-e*.6),this.lookBack=this.lookBack||t(1)>.5;let n=(e,n)=>{let r=t(e)>.5;r&&!this.padPrev[e]&&(this.padPressed[n]=!0),this.padPrev[e]=r};n(3,`camera`),n(2,`reset`),n(9,`pause`),n(4,`camBack`),n(5,`camera`),n(1,`noop`),this.analog=e!==0}else this.analog=!1;let l=Math.min(1,Math.abs(t)/50);if(this.analog)this.steer+=(o-this.steer)*Math.min(1,e*18);else{let t=o===0?6:Math.sign(o)!==Math.sign(this.steer)&&this.steer!==0?9:3.4-l*1.2,n=o-this.steer;this.steer+=Math.sign(n)*Math.min(Math.abs(n),t*e)}this.throttle=r,this.brake=i,this.handbrake=a}endFrame(){this.pressed.clear()}},zg={low:{dpr:1,shadow:2048,ext:80,msaa:0,bloom:!1,veg:.45,ai:3,split:1.05,maxLevel:4,shadowLevels:0,particles:.5},medium:{dpr:1.25,shadow:2048,ext:100,msaa:2,bloom:!0,veg:.7,ai:4,split:1.2,maxLevel:5,shadowLevels:1,particles:.75},high:{dpr:1.5,shadow:4096,ext:110,msaa:4,bloom:!0,veg:1,ai:5,split:1.4,maxLevel:5,shadowLevels:1,particles:1},ultra:{dpr:2,shadow:4096,ext:130,msaa:4,bloom:!0,veg:1.25,ai:5,split:1.7,maxLevel:5,shadowLevels:2,particles:1}},Bg=[`ROJAS`,`MCKAY`,`TANAKA`,`OKAFOR`,`DELGADO`,`VOSS`,`RIVERA`,`HAYES`,`BRENNAN`,`LUNA`],Vg=[`#ff7a1a`,`#35e0ff`,`#7dff9a`,`#ff5a8a`,`#ffd23a`,`#b48cff`],Hg=(e=0)=>new Promise(t=>setTimeout(t,e)),Ug=e=>{if(!isFinite(e))return`--:--.-`;let t=Math.floor(e/60);return`${t}:${(e-t*60).toFixed(1).padStart(4,`0`)}`},Wg=e=>e+([`th`,`st`,`nd`,`rd`][e%100>10&&e%100<14?0:Math.min(e%10,4)%4]||`th`);function Gg(){let e={vehicle:`trophy`,tod:`golden`,cycle:`on`,quality:`high`,mode:`race`,laps:3,units:`mph`,map:`desert`,builds:{}},t=e;try{t={...e,...JSON.parse(localStorage.getItem(`dustline.settings`)||`{}`)}}catch{}if(t.builds={trophy:{...Kd(`trophy`),...t.builds?.trophy||{}},prerunner:{...Kd(`prerunner`),...t.builds?.prerunner||{}}},(t.v||0)<2){for(let e of[`trophy`,`prerunner`])t.builds[e].bumper=`prerunner`,t.builds[e].bed=`cage4`;t.v=2}if((t.v||0)<3){for(let e of[`trophy`,`prerunner`])t.builds[e].bed=`race`;t.v=3}return t}var Kg=new class{constructor(e){this.canvas=e,this.track=Z,this.cfg=Gg(),zg[this.cfg.quality]||(this.cfg.quality=`high`),this.state=`loading`,this.paused=!1,this.renderer=new ku({canvas:e,antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.toneMapping=4,this.renderer.localClippingEnabled=!0,this.renderer.info.autoReset=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.scene=new Pn,this.camera=new Ho(65,1,.1,14e3),this.camRig=new Lg(this.camera),this.nightLights=new Th(this.scene),this.input=new Rg,this.audio=new Ng,this.racers=[],this.player=null,this.acc=0,this.last=performance.now(),this.time=0,this.raceTime=0,this.cd=0,this.hudOn=!0,this.showFps=!1,this.coversOn=this.cfg.tod!==`night`,this.orbit={angle:.6,height:2.4,radius:8.8,dragging:!1,idle:99},this.autoScale=1,this.fpsAcc=0,this.fpsN=0,this.fps=60,this.slowTime=0,this.menuAngle=.6,this.wind=new K(2.5,0,1.2),this.tick=0,this.lookBack=!1,this.hudTimer=0,this.miniTimer=0,this.gaugeTimer=0,this.wrongWay=0,this.offCourse=0,this.resultsShown=!1,this._v=new K,this._v2=new K,this._q=new Et,this.dom={};for(let e of`loading.loadfill.loadtext.menu.hud.pause.results.posN.posOf.lapN.lapOf.timeT.lapT.mini.tach.camLabel.banner.toast.board.fps.resTable.resTitle.startBtn.resumeBtn.quitBtn.againBtn.menuBtn`.split(`.`))this.dom[e]=document.getElementById(e);this.sctx=document.getElementById(`susp`).getContext(`2d`),this.showSusp=!0,this.mctx=this.dom.mini.getContext(`2d`),this.tctx=this.dom.tach.getContext(`2d`)}progress(e,t){return this.dom.loadfill.style.width=Math.round(e*100)+`%`,t&&(this.dom.loadtext.textContent=t),Hg(8)}async init(){await this.progress(.02,`Surveying the course…`),pd(7,{map:this.cfg.map}),await this.progress(.1,`Mixing sand and gravel…`),this.noiseTex=Fh(512),this.terrainMat=Ih(this.noiseTex),this.terrainMat.userData.uniforms.uSandy.value=+(this.cfg.map===`dunes`),this.terrain=new zh(this.scene,this.terrainMat),this.env=new ag(this.renderer,this.scene,zg[this.cfg.quality]),await this.progress(.2,`Lighting the sky…`),this.env.setPreset(this.cfg.tod),Zm(this.cfg.tod===`night`),this.nightLights.setActive(this.cfg.tod===`night`),this.nightLights.setCovers(this.coversOn),this.veg=new Qh(this.scene,this.noiseTex,zg[this.cfg.quality].veg),this.props=Eg(this.scene),this.dust=new Ag(this.scene,{max:7e3,kind:`dust`,drag:1.1}),this.debris=new Ag(this.scene,{max:900,kind:`debris`,gravity:9.8,drag:.15,light:new q(1,1,1)}),this.sparks=new Ag(this.scene,{max:300,kind:`spark`,gravity:7,drag:.4,additive:!0}),this.applyQuality(this.cfg.quality,!0),await this.progress(.3,`Growing cacti…`);let e=hd(0),t=e.x,n=e.z;this.camera.position.set(t,td(t,n)+3,n),await this.progress(.4,`Grading terrain…`),this.terrain.update(t,n,0,!0),await this.progress(.7,`Planting desert flora…`),this.veg.update(t,n,0,!0),await this.progress(.8,`Building trucks…`),this.buildPlayer(),this.setupMinimap(),this.bindUI(),this.onResize(),addEventListener(`resize`,()=>this.onResize()),await this.progress(.96,`Warming engines…`),this.enterMenu(),await this.progress(1,`Ready`),await Hg(250),this.dom.loading.classList.add(`hidden`),this.last=performance.now(),requestAnimationFrame(e=>this.frame(e))}applyQuality(e,t=!1){let n=zg[e];this.cfg.quality=e,this.q=n,this.pr=Math.min(window.devicePixelRatio||1,n.dpr)*this.autoScale,this.env.setShadowQuality(n.shadow,n.ext),this.terrain.splitFactor=n.split,this.terrain.maxLevel=n.maxLevel,this.terrain.setShadowLevels(n.shadowLevels),this.veg.setQuality(n.veg),this.dust&&this.dust.uniforms,this.post&&this.post.composer.dispose?.(),this.post=new Sg(this.renderer,this.scene,this.camera,{samples:n.msaa,bloom:n.bloom}),this.post.setNight(this.env.preset===`night`),this.onResize(),this.saveSettings()}onResize(){let e=innerWidth,t=innerHeight;this._vw=e,this._vh=t,this.basePr=Math.min(window.devicePixelRatio||1,this.q?this.q.dpr:1),this.pr=this.basePr*this.autoScale,this.renderer.setPixelRatio(this.basePr),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.post&&this.post.setSize(e,t,this.pr)}setAutoScale(e){this.autoScale=e,this.pr=(this.basePr||1)*e,this.post&&this.post.setSize(this._vw,this._vh,this.pr)}saveSettings(){try{localStorage.setItem(`dustline.settings`,JSON.stringify(this.cfg))}catch{}}disposeModel(e){e&&(this.scene.remove(e.root),e.root.traverse(e=>{e.geometry&&!(e.geometry.userData&&e.geometry.userData.shared)&&e.geometry.type!==`CylinderGeometry`&&e.geometry.dispose(),e.material&&e.material.userData&&e.material.userData.owned&&e.material.dispose()}))}makeRacer({build:e,number:t,name:n,isPlayer:r,color:i}){let a=Jd(e),o=new xf(a,this.racers.length),s=Ch(a,t,n,t+3);return s.root.traverse(e=>{e.isMesh&&(e.frustumCulled=e.frustumCulled)}),this.scene.add(s.root),s.setCovers(this.coversOn),{vehicle:o,model:s,ai:null,isPlayer:r,name:n,number:t,color:i,idx:0,crossings:0,progress:0,finished:!1,finishTime:0,lapStart:0,lapTimes:[],bestLap:1/0}}buildPlayer(){this.player&&this.disposeModel(this.player.model),this.player=this.makeRacer({build:this.cfg.builds[this.cfg.vehicle],number:this.cfg.builds[this.cfg.vehicle].num||47,name:`YOU`,isPlayer:!0,color:Vg[0]}),this.player.vehicle.frozen=!0,this.placeOnGrid(this.player,0),this.racers=[this.player],this.camRig.snap(),this.nightLights.configure(this.cfg.builds[this.cfg.vehicle]),this.nightLights.setCovers(this.coversOn)}placeOnGrid(e,t){let n=hd(t);e.vehicle.placeAt(n.x,n.z,n.heading,.2),e.vehicle.frozen=!0,e.idx=n.idx,e.crossings=0,e.progress=n.idx,e.finished=!1,e.finishTime=0,e.lapTimes=[],e.bestLap=1/0,e.lapStart=0,e.ai&&(e.ai.idx=n.idx,e.ai.stuck=0),e.model.update(e.vehicle,1,!1,e.isPlayer)}buildField(){for(let e of this.racers)e.isPlayer||this.disposeModel(e.model);if(this.racers=[this.player],this.cfg.mode!==`race`)return;let e=this.q.ai,t=this.cfg.vehicle,n=e=>e[Math.floor(Math.random()*e.length)],r=Object.keys(Td),i=t===`trophy`?[.92,.96,.9,.95,.87]:[.93,.98,.95,.9,.96],a=new Set([47]);for(let o=0;o<e;o++){let e;do e=2+Math.floor(Math.random()*98);while(a.has(e));a.add(e);let s;do s=Math.floor(Math.random()*Qm.length);while(s===this.cfg.builds[t].livery);let c={...Kd(t),platform:n(t===`trophy`?[`raptor3`,`tundra3`,`raptor2`,`tundra2`,`silverado22`,`silverado19`,`sierra24`,`sierra19`]:r),livery:s,shock:n(t===`trophy`?[`king35`,`fox35`]:[`king25`,`fox25`,`king30`,`foxIbp30`]),bed:n(t===`trophy`?[`race`,`cage4`,`flat2`]:[`race`,`race`,`rack1`,`cage4`,`cage2f`]),rim:n([`race8`,`mesh`,`dish`]),finish:n([`black`,`silver`,`bronze`]),lights:n([`kc`,`baja`]),lens:n([`clear`,`amber`]),bdCover:n([`black`,`amber`,`clear`]),flag:n([`none`,`none`,`usa`,`checkered`,`mexico`,`team`]),roofBar:n([30,40,50]),fenders:t===`trophy`?`glass8`:n([`glass4`,`glass6`])},l=this.makeRacer({build:c,number:e,name:Bg[(o*3+1)%Bg.length],isPlayer:!1,color:Vg[(o+1)%Vg.length]});l.ai=new Nf(l.vehicle,{skill:i[o],lane:(o%2?1:-1)*(1+o%3),seed:o+2}),l.baseSkill=i[o],this.racers.push(l)}}enterMenu(){this.state=`menu`,this.paused=!1,document.body.classList.add(`menuView`),this.dom.menu.classList.remove(`hidden`),this.dom.hud.classList.add(`hidden`),this.dom.pause.classList.add(`hidden`),this.dom.results.classList.add(`hidden`),this.racers.filter(e=>!e.isPlayer).forEach(e=>this.disposeModel(e.model)),this.racers=[this.player],this.placeOnGrid(this.player,0),this.player.vehicle.frozen=!0,this.resultsShown=!1,this.camRig.mode=`chase`,document.body.classList.remove(`cine`)}startRace(){if(document.body.classList.remove(`menuView`),this.audio.start(),this.dom.menu.classList.add(`hidden`),this.dom.results.classList.add(`hidden`),this.dom.hud.classList.remove(`hidden`),this.buildField(),this.resultsShown=!1,this.raceTime=0,this.cfg.mode===`race`){this.racers.map((e,t)=>t);let e=[3,0,1,2,4,5].slice(0,this.racers.length);this.racers.forEach((t,n)=>{this.placeOnGrid(t,e[n])}),this.state=`countdown`,this.cd=4.2,this.lastCdShown=99,this.dom.lapOf.textContent=this.cfg.laps,document.querySelector(`.pos`).style.display=``,document.querySelector(`.lap`).style.display=``}else this.placeOnGrid(this.player,0),this.player.vehicle.frozen=!1,this.player.crossings=1,this.state=`racing`,document.querySelector(`.pos`).style.display=`none`,document.querySelector(`.lap`).style.display=`none`,this.dom.board.innerHTML=``;this.camRig.snap(),this.camRig.mode=`chase`,this.showCam(),this.updateTimeOfDayLighting()}finishRaceUI(){let e=this.sortedRacers().map((e,t)=>`<tr class="${e.isPlayer?`me`:``}"><td>${t+1}</td><td>${e.isPlayer?`YOU`:e.name} <small style="opacity:.5">#${e.number}</small></td><td>${e.vehicle.spec.name}</td><td>${e.finished?Ug(e.finishTime):`DNF`}</td><td>${isFinite(e.bestLap)?Ug(e.bestLap):`--`}</td></tr>`).join(``);this.dom.resTable.innerHTML=`<tr><th>#</th><th>Driver</th><th>Vehicle</th><th>Time</th><th>Best lap</th></tr>${e}`;let t=this.sortedRacers().indexOf(this.player)+1;this.dom.resTitle.textContent=t===1?`Victory!`:`Finished ${Wg(t)}`,this.dom.results.classList.remove(`hidden`),this.resultsShown=!0}sortedRacers(){return[...this.racers].sort((e,t)=>e.finished&&t.finished?e.finishTime-t.finishTime:e.finished?-1:t.finished?1:t.progress-e.progress)}toast(e,t=1800){let n=this.dom.toast;n.textContent=e,n.classList.add(`show`),clearTimeout(this._toast),this._toast=setTimeout(()=>n.classList.remove(`show`),t)}banner(e,t=``,n=900){let r=this.dom.banner;r.textContent=e,r.className=`show `+t,clearTimeout(this._banner),n>0&&(this._banner=setTimeout(()=>{r.className=``},n))}showCam(){let e=this.dom.camLabel;e.textContent=Fg[this.camRig.mode],e.classList.add(`show`),clearTimeout(this._cam),this._cam=setTimeout(()=>e.classList.remove(`show`),1600);let t=this.camRig.mode===`cockpit`;this.player.model.setFirstPerson(t),document.body.classList.toggle(`cine`,this.camRig.mode===`side`)}tickDayCycle(e){let t=this.env;this._iblT=(this._iblT||0)+e;let n=this._iblT>2;n&&(this._iblT=0),t.setClock(t.clock+e*24/1440,n),n&&this.updateTimeOfDayLighting();let r=t.t.night>(this._isNight?.4:.6);this._isNight===void 0&&(this._isNight=this.cfg.tod===`night`),r!==this._isNight&&(this._isNight=r,this.applyNight(r),this.toast(r?`Night falls: lights on`:`Sunrise`))}updateTimeOfDayLighting(){let e=this.env.t,t=new q().setRGB(...e.sunColor,W),n=new q().setRGB(...e.horizon,W),r=Math.sin(Tt.degToRad(e.elev)),i=t.clone().multiplyScalar(e.sunI/Math.PI*.8*Math.max(.3,r*1.6)).add(n.clone().multiplyScalar(.42*e.env));for(let e of[this.dust,this.debris,this.sparks])e.setLighting(e===this.sparks?new q(1,1,1):i,this.scene.fog);this.dust.uniforms.uLight.value.copy(i)}bindUI(){let e=(e,t,n)=>{let r=document.getElementById(e),i=e=>{[...r.children].forEach(t=>t.classList.toggle(`sel`,t.dataset.v===String(e)))};i(this.cfg[t]),r.addEventListener(`click`,e=>{let r=e.target.closest(`button`);r&&(this.cfg[t]=isNaN(+r.dataset.v)?r.dataset.v:+r.dataset.v,i(this.cfg[t]),n&&n(this.cfg[t]),this.saveSettings())})};e(`todSeg`,`tod`,e=>{this.env.setPreset(e),this.updateTimeOfDayLighting(),this._isNight=e===`night`,this.applyNight(e===`night`)}),e(`cycleSeg`,`cycle`,e=>{e===`off`?this.toast(`Time of day locked`):this.toast(`Day cycle on: a full day and night every 24 minutes`)}),e(`qualSeg`,`quality`,e=>{this.autoScale=1,this.applyQuality(e)}),e(`modeSeg`,`mode`),e(`lapSeg`,`laps`),e(`unitSeg`,`units`),e(`mapSeg`,`map`,e=>{this.toast(`Loading `+(e===`dunes`?`the dune sea`:`the desert course`)+`…`,4e3),setTimeout(()=>location.reload(),150)});let t=document.getElementById(`vehicleCards`),n=e=>{[...t.children].forEach(t=>t.classList.toggle(`sel`,t.dataset.v===e))};n(this.cfg.vehicle),t.addEventListener(`click`,e=>{let t=e.target.closest(`.card`);t&&(this.cfg.vehicle=t.dataset.v,n(this.cfg.vehicle),this.applyBuild())}),this.garage=new jh(this);let r=this.canvas,i=this.orbit,a=null;r.style.touchAction=`none`,r.addEventListener(`pointerdown`,e=>{this.state===`menu`&&(i.dragging=!0,i.idle=0,a=[e.clientX,e.clientY],r.setPointerCapture(e.pointerId),r.classList.add(`grab`))}),r.addEventListener(`pointermove`,e=>{i.dragging&&a&&(i.angle-=(e.clientX-a[0])*.0075,i.height=Lu(i.height+(e.clientY-a[1])*.012,.5,6.5),a=[e.clientX,e.clientY],i.idle=0)});let o=e=>{i.dragging=!1,a=null,i.idle=0,r.classList.remove(`grab`);try{r.releasePointerCapture(e.pointerId)}catch{}};r.addEventListener(`pointerup`,o),r.addEventListener(`pointercancel`,o),r.addEventListener(`wheel`,e=>{this.state===`menu`&&(e.preventDefault(),i.radius=Lu(i.radius+e.deltaY*.01,5,16),i.idle=0)},{passive:!1}),document.getElementById(`garageBtn`).addEventListener(`click`,()=>this.garage.open()),this.refreshMenu(),this.dom.startBtn.addEventListener(`click`,()=>this.startRace()),this.dom.resumeBtn.addEventListener(`click`,()=>this.setPaused(!1)),this.dom.quitBtn.addEventListener(`click`,()=>{this.setPaused(!1),this.enterMenu()}),this.dom.againBtn.addEventListener(`click`,()=>this.startRace()),this.dom.menuBtn.addEventListener(`click`,()=>this.enterMenu())}debugView(e,t,n=40){this.debugCam=e?{pos:e,look:t,fov:n}:null,this.veg&&this.veg.group&&(this.veg.group.visible=!e)}setCovers(e,t=!1){this.coversOn=e,this.nightLights.setCovers(e);for(let t of this.racers)t.model.setCovers(e);t&&this.toast(`Light covers `+(e?`ON`:`OFF`))}applyNight(e){this.setCovers(!e),Zm(e),this.post.setNight(e),this.nightLights.build=this.cfg.builds[this.cfg.vehicle],this.nightLights.setActive(e);for(let e of this.racers)e.model.applyNight()}applyBuild(){this.buildPlayer(),this.saveSettings(),this.refreshMenu()}resetBuild(){this.cfg.builds[this.cfg.vehicle]=Kd(this.cfg.vehicle),this.applyBuild()}refreshMenu(){document.getElementById(`buildSummary`).textContent=qd(this.cfg.builds[this.cfg.vehicle])}setPaused(e){this.state!==`menu`&&this.state!==`loading`&&(this.paused=e,this.dom.pause.classList.toggle(`hidden`,!e),e||(this.last=performance.now()))}setupMinimap(){let e=Z.bbox,t=e.maxX-e.minX+240,n=e.maxZ-e.minZ+240;this.mm={s:Math.min(200/t,200/n),ox:e.minX-120,oz:e.minZ-120,w:t,h:n,S:200},this.mm.off={x:(220-t*this.mm.s)/2,y:(220-n*this.mm.s)/2}}mmPt(e,t){let n=this.mm;return[n.off.x+(e-n.ox)*n.s,n.off.y+(t-n.oz)*n.s]}drawMinimap(){let e=this.mctx,t=Z.N;e.clearRect(0,0,220,220),e.lineJoin=`round`,e.lineCap=`round`,e.strokeStyle=`rgba(0,0,0,0.6)`,e.lineWidth=7,e.beginPath();for(let n=0;n<=t;n+=3){let[r,i]=this.mmPt(Z.x[n%t],Z.z[n%t]);n===0?e.moveTo(r,i):e.lineTo(r,i)}e.closePath(),e.stroke(),e.strokeStyle=`rgba(255,196,120,0.9)`,e.lineWidth=3.4,e.stroke();let[n,r]=this.mmPt(Z.x[0],Z.z[0]);e.fillStyle=`#fff`,e.fillRect(n-4,r-1.5,8,3);for(let t of this.racers){let[n,r]=this.mmPt(t.vehicle.pos.x,t.vehicle.pos.z);if(e.beginPath(),e.arc(n,r,t.isPlayer?5.5:4,0,Math.PI*2),e.fillStyle=t.isPlayer?`#fff`:t.color,e.fill(),e.lineWidth=1.5,e.strokeStyle=`rgba(0,0,0,0.8)`,e.stroke(),t.isPlayer){let i=t.vehicle.forward;e.beginPath(),e.moveTo(n,r),e.lineTo(n+i.x*12,r+i.z*12),e.strokeStyle=`#fff`,e.lineWidth=2,e.stroke()}}}drawTach(){let e=this.tctx,t=this.player.vehicle,n=t.spec.engine;e.clearRect(0,0,360,260);let r=e.createRadialGradient(220,160,20,220,160,140);r.addColorStop(0,`rgba(10,8,6,0.62)`),r.addColorStop(1,`rgba(10,8,6,0)`),e.fillStyle=r,e.fillRect(0,0,360,260),e.lineWidth=14,e.lineCap=`butt`;let i=Math.PI*.78,a=Math.PI*2.22,o=a-i;e.strokeStyle=`rgba(255,255,255,0.14)`,e.beginPath(),e.arc(220,160,108,i,a),e.stroke();let s=Math.min(1,t.rpm/n.red);e.strokeStyle=s>.92?`#ff3b2b`:s>.78?`#ffb020`:`#35e0ff`,e.beginPath(),e.arc(220,160,108,i,i+o*s),e.stroke(),e.strokeStyle=`rgba(255,60,40,0.8)`,e.lineWidth=14,e.beginPath(),e.arc(220,160,108,i+o*.88,a),e.stroke(),e.fillStyle=`rgba(255,255,255,0.7)`,e.font=`600 13px system-ui`,e.textAlign=`center`;for(let t=0;t<=7;t++){let n=i+t/7*o;e.fillText(String(t),220+Math.cos(n)*82,160+Math.sin(n)*82+5)}let c=this.cfg.units===`mph`,l=Math.round(t.speed*(c?2.23694:3.6));e.fillStyle=`#fff`,e.font=`italic 900 78px system-ui`,e.textAlign=`center`,e.fillText(String(l),220,182),e.fillStyle=`rgba(255,255,255,0.65)`,e.font=`700 14px system-ui`,e.fillText(c?`MPH`:`KM/H`,220,206);let u=t.gear<0?`R`:t.gear===0?`N`:String(t.gear);e.fillStyle=`#ffb020`,e.font=`italic 900 44px system-ui`,e.textAlign=`right`,e.fillText(u,92,230),e.fillStyle=`rgba(255,255,255,0.5)`,e.font=`700 11px system-ui`,e.fillText(`GEAR`,92,246),e.textAlign=`left`,e.font=`800 13px system-ui`,e.fillStyle=t.tc?t.tcActive>.15?`#ffb020`:`#2ee59d`:`rgba(255,255,255,0.3)`,e.fillText(t.tc?`TC`:`TC OFF`,14,238),t.airborne&&t.airTime>.25&&(e.fillStyle=`#35e0ff`,e.fillText(`AIR `+t.airTime.toFixed(1)+`s`,14,218))}drawSusp(){let e=this.sctx,t=this.player.vehicle;if(e.clearRect(0,0,300,220),!this.showSusp)return;e.fillStyle=`rgba(10,8,6,0.55)`,e.fillRect(0,0,300,220),e.font=`700 15px system-ui`,e.fillStyle=`rgba(255,255,255,.8)`,e.textAlign=`left`,e.fillText(t.spec.shock.name,12,22);let n=[[160,42],[24,42],[160,128],[24,128]];t.wheels.forEach((t,r)=>{let[i,a]=n[r],o=t.xr??0;e.fillStyle=`rgba(255,255,255,.14)`,e.fillRect(i,a,26,72),e.fillStyle=o>.92?`#ff3b2b`:o>.75?`#ffb020`:`#35e0ff`,e.fillRect(i,a+72*(1-o),26,72*o),e.fillStyle=t.ground?`#fff`:`rgba(255,255,255,.35)`,e.font=`700 13px system-ui`,e.fillText([`FL`,`FR`,`RL`,`RR`][r],i+26+6,a+14);let s=t.temp??40,c=s*9/5+32;e.fillStyle=s>150?`#ff3b2b`:s>95?`#ffb020`:`rgba(255,255,255,.7)`,e.font=`600 12px system-ui`,e.fillText(Math.round(c)+`°F`,i+26+6,a+32)})}stepPhysics(){let e=Zd,t=this.tick++;this.state===`racing`||this.state===`finished`||this.state;let n=this.player,r=n.vehicle;if(this.autopilot&&this.state!==`menu`?(n.autoAI||(n.autoAI=new Nf(r,{skill:.95,lane:0,seed:9}),n.autoAI.reseat()),t%2==0&&n.autoAI.update(e*2,this.raceTime,this.state!==`countdown`)):this.state===`racing`||this.state===`countdown`||this.state===`results`?r.setInput({throttle:this.input.throttle,brake:this.input.brake,steer:this.input.steer,handbrake:this.state===`countdown`?0:this.input.handbrake}):r.setInput({throttle:0,brake:.2,steer:0,handbrake:0}),!this.autopilot&&(this.state===`finished`||n.finished&&this.state===`racing`)&&r.setInput({throttle:0,brake:.5,steer:this.input.steer*.3,handbrake:0}),t%2==0)for(let t of this.racers)t.ai&&(t.ai.update(e*2,this.raceTime,this.state!==`countdown`&&!(t.finished&&0)),t.finished&&t.vehicle.setInput({throttle:0,brake:.3,steer:t.vehicle.input.steer,handbrake:0}));for(let t of this.racers)t.vehicle.step(e);for(let e=0;e<this.racers.length;e++)for(let t=e+1;t<this.racers.length;t++)jf(this.racers[e].vehicle,this.racers[t].vehicle);for(let e of this.racers){if(!e.ai)continue;let t=e.vehicle;if(t.bad||e.ai.stuck>3.5||t.flippedTime>2.5){let n=e.ai.idx,r=e.ai.lane;t.bad=!1,t.placeAt(Z.x[n]-Z.tz[n]*r,Z.z[n]+Z.tx[n]*r,Z.hdg[n],.6),e.ai.stuck=0,t.flippedTime=0}}r.bad&&(r.bad=!1,this.resetPlayer())}fastForward(e){let t=Math.floor(e/Zd);for(let e=0;e<t;e++)this.stepPhysics(),e%2==0&&((this.state===`racing`||this.state===`finished`)&&(this.raceTime+=Zd*2),this.updateRace(Zd*2)),this.state===`finished`&&this.raceTime-this.finishAt>3&&!this.resultsShown&&(this.state=`results`,this.finishRaceUI())}resetPlayer(){let e=this.player,t=e.vehicle;if(this.cfg.mode===`race`&&(this.state===`racing`||this.state===`results`||this.state===`finished`)){let n=e.idx;t.placeAt(Z.x[n],Z.z[n],Z.hdg[n],.5)}else t.placeAt(t.pos.x,t.pos.z,t.heading,.8);t.frozen=!1,t.flippedTime=0,this.camRig.snap(),this.toast(`Reset to course`)}updateRace(e){let t=Z.N;for(let e of this.racers){let n=e.vehicle,r=e.idx,i=md(n.pos.x,n.pos.z,e.idx,55);if(e.idx=i,r>t*.75&&i<t*.25){if(e.crossings++,e.crossings>=2&&!e.finished){let t=this.raceTime-e.lapStart;e.lapTimes.push(t),e.bestLap=Math.min(e.bestLap,t),e.isPlayer&&e.crossings<=this.cfg.laps&&this.toast(`LAP ${e.crossings-1}  ${Ug(t)}`,2200)}e.lapStart=this.raceTime,e.crossings>=this.cfg.laps+1&&!e.finished&&this.cfg.mode===`race`&&(e.finished=!0,e.finishTime=this.raceTime,e.isPlayer&&(this.state=`finished`,this.finishAt=this.raceTime,this.banner(`FINISH`,`go`,2500)))}else r<t*.25&&i>t*.75&&e.crossings>0&&e.crossings--;e.progress=e.crossings*t+e.idx}let n=this.player.progress*3;for(let e of this.racers){if(!e.ai)continue;let t=e.progress*3-n;e.ai.speedScale=Lu(1-t/1400,.9,1.05)}}emitEffects(e){let t=this.camera.position,n=this.q.particles;for(let r of this.racers){let i=r.vehicle,a=(i.pos.x-t.x)**2+(i.pos.z-t.z)**2;if(a>67600)continue;let o=a>8100;for(let t of i.wheels){if(!t.ground||t.dust<.12)continue;let a=t.surfSand,s=t.surfRoad,c=t.dust*(36+i.speed*3.2)*(.6+.6*a+.4*(1-s))*n*(o?.45:r.isPlayer?1:.7)*e,l=Math.floor(c);Math.random()<c-l&&l++;for(let e=0;e<l;e++){let e=i.speed,n=i.vel.x,r=i.vel.z,o=1+Math.random()*.8+a*.6,c=5+Math.random()*4+e*.06+a*2.5,l=.66+s*-.06+a*.1,u=.52+a*.07,d=.37+a*.05;this.dust.emit(t.contact.x+(Math.random()-.5)*.7,t.contact.y+.15,t.contact.z+(Math.random()-.5)*.7,n*.3+(Math.random()-.5)*3.5,.9+Math.random()*2.2+e*.03,r*.3+(Math.random()-.5)*3.5,o,c,2.6+Math.random()*2.4,.42*Math.min(1,t.dust)*(.65+.5*(1-s)),l,u,d)}let u=Math.abs(t.slipX)+Math.abs(t.slipY)*.6;if(!o&&u>2.2&&Math.random()<e*40*n){let e=this._v.set(0,0,-1).applyQuaternion(i.quat);this.debris.emit(t.contact.x,t.contact.y+.2,t.contact.z,i.vel.x*.5+e.x*5+(Math.random()-.5)*3,3+Math.random()*4,i.vel.z*.5+e.z*5+(Math.random()-.5)*3,.07+Math.random()*.06,.07,.9,.9,.26,.2,.15)}}if(i.hitCount>0&&i.speed>7&&!o)for(let e of i.hits)e.kind===0&&Math.random()<.25&&this.sparks.emit(e.w.x,e.w.y,e.w.z,i.vel.x*.3+(Math.random()-.5)*5,2+Math.random()*3,i.vel.z*.3+(Math.random()-.5)*5,.05,.03,.35+Math.random()*.3,1,1.6,.8,.3)}}updateAudioEvents(e){let t=this.player.vehicle;t.bottomed>2.5&&(this.audio.thump(Math.min(1,t.bottomed/8)),t.bottomed=0),t.landing>.25&&(this.audio.thump(Math.min(1,.4+t.landing*.4)),t.landing=0),t.impact>3.5&&(this.audio.crash(Math.min(1,t.impact/14)),t.impact=0)}updateHUD(e){let t=this.dom,n=this.player;if(this.hudTimer-=e,this.hudTimer<=0){if(this.hudTimer=1/15,this.cfg.mode===`race`){let e=this.sortedRacers();t.posN.textContent=e.indexOf(n)+1,t.posOf.textContent=`/`+this.racers.length,t.lapN.textContent=Lu(n.crossings,1,this.cfg.laps),t.timeT.textContent=Ug(this.raceTime),t.lapT.textContent=isFinite(n.bestLap)?`BEST `+Ug(n.bestLap):``,t.board.innerHTML=e.map((e,t)=>`<div class="${e.isPlayer?`me`:``}"><i style="background:${e.isPlayer?`#fff`:e.color}"></i>${t+1}. ${e.isPlayer?`YOU`:e.name}${e.finished?` ✓`:``}</div>`).join(``)}else t.timeT.textContent=Ug(this.raceTime),t.lapT.textContent=``}if(this.miniTimer-=e,this.miniTimer<=0&&(this.miniTimer=.1,this.drawMinimap()),this.gaugeTimer-=e,this.gaugeTimer<=0&&(this.gaugeTimer=1/30,this.drawTach(),this.drawSusp()),this.state===`racing`&&this.cfg.mode===`race`){let r=n.vehicle,i=n.idx,a=r.forward,o=a.x*Z.tx[i]+a.z*Z.tz[i];this.wrongWay=o<-.35&&r.speed>4?this.wrongWay+e:Math.max(0,this.wrongWay-e*2);let s=ed(r.pos.x,r.pos.z),c=s.d>60||s.d>=1e3;this.offCourse=c?this.offCourse+e:0,this.wrongWay>1.5?this.banner(`WRONG WAY`,`warn`,0):this.offCourse>2.5?this.banner(`RETURN TO COURSE  [R]`,`warn`,0):t.banner.classList.contains(`warn`)&&(t.banner.className=``)}}frame(e){requestAnimationFrame(e=>this.frame(e));let t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,t<=0)return;if(this.fpsAcc+=t,this.fpsN++,this.fpsAcc>1){if(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0,this.showFps){let e=this.prof||{};this.dom.fps.textContent=`${this.fps.toFixed(0)} fps • ${this.pr.toFixed(2)}x • ${this.renderer.info.render.calls} calls • ${(this.renderer.info.render.triangles/1e3).toFixed(0)}k tris • phys ${(e.phys||0).toFixed(1)} vis ${(e.vis||0).toFixed(1)} stream ${(e.stream||0).toFixed(1)} submit ${(e.submit||0).toFixed(1)} gpu ${(e.gpuwait||0).toFixed(1)}ms`}this.state!==`menu`&&!this.paused&&document.hasFocus()&&!document.hidden&&(this.fps<40?this.slowTime+=1:this.slowTime=Math.max(0,this.slowTime-.5),this.slowTime>=4&&this.autoScale>.6?(this.setAutoScale(Math.max(.6,+(this.autoScale-.1).toFixed(2))),this.slowTime=0,this.fastTime=0,this.lastDown=this.time):this.fps>57?(this.fastTime=(this.fastTime||0)+1,this.fastTime>=15&&this.autoScale<1&&this.time-(this.lastDown||-99)>45&&(this.setAutoScale(Math.min(1,+(this.autoScale+.1).toFixed(2))),this.fastTime=0)):this.fastTime=0)}let n=performance.now();this.prof=this.prof||{},this.handleHotkeys();let r=this.paused,i=this.state===`menu`,a=this.player,o=a.vehicle;if(this.input.update(t,o.fwdSpeed),!r){if(this.time+=t,this.state===`countdown`){this.cd-=t;let e=Math.ceil(this.cd-.2);e!==this.lastCdShown&&e>=1&&e<=3&&(this.lastCdShown=e,this.banner(String(e),``,800),this.audio.beep(520,.18)),this.cd<=.2&&this.lastCdShown!==0&&(this.lastCdShown=0,this.banner(`GO!`,`go`,900),this.audio.beep(1040,.5),this.racers.forEach(e=>{e.vehicle.frozen=!1}),this.state=`racing`,this.raceTime=0,this.racers.forEach(e=>{e.lapStart=0}))}if((this.state===`racing`||this.state===`finished`)&&(this.raceTime+=t),this.state===`finished`&&this.raceTime-this.finishAt>3&&!this.resultsShown&&(this.state=`results`,this.finishRaceUI()),i){this.acc+=t;let e=0;for(;this.acc>=.008333333333333333&&e<12;)o.setInput({throttle:0,brake:0,steer:0,handbrake:0}),o.step(Zd),this.acc-=Zd,e++;this.orbit.idle+=t,!this.orbit.dragging&&this.orbit.idle>2.2&&(this.orbit.angle+=t*.18)}else{this.acc+=t;let e=0;for(;this.acc>=.008333333333333333&&e<12;)this.stepPhysics(),this.acc-=Zd,e++;e>=12&&(this.acc=0),(this.state===`racing`||this.state===`finished`||this.state===`results`)&&this.updateRace(t)}}let s=performance.now(),c=Lu(this.acc/Zd,0,1),l=this.camera.position;for(let e of this.racers){let t=(e.vehicle.pos.x-l.x)**2+(e.vehicle.pos.z-l.z)**2;e.model.setDetail(e.isPlayer||t<6400);let n=e.vehicle.input.brake>.1&&e.vehicle.gear>=0||e.vehicle.gear<0&&e.vehicle.input.throttle>.1;e.model.update(e.vehicle,r?1:c,n,e.isPlayer)}if(this.nightLights.update(o,a.model),i&&!this.debugCam?this._viewOff||=(this.camera.setViewOffset(this._vw,this._vh,-this._vw*.2,0,this._vw,this._vh),!0):this._viewOff&&=(this.camera.clearViewOffset(),!1),i?this.camRig.update(t,o,a.model,!1,this.orbit):this.camRig.update(t,o,a.model,this.input.lookBack,null),this.debugCam){let e=this.debugCam,t=a.model.body;t.updateWorldMatrix(!0,!1),this.camera.position.copy(t.localToWorld(this._v.set(...e.pos))),this.camera.up.set(0,1,0),this.camera.lookAt(t.localToWorld(this._v2.set(...e.look))),this.camera.fov=e.fov,this.camera.updateProjectionMatrix()}if(this.camera.updateMatrixWorld(),a.model.setCutaway(!i&&this.camRig.mode===`side`&&this.camRig.cutaway?this.camRig.sideSign:0),this.camRig.mode===`cockpit`&&!i&&Ym(a.model.gauge.gauge,o,this.cfg.units===`mph`),r||(this.updateAudioEvents(t),i||(this.emitEffects(t),this.updateHUD(t)),this.dust.update(t,this.wind),this.debris.update(t),this.sparks.update(t)),this.audio.update(t,o,{cockpit:this.camRig.mode===`cockpit`,paused:r||i}),!i&&!r){let e=this._v.set(0,0,-1).applyQuaternion(this.camera.quaternion);this.audio.updateAI(this.camera.position,e,this.racers.filter(e=>!e.isPlayer).map(e=>e.vehicle),o.vel)}let u=performance.now();this.terrain.update(l.x,l.z,i?6:3.2),this.veg.update(l.x,l.z,450),this.cfg.cycle!==`off`&&!r&&this.tickDayCycle(t),this.env.update(t,this.camera,o.pos);let d=performance.now();this.renderer.info.reset(),this.post.render(t,this.time,{blur:this.speedBlur(o,i),dust:0});let f=performance.now();this.profGPU&&this.renderer.getContext().finish();let p=performance.now(),m=this.prof,h=.05;m.phys=(m.phys??0)*.95+(s-n)*h,m.vis=(m.vis??0)*.95+(u-s)*h,m.stream=(m.stream??0)*.95+(d-u)*h,m.submit=(m.submit??0)*.95+(f-d)*h,m.gpuwait=(m.gpuwait??0)*.95+(p-f)*h,this.input.endFrame()}speedBlur(e,t){if(t)return 0;let n=Lu((e.speed-28)/40,0,1);return n*n*.06*(this.camRig.mode===`cockpit`?1.1:.9)}handleHotkeys(){let e=this.input,t=t=>e.wasPressed(t),n=e.padPressed||{};(t(`KeyC`)||n.camera)&&this.state!==`menu`&&(this.camRig.cycle(1),this.showCam()),t(`KeyX`)&&this.state!==`menu`&&(this.camRig.mode===`side`?this.camRig.sideSign*=-1:(this.camRig.mode=`side`,this.camRig.snap()),this.showCam(),this.toast(`Cinematic side cam — `+(this.camRig.sideSign>0?`left`:`right`)+` side  ·  X flip side  ·  Z cutaway `+(this.camRig.cutaway?`on`:`off`),2600)),t(`KeyL`)&&this.setCovers(!this.coversOn,!0),t(`KeyZ`)&&this.state!==`menu`&&(this.camRig.cutaway=!this.camRig.cutaway,this.toast(`Suspension cutaway `+(this.camRig.cutaway?`ON`:`OFF`))),n.camBack&&this.state!==`menu`&&(this.camRig.cycle(-1),this.showCam()),(t(`KeyR`)||n.reset)&&(this.state===`racing`||this.state===`results`)&&this.resetPlayer(),t(`KeyT`)&&(this.player.vehicle.tc=!this.player.vehicle.tc,this.player.vehicle.esc=this.player.vehicle.tc,this.toast(`Traction control `+(this.player.vehicle.tc?`ON`:`OFF`))),(t(`Escape`)||t(`KeyP`)||n.pause)&&this.state!==`menu`&&this.state!==`loading`&&this.setPaused(!this.paused),t(`KeyM`)&&(this.audio.start(),this.audio.setMuted(!this.audio.muted),this.toast(this.audio.muted?`Sound off`:`Sound on`)),t(`KeyH`)&&(this.hudOn=!this.hudOn,this.dom.hud.classList.toggle(`hidden`,!this.hudOn||this.state===`menu`)),t(`KeyY`)&&(this.showSusp=!this.showSusp),t(`KeyV`)&&(this.showFps=!this.showFps,this.dom.fps.textContent=``),t(`KeyF`)&&(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()),t(`Enter`)&&this.state===`menu`&&this.startRace()}}(document.getElementById(`gl`));window.dustline=Kg,Kg.init().catch(e=>{console.error(e),document.getElementById(`loadtext`).textContent=`Error: `+e.message});