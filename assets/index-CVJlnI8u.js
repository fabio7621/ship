(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1014,d=1015,f=1016,p=1020,m=1023,h=1026,g=1027,_=2300,v=2301,y=2302,b=2400,x=2401,S=2402,C=3e3,w=3001,T=3200,E=3201,D=`srgb`,O=`srgb-linear`,k=`display-p3`,A=`display-p3-linear`,j=`linear`,M=`srgb`,N=`rec709`,ee=7680,te=35044,ne=35048,re=1035,ie=2e3,ae=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},oe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),se=1234567,ce=Math.PI/180,le=180/Math.PI;function ue(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(oe[e&255]+oe[e>>8&255]+oe[e>>16&255]+oe[e>>24&255]+`-`+oe[t&255]+oe[t>>8&255]+`-`+oe[t>>16&15|64]+oe[t>>24&255]+`-`+oe[n&63|128]+oe[n>>8&255]+`-`+oe[n>>16&255]+oe[n>>24&255]+oe[r&255]+oe[r>>8&255]+oe[r>>16&255]+oe[r>>24&255]).toLowerCase()}function P(e,t,n){return Math.max(t,Math.min(n,e))}function de(e,t){return(e%t+t)%t}function fe(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pe(e,t,n){return e===t?0:(n-e)/(t-e)}function me(e,t,n){return(1-n)*e+n*t}function he(e,t,n,r){return me(e,t,1-Math.exp(-n*r))}function ge(e,t=1){return t-Math.abs(de(e,t*2)-t)}function F(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _e(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ve(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ye(e,t){return e+Math.random()*(t-e)}function I(e){return e*(.5-Math.random())}function be(e){e!==void 0&&(se=e);let t=se+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xe(e){return e*ce}function Se(e){return e*le}function Ce(e){return(e&e-1)==0&&e!==0}function we(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Te(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ee(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function De(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function L(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Oe={DEG2RAD:ce,RAD2DEG:le,generateUUID:ue,clamp:P,euclideanModulo:de,mapLinear:fe,inverseLerp:pe,lerp:me,damp:he,pingpong:ge,smoothstep:F,smootherstep:_e,randInt:ve,randFloat:ye,randFloatSpread:I,seededRandom:be,degToRad:xe,radToDeg:Se,isPowerOfTwo:Ce,ceilPowerOfTwo:we,floorPowerOfTwo:Te,setQuaternionFromProperEuler:Ee,normalize:L,denormalize:De},R=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(P(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},z=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ke.makeScale(e,t)),this}rotate(e){return this.premultiply(ke.makeRotation(-e)),this}translate(e,t){return this.premultiply(ke.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ke=new z;function Ae(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Me(){let e=je(`canvas`);return e.style.display=`block`,e}var Ne={};function Pe(e){e in Ne||(Ne[e]=!0,console.warn(e))}var Fe=new z().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ie=new z().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Le={[O]:{transfer:j,primaries:N,toReference:e=>e,fromReference:e=>e},[D]:{transfer:M,primaries:N,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[A]:{transfer:j,primaries:`p3`,toReference:e=>e.applyMatrix3(Ie),fromReference:e=>e.applyMatrix3(Fe)},[k]:{transfer:M,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Ie),fromReference:e=>e.applyMatrix3(Fe).convertLinearToSRGB()}},Re=new Set([O,A]),B={enabled:!0,_workingColorSpace:O,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Re.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Le[t].toReference,i=Le[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Le[e].primaries},getTransfer:function(e){return e===``?j:Le[e].transfer}};function ze(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Be(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ve,He=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ve===void 0&&(Ve=je(`canvas`)),Ve.width=e.width,Ve.height=e.height;let n=Ve.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ve}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ze(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ze(t[e]/255)*255):t[e]=ze(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ue=0,We=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ue++}),this.uuid=ue(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ge(r[t].image)):e.push(Ge(r[t]))}else e=Ge(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ge(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?He.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Ke=0,qe=class r extends ae{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=m,f=l,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ke++}),this.uuid=ue(),this.name=``,this.source=new We(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h==`string`?this.colorSpace=h:(Pe(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=h===3001?D:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pe(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?w:C}set encoding(e){Pe(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?D:``}};qe.DEFAULT_IMAGE=null,qe.DEFAULT_MAPPING=300,qe.DEFAULT_ANISOTROPY=1;var Je=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ye=class extends ae{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Pe(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?D:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new We(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xe=class extends Ye{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ze=class extends qe{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qe=class extends qe{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$e=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(P(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return et.copy(this).projectOnVector(e),this.sub(et)}reflect(e){return this.sub(et.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(P(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},et=new V,tt=new $e,nt=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(it.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(it.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=it.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,it):it.fromBufferAttribute(r,t),it.applyMatrix4(e.matrixWorld),this.expandByPoint(it);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),at.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),at.copy(e.boundingBox)),at.applyMatrix4(e.matrixWorld),this.union(at)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,it),it.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ft),pt.subVectors(this.max,ft),ot.subVectors(e.a,ft),st.subVectors(e.b,ft),ct.subVectors(e.c,ft),lt.subVectors(st,ot),ut.subVectors(ct,st),dt.subVectors(ot,ct);let t=[0,-lt.z,lt.y,0,-ut.z,ut.y,0,-dt.z,dt.y,lt.z,0,-lt.x,ut.z,0,-ut.x,dt.z,0,-dt.x,-lt.y,lt.x,0,-ut.y,ut.x,0,-dt.y,dt.x,0];return!gt(t,ot,st,ct,pt)||(t=[1,0,0,0,1,0,0,0,1],!gt(t,ot,st,ct,pt))?!1:(mt.crossVectors(lt,ut),t=[mt.x,mt.y,mt.z],gt(t,ot,st,ct,pt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,it).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(it).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rt=[new V,new V,new V,new V,new V,new V,new V,new V],it=new V,at=new nt,ot=new V,st=new V,ct=new V,lt=new V,ut=new V,dt=new V,ft=new V,pt=new V,mt=new V,ht=new V;function gt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ht.fromArray(e,a);let o=i.x*Math.abs(ht.x)+i.y*Math.abs(ht.y)+i.z*Math.abs(ht.z),s=t.dot(ht),c=n.dot(ht),l=r.dot(ht);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var _t=new nt,vt=new V,yt=new V,bt=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_t.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vt.subVectors(e,this.center);let t=vt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vt.copy(e.center).add(yt)),this.expandByPoint(vt.copy(e.center).sub(yt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xt=new V,St=new V,Ct=new V,wt=new V,Tt=new V,Et=new V,Dt=new V,Ot=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xt.copy(this.origin).addScaledVector(this.direction,t),xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){St.copy(e).add(t).multiplyScalar(.5),Ct.copy(t).sub(e).normalize(),wt.copy(this.origin).sub(St);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ct),o=wt.dot(this.direction),s=-wt.dot(Ct),c=wt.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(St).addScaledVector(Ct,d),f}intersectSphere(e,t){xt.subVectors(e.center,this.origin);let n=xt.dot(this.direction),r=xt.dot(xt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xt)!==null}intersectTriangle(e,t,n,r,i){Tt.subVectors(t,e),Et.subVectors(n,e),Dt.crossVectors(Tt,Et);let a=this.direction.dot(Dt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wt.subVectors(this.origin,e);let s=o*this.direction.dot(Et.crossVectors(wt,Et));if(s<0)return null;let c=o*this.direction.dot(Tt.cross(wt));if(c<0||s+c>a)return null;let l=-o*wt.dot(Dt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/At.setFromMatrixColumn(e,0).length(),i=1/At.setFromMatrixColumn(e,1).length(),a=1/At.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mt,e,Nt)}lookAt(e,t,n){let r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Pt.crossVectors(n,It),Pt.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Pt.crossVectors(n,It)),Pt.normalize(),Ft.crossVectors(It,Pt),r[0]=Pt.x,r[4]=Ft.x,r[8]=It.x,r[1]=Pt.y,r[5]=Ft.y,r[9]=It.y,r[2]=Pt.z,r[6]=Ft.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=At.set(r[0],r[1],r[2]).length(),a=At.set(r[4],r[5],r[6]).length(),o=At.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);let s=1/i,c=1/a,l=1/o;return jt.elements[0]*=s,jt.elements[1]*=s,jt.elements[2]*=s,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=l,jt.elements[9]*=l,jt.elements[10]*=l,t.setFromRotationMatrix(jt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=ie){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ie){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},At=new V,jt=new kt,Mt=new V(0,0,0),Nt=new V(1,1,1),Pt=new V,Ft=new V,It=new V,Lt=new kt,Rt=new $e,zt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(P(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-P(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(P(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-P(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(P(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-P(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rt.setFromEuler(this),this.setFromQuaternion(Rt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zt.DEFAULT_ORDER=`XYZ`;var Bt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Vt=0,Ht=new V,Ut=new $e,Wt=new kt,Gt=new V,Kt=new V,qt=new V,Jt=new $e,Yt=new V(1,0,0),Xt=new V(0,1,0),Zt=new V(0,0,1),Qt={type:`added`},$t={type:`removed`},en=class e extends ae{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=ue(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new zt,r=new $e,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new z}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ut.setFromAxisAngle(e,t),this.quaternion.multiply(Ut),this}rotateOnWorldAxis(e,t){return Ut.setFromAxisAngle(e,t),this.quaternion.premultiply(Ut),this}rotateX(e){return this.rotateOnAxis(Yt,e)}rotateY(e){return this.rotateOnAxis(Xt,e)}rotateZ(e){return this.rotateOnAxis(Zt,e)}translateOnAxis(e,t){return Ht.copy(e).applyQuaternion(this.quaternion),this.position.add(Ht.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yt,e)}translateY(e){return this.translateOnAxis(Xt,e)}translateZ(e){return this.translateOnAxis(Zt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gt.copy(e):Gt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(Kt,Gt,this.up):Wt.lookAt(Gt,Kt,this.up),this.quaternion.setFromRotationMatrix(Wt),r&&(Wt.extractRotation(r.matrixWorld),Ut.setFromRotationMatrix(Wt),this.quaternion.premultiply(Ut.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qt)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($t)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kt,e,qt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kt,Jt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};en.DEFAULT_UP=new V(0,1,0),en.DEFAULT_MATRIX_AUTO_UPDATE=!0,en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new V,nn=new V,rn=new V,an=new V,on=new V,sn=new V,cn=new V,ln=new V,un=new V,dn=new V,fn=!1,pn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){tn.subVectors(r,t),nn.subVectors(n,t),rn.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(nn),s=tn.dot(rn),c=nn.dot(nn),l=nn.dot(rn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,r,i,a,o,s){return fn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),fn=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,an)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,an.x),s.addScaledVector(a,an.y),s.addScaledVector(o,an.z),s)}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),nn.subVectors(e,t),tn.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),tn.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return fn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),fn=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;on.subVectors(r,n),sn.subVectors(i,n),ln.subVectors(e,n);let s=on.dot(ln),c=sn.dot(ln);if(s<=0&&c<=0)return t.copy(n);un.subVectors(e,r);let l=on.dot(un),u=sn.dot(un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(on,a);dn.subVectors(e,i);let f=on.dot(dn),p=sn.dot(dn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(sn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return cn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(cn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(on,a).addScaledVector(sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},gn={h:0,s:0,l:0};function _n(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=D){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,B.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=B.workingColorSpace){return this.r=e,this.g=t,this.b=n,B.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=B.workingColorSpace){if(e=de(e,1),t=P(t,0,1),n=P(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=_n(i,r,e+1/3),this.g=_n(i,r,e),this.b=_n(i,r,e-1/3)}return B.toWorkingColorSpace(this,r),this}setStyle(e,t=D){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=D){let n=mn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ze(e.r),this.g=ze(e.g),this.b=ze(e.b),this}copyLinearToSRGB(e){return this.r=Be(e.r),this.g=Be(e.g),this.b=Be(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=D){return B.fromWorkingColorSpace(vn.copy(this),e),Math.round(P(vn.r*255,0,255))*65536+Math.round(P(vn.g*255,0,255))*256+Math.round(P(vn.b*255,0,255))}getHexString(e=D){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=B.workingColorSpace){B.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,i=vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=B.workingColorSpace){return B.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=D){B.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(gn);let n=me(hn.h,gn.h,t),r=me(hn.s,gn.s,t),i=me(hn.l,gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new H;H.NAMES=mn;var yn=0,bn=class extends ae{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=ue(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ee,this.stencilZFail=ee,this.stencilZPass=ee,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xn=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sn=new V,Cn=new R,wn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=te,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=d,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXY(t,Cn.x,Cn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=De(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=L(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=De(t,this.array)),t}setX(e,t){return this.normalized&&(t=L(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=De(t,this.array)),t}setY(e,t){return this.normalized&&(t=L(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=De(t,this.array)),t}setZ(e,t){return this.normalized&&(t=L(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=De(t,this.array)),t}setW(e,t){return this.normalized&&(t=L(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=L(t,this.array),n=L(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=L(t,this.array),n=L(n,this.array),r=L(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=L(t,this.array),n=L(n,this.array),r=L(r,this.array),i=L(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Tn=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},En=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dn=0,On=new kt,kn=new en,An=new V,jn=new nt,Mn=new nt,Nn=new V,Pn=class e extends ae{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=ue(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ae(e)?En:Tn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return kn.lookAt(e),kn.updateMatrix(),this.applyMatrix4(kn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new U(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jn.setFromBufferAttribute(n),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mn.setFromBufferAttribute(n),this.morphTargetsRelative?(Nn.addVectors(jn.min,Mn.min),jn.expandByPoint(Nn),Nn.addVectors(jn.max,Mn.max),jn.expandByPoint(Nn)):(jn.expandByPoint(Mn.min),jn.expandByPoint(Mn.max))}jn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nn.fromBufferAttribute(a,t),o&&(An.fromBufferAttribute(e,t),Nn.add(An)),r=Math.max(r,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new wn(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new V,l[e]=new V;let u=new V,d=new V,f=new V,p=new R,m=new R,h=new R,g=new V,_=new V;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new V,x=new V,S=new V,C=new V;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wn(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fn=new kt,In=new Ot,Ln=new bt,Rn=new V,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new R,Gn=new R,Kn=new R,qn=new V,Jn=new V,Yn=new V,Xn=new V,Zn=new V,W=class extends en{constructor(e=new Pn,t=new xn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Un.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Hn.fromBufferAttribute(s,e),a?Un.addScaledVector(Hn,r):Un.addScaledVector(Hn.sub(t),r))}t.add(Un)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ln.copy(n.boundingSphere),Ln.applyMatrix4(i),In.copy(e.ray).recast(e.near),!(Ln.containsPoint(In.origin)===!1&&(In.intersectSphere(Ln,Rn)===null||In.origin.distanceToSquared(Rn)>(e.far-e.near)**2))&&(Fn.copy(i).invert(),In.copy(e.ray).applyMatrix4(Fn),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$n(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$n(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$n(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$n(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Qn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Zn.copy(s),Zn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Zn);return l<n.near||l>n.far?null:{distance:l,point:Zn.clone(),object:e}}function $n(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,zn),e.getVertexPosition(c,Bn),e.getVertexPosition(l,Vn);let u=Qn(e,t,n,r,zn,Bn,Vn,Xn);if(u){i&&(Wn.fromBufferAttribute(i,s),Gn.fromBufferAttribute(i,c),Kn.fromBufferAttribute(i,l),u.uv=pn.getInterpolation(Xn,zn,Bn,Vn,Wn,Gn,Kn,new R)),a&&(Wn.fromBufferAttribute(a,s),Gn.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),u.uv1=pn.getInterpolation(Xn,zn,Bn,Vn,Wn,Gn,Kn,new R),u.uv2=u.uv1),o&&(qn.fromBufferAttribute(o,s),Jn.fromBufferAttribute(o,c),Yn.fromBufferAttribute(o,l),u.normal=pn.getInterpolation(Xn,zn,Bn,Vn,qn,Jn,Yn,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new V,materialIndex:0};pn.getNormal(zn,Bn,Vn,e.normal),u.face=e}return u}var G=class e extends Pn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function tr(e){let t={};for(let n=0;n<e.length;n++){let r=er(e[n]);for(let e in r)t[e]=r[e]}return t}function nr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function rr(e){return e.getRenderTarget()===null?e.outputColorSpace:B.workingColorSpace}var ir={clone:er,merge:tr},ar=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,or=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sr=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ar,this.fragmentShader=or,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=nr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},cr=class extends en{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},lr=class extends cr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=le*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ce*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return le*2*Math.atan(Math.tan(ce*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ce*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,dr=1,fr=class extends en{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new lr(ur,dr,e,t);r.layers=this.layers,this.add(r);let i=new lr(ur,dr,e,t);i.layers=this.layers,this.add(i);let a=new lr(ur,dr,e,t);a.layers=this.layers,this.add(a);let o=new lr(ur,dr,e,t);o.layers=this.layers,this.add(o);let s=new lr(ur,dr,e,t);s.layers=this.layers,this.add(s);let c=new lr(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pr=class extends qe{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends Xe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Pe(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?D:``),this.texture=new pr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new G(5,5,5),i=new sr({name:`CubemapFromEquirect`,uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new fr(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},hr=new V,gr=new V,_r=new z,vr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hr.subVectors(n,t).cross(gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_r.getNormalMatrix(e),r=this.coplanarPoint(hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yr=new bt,br=new V,xr=class{constructor(e=new vr,t=new vr,n=new vr,r=new vr,i=new vr,a=new vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ie){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(br.x=r.normal.x>0?e.max.x:e.min.x,br.y=r.normal.y>0?e.max.y:e.min.y,br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cr(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`);else c=e.UNSIGNED_SHORT;else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var wr=class e extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},K={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
	if ( diffuseColor.a < alphaTest ) discard;
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
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
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
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
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
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
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
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
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
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},q={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Tr={basic:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new H(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:tr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:tr([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:tr([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new H(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:tr([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:tr([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:tr([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:tr([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:tr([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:tr([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:tr([q.common,q.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:tr([q.lights,q.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Tr.physical={uniforms:tr([Tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Er={r:0,b:0,g:0};function Dr(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new W(new G(1,1,1),new sr({name:`BackgroundCubeMaterial`,uniforms:er(Tr.backgroundCube.uniforms),vertexShader:Tr.backgroundCube.vertexShader,fragmentShader:Tr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=B.getTransfer(_.colorSpace)!==M,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new W(new wr(2,2),new sr({name:`BackgroundMaterial`,uniforms:er(Tr.background.uniforms),vertexShader:Tr.background.vertexShader,fragmentShader:Tr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=B.getTransfer(_.colorSpace)!==M,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(Er,rr(e)),r.buffers.color.setClear(Er.r,Er.g,Er.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Or(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function kr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Ar(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function jr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vr,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Mr(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new mr(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Nr=class extends cr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pr=4,Fr=[.125,.215,.35,.446,.526,.582],Ir=20,Lr=new Nr,Rr=new H,zr=null,Br=0,Vr=0,Hr=(1+Math.sqrt(5))/2,Ur=1/Hr,Wr=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Hr,Ur),new V(0,Hr,-Ur),new V(Ur,0,Hr),new V(-Ur,0,Hr),new V(Hr,Ur,0),new V(-Hr,Ur,0)],Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Br,Vr),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:f,format:m,colorSpace:O,depthBuffer:!1},r=qr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kr(r)),this._blurMaterial=Yr(r,e,t)}return r}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,r){let i=new lr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Rr),s.toneMapping=0,s.autoClear=!1;let u=new xn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new W(new G,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Rr),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Jr(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Jr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Lr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=Wr[(t-1)%Wr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new W(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ir;m>Ir&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);let h=[],g=0;for(let e=0;e<Ir;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Jr(t,3*v*(r>_-Pr?r-_+Pr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Lr)}};function Kr(e){let t=[],n=[],r=[],i=e,a=e-Pr+1+Fr.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Pr?s=Fr[o-e+Pr-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Pn;h.setAttribute(`position`,new wn(f,3)),h.setAttribute(`uv`,new wn(p,2)),h.setAttribute(`faceIndex`,new wn(m,1)),t.push(h),i>Pr&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function qr(e,t,n){let r=new Xe(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Jr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Yr(e,t,n){let r=new Float32Array(Ir),i=new V(0,1,0);return new sr({name:`SphericalGaussianBlur`,defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xr(){return new sr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zr(){return new sr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qr(){return`

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
	`}function $r(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Gr(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}else if(t.has(r))return t.get(r).texture;else{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Gr(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}else return null}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ei(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function ti(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Ae(n)?En:Tn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ni(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ri(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ii(e,t){return e[0]-t[0]}function ai(e,t){return Math.abs(t[1])-Math.abs(e[1])}function oi(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new Je,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],f=l.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),r===!0&&(p=3);let m=l.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*i),_=new Ze(g,m,h,i);_.type=d,_.needsUpdate=!0;let v=p*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=f[t],l=m*h*4*t;for(let t=0;t<i.count;t++){let c=t*v;e===!0&&(o.fromBufferAttribute(i,t),g[l+c+0]=o.x,g[l+c+1]=o.y,g[l+c+2]=o.z,g[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),g[l+c+4]=o.x,g[l+c+5]=o.y,g[l+c+6]=o.z,g[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),g[l+c+8]=o.x,g[l+c+9]=o.y,g[l+c+10]=o.z,g[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:_,size:new R(m,h)},a.set(l,s);function y(){_.dispose(),a.delete(l),l.removeEventListener(`dispose`,y)}l.addEventListener(`dispose`,y)}let c=0;for(let e=0;e<f.length;e++)c+=f[e];let p=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,p),u.getUniforms().setValue(e,`morphTargetInfluences`,f),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=f===void 0?0:f.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=f[e]}n.sort(ai);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(ii);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let d=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,d),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function si(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ci=class extends qe{constructor(e,t,n,i,a,o,s,c,l,d){if(d=d===void 0?h:d,d!==1026&&d!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&d===1026&&(n=u),n===void 0&&d===1027&&(n=p),super(null,i,a,o,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},li=new qe,ui=new ci(1,1);ui.compareFunction=515;var di=new Ze,fi=new Qe,pi=new pr,mi=[],hi=[],gi=new Float32Array(16),_i=new Float32Array(9),vi=new Float32Array(4);function yi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=mi[i];if(a===void 0&&(a=new Float32Array(i),mi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Si(e,t){let n=hi[t];n===void 0&&(n=new Int32Array(t),hi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ci(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bi(n,t))return;e.uniform2fv(this.addr,t),xi(n,t)}}function Ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bi(n,t))return;e.uniform3fv(this.addr,t),xi(n,t)}}function Ei(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bi(n,t))return;e.uniform4fv(this.addr,t),xi(n,t)}}function Di(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xi(n,t)}else{if(bi(n,r))return;vi.set(r),e.uniformMatrix2fv(this.addr,!1,vi),xi(n,r)}}function Oi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xi(n,t)}else{if(bi(n,r))return;_i.set(r),e.uniformMatrix3fv(this.addr,!1,_i),xi(n,r)}}function ki(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xi(n,t)}else{if(bi(n,r))return;gi.set(r),e.uniformMatrix4fv(this.addr,!1,gi),xi(n,r)}}function Ai(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bi(n,t))return;e.uniform2iv(this.addr,t),xi(n,t)}}function Mi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bi(n,t))return;e.uniform3iv(this.addr,t),xi(n,t)}}function Ni(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bi(n,t))return;e.uniform4iv(this.addr,t),xi(n,t)}}function Pi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bi(n,t))return;e.uniform2uiv(this.addr,t),xi(n,t)}}function Ii(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bi(n,t))return;e.uniform3uiv(this.addr,t),xi(n,t)}}function Li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bi(n,t))return;e.uniform4uiv(this.addr,t),xi(n,t)}}function Ri(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?ui:li;n.setTexture2D(t||a,i)}function zi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fi,i)}function Bi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||pi,i)}function Vi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||di,i)}function Hi(e){switch(e){case 5126:return Ci;case 35664:return wi;case 35665:return Ti;case 35666:return Ei;case 35674:return Di;case 35675:return Oi;case 35676:return ki;case 5124:case 35670:return Ai;case 35667:case 35671:return ji;case 35668:case 35672:return Mi;case 35669:case 35673:return Ni;case 5125:return Pi;case 36294:return Fi;case 36295:return Ii;case 36296:return Li;case 35678:case 36198:case 36298:case 36306:case 35682:return Ri;case 35679:case 36299:case 36307:return zi;case 35680:case 36300:case 36308:case 36293:return Bi;case 36289:case 36303:case 36311:case 36292:return Vi}}function Ui(e,t){e.uniform1fv(this.addr,t)}function Wi(e,t){let n=yi(t,this.size,2);e.uniform2fv(this.addr,n)}function Gi(e,t){let n=yi(t,this.size,3);e.uniform3fv(this.addr,n)}function Ki(e,t){let n=yi(t,this.size,4);e.uniform4fv(this.addr,n)}function qi(e,t){let n=yi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ji(e,t){let n=yi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Yi(e,t){let n=yi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xi(e,t){e.uniform1iv(this.addr,t)}function Zi(e,t){e.uniform2iv(this.addr,t)}function Qi(e,t){e.uniform3iv(this.addr,t)}function $i(e,t){e.uniform4iv(this.addr,t)}function ea(e,t){e.uniform1uiv(this.addr,t)}function ta(e,t){e.uniform2uiv(this.addr,t)}function na(e,t){e.uniform3uiv(this.addr,t)}function ra(e,t){e.uniform4uiv(this.addr,t)}function ia(e,t,n){let r=this.cache,i=t.length,a=Si(n,i);bi(r,a)||(e.uniform1iv(this.addr,a),xi(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||li,a[e])}function aa(e,t,n){let r=this.cache,i=t.length,a=Si(n,i);bi(r,a)||(e.uniform1iv(this.addr,a),xi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fi,a[e])}function oa(e,t,n){let r=this.cache,i=t.length,a=Si(n,i);bi(r,a)||(e.uniform1iv(this.addr,a),xi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||pi,a[e])}function sa(e,t,n){let r=this.cache,i=t.length,a=Si(n,i);bi(r,a)||(e.uniform1iv(this.addr,a),xi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||di,a[e])}function ca(e){switch(e){case 5126:return Ui;case 35664:return Wi;case 35665:return Gi;case 35666:return Ki;case 35674:return qi;case 35675:return Ji;case 35676:return Yi;case 5124:case 35670:return Xi;case 35667:case 35671:return Zi;case 35668:case 35672:return Qi;case 35669:case 35673:return $i;case 5125:return ea;case 36294:return ta;case 36295:return na;case 36296:return ra;case 35678:case 36198:case 36298:case 36306:case 35682:return ia;case 35679:case 36299:case 36307:return aa;case 35680:case 36300:case 36308:case 36293:return oa;case 36289:case 36303:case 36311:case 36292:return sa}}var la=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hi(t.type)}},ua=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ca(t.type)}},da=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fa=/(\w+)(\])?(\[|\.)?/g;function pa(e,t){e.seq.push(t),e.map[t.id]=t}function ma(e,t,n){let r=e.name,i=r.length;for(fa.lastIndex=0;;){let a=fa.exec(r),o=fa.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){pa(n,l===void 0?new la(s,e,t):new ua(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new da(s),pa(n,e)),n=e}}}var ha=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ma(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ga(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _a=37297,va=0;function ya(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ba(e){let t=B.getPrimaries(B.workingColorSpace),n=B.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case O:case A:return[r,`LinearTransferOETF`];case D:case k:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function xa(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ya(e.getShaderSource(t),r)}else return i}function Sa(e,t){let n=ba(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ca(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function wa(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Oa).join(`
`)}function Ta(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Oa).join(`
`)}function Ea(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Da(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Oa(e){return e!==``}function ka(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Aa(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ja=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(e){return e.replace(ja,Pa)}var Na=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function Pa(e,t){let n=K[t];if(n===void 0){let e=Na.get(t);if(e!==void 0)n=K[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ma(n)}var Fa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(e){return e.replace(Fa,La)}function La(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ra(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function za(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ba(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function Va(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function Ha(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function Ua(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Wa(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=za(n),l=Ba(n),u=Va(n),d=Ha(n),f=Ua(n),p=n.isWebGL2?``:wa(n),m=Ta(n),h=Ea(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Oa).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Oa).join(`
`),v.length>0&&(v+=`
`)):(_=[Ra(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Oa).join(`
`),v=[p,Ra(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Ca(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Sa(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Oa).join(`
`)),o=Ma(o),o=ka(o,n),o=Aa(o,n),s=Ma(s),s=ka(s,n),s=Aa(s,n),o=Ia(o),s=Ia(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=ga(i,i.VERTEX_SHADER,b),C=ga(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=xa(i,S,`vertex`),t=xa(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ha(i,g),E=Da(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,_a)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=va++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Ga=0,Ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qa(e),t.set(e,n)),n}},qa=class{constructor(e){this.id=Ga++,this.code=e,this.usedTimes=0}};function Ja(e,t,n,r,i,a,o){let s=new Bt,c=new Ka,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,k,A,j;if(C){let e=Tr[C];D=e.vertexShader,k=e.fragmentShader}else D=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=_.isInstancedMesh===!0,ee=_.isBatchedMesh===!0,te=!!a.map,ne=!!a.matcap,re=!!x,ie=!!a.aoMap,ae=!!a.lightMap,oe=!!a.bumpMap,se=!!a.normalMap,ce=!!a.displacementMap,le=!!a.emissiveMap,ue=!!a.metalnessMap,P=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.iridescence>0,me=a.sheen>0,he=a.transmission>0,ge=de&&!!a.anisotropyMap,F=fe&&!!a.clearcoatMap,_e=fe&&!!a.clearcoatNormalMap,ve=fe&&!!a.clearcoatRoughnessMap,ye=pe&&!!a.iridescenceMap,I=pe&&!!a.iridescenceThicknessMap,be=me&&!!a.sheenColorMap,xe=me&&!!a.sheenRoughnessMap,Se=!!a.specularMap,Ce=!!a.specularColorMap,we=!!a.specularIntensityMap,Te=he&&!!a.transmissionMap,Ee=he&&!!a.thicknessMap,De=!!a.gradientMap,L=!!a.alphaMap,Oe=a.alphaTest>0,R=!!a.alphaHash,z=!!a.extensions,ke=!!y.attributes.uv1,Ae=!!y.attributes.uv2,je=!!y.attributes.uv3,Me=0;return a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Me=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ee,instancing:N,instancingColor:N&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:O,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:f&&ce,emissiveMap:le,normalMapObjectSpace:se&&a.normalMapType===1,normalMapTangentSpace:se&&a.normalMapType===0,metalnessMap:ue,roughnessMap:P,anisotropy:de,anisotropyMap:ge,clearcoat:fe,clearcoatMap:F,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:I,sheen:me,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:he,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:a.transparent===!1&&a.blending===1,alphaMap:L,alphaTest:Oe,alphaHash:R,combine:a.combine,mapUv:te&&h(a.map.channel),aoMapUv:ie&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:oe&&h(a.bumpMap.channel),normalMapUv:se&&h(a.normalMap.channel),displacementMapUv:ce&&h(a.displacementMap.channel),emissiveMapUv:le&&h(a.emissiveMap.channel),metalnessMapUv:ue&&h(a.metalnessMap.channel),roughnessMapUv:P&&h(a.roughnessMap.channel),anisotropyMapUv:ge&&h(a.anisotropyMap.channel),clearcoatMapUv:F&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:I&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:be&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:xe&&h(a.sheenRoughnessMap.channel),specularMapUv:Se&&h(a.specularMap.channel),specularColorMapUv:Ce&&h(a.specularColorMap.channel),specularIntensityMapUv:we&&h(a.specularIntensityMap.channel),transmissionMapUv:Te&&h(a.transmissionMap.channel),thicknessMapUv:Ee&&h(a.thicknessMap.channel),alphaMapUv:L&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Ae,vertexUv3s:je,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(te||L),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,useLegacyLights:e._useLegacyLights,decodeVideoTexture:te&&a.map.isVideoTexture===!0&&B.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:z&&a.extensions.derivatives===!0,extensionFragDepth:z&&a.extensions.fragDepth===!0,extensionDrawBuffers:z&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:z&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Tr[t];n=ir.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Wa(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function Ya(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Xa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Za(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Xa),r.length>1&&r.sort(t||Za),i.length>1&&i.sort(t||Za)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function $a(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Qa,e.set(t,[i])):n>=r.length?(i=new Qa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function eo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new H};break;case`SpotLight`:n={position:new V,direction:new V,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function to(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var no=0;function ro(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function io(e,t){let n=new eo,r=to(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new V);let a=new V,o=new kt,s=new kt;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(ro);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_FLOAT_1,i.rectAreaLTC2=q.LTC_FLOAT_2):(i.rectAreaLTC1=q.LTC_HALF_1,i.rectAreaLTC2=q.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_FLOAT_1,i.rectAreaLTC2=q.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=q.LTC_HALF_1,i.rectAreaLTC2=q.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=no++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function ao(e,t){let n=new io(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function oo(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new ao(e,t),n.set(r,[o])):i>=a.length?(o=new ao(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var so=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uo=`uniform sampler2D shadow_pass;
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
}`;function fo(e,t,n){let i=new xr,a=new R,o=new R,s=new Je,c=new so({depthPacking:E}),l=new co,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:lo,fragmentShader:uo}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Pn;h.setAttribute(`position`,new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new W(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Xe(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Xe(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function po(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new Je,r=null,i=new Je(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?P(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new H(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Je().fromArray(ae),ce=new Je().fromArray(oe);function le(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),P(e.DEPTH_TEST),c.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),F(0);function P(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function de(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function fe(t,n){return p[t]===n?!1:(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function pe(r,i){let a=h,o=!1;if(r)if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0);else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function me(t){return g===t?!1:(e.useProgram(t),g=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)he[103]=e.MIN,he[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(he[103]=e.MIN_EXT,he[104]=e.MAX_EXT)}let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function F(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(de(e.BLEND),_=!1);return}if(_===!1&&(P(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(he[n],he[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function _e(t,n){t.side===2?de(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?F(0):F(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ye(t){t===0?de(e.CULL_FACE):(P(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function I(t){t!==A&&(ee&&e.lineWidth(t),A=t)}function be(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):de(e.POLYGON_OFFSET_FILL)}function xe(t){t?P(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+N-1),re!==t&&(e.activeTexture(t),re=t)}function Ce(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+N-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function we(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function L(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function R(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function z(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Ne(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Pe(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},re=null,ie={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new H(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:P,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:F,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:I,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ae,texImage3D:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:z,texStorage3D:ke,texSubImage2D:De,texSubImage3D:L,compressedTexSubImage2D:Oe,compressedTexSubImage3D:R,scissor:Me,viewport:Ne,reset:Ie}}function mo(l,d,f,m,h,g,_){let v=h.isWebGL2,y=d.has(`WEBGL_multisampled_render_to_texture`)?d.get(`WEBGL_multisampled_render_to_texture`):null,b=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(e,t){return w?new OffscreenCanvas(e,t):je(`canvas`)}function E(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?Te:Math.floor,a=r(i*e.width),o=r(i*e.height);S===void 0&&(S=T(a,o));let s=n?T(a,o):S;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e;return e}function D(e){return Ce(e.width)&&Ce(e.height)}function O(e){return v?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function k(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function A(e){l.generateMipmap(e)}function M(e,t,n,r,i=!1){if(v===!1)return t;if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RGBA){let e=i?j:B.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&d.get(`EXT_color_buffer_float`),a}function N(e,t,n){return k(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){return e===1003||e===1004||e===1005?l.NEAREST:l.LINEAR}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ie(t),t.isVideoTexture&&x.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),oe(t)}function ie(e){let t=m.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=C.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ae(e),Object.keys(r).length===0&&C.delete(n)}m.remove(e)}function ae(e){let t=m.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=C.get(n);delete r[t.__cacheKey],_.memory.textures--}function oe(e){let t=e.texture,n=m.get(e),r=m.get(t);if(r.__webglTexture!==void 0&&(l.deleteTexture(r.__webglTexture),_.memory.textures--),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let t=0;t<n.__webglFramebuffer[e].length;t++)l.deleteFramebuffer(n.__webglFramebuffer[e][t]);else l.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&l.deleteRenderbuffer(n.__webglDepthbuffer[e])}else{if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)l.deleteFramebuffer(n.__webglFramebuffer[e]);else l.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&l.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&l.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&l.deleteRenderbuffer(n.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,n=t.length;e<n;e++){let n=m.get(t[e]);n.__webglTexture&&(l.deleteTexture(n.__webglTexture),_.memory.textures--),m.remove(t[e])}m.remove(t),m.remove(e)}let se=0;function ce(){se=0}function le(){let e=se;return e>=h.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+h.maxTextures),se+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=m.get(e);if(e.isVideoTexture&&z(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(n,e,t);return}}f.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=m.get(e);if(e.version>0&&n.__version!==e.version){ve(n,e,t);return}f.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=m.get(e);if(e.version>0&&n.__version!==e.version){ve(n,e,t);return}f.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=m.get(e);if(e.version>0&&n.__version!==e.version){ye(n,e,t);return}f.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let me={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},he={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ge={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function F(e,t,n){if(n?(l.texParameteri(e,l.TEXTURE_WRAP_S,me[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,me[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,me[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,he[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,he[t.minFilter])):(l.texParameteri(e,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(e,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,l.CLAMP_TO_EDGE),(t.wrapS!==1001||t.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ee(t.magFilter)),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ee(t.minFilter)),t.minFilter!==1003&&t.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ge[t.compareFunction])),d.has(`EXT_texture_filter_anisotropic`)===!0){let n=d.get(`EXT_texture_filter_anisotropic`);if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&d.has(`OES_texture_float_linear`)===!1||v===!1&&t.type===1016&&d.has(`OES_texture_half_float_linear`)===!1)return;(t.anisotropy>1||m.get(t).__currentAnisotropy)&&(l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,h.getMaxAnisotropy())),m.get(t).__currentAnisotropy=t.anisotropy)}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=C.get(r);i===void 0&&(i={},C.set(r,i));let a=ue(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},_.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ae(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;f.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=m.get(a);if(a.version!==o.__version||i===!0){f.activeTexture(l.TEXTURE0+n);let e=B.getPrimaries(B.workingColorSpace),s=t.colorSpace===``?null:B.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let d=O(t)&&D(t.image)===!1,m=E(t.image,d,!1,h.maxTextureSize);m=ke(t,m);let _=D(m)||v,y=g.convert(t.format,t.colorSpace),b=g.convert(t.type),x=M(t.internalFormat,y,b,t.colorSpace,t.isVideoTexture);F(r,t,_);let S,C=t.mipmaps,w=v&&t.isVideoTexture!==!0&&x!==36196,T=o.__version===void 0||i===!0,j=N(t,m,_);if(t.isDepthTexture)x=l.DEPTH_COMPONENT,v?x=t.type===1015?l.DEPTH_COMPONENT32F:t.type===1014?l.DEPTH_COMPONENT24:t.type===1020?l.DEPTH24_STENCIL8:l.DEPTH_COMPONENT16:t.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),t.format===1026&&x===l.DEPTH_COMPONENT&&t.type!==1012&&t.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),t.type=u,b=g.convert(t.type)),t.format===1027&&x===l.DEPTH_COMPONENT&&(x=l.DEPTH_STENCIL,t.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),t.type=p,b=g.convert(t.type))),T&&(w?f.texStorage2D(l.TEXTURE_2D,1,x,m.width,m.height):f.texImage2D(l.TEXTURE_2D,0,x,m.width,m.height,0,y,b,null));else if(t.isDataTexture)if(C.length>0&&_){w&&T&&f.texStorage2D(l.TEXTURE_2D,j,x,C[0].width,C[0].height);for(let e=0,t=C.length;e<t;e++)S=C[e],w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):f.texImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data);t.generateMipmaps=!1}else w?(T&&f.texStorage2D(l.TEXTURE_2D,j,x,m.width,m.height),f.texSubImage2D(l.TEXTURE_2D,0,0,0,m.width,m.height,y,b,m.data)):f.texImage2D(l.TEXTURE_2D,0,x,m.width,m.height,0,y,b,m.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){w&&T&&f.texStorage3D(l.TEXTURE_2D_ARRAY,j,x,C[0].width,C[0].height,m.depth);for(let e=0,n=C.length;e<n;e++)S=C[e],t.format===1023?w?f.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,m.depth,y,b,S.data):f.texImage3D(l.TEXTURE_2D_ARRAY,e,x,S.width,S.height,m.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?f.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,m.depth,y,S.data,0,0):f.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,x,S.width,S.height,m.depth,0,S.data,0,0)}else{w&&T&&f.texStorage2D(l.TEXTURE_2D,j,x,C[0].width,C[0].height);for(let e=0,n=C.length;e<n;e++)S=C[e],t.format===1023?w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):f.texImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?f.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,S.data):f.compressedTexImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,S.data)}else if(t.isDataArrayTexture)w?(T&&f.texStorage3D(l.TEXTURE_2D_ARRAY,j,x,m.width,m.height,m.depth),f.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,m.width,m.height,m.depth,y,b,m.data)):f.texImage3D(l.TEXTURE_2D_ARRAY,0,x,m.width,m.height,m.depth,0,y,b,m.data);else if(t.isData3DTexture)w?(T&&f.texStorage3D(l.TEXTURE_3D,j,x,m.width,m.height,m.depth),f.texSubImage3D(l.TEXTURE_3D,0,0,0,0,m.width,m.height,m.depth,y,b,m.data)):f.texImage3D(l.TEXTURE_3D,0,x,m.width,m.height,m.depth,0,y,b,m.data);else if(t.isFramebufferTexture){if(T)if(w)f.texStorage2D(l.TEXTURE_2D,j,x,m.width,m.height);else{let e=m.width,t=m.height;for(let n=0;n<j;n++)f.texImage2D(l.TEXTURE_2D,n,x,e,t,0,y,b,null),e>>=1,t>>=1}}else if(C.length>0&&_){w&&T&&f.texStorage2D(l.TEXTURE_2D,j,x,C[0].width,C[0].height);for(let e=0,t=C.length;e<t;e++)S=C[e],w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,y,b,S):f.texImage2D(l.TEXTURE_2D,e,x,y,b,S);t.generateMipmaps=!1}else w?(T&&f.texStorage2D(l.TEXTURE_2D,j,x,m.width,m.height),f.texSubImage2D(l.TEXTURE_2D,0,0,0,y,b,m)):f.texImage2D(l.TEXTURE_2D,0,x,y,b,m);k(t,_)&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;f.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=m.get(i);if(i.version!==a.__version||r===!0){f.activeTexture(l.TEXTURE0+n);let e=B.getPrimaries(B.workingColorSpace),o=t.colorSpace===``?null:B.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,d=[];for(let e=0;e<6;e++)!c&&!u?d[e]=E(t.image[e],!1,!0,h.maxCubemapSize):d[e]=u?t.image[e].image:t.image[e],d[e]=ke(t,d[e]);let p=d[0],m=D(p)||v,_=g.convert(t.format,t.colorSpace),y=g.convert(t.type),b=M(t.internalFormat,_,y,t.colorSpace),x=v&&t.isVideoTexture!==!0,S=a.__version===void 0||r===!0,C=N(t,p,m);F(l.TEXTURE_CUBE_MAP,t,m);let w;if(c){x&&S&&f.texStorage2D(l.TEXTURE_CUBE_MAP,C,b,p.width,p.height);for(let e=0;e<6;e++){w=d[e].mipmaps;for(let n=0;n<w.length;n++){let r=w[n];t.format===1023?x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,y,r.data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,_,y,r.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?f.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,r.data):f.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,r.data)}}}else{w=t.mipmaps,x&&S&&(w.length>0&&C++,f.texStorage2D(l.TEXTURE_CUBE_MAP,C,b,d[0].width,d[0].height));for(let e=0;e<6;e++)if(u){x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,d[e].width,d[e].height,_,y,d[e].data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,d[e].width,d[e].height,0,_,y,d[e].data);for(let t=0;t<w.length;t++){let n=w[t].image[e].image;x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,_,y,n.data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,n.width,n.height,0,_,y,n.data)}}else{x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,_,y,d[e]):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,_,y,d[e]);for(let t=0;t<w.length;t++){let n=w[t];x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,_,y,n.image[e]):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,_,y,n.image[e])}}}k(t,m)&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function I(e,t,n,r,i,a){let o=g.convert(n.format,n.colorSpace),s=g.convert(n.type),c=M(n.internalFormat,o,s,n.colorSpace);if(!m.get(t).__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?f.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):f.texImage2D(i,a,c,e,n,0,o,s,null)}f.bindFramebuffer(l.FRAMEBUFFER,e),R(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,m.get(n).__webglTexture,0,Oe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,m.get(n).__webglTexture,a),f.bindFramebuffer(l.FRAMEBUFFER,null)}function be(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer&&!t.stencilBuffer){let r=v===!0?l.DEPTH_COMPONENT24:l.DEPTH_COMPONENT16;if(n||R(t)){let e=t.depthTexture;e&&e.isDepthTexture&&(e.type===1015?r=l.DEPTH_COMPONENT32F:e.type===1014&&(r=l.DEPTH_COMPONENT24));let n=Oe(t);R(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,n,r,t.width,t.height):l.renderbufferStorageMultisample(l.RENDERBUFFER,n,r,t.width,t.height)}else l.renderbufferStorage(l.RENDERBUFFER,r,t.width,t.height);l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.RENDERBUFFER,e)}else if(t.depthBuffer&&t.stencilBuffer){let r=Oe(t);n&&R(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,r,l.DEPTH24_STENCIL8,t.width,t.height):R(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,r,l.DEPTH24_STENCIL8,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,l.DEPTH_STENCIL,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.RENDERBUFFER,e)}else{let e=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let r=0;r<e.length;r++){let i=e[r],a=g.convert(i.format,i.colorSpace),o=g.convert(i.type),s=M(i.internalFormat,a,o,i.colorSpace),c=Oe(t);n&&R(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):R(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function xe(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(f.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!m.get(t.depthTexture).__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),P(t.depthTexture,0);let n=m.get(t.depthTexture).__webglTexture,r=Oe(t);if(t.depthTexture.format===1026)R(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0);else if(t.depthTexture.format===1027)R(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0);else throw Error(`Unknown depthTexture format`)}function Se(e){let t=m.get(e),n=e.isWebGLCubeRenderTarget===!0;if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);xe(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)f.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]=l.createRenderbuffer(),be(t.__webglDepthbuffer[n],e,!1)}else f.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer=l.createRenderbuffer(),be(t.__webglDepthbuffer,e,!1);f.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){let r=m.get(e);t!==void 0&&I(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Se(e)}function Ee(e){let t=e.texture,n=m.get(e),r=m.get(t);e.addEventListener(`dispose`,ne),e.isWebGLMultipleRenderTargets!==!0&&(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,_.memory.textures++);let i=e.isWebGLCubeRenderTarget===!0,a=e.isWebGLMultipleRenderTargets===!0,o=D(e)||v;if(i){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(v&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(v&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(a)if(h.drawBuffers){let t=e.texture;for(let e=0,n=t.length;e<n;e++){let n=m.get(t[e]);n.__webglTexture===void 0&&(n.__webglTexture=l.createTexture(),_.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`);if(v&&e.samples>0&&R(e)===!1){let r=a?t:[t];n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],f.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<r.length;t++){let i=r[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=g.convert(i.format,i.colorSpace),o=g.convert(i.type),s=M(i.internalFormat,a,o,i.colorSpace,e.isXRRenderTarget===!0),c=Oe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),be(n.__webglDepthRenderbuffer,e,!0)),f.bindFramebuffer(l.FRAMEBUFFER,null)}}if(i){f.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),F(l.TEXTURE_CUBE_MAP,t,o);for(let r=0;r<6;r++)if(v&&t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)I(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else I(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t,o)&&A(l.TEXTURE_CUBE_MAP),f.unbindTexture()}else if(a){let t=e.texture;for(let r=0,i=t.length;r<i;r++){let i=t[r],a=m.get(i);f.bindTexture(l.TEXTURE_2D,a.__webglTexture),F(l.TEXTURE_2D,i,o),I(n.__webglFramebuffer,e,i,l.COLOR_ATTACHMENT0+r,l.TEXTURE_2D,0),k(i,o)&&A(l.TEXTURE_2D)}f.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(v?i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),f.bindTexture(i,r.__webglTexture),F(i,t,o),v&&t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)I(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else I(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t,o)&&A(i),f.unbindTexture()}e.depthBuffer&&Se(e)}function De(e){let t=D(e)||v,n=e.isWebGLMultipleRenderTargets===!0?e.texture:[e.texture];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(k(i,t)){let t=e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:l.TEXTURE_2D,n=m.get(i).__webglTexture;f.bindTexture(t,n),A(t),f.unbindTexture()}}}function L(e){if(v&&e.samples>0&&R(e)===!1){let t=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=[],o=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=m.get(e),c=e.isWebGLMultipleRenderTargets===!0;if(c)for(let e=0;e<t.length;e++)f.bindFramebuffer(l.FRAMEBUFFER,s.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),f.bindFramebuffer(l.FRAMEBUFFER,s.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);f.bindFramebuffer(l.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),f.bindFramebuffer(l.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let u=0;u<t.length;u++){a.push(l.COLOR_ATTACHMENT0+u),e.depthBuffer&&a.push(o);let d=s.__ignoreDepthValues===void 0?!1:s.__ignoreDepthValues;if(d===!1&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),c&&l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,s.__webglColorRenderbuffer[u]),d===!0&&(l.invalidateFramebuffer(l.READ_FRAMEBUFFER,[o]),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[o])),c){let e=m.get(t[u]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),b&&l.invalidateFramebuffer(l.READ_FRAMEBUFFER,a)}if(f.bindFramebuffer(l.READ_FRAMEBUFFER,null),f.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),c)for(let e=0;e<t.length;e++){f.bindFramebuffer(l.FRAMEBUFFER,s.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=m.get(t[e]).__webglTexture;f.bindFramebuffer(l.FRAMEBUFFER,s.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}f.bindFramebuffer(l.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}}function Oe(e){return Math.min(h.maxSamples,e.samples)}function R(e){let t=m.get(e);return v&&e.samples>0&&d.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function z(e){let t=_.render.frame;x.get(e)!==t&&(x.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||n!==`srgb-linear`&&n!==``&&(B.getTransfer(n)===`srgb`?v===!1?d.has(`EXT_sRGB`)===!0&&r===1023?(e.format=re,e.minFilter=o,e.generateMipmaps=!1):t=He.sRGBToLinear(t):(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}this.allocateTextureUnit=le,this.resetTextureUnits=ce,this.setTexture2D=P,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=we,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=I,this.useMultisampledRTT=R}function ho(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=B.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===`srgb`)if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496)if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var go=class extends lr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},J=class extends en{constructor(){super(),this.isGroup=!0,this.type=`Group`}},_o={type:`move`},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_o)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new J;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yo=class extends ae{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,d=null,f=null,_=null,v=null,y=null,b=t.getContextAttributes(),x=null,S=null,C=[],w=[],T=new R,E=null,D=new lr;D.layers.enable(1),D.viewport=new Je;let O=new lr;O.layers.enable(2),O.viewport=new Je;let k=[D,O],A=new go;A.layers.enable(1),A.layers.enable(2);let j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new vo,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new vo,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new vo,C[e]=t),t.getHandSpace()};function N(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}j=null,M=null,e.setRenderTarget(x),v=null,_=null,f=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),S=new Xe(v.framebufferWidth,v.framebufferHeight,{format:m,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?g:h,a=b.stencil?p:u);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};f=new XRWebGLBinding(r,t),_=f.createProjectionLayer(s),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),S=new Xe(_.textureWidth,_.textureHeight,{format:m,type:l,depthTexture:new ci(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let c=e.properties.get(S);c.__ignoreDepthValues=_.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ne=new V,re=new V;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;A.near=O.near=D.near=e.near,A.far=O.far=D.far=e.far,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far);let t=e.parent,n=A.cameras;ae(A,t);for(let e=0;e<n.length;e++)ae(n[e],t);n.length===2?ie(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),oe(e,A,t)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=le*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&v===null))return s},this.setFoveation=function(e){s=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)};let se=null;function ce(t,r){if(d=r.getViewerPose(c||a),y=r,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(S,v.framebuffer),e.setRenderTarget(S));let n=!1;t.length!==A.cameras.length&&(A.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(v!==null)a=v.getViewport(i);else{let t=f.getViewSubImage(_,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(S,t.colorTexture,_.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(S))}let o=k[r];o===void 0&&(o=new lr,o.layers.enable(r),o.viewport=new Je,k[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),n===!0&&A.cameras.push(o)}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}se&&se(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),y=null}let ue=new Sr;ue.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}};function bo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,rr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xo(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var So=class{constructor(e={}){let{canvas:t=Me(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;m=n===null?a:n.getContextAttributes().alpha;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=D,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,k=null,A=new Je,j=new Je,M=null,N=new H(0),ee=0,te=t.width,ne=t.height,re=1,ie=null,ae=null,oe=new Je(0,0,te,ne),se=new Je(0,0,te,ne),ce=!1,le=new xr,ue=!1,P=!1,de=null,fe=new kt,pe=new R,me=new V,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return T===null?re:1}let F=n;function _e(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),F===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),F=_e(t,e),F===null)throw _e(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&F instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ve,ye,I,be,xe,Se,Ce,we,Ee,De,L,Oe,z,ke,Ae,je,Ne,Pe,Fe,Ie,Le,Re,B,ze;function Be(){ve=new ei(F),ye=new Ar(F,ve,e),ve.init(ye),Re=new ho(F,ve,ye),I=new po(F,ve,ye),be=new ri(F),xe=new Ya,Se=new mo(F,ve,I,xe,ye,Re,be),Ce=new Mr(x),we=new $r(x),Ee=new Cr(F,ye),B=new Or(F,ve,Ee,ye),De=new ti(F,Ee,be,B),L=new si(F,De,Ee,be),Fe=new oi(F,ye,Se),je=new jr(xe),Oe=new Ja(x,Ce,we,ve,ye,B,je),z=new bo(x,xe),ke=new $a,Ae=new oo(ve,ye),Pe=new Dr(x,Ce,we,I,L,m,s),Ne=new fo(x,L,ye),ze=new xo(F,be,ye,I),Ie=new kr(F,ve,be,ye),Le=new ni(F,ve,be,ye),be.programs=Oe.programs,x.capabilities=ye,x.extensions=ve,x.properties=xe,x.renderLists=ke,x.shadowMap=Ne,x.state=I,x.info=be}Be();let Ve=new yo(x,F);this.xr=Ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(e){e!==void 0&&(re=e,this.setSize(te,ne,!1))},this.getSize=function(e){return e.set(te,ne)},this.setSize=function(e,n,r=!0){if(Ve.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}te=e,ne=n,t.width=Math.floor(e*re),t.height=Math.floor(n*re),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(te*re,ne*re).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,ne=n,re=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),I.viewport(A.copy(oe).multiplyScalar(re).floor())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),I.scissor(j.copy(se).multiplyScalar(re).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){I.setScissorTest(ce=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,F.clearBufferuiv(F.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,F.clearBufferiv(F.COLOR,0,g))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),ke.dispose(),Ae.dispose(),xe.dispose(),Ce.dispose(),we.dispose(),L.dispose(),B.dispose(),ze.dispose(),Oe.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,$e),Ve.removeEventListener(`sessionend`,et),de&&=(de.dispose(),null),tt.stop()};function He(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function Ue(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=be.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Be(),be.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function We(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),xe.remove(e)}function qe(e){let t=xe.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=he);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ut(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;B.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Ee.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*ge()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*ge()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,n),e.side=0,e.needsUpdate=!0,st(e,t,n),e.side=2):st(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Ae.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(x._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ye(a,n,e),r.add(a)}else Ye(t,n,e),r.add(t)}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){xe.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ve.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new Sr;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ve.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ve.addEventListener(`sessionstart`,$e),Ve.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=Ae.get(e,b.length),v.init(),b.push(v),fe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromProjectionMatrix(fe),P=this.localClippingEnabled,ue=je.init(this.clippingPlanes,P),_=ke.get(e,y.length),_.init(),y.push(_),nt(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ie,ae),this.info.render.frame++,ue===!0&&je.beginShadows();let n=v.state.shadowsArray;if(Ne.render(n,e,t),ue===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(_,e),v.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];rt(_,e,r,r.viewport)}}else rt(_,e,t);T!==null&&(Se.updateMultisampleRenderTarget(T),Se.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),B.resetDefaultState(),E=-1,k=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||le.intersectsSprite(e)){r&&me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe);let t=L.update(e),i=e.material;i.visible&&_.push(e,t,i,n,me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||le.intersectsObject(e))){let t=L.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),me.copy(e.boundingSphere.center)),me.applyMatrix4(e.matrixWorld).applyMatrix4(fe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,me.z,o)}}else i.visible&&_.push(e,t,i,n,me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),ue===!0&&je.setGlobalState(x.clippingPlanes,n),a.length>0&&it(i,a,t,n),r&&I.viewport(A.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=ye.isWebGL2;de===null&&(de=new Xe(1,1,{generateMipmaps:!0,type:ve.has(`EXT_color_buffer_half_float`)?f:l,minFilter:c,samples:i?4:0})),x.getDrawingBufferSize(pe),i?de.setSize(pe.x,pe.y):de.setSize(Te(pe.x),Te(pe.y));let a=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(N),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear();let o=x.toneMapping;x.toneMapping=0,at(e,n,r),Se.updateMultisampleRenderTarget(de),Se.updateRenderTargetMipmap(de);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,ot(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(Se.updateMultisampleRenderTarget(de),Se.updateRenderTargetMipmap(de)),x.setRenderTarget(a),x.setClearColor(N,ee),x.toneMapping=o}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&ot(o,t,n,s,c,l)}}function ot(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=he);let r=xe.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?we:Ce).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return lt(e,s),u}else s.uniforms=Oe.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=Oe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=je.uniform),lt(e,s),r.needsLights=ft(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ha.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=xe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t,n,r,i){t.isScene!==!0&&(t=he),Se.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:O,c=(r.isMeshStandardMaterial?we:Ce).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=xe.get(r),y=v.state.lights;if(ue===!0&&(P===!0||e!==k)){let t=e===k&&r.id===E;je.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==je.numPlanes||_.numIntersection!==je.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?ye.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=st(r,t,i));let C=!1,w=!1,D=!1,A=S.getUniforms(),j=_.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,D=!0),r.id!==E&&(E=r.id,w=!0),C||k!==e){A.setValue(F,`projectionMatrix`,e.projectionMatrix),A.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(F,me.setFromMatrixPosition(e.matrixWorld)),ye.logarithmicDepthBuffer&&A.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,w=!0,D=!0)}if(i.isSkinnedMesh){A.setOptional(F,i,`bindMatrix`),A.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(ye.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(F,`boneTexture`,e.boneTexture,Se)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(A.setOptional(F,i,`batchingTexture`),A.setValue(F,`batchingTexture`,i._matricesTexture,Se));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0&&ye.isWebGL2===!0)&&Fe.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,A.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(j.envMap.value=c,j.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),w&&(A.setValue(F,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&dt(j,D),a&&r.fog===!0&&z.refreshFogUniforms(j,a),z.refreshMaterialUniforms(j,r,re,ne,de),ha.upload(F,ct(_),j,Se)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ha.upload(F,ct(_),j,Se),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(F,`center`,i.center),A.setValue(F,`modelViewMatrix`,i.modelViewMatrix),A.setValue(F,`normalMatrix`,i.normalMatrix),A.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(ye.isWebGL2){let n=e[t];ze.update(n,S),ze.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){xe.get(e.texture).__webglTexture=t,xe.get(e.depthTexture).__webglTexture=n;let r=xe.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ve.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=xe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=xe.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?Se.setupRenderTarget(e):s.__hasExternalTextures&&Se.rebindTextures(e,xe.get(e.texture).__webglTexture,xe.get(e.depthTexture).__webglTexture):(I.bindFramebuffer(F.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=xe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=ye.isWebGL2&&e.samples>0&&Se.useMultisampledRTT(e)===!1?xe.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,A.copy(e.viewport),j.copy(e.scissor),M=e.scissorTest}else A.copy(oe).multiplyScalar(re).floor(),j.copy(se).multiplyScalar(re).floor(),M=ce;if(I.bindFramebuffer(F.FRAMEBUFFER,i)&&ye.drawBuffers&&r&&I.drawBuffers(e,i),I.viewport(A),I.scissor(j),I.setScissorTest(M),a){let r=xe.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=xe.get(e.texture),i=t||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=xe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){I.bindFramebuffer(F.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&Re.convert(s)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(ve.has(`EXT_color_buffer_half_float`)||ye.isWebGL2&&ve.has(`EXT_color_buffer_float`));if(c!==1009&&Re.convert(c)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(ye.isWebGL2||ve.has(`OES_texture_float`)||ve.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Re.convert(s),Re.convert(c),a)}finally{let e=T===null?null:xe.get(T).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);Se.setTexture2D(t,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,e.x,e.y,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=Re.convert(n.format),s=Re.convert(n.type);Se.setTexture2D(n,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,n.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=Re.convert(r.format),l=Re.convert(r.type),u;if(r.isData3DTexture)Se.setTexture3D(r,0),u=F.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)Se.setTexture2DArray(r,0),u=F.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,r.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,r.unpackAlignment);let d=F.getParameter(F.UNPACK_ROW_LENGTH),f=F.getParameter(F.UNPACK_IMAGE_HEIGHT),p=F.getParameter(F.UNPACK_SKIP_PIXELS),m=F.getParameter(F.UNPACK_SKIP_ROWS),h=F.getParameter(F.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,g.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,g.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,e.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,e.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?F.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),F.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):F.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),F.pixelStorei(F.UNPACK_ROW_LENGTH,d),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,f),F.pixelStorei(F.UNPACK_SKIP_PIXELS,p),F.pixelStorei(F.UNPACK_SKIP_ROWS,m),F.pixelStorei(F.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&F.generateMipmap(u),I.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?Se.setTextureCube(e,0):e.isData3DTexture?Se.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Se.setTexture2DArray(e,0):Se.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,I.reset(),B.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ie}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=B.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?w:C}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?D:O}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},Co=class extends So{};Co.prototype.isWebGL1Renderer=!0;var wo=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new H(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},To=class extends en{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=te,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ue()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ue()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ue()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Do=new V,Oo=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix4(e),this.setXYZ(t,Do.x,Do.y,Do.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyNormalMatrix(e),this.setXYZ(t,Do.x,Do.y,Do.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.transformDirection(e),this.setXYZ(t,Do.x,Do.y,Do.z);return this}setX(e,t){return this.normalized&&(t=L(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=L(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=L(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=L(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=De(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=De(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=De(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=De(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=L(t,this.array),n=L(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=L(t,this.array),n=L(n,this.array),r=L(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=L(t,this.array),n=L(n,this.array),r=L(r,this.array),i=L(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ko=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ao,jo=new V,Mo=new V,No=new V,Po=new R,Fo=new R,Io=new kt,Lo=new V,Ro=new V,zo=new V,Bo=new R,Vo=new R,Ho=new R,Uo=class extends en{constructor(e=new ko){if(super(),this.isSprite=!0,this.type=`Sprite`,Ao===void 0){Ao=new Pn;let e=new Eo(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ao.setIndex([0,1,2,0,2,3]),Ao.setAttribute(`position`,new Oo(e,3,0,!1)),Ao.setAttribute(`uv`,new Oo(e,2,3,!1))}this.geometry=Ao,this.material=e,this.center=new R(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Mo.setFromMatrixScale(this.matrixWorld),Io.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mo.multiplyScalar(-No.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Wo(Lo.set(-.5,-.5,0),No,a,Mo,r,i),Wo(Ro.set(.5,-.5,0),No,a,Mo,r,i),Wo(zo.set(.5,.5,0),No,a,Mo,r,i),Bo.set(0,0),Vo.set(1,0),Ho.set(1,1);let o=e.ray.intersectTriangle(Lo,Ro,zo,!1,jo);if(o===null&&(Wo(Ro.set(-.5,.5,0),No,a,Mo,r,i),Vo.set(0,1),o=e.ray.intersectTriangle(Lo,zo,Ro,!1,jo),o===null))return;let s=e.ray.origin.distanceTo(jo);s<e.near||s>e.far||t.push({distance:s,point:jo.clone(),uv:pn.getInterpolation(jo,Lo,Ro,zo,Bo,Vo,Ho,new R),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wo(e,t,n,r,i,a){Po.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Fo.copy(Po):(Fo.x=a*Po.x-i*Po.y,Fo.y=i*Po.x+a*Po.y),e.copy(t),e.x+=Fo.x,e.y+=Fo.y,e.applyMatrix4(Io)}var Go=class extends qe{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ko=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qo=new V,Jo=new V,Yo=new kt,Xo=new Ot,Zo=new bt,Qo=class extends en{constructor(e=new Pn,t=new Ko){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)qo.fromBufferAttribute(t,e-1),Jo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=qo.distanceTo(Jo);e.setAttribute(`lineDistance`,new U(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=i,e.ray.intersectsSphere(Zo)===!1)return;Yo.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Yo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new V,l=new V,u=new V,d=new V,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),Xo.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),Xo.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},$o=new V,es=new V,ts=class extends Qo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)$o.fromBufferAttribute(t,e),es.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+$o.distanceTo(es);e.setAttribute(`lineDistance`,new U(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ns=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rs=new kt,is=new Ot,as=new bt,os=new V,ss=class extends en{constructor(e=new Pn,t=new ns){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=i,e.ray.intersectsSphere(as)===!1)return;rs.copy(r).invert(),is.copy(e.ray).applyMatrix4(rs);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);os.fromBufferAttribute(l,n),cs(os,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)os.fromBufferAttribute(l,a),cs(os,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function cs(e,t,n,r,i,a,o){let s=is.distanceSqToPoint(e);if(s<n){let n=new V;is.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}var ls=class extends qe{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},us=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,r=[],i=[],a=[],o=new V,s=new kt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(P(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(P(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ds=class extends us{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new R,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fs=class extends ds{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ps(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ms=new V,hs=new ps,gs=new ps,_s=new ps,vs=class extends us{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ms.subVectors(r[0],r[1]).add(r[0]),c=ms);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ms.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ms),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),hs.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),gs.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),_s.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(hs.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),gs.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),_s.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(hs.calc(s),gs.calc(s),_s.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ys(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function bs(e,t){let n=1-e;return n*n*t}function xs(e,t){return 2*(1-e)*e*t}function Ss(e,t){return e*e*t}function Cs(e,t,n,r){return bs(e,t)+xs(e,n)+Ss(e,r)}function ws(e,t){let n=1-e;return n*n*n*t}function Ts(e,t){let n=1-e;return 3*n*n*e*t}function Es(e,t){return 3*(1-e)*e*e*t}function Ds(e,t){return e*e*e*t}function Os(e,t,n,r,i){return ws(e,t)+Ts(e,n)+Es(e,r)+Ds(e,i)}var ks=class extends us{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,r.x,i.x,a.x,o.x),Os(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},As=class extends us{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Os(e,r.x,i.x,a.x,o.x),Os(e,r.y,i.y,a.y,o.y),Os(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},js=class extends us{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends us{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends us{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Cs(e,r.x,i.x,a.x),Cs(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends us{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Cs(e,r.x,i.x,a.x),Cs(e,r.y,i.y,a.y),Cs(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends us{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ys(o,s.x,c.x,l.x,u.x),ys(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},Is=Object.freeze({__proto__:null,ArcCurve:fs,CatmullRomCurve3:vs,CubicBezierCurve:ks,CubicBezierCurve3:As,EllipseCurve:ds,LineCurve:js,LineCurve3:Ms,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Ps,SplineCurve:Fs}),Ls=class extends us{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Is[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Is[n.type]().fromJSON(n))}return this}},Rs=class extends Ls{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new js(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ns(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ks(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Fs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ds(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zs=class e extends Pn{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=P(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new R,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`uv`,new U(o,2)),this.setAttribute(`normal`,new U(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Bs=class e extends zs{constructor(e=1,t=1,n=4,r=8){let i=new Rs;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},Vs=class e extends Pn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`normal`,new U(o,3)),this.setAttribute(`uv`,new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Y=class e extends Pn{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hs=class e extends Y{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Us=class e extends Pn{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new U(i,3)),this.setAttribute(`normal`,new U(i.slice(),3)),this.setAttribute(`uv`,new U(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Ws=class extends Rs{constructor(e){super(e),this.uuid=ue(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Rs().fromJSON(n))}return this}},Gs={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ks(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=$s(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Js(a,o,n,s,c,p,0),o}};function Ks(e,t,n,r,i){let a,o;if(i===Sc(e,t,n,r)>0)for(a=t;a<n;a+=r)o=yc(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=yc(a,e[a],e[a+1],o);return o&&dc(o,o.next)&&(bc(o),o=o.next),o}function qs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(dc(n,n.next)||uc(n.prev,n,n.next)===0)){if(bc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Js(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ic(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Xs(e,r,i,a):Ys(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),bc(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Zs(qs(e),t,n),Js(e,t,n,r,i,a,2)):o===2&&Qs(e,t,n,r,i,a):Js(qs(e),t,n,r,i,a,1);break}}}function Ys(e){let t=e.prev,n=e,r=e.next;if(uc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&cc(i,s,a,c,o,l,m.x,m.y)&&uc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xs(e,t,n,r){let i=e.prev,a=e,o=e.next;if(uc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=oc(p,m,t,n,r),v=oc(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&cc(s,u,c,d,l,f,y.x,y.y)&&uc(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&cc(s,u,c,d,l,f,b.x,b.y)&&uc(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&cc(s,u,c,d,l,f,y.x,y.y)&&uc(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&cc(s,u,c,d,l,f,b.x,b.y)&&uc(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Zs(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!dc(i,a)&&fc(i,r,r.next,a)&&gc(i,a)&&gc(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),bc(r),bc(r.next),r=e=a),r=r.next}while(r!==e);return qs(r)}function Qs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&lc(o,e)){let s=vc(o,e);o=qs(o,o.next),s=qs(s,s.next),Js(o,t,n,r,i,a,0),Js(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function $s(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Ks(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(sc(l));for(i.sort(ec),a=0;a<i.length;a++)n=tc(i[a],n);return n}function ec(e,t){return e.x-t.x}function tc(e,t){let n=nc(e,t);if(!n)return t;let r=vc(n,e);return qs(r,r.next),qs(n,n.next)}function nc(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&cc(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),gc(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&rc(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function rc(e,t){return uc(e.prev,e,t.prev)<0&&uc(t.next,e,e.next)<0}function ic(e,t,n,r){let i=e;do i.z===0&&(i.z=oc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ac(i)}function ac(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function oc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function sc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function cc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function lc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!hc(e,t)&&(gc(e,t)&&gc(t,e)&&_c(e,t)&&(uc(e.prev,e,t.prev)||uc(e,t.prev,t))||dc(e,t)&&uc(e.prev,e,e.next)>0&&uc(t.prev,t,t.next)>0)}function uc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function dc(e,t){return e.x===t.x&&e.y===t.y}function fc(e,t,n,r){let i=mc(uc(e,t,n)),a=mc(uc(e,t,r)),o=mc(uc(n,r,e)),s=mc(uc(n,r,t));return!!(i!==a&&o!==s||i===0&&pc(e,n,t)||a===0&&pc(e,r,t)||o===0&&pc(n,e,r)||s===0&&pc(n,t,r))}function pc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function mc(e){return e>0?1:e<0?-1:0}function hc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&fc(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function gc(e,t){return uc(e.prev,e,e.next)<0?uc(e,t,e.next)>=0&&uc(e,e.prev,t)>=0:uc(e,t,e.prev)<0||uc(e,e.next,t)<0}function _c(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function vc(e,t){let n=new xc(e.i,e.x,e.y),r=new xc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function yc(e,t,n,r){let i=new xc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function bc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function xc(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Cc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];wc(e),Tc(n,e);let a=e.length;t.forEach(wc);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Tc(n,t[e]);let o=Gs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function wc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Tc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ec=class e extends Pn{constructor(e=new Ws([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new U(r,3)),this.setAttribute(`uv`,new U(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Dc:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new V,b=new V,x=new V),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Cc.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Cc.isClockWise(t)&&(w[e]=t.reverse())}}let T=Cc.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,ee=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);ae(i.x,i.y,-n)}}}let te=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];oe(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];oe(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function se(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Oc(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Is[i.type]().fromJSON(i)),new e(r,t.options)}},Dc={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function Oc(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var kc=class e extends Us{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ac=class e extends Pn{constructor(e=new Ws([new R(0,.5),new R(-.5,-.5),new R(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new U(r,3)),this.setAttribute(`normal`,new U(i,3)),this.setAttribute(`uv`,new U(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Cc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Cc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Cc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function jc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Mc=class e extends Pn{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Nc=class e extends Pn{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new V,u=new V,d=new V;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Pc=class e extends Pn{constructor(e=new Ps(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,s=new V,c=new R,l=new V,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Is[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Fc=class extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ic=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lc=class extends Ic{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return P(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Rc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Bc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Vc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b,endingEnd:b}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case x:i=e,o=2*t-n;break;case S:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case x:a=e,s=2*n-t;break;case S:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Hc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Uc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Rc(t,this.TimeBufferType),this.values=Rc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rc(e.times,Array),values:Rc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _:t=this.InterpolantFactoryMethodDiscrete;break;case v:t=this.InterpolantFactoryMethodLinear;break;case y:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _;case this.InterpolantFactoryMethodLinear:return v;case this.InterpolantFactoryMethodSmooth:return y}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&zc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===y,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Wc.prototype.TimeBufferType=Float32Array,Wc.prototype.ValueBufferType=Float32Array,Wc.prototype.DefaultInterpolation=v;var Gc=class extends Wc{};Gc.prototype.ValueTypeName=`bool`,Gc.prototype.ValueBufferType=Array,Gc.prototype.DefaultInterpolation=_,Gc.prototype.InterpolantFactoryMethodLinear=void 0,Gc.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Wc{};Kc.prototype.ValueTypeName=`color`;var qc=class extends Wc{};qc.prototype.ValueTypeName=`number`;var Jc=class extends Bc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)$e.slerpFlat(i,0,a,c-o,a,c,s);return i}},Yc=class extends Wc{InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};Yc.prototype.ValueTypeName=`quaternion`,Yc.prototype.DefaultInterpolation=v,Yc.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Wc{};Xc.prototype.ValueTypeName=`string`,Xc.prototype.ValueBufferType=Array,Xc.prototype.DefaultInterpolation=_,Xc.prototype.InterpolantFactoryMethodLinear=void 0,Xc.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Wc{};Zc.prototype.ValueTypeName=`vector`;var Qc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},$c=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},el=class{constructor(e){this.manager=e===void 0?$c:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};el.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var tl=class extends el{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Qc.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=je(`img`);function s(){l(),Qc.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},nl=class extends el{constructor(e){super(e)}load(e,t,n,r){let i=new qe,a=new tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},rl=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},il=class extends rl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},al=new kt,ol=new V,sl=new V,cl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sl),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ll=class extends cl{constructor(){super(new lr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=le*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ul=class extends rl{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dl=new kt,fl=new V,pl=new V,ml=class extends cl{constructor(){super(new lr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new R(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),fl.setFromMatrixPosition(e.matrixWorld),n.position.copy(fl),pl.copy(n.position),pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pl),n.updateMatrixWorld(),r.makeTranslation(-fl.x,-fl.y,-fl.z),dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}},hl=class extends rl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gl=class extends cl{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_l=class extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yl(){return(typeof performance>`u`?Date:performance).now()}var bl=`\\[\\]\\.:\\/`,xl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Sl=`[^\\[\\]\\.:\\/]`,Cl=`[^`+bl.replace(`\\.`,``)+`]`,wl=`((?:WC+[\\/:])*)`.replace(`WC`,Sl),Tl=`(WCOD+)?`.replace(`WCOD`,Cl),El=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Sl),Dl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Sl),Ol=RegExp(`^`+wl+Tl+El+Dl+`$`),kl=[`material`,`materials`,`bones`,`map`],Al=class{constructor(e,t,n){let r=n||jl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(xl,``)}static parseTrackName(e){let t=Ol.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);kl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jl.Composite=Al,jl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},jl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},jl.prototype.GetterByBindingType=[jl.prototype._getValue_direct,jl.prototype._getValue_array,jl.prototype._getValue_arrayElement,jl.prototype._getValue_toArray],jl.prototype.SetterByBindingTypeAndVersioning=[[jl.prototype._setValue_direct,jl.prototype._setValue_direct_setNeedsUpdate,jl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jl.prototype._setValue_array,jl.prototype._setValue_array_setNeedsUpdate,jl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jl.prototype._setValue_arrayElement,jl.prototype._setValue_arrayElement_setNeedsUpdate,jl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jl.prototype._setValue_fromArray,jl.prototype._setValue_fromArray_setNeedsUpdate,jl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ml=class{constructor(e,t,n=0,r=1/0){this.ray=new Ot(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(Nl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Pl(e[r],this,n,t);return n.sort(Nl),n}};function Nl(e,t){return e.distance-t.distance}function Pl(e,t,n,r){if(e.layers.test(t.layers)&&e.raycast(t,n),r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Pl(r[e],t,n,!0)}}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);var Fl=new V(-.42,.19,-.89).normalize(),Il=new H(8295352),Ll=.6;function Rl(e){let t=new _l(Il,Ll);t.position.copy(Fl).multiplyScalar(100),e.add(t),e.add(new il(2240588,132359,.9));let n=new _l(12374271,0);return n.position.set(10,50,-20),e.add(n),{moonLight:t,boltLight:n,moonDir:Fl,moonColor:Il.clone().multiplyScalar(Ll)}}var zl=`
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
               mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm4(vec2 p) {
    float sum = 0.0, amp = 0.5;
    mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 4; i++) { sum += amp * vnoise(p); p = rot * p; amp *= 0.5; }
    return sum / 0.9375;
  }
  float fbm6(vec2 p) {
    float sum = 0.0, amp = 0.5;
    mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 6; i++) { sum += amp * vnoise(p); p = rot * p; amp *= 0.5; }
    return sum / 0.984375;
  }
`,Bl=450,Vl=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;   // 永遠在最遠處,不受鏡面相機的斜投影裁切影響
  }
`,Hl=`
  uniform float uTime;
  uniform float uFlash;
  uniform vec3 uMoonDir;
  uniform vec3 uFlashDir;
  uniform vec3 uFogColor;
  varying vec3 vDir;
  ${zl}

  void main() {
    vec3 d = normalize(vDir);
    float el = d.y;

    // 雲層投影到天幕平面,越靠近地平線越壓縮(透視感)
    vec2 uv = d.xz / (max(el, 0.0) + 0.09);
    vec2 drift = vec2(-uTime * 0.018, uTime * 0.005);
    vec2 q = uv * 0.42 + drift;
    float warp = fbm4(q * 0.8 + uTime * 0.008);
    float c = fbm6(q + vec2(warp * 1.7, -warp * 1.2));
    float dens = smoothstep(0.38, 0.72, c);

    // 月亮與光暈
    float md = max(dot(d, uMoonDir), 0.0);
    float disk = smoothstep(0.99950, 0.99972, md);
    float halo = pow(md, 1200.0) * 1.5 + pow(md, 90.0) * 0.18 + pow(md, 10.0) * 0.035;
    vec3 moonCol = vec3(0.72, 0.80, 0.95);

    // 雲隙:深藍夜空 + 月亮;雲:背光,邊緣(較薄處)被月光鑲銀邊
    vec3 gap = vec3(0.0018, 0.0026, 0.0048) + moonCol * (disk * 4.0 + halo);
    float rim = dens * (1.0 - dens) * 4.0;
    vec3 cloud = vec3(0.0045, 0.0060, 0.0090)
               + moonCol * (pow(md, 7.0) * 0.045 + rim * pow(md, 24.0) * 0.16 + halo * 0.25);
    vec3 col = mix(gap, cloud, dens * 0.94);

    // 閃電:照亮雲層內部,雲越厚散射越強
    float fd = max(dot(d, uFlashDir), 0.0);
    col += vec3(0.55, 0.62, 0.85) * uFlash * (pow(fd, 7.0) * 2.2 + 0.1) * (0.35 + 0.65 * dens);

    // 地平線融進霧色(海面遠處同一個霧色,接縫才看不出來)
    col = mix(uFogColor, col, smoothstep(-0.02, 0.24, el));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Ul(e,{moonDir:t}){let n=new sr({name:`StormSky`,uniforms:{uTime:{value:0},uFlash:{value:0},uMoonDir:{value:t.clone()},uFlashDir:{value:new V(0,.5,-1).normalize()},uFogColor:{value:e.fog.color}},vertexShader:Vl,fragmentShader:Hl,side:1,depthWrite:!1,fog:!1}),r=new W(new Mc(Bl,48,24),n);r.frustumCulled=!1,r.renderOrder=-1,e.add(r);function i(e,t,r){n.uniforms.uTime.value=e,n.uniforms.uFlash.value=t,n.uniforms.uFlashDir.value.copy(r)}return{mesh:r,material:n,update:i}}var Wl=Math.PI*2,Gl=9.81,Kl=[-1,.12],ql=Math.atan2(Kl[1],Kl[0]),Jl=[-3.2,0],Yl=[{angle:.1,len:64,amp:1.6,steep:.14},{angle:-.35,len:43,amp:.95,steep:.14},{angle:.45,len:31,amp:.5,steep:.12}].map((e,t)=>{let n=ql+e.angle,r=Wl/e.len,i=e.amp*1;return{dx:Math.cos(n),dz:Math.sin(n),k:r,om:Math.sqrt(Gl*r),A:i,Q:e.steep*1/(r*i),phase:t*1.731,len:e.len}}),Xl=Yl.reduce((e,t)=>e+t.A,0),Zl=Yl.reduce((e,t)=>e+t.Q*t.k*t.A,0);Zl>.95&&console.warn(`[waves] Gerstner 尖銳度總和 ${Zl.toFixed(2)} 過高,波峰可能打結`);function Ql(){let e=e=>e.toFixed(5),t=``;for(let n of Yl)t+=`
    {
      vec2 D = vec2(${e(n.dx)}, ${e(n.dz)});
      float k = ${e(n.k)};
      float A = ${e(n.A)};
      float Q = ${e(n.Q)};
      float ph = k * dot(D, p) - ${e(n.om)} * t + ${e(n.phase)};
      float C = cos(ph), S = sin(ph);
      float kA = k * A, QkA = Q * kA;
      d  += vec3(Q * A * D.x * C, A * S, Q * A * D.y * C);
      tx += vec3(-QkA * D.x * D.x * S, kA * D.x * C, -QkA * D.x * D.y * S);
      tz += vec3(-QkA * D.x * D.y * S, kA * D.y * C, -QkA * D.y * D.y * S);
    }`;return`
  vec3 gerstner(vec2 p, float t, out vec3 nrm, out float jac) {
    vec3 d  = vec3(0.0);
    vec3 tx = vec3(1.0, 0.0, 0.0);   // ∂S/∂x
    vec3 tz = vec3(0.0, 0.0, 1.0);   // ∂S/∂z
    ${t}
    nrm = normalize(cross(tz, tx));
    jac = tx.x * tz.z - tz.x * tx.z;
    return d;
  }`}function $l(e,t,n,r){let i=0,a=0,o=0;for(let r of Yl){let s=r.k*(r.dx*e+r.dz*t)-r.om*n+r.phase,c=Math.cos(s);i+=r.Q*r.A*r.dx*c,o+=r.Q*r.A*r.dz*c,a+=r.A*Math.sin(s)}return r.x=i,r.y=a,r.z=o,r}var eu={x:0,y:0,z:0};function tu(e,t,n){let r=e-Jl[0]*n,i=t-Jl[1]*n,a=r,o=i;for(let e=0;e<3;e++)$l(a,o,n,eu),a=r-eu.x,o=i-eu.z;return{x:a,z:o}}function nu(e,t,n){let r=tu(e,t,n);return $l(r.x,r.z,n,eu).y}function ru(e,{resolutionScale:t=.5,clipBias:n=0}={}){let r=new Xe(1,1,{type:f}),i=new kt,a=new lr,o=new V,s=new V(0,1,0),c=new V(0,0,0),l=new vr,u=new V,d=new kt,p=new V,m=new V,h=new V,g=new Je,_=new Je;function v(e){return u.setFromMatrixPosition(e.matrixWorld),m.subVectors(c,u),m.dot(s)>0?!1:(m.reflect(s).negate().add(c),d.extractRotation(e.matrixWorld),p.set(0,0,-1).applyMatrix4(d).add(u),h.subVectors(c,p).reflect(s).negate().add(c),a.position.copy(m),a.up.set(0,1,0).applyMatrix4(d).reflect(s),a.lookAt(h),a.far=e.far,a.updateMatrixWorld(),a.projectionMatrix.copy(e.projectionMatrix),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(a.projectionMatrix),i.multiply(a.matrixWorldInverse),y(),o.copy(u),!0)}function y(){l.setFromNormalAndCoplanarPoint(s,c),l.applyMatrix4(a.matrixWorldInverse),g.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let e=a.projectionMatrix.elements;_.x=(Math.sign(g.x)+e[8])/e[0],_.y=(Math.sign(g.y)+e[9])/e[5],_.z=-1,_.w=(1+e[10])/e[14],g.multiplyScalar(2/g.dot(_)),e[2]=g.x,e[6]=g.y,e[10]=g.z+1-n,e[14]=g.w}e.onBeforeRender=(t,n,i)=>{if(!v(i))return;let o=t.getRenderTarget(),s=t.xr.enabled,c=t.shadowMap.autoUpdate;e.visible=!1,t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(r),t.state.buffers.depth.setMask(!0),t.autoClear===!1&&t.clear(),t.render(n,a),e.visible=!0,t.xr.enabled=s,t.shadowMap.autoUpdate=c,t.setRenderTarget(o),i.viewport!==void 0&&t.state.viewport(i.viewport)};function b(e,n){r.setSize(Math.max(1,Math.round(e*t)),Math.max(1,Math.round(n*t)))}return{texture:r.texture,textureMatrix:i,eye:o,setSize:b}}var iu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},au=new Nr(-1,1,1,-1,0,1),ou=new class extends Pn{constructor(){super(),this.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new U([0,2,0,0,2,0],2))}},su=class{constructor(e){this._mesh=new W(ou,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,au)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},cu=9.81,lu=Math.PI*2;function uu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function du(e){let t=Math.max(e(),1e-9),n=e(),r=Math.sqrt(-2*Math.log(t));return[r*Math.cos(lu*n),r*Math.sin(lu*n)]}function fu(e,t,n){let r=.076*(t*t/(n*cu))**.22,i=22*Math.cbrt(cu*cu/(t*n)),a=e<=i?.07:.09,o=Math.exp(-((e-i)**2)/(2*a*a*i*i));return r*cu*cu/e**5*Math.exp(-1.25*(i/e)**4)*3.3**o}function pu(e){let t=t=>Math.abs(Math.cos(t/2))**(2*e),n=0;for(let e=0;e<720;e++)n+=t(-Math.PI+(e+.5)/720*lu)*(lu/720);return e=>t(e)/n}function mu(e){let{N:t,size:n,kMin:r,kMax:i,windSpeed:a,fetch:o,windAngle:s,spread:c,scale:l,seed:u}=e,d=uu(u),f=pu(c),p=lu/n,m=new Float32Array(t*t*2);for(let e=0;e<t;e++){let n=e<t/2?e:e-t;for(let c=0;c<t;c++){let u=(c<t/2?c:c-t)*p,h=n*p,g=Math.hypot(u,h),[_,v]=du(d);if(c===t/2||e===t/2||g<r||g>=i||g===0)continue;let y=Math.sqrt(cu*g),b=cu/(2*y),x=fu(y,a,o)*f(Math.atan2(h,u)-s)*b/g,S=Math.sqrt(x*l)*p,C=(e*t+c)*2;m[C]=_*S,m[C+1]=v*S}}let h=new Float32Array(t*t*4);for(let e=0;e<t;e++)for(let n=0;n<t;n++){let r=(e*t+n)*2,i=((t-e)%t*t+(t-n)%t)*2,a=(e*t+n)*4;h[a]=m[r],h[a+1]=m[r+1],h[a+2]=m[i],h[a+3]=m[i+1]}return h}var hu=9.81,gu=Math.PI*2;function _u({data:e,N:t,size:n,kMax:r,choppiness:i}){let a=[],o=gu/n;for(let n=0;n<t;n++){let i=n<t/2?n:n-t;for(let s=0;s<t;s++){let c=(s<t/2?s:s-t)*o,l=i*o,u=Math.hypot(c,l);if(u===0||u>=r)continue;let d=(n*t+s)*4;e[d]===0&&e[d+1]===0&&e[d+2]===0&&e[d+3]===0||a.push([c,l,u,e[d],e[d+1],e[d+2],e[d+3]])}}let s=a.length,c=new Float64Array(s),l=new Float64Array(s),u=new Float64Array(s),d=new Float64Array(s),f=new Float64Array(s),p=new Float64Array(s*4);a.forEach(([e,t,n,r,i,a,o],s)=>{c[s]=e,l[s]=t,d[s]=e/n,f[s]=t/n,u[s]=Math.sqrt(hu*n),p.set([r,i,a,o],s*4)});let m=new Float64Array(s),h=new Float64Array(s),g=NaN;function _(e){if(e!==g){g=e;for(let t=0;t<s;t++){let n=u[t]*e,r=Math.cos(n),i=Math.sin(n),a=t*4,o=p[a],s=p[a+1],c=p[a+2],l=p[a+3];m[t]=o*r+s*i+c*r+l*i,h[t]=s*r-o*i+c*i-l*r}}}let v=.5*n/t,y={x:0,y:0,z:0};function b(e,t){let n=e-v,r=t-v,a=0,o=0,u=0;for(let e=0;e<s;e++){let t=c[e]*n+l[e]*r,i=Math.cos(t),s=Math.sin(t),p=m[e]*s+h[e]*i;a+=m[e]*i-h[e]*s,o+=d[e]*p,u+=f[e]*p}return y.x=-i*o,y.y=a,y.z=-i*u,y}function x(e,t,n){_(n);let r=b(e,t);return b(e-r.x,t-r.z).y}return{heightAt:x,count:s}}var vu=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,yu=`
  vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
  vec2 imul(vec2 a) { return vec2(-a.y, a.x); }
`,bu=`
  uniform sampler2D uH0;
  uniform float uTime;
  uniform float uSize;
  uniform float uN;
  ${yu}

  void main() {
    vec2 c = gl_FragCoord.xy - 0.5;
    vec2 n = vec2(c.x < uN * 0.5 ? c.x : c.x - uN, c.y < uN * 0.5 ? c.y : c.y - uN);
    vec2 K = 6.28318530718 * n / uSize;
    float k = length(K);
    float invK = k > 1e-6 ? 1.0 / k : 0.0;

    vec4 h0 = texture2D(uH0, (c + 0.5) / uN);
    float w = sqrt(9.81 * k) * uTime;
    vec2 e = vec2(cos(w), sin(w));
    // h0(k)·e^{-iωt} 沿 +k 前進;共軛項保證結果為實數場
    vec2 h = cmul(h0.xy, vec2(e.x, -e.y)) + cmul(vec2(h0.z, -h0.w), e);
    vec2 ih = imul(h);

  #ifdef PASS_A
    vec2 dx = -ih * K.x * invK;
    vec2 dz = -ih * K.y * invK;
    vec2 hx = ih * K.x;
    gl_FragColor = vec4(h + imul(dx), dz + imul(hx));
  #else
    vec2 hz = ih * K.y;
    vec2 dxx = h * K.x * K.x * invK;
    vec2 dzz = h * K.y * K.y * invK;
    vec2 dxz = h * K.x * K.y * invK;
    gl_FragColor = vec4(hz + imul(dxx), dzz + imul(dxz));
  #endif
  }
`,xu=`
  uniform sampler2D uInput;
  uniform float uN;
  uniform float uSubSize;
  ${yu}

  void main() {
  #ifdef HORIZONTAL
    float index = gl_FragCoord.x - 0.5;
  #else
    float index = gl_FragCoord.y - 0.5;
  #endif
    float half_ = uSubSize * 0.5;
    float evenIndex = floor(index / uSubSize) * half_ + mod(index, half_);
  #ifdef HORIZONTAL
    vec4 even = texture2D(uInput, vec2(evenIndex + 0.5, gl_FragCoord.y) / uN);
    vec4 odd  = texture2D(uInput, vec2(evenIndex + uN * 0.5 + 0.5, gl_FragCoord.y) / uN);
  #else
    vec4 even = texture2D(uInput, vec2(gl_FragCoord.x, evenIndex + 0.5) / uN);
    vec4 odd  = texture2D(uInput, vec2(gl_FragCoord.x, evenIndex + uN * 0.5 + 0.5) / uN);
  #endif
    float arg = 6.28318530718 * (index / uSubSize);   // 正號 = 逆變換
    vec2 tw = vec2(cos(arg), sin(arg));
    gl_FragColor = vec4(even.xy + cmul(tw, odd.xy), even.zw + cmul(tw, odd.zw));
  }
`,Su=`
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uChop;
  varying vec2 vUv;
  void main() {
    vec4 a = texture2D(uA, vUv);
    vec4 b = texture2D(uB, vUv);
    gl_FragColor = vec4(-uChop * a.g, a.r, -uChop * a.b, -uChop * b.a);
  }
`,Cu=`
  uniform sampler2D uA;
  uniform sampler2D uB;
  uniform float uChop;
  varying vec2 vUv;
  void main() {
    vec4 a = texture2D(uA, vUv);
    vec4 b = texture2D(uB, vUv);
    gl_FragColor = vec4(a.a, b.r, -uChop * b.g, -uChop * b.b);
  }
`,wu=`
  uniform sampler2D uPrev;
  uniform sampler2D uDisp;
  uniform sampler2D uDeriv;
  uniform vec2 uDecay;          // x:破浪白水, y:殘留薄沫(每幀乘數)
  uniform sampler2D uControl;   // 1×1:r = Jacobian 門檻(foamControlFragment 維護)
  uniform vec2 uAdvect;
  varying vec2 vUv;
  void main() {
    vec4 d = texture2D(uDeriv, vUv);
    float dxz = texture2D(uDisp, vUv).a;
    float J = (1.0 + d.z) * (1.0 + d.w) - dxz * dxz;
    float threshold = texture2D(uControl, vec2(0.5)).r;
    float inject = clamp((threshold - J) * 2.5, 0.0, 1.0);
    vec2 prev = texture2D(uPrev, vUv - uAdvect).rg;
    float whitewater = max(prev.r * uDecay.x, inject);   // 'active' 是 GLSL 保留字
    float residual = max(prev.g * uDecay.y, whitewater * 0.8);
    gl_FragColor = vec4(whitewater, residual, inject, 1.0);
  }
`,Tu=`
  uniform sampler2D uFoam0;
  uniform sampler2D uFoam1;
  uniform float uRatio;         // cascade0 尺寸 / cascade1 尺寸
  uniform float uCells;
  varying vec2 vUv;
  void main() {
    vec2 cell = floor(vUv * uCells);
    float visible = 0.0, breaking = 0.0, residual = 0.0;
    for (int j = 0; j < TEXELS; j++) {
      for (int i = 0; i < TEXELS; i++) {
        vec2 uv = (cell + (vec2(float(i), float(j)) + 0.5) / float(TEXELS)) / uCells;
        vec3 f0 = textureLod(uFoam0, uv, 0.0).rgb;
        vec2 f1 = textureLod(uFoam1, uv * uRatio, 0.0).rg;
        visible += smoothstep(0.3, 0.65, clamp(f0.r * 0.7 + f1.r, 0.0, 1.0));
        residual += smoothstep(0.3, 0.65, clamp(f0.g * 0.7 + f1.g, 0.0, 1.0));
        breaking = max(breaking, f0.b);
      }
    }
    float n = float(TEXELS * TEXELS);
    gl_FragColor = vec4(visible / n, breaking, residual / n, 1.0);
  }
`,Eu=`
  uniform sampler2D uStats;
  uniform sampler2D uPrev;
  uniform float uInit;
  uniform float uInitThreshold;
  uniform float uTarget;
  uniform vec4 uGain;           // gain, smoothing, min, max
  void main() {
    if (uInit > 0.5) {
      gl_FragColor = vec4(uInitThreshold, uTarget, uTarget, 0.0);
      return;
    }
    vec2 sum = vec2(0.0);
    for (int j = 0; j < CELLS; j++) {
      for (int i = 0; i < CELLS; i++) sum += texelFetch(uStats, ivec2(i, j), 0).rb;
    }
    vec2 measured = sum / float(CELLS * CELLS);
    vec4 prev = texture2D(uPrev, vec2(0.5));
    float coverage = prev.g + (measured.x - prev.g) * uGain.y;
    float threshold = clamp(prev.r + uGain.x * (uTarget - coverage), uGain.z, uGain.w);
    gl_FragColor = vec4(threshold, coverage, measured);
  }
`,Du=256,Ou=Math.log2(Du);function ku(){return new Xe(Du,Du,{type:d,format:m,minFilter:r,magFilter:r,depthBuffer:!1,generateMipmaps:!1})}function Au(){let t=new Xe(Du,Du,{type:f,format:m,minFilter:c,magFilter:o,wrapS:e,wrapT:e,depthBuffer:!1,generateMipmaps:!0});return t.texture.anisotropy=8,t}function ju(e,t,n={}){return new sr({vertexShader:vu,fragmentShader:e,uniforms:t,defines:n,depthTest:!1,depthWrite:!1})}function Mu(e){let t=new Go(e,Du,Du,m,d);return t.minFilter=t.magFilter=r,t.needsUpdate=!0,t}function Nu(e,t){let n=new su,r={a:[ku(),ku()],b:[ku(),ku()]},i={uH0:{value:null},uTime:{value:0},uSize:{value:1},uN:{value:Du}},a=ju(bu,i,{PASS_A:``}),o=ju(bu,i),s={uInput:{value:null},uN:{value:Du},uSubSize:{value:2}},c=ju(xu,s,{HORIZONTAL:``}),l=ju(xu,s),u={uA:{value:null},uB:{value:null},uChop:{value:t.choppiness}},d=ju(Su,u),f=ju(Cu,u),p={uPrev:{value:null},uDisp:{value:null},uDeriv:{value:null},uDecay:{value:new R(1,1)},uControl:{value:null},uAdvect:{value:new R}},m=new R(Math.cos(t.windAngle),Math.sin(t.windAngle)),h=ju(wu,p),g=t.cascades.map(e=>{let n=mu({...t,...e,N:Du});return{size:e.size,data:n,h0:Mu(n),disp:Au(),deriv:Au(),foam:e.foam?[Au(),Au()]:null,foamIndex:0}});function _(t,r){n.material=t,e.setRenderTarget(r),n.render(e)}function v(e){let t=0;for(let n of[c,l])for(let r=1;r<=Ou;r++)s.uInput.value=e[t].texture,s.uSubSize.value=2**r,_(n,e[1-t]),t=1-t}function y(e,n,s){if(i.uH0.value=e.h0,i.uTime.value=n,i.uSize.value=e.size,_(a,r.a[0]),_(o,r.b[0]),v(r.a),v(r.b),u.uA.value=r.a[0].texture,u.uB.value=r.b[0].texture,_(d,e.disp),_(f,e.deriv),e.foam){let n=e.foam[e.foamIndex];e.foamIndex=1-e.foamIndex,p.uPrev.value=n.texture,p.uDisp.value=e.disp.texture,p.uDeriv.value=e.deriv.texture,p.uAdvect.value.copy(m).multiplyScalar(t.foamDrift*s/e.size),_(h,e.foam[e.foamIndex])}}function b(n,r){let i=e.getRenderTarget();p.uDecay.value.set(Math.exp(-r*t.foamDecay),Math.exp(-r*t.residualDecay));for(let e of g)y(e,n,r);e.setRenderTarget(i)}return{update:b,textures:()=>g.map(e=>({size:e.size,disp:e.disp.texture,deriv:e.deriv.texture,foam:e.foam?e.foam[e.foamIndex].texture:null})),createSampler:e=>_u({data:g[0].data,N:Du,size:g[0].size,kMax:Math.PI*2/e,choppiness:t.choppiness}),setFoamControl:e=>{p.uControl.value=e}}}var Pu=384e-8,Fu=3.41;function Iu(e){return e<=0?0:Math.min(1,Pu*e**Fu)}var Lu=Object.freeze({gain:.25,smoothing:.3,min:.2,max:1.2}),Ru=64,zu=256,Bu=.25;function Vu(e){return new Xe(e,e,{type:d,format:m,minFilter:r,magFilter:r,depthBuffer:!1,generateMipmaps:!1})}function Hu(e,t,n){return new sr({vertexShader:vu,fragmentShader:e,uniforms:t,defines:n,depthTest:!1,depthWrite:!1})}function Uu(e,{windSpeed:t,foamThreshold:n,cascadeSizes:r}){let i=Iu(t),a=Vu(Ru),o=[Vu(1),Vu(1)],s=0,c={uFoam0:{value:null},uFoam1:{value:null},uRatio:{value:r[0]/r[1]},uCells:{value:Ru}},l={uStats:{value:a.texture},uPrev:{value:null},uInit:{value:1},uInitThreshold:{value:n},uTarget:{value:i},uGain:{value:new Je(Lu.gain,Lu.smoothing,Lu.min,Lu.max)}},u=Hu(Tu,c,{TEXELS:zu/Ru}),d=Hu(Eu,l,{CELLS:Ru}),f=new su;function p(t,n){f.material=t,e.setRenderTarget(n),f.render(e)}function m(){l.uPrev.value=o[s].texture,s=1-s,p(d,o[s])}let h=e.getRenderTarget();m(),l.uInit.value=0,e.setRenderTarget(h);let g=0;function _(t,n){if(g+=t,g<Bu||!n[0]||!n[1])return;g=0,c.uFoam0.value=n[0],c.uFoam1.value=n[1];let r=e.getRenderTarget();p(u,a),m(),e.setRenderTarget(r)}let v=()=>o[s].texture;function y(){let t=new Float32Array(4);return e.readRenderTargetPixels(o[s],0,0,1,1,t),{target:i,threshold:t[0],coverage:t[1],measured:t[2],residual:t[3]}}return{update:_,texture:v,info:y}}var Wu=`
  uniform float uTime;
  uniform vec3 uEye;
  uniform mat4 textureMatrix;
  uniform vec2 uDrift;
  uniform sampler2D uDisp0;
  uniform sampler2D uDisp1;
  uniform vec3 uCascade;        // 三個 cascade 的貼圖尺寸 (m)
  uniform vec3 uBoatPos;
  uniform vec2 uBoatFwd;
  uniform float uBowWave;       // 船頭推浪強度(基礎航速 + 插進浪裡時加強)
  uniform sampler2D uHullClip;
  uniform vec4 uHullRange;      // xMin, xMax, yMin, yMax(船身座標)

  varying vec3 vWorld;
  varying vec2 vP;               // 未位移、已扣漂移的波空間座標:FFT 貼圖查詢用
  varying vec3 vNrm;
  varying float vJac;
  varying float vH;
  varying vec4 vMirror;

  #include <common>
  #include <fog_pars_vertex>
  ${Ql()}

  // 依距離挑 mip,遠處網格稀疏時不會取到高頻造成閃爍
  float lodFor(float camDist, float size) {
    return max(0.0, log2(camDist * 0.012 / (size / 256.0)));
  }

  // 船身推出來的浪:艏前堆高、往後散開的 V 形分歧波、船肩凹陷、艉浪
  float boatWave(vec2 xz) {
    vec2 q = xz - uBoatPos.xz;
    vec2 side = vec2(-uBoatFwd.y, uBoatFwd.x);
    float a = dot(q, uBoatFwd);
    float b = abs(dot(q, side));
    float ux = (a - uHullRange.x) / (uHullRange.y - uHullRange.x);
    float uw = (-0.15 - uHullRange.z) / (uHullRange.w - uHullRange.z);
    float hw = ux > 0.0 && ux < 1.0 ? textureLod(uHullClip, vec2(ux, uw), 0.0).r : 0.0;
    float off = max(b - hw, 0.0);

    float bow = exp(-pow((a - 4.7) / 1.2, 2.0)) * exp(-off * off * 1.4);
    float armPos = max(5.7 - a, 0.0) * 0.36;
    float arm = exp(-pow((off - armPos) / 0.5, 2.0)) * smoothstep(6.0, 4.8, a) * exp(-max(5.7 - a, 0.0) * 0.07);
    float shoulder = exp(-pow(a / 2.4, 2.0)) * exp(-off * off * 0.7);
    float stern = exp(-pow((a + 5.7) / 1.1, 2.0)) * exp(-off * off * 0.9);
    return uBowWave * (0.6 * bow + 0.32 * arm - 0.28 * shoulder + 0.18 * stern);
  }

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    float camDist = distance(wp.xz, uEye.xz);
    vec2 p = wp.xz - uDrift;

    vec3 n; float j;
    vec3 d = gerstner(p, uTime, n, j);
    vec3 f = textureLod(uDisp0, p / uCascade.x, lodFor(camDist, uCascade.x)).xyz;
    f += textureLod(uDisp1, p / uCascade.y, lodFor(camDist, uCascade.y)).xyz
       * (1.0 - smoothstep(60.0, 140.0, camDist));
    wp.xyz += d + f;
    wp.y += boatWave(wp.xz);

    vWorld = wp.xyz;
    vP = p;
    vNrm = n;
    vJac = j;
    vH = d.y + f.y;
    vMirror = textureMatrix * wp;

    vec4 mvPosition = viewMatrix * wp;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Gu=`
  #define LAMP_COUNT 4
  uniform sampler2D mirrorSampler;
  uniform sampler2D uDisp0;
  uniform sampler2D uDisp1;
  uniform sampler2D uDisp2;
  uniform sampler2D uDeriv0;
  uniform sampler2D uDeriv1;
  uniform sampler2D uDeriv2;
  uniform sampler2D uFoam0;
  uniform sampler2D uFoam1;
  uniform vec3 uCascade;
  uniform float uTime;
  uniform float uFlash;
  uniform float uDistortion;
  uniform float uAmpSum;
  uniform vec3 uEye;
  uniform vec3 uMoonDir;
  uniform vec3 uMoonColor;
  uniform vec3 uFlashDir;
  uniform vec3 uDeep;
  uniform vec3 uScatter;
  uniform vec3 uFoam;
  uniform vec2 uWindDir;
  uniform vec3 uAmbient;
  uniform vec3 uBoatPos;
  uniform vec2 uBoatFwd;
  uniform float uBowWave;
  uniform mat4 uBoatInv;
  uniform sampler2D uHullClip;
  uniform vec4 uHullRange;
  uniform sampler2D uShoreMap;
  uniform mat4 uShoreInv;
  uniform vec4 uShoreRange;     // xMin, xMax, zMin, zMax(海岬區域座標)
  uniform vec3 uLampPos[LAMP_COUNT];
  uniform vec3 uLampColor[LAMP_COUNT];

  varying vec3 vWorld;
  varying vec2 vP;
  varying vec3 vNrm;
  varying float vJac;
  varying float vH;
  varying vec4 vMirror;

  #include <common>
  #include <fog_pars_fragment>
  ${zl}

  // 雨滴漣漪:每格一顆雨滴,各自錯開生命週期,往外擴散一圈
  vec2 rainRipples(vec2 p, float t) {
    vec2 cell = floor(p), f = fract(p);
    vec2 acc = vec2(0.0);
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 o = vec2(float(i), float(j));
        vec2 h = hash22(cell + o);
        float life = fract(t * 1.1 + h.x * 7.0 + h.y * 3.0);
        vec2 c = o + h - f;
        float r = length(c);
        float ring = r - life * 0.85;
        float w = sin(ring * 34.0) * smoothstep(0.11, 0.0, abs(ring)) * (1.0 - life) * (1.0 - life);
        acc += c / (r + 1e-3) * w;
      }
    }
    return acc;
  }

  // 船身周圍被推開的白水、船頭 V 形破浪、船尾航跡
  float boatFoamMask(vec2 p) {
    vec2 q = p - uBoatPos.xz;
    vec2 side = vec2(-uBoatFwd.y, uBoatFwd.x);
    float a = dot(q, uBoatFwd) - 0.4;
    float b = abs(dot(q, side));

    float e = length(vec2(a / 6.1, b / 2.05));
    float hull = smoothstep(1.22, 0.98, e) * 0.7;

    float armDist = b - (1.3 + max(5.8 - a, 0.0) * 0.36);
    float arms = exp(-armDist * armDist * 3.0) * smoothstep(6.4, 5.2, a) * exp(-max(5.8 - a, 0.0) * 0.045);

    float w = 1.2 + max(-5.0 - a, 0.0) * 0.13;
    float wake = smoothstep(w, w * 0.25, b) * smoothstep(-4.4, -6.0, a) * exp((a + 5.0) * 0.035);

    return clamp(max(hull, max(arms * 0.75, wake * 0.9)), 0.0, 1.0);
  }

  // 崖腳拍岸白沫:離岸越近越白,並有一道道往岸邊推進的碎浪線
  float shoreFoamMask(vec3 world) {
    vec3 lp = (uShoreInv * vec4(world, 1.0)).xyz;
    vec2 suv = (lp.xz - uShoreRange.xz) / (uShoreRange.yw - uShoreRange.xz);
    if (suv.x <= 0.0 || suv.x >= 1.0 || suv.y <= 0.0 || suv.y >= 1.0) return 0.0;
    float d = texture2D(uShoreMap, suv).r;
    float surge = 0.55 + 0.45 * sin(d * 1.3 + uTime * 1.7 + fbm4(lp.xz * 0.15) * 4.0);
    return smoothstep(9.0, 0.5, d) * surge;
  }

  // 落在船殼內部(且低於甲板上方一點)的水不畫:浪不會穿過船身、甲板下不會看到水
  void clipInsideHull() {
    vec3 lp = (uBoatInv * vec4(vWorld, 1.0)).xyz;
    vec2 huv = (lp.xy - uHullRange.xz) / (uHullRange.yw - uHullRange.xz);
    if (huv.x <= 0.0 || huv.x >= 1.0 || huv.y <= 0.0 || huv.y >= 1.0) return;
    vec2 hc = texture2D(uHullClip, huv).rg;
    if (abs(lp.z) < hc.x - 0.02 && lp.y < hc.y) discard;
  }

  void main() {
    clipInsideHull();
    vec3 toEye = uEye - vWorld;
    float dist = length(toEye);
    vec3 V = toEye / dist;
    vec3 Ng = normalize(vNrm);

    // ---- FFT 斜率與 Jacobian(三個 cascade 相加)----
    vec2 uv0 = vP / uCascade.x, uv1 = vP / uCascade.y, uv2 = vP / uCascade.z;
    vec4 dr = texture2D(uDeriv0, uv0) + texture2D(uDeriv1, uv1);
    float dxz = texture2D(uDisp0, uv0).a + texture2D(uDisp1, uv1).a;
    float detailFade = 1.0 - smoothstep(30.0, 90.0, dist);
    dr += texture2D(uDeriv2, uv2) * detailFade;
    dxz += texture2D(uDisp2, uv2).a * detailFade;

    vec2 jDiag = max(vec2(1.0) + dr.zw, vec2(0.25));
    vec2 slope = dr.xy / jDiag - Ng.xz / Ng.y;
    vec2 rs = rainRipples(vWorld.xz * 2.4, uTime) * (1.0 - smoothstep(5.0, 30.0, dist)) * 0.22;
    vec3 N = normalize(vec3(-slope.x + rs.x, 1.0, -slope.y + rs.y));
    float J = (1.0 + dr.z) * (1.0 + dr.w) - dxz * dxz + (vJac - 1.0);
    vec3 L = uMoonDir;

    // ---- Fresnel ----
    float cosT = clamp(dot(N, V), 0.0, 1.0);
    float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
    F = mix(F, 1.0, smoothstep(60.0, 220.0, dist) * 0.5);

    // ---- 反射:平面鏡 + 法線扭曲 ----
    vec2 distortion = clamp(N.xz, -0.6, 0.6) * uDistortion / (dist + 4.0);
    vec3 refl = texture2D(mirrorSampler, vMirror.xy / vMirror.w + distortion).rgb;

    // ---- 水體:浪谷深暗,浪峰透光 ----
    float hN = clamp(vH / uAmpSum * 0.5 + 0.5, 0.0, 1.0);
    float backLit = pow(clamp(dot(V, -L), 0.0, 1.0), 3.0);
    float thin = pow(hN, 2.2) * (1.0 - cosT * 0.5);
    vec3 body = uDeep * (0.55 + 0.45 * hN) + uAmbient * max(N.y, 0.0) * 0.03;
    body += uScatter * thin * (0.3 + 0.7 * backLit);
    body += uScatter * uFlash * (thin * 9.0 + max(dot(N, uFlashDir), 0.0) * 1.5);

    // ---- 船上燈光:照進水裡的暖光 + 波面上的反光碎點 ----
    vec3 lampSpec = vec3(0.0);
    vec3 lampDiff = vec3(0.0);
    for (int i = 0; i < LAMP_COUNT; i++) {
      vec3 Lv = uLampPos[i] - vWorld;
      float d2 = max(dot(Lv, Lv), 1.0);
      Lv *= inversesqrt(d2);
      vec3 E = uLampColor[i] / d2;
      vec3 H = normalize(Lv + V);
      float fh = 0.02 + 0.98 * pow(1.0 - max(dot(V, H), 0.0), 5.0);
      lampSpec += E * fh * pow(max(dot(N, H), 0.0), 220.0) * 9.0;
      lampDiff += E * max(dot(N, Lv), 0.0);
    }
    body += lampDiff * uScatter * 1.5;

    // ---- 月光碎波光帶 ----
    vec3 Hm = normalize(L + V);
    float nh = max(dot(N, Hm), 0.0);
    vec3 moonSpec = uMoonColor * (pow(nh, 900.0) * 18.0 + pow(nh, 60.0) * 0.35) * (0.3 + F);
    vec3 Hf = normalize(uFlashDir + V);
    vec3 flashSpec = vec3(0.8, 0.86, 1.0) * uFlash * pow(max(dot(N, Hf), 0.0), 120.0) * 6.0;

    vec3 col = mix(body, refl, F) + moonSpec + lampSpec + flashSpec;

    // ---- 白沫:破浪白水 + 即時壓縮 + 殘留條紋 + 船身 ----
    vec2 f0 = texture2D(uFoam0, uv0).rg, f1 = texture2D(uFoam1, uv1).rg;
    float accum = f0.r * 0.7 + f1.r;
    float residual = clamp(f0.g * 0.7 + f1.g, 0.0, 1.0);
    float live = smoothstep(0.6, 0.0, J);
    float mask = clamp(max(accum, live), 0.0, 1.0);

    // 風向座標(x 沿風、y 橫風):雜訊沿風拉長 → 白沫被吹成一條條
    vec2 wq = vec2(dot(vP, uWindDir), dot(vP, vec2(-uWindDir.y, uWindDir.x)));
    float farF = smoothstep(50.0, 180.0, dist);
    float foamTex = fbm4(wq * vec2(0.55, 1.1)) * 0.55 + fbm4(wq * vec2(1.8, 4.0) + 7.0) * 0.5;
    foamTex = mix(foamTex, 0.55, farF);
    // 船身白水被碎浪打散:用水面壓縮量調制,不會是一圈均勻的白裙邊
    float boatFoam = boatFoamMask(vWorld.xz) * (0.45 + 0.55 * smoothstep(1.1, 0.5, J))
                   * clamp(0.35 + 0.55 * uBowWave, 0.0, 1.4);
    mask = max(mask, boatFoam);
    mask = max(mask, shoreFoamMask(vWorld));
    float foam = clamp((foamTex - (1.0 - mask)) / 0.18, 0.0, 1.0);

    // 殘留薄沫:雜訊等值線沿風向拉成細長線(8 級風的招牌條紋),遠處平均成一層淡白
    float streakN = fbm4(wq * vec2(0.05, 0.55) + vec2(0.0, fbm4(wq * 0.04) * 2.5));
    float streak = smoothstep(0.82, 0.97, 1.0 - abs(streakN * 2.0 - 1.0));
    float lace = smoothstep(0.3, 0.75, fbm4(wq * vec2(0.9, 2.6) + 3.0) + residual * 0.25);
    float streakFar = smoothstep(30.0, 110.0, dist);
    float thinFoam = residual * mix(streak * lace, 0.1, streakFar);
    foam = max(foam, thinFoam * 0.6);

    // Lambert 漫射要除以 π,否則靠近燈的白沫會整圈發亮
    vec3 foamLight = uAmbient * 0.7
                   + uMoonColor * max(dot(N, L), 0.0) * 0.6
                   + lampDiff * (0.8 / PI)
                   + vec3(0.6, 0.66, 0.8) * uFlash * 1.6;
    col = mix(col, uFoam * foamLight, foam * 0.92);

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`,Ku=260,qu=480,Ju=.2,Yu=.1,Xu=10,Zu=Math.PI*2,Qu={windSpeed:20,fetch:2e5,windAngle:ql,spread:6,scale:1,choppiness:.9,foamThreshold:.85,foamDecay:.5,residualDecay:.06,foamDrift:.6,cascades:[{size:251,kMin:Zu/48,kMax:Zu/6,seed:11,scale:.7,foam:!0},{size:37.3,kMin:Zu/6,kMax:Zu/.9,seed:23,scale:.45,foam:!0},{size:7.1,kMin:Zu/.9,kMax:1/0,seed:37,scale:.25,foam:!1}]};function $u(e,t,n){let r=t+1,i=t=>Math.sign(t)*(n*Math.abs(t)+(1-n)*Math.abs(t)**3)*e,a=new Float32Array(r*r*3);for(let e=0;e<r;e++){let n=i(-1+2*e/t);for(let o=0;o<r;o++){let s=(e*r+o)*3;a[s]=i(-1+2*o/t),a[s+2]=n}}let o=new Uint32Array(t*t*6),s=0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let t=e*r+n,i=t+1,a=t+r,c=a+1;o.set([t,a,i,i,a,c],s),s+=6}let c=new Pn;return c.setAttribute(`position`,new wn(a,3)),c.setIndex(new wn(o,1)),c}function ed(e,t,{moonDir:n,moonColor:r,hullClip:i,shore:a}){let o=new W($u(Ku,qu,Ju));o.frustumCulled=!1;let s=ru(o,{resolutionScale:.5}),c=Nu(t,Qu),l=c.createSampler(Xu),u=Uu(t,{windSpeed:Qu.windSpeed,foamThreshold:Qu.foamThreshold,cascadeSizes:Qu.cascades.map(e=>e.size)});c.setFoamControl(u.texture());let d=ir.merge([q.fog,{mirrorSampler:{value:null},textureMatrix:{value:null},uDisp0:{value:null},uDisp1:{value:null},uDisp2:{value:null},uDeriv0:{value:null},uDeriv1:{value:null},uDeriv2:{value:null},uFoam0:{value:null},uFoam1:{value:null},uCascade:{value:new V(...Qu.cascades.map(e=>e.size))},uDrift:{value:new R},uWindDir:{value:new R(Math.cos(ql),Math.sin(ql))},uTime:{value:0},uFlash:{value:0},uDistortion:{value:2.4},uAmpSum:{value:Xl+1.2},uEye:{value:null},uMoonDir:{value:n.clone()},uMoonColor:{value:r.clone()},uFlashDir:{value:new V(0,.5,-1).normalize()},uDeep:{value:new H(67339)},uScatter:{value:new H(670272).multiplyScalar(.12)},uFoam:{value:new H(14542574)},uAmbient:{value:new H(2372174).multiplyScalar(.6)},uBoatPos:{value:new V},uBoatFwd:{value:new R(1,0)},uBoatInv:{value:new kt},uBowWave:{value:1},uHullClip:{value:null},uShoreMap:{value:null},uShoreInv:{value:new kt},uShoreRange:{value:new Je},uHullRange:{value:new Je(i.range.xMin,i.range.xMax,i.range.yMin,i.range.yMax)},uLampPos:{value:Array.from({length:4},()=>new V(0,-100,0))},uLampColor:{value:Array.from({length:4},()=>new H(0,0,0))}}]);d.mirrorSampler.value=s.texture,d.textureMatrix.value=s.textureMatrix,d.uEye.value=s.eye,d.uHullClip.value=i.texture,d.uShoreMap.value=a.texture,d.uShoreInv.value.copy(a.worldToLocal),d.uShoreRange.value.copy(a.range),o.material=new sr({name:`StormOcean`,uniforms:d,vertexShader:Wu,fragmentShader:Gu,fog:!0}),e.add(o);let f=new V;function p(){c.textures().forEach((e,t)=>{d[`uDisp${t}`].value=e.disp,d[`uDeriv${t}`].value=e.deriv,e.foam&&(d[`uFoam${t}`].value=e.foam)})}function m(e,t,n,r,i,a,o){c.update(e,t),p(),u.update(t,[d.uFoam0.value,d.uFoam1.value]),c.setFoamControl(u.texture()),d.uTime.value=e,d.uDrift.value.set(Jl[0]*e,Jl[1]*e),d.uFlash.value=i,d.uFlashDir.value.copy(a),d.uBoatPos.value.copy(n.position),d.uBoatInv.value.copy(n.matrixWorld).invert(),d.uBowWave.value=o,f.set(1,0,0).applyQuaternion(n.quaternion),d.uBoatFwd.value.set(f.x,f.z).normalize(),r.slice(0,4).forEach((e,t)=>{e.getWorldPosition(d.uLampPos.value[t]);let n=e.isSpotLight?Yu:1;d.uLampColor.value[t].copy(e.color).multiplyScalar(e.intensity*n)})}function h(e,t,n){return nu(e,t,n)+l.heightAt(e-Jl[0]*n,t-Jl[1]*n,n)}return{mesh:o,update:m,heightAt:h,surfaceTextures:()=>({disp0:d.uDisp0.value,foam0:d.uFoam0.value,size0:Qu.cascades[0].size}),foamInfo:u.info,setSize:s.setSize}}var td=1.78,nd=-.15,rd=-.02,id=.6,ad={min:-1.3,max:2.4},od=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function sd(e){let t=.42;if(e<t)return td*(.78+.22*Math.sin(e/t*Math.PI/2));let n=(e-t)/(1-t);return Math.max(.015,td*(1-n**2.2))}function cd(e){if(e<.38)return 1.18+.22*(1-e/.38)**2;let t=(e-.38)/.62;return 1.18+1.05*t*t}function ld(e){return-1.25+.35*od(.18,0,e)+1*od(.72,1,e)**1.6}function ud(e){return .5+.12*od(.6,1,e)}function dd(e){return cd(e)-ud(e)}function fd(e){return .06+.5*od(.55,1,e)}function pd(e){return e<.5?2.6+e/.5*.6:3.2-1.9*od(.5,1,e)}function md(e){return[-5.05-.22*e,5.35+1*Math.max(e,0)**.85]}function hd(e,t){let[n,r]=md(t);return n+(r-n)*e}function gd(e,t){return(t-ld(e))/(cd(e)-ld(e))}function _d(e,t){let n=sd(e),r=ld(e),i=cd(e),a=pd(e),o,s;if(t<.6){let e=(1-t/id)*Math.PI/2;s=n*Math.max(Math.cos(e),0)**(2/a),o=rd-(rd-r)*Math.max(Math.sin(e),0)**(2/a)}else{let r=(t-id)/(1-id);o=rd+(i-rd)*r,s=n*(1+fd(e)*r)}return{x:hd(e,gd(e,o)),y:o,z:s}}function vd(e,t){let n=(t-rd)/(cd(e)-rd);return sd(e)*(1+fd(e)*n)}function yd(e,t){let n=.5;for(let r=0;r<6;r++){let r=Math.min(1,Math.max(0,n)),[i,a]=md(gd(r,t(r)));n=(e-i)/(a-i)}return n}function bd(e){return Math.min(1,Math.max(0,yd(e,dd)))}function xd(e){let t=bd(e),n=dd(t);return{u:t,y:n,rail:cd(t),halfWidth:vd(t,n),railHalfWidth:vd(t,cd(t))}}var Sd=`#7a231c`,Cd=`#2b120e`,wd=`#d9d6cc`;function Td(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function Ed(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Dd(t,{srgb:n=!0,repeat:r=!1}={}){let i=new ls(t);return n&&(i.colorSpace=D),r&&(i.wrapS=i.wrapT=e),i.anisotropy=8,i}function Od(e,t,n,r,i,a,o){for(let s=0;s<i;s++)e.fillStyle=a[Math.floor(t()*a.length)],e.beginPath(),e.ellipse(t()*n,t()*r,t()*o+1,t()*o*.6+1,t()*Math.PI,0,Math.PI*2),e.fill()}function kd(e,t,n,r,i,a){let o=e.createLinearGradient(0,n,0,n+i);o.addColorStop(0,`rgba(122,58,26,${a})`),o.addColorStop(.4,`rgba(96,44,20,${a*.6})`),o.addColorStop(1,`rgba(80,36,18,0)`),e.fillStyle=o,e.beginPath(),e.moveTo(t-r/2,n),e.lineTo(t+r/2,n),e.lineTo(t+r*.15,n+i),e.lineTo(t-r*.15,n+i),e.closePath(),e.fill()}function Ad(){let e=2048,[t,n]=Ed(e,1024),r=Td(11);for(let t of[0,1]){let i=t*512,a=e=>i+(1-(e-ad.min)/(ad.max-ad.min))*512;n.save(),n.beginPath(),n.rect(0,i,e,512),n.clip(),n.fillStyle=Sd,n.fillRect(0,i,e,512),n.fillStyle=Cd,n.fillRect(0,a(nd-.08),e,512),n.fillStyle=wd,n.fillRect(0,a(nd+.1),e,a(nd-.08)-a(nd+.1));let o=n.createLinearGradient(0,a(nd+.45),0,a(nd+.1));o.addColorStop(0,`rgba(40,46,28,0)`),o.addColorStop(1,`rgba(40,46,28,0.45)`),n.fillStyle=o,n.fillRect(0,a(nd+.45),e,a(nd+.1)-a(nd+.45)),n.strokeStyle=`rgba(0,0,0,0.22)`,n.lineWidth=2;for(let t=0;t<e;t+=176.55172413793105*.9)n.beginPath(),n.moveTo(t,i),n.lineTo(t,i+512),n.stroke();for(let t of[.42,-.55])n.beginPath(),n.moveTo(0,a(t)),n.lineTo(e,a(t)),n.stroke();Od(n,r,e,512*2,900,[`rgba(0,0,0,0.06)`,`rgba(255,240,220,0.035)`,`rgba(70,30,20,0.08)`],14);for(let t=.08;t<.78;t+=.055+r()*.02){let i=t*e,o=a(dd(t)+.14),s=a(dd(t)+.03);n.fillStyle=`#0a0605`,n.fillRect(i-12,o,24,s-o),kd(n,i,s,22,60+r()*90,.55)}for(let t=0;t<70;t++){let t=r();kd(n,t*e,a(cd(t)-r()*.3),4+r()*10,20+r()*110,.15+r()*.3)}t===0&&(n.save(),n.translate(.8*e,a(1.32)),n.scale(1.28,1),n.font=`bold 44px "Arial Narrow", Arial, sans-serif`,n.fillStyle=`rgba(232,228,216,0.92)`,n.textBaseline=`middle`,n.fillText(`M-127-HØ`,-100,0),n.restore()),n.restore()}return Dd(t)}function jd(){let e=1024,t=1024,[n,r]=Ed(e,t),i=Td(5),a=t/24;for(let t=0;t<24;t++){let n=-i()*300;for(;n<e;){let e=260+i()*360,o=30+i()*12;r.fillStyle=`hsl(28, ${22+i()*10}%, ${o*.55}%)`,r.fillRect(n,t*a,e,a),r.strokeStyle=`rgba(20,12,6,0.25)`,r.lineWidth=1;for(let o=0;o<4;o++){let o=t*a+i()*a;r.beginPath(),r.moveTo(n,o),r.bezierCurveTo(n+e*.3,o+3,n+e*.6,o-3,n+e,o),r.stroke()}r.fillStyle=`#120c08`,r.fillRect(n,t*a,3,a),n+=e}r.fillStyle=`#100a06`,r.fillRect(0,t*a,e,3)}return Od(r,i,e,t,260,[`rgba(0,0,0,0.12)`,`rgba(10,20,25,0.1)`],40),Dd(n,{repeat:!0})}function Md(){let[e,t]=Ed(512,512),n=Td(3);t.fillStyle=`#ffffff`,t.fillRect(0,0,512,512);for(let e=0;e<120;e++){let e=n()*512,r=40+n()*260,i=t.createLinearGradient(0,0,0,r);i.addColorStop(0,`rgba(90,80,60,${.08+n()*.12})`),i.addColorStop(1,`rgba(90,80,60,0)`),t.fillStyle=i,t.fillRect(e,0,2+n()*6,r)}for(let e=0;e<25;e++)kd(t,n()*512,n()*512*.6,3+n()*6,30+n()*120,.25);Od(t,n,512,512,300,[`rgba(0,0,0,0.04)`,`rgba(60,50,30,0.06)`],10);let r=t.createLinearGradient(0,512*.75,0,512);return r.addColorStop(0,`rgba(40,35,25,0)`),r.addColorStop(1,`rgba(40,35,25,0.35)`),t.fillStyle=r,t.fillRect(0,512*.75,512,512*.25),Dd(e)}function Nd(){let[e,t]=Ed(256,256),n=Td(9),r=t.createRadialGradient(256*.5,256*.75,10,256*.5,256*.6,256*.85);r.addColorStop(0,`#ffe2a8`),r.addColorStop(.45,`#f0a24e`),r.addColorStop(1,`#7a3814`),t.fillStyle=r,t.fillRect(0,0,256,256),t.fillStyle=`rgba(25,12,4,0.75)`,t.fillRect(0,256*.78,256,256*.22),t.fillStyle=`rgba(25,12,4,0.55)`,t.fillRect(256*.62,256*.42,256*.12,256*.4);for(let e=0;e<70;e++){let e=1+n()*4;t.fillStyle=n()>.5?`rgba(255,240,210,0.35)`:`rgba(40,20,8,0.3)`,t.beginPath(),t.arc(n()*256,n()*256,e,0,Math.PI*2),t.fill()}t.strokeStyle=`rgba(255,230,190,0.18)`,t.lineWidth=2;for(let e=0;e<12;e++){let e=n()*256;t.beginPath(),t.moveTo(e,n()*256*.4),t.lineTo(e+(n()-.5)*8,256),t.stroke()}return t.strokeStyle=`#111`,t.lineWidth=14,t.strokeRect(0,0,256,256),Dd(e)}function Pd(){let[e,t]=Ed(256,32);t.fillStyle=`#e8501c`,t.fillRect(0,0,256,32),t.fillStyle=`#e9e6dc`;for(let e=0;e<4;e++)t.fillRect(e*64+26,0,12,32);return Dd(e)}function Fd(){let[e,t]=Ed(256,256),n=Td(21);t.fillStyle=`#0e1d17`,t.fillRect(0,0,256,256),t.strokeStyle=`#2e5544`,t.lineWidth=2;for(let e=0;e<=256;e+=10)t.beginPath(),t.moveTo(e,0),t.lineTo(e+30,256),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(256,e+30),t.stroke();return Od(t,n,256,256,80,[`rgba(0,0,0,0.3)`],18),Dd(e,{repeat:!0})}function Id(){let[e,t]=Ed(256,256),n=Td(17);return t.fillStyle=`#b4b4b4`,t.fillRect(0,0,256,256),Od(t,n,256,256,500,[`rgba(255,255,255,0.12)`,`rgba(0,0,0,0.14)`],16),Dd(e,{srgb:!1,repeat:!0})}var Ld=(e,t)=>new H(e).multiplyScalar(t);function Rd(){let e=Id(),t=t=>new Ic({roughnessMap:e,envMapIntensity:.7,...t});return{hull:t({map:Ad(),roughness:.48,metalness:.15,side:2}),hullPlain:t({color:4855058,roughness:.5,metalness:.15}),deck:t({map:jd(),roughness:.55}),white:new Lc({color:13815490,map:Md(),roughness:.5,roughnessMap:e,clearcoat:.6,clearcoatRoughness:.25,envMapIntensity:.7}),steel:t({color:2764337,roughness:.45,metalness:.6}),rust:t({color:4860958,roughness:.85,metalness:.35}),machinery:t({color:2901561,roughness:.5,metalness:.3}),rubber:t({color:855309,roughness:.8}),rope:t({color:8220242,roughness:.95}),rigging:t({color:1973790,roughness:.6,metalness:.5}),brass:t({color:9202226,roughness:.3,metalness:.9}),ring:t({map:Pd(),roughness:.5}),net:t({map:Fd(),roughness:1}),float:t({color:14702623,roughness:.45}),crateBlue:t({color:2380940,roughness:.5}),crateRed:t({color:10105640,roughness:.5}),glassLit:new xn({map:Nd(),color:Ld(16777215,2.2)}),glassDim:new xn({map:Nd(),color:Ld(16777215,.7)}),glassDark:new Lc({color:263946,roughness:.05,clearcoat:1,envMapIntensity:1.2}),lampWhite:new xn({color:Ld(16774102,6)}),lampRed:new xn({color:Ld(16722458,5)}),lampGreen:new xn({color:Ld(1769318,4)}),flood:new xn({color:Ld(16771524,5)})}}var zd=new V;function Bd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;zd.copy(t),zd[r]=0,zd.normalize();let l=.5*o/(o+s),u=1-zd.angleTo(e)/c;return Math.sign(zd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Vd=class extends G{constructor(e=1,t=1,n=1,r=2,i=.1){if(r=r*2+1,i=Math.min(e/2,t/2,n/2,i),super(1,1,1,r,r,r),r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new V,s=new V,c=new V(e,t,n).divideScalar(2).subScalar(i),l=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=l.length/6,p=new V,m=.5/r;for(let r=0,a=0;r<l.length;r+=3,a+=2)switch(o.fromArray(l,r),s.copy(o),s.x-=Math.sign(s.x)*m,s.y-=Math.sign(s.y)*m,s.z-=Math.sign(s.z)*m,s.normalize(),l[r+0]=c.x*Math.sign(o.x)+s.x*i,l[r+1]=c.y*Math.sign(o.y)+s.y*i,l[r+2]=c.z*Math.sign(o.z)+s.z*i,u[r+0]=s.x,u[r+1]=s.y,u[r+2]=s.z,Math.floor(r/f)){case 0:p.set(1,0,0),d[a+0]=Bd(p,s,`z`,`y`,i,n),d[a+1]=1-Bd(p,s,`y`,`z`,i,t);break;case 1:p.set(-1,0,0),d[a+0]=1-Bd(p,s,`z`,`y`,i,n),d[a+1]=1-Bd(p,s,`y`,`z`,i,t);break;case 2:p.set(0,1,0),d[a+0]=1-Bd(p,s,`x`,`z`,i,e),d[a+1]=Bd(p,s,`z`,`x`,i,n);break;case 3:p.set(0,-1,0),d[a+0]=1-Bd(p,s,`x`,`z`,i,e),d[a+1]=1-Bd(p,s,`z`,`x`,i,n);break;case 4:p.set(0,0,1),d[a+0]=1-Bd(p,s,`x`,`y`,i,e),d[a+1]=1-Bd(p,s,`y`,`x`,i,t);break;case 5:p.set(0,0,-1),d[a+0]=Bd(p,s,`x`,`y`,i,e),d[a+1]=1-Bd(p,s,`y`,`x`,i,t);break}}};function Hd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Pn,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ud(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ud(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function Ud(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(s.isInterleavedBufferAttribute)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported.`),null;if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.array.length}let o=new t(a),s=0;for(let t=0;t<e.length;++t)o.set(e[t].array,s),s+=e[t].array.length;let c=new wn(o,n,r);return i!==void 0&&(c.gpuType=i),c}var Wd=new V(0,1,0);function X(e,t,n=0,r=0,i=0){let a=new W(e,t);return a.position.set(n,r,i),a}function Z(e,t,n,r,i,a,o,s){return X(new Vd(e,t,n,3,r),i,a,o,s)}function Q(e,t,n,r,i=6){let a=new V(...e),o=new V(...t).clone().sub(a),s=new W(new Y(n,n,o.length(),i,1),r);return s.position.copy(a).addScaledVector(o,.5),s.quaternion.setFromUnitVectors(Wd,o.normalize()),s}function Gd(e,t,n,r=5){return new W(Hd(e.map(([e,n])=>{let i=new V(...e),a=new V(...n).clone().sub(i),o=new Y(t,t,a.length(),r,1),s=new kt().compose(i.clone().addScaledVector(a,.5),new $e().setFromUnitVectors(Wd,a.normalize()),new V(1,1,1));return o.applyMatrix4(s)})),n)}function Kd(e,t,n,r,i=6,a=48){let o=X(new Nc(e,t,i,a),r,0,n,0);return o.rotation.x=Math.PI/2,o}function qd(e,t,n){let r=new J;for(let i=0;i<e.length-1;i++)r.add(Q(e[i],e[i+1],t,n));return r}function Jd(e,t,n,{closed:r=!1,segments:i=120,radial:a=8}={}){return new W(new Pc(new vs(e.map(e=>new V(...e)),r,`centripetal`),i,t,a,r),n)}function Yd(e,t,n,r,i,a,o=20){let s=X(new Y(e,e,t,o),n,r,i,a);return s.rotation.x=Math.PI/2,s}var Xd=80,Zd=14,Qd=8,$d=23;function ef(e){return e<=Zd?e/Zd*id:id+(e-Zd)/Qd*(1-id)}var tf=(e,t)=>{let n=(e-ad.min)/(ad.max-ad.min);return t>0?.5+.5*n:.5*n};function nf(){let e=[],t=[],n=[];[1,-1].forEach((r,i)=>{let a=i*81*$d;for(let n=0;n<=Xd;n++){let i=n/Xd;for(let n=0;n<$d;n++){let a=_d(i,ef(n));e.push(a.x,a.y,a.z*r),t.push(i,tf(a.y,r))}}for(let e=0;e<Xd;e++)for(let t=0;t<$d-1;t++){let i=a+e*$d+t,o=i+$d,s=i+1,c=o+1;r>0?n.push(i,o,s,o,c,s):n.push(i,s,o,o,s,c)}});let r=new Pn;return r.setAttribute(`position`,new U(e,3)),r.setAttribute(`uv`,new U(t,2)),r.setIndex(n),r.computeVertexNormals(),r}function rf(){let e=[];for(let t=$d-1;t>=0;t--)e.push(_d(0,ef(t)));let t=[...e.map(e=>({...e,z:-e.z})),...e.slice().reverse()],n=t.reduce((e,t)=>e+t.y,0)/t.length,r=[hd(0,gd(0,n)),n,0];t.forEach(e=>r.push(e.x,e.y,e.z));let i=[];for(let e=1;e<t.length;e++)i.push(0,e,e+1);i.push(0,t.length,1);let a=new Pn;return a.setAttribute(`position`,new U(r,3)),a.setIndex(i),a.computeVertexNormals(),a}function af(){let e=[],t=[],n=[];for(let n=0;n<=60;n++){let r=n/60*.985,i=dd(r),a=Math.max(.02,vd(r,i)-.06),o=hd(r,gd(r,i));for(let n=0;n<=10;n++){let r=n/10*2-1,s=r*a;e.push(o,i+.05*(1-r*r)*Math.min(1,a),s),t.push(o/4,s/3.36+.5)}}for(let e=0;e<60;e++)for(let t=0;t<10;t++){let r=e*11+t,i=r+10+1,a=r+1,o=i+1;n.push(r,a,i,i,a,o)}let r=new Pn;return r.setAttribute(`position`,new U(e,3)),r.setAttribute(`uv`,new U(t,2)),r.setIndex(n),r.computeVertexNormals(),r}function of(e,t,n=0,r=0){let i=cd(e)+n;return[hd(e,gd(e,i)),i,t*(vd(e,i)+r)]}function sf(e){let t=Array.from({length:41},(e,t)=>of(t/40,1,.02,-.02)),n=Array.from({length:41},(e,t)=>of(1-t/40,-1,.02,-.02));return Jd([...t,...n.slice(1,-1)],.055,e,{closed:!0,segments:260})}function cf(e){return[1,-1].map(t=>Jd(Array.from({length:31},(e,n)=>{let r=.02+n/30*.93,i=dd(r)-.1;return[hd(r,gd(r,i)),i,t*(vd(r,i)+.035)]}),.06,e,{segments:120,radial:6}))}function lf(e,t){for(let n of[-2.9,.55,4]){let r=xd(n),i=r.y-.32,a=vd(r.u,i)+.13,o=X(new Nc(.24,.09,10,24),t.rubber,n,i,a);o.rotation.y=.05,e.add(o),e.add(Q([n,i+.3,a],[n,r.rail+.04,r.railHalfWidth-.02],.014,t.rope))}}function uf(e){let t=new J;return t.add(new W(nf(),e.hull)),t.add(new W(rf(),e.hullPlain)),t.add(new W(af(),e.deck)),t.add(sf(e.white)),cf(e.steel).forEach(e=>t.add(e)),lf(t,e),t}var df={x0:-4.25,x1:-1.3,top:1.85,halfW:1.2},ff={rear:-3.55,front:-1.55,rake:.25,h:1.15,halfW:1.1,bevel:.04},pf=df.top+ff.h+.13,mf=Math.atan(ff.rake/ff.h),hf=.06,gf=df.top+.66,_f={z:[-.84,-.42,0,.42,.84],w:.36,h:.56},vf={x:[-3.15,-2.6,-2.05],w:.42,h:.5},yf={z:[-.5,.5],w:.5,h:.42,y:df.top+.7},bf=.012,xf={rear:ff.rear-ff.bevel,halfW:ff.halfW,bottom:df.top,top:df.top+ff.h+ff.bevel};function Sf(e){return ff.front+ff.rake*(e-df.top)/ff.h+ff.bevel/Math.cos(mf)}var $={floor:1.2,ceil:xf.top-hf,rear:xf.rear+hf,halfW:ff.halfW-hf};function Cf(e){return Sf(e)-hf/Math.cos(mf)}var wf=.6,Tf=.012;function Ef(e,t,n,r){let i=new Rs;return i.moveTo(e-n/2,t-r/2),i.lineTo(e+n/2,t-r/2),i.lineTo(e+n/2,t+r/2),i.lineTo(e-n/2,t+r/2),i.closePath(),i}function Df(e,t,n,r,i){let a=new Ws(e.map(([e,t])=>new R(e,t)));a.holes=t.map(([e,t,n,r])=>Ef(e,t,n,r));let o=new Ec(a,{depth:hf-Tf*2,bevelEnabled:!0,bevelThickness:Tf,bevelSize:Tf,bevelOffset:-.012,bevelSegments:2});return o.translate(0,0,Tf),o.applyMatrix4(new kt().makeBasis(...r).setPosition(i)),new W(o,n)}function Of(e){let t=new J,{rear:n,halfW:r,bottom:i,top:a}=xf,o=Sf(i),s=Sf(a),c=Math.cos(mf),l=Math.sin(mf),u=new V(1,0,0),d=new V(0,1,0);for(let c of[1,-1]){let l=-c,u=[[n,i],[o,i],[s,a],[n,a]].map(([e,t])=>[e*l,t]),f=vf.x.map(e=>[e*l,gf,vf.w-bf*2,vf.h-bf*2]),p=[new V(l,0,0),d,new V(0,0,-c)];t.add(Df(u,f,e,p,new V(0,0,c*r)))}let f=(a-i)/c,p=_f.z.map(e=>[e,(gf-i)/c,_f.w-bf*2,_f.h/c-bf*2]);t.add(Df([[-r,0],[r,0],[r,f],[-r,f]],p,e,[new V(0,0,1),new V(l,c,0),new V(-c,l,0)],new V(o,i,0)));let m=yf.z.map(e=>[-e,yf.y,yf.w-bf*2,yf.h-bf*2]);return t.add(Df([[-r,i],[r,i],[r,a],[-r,a]],m,e,[new V(0,0,-1),d,u],new V(n,0,0))),t}function kf(e){let t=e=>Object.assign(e.clone(),{transparent:!0,depthWrite:!0});return{lit:t(e.glassLit),dim:t(e.glassDim)}}function Af(e){let t=new J;t.position.set(Sf(gf)+.008,gf,0),t.rotation.z=-mf;for(let n of _f.z){let r=X(new wr(_f.w,_f.h/Math.cos(mf)),e.lit,0,0,n);r.rotation.y=Math.PI/2,t.add(r)}return t}function jf(e){let t=new J,n=xf.halfW+.008;for(let r of[1,-1])for(let i of vf.x){let a=X(new wr(vf.w,vf.h),e.lit,i,gf,r*n);r<0&&(a.rotation.y=Math.PI),t.add(a)}for(let n of yf.z){let r=X(new wr(yf.w,yf.h),e.dim,xf.rear-.008,yf.y,n);r.rotation.y=-Math.PI/2,t.add(r)}return t}function Mf(e,t,n,r,i,a){let o=new J;return o.add(X(new Vs(.115,24),t?e.glassLit:e.glassDark)),o.add(X(new Nc(.125,.022,8,24),e.brass)),o.position.set(n,r,i),o.rotation.y=a,o}function Nf(e){let t=new J,n=Z(df.x1-df.x0,df.top-wf,df.halfW*2,.06,e.white.clone(),(df.x0+df.x1)/2,(df.top+wf)/2,0);t.add(n);let r=df.halfW+.012;[[-3.3,!0],[-2.8,!1],[-1.65,!0]].forEach(([n,i])=>{t.add(Mf(e,i,n,1.38,r,0)),t.add(Mf(e,!i,n,1.38,-r,Math.PI))});for(let n of[-.6,.6])t.add(Mf(e,n>0,df.x1+.012,1.4,n,Math.PI/2));t.add(Z(.64,1.02,.05,.02,e.steel,-2.2,1.23,df.halfW+.02)),t.add(Mf(e,!0,-2.2,1.45,df.halfW+.05,0)),t.add(X(new G(.1,.03,.04),e.brass,-1.98,1.12,df.halfW+.06));for(let n of[1,-1]){let r=n*(df.halfW+.07);t.add(Q([df.x0+.15,1.62,r],[df.x1-.15,1.62,r],.018,e.steel));for(let n of[df.x0+.2,-2.6,df.x1-.2])t.add(Q([n,1.62,r],[n,1.62,r*.95],.012,e.steel))}let i=df.x0-.04;t.add(Q([i,.8,.3],[i,2.2,.3],.018,e.steel)),t.add(Q([i,.8,.65],[i,2.2,.65],.018,e.steel));for(let n=1;n<2;n+=.25)t.add(Q([i,n,.3],[i,n,.65],.012,e.steel));let a=X(new Nc(.26,.055,12,32),e.ring,-3.86,1.24,df.halfW+.07);return t.add(a),{group:t,body:n}}function Pf(e){let t=new J,n=ff.rear-.15,r=ff.front+ff.rake+.2;t.add(Z(r-n,.09,ff.halfW*2+.2,.03,e.white,(n+r)/2,pf-.045,0));let i=X(new G(.34,.025,ff.halfW*2+.1),e.white,r+.12,pf-.12,0);i.rotation.z=-.35,t.add(i);let a=n+.08,o=r-.1,s=ff.halfW,c=pf+.38;t.add(qd([[a,c,-s],[o,c,-s],[o,c,s],[a,c,s],[a,c,-s]],.016,e.steel));for(let n of[a,(a+o)/2,o])for(let r of[-s,s])t.add(Q([n,pf,r],[n,c,r],.014,e.steel));return t}function Ff(e){let t=new J;t.add(Q([-3,pf,0],[-3,pf+.6,0],.06,e.white,12)),t.add(Z(.28,.18,.26,.03,e.white,-3,pf+.68,0));let n=new J;n.position.set(-3,pf+.8,0),n.add(Z(1.7,.1,.15,.04,e.white,0,0,0)),n.add(X(new G(1.6,.04,.02),e.steel,0,0,.075)),t.add(n),t.add(Q([-3.4,pf,-.72],[-3.4,pf+.28,-.72],.05,e.steel)),t.add(X(new Mc(.2,20,14),e.white,-3.4,pf+.44,-.72)),t.add(Q([-3.5,pf,.95],[-3.72,pf+2.4,1],.014,e.rigging)),t.add(Q([-3.5,pf,-.95],[-3.8,pf+1.9,-1],.012,e.rigging));let r=Yd(.1,.24,e.steel,-1.5,pf+.18,.78);r.rotation.set(0,0,Math.PI/2),t.add(r),t.add(Q([-1.5,pf,.78],[-1.5,pf+.1,.78],.03,e.steel));let i=X(new Vs(.085,18),e.glassDim,-1.375,pf+.18,.78);return i.rotation.y=Math.PI/2,t.add(i),{group:t,scanner:n}}function If(e){let t=new J;for(let[n,r]of[[1,e.lampGreen],[-1,e.lampRed]]){let i=n*(ff.halfW+.12);t.add(Z(.26,.18,.05,.01,e.steel,-1.85,df.top+1,i+n*.06)),t.add(Z(.16,.12,.09,.02,e.steel,-1.78,df.top+1,i)),t.add(X(new G(.06,.08,.08),r,-1.69,df.top+1,i))}return t}function Lf(e){let t=new J,n=new J;n.position.set(-3.95,df.top,-.6),n.rotation.z=.08,n.add(X(new Y(.17,.22,1.35,24),e.hullPlain,0,.675,0)),n.add(X(new Y(.175,.178,.2,24),e.rubber,0,1.28,0)),t.add(n);let r=Yd(.21,.75,e.white,-3.95,df.top+.27,.62,20);r.rotation.set(0,0,Math.PI/2),t.add(r);for(let n of[-4.2,-3.7])t.add(Q([n,df.top,.62],[n,df.top+.1,.62],.03,e.steel));return t}function Rf(e){let t=new J,n=Nf(e),r=kf(e);t.add(n.group),t.add(Of(e.white)),t.add(Af(r)),t.add(jf(r)),t.add(Pf(e));let i=Ff(e);t.add(i.group),t.add(If(e)),t.add(Lf(e));let a=new hl(16753756,18,38,2);return a.position.set(-1.15,2.35,0),t.add(a),{group:t,cabinLight:a,radar:i.scanner,glass:r,lowerBody:n.body}}var zf=1.5,Bf=6.3,Vf=4.9,Hf=.85;function Uf(e,t){let n=new J,r=Bf-t;return n.add(X(new Y(.06,.1,r,16),e.white,zf,t+r/2,0)),n.add(Q([zf,Vf,-.85],[zf,Vf,Hf],.035,e.white)),n.add(Z(.4,.04,.4,.01,e.steel,zf,Vf-.06,0)),n.add(Q([zf,Bf,0],[zf-.05,7,0],.012,e.rigging)),n}function Wf(e){let t=new J,n=1.61;t.add(Z(.14,.18,.14,.02,e.steel,n,6,0)),t.add(X(new G(.03,.1,.08),e.lampWhite,1.6800000000000002,6,0)),t.add(X(new Y(.055,.055,.12,12),e.lampGreen,n,5.55,0)),t.add(X(new Y(.055,.055,.12,12),e.lampWhite,n,5.15,0));let r=new hl(16773320,4,16,2);return r.position.set(1.7100000000000002,6,0),t.add(r),{group:t,lampLight:r}}function Gf(e){let t=new J;for(let n of[-.45,.45]){let r=new J;r.position.set(zf-.12,Vf-.18,n),r.rotation.z=-.9,r.add(Z(.2,.14,.24,.02,e.steel,0,0,0));let i=X(new wr(.2,.17),e.flood,0,-.072,0);i.rotation.x=Math.PI/2,r.add(i),t.add(r)}let n=new ul(16769720,16,16,.85,.75,2);return n.position.set(zf-.2,Vf-.25,0),n.target.position.set(-.4,.7,.2),t.add(n,n.target),{group:t,spot:n}}function Kf(e,t){let n=new J,r=[-.45,3.35,.25];return n.add(Q([zf-.05,t+1,0],r,.05,e.steel,10)),n.add(Q(r,[zf,Vf-.1,0],.01,e.rigging)),n.add(Q(r,[r[0],2.45,r[2]],.01,e.rigging)),n.add(Yd(.07,.04,e.steel,r[0],2.4,r[2])),n.add(X(new Nc(.05,.012,6,12,Math.PI*1.4),e.steel,r[0],2.3,r[2])),n}function qf(e){let t=new J,n=cd(1)+.03;t.add(Q([zf,Bf-.05,0],[hd(1,gd(1,n))-.05,n,0],.012,e.rigging)),t.add(Q([zf,Bf-.05,0],[-1.35,3.12,0],.012,e.rigging));let r=xd(zf-.25);for(let n of[1,-1])t.add(Q([zf,Vf,n*Hf],[zf-.25,r.rail,n*(r.railHalfWidth-.04)],.01,e.rigging)),t.add(Q([zf,Bf-.3,0],[zf,Vf,n*Hf],.01,e.rigging));return t}function Jf(e){let t=new J,n=xd(zf).y-.05;t.add(Uf(e,n));let r=Wf(e),i=Gf(e);return t.add(r.group,i.group,Kf(e,n),qf(e)),{group:t,lampLight:r.lampLight,floodLight:i.spot}}var Yf=[2.7,-.75],Xf=-.15;function Zf(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function Qf(e,t,n){let r=new J,i=xd(t-.42),a=xd(t),o=xd(t+.42),s=[[t-.42,i.y,n*(i.halfWidth-.12)],[t-.4,i.y+1,n*(i.railHalfWidth+.04)],[t,a.y+1.55,n*(a.railHalfWidth+.32)],[t+.4,o.y+1,n*(o.railHalfWidth+.04)],[t+.42,o.y,n*(o.halfWidth-.12)]];r.add(Jd(s,.065,e.rust,{segments:40}));let c=[t,a.y+1.33,n*(a.railHalfWidth+.3)],l=X(new Y(.13,.13,.07,16),e.steel,...c);return l.rotation.z=Math.PI/2,r.add(l,Q([t,a.y+1.5,c[2]],c,.025,e.steel)),{group:r,block:c}}function $f(e,t,n){let r=new J,i=xd(t),a=i.y-.1,o=vd(i.u,a)+.16,s=new Ws,c=.62,l=.36,u=.12;s.moveTo(-.5,-.36),s.lineTo(c-u,-.36),s.quadraticCurveTo(c,-.36,c,-.24),s.lineTo(c,l-u),s.quadraticCurveTo(c,l,c-u,l),s.lineTo(-.5,l),s.quadraticCurveTo(-.62,l,-.62,l-u),s.lineTo(-.62,-.24),s.quadraticCurveTo(-.62,-.36,-.5,-.36);let d=new Ec(s,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2});r.add(X(d,e.rust,0,0,-.03)),r.add(X(new G(c*2.05,.07,.12),e.steel,0,-.38,.02));for(let t of[-.25,.25])r.add(X(new G(.06,.4,.08),e.steel,t,.05,.07));r.position.set(t,a,o),r.rotation.x=.12;let f=new J;for(let r of[-.3,.3])f.add(Q(n,[t+r,a+l,o+.05],.014,e.steel));return[r,f]}function ep(e,t){let n=new J,r=xd(Xf).y;n.add(Z(.9,.22,1.9,.03,e.machinery,Xf,r+.11,0)),n.add(Z(.5,.5,.32,.04,e.machinery,Xf,r+.45,0));for(let t of[1,-1]){let i=t*.45;n.add(Yd(.24,.42,e.rigging,Xf,r+.52,i)),n.add(Yd(.34,.04,e.machinery,Xf,r+.52,i+.23)),n.add(Yd(.34,.04,e.machinery,Xf,r+.52,i-.23)),n.add(Z(.5,.42,.06,.02,e.machinery,Xf,r+.36,t*.75));let a=X(new Y(.1,.14,.24,16),e.steel,Xf,r+.52,t*.92);a.rotation.x=t*Math.PI/2,n.add(a)}for(let i of t)n.add(Q([Xf,r+.75,.45],i,.012,e.rigging));return n}function tp(e){let t=new J,n=.75,r=xd(n).y;t.add(Z(1.1,.36,1.1,.04,e.machinery,n,r+.16,0)),t.add(Z(1.2,.06,1.2,.02,e.steel,n,r+.36,0));for(let[i,a]of[[.6,0],[-.6,0],[0,.6],[0,-.6]])t.add(X(new G(a?.16:.05,.1,a?.05:.16),e.steel,n+i,r+.3,a));return t}function np(e){let t=new J,n=Zf(42),r=2.35,i=-.8,a=xd(r).y,o=new kc(.6,3),s=o.attributes.position;for(let e=0;e<s.count;e++){let t=.82+n()*.3;s.setXYZ(e,s.getX(e)*1.45*t,Math.max(s.getY(e),-.15)*.38*t,s.getZ(e)*.8*t)}o.computeVertexNormals(),t.add(X(o,e.net,r,a+.06,i));for(let o=0;o<7;o++){let o=n()*Math.PI*2,s=.2+n()*.5;t.add(X(new Mc(.07,12,8),e.float,r+Math.cos(o)*s*1.3,a+.16+n()*.06,i+Math.sin(o)*s*.6))}return t}function rp(e){let t=new J,n=Zf(7),r=2.05,i=xd(r).y,a=[[0,0,.6,e.crateBlue],[.05,1,.62,e.crateBlue],[.65,0,.55,e.crateRed]];for(let[e,o,s,c]of a){let a=Z(.6,.24,.4,.02,c,r+e,i+.12+o*.25,s);a.rotation.y=(n()-.5)*.3,t.add(a)}return t}function ip(e){let t=new J,n=4.35,r=xd(n).y;t.add(Z(.5,.18,.9,.03,e.machinery,n,r+.09,0)),t.add(Yd(.12,.7,e.machinery,n,r+.32,0));for(let i of[1,-1])t.add(Yd(.2,.08,e.steel,n,r+.32,i*.28));for(let n of[1,-1])t.add(Q([4.3999999999999995,r+.22,n*.28],[5,xd(5).y+.02,n*.3],.025,e.steel));return t}function ap(e,t,n){let r=new J,i=xd(t).y;r.add(Z(.4,.04,.18,.01,e.steel,t,i+.02,n));for(let a of[-.11,.11])r.add(X(new Y(.065,.065,.26,14),e.steel,t+a,i+.15,n)),r.add(X(new Y(.085,.085,.03,14),e.steel,t+a,i+.29,n));return r}function op(e,t,n){let r=new J,i=xd(t).y;for(let a=0;a<3;a++){let o=X(new Nc(.22-a*.02,.04,8,24),e.rope,t,i+.05+a*.06,n);o.rotation.x=Math.PI/2,r.add(o)}return r}function sp(e){let t=new J,n=[];for(let r of Yf)for(let i of[1,-1]){let a=Qf(e,r,i);t.add(a.group),i>0&&(n.push(a.block),t.add(...$f(e,r,a.block)))}t.add(ep(e,n),tp(e),np(e),rp(e),ip(e));for(let[n,r]of[[-4.65,1],[.3,1.3],[4.9,.32]])t.add(ap(e,n,r),ap(e,n,-r));return t.add(op(e,-4.6,0)),t}var cp=-5,lp=4.78,up=-5.24,dp={hoist:1.7,fly:.765,top:4.6};function fp(e){let t=new Float64Array(e*3);for(let n=0;n<e;n++)t.set([cp,dp.top-dp.hoist*n/(e-1),0],n*3);return t}function pp(e){let t=new J,n=xd(cp),r=lp-n.y;t.add(X(new Y(.026,.042,r,12),e.white,cp,n.y+r/2,0)),t.add(X(new Mc(.05,12,10),e.brass,cp,4.8100000000000005,0)),t.add(X(new Y(.07,.09,.08,12),e.steel,cp,n.y+.04,0));let i=n.rail-.03;t.add(Q([cp,i,0],[up,i,0],.02,e.steel));for(let[n,r]of[[i,.045],[dp.top+.02,.038],[dp.top-dp.hoist-.02,.038]]){let i=X(new Nc(r,.011,6,16),e.steel,cp,n,0);i.rotation.x=Math.PI/2,t.add(i)}return t}var mp=160,hp=64,gp={xMin:-5.4,xMax:6.5,yMin:-1.3,yMax:2.4},_p=.3;function vp(e,t){let n=ld(e);if(t<=n)return 0;if(t>=-.02)return vd(e,Math.min(t,cd(e)));let r=pd(e),i=((rd-t)/(rd-n))**(r/2),a=Math.sqrt(Math.max(0,1-i*i));return sd(e)*a**(2/r)}function yp(){let{xMin:e,xMax:t,yMin:n,yMax:i}=gp,a=new Float32Array(mp*hp*4);for(let r=0;r<hp;r++){let o=n+(r+.5)/hp*(i-n);for(let n=0;n<mp;n++){let i=yd(e+(n+.5)/mp*(t-e),()=>o),s=(r*mp+n)*4;i<0||i>1||(a[s]=vp(i,o),a[s+1]=dd(i)+_p)}}let o=new Go(a,mp,hp,m,d);return o.minFilter=o.magFilter=r,o.needsUpdate=!0,o}var bp=2.4,xp=18;function Sp(e){let t=cd(0)+.1;return X(new Mc(.05,10,8),e.lampWhite,hd(0,gd(0,t))-.03,t,0)}function Cp(e){let t=new J,n=Rd(),r=Rf(n),i=Jf(n);t.add(uf(n),r.group,i.group,sp(n),pp(n),Sp(n)),e.add(t);let{cabinLight:a}=r,o=[a,i.lampLight,i.floodLight];function s(e){r.radar.rotation.y=e*bp,a.intensity=xp*(.85+.1*Math.sin(e*9.3)+.05*Math.sin(e*23.7))}return{boat:t,lamps:o,wheelhouse:r,update:s,hullClip:{texture:yp(),range:gp}}}var wp=`
  uniform float uScale;
  uniform float uMaxPx;
  uniform float uFogDensity;
  varying float vAlpha;
  void projectSprite(vec3 world, float size, float alpha) {
    vec4 mv = viewMatrix * vec4(world, 1.0);
    float depth = max(-mv.z, 0.1);
    float px = size * uScale / depth;
    gl_PointSize = min(px, uMaxPx);
    // 被截斷的大顆水霧把透明度按面積補回,避免靠近鏡頭時一大片白
    float fogT = uFogDensity * depth;
    vAlpha = alpha * min(1.0, uMaxPx * uMaxPx / max(px * px, 1.0) * 4.0) * exp(-fogT * fogT);
    gl_Position = projectionMatrix * mv;
  }
  void hideSprite() {
    gl_PointSize = 0.0;
    vAlpha = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`,Tp=`
  attribute float aSize;
  attribute float aAlpha;
  ${wp}
  void main() {
    projectSprite(position, aSize, aAlpha);
  }
`,Ep=`
  uniform vec3 uColor;
  uniform float uFlash;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vAlpha;
    if (a < 0.002) discard;
    gl_FragColor = vec4(uColor * (1.0 + uFlash * 4.0), a);
  }
`;function Dp(e,{color:t,fogDensity:n,uniforms:r={}}){return new sr({uniforms:{uScale:{value:600},uMaxPx:{value:96},uFogDensity:{value:n},uColor:{value:t.clone()},uFlash:{value:0},...r},vertexShader:e,fragmentShader:Ep,transparent:!0,depthWrite:!1,blending:2})}function Op(e,t,n){e.uniforms.uScale.value=t/(2*Math.tan(Oe.degToRad(n)/2)),e.uniforms.uMaxPx.value=t*.07}function kp(e,t,n){let r=new ss(t,n);return r.frustumCulled=!1,r.layers.set(1),e.add(r),r}function Ap(e,t,{color:n,fogDensity:r}){let i=new Float32Array(t*3).fill(-999),a=new Float32Array(t),o=new Float32Array(t),s=new Pn;s.setAttribute(`position`,new wn(i,3)),s.setAttribute(`aSize`,new wn(a,1)),s.setAttribute(`aAlpha`,new wn(o,1));let c=Dp(Tp,{color:n,fogDensity:r});kp(e,s,c);function l(e){c.uniforms.uFlash.value=e,s.attributes.position.needsUpdate=!0,s.attributes.aSize.needsUpdate=!0,s.attributes.aAlpha.needsUpdate=!0}return{pos:i,size:a,alpha:o,commit:l,setSize:(e,t)=>Op(c,e,t)}}var jp=4e3,Mp=9.8,Np=-12,Pp=1.6,Fp=.45,Ip=(e,t)=>e+Math.random()*(t-e);function Lp(e,{fogDensity:t}){let{pos:n,size:r,alpha:i,commit:a,setSize:o}=Ap(e,jp,{color:new H(10465472).multiplyScalar(.55),fogDensity:t}),s=new Float32Array(jp*3),c=new Float32Array(jp),l=new Float32Array(jp).fill(1),u=new Float32Array(jp),d=new Uint8Array(jp),f=0,p=0,m=-10,h=new V,g=new V,_=new V,v=new V;function y(e,t,i,a){let o=f;f=(f+1)%jp,e.localToWorld(h.copy(t)),g.copy(i).applyQuaternion(e.quaternion),n.set([h.x,h.y,h.z],o*3),s.set([g.x,g.y,g.z],o*3),l[o]=c[o]=a.life,u[o]=a.alpha,r[o]=a.size,d[o]=+!!a.mist}function b(e,t,n,r,i){let a=Ip(3.9,5.5),o=sd(Math.min(1,Math.max(0,yd(a,()=>nd)))),s=_.set(a,r+Ip(-.05,.25),t*(o+.08)),c=Ip(1.2,3)+n*Ip(1.5,5),l=Ip(1.2,2.8)+n*Ip(.8,3.5);v.set(Ip(-.5,1.5),i?c*.5:c,t*(i?l*.6:l)),y(e,s,v,i?{life:Ip(1.2,2.2),alpha:Ip(.03,.07),size:Ip(1,2.4),mist:!0}:{life:Ip(.6,1.3),alpha:Ip(.5,.95),size:Ip(.03,.1),mist:!1})}function x(e,t,n,r){let i=Math.min(1.6,Math.max(0,r.bowImmersion+.35)),a=Math.min(4,Math.max(0,r.bowRate)),o=nd+Math.min(1.2,Math.max(-.3,r.bowImmersion))*.8;for(p+=(30+230*i+340*a)*e;p>=1;p--)for(let e of[1,-1])b(n,e,i*.4+a*.3,o,Math.random()<.1);if(a>Pp&&t-m>Fp){m=t;let e=.8+a*.45;for(let t=0;t<340*e;t++)b(n,t%2?1:-1,e,o,t%5==0)}}function S(e){for(let t=0;t<jp;t++){if(c[t]<=0){i[t]=0;continue}c[t]-=e;let r=t*3,a=d[t]===1,o=Math.exp(-e*(a?1.6:.35));s[r]+=(Np-s[r])*e*(a?1.2:.22),s[r+1]=s[r+1]*o-Mp*(a?.12:1)*e,s[r+2]*=o,n[r]+=s[r]*e,n[r+1]+=s[r+1]*e,n[r+2]+=s[r+2]*e;let f=Math.max(0,c[t]/l[t]),p=Math.min(1,(l[t]-c[t])*10);i[t]=c[t]>0&&n[r+1]>-3?u[t]*p*f**.7:0}}function C(e,t,n,r,i){x(e,t,n,r),S(e),a(i)}return{update:C,setSize:o}}var Rp=16,zp=3,Bp=1200,Vp=20,Hp=[14,150],Up=[8,4],Wp=Math.hypot(Kl[0],Kl[1]),Gp=[Kl[0]/Wp*Vp+Jl[0],Kl[1]/Wp*Vp+Jl[1]],Kp=`
  #define CLUSTER ${Rp}.0
  #define MIST_SLOTS ${zp}.0
  attribute float aId;
  uniform float uTime;
  uniform vec3 uCamPos;
  uniform float uHeading;
  uniform float uHalfFov;
  uniform vec2 uRange;
  uniform vec3 uBoatPos;
  uniform vec2 uBoatClear;
  uniform sampler2D uFoam0;
  uniform sampler2D uDisp0;
  uniform float uSize0;
  uniform vec2 uDriftVel;
  uniform vec2 uAirVel;
  ${wp}
  ${zl}
  ${Ql()}

  float rnd(float a, float b) { return hash12(vec2(a * 0.618 + 3.1, b * 1.37 + 7.7)); }

  void main() {
    float cluster = floor(aId / CLUSTER);
    float slot = aId - cluster * CLUSTER;
    bool isMist = slot < MIST_SLOTS;

    // 這撮的週期與目前是第幾輪
    float period = mix(1.8, 3.0, rnd(cluster, 1.0));
    float offset = rnd(cluster, 2.0) * period;
    float cyc = floor((uTime + offset) / period);
    float tSpawn = cyc * period - offset;
    float age = uTime - tSpawn;
    float life = isMist ? mix(1.4, 2.8, rnd(aId, cyc + 3.0)) : mix(0.5, 1.1, rnd(aId, cyc + 3.0));
    life = min(life, period);
    if (age > life) { hideSprite(); return; }

    // 發射點:鏡頭水平視野內等面積隨機
    float ang = uHeading + (rnd(cluster, cyc + 11.0) * 2.0 - 1.0) * uHalfFov;
    float dist = sqrt(mix(uRange.x * uRange.x, uRange.y * uRange.y, rnd(cluster, cyc + 12.0)));
    vec2 W = uCamPos.xz + vec2(cos(ang), sin(ang)) * dist;
    vec2 q = abs(W - uBoatPos.xz);
    if (q.x < uBoatClear.x && q.y < uBoatClear.y) { hideSprite(); return; }

    // 那團水上有沒有破浪白水(白沫跟著水走,所以用發射當下的波空間座標)
    vec2 p = W - uDriftVel * tSpawn;
    float gate = smoothstep(0.5, 0.9, textureLod(uFoam0, p / uSize0, 0.0).r);
    if (gate <= 0.0) { hideSprite(); return; }

    vec3 n; float jac;
    vec3 base = vec3(W.x, 0.0, W.y) + gerstner(p, tSpawn, n, jac) + textureLod(uDisp0, p / uSize0, 0.0).xyz;
    base.xz += vec2(rnd(aId, cyc + 4.0), rnd(aId, cyc + 5.0)) * 2.0 - 1.0;
    base.y += rnd(aId, cyc + 6.0) * 0.4;

    // 解析軌跡:水平 v → 空氣速度(速率 k),垂直 dv/dt = -c·v - g
    float blow = mix(0.2, 0.5, rnd(aId, cyc + 7.0)) * (isMist ? 1.2 : 1.0);
    vec2 v0 = uAirVel * blow;
    float vy0 = mix(0.8, 2.6, rnd(aId, cyc + 8.0)) * (isMist ? 0.6 : 1.0);
    float k = isMist ? 1.4 : 0.6;
    float c = isMist ? 1.6 : 0.3;
    float g = 9.8 * (isMist ? 0.1 : 1.0);
    vec2 xz = base.xz + uAirVel * age + (v0 - uAirVel) * (1.0 - exp(-k * age)) / k;
    float y = base.y + (vy0 + g / c) * (1.0 - exp(-c * age)) / c - g / c * age;
    if (y < base.y - 1.2) { hideSprite(); return; }

    float baseAlpha = isMist ? mix(0.05, 0.1, rnd(aId, cyc + 9.0)) : mix(0.5, 0.9, rnd(aId, cyc + 9.0));
    float size = isMist ? mix(1.2, 3.0, rnd(aId, cyc + 10.0)) : mix(0.06, 0.14, rnd(aId, cyc + 10.0));
    float fadeIn = min(1.0, age * 6.0);
    float alpha = baseAlpha * gate * fadeIn * pow(max(0.0, 1.0 - age / life), 0.7);
    projectSprite(vec3(xz.x, y, xz.y), size, alpha);
  }
`;function qp(e,{fogDensity:t,surfaceTextures:n}){let r=Bp*Rp,i=new Pn;i.setAttribute(`position`,new wn(new Float32Array(r*3),3)),i.setAttribute(`aId`,new wn(Float32Array.from({length:r},(e,t)=>t),1));let a=Dp(Kp,{color:new H(10465472).multiplyScalar(.45),fogDensity:t,uniforms:{uTime:{value:0},uCamPos:{value:new V},uHeading:{value:0},uHalfFov:{value:1},uRange:{value:new R(...Hp)},uBoatPos:{value:new V},uBoatClear:{value:new R(...Up)},uFoam0:{value:null},uDisp0:{value:null},uSize0:{value:1},uDriftVel:{value:new R(...Jl)},uAirVel:{value:new R(...Gp)}}});kp(e,i,a);let o=a.uniforms,s=new V;function c(e,t,r,i){let{disp0:a,foam0:c,size0:l}=n();o.uFoam0.value=c,o.uDisp0.value=a,o.uSize0.value=l,o.uTime.value=e,o.uFlash.value=i,o.uCamPos.value.copy(t.position),t.getWorldDirection(s),o.uHeading.value=Math.atan2(s.z,s.x),o.uHalfFov.value=Math.atan(Math.tan(Oe.degToRad(t.fov)/2)*t.aspect)+.1,o.uBoatPos.value.copy(r.position)}return{update:c,setSize:(e,t)=>Op(a,e,t)}}var Jp=.55;function Yp(e,t=Jp){return e.onBeforeCompile=e=>{e.uniforms.uFogScale={value:t},e.fragmentShader=e.fragmentShader.replace(`#include <fog_pars_fragment>`,`#include <fog_pars_fragment>
uniform float uFogScale;`).replace(`#include <fog_fragment>`,`
        #ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogD = fogDensity * uFogScale * vFogDepth;
            float fogFactor = 1.0 - exp(-fogD * fogD);
          #else
            float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
          #endif
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
        #endif`)},e.customProgramCacheKey=()=>`fogscale-${t}`,e}var Xp=(e,t)=>new H(e).multiplyScalar(t);function Zp(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Qp(){let e=1024,[t,n]=Zp(512,e);n.fillStyle=`#d8d4c8`,n.fillRect(0,0,512,e),n.fillStyle=`#9a2620`,n.fillRect(0,e*.14,512,e*.16),n.fillRect(0,e*.88,512,e*.12);for(let t=0;t<160;t++){let t=Math.random()*512,r=60+Math.random()*400,i=n.createLinearGradient(0,0,0,r);i.addColorStop(0,`rgba(70,60,45,${.06+Math.random()*.12})`),i.addColorStop(1,`rgba(70,60,45,0)`),n.fillStyle=i,n.fillRect(t,Math.random()*e*.5,2+Math.random()*5,r)}for(let[t,r,i]of[[.03,.3,!1],[.53,.45,!1],[.03,.58,!0],[.53,.72,!1]]){let a=t*512,o=(1-r)*e;n.fillStyle=`#b9b4a8`,n.fillRect(a-13,o-26,26,52),n.fillStyle=i?`#e8a656`:`#0c0e11`,n.fillRect(a-9,o-21,18,42)}let r=new ls(t);return r.colorSpace=D,r.anisotropy=8,r}function $p(){let[e,t]=Zp(256,256),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`#ffffff`),n.addColorStop(.25,`#fff2d0`),n.addColorStop(1,`#a86a2a`),t.fillStyle=n,t.fillRect(0,0,256,256),t.strokeStyle=`rgba(80,40,10,0.55)`;for(let e=14;e<256/2;e+=11)t.lineWidth=2,t.beginPath(),t.arc(256/2,256/2,e,0,Math.PI*2),t.stroke();t.strokeStyle=`#2a1d12`,t.lineWidth=10,t.strokeRect(0,0,256,256);let r=new ls(e);return r.colorSpace=D,r}function em(){let e=e=>Yp(new Ic(e));return{rock:e({vertexColors:!0,roughness:.62,metalness:0,flatShading:!0}),boulder:e({color:2763822,roughness:.45,flatShading:!0}),concrete:e({color:9276293,roughness:.85}),tower:e({map:Qp(),roughness:.55}),whitePaint:e({color:13815490,roughness:.5}),redPaint:e({color:9052957,roughness:.45,metalness:.1}),iron:e({color:1776927,roughness:.45,metalness:.7}),copper:e({color:2968128,roughness:.4,metalness:.65}),brass:e({color:10123834,roughness:.3,metalness:.9}),roofTile:e({color:3808280,roughness:.7}),glass:Yp(new Lc({color:14674158,roughness:.05,metalness:0,transparent:!0,opacity:.18,side:2,depthWrite:!1,envMapIntensity:1.5})),lens:Yp(new Ic({color:6969920,emissive:16767392,emissiveIntensity:1.6,roughness:.1,metalness:.2,transparent:!0,opacity:.9,flatShading:!0})),bullseye:new xn({map:$p(),color:Xp(16777215,3),side:2}),lampCore:new xn({color:Xp(16773584,18),fog:!1}),windowLit:new xn({color:Xp(16756832,1.6)}),doorLamp:new xn({color:Xp(16760944,5),fog:!1})}}function tm(e,t){let n=Math.imul(e,374761393)+Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function nm(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=tm(n,r),l=tm(n+1,r),u=tm(n,r+1),d=tm(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function rm(e,t,n=4){let r=0,i=.5,a=0;for(let o=0;o<n;o++)r+=i*(nm(e,t)*2-1),a+=i,e=e*2.03+17.1,t=t*2.03+9.7,i*=.5;return r/a}var im=240,am=170,om=-170,sm=-120,cm=1.2;function lm(e){let t=5*rm(e*.025,3.1)+2*rm(e*.09,7.7);return e<=0?8+t:8+t-.03*e*e}function um(e,t){let n=lm(e)-t;if(n<0)return Math.max(-14,-3+n*.6);let r=Math.min(1,n/5)**.55,i=Math.max(0,e-6)*.28,a=10+2*rm(e*.02,t*.02)+Math.max(0,-e)*.03+Math.max(0,-t)*.02-i,o=3*rm(e*.15,t*.15)*r*(1-r)*4,s=-3+(a+3)*r+o,c=Math.hypot(e,t);if(c<13){let e=Math.min(1,(13-c)/4)*Math.min(1,n/1.5);s+=(10-s)*e}return s}function dm(e){let t=new wr(im,am,Math.round(im/cm),Math.round(am/cm));t.rotateX(-Math.PI/2),t.translate(-50,0,-35);let n=t.attributes.position;for(let e=0;e<n.count;e++){let t=n.getX(e),r=n.getZ(e),i=um(t,r),a=Math.abs(um(t,r+1)-i),o=Math.min(1,a/4)*1.4;n.setXYZ(e,t+rm(t*.2,r*.2+5)*o,i,r+rm(t*.2+9,r*.2)*o)}t.computeVertexNormals();let r=t.attributes.normal,i=new Float32Array(n.count*3),a=new H(2304540),o=new H(4539978),s=new H(1513498),c=new H;for(let e=0;e<n.count;e++){let t=Oe.smoothstep(r.getY(e),.72,.9);c.copy(o).lerp(a,t),c.lerp(s,Oe.smoothstep(n.getY(e),3,-1)*.8),c.multiplyScalar(.85+.3*(rm(n.getX(e)*.3,n.getZ(e)*.3)*.5+.5)),i.set([c.r,c.g,c.b],e*3)}return t.setAttribute(`color`,new wn(i,3)),new W(t,e)}function fm(e){let t=new J;for(let n=0;n<14;n++){let r=-60+n*6.5+rm(n,1)*4;if(r>14)break;let i=lm(r)+1.5+Math.abs(rm(n,4))*5,a=new kc(1.2+Math.abs(rm(n,8))*2.5,1),o=a.attributes.position;for(let e=0;e<o.count;e++){let t=.75+.45*(rm(o.getX(e)+n*3,o.getZ(e)+o.getY(e))*.5+.5);o.setXYZ(e,o.getX(e)*t,o.getY(e)*t*.7,o.getZ(e)*t)}a.computeVertexNormals(),t.add(X(a,e,r,-.4,i))}return t}function pm(){let e=1.5,t=Math.round(im/e),n=Math.round(am/e),i=new Uint8Array(t*n);for(let r=0;r<n;r++)for(let n=0;n<t;n++)i[r*t+n]=+(um(om+(n+.5)*e,sm+(r+.5)*e)>0);let a=new Float32Array(t*n*4).fill(10);for(let r=0;r<n;r++)for(let o=0;o<t;o++){if(i[r*t+o]){a[(r*t+o)*4]=0;continue}let s=10;for(let a=-7;a<=7;a++){let c=r+a;if(!(c<0||c>=n))for(let n=-7;n<=7;n++){let r=o+n;r<0||r>=t||!i[c*t+r]||(s=Math.min(s,Math.hypot(n,a)*e))}}a[(r*t+o)*4]=s}let o=new Go(a,t,n,m,d);return o.minFilter=o.magFilter=r,o.needsUpdate=!0,{texture:o,range:new Je(om,70,sm,50)}}function mm(e){let t=new J;return t.add(dm(e.rock),fm(e.boulder)),{group:t,shore:pm()}}var hm=10.9,gm=12,_m=hm+gm,vm=2,ym=1.5,bm=_m+.5,xm=2.5;function Sm(e,t,n=40){return new W(new zs(e.map(([e,t])=>new R(e,t)),n),t)}function Cm(e){let t=new J,n=X(new Y(3,3.2,1.5,8),e.concrete,0,hm-.75,0);n.rotation.y=Math.PI/8,t.add(n);for(let n=0;n<4;n++)t.add(X(new G(1.4,.22,.4),e.concrete,0,10.11+n*.22,3.6-n*.35));return t}function wm(e){let t=[];for(let e=0;e<=24;e++){let n=e/24;t.push([ym+(vm-ym)*(1-n)**1.7,hm+n*gm])}return Sm([[0,hm],...t,[0,_m]],e.tower,48)}function Tm(e){let t=new J,n=vm-.02;return t.add(Z(1.1,2,.3,.05,e.whitePaint,0,hm+1,n)),t.add(Z(.8,1.75,.12,.02,e.redPaint,0,hm+.9,2.1)),t.add(X(new G(.9,.08,.5),e.whitePaint,0,hm+2.05,2.1)),t.add(X(new Mc(.09,10,8),e.doorLamp,0,hm+2.3,2.23)),t}function Em(e){let t=new J;t.add(Sm([[ym-.05,_m-.7],[1.65,_m-.35],[2.05,_m-.05],[xm-.1,_m+.25],[0,_m+.25]],e.whitePaint)),t.add(X(new Y(xm,xm,.25,48),e.concrete,0,bm-.125,0));let n=[];for(let e=0;e<16;e++){let t=e/16*Math.PI*2,r=Math.cos(t),i=Math.sin(t);n.push([[r*1.55,_m-.9,i*1.55],[r*(xm-.15),bm-.25,i*(xm-.15)]])}return t.add(Gd(n,.06,e.iron,4)),t}function Dm(e){let t=new J,n=xm-.08,r=1.05,i=[];for(let e=0;e<32;e++){let t=e/32*Math.PI*2;i.push([[Math.cos(t)*n,bm,Math.sin(t)*n],[Math.cos(t)*n,bm+r,Math.sin(t)*n]])}return t.add(Gd(i,.025,e.iron,4)),t.add(Kd(n,.035,bm+r,e.iron),Kd(n,.02,bm+r*.5,e.iron),Kd(n,.02,bm+.12,e.iron)),t}function Om(e){let t=new J;t.position.set(-8.5,10,-1.5),t.rotation.y=.12;let n=2.6;t.add(Z(5.2,3.2,3.6,.05,e.whitePaint,0,(n-.6)/2,0));let r=new Ws;r.moveTo(-3.6/2-.3,0),r.lineTo(0,1.8),r.lineTo(2.1,0),r.closePath();let i=new Ec(r,{depth:5.6000000000000005,bevelEnabled:!1});i.translate(0,0,-5.6000000000000005/2);let a=X(i,e.roofTile,0,n,0);a.rotation.y=Math.PI/2,t.add(a),t.add(Z(.5,1.6,.5,.03,e.concrete,1.4,3.8,-.5));for(let n of[-1.5,.3])t.add(X(new wr(.75,.9),e.windowLit,n,1.3,1.81)),t.add(X(new G(.85,.06,.1),e.whitePaint,n,.82,1.85));return t.add(X(new wr(.85,1.9),e.redPaint,1.7,.95,1.81)),t}function km(e,t){let n=[],r=null;for(let e=-16;e<=7;e+=1.6){let i=t.edgeZ(e)-1.6,a=t.heightAt(e,i),o=[e,a+1,i];n.push([[e,a-.3,i],o]),r&&n.push([r,o],[[r[0],r[1]-.45,r[2]],[e,a+.55,i]]),r=o}return Gd(n,.04,e.iron,4)}function Am(e,t){let n=new J;return n.add(Cm(e),wm(e),Tm(e),Em(e),Dm(e),Om(e),km(e,t)),n}var jm=bm,Mm=1.5,Nm=1,Pm=1.38,Fm=jm+Nm+.06,Im=jm+3.2,Lm=jm+3.4,Rm=jm+4.55,zm=jm+2.1,Bm=Math.PI*2;function Vm(e,t,n=48){return new W(new zs(e.map(([e,t])=>new R(e,t)),n),t)}function Hm(e){let t=new J;t.add(X(new Y(Mm,1.55,Nm,48),e.whitePaint,0,jm+Nm/2,0)),t.add(Kd(1.53,.05,jm+Nm,e.iron),Kd(1.56,.04,jm+.05,e.iron)),t.add(Z(.6,.85,.08,.02,e.iron,0,jm+.45,1.52)),t.add(X(new Mc(.035,8,6),e.brass,.2,jm+.45,1.58));for(let n=1;n<8;n++){let r=n/8*Bm,i=new J;i.position.set(Math.sin(r)*1.51,jm+.6,Math.cos(r)*1.51),i.rotation.y=r,i.add(X(new Vs(.1,16),e.iron)),i.add(X(new Nc(.11,.02,6,16),e.brass)),t.add(i)}return t}function Um(e){let t=new J;t.add(X(new Y(Pm,Pm,Im-Fm,16,1,!0),e.glass,0,(Fm+Im)/2,0));let n=Bm/16*2,r=1.3949999999999998,i=[];for(let e of[1,-1])for(let t=0;t<16;t++){let a=t/16*Bm;for(let t=0;t<6;t++){let o=t/6,s=(t+1)/6,c=t=>{let i=a+e*n*t;return[Math.sin(i)*r,Fm+(Im-Fm)*t,Math.cos(i)*r]};i.push([c(o),c(s)])}}return t.add(Gd(i,.022,e.iron,4)),t.add(Kd(r,.05,Fm,e.iron),Kd(r,.05,Im,e.iron)),t}function Wm(e){let t=new J;t.add(Vm([[Pm,Im],[1.48,Im+.08],[1.78,Lm-.04],[1.78,Lm],[0,Lm]],e.redPaint));let n=[];for(let e=0;e<=14;e++){let t=e/14,r=.22+1.5*Math.cos(t*Math.PI/2)**.85;n.push([r,Lm+(Rm-Lm)*t**.9])}t.add(Vm([...n,[0,Rm]],e.redPaint));let r=[];for(let e=0;e<16;e++){let t=e/16*Bm,i=Math.sin(t),a=Math.cos(t);for(let e=0;e<n.length-1;e++){let[t,o]=n[e],[s,c]=n[e+1];r.push([[i*(t+.025),o,a*(t+.025)],[i*(s+.025),c,a*(s+.025)]])}}t.add(Gd(r,.022,e.redPaint,4)),t.add(Kd(1.79,.035,Lm,e.iron));let i=Lm+.62,a=1.22,o=[];for(let e=0;e<8;e++){let t=e/8*Bm+.2;o.push([[Math.sin(t)*1.38,Lm+.4,Math.cos(t)*1.38],[Math.sin(t)*a,i,Math.cos(t)*a]])}return t.add(Gd(o,.018,e.iron,4),Kd(a,.022,i,e.iron)),t}function Gm(e){let t=new J;t.add(X(new Y(.12,.16,.32,16),e.iron,0,Rm+.12,0)),t.add(X(new Mc(.33,24,16),e.redPaint,0,Rm+.55,0)),t.add(Kd(.335,.02,Rm+.55,e.iron)),t.add(X(new Hs(.1,.35,12),e.iron,0,Rm+1.03,0)),t.add(Gd([[[0,Rm+1.1,0],[0,Rm+2.2,0]]],.018,e.iron,6));let n=new J;n.position.set(0,Rm+1.6,0),n.rotation.y=.9,n.add(Gd([[[-.55,0,0],[.55,0,0]]],.015,e.iron,4)),n.add(X(new Hs(.06,.18,8),e.iron,.6,0,0).rotateZ(-Math.PI/2));let r=new Ws;return r.moveTo(0,-.12),r.lineTo(.3,0),r.lineTo(0,.12),r.closePath(),n.add(X(new Ec(r,{depth:.015,bevelEnabled:!1}),e.iron,-.6,0,-.008)),t.add(n),t.add(Gd([[[-.32,Rm+1.35,0],[.32,Rm+1.35,0]],[[0,Rm+1.35,-.32],[0,Rm+1.35,.32]]],.012,e.iron,4)),t}function Km(e){let t=[[.001,-.82]];for(let e=0;e<=7;e++){let n=-.8+e*.075,r=.38+e/7*.30000000000000004;t.push([r,n],[r+.06,n+.035])}for(let e=0;e<=8;e++){let n=-.2+e*.05;t.push([.72,n],[.75,n+.025])}for(let e=7;e>=0;e--){let n=.8-e*.075,r=.38+e/7*.30000000000000004;t.push([r+.06,n-.035],[r,n])}return t.push([.001,.82]),Vm(t,e.lens,32)}function qm(e){let t=new J;t.add(X(new Y(.5,.6,.08,24),e.brass,0,Fm+.02,0)),t.add(X(new Y(.2,.26,zm-.85-Fm,16),e.iron,0,(Fm+zm-.85)/2,0));let n=new J;n.position.y=zm,n.add(Km(e));for(let t of[1,-1]){let r=X(new wr(.5,.56),e.bullseye,t*.765,0,0);r.rotation.y=t*Math.PI/2,n.add(r)}let r=[];for(let e=0;e<8;e++){let t=e/8*Bm+Bm/16;r.push([[Math.sin(t)*.77,-.85,Math.cos(t)*.77],[Math.sin(t)*.77,.85,Math.cos(t)*.77]])}return n.add(Gd(r,.018,e.brass,4)),n.add(Kd(.77,.025,-.85,e.brass),Kd(.77,.025,.85,e.brass),Kd(.77,.015,0,e.brass)),t.add(n),t.add(X(new Mc(.1,16,12),e.lampCore,0,zm,0)),{group:t,rotor:n}}function Jm(e){let t=new J,n=qm(e);return t.add(Hm(e),n.group,Um(e),Wm(e),Gm(e)),{group:t,rotor:n.rotor}}var Ym=170,Xm=.35,Zm=11,Qm=-.012,$m=`
  varying float vAlong;
  varying vec3 vNormalW;
  varying vec3 vViewW;
  void main() {
    vAlong = 1.0 - uv.y;                       // 0 = 燈、1 = 光束末端
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewW = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,eh=`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying float vAlong;
  varying vec3 vNormalW;
  varying vec3 vViewW;
  void main() {
    float facing = abs(dot(normalize(vNormalW), normalize(vViewW)));
    float edge = pow(facing, 2.2);
    float fall = pow(1.0 - vAlong, 2.4) * smoothstep(0.0, 0.03, vAlong);
    float a = uIntensity * edge * fall;
    gl_FragColor = vec4(uColor * a, 1.0);
  }
`;function th(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,`rgba(255,248,230,1)`),n.addColorStop(.08,`rgba(255,236,200,0.85)`),n.addColorStop(.3,`rgba(255,220,170,0.18)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,256,256),t.globalCompositeOperation=`lighter`;for(let[e,n]of[[256,3],[3,256]]){let r=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);r.addColorStop(0,`rgba(255,240,210,0.5)`),r.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=r,t.fillRect((256-e)/2,(256-n)/2,e,n)}let r=new ls(e);return r.colorSpace=D,r}function nh(e,t){let n=new Y(Xm,Zm,Ym,32,1,!0);n.translate(0,-170/2,0),n.rotateZ(Math.PI/2);let r=new W(n,e);return r.rotation.set(0,t>0?0:Math.PI,Qm),r.layers.set(1),r.frustumCulled=!1,r.renderOrder=2,r}function rh(){let e=new sr({uniforms:{uColor:{value:new H(16773328)},uIntensity:{value:.11}},vertexShader:$m,fragmentShader:eh,transparent:!0,depthWrite:!1,blending:2,side:2,fog:!1}),t=new J;t.add(nh(e,1),nh(e,-1));let n=new Uo(new ko({map:th(),color:new H(16777215),transparent:!0,depthWrite:!1,blending:2,fog:!1}));n.layers.set(1),n.renderOrder=3;let r=new V,i=new V,a=new V;function o(e){t.getWorldPosition(r),i.subVectors(e.position,r).normalize();let o=0;for(let e of[1,-1])a.set(e,0,0).transformDirection(t.matrixWorld),o=Math.max(o,Math.max(0,a.dot(i)));let s=o**60;n.position.copy(r).addScaledVector(i,2.5);let c=e.position.distanceTo(r);return n.scale.setScalar(c*(.03+.22*s)),n.material.opacity=.35+.65*s,s}return{group:t,glare:n,update:o}}var ih=new V(-99,0,-89.6),ah=.775,oh=12,sh=1500,ch=9e3;function lh(e){let t=em(),n=new J;n.position.copy(ih),n.rotation.y=ah;let r=mm(t),i=Jm(t),a=rh();i.rotor.add(a.group),n.add(r.group,Am(t,{edgeZ:lm,heightAt:um}),i.group),e.add(n,a.glare),n.updateMatrixWorld(!0);let o=new en;o.position.set(0,zm,0),n.add(o),o.color=new H(16770744),o.intensity=sh;let s={texture:r.shore.texture,range:r.shore.range,worldToLocal:n.matrixWorld.clone().invert()};function c(e,t){i.rotor.rotation.y=e/oh*Math.PI*2,i.rotor.updateMatrixWorld(!0);let n=a.update(t);o.intensity=sh+ch*n}return{glint:o,shore:s,update:c}}var uh=600,dh=-7;function fh(e){let t=new Float32Array(uh*6),n=new Float32Array(uh);for(let e=0;e<uh;e++)t[e*6]=(Math.random()-.5)*110,t[e*6+1]=Math.random()*42,t[e*6+2]=(Math.random()-.5)*70,n[e]=26+Math.random()*16;let r=new Pn;r.setAttribute(`position`,new wn(t,3));let i=new Ko({color:10335439,transparent:!0,opacity:.28,depthWrite:!1});e.add(new ts(r,i));function a(e){for(let r=0;r<uh;r++){let i=t[r*6],a=t[r*6+1],o=t[r*6+2];a-=n[r]*e,i+=dh*e,a<-2&&(a=36+Math.random()*8,i=(Math.random()-.5)*110+20,o=(Math.random()-.5)*70),t[r*6]=i,t[r*6+1]=a,t[r*6+2]=o,t[r*6+3]=i+dh/n[r]*1.4,t[r*6+4]=a+1.4,t[r*6+5]=o}r.attributes.position.needsUpdate=!0}return{update:a,material:i}}var ph=new H(461846),mh=new H(3556202);function hh(e,t){let n=[],r=[],i=46;for(;i>0;)n.push(new V(e,i,t)),Math.random()<.28&&i<40&&r.push(new V(e,i,t)),i-=2+Math.random()*3.5,e+=(Math.random()-.5)*5,t+=(Math.random()-.5)*3;let a=[];for(let e of r){let t=e.clone(),n=Math.sign(Math.random()-.5);for(let e=0;e<3+Math.random()*3;e++){let e=t.clone().add(new V(n*(1+Math.random()*3),-(1.5+Math.random()*2.5),(Math.random()-.5)*2));a.push(t,e),t=e}}return{trunk:n,branchSegs:a}}function gh(e,t){let n={flash:0,dir:new V(0,.5,-1).normalize()},r=3,i=[],a=new Ko({color:new H(14674431).multiplyScalar(4),transparent:!0,opacity:0,blending:2,fog:!1,depthWrite:!1}),o=new Pn,s=new Pn;e.add(new Qo(o,a)),e.add(new ts(s,a));function c(e){let a=(Math.random()-.5)*120,c=-45-Math.random()*40,{trunk:l,branchSegs:u}=hh(a,c);o.setFromPoints(l),s.setFromPoints(u),n.dir.set(a,30,c).normalize(),t.position.set(a,50,c),i=[e,e+.07+Math.random()*.06,e+.2+Math.random()*.15].slice(0,2+Math.round(Math.random())),r=e+5+Math.random()*8}function l(o,s){n.flash=Math.max(0,n.flash-s*3.2),o>r&&c(o),i.length&&o>=i[0]&&(i=i.slice(1),n.flash=Math.max(n.flash,.65+Math.random()*.35)),t.intensity=n.flash*2.6,a.opacity=Math.max(0,n.flash-.2)*1.5,e.fog.color.copy(ph).lerp(mh,n.flash*.6)}return{update:l,state:n}}var _h={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},vh=class extends iu{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof sr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new sr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new su(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},yh=class extends iu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},bh=class extends iu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},xh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:f}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vh(_h),this.copyPass.material.blending=0,this.clock=new vl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(r instanceof yh?n=!0:r instanceof bh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Sh=class extends iu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ch={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},wh=class e extends iu{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new H(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(i,a,{type:f}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Xe(i,a,{type:f});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Xe(i,a,{type:f});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ch;this.highPassUniforms=ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=_h;this.copyUniforms=ir.clone(l.uniforms),this.blendMaterial=new sr({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new H,this.oldClearAlpha=1,this.basic=new xn,this.fsQuad=new su(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new sr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new sr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};wh.BlurDirectionX=new R(1,0),wh.BlurDirectionY=new R(0,1);var Th={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Eh=class extends iu{constructor(){super();let e=Th;this.uniforms=ir.clone(e.uniforms),this.material=new Fc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new su(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},B.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6&&(this.material.defines.AGX_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Dh(e,t,n){let r=new xh(e);r.addPass(new Sh(t,n));let i=new wh(new R(innerWidth,innerHeight),.55,.6,.8);return r.addPass(i),r.addPass(new Eh),{render:()=>r.render(),setSize:(e,t)=>r.setSize(e,t)}}var Oh=new V(5.45,-.15,0),kh=new V;function Ah(e,t,n,r,i){let a=n*i*60,o=r**(i*60);e.v+=(t-e.x)*a,e.v*=o,e.x+=e.v*i*60}function jh(e={}){return{heave:{v:0,x:0},pitch:{v:0,x:0},roll:{v:0,x:0},halfL:e.halfL??3.8,halfW:e.halfW??1.5,draft:e.draft??.55,stiff:e.stiff??.06,dampY:e.dampY??.9,dampR:e.dampR??.86,bowImmersion:0,bowRate:0}}function Mh(e,t,n,r,i){let a=t.position.x,o=t.position.z,s=i(a+e.halfL,o,n),c=i(a-e.halfL,o,n),l=i(a,o+e.halfW,n),u=i(a,o-e.halfW,n),d=(s+c+l+u)/4-e.draft+.7;Ah(e.heave,d,e.stiff,e.dampY,r),Ah(e.pitch,Math.atan2(s-c,e.halfL*2)*.9,e.stiff,e.dampR,r),Ah(e.roll,Math.atan2(u-l,e.halfW*2)*.7,e.stiff,e.dampR,r),t.position.y=e.heave.x,t.rotation.z=e.pitch.x,t.rotation.x=e.roll.x,t.updateMatrixWorld(),t.localToWorld(kh.copy(Oh));let f=i(kh.x,kh.z,n)-kh.y,p=r>0?(f-e.bowImmersion)/r:0;e.bowRate+=(p-e.bowRate)*Math.min(1,r*12),e.bowImmersion=f}function Nh(e){let t=Math.max(0,e.bowImmersion+.2)*.6,n=Math.max(0,e.bowRate)*.3;return .85+Math.min(1.4,t+n)}var Ph=`"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive`,Fh=`"Helvetica Neue", Arial, sans-serif`;function Ih(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function Lh(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Rh(t,{srgb:n=!0,repeat:r=!1}={}){let i=new ls(t);return n&&(i.colorSpace=D),r&&(i.wrapS=i.wrapT=e),i.anisotropy=8,i}function zh(e,t,n,r,i){e.strokeStyle=`rgba(92,52,20,${i})`,e.lineWidth=r*.08,e.beginPath(),e.arc(t,n,r,.3,Math.PI*1.85),e.stroke(),e.fillStyle=`rgba(110,70,30,${i*.25})`,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function Bh(){let[e,t]=Lh(512,512),n=Ih(31),r=512/6;for(let e=0;e<6;e++){t.fillStyle=`hsl(${24+n()*6}, 48%, ${22+n()*7}%)`,t.fillRect(e*r,0,r,512);for(let i=0;i<26;i++){let i=e*r+n()*r;t.strokeStyle=`rgba(${n()>.5?`40,18,6`:`150,90,45`},${.12+n()*.15})`,t.lineWidth=.6+n()*1.6,t.beginPath(),t.moveTo(i,0),t.bezierCurveTo(i+(n()-.5)*14,512*.33,i+(n()-.5)*14,512*.66,i+(n()-.5)*6,512),t.stroke()}if(n()>.5){let i=n()*512,a=e*r+r*(.3+n()*.4);t.fillStyle=`rgba(40,16,4,0.5)`,t.beginPath(),t.ellipse(a,i,4,9,0,0,Math.PI*2),t.fill()}t.fillStyle=`rgba(12,5,2,0.85)`,t.fillRect(e*r,0,2,512)}return Rh(e,{repeat:!0})}function Vh(){let[e,t]=Lh(256,256),n=Ih(47);t.fillStyle=`#16171a`,t.fillRect(0,0,256,256);for(let e=0;e<256;e+=16)for(let n=e/16%2?8:0;n<256;n+=16)t.fillStyle=`#25272b`,t.beginPath(),t.ellipse(n+4,e+4,5,2,Math.PI/4,0,Math.PI*2),t.fill();for(let e=0;e<90;e++)t.fillStyle=`rgba(200,200,190,${n()*.06})`,t.beginPath(),t.arc(n()*256,n()*256,2+n()*14,0,Math.PI*2),t.fill();return Rh(e,{repeat:!0})}function Hh(e,t,n,r){e.strokeStyle=`rgba(150,40,60,0.8)`,e.lineWidth=1.5,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(t,n,r*.78,0,Math.PI*2),e.stroke();for(let i=0;i<360;i+=5){let a=i*Math.PI/180,o=i%30==0?.14:.06;e.beginPath(),e.moveTo(t+Math.sin(a)*r,n-Math.cos(a)*r),e.lineTo(t+Math.sin(a)*r*(1-o),n-Math.cos(a)*r*(1-o)),e.stroke()}e.fillStyle=`rgba(150,40,60,0.85)`,e.beginPath(),e.moveTo(t,n-r*.75),e.lineTo(t+6,n),e.lineTo(t,n+r*.75),e.lineTo(t-6,n),e.closePath(),e.fill(),e.font=`bold 14px ${Fh}`,e.textAlign=`center`,e.fillText(`N`,t,n-r-6)}function Uh(){let e=1024,[t,n]=Lh(e,768),r=Ih(53);n.fillStyle=`#e9e4d2`,n.fillRect(0,0,e,768);let i=e=>120+Math.sin(e*.012)*60+Math.sin(e*.041)*25;for(let[e,t]of[[150,`#cfe0e6`],[70,`#bcd5df`],[25,`#a9c9d6`]]){n.fillStyle=t,n.beginPath(),n.moveTo(0,0);for(let t=0;t<=768;t+=8)n.lineTo(i(t)+e,t);n.lineTo(0,768),n.closePath(),n.fill()}n.fillStyle=`#e3c98f`,n.strokeStyle=`#6b5a35`,n.lineWidth=2,n.beginPath(),n.moveTo(0,0);for(let e=0;e<=768;e+=6)n.lineTo(i(e)+(r()-.5)*6,e);n.lineTo(0,768),n.closePath(),n.fill(),n.stroke();for(let e=0;e<9;e++){let e=230+r()*260,t=60+r()*640,i=6+r()*18;n.beginPath(),n.ellipse(e,t,i,i*(.5+r()*.5),r()*3,0,Math.PI*2),n.fill(),n.stroke()}n.strokeStyle=`rgba(60,60,60,0.35)`,n.lineWidth=1;for(let t=0;t<e;t+=128)n.beginPath(),n.moveTo(t,0),n.lineTo(t,768),n.stroke();for(let t=0;t<768;t+=128)n.beginPath(),n.moveTo(0,t),n.lineTo(e,t),n.stroke();n.fillStyle=`rgba(40,50,60,0.75)`,n.font=`italic 13px ${Fh}`;for(let t=0;t<140;t++){let t=r()*768,a=i(t)+30+r()*(e-i(t)-60);n.fillText(String(Math.round(8+(a-i(t))*.35+r()*20)),a,t)}n.fillStyle=`#b02a2a`,n.beginPath(),n.arc(205,300,7,0,Math.PI*2),n.fill(),n.fillStyle=`#222`,n.font=`12px ${Fh}`,n.fillText(`Fl(2) W 12s 38m 17M`,222,296),n.font=`bold 15px ${Fh}`,n.fillText(`SKARVØY`,120,330),Hh(n,820,590,95),n.strokeStyle=`rgba(30,30,30,0.85)`,n.lineWidth=2,n.beginPath(),[[960,120],[760,230],[560,360],[420,470]].forEach(([e,t],r)=>r?n.lineTo(e,t):n.moveTo(e,t)),n.stroke(),n.font=`20px ${Ph}`,n.fillStyle=`rgba(25,25,25,0.9)`,[[`0215`,960,120],[`0340`,760,230],[`0455`,560,360]].forEach(([e,t,r])=>{n.beginPath(),n.arc(t,r,7,0,Math.PI*2),n.stroke(),n.fillText(e,t+12,r-8)}),n.setLineDash([8,6]),n.beginPath(),n.moveTo(420,470),n.lineTo(300,560),n.stroke(),n.setLineDash([]),n.fillStyle=`rgba(160,30,30,0.9)`,n.font=`22px ${Ph}`,n.fillText(`Vind NV 9 → snu ved fyret!`,470,640),n.fillText(`Garn: 62°31'N`,640,90),n.strokeStyle=`rgba(160,30,30,0.9)`,n.beginPath(),n.ellipse(560,600,120,26,-.1,0,Math.PI*2),n.stroke(),zh(n,870,360,46,.45),zh(n,905,395,44,.25),n.strokeStyle=`rgba(0,0,0,0.12)`,n.lineWidth=3,n.beginPath(),n.moveTo(e/2,0),n.lineTo(e/2,768),n.moveTo(0,768/2),n.lineTo(e,768/2),n.stroke();let a=n.createRadialGradient(e/2,768/2,768*.35,e/2,768/2,e*.7);return a.addColorStop(0,`rgba(120,90,40,0)`),a.addColorStop(1,`rgba(120,90,40,0.35)`),n.fillStyle=a,n.fillRect(0,0,e,768),Rh(t)}function Wh(){let e=1024,[t,n]=Lh(e,640);n.fillStyle=`#efe9d6`,n.fillRect(0,0,e,640),n.fillStyle=`rgba(0,0,0,0.25)`,n.fillRect(e/2-3,0,6,640),n.strokeStyle=`rgba(70,110,160,0.35)`,n.lineWidth=1;for(let t=70;t<640;t+=34)n.beginPath(),n.moveTo(20,t),n.lineTo(e-20,t),n.stroke();n.strokeStyle=`rgba(190,60,60,0.4)`;for(let e of[110,602])n.beginPath(),n.moveTo(e,0),n.lineTo(e,640),n.stroke();return n.fillStyle=`rgba(20,25,60,0.88)`,n.font=`24px ${Ph}`,[[`0200`,`Kurs 284°, 6 kn. Bar 978 ↓`],[`0230`,`Vind NV 8, økende`],[`0300`,`Hiv inn garn, 2 kasser torsk`],[`0340`,`Pos 62°29'N 006°02'Ø`],[`0410`,`Sjø over babord, alt ok`],[`0455`,`Bar 974 ↓↓  Storm!`],[`0520`,`Ser fyret, Skarvøy`]].forEach(([e,t],r)=>{let i=r<4,a=64+(i?r:r-4)*68,o=i?30:522;n.fillText(e,o,a),n.fillText(t,o+90,a)}),zh(n,820,520,60,.3),Rh(t)}function Gh(){let[e,t]=Lh(256,192);t.fillStyle=`#f2ede0`,t.fillRect(0,0,256,192);let n=t.createLinearGradient(0,10,0,182);n.addColorStop(0,`#9fb3b8`),n.addColorStop(.6,`#c9b991`),n.addColorStop(1,`#6f6248`),t.fillStyle=n,t.fillRect(10,10,236,158),t.fillStyle=`#4b5a5c`,t.fillRect(10,100,236,20);let r=(e,n,r)=>{t.fillStyle=r,t.beginPath(),t.arc(e,150-n,n*.16,0,Math.PI*2),t.fill(),t.fillRect(e-n*.15,150-n*.84,n*.3,n*.84)};return r(80,80,`#3a3128`),r(120,72,`#7a3b30`),r(150,40,`#33405a`),r(172,34,`#6a5a2a`),t.fillStyle=`rgba(255,230,180,0.18)`,t.fillRect(10,10,236,158),t.fillStyle=`#555`,t.font=`14px ${Ph}`,t.fillText(`Ålesund, sommer -19`,18,184),Rh(e)}function Kh({label:e,max:t,step:n,red:r=null,unit:i=``}){let[a,o]=Lh(256,256);o.fillStyle=`#ebe6d8`,o.beginPath(),o.arc(256/2,256/2,124,0,Math.PI*2),o.fill(),o.translate(256/2,256/2);let s=e=>-Math.PI*.75+e/t*Math.PI*1.5;r!==null&&(o.strokeStyle=`#b52a1e`,o.lineWidth=10,o.beginPath(),o.arc(0,0,102,s(r)-Math.PI/2,s(t)-Math.PI/2),o.stroke()),o.strokeStyle=`#1b1b1b`,o.fillStyle=`#1b1b1b`,o.textAlign=`center`,o.textBaseline=`middle`,o.font=`bold 22px ${Fh}`;for(let e=0;e<=t+1e-6;e+=n/2){let t=s(e)-Math.PI/2,r=Math.abs(e/n-Math.round(e/n))<1e-6;o.lineWidth=r?4:2,o.beginPath(),o.moveTo(Math.cos(t)*110,Math.sin(t)*110),o.lineTo(Math.cos(t)*(110-(r?18:10)),Math.sin(t)*(110-(r?18:10))),o.stroke(),r&&o.fillText(String(e),Math.cos(t)*72,Math.sin(t)*72)}return o.font=`bold 20px ${Fh}`,o.fillText(e,0,46),o.font=`16px ${Fh}`,o.fillText(i,0,70),Rh(a)}function qh(){let[e,t]=Lh(256,256);t.fillStyle=`#f0ead8`,t.beginPath(),t.arc(128,128,124,0,Math.PI*2),t.fill(),t.translate(128,128),t.fillStyle=`#1a1a1a`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`bold 26px Georgia, serif`,[`XII`,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`].forEach((e,n)=>{let r=n/12*Math.PI*2;t.fillText(e,Math.sin(r)*92,-Math.cos(r)*92)});for(let e=0;e<60;e++){let n=e/60*Math.PI*2,r=e%5?6:12;t.fillRect(Math.sin(n)*116-1,-Math.cos(n)*116-1,2,2),e%5||(t.save(),t.rotate(n),t.fillRect(-1.5,-118,3,r),t.restore())}return Rh(e)}function Jh(){let[e,t]=Lh(256,256);t.fillStyle=`#efe7d2`,t.beginPath(),t.arc(128,128,124,0,Math.PI*2),t.fill(),t.translate(128,128),t.strokeStyle=`#1a1a1a`,t.fillStyle=`#1a1a1a`,t.textAlign=`center`,t.textBaseline=`middle`;let n=e=>-Math.PI*.75+(e-950)/100*Math.PI*1.5;for(let e=950;e<=1050;e+=2){let r=n(e)-Math.PI/2,i=e%10==0;t.lineWidth=i?2.5:1,t.beginPath(),t.moveTo(Math.cos(r)*112,Math.sin(r)*112),t.lineTo(Math.cos(r)*(i?98:104),Math.sin(r)*(i?98:104)),t.stroke(),i&&e%20==0&&(t.font=`12px ${Fh}`,t.fillText(String(e),Math.cos(r)*86,Math.sin(r)*86))}return t.font=`bold 15px Georgia, serif`,[[`STORM`,960],[`REGN`,985],[`SKIFTENDE`,1e3],[`GODT`,1020],[`TØRT`,1040]].forEach(([e,r])=>{let i=n(r)-Math.PI/2;t.save(),t.translate(Math.cos(i)*62,Math.sin(i)*62),t.rotate(i+Math.PI/2),t.fillText(e,0,0),t.restore()}),t.font=`italic 12px Georgia, serif`,t.fillText(`hPa`,0,40),Rh(e)}function Yh(e,{clearCircle:t=!1}={}){let[n,r]=Lh(256,256),i=Ih(e);for(let e=0;e<260;e++){let e=i()*256,n=i()*256;if(t&&Math.hypot(e-256/2,n-256/2)<256*.36)continue;let a=.8+i()**3*5,o=r.createRadialGradient(e-a*.3,n-a*.3,0,e,n,a);o.addColorStop(0,`rgba(255,255,255,0.9)`),o.addColorStop(.6,`rgba(160,180,200,0.35)`),o.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=o,r.beginPath(),r.arc(e,n,a,0,Math.PI*2),r.fill()}return Rh(n)}function Xh(){let[e,t]=Lh(128,512),n=Ih(61);for(let e=0;e<14;e++){let e=n()*128,r=n()*512,i=80+n()*260;t.strokeStyle=`rgba(220,230,240,${.25+n()*.35})`,t.lineWidth=1+n()*1.5,t.beginPath(),t.moveTo(e,r);for(let a=r;a<r+i;a+=12)e+=(n()-.5)*3,t.lineTo(e,a%512),a%512<12&&t.moveTo(e,0);t.stroke(),t.fillStyle=`rgba(255,255,255,0.8)`,t.beginPath(),t.arc(e,(r+i)%512,2.4,0,Math.PI*2),t.fill()}return Rh(e,{repeat:!0})}function Zh(e,{w:t=512,h:n=64,bg:r=`#1c1d1f`,fg:i=`#d9d4c4`}={}){let[a,o]=Lh(t,n);return o.fillStyle=r,o.fillRect(0,0,t,n),o.fillStyle=i,o.font=`bold ${Math.round(n*.34)}px ${Fh}`,o.textAlign=`center`,o.textBaseline=`middle`,e.forEach((r,i)=>o.fillText(r,(i+.5)*t/e.length,n/2)),Rh(a)}function Qh(){let[e,t]=Lh(256,160);return t.fillStyle=`#020a04`,t.fillRect(0,0,256,160),t.fillStyle=`#6dff8a`,t.font=`bold 20px "Courier New", monospace`,[`N 62°29.41'`,`E 006°01.87'`,`SOG  5.8 kn`,`COG  284°`,`WPT  SKARVØY 2.1nm`].forEach((e,n)=>t.fillText(e,12,28+n*28)),Rh(e)}function $h(){let[e,t]=Lh(256,128),n=Ih(73);t.fillStyle=`#e8e4da`,t.fillRect(0,0,256,128),t.fillStyle=`#1d2f5c`,t.fillRect(0,0,256,10);for(let e=0;e<9;e++)t.fillStyle=`#141414`,t.beginPath(),t.ellipse(n()*256,n()*128,2+n()*4,1.5+n()*3,n()*3,0,Math.PI*2),t.fill();return t.fillStyle=`rgba(120,80,40,0.25)`,t.fillRect(0,10,256,6),Rh(e)}function eg(){let[e,t]=Lh(256,256);t.fillStyle=`#0d0d0d`,t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.translate(128,128),t.strokeStyle=`#e8e2d0`,t.fillStyle=`#e8e2d0`,t.textAlign=`center`,t.textBaseline=`middle`;for(let e=0;e<360;e+=5){let n=e*Math.PI/180,r=e%10?8:16;t.lineWidth=e%10?1:2,t.beginPath(),t.moveTo(Math.sin(n)*120,-Math.cos(n)*120),t.lineTo(Math.sin(n)*(120-r),-Math.cos(n)*(120-r)),t.stroke(),e%30==0&&(t.save(),t.rotate(n),t.font=`bold 16px ${Fh}`,t.fillText({0:`N`,90:`E`,180:`S`,270:`W`}[e]??String(e/10),0,-86),t.restore())}return t.fillStyle=`#c7372a`,t.beginPath(),t.moveTo(0,-70),t.lineTo(9,0),t.lineTo(-9,0),t.closePath(),t.fill(),Rh(e)}function tg(){let[e,t]=Lh(128,128);return zh(t,64,64,44,.7),zh(t,76,58,42,.35),Rh(e)}function ng(){let[e,t]=Lh(64,64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),Rh(e)}function rg(e=new Date){let[t,n]=Lh(256,352),r=[`JANUAR`,`FEBRUAR`,`MARS`,`APRIL`,`MAI`,`JUNI`,`JULI`,`AUGUST`,`SEPTEMBER`,`OKTOBER`,`NOVEMBER`,`DESEMBER`];n.fillStyle=`#f1ece0`,n.fillRect(0,0,256,352);let i=n.createLinearGradient(0,0,0,150);i.addColorStop(0,`#5f7f99`),i.addColorStop(1,`#23384a`),n.fillStyle=i,n.fillRect(10,10,236,140),n.fillStyle=`#c8392b`,n.beginPath(),n.moveTo(70,118),n.lineTo(190,118),n.lineTo(175,135),n.lineTo(82,135),n.closePath(),n.fill(),n.fillStyle=`#eee`,n.fillRect(110,98,30,20),n.fillStyle=`#1a1a1a`,n.font=`bold 20px ${Fh}`,n.textAlign=`center`,n.fillText(`${r[e.getMonth()]} ${e.getFullYear()}`,256/2,176);let a=(new Date(e.getFullYear(),e.getMonth(),1).getDay()+6)%7,o=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();n.font=`14px ${Fh}`;for(let t=1;t<=o;t++){let r=a+t-1,i=26+r%7*34,o=202+Math.floor(r/7)*28;n.fillStyle=r%7==6?`#b0281e`:`#222`,n.fillText(String(t),i,o),t<e.getDate()&&(n.strokeStyle=`rgba(30,30,90,0.7)`,n.lineWidth=1.5,n.beginPath(),n.moveTo(i-9,o-13),n.lineTo(i+9,o+3),n.moveTo(i+9,o-13),n.lineTo(i-9,o+3),n.stroke())}return Rh(t)}var ig=(e,t)=>new H(e).multiplyScalar(t);function ag(t,n,r){return t.wrapS=t.wrapT=e,t.repeat.set(n,r),t}function og(){let e=e=>new Ic({envMapIntensity:.25,...e}),t=Bh();return{wood:e({map:ag(t,2.5,1.2),roughness:.42,metalness:.05}),woodDark:e({map:t,color:9071189,roughness:.5}),paint:e({color:13222574,roughness:.7}),floor:e({map:ag(Vh(),6,6),roughness:.9}),console:e({color:3949640,roughness:.55,metalness:.25}),panel:e({color:1909028,roughness:.45,metalness:.3}),bezel:e({color:855824,roughness:.35,metalness:.4}),steel:e({color:9278102,roughness:.35,metalness:.85}),chrome:e({color:13620182,roughness:.15,metalness:1}),brass:e({color:10779192,roughness:.28,metalness:.95}),rubber:e({color:1118481,roughness:.85}),leather:e({color:2759186,roughness:.62}),red:e({color:10691098,roughness:.4}),oilskin:e({color:14263296,roughness:.38}),oilskinDark:e({color:9071104,roughness:.45}),paper:e({color:15920348,roughness:.9}),tape:e({color:15129e3,roughness:.8,transparent:!0,opacity:.85}),chart:e({map:Uh(),roughness:.85,side:2}),logbook:e({map:Wh(),roughness:.85}),photo:e({map:Gh(),roughness:.5}),enamel:new Lc({map:$h(),roughness:.25,clearcoat:.8,envMapIntensity:.3}),enamelInside:e({color:15131092,roughness:.3}),coffee:new Lc({color:1707013,roughness:.08,clearcoat:1,envMapIntensity:.6}),thermos:e({color:2972220,roughness:.4,metalness:.3}),knob:e({color:723723,roughness:.3}),knobRed:e({color:9180176,roughness:.3}),glassLens:new Lc({color:791060,roughness:.05,metalness:0,clearcoat:1,transparent:!0,opacity:.35,envMapIntensity:1}),bulb:new xn({color:ig(16767392,4)}),domeLamp:new xn({color:ig(16766346,1.6)}),ledGreen:new xn({color:ig(4259696,3)}),ledAmber:new xn({color:ig(16752672,3)}),ledRed:new xn({color:ig(16722458,3)}),gps:new xn({map:Qh(),color:ig(16777215,1.4)}),droplets:new xn({map:ag(Yh(7),1.6,1.6),transparent:!0,opacity:.55,depthWrite:!1,blending:2,side:2}),dropletsClear:new xn({map:Yh(8,{clearCircle:!0}),transparent:!0,opacity:.55,depthWrite:!1,blending:2,side:2}),streaks:new xn({map:ag(Xh(),2,1),transparent:!0,opacity:.14,depthWrite:!1,blending:2,side:2})}}var sg=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) { return vnoise(p) * 0.55 + vnoise(p * 2.1) * 0.3 + vnoise(p * 4.3) * 0.15; }
`,cg=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,lg=222*Math.PI/180,ug=.32,dg=`
  varying vec2 vUv;
  uniform float uSweep, uTime, uGain;
  uniform vec2 uLight;
  ${sg}
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    if (r > 1.0) { gl_FragColor = vec4(vec3(0.004, 0.012, 0.008), 1.0); return; }
    float a = atan(p.x, p.y);
    float since = mod(uSweep - a, 6.2831853);
    float trail = exp(-since * 0.9);

    // 海面雜波(近處強)、雨區、海岸線(燈塔那側一大片陸地)
    vec2 pol = vec2(a * 6.0, r * 22.0);
    float sea = smoothstep(0.42, 0.0, r) * smoothstep(0.55, 0.85, fbm(pol + floor(uTime * 0.5)));
    float rain = smoothstep(0.62, 0.8, fbm(p * 3.0 + vec2(uTime * 0.02, 0.0))) * 0.35;
    vec2 toLand = p - uLight;
    float landSide = dot(normalize(uLight), toLand) + 0.06 * fbm(p * 9.0);
    float land = smoothstep(-0.02, 0.03, landSide) * smoothstep(0.42, 0.6, fbm(p * 7.0) + 0.25);
    float beacon = smoothstep(0.035, 0.0, length(toLand));
    float echo = max(max(sea, rain), max(land, beacon));

    vec3 phosphor = vec3(0.25, 1.0, 0.45);
    vec3 col = phosphor * (echo * trail * 1.3 + exp(-since * 60.0) * 0.5);
    float rings = 0.0;
    for (int i = 1; i <= 3; i++) rings += smoothstep(0.006, 0.0, abs(r - float(i) * 0.25));
    rings += smoothstep(0.004, 0.0, abs(p.x)) * step(0.0, p.y);
    col += phosphor * rings * 0.18;
    col += phosphor * smoothstep(0.05, 0.0, r) * 0.4;                // 本船
    col += phosphor * 0.025;
    col *= 0.85 + 0.15 * sin(vUv.y * 900.0);                         // 掃描線
    col *= smoothstep(1.0, 0.94, r);
    gl_FragColor = vec4(col * uGain, 1.0);
  }
`,fg=`
  varying vec2 vUv;
  uniform float uTime, uGain;
  ${sg}
  vec3 palette(float v) {
    vec3 c = mix(vec3(0.0, 0.05, 0.35), vec3(0.0, 0.6, 1.0), smoothstep(0.0, 0.25, v));
    c = mix(c, vec3(0.1, 0.9, 0.2), smoothstep(0.25, 0.5, v));
    c = mix(c, vec3(1.0, 0.9, 0.1), smoothstep(0.5, 0.75, v));
    return mix(c, vec3(1.0, 0.15, 0.05), smoothstep(0.75, 1.0, v));
  }
  void main() {
    float x = vUv.x * 2.0 + uTime * 0.06;
    float depth = 1.0 - vUv.y;
    float bottom = 0.7 + 0.07 * sin(x * 5.0) + 0.05 * fbm(vec2(x * 6.0, 1.0));
    float v = 0.0;
    float below = depth - bottom;
    if (below > 0.0) v = max(0.25, 1.0 - below * 3.0) * (0.8 + 0.2 * vnoise(vec2(x * 40.0, depth * 30.0)));
    // 魚群:一團團的回波
    float school = smoothstep(0.72, 0.9, fbm(vec2(x * 3.0, depth * 9.0)));
    v = max(v, school * 0.85 * step(0.25, depth) * step(depth, bottom - 0.05));
    v = max(v, smoothstep(0.05, 0.0, depth) * vnoise(vec2(x * 60.0, depth * 80.0)));   // 表層氣泡
    vec3 col = v > 0.02 ? palette(v) : vec3(0.0, 0.02, 0.12);
    float grid = smoothstep(0.003, 0.0, abs(fract(depth * 4.0) - 0.5) - 0.497);
    col += vec3(0.25) * grid;
    col *= smoothstep(0.0, 0.02, vUv.x) * smoothstep(1.0, 0.98, vUv.x);
    gl_FragColor = vec4(col * uGain, 1.0);
  }
`;function pg(){let e=new sr({vertexShader:cg,fragmentShader:dg,uniforms:{uSweep:{value:0},uTime:{value:0},uGain:{value:1.25},uLight:{value:new R(Math.sin(lg),Math.cos(lg)).multiplyScalar(ug)}}}),t=new sr({vertexShader:cg,fragmentShader:fg,uniforms:{uTime:{value:0},uGain:{value:1}}});function n(n,r){e.uniforms.uSweep.value=r%(Math.PI*2),e.uniforms.uTime.value=n,t.uniforms.uTime.value=n}return{radar:e,sounder:t,update:n}}var mg=Math.cos(mf),hg=Math.sin(mf),gg={x0:-3.48,x1:-3.02,z0:-1,z1:-.52},_g=[-3.3,-2.85,-2.4,-1.95];function vg(){let e=[1,-1].map(e=>({basis:[new V(-e,0,0),new V(0,1,0),new V(0,0,-e)],origin:new V(0,0,e*xf.halfW),outline:[[$.rear,$.floor],[Cf($.floor),$.floor],[Cf($.ceil),$.ceil],[$.rear,$.ceil]].map(([t,n])=>[-e*t,n]),holes:vf.x.map(t=>[-e*t,gf,vf.w,vf.h])})),t=($.ceil-$.floor)/mg,n={basis:[new V(0,0,1),new V(hg,mg,0),new V(-mg,hg,0)],origin:new V(Sf($.floor),$.floor,0),outline:[[-$.halfW,0],[$.halfW,0],[$.halfW,t],[-$.halfW,t]],holes:_f.z.map(e=>[e,(gf-$.floor)/mg,_f.w,_f.h/mg]),front:!0},r={basis:[new V(0,0,-1),new V(0,1,0),new V(1,0,0)],origin:new V(xf.rear,0,0),outline:[[-$.halfW,$.floor],[$.halfW,$.floor],[$.halfW,$.ceil],[-$.halfW,$.ceil]],holes:yf.z.map(e=>[-e,yf.y,yf.w,yf.h])};return[...e,n,r]}function yg(e,t){let[n,r,i]=e.basis,a=e.origin.clone().addScaledVector(i,t);return new kt().makeBasis(n,r,i).setPosition(a)}function bg(e,t,n,r){return new Rs([new R(e-n/2,t-r/2),new R(e+n/2,t-r/2),new R(e+n/2,t+r/2),new R(e-n/2,t+r/2)])}function xg(e,t){return[e-bf*2,t-bf*2]}function Sg(e,t){return new W(Hd(e.map(e=>{let t=new Ws(e.outline.map(([e,t])=>new R(e,t)));return t.holes=e.holes.map(([e,t,n,r])=>bg(e,t,...xg(n,r))),new Ac(t).applyMatrix4(yg(e,hf+.002))})),t)}function Cg(e,t){let n=.028,r=.03,i=[];for(let t of e){let e=yg(t,hf+r/2);for(let[a,o,s,c]of t.holes){let[t,l]=xg(s,c);for(let[s,c,u,d]of[[a,o+l/2+n/2,t+n*2,n],[a,o-l/2-n/2,t+n*2,n*1.6],[a-t/2-n/2,o,n,l],[a+t/2+n/2,o,n,l]])i.push(new G(u,d,r).translate(s,c,0).applyMatrix4(e))}}return new W(Hd(i),t)}function wg(e,t){let n=[],r=[],i=[];for(let t of e){let e=yg(t,hf/2);t.holes.forEach(([a,o,s,c],l)=>{let u=()=>new wr(s,c).translate(a,o,0).applyMatrix4(e);(t.front&&l===2?r:n).push(u()),i.push(u())})}let a=new J;return a.add(new W(Hd(n),t.droplets)),a.add(new W(Hd(r),t.dropletsClear)),a.add(new W(Hd(i),t.streaks)),a}function Tg(e,t){let n=new J;n.applyMatrix4(yg(e,hf/2-.006)),n.position.add(new V(hg,mg,0).multiplyScalar((gf-$.floor)/mg));let r=new W(new Vs(.13,40),t.streaks.clone());r.material.opacity=.12,n.add(r);let i=new J;i.position.z=hf/2+.006,i.add(X(new Nc(.135,.008,8,40),t.panel));let a=X(new Y(.032,.036,.06,18),t.panel,0,0,.03);return a.rotation.x=Math.PI/2,i.add(a),i.add(X(new Mc(.012,10,8),t.chrome,0,0,.062)),n.add(i),{group:n,disc:r}}function Eg(e,t){let n=new J,r=[];for(let i of[_f.z[1],_f.z[3]]){let a=(gf-$.floor)/mg+_f.h/mg/2,o=new J;o.applyMatrix4(yg(e,hf+.02)),o.position.add(new V(hg,mg,0).multiplyScalar(a+.035)).add(new V(0,0,i)),o.add(Yd(.022,.05,t.panel,0,0,0)),n.add(o);let s=new J;s.applyMatrix4(yg(e,-.014)),s.position.add(new V(hg,mg,0).multiplyScalar(a-.01)).add(new V(0,0,i));let c=new J;c.add(X(new G(.008,.34,.006),t.rubber,0,-.17,0)),c.add(X(new G(.014,.3,.01),t.rubber,0,-.2,-.004)),s.add(c),n.add(s),r.push(c)}return{group:n,arms:r}}function Dg(e){let t=Cf($.floor),n=new Ws([new R($.rear,-$.halfW),new R(t,-$.halfW),new R(t,$.halfW),new R($.rear,$.halfW)]);n.holes=[bg((gg.x0+gg.x1)/2,-(gg.z0+gg.z1)/2,gg.x1-gg.x0,gg.z1-gg.z0)];let r=new Ac(n);return r.rotateX(-Math.PI/2).translate(0,$.floor,0),new W(r,e.floor)}function Og(e){let t=new J,{x0:n,x1:r,z0:i,z1:a}=gg,o=1.1,s=(n+r)/2,c=(i+a)/2,l=r-n,u=a-i,d=new W(new G(l,o,u),new Ic({color:723465,side:1}));d.position.set(s,$.floor-o/2,c),t.add(d);for(let n=0;n<4;n++){let i=$.floor-.22*(n+1),a=r-.06-n*.12;t.add(X(new G(.16,.03,u-.02),e.woodDark,a,i,c)),t.add(X(new G(.02,.012,u-.04),e.steel,a+.07,i+.02,c))}t.add(Gd([[[n,$.floor+.006,a],[r,$.floor+.006,a]],[[r,$.floor+.006,i],[r,$.floor+.006,a]]],.012,e.brass));let f=r+.03,p=a+.04;return t.add(Q([n+.05,$.floor,p],[n+.05,$.floor+.85,p],.016,e.chrome,10)),t.add(Q([n+.05,$.floor+.85,p],[f,$.floor+.85,p],.016,e.chrome,10)),t.add(Q([f,$.floor+.85,p],[f,$.floor,p],.016,e.chrome,10)),t}function kg(e){let t=new J,n=Cf($.ceil),r=new wr(n-$.rear,$.halfW*2);r.rotateX(Math.PI/2).translate((n+$.rear)/2,$.ceil-.002,0),t.add(new W(r,e.paint));let i=_g.map(e=>new G(.05,.05,$.halfW*2).translate(e,$.ceil-.025,0));t.add(new W(Hd(i),e.woodDark)),t.add(Q([$.rear,$.ceil-.07,.62],[n-.05,$.ceil-.07,.62],.016,e.paint,8)),t.add(Q([$.rear+.3,$.ceil-.1,-.35],[-1.9,$.ceil-.1,-.35],.014,e.chrome,10));for(let n of[$.rear+.3,-2.6,-1.9])t.add(Q([n,$.ceil-.05,-.35],[n,$.ceil-.1,-.35],.01,e.chrome));let a=X(new Mc(.075,20,8,0,Math.PI*2,0,Math.PI/2),e.domeLamp,-2.5,$.ceil-.02,.1);a.rotation.x=Math.PI,t.add(a),t.add(X(new Nc(.078,.008,8,28),e.brass,-2.5,$.ceil-.02,.1).rotateX(Math.PI/2));let o=new hl(16762219,0,5,1.4);return o.position.set(-2.5,$.ceil-.14,.1),t.add(o),{group:t,light:o}}function Ag(e){let t=$.floor+.05,n=.1,r=$.halfW-.008,i=Cf(t)-.01;return new W(Hd([new G(i-$.rear,n,.016).translate((i+$.rear)/2,t,r),new G(i-gg.x1,n,.016).translate((i+gg.x1)/2,t,-r),new G(.016,n,$.halfW*2).translate($.rear+.008,t,0)]),e.woodDark)}function jg(e){let t=new J,n=vg(),r=n.find(e=>e.front);t.add(Sg(n,e.wood),Cg(n,e.woodDark),wg(n,e),Dg(e),Og(e),Ag(e));let i=kg(e);t.add(i.group);let a=Tg(r,e),o=Eg(r,e);return t.add(a.group,o.group),{group:t,clearViewDisc:a.disc,wiperArms:o.arms,ceilingLight:i.light}}var Mg=2.05,Ng=new R(-2.02,1.78),Pg=new R(-1.86,Mg),Fg=$.halfW-.06;function Ig(e,t){let n=new V(t.x-e.x,t.y-e.y,0).normalize(),r=new V(0,0,1);return{right:r,up:n,out:new V().crossVectors(r,n)}}function Lg(){let{right:e,up:t,out:n}=Ig(Ng,Pg),r=new J;return r.applyMatrix4(new kt().makeBasis(e,t,n).setPosition(Ng.x,Ng.y,0)),r}function Rg(e){let t=e=>Cf(e)-.004,n=new Ec(new Ws([new R(t($.floor),$.floor),new R(Ng.x,$.floor),Ng,Pg,new R(t(Mg),Mg)]),{depth:Fg*2,bevelEnabled:!1});n.translate(0,0,-Fg);let r=new J;r.add(new W(n,e.console));let i=t(Mg)-Pg.x;r.add(Z(i+.03,.022,Fg*2+.03,.006,e.woodDark,Pg.x+i/2-.01,2.061,0)),r.add(Z(.018,.03,Fg*2,.006,e.woodDark,Pg.x-.016,2.0799999999999996,0));for(let t of[-.62,-.2,.2,.62])r.add(Z(.012,.42,.38,.004,e.wood,Ng.x-.006,1.5,t)),r.add(X(new G(.02,.012,.08),e.brass,Ng.x-.018,1.66,t));return r.add(X(new G(.02,.08,Fg*2),e.rubber,Ng.x-.01,$.floor+.04,0)),r}function zg(e){let t=new J;t.position.set(0,.12,.13),t.add(X(new Y(.018,.022,.13,12),e.steel,0,0,-.065).rotateX(Math.PI/2));let n=new J;n.add(X(new Nc(.16,.013,10,48),e.woodDark));let r=[];for(let t=0;t<8;t++){let i=t/8*Math.PI*2,a=Math.cos(i),o=Math.sin(i);r.push([[a*.03,o*.03,0],[a*.19,o*.19,0]]);let s=X(new Bs(.011,.045,4,10),e.woodDark,a*.215,o*.215,0);s.rotation.z=i-Math.PI/2,n.add(s)}return n.add(Gd(r,.007,e.woodDark,8)),n.add(X(new Y(.035,.035,.035,20),e.brass).rotateX(Math.PI/2)),n.add(X(new Nc(.02,.004,6,20),e.woodDark,.16,0,.012)),t.add(n),{group:t,rotor:n}}function Bg(e,t,n=.05){let r=new J;r.add(X(new Nc(n,n*.12,8,32),e.chrome,0,0,.004)),r.add(X(new Y(n*1.05,n*1.05,.02,32),e.bezel,0,0,-.008).rotateX(Math.PI/2)),r.add(X(new Vs(n*.95,32),new Ic({map:t,roughness:.6}),0,0,.003));let i=new J;return i.position.z=.006,i.add(X(new G(n*.05,n*.8,.002),e.knobRed,0,n*.35,0)),r.add(i,X(new Vs(n*.1,12),e.knob,0,0,.008)),r.add(X(new Vs(n*.96,32),e.glassLens,0,0,.011)),{group:r,needle:i}}function Vg(e){let t=new J,n=[`NAV`,`DEKK`,`SØK`,`PUMPE`,`VISK`,`HORN`,`VIFTE`,`INST`];t.add(Z(.4,.1,.012,.004,e.panel,0,0,0));let r=X(new wr(.38,.022),new xn({map:Zh(n)}),0,-.032,.007);return t.add(r),n.forEach((n,r)=>{let i=-.165+r*.047,a=r!==2&&r!==5;t.add(X(new Y(.008,.008,.008,12),e.chrome,i,0,.009).rotateX(Math.PI/2));let o=X(new Y(.0025,.004,.026,8),e.chrome,i,a?.008:-.008,.02);o.rotation.x=a?-.5+Math.PI/2:.5+Math.PI/2,t.add(o),t.add(X(new Vs(.0045,10),a?e.ledGreen:e.ledRed,i,.032,.007))}),t}function Hg(e){let t=new J;t.add(Z(.12,.1,.05,.012,e.panel,0,0,.025));for(let[n,r,i]of[[-.025,e.knob,-.35],[.025,e.knobRed,.1]]){let a=new J;a.position.set(n,0,.05),a.rotation.x=i,a.add(X(new Y(.005,.005,.11,8),e.chrome,0,0,.055).rotateX(Math.PI/2)),a.add(X(new Mc(.016,14,10),r,0,0,.115)),t.add(a)}return t}function Ug(e){let t=new J;t.add(Z(.2,.12,.03,.008,e.bezel,0,0,.015));let n=new xn({map:Zh([`AUTO   284°`],{w:256,h:64,bg:`#2a1400`,fg:`#ffb43a`}),color:new H(1.6,1.6,1.6)});t.add(X(new wr(.14,.035),n,0,.022,.031));for(let n of[-.06,-.02,.02,.06])t.add(Z(.03,.02,.008,.003,e.rubber,n,-.03,.032));return t}function Wg(e,t,{w:n,h:r,d:i,screenW:a,screenH:o,x:s,z:c,tilt:l}){let u=new J;u.position.set(s,2.0719999999999996,c),u.rotation.z=-l,u.add(Z(i,r,n,.015,e.bezel,0,r/2,0));let d=X(new wr(a,o),t,-i/2-.002,r*.56,0);d.rotation.y=-Math.PI/2,u.add(d);let f=[[-i/2-.03,r-.005,0,.06,.008,n],[-i/2-.03,r*.56,n/2-.004,.06,o+.03,.008],[-i/2-.03,r*.56,-n/2+.004,.06,o+.03,.008]];for(let[t,n,r,i,a,o]of f)u.add(X(new G(i,a,o),e.bezel,t,n,r));for(let t=0;t<3;t++){let a=X(new Y(.009,.01,.012,14),e.knob,-i/2-.006,r*.12,(t-1)*n*.25);a.rotation.z=Math.PI/2,u.add(a)}return u}function Gg(e){let t=new J;t.position.set(-1.66,2.0719999999999996,0),t.add(X(new Y(.06,.07,.05,28),e.brass,0,.025,0));let n=X(new Vs(.048,32),new xn({map:eg(),color:new H(.55,.55,.55)}),0,.075,0);return n.rotation.x=-Math.PI/2,t.add(n),t.add(X(new Mc(.058,28,14,0,Math.PI*2,0,Math.PI/2),e.glassLens,0,.05,0)),t.add(X(new Nc(.058,.006,8,28),e.brass,0,.05,0).rotateX(Math.PI/2)),t.add(X(new G(.004,.012,.004),e.ledRed,.05,.085,0)),{group:t,card:n}}function Kg(e){let t=new J;t.position.set(-1.52,$.ceil-.075,0),t.rotation.z=.55,t.add(Z(.06,.15,1.5,.01,e.console,.03,0,0));let n=new J;n.rotation.y=-Math.PI/2,t.add(n);let r=new J;r.position.set(-.45,0,.005),r.add(Z(.2,.1,.03,.008,e.bezel,0,0,0));let i=new xn({map:Zh([`CH 16   25W`],{w:256,h:64,bg:`#0d1a0a`,fg:`#9dff7a`}),color:new H(1.5,1.5,1.5)});r.add(X(new wr(.1,.03),i,-.02,.02,.016)),r.add(X(new Y(.014,.014,.012,16),e.knob,.07,.01,.02).rotateX(Math.PI/2)),r.add(Z(.03,.02,.008,.004,e.knobRed,.07,-.03,.017)),n.add(r);let a=Bg(e,Kh({label:`ROR`,max:70,step:10,unit:`B ← → S`}),.045);a.group.position.set(.05,0,.012);let o=Bg(e,Kh({label:`VIND`,max:40,step:10,red:25,unit:`m/s`}),.045);o.group.position.set(.2,0,.012);let s=X(new wr(.14,.088),e.gps,.42,0,.018);return n.add(a.group,o.group,Z(.17,.11,.03,.008,e.bezel,.42,0,0),s),{group:t,rudderNeedle:a.needle,windNeedle:o.needle}}function qg(e){let t=new J,n=-1.72,r=2.3,i=-$.halfW+.03;t.add(Z(.04,.06,.012,.004,e.bezel,n,2.32,i-.012));let a=Z(.05,.12,.03,.012,e.bezel,n,r,i+.008);a.rotation.z=.08,t.add(a);let o=[];for(let e=0;e<=260;e++){let t=e/260,a=t*Math.PI*2*26,s=Oe.lerp(n,-1.6,t),c=Oe.lerp(r-.07,$.ceil-.12,t)-Math.sin(t*Math.PI)*.18,l=Oe.lerp(i+.02,-.45,t);o.push([s+Math.cos(a)*.008,c+Math.sin(a)*.008,l+Math.sin(a+1)*.006])}return t.add(Jd(o,.0025,e.rubber,{segments:900,radial:5})),t}function Jg(e){let t=new J;t.position.set(-2.74,$.floor,0),t.add(X(new Y(.22,.24,.025,32),e.chrome,0,.012,0)),t.add(X(new Y(.035,.04,.55,16),e.chrome,0,.3,0)),t.add(X(new Nc(.16,.01,8,32),e.chrome,0,.3,0).rotateX(Math.PI/2)),t.add(Z(.44,.08,.46,.035,e.leather,0,.6,0)),t.add(Z(.08,.5,.44,.035,e.leather,-.22,.92,0));for(let n of[-.25,.25])t.add(Z(.32,.04,.06,.015,e.leather,-.03,.82,n)),t.add(Q([-.15,.62,n],[-.15,.81,n],.012,e.chrome));return t}function Yg(e,t){let n=new J;n.add(Rg(e));let r=Lg(),i=zg(e);r.add(i.group);let a=Bg(e,Kh({label:`O/MIN`,max:20,step:5,red:16,unit:`x100`}));a.group.position.set(-.3,.2,.012);let o=Bg(e,Kh({label:`OLJE`,max:6,step:1,red:5,unit:`bar`}),.04);o.group.position.set(-.43,.2,.012);let s=Vg(e);s.position.set(.55,.1,.008);let c=Hg(e);c.position.set(.32,.17,.005);let l=Ug(e);l.position.set(-.62,.11,.005),r.add(a.group,o.group,s,c,l),n.add(r),n.add(Wg(e,t.radar,{w:.36,h:.32,d:.24,screenW:.25,screenH:.25,x:-1.69,z:.42,tilt:.22})),n.add(Wg(e,t.sounder,{w:.24,h:.2,d:.18,screenW:.19,screenH:.12,x:-1.66,z:.82,tilt:.25}));let u=Gg(e),d=Kg(e);return n.add(u.group,d.group,qg(e),Jg(e)),{group:n,wheel:i.rotor,needles:{rpm:a.needle,oil:o.needle,rudder:d.rudderNeedle,wind:d.windNeedle},compassCard:u.card}}var Xg=Mg+.022,Zg={x:-1.6,z:-.8,r:.041,h:.088,level:.042},Qg=70,$g=2.6;function e_(e){let t=new J;t.position.set(-1.7,Xg+.001,-.42),t.rotation.y=.07;let n=.3,r=.225,i=new wr(n,r,16,12),a=i.attributes.position;for(let e=0;e<a.count;e++){let t=a.getX(e),i=a.getY(e),o=Math.max(0,Math.abs(t)/(n/2)-.75)*4,s=Math.max(0,Math.abs(i)/(r/2)-.8)*5,c=Math.max(o,s)**2*.006,l=Math.abs(Math.abs(t)-n/2)<.03&&Math.abs(Math.abs(i)-r/2)<.03;a.setZ(e,l?0:c+Math.sin(t*30)*6e-4)}i.computeVertexNormals();let o=new W(i,e.chart);o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/2,t.add(o);for(let[i,a,o]of[[1,1,.7],[1,-1,-.8],[-1,1,-.6],[-1,-1,.75]]){let s=X(new G(.055,6e-4,.018),e.tape,i*(r/2-.004),.0012,a*(n/2-.004));s.rotation.y=o,t.add(s)}let s=new J;return s.position.set(.03,.005,.05),s.rotation.set(0,.9,Math.PI/2),s.add(X(new Y(.0035,.0035,.14,6),e.oilskin)),s.add(X(new Hs(.0035,.012,6),e.paper,0,.076,0)),t.add(s),t}function t_(e){let t=new J;t.position.set(Zg.x,Xg,Zg.z),t.rotation.y=2.3;let n=new Y(Zg.r,Zg.r*.96,Zg.h,32,1,!0);t.add(X(n,e.enamel,0,Zg.h/2,0)),t.add(X(new Y(Zg.r-.002,Zg.r*.96-.002,Zg.h,32,1,!0),Object.assign(e.enamelInside.clone(),{side:1}),0,Zg.h/2,0)),t.add(X(new Vs(Zg.r*.96,32),e.enamelInside,0,.002,0).rotateX(-Math.PI/2)),t.add(X(new Nc(Zg.r-.001,.0022,8,40),e.knob,0,Zg.h,0).rotateX(Math.PI/2));let r=X(new Nc(.024,.005,8,20,Math.PI*1.1),e.enamel,Zg.r+.008,Zg.h*.52,0);r.rotation.z=-Math.PI*.55,t.add(r);let i=new J;return i.position.y=Zg.level,i.add(X(new Vs(Zg.r-.0035,32),e.coffee).rotateX(-Math.PI/2)),t.add(X(new Y(Zg.r-.0021,Zg.r-.0021,.004,32,1,!0),new Ic({color:5911574,roughness:.5,side:1,transparent:!0,opacity:.6}),0,Zg.h*.8,0)),t.add(i),{group:t,liquid:i}}function n_(){let e=new Float32Array(Qg*3),t=new Float32Array(Qg*3),n=new Float32Array(Qg),r=new Float32Array(Qg);for(let e=0;e<Qg;e++)n[e]=e/Qg*$g,r[e]=Math.random()*100;let i=new Pn;i.setAttribute(`position`,new wn(e,3)),i.setAttribute(`color`,new wn(t,3));let a=new ss(i,new ns({map:ng(),size:.08,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1,blending:2}));a.position.set(Zg.x,Xg+Zg.level,Zg.z),a.frustumCulled=!1;function o(a,o,s){for(let i=0;i<Qg;i++){n[i]+=o,n[i]>$g&&(n[i]-=$g,r[i]=Math.random()*100);let c=n[i],l=c/$g,u=r[i],d=.07*c+.02*c*c,f=.012*c,p=Math.sin(u+a*1.3+c*2.1)*f+Math.sin(u*3.1)*.012,m=Math.cos(u*1.7+a*1.1+c*1.7)*f+Math.cos(u*2.3)*.012;e[i*3]=s.x*d+p,e[i*3+1]=s.y*d,e[i*3+2]=s.z*d+m;let h=Math.sin(Math.min(1,l*1.15)*Math.PI)*.045;t[i*3]=h,t[i*3+1]=h*.97,t[i*3+2]=h*.93}i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0}return{points:a,update:o}}function r_(){let e=new Ic({map:tg(),transparent:!0,depthWrite:!1,roughness:.6}),t=new J;for(let[n,r,i,a]of[[-1.62,-.66,.05,.3],[-1.76,-.88,.046,2.1],[-1.58,-.18,.045,1.2]]){let o=X(new wr(i*2,i*2),e,n,Xg+4e-4,r);o.rotation.set(-Math.PI/2,0,a),t.add(o)}return t}function i_(e){let t=new J;t.position.set(-1.77,Xg+.024,-.13),t.rotation.y=.5;for(let n of[-.03,.03]){let r=Yd(.022,.12,e.rubber,0,0,n,18);r.rotation.set(0,0,Math.PI/2),t.add(r);let i=Yd(.016,.03,e.knob,-.07,0,n,14);i.rotation.set(0,0,Math.PI/2),t.add(i);let a=X(new Vs(.019,18),e.glassLens,.061,0,n);a.rotation.y=Math.PI/2,t.add(a)}return t.add(Z(.05,.016,.05,.006,e.knob,-.01,.006,0)),t}function a_(e){let t=new J;return t.position.set(-1.62,Xg,-.93),t.add(X(new Y(.038,.04,.22,24),e.thermos,0,.11,0)),t.add(X(new Y(.042,.041,.06,24),e.steel,0,.25,0)),t.add(X(new Y(.041,.041,.012,24),e.steel,0,.006,0)),t}function o_(e){let t=new kc(.022,2),n=Ih(91),r=t.attributes.position;for(let e=0;e<r.count;e++){let t=.75+n()*.45;r.setXYZ(e,r.getX(e)*t,r.getY(e)*t*.8,r.getZ(e)*t)}return t.computeVertexNormals(),X(t,e.paper,-1.8,Xg+.016,-.6)}function s_(e){let t=new J;return t.position.set(-1.82,Xg+.006,-.27),t.rotation.y=.4,t.add(Z(.025,.012,.06,.004,e.red,0,0,0)),t.add(Z(.026,.013,.014,.003,e.steel,0,0,.035)),t}function c_(e){let t=X(new wr(.1,.075),e.photo,-1.556,Xg+.04,-.6);return t.rotation.set(0,-Math.PI/2,0),t.rotateX(-(mf+.12)),t}function l_(e){let t=new J,n=t_(e),r=n_();return t.add(e_(e),n.group,r.points,r_(),i_(e),a_(e),o_(e),s_(e),c_(e)),{group:t,liquid:n.liquid,mugGroup:n.group,steam:r}}var u_=new V($.rear,2.2,-.76),d_=.17,f_=.8,p_=-1.12,m_={center:new V($.rear+.065,2.02,-.24),R:.21,r:.05},h_=Math.PI*2;function g_(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function __(){let[e,t]=g_(512,256);t.fillStyle=`#e0aa12`,t.fillRect(0,0,512,256);let n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`rgba(255,230,140,0.25)`),n.addColorStop(1,`rgba(90,60,0,0.25)`),t.fillStyle=n,t.fillRect(0,0,512,256),t.strokeStyle=`rgba(110,75,0,0.55)`,t.lineWidth=1.5,t.setLineDash([5,4]);for(let e=0;e<6;e++){let n=e/6*512;t.beginPath(),t.moveTo(n,0),t.lineTo(n,150),t.stroke()}for(let e of[158,182,206,230])t.beginPath(),t.moveTo(0,e),t.lineTo(512,e),t.stroke();return t.setLineDash([]),t.fillStyle=`rgba(70,50,10,0.18)`,t.fillRect(0,238,512,18),Rh(e)}function v_(){let[e,t]=g_(1024,128);t.fillStyle=`#e4511e`,t.fillRect(0,0,1024,128),t.fillStyle=`#ece8dc`;for(let e=0;e<4;e++)t.fillRect(e*256+108,0,40,128);t.fillStyle=`rgba(25,20,15,0.85)`,t.font=`bold 30px "Arial Narrow", Arial, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`M-127-HØ`,768,96),t.fillStyle=`rgba(60,30,10,0.12)`;for(let e=0;e<60;e++)t.fillRect(Math.random()*1024,Math.random()*128,6,2);return Rh(e)}function y_(){let e=new zs([[0,.125],[.035,.123],[.068,.112],[.09,.09],[.098,.06],[.1,.03],[.104,.008],[.12,0],[.15,-.008],[.18,-.02],[.2,-.03]].map(([e,t])=>new R(e,t)).reverse(),56),t=e.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e),i=t.getZ(e),a=Math.hypot(n,i),o=Math.max(0,a-.104);if(o===0)continue;let s=Math.max(0,n/a),c=Math.max(0,-n/a),l=1+.7*s-.35*c,u=.104+o*l;t.setXYZ(e,n/a*u,r-o*l*(.25+.45*s),i/a*u)}return e.computeVertexNormals(),e}function b_(){let e=y_(),t=new Lc({map:__(),roughness:.32,clearcoat:.6,clearcoatRoughness:.25,envMapIntensity:.4}),n=new Ic({color:2828836,roughness:.9,side:1}),r=new J;r.add(new W(e,t),new W(e,n));let i=new Ic({color:7033872,roughness:.6});for(let e of[-1,1])r.add(Jd([[0,.004,e*.103],[.03,-.06,e*.09],[.05,-.11,e*.05],[.055,-.13,0]],.0035,i,{segments:24,radial:5}));return r}function x_(e){let t=new J;t.position.copy(m_.center),t.rotation.y=Math.PI/2;let{R:n,r}=m_;t.add(new W(new Nc(n,r,20,72),new Ic({map:v_(),roughness:.55})));let i=new Ic({color:13616808,roughness:.9});for(let e=0;e<4;e++){let a=(e*256+128)/1024*h_,o=a+h_/4,s=[];for(let e=0;e<=12;e++){let t=e/12,i=a+(o-a)*t,c=n+r+.004+Math.sin(Math.PI*t)*.03;s.push([Math.cos(i)*c,Math.sin(i)*c-Math.sin(Math.PI*t)*.025,.01])}t.add(Jd(s,.005,i,{segments:30,radial:5}));let c=X(new Nc(r+.003,.006,6,16),i,Math.cos(a)*n,Math.sin(a)*n,0);c.quaternion.setFromUnitVectors(new V(0,0,1),new V(-Math.sin(a),Math.cos(a),0)),t.add(c)}for(let i of[-.07,.07]){let a=Math.sqrt((n-r)**2-i*i)-.009;t.add(Q([i,a,-.07],[i,a+.012,.04],.008,e.steel))}return t}function S_(e){let t=new J;t.add(x_(e));let n=new J;n.position.copy(u_),n.add(Q([0,0,0],[d_,.03,0],.009,e.woodDark,10)),n.add(X(new Mc(.014,12,8),e.woodDark,d_,.03,0));let r=new J;r.position.set(d_,.03,0),n.add(r);let i=b_();return i.rotation.set(0,.12,p_),i.scale.setScalar(f_),i.position.copy(new V(0,.11*f_,0).applyEuler(i.rotation).negate()),r.add(i),t.add(n),{group:t,swing:r}}var C_={x0:$.rear,x1:-3,z0:.12,z1:$.halfW,top:2},w_=-3.27,T_={min:.3,max:.75},E_=C_.top+.004,D_={z0:.335,z1:.665,lift:.0085,ramp:.012},O_=new V(-3.24,$.ceil-.01,.62),k_=966,A_=987;function j_(e){let t=new J,{x0:n,x1:r,z0:i,z1:a,top:o}=C_,s=(n+r)/2,c=(i+a)/2,l=r-n,u=a-i;t.add(X(new G(l-.02,o-$.floor-.03,u-.01),e.wood,s-.01,(o+$.floor)/2-.015,c)),t.add(Z(l+.02,.03,u,.006,e.woodDark,s,o-.015,c)),t.add(Gd([[[r+.005,o+.018,i],[r+.005,o+.018,a]],[[n,o+.018,i+.005],[r,o+.018,i+.005]]],.01,e.woodDark,8));for(let n=0;n<3;n++){let i=o-.16-n*.22;t.add(Z(.012,.18,u-.08,.004,e.woodDark,r+.002,i,c)),t.add(X(new G(.02,.014,.09),e.brass,r+.014,i+.03,c))}return t}function M_(e){let t=new J;t.position.set(-3.27,C_.top+.006,.5),t.rotation.y=Math.PI/2;let n=e.logbook.map;for(let e of[-1,1]){let r=new wr(.16,.2),i=r.attributes.uv;for(let t=0;t<i.count;t++)i.setX(t,e<0?i.getX(t)*.5:.5+i.getX(t)*.5);let a=new W(r,new Ic({map:n,roughness:.85}));a.rotation.set(-Math.PI/2,e*.06,0),a.position.set(e*.08,.004,0),t.add(a)}return t.add(Z(.34,.006,.21,.002,e.red,0,-.001,0)),t}function N_(e){let t=new J,n=C_.top+.004,r=new Lc({color:11194584,transparent:!0,opacity:.35,roughness:.1}),i=new J;i.position.set(-3.18,n,.89),i.rotation.y=.35;for(let e of[-.025,.025])i.add(X(new G(.3,.005,.035),r,0,.003,e));for(let t of[-.08,.08])i.add(Q([t-.01,.007,-.025],[t+.01,.007,.025],.003,e.brass));t.add(i);let a=new J;a.position.set(-3.43,n+.004,.2),a.add(Q([0,0,0],[.11,0,.025],.0025,e.chrome),Q([0,0,0],[.11,0,-.02],.0025,e.chrome)),a.add(X(new Y(.007,.007,.008,12),e.brass)),t.add(a);let o=new J;return o.position.set(-3.1,n+.016,.2),o.rotation.set(0,.25,Math.PI/2),o.add(X(new Y(.014,.014,.15,14),e.oilskin)),o.add(X(new Y(.02,.015,.035,14),e.knob,0,.09,0)),t.add(o),t}function P_(e){let t=new J;t.position.set(w_,E_,.6);let n=new J;return n.add(X(new Y(.0038,.0038,.15,6),e.oilskin).rotateZ(Math.PI/2)),n.add(X(new Hs(.0038,.014,6),e.paper,.082,0,0).rotateZ(-Math.PI/2)),n.add(X(new Y(.004,.004,.012,8),e.red,-.08,0,0).rotateZ(Math.PI/2)),t.add(n),{group:t,body:n}}function F_(e){let t=new J;t.position.copy(O_);let n=new J;t.add(n),n.add(Q([0,0,0],[0,-.4,0],.003,e.rubber));let r=new Ic({color:2050610,roughness:.35,metalness:.2,side:2});n.add(X(new Hs(.09,.08,28,1,!0),r,0,-.42000000000000004,0)),n.add(X(new Mc(.022,14,10),e.bulb,0,-.445,0));let i=new hl(16761466,0,4.5,1.6);return i.position.set(0,-.47000000000000003,0),n.add(i),t.add(X(new Y(.03,.03,.015,16),e.steel)),{group:t,swing:n,light:i}}function I_(e,t,n){let r=new J;return r.position.set($.rear+.004,2.56,n),r.rotation.y=Math.PI/2,r.add(X(new Y(.084,.084,.03,36),e.brass,0,0,.015).rotateX(Math.PI/2)),r.add(X(new Nc(.076,.008,10,36),e.brass,0,0,.03)),r.add(X(new Vs(.072,36),new Ic({map:t,roughness:.6}),0,0,.031)),r.add(X(new Vs(.073,36),e.glassLens,0,0,.038)),r}function L_(e,t,n,r){let i=new J;return i.position.z=r,i.add(X(new G(n,t,.0015),e,0,t*.4,0)),i}function R_(e){let t=I_(e,qh(),-.1),n=L_(e.knob,.042,.005,.033),r=L_(e.knob,.06,.0035,.034),i=L_(e.knobRed,.064,.0015,.035);return t.add(n,r,i),{group:t,hour:n,minute:r,second:i}}function z_(e){let t=I_(e,Jh(),.1),n=e=>-Math.PI*.75+(e-950)/100*Math.PI*1.5,r=L_(e.knob,.062,.003,.033);r.rotation.z=-n(k_);let i=L_(e.brass,.05,.004,.036);return i.rotation.z=-n(A_),t.add(r,i),{group:t,needle:r,base:r.rotation.z}}function B_(){let e=X(new wr(.15,.206),new Ic({map:rg(),roughness:.85}),-2.6,1.98,$.halfW-.003);return e.rotation.y=Math.PI,e}function V_(e){let t=new J;t.position.set(-2.78,$.floor+.32,-$.halfW+.09),t.add(X(new Y(.065,.065,.42,24),e.red,0,0,0)),t.add(X(new Mc(.065,24,10,0,Math.PI*2,0,Math.PI/2),e.red,0,.21,0)),t.add(X(new Y(.018,.022,.06,12),e.steel,0,.29,0)),t.add(Z(.09,.012,.025,.004,e.knob,.03,.32,0)),t.add(Q([.01,.3,.012],[.05,.05,.07],.007,e.rubber)),t.add(Z(.04,.3,.01,.004,e.steel,0,.02,-.07));for(let n of[-.1,.12])t.add(X(new Nc(.068,.006,6,24),e.steel,0,n,0).rotateX(Math.PI/2));return t}function H_(e){let t=new J,n=P_(e),r=F_(e),i=R_(e),a=z_(e),o=S_(e);return t.add(j_(e),M_(e),N_(e),n.group,r.group,i.group,a.group,B_(),V_(e),o.group),{group:t,pencil:n,lamp:r,clock:i,barometer:a,hat:o}}var U_=1/240,W_=.1;function G_(e,t){let n=Math.cos(t);return{x:-n*Math.sin(e),y:-n*Math.cos(e),z:Math.sin(t)}}function K_({freq:e,damping:t}){return{x:0,z:0,vx:0,vz:0,omega:2*Math.PI*e,damping:t}}function q_(e,t,n,r){let i=e.omega*e.omega,a=2*e.damping*e.omega,o=Math.min(r,W_);for(;o>1e-9;){let r=Math.min(U_,o);e.vx+=(-i*(e.x-t)-a*e.vx)*r,e.vz+=(-i*(e.z-n)-a*e.vz)*r,e.x+=e.vx*r,e.z+=e.vz*r,o-=r}return e}function J_({min:e,max:t,friction:n=.3,restitution:r=.35}){return{p:(e+t)/2,v:0,min:e,max:t,friction:n,restitution:r}}function Y_(e,t,n){let r=Math.min(n,W_);for(;r>1e-9;){let n=Math.min(U_,r),i=e.friction*n;if(e.v===0&&Math.abs(t)<=e.friction){r-=n;continue}e.v+=t*n,e.v=Math.abs(e.v)<=i?0:e.v-Math.sign(e.v)*i,e.p+=e.v*n,e.p>e.max&&(e.p=e.max,e.v=-e.v*e.restitution),e.p<e.min&&(e.p=e.min,e.v=-e.v*e.restitution),r-=n}return e}var X_=9.81,Z_=1.2,Q_=1.6,$_=.4,ev=.1,tv=1,nv=1.9,rv=.35,iv=3,av=.0038,ov=new V(0,-1,0),sv=new V(1,0,0),cv=new V(0,1,0),lv=new V,uv=new V;function dv({x0:e,x1:t,y0:n,z0:r,z1:i,y1:a=1/0}){let o=[new vr(new V(-1,0,0),e),new vr(new V(1,0,0),-t),new vr(new V(0,0,-1),r),new vr(new V(0,0,1),-i),new vr(new V(0,-1,0),n)];return Number.isFinite(a)&&o.push(new vr(new V(0,1,0),-a)),o}function fv(e,t){let n=t.map(e=>e.clone());for(let t of e)t.clippingPlanes=n,t.clipIntersection=!0;return function(e,r){n.forEach((e,n)=>e.copy(t[n]).applyMatrix4(r)),e||n[0].set(sv,1e9)}}function pv(){let e={p:0,r:0},t={p:0,r:0},n=new V(0,-1,0),r=!1;function i(n){e.p=n.pitch.v*60,e.r=n.roll.v*60,t.p=t.r=0,r=!0}function a(a,o,s){r||i(o);let c=o.pitch.v*60,l=o.roll.v*60;if(s>0){let n=Math.min(1,s*8);t.p+=((c-e.p)/s-t.p)*n,t.r+=((l-e.r)/s-t.r)*n}e.p=c,e.r=l;let u=G_(a.rotation.z,a.rotation.x),d=Oe.clamp(t.p,-3,iv)*rv,f=Oe.clamp(t.r,-3,iv)*rv;return n.set(u.x*X_+d*nv,u.y*X_,u.z*X_-f*nv),n}return{update:a,track:i}}function mv(e){let{z0:t,z1:n,lift:r,ramp:i}=D_;return Oe.smoothstep(e,t-i,t)*(1-Oe.smoothstep(e,n,n+i))*r}function hv(e,t){let n=Math.hypot(e.x,e.z);n<=t||(e.x*=t/n,e.z*=t/n,e.vx*=.5,e.vz*=.5)}function gv(e,t){let n=Math.min(.95,e.x*e.x+e.z*e.z);return uv.set(e.x,t*Math.sqrt(1-n),e.z)}function _v(e,t,n,r){let i=new Xe(1,1),a=e.getRenderTarget(),o=n.position.clone(),s=n.quaternion.clone();r.visible=!0,e.setRenderTarget(i),e.compile(t,n),n.position.set(4,4,12),n.lookAt(r.getWorldPosition(new V)),n.updateMatrixWorld(),e.render(t,n),n.position.copy(o),n.quaternion.copy(s),e.setRenderTarget(a),r.visible=!1,i.dispose(),r.traverse(t=>{if(t.material)for(let n of Object.values(t.material))n?.isTexture&&e.initTexture(n)})}function vv({boat:e,wheelhouse:t,rainMaterial:n,scene:r,renderer:i,camera:a}){let o=og(),s=pg(),c=jg(o),l=Yg(o,s),u=l_(o),d=H_(o),f=new J;f.add(c.group,l.group,u.group,d.group),f.visible=!1,t.group.add(f),i.localClippingEnabled=!0;let p=fv([t.lowerBody.material],dv({x0:$.rear-.01,x1:Cf(df.top)-.004,y0:$.floor-.01,z0:-$.halfW,z1:$.halfW})),m=fv([n],dv({x0:$.rear,x1:Cf($.ceil),y0:$.floor,y1:$.ceil,z0:-$.halfW,z1:$.halfW})),h=pv(),g={liquid:K_({freq:2.6,damping:.06}),lamp:K_({freq:.78,damping:.3}),hat:K_({freq:1.1,damping:.35}),pencil:J_({min:T_.min,max:T_.max,friction:.08,restitution:.3})},_=0;_v(i,r,a,f);function v(e){_=Oe.clamp(e,0,1),f.visible=_>0;for(let e of[t.glass.lit,t.glass.dim])e.opacity=1-_,e.visible=e.opacity>.01}function y(t,n,r){let i=h.update(e,r,n),a=lv.copy(i).normalize();q_(g.liquid,-a.x,-a.z,n);let o=gv(g.liquid,1).applyAxisAngle(cv,-2.3);u.liquid.quaternion.setFromUnitVectors(cv,o),q_(g.lamp,a.x,a.z,n),hv(g.lamp,$_),d.lamp.swing.quaternion.setFromUnitVectors(ov,gv(g.lamp,-1)),q_(g.hat,a.x,a.z,n),hv(g.hat,ev),d.hat.swing.quaternion.setFromUnitVectors(ov,gv(g.hat,-1)),Y_(g.pencil,i.z*.67,n),d.pencil.group.position.z=g.pencil.p,d.pencil.group.position.y=E_+mv(g.pencil.p),d.pencil.body.rotation.x=-g.pencil.p/av,u.steam.update(t,n,lv.copy(a).negate())}function b(e,n,r){s.update(e,t.radar.rotation.y);let i=.22*Math.sin(e*.37)+.08*Math.sin(e*1.13);l.wheel.rotation.z=i*2.4;let a=(e,t)=>Math.PI*.75-e/t*Math.PI*1.5;l.needles.rudder.rotation.z=a(35-i*60,70),l.needles.rpm.rotation.z=a(12.5+Math.sin(e*7.3)*.15+Math.sin(e*.5)*.4,20),l.needles.oil.rotation.z=a(4.1+Math.sin(e*5.1)*.03,6),l.needles.wind.rotation.z=a(22+Math.sin(e*.9)*3+Math.sin(e*2.7)*1.5,40),l.compassCard.rotation.z=.012*Math.sin(e*.21+.5);let u=new Date,f=u.getSeconds()+u.getMilliseconds()/1e3,p=u.getMinutes()+f/60;d.clock.second.rotation.z=-f/60*Math.PI*2,d.clock.minute.rotation.z=-p/60*Math.PI*2,d.clock.hour.rotation.z=-(u.getHours()%12+p/60)/12*Math.PI*2,d.barometer.needle.rotation.z=d.barometer.base+Math.sin(e*3.1)*.004,c.clearViewDisc.rotation.z-=n*30,c.wiperArms.forEach((t,n)=>{t.rotation.z=Math.sin(e*2.3+n*.4)*.85}),o.streaks.map.offset.y+=n*.06,o.droplets.opacity=o.dropletsClear.opacity=.3+r*.6;let m=.96+.04*Math.sin(e*13.1);d.lamp.light.intensity=Z_*_*m,c.ceilingLight.intensity=Q_*_*m}function x(n,r,i,a){if(e.updateMatrixWorld(),p(_>0,e.matrixWorld),m(_>0,e.matrixWorld),_<=0){h.track(i);return}t.cabinLight.intensity*=1-tv*_,y(n,r,i),b(n,r,a)}return{group:f,setReveal:v,update:x}}var yv={initial:.72,min:.3,max:1.4,sensitivity:.0015,pinchBoost:6,smooth:8,seaClearance:1.2},bv=16;function xv({deltaY:e,deltaMode:t},n=800){return t===1?e*bv:t===2?e*n:e}function Sv(e,t){let n=e*Math.exp(t*yv.sensitivity);return Math.min(yv.max,Math.max(yv.min,n))}function Cv(e,t){return Math.max(e,t+yv.seaClearance)}function wv(e,t){let n={value:yv.initial,target:yv.initial};return e.addEventListener(`wheel`,e=>{if(!t())return;e.preventDefault();let r=xv(e,innerHeight)*(e.ctrlKey?yv.pinchBoost:1);n.target=Sv(n.target,r)},{passive:!1}),{get value(){return n.value},update(e){return n.value+=(n.target-n.value)*(1-Math.exp(-yv.smooth*e)),n.value}}}function Tv(e,t,n=yv.initial){let r=new V(1.5,1+t*.5,0);return{pos:new V(6+Math.sin(e*.31)*.8,4.6+Math.sin(e*.47)*.5+t*.25,17.5+Math.sin(e*.21)*.6).sub(r).multiplyScalar(n).add(r),look:r}}var Ev=`
.cabin-hint {
  position: fixed; pointer-events: none; z-index: 10;
  padding: 6px 10px; border-radius: 6px;
  font: 500 13px/1.2 system-ui, -apple-system, "PingFang TC", sans-serif; letter-spacing: 0.04em;
  color: #ffe2b8; background: rgba(12, 10, 8, 0.72); border: 1px solid rgba(255, 196, 120, 0.35);
  transform: translate(14px, 14px); opacity: 0; transition: opacity 0.18s;
}
.cabin-hint.on { opacity: 1; }
.cabin-bar {
  position: fixed; left: 50%; bottom: 22px; z-index: 10;
  display: flex; gap: 6px; padding: 6px; border-radius: 12px;
  background: rgba(10, 9, 8, 0.66); border: 1px solid rgba(255, 196, 120, 0.22);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  transform: translate(-50%, 16px); opacity: 0; pointer-events: none;
  transition: opacity 0.35s, transform 0.35s;
  max-width: calc(100vw - 32px); flex-wrap: wrap; justify-content: center;
}
.cabin-bar.on { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
.cabin-bar button {
  display: flex; align-items: center; gap: 6px; padding: 8px 12px; border-radius: 8px;
  font: 500 14px/1 system-ui, -apple-system, "PingFang TC", sans-serif; color: #e9dcc7;
  background: transparent; border: 1px solid transparent; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.cabin-bar button:hover { background: rgba(255, 196, 120, 0.1); }
.cabin-bar button:focus-visible { outline: 2px solid #ffb35c; outline-offset: 1px; }
.cabin-bar button.active { color: #1a1206; background: #f2b468; }
.cabin-bar kbd {
  font: 600 11px/1 ui-monospace, Menlo, monospace; padding: 2px 5px; border-radius: 4px;
  background: rgba(255, 255, 255, 0.1); color: inherit; opacity: 0.8;
}
.cabin-bar button.active kbd { background: rgba(0, 0, 0, 0.15); }
.cabin-bar .sep { width: 1px; margin: 4px 2px; background: rgba(255, 196, 120, 0.2); }
.cabin-bar .exit { color: #c9bfb0; }
.cabin-toast {
  position: fixed; left: 50%; bottom: 84px; z-index: 10; pointer-events: none;
  padding: 7px 12px; border-radius: 8px; transform: translateX(-50%);
  font: 500 13px/1.3 system-ui, -apple-system, "PingFang TC", sans-serif; letter-spacing: 0.03em;
  color: #ffe2b8; background: rgba(12, 10, 8, 0.66); border: 1px solid rgba(255, 196, 120, 0.25);
  opacity: 0; transition: opacity 0.5s; max-width: calc(100vw - 32px); text-align: center;
}
.cabin-toast.on { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .cabin-bar, .cabin-hint, .cabin-toast { transition: none; } }
`;function Dv(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r}function Ov(e,t,n,r=``){let i=Dv(`button`,r);return i.type=`button`,i.append(Dv(`kbd`,``,t),Dv(`span`,``,e)),i.addEventListener(`click`,e=>{e.stopPropagation(),n()}),i}function kv({stations:e,onStation:t,onExit:n}){let r=Dv(`style`);r.textContent=Ev,document.head.append(r);let i=Dv(`div`,`cabin-hint`,`點擊進入駕駛艙(或按 E)`),a=Dv(`nav`,`cabin-bar`);a.setAttribute(`aria-label`,`駕駛艙視角`);let o=e.map((e,n)=>Ov(e.label,String(n+1),()=>t(n)));a.append(...o,Dv(`div`,`sep`),Ov(`離開`,`Esc`,n,`exit`));let s=Dv(`div`,`cabin-toast`);s.setAttribute(`role`,`status`),document.body.append(i,a,s);let c=0;return{setHover:e=>i.classList.toggle(`on`,e),moveHint:(e,t)=>{i.style.left=`${e}px`,i.style.top=`${t}px`},showBar:e=>a.classList.toggle(`on`,e),setActive:e=>o.forEach((t,n)=>t.classList.toggle(`active`,n===e)),toast:(e,t=4500)=>{s.textContent=e,s.classList.add(`on`),clearTimeout(c),c=setTimeout(()=>s.classList.remove(`on`),t)}}}var Av=.0045,jv=1.4,Mv=1.5,Nv=.9,Pv=-1.15,Fv={ArrowLeft:[1,0],ArrowRight:[-1,0],ArrowUp:[0,1],ArrowDown:[0,-1]};function Iv(e,t){let n={yaw:0,pitch:0,tYaw:0,tPitch:0,drag:null,keys:new Set};e.style.touchAction=`none`;let r=()=>{n.tYaw=Oe.clamp(n.tYaw,-1.5,Mv),n.tPitch=Oe.clamp(n.tPitch,Pv,Nv)};e.addEventListener(`pointerdown`,r=>{t()&&(n.drag={id:r.pointerId,x:r.clientX,y:r.clientY},e.setPointerCapture(r.pointerId),e.style.cursor=`grabbing`)}),e.addEventListener(`pointermove`,e=>{!n.drag||e.pointerId!==n.drag.id||(n.tYaw+=(e.clientX-n.drag.x)*Av,n.tPitch+=(e.clientY-n.drag.y)*Av,n.drag.x=e.clientX,n.drag.y=e.clientY,r())});let i=r=>{!n.drag||r.pointerId!==n.drag.id||(n.drag=null,e.style.cursor=t()?`grab`:``)};e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i),window.addEventListener(`keydown`,e=>{Fv[e.key]&&t()&&(n.keys.add(e.key),e.preventDefault())}),window.addEventListener(`keyup`,e=>n.keys.delete(e.key)),window.addEventListener(`blur`,()=>n.keys.clear());function a(){n.yaw=n.pitch=n.tYaw=n.tPitch=0}function o(e,t,i){for(let e of n.keys)n.tYaw+=Fv[e][0]*jv*i,n.tPitch+=Fv[e][1]*jv*i;r();let a=1-Math.exp(-12*i);n.yaw+=(n.tYaw-n.yaw)*a,n.pitch+=(n.tPitch-n.pitch)*a;let o=t.clone().sub(e),s=o.length(),c=Math.atan2(o.z,o.x)-n.yaw,l=Oe.clamp(Math.atan2(o.y,Math.hypot(o.x,o.z))+n.pitch,-1.35,1.25);return new V(Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)).multiplyScalar(s).add(e)}return{apply:o,reset:a,get dragging(){return n.drag!==null}}}var Lv=[{key:`helm`,label:`駕駛座`,pos:[-2.74,2.52,0],look:[-1,2.04,0]},{key:`desk`,label:`儀表板`,pos:[-2.2,2.6,-.4],look:[-1.66,2.06,-.64]},{key:`window`,label:`窗邊`,pos:[-2.6,2.6,-.62],look:[-6.6,2.55,-5]},{key:`chart`,label:`海圖桌`,pos:[-2.6,2.72,.4],look:[-3.3,2,.62]}],Rv=[[-2.6,3.05,4.4],[-2.6,2.53,1.6],[-2.6,2.51,.82]],zv=[[-2.6,2.45,0],[-2.6,2.48,-1.2],[-2.3,2.45,-1]],Bv=4.2,Vv=3.6,Hv=1.5,Uv=.45,Wv=.4,Gv=.1,Kv=.04,qv=new V(0,1,0),Jv=e=>new V(...e),Yv=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,Xv=(e,t,n)=>Oe.smoothstep(n,e,t);function Zv(e){return{pos:Jv(Lv[e].pos),look:Jv(Lv[e].look)}}function Qv(e,t){return{pos:new vs(e,!1,`centripetal`),look:new vs(t,!1,`centripetal`)}}function $v({dom:e,pointer:t,hud:n,pick:r,actions:i}){e.addEventListener(`pointermove`,e=>{t.x=e.clientX/innerWidth*2-1,t.y=-(e.clientY/innerHeight)*2+1,t.fresh=!0,n.moveHint(e.clientX,e.clientY)}),e.addEventListener(`click`,e=>{r(e.clientX,e.clientY)&&i.enter()}),window.addEventListener(`keydown`,e=>{if(!(e.ctrlKey||e.metaKey||e.altKey||e.repeat))if(e.key===`Escape`)i.exit();else if(e.key===`e`||e.key===`E`)i.enter();else{let t=Number(e.key);t>=1&&t<=Lv.length&&i.goStation(t-1)}})}function ey({camera:e,boat:t,wheelhouse:n,cabin:r,dom:i,seaHeight:a}){let o={mode:`outside`,u:0,station:0,from:null,to:null,curves:null,reveal:0,revealFrom:1},s={x:0,y:0,fresh:!1},c={pos:new V,look:new V},l=Zv(0),u=new Ml,d=new R,f=[];n.group.traverse(e=>{e.isMesh&&!ty(e,r.group)&&f.push(e)});let p=kv({stations:Lv,onStation:e=>S(e),onExit:()=>x()}),m=Iv(i,()=>o.mode===`inside`||o.mode===`moving`),h=wv(i,()=>o.mode===`outside`),g=!1;function _(t,n){return o.mode===`outside`?(e.updateMatrixWorld(),d.set(t/innerWidth*2-1,-(n/innerHeight)*2+1),u.setFromCamera(d,e),u.intersectObjects(f,!1).length>0):!1}function v(e){i.style.cursor=e?`pointer`:``,p.setHover(e)}function y(e){o.reveal=e,r.setReveal(e)}function b(){if(o.mode!==`outside`)return;o.mode=`entering`,o.u=0,o.station=0;let e=Zv(0);o.curves=Qv([c.pos,...Rv.map(Jv),e.pos],[c.look,...zv.map(Jv),e.look]),v(!1)}function x(){if(o.mode===`outside`||o.mode===`exiting`)return;let e=o.mode===`entering`&&Yv(o.u)<Uv,t={pos:l.pos.clone(),look:l.look.clone()};o.curves=e?Qv([t.pos,c.pos],[t.look,c.look]):Qv([t.pos,...Rv.map(Jv).reverse(),c.pos],[t.look,...zv.map(Jv).reverse(),c.look]),o.mode=`exiting`,o.u=0,o.revealFrom=o.reveal,m.reset(),i.style.cursor=``,p.showBar(!1)}function S(e){o.mode!==`inside`&&o.mode!==`moving`||e===o.station||!Lv[e]||(o.mode=`moving`,o.u=0,o.from={pos:l.pos.clone(),look:l.look.clone()},o.to=Zv(e),o.station=e,m.reset(),p.setActive(e))}$v({dom:i,pointer:s,hud:p,pick:_,actions:{enter:b,exit:x,goStation:S}});function C(){o.mode=`inside`,p.showBar(!0),p.setActive(0),m.dragging||(i.style.cursor=`grab`),g||=(p.toast(`按住拖曳可以環顧四周(方向鍵也可以)`),!0)}function w(e,t){return o.u=Math.min(1,o.u+e/t),Yv(o.u)}function T(e){return{pos:o.curves.pos.getPointAt(e),look:o.curves.look.getPointAt(e)}}function E(e){let t=w(e,Bv);return y(Xv(.04,.4,t)),o.u>=1&&C(),{pose:T(t),inside:Xv(0,.5,t)}}function D(e){let t=w(e,Vv);y(o.revealFrom*(1-Xv(.6,.96,t)));let n=o.revealFrom*(1-Xv(.5,1,t));return o.u>=1&&(o.mode=`outside`,s.fresh=!0),{pose:T(t),inside:n}}function O(e){let t=w(e,Hv),n=o.from.pos.clone().lerp(o.to.pos,t);return n.y+=Math.sin(Math.PI*t)*.05,o.u>=1&&(o.mode=`inside`),{pose:{pos:n,look:o.from.look.clone().lerp(o.to.look,t)},inside:1}}function k(n,r,i){let a=qv.clone().applyQuaternion(t.quaternion).lerp(qv,Wv).normalize();e.up.copy(qv).lerp(a,i).normalize(),e.position.copy(n).applyMatrix4(t.matrixWorld),e.lookAt(r.applyMatrix4(t.matrixWorld));let o=Oe.lerp(Gv,Kv,i);Math.abs(e.near-o)>1e-5&&(e.near=o,e.updateProjectionMatrix())}function A(e,n,r){t.updateMatrixWorld();let i=Tv(e,r,h.update(n));if(i.pos.y=Cv(i.pos.y,a(i.pos.x,i.pos.z,e)),c.pos.copy(t.worldToLocal(i.pos)),c.look.copy(t.worldToLocal(i.look)),o.mode===`outside`){l={pos:c.pos.clone(),look:c.look.clone()},k(c.pos.clone(),c.look.clone(),0),s.fresh&&(s.fresh=!1,v(_((s.x+1)/2*innerWidth,(1-s.y)/2*innerHeight)));return}let u;u=o.mode===`entering`?E(n):o.mode===`exiting`?D(n):o.mode===`moving`?O(n):{pose:Zv(o.station),inside:1};let d=m.apply(u.pose.pos,u.pose.look,n);l={pos:u.pose.pos,look:d.clone()},k(u.pose.pos.clone(),d,u.inside)}return{update:A,get mode(){return o.mode}}}function ty(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}var ny=``+new URL(`flag-yangliu-gM1AtdUz.webp`,import.meta.url).href,ry=.11,iy=1.23,ay=1.25,oy=14e-6,sy=.5,cy=4,ly=[1,.5,.8];function uy(e,t){return e*(Math.max(t,sy)/10)**ry}function dy(e=iy,t=3){return(e-1)/t}function fy(e){let t=e*2654435761%2147483647||1;return()=>(t=t*16807%2147483647)/2147483647}function py(e){let t=e()*2-1,n=e()*Math.PI*2,r=Math.sqrt(1-t*t);return[r*Math.cos(n),t,r*Math.sin(n)]}function my(e,t,n,r,i){let a=[-r[1],r[0]],o=new Float64Array(e),s=new Float64Array(e),c=new Float64Array(e),l=new Float64Array(e),u=new Float64Array(e),d=new Float64Array(e),f=new Float64Array(e),p=0;for(let m=0;m<e;m++){let h=2*Math.PI/(n*(t/n)**(m/(e-1))),g=py(i),_=py(i),v=_[0]*g[0]+_[1]*g[1]+_[2]*g[2];_=[_[0]-v*g[0],_[1]-v*g[1],_[2]-v*g[2]];let y=(_[0]*r[0]+_[2]*r[1])*ly[0],b=(_[0]*a[0]+_[2]*a[1])*ly[2],x=h**(-1/3)/Math.max(1e-6,Math.hypot(..._));o[m]=h*g[0],s[m]=h*g[1],c[m]=h*g[2],l[m]=x*(y*r[0]+b*a[0]),u[m]=x*_[1]*ly[1],d[m]=x*(y*r[1]+b*a[1]),f[m]=i()*Math.PI*2,p+=(x*y)**2/2}let m=1/Math.sqrt(p);for(let t=0;t<e;t++)l[t]*=m,u[t]*=m,d[t]*=m;return{count:e,kx:o,ky:s,kz:c,ex:l,ey:u,ez:d,phase:f}}function hy({u10:e,dir:t,drift:n,seed:r=1,modes:i=24,lMin:a=.5,lMax:o=120}){let s=Math.hypot(t[0],t[1]),c=[t[0]/s,t[1]/s],l=dy(),u=my(i,a,o,c,fy(r));function d(t,r){let i=uy(e,t);return r[0]=c[0]*i+n[0],r[1]=0,r[2]=c[1]*i+n[1],r}let f=d(cy,[0,0,0]);function p(t,n,r,i,a){d(n,a);let o=l*uy(e,n),s=t-f[0]*i,c=r-f[2]*i,p=0,m=0,h=0;for(let e=0;e<u.count;e++){let t=Math.sin(u.kx[e]*s+u.ky[e]*n+u.kz[e]*c+u.phase[e]);p+=u.ex[e]*t,m+=u.ey[e]*t,h+=u.ez[e]*t}return a[0]+=o*p,a[1]+=o*m,a[2]+=o*h,a}return{meanAt:d,sample:p,intensity:l}}var gy=.136,_y=.5,vy=1e3,yy=.072,by=1.17,xy={strouhalL:.55,waveSpeed:1,ampRatio:.3},Sy=.6,Cy=1,wy=[.01,2],Ty=(e,t)=>e*(1+t),Ey=(e,t)=>vy*(e/1e3/3600)*t,Dy=e=>.074*Math.max(e,1e4)**-.2,Oy=e=>6*yy/(vy*e*e);function ky(){return{theta:0,gain:.3,flow:[-1,0,0],speed:0,latMean:0,latVar:0,drag:0}}var Ay=Ey(50,9);function jy(e,t,n){let r=e.poleMid*3,i=e.air[r]-e.vel[r],a=e.air[r+1]-e.vel[r+1],o=e.air[r+2]-e.vel[r+2],s=Math.sqrt(i*i+a*a+o*o);if(t.speed=s,s<1e-6)return;let c=Math.min(1,n/.5),l=t.flow;l[0]+=(i/s-l[0])*c,l[1]+=(a/s-l[1])*c,l[2]+=(o/s-l[2])*c;let u=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]);l[0]/=u,l[1]/=u,l[2]/=u}function My(e,t,n,r){let{pos:i,vel:a,air:o,force:s,tris:c,arc:l}=e;s.fill(0),jy(e,t,n);let u=t.speed;t.theta+=2*Math.PI*(xy.strouhalL*u/e.fly)*n;let d=xy.waveSpeed*e.fly/xy.strouhalL,f=2*Dy(u*e.fly/oy),p=.5*ay,m=t.flow,h=0;for(let e=0;e<c.length;e+=3){let n=c[e]*3,u=c[e+1]*3,g=c[e+2]*3,_=i[u]-i[n],v=i[u+1]-i[n+1],y=i[u+2]-i[n+2],b=i[g]-i[n],x=i[g+1]-i[n+1],S=i[g+2]-i[n+2],C=v*S-y*x,w=y*b-_*S,T=_*x-v*b,E=Math.sqrt(C*C+w*w+T*T);if(E<1e-12)continue;let D=E/2;C/=E,w/=E,T/=E;let O=(o[n]+o[u]+o[g]-a[n]-a[u]-a[g])/3,k=(o[n+1]+o[u+1]+o[g+1]-a[n+1]-a[u+1]-a[g+1])/3,A=(o[n+2]+o[u+2]+o[g+2]-a[n+2]-a[u+2]-a[g+2])/3,j=O*C+k*w+A*T,M=O-j*C,N=k-j*w,ee=A-j*T,te=Math.sqrt(M*M+N*N+ee*ee),ne=p*by*Math.abs(j)*j;if(r){let n=(l[c[e]]+l[c[e+1]]+l[c[e+2]])/3,r=p*(O*O+k*k+A*A);ne+=t.gain*r*Math.sin(t.theta-2*Math.PI*n/d)}let re=p*f*te,ie=(ne*C+re*M)*D,ae=(ne*w+re*N)*D-Ay*Math.abs(w)*D,oe=(ne*T+re*ee)*D;h+=ie*m[0]+ae*m[1]+oe*m[2];let se=ie/3,ce=ae/3,le=oe/3;s[n]+=se,s[n+1]+=ce,s[n+2]+=le,s[u]+=se,s[u+1]+=ce,s[u+2]+=le,s[g]+=se,s[g+1]+=ce,s[g+2]+=le}let g=p*u*u*e.hoist*e.fly;g>1e-6&&(t.drag+=(h/g-t.drag)*Math.min(1,n/Cy))}function Ny(e,t,n,r){let{pos:i,pins:a}=e,o=(e.rows-1)*3,s=a[0]-a[o],c=a[1]-a[o+1],l=a[2]-a[o+2],u=t.flow,d=c*u[2]-l*u[1],f=l*u[0]-s*u[2],p=s*u[1]-c*u[0],m=Math.sqrt(d*d+f*f+p*p)||1;d/=m,f/=m,p/=m;let h=e.tipIndex*3,g=e.poleMid*3,_=(i[h]-i[g])*d+(i[h+1]-i[g+1])*f+(i[h+2]-i[g+2])*p,v=Math.min(1,n/Cy);t.latMean+=(_-t.latMean)*v,t.latVar+=((_-t.latMean)**2-t.latVar)*v;let y=Math.sqrt(2*t.latVar);if(r){let r=1-y/(xy.ampRatio*e.fly);t.gain=Math.min(wy[1],Math.max(wy[0],t.gain*Math.exp(n*Sy*r)))}return{lateral:_,ampRatio:y/e.fly}}var Py=9.81,Fy=1/480,Iy=32,Ly=2,Ry=4,zy={stretch:0,shear:.05,bend:.04},By=.045;function Vy(e,t,n,r){let i=[],a=(e,n)=>e*t+n,o=(e,t,n,r,a=!1)=>i.push({a:e,b:t,rest:n,compliance:r,structural:a}),s=Math.hypot(n,r);for(let i=0;i<e;i++)for(let c=0;c<t;c++)c+1<t&&o(a(i,c),a(i,c+1),n,zy.stretch,!0),i+1<e&&o(a(i,c),a(i+1,c),r,zy.stretch,!0),i+1<e&&c+1<t&&(o(a(i,c),a(i+1,c+1),s,zy.shear),o(a(i,c+1),a(i+1,c),s,zy.shear)),c+2<t&&o(a(i,c),a(i,c+2),n*2,zy.bend),i+2<e&&o(a(i,c),a(i+2,c),r*2,zy.bend);return{a:Uint32Array.from(i,e=>e.a),b:Uint32Array.from(i,e=>e.b),rest:Float64Array.from(i,e=>e.rest),compliance:Float64Array.from(i,e=>e.compliance),structural:Uint8Array.from(i,e=>+!!e.structural)}}function Hy(e,t){let n=[];for(let r=0;r<e-1;r++)for(let e=0;e<t-1;e++){let i=r*t+e;n.push(i,i+1,i+t,i+1,i+t+1,i+t)}return Uint32Array.from(n)}function Uy({hoist:e,fly:t,rows:n,cols:r,arealDensity:i,pins:a,flyDir:o}){let s=n*r,c=t/(r-1),l=e/(n-1),u=new Float64Array(s*3),d=new Float64Array(s);for(let e=0;e<n;e++)for(let t=0;t<r;t++){let n=e*r+t;for(let r=0;r<3;r++)u[n*3+r]=a[e*3+r]+o[r]*t*c;d[n]=t*c}let f=Hy(n,r),p=new Float64Array(s),m=i*c*l/2/3;for(let e of f)p[e]+=m;return{rows:n,cols:r,hoist:e,fly:t,pos:u,arc:d,tris:f,invMass:p.map((e,t)=>t%r===0?0:1/e),prev:u.slice(),vel:new Float64Array(s*3),air:new Float64Array(s*3),force:new Float64Array(s*3),pins:Float64Array.from(a),constraints:Vy(n,r,c,l),tipIndex:Math.floor(n/2)*r+r-1,poleMid:Math.floor(n/2)*r,aero:ky(),airAge:0,diag:{tipLateral:0,ampRatio:0,dragCoeff:0,gain:0,substeps:0}}}function Wy(e,t){let{pos:n,invMass:r}=e,{a:i,b:a,rest:o,compliance:s}=e.constraints,c=1/(t*t);for(let e=0;e<i.length;e++){let t=i[e]*3,l=a[e]*3,u=r[i[e]],d=r[a[e]],f=u+d;if(f===0)continue;let p=n[t]-n[l],m=n[t+1]-n[l+1],h=n[t+2]-n[l+2],g=Math.sqrt(p*p+m*m+h*h);if(g<1e-9)continue;let _=-(g-o[e])/(f+s[e]*c)/g;n[t]+=u*_*p,n[t+1]+=u*_*m,n[t+2]+=u*_*h,n[l]-=d*_*p,n[l+1]-=d*_*m,n[l+2]-=d*_*h}}function Gy(e){let{pos:t,pins:n,invMass:r,rows:i}=e,a=(i-1)*3,o=n[0]-n[a],s=n[1]-n[a+1],c=n[2]-n[a+2],l=Math.sqrt(o*o+s*s+c*c);o/=l,s/=l,c/=l;for(let e=0;e<r.length;e++){if(r[e]===0)continue;let i=e*3,l=t[i]-n[a],u=t[i+1]-n[a+1],d=t[i+2]-n[a+2],f=l*o+u*s+d*c,p=l-f*o,m=u-f*s,h=d-f*c,g=Math.sqrt(p*p+m*m+h*h);if(g>=By||g<1e-9)continue;let _=By/g-1;t[i]+=p*_,t[i+1]+=m*_,t[i+2]+=h*_}}function Ky(e,t,n){let{pos:r}=e,i=[0,0,0];for(let a=0;a<r.length;a+=3)t(r[a],r[a+1],r[a+2],n,i),e.air[a]=i[0],e.air[a+1]=i[1],e.air[a+2]=i[2]}function qy(e,t,n,r,i){let{pos:a,prev:o,vel:s,force:c,invMass:l,pins:u,cols:d}=e,{pinFrom:f,pinTo:p,air:m,flutter:h}=i;for(let e=0;e<u.length;e++)u[e]=f[e]+(p[e]-f[e])*r;e.airAge++%Ry===0&&Ky(e,m,n),My(e,e.aero,t,h);for(let e=0;e<l.length;e++){let n=e*3;o[n]=a[n],o[n+1]=a[n+1],o[n+2]=a[n+2];let r=l[e];if(r===0){let t=e/d*3;a[n]=u[t],a[n+1]=u[t+1],a[n+2]=u[t+2];continue}s[n]+=t*c[n]*r,s[n+1]+=t*(c[n+1]*r-Py),s[n+2]+=t*c[n+2]*r,a[n]+=t*s[n],a[n+1]+=t*s[n+1],a[n+2]+=t*s[n+2]}for(let n=0;n<Ly;n++)Wy(e,t);Gy(e);for(let e=0;e<a.length;e++)s[e]=(a[e]-o[e])/t;return Ny(e,e.aero,t,h)}function Jy(e,t,n){if(t<=0)return e;let r=Math.min(Iy,Math.ceil(t/Fy)),i=t/r,a={flutter:!0,...n},o={lateral:0,ampRatio:0};for(let s=1;s<=r;s++)o=qy(e,i,n.t-t+s*i,s/r,a);return e.diag={tipLateral:o.lateral,ampRatio:o.ampRatio,dragCoeff:e.aero.drag,gain:e.aero.gain,substeps:r},e}var Yy=500,Xy=.002,Zy=25,Qy=6.5/9.81,$y=1.3,eb=Oy(Xy),tb=vy*Math.PI*Xy**3/6,nb=(e,t)=>e+Math.random()*(t-e);function rb(e,{fogDensity:t,area:n}){let{pos:r,size:i,alpha:a,commit:o,setSize:s}=Ap(e,Yy,{color:new H(11123917).multiplyScalar(.6),fogDensity:t}),c=new Float32Array(Yy*3),l=new Float32Array(Yy),u=50/1e3/3600*vy*n/tb/Zy,d=null,f=null,p=0,m=0,h=[0,0,0];function g(e,t){let n=p;p=(p+1)%Yy;let a=t*3;r.set([e.pos[a],e.pos[a+1],e.pos[a+2]],n*3),c.set([e.vel[a]+nb(-.6,.6),e.vel[a+1]+nb(-.6,.6),e.vel[a+2]+nb(-.6,.6)],n*3),l[n]=$y*nb(.6,1),i[n]=nb(.025,.05)}function _(e,t){let{rows:n,cols:r}=t;d||(d=new Float64Array(n*3),f=new Float64Array(n)),m+=u*e;for(let i=0;i<n;i++){let n=(i*r+r-1)*3,a=t.vel[n]-d[i*3],o=t.vel[n+1]-d[i*3+1],s=t.vel[n+2]-d[i*3+2];f[i]=Math.sqrt(a*a+o*o+s*s)/e,d.set([t.vel[n],t.vel[n+1],t.vel[n+2]],i*3)}for(;m>=1;m--){let e=Math.floor(Math.random()*n);f[e]>eb&&g(t,e*r+r-1)}}function v(e,t){for(let n=0;n<Yy;n++){if(l[n]<=0){a[n]=0;continue}l[n]-=e;let i=n*3;t.meanAt(r[i+1],h),c[i]+=(h[0]-c[i])/Qy*e,c[i+1]+=(-9.81+(h[1]-c[i+1])/Qy)*e,c[i+2]+=(h[2]-c[i+2])/Qy*e,r[i]+=c[i]*e,r[i+1]+=c[i+1]*e,r[i+2]+=c[i+2]*e,a[n]=l[n]>0?.55*Math.min(1,l[n]/.4):0}}function y(e,t,n,r){e>0&&_(e,t),v(e,n),o(r)}return{update:y,setSize:s}}var ib=24,ab=11,ob=.72,sb=new V;function cb(e,t,n){let r=sb;for(let i=0;i<t.length;i+=3)r.set(t[i],t[i+1],t[i+2]).applyMatrix4(e.matrixWorld),n[i]=r.x,n[i+1]=r.y,n[i+2]=r.z;return n}function lb(e){let t=new Pn,n=new Float32Array(ib*ab*2);for(let e=0;e<ib;e++)for(let t=0;t<ab;t++)n.set([1-t/(ab-1),1-e/(ib-1)],(e*ab+t)*2);return t.setAttribute(`position`,new wn(new Float32Array(e.pos),3).setUsage(ne)),t.setAttribute(`uv`,new wn(n,2)),t.setIndex(new wn(e.tris,1)),t.computeVertexNormals(),t}function ub(e){let t=new nl().load(ny);return t.colorSpace=D,t.anisotropy=e.capabilities.getMaxAnisotropy(),new Lc({map:t,color:new H(ob,ob,ob),roughness:.55,clearcoat:.35,clearcoatRoughness:.35,sheen:.4,sheenRoughness:.6,sheenColor:new H(8952234),envMapIntensity:.6,side:2})}function db(e,{boat:t,renderer:n,fogDensity:r}){let i=fp(ib);t.updateMatrixWorld();let a=cb(t,i,new Float64Array(i.length)),o=a.slice(),s=Uy({...dp,rows:ib,cols:ab,pins:a,flyDir:[-1,0,0],arealDensity:Ty(gy,_y)}),c=hy({u10:20,dir:Kl,drift:Jl,seed:11}),l=lb(s),u=new W(l,ub(n));u.frustumCulled=!1,e.add(u);let d=rb(e,{fogDensity:r,area:dp.hoist*dp.fly}),f=l.attributes.position;function p(e,n,r){o.set(a),cb(t,i,a),Jy(s,n,{t:e,pinFrom:o,pinTo:a,air:c.sample}),f.array.set(s.pos),f.needsUpdate=!0,l.computeVertexNormals(),d.update(n,s,c,r)}return{update:p,setSize:d.setSize,cloth:s,mesh:u}}var fb=new So({antialias:!0});fb.setPixelRatio(Math.min(devicePixelRatio,2)),fb.setSize(innerWidth,innerHeight),fb.toneMapping=4,fb.toneMappingExposure=1.15,document.body.appendChild(fb.domElement);var pb=new To,mb=.011;pb.fog=new wo(ph.getHex(),mb);var hb=new lr(52,innerWidth/innerHeight,.1,500);hb.layers.enable(1);var{boltLight:gb,moonDir:_b,moonColor:vb}=Rl(pb),yb=Ul(pb,{moonDir:_b}),{boat:bb,lamps:xb,hullClip:Sb,wheelhouse:Cb,update:wb}=Cp(pb),Tb=lh(pb),Eb=ed(pb,fb,{moonDir:_b,moonColor:vb,hullClip:Sb,shore:Tb.shore}),Db=[...xb,Tb.glint],Ob=Lp(pb,{fogDensity:mb}),kb=qp(pb,{fogDensity:mb,surfaceTextures:Eb.surfaceTextures}),Ab=fh(pb),jb=db(pb,{boat:bb,renderer:fb,fogDensity:mb}),Mb=gh(pb,gb),Nb=jh(),Pb=Dh(fb,pb,hb),Fb=new To;Fb.add(new W(yb.mesh.geometry,yb.material)),pb.environment=new Gr(fb).fromScene(Fb,.04,.1,1e3).texture;var Ib=vv({boat:bb,wheelhouse:Cb,rainMaterial:Ab.material,scene:pb,renderer:fb,camera:hb}),Lb=ey({camera:hb,boat:bb,wheelhouse:Cb,cabin:Ib,dom:fb.domElement,seaHeight:Eb.heightAt});function Rb(){let e=fb.getPixelRatio();hb.aspect=innerWidth/innerHeight,hb.updateProjectionMatrix(),fb.setSize(innerWidth,innerHeight),Pb.setSize(innerWidth,innerHeight),Eb.setSize(innerWidth*e,innerHeight*e),Ob.setSize(innerHeight*e,hb.fov),kb.setSize(innerHeight*e,hb.fov),jb.setSize(innerHeight*e,hb.fov)}Rb(),window.addEventListener(`resize`,Rb);var zb=new vl;function Bb(){requestAnimationFrame(Bb);let e=Math.min(zb.getDelta(),.05),t=zb.elapsedTime;Mh(Nb,bb,t,e,Eb.heightAt),Lb.update(t,e,Nb.heave.x),wb(t),Tb.update(t,hb),Mb.update(t,e);let{flash:n,dir:r}=Mb.state;Ib.update(t,e,Nb,n),jb.update(t,e,n),yb.update(t,n,r),Eb.update(t,e,bb,Db,n,r,Nh(Nb)),Ob.update(e,t,bb,Nb,n),kb.update(t,hb,bb,n),Ab.update(e),Pb.render()}Bb(),new URLSearchParams(location.search).has(`debug`)&&(window.__storm={ocean:Eb,scene:pb,camera:hb,boat:bb,cabin:Ib,cabinView:Lb,renderer:fb,flag:jb});