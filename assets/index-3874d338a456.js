(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _l="174",di={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,cu=1,zf=2,td=1,nd=2,si=3,mi=0,on=1,gn=2,Li=0,Ps=1,lu=2,uu=3,hu=4,Hf=5,Ki=100,Vf=101,Gf=102,Wf=103,Xf=104,qf=200,jf=201,Yf=202,Kf=203,hc=204,dc=205,$f=206,Zf=207,Jf=208,Qf=209,ep=210,tp=211,np=212,ip=213,sp=214,fc=0,pc=1,mc=2,Fs=3,gc=4,_c=5,xc=6,vc=7,id=0,rp=1,op=2,Ii=0,ap=1,cp=2,lp=3,sd=4,up=5,hp=6,dp=7,du="attached",fp="detached",rd=300,Bs=301,ks=302,yc=303,Mc=304,ia=306,zs=1e3,Ci=1001,Xo=1002,Jt=1003,od=1004,_r=1005,xn=1006,Io=1007,li=1008,gi=1009,ad=1010,cd=1011,Dr=1012,xl=1013,es=1014,Nn=1015,Gr=1016,vl=1017,yl=1018,Hs=1020,ld=35902,ud=1021,hd=1022,En=1023,dd=1024,fd=1025,Ls=1026,Vs=1027,Ml=1028,Sl=1029,pd=1030,bl=1031,El=1033,Do=33776,No=33777,Uo=33778,Oo=33779,Sc=35840,bc=35841,Ec=35842,Tc=35843,wc=36196,Ac=37492,Rc=37496,Cc=37808,Pc=37809,Lc=37810,Ic=37811,Dc=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,kc=37818,zc=37819,Hc=37820,Vc=37821,Fo=36492,Gc=36494,Wc=36495,md=36283,Xc=36284,qc=36285,jc=36286,Nr=2300,Ur=2301,_a=2302,fu=2400,pu=2401,mu=2402,pp=2500,mp=0,gd=1,Yc=2,gp=3200,_p=3201,_d=0,xp=1,wi="",Rt="srgb",en="srgb-linear",qo="linear",ft="srgb",as=7680,gu=519,vp=512,yp=513,Mp=514,xd=515,Sp=516,bp=517,Ep=518,Tp=519,Kc=35044,wp=35048,_u="300 es",ui=2e3,jo=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const vr=Math.PI/180,Gs=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Tl(i,e){return(i%e+e)%e}function Ap(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rp(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function Cp(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Pp(i,e=1){return e-Math.abs(Tl(i,e*2)-e)}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Np(i,e){return i+Math.random()*(e-i)}function Up(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(xu=i);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fp(i){return i*vr}function Bp(i){return i*Gs}function kp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ze={DEG2RAD:vr,RAD2DEG:Gs,generateUUID:Tn,clamp:Xe,euclideanModulo:Tl,mapLinear:Ap,inverseLerp:Rp,lerp:yr,damp:Cp,pingpong:Pp,smoothstep:Lp,smootherstep:Ip,randInt:Dp,randFloat:Np,randFloatSpread:Up,seededRandom:Op,degToRad:Fp,radToDeg:Bp,isPowerOfTwo:kp,ceilPowerOfTwo:zp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Vp,normalize:ht,denormalize:In};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],T=s[2],E=s[5],b=s[8];return r[0]=o*_+a*S+c*T,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*b,r[1]=l*_+u*S+h*T,r[4]=l*m+u*y+h*E,r[7]=l*p+u*x+h*b,r[2]=d*_+f*S+g*T,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new We;function vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gp(){const i=Or("canvas");return i.style.display="block",i}const vu={};function ji(i){i in vu||(vu[i]=!0,console.warn(i))}function Wp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Xp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jp(){const i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?qo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:qo,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const nt=jp();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class Yp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Or("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class Lt extends ss{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Ci,s=Ci,r=xn,o=li,a=En,c=gi,l=Lt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Tn(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=rd;Lt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,T=(p+1)/2,E=(u+d)/4,b=(h+_)/4,R=(g+m)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=b/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=R/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Zp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yd extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,p*S);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const x=a*S;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new I,Su=new Et;class Tt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),$r.subVectors(this.max,rr),ls.subVectors(e.a,rr),us.subVectors(e.b,rr),hs.subVectors(e.c,rr),_i.subVectors(us,ls),xi.subVectors(hs,us),zi.subVectors(ls,hs);let t=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!Ma(t,ls,us,hs,$r)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,ls,us,hs,$r))?!1:(Zr.crossVectors(_i,xi),t=[Zr.x,Zr.y,Zr.z],Ma(t,ls,us,hs,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Kr=new Tt,ls=new I,us=new I,hs=new I,_i=new I,xi=new I,zi=new I,rr=new I,$r=new I,Zr=new I,Hi=new I;function Ma(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Qp=new Tt,or=new I,Sa=new I;class qn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Sa)),this.expandByPoint(or.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new I,ba=new I,Jr=new I,vi=new I,Ea=new I,Qr=new I,Ta=new I;class Js{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ba.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=vi.dot(this.direction),c=-vi.dot(Jr),l=vi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ba).addScaledVector(Jr,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),Qr.subVectors(n,e),Ta.crossVectors(Ea,Qr);let o=this.direction.dot(Ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot(Qr.crossVectors(vi,Qr));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(Ta);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),yi.crossVectors(n,ln),yi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),yi.crossVectors(n,ln)),yi.normalize(),eo.crossVectors(ln,yi),s[0]=yi.x,s[4]=eo.x,s[8]=ln.x,s[1]=yi.y,s[5]=eo.y,s[9]=ln.y,s[2]=yi.z,s[6]=eo.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],T=n[15],E=s[0],b=s[4],R=s[8],v=s[12],M=s[1],A=s[5],U=s[9],F=s[13],X=s[2],z=s[6],N=s[10],B=s[14],k=s[3],V=s[7],te=s[11],ie=s[15];return r[0]=o*E+a*M+c*X+l*k,r[4]=o*b+a*A+c*z+l*V,r[8]=o*R+a*U+c*N+l*te,r[12]=o*v+a*F+c*B+l*ie,r[1]=u*E+h*M+d*X+f*k,r[5]=u*b+h*A+d*z+f*V,r[9]=u*R+h*U+d*N+f*te,r[13]=u*v+h*F+d*B+f*ie,r[2]=g*E+_*M+m*X+p*k,r[6]=g*b+_*A+m*z+p*V,r[10]=g*R+_*U+m*N+p*te,r[14]=g*v+_*F+m*B+p*ie,r[3]=S*E+y*M+x*X+T*k,r[7]=S*b+y*A+x*z+T*V,r[11]=S*R+y*U+x*N+T*te,r[15]=S*v+y*F+x*B+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,E=t*S+n*y+s*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=S*b,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*b,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*b,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*b,e[4]=y*b,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*b,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*b,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*b,e[8]=x*b,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=T*b,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*b,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=c*l,y=c*u,x=c*h,T=n.x,E=n.y,b=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+x)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+y)*b,s[9]=(m-S)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const l=1/r,u=1/o,h=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ui){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===ui)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===jo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ui){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===ui)g=(o+r)*h,_=-2*h;else if(a===jo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new I,Cn=new He,em=new I(0,0,0),tm=new I(1,1,1),yi=new I,eo=new I,ln=new I,bu=new He,Eu=new Et;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const Tu=new I,fs=new Et,Qn=new He,to=new I,ar=new I,im=new I,sm=new Et,wu=new I(1,0,0),Au=new I(0,1,0),Ru=new I(0,0,1),Cu={type:"added"},rm={type:"removed"},ps={type:"childadded",child:null},wa={type:"childremoved",child:null};class gt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new I,t=new Xn,n=new Et,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new We}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ar,to,this.up):Qn.lookAt(to,ar,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Qn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new I,ei=new I,Aa=new I,ti=new I,ms=new I,gs=new I,Pu=new I,Ra=new I,Ca=new I,Pa=new I,La=new rt,Ia=new rt,Da=new rt;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),ei.subVectors(n,t),Aa.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ei),c=Pn.dot(Aa),l=ei.dot(ei),u=ei.dot(Aa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,n),gs.subVectors(r,n),Ra.subVectors(e,n);const c=ms.dot(Ra),l=gs.dot(Ra);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,s);const u=ms.dot(Ca),h=gs.dot(Ca);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ms,o);Pa.subVectors(e,r);const f=ms.dot(Pa),g=gs.dot(Pa);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(gs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Pu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Pu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Tl(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Xe(Xt.r*255,0,255))*65536+Math.round(Xe(Xt.g*255,0,255))*256+Math.round(Xe(Xt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Rt){nt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(no);const n=yr(Mi.h,no.h,t),s=yr(Mi.s,no.s,t),r=yr(Mi.l,no.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Fe;Fe.NAMES=Md;let om=0;class Gn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Ps,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,io=new pe;let am=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class Sd extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bd extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cm=0;const Mn=new He,Ua=new gt,_s=new I,un=new Tt,cr=new Tt,Nt=new I;class Bt extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?bd:Sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(un.min,cr.min),un.expandByPoint(Nt),Nt.addVectors(un.max,cr.max),un.expandByPoint(Nt)):(un.expandByPoint(cr.min),un.expandByPoint(cr.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(e,l),Nt.add(_s)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;const l=new I,u=new I,h=new I,d=new pe,f=new pe,g=new pe,_=new I,m=new I;function p(R,v,M){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[R].add(_),a[v].add(_),a[M].add(_),c[R].add(m),c[v].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,v=S.length;R<v;++R){const M=S[R],A=M.start,U=M.count;for(let F=A,X=A+U;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new I,x=new I,T=new I,E=new I;function b(R){T.fromBufferAttribute(s,R),E.copy(T);const v=a[R];y.copy(v),y.sub(T.multiplyScalar(T.dot(v))).normalize(),x.crossVectors(E,v);const A=x.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,A)}for(let R=0,v=S.length;R<v;++R){const M=S[R],A=M.start,U=M.count;for(let F=A,X=A+U;F<X;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lu=new He,Vi=new Js,so=new qn,Iu=new I,ro=new I,oo=new I,ao=new I,Oa=new I,co=new I,Du=new I,lo=new I;class Je extends gt{constructor(e=new Bt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Oa.fromBufferAttribute(h,e),o?co.addScaledVector(Oa,u):co.addScaledVector(Oa.sub(t),u))}t.add(co)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(so.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(so,Iu)===null||Vi.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=y;x<T;x+=3){const E=a.getX(x),b=a.getX(x+1),R=a.getX(x+2);s=uo(this,p,e,n,l,u,h,E,b,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=uo(this,o,e,n,l,u,h,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=y;x<T;x+=3){const E=x,b=x+1,R=x+2;s=uo(this,p,e,n,l,u,h,E,b,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,x=m+2;s=uo(this,o,e,n,l,u,h,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function lm(i,e,t,n,s,r,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:i}}function uo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ro),i.getVertexPosition(c,oo),i.getVertexPosition(l,ao);const u=lm(i,e,t,n,ro,oo,ao,Du);if(u){const h=new I;Dn.getBarycoord(Du,ro,oo,ao,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,c,l,h,new pe)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,c,l,h,new pe)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Dn.getNormal(ro,oo,ao,d.normal),u.face=d,u.barycoord=h}return u}class an extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(_,m,p,S,y,x,T,E,b,R,v){const M=x/b,A=T/R,U=x/2,F=T/2,X=E/2,z=b+1,N=R+1;let B=0,k=0;const V=new I;for(let te=0;te<N;te++){const ie=te*A-F;for(let O=0;O<z;O++){const H=O*M-U;V[_]=H*S,V[m]=ie*y,V[p]=X,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=E>0?1:-1,u.push(V.x,V.y,V.z),h.push(O/b),h.push(1-te/R),B+=1}}for(let te=0;te<R;te++)for(let ie=0;ie<b;ie++){const O=d+ie+z*te,H=d+ie+z*(te+1),D=d+(ie+1)+z*(te+1),q=d+(ie+1)+z*te;c.push(O,H,q),c.push(H,D,q),k+=6}a.addGroup(f,k,v),f+=k,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function um(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ed(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const hm={clone:Ws,merge:$t};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Td extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new I,Nu=new pe,Uu=new pe;class Zt extends Td{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Uu),t.subVectors(Uu,Nu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,vs=1;class pm extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(xs,vs,e,t);s.layers=this.layers,this.add(s);const r=new Zt(xs,vs,e,t);r.layers=this.layers,this.add(r);const o=new Zt(xs,vs,e,t);o.layers=this.layers,this.add(o);const a=new Zt(xs,vs,e,t);a.layers=this.layers,this.add(a);const c=new Zt(xs,vs,e,t);c.layers=this.layers,this.add(c);const l=new Zt(xs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wd extends Lt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mm extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new Ni({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Li});r.uniforms.tEquirect.value=t;const o=new Je(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=xn),new pm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ct extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _m extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new I;class Rl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ou=new I,Fu=new rt,Bu=new rt,vm=new I,ku=new He,ho=new I,Ba=new qn,zu=new He,ka=new Js;class ym extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=du,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(s),e.ray.intersectsSphere(Ba)!==!1&&(zu.copy(s).invert(),ka.copy(e.ray).applyMatrix4(zu),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===du?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Fu.fromBufferAttribute(s.attributes.skinIndex,e),Bu.fromBufferAttribute(s.attributes.skinWeight,e),Ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Bu.getComponent(r);if(o!==0){const a=Fu.getComponent(r);ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vm.copy(Ou).applyMatrix4(ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ad extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rd extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Jt,u=Jt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new He,Mm=new He;class Cl{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Mm;Hu.multiplyMatrices(a,t[r]),Hu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rd(t,e,e,En,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ad),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class $c extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new He,Vu=new He,fo=[],Gu=new Tt,Sm=new He,lr=new Je,ur=new qn;class Cd extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Gu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Gu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),ur.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Vu.multiplyMatrices(n,ys),lr.matrixWorld=Vu,lr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const c=fo[o];c.instanceId=r,c.object=this,t.push(c)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rd(new Float32Array(s*this.count),s,this.count,Ml,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new I,bm=new I,Em=new We;class mn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=za.subVectors(n,t).cross(bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Em.getNormalMatrix(e),s=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new qn,po=new I;class Pl{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+u,m+g,x+S).normalize(),n[3].setComponents(c-o,d-u,m-g,x-S).normalize(),n[4].setComponents(c-a,d-h,m-_,x-y).normalize(),t===ui)n[5].setComponents(c+a,d+h,m+_,x+y).normalize();else if(t===jo)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sa extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new I,Ko=new I,Wu=new He,hr=new Js,mo=new qn,Ha=new I,Xu=new I;class Ll extends gt{constructor(e=new Bt,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Yo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Yo.distanceTo(Ko);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Wu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),S=u.getX(_+1),y=go(this,e,hr,c,p,S,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=go(this,e,hr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=go(this,e,hr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=go(this,e,hr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Yo.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),t.distanceSqToSegment(Yo,Ko,Ha,Xu)>n)return;Ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:Xu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const qu=new I,ju=new I;class Pd extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qu.fromBufferAttribute(t,s),ju.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qu.distanceTo(ju);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ld extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Id extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new He,Zc=new Js,_o=new qn,xo=new I;class Tm extends gt{constructor(e=new Bt,t=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Yu.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);xo.fromBufferAttribute(h,m),Ku(xo,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)xo.fromBufferAttribute(h,g),Ku(xo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ku(i,e,t,n,s,r,o){const a=Zc.distanceSqToPoint(i);if(a<t){const c=new I;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dd extends Lt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nd extends Lt{constructor(e,t,n,s,r,o,a,c,l,u=Ls){if(u!==Ls&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ls&&(n=es),n===void 0&&u===Vs&&(n=Hs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=c!==void 0?c:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new pe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new He;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Il extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wm extends Il{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const vo=new I,Va=new Dl,Ga=new Dl,Wa=new Dl;class Ud extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),l=vo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Va.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Ga.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Wa.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ga.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Wa.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Va.calc(c),Ga.calc(c),Wa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $u(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Am(i,e){const t=1-i;return t*t*e}function Rm(i,e){return 2*(1-i)*i*e}function Cm(i,e){return i*i*e}function Mr(i,e,t,n){return Am(i,e)+Rm(i,t)+Cm(i,n)}function Pm(i,e){const t=1-i;return t*t*t*e}function Lm(i,e){const t=1-i;return 3*t*t*i*e}function Im(i,e){return 3*(1-i)*i*i*e}function Dm(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return Pm(i,e)+Lm(i,t)+Im(i,n)+Dm(i,s)}class Od extends Fn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nm extends Fn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y),Sr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends Fn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Um extends Fn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends Fn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends Fn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y),Mr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set($u(a,c.x,l.x,u.x,h.x),$u(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:wm,CatmullRomCurve3:Ud,CubicBezierCurve:Od,CubicBezierCurve3:Nm,EllipseCurve:Il,LineCurve:Fd,LineCurve3:Um,QuadraticBezierCurve:Bd,QuadraticBezierCurve3:kd,SplineCurve:zd});class Om extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new $o[s.type]().fromJSON(s))}return this}}class Fr extends Om{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Bd(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Od(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Il(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qs extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function S(){const x=new I,T=new I;let E=0;const b=(t-e)/n;for(let R=0;R<=r;R++){const v=[],M=R/r,A=M*(t-e)+e;for(let U=0;U<=s;U++){const F=U/s,X=F*c+a,z=Math.sin(X),N=Math.cos(X);T.x=A*z,T.y=-M*n+m,T.z=A*N,h.push(T.x,T.y,T.z),x.set(z,b,N).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),v.push(g++)}_.push(v)}for(let R=0;R<s;R++)for(let v=0;v<r;v++){const M=_[v][R],A=_[v+1][R],U=_[v+1][R+1],F=_[v][R+1];(e>0||v!==0)&&(u.push(M,A,F),E+=3),(t>0||v!==r-1)&&(u.push(A,U,F),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){const T=g,E=new pe,b=new I;let R=0;const v=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const X=U/s*c+a,z=Math.cos(X),N=Math.sin(X);b.x=v*N,b.y=m*M,b.z=v*z,h.push(b.x,b.y,b.z),d.push(0,M,0),E.x=z*.5+.5,E.y=N*.5*M+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){const F=T+U,X=A+U;x===!0?u.push(X,X+1,F):u.push(X+1,X,F),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nl extends Qs{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ul extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new I,x=new I,T=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],x),f(t[E+2],T),c(y,x,T,S)}function c(S,y,x,T){const E=T+1,b=[];for(let R=0;R<=E;R++){b[R]=[];const v=S.clone().lerp(x,R/E),M=y.clone().lerp(x,R/E),A=E-R;for(let U=0;U<=A;U++)U===0&&R===E?b[R][U]=v:b[R][U]=v.clone().lerp(M,U/A)}for(let R=0;R<E;R++)for(let v=0;v<2*(E-R)-1;v++){const M=Math.floor(v/2);v%2===0?(d(b[R][M+1]),d(b[R+1][M]),d(b[R][M])):(d(b[R][M+1]),d(b[R+1][M+1]),d(b[R+1][M]))}}function l(S){const y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const S=new I;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const x=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(x,1-T)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],x=o[S+2],T=o[S+4],E=Math.max(y,x,T),b=Math.min(y,x,T);E>.9&&b<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const x=S*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const S=new I,y=new I,x=new I,T=new I,E=new pe,b=new pe,R=new pe;for(let v=0,M=0;v<r.length;v+=9,M+=6){S.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),E.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(S).add(y).add(x).divideScalar(3);const A=m(T);_(E,M+0,S,A),_(b,M+2,y,A),_(R,M+4,x,A)}}function _(S,y,x,T){T<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.vertices,e.indices,e.radius,e.details)}}class Ol extends Fr{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Fr().fromJSON(s))}return this}}class Fm{static triangulate(e,t,n=2){const s=t&&t.length,r=s?t[0]*n:e.length;let o=Hd(e,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,u,h,d,f,g;if(s&&(o=Vm(e,t,o,n)),e.length>80*n){c=u=e[0],l=h=e[1];for(let _=n;_<r;_+=n)d=e[_],f=e[_+1],d<c&&(c=d),f<l&&(l=f),d>u&&(u=d),f>h&&(h=f);g=Math.max(u-c,h-l),g=g!==0?32767/g:0}return Br(o,a,n,c,l,g,0),a}}function Hd(i,e,t,n,s){let r,o;if(s===Qm(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Zu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Zu(r,i[r],i[r+1],o);return o&&ra(o,o.next)&&(zr(o),o=o.next),o}function ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ra(t,t.next)||yt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?km(i,n,s,r):Bm(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),zr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=zm(ns(i),e,t),Br(i,e,t,n,s,r,2)):o===2&&Hm(i,e,t,n,s,r):Br(ns(i),e,t,n,s,r,1);break}}}function Bm(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&As(s,a,r,c,o,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function km(i,e,t,n){const s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Jc(f,g,e,t,n),S=Jc(_,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&As(a,u,c,h,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&As(a,u,c,h,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,c,h,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function zm(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ra(s,r)&&Vd(s,n,n.next,r)&&kr(s,r)&&kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),zr(n),zr(n.next),n=i=r),n=n.next}while(n!==i);return ns(n)}function Hm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$m(o,a)){let c=Gd(o,a);o=ns(o,o.next),c=ns(c,c.next),Br(o,e,t,n,s,r,0),Br(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Vm(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Hd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Km(l));for(s.sort(Gm),r=0;r<s.length;r++)t=Wm(s[r],t);return t}function Gm(i,e){return i.x-e.x}function Wm(i,e){const t=Xm(i,e);if(!t)return e;const n=Gd(t,i);return ns(n,n.next),ns(t,t.next)}function Xm(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),kr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&qm(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function qm(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function jm(i,e,t,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Jc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Km(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function As(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function $m(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Zm(i,e)&&(kr(i,e)&&kr(e,i)&&Jm(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||ra(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ra(i,e){return i.x===e.x&&i.y===e.y}function Vd(i,e,t,n){const s=Mo(yt(i,e,t)),r=Mo(yt(i,e,n)),o=Mo(yt(t,n,i)),a=Mo(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&yo(i,t,e)||r===0&&yo(i,n,e)||o===0&&yo(t,i,n)||a===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mo(i){return i>0?1:i<0?-1:0}function Zm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function kr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Jm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gd(i,e){const t=new Qc(i.i,i.x,i.y),n=new Qc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zu(i,e,t,n){const s=new Qc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class br{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return br.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ju(e),Qu(n,e);let o=e.length;t.forEach(Ju);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Qu(n,t[c]);const a=Fm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ju(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class oa extends Bt{constructor(e=new Ol([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:eg;let y,x=!1,T,E,b,R;p&&(y=p.getSpacedPoints(u),x=!0,d=!1,T=p.computeFrenetFrames(u,!1),E=new I,b=new I,R=new I),d||(m=0,f=0,g=0,_=0);const v=a.extractPoints(l);let M=v.shape;const A=v.holes;if(!br.isClockWise(M)){M=M.reverse();for(let ee=0,se=A.length;ee<se;ee++){const P=A[ee];br.isClockWise(P)&&(A[ee]=P.reverse())}}const F=br.triangulateShape(M,A),X=M;for(let ee=0,se=A.length;ee<se;ee++){const P=A[ee];M=M.concat(P)}function z(ee,se,P){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,P)}const N=M.length,B=F.length;function k(ee,se,P){let be,de,xe;const fe=ee.x-se.x,Ie=ee.y-se.y,_e=P.x-ee.x,L=P.y-ee.y,w=fe*fe+Ie*Ie,K=fe*L-Ie*_e;if(Math.abs(K)>Number.EPSILON){const oe=Math.sqrt(w),he=Math.sqrt(_e*_e+L*L),ae=se.x-Ie/oe,Le=se.y+fe/oe,ye=P.x-L/he,we=P.y+_e/he,$e=((ye-ae)*L-(we-Le)*_e)/(fe*L-Ie*_e);be=ae+fe*$e-ee.x,de=Le+Ie*$e-ee.y;const ge=be*be+de*de;if(ge<=2)return new pe(be,de);xe=Math.sqrt(ge/2)}else{let oe=!1;fe>Number.EPSILON?_e>Number.EPSILON&&(oe=!0):fe<-Number.EPSILON?_e<-Number.EPSILON&&(oe=!0):Math.sign(Ie)===Math.sign(L)&&(oe=!0),oe?(be=-Ie,de=fe,xe=Math.sqrt(w)):(be=fe,de=Ie,xe=Math.sqrt(w/2))}return new pe(be/xe,de/xe)}const V=[];for(let ee=0,se=X.length,P=se-1,be=ee+1;ee<se;ee++,P++,be++)P===se&&(P=0),be===se&&(be=0),V[ee]=k(X[ee],X[P],X[be]);const te=[];let ie,O=V.concat();for(let ee=0,se=A.length;ee<se;ee++){const P=A[ee];ie=[];for(let be=0,de=P.length,xe=de-1,fe=be+1;be<de;be++,xe++,fe++)xe===de&&(xe=0),fe===de&&(fe=0),ie[be]=k(P[be],P[xe],P[fe]);te.push(ie),O=O.concat(ie)}for(let ee=0;ee<m;ee++){const se=ee/m,P=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let de=0,xe=X.length;de<xe;de++){const fe=z(X[de],V[de],be);ne(fe.x,fe.y,-P)}for(let de=0,xe=A.length;de<xe;de++){const fe=A[de];ie=te[de];for(let Ie=0,_e=fe.length;Ie<_e;Ie++){const L=z(fe[Ie],ie[Ie],be);ne(L.x,L.y,-P)}}}const H=g+_;for(let ee=0;ee<N;ee++){const se=d?z(M[ee],O[ee],H):M[ee];x?(b.copy(T.normals[0]).multiplyScalar(se.x),E.copy(T.binormals[0]).multiplyScalar(se.y),R.copy(y[0]).add(b).add(E),ne(R.x,R.y,R.z)):ne(se.x,se.y,0)}for(let ee=1;ee<=u;ee++)for(let se=0;se<N;se++){const P=d?z(M[se],O[se],H):M[se];x?(b.copy(T.normals[ee]).multiplyScalar(P.x),E.copy(T.binormals[ee]).multiplyScalar(P.y),R.copy(y[ee]).add(b).add(E),ne(R.x,R.y,R.z)):ne(P.x,P.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){const se=ee/m,P=f*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+_;for(let de=0,xe=X.length;de<xe;de++){const fe=z(X[de],V[de],be);ne(fe.x,fe.y,h+P)}for(let de=0,xe=A.length;de<xe;de++){const fe=A[de];ie=te[de];for(let Ie=0,_e=fe.length;Ie<_e;Ie++){const L=z(fe[Ie],ie[Ie],be);x?ne(L.x,L.y+y[u-1].y,y[u-1].x+P):ne(L.x,L.y,h+P)}}}D(),q();function D(){const ee=s.length/3;if(d){let se=0,P=N*se;for(let be=0;be<B;be++){const de=F[be];ce(de[2]+P,de[1]+P,de[0]+P)}se=u+m*2,P=N*se;for(let be=0;be<B;be++){const de=F[be];ce(de[0]+P,de[1]+P,de[2]+P)}}else{for(let se=0;se<B;se++){const P=F[se];ce(P[2],P[1],P[0])}for(let se=0;se<B;se++){const P=F[se];ce(P[0]+N*u,P[1]+N*u,P[2]+N*u)}}n.addGroup(ee,s.length/3-ee,0)}function q(){const ee=s.length/3;let se=0;$(X,se),se+=X.length;for(let P=0,be=A.length;P<be;P++){const de=A[P];$(de,se),se+=de.length}n.addGroup(ee,s.length/3-ee,1)}function $(ee,se){let P=ee.length;for(;--P>=0;){const be=P;let de=P-1;de<0&&(de=ee.length-1);for(let xe=0,fe=u+m*2;xe<fe;xe++){const Ie=N*xe,_e=N*(xe+1),L=se+be+Ie,w=se+de+Ie,K=se+de+_e,oe=se+be+_e;Q(L,w,K,oe)}}}function ne(ee,se,P){c.push(ee),c.push(se),c.push(P)}function ce(ee,se,P){Y(ee),Y(se),Y(P);const be=s.length/3,de=S.generateTopUV(n,s,be-3,be-2,be-1);ue(de[0]),ue(de[1]),ue(de[2])}function Q(ee,se,P,be){Y(ee),Y(se),Y(be),Y(se),Y(P),Y(be);const de=s.length/3,xe=S.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);ue(xe[0]),ue(xe[1]),ue(xe[3]),ue(xe[1]),ue(xe[2]),ue(xe[3])}function Y(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function ue(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $o[s.type]().fromJSON(s)),new oa(n,e.options)}}const eg={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new pe(r,o),new pe(a,c),new pe(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new pe(o,1-c),new pe(l,1-h),new pe(d,1-g),new pe(_,1-p)]:[new pe(a,1-c),new pe(u,1-h),new pe(f,1-g),new pe(m,1-p)]}};function tg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fl extends Ul{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fl(e.radius,e.detail)}}class rs extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let y=0;y<l;y++){const x=y*h-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,x=S+l*(p+1),T=S+1+l*(p+1),E=S+1+l*p;f.push(y,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class aa extends Bt{constructor(e=new kd(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new pe;let u=new I;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),S(),p()}function m(y){u=e.getPointAt(y/t,u);const x=o.normals[y],T=o.binormals[y];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,R=Math.sin(b),v=-Math.cos(b);c.x=v*x.x+R*T.x,c.y=v*x.y+R*T.y,c.z=v*x.z+R*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const T=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),b=(s+1)*y+x,R=(s+1)*(y-1)+x;g.push(T,E,R),g.push(E,b,R)}}function S(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new aa(new $o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class et extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ng extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function So(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rg(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function eh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Wd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Wr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends Wr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pu:r=e,a=2*t-n;break;case mu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:o=e,c=2*n-t;break;case mu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+S*o[l+T]+y*o[c+T]+x*o[h+T];return r}}class ag extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class cg extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&sg(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Ur;class er extends Yn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Nr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Xd extends Yn{}Xd.prototype.ValueTypeName="color";class Xs extends Yn{}Xs.prototype.ValueTypeName="number";class lg extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Et.slerpFlat(r,0,o,l-a,o,l,c);return r}}class qs extends Yn{InterpolantFactoryMethodLinear(e){return new lg(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Yn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Nr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Yn{}js.prototype.ValueTypeName="vector";class ug{constructor(e="",t=-1,n=[],s=pp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(dg(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=rg(c);c=eh(c,1,u),l=eh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Wd(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(js,f+".position",d,"pos",s),n(qs,f+".quaternion",d,"rot",s),n(js,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return Xd;case"quaternion":return qs;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hg(i.type);if(i.times===void 0){const t=[],n=[];Wd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fg{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const pg=new fg;class nr{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class mg extends Error{constructor(e,t){super(e),this.response=t}}class qd extends nr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ni[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,b=u.length;E<b;E++){const R=u[E];R.onProgress&&R.onProgress(T)}p.enqueue(x),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new mg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Pi.add(e,l);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gg extends nr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Or("img");function c(){u(),Pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class _g extends nr{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,o=new gg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ca extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xg extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new He,th=new I,nh=new I;class Bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends Bl{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yg extends ca{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ih=new He,dr=new I,qa=new I;class Mg extends Bl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class jd extends ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kl extends Td{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sg extends Bl{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Er{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bg extends nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(e,c),r.manager.itemStart(e)}}class Eg extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Hl="\\[\\]\\.:\\/",Tg=new RegExp("["+Hl+"]","g"),Vl="[^"+Hl+"]",wg="[^"+Hl.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",Vl),Rg=/(WCOD+)?/.source.replace("WCOD",wg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Lg=new RegExp("^"+Ag+Rg+Cg+Pg+"$"),Ig=["material","materials","bones","map"];class Dg{constructor(e,t,n){const s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(e){const t=Lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Dg;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const sh=new He;class Yd{constructor(e,t,n=0,s=1/0){this.ray=new Js(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(rh),n}}function rh(i,e){return i.distance-e.distance}function el(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)el(r[o],e,t,!0)}}class oh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ng extends Pd{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Bt;u.setAttribute("position",new vt(c,3)),u.setAttribute("color",new vt(l,3));const h=new sa({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ug extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ah(i,e,t,n){const s=Og(n);switch(t){case ud:return i*e;case dd:return i*e;case fd:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case Sl:return i*e/s.components*s.byteLength;case pd:return i*e*2/s.components*s.byteLength;case bl:return i*e*2/s.components*s.byteLength;case hd:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case El:return i*e*4/s.components*s.byteLength;case Do:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case wc:case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qc:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(i){switch(i){case gi:case ad:return{byteLength:1,components:1};case Dr:case cd:case Gr:return{byteLength:2,components:1};case vl:case yl:return{byteLength:2,components:4};case es:case xl:case Nn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fg(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Jg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a_=`#define PI 3.141592653589793
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
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l_=`vec3 transformedNormal = objectNormal;
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
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T_=`#ifdef USE_GRADIENTMAP
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
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
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
#endif`,O_=`struct PhysicalMaterial {
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
}`,F_=`
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,rx=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,ax=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,ux=`#define TOON
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
}`,hx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Bg,alphahash_pars_fragment:kg,alphamap_fragment:zg,alphamap_pars_fragment:Hg,alphatest_fragment:Vg,alphatest_pars_fragment:Gg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:jg,begin_vertex:Yg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:Zg,bumpmap_pars_fragment:Jg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:s_,color_pars_vertex:r_,color_vertex:o_,common:a_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:l_,displacementmap_pars_vertex:u_,displacementmap_vertex:h_,emissivemap_fragment:d_,emissivemap_pars_fragment:f_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:__,envmap_pars_fragment:x_,envmap_pars_vertex:v_,envmap_physical_pars_fragment:P_,envmap_vertex:y_,fog_vertex:M_,fog_pars_vertex:S_,fog_fragment:b_,fog_pars_fragment:E_,gradientmap_pars_fragment:T_,lightmap_pars_fragment:w_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:L_,lights_toon_pars_fragment:I_,lights_phong_fragment:D_,lights_phong_pars_fragment:N_,lights_physical_fragment:U_,lights_physical_pars_fragment:O_,lights_fragment_begin:F_,lights_fragment_maps:B_,lights_fragment_end:k_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:G_,map_fragment:W_,map_pars_fragment:X_,map_particle_fragment:q_,map_particle_pars_fragment:j_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:K_,morphinstance_vertex:$_,morphcolor_vertex:Z_,morphnormal_vertex:J_,morphtarget_pars_vertex:Q_,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:u0,opaque_fragment:h0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:O0,background_vert:F0,background_frag:B0,backgroundCube_vert:k0,backgroundCube_frag:z0,cube_vert:H0,cube_frag:V0,depth_vert:G0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:j0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:$0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:Q0,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:hx,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},ve={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const bo={r:0,b:0,g:0},Wi=new Xn,_x=new He;function xx(i,e,t,n,s,r,o){const a=new Fe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const T=g(y);T===null?p(a,c):T&&T.isColor&&(p(T,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===ia)?(u===void 0&&(u=new Je(new an(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(Wi)),u.material.toneMapped=nt.getTransfer(T.colorSpace)!==ft,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Je(new rs(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(T.colorSpace)!==ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(bo,Ed(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:S}}function vx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,A,U,F,X){let z=!1;const N=h(F,U,A);r!==N&&(r=N,l(r.object)),z=f(M,F,U,X),z&&g(M,F,U,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(M,A,U,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,A,U){const F=U.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let z=X[A.id];z===void 0&&(z={},X[A.id]=z);let N=z[F];return N===void 0&&(N=d(c()),z[F]=N),N}function d(M){const A=[],U=[],F=[];for(let X=0;X<t;X++)A[X]=0,U[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,A,U,F){const X=r.attributes,z=A.attributes;let N=0;const B=U.getAttributes();for(const k in B)if(B[k].location>=0){const te=X[k];let ie=z[k];if(ie===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(M,A,U,F){const X={},z=A.attributes;let N=0;const B=U.getAttributes();for(const k in B)if(B[k].location>=0){let te=z[k];te===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),X[k]=ie,N++}r.attributes=X,r.attributesNum=N,r.index=F}function _(){const M=r.newAttributes;for(let A=0,U=M.length;A<U;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const U=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;U[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),X[M]!==A&&(i.vertexAttribDivisor(M,A),X[M]=A)}function S(){const M=r.newAttributes,A=r.enabledAttributes;for(let U=0,F=A.length;U<F;U++)A[U]!==M[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function y(M,A,U,F,X,z,N){N===!0?i.vertexAttribIPointer(M,A,U,X,z):i.vertexAttribPointer(M,A,U,F,X,z)}function x(M,A,U,F){_();const X=F.attributes,z=U.getAttributes(),N=A.defaultAttributeValues;for(const B in z){const k=z[B];if(k.location>=0){let V=X[B];if(V===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const te=V.normalized,ie=V.itemSize,O=e.get(V);if(O===void 0)continue;const H=O.buffer,D=O.type,q=O.bytesPerElement,$=D===i.INT||D===i.UNSIGNED_INT||V.gpuType===xl;if(V.isInterleavedBufferAttribute){const ne=V.data,ce=ne.stride,Q=V.offset;if(ne.isInstancedInterleavedBuffer){for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y,ne.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<k.locationSize;Y++)m(k.location+Y);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Y=0;Y<k.locationSize;Y++)y(k.location+Y,ie/k.locationSize,D,te,ce*q,(Q+ie/k.locationSize*Y)*q,$)}else{if(V.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)p(k.location+ne,V.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);i.bindBuffer(i.ARRAY_BUFFER,H);for(let ne=0;ne<k.locationSize;ne++)y(k.location+ne,ie/k.locationSize,D,te,ie*q,ie/k.locationSize*ne*q,$)}}else if(N!==void 0){const te=N[B];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(k.location,te);break;case 3:i.vertexAttrib3fv(k.location,te);break;case 4:i.vertexAttrib4fv(k.location,te);break;default:i.vertexAttrib1fv(k.location,te)}}}}S()}function T(){R();for(const M in n){const A=n[M];for(const U in A){const F=A[U];for(const X in F)u(F[X].object),delete F[X];delete A[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const U in A){const F=A[U];for(const X in F)u(F[X].object),delete F[X];delete A[U]}delete n[M.id]}function b(M){for(const A in n){const U=n[A];if(U[M.id]===void 0)continue;const F=U[M.id];for(const X in F)u(F[X].object),delete F[X];delete U[M.id]}}function R(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function yx(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==En&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Nn&&!R)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function Sx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new mn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,y=S*4;let x=p.clippingState||null;c.value=x,x=u(g,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bx(i){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=Bs:a===Mc&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yc||a===Mc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new mm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Rs=4,ch=[.125,.215,.35,.446,.526,.582],$i=20,ja=new kl,lh=new Fe;let Ya=null,Ka=0,$a=0,Za=!1;const Yi=(1+Math.sqrt(5))/2,Ms=1/Yi,uh=[new I(-Yi,Ms,0),new I(Yi,Ms,0),new I(-Ms,0,Yi),new I(Ms,0,Yi),new I(0,Yi,-Ms),new I(0,Yi,Ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ex=new I;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ex}=r;Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,Ka,$a),this._renderer.xr.enabled=Za,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Gr,format:En,colorSpace:en,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tx(r)),this._blurMaterial=wx(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s,r){const c=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(lh),h.toneMapping=Ii,h.autoClear=!1;const g=new rn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Je(new an,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(lh),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const x=this._cubeSize;Eo(s,y*x,S>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(_,c),h.render(e,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let S=0;for(let b=0;b<$i;++b){const R=b/_,v=Math.exp(-R*R/2);p.push(v),b===0?S+=v:b<m&&(S+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],T=3*x*(s>y-Rs?s-y+Rs:0),E=4*(this._cubeSize-x);Eo(t,T,E,3*x,2*x),c.setRenderTarget(t),c.render(h,ja)}}function Tx(i){const e=[],t=[],n=[];let s=i;const r=i-Rs+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Rs?c=ch[o-i+Rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,R=E>2?0:-1,v=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];S.set(v,_*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const T=new Bt;T.setAttribute("position",new Qt(S,_)),T.setAttribute("uv",new Qt(y,m)),T.setAttribute("faceIndex",new Qt(x,p)),e.push(T),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){const n=new ts(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wx(i,e,t){const n=new Float32Array($i),s=new I(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function fh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ph(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function Ax(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yc||c===Mc,u=c===Bs||c===ks;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new hh(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new hh(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cx(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,x=S.length;y<x;y+=3){const T=S[y+0],E=S[y+1],b=S[y+2];d.push(T,E,E,b,b,T)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const T=y+0,E=y+1,b=y+2;d.push(T,E,E,b,b,T)}}else return;const m=new(vd(d)?bd:Sd)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Px(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ix(i,e,t){const n=new WeakMap,s=new rt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*E*4*h),R=new yd(b,T,E,h);R.type=Nn,R.needsUpdate=!0;const v=x*4;for(let A=0;A<h;A++){const U=p[A],F=S[A],X=y[A],z=T*E*4*A;for(let N=0;N<U.count;N++){const B=N*v;g===!0&&(s.fromBufferAttribute(U,N),b[z+B+0]=s.x,b[z+B+1]=s.y,b[z+B+2]=s.z,b[z+B+3]=0),_===!0&&(s.fromBufferAttribute(F,N),b[z+B+4]=s.x,b[z+B+5]=s.y,b[z+B+6]=s.z,b[z+B+7]=0),m===!0&&(s.fromBufferAttribute(X,N),b[z+B+8]=s.x,b[z+B+9]=s.y,b[z+B+10]=s.z,b[z+B+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new pe(T,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dx(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const $d=new Lt,mh=new Nd(1,1),Zd=new yd,Jd=new Jp,Qd=new wd,gh=[],_h=[],xh=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function la(i,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Dt(t,n)}}function kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Dt(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),Dt(t,n)}}function Hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=xd,r=mh):r=$d,t.setTexture2D(e||r,s)}function $x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jd,s)}function Zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function Jx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zd,s)}function Qx(i){switch(i){case 5126:return Nx;case 35664:return Ux;case 35665:return Ox;case 35666:return Fx;case 35674:return Bx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return jx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rv(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ov(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function av(i,e){i.uniform1iv(this.addr,e)}function cv(i,e){i.uniform2iv(this.addr,e)}function lv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function hv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function fv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$d,r[o])}function gv(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jd,r[o])}function _v(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function xv(i,e,t){const n=this.cache,s=e.length,r=la(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zd,r[o])}function vv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Mh(i,e){i.seq.push(e),i.map[e.id]=e}function bv(i,e,t){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(t,l===void 0?new yv(a,i,e):new Mv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Sv(a),Mh(t,h)),t=h}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);bv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ev=37297;let Tv=0;function wv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const bh=new We;function Av(i){nt._getMatrix(bh,nt.workingColorSpace,i);const e=`mat3( ${bh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case qo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(e),o)}else return s}function Rv(i,e){const t=Av(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cv(i,e){let t;switch(e){case ap:t="Linear";break;case cp:t="Reinhard";break;case lp:t="Cineon";break;case sd:t="ACESFilmic";break;case hp:t="AgX";break;case dp:t="Neutral";break;case up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const To=new I;function Pv(){nt.getLuminanceCoefficients(To);const i=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Iv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xr(i){return i!==""}function Th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Nv,Ov)}const Uv=new Map;function Ov(i,e){let t=je[e];if(t===void 0){const n=Uv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(Fv,Bv)}function Bv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case rp:e="ENVMAP_BLENDING_MIX";break;case op:e="ENVMAP_BLENDING_ADD";break}return e}function Gv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kv(t),l=zv(t),u=Hv(t),h=Vv(t),d=Gv(t),f=Lv(t),g=Iv(r),_=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?je.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=tl(o),o=Th(o,t),o=wh(o,t),a=tl(a),a=Th(a,t),a=wh(a,t),o=Ah(o),a=Ah(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,T=Sh(s,s.VERTEX_SHADER,y),E=Sh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(E).trim();let z=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{const B=Eh(s,T,"vertex"),k=Eh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+B+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||X==="")&&(N=!1);N&&(A.diagnostics={runnable:z,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(E),R=new Bo(s,_),v=Dv(s,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Ev)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Yv(i,e,t,n,s,r,o){const a=new Al,c=new qv,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,A,U,F){const X=U.fog,z=F.geometry,N=v.isMeshStandardMaterial?U.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||N),k=B&&B.mapping===ia?B.image.height:null,V=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=te!==void 0?te.length:0;let O=0;z.morphAttributes.position!==void 0&&(O=1),z.morphAttributes.normal!==void 0&&(O=2),z.morphAttributes.color!==void 0&&(O=3);let H,D,q,$;if(V){const lt=Hn[V];H=lt.vertexShader,D=lt.fragmentShader}else H=v.vertexShader,D=v.fragmentShader,c.update(v),q=c.getVertexShaderID(v),$=c.getFragmentShaderID(v);const ne=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Q=F.isInstancedMesh===!0,Y=F.isBatchedMesh===!0,ue=!!v.map,ee=!!v.matcap,se=!!B,P=!!v.aoMap,be=!!v.lightMap,de=!!v.bumpMap,xe=!!v.normalMap,fe=!!v.displacementMap,Ie=!!v.emissiveMap,_e=!!v.metalnessMap,L=!!v.roughnessMap,w=v.anisotropy>0,K=v.clearcoat>0,oe=v.dispersion>0,he=v.iridescence>0,ae=v.sheen>0,Le=v.transmission>0,ye=w&&!!v.anisotropyMap,we=K&&!!v.clearcoatMap,$e=K&&!!v.clearcoatNormalMap,ge=K&&!!v.clearcoatRoughnessMap,Re=he&&!!v.iridescenceMap,Oe=he&&!!v.iridescenceThicknessMap,Be=ae&&!!v.sheenColorMap,Ce=ae&&!!v.sheenRoughnessMap,tt=!!v.specularMap,qe=!!v.specularColorMap,mt=!!v.specularIntensityMap,G=Le&&!!v.transmissionMap,Me=Le&&!!v.thicknessMap,re=!!v.gradientMap,le=!!v.alphaMap,Te=v.alphaTest>0,Ee=!!v.alphaHash,Ge=!!v.extensions;let Mt=Ii;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Gt={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:D,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Y,batchingColor:Y&&F._colorsTexture!==null,instancing:Q,instancingColor:Q&&F.instanceColor!==null,instancingMorph:Q&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:en,alphaToCoverage:!!v.alphaToCoverage,map:ue,matcap:ee,envMap:se,envMapMode:se&&B.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:be,bumpMap:de,normalMap:xe,displacementMap:d&&fe,emissiveMap:Ie,normalMapObjectSpace:xe&&v.normalMapType===xp,normalMapTangentSpace:xe&&v.normalMapType===_d,metalnessMap:_e,roughnessMap:L,anisotropy:w,anisotropyMap:ye,clearcoat:K,clearcoatMap:we,clearcoatNormalMap:$e,clearcoatRoughnessMap:ge,dispersion:oe,iridescence:he,iridescenceMap:Re,iridescenceThicknessMap:Oe,sheen:ae,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:tt,specularColorMap:qe,specularIntensityMap:mt,transmission:Le,transmissionMap:G,thicknessMap:Me,gradientMap:re,opaque:v.transparent===!1&&v.blending===Ps&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:Te,alphaHash:Ee,combine:v.combine,mapUv:ue&&_(v.map.channel),aoMapUv:P&&_(v.aoMap.channel),lightMapUv:be&&_(v.lightMap.channel),bumpMapUv:de&&_(v.bumpMap.channel),normalMapUv:xe&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:Ie&&_(v.emissiveMap.channel),metalnessMapUv:_e&&_(v.metalnessMap.channel),roughnessMapUv:L&&_(v.roughnessMap.channel),anisotropyMapUv:ye&&_(v.anisotropyMap.channel),clearcoatMapUv:we&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:tt&&_(v.specularMap.channel),specularColorMapUv:qe&&_(v.specularColorMap.channel),specularIntensityMapUv:mt&&_(v.specularIntensityMap.channel),transmissionMapUv:G&&_(v.transmissionMap.channel),thicknessMapUv:Me&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ue||le),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ce,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:O,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ue&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Ie&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)M.push(A),M.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(S(M,v),y(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function S(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const M=g[v.type];let A;if(M){const U=Hn[M];A=hm.clone(U.uniforms)}else A=v.uniforms;return A}function T(v,M){let A;for(let U=0,F=u.length;U<F;U++){const X=u[U];if(X.cacheKey===M){A=X,++A.usedTimes;break}}return A===void 0&&(A=new Wv(i,M,v,r),u.push(A)),A}function E(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function b(v){c.remove(v)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:R}}function Kv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||$v),n.length>1&&n.sort(d||Ch),s.length>1&&s.sort(d||Ch)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Zv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ey=0;function ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ny(i){const e=new Jv,t=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new He,o=new He;function a(l){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,x=0,T=0,E=0,b=0;l.sort(ty);for(let v=0,M=l.length;v<M;v++){const A=l[v],U=A.color,F=A.intensity,X=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*F,h+=U.g*F,d+=U.b*F;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],F);b++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=A.shadow.matrix,S++}n.directional[f]=N,f++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(U).multiplyScalar(F),N.distance=X,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[_]=N;const B=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,B.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[_]=B.matrix,A.castShadow){const k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=z,x++}_++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(U).multiplyScalar(F),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const B=A.shadow,k=t.get(A);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(F),N.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=b,n.version=ey++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Lh(i){const e=new ny(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Lh(i),e.set(s,[a])):r>=o.length?(a=new Lh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(i,e,t){let n=new Pl;const s=new pe,r=new pe,o=new rt,a=new ng({depthPacking:_p}),c=new ig,l={},u=t.maxTextureSize,h={[mi]:on,[on]:mi,[gn]:gn},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(E,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Li),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==si&&this.type===si,X=p===si&&this.type!==si;for(let z=0,N=E.length;z<N;z++){const B=E[z],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const V=k.getFrameExtents();if(s.multiply(V),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null||F===!0||X===!0){const ie=this.type!==si?{minFilter:Jt,magFilter:Jt}:{};k.map!==null&&k.map.dispose(),k.map=new ts(s.x,s.y,ie),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const te=k.getViewportCount();for(let ie=0;ie<te;ie++){const O=k.getViewport(ie);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),U.viewport(o),k.updateMatrices(B,ie),n=k.getFrustum(),x(b,R,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===si&&S(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,A)};function S(E,b){const R=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ts(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,R,f,_,null)}function y(E,b,R,v){let M=null;const A=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=M.uuid,F=b.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let z=X[F];z===void 0&&(z=M.clone(),X[F]=z,b.addEventListener("dispose",T)),M=z}if(M.visible=b.visible,M.wireframe=b.wireframe,v===si?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=R}return M}function x(E,b,R,v,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const F=e.update(E),X=E.material;if(Array.isArray(X)){const z=F.groups;for(let N=0,B=z.length;N<B;N++){const k=z[N],V=X[k.materialIndex];if(V&&V.visible){const te=y(E,V,v,M);E.onBeforeShadow(i,E,b,R,F,te,k),i.renderBufferDirect(R,null,F,te,E,k),E.onAfterShadow(i,E,b,R,F,te,k)}}}else if(X.visible){const z=y(E,X,v,M);E.onBeforeShadow(i,E,b,R,F,z,null),i.renderBufferDirect(R,null,F,z,E,null),E.onAfterShadow(i,E,b,R,F,z,null)}}const U=E.children;for(let F=0,X=U.length;F<X;F++)x(U[F],b,R,v,M)}function T(E){E.target.removeEventListener("dispose",T);for(const R in l){const v=l[R],M=E.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const ay={[fc]:pc,[mc]:xc,[gc]:vc,[Fs]:_c,[pc]:fc,[xc]:mc,[vc]:gc,[_c]:Fs};function cy(i,e){function t(){let G=!1;const Me=new rt;let re=null;const le=new rt(0,0,0,0);return{setMask:function(Te){re!==Te&&!G&&(i.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){G=Te},setClear:function(Te,Ee,Ge,Mt,Gt){Gt===!0&&(Te*=Mt,Ee*=Mt,Ge*=Mt),Me.set(Te,Ee,Ge,Mt),le.equals(Me)===!1&&(i.clearColor(Te,Ee,Ge,Mt),le.copy(Me))},reset:function(){G=!1,re=null,le.set(-1,0,0,0)}}}function n(){let G=!1,Me=!1,re=null,le=null,Te=null;return{setReversed:function(Ee){if(Me!==Ee){const Ge=e.get("EXT_clip_control");Me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const Mt=Te;Te=null,this.setClear(Mt)}Me=Ee},getReversed:function(){return Me},setTest:function(Ee){Ee?ne(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Ee){re!==Ee&&!G&&(i.depthMask(Ee),re=Ee)},setFunc:function(Ee){if(Me&&(Ee=ay[Ee]),le!==Ee){switch(Ee){case fc:i.depthFunc(i.NEVER);break;case pc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ee}},setLocked:function(Ee){G=Ee},setClear:function(Ee){Te!==Ee&&(Me&&(Ee=1-Ee),i.clearDepth(Ee),Te=Ee)},reset:function(){G=!1,re=null,le=null,Te=null,Me=!1}}}function s(){let G=!1,Me=null,re=null,le=null,Te=null,Ee=null,Ge=null,Mt=null,Gt=null;return{setTest:function(lt){G||(lt?ne(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!G&&(i.stencilMask(lt),Me=lt)},setFunc:function(lt,wn,$n){(re!==lt||le!==wn||Te!==$n)&&(i.stencilFunc(lt,wn,$n),re=lt,le=wn,Te=$n)},setOp:function(lt,wn,$n){(Ee!==lt||Ge!==wn||Mt!==$n)&&(i.stencilOp(lt,wn,$n),Ee=lt,Ge=wn,Mt=$n)},setLocked:function(lt){G=lt},setClear:function(lt){Gt!==lt&&(i.clearStencil(lt),Gt=lt)},reset:function(){G=!1,Me=null,re=null,le=null,Te=null,Ee=null,Ge=null,Mt=null,Gt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,T=null,E=null,b=new Fe(0,0,0),R=0,v=!1,M=null,A=null,U=null,F=null,X=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=B>=2);let V=null,te={};const ie=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),H=new rt().fromArray(ie),D=new rt().fromArray(O);function q(G,Me,re,le){const Te=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(G,Ee),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Me+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Ee}const $={};$[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Fs),de(!1),xe(cu),ne(i.CULL_FACE),P(Li);function ne(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function ce(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Q(G,Me){return h[G]!==Me?(i.bindFramebuffer(G,Me),h[G]=Me,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function Y(G,Me){let re=f,le=!1;if(G){re=d.get(Me),re===void 0&&(re=[],d.set(Me,re));const Te=G.textures;if(re.length!==Te.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Ge=Te.length;Ee<Ge;Ee++)re[Ee]=i.COLOR_ATTACHMENT0+Ee;re.length=Te.length,le=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,le=!0);le&&i.drawBuffers(re)}function ue(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const ee={[Ki]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};ee[Wf]=i.MIN,ee[Xf]=i.MAX;const se={[qf]:i.ZERO,[jf]:i.ONE,[Yf]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Qf]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function P(G,Me,re,le,Te,Ee,Ge,Mt,Gt,lt){if(G===Li){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),G!==Hf){if(G!==m||lt!==v){if((p!==Ki||x!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,x=Ki),lt)switch(G){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,y=null,T=null,E=null,b.set(0,0,0),R=0,m=G,v=lt}return}Te=Te||Me,Ee=Ee||re,Ge=Ge||le,(Me!==p||Te!==x)&&(i.blendEquationSeparate(ee[Me],ee[Te]),p=Me,x=Te),(re!==S||le!==y||Ee!==T||Ge!==E)&&(i.blendFuncSeparate(se[re],se[le],se[Ee],se[Ge]),S=re,y=le,T=Ee,E=Ge),(Mt.equals(b)===!1||Gt!==R)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Gt),b.copy(Mt),R=Gt),m=G,v=!1}function be(G,Me){G.side===gn?ce(i.CULL_FACE):ne(i.CULL_FACE);let re=G.side===on;Me&&(re=!re),de(re),G.blending===Ps&&G.transparent===!1?P(Li):P(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const le=G.stencilWrite;a.setTest(le),le&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function xe(G){G!==kf?(ne(i.CULL_FACE),G!==A&&(G===cu?i.cullFace(i.BACK):G===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),A=G}function fe(G){G!==U&&(N&&i.lineWidth(G),U=G)}function Ie(G,Me,re){G?(ne(i.POLYGON_OFFSET_FILL),(F!==Me||X!==re)&&(i.polygonOffset(Me,re),F=Me,X=re)):ce(i.POLYGON_OFFSET_FILL)}function _e(G){G?ne(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function L(G){G===void 0&&(G=i.TEXTURE0+z-1),V!==G&&(i.activeTexture(G),V=G)}function w(G,Me,re){re===void 0&&(V===null?re=i.TEXTURE0+z-1:re=V);let le=te[re];le===void 0&&(le={type:void 0,texture:void 0},te[re]=le),(le.type!==G||le.texture!==Me)&&(V!==re&&(i.activeTexture(re),V=re),i.bindTexture(G,Me||$[G]),le.type=G,le.texture=Me)}function K(){const G=te[V];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(G){H.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),H.copy(G))}function Ce(G){D.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),D.copy(G))}function tt(G,Me){let re=l.get(Me);re===void 0&&(re=new WeakMap,l.set(Me,re));let le=re.get(G);le===void 0&&(le=i.getUniformBlockIndex(Me,G.name),re.set(G,le))}function qe(G,Me){const le=l.get(Me).get(G);c.get(Me)!==le&&(i.uniformBlockBinding(Me,le,G.__bindingPointIndex),c.set(Me,le))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,te={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,T=null,E=null,b=new Fe(0,0,0),R=0,v=!1,M=null,A=null,U=null,F=null,X=null,H.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ce,bindFramebuffer:Q,drawBuffers:Y,useProgram:ue,setBlending:P,setMaterial:be,setFlipSided:de,setCullFace:xe,setLineWidth:fe,setPolygonOffset:Ie,setScissorTest:_e,activeTexture:L,bindTexture:w,unbindTexture:K,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:Re,texImage3D:Oe,updateUBOMapping:tt,uniformBlockBinding:qe,texStorage2D:$e,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:Le,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Be,viewport:Ce,reset:mt}}function ly(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return f?new OffscreenCanvas(L,w):Or("canvas")}function _(L,w,K){let oe=1;const he=_e(L);if((he.width>K||he.height>K)&&(oe=K/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(oe*he.width),Le=Math.floor(oe*he.height);h===void 0&&(h=g(ae,Le));const ye=w?g(ae,Le):h;return ye.width=ae,ye.height=Le,ye.getContext("2d").drawImage(L,0,0,ae,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ae+"x"+Le+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,w,K,oe,he=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=w;if(w===i.RED&&(K===i.FLOAT&&(ae=i.R32F),K===i.HALF_FLOAT&&(ae=i.R16F),K===i.UNSIGNED_BYTE&&(ae=i.R8)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.R8UI),K===i.UNSIGNED_SHORT&&(ae=i.R16UI),K===i.UNSIGNED_INT&&(ae=i.R32UI),K===i.BYTE&&(ae=i.R8I),K===i.SHORT&&(ae=i.R16I),K===i.INT&&(ae=i.R32I)),w===i.RG&&(K===i.FLOAT&&(ae=i.RG32F),K===i.HALF_FLOAT&&(ae=i.RG16F),K===i.UNSIGNED_BYTE&&(ae=i.RG8)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RG8UI),K===i.UNSIGNED_SHORT&&(ae=i.RG16UI),K===i.UNSIGNED_INT&&(ae=i.RG32UI),K===i.BYTE&&(ae=i.RG8I),K===i.SHORT&&(ae=i.RG16I),K===i.INT&&(ae=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),K===i.UNSIGNED_INT&&(ae=i.RGB32UI),K===i.BYTE&&(ae=i.RGB8I),K===i.SHORT&&(ae=i.RGB16I),K===i.INT&&(ae=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),K===i.UNSIGNED_INT&&(ae=i.RGBA32UI),K===i.BYTE&&(ae=i.RGBA8I),K===i.SHORT&&(ae=i.RGBA16I),K===i.INT&&(ae=i.RGBA32I)),w===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),w===i.RGBA){const Le=he?qo:nt.getTransfer(oe);K===i.FLOAT&&(ae=i.RGBA32F),K===i.HALF_FLOAT&&(ae=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ae=Le===ft?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(L,w){let K;return L?w===null||w===es||w===Hs?K=i.DEPTH24_STENCIL8:w===Nn?K=i.DEPTH32F_STENCIL8:w===Dr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Hs?K=i.DEPTH_COMPONENT24:w===Nn?K=i.DEPTH_COMPONENT32F:w===Dr&&(K=i.DEPTH_COMPONENT16),K}function T(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jt&&L.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function E(L){const w=L.target;w.removeEventListener("dispose",E),R(w),w.isVideoTexture&&u.delete(w)}function b(L){const w=L.target;w.removeEventListener("dispose",b),M(w)}function R(L){const w=n.get(L);if(w.__webglInit===void 0)return;const K=L.source,oe=d.get(K);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&v(L),Object.keys(oe).length===0&&d.delete(K)}n.remove(L)}function v(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const K=L.source,oe=d.get(K);delete oe[w.__cacheKey],o.memory.textures--}function M(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)i.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else i.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[oe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=L.textures;for(let oe=0,he=K.length;oe<he;oe++){const ae=n.get(K[oe]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(K[oe])}n.remove(L)}let A=0;function U(){A=0}function F(){const L=A;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),A+=1,L}function X(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function z(L,w){const K=n.get(L);if(L.isVideoTexture&&fe(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(K,L,w);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function N(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){D(K,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function B(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){D(K,L,w);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function k(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){q(K,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}const V={[zs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},te={[Jt]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ie={[vp]:i.NEVER,[Tp]:i.ALWAYS,[yp]:i.LESS,[xd]:i.LEQUAL,[Mp]:i.EQUAL,[Ep]:i.GEQUAL,[Sp]:i.GREATER,[bp]:i.NOTEQUAL};function O(L,w){if(w.type===Nn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===Io||w.magFilter===_r||w.magFilter===li||w.minFilter===xn||w.minFilter===Io||w.minFilter===_r||w.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,V[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,V[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,V[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,te[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==_r&&w.minFilter!==li||w.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function H(L,w){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",E));const oe=w.source;let he=d.get(oe);he===void 0&&(he={},d.set(oe,he));const ae=X(w);if(ae!==L.__cacheKey){he[ae]===void 0&&(he[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),he[ae].usedTimes++;const Le=he[L.__cacheKey];Le!==void 0&&(he[L.__cacheKey].usedTimes--,Le.usedTimes===0&&v(w)),L.__cacheKey=ae,L.__webglTexture=he[ae].texture}return K}function D(L,w,K){let oe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=i.TEXTURE_3D);const he=H(L,w),ae=w.source;t.bindTexture(oe,L.__webglTexture,i.TEXTURE0+K);const Le=n.get(ae);if(ae.version!==Le.__version||he===!0){t.activeTexture(i.TEXTURE0+K);const ye=nt.getPrimaries(nt.workingColorSpace),we=w.colorSpace===wi?null:nt.getPrimaries(w.colorSpace),$e=w.colorSpace===wi||ye===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ge=_(w.image,!1,s.maxTextureSize);ge=Ie(w,ge);const Re=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type);let Be=y(w.internalFormat,Re,Oe,w.colorSpace,w.isVideoTexture);O(oe,w);let Ce;const tt=w.mipmaps,qe=w.isVideoTexture!==!0,mt=Le.__version===void 0||he===!0,G=ae.dataReady,Me=T(w,ge);if(w.isDepthTexture)Be=x(w.format===Vs,w.type),mt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Be,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,Re,Oe,null));else if(w.isDataTexture)if(tt.length>0){qe&&mt&&t.texStorage2D(i.TEXTURE_2D,Me,Be,tt[0].width,tt[0].height);for(let re=0,le=tt.length;re<le;re++)Ce=tt[re],qe?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,Re,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,Re,Oe,Ce.data);w.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(i.TEXTURE_2D,Me,Be,ge.width,ge.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Re,Oe,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,Re,Oe,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Be,tt[0].width,tt[0].height,ge.depth);for(let re=0,le=tt.length;re<le;re++)if(Ce=tt[re],w.format!==En)if(Re!==null)if(qe){if(G)if(w.layerUpdates.size>0){const Te=ah(Ce.width,Ce.height,w.format,w.type);for(const Ee of w.layerUpdates){const Ge=Ce.data.subarray(Ee*Te/Ce.data.BYTES_PER_ELEMENT,(Ee+1)*Te/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ee,Ce.width,Ce.height,1,Re,Ge)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,ge.depth,Re,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Be,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,ge.depth,Re,Oe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Be,Ce.width,Ce.height,ge.depth,0,Re,Oe,Ce.data)}else{qe&&mt&&t.texStorage2D(i.TEXTURE_2D,Me,Be,tt[0].width,tt[0].height);for(let re=0,le=tt.length;re<le;re++)Ce=tt[re],w.format!==En?Re!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,Re,Oe,Ce.data):t.texImage2D(i.TEXTURE_2D,re,Be,Ce.width,Ce.height,0,Re,Oe,Ce.data)}else if(w.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Be,ge.width,ge.height,ge.depth),G)if(w.layerUpdates.size>0){const re=ah(ge.width,ge.height,w.format,w.type);for(const le of w.layerUpdates){const Te=ge.data.subarray(le*re/ge.data.BYTES_PER_ELEMENT,(le+1)*re/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ge.width,ge.height,1,Re,Oe,Te)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,Oe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,Re,Oe,ge.data);else if(w.isData3DTexture)qe?(mt&&t.texStorage3D(i.TEXTURE_3D,Me,Be,ge.width,ge.height,ge.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,Oe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,Re,Oe,ge.data);else if(w.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(i.TEXTURE_2D,Me,Be,ge.width,ge.height);else{let re=ge.width,le=ge.height;for(let Te=0;Te<Me;Te++)t.texImage2D(i.TEXTURE_2D,Te,Be,re,le,0,Re,Oe,null),re>>=1,le>>=1}}else if(tt.length>0){if(qe&&mt){const re=_e(tt[0]);t.texStorage2D(i.TEXTURE_2D,Me,Be,re.width,re.height)}for(let re=0,le=tt.length;re<le;re++)Ce=tt[re],qe?G&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Re,Oe,Ce):t.texImage2D(i.TEXTURE_2D,re,Be,Re,Oe,Ce);w.generateMipmaps=!1}else if(qe){if(mt){const re=_e(ge);t.texStorage2D(i.TEXTURE_2D,Me,Be,re.width,re.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Oe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Be,Re,Oe,ge);m(w)&&p(oe),Le.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function q(L,w,K){if(w.image.length!==6)return;const oe=H(L,w),he=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const ae=n.get(he);if(he.version!==ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+K);const Le=nt.getPrimaries(nt.workingColorSpace),ye=w.colorSpace===wi?null:nt.getPrimaries(w.colorSpace),we=w.colorSpace===wi||Le===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!$e&&!ge?Re[le]=_(w.image[le],!0,s.maxCubemapSize):Re[le]=ge?w.image[le].image:w.image[le],Re[le]=Ie(w,Re[le]);const Oe=Re[0],Be=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),tt=y(w.internalFormat,Be,Ce,w.colorSpace),qe=w.isVideoTexture!==!0,mt=ae.__version===void 0||oe===!0,G=he.dataReady;let Me=T(w,Oe);O(i.TEXTURE_CUBE_MAP,w);let re;if($e){qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,tt,Oe.width,Oe.height);for(let le=0;le<6;le++){re=Re[le].mipmaps;for(let Te=0;Te<re.length;Te++){const Ee=re[Te];w.format!==En?Be!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Ee.width,Ee.height,Be,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,tt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Ee.width,Ee.height,Be,Ce,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,tt,Ee.width,Ee.height,0,Be,Ce,Ee.data)}}}else{if(re=w.mipmaps,qe&&mt){re.length>0&&Me++;const le=_e(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,tt,le.width,le.height)}for(let le=0;le<6;le++)if(ge){qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,Be,Ce,Re[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,tt,Re[le].width,Re[le].height,0,Be,Ce,Re[le].data);for(let Te=0;Te<re.length;Te++){const Ge=re[Te].image[le].image;qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Ge.width,Ge.height,Be,Ce,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,tt,Ge.width,Ge.height,0,Be,Ce,Ge.data)}}else{qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,Ce,Re[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,tt,Be,Ce,Re[le]);for(let Te=0;Te<re.length;Te++){const Ee=re[Te];qe?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Be,Ce,Ee.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,tt,Be,Ce,Ee.image[le])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),ae.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function $(L,w,K,oe,he,ae){const Le=r.convert(K.format,K.colorSpace),ye=r.convert(K.type),we=y(K.internalFormat,Le,ye,K.colorSpace),$e=n.get(w),ge=n.get(K);if(ge.__renderTarget=w,!$e.__hasExternalTextures){const Re=Math.max(1,w.width>>ae),Oe=Math.max(1,w.height>>ae);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ae,we,Re,Oe,w.depth,0,Le,ye,null):t.texImage2D(he,ae,we,Re,Oe,0,Le,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,he,ge.__webglTexture,0,de(w)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,he,ge.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(L,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,ae=x(w.stencilBuffer,he),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=de(w);xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ae,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,L)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const ae=oe[he],Le=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),we=y(ae.internalFormat,Le,ye,ae.colorSpace),$e=de(w);K&&xe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,we,w.width,w.height):xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(w.depthTexture);oe.__renderTarget=w,(!oe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const he=oe.__webglTexture,ae=de(w);if(w.depthTexture.format===Ls)xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(w.depthTexture.format===Vs)xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Q(L){const w=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,L)}else if(K){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=i.createRenderbuffer(),ne(w.__webglDepthbuffer[oe],L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ne(w.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(L,w,K){const oe=n.get(L);w!==void 0&&$(oe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Q(L)}function ue(L){const w=L.texture,K=n.get(L),oe=n.get(w);L.addEventListener("dispose",b);const he=L.textures,ae=L.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=w.version,o.memory.textures++),ae){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let we=0;we<w.mipmaps.length;we++)K.__webglFramebuffer[ye][we]=i.createFramebuffer()}else K.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)K.__webglFramebuffer[ye]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ye=0,we=he.length;ye<we;ye++){const $e=n.get(he[ye]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&xe(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const we=he[ye];K.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ye]);const $e=r.convert(we.format,we.colorSpace),ge=r.convert(we.type),Re=y(we.internalFormat,$e,ge,we.colorSpace,L.isXRRenderTarget===!0),Oe=de(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,K.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),O(i.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)$(K.__webglFramebuffer[ye][we],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else $(K.__webglFramebuffer[ye],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ye=0,we=he.length;ye<we;ye++){const $e=he[ye],ge=n.get($e);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),O(i.TEXTURE_2D,$e),$(K.__webglFramebuffer,L,$e,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,oe.__webglTexture),O(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)$(K.__webglFramebuffer[we],L,w,i.COLOR_ATTACHMENT0,ye,we);else $(K.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,ye,0);m(w)&&p(ye),t.unbindTexture()}L.depthBuffer&&Q(L)}function ee(L){const w=L.textures;for(let K=0,oe=w.length;K<oe;K++){const he=w[K];if(m(he)){const ae=S(L),Le=n.get(he).__webglTexture;t.bindTexture(ae,Le),p(ae),t.unbindTexture()}}}const se=[],P=[];function be(L){if(L.samples>0){if(xe(L)===!1){const w=L.textures,K=L.width,oe=L.height;let he=i.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(L),ye=w.length>1;if(ye)for(let we=0;we<w.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const $e=n.get(w[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,K,oe,0,0,K,oe,he,i.NEAREST),c===!0&&(se.length=0,P.length=0,se.push(i.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(se.push(ae),P.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let we=0;we<w.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const $e=n.get(w[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function de(L){return Math.min(s.maxSamples,L.samples)}function xe(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fe(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ie(L,w){const K=L.colorSpace,oe=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==en&&K!==wi&&(nt.getTransfer(K)===ft?(oe!==En||he!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function _e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=Y,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=$,this.useMultisampledRTT=xe}function uy(i,e){function t(n,s=wi){let r;const o=nt.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.BYTE;if(n===cd)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===es)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Gr)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===hd)return i.RGB;if(n===En)return i.RGBA;if(n===dd)return i.LUMINANCE;if(n===fd)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===Do||n===No||n===Uo||n===Oo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===bc||n===Ec||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ac)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Gc||n===Wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===Xc||n===qc||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ni({vertexShader:hy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends ss{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new fy,m=t.getContextAttributes();let p=null,S=null;const y=[],x=[],T=new pe;let E=null;const b=new Zt;b.viewport=new rt;const R=new Zt;R.viewport=new rt;const v=[b,R],M=new Eg;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let q=y[D];return q===void 0&&(q=new Fa,y[D]=q),q.getTargetRaySpace()},this.getControllerGrip=function(D){let q=y[D];return q===void 0&&(q=new Fa,y[D]=q),q.getGripSpace()},this.getHand=function(D){let q=y[D];return q===void 0&&(q=new Fa,y[D]=q),q.getHandSpace()};function F(D){const q=x.indexOf(D.inputSource);if(q===-1)return;const $=y[q];$!==void 0&&($.update(D.inputSource,D.frame,l||o),$.dispatchEvent({type:D.type,data:D.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",z);for(let D=0;D<y.length;D++){const q=x[D];q!==null&&(x[D]=null,y[D].disconnect(q))}A=null,U=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,S=null,H.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ne=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Vs:Ls,ne=m.stencil?Hs:es);const Q={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ts(d.textureWidth,d.textureHeight,{format:En,type:gi,depthTexture:new Nd(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ts(f.framebufferWidth,f.framebufferHeight,{format:En,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(D){for(let q=0;q<D.removed.length;q++){const $=D.removed[q],ne=x.indexOf($);ne>=0&&(x[ne]=null,y[ne].disconnect($))}for(let q=0;q<D.added.length;q++){const $=D.added[q];let ne=x.indexOf($);if(ne===-1){for(let Q=0;Q<y.length;Q++)if(Q>=x.length){x.push($),ne=Q;break}else if(x[Q]===null){x[Q]=$,ne=Q;break}if(ne===-1)break}const ce=y[ne];ce&&ce.connect($)}}const N=new I,B=new I;function k(D,q,$){N.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition($.matrixWorld);const ne=N.distanceTo(B),ce=q.projectionMatrix.elements,Q=$.projectionMatrix.elements,Y=ce[14]/(ce[10]-1),ue=ce[14]/(ce[10]+1),ee=(ce[9]+1)/ce[5],se=(ce[9]-1)/ce[5],P=(ce[8]-1)/ce[0],be=(Q[8]+1)/Q[0],de=Y*P,xe=Y*be,fe=ne/(-P+be),Ie=fe*-P;if(q.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ie),D.translateZ(fe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),ce[10]===-1)D.projectionMatrix.copy(q.projectionMatrix),D.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const _e=Y+fe,L=ue+fe,w=de-Ie,K=xe+(ne-Ie),oe=ee*ue/L*_e,he=se*ue/L*_e;D.projectionMatrix.makePerspective(w,K,oe,he,_e,L),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function V(D,q){q===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(q.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let q=D.near,$=D.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&($=_.depthFar)),M.near=R.near=b.near=q,M.far=R.far=b.far=$,(A!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far),b.layers.mask=D.layers.mask|2,R.layers.mask=D.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;const ne=D.parent,ce=M.cameras;V(M,ne);for(let Q=0;Q<ce.length;Q++)V(ce[Q],ne);ce.length===2?k(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),te(D,M,ne)};function te(D,q,$){$===null?D.matrix.copy(q.matrixWorld):(D.matrix.copy($.matrixWorld),D.matrix.invert(),D.matrix.multiply(q.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(q.projectionMatrix),D.projectionMatrixInverse.copy(q.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Gs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ie=null;function O(D,q){if(u=q.getViewerPose(l||o),g=q,u!==null){const $=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ne=!1;$.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let Y=0;Y<$.length;Y++){const ue=$[Y];let ee=null;if(f!==null)ee=f.getViewport(ue);else{const P=h.getViewSubImage(d,ue);ee=P.viewport,Y===0&&(e.setRenderTargetTextures(S,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(S))}let se=v[Y];se===void 0&&(se=new Zt,se.layers.enable(Y),se.viewport=new rt,v[Y]=se),se.matrix.fromArray(ue.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ue.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ee.x,ee.y,ee.width,ee.height),Y===0&&(M.matrix.copy(se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(se)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Y=h.getDepthInformation($[0]);Y&&Y.isValid&&Y.texture&&_.init(e,Y,s.renderState)}}for(let $=0;$<y.length;$++){const ne=x[$],ce=y[$];ne!==null&&ce!==void 0&&ce.update(ne,q,l||o)}ie&&ie(D,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const H=new Kd;H.setAnimationLoop(O),this.setAnimationLoop=function(D){ie=D},this.dispose=function(){}}}const Xi=new Xn,my=new He;function gy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ed(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(Xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _y(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function l(S,y){let x=s[S.id];x===void 0&&(g(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(S,T);const E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const x=i.createBuffer(),T=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],x=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,b=x.length;E<b;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,M=R.length;v<M;v++){const A=R[v];if(f(A,E,v,T)===!0){const U=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let z=0;z<F.length;z++){const N=F[z],B=_(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,U+X,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,x,T){const E=S.value,b=y+"_"+x;if(T[b]===void 0)return typeof E=="number"||typeof E=="boolean"?T[b]=E:T[b]=E.clone(),!0;{const R=T[b];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[b]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(S){const y=S.uniforms;let x=0;const T=16;for(let b=0,R=y.length;b<R;b++){const v=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,A=v.length;M<A;M++){const U=v[M],F=Array.isArray(U.value)?U.value:[U.value];for(let X=0,z=F.length;X<z;X++){const N=F[X],B=_(N),k=x%T,V=k%B.boundary,te=k+V;x+=V,te!==0&&T-te<B.storage&&(x+=T-te),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=B.storage}}}const E=x%T;return E>0&&(x+=T-E),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class xy{constructor(e={}){const{canvas:t=Gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Ii,this.toneMappingExposure=1;const x=this;let T=!1,E=0,b=0,R=null,v=-1,M=null;const A=new rt,U=new rt;let F=null;const X=new Fe(0);let z=0,N=t.width,B=t.height,k=1,V=null,te=null;const ie=new rt(0,0,N,B),O=new rt(0,0,N,B);let H=!1;const D=new Pl;let q=!1,$=!1;this.transmissionResolutionScale=1;const ne=new He,ce=new He,Q=new I,Y=new rt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function se(){return R===null?k:1}let P=n;function be(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_l}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),P===null){const W="webgl2";if(P=be(W,C),P===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let de,xe,fe,Ie,_e,L,w,K,oe,he,ae,Le,ye,we,$e,ge,Re,Oe,Be,Ce,tt,qe,mt,G;function Me(){de=new Rx(P),de.init(),qe=new uy(P,de),xe=new Mx(P,de,e,qe),fe=new cy(P,de),xe.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),Ie=new Lx(P),_e=new Kv,L=new ly(P,de,fe,_e,xe,qe,Ie),w=new bx(x),K=new Ax(x),oe=new Fg(P),mt=new vx(P,oe),he=new Cx(P,oe,Ie,mt),ae=new Dx(P,he,oe,Ie),Be=new Ix(P,xe,L),ge=new Sx(_e),Le=new Yv(x,w,K,de,xe,mt,ge),ye=new gy(x,_e),we=new Zv,$e=new iy(de),Oe=new xx(x,w,K,fe,ae,f,c),Re=new oy(x,ae,xe),G=new _y(P,Ie,xe,fe),Ce=new yx(P,de,Ie),tt=new Px(P,de,Ie),Ie.programs=Le.programs,x.capabilities=xe,x.extensions=de,x.properties=_e,x.renderLists=we,x.shadowMap=Re,x.state=fe,x.info=Ie}Me();const re=new py(x,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=de.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=de.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(N,B,!1))},this.getSize=function(C){return C.set(N,B)},this.setSize=function(C,W,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,B=W,t.width=Math.floor(C*k),t.height=Math.floor(W*k),Z===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(N*k,B*k).floor()},this.setDrawingBufferSize=function(C,W,Z){N=C,B=W,k=Z,t.width=Math.floor(C*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,W,Z,J){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,W,Z,J),fe.viewport(A.copy(ie).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,W,Z,J){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,W,Z,J),fe.scissor(U.copy(O).multiplyScalar(k).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){fe.setScissorTest(H=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){te=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,Z=!0){let J=0;if(C){let j=!1;if(R!==null){const me=R.texture.format;j=me===El||me===bl||me===Sl}if(j){const me=R.texture.type,Se=me===gi||me===es||me===Dr||me===Hs||me===vl||me===yl,Ae=Oe.getClearColor(),Pe=Oe.getClearAlpha(),ke=Ae.r,ze=Ae.g,Ne=Ae.b;Se?(g[0]=ke,g[1]=ze,g[2]=Ne,g[3]=Pe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=ke,_[1]=ze,_[2]=Ne,_[3]=Pe,P.clearBufferiv(P.COLOR,0,_))}else J|=P.COLOR_BUFFER_BIT}W&&(J|=P.DEPTH_BUFFER_BIT),Z&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Oe.dispose(),we.dispose(),$e.dispose(),_e.dispose(),w.dispose(),K.dispose(),ae.dispose(),mt.dispose(),G.dispose(),Le.dispose(),re.dispose(),re.removeEventListener("sessionstart",tu),re.removeEventListener("sessionend",nu),Bi.stop()};function le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Ie.autoReset,W=Re.enabled,Z=Re.autoUpdate,J=Re.needsUpdate,j=Re.type;Me(),Ie.autoReset=C,Re.enabled=W,Re.autoUpdate=Z,Re.needsUpdate=J,Re.type=j}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ge(C){const W=C.target;W.removeEventListener("dispose",Ge),Mt(W)}function Mt(C){Gt(C),_e.remove(C)}function Gt(C){const W=_e.get(C).programs;W!==void 0&&(W.forEach(function(Z){Le.releaseProgram(Z)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Z,J,j,me){W===null&&(W=ue);const Se=j.isMesh&&j.matrixWorld.determinant()<0,Ae=Df(C,W,Z,J,j);fe.setMaterial(J,Se);let Pe=Z.index,ke=1;if(J.wireframe===!0){if(Pe=he.getWireframeAttribute(Z),Pe===void 0)return;ke=2}const ze=Z.drawRange,Ne=Z.attributes.position;let it=ze.start*ke,ot=(ze.start+ze.count)*ke;me!==null&&(it=Math.max(it,me.start*ke),ot=Math.min(ot,(me.start+me.count)*ke)),Pe!==null?(it=Math.max(it,0),ot=Math.min(ot,Pe.count)):Ne!=null&&(it=Math.max(it,0),ot=Math.min(ot,Ne.count));const wt=ot-it;if(wt<0||wt===1/0)return;mt.setup(j,J,Ae,Z,Pe);let St,st=Ce;if(Pe!==null&&(St=oe.get(Pe),st=tt,st.setIndex(St)),j.isMesh)J.wireframe===!0?(fe.setLineWidth(J.wireframeLinewidth*se()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(j.isLine){let Ue=J.linewidth;Ue===void 0&&(Ue=1),fe.setLineWidth(Ue*se()),j.isLineSegments?st.setMode(P.LINES):j.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else j.isPoints?st.setMode(P.POINTS):j.isSprite&&st.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))st.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ue=j._multiDrawStarts,kt=j._multiDrawCounts,at=j._multiDrawCount,An=Pe?oe.get(Pe).bytesPerElement:1,os=_e.get(J).currentProgram.getUniforms();for(let cn=0;cn<at;cn++)os.setValue(P,"_gl_DrawID",cn),st.render(Ue[cn]/An,kt[cn])}else if(j.isInstancedMesh)st.renderInstances(it,wt,j.count);else if(Z.isInstancedBufferGeometry){const Ue=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,kt=Math.min(Z.instanceCount,Ue);st.renderInstances(it,wt,kt)}else st.render(it,wt)};function lt(C,W,Z){C.transparent===!0&&C.side===gn&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,Yr(C,W,Z),C.side=mi,C.needsUpdate=!0,Yr(C,W,Z),C.side=gn):Yr(C,W,Z)}this.compile=function(C,W,Z=null){Z===null&&(Z=C),p=$e.get(Z),p.init(W),y.push(p),Z.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),C!==Z&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const J=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const me=j.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const Ae=me[Se];lt(Ae,Z,j),J.add(Ae)}else lt(me,Z,j),J.add(me)}),p=y.pop(),J},this.compileAsync=function(C,W,Z=null){const J=this.compile(C,W,Z);return new Promise(j=>{function me(){if(J.forEach(function(Se){_e.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){j(C);return}setTimeout(me,10)}de.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let wn=null;function $n(C){wn&&wn(C)}function tu(){Bi.stop()}function nu(){Bi.start()}const Bi=new Kd;Bi.setAnimationLoop($n),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){wn=C,re.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},re.addEventListener("sessionstart",tu),re.addEventListener("sessionend",nu),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,R),p=$e.get(C,y.length),p.init(W),y.push(p),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),D.setFromProjectionMatrix(ce),$=this.localClippingEnabled,q=ge.init(this.clippingPlanes,$),m=we.get(C,S.length),m.init(),S.push(m),re.enabled===!0&&re.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&ma(me,W,-1/0,x.sortObjects)}ma(C,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(V,te),ee=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ee&&Oe.addToRenderList(m,C),this.info.render.frame++,q===!0&&ge.beginShadows();const Z=p.state.shadowsArray;Re.render(Z,C,W),q===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,j=m.transmissive;if(p.setupLights(),W.isArrayCamera){const me=W.cameras;if(j.length>0)for(let Se=0,Ae=me.length;Se<Ae;Se++){const Pe=me[Se];su(J,j,C,Pe)}ee&&Oe.render(C);for(let Se=0,Ae=me.length;Se<Ae;Se++){const Pe=me[Se];iu(m,C,Pe,Pe.viewport)}}else j.length>0&&su(J,j,C,W),ee&&Oe.render(C),iu(m,C,W);R!==null&&b===0&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(x,C,W),mt.resetDefaultState(),v=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&ge.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ma(C,W,Z,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||D.intersectsSprite(C)){J&&Y.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const Se=ae.update(C),Ae=C.material;Ae.visible&&m.push(C,Se,Ae,Z,Y.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||D.intersectsObject(C))){const Se=ae.update(C),Ae=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Y.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Y.copy(Se.boundingSphere.center)),Y.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Ae)){const Pe=Se.groups;for(let ke=0,ze=Pe.length;ke<ze;ke++){const Ne=Pe[ke],it=Ae[Ne.materialIndex];it&&it.visible&&m.push(C,Se,it,Z,Y.z,Ne)}}else Ae.visible&&m.push(C,Se,Ae,Z,Y.z,null)}}const me=C.children;for(let Se=0,Ae=me.length;Se<Ae;Se++)ma(me[Se],W,Z,J)}function iu(C,W,Z,J){const j=C.opaque,me=C.transmissive,Se=C.transparent;p.setupLightsView(Z),q===!0&&ge.setGlobalState(x.clippingPlanes,Z),J&&fe.viewport(A.copy(J)),j.length>0&&jr(j,W,Z),me.length>0&&jr(me,W,Z),Se.length>0&&jr(Se,W,Z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function su(C,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new ts(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Gr:gi,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[J.id],Se=J.viewport||A;me.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(X),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),ee&&Oe.render(Z);const Pe=x.toneMapping;x.toneMapping=Ii;const ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),q===!0&&ge.setGlobalState(x.clippingPlanes,J),jr(C,Z,J),L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me),de.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ne=0,it=W.length;Ne<it;Ne++){const ot=W[Ne],wt=ot.object,St=ot.geometry,st=ot.material,Ue=ot.group;if(st.side===gn&&wt.layers.test(J.layers)){const kt=st.side;st.side=on,st.needsUpdate=!0,ru(wt,Z,J,St,st,Ue),st.side=kt,st.needsUpdate=!0,ze=!0}}ze===!0&&(L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me))}x.setRenderTarget(Ae),x.setClearColor(X,z),ke!==void 0&&(J.viewport=ke),x.toneMapping=Pe}function jr(C,W,Z){const J=W.isScene===!0?W.overrideMaterial:null;for(let j=0,me=C.length;j<me;j++){const Se=C[j],Ae=Se.object,Pe=Se.geometry,ke=J===null?Se.material:J,ze=Se.group;Ae.layers.test(Z.layers)&&ru(Ae,W,Z,Pe,ke,ze)}}function ru(C,W,Z,J,j,me){C.onBeforeRender(x,W,Z,J,j,me),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(x,W,Z,J,C,me),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=on,j.needsUpdate=!0,x.renderBufferDirect(Z,W,J,j,C,me),j.side=mi,j.needsUpdate=!0,x.renderBufferDirect(Z,W,J,j,C,me),j.side=gn):x.renderBufferDirect(Z,W,J,j,C,me),C.onAfterRender(x,W,Z,J,j,me)}function Yr(C,W,Z){W.isScene!==!0&&(W=ue);const J=_e.get(C),j=p.state.lights,me=p.state.shadowsArray,Se=j.state.version,Ae=Le.getParameters(C,j.state,me,W,Z),Pe=Le.getProgramCacheKey(Ae);let ke=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?K:w).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Ge),ke=new Map,J.programs=ke);let ze=ke.get(Pe);if(ze!==void 0){if(J.currentProgram===ze&&J.lightsStateVersion===Se)return au(C,Ae),ze}else Ae.uniforms=Le.getUniforms(C),C.onBeforeCompile(Ae,x),ze=Le.acquireProgram(Ae,Pe),ke.set(Pe,ze),J.uniforms=Ae.uniforms;const Ne=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=ge.uniform),au(C,Ae),J.needsLights=Uf(C),J.lightsStateVersion=Se,J.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.directionalShadowMap.value=j.state.directionalShadowMap,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotShadowMap.value=j.state.spotShadowMap,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMap.value=j.state.pointShadowMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=ze,J.uniformsList=null,ze}function ou(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Bo.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function au(C,W){const Z=_e.get(C);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Df(C,W,Z,J,j){W.isScene!==!0&&(W=ue),L.resetTextureUnits();const me=W.fog,Se=J.isMeshStandardMaterial?W.environment:null,Ae=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:en,Pe=(J.isMeshStandardMaterial?K:w).get(J.envMap||Se),ke=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ne=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,ot=!!Z.morphAttributes.color;let wt=Ii;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=x.toneMapping);const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,st=St!==void 0?St.length:0,Ue=_e.get(J),kt=p.state.lights;if(q===!0&&($===!0||C!==M)){const Yt=C===M&&J.id===v;ge.setState(J,C,Yt)}let at=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==kt.state.version||Ue.outputColorSpace!==Ae||j.isBatchedMesh&&Ue.batching===!1||!j.isBatchedMesh&&Ue.batching===!0||j.isBatchedMesh&&Ue.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ue.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||j.isInstancedMesh&&Ue.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ue.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ue.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ue.instancingMorph===!1&&j.morphTexture!==null||Ue.envMap!==Pe||J.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ge.numPlanes||Ue.numIntersection!==ge.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==ze||Ue.morphTargets!==Ne||Ue.morphNormals!==it||Ue.morphColors!==ot||Ue.toneMapping!==wt||Ue.morphTargetsCount!==st)&&(at=!0):(at=!0,Ue.__version=J.version);let An=Ue.currentProgram;at===!0&&(An=Yr(J,W,j));let os=!1,cn=!1,sr=!1;const _t=An.getUniforms(),vn=Ue.uniforms;if(fe.useProgram(An.program)&&(os=!0,cn=!0,sr=!0),J.id!==v&&(v=J.id,cn=!0),os||M!==C){fe.buffers.depth.getReversed()?(ne.copy(C.projectionMatrix),Xp(ne),qp(ne),_t.setValue(P,"projectionMatrix",ne)):_t.setValue(P,"projectionMatrix",C.projectionMatrix),_t.setValue(P,"viewMatrix",C.matrixWorldInverse);const tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(P,Q.setFromMatrixPosition(C.matrixWorld)),xe.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_t.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,cn=!0,sr=!0)}if(j.isSkinnedMesh){_t.setOptional(P,j,"bindMatrix"),_t.setOptional(P,j,"bindMatrixInverse");const Yt=j.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),_t.setValue(P,"boneTexture",Yt.boneTexture,L))}j.isBatchedMesh&&(_t.setOptional(P,j,"batchingTexture"),_t.setValue(P,"batchingTexture",j._matricesTexture,L),_t.setOptional(P,j,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",j._indirectTexture,L),_t.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",j._colorsTexture,L));const yn=Z.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Be.update(j,Z,An),(cn||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,_t.setValue(P,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(vn.envMap.value=Pe,vn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(vn.envMapIntensity.value=W.environmentIntensity),cn&&(_t.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&Nf(vn,sr),me&&J.fog===!0&&ye.refreshFogUniforms(vn,me),ye.refreshMaterialUniforms(vn,J,k,B,p.state.transmissionRenderTarget[C.id]),Bo.upload(P,ou(Ue),vn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Bo.upload(P,ou(Ue),vn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_t.setValue(P,"center",j.center),_t.setValue(P,"modelViewMatrix",j.modelViewMatrix),_t.setValue(P,"normalMatrix",j.normalMatrix),_t.setValue(P,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Yt=J.uniformsGroups;for(let tn=0,ga=Yt.length;tn<ga;tn++){const ki=Yt[tn];G.update(ki,An),G.bind(ki,An)}}return An}function Nf(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Uf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,W,Z){_e.get(C.texture).__webglTexture=W,_e.get(C.depthTexture).__webglTexture=Z;const J=_e.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Z=_e.get(C);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const Of=P.createFramebuffer();this.setRenderTarget=function(C,W=0,Z=0){R=C,E=W,b=Z;let J=!0,j=null,me=!1,Se=!1;if(C){const Pe=_e.get(C);if(Pe.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(P.FRAMEBUFFER,null),J=!1;else if(Pe.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Pe.__hasExternalTextures)L.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ne=C.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&_e.has(Ne)&&(C.width!==Ne.image.width||C.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const ze=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?j=ze[W][Z]:j=ze[W],me=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?j=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?j=ze[Z]:j=ze,A.copy(C.viewport),U.copy(C.scissor),F=C.scissorTest}else A.copy(ie).multiplyScalar(k).floor(),U.copy(O).multiplyScalar(k).floor(),F=H;if(Z!==0&&(j=Of),fe.bindFramebuffer(P.FRAMEBUFFER,j)&&J&&fe.drawBuffers(C,j),fe.viewport(A),fe.scissor(U),fe.setScissorTest(F),me){const Pe=_e.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,Z)}else if(Se){const Pe=_e.get(C.texture),ke=W;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.__webglTexture,Z,ke)}else if(C!==null&&Z!==0){const Pe=_e.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,Z)}v=-1},this.readRenderTargetPixels=function(C,W,Z,J,j,me,Se){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){fe.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Pe=C.texture,ke=Pe.format,ze=Pe.type;if(!xe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-j&&P.readPixels(W,Z,J,j,qe.convert(ke),qe.convert(ze),me)}finally{const Pe=R!==null?_e.get(R).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(C,W,Z,J,j,me,Se){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){const Pe=C.texture,ke=Pe.format,ze=Pe.type;if(!xe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-j){fe.bindFramebuffer(P.FRAMEBUFFER,Ae);const Ne=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),P.readPixels(W,Z,J,j,qe.convert(ke),qe.convert(ze),0);const it=R!==null?_e.get(R).__webglFramebuffer:null;fe.bindFramebuffer(P.FRAMEBUFFER,it);const ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wp(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.deleteBuffer(Ne),P.deleteSync(ot),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,Z=0){C.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Z),j=Math.floor(C.image.width*J),me=Math.floor(C.image.height*J),Se=W!==null?W.x:0,Ae=W!==null?W.y:0;L.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Se,Ae,j,me),fe.unbindTexture()};const Ff=P.createFramebuffer(),Bf=P.createFramebuffer();this.copyTextureToTexture=function(C,W,Z=null,J=null,j=0,me=null){C.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],W=arguments[2],me=arguments[3]||0,Z=null),me===null&&(j!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=j,j=0):me=0);let Se,Ae,Pe,ke,ze,Ne,it,ot,wt;const St=C.isCompressedTexture?C.mipmaps[me]:C.image;if(Z!==null)Se=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,ze=Z.min.y,Ne=Z.isBox3?Z.min.z:0;else{const yn=Math.pow(2,-j);Se=Math.floor(St.width*yn),Ae=Math.floor(St.height*yn),C.isDataArrayTexture?Pe=St.depth:C.isData3DTexture?Pe=Math.floor(St.depth*yn):Pe=1,ke=0,ze=0,Ne=0}J!==null?(it=J.x,ot=J.y,wt=J.z):(it=0,ot=0,wt=0);const st=qe.convert(W.format),Ue=qe.convert(W.type);let kt;W.isData3DTexture?(L.setTexture3D(W,0),kt=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),kt=P.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);const at=P.getParameter(P.UNPACK_ROW_LENGTH),An=P.getParameter(P.UNPACK_IMAGE_HEIGHT),os=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),sr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne);const _t=C.isDataArrayTexture||C.isData3DTexture,vn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const yn=_e.get(C),Yt=_e.get(W),tn=_e.get(yn.__renderTarget),ga=_e.get(Yt.__renderTarget);fe.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,ga.__webglFramebuffer);for(let ki=0;ki<Pe;ki++)_t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.get(C).__webglTexture,j,Ne+ki),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.get(W).__webglTexture,me,wt+ki)),P.blitFramebuffer(ke,ze,Se,Ae,it,ot,Se,Ae,P.DEPTH_BUFFER_BIT,P.NEAREST);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||_e.has(C)){const yn=_e.get(C),Yt=_e.get(W);fe.bindFramebuffer(P.READ_FRAMEBUFFER,Ff),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bf);for(let tn=0;tn<Pe;tn++)_t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,j,Ne+tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,j),vn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,me,wt+tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,me),j!==0?P.blitFramebuffer(ke,ze,Se,Ae,it,ot,Se,Ae,P.COLOR_BUFFER_BIT,P.NEAREST):vn?P.copyTexSubImage3D(kt,me,it,ot,wt+tn,ke,ze,Se,Ae):P.copyTexSubImage2D(kt,me,it,ot,ke,ze,Se,Ae);fe.bindFramebuffer(P.READ_FRAMEBUFFER,null),fe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else vn?C.isDataTexture||C.isData3DTexture?P.texSubImage3D(kt,me,it,ot,wt,Se,Ae,Pe,st,Ue,St.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,me,it,ot,wt,Se,Ae,Pe,st,St.data):P.texSubImage3D(kt,me,it,ot,wt,Se,Ae,Pe,st,Ue,St):C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,it,ot,Se,Ae,st,Ue,St.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,it,ot,St.width,St.height,st,St.data):P.texSubImage2D(P.TEXTURE_2D,me,it,ot,Se,Ae,st,Ue,St);P.pixelStorei(P.UNPACK_ROW_LENGTH,at),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,An),P.pixelStorei(P.UNPACK_SKIP_PIXELS,os),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sr),me===0&&W.generateMipmaps&&P.generateMipmap(kt),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Z=null,J=null,j=0){return C.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,Z,J,j)},this.initRenderTarget=function(C){_e.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){E=0,b=0,R=null,fe.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function sn(i,e,t,n,s){const r=new Je(new an(...t),s);return r.name=e,r.position.set(...n),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function vy(i){var r;const e=new et({color:4403258,roughness:.68}),t=(r=globalThis.document)==null?void 0:r.createElement("canvas"),n=t==null?void 0:t.getContext("2d");if(n){t.width=320,t.height=80,n.fillStyle="#702d34",n.fillRect(0,0,320,80),n.strokeStyle="#e99a95",n.lineWidth=3,n.strokeRect(3,3,314,74),n.font='bold 52px "Microsoft YaHei", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillStyle="#fff1e8",n.fillText("次品筐",160,40);const o=new Dd(t);o.colorSpace=Rt,e.color.setHex(16777215),e.map=o}const s=new Je(new rs(.266,.0665),e);s.name="次品筐",s.position.set(0,.634,.161),i.add(s)}function yy(i){const e=new ct;e.name="reject-bin",e.position.set(.18,-.81,.58),i.add(e);const t=new et({color:6385529,roughness:.52,metalness:.52}),n=new et({color:12079435,roughness:.72,metalness:.06}),s=new et({color:14186863,roughness:.66}),r=new et({color:10121318,roughness:.86});sn(e,"reject-bin-floor",[.4,.024,.32],[0,.668,0],r),sn(e,"reject-bin-stand",[.4,.056,.32],[0,.628,0],t);for(const c of[-.163,.163]){for(const l of[-.123,.123])sn(e,"reject-bin-leg",[.033,.6,.033],[c,.3,l],t);sn(e,"reject-bin-crossbrace",[.022,.026,.246],[c,.2,0],t)}sn(e,"reject-bin-back",[.4,.15,.015],[0,.755,-.1525],n),sn(e,"reject-bin-rim-back",[.4,.02,.015],[0,.84,-.1525],s),sn(e,"reject-bin-front",[.4,.05,.015],[0,.705,.1525],n);for(const c of[-.1925,.1925])sn(e,"reject-bin-side",[.015,.055,.29],[c,.7075,0],n),sn(e,"reject-bin-side-rim",[.015,.02,.305],[c,.84,0],s),sn(e,"reject-bin-front-post",[.015,.12,.015],[c,.79,.145],n);vy(e);const o=e.localToWorld(new I(0,.68+.06,0)),a=e.localToWorld(new I(0,.85,0)).y;return{bin:e,deposit:o,rimY:a}}function My(i){const e=new ct;e.name="aubo-reject-grip",e.position.z=.18,i.add(e);const t=new et({color:4347746,metalness:.5,roughness:.5}),n=new et({color:12635088,metalness:.58,roughness:.39}),s=new et({color:2899012,roughness:.84});sn(i,"reject-gripper-crosshead",[.251,.052,.038],[0,0,.035],t);const r=[-1,1].map(a=>{const c=new ct;i.add(c);const l=a<0?"left":"right";sn(c,"reject-guide-"+l,[.024,.046,.063],[a*.02,0,.075],t);const u=sn(c,"reject-finger-"+l,[.016,.034,.12],[a*.021,0,.119],n),h=sn(c,"reject-jaw-"+l,[.016,.044,.043],[a*.008,0,.18],s);return{sign:a,slider:c,rod:u,contact:h}});function o(a,c=1){const l=Ze.lerp(.104,.08,Ze.clamp(a,0,1)),u=Ze.clamp(c,0,1);for(const{sign:h,slider:d,rod:f,contact:g}of r)d.position.x=h*l,g.position.z=.12+.06*u,f.scale.z=(.06+.06*u)/.12,f.position.z=.089+.03*u}return o(0,0),{grip:e,setClosure:o}}const Ye=(i=0,e=0,t=0)=>new I(i,e,t),Hr=Ze.clamp,Pt=Ze.lerp,ut=(i,e,t)=>Ze.smoothstep(i,e,t),Wn=.06,Ds=1.8,Qi=4.4,ef=7.25,wo=9.15,Ao=9.55,Qa=13.55,Tr=6.4,Ss=8.4,wr=9.2,ec=13.6,Sy=new Et().setFromAxisAngle(Ye(1,0,0),-Math.PI/2),Ar=i=>i.getWorldPosition(Ye()),ko=i=>new Tt().setFromObject(i,!0);function zt(i,e,t,n,s){const r=new Je(new an(...t),n);return r.name=e,r.position.copy(s),i.add(r),r}function by(i,e,t){const n=i/2,s=e/2,r=t,o=new Fr;return o.moveTo(n,0),o.lineTo(n,s-r),o.absarc(n-r,s-r,r,0,Math.PI/2),o.lineTo(-n+r,s),o.absarc(-n+r,s-r,r,Math.PI/2,Math.PI),o.lineTo(-n,-s+r),o.absarc(-n+r,-s+r,r,Math.PI,3*Math.PI/2),o.lineTo(n-r,-s),o.absarc(n-r,-s+r,r,3*Math.PI/2,2*Math.PI),o.lineTo(n,0),o}function Ey(i,e,t,n){const s=(a,c,l)=>{const u=new Ol,h=a/2,d=c/2;return u.moveTo(-h+l,-d),u.lineTo(h-l,-d),u.absarc(h-l,-d+l,l,-Math.PI/2,0,!1),u.lineTo(h,d-l),u.absarc(h-l,d-l,l,0,Math.PI/2,!1),u.lineTo(-h+l,d),u.absarc(-h+l,d-l,l,Math.PI/2,Math.PI,!1),u.lineTo(-h,-d+l),u.absarc(-h+l,-d+l,l,Math.PI,3*Math.PI/2,!1),u.closePath(),u},r=s(i,e,t),o=s(i-n*2,e-n*2,Math.max(.08,t-n));return r.holes.push(new Fr(o.getPoints().reverse())),r}const Cs=i=>(i%1+1)%1;function Ty(i,e){const t=c=>{const l=i.getPoint(Cs(c));return(l.x-e.x)**2+(l.y-e.z)**2};let s=0,r=t(0);for(let c=1;c<128;c++){const l=t(c/128);l<r&&(r=l,s=c/128)}let o=s-1/128,a=s+1/128;for(let c=0;c<32;c++){const l=(2*o+a)/3,u=(o+2*a)/3;t(l)<t(u)?a=u:o=l}return Cs((o+a)/2)}function wy(i,e){const t=i.userData.longLoopOptions||{},n=(t.length||4.6)-.36,s=(t.width||2.15)-.36,r=(t.radius||.8)-.18,o=.24,a=.25,c=a+o/2,l=R=>by(n+2*R,s+2*R,r+R),u=new et({color:7702419,roughness:.62,metalness:.55}),h=new Bt;h.setAttribute("position",new vt([-.006,0,-.107,.006,0,-.107,-.006,0,.107,.006,0,-.107,.006,0,.107,-.006,0,.107,.005,0,-.075,.046,0,-.052,.005,0,-.029],3));const d=new rn({color:11322812,side:gn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),f=[0,a,-a].map((R,v)=>{const M=R+o/2,A=new oa(Ey(n+2*M,s+2*M,r+M,o),{depth:.045,bevelEnabled:!1,curveSegments:20});A.rotateX(-Math.PI/2);const U=new Je(A,new et({color:[4288385,5405022,8547920][v],roughness:.82,metalness:.12}));U.name="long-ring-belt-surface-"+v,U.position.y=e-.045,U.receiveShadow=!0,i.add(U);const F=l(R),X=F.getLength(),z=new Cd(h,d,Math.round(X/.49));z.name="long-ring-belt-treads-"+v,z.instanceMatrix.setUsage(wp),U.add(z);const N=new gt,B=new pe,k=new pe;let V=NaN;function te(ie){const O=Cs(ie);if(O!==V){V=O;for(let H=0;H<z.count;H++){const D=O+H/z.count;F.getPoint(Cs(D),B),F.getPoint(Cs(D+1e-5),k),N.position.set(B.x,.046,B.y),N.rotation.y=-Math.atan2(k.y-B.y,k.x-B.x),N.updateMatrix(),z.setMatrixAt(H,N.matrix)}z.instanceMatrix.needsUpdate=!0}}return te(0),{belt:U,pathLength:X,setTravel:te,point(ie,O=Ye()){return F.getPoint(Cs(ie),B),i.localToWorld(O.set(B.x,e+Wn,B.y))},progressAtPoint:ie=>Ty(F,i.worldToLocal(ie.clone()))}}),g=l(0),_=l(c+.012),m=new Fn;m.getPoint=(R,v=Ye())=>{const M=_.getPoint(R);return v.set(M.x,0,M.y)};const p=new aa(m,720,.012,8,!0),S=new Je(p,u);S.name="long-ring-outer-rail",S.position.y=e+.055,S.castShadow=!0,i.add(S);const y=new ct;y.name="long-ring-supports",i.add(y);for(const R of[-n/2+r,0,n/2-r])for(const v of[-1,1]){const M=v*s/2;zt(y,"long-ring-crossmember",[.055,.045,2*c],u,Ye(R,e-.0675,M));for(const A of[-1,1]){const U=e-.09;zt(y,"long-ring-leg",[.05,U,.05],u,Ye(R,U/2,M+A*(c-.05)))}}const x=new ct;x.name="long-ring-dock-bridges",i.add(x);function T(R,v){const M=i.worldToLocal(R.clone()),A=p.getAttribute("position"),U=p.index,F=[];for(let X=0;X<U.count;X+=3){const z=U.getX(X),N=U.getX(X+1),B=U.getX(X+2),k=(A.getX(z)+A.getX(N)+A.getX(B))/3,V=(A.getZ(z)+A.getZ(N)+A.getZ(B))/3;k>M.x&&Math.abs(V-M.z)<v/2||F.push(z,N,B)}if(p.setIndex(F),!x.children.length)for(const X of[-a/2,a/2])zt(x,"dock-seam-plate",[a-o+2e-6,.035,.3],u,Ye(n/2+X,e-.0175,M.z))}let E=null;if(i.userData.proceduralOnly){const R=g.getPoint(t.scanProgress??.1),v=new ct;v.name="integrated-scan-gate",v.position.set(R.x,e,R.y);const M=g.getTangent(t.scanProgress??.1);v.rotation.y=Math.atan2(M.x,M.y);const A=new et({color:4681080,metalness:.62,roughness:.42});zt(v,"integrated-scan-post-a",[.05,.75,.05],A,Ye(-c-.075,.33,0)),zt(v,"integrated-scan-post-b",[.05,.75,.05],A,Ye(c+.075,.33,0)),zt(v,"integrated-scan-header",[2*c+.2,.06,.07],A,Ye(0,.7,0));const U=new rn({color:5301484,transparent:!0,opacity:.36,depthWrite:!1}),F=zt(v,"integrated-scan-beam",[.018,.64,.018],U,Ye(0,.35,0));F.visible=!1,v.userData.beam=F,i.add(v),E={gate:v,beam:F}}const b=f[0];return{lanes:f,laneWidth:o,halfSpan:c,dockRollers:x,rails:S,legs:y,scanner:E,openDockAt:T,belt:b.belt,longRingPoint:b.point,progressAtPoint:b.progressAtPoint,pathLength:b.pathLength}}function Wl(i){i.updateWorldMatrix(!0,!0);const e=[];i.traverse(y=>{const x=y.isMesh&&y.name.match(/NAUO(\d+)/);x&&(e[Number(x[1])]=y)});const t=[2,3,7,4,5,6].map(y=>e[y]);if(t.some(y=>!y))throw new Error("AUBO i5 CAD link mapping incomplete");const n=t.map(y=>i.worldToLocal(Ar(y)));n[5].copy(n[4]).z+=.094;const s=[Ye(0,1,0),Ye(0,0,1),Ye(0,0,1),Ye(0,0,1),Ye(0,1,0),Ye(0,0,1)],r=[],o=Array(6).fill(0);let a=i;for(let y=0;y<t.length;y++){const x=new ct;x.name="aubo-j"+(y+1),x.position.copy(y?n[y].clone().sub(n[y-1]):n[y]),a.add(x),x.attach(t[y]),r.push(x),a=x}const c=new et({color:2705496,metalness:.5});zt(a,"aubo-inspection-camera",[.073,.059,.072],c,Ye(0,0,.036));const l=new Je(new Qs(.019,.019,.008,20),new et({color:6937578,emissive:1529963}));l.name="aubo-lens",l.rotation.x=Math.PI/2,l.position.z=.076,a.add(l);const{grip:u,setClosure:h}=My(a),d=new Je(new Nl(.047,1,18,1,!0),new rn({color:5036775,transparent:!0,opacity:.3,depthWrite:!1,side:gn}));d.name="aubo-inspection-beam",i.add(d);function f(y,x){o[y]=x,r[y].quaternion.setFromAxisAngle(s[y],x)}function g(){for(let y=0;y<r.length;y++)f(y,0);d.visible=!1,h(0,0)}function _(y,x,T,E){const b=i.worldToLocal(y.clone()),R=b.clone().sub(n[0]),v=Math.hypot(R.x,R.z),M=n[3].z-n[0].z,A=Math.atan2(-R.z,R.x)+Math.asin(Hr(M/v,-1,1)),U=Math.sqrt(Math.max(0,v*v-M*M))-.1025,F=b.y-n[1].y+.094+x,X=n[2].y-n[1].y,z=n[3].y-n[2].y,N=-Math.acos(Hr((U*U+F*F-X*X-z*z)/(2*X*z),-1,1)),B=Math.atan2(-U,F)-Math.atan2(z*Math.sin(N),X+z*Math.cos(N));[A,B,N,-Math.PI/2-B-N,Math.PI/2,(A+Math.PI/2)*E].forEach((V,te)=>f(te,T*V))}function m(y,x){if(d.visible=x>0,d.material.opacity=.3*x,!d.visible)return;const T=i.worldToLocal(Ar(l)),E=i.worldToLocal(y.clone());E.y+=Wn,d.position.copy(T).lerp(E,.5),d.scale.y=T.distanceTo(E),d.quaternion.setFromUnitVectors(Ye(0,1,0),T.sub(E).normalize())}function p(y,x,T,E=0,b=0){const R=y.clone();R.y+=Wn+.105,_(R,l.position.z,x,E),h(0,b),m(y,T?1:0)}function S(y,x,T,E){d.visible=!1,_(y,u.position.z,x,1),h(T,E)}return g(),{inspect:p,illuminate:m,grasp:S,grip:u,lens:l,scanGripHeight:Wn+.105+l.position.z-u.position.z,reset:g,setJoint:f,getJointAngles:()=>[...o]}}function Ay(i){const e=i.getObjectByName("belt_surface");i.userData.proceduralOnly&&i.traverse(v=>{v.isMesh&&(v.visible=!1)});const t=e?ko(e):new Tt(Ye(-.1,.78,-.1),Ye(.1,.82,.1)),n=t.getCenter(Ye()),s=t.max.y,r=i.userData.proceduralOnly?wy(i,s):null,o=15311938,a=4372604,c=new et({color:o,roughness:.45}),l=zt(e,"storage-workpiece",[.16,.12,.14],c,Ye());l.castShadow=!0,zt(l,"workpiece-inspection-face",[.095,.005,.068],new et({color:14477292}),Ye(0,.0625,0));const u=c.clone(),h=zt(e,"reject-workpiece",[.16,.12,.14],u,Ye());h.castShadow=!0;const d=l.getObjectByName("workpiece-inspection-face").material;zt(h,"reject-face-main",[.062,.005,.068],d,Ye(-.0165,.0625,0)),zt(h,"reject-face-edge",[.033,.005,.032],d,Ye(.031,.0625,-.018));const f=new Yd;function g(v,M=.033,A=.02){v.updateWorldMatrix(!0,!0),f.set(v.localToWorld(Ye(M,.1,A)),Ye(0,-1,0).transformDirection(v.matrixWorld)),f.far=.1-Wn+.001;const U=f.intersectObject(v,!0)[0];return U?Math.max(0,v.worldToLocal(U.point.clone()).y-Wn):null}const _=v=>g(v)>=.002,m=.84;function p(v){return Ye(n.x+Math.cos(v)*m,s+Wn,n.z+Math.sin(v)*m)}const S=i.getObjectByName("guard_2_0"),y=S.geometry,x=y.getAttribute("position"),T=[],E=Ye(),b=Ye();S.updateWorldMatrix(!0,!1);for(let v=0;v<y.index.count;v+=3){E.set(0,0,0);for(let M=0;M<3;M++)E.add(b.fromBufferAttribute(x,y.index.getX(v+M)));if(E.divideScalar(3).applyMatrix4(S.matrixWorld).sub(n),!(E.x>.99&&Math.abs(Math.atan2(E.z,E.x))<.19))for(let M=0;M<3;M++)T.push(y.index.getX(v+M))}y.setIndex(T);const R=(r==null?void 0:r.belt)??e;return{model:i,belt:R,item:l,reject:h,beltY:s,ringPoint:p,longRingPoint:r==null?void 0:r.longRingPoint,progressAtPoint:r==null?void 0:r.progressAtPoint,longBelt:r==null?void 0:r.belt,scanner:r==null?void 0:r.scanner,longLoop:r,integrated:!!r,cornerHeight:g,hasRaisedCorner:_,setResult:v=>c.color.setHex(v?a:o),setSecondResult(v){h.userData.inspectionResult=v,u.color.setHex(v==="pending"?o:v==="reject"?14965834:a)}}}function Ry(i){const e=i.getObjectByName("crane_travel_x"),t=i.getObjectByName("crane_lift_z"),n=i.getObjectByName("fork_extension_y"),s=i.getObjectByName("slot_3_2"),r=[i.getObjectByName("Telescopic_fork"),i.getObjectByName("Telescopic_fork001")],o=i.getObjectByName("Shelf_deck007"),a=Ar(s);a.y=ko(o).max.y+Wn;const c=new ct;c.name="warehouse-grip",c.position.set(0,r[0].position.y,ko(r[0]).min.z-Ar(n).z+.055),n.add(c);const l=Ar(c),h=ko(i.getObjectByName("Travel_rail")).min.x+.25,d=r.map(m=>m.position.x),f=r.map((m,p)=>{const S=Math.sign(d[p]);return zt(m,"warehouse-jaw-"+p,[.028,.095,.09],new et({color:13272365}),Ye(-S*.025,0,c.position.z-m.position.z))});function g(m,p,S,y,x=.08){e.position.x=m-l.x,t.position.y=p-l.y,n.position.z=S-l.z,r.forEach((T,E)=>{const b=Math.sign(d[E]);T.position.x=b*Pt(.155,x+.014+Math.abs(f[E].position.x),y)})}function _(){e.position.x=t.position.y=n.position.z=0,r.forEach((m,p)=>{m.position.x=d[p]})}return{model:i,grip:c,home:l,pose:g,reset:_,dockX:h,shelf:a,slot:s}}function Cy(i,e){const t=i.ringPoint(0),n=Ye(e.dockX,t.y,t.z),s=n.x-t.x+.18,r=i.model.worldToLocal(t.clone().lerp(n,.5)),o=new et({color:5401716,roughness:.8}),a=new et({color:7702419,metalness:.5});zt(i.model,"ring-discharge-belt",[s,.04,.225],o,r.clone().add(Ye(0,-Wn-.019,0)));for(const c of[-1,1])zt(i.model,"discharge-side-rail",[s,.055,.018],a,r.clone().add(Ye(0,-Wn-.04,c*.12))),zt(i.model,"discharge-leg",[.045,i.beltY-.06,.045],a,Ye(r.x+s*.31,(i.beltY-.06)/2,r.z+c*.09));return n}function Xl(i){return i<Ds?Pt(Math.PI+1.06,Math.PI+.34,ut(i,0,Ds)):i<Qi?Pt(Math.PI+.34,Math.PI-.34,ut(i,Ds,Qi)):Pt(Math.PI-.34,0,ut(i,Qi,ef))}function zo(i,e=!0){if(!e)return Math.PI+.3+.21*(Tr-i);const n=Hr((i-wr)/.4,0,1);return Math.PI+.3+.21*(Tr-Math.min(i,wr))-.21*.4*n*(1-n/2)}function Py(i,e){const{arm:t,ring:n,rejectBin:s}=i;e<Ss?i.secondPass=void 0:i.secondPass??(i.secondPass=n.hasRaisedCorner(n.reject));const r=i.secondPass===!1,o=n.ringPoint(zo(e,r)),{bin:a,rimY:c,deposit:l}=s;if(e<Tr){const d=n.ringPoint(Xl(Hr(e,Ds,Qi))),f=ut(e,Qi,Tr);d.lerp(n.ringPoint(zo(Tr)),f),t.inspect(d,ut(e,0,Ds),e>=Ds&&e<Qi,f)}else if(e<Ss)t.inspect(o,1,!0,1);else if(!r)t.inspect(n.ringPoint(zo(Ss)),1-ut(e,Ss,10.35),!1,1);else{const d=ut(e,Ss,8.95),f=ut(e,wr,10.35),g=ut(e,10.35,12.15),_=ut(e,12.15,ec),m=ut(e,14,15),p=Math.max(n.beltY+.3,c+.19),S=o.clone().lerp(l,g);S.y=Pt(o.y+t.scanGripHeight*(1-d),p,f),S.y=Pt(S.y,l.y,_),S.y=Pt(S.y,p,m);const y=ut(e,8.95,wr)*(1-ut(e,ec,14)),x=d*(1-m);t.grasp(S,1-ut(e,15,16),y,x)}const u=n.reject,h=!r||e<wr?n.belt:e<ec?t.grip:a;u.parent!==h&&h.add(u),h===t.grip?(u.position.set(0,0,0),u.quaternion.copy(Sy)):(u.position.copy(h.worldToLocal(h===n.belt?o:l.clone())),u.quaternion.identity()),n.setSecondResult(e<Ss?"pending":r?"reject":"pass")}function Ly(i,e){if(e===i.last||!i.dock||!i.arm)return;i.last=e;const t=Hr(e,0,16),{ring:n,rack:s,dock:r}=i,o=n.ringPoint(Xl(t));o.lerp(r,ut(t,ef,wo)),Py(i,t);const a=Pt(Pt(s.home.x,r.x,ut(t,5.4,wo)),s.shelf.x,ut(t,10.2,11.9)),c=Pt(s.home.y,r.y,ut(t,5.4,wo)),l=Pt(c,s.shelf.y+.105,ut(t,Ao,11.9)),u=Pt(l,s.shelf.y,ut(t,13,Qa)),h=Pt(u,s.home.y,ut(t,15,16)),d=s.home.z+.24;let f=Pt(s.home.z,d,ut(t,0,1));f=Pt(f,r.z,ut(t,wo,9.15)),f=Pt(f,d,ut(t,Ao,10.2)),f=Pt(f,s.shelf.z,ut(t,11.9,13)),f=Pt(f,d,ut(t,14.05,15)),f=Pt(f,s.home.z,ut(t,15,16));const g=ut(t,9.15,Ao)*(1-ut(t,Qa,14.05));s.pose(a,h,f,g);const _=t<Ao?n.belt:t<Qa?s.grip:s.slot;n.item.parent!==_&&_.attach(n.item),_===s.grip?n.item.position.set(0,0,0):n.item.position.copy(_.worldToLocal(_===s.slot?s.shelf.clone():o)),n.setResult(t>=Qi)}function nl(i,e,t){const n=t.storage??(t.storage={});i.updateWorldMatrix(!0,!0),e==="aubo"&&(n.arm=Wl(i),n.rejectBin=yy(i)),e==="warehouse"&&(n.rack=Ry(i)),e==="ring"&&(n.ring=Ay(i)),n.rack&&n.ring&&!n.dock&&!n.ring.integrated&&(n.dock=Cy(n.ring,n.rack));function s(){var r,o;if(n.last=null,n.secondPass=void 0,(r=n.arm)==null||r.reset(),(o=n.rack)==null||o.reset(),n.ring){const{belt:a,item:c,reject:l,ringPoint:u,longRingPoint:h,setResult:d,setSecondResult:f}=n.ring,g=n.ring.integrated?h(0):u(Xl(0));a.attach(c),c.position.copy(a.worldToLocal(g)),a.add(l);const _=n.ring.integrated?h(.03):u(zo(0));l.position.copy(a.worldToLocal(_)),l.quaternion.identity(),d(!1),f("pending")}}return s(),{update:r=>Ly(n,r),reset:s,...e==="aubo"?{setJoint:n.arm.setJoint,getJointAngles:n.arm.getJointAngles}:{}}}const Ro=i=>i.getWorldPosition(new I),bt=(i,e,t)=>Ze.smoothstep(i,e,t);function Co(i,e,t,n,s){const r=new Je(new an(...t),s);return r.name=e,r.position.set(...n),r.receiveShadow=!0,i.add(r),r}function fr(i,e,t){i.parent!==e&&e.add(i),i.position.copy(e.worldToLocal(t.clone())),i.quaternion.copy(e.getWorldQuaternion(new Et)).invert()}const il=.29*.7;function ql(i,e){const t=i==="store"?1-e:e;return t<il?"slot":t<.68*.7?"warehouse-grip":t<.735?"warehouse-short-belt":t<.895?"warehouse-aubo-grip":"long-ring-conveyor"}function Iy({ring:i,rack:e},{warehouseArm:t}){const n=e.home.z+.245,s=new I(e.dockX,0,n),r=s.clone().add(new I(-.71,0,0)),o=i.progressAtPoint(r),a=i.longRingPoint(o);i.longLoop.openDockAt(a,.38),s.y=r.y=a.y;const c=Wl(t);c.grip.name="warehouse-aubo-grip";const l=Ro(t),u=new I(l.x-.25,l.y+.23,r.z),h=new ct;h.name="warehouse-transfer-conveyor",i.model.add(h);const d=r.distanceTo(s)+.22,f=s.clone().lerp(r,.5),g=a.y-.06;f.y=g,h.position.copy(i.model.worldToLocal(f));const _=new et({color:5336951,roughness:.82}),m=new et({color:8755620,metalness:.55,roughness:.55});Co(t,"warehouse-aubo-pedestal",[.22,l.y,.22],[0,-l.y/2,-.062],m);const p=Co(h,"warehouse-short-belt",[d,.042,.24],[0,-.021,0],_);for(const M of[-1,1]){Co(h,"warehouse-short-belt-frame",[d,.065,.016],[0,-.05,M*.125],m);for(const A of[-1,1])Co(h,"warehouse-short-belt-leg",[.04,g-.065,.04],[A*d*.35,-(g+.065)/2,M*.095],m)}const S=e.shelf.y-Ro(e.slot).y,y=new WeakMap;function x(M){if(!y.has(M)){M.updateWorldMatrix(!0,!0);const A=M.matrixWorld.clone().invert(),U=new Tt;M.traverse(F=>{F.isMesh&&(F.geometry.boundingBox||F.geometry.computeBoundingBox(),U.union(F.geometry.boundingBox.clone().applyMatrix4(A.clone().multiply(F.matrixWorld))))}),y.set(M,U.isEmpty()?.08:(U.max.x-U.min.x)/2)}return y.get(M)}function T(M){const A=e.model.getObjectByName(M);if(!A)throw new RangeError("立库中缺少库位 "+M);const U=Ro(A);return U.y+=S,{node:A,position:U}}function E(M,A){const{node:U,position:F}=T(A);fr(M,U,F)}const b=new WeakMap;function R(M){return M?(b.has(M)||b.set(M,M.point(M.progressAtPoint(a),new I)),b.get(M)):a}function v(M,A,U,F){const{node:X,position:z}=T(A),N=Ze.clamp(U,0,1),B=Math.min(1,N/.7),k=z.clone();k.y+=.085;const V=z.clone();V.z=n;const te=k.clone();te.z=n;const ie=s.clone();ie.y+=.15;const O=te.clone().setY(Math.max(te.y,ie.y)),H=O.distanceTo(te),D=.45+.18*H/Math.max(.001,H+O.distanceTo(ie)),q=e.home.clone().setY(ie.y);let $;B<.12?$=e.home.clone().lerp(V,bt(B,0,.12)):B<.29?$=V.lerp(z,bt(B,.12,.23)):B<.36?$=z.clone().lerp(k,bt(B,.29,.36)):B<.45?$=k.lerp(te,bt(B,.36,.45)):B<D?$=te.lerp(O,bt(B,.45,D)):B<.63?$=O.lerp(ie,bt(B,D,.63)):B<.74?$=ie.lerp(s,bt(B,.63,.68)):B<.84?$=s.clone().lerp(ie,bt(B,.74,.84)):B<.95?$=ie.lerp(q,bt(B,.84,.95)):$=q.lerp(e.home,bt(B,.95,1));const ne=bt(B,.23,.29)*(1-bt(B,.68,.74));e.pose($.x,$.y,$.z,ne,x(M));const ce=R(F),Q=new I(0,.17,0),Y=r.clone().add(Q),ue=ce.clone().add(Q);let ee;N<.655?ee=u.clone().lerp(Y,bt(N,.58,.655)):N<.735?ee=Y.lerp(r,bt(N,.67,.71)):N<.775?ee=r.clone().lerp(Y,bt(N,.735,.775)):N<.855?ee=Y.lerp(ue,bt(N,.775,.855)):N<.915?ee=ue.lerp(ce,bt(N,.855,.895)):N<.942?ee=ce.clone().lerp(ue,bt(N,.915,.942)):ee=ue.lerp(u,bt(N,.942,1));const se=Ze.clamp((.104-x(M))/.024,0,1);c.grasp(ee,1,se*(bt(N,.71,.735)-bt(N,.895,.915)),1);const P=ql("withdraw",N);P==="slot"?fr(M,X,z):P==="warehouse-grip"?(M.parent!==e.grip&&e.grip.add(M),M.position.set(0,0,0),M.quaternion.identity()):P==="warehouse-short-belt"?fr(M,p,s.clone().lerp(r,bt(N,.588,.685))):P==="warehouse-aubo-grip"?fr(M,c.grip,Ro(c.grip)):fr(M,(F==null?void 0:F.belt)??i.longBelt,ce)}return{ringProgress:o,branch:h,dock:s,pickup:r,crossing:a,withdraw:v,seat:E,arm:c,store(M,A,U,F){v(M,A,1-Ze.clamp(U,0,1),F)},reset(){e.reset(),c.grasp(u,1,0,1)}}}function tf(i){const e=i.getAttribute("position");if(!(e!=null&&e.count))return null;i.computeBoundingBox();const t=i.boundingBox.max.y,n=new Map,s=new Map,r=new Map,o=i.index;function a(d){const f=e.getX(d),g=e.getZ(d),_=Math.round(f*1e7)+","+Math.round(g*1e7);return n.set(_,{x:f,z:g}),_}for(let d=0;d<((o==null?void 0:o.count)??e.count);d+=3){const f=[d,d+1,d+2].map(_=>o?o.getX(_):_);if(f.some(_=>Math.abs(e.getY(_)-t)>1e-6))continue;const g=f.map(a);if(new Set(g).size===3)for(let _=0;_<3;_++){const m=g[_],p=g[(_+1)%3];if(m===p)continue;const S=m<p?m+";"+p:p+";"+m,y=s.get(S);y?y.count++:s.set(S,{a:m,b:p,count:1})}}for(const{a:d,b:f,count:g}of s.values()){if(g>2)return null;if(g===1)for(const[_,m]of[[d,f],[f,d]])r.has(_)||r.set(_,[]),r.get(_).push(m)}if([...r.values()].some(d=>d.length!==2))return null;const c=new Set,l=[];for(const d of r.keys()){if(c.has(d))continue;let f=null,g=d,_=0,m=0,p=0;do{if(c.has(g))return null;c.add(g);const[S,y]=r.get(g),x=S===f?y:S,T=n.get(g),E=n.get(x),b=T.x*E.z-E.x*T.z;_+=b,m+=(T.x+E.x)*b,p+=(T.z+E.z)*b,f=g,g=x}while(g!==d);if(Math.abs(_)<1e-10)return null;l.push({area:Math.abs(_)/2,x:m/(3*_),z:p/(3*_)})}if(l.length!==3)return null;l.sort((d,f)=>f.area-d.area);const[,u,h]=l;return Math.hypot(u.x-h.x,u.z-h.z)*1e3}const Ui={recipeId:"BRT-HOLE-01",version:"1.0",operation:"双孔板随动孔距检测",datum:"双孔板上表面，各孔口封闭轮廓的面积形心",basis:"取模型上表面的两个孔口，计算两形心距离。离线演示公差为 ±0.5 mm。",nominal:96,tolerance:.5};function jl(i){return Number.isFinite(i)&&Math.abs(i-Ui.nominal)<=Ui.tolerance+1e-5}const nf=16,sl=.078,Ho=new I(0,1,0),rl=new I(0,-.733,0),sf=new I(0,.067,0),Dy=sf.y-rl.y,pr=Ze.smoothstep;function ol(i,e=sl){const t=new Ol;t.moveTo(-.09,-.066),t.lineTo(.07,-.066),t.lineTo(.09,-.046),t.lineTo(.09,.066),t.lineTo(-.09,.066),t.closePath();for(const s of[-.048,i]){const r=new Fr;r.absarc(s,0,.016,0,2*Math.PI,!0),t.holes.push(r)}const n=new oa(t,{depth:e,bevelEnabled:!1});return n.rotateX(-Math.PI/2),n}function Ny(i,e){const t=i.getObjectByName("belt_0_0");if(!t)throw new Error("检测输送带缺少上带面 belt_0_0");i.updateWorldMatrix(!0,!0);const n=new Tt().setFromObject(t,!0),s=n.getCenter(new I);e.workpieceTop=(_,m)=>{const p=Ze.clamp(_/nf,0,1);return m.set(Ze.lerp(n.min.x+.1,n.max.x-.1,p),n.max.y+sl,s.z)};const r=new Je(ol(.048),new et({color:15707205,metalness:.22,roughness:.4}));r.name="inspection-workpiece",r.userData.workpieceId="BRT-H01-A",r.castShadow=!0,i.add(r);const o=new I;let a=0,c="nominal",l=null,u=null,h=-1;function d(_){if(a=_,e.workpieceTop(_,o),o.y-=sl,r.position.copy(i.worldToLocal(o)),_<10)u=null,l=null;else{const p=r.geometry.getAttribute("position");(p!==u||(p==null?void 0:p.version)!==h)&&(l=tf(r.geometry),u=p,h=p==null?void 0:p.version)}const m=_<10?"pending":jl(l)?"pass":"fail";r.userData.inspectionResult=m,r.material.color.setHex({pending:15707205,pass:5619336,fail:14965834}[m])}function f(_){return _!=="nominal"&&_!=="offset"?!1:(_!==c&&(r.geometry.dispose(),r.geometry=ol(_==="nominal"?.048:.05),r.userData.workpieceId=_==="nominal"?"BRT-H01-A":"BRT-H01-B",c=_,d(a)),!0)}function g(){const _=a>=10,m=_?r.userData.inspectionResult:a>=6?"active":"pending";return{...Ui,partId:r.userData.workpieceId,sample:c,status:m,stage:_?l===null?"检测无效 · 孔口不完整":"检测完成":a>=6?"随动扫描":"待扫描",metrics:[{label:"两孔中心距",target:"96.0 ± 0.5",value:l,unit:"mm",verdict:_?m:null},{label:"孔距偏差",target:"−0.5 至 +0.5",value:l===null?null:l-Ui.nominal,unit:"mm",verdict:_?m:null}]}}return d(0),{update:d,reset:()=>d(0),getProcessReading:g,setSample:f}}function tc(i,e){const t=i.quaternion.clone(),n=Ho.clone().applyQuaternion(t),s=e.map(_=>{const m=sf.clone().applyQuaternion(_.quaternion).add(_.position);return i.attach(_),{rod:_,distal:m,elbow:rl.clone().applyQuaternion(_.quaternion).add(_.position),rest:_.quaternion.clone(),restPosition:_.position.clone(),direction:Ho.clone().applyQuaternion(_.quaternion)}}),r=s[0].elbow.clone().applyQuaternion(t),o=i.position.clone().addScaledVector(n,r.dot(n)),a=r.clone().addScaledVector(n,-r.dot(n)),c=a.length();a.normalize();const l=new I().crossVectors(n,a),u=new Et,h=new Et,d=new I;function f(_){d.copy(s[0].distal).add(_).sub(o);const m=d.dot(a),p=d.dot(l),S=(d.lengthSq()+c**2-Dy**2)/(2*c*Math.hypot(m,p)),y=Math.atan2(p,m),x=y-Math.sign(y)*Math.acos(Ze.clamp(S,-1,1));i.quaternion.copy(t).multiply(u.setFromAxisAngle(Ho,x)),h.copy(i.quaternion).invert();for(const T of s)d.copy(T.distal).add(_).sub(i.position).applyQuaternion(h).sub(T.elbow).normalize(),T.rod.quaternion.copy(u.setFromUnitVectors(T.direction,d)).multiply(T.rest),T.rod.position.copy(rl).applyQuaternion(T.rod.quaternion).negate().add(T.elbow)}function g(){i.quaternion.copy(t);for(const _ of s)_.rod.quaternion.copy(_.rest),_.rod.position.copy(_.restPosition)}return{update:f,reset:g}}function Uy(i){i.geometry.computeBoundingBox();const e=new ct;e.position.y=i.geometry.boundingBox.max.y,i.add(e);const t=new Je(new an(.072,.04,.056),new et({color:2381425,roughness:.4,metalness:.42}));t.name="inspection-probe",t.position.y=.02,e.add(t);const n=new Je(new Qs(.014,.014,.006,16),new et({color:9561849,emissive:1404280}));n.name="inspection-lens",n.position.y=.043,e.add(n);const s=new Bt;s.setAttribute("position",new vt([0,0,0,-.055,1,0,.055,1,0],3));const r=new Je(s,new rn({color:5565946,side:gn,transparent:!0,opacity:.46,depthWrite:!1}));r.name="inspection-scan",r.visible=!1,n.add(r);const o=new Je(new an(.11,.001,.005),new rn({color:9566463}));return o.position.y=1,r.add(o),{lens:n,beam:r}}function Oy(i,e){const t=new Map;if(i.traverse(y=>{if(!y.isMesh)return;const x=/(?:\[|_)NAUO(\d+)(?:\]|_)/.exec(y.userData.name||"")??/(?:\[|_)NAUO(\d+)(?:\]|_)/.exec(y.name);x&&t.set(Number(x[1]),y)}),t.size!==12)throw new Error(`BRT 装配节点不完整 (${t.size}/12)`);e.fixedPlatform=t.get(1);const n=t.get(10),s=t.get(12),r=n.parent;i.updateWorldMatrix(!0,!0);const o=[tc(t.get(2),[t.get(6),t.get(7)]),tc(t.get(3),[t.get(5),t.get(11)]),tc(t.get(4),[t.get(8),t.get(9)])];n.attach(s);const a=n.position.clone(),c=s.quaternion.clone(),{lens:l,beam:u}=Uy(s),h=l.getWorldPosition(new I),d=r.worldToLocal(h.clone()),f=new I,g=new I,_=new I,m=new Et;function p(){for(const y of o)y.reset();n.position.copy(a),s.quaternion.copy(c),u.visible=!1}function S(y){if(!e.workpieceTop||y<=0||y>=nf){p();return}e.workpieceTop(y,f);const x=pr(y,4,6)*(1-pr(y,10,12.5)),T=pr(y,0,3)*(1-pr(y,13,16));r.localToWorld(g.copy(d)),g.y+=.16*T,g.x=Ze.lerp(g.x,f.x,x),g.z=Ze.lerp(g.z,f.z,x),g.y=Ze.lerp(g.y,f.y+.08,x),_.copy(r.worldToLocal(g.clone())).sub(d);for(const R of o)R.update(_);n.position.copy(a).add(_);const E=pr(y,6,10),b=x*(E-.5)*Math.PI/2;s.quaternion.copy(c).multiply(m.setFromAxisAngle(Ho,b)),u.visible=y>=6&&y<=10,u.scale.y=Math.max(0,g.y-f.y-.001)}return{update:S,reset:p}}function rf(i,e,t){return e==="belt"?Ny(i,t):Oy(i,t)}function Fy(i,e){const t=i.model;if(t.getObjectByName("brt-line-gantry"))return;const n=new Tt().setFromObject(e,!0),s=new Tt().setFromObject(i.longLoop.legs,!0).min.y,r=n.getCenter(new I);r.y=s;const o=new ct;o.name="brt-line-gantry",o.position.copy(t.worldToLocal(r)),t.add(o);const a=new et({color:7967905,metalness:.55,roughness:.54}),c=new et({color:5204341,metalness:.48,roughness:.55});function l(y,x,T,E,b,R,v,M=a){const A=new Je(new an(b,R,v),M);A.name=y,A.position.set(x,T,E),A.castShadow=!0,A.receiveShadow=!0,o.add(A)}const u=n.max.y-s,h=.025,d=.08,f=.065,g=.02,_=.76,m=.9,p=u+h,S=p+d/2;l("brt-mount-plate",0,u+h/2,0,.78,h,.78,c);for(const y of[-1,1]){const x=y*m;l("brt-gantry-side-beam",0,S,x,2*_+f,d,f);for(const T of[-1,1]){const E=T*_;l("brt-gantry-foot",E,g/2,x,.16,g,.16,c),l("brt-gantry-post",E,(p+g)/2,x,f,p-g,f)}l("brt-mount-crossbeam",y*.22,S,0,f,d,2*m-f)}o.updateWorldMatrix(!0,!0)}function By({model:i,cell:e},t,n){const r=i.getObjectByName("inspection-lens").getWorldPosition(new I),o=t.progressAtPoint(r),a=t.longRingPoint(o),c=i.getWorldPosition(new I);c.x+=a.x-r.x,c.z+=a.z-r.z,i.parent&&i.parent.worldToLocal(c),i.position.copy(c),i.updateWorldMatrix(!0,!0),Fy(t,e.fixedPlatform);const u=new Tt().setFromObject(n,!0).max.y-n.getWorldPosition(new I).y;e.workpieceTop=(d,f)=>(n.getWorldPosition(f),f.y+=u,f);const h=.36/t.longLoop.pathLength;return{start:o-h,end:o+h}}const ky=(i=0,e=0,t=0)=>new I(i,e,t),zy=(i,e,t,n,s=ky())=>{const r=new Je(new an(...t),n);return r.name=e,r.position.copy(s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r},Ih=(i,e=.25)=>new et({color:i,roughness:.46,metalness:e}),of=.006;function Hy(i,e=96){const t=new ct;t.name="integrated-workpiece";const n=zy(t,"integrated-workpiece-body",[.18,.12,.14],Ih(15180860,.2)),s=new Je(ol(e/1e3-.048,of),Ih(14149868,.05));if(s.name="integrated-workpiece-top",s.position.y=.06,t.add(s),i&&typeof document<"u"){const a=document.createElement("canvas");a.width=256,a.height=64;const c=a.getContext("2d");c.fillStyle="#e9eef1",c.fillRect(0,0,256,64),c.fillStyle="#172733",c.font="bold 42px monospace",c.textAlign="center",c.textBaseline="middle",c.fillText(i,128,34);const l=new Dd(a);l.colorSpace=Rt;const u=new Je(new rs(.115,.028),new rn({map:l}));u.name=i+" marking",u.position.set(0,0,.0701),t.add(u)}t.userData={batchId:i||"COMBINED-01",role:"combined-workpiece",productionLineOnly:!0};const r=a=>n.material.color.setHex(a===!0?5027718:a===!1?14769490:15180860);if(i)return{root:t,plate:s,setResult:r};const o=t.clone(!0);return o.name="integrated-queued-workpiece",o.userData={batchId:"COMBINED-02",role:"waiting-area-workpiece"},o.traverse(a=>{a.isMesh&&(a.material=a.material.clone())}),o.visible=!1,{root:t,queueRoot:o,setResult:r,setVisible(a){t.visible=a},setQueueVisible(a){o.visible=a},setQueueIdentity(a,c){typeof a=="string"&&a&&(o.userData.batchId=a),typeof c=="string"&&c&&(o.userData.sourceSlot=c)},setQueueAt(a,c){o.parent!==a&&a.add(o),o.position.copy(a.worldToLocal(c.clone())),o.quaternion.identity()}}}const Qe=(i=0,e=0,t=0)=>new I(i,e,t),Ts=i=>i.getWorldPosition(Qe()),hn=Ze.smoothstep,Vy=new Et,Rr=.06,Vn=Object.freeze({take:.19,place:.77});function Ln(i,e){const t=i.getObjectByName(e);if(!t)throw new Error(`Missing loaded machine component: ${e}`);return t}function Ai(i,e,t,n,s){const r=new Je(new an(...t),new et({color:s,roughness:.57,metalness:.28}));return r.name=e,r.position.copy(n),r.castShadow=!0,i.add(r),r}function Bn(i,e){const t=new ct;t.name=i.name+" loading stroke";const n=i.parent;n.add(t),t.add(i);const s=e.clone().applyQuaternion(n.getWorldQuaternion(new Et).invert());return r=>t.position.copy(s).multiplyScalar(r)}function Gy(i,e){const t={cnc:"cnc_component_548",haas:"Haas demonstration stock",fiveAxis:"Penta demonstration stock"}[i],n=Ln(e,t),s=new Tt().setFromObject(n,!0);i==="fiveAxis"&&(n.geometry.computeBoundingBox(),s.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld));const r=s.getCenter(Qe());let o=i==="cnc"?new Tt().setFromObject(Ln(e,"cnc_component_450"),!0).max.y:s.min.y;if(i==="cnc"){const d=new ct;n.parent.add(d),d.position.copy(n.parent.worldToLocal(Qe(r.x,o,r.z))),d.quaternion.copy(n.parent.getWorldQuaternion(new Et).invert());for(const f of[-.042,.042])Ai(d,"数控机床夹持垫铁",[.145,.06,.025],Qe(0,.03,f),11709077);o+=.06}if(i==="fiveAxis"){const d=new ct;n.parent.add(d),d.position.copy(n.parent.worldToLocal(Qe(r.x,o,r.z))),d.quaternion.copy(n.parent.getWorldQuaternion(new Et).invert());for(const f of[-.017,.017])Ai(d,"五轴转台垫铁",[.068,.032,.014],Qe(0,.016,f),7569802);o+=.032}r.y=o+Rr;const a=new ct;a.name=i+" workholding datum",n.parent.add(a),a.position.copy(n.parent.worldToLocal(r)),a.quaternion.copy(n.parent.getWorldQuaternion(new Et).invert());const c=[],l=o+Rr*2+(i==="fiveAxis"?of:0)-s.max.y;if(i==="cnc")for(const d of[544,545,546,547,548,587])Ln(e,"cnc_component_"+d).visible=!1;else n.visible=!1;const u=Ts(n).add(Qe(0,l,0));if(n.position.copy(n.parent.worldToLocal(u)),i==="cnc")c.push(Bn(Ln(e,"CNC table, vise and stock"),Qe(.4,0,.44))),c.push(Bn(Ln(e,"cnc-machine_door"),Qe(-.86,0,0))),c.push(Bn(Ln(e,"CNC head and coolant nozzles"),Qe(0,.25,0))),Bn(Ln(e,"CNC head and coolant nozzles"),Qe(0,l,0))(1);else if(i==="haas"){const d=e.getObjectByName("SADDLE_VF-3_SS_4_2022_NAUO5_01115");if(!d)throw new Error("Haas loading saddle missing");c.push(Bn(d,Qe(0,0,.22))),Bn(Ln(e,"SPINDLE_HEAD__VF-3_SS_4_2022_NAUO7_01117"),Qe(0,l,0))(1);const f=new ct;e.add(f),f.quaternion.copy(e.getWorldQuaternion(new Et).invert());for(const g of[-1,1]){const _=new ct;_.name="Haas 前滑门（工艺演示）",f.add(_),_.position.set(g*.433,1.414,.773),_.rotation.x=Ze.degToRad(-5);for(const p of[-1,1])Ai(_,"Haas door stile",[.024,.92,.016],Qe(p*.322,0,0),7701130),Ai(_,"Haas door rail",[.62,.032,.016],Qe(0,p*.444,0),7701130);const m=Ai(_,"Haas transparent pane",[.62,.856,.007],Qe(),9286333);Object.assign(m.material,{transparent:!0,opacity:.18,depthWrite:!1}),c.push(Bn(_,Qe(g*.654,0,0)))}}else{const d=Ln(e,"Door");c.push(Bn(d,Qe(0,.7,0))),c.push(Bn(Ln(e,"axis_Y"),Qe(0,0,-.16))),c.push(Bn(Ln(e,"axis_Z"),Qe(0,.16,0)))}return{fixture:a,setAccess:d=>c.forEach(f=>f(d)),blank:n}}function mr(i,e,t,n=!1){i.parent!==e&&e.add(i),i.position.copy(t),i.quaternion.copy(n?e.getWorldQuaternion(new Et).invert():Vy)}function Wy(i,e){const t=i.findIndex(([a])=>a>=e);if(t<=0)return i[t===0?0:i.length-1][1].clone();const[n,s]=i[t-1],[r,o]=i[t];return s.clone().lerp(o,hn(e,n,r))}function Xy(i,e,t){return Object.fromEntries(["cnc","haas","fiveAxis"].map((n,s)=>{const r=i[n],o=Array.isArray(e)?e[s]:e[n],{fixture:a,setAccess:c,blank:l}=Gy(n,r),u=Wl(o),h=Ts(o);Ai(o,"loading-arm pedestal",[.26,h.y,.29],Qe(0,-h.y/2,-.062),5597557);const d=new ct;d.name=n+" waiting position",d.position.set(n==="cnc"?.27:.45,-.06,n==="cnc"?-.05:-.075),o.add(d),Ai(d,"waiting table",[.32,.045,.27],Qe(0,-Rr-.0225,0),4285810);const f=h.y+d.position.y-Rr-.045;Ai(d,"waiting table column",[.12,f,.12],Qe(0,-Rr-.045-f/2,0),5465714),c(1);const g=Ts(a),_=t.progressAtPoint(Qe(g.x,0,3.8)),m=t.longRingPoint(_),p=Qe(h.x+.15,h.y+.24,h.z+.24);u.grasp(p,1,0,1);const S=u.getJointAngles();c(0);function y(R,v=.5){c(1-hn(v,0,.15)+hn(v,.85,1)),mr(R,a,Qe())}function x(R){mr(R,d,Qe())}function T(R,v,M,A=t.longBelt,U=m,F=!1){var ue,ee;const X=v==="unload",z=Ze.clamp(X?1-M:M,0,1),N=v==="queuePut",B=v==="queueLoad";N||c(hn(z,0,n==="fiveAxis"?.5:.32));const k=B?Ts(d):U,V=Ts(N?d:a),te=se=>se.clone().add(Qe(0,.105,0)),ie=te(V);N?n==="cnc"?ie.z+=.1:ie.x+=.16:ie.z=h.z+.025;const O=F&&(v==="load"||v==="queuePut"),H=O?k.clone().add(Qe(0,u.scanGripHeight,0)):p,D=O?.125:.156,q=[[0,H],[O?.02:.12,O?H:te(k)],[D,k],[Vn.take,k],[.32,te(k)],[.53,ie],[.69,te(V)],[Vn.place,V],[.794,V],[.826,te(V)],[.904,ie],[1,p]];N&&q.splice(5,0,[.43,Qe(n==="cnc"?V.x:h.x+.48,Math.max(k.y,V.y)+.12,Math.min(U.z,h.z+.5))]),B&&q.splice(5,0,[.43,Qe(h.x+.06,Math.max(k.y,V.y)+.12,h.z+.39)]),n==="cnc"&&!B&&U.z<m.z-.1&&(N&&q.splice(5,0,[.37,Qe(h.x-.08,k.y+.12,h.z+.45)]),O||q.splice(1,0,[.052,Qe(h.x,h.y+.21,h.z+.45)]));const $=Wy(q,z),ne=hn(z,D,Vn.take)-hn(z,Vn.place,.794),ce=R.getObjectByName("integrated-workpiece-body")||R.children.find(se=>se.isMesh),Q=((ee=(ue=ce==null?void 0:ce.geometry)==null?void 0:ue.parameters)==null?void 0:ee.width)||.16,Y=Ze.clamp((.104-Q/2)/.024,0,1);return u.grasp($,1,ne*Y,O?hn(z,0,D):1),z<Vn.take?B?x(R):mr(R,A,A.worldToLocal(U.clone()),!0):z<Vn.place?mr(R,u.grip,Qe(),!0):N?x(R):mr(R,a,Qe()),$}function E(){u.grasp(p,1,0,1),c(0)}function b(R=1,v=m,M=!1){const A=hn(R,0,.34)-(M?0:hn(R,.7,1)),U=1-hn(R,0,.42)+(M?0:hn(R,.6,1));u.inspect(v,1,!1,1,U),u.getJointAngles().forEach((F,X)=>{const z=Math.atan2(Math.sin(F-S[X]),Math.cos(F-S[X]));u.setJoint(X,S[X]+A*z)}),u.illuminate(v,hn(R,.34,.42)-hn(R,.62,.7))}return[n,{progress:_,fixture:a,wait:d,pickup:m,arm:o,grip:u.grip,blank:l,transfer:T,seatMachine:y,seatWaiting:x,reset:E,recognize:b}]}))}const Oi=Object.freeze({cnc:"数控机床",haas:"Haas VF-3/SS 铣床",fiveAxis:"五轴加工中心","cnc-buffer":"数控待加工区","haas-buffer":"Haas 待加工区","fiveAxis-buffer":"五轴待加工区",brt:"BRT 四轴终检",warehouse:"立体仓库",ring:"三道主环线"}),qy=new Set(["cnc","haas","fiveAxis"]),jy=new Set(["good","uncertain","bad","unknown"]),Dh=["laserMm","encoderPulse","beltMps"],Yy=Date.UTC(2026,0,1,0,0,0);function Zo(i,e){const t=typeof i=="number"?i:typeof i=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/i.test(i)?Date.parse(i):NaN;if(!Number.isSafeInteger(t)||Math.abs(t)>864e13)throw new TypeError(e+" 需要毫秒时间戳或含时区的 ISO 时间");return t}function bi(i,e){if(typeof i!="string"||!i.trim())throw new TypeError("缺少 "+e);return i.trim()}function Ky(i){if(!i||typeof i!="object"||Array.isArray(i))throw new TypeError("现场事件必须为对象");if(i.origin!=null&&i.origin!=="field")throw new TypeError("现场记录不能混入演示来源");const e=bi(i.id,"id"),t=bi(i.deviceId,"deviceId");if(!Object.hasOwn(Oi,t))throw new TypeError("未知设备 "+t);const n=bi(i.phase,"phase"),s=Zo(i.sourceTime,"sourceTime"),r=i.quality??"unknown";if(!jy.has(r))throw new TypeError("未知 quality");const o=i.workpieceId==null?null:bi(i.workpieceId,"workpieceId"),a=i.slot==null?null:bi(i.slot,"slot");if(["inventoryIn","inventoryOut"].includes(n)&&(!a||!o))throw new TypeError("出入库事件需要 slot 和 workpieceId");if(i.confirmed!=null&&typeof i.confirmed!="boolean")throw new TypeError("confirmed 必须为布尔值");if(i.route!=null&&!(Array.isArray(i.route)&&i.route.every(l=>qy.has(l))))throw new TypeError("route 包含未知加工工位");const c={id:e,origin:"field",time:s,sourceTime:s,deviceId:t,workpieceId:o,phase:n,slot:a,route:i.route==null?null:Object.freeze([...i.route]),label:bi(i.label,"label"),detail:String(i.detail??""),source:bi(i.source,"source"),quality:r,confirmed:r==="good"&&i.confirmed!==!1&&!["readWait","recognize"].includes(n)};if(i.position!=null){if(!Array.isArray(i.position)||i.position.length!==3||!i.position.every(Number.isFinite))throw new TypeError("position 需要三个有限的场景坐标");c.position=Object.freeze([...i.position])}if(i.readings!=null){if(typeof i.readings!="object"||Array.isArray(i.readings)||!Object.keys(i.readings).every(l=>Dh.includes(l)&&Number.isFinite(i.readings[l])))throw new TypeError("readings 中存在未知读数或非有限数字");c.readings=Object.freeze(Object.fromEntries(Dh.filter(l=>Object.hasOwn(i.readings,l)).map(l=>[l,i.readings[l]])))}return i.receivedTime!=null&&(c.receivedTime=Zo(i.receivedTime,"receivedTime")),i.alarmId!=null&&(c.alarmId=bi(i.alarmId,"alarmId")),Object.freeze(c)}function al(i){return["readWait","recognize","alarmRaised"].includes(i.phase)}function Nh(i,e){return i.confirmed||al(i)?{status:i.label,phase:i.phase,details:i.detail,latestObservation:i}:{status:e?e.label+"（新反馈待确认）":"未知（反馈待确认）",phase:(e==null?void 0:e.phase)??null,details:"待确认反馈 · "+i.label+(i.detail?" · "+i.detail:""),latestObservation:i}}function $y(i,e,t,n,s,r,o){var p,S,y;const a=i==="demo"&&n>=e,c=a?{source:"演示初始状态",sourceTime:e,quality:"good",since:e}:{source:"无来源",sourceTime:null,quality:"unknown",since:null},l=new Map(Object.entries(Oi).map(([x,T])=>[x,{id:x,label:T,status:a?x.endsWith("-buffer")?"空闲":"待机":"未知",phase:null,workpieceId:null,details:"",lastConfirmed:null,...c}])),u=new Map,h=new Map,d=new Map;if(a){for(const x of o)h.set(x,{slot:x,workpieceId:null,status:"空位",...c});for(const x of s)h.set(x.sourceSlot,{slot:x.sourceSlot,workpieceId:x.id,status:"占用",...c});for(const x of r)u.set(x.id,{id:x.id,sourceSlot:x.sourceSlot,route:x.route,status:"在库",phase:"stock",deviceId:"warehouse",lastConfirmed:null,...c})}const f=new Map,g=new Map,_=new Map,m=new Map;for(const x of t){const{deviceId:T,workpieceId:E,phase:b,sourceTime:R,source:v,quality:M,slot:A,confirmed:U}=x,F={source:v,sourceTime:R,quality:M,since:R},X=l.get(T),z=X.lastConfirmed;if(U&&(X.lastConfirmed=x),b==="inspectionResult"&&_.set(T,x),b==="bufferIn"&&U&&m.set(T,x),b==="bufferOut"&&U&&m.delete(T),i==="field"){const k=Nh(x,X.lastConfirmed);Object.assign(X,F,k,{workpieceId:U||al(x)?E:((p=X.lastConfirmed)==null?void 0:p.workpieceId)??null})}else if(x.endTime>n)f.has(T)||f.set(T,[]),f.get(T).push(x);else{const k=x.endTime??R;(((S=g.get(T))==null?void 0:S.end)??-1/0)<=k&&g.set(T,{end:k,event:x})}if(E){const k=u.get(E)??{id:E,sourceSlot:null,route:[],lastConfirmed:null};if(A&&U&&(k.sourceSlot=A),x.route&&U&&(k.route=x.route),i==="field"){const V=Nh(x,k.lastConfirmed);Object.assign(k,F,V,{deviceId:U||al(x)?T:((y=k.lastConfirmed)==null?void 0:y.deviceId)??null})}else Object.assign(k,F,{deviceId:T,phase:b,status:x.label,details:x.detail});U&&(k.lastConfirmed=x),u.set(E,k)}if(A&&["inventoryIn","inventoryOut"].includes(b)){const k=b==="inventoryIn",V=h.get(A);h.set(A,{slot:A,status:U?k?"占用":"空位":(V==null?void 0:V.status)??"未知",workpieceId:U?k?E:null:(V==null?void 0:V.workpieceId)??null,lastConfirmed:U?x:(V==null?void 0:V.lastConfirmed)??null,...F})}const N=["readWait","readConfirmed"].includes(b)?"reader":b==="rejectHold"?"inspection":"equipment",B=JSON.stringify([T,E,x.alarmId??N]);["readWait","alarmRaised","rejectHold"].includes(b)?d.has(B)||d.set(B,{...F,id:x.id,deviceId:T,workpieceId:E,label:x.label,details:x.detail,lastConfirmed:z}):U&&["readConfirmed","alarmCleared"].includes(b)&&d.delete(B)}if(i==="demo")for(const x of l.values()){const T=f.get(x.id)??[],E=T.find(A=>A.phase==="machining")??T.at(-1),b=g.get(x.id);E?Object.assign(x,{status:E.label,phase:E.phase,workpieceId:E.workpieceId,details:T.map(A=>A.detail).join("；"),source:E.source,sourceTime:E.sourceTime,since:E.sourceTime,quality:E.quality}):b&&(Object.assign(x,{source:b.event.source,sourceTime:b.end,since:b.end}),b.event.time===n&&b.event.phase==="readConfirmed"&&Object.assign(x,{status:b.event.label,phase:b.event.phase,workpieceId:b.event.workpieceId,details:b.event.detail}));const R=_.get(x.id);R&&!E&&(x.details=R.detail);const v=m.get(x.id);v&&Object.assign(x,{status:"等待上料",phase:"waiting",workpieceId:v.workpieceId,since:v.time,sourceTime:v.sourceTime,source:v.source,details:v.detail});const M=[...d.values()].find(A=>A.deviceId===x.id);M&&!E&&Object.assign(x,{status:M.label,phase:"alarmRaised",workpieceId:M.workpieceId,details:M.details,quality:M.quality,source:M.source,sourceTime:M.sourceTime,since:M.since})}return{mode:i,timestamp:n,originTime:e,stations:[...l.values()],parts:[...u.values()],alarms:[...d.values()],events:t,stock:[...h.values()]}}function af(i,e,t,n=[],s=[],r=[]){let o=Object.freeze(e),a=new Map(o.map(d=>[d.id,d]));const c=()=>{var d;return t??((d=o[0])==null?void 0:d.sourceTime)??null};function l(d,f=null){const g=Zo(typeof d=="number"?Math.floor(d):d,"查看时间"),_=f==null?null:a.get(f);if(f!=null&&(!_||_.time!==g))throw new RangeError("事件不在指定时刻");let m=0,p=o.length;for(;m<p;){const y=m+p>>>1;o[y].time<=g?m=y+1:p=y}const S=o.slice(0,_?o.indexOf(_)+1:m);return $y(i,c(),S,g,n,s,r)}function u(d){const f=a.get(d);if(!f)throw new RangeError("找不到事件 "+d);return l(f.time,d)}const h={mode:i,get records(){return o},get originTime(){return c()},at:l,seek:u,query({deviceId:d,workpieceId:f,from:g=-1/0,to:_=1/0}={}){return o.filter(m=>(!d||m.deviceId===d)&&(!f||m.workpieceId===f)&&m.time>=g&&m.time<=_)}};return i==="field"&&(h.append=d=>{const f=new Map;for(const g of Array.isArray(d)?d:[d]){const _=Ky(g),m=f.get(_.id)??a.get(_.id);if(!m)f.set(_.id,_);else if(JSON.stringify(m)!==JSON.stringify(_))throw new TypeError("同一事件 id 内容冲突："+_.id)}if(f.size){o=Object.freeze([...o,...f.values()].sort((g,_)=>g.time-_.time));for(const[g,_]of f)a.set(g,_)}return f.size}),h}function nc(i=[]){const e=af("field",[],null);return e.append(i),e}function Zy(i){return i.phase==="route"?"ring":i.phase==="waiting"?i.station+"-buffer":["inspection","rejectHold"].includes(i.phase)?"brt":i.station??"warehouse"}function Jy(i,e){const t={readWait:"读码反馈",readConfirmed:"读码反馈",recognize:"读码请求",arrived:"到站",machiningDone:"加工完成",machining:"加工启动",inventoryOut:"库位交接",inventoryIn:"库位交接",inspectionResult:"工件几何测量"}[e]??"动作时序";return"演示 · "+Oi[i]+" · "+t}function Qy(i,{inventory:e=i.items,slots:t=[],originTime:n=Yy}={}){var l;const s=Zo(n,"演示起点"),r=[],o=new Map(i.items.map(u=>[u.id,u])),a=u=>s+Math.round(1e3*u),c=new Set(i.events.filter(u=>u.phase==="readWait").map(u=>u.id+"/"+u.station));for(const u of i.events){const h=o.get(u.id),d=Zy(u),f=(m,p,S,y,x={})=>{const T=a(p),E=x.deviceId??d;r.push(Object.freeze({id:i.scenario+"/"+h.id+"/"+E+"/"+m+"/"+(T-s),origin:"demo",sourceTime:T,time:T,deviceId:E,workpieceId:h.id,slot:h.sourceSlot,route:h.route,phase:m,label:S,detail:y,source:Jy(E,m),quality:"good",confirmed:!0,...x}))},g=u.phase==="readWait";f(u.phase,u.time,u.event,u.detail,{endTime:a(u.end),quality:g?"uncertain":"good",confirmed:!g&&u.phase!=="recognize"}),(g||u.phase==="recognize"&&!c.has(u.id+"/"+u.station))&&f("readConfirmed",u.end,"读码已确认",h.id+" 工艺卡返回，"+(u.required?"允许上料":"本站放行")),u.phase==="machining"&&f("machiningDone",u.end,"加工完成",h.id+" 已完成"+Oi[d]+"工序");const _=u.end-u.time;if(u.phase==="queuePut"||u.phase==="queueLoad"){const m=u.phase==="queuePut";f(m?"bufferIn":"bufferOut",u.time+_*(m?Vn.place:Vn.take),m?"已放入待加工区":"已从待加工区取出",h.id+(m?" 在待加工区等候接续上料":" 转入机床"),{deviceId:u.station+"-buffer"})}if((u.phase==="load"||u.phase==="queueLoad")&&f("loadComplete",u.time+_*Vn.place,"上料就位",h.id+" 已置于"+Oi[d]+"夹具"),u.phase==="unload"&&f("unloadComplete",u.time+(Math.floor(_*1e3*(1-Vn.take))+1)/1e3,"下料回带",h.id+" 已放回本件所属带道"),u.phase==="inspection"){const m=(l=i.at(u.end).items.find(p=>p.id===h.id))==null?void 0:l.inspection;if(m){const p=Number.isFinite(m.measured)?m.measured+" "+m.unit+" · ":"";f("inspectionResult",u.end,m.pass?"终检合格":"终检未通过",h.id+" · "+p+m.reason)}}if(u.phase==="withdraw"||u.phase==="store"){const m=u.phase==="store",p=m?Math.floor(_*1e3*(1-il))+1:Math.ceil(_*1e3*il);f(m?"inventoryIn":"inventoryOut",u.time+p/1e3,m?"已入库":"已出库",h.id+(m?" 已放回 ":" 已离开 ")+h.sourceSlot)}}return r.sort((u,h)=>u.time-h.time),af("demo",r,s,e,i.items,t)}const eM=8*36e5;function Zi(i){if(!Number.isFinite(i))return"";const e=new Date(i+eM);return Number.isFinite(e.getTime())?e.toISOString().replace(/(?:\.000)?Z$/,""):""}function cf(i){if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?$/.test(i))return NaN;const e=Date.parse(i+"+08:00"),t=i.length===16?i+":00":i;return!Number.isFinite(e)||Zi(e).slice(0,19)!==t.slice(0,19)?NaN:e}function Ji(i){return Zi(i).replace("T"," ")}function tM(i,{onSeekTime:e,onTogglePlayback:t,onReturnCurrent:n}){i.innerHTML=`
    <div class="panel-heading"><h2>历史回看</h2><span class="state-badge" data-history-mode></span></div>
    <p class="history-cursor" data-history-cursor></p>
    <p class="history-range" data-history-range></p>
    <form class="history-form">
      <label>现场时间（UTC+8）<input name="time" type="datetime-local" step="0.001" required></label>
      <button type="submit" class="ghost">定位到时刻</button>
    </form>
    <label class="history-jump">按告警或事件定位<select aria-label="按告警或事件定位"><option value="">选择记录</option></select></label>
    <p class="history-feedback" role="status"></p>
    <div class="history-controls"><button type="button" class="ghost" data-history-play>播放回看</button><button type="button" class="ghost" data-history-exit>返回当前</button></div>`,i.classList.add("history-panel");const s=i.querySelector("form"),r=s.elements.time,o=i.querySelector("select"),a=i.querySelector("[data-history-mode]"),c=i.querySelector("[data-history-range]"),l=i.querySelector("[data-history-cursor]"),u=i.querySelector(".history-feedback"),h=i.querySelector("[data-history-play]"),d=i.querySelector("[data-history-exit]"),f=new AbortController,g={signal:f.signal};let _={},m=null,p=0,S,y=[],x,T=!1;r.addEventListener("input",()=>{T=!0,u.textContent=""},g),s.addEventListener("submit",b=>{b.preventDefault();const R=cf(r.value);if(!Number.isFinite(R)||R<_.startTime||R>_.endTime){u.textContent="请输入记录范围内的现场时间。";return}T=!1,u.textContent="",o.value="",e(R)},g),o.addEventListener("change",()=>{if(!o.value)return;const b=y[Number(o.value)];b&&(T=!1,u.textContent="",e(b.time,b))},g),h.addEventListener("click",()=>{T=!1,t()},g),d.addEventListener("click",()=>{T=!1,o.value="",u.textContent="",n()},g);function E(b){var k;const R=x!==b.source||_.startTime!==b.startTime;R&&(T=!1,o.value="",u.textContent=""),x=b.source,_=b;const{startTime:v,endTime:M,time:A,mode:U,playing:F,events:X=[]}=b,z=Number.isFinite(v)&&Number.isFinite(M)&&v<=M,N=U==="history",B=(V,te)=>{V.textContent!==te&&(V.textContent=te)};if(B(l,N&&Number.isFinite(A)?"回看时刻　"+Ji(A):""),B(c,z?`记录范围（UTC+8） ${Ji(v)} 至 ${Ji(M)}`:"尚无可回看的时间记录。"),B(a,N?F?"回放中":"定格":"当前"),r.min=Zi(v),r.max=Zi(M),r.disabled=!z,s.querySelector("button").disabled=!z,!T&&document.activeElement!==r){const V=Number.isFinite(A)?A:v;r.value!==Zi(V)&&(r.value=Zi(V))}if(h.disabled=!N||!z||v===M,d.disabled=!N,B(h,F&&N?"暂停回看":"播放回看"),F&&N&&(o.value=""),X!==m||X.length!==p||R||M!==S){m=X,p=X.length,S=M;const V=R?"":(k=o.selectedOptions[0])==null?void 0:k.dataset.recordId;y=z?X.filter(ie=>Number.isFinite(ie.time)&&ie.time>=v&&ie.time<=M):[];const te=new Map;for(const[ie,O]of y.entries()){const D=["warning","error","critical","alarm","fault","warn"].includes(O.severity)||O.kind==="alarm"||["readWait","alarmRaised","rejectHold"].includes(O.phase)?"告警":"事件";if(!te.has(D)){const ue=document.createElement("optgroup");ue.label=D,te.set(D,ue)}const q=String(O.id??O.time+":"+O.label),$=Ji(O.time),ne=O.workpieceId||O.partId,ce=O.deviceId||O.stationId,Q=[$,Oi[ce]||ce,O.label||D,ne].filter(Boolean).join(" · "),Y=new Option(Q,String(ie));Y.dataset.recordId=q,te.get(D).append(Y)}if(o.replaceChildren(new Option(y.length?"选择记录":"暂无事件记录",""),...["告警","事件"].map(ie=>te.get(ie)).filter(Boolean)),V){const ie=[...o.options].find(O=>O.dataset.recordId===V);ie&&(o.value=ie.value)}o.disabled=!y.length}}return{update:E,destroy(){f.abort(),i.replaceChildren()}}}const bs=i=>Oi[i]||i||"整线总览";function nM(i,e,t){const n=document.createElement("div");n.className="camera-history",n.hidden=!0,n.innerHTML=`
    <label data-angle hidden>录像视角<select aria-label="录像视角"></select></label>
    <details>
      <summary>关联本地录像</summary>
      <form class="recording-form">
        <label>录像起始时间（UTC+8）<input name="start" type="datetime-local" step="0.001" required></label>
        <label>录像工位<select name="station"></select></label>
        <label>视频文件<input name="file" type="file" accept="video/*,.mp4,.webm,.mov,.m4v,.ogv" required></label>
        <button class="ghost" type="submit">关联录像</button>
      </form>
      <span class="recording-note" role="status"></span>
      <ul class="recording-list"></ul>
    </details>`;const s=i.querySelector("h2"),r=s.textContent,o=i.querySelector("form"),a=document.createElement("span");a.textContent="此时刻暂无对应录像";const c=n.querySelector("form"),l=n.querySelector("[data-angle]"),u=l.querySelector("select"),h=c.elements.start,d=c.elements.station;for(const z of["",...Object.keys(Oi)])d.add(new Option(bs(z),z));const f=c.elements.file,g=n.querySelector(".recording-note"),_=n.querySelector("ul"),m=n.querySelector("button"),p=[];let S,y,x,T,E=!1,b=!1,R;u.addEventListener("change",F);function v(){if(x){const z=x;x=null,z.pause(),z.removeAttribute("src"),z.load()}E=!1,b=!1,y=null}function M(){if(!T)return;const{meta:z,url:N}=T;T=null,z.onloadedmetadata=null,z.onerror=null,z.removeAttribute("src"),z.load(),URL.revokeObjectURL(N),m.disabled=!1}function A(){_.replaceChildren();for(const z of p.filter(N=>N.source===(S==null?void 0:S.source))){const N=document.createElement("li"),B=document.createElement("span");B.textContent=`${bs(z.station)} · ${z.name} · ${Ji(z.start)} 至 ${Ji(z.end)}`;const k=document.createElement("button");k.type="button",k.className="ghost",k.textContent="移除",k.setAttribute("aria-label","移除 "+z.name),k.onclick=()=>{p.splice(p.indexOf(z),1),y===z&&v(),URL.revokeObjectURL(z.url),A(),F()},N.append(B,k),_.append(N)}}function U(){if(!y||!x||!S||x.readyState<1)return;const z=(S.time-y.start)/1e3;if(Math.abs(x.currentTime-z)>(S.playing&&!b?.3:.012)&&(S.playing||(x.style.visibility="hidden"),x.currentTime=z),!S.playing)x.pause(),E=!1,b=!1;else if(x.paused&&!E&&!b){const B=x;E=!0,B.play().catch(()=>{x===B&&(S!=null&&S.playing)&&(b=!0)}).finally(()=>{x===B&&(E=!1)})}!x.seeking&&x.readyState>=2&&(x.style.visibility="")}function F(){if(!S)return;const{time:z,stationId:N,source:B}=S;if(!Number.isFinite(z)){l.hidden=!0,x&&v(),e.firstChild!==a&&e.replaceChildren(a),t("unavailable","无历史时刻","当前记录集为空，尚无设备记录或录像可按时刻对照。");return}const k=p.filter(D=>D.source===B&&z>=D.start&&z<D.end),V=N?k.filter(D=>D.station===N||!D.station):k,te=N?[]:[...new Set(V.map(D=>D.station))].sort();l.hidden=te.length<2;const ie=JSON.stringify(te);if(R!==ie){const D=u.value;R=ie,u.replaceChildren(...te.map(q=>new Option(bs(q),q))),te.includes(D)&&(u.value=D)}const O=V.find(D=>D.station===(N||u.value))||V.find(D=>!D.station)||V[0];if(!O){x&&v(),e.firstChild!==a&&e.replaceChildren(a),t("unavailable","无对应录像",`${Ji(z)}（UTC+8）${N?" · "+bs(N):""}。关联覆盖此时刻的本地录像可同步回看。`);return}if(O!==y){v(),y=O;const D=document.createElement("video");x=D,D.muted=!0,D.playsInline=!0,D.preload="auto",D.style.visibility="hidden",D.setAttribute("aria-label","历史录像 "+bs(O.station)),D.addEventListener("loadedmetadata",()=>{D===x&&U()});const q=()=>{D===x&&!D.seeking&&D.readyState>=2&&(D.style.visibility="")};D.addEventListener("seeked",q),D.addEventListener("loadeddata",q),D.addEventListener("error",()=>{D===x&&F()}),e.replaceChildren(D),D.src=O.url}if(x.error){t("failed","录像无法解码","请关联当前浏览器可解码的视频文件。");return}U();const H=((z-O.start)/1e3).toFixed(2);t("recording","历史录像",`${bs(O.station)} · ${O.name} · 片内 ${H} 秒`)}c.addEventListener("submit",z=>{if(z.preventDefault(),!S)return;const N=cf(h.value),B=f.files[0];if(!Number.isFinite(N)||!B){g.textContent="请选择录像并填写现场起始时间。";return}M();const k=URL.createObjectURL(B),V=document.createElement("video"),te=d.value.trim(),ie=S.source;T={meta:V,url:k},m.disabled=!0,g.textContent="正在读取视频时长…",V.preload="metadata",V.onerror=()=>{M(),g.textContent="无法读取此文件；请选择浏览器支持的录像。"},V.onloadedmetadata=()=>{const O=V.duration;if(!Number.isFinite(O)||O<=0){M(),g.textContent="录像缺少有效时长，请选择带有固定时长的视频文件。";return}const H=N+Math.round(O*1e3);if(p.some(D=>D.source===ie&&D.station===te&&D.start<H&&D.end>N)){M(),g.textContent="此工位已有重叠时段的录像。请先移除原录像或校正起始时间。";return}T=null,V.onloadedmetadata=null,V.onerror=null,V.removeAttribute("src"),V.load(),p.push({start:N,end:H,station:te,source:ie,url:k,name:B.name}),m.disabled=!1,f.value="",g.textContent="已关联到本页的当前记录集。",A(),F()},V.src=k});function X(z,{playing:N=!1,stationId:B="",source:k="",history:V=!1}={}){const te=!S,ie=(S==null?void 0:S.source)!==k;if(!Number.isFinite(z)&&!V){if(!S)return;M(),v(),S=null,n.remove(),n.hidden=!0,o.hidden=!1,s.textContent=r;return}const O=(S==null?void 0:S.stationId)!==B;S={time:z,playing:N,stationId:B,source:k},(te||ie)&&(ie&&M(),s.textContent="摄像头录像",o.hidden=!0,n.isConnected||i.append(n),n.hidden=!1,h.value=Zi(z),g.textContent="",f.value="",A()),(te||ie||O)&&document.activeElement!==d&&(B&&![...d.options].some(H=>H.value===B)&&d.add(new Option(B,B)),d.value=B||""),F()}return{setTime:X,destroy(){M(),v();for(const z of p)URL.revokeObjectURL(z.url);p.length=0,S=null,n.remove(),o.hidden=!1,s.textContent=r}}}const iM=/\.(?:avif|bmp|gif|jpe?g|mjpg|mjpeg|png|webp)$/i,sM=/\.(?:m4v|m3u8|mov|mp4|og[gv]|webm)$/i,Uh="支持 HTTP(S) 视频、图像和 MJPEG。";function rM(i){const e=i.querySelector("form"),t=i.querySelector("#camera-url"),n=i.querySelector("#camera-stop"),s=i.querySelector("#camera-clear"),r=i.querySelector("#camera-status"),o=i.querySelector("#camera-message"),a=i.querySelector("#camera-preview"),c=a.firstElementChild;let l=null,u=null,h=!1;const d=new AbortController,f={signal:d.signal};function g(E,b,R){r.dataset.state!==E&&(r.dataset.state=E),r.textContent!==b&&(r.textContent=b),o.textContent!==R&&(o.textContent=R),n.disabled=!l,s.disabled=!t.value&&!l}function _(){clearTimeout(u);const E=l;l=null,E&&(E instanceof HTMLVideoElement&&E.pause(),E.removeAttribute("src"),E instanceof HTMLVideoElement&&E.load(),a.replaceChildren(c))}function m(E){_(),g("failed","连接失败",E)}function p(E,b,R){_();const v=document.createElement(b?"img":"video");l=v;const M=F=>()=>{l===v&&F()},A=M(()=>{clearTimeout(u),g("ready",b?"已收到图像":"正在预览",b?"显示源地址返回的图像。":"已收到视频画面。")}),U=M(()=>{R?p(E,!0,!1):m("未收到可显示的画面，请检查地址、网络和媒体格式。")});b?(v.alt="现场摄像头画面",v.referrerPolicy="no-referrer",v.addEventListener("load",A,{once:!0})):(v.controls=!0,v.autoplay=!0,v.muted=!0,v.playsInline=!0,v.addEventListener("playing",M(()=>{v.videoWidth&&v.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&A()})),v.addEventListener("loadeddata",M(()=>{v.videoWidth?v.paused&&(clearTimeout(u),g("paused","待播放","已收到首帧，点击画面内的播放键开始。")):U()})),v.addEventListener("waiting",M(()=>g("loading","缓冲中","正在等待后续视频数据。"))),v.addEventListener("pause",M(()=>{!v.ended&&v.videoWidth&&g("paused","已暂停","可使用画面内的播放键继续。")})),v.addEventListener("ended",M(()=>g("ended","播放结束","可使用画面内的播放键重播。")))),v.addEventListener("error",U),a.replaceChildren(v),g("loading","连接中","正在等待首帧。"),u=setTimeout(U,12e3),v.src=E.href}e.addEventListener("submit",E=>{if(E.preventDefault(),h)return;_();let b;try{b=new URL(t.value.trim())}catch{g("failed","地址无效","请输入包含协议和主机的完整地址。"),t.focus();return}if(b.username||b.password){t.value="",g("failed","地址无效","请输入不含用户名和密码的预览地址。");return}if(!["http:","https:"].includes(b.protocol)){g("unsupported","待适配","当前协议需要后端转换为浏览器可播放的视频或图像流。");return}if(location.protocol==="https:"&&b.protocol==="http:"){g("unsupported","需要 HTTPS","请使用 HTTPS 媒体地址。");return}const R=iM.test(b.pathname)||/(^|\/)m?jpeg(\/|$)/i.test(b.pathname);p(b,R,!R&&!sM.test(b.pathname))},f),t.addEventListener("input",()=>{s.disabled=!t.value&&!l},f),n.addEventListener("click",()=>{_(),g("stopped","已停止","点击连接可重新打开画面。")},f);function S(){_(),t.value="",g("idle","未连接",Uh)}s.addEventListener("click",S,f);const y=nM(i,a,g);function x(E,b={}){const R=Number.isFinite(E)||b.history===!0;R&&!h&&_(),y.setTime(E,b),h&&!R&&(a.replaceChildren(c),g("idle","未连接",Uh)),h=R}function T(){d.abort(),y.destroy(),h=!1,S(),a.replaceChildren(c)}return window.addEventListener("pagehide",E=>{E.persisted?h||S():T()},f),S(),{setHistoryTime:x,destroy:T}}const Oh=["cnc","haas","fiveAxis"],lf={cnc:"数控机床",haas:"Haas 铣床",fiveAxis:"五轴加工中心",brt:"BRT 终检",warehouse:"立库",ring:"主环线"},Fh={good:"有效",uncertain:"存疑",bad:"异常",unknown:"未知"},Bh={stations:"工位",parts:"工件",alarms:"异常"},oM=[["arrived","门前到站"],["readConfirmed","读码确认"],["loadComplete","上料入夹具"],["machiningDone","加工完成"],["unloadComplete","下料回带"]];function ri(i){return i?lf[i]??(i.endsWith("-buffer")?ri(i.slice(0,-7))+"待加工区":i):"位置待确认"}function Po(i){const e=i==null?void 0:i.replace(/-buffer$/,"");return e==="fiveAxis"?"five-axis":lf[e]&&e!=="ring"?e:"integrated"}function kh(i){return typeof i=="string"?i.replace(/^slot_(\d+)_(\d+)$/,"$1层$2列"):"库位待确认"}function zh(i){const e=Math.max(0,Math.floor(i/1e3));return e<60?`${e} 秒`:`${Math.floor(e/60)} 分 ${e%60} 秒`}function aM(i,{onFocus:e,onSeek:t,onAck:n}={}){const s=i.ownerDocument;let r,o,a="stations",c="",l=!1;const u=new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});function h(O,H="",D){const q=s.createElement(O);return H&&(q.className=`ops-${H}`),D!=null&&(q.textContent=String(D)),q}function d(O,H,D,q="link"){const $=h("button",q,O);return $.type="button",$.dataset.opsAction=H,$.dataset.opsKey=D,$}function f(O){if(!Number.isFinite(O))return"时间未知";if(r.mode!=="demo"||!Number.isFinite(r.originTime))return u.format(O);const H=Math.max(0,Math.round(O-r.originTime)),D=String(Math.floor(H/6e4)).padStart(2,"0"),q=String(Math.floor(H/1e3)%60).padStart(2,"0"),$=Math.floor(H%1e3/100);return`+${D}:${q}.${$}`}function g(O,H){const D=h("div","evidence"),q=Fh[H==null?void 0:H.quality]??Fh.unknown,$=h("span","quality",`质量${q}`);$.dataset.quality=(H==null?void 0:H.quality)??"unknown";const ne=h("span","source",(H==null?void 0:H.source)||"来源待接入"),ce=h("span","time",f(H==null?void 0:H.sourceTime));ce.title="来源记录时间",D.append(ne,ce,$),O.append(D)}function _(O,H,D){const q=h("div","age"),$=h("span","duration","时长未知");Number.isFinite(D)&&($.dataset.since=String(D)),q.append(h("span","",H+" "),$),O.append(q)}function m(){if(Number.isFinite(r==null?void 0:r.timestamp))for(const O of v.querySelectorAll("[data-since]")){const H=zh(r.timestamp-Number(O.dataset.since));O.textContent!==H&&(O.textContent=H)}}function p(O,H,D,q){const $=d(D,"focus",`${O}/${H??""}`,q);return $.dataset.device=O,H&&($.dataset.part=H),$.setAttribute("aria-label",`定位${ri(O)}${H?"，"+H:""}`),$}function S(O,H){const D=d(O,"part",`${H}/${O}`,"part-link");return D.dataset.part=O,D.dataset.device=H,D.setAttribute("aria-label",`查看 ${O} 的履历并定位${ri(H)}`),D}function y(O,H="回看"){if(!(O!=null&&O.id)||!Number.isFinite(O.time))return null;const D=d(H,"seek",O.id,"link");return D.dataset.event=O.id,D.setAttribute("aria-label",`${H} ${O.workpieceId??""} ${O.label??""} ${f(O.time)}`),D}const x=h("div","panel"),T=h("div","header"),E=h("span","mode");T.append(h("h2","heading","运行总览"),E);const b=h("nav","nav");b.setAttribute("aria-label","运行信息");const R=new Map;for(const[O,H]of Object.entries(Bh)){const D=d(H,"tab",O,"tab");b.append(D),R.set(O,D)}const v=h("div","body");x.append(T,b,v),i.append(x);function M(O,H,D){const q=h("div","state-line");if(D&&q.append(h("span","field-label",D)),q.append(h("span","state",(H==null?void 0:H.status)??"未知")),H!=null&&H.workpieceId&&q.append(S(H.workpieceId,H.id)),O.append(q),typeof(H==null?void 0:H.details)=="string"&&H.details&&H.details!==H.status&&O.append(h("div","detail",H.details)),g(O,H),r.mode==="field"&&(H==null?void 0:H.sourceTime)!=null){const $=H.lastConfirmed;$?(F(O,H),_(O,"距确认已过",$.sourceTime)):O.append(h("div","detail","尚无有效确认")),H.quality!=="good"&&O.append(h("div","required-feedback","本次记录的设备状态待核实"))}}function A(O,H){const D=h("article","card"),q=H.get(O);D.dataset.station=O;const $=h("h3","station-name");if($.append(p(O,q==null?void 0:q.workpieceId,ri(O),"station-button")),D.append($),M(D,q),Oh.includes(O)){const ne=H.get(O+"-buffer"),ce=h("div","buffer");M(ce,ne,"待加工区"),D.append(ce)}else if(O==="warehouse"){const ne=r.stock??[],ce=ne.filter(ee=>ee.quality==="good"&&["占用","空位"].includes(ee.status)),Q=ce.filter(ee=>ee.status==="空位"),Y=ce.length?`已确认空位 ${Q.length} 个 · 在库工件 ${ce.length-Q.length} 件${ce.length<ne.length?` · ${ne.length-ce.length} 个库位待确认`:""}`:"空位数待确认";D.append(h("p","detail",Y));const ue=(r.events??[]).filter(ee=>ee.confirmed&&["inventoryOut","inventoryIn"].includes(ee.phase));if(r.mode==="demo"){const ee=new Set(ue.filter(P=>P.phase==="inventoryOut").map(P=>P.workpieceId)),se=ce.filter(P=>P.status==="占用"&&P.workpieceId&&!ee.has(P.workpieceId));D.append(h("p","detail",`未出库原料 ${se.length} 件`))}for(const[ee,se]of[["inventoryOut","最近出库"],["inventoryIn","最近回库"]]){const P=ue.findLast(de=>de.phase===ee),be=h("div","move");be.append(h("span","field-label",se)),P?(P.workpieceId&&be.append(S(P.workpieceId,"warehouse")),be.append(h("span","",`${kh(P.slot)} · ${f(P.sourceTime)}`))):be.append(h("span","","暂无记录")),D.append(be)}}else if(O==="brt"&&(q!=null&&q.lastConfirmed)){const ne=q.lastConfirmed;D.append(h("p","detail",`最近确认 · ${ne.label??"终检反馈"}${ne.workpieceId?" · "+ne.workpieceId:""}`))}return D}function U(){var H;if((H=r.alarms)!=null&&H.length){const D=r.alarms[0],q=d(`${ri(D.deviceId)} · ${D.label??"待处理告警"} ›`,"tab","alarms","active-alert");v.append(q)}const O=new Map((r.stations??[]).map(D=>[D.id,D]));for(const D of[...Oh,"brt","warehouse"])v.append(A(D,O))}function F(O,H){const D=H==null?void 0:H.lastConfirmed,q=D?`${D.label} · ${f(D.sourceTime)}`:"暂无已确认事件";O.append(h("div","detail","最后确认 · "+q))}function X(O){const H=h("li","event");H.dataset.phase=O.phase??"";const D=h("div","event-title");D.append(h("span","event-time",f(O.time)),h("strong","",O.label??O.phase??"设备事件")),H.append(D),O.detail&&typeof O.detail=="string"&&O.detail!==O.label&&H.append(h("div","detail",O.detail));const q=h("div","event-links");O.deviceId&&q.append(p(O.deviceId,O.workpieceId,ri(O.deviceId)));const $=y(O,"回看此刻");return $&&q.append($),H.append(q),g(H,O),H}function z(O,H){var q;if(v.append(h("h3","section-title","工艺卡与完成反馈")),!((q=O.route)!=null&&q.length)){v.append(h("p","empty","尚未取得该工件的工艺卡"));return}const D=h("ol","plan");for(const $ of O.route){const ne=h("li","plan-row"),ce=H.findLast(Y=>Y.deviceId===$&&Y.phase==="machiningDone"&&Y.confirmed),Q=O.deviceId===$;if(ne.append(h("span","",ri($)),h("span",ce?"completed":"pending",ce?`已确认 · ${f(ce.sourceTime)}`:Q?`${O.status} · 待完成反馈`:"待完成反馈")),ce){const Y=y(ce,"回看");Y&&ne.append(Y)}D.append(ne)}if(v.append(D),O.route.includes("fiveAxis")){v.append(h("h3","section-title","五轴工位确认进度"));const $=h("ol","plan");for(const[ne,ce]of oM){const Q=H.findLast(ue=>ue.deviceId==="fiveAxis"&&ue.phase===ne&&ue.confirmed),Y=h("li","plan-row");if(Y.dataset.step=ne,Y.append(h("strong","",ce),h("span",Q?"completed":"pending",Q?f(Q.sourceTime):"待反馈")),Q){const ue=y(Q,"回看");ue&&Y.append(ue)}$.append(Y)}v.append($)}}function N(O){const H=h("article","alarm-card"),D=h("h3","alarm-title",O.label??"待处理告警");H.append(D);const q=h("div","event-links");O.deviceId&&q.append(p(O.deviceId,O.workpieceId,`定位${ri(O.deviceId)}`)),O.workpieceId&&q.append(S(O.workpieceId,O.deviceId)),H.append(q),F(H,O);const $=(r.events??[]).find(ne=>ne.id===O.id);if(($==null?void 0:$.phase)==="readWait"?(H.append(h("p","required-feedback","等待反馈 · 读码器返回工件标识和工艺卡")),H.append(h("p","detail","恢复条件 · 收到该工件的读码确认后接续上料"))):O.details&&H.append(h("p","detail",O.details)),$){const ne=y($,"回看到告警时刻");ne&&H.append(ne)}return _(H,"已等待",O.since),g(H,O),Number.isFinite(O.acknowledgedAt)?H.append(h("p","detail",`本会话已阅 · ${f(O.acknowledgedAt)}`)):!r.isHistory&&n&&H.append(d("标记已阅","ack",O.id,"link")),H}function B(){const O=r.parts??[],H=O.find(Y=>Y.id===o)??O.find(Y=>{var ue;return((ue=Y.route)==null?void 0:ue.length)===1&&Y.route[0]==="fiveAxis"})??O[0];if(o=(H==null?void 0:H.id)??null,!H){v.append(h("p","empty","暂无已观测的工件。"));return}const D=h("label","select-label","跟踪工件"),q=h("select","select");q.dataset.opsAction="select-part";for(const Y of O){const ue=h("option","",Y.id);ue.value=Y.id,q.append(ue)}q.value=H.id,D.append(q),v.append(D);const $=h("article","card");$.append(h("strong","part-state",H.status??"状态未知")),H.deviceId&&$.append(p(H.deviceId,H.id,`定位${ri(H.deviceId)}`)),$.append(h("div","detail",`原库位 · ${kh(H.sourceSlot)}`)),F($,H),_($,"本状态已持续",H.since),g($,H),v.append($);for(const Y of r.alarms??[])Y.workpieceId===H.id&&v.append(N(Y));const ne=(r.events??[]).filter(Y=>Y.workpieceId===H.id);if(z(H,ne),v.append(h("h3","section-title",`工件履历 · ${ne.length} 条`)),!ne.length){v.append(h("p","empty","截至此刻暂无工件事件。"));return}const ce=[...ne].reverse(),Q=h("ol","timeline");for(const Y of l?ce:ce.slice(0,8))Q.append(X(Y));v.append(Q),ne.length>8&&v.append(d(l?"收起较早事件":`查看更早的 ${ne.length-8} 条`,"history","expand","more"))}function k(){var q,$,ne;v.append(h("h3","section-title","当前告警"));for(const ce of r.alarms??[])v.append(N(ce));(q=r.alarms)!=null&&q.length||v.append(h("p","empty",r.mode==="field"&&!(($=r.events)!=null&&$.length)?"尚未收到现场告警状态。":"截至此刻无活动告警。"));const O=new Map,H=[];for(const ce of r.events??[]){const Q=ce.alarmId??JSON.stringify([ce.deviceId,ce.workpieceId]);["readWait","alarmRaised","rejectHold"].includes(ce.phase)?(O.has(Q)||O.set(Q,ce),H.push({event:ce})):["readConfirmed","alarmCleared"].includes(ce.phase)&&ce.confirmed&&O.has(Q)&&(H.push({event:ce,resolved:O.get(Q)}),O.delete(Q))}if(v.append(h("h3","section-title","告警与恢复记录")),!H.length){v.append(h("p","empty","截至此刻暂无告警处置记录。"));return}const D=h("ol","timeline");for(const{event:ce,resolved:Q}of H.reverse()){const Y=X(ce);Y.append(h("p","detail",Q?`反馈已恢复 · 告警持续 ${zh(ce.time-Q.time)}`:"告警发生")),ce.workpieceId&&Y.prepend(S(ce.workpieceId,ce.deviceId));const ue=(ne=r.acknowledgements)==null?void 0:ne.find(ee=>ee.id===ce.id&&ee.time<=r.timestamp);ue&&Y.append(h("p","detail",`本会话已阅 · ${f(ue.time)}`)),D.append(Y)}v.append(D)}function V(){var H,D;if(!r)return;const O=v.contains(s.activeElement)?s.activeElement.dataset:null;E.textContent=r.mode==="demo"?r.isHistory?"演示历史":"离线演示":r.isHistory?"现场历史":"现场信号",E.dataset.mode=r.mode;for(const[q,$]of R)$.setAttribute("aria-pressed",String(q===a)),q==="alarms"&&($.textContent=Bh.alarms+((H=r.alarms)!=null&&H.length?" · "+r.alarms.length:""));v.replaceChildren(),a==="stations"?U():a==="parts"?B():k(),O!=null&&O.opsAction&&((D=Array.from(v.querySelectorAll("[data-ops-action]")).find(q=>q.dataset.opsAction===O.opsAction&&q.dataset.opsKey===O.opsKey))==null||D.focus({preventScroll:!0})),m()}function te(O){O&&(o=O,a="parts",l=!1,V())}x.addEventListener("click",O=>{var Q;const H=O.target.closest("button[data-ops-action]");if(!H||!x.contains(H))return;const{opsAction:D,opsKey:q,part:$,device:ne,event:ce}=H.dataset;if(D==="tab")a=q,V();else if(D==="history")l=!l,V();else if(D==="focus")$&&(o=$),e==null||e(Po(ne),$??null);else if(D==="part")te($),e==null||e(Po(ne),$);else if(D==="ack")!r.isHistory&&((Q=r.alarms)!=null&&Q.some(Y=>Y.id===q&&!Number.isFinite(Y.acknowledgedAt)))&&(n==null||n(q));else if(D==="seek"){const Y=r==null?void 0:r.events.find(ue=>ue.id===ce);Y&&(t==null||t(Y.time,Y.id),e==null||e(Po(Y.deviceId),Y.workpieceId??null))}}),x.addEventListener("change",O=>{if(O.target.dataset.opsAction!=="select-part")return;const H=O.target.value,D=r==null?void 0:r.parts.find(q=>q.id===H);te(H),D&&(e==null||e(Po(D.deviceId),H))});function ie(O){var q,$,ne;if(!O)return;const H=r;r={...O,mode:O.sourceMode??O.mode,isHistory:O.isHistory??O.mode==="history"};const D=JSON.stringify([r.mode,r.isHistory,r.originTime,(q=r.events)==null?void 0:q.length,(ne=($=r.events)==null?void 0:$.at(-1))==null?void 0:ne.id,r.stations,r.stock,r.parts,r.alarms,r.acknowledgements]);if(D===c){Math.floor(((H==null?void 0:H.timestamp)??0)/1e3)!==Math.floor(r.timestamp/1e3)&&m();return}c=D,V()}return{update:ie,selectPart:te}}const Ut=i=>document.getElementById(i),cM={demo:"离线演示",field:"现场实时",history:"历史回看"},ic=i=>new Date(i).toLocaleString("zh-CN",{hour12:!1,timeZone:"Asia/Shanghai"}),lM=["laserMm","encoderPulse","beltMps"],uM=["mm","pulse","m/s"],hM=i=>i==="integrated"?null:i==="five-axis"?"fiveAxis":i;function dM({runtime:i,playback:e,view:t,focus:n,camera:s,setDemoTime:r,pauseDemo:o,paintScene:a,startDelay:c}){let l="demo",u="demo",h=nc(),d=null,f="",g="未连接",_=null,m=null;const p=new Map,S=new WeakMap;let y=0,x=null,T=!1,E=0,b=0,R=0,v="",M="",A=0;const U=new WeakMap,F=Ut("field-message"),X=[...document.querySelectorAll("#operator-modes button")],z=[...document.querySelectorAll(".sensor-panel .telemetry")],N=aM(Ut("operations-panel"),{onFocus(Q,Y){Y&&N.selectPart(Y),n(Q),D()},onSeek(Q,Y){ie(Q,Y)},onAck(Q){if(l==="history"||!k())return;const Y=k();U.has(Y)||U.set(Y,new Map),U.get(Y).set(Q,te()),D()}}),B=tM(Ut("history-controls"),{onSeekTime(Q,Y){if(ie(Q,typeof Y=="string"?Y:Y==null?void 0:Y.id),Y!=null&&Y.deviceId){Y.workpieceId&&N.selectPart(Y.workpieceId);const ue=Y.deviceId.replace(/-buffer$/,"").replace("fiveAxis","five-axis");n(ue==="ring"?"integrated":ue)}},onTogglePlayback(){if(l!=="history")return;const[Q,Y]=V();Q==null||Y<=Q||(T||(_>=Y&&(_=Q),E=_,b=performance.now(),m=null),T=!T,D())},onReturnCurrent(){O(u==="demo"?"demo":"field")}});function k(){var Q,Y;return l==="history"?x??(u==="demo"?(Q=i())==null?void 0:Q.operations:h):l==="demo"?(Y=i())==null?void 0:Y.operations:h}function V(){const Q=k();return Q!=null&&Q.records.length?u==="demo"?[Q.originTime,Q.originTime+i().duration*1e3]:[Q.records[0].time,Q.records.at(-1).time]:[null,null]}function te(){var Q;return l==="history"?_:l==="field"?Date.now():(Q=i())!=null&&Q.operations?i().operations.originTime+Math.round(e().elapsed*1e3):null}function ie(Q,Y=null,ue=null){l!=="history"&&(l==="demo"&&(R=e().elapsed,o()),x=k(),u=l,l="history"),ue&&(x=ue,u="field");const[ee,se]=V();_=ee==null?null:Math.round(Math.max(ee,Math.min(Q??se,se))),m=Y??null,T=!1,D()}function O(Q){if(Q!==l){if(Q==="history"){ie(te());return}l==="demo"&&(R=e().elapsed,o()),l=u=Q,x=null,m=null,T=!1,v="",Q==="demo"&&i()&&r(R),D()}}function H(Q){var P;const ue=u==="field"?(Q==null?void 0:Q.events)??[]:[],ee=[u,l,A,ue.length,(P=ue.at(-1))==null?void 0:P.id].join("/");if(ee===M)return;M=ee;const se=[];lM.forEach((be,de)=>{const xe=ue.findLast(w=>{var K;return Number.isFinite((K=w.readings)==null?void 0:K[be])}),fe=ue.findLast(w=>{var K;return w.confirmed&&Number.isFinite((K=w.readings)==null?void 0:K[be])}),Ie=z[de],_e=Ie.querySelector("strong"),L=Ie.querySelector("em");_e.textContent=(fe?fe.readings[be]:"—")+" "+uM[de],L.textContent=fe?fe.source+" · "+ic(fe.sourceTime)+" · 最近确认":"尚无已确认读数",xe&&!xe.confirmed&&(L.textContent+="。最新样本未确认 · "+xe.source+" · "+ic(xe.sourceTime)),fe&&se.push(fe.sourceTime)}),z[3].querySelector("strong").textContent=se.length?ic(Math.max(...se)):"暂无数据",z[3].querySelector("em").textContent=l==="history"?"回看时刻内的记录":"现场源时间",Ut("sensor-source").textContent=se.length?l==="history"?"历史读数":"现场读数":"待接入"}function D(){var P,be,de;l==="history"&&_==null&&(_=V()[0]);const Q=k(),Y=te(),ue=Q==null?void 0:Q.at(Y??0,m??void 0),ee=u==="demo"?"离线工艺演示":"现场事件";if(document.body.dataset.operatorMode=l,document.body.dataset.operatorSource=u,X.forEach(xe=>xe.setAttribute("aria-pressed",String(xe.dataset.mode===l))),Ut("source-mode").textContent=l==="history"?"回看 · "+ee:cM[l],Ut("source-description").textContent=u==="demo"?"状态来自工艺演示，机构动作按模型计算。":(l==="history"?"按源时间还原现场记录。":g+"。")+"设备显示 CAD 姿态，青色标记表示最近一次确认的工件坐标。",Ut("delay-example").disabled=!i(),Ut("history-controls").hidden=l!=="history",ue){const xe=U.get(Q),fe=ue.alarms.map(_e=>{const L=xe==null?void 0:xe.get(_e.id);return L!=null&&L<=Y?{..._e,acknowledgedAt:L}:_e}),Ie=Array.from(xe??[],([_e,L])=>({id:_e,time:L})).filter(_e=>_e.time<=Y);N.update({...ue,alarms:fe,acknowledgements:Ie,isHistory:l==="history",sourceMode:u,connection:g,viewId:t()})}if(H(ue),l==="history"){const[xe,fe]=V();B.update({mode:l,playing:T,time:Y,startTime:xe,endTime:fe,source:u,events:(Q==null?void 0:Q.records)??[]});const Ie=m&&((P=Q==null?void 0:Q.records.find(w=>w.id===m))==null?void 0:P.deviceId),_e=hM(t())||(Ie==null?void 0:Ie.replace(/-buffer$/,""));Q&&!S.has(Q)&&S.set(Q,++y);const L=u==="demo"?"demo:"+((be=i())==null?void 0:be.selectedStation):"field:"+S.get(Q);s.setHistoryTime(Y,{history:!0,playing:T,stationId:_e,source:L})}else s.setHistoryTime(null);const se=[l,u,t(),u==="demo"?Y:ue==null?void 0:ue.events.length,m,A,(de=i())==null?void 0:de.selectedStation].join("/");se!==v&&(v=se,a({mode:l,source:u,snapshot:ue,time:Y,origin:Q==null?void 0:Q.originTime}))}function q(){d==null||d.close(),d=null,g="已断开，保留最近确认",Ut("field-stop").disabled=!0}function $(Q){h.append(Q)&&A++,Ut("export-events").disabled=!h.records.length,F.textContent="本次采集已保存 "+h.records.length+" 条事件（当前页面会话）。",D()}Ut("field-form").addEventListener("submit",Q=>{Q.preventDefault();let Y;try{if(Y=new URL(Ut("field-url").value),!["http:","https:"].includes(Y.protocol)||Y.username||Y.password)throw Error()}catch{F.textContent="请输入 HTTP(S) 事件流地址。";return}q(),Y.href!==f&&(f&&p.set(f,h),h=p.get(Y.href)??nc(),A++,Ut("export-events").disabled=!h.records.length),f=Y.href,g="正在连接";try{d=new EventSource(f)}catch{g="连接失败",F.textContent="浏览器无法打开该事件流。",D();return}const ue=d;ue.onopen=()=>{d===ue&&(g="事件流已连接",F.textContent="连接已建立，等待事件。",D())},ue.onmessage=ee=>{if(d===ue)try{$(JSON.parse(ee.data))}catch(se){F.textContent="未接纳事件 · "+se.message}},ue.onerror=()=>{d===ue&&(g="数据中断，保留最近确认",F.textContent=ue.readyState===EventSource.CLOSED?"连接已关闭。可以手动重连。":"连接中断，浏览器正在重连。",D())},F.textContent="正在连接事件流…",Ut("field-stop").disabled=!1,O("field"),D()}),Ut("field-stop").addEventListener("click",()=>{q(),F.textContent=g,D()}),Ut("field-file").addEventListener("change",async Q=>{const Y=Q.target.files[0];if(Y){try{const ue=JSON.parse(await Y.text());if(ue!=null&&ue.origin&&ue.origin!=="field")throw Error("文件来源应为现场事件");const ee=Array.isArray(ue)?ue:ue.records;if(!Array.isArray(ee)||!ee.length)throw Error("文件应包含非空事件数组");const se=nc(ee);A++,F.textContent=Y.name+" · 已读取 "+se.records.length+" 条",ie(se.records.at(-1).time,null,se)}catch(ue){F.textContent="未打开记录 · "+ue.message}Q.target.value=""}}),Ut("export-events").addEventListener("click",()=>{const Q={origin:"field",version:1,records:h.records},Y=document.createElement("a");Y.href=URL.createObjectURL(new Blob([JSON.stringify(Q,null,2)],{type:"application/json"})),Y.download="现场事件-"+new Date().toISOString().slice(0,10)+".json",Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),1e3)}),X.forEach(Q=>Q.addEventListener("click",()=>O(Q.dataset.mode))),Ut("delay-example").addEventListener("click",()=>{O("demo"),c(),N.selectPart("STOCK-03"),D()});let ne=-1;const ce=setInterval(()=>{if(!document.hidden)if(l==="history"&&T){const[,Q]=V();_=Math.min(Q,Math.round(E+performance.now()-b)),_>=Q&&(T=!1),D()}else l==="field"&&Math.floor(Date.now()/1e3)!==ne&&(ne=Math.floor(Date.now()/1e3),D())},200);return window.addEventListener("pagehide",Q=>{Q.persisted||(clearInterval(ce),d==null||d.close())}),{refresh:D,get mode(){return l},get source(){return u}}}const Hh={type:"change"},Yl={type:"start"},uf={type:"end"},Lo=new Js,Vh=new mn,fM=Math.cos(70*Ze.DEG2RAD),Ct=new I,nn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6;class pM extends Ug{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Et,this._lastTargetPosition=new I,this._quat=new Et().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oh,this._sphericalDelta=new oh,this._scale=1,this._panOffset=new I,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new I,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gM.bind(this),this._onPointerDown=mM.bind(this),this._onPointerUp=_M.bind(this),this._onContextMenu=EM.bind(this),this._onMouseWheel=yM.bind(this),this._onKeyDown=MM.bind(this),this._onTouchStart=SM.bind(this),this._onTouchMove=bM.bind(this),this._onMouseDown=xM.bind(this),this._onMouseMove=vM.bind(this),this._interceptControlDown=TM.bind(this),this._interceptControlUp=wM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hh),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<fM?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(Hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _M(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uf),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Yl)}function vM(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yM(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(Yl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uf))}function MM(i){this.enabled!==!1&&this._handleKeyDown(i)}function SM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Yl)}function bM(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function EM(i){this.enabled!==!1&&i.preventDefault()}function TM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gh(i,e){if(e===mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yc||e===gd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Yc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class AM extends nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new FM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Er.extractUrlBase(e);o=Er.resolveURL(l,this.path)}else o=Er.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hf){try{o[Ke.KHR_BINARY_GLTF]=new jM(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new oS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new PM;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new YM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new KM;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new $M;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function RM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CM{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Fe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],en);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zl(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new jd(u),l.distance=h;break;case"spot":l=new yg(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class PM{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const s=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}}class LM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class IM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class DM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class UM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class OM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class FM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],en),Promise.all(r)}}class BM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class zM{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class HM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class VM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class GM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class qM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new He,m=new I,p=new Et,S=new I(1,1,1),y=new Cd(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,S));for(const x in c)if(x==="_COLOR_0"){const T=c[x];y.instanceColor=new $c(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const hf="glTF",gr=12,Wh={JSON:1313821514,BIN:5130562};class jM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-gr,r=new DataView(e,gr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Wh.JSON){const l=new Uint8Array(e,gr+o,a);this.content=n.decode(l)}else if(c===Wh.BIN){const l=gr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=cl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ns[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,en,d)})})}}class KM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $M{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class df extends Wr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,y=p-d+h;for(let x=0;x!==a;x++){const T=o[_+x+a],E=o[_+x+c]*u,b=o[g+x+a],R=o[g+x]*u;r[x]=S*T+y*E+m*b+p*R}return r}}const ZM=new Et;class JM extends df{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ZM.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xh={9728:Jt,9729:xn,9984:od,9985:Io,9986:_r,9987:li},qh={33071:Ci,33648:Xo,10497:zs},rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QM={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Nr},oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),i.DefaultMaterial}function qi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function nS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iS(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ac(t.attributes):e=i.indices+":"+ac(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ac(i.targets[n]);return e}function ac(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ll(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rS=new He;class oS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new _g(this.options.manager):this.textureLoader=new bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return qi(r,a,s),ai(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=rc[s.type],a=Ns[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Qt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=rc[s.type],l=Ns[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(S);y||(_=new l(a,p*f,s.count*f/u),y=new xm(_,f/u),t.cache.add(S,y)),m=new Rl(y,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Qt(_,c,g);if(s.sparse!==void 0){const p=rc.SCALAR,S=Ns[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new S(o[1],y,s.sparse.count*p),E=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,R=T.length;b<R;b++){const v=T[b];if(m.setX(v,E[b*c]),c>=2&&m.setY(v,E[b*c+1]),c>=3&&m.setZ(v,E[b*c+2]),c>=4&&m.setW(v,E[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Xh[d.magFilter]||xn,u.minFilter=Xh[d.minFilter]||li,u.wrapS=qh[d.wrapS]||zs,u.wrapT=qh[d.wrapT]||zs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==xn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Lt(_);m.needsUpdate=!0,d(m)}),t.load(Er.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ai(h,o),h.userData.mimeType=o.mimeType||sS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Id,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new sa,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return et}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const h=s[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const u=r.alphaMode||oc.OPAQUE;if(u===oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===oc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==rn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rn){const h=r.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],en)}return r.emissiveTexture!==void 0&&o!==rn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&qi(s,h,r),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return jh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=iS(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=jh(new Bt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?eS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const S=l[f];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ym(_,S):new Je(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?p.geometry=Gh(p.geometry,gd):m.mode===Sn.TRIANGLE_FAN&&(p.geometry=Gh(p.geometry,Yc));else if(m.mode===Sn.LINES)p=new Pd(_,S);else if(m.mode===Sn.LINE_STRIP)p=new Ll(_,S);else if(m.mode===Sn.LINE_LOOP)p=new Ld(_,S);else if(m.mode===Sn.POINTS)p=new Tm(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&qi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&qi(s,h[0],r),h[0];const d=new ct;r.extensions&&qi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Ze.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new kl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,y=d.length;S<y;S++){const x=d[S],T=f[S],E=g[S],b=_[S],R=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,T,E,b,R);if(v)for(let M=0;M<v.length;M++)p.push(v[M])}return new ug(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Ad:l.length>1?u=new ct:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&qi(n,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&qi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Gn||d instanceof Lt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ei[r.path]===Ei.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ei[r.path]){case Ei.weights:l=Xs;break;case Ei.rotation:l=qs;break;case Ei.position:case Ei.scale:l=js;break;default:switch(n.itemSize){case 1:l=Xs;break;case 2:case 3:default:l=js;break}break}const u=s.interpolation!==void 0?QM[s.interpolation]:Ur,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ei[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ll(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof qs?JM:df;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aS(i,e,t){const n=e.attributes,s=new Tt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=ll(Ns[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ll(Ns[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function jh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=cl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),ai(i,e),aS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tS(i,e.targets,t):i})}const cS="./models/lightweight/",kn=(i,e,t,n,s,r={})=>({id:i,name:e,file:cS+t,kind:"model",state:"reference",dimensions:n,source:s,...r}),ff=[{id:"integrated",label:"组合工艺线",status:"mixed",description:"立库按工件标识出料，接驳 AUBO i5 从短输送带取件，放到指定环线带道。三台加工设备按工艺卡接料，BRT 在后侧带面上方终检，合格件经接驳臂和立库货叉回原库位。",assets:[kn("integrated-cnc","数控机床（组合工位）","cnc-enclosed-lod1.glb","内部主轴 · 夹具 · 工作台","Grab3D CNC Machine · CC0 · 宝鸡机床替代模型",{state:"reference",motion:{type:"cnc",evidence:"上下料臂将工件送入加工区"}}),kn("integrated-haas","Haas VF-3/SS（组合工位）","haas-vf3ss-assembled.glb","官方 AP214 · 77 节点","沿用 Haas 完整轻量装配",{state:"verified",rotation:[Math.PI/2,0,0],floorReference:/PADS_VF-3/i,motion:{type:"haas",evidence:"上下料臂将工件送入加工区"}}),kn("integrated-five-axis","五轴加工中心（组合工位）","vmc300-assembled.glb","B/C 转台 · XYZ 主轴","Penta Solo 官方仿真装配 · 五轴加工中心替代模型",{state:"reference",motion:{type:"vmc",evidence:"上下料臂将工件送入加工区"}}),kn("loader-arm-cnc","数控机床旁 AUBO i5 上下料机器人","aubo-i5-corrected-lod1.glb","AUBO i5 六轴轻量装配","AUBO i5 官方 STEP 轻量模型",{state:"verified",motion:{evidence:"扫描分流后夹取工件进入数控机床，加工后放回环线"}}),kn("loader-arm-haas","Haas 旁 AUBO i5 上下料机器人","aubo-i5-corrected-lod1.glb","AUBO i5 六轴轻量装配","AUBO i5 官方 STEP 轻量模型",{state:"verified",motion:{evidence:"扫描分流后夹取工件进入 Haas，加工后放回环线"}}),kn("loader-arm-five-axis","五轴旁 AUBO i5 上下料机器人","aubo-i5-corrected-lod1.glb","AUBO i5 六轴轻量装配","AUBO i5 官方 STEP 轻量模型",{state:"verified",motion:{evidence:"扫描分流后夹取工件进入五轴中心，加工后放回环线"}}),kn("warehouse-arm-aubo","立库接驳 AUBO i5","aubo-i5-corrected-lod1.glb","AUBO i5 六轴轻量装配","AUBO i5 官方 STEP 轻量模型",{state:"verified",motion:{evidence:"在立库短带与指定环线带道之间双向取放工件"}}),kn("integrated-ring","三道独立驱动环形输送线","circular-conveyor-assembled.glb","三道并排闭环 · 顺时针运行","组合工艺线参数化输送模型",{state:"reference",motion:{type:"ring",evidence:"每个在制工件固定分配一条带道，各带道分别随工序送料、停靠和回库"}}),kn("integrated-brt","环线上方 BRT 四轴检测机器人","brtipl1003a-corrected-lod1.glb","顶置四轴 · 扫描头 · 跟随检测","BRTIRPL1003A 官方 STEP 轻量模型",{state:"verified",rotation:[Math.PI,0,0],motion:{type:"brt",evidence:"加工件回到环线后由上方四轴机器人扫描识别"}}),kn("integrated-warehouse","出入库立库","warehouse-assembled.glb","出库 · 货叉 · 3 列 × 4 层","沿用立库完整轻量装配",{state:"reference",motion:{type:"warehouse",evidence:"先出库供加工，最后重新入库"}})]}];function lS(i,e,t){const n=ff.find(r=>r.id===i),s=(r,o,a={})=>{var u;const c=n.assets.find(h=>h.id===r),l={source:c.source,role:c.state,units:"metre",motionEvidence:((u=c.motion)==null?void 0:u.evidence)||null,...a.metadata||{}};return e(c.file,o,c.name,c.state,i,null,t.clone(),{normalizeToFloor:!0,rotation:c.rotation,floorReference:c.floorReference,deviceId:c.id,motion:c.motion,kinematicsCandidate:c.kinematicsCandidate,prepare:c.prepare,...a,metadata:l})};s("integrated-cnc",[5,0,2.2],{motion:{type:"cnc"},deferMotion:!0}),s("integrated-haas",[.9,0,1.65],{motion:{type:"haas"},deferMotion:!0}),s("integrated-five-axis",[-4.5,0,2.5],{motion:{type:"vmc"},deferMotion:!0,metadata:{machiningSurface:"flat-bore-plate"}}),s("loader-arm-cnc",[5.42,1.02,3.16]),s("loader-arm-haas",[.69,.94,3.12]),s("loader-arm-five-axis",[-4.23,.92,3.13]),s("warehouse-arm-aubo",[10.15,.96,1.1]),s("integrated-ring",[1,0,.5],{deviceId:"integrated-ring",motion:{type:"ring"},deferMotion:!0,prepare:r=>r.traverse(o=>{o.isMesh&&(o.visible=!1)}),metadata:{proceduralOnly:!0,longLoopOptions:{length:17.6,width:6.6,radius:1.1}}}),s("integrated-brt",[6,1.05,-2.62],{deviceId:"integrated-brt",rotation:[Math.PI,0,0],motion:{type:"brt"},deferMotion:!0}),s("integrated-warehouse",[12.1,0,.5],{deviceId:"integrated-warehouse",motion:{type:"warehouse"},deferMotion:!0})}const uS=[["integrated","组合工艺线",null],["cnc","数控机床","integrated-cnc"],["haas","Haas VF-3/SS 铣床","integrated-haas"],["five-axis","五轴加工中心","integrated-five-axis"],["brt","BRT 四轴检测机器人","integrated-brt"],["warehouse","立库","integrated-warehouse"]],Kl=uS.map(([i,e,t])=>({id:i,label:e,deviceId:t})),Yh={overview:"integrated",standalone:"cnc",inspection:"brt",aubo:"warehouse"};function pf(i){return Kl.some(e=>e.id===i)?i:Object.hasOwn(Yh,i)?Yh[i]:"integrated"}function hS(i){return new Map(Object.entries(i).map(([e,t])=>{const n="integrated-"+(e==="fiveAxis"?"five-axis":e),{x:s,z:r}=t.pickup,o=new Tt(new I(s-1.05,-1/0,r-.43),new I(s+1.05,1/0,r+.43)),a=[new mn(new I(1,0,0),-o.min.x),new mn(new I(-1,0,0),o.max.x),new mn(new I(0,0,1),-o.min.z),new mn(new I(0,0,-1),o.max.z)];return[n,{bounds:o,planes:a,arm:t.arm}]}))}function mf(i,e){if(!i.isMesh||i.userData.viewClipBounds===(e==null?void 0:e.bounds))return;i.userData.viewClipBounds=e==null?void 0:e.bounds;const t=Array.isArray(i.material)?i.material:[i.material];for(const n of t)n.clippingPlanes=(e==null?void 0:e.planes)??null,n.clipShadows=!!e}function ul(i,e,t){let n=i.parent;for(;n&&!n.userData.deviceRoot;)n=n.parent;const s=t&&(n==null?void 0:n.userData.deviceId)==="integrated-ring",r=!e||(n==null?void 0:n.userData.deviceId)===e||t&&n===t.arm||s;i.traverse(o=>{r?o.layers.enable(0):o.layers.disable(0),mf(o,s?t:null)})}function dS(i,e){e&&(e.arm.visible=!0,i.model.visible=!0),i.model.traverse(t=>mf(t,e))}function fS(i,e){const t=Kl.find(n=>n.id===pf(e));for(const n of i.children)n.userData.deviceRoot&&(n.visible=!t.deviceId||n.userData.deviceId===t.deviceId);i.traverse(n=>{!n.userData.productionLineOnly&&!["combined-workpiece","waiting-area-workpiece"].includes(n.userData.role)||ul(n,t.deviceId)})}function pS(){const i="digital-twin.production.playback.v2";function e(){try{const s=JSON.parse(localStorage.getItem(i));if(s&&Number.isFinite(s.elapsed)&&s.elapsed>=0&&Number.isFinite(s.savedAt)&&typeof s.playing=="boolean"&&typeof s.station=="string")return s}catch{}return null}function t(s,r,o){try{localStorage.setItem(i,JSON.stringify({elapsed:s,playing:r,station:o,savedAt:Date.now()}))}catch{}}function n(s){return s.elapsed+(s.playing?Math.max(0,Date.now()-s.savedAt)/1e3:0)}return{key:i,read:e,write:t,elapsed:n}}const Ys={cnc:{recipeId:"CNC-01",partId:"CNC-W01",operation:"夹持毛坯上表面椭圆走刀",datum:"虎钳内原装毛坯上表面中心",radiusX:-58,radiusZ:-52,centerX:5,turns:1,depth:3},haas:{recipeId:"HAAS-01",partId:"VF3-W01",operation:"Haas 矩形毛坯平面轮廓铣削",datum:"工作台毛坯上表面中心",radiusX:-108,radiusZ:-68,centerX:0,turns:1,depth:3.1},vmc:{recipeId:"PENTA-01",partId:"SOLO-W01",operation:"五轴转台上 8° 斜面轮廓随动",datum:"转台毛坯斜面中心，沿工件 X 方向升高 8°",radiusX:13,radiusZ:11,centerX:0,turns:2,depth:.7,slopeDeg:8,tiltDeg:28}};function hl(i,e,t){const n=2*Math.PI*i.turns*e;return t.set(i.centerX+i.radiusX*Math.cos(n),0,i.radiusZ*Math.sin(n)).multiplyScalar(.001)}function $l(i,e,t,n,s){let r=0,o=null;const a=new I,c=Math.tan(Ze.degToRad(e.slopeDeg||0)),l=Array.from({length:96},(d,f)=>{const g=hl(e,f/(96*e.turns),new I);return g.y=g.x*c+2e-4,g.add(s)}),u=new Ld(new Bt().setFromPoints(l),new sa({color:5954513,toneMapped:!1}));u.name=e.recipeId+" programmed contour",u.visible=!1,n.add(u);function h(d){const{relative:f,inclination:g,depth:_}=t(),m=Ze.smoothstep(d,6,12);hl(e,m,a);const p=Math.hypot(f.x-a.x,f.z-a.z)*1e3,S=_??-f.y*1e3,y=d>=6&&d<=12,x=E=>y?E?"pass":"fail":null,T=[{label:"刀尖相对表面的法向切入量",target:e.depth.toFixed(1)+" ± 0.5",value:S,unit:"mm",verdict:x(Math.abs(S-e.depth)<=.50001)},{label:"刀尖在工件 XZ 平面的轨迹偏差",target:"≤ 0.5",value:y?p:null,unit:"mm",verdict:x(p<=.50001)}];return e.tiltDeg&&T.push({label:"毛坯随 B 轴的倾角",target:"−28 至 +28",value:g,unit:"°",verdict:x(Math.abs(g)<=28.0001)}),T}return{update(d){d>12&&!o&&(i.update(12),o=h(12)),d<=12&&(o=null),i.update(d),r=d,u.visible=d>=6},reset(){i.reset(),o=null,r=0,u.visible=!1},dispose(){u.removeFromParent(),u.geometry.dispose(),u.material.dispose(),i.dispose()},getProcessReading(){const{recipeId:d,partId:f,operation:g,datum:_}=e,m=r===0?"待机":r<3?"装夹定位":r<6?"主轴接近":r<=12?"切削进给":r<16?"退刀 · 末刀读数":"完成 · 末刀读数";return{recipeId:d,version:"1.0",partId:f,operation:g,datum:_,stage:m,status:r===0?"pending":r>12?"complete":"active",basis:`青色线为编程轮廓，XZ 投影半轴 ${Math.abs(e.radiusX)} × ${Math.abs(e.radiusZ)} mm，走 ${e.turns} 圈。读数核对模型刀位，尺寸和容差为离线演示设定。`,metrics:r===0?h(r).map(p=>({...p,value:null})):o||h(r)}}}}function Ot(i,e,t){return Ze.smoothstep(i,e,t)}function hi(i,e){const t=i.getObjectByName(e);if(!t)throw new Error(`Machine motion: missing ${e}`);return t}function Vo(i,e,t=0,n=0,s=0){const r=new ct;return r.name=e,r.position.set(t,n,s),i.add(r),r}function Zl(){const i=new Map,e=new Map;return{paint(t,n){e.has(n)||e.set(n,new et({color:n,emissive:n,emissiveIntensity:.18,metalness:.28,roughness:.52})),t.traverse(s=>{s.isMesh&&(i.has(s)||i.set(s,s.material),s.material=e.get(n))})},dispose(){for(const[t,n]of i)t.material=n;for(const t of e.values())t.dispose()}}}function gf(i,e,t,n){const s=Vo(i,e),r=new Je(new Qs(t,t,n,16),new et({color:12634574,metalness:.48,roughness:.34}));r.position.y=-n/2,s.add(r);const o=new et({color:14198351,metalness:.45,roughness:.36});for(let a=0;a<3;a++){const c=[];for(let l=0;l<=8;l++){const u=a*2*Math.PI/3+l/8;c.push(new I(Math.cos(u)*t*.91,-n+t*.15+l*n*.055,Math.sin(u)*t*.91))}s.add(new Je(new aa(new Ud(c),8,t*.12,4,!1),o))}return s}function _f(i,e,t,n,s){const r=new Je(new an(t,n,s),new et({color:14257989,emissive:7747859,emissiveIntensity:.18,roughness:.58,metalness:.32}));return r.name=e,i.add(r),r}function xf(i){const e=i.geometry,t=e.groups.find(c=>c.materialIndex===2),n=[0,1,2].map(c=>e.index.getX(t.start+c)),[s,r,o]=n.map(()=>new I),a=new mn;return c=>{const l=e.getAttribute("position");return a.setFromCoplanarPoints(s.fromBufferAttribute(l,n[0]),r.fromBufferAttribute(l,n[1]),o.fromBufferAttribute(l,n[2])),-1e3*a.distanceToPoint(c)}}function mS(i){const e=hi(i,"cnc_fixed_and_axis_components"),t=Vo(e,"CNC table, vise and stock"),n=Vo(e,"CNC head and coolant nozzles"),s=Vo(n,"CNC tool rotation",-.253715,1.34,-.199),r=[{parent:s,bounds:[-.33,1.233,-.275,-.178,1.461,-.123],selection:/^cnc_component_(549|550|551|561|562|563|564)$/},{parent:n,bounds:[-.455,1.232,-.56,-.053,2.021,-.098]},{parent:t,bounds:[-.886,.978,-.56,.377,1.231,.163]}];for(const d of[...e.children]){if(!d.isMesh||!d.name.startsWith("cnc_component_"))continue;d.geometry.computeBoundingBox(),d.updateMatrix();const{min:f,max:g}=d.geometry.boundingBox.clone().applyMatrix4(d.matrix);for(const{parent:_,bounds:[m,p,S,y,x,T],selection:E}of r)if(!(E&&!E.test(d.name))&&!(f.x<m||f.y<p||f.z<S||g.x>y||g.y>x||g.z>T)){_.attach(d);break}}const o=Zl();for(const d of[544,545,546,547,548,587])o.paint(hi(t,"cnc_component_"+d),14257989);const a=hi(t,"cnc_component_548"),c=hi(s,"cnc_component_564");a.userData.workpieceId=Ys.cnc.partId;const l=a.geometry.boundingBox.getCenter(new I);l.y=a.geometry.boundingBox.max.y;const u=c.geometry.boundingBox.getCenter(new I);u.y=c.geometry.boundingBox.min.y;const h=new I;return $l({update(d){const f=Ot(d,1.5,3),g=Ot(d,14,16),_=2*Math.PI*Ot(d,6,12);t.position.x=(.02+.058*Math.cos(_))*(f-g),t.position.z=.052*Math.sin(_),n.position.y=.14*(Ot(d,0,1.5)-Ot(d,3,6)+Ot(d,12,14)-g)-.008*(Ot(d,3,6)-Ot(d,12,14)),s.rotation.y=Math.PI*32*Ze.clamp((d-3)/11,0,1)},reset(){n.position.y=0,t.position.set(0,0,0),s.rotation.y=0},dispose(){o.dispose()}},Ys.cnc,()=>({relative:a.worldToLocal(c.localToWorld(h.copy(u))).sub(l)}),a,l)}function gS(i){const e=hi(i,"VF-3_SS_STEP__2_2023_0111");function t(_){const m=new RegExp("_NAUO"+_+"_"),p=e.children.find(S=>m.test(S.name));if(!p)throw new Error(`Machine motion: missing Haas assembly occurrence ${_}`);return p}const n=t(5),s=t(6),r=t(7);n.attach(s);for(const _ of[21,22,24,27])r.attach(t(_));t(1).visible=!1;const o=[t(14),t(15)],a=o.map(_=>_.visible);for(const _ of o)_.visible=!1;const c=Zl();c.paint(n,6454152),c.paint(s,10465981),c.paint(r,9216431);const l=_f(s,"Haas demonstration stock",.34,.1,.25);l.rotation.x=-Math.PI/2,l.position.set(-.508,.855,-.4895);const u=gf(r,"Haas milling tool",.03,.15);u.position.set(0,.5975,-1.1714),u.rotation.x=-Math.PI/2;const h=new jd(16774108,9,2.8);h.position.set(.32,1.1,-1.56),e.add(h),l.userData.workpieceId=Ys.haas.partId;const d=new I,f=l.geometry.parameters.height/2,g=xf(l);return $l({update(_){const m=Ot(_,0,3)-Ot(_,14,16),p=2*Math.PI*Ot(_,6,12);n.position.y=(-.2575+.068*Math.sin(p))*m,s.position.x=(.508+.108*Math.cos(p))*m,r.position.z=.485*(Ot(_,3,6)-Ot(_,12,14)),u.rotation.y=Math.PI*32*Ze.clamp((_-3)/11,0,1)},reset(){n.position.y=0,s.position.x=0,r.position.z=0,u.rotation.y=0},dispose(){o.forEach((_,m)=>{_.visible=a[m]}),c.dispose()}},Ys.haas,()=>{l.worldToLocal(u.localToWorld(d.set(0,-.15,0)));const _=g(d);return d.y-=f,{relative:d,depth:_}},l,new I(0,f,0))}function _S(i){const e=hi(i,"Penta_Solo_Official_Simulation"),[t,n,s,r,o]=["axis_X","axis_Y","axis_Z","joint_B","joint_C"].map(x=>hi(e,x)),a=new I().fromArray(r.userData.axis_glTF),c=new I().fromArray(o.userData.axis_glTF),l={Enclosure:5664899,Door:9545910,Bracket:3688788,Spindle:10402503,Scraper:7900053,Trunnion:1737363,Mini_90:12820572},u=Zl();for(const[x,T]of Object.entries(l))u.paint(hi(e,x),T);hi(e,"Door").traverse(x=>{x.isMesh&&Object.assign(x.material,{transparent:!0,opacity:.19,depthWrite:!1})});const h=_f(o,"Penta demonstration stock",.048,.022,.04);h.position.y=-.046;const d=i.userData.machiningSurface==="flat-bore-plate"?{...Ys.vmc,recipeId:"PENTA-PLATE-01",slopeDeg:0,operation:"五轴转台上双孔盖板轮廓随动",datum:"夹持工件的双孔盖板顶面中心"}:Ys.vmc;h.userData.workpieceId=d.partId;const f=Ze.degToRad(d.slopeDeg),g=h.geometry.parameters.height/2,_=h.geometry.getAttribute("position");for(let x=0;x<_.count;x++)_.getY(x)>0&&_.setY(x,g+_.getX(x)*Math.tan(f));_.needsUpdate=!0,h.geometry.computeVertexNormals();const m=xf(h),p=gf(s,"Penta milling tool",.0035,.019),S=new I,y=new I;return $l({update(x){const T=Ot(x,6,12),E=T*Math.PI*2;r.quaternion.setFromAxisAngle(a,Ze.degToRad(d.tiltDeg)*Math.sin(E)),o.quaternion.setFromAxisAngle(c,E),hl(d,T,S),S.y=g+S.x*Math.tan(f)-.001*d.depth/Math.cos(f),h.localToWorld(S),e.worldToLocal(S);const b=Ot(x,0,3)-Ot(x,14,16),R=Ot(x,3,6)-Ot(x,12,14);t.position.x=S.x*b,n.position.z=S.z*b;const v=S.y+.019+.06;s.position.y=v*(b-R)+(S.y+.019)*R,p.rotation.y=Math.PI*32*Ze.clamp((x-3)/11,0,1)},reset(){t.position.x=0,n.position.z=0,s.position.y=0,p.rotation.y=0,r.quaternion.identity(),o.quaternion.identity()},dispose(){u.dispose()}},d,()=>{h.worldToLocal(p.localToWorld(y.set(0,-.019,0)));const x=m(y);y.y-=g;const T=r.quaternion,E=Ze.radToDeg(2*Math.atan2(T.x*a.x+T.y*a.y+T.z*a.z,T.w));return{relative:y,inclination:E,depth:x}},h,new I(0,g,0))}function Go(i,e){return e==="cnc"?mS(i):e==="haas"?gS(i):e==="vmc"?_S(i):null}function xS({controllerFor:i,restart:e,playing:t,workpieceAt:n}){const s=f=>document.getElementById("process-"+f),r=s("panel"),o=s("station"),a=s("sample"),c=s("measurements").tBodies[0],l=s("outcome");let u,h=-1/0;function d(f=!1){var T,E;if(r.hidden)return;const g=performance.now();if(!f&&t()&&g-h<120)return;h=g;const _=u==="inspection",m=(E=(T=i(_?"belt":o.value))==null?void 0:T.getProcessReading)==null?void 0:E.call(T);if(o.disabled=!m,a.disabled=!m,!m){s("id").textContent="等待设备装配就绪";for(const b of["operation","datum","outcome","basis"])s(b).textContent="";c.replaceChildren();return}_&&(a.value=m.sample);const p=n?n():m.partId;s("id").textContent=m.recipeId+" v"+m.version+(p?" · 工件 "+p:" · 待料"),s("operation").textContent=m.operation,s("datum").textContent="基准 · "+m.datum,s("basis").textContent=m.basis;const S=m.metrics.some(b=>b.verdict==="fail"),y=m.metrics.some(b=>b.verdict==="pass");let x="";for(_?(x={pass:"合格",fail:"不合格",active:"等待扫描完成",pending:"等待检测"}[m.status],m.status==="fail"&&m.metrics.every(b=>b.value==null)&&(x="无有效测量")):S?x="刀位超出工艺范围":y&&(x="模型刀位符合工艺卡"),l.textContent=[m.stage,x].filter(Boolean).join(" · "),l.dataset.verdict=S?"fail":y?"pass":"";c.rows.length>m.metrics.length;)c.deleteRow(-1);m.metrics.forEach((b,R)=>{let v=c.rows[R];v||(v=c.insertRow(),v.insertCell(),v.insertCell(),v.insertCell()),v.cells[0].textContent=b.label+" ("+b.unit+")",v.cells[1].textContent=b.target;const M=Math.abs(b.value)<.005?0:b.value;v.cells[2].textContent=Number.isFinite(b.value)?M.toFixed(2):"—",v.cells[2].dataset.verdict=b.verdict||""})}return o.addEventListener("change",()=>d(!0)),a.addEventListener("change",()=>{var f,g;(g=(f=i("belt"))==null?void 0:f.setSample)!=null&&g.call(f,a.value)&&e(),d(!0)}),{update:d,show(f){u=f;const g=["cnc","haas","five-axis"].includes(u);g&&(o.value=u),r.hidden=!g&&u!=="standalone"&&u!=="inspection",o.hidden=u!=="standalone",a.hidden=u!=="inspection",d(!0)},focus(f){u==="standalone"&&(o.value=f,d(!0))}}}const dl={cnc:"数控机床",haas:"Haas 铣床",fiveAxis:"五轴中心"},vf={stock:"在库",identify:"库内识别",withdraw:"出库",route:"环线输送",arrived:"门前停稳",recognize:"工位识别",load:"上料",machining:"加工中",unload:"下料",queuePut:"送往待加工区",waiting:"等待加工",queueLoad:"待加工件上料",inspection:"终检中",rejectHold:"终检位停留",store:"回库",done:"已回原位"},Jo=/^slot_(\d+)_(\d+)$/;function Us(i){const e=Jo.exec(i);return e?e[1]+" 层 "+e[2]+" 列":"—"}function vS(i){const e=i.inspection;if(typeof(e==null?void 0:e.pass)!="boolean")return i.phase==="inspection"?"检测中":"待检测";const t=e.pass?"合格":"不合格",n=Number.isFinite(e.measured)?" · "+e.measured+" "+(e.unit??"mm"):"";return t+n}function Kh(i){const e=dl[i.station]??"";if(i.phase==="store"||i.phase==="withdraw"){const t=ql(i.phase,i.progress);return t==="slot"?Us(i.sourceSlot):{"warehouse-grip":"立库夹手","warehouse-short-belt":"立库短输送带","warehouse-aubo-grip":"立库旁 AUBO 夹爪","long-ring-conveyor":"主环线"}[t]}if(Jo.test(i.location))return Us(i.location);if(i.phase==="stock"||i.phase==="identify"||i.phase==="done")return Us(i.sourceSlot);if(i.phase==="rejectHold"||i.phase==="inspection")return"BRT 终检位";if(i.location&&/[\u3400-\u9fff]/.test(i.location))return i.location;if(i.phase==="waiting")return e+"待加工区";if(i.phase==="machining")return e+"夹具";if(i.phase==="arrived"||i.phase==="recognize")return e+"门前取料位";if(i.phase==="route"){const t=dl[i.to]??{dock:"立库接驳位",inspectionStart:"终检位"}[i.to];return t?"主环线 → "+t:"主环线"}return["queuePut","load","unload","queueLoad"].includes(i.phase)?e+"上下料机械臂":vf[i.phase]??"—"}function cc(i){return i.map(e=>dl[e]??e).join(" → ")}function yS(i){return i.phase==="store"||i.phase==="withdraw"?ql(i.phase,i.progress)==="slot"?i.sourceSlot:null:Jo.test(i.location)?i.location:Jo.test(i.owner)?i.owner:["stock","identify","done"].includes(i.phase)?i.sourceSlot:null}function MS(i=document.getElementById("production-stock")){const e=i.ownerDocument,t=i.querySelector("#stock-items"),n=i.querySelector("#stock-detail"),s=i.querySelector("#stock-rack"),r=i.querySelector("#stock-count"),o=i.querySelector("#stock-warning");let a=new Map,c=null,l="",u="";function h(g,_){const m=e.createElement(g);return _!==void 0&&(m.textContent=_),m}function d(){var m;const g=a.get(c);for(const p of i.querySelectorAll("button[data-id]"))p.setAttribute("aria-pressed",String(p.dataset.id===c));if(n.replaceChildren(),!g)return;const _=[["工件编号",g.id],["当前位置",Kh(g)],["原库位",Us(g.sourceSlot)],["分配带道",Number.isInteger(g.laneIndex)?"带道 "+(g.laneIndex+1)+" · "+["中道","外道","内道"][g.laneIndex]:"待出库分配"],["工艺路线",cc(g.route)],["已完成",cc(g.completed)||"尚无"],["终检结果",vS(g)]];for(const[p,S]of _){const y=h("dd",S);p==="终检结果"&&typeof((m=g.inspection)==null?void 0:m.pass)=="boolean"&&(y.dataset.result=g.inspection.pass?"pass":"fail"),n.append(h("dt",p),y)}}i.addEventListener("click",g=>{const _=g.target.closest("button[data-id]");!_||!i.contains(_)||(c=_.dataset.id,d())});function f(g){var M;const _=(g==null?void 0:g.items)??[],m=(g==null?void 0:g.inventory)??[],p=(g==null?void 0:g.missingIds)??[],S=JSON.stringify([p,m.map(A=>[A.id,A.sourceSlot]),_.map(A=>{var U,F;return[A.id,A.sourceSlot,A.phase,A.station,A.laneIndex,Kh(A),A.route,A.completed,(U=A.inspection)==null?void 0:U.pass,(F=A.inspection)==null?void 0:F.measured]})]);if(S===l)return;l=S,a=new Map(m.map(A=>[A.id,{...A,phase:"stock",completed:[]}]));for(const A of _)a.set(A.id,A);const y=_.map(A=>A.id).join(",");(y!==u||!a.has(c))&&(c=((M=_[0])==null?void 0:M.id)??a.keys().next().value),u=y;const x=i.contains(e.activeElement)?e.activeElement:null,T=x==null?void 0:x.dataset.id,E=s.contains(x);t.replaceChildren();const b=new Map;for(const A of _){const U=h("button");U.type="button",U.dataset.id=A.id,U.dataset.lane=A.laneIndex,U.title=A.id+" · "+cc(A.route),U.append(h("strong",A.id),h("span","带道 "+(A.laneIndex+1)+" · "+(vf[A.phase]??"—"))),A.phase==="rejectHold"&&(U.dataset.result="fail"),t.append(U),!E&&T===A.id&&U.focus({preventScroll:!0})}for(const A of a.values()){const U=yS(A);U&&b.set(U,A)}const R=_.filter(A=>A.phase==="rejectHold"),v=[];p.length&&v.push("本轮库存中缺少 "+p.join("、")+"。"),R.length&&v.push(R.map(A=>A.id).join("、")+" 检测不合格，停留在 BRT 终检位。"),o.hidden=!v.length,o.textContent=v.join(" "),r.textContent=b.size+" / 12",s.replaceChildren();for(let A=4;A>=1;A--){const U=h("tr"),F=h("th",A);F.scope="row",U.append(F);for(let X=1;X<=3;X++){const z="slot_"+A+"_"+X,N=b.get(z),B=h("td",N?"":"—");if(N){const k=h("button",N.id);k.type="button",k.dataset.id=N.id,k.setAttribute("aria-label",Us(z)+"，"+N.id),B.append(k),B.dataset.occupied="true"}else B.setAttribute("aria-label",Us(z)+"，空");U.append(B)}s.append(U)}if(E&&T){const A=Array.from(s.querySelectorAll("button")).find(U=>U.dataset.id===T)??Array.from(t.children).find(U=>U.dataset.id===T);A==null||A.focus({preventScroll:!0})}d()}return{update:f}}const fl=["cnc","haas","fiveAxis"],oi={cnc:"数控机床",haas:"Haas 铣床",fiveAxis:"五轴加工中心"},SS={cnc:12,haas:10,fiveAxis:11},qt=5,Es=7,lc=4,Qo=.5;function Ti(i,e,t,n=96){return Object.freeze({id:i,sourceSlot:e,destination:e,route:Object.freeze(t),samplePitch:n})}const pl=Object.freeze([Ti("STOCK-01","slot_1_1",["cnc"]),Ti("STOCK-02","slot_1_3",["haas"]),Ti("STOCK-03","slot_2_2",["fiveAxis"]),Ti("STOCK-04","slot_1_2",["cnc","haas"]),Ti("STOCK-05","slot_2_1",["cnc","fiveAxis"]),Ti("STOCK-06","slot_2_3",["haas","fiveAxis"]),Ti("STOCK-07","slot_3_1",["cnc","haas","fiveAxis"]),Ti("STOCK-08","slot_3_2",["haas"],98)]),zn=(i,...e)=>Object.freeze({label:i,partIds:Object.freeze(e)}),Jl=Object.freeze({full:zn("三带并行 · 七件七种工艺","STOCK-07","STOCK-04","STOCK-03","STOCK-01","STOCK-02","STOCK-05","STOCK-06"),cnc:zn("仅数控机床","STOCK-01"),haas:zn("仅 Haas 铣床","STOCK-02"),fiveAxis:zn("仅五轴加工","STOCK-03"),"fiveAxis-delay":zn("五轴读码延迟 · STOCK-03","STOCK-03"),"cnc-haas":zn("数控 → Haas","STOCK-04"),"cnc-fiveAxis":zn("数控 → 五轴","STOCK-05"),"haas-fiveAxis":zn("Haas → 五轴","STOCK-06"),queue:zn("同工位待加工区接续","STOCK-04","STOCK-01"),reject:zn("终检不合格停留","STOCK-08")});function Un(i,e,t){for(const n of i){if(e+t<=n.start)break;e<n.end&&(e=n.end)}return e}function ci(i,e,t){i.push({start:e,end:t}),i.sort((n,s)=>n.start-s.start)}function bS(i,e,t){const n=2*qt+t;let s=e;for(;;){const r=Un(i.machine,s,n),o=r+qt+t,a=Un(i.arm,r,qt),c=Un(i.arm,o,qt),l=Un(i.lane,o,qt+Qo),u=Math.max(a-r,c-o,l-o);if(!u)return r;s=r+u}}function ES(i,e,t,n,s){let r=e;const o=n==="fiveAxis"?.625:.375,a=n==="fiveAxis"?2.25:1.5;for(;;){const c=r+o+a+s,l=t?bS(i,c,t):c,u=t?Un(i.arm,c,qt):c,h=t>0&&i.machine.some(p=>p.start<=c&&c<p.end)&&u+qt<l&&Un(i.buffer,u,l+qt-u)===u,d=t?h?u:l:c,f=d-a-s,g=Un(i.arm,f,a+s+(t?qt:0));if(g>f){r=g-o;continue}const _=d+(t?qt:0),m=Un(i.lane,r,_-r+Qo);if(m===r)return ci(i.lane,r,_+Qo),ci(i.arm,f,d),h&&ci(i.buffer,u,l+qt),{arrival:r,scanStart:f,scanTime:a,load:l,queue:h};r=m}}const TS={identify:"库内识别工艺卡",withdraw:"立库出料",route:"环线输送",arrived:"门前停稳",recognize:"工位识别",readWait:"等待读码反馈",load:"AUBO 上料",machining:"机内加工",unload:"AUBO 下料",queuePut:"放入待加工区",waiting:"等待机床空闲",queueLoad:"待加工区接续上料",inspection:"BRT 随动终检",store:"立库夹手回库",done:"已回原库位",rejectHold:"终检拦停"},$h={dock:"立库短输送带",inspectionStart:"终检入口",inspectionEnd:"终检出口",...oi};function wS(i,e,t,n,s,r,o){let a=e,c=0;const l=[];function u(x,T,E,b){const R=a;a+=T;const v={phase:x,start:R,end:a,completedCount:c,...E};l.push(v),b&&n.push({time:R,end:a,phase:x,id:i.id,...E,station:E.station??null,event:TS[x],detail:i.id+" · "+b})}function h(x,T,E,b){ci(t[E].arm,a,a+T),u(x,T,{station:E,owner:"arm"},b)}function d(x,T,E){u("route",E,{from:x,to:T,station:fl.includes(T)?T:null,owner:"ring"},$h[x]+" → "+$h[T])}u("identify",1,{owner:"slot"},i.sourceSlot+" · "+i.route.map(x=>oi[x]).join(" → "));const f=Un(t.rack,a,Es);f>a&&u("stock",f-a,{owner:"slot"}),ci(t.rack,a,a+Es),u("withdraw",Es,{owner:"warehouse"},i.sourceSlot+" → 出库短带 → 立库旁 AUBO → 带道 "+(r+1));let g="dock";for(const x of fl){const T=i.route.includes(x),E=t[x],b=T?SS[x]:0,R=o&&x==="fiveAxis"?12:0,v=ES(E,a+(g==="dock"?3:2),b,x,R);if(d(g,x,v.arrival-a),g=x,u("arrived",v.scanStart-a,{station:x,owner:"ring"},oi[x]+" 门前停靠，等待识别"),u("recognize",v.scanTime,{station:x,owner:"ring",required:T},oi[x]+(T?" 识别后接续夹取":" 识别后放行")),R&&u("readWait",R,{station:x,owner:"ring",required:T},"五轴门前工件已停稳，读码器未返回工件标识和工艺卡，保持在取料位"),!T)continue;const M=qt*2+b,{load:A,queue:U}=v;U&&(h("queuePut",qt,x,oi[x]+" 忙，机器人从带面取件放入待加工区"),u("waiting",A-a,{station:x,owner:"waiting"},oi[x]+" 待加工区")),ci(E.machine,a,a+M),h(U?"queueLoad":"load",qt,x,oi[x]+" 门口 → 夹具"),u("machining",b,{station:x,owner:"machine"},oi[x]+" 按工艺卡加工"),c++,ci(E.lane,a,a+qt+Qo),h("unload",qt,x,oi[x]+" 夹具 → 门口 → 环线")}const m=Un(t.brt,a+4,lc);d(g,"inspectionStart",m-a),ci(t.brt,a,a+lc),u("inspection",lc,{owner:"ring",from:"inspectionStart",to:"inspectionEnd"},"全部指定工序已完成，四轴跟随工件扫描");const p=s(i,i.route.slice(0,c)),S=p&&typeof p.pass=="boolean"?p:{pass:!1,reason:"终检结果不可用，留在检测工位",measured:null};if(S.pass){const T=Un(t.rack,a+4,Es);d("inspectionEnd","dock",T-a),ci(t.rack,a,a+Es),u("store",Es,{owner:"warehouse"},"带道 "+(r+1)+" → 立库旁 AUBO → 短带 → "+i.sourceSlot)}const y=a;return u(S.pass?"done":"rejectHold",0,{owner:S.pass?"slot":"inspectionEnd"},S.pass?"已放回 "+i.sourceSlot:S.reason),{item:i,laneIndex:r,segments:l,outcome:S,end:y}}function AS(i,e){const{item:t,segments:n,end:s,outcome:r}=i;let o=n.find(p=>e>=p.start&&e<p.end);o||(o=e>=s?n.at(-1):{phase:"stock",owner:"slot",completedCount:0});const{phase:a,station:c=null,from:l=null,to:u=null,owner:h,completedCount:d,required:f=null}=o,g=o.end>o.start?(e-o.start)/(o.end-o.start):e>=s?1:0,_={slot:t.sourceSlot,ring:"long-ring-conveyor",waiting:"waiting-area",machine:c,arm:c+"-aubo",warehouse:"warehouse-grip",inspectionEnd:"brt-inspection"}[h],m=["store","done","rejectHold"].includes(a)||l==="inspectionEnd";return{id:t.id,laneIndex:i.laneIndex,sourceSlot:t.sourceSlot,destination:t.sourceSlot,route:t.route,recipeSequence:t.route,completed:t.route.slice(0,d),phase:a,station:c,from:l,to:u,progress:g,required:f,owner:h,location:_,holdForPickup:a==="recognize"&&f===!0,inspection:m?r:null}}function RS(i){const e=jl(i.samplePitch);return{measured:i.samplePitch,pass:e,unit:"mm",recipeId:Ui.recipeId,version:Ui.version,source:"离线检测样本",reason:e?"双孔中心距在公差内":"双孔中心距超差，保留在终检位"}}function CS({scenario:i="full",inventory:e=pl,inspect:t=RS}={}){const n=Jl[i];if(!n)throw new RangeError("未知的组合线演示路线");const s=n.partIds.map(d=>pl.find(f=>f.id===d)).filter(d=>e.some(f=>f.id===d.id&&f.sourceSlot===d.sourceSlot)),r=n.partIds.filter(d=>!s.some(f=>f.id===d)),o=Object.fromEntries(fl.map(d=>[d,{machine:[],arm:[],lane:[],buffer:[]}]));o.rack=[],o.brt=[];const a=[],c=[0,0,0],l=s.map((d,f)=>{const g=c.indexOf(Math.min(...c)),_=Math.max(f*6,c[g]),m=wS(d,_,o,a,t,g,i==="fiveAxis-delay");return c[g]=m.outcome.pass?m.end:1/0,m});a.sort((d,f)=>d.time-f.time);const u=Math.max(0,...l.map(d=>d.end));function h(d){const f=Math.min(u,Math.max(0,Number.isFinite(d)?d:0)),g=l.map(S=>AS(S,f)),_=g.find(S=>!["stock","done","rejectHold"].includes(S.phase))||g.find(S=>S.phase==="rejectHold")||g.at(-1),m=f>=u,p=g.some(S=>S.phase==="rejectHold")||!g.length;return{..._,activeId:(_==null?void 0:_.id)??null,phase:(_==null?void 0:_.phase)??"stock",station:(_==null?void 0:_.station)??null,elapsed:f,duration:u,progress:(_==null?void 0:_.progress)??0,items:g,missingIds:r,trace:a.filter(S=>S.time<=f),status:m?p?"blocked":"complete":f===0?"idle":"running"}}return{scenario:i,duration:u,items:s,missingIds:r,events:a,at:h}}const PS=Object.freeze(["withdraw","scan","route","load","machining","unload","queueLoad","transfer","inspection","store"]);new Set(PS);const LS=new Set(["load","unload","queuePut","queueLoad"]);function IS({world:i,machines:e,storage:t,stations:n,brt:s,warehouseArm:r}){const{ring:o,rack:a}=t,c=Iy(t,{warehouseArm:r}),l=pl.filter(N=>a.model.getObjectByName(N.sourceSlot)),u=[];a.model.traverse(N=>{/^slot_\d+_\d+$/.test(N.name)&&u.push(N.name)});const h=new Map;for(const N of l){const B=Hy(N.id,N.samplePitch);h.set(N.id,B),i.add(B.root),c.seat(B.root,N.sourceSlot)}if(!h.size)throw new Error("立库没有与原料工艺卡对应的库位");const d={},f=rf(s,"brt",d),g=By({model:s,cell:d},o,h.values().next().value.root);let _=null;const m=new I;d.workpieceTop=(N,B)=>(_.getWorldPosition(B),B.add(m.set(0,.066,0)));const p={dock:o.longRingPoint(c.ringProgress),inspectionStart:o.longRingPoint(g.start),inspectionEnd:o.longRingPoint(g.end),...Object.fromEntries(Object.entries(n).map(([N,B])=>[N,B.pickup]))},S=o.longLoop.lanes.map(N=>{const B=Object.fromEntries(Object.entries(p).map(([V,te])=>[V,N.progressAtPoint(te)])),k=Object.fromEntries(Object.keys(n).map(V=>[V,N.point(B[V])]));return{lane:N,stops:B,pickups:k}});o.item.visible=!1,o.reject.visible=!1,o.scanner&&(o.scanner.gate.visible=!1);const y=hS(n);let x="full",T,E,b,R=null,v;const M=new I,A=new I;function U(N,B){if(N.from&&N.to){const k=B[N.from],V=B[N.to];let te=N.progress;return N.phase==="route"&&n[N.to]&&(te<.16?te=te*te/(2*.16*.84):te>.84?te=1-(1-te)**2/(2*.16*.84):te=(te-.16/2)/.84),k+(V-k+1)%1*te}return N.phase==="rejectHold"?B.inspectionEnd:B[N.station??"dock"]}function F(N,B,k){B.point(k,M),N.parent!==B.belt&&B.belt.add(N),N.position.copy(B.belt.worldToLocal(M)),N.quaternion.identity()}function X(N){var k;b=T.at(N),b.inventory=l,f.reset(),c.reset();for(const[V,te]of Object.entries(n)){const ie=b.items.find(O=>O.station===V&&O.phase==="machining");ie?e[V].update(ie.progress*16):e[V].reset(),te.reset()}const B=new Set;for(const V of b.items){const te=h.get(V.id),ie=te.root,O=n[V.station],{lane:H,stops:D}=S[V.laneIndex],q=U(V,D);switch(["stock","identify","done"].includes(V.phase)||(H.setTravel(q-D.dock),B.add(H)),te.setResult((k=V.inspection)==null?void 0:k.pass),V.phase){case"stock":case"identify":case"done":c.seat(ie,V.sourceSlot);break;case"withdraw":c.withdraw(ie,V.sourceSlot,V.progress,H);break;case"store":c.store(ie,V.sourceSlot,V.progress,H);break;case"route":case"arrived":case"readWait":case"recognize":F(ie,H,q);break;case"machining":O.seatMachine(ie,V.progress);break;case"waiting":O.seatWaiting(ie);break;case"inspection":F(ie,H,q),_=ie,f.update(V.progress*16);break;case"rejectHold":F(ie,H,q);break}}for(const{lane:V}of S)B.has(V)||V.setTravel(0);for(const V of b.items){const te=n[V.station],{lane:ie,pickups:O}=S[V.laneIndex],H=h.get(V.id).root;if(LS.has(V.phase))te.transfer(H,V.phase,V.progress,ie.belt,O[V.station],V.phase==="load"||V.phase==="queuePut");else if((V.phase==="recognize"||V.phase==="readWait")&&H.parent===ie.belt&&(H.getWorldPosition(A),A.distanceTo(O[V.station])<=.001)){const D=V.phase==="readWait";te.recognize(D?1:V.progress,A,D||V.holdForPickup)}}for(const V of h.values())ul(V.root,R,v);return b}function z(N){T=CS({scenario:N,inventory:l,inspect(B){const k=tf(h.get(B.id).plate.geometry),V=jl(k);return{measured:Number.isFinite(k)?Number(k.toFixed(3)):null,pass:V,unit:"mm",recipeId:Ui.recipeId,version:Ui.version,source:"工件网格孔口",reason:V?"模型双孔中心距在公差内":"模型孔距超差或孔口无法测量"}}}),E=Qy(T,{inventory:l,slots:u}),x=N;for(const{lane:B}of S)B.setTravel(0);for(const B of l){const k=h.get(B.id);c.seat(k.root,B.sourceSlot),k.setResult(void 0)}X(0)}return z(x),{update:X,setStation:z,reset:()=>X(0),focusDevice(N){R=N,v=y.get(N),dS(o,v);for(const B of h.values())ul(B.root,R,v)},get state(){return b},get operations(){return E},get duration(){return T.duration},get selectedStation(){return x}}}const uc=ff.find(i=>i.id==="integrated"),DS=rM(document.querySelector("#camera-panel")),ua=Kl.map(i=>{const e="loader-arm-"+i.id,t=uc.assets.some(r=>r.id===e),n=uc.assets.filter(r=>!i.deviceId||r.id===i.deviceId||t&&(r.id===e||r.id==="integrated-ring")),s=t?"本机、上下料机械臂及门前带段与组合线同步。":i.deviceId?"设备动作与组合工艺线同步。":"顺时针环线连接三个加工工位、终检工位和立库。";return{...i,status:uc.status,description:s,assets:n}}),yf={verified:"CAD 来源 · 静态装配",placeholder:"占位 / 待替换",reference:"替代 / 参考模型"},ea=document.querySelector("#viewport"),On=new _m;On.background=new Fe(1582642);const fn=new Zt(42,1,.01,1e3);fn.position.set(28,17,31);const jt=new xy({antialias:!0,powerPreference:"high-performance"});jt.localClippingEnabled=!0;jt.setPixelRatio(Math.min(window.devicePixelRatio,1.25));jt.toneMapping=sd;jt.toneMappingExposure=.92;jt.outputColorSpace=Rt;jt.shadowMap.enabled=!0;jt.shadowMap.type=nd;ea.appendChild(jt.domElement);const xt=new pM(fn,jt.domElement);xt.enableDamping=!0;xt.enablePan=!0;xt.screenSpacePanning=!0;xt.zoomToCursor=!0;xt.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN};xt.panSpeed=1;xt.zoomSpeed=1;xt.maxPolarAngle=Math.PI*.495;xt.target.set(4,.8,0);On.add(new xg(14281207,2699832,1.3));const Kn=new zl(16773855,2.1);Kn.position.set(8,16,10);Kn.castShadow=!0;On.add(Kn);Kn.shadow.mapSize.set(2048,2048);Kn.shadow.bias=-3e-4;Kn.shadow.normalBias=.015;Kn.shadow.camera.left=-16;Kn.shadow.camera.right=16;Kn.shadow.camera.top=12;Kn.shadow.camera.bottom=-12;const Mf=new zl(9358079,.8);Mf.position.set(-10,8,-8);On.add(Mf);const Cr=new Ng(120,120,4020587,2506318);Cr.position.y=-.02;On.add(Cr);const ha=new Je(new rs(300,300),new et({color:1912378,roughness:.95,metalness:.04}));ha.rotation.x=-Math.PI/2;ha.position.y=-.035;ha.receiveShadow=!0;On.add(ha);const Ht=new ct;On.add(Ht);const dn=new Map,NS=new AM;let US=new I,OS={},FS={},Ft="integrated",Zh=!1,Pr=0,pn=0,bn=[],is=!1,Ri=null,da=null;const _n={version:0,pending:0,failed:[],focusedDevice:null};window.digitalTwinDiagnostics=_n;const Xr=new Map,Vr=()=>(De==null?void 0:De.duration)??26.5,Ve={playing:!1,elapsed:0,startedAt:0};let Jh=-1/0,Qh="",De=null,pi,ed=!1;const ii=new Map,BS=new Fl(.13),kS=new rn({color:5565663});let Sf={};const ta=pS();function zS(i,e){return e==="brt"||e==="belt"?rf(i,e,OS):e==="aubo"||e==="ring"||e==="warehouse"?nl(i,e,FS):Go(i,e)}function HS(i,e){const t=zS(i,e.type);Xr.set(i,t),t.reset()}function VS(i,e){let t=null;return i.traverse(n=>{!t&&e.test(n.name||"")&&(t=n)}),t}function qr(){const i=De==null?void 0:De.state,e=i&&Ft!=="integrated"?Ef(Ft,i):null,t=i?Ft==="integrated"?Os(i.phase):e?Os(e.phase):"本机待机":"等待模型就绪",n=i?Tf(Ft,i):"";_n.playback={elapsed:Ve.elapsed,playing:Ve.playing,phase:i==null?void 0:i.phase,scenario:De==null?void 0:De.selectedStation},i&&(Ft==="warehouse"||Ft==="integrated")&&QS.update(i);const s=Vr(),r=Ve.elapsed>=s;document.querySelector("#work-step").textContent=t,document.querySelector("#work-progress-text").textContent=`${Ve.elapsed.toFixed(1)} / ${s.toFixed(1)} 秒`;const o=document.querySelector("#work-timeline");o.max=s,o.value=Ve.elapsed,document.querySelector("#work-relation-text").textContent=n,document.querySelector("#work-mode").textContent=(i==null?void 0:i.status)==="blocked"?"终检拦停":Ve.playing?"运行中":r?"已完成":Ve.elapsed>0?"已暂停":"待机",document.querySelector("#work-play").textContent=Ve.playing?"暂停演示":r?"重新播放":Ve.elapsed>0?"继续播放":"播放工作状态",na(),De&&Ql(),pa.update(),pi==null||pi.refresh()}function Os(i){return{stock:"原料在库",identify:"读取工艺卡",withdraw:"立库出料",route:"环线输送",arrived:"门前停稳",recognize:"工位识别",readWait:"等待读码确认",load:"机械臂上料",machining:"机床加工",unload:"机械臂下料",queuePut:"放入待加工区",waiting:"待加工",queueLoad:"待工作区上料",inspection:"四轴终检",store:"立库收料",rejectHold:"不合格件停在终检位",done:"回库完成"}[i]||"待机"}function bf(i,e){const t=i==="five-axis"?"fiveAxis":i;return e.items.filter(n=>i==="brt"?["inspection","rejectHold"].includes(n.phase):i==="warehouse"?["identify","withdraw","store"].includes(n.phase):n.station===t&&n.phase!=="route")}function Ef(i,e){const t=bf(i,e);return t.find(n=>n.phase==="machining")??t[0]}function Tf(i,e){if(i==="integrated"){const n=e.trace.findLast(s=>s.id===e.activeId&&s.phase===e.phase&&s.station===(e.station??null));return(n==null?void 0:n.detail)??[e.activeId,Os(e.phase)].filter(Boolean).join(" · ")}const t=bf(i,e).map(n=>n.id+" · "+Os(n.phase));return t.length?t.join("　/　"):"本机待机 · 整线当前工序为"+Os(e.phase)}function Fi(i,e=!0){Ve.elapsed=Ze.clamp(i,0,Vr()),De==null||De.update(Ve.elapsed),Ve.elapsed>=Vr()&&(Ve.playing=!1);const t=performance.now();(e||!Ve.playing||t-Jh>=100)&&(Jh=t,qr()),Vt(1)}function fa(){Ve.playing=!1,De==null||De.reset(),Fi(0)}function wf(){if(!De||pi&&pi.mode!=="demo")return;const i=ta.read();if(!i||!Object.hasOwn(Jl,i.station))return;(De.selectedStation||De.state.station)!==i.station&&(De.reset(),De.setStation(i.station));const e=ta.elapsed(i);Ve.playing=i.playing&&e<Vr(),Ve.startedAt=performance.now()-e*1e3,Fi(e)}function Ks(){ta.write(Ve.elapsed,Ve.playing,(De==null?void 0:De.selectedStation)||(De==null?void 0:De.state.station)||"cnc")}function Af(){!De||(pi==null?void 0:pi.mode)!=="demo"||(Ve.playing?(Fi((performance.now()-Ve.startedAt)/1e3),Ve.playing=!1):(Ve.elapsed>=Vr()&&fa(),Ve.startedAt=performance.now()-1e3*Ve.elapsed,Ve.playing=!0),Ks(),qr(),Vt())}function GS(i){Ve.playing&&Fi((i-Ve.startedAt)/1e3,!1)}let Di=0,Lr=0,ml=!1;function Vt(i=2){Lr=Math.max(Lr,i),!Di&&!ml&&!document.hidden&&(Di=requestAnimationFrame(Rf))}function Rf(){Di=0,!document.hidden&&(ml=!0,GS(performance.now()),xt.update(),jt.render(On,fn),Lr=Math.max(0,Lr-1),ml=!1,(Lr||Ve.playing)&&!Di&&(Di=requestAnimationFrame(Rf)))}xt.addEventListener("change",()=>Vt(2));xt.addEventListener("end",()=>Vt(24));document.addEventListener("visibilitychange",()=>{document.hidden?(Di&&cancelAnimationFrame(Di),Di=0):Vt(2)});const gl=[{id:"j1",label:"J1 肩部",link:"link1",limit:360},{id:"j2",label:"J2 上臂",link:"link2",limit:360},{id:"j3",label:"J3 前臂",link:"link3",limit:360},{id:"j4",label:"J4 腕1",link:"link4",limit:360},{id:"j5",label:"J5 腕2",link:"link5",limit:360},{id:"j6",label:"J6 腕3",link:"link6",limit:360}];function Cf(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}function WS(i=Ht){i.updateWorldMatrix(!0,!0);const e=new Tt;return i.traverse(t=>{if(!t.isMesh||!t.layers.isEnabled(0)||!t.geometry||!Cf(t)||t.userData.excludeFromFrame||(t.geometry.computeBoundingBox(),!t.geometry.boundingBox))return;const n=t.geometry.boundingBox.clone().applyMatrix4(t.matrixWorld);t.userData.viewClipBounds&&n.intersect(t.userData.viewClipBounds),e.union(n)}),e}function XS(i,e,t,n,s=1.28){const r=i.getCenter(new I),o=i.getSize(new I),a=n.clone().normalize(),c=new I().crossVectors(new I(0,1,0),a).normalize(),l=new I().crossVectors(a,c).normalize(),u=Math.tan(Ze.degToRad(t)/2)/s,h=u*Math.max(e,.1);let d=.1;for(const g of[i.min.x,i.max.x])for(const _ of[i.min.y,i.max.y])for(const m of[i.min.z,i.max.z]){const p=new I(g,_,m).sub(r),S=p.dot(a);d=Math.max(d,S+Math.abs(p.dot(c))/h,S+Math.abs(p.dot(l))/u)}const f=Math.max(o.length()/2,.1);return{center:r,position:r.clone().addScaledVector(a,d),distance:d,radius:f}}function $s(i=Ht,e=!1,t=null){const n=WS(i);if(n.isEmpty())return;const s=Ft==="integrated"&&i===Ht;let r=s?new I(.44,.94,1.55):new I(.42,.4,1.25);Ft==="five-axis"&&(r=new I(-.87,.5,1.05));const o=t||(e?fn.position.clone().sub(xt.target):r);Math.abs(o.clone().normalize().y)>.98&&o.set(1,.7,1.35);const a=XS(n,fn.aspect,fn.fov,o,s?1.13:1.2),c=xt.enableDamping;xt.enableDamping=!1,xt.update(),fn.position.copy(a.position),xt.target.copy(a.center),xt.cursor.copy(a.center),xt.minDistance=Math.max(a.radius*.015,.03),xt.maxDistance=Math.max(a.radius*15,30),fn.near=Math.max(.005,a.radius/1e3),fn.far=Math.max(100,a.radius*60),fn.updateProjectionMatrix(),xt.update(),xt.enableDamping=c,_n.frameBounds={min:n.min.toArray(),max:n.max.toArray()},_n.cameraTarget=xt.target.toArray(),Vt()}function qS(i){const e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&e.add(s.geometry);for(const r of Array.isArray(s.material)?s.material:s.material?[s.material]:[]){t.add(r);for(const o of Object.values(r))o!=null&&o.isTexture&&n.add(o)}}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function Ir(){_n.version=Pr,_n.pending=pn,_n.failed=[...bn];const i=document.querySelector("#scene-status");(pn||bn.length||!De)&&(i.textContent=pn?`正在加载 ${pn} 个模型…`:bn.length?`${bn.length} 个模型加载失败：${bn.join("、")}`:"模型装配中…"),i.classList.toggle("loading-error",bn.length>0);const e=pn>0||bn.length>0;if(document.querySelector("#work-play").disabled=e,document.querySelector("#work-timeline").disabled=e,document.querySelectorAll("[data-work-view]").forEach(t=>{t.disabled=e}),!pn&&!bn.length)try{KS()}catch(t){bn.push("组合工艺装配"),console.error("组合工艺装配失败",t),Ir();return}fS(Ht,Ft),De==null||De.focusDevice(ua.find(t=>t.id===Ft).deviceId),_n.view=Ft,_n.devices=Ht.children.filter(t=>t.userData.deviceRoot&&t.visible).map(t=>({name:t.userData.name,deviceId:t.userData.deviceId,assetPath:t.userData.assetPath})),pn||pa.update(!0)}xt.addEventListener("start",()=>{is=!0,Vt()});function jS(){const i=Xr.get(da);!i||Ve.playing||(i.reset(),na(),Vt())}function na(){const i=Xr.get(da);if(!i||!document.querySelector("#kinematic-debug").open)return;const e=i.getJointAngles();gl.forEach(({id:t},n)=>{const s=document.getElementById(t);if(!s)return;const r=Math.round(Ze.radToDeg(e[n]));s.value=r,s.disabled=Ve.playing,document.getElementById(t+"-value").textContent=r+"°"}),document.getElementById("reset-aubo").disabled=Ve.playing}function Pf(){const i=Xr.get(da);if(!i)return;const e=document.querySelector("#joint-controls");e.innerHTML=gl.map(({id:t,label:n,limit:s})=>`<div class="joint-control"><label for="${t}">${n}<output id="${t}-value">0°</output></label><input id="${t}" type="range" min="-${s}" max="${s}" step="1" value="0"></div>`).join(""),gl.forEach(({id:t},n)=>{document.getElementById(t).addEventListener("input",s=>{Ve.playing||(i.setJoint(n,Ze.degToRad(Number(s.target.value))),na(),Vt())})}),na()}function YS(i,e,t,n,s,r,o=US.clone(),a={}){const c=Pr,l=dn.get(r);return pn+=1,Ir(),NS.load(i,u=>{var g,_,m;const h=u.scene;if(c!==Pr){qS(h);return}(g=a.prepare)==null||g.call(a,h);const d=new ct,f=new ct;if(f.name="display-normalization",f.add(h),d.add(f),a.scale&&d.scale.setScalar(a.scale),a.rotation&&d.rotation.set(...a.rotation),a.normalizeToFloor){d.updateWorldMatrix(!0,!0);const p=a.floorReference&&VS(h,a.floorReference)||d,S=new Tt().setFromObject(p,!0),y=S.getCenter(new I),x=new I(-y.x,-S.min.y,-y.z);f.position.copy(x.applyMatrix4(d.matrixWorld.clone().invert()))}if(d.position.set(e[0]+o.x,e[1]+o.y,e[2]+o.z),d.userData={...d.userData,...a.metadata,name:t,state:n,groupId:s,deviceRoot:!0,deviceId:a.deviceId||r||t,assetPath:i},d.traverse(p=>{Object.assign(p.userData,{state:n,groupId:s}),p.isMesh&&(p.castShadow=!p.userData.measurementEnvelope,p.receiveShadow=!p.userData.measurementEnvelope)}),Ht.add(d),l&&(l.visible=!1),dn.set(a.deviceId||r||t,d),(_=a.motion)!=null&&_.type&&!a.deferMotion)try{HS(d,a.motion)}catch(p){bn.push(t+"（运动装配）"),console.error("Motion binding failed",t,p)}if(a.kinematicsCandidate){da=d;const p=document.querySelector("#kinematic-debug");p&&p.classList.remove("hidden"),document.querySelector("#joint-controls").innerHTML='<p class="kinematic-note">展开后可检查候选关节映射。</p>',document.querySelector("#kinematic-debug").open&&Pf()}(m=a.onLoaded)==null||m.call(a,d),pn-=1,Ir(),Vt(),!pn&&!is&&$s(Ht)},void 0,u=>{c===Pr&&(pn-=1,bn.push(t),Ir(),!pn&&!is&&$s(Ht),console.warn(`Model unavailable: ${i}`,u))})}function KS(){if(De||pn||bn.length)return;const i={cnc:dn.get("integrated-cnc"),haas:dn.get("integrated-haas"),fiveAxis:dn.get("integrated-five-axis")},e=dn.get("integrated-ring"),t=dn.get("integrated-brt"),n=dn.get("integrated-warehouse");if(Object.values(i).some(l=>!l)||!e||!n||!t)return;const s={cnc:dn.get("loader-arm-cnc"),haas:dn.get("loader-arm-haas"),fiveAxis:dn.get("loader-arm-five-axis")},r=dn.get("warehouse-arm-aubo");if(Object.values(s).some(l=>!l)||!r)return;const o={},a={cnc:Go(i.cnc,"cnc"),haas:Go(i.haas,"haas"),fiveAxis:Go(i.fiveAxis,"vmc")};Sf={cnc:a.cnc,haas:a.haas,"five-axis":a.fiveAxis},nl(e,"ring",o),nl(n,"warehouse",o);const c=Xy(i,s,o.storage.ring);De=IS({world:Ht,machines:a,storage:o.storage,stations:c,brt:t,warehouseArm:r}),wf(),qr(),Vt(2)}function $S({mode:i,source:e,snapshot:t,time:n,origin:s}){if(!De)return;const r=e==="field";if(r!==ed&&(ed=r,r&&De.update(0),Ht.traverse(a=>{a.userData.role==="combined-workpiece"&&(a.visible=!r)}),!r)){for(const a of ii.values())On.remove(a);ii.clear()}if(r){const a=new Map;for(const c of(t==null?void 0:t.events)??[])c.confirmed&&c.position&&c.workpieceId&&a.set(c.workpieceId,c);for(const[c,l]of ii)a.has(c)||(On.remove(l),ii.delete(c));for(const[c,l]of a){if(!ii.has(c)){const d=new Je(BS,kS);d.name=c,On.add(d),ii.set(c,d)}const u=ii.get(c);u.position.fromArray(l.position);const h=l.deviceId.replace(/-buffer$/,"").replace("fiveAxis","five-axis");u.visible=Ft==="integrated"||h===Ft}}else i==="history"&&Number.isFinite(n)&&Number.isFinite(s)&&(De.update((n-s)/1e3),pa.update(!0));const o=document.querySelector("#scene-status");o.textContent=r?"设备 CAD 参考姿态 · "+(ii.size?"工件按最近确认坐标定位":"暂无确认坐标"):i==="history"?"离线演示历史 · 机构姿态按所选时刻计算":"本地模型就绪 · 工艺动作来自离线演示",_n.operator={mode:i,source:e,time:n,scenePhase:r?null:De.state.phase,fieldMarkers:[...ii.values()].map(a=>({id:a.name,position:a.position.toArray()}))},Vt(1)}function Ql(){const i=document.querySelector("#combined-panel"),e=Ft==="integrated"&&De;if(i.hidden=!e,!e)return;const t=De.state,n=document.querySelector("#combined-station");n.value=De.selectedStation,n.disabled=Ve.playing,document.querySelector("#combined-phase").textContent=Os(t.phase),document.querySelector("#combined-location").textContent=Tf("integrated",t),document.querySelector("#combined-play").textContent=Ve.playing?"暂停组合流程":Ve.elapsed>=De.duration?"重新播放":"播放组合流程";const s=De.selectedStation+"/"+t.trace.length;s!==Qh&&(Qh=s,document.querySelector("#combined-trace").replaceChildren(...t.trace.slice(-6).reverse().map(r=>{const o=document.createElement("li");return o.textContent=r.time.toFixed(1)+" 秒 · "+r.event+" · "+r.detail,o})))}function Zs(i,e="push"){const t=pf(i);Ft=t;const n=new URL(location.href);n.searchParams.set("group",t),n.searchParams.delete("mode"),n.href!==location.href&&e!=="none"&&(e==="replace"?history.replaceState(null,"",n):history.pushState(null,"",n)),Ri=null,is=!1,_n.focusedDevice=null,document.querySelector("#selection-card").classList.add("hidden"),document.title=ua.find(s=>s.id===t).label+" · 数字孪生",document.querySelectorAll("[data-group]").forEach(s=>{const r=s.dataset.group===t;s.classList.toggle("selected",r),r?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")}),pa.show(t),ZS(t),Zh||(Zh=!0,Pr+=1,lS("integrated",YS,new I)),Ir(),$s(Ht),Ql(),qr(),Vt()}function ZS(i){document.querySelector("#production-stock").hidden=i!=="integrated"&&i!=="warehouse",document.querySelector("#machine-views").classList.toggle("hidden",i!=="integrated"),document.querySelectorAll("[data-view-group]").forEach(n=>{n.hidden=n.dataset.viewGroup!==i});const e=ua.find(n=>n.id===i);document.querySelector("#group-title").textContent=e.label,document.querySelector("#group-description").textContent=e.description;const t=document.querySelector("#group-state");t.textContent=e.status==="mixed"?"替代 / 参考":e.status==="partial"?"含占位":"模型已载入",t.className=`state-badge ${e.status}`,document.querySelector("#asset-count").textContent=`${e.assets.length} 项`,document.querySelector("#asset-list").innerHTML=e.assets.map(n=>{var s;return`<div class="asset-row"><span class="asset-dot ${n.state}"></span><div class="asset-main"><strong>${n.name}</strong><small>${n.source}</small>${(s=n.motion)!=null&&s.evidence?`<small class="motion-evidence">父子/运动：${n.motion.evidence}</small>`:""}</div><span class="asset-dim">${n.dimensions}</span><span class="asset-state ${n.state}">${yf[n.state]}</span></div>`}).join("")}function JS(){const i=document.querySelector("#group-list");i.innerHTML=ua.map(e=>`<a class="group-button" href="?group=${e.id}" data-group="${e.id}"><strong>${e.label}</strong><span class="group-chevron" aria-hidden="true">›</span></a>`).join(""),i.addEventListener("click",e=>{const t=e.target.closest("a[data-group]");!t||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),Zs(t.dataset.group))})}function eu(){const i=Math.max(1,ea.clientWidth),e=Math.max(1,ea.clientHeight);fn.aspect=i/e,fn.updateProjectionMatrix(),jt.setSize(i,e,!1),!is&&Ht.children.length&&$s(Ht),Vt()}const QS=MS(),pa=xS({workpieceAt:()=>{var e;const i=De==null?void 0:De.state;return i?(e=Ef(Ft,i))==null?void 0:e.id:null},controllerFor:i=>Sf[i]||Xr.get(dn.get(i)),playing:()=>Ve.playing,restart:fa}),eb=document.querySelector("#combined-station");for(const[i,e]of Object.entries(Jl))eb.add(new Option(e.label,i));pi=dM({runtime:()=>De,playback:()=>Ve,view:()=>Ft,focus:Zs,camera:DS,setDemoTime:Fi,pauseDemo(){Ve.playing=!1,Ks()},paintScene:$S,startDelay(){if(!De)return;Ve.playing=!1,De.setStation("fiveAxis-delay");const i=De.operations,e=i.records.find(t=>t.deviceId==="fiveAxis"&&t.phase==="readWait");Fi(e?(e.time-i.originTime)/1e3+1:0),Ks(),Zs("five-axis")}});window.addEventListener("resize",eu);eu();JS();const tb=new URLSearchParams(location.search).get("group");Zs(tb,"replace");window.addEventListener("popstate",()=>Zs(new URLSearchParams(location.search).get("group"),"none"));window.addEventListener("storage",i=>{i.key===ta.key&&wf()});new ResizeObserver(eu).observe(ea);document.querySelector("#machine-views").addEventListener("click",i=>{var t;const e=(t=i.target.closest("[data-work-view]"))==null?void 0:t.dataset.workView;e&&Zs(e)});document.querySelector("#reset-view").addEventListener("click",()=>{is=!1,Ri=null,_n.focusedDevice=null,$s(Ht),document.querySelector("#selection-card").classList.add("hidden")});document.querySelector("#toggle-grid").addEventListener("click",i=>{Cr.visible=!Cr.visible,i.currentTarget.classList.toggle("active",Cr.visible),Vt()});document.querySelector("#reset-aubo").addEventListener("click",jS);document.querySelector("#work-play").addEventListener("click",Af);document.querySelector("#work-reset").addEventListener("click",()=>{fa(),Ks()});document.querySelector("#work-timeline").addEventListener("input",i=>{Ve.playing=!1,Fi(Number(i.target.value)),Ks()});document.querySelector("#kinematic-debug").addEventListener("toggle",i=>{i.currentTarget.open&&Pf()});document.querySelector("#combined-station").addEventListener("change",i=>{if(Ft!=="integrated"||!De||Ve.playing)return;const e=i.target.value;fa(),De.setStation(e),Fi(0),Ks()});document.querySelector("#combined-play").addEventListener("click",Af);document.querySelector("#combined-recover").addEventListener("click",()=>{var i;(i=De==null?void 0:De.recover)!=null&&i.call(De)&&(Ql(),Vt())});qr();function Lf(i){const e=jt.domElement.getBoundingClientRect(),t=new pe((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),n=new Yd;n.setFromCamera(t,fn);const s=n.intersectObjects(Ht.children,!0).filter(r=>r.object.isMesh&&r.object.layers.isEnabled(0)&&!r.object.userData.measurementEnvelope&&Cf(r.object)&&(!r.object.userData.viewClipBounds||r.object.userData.viewClipBounds.containsPoint(r.point)));for(const r of s)for(let o=r.object;o&&o!==Ht;o=o.parent)if(o.userData.deviceRoot)return{object:o,point:r.point};return null}function If(i){const e=i.userData,t=document.querySelector("#selection-card");t.replaceChildren();const n=document.createElement("strong");n.textContent=e.name;const s=document.createElement("span");s.textContent=yf[e.state]||"场景对象";const r=document.createElement("span");r.textContent=Ri===i?"已聚焦 · 围绕本设备旋转":"双击设备以聚焦",t.append(n,s,r),t.classList.remove("hidden")}let Wo=null;jt.domElement.addEventListener("pointerdown",i=>{Wo={x:i.clientX,y:i.clientY}});jt.domElement.addEventListener("click",i=>{if(Wo&&Math.hypot(i.clientX-Wo.x,i.clientY-Wo.y)>5)return;const e=Lf(i);e&&If(e.object)});jt.domElement.addEventListener("dblclick",i=>{const e=Lf(i);e&&(Ri=e.object,is=!0,$s(Ri,!0),_n.focusedDevice=Ri.userData.deviceId||Ri.userData.name,If(Ri))});jt.domElement.addEventListener("contextmenu",i=>i.preventDefault());Vt();
